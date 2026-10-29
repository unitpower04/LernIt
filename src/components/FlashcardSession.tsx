"use client";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useApp } from "@/components/AppContext";
import { Spinner } from "@/components/ui";
import { fetchFlashcards, type Flashcard } from "@/lib/data/pool";
import { scopeToParam, topicIdsInScope, type Scope } from "@/lib/data/types";
import { makeRng, randomSeed, shuffle } from "@/lib/rng";
import { NEW_STATE, review, type CardState, type Rating } from "@/lib/srs";
import { supabase } from "@/lib/supabase/client";

type StateRow = CardState & { card_id: string; due: string };
const NEW_PER_SESSION = 10;

export function FlashcardSession({ scope, part, n }: { scope: Scope; part: number | null; n: number | null }) {
  const { tree, profile } = useApp();
  const [queue, setQueue] = useState<Flashcard[] | null>(null);
  const [states, setStates] = useState<Map<string, StateRow>>(new Map());
  const [flipped, setFlipped] = useState(false);
  const [hint, setHint] = useState(false);
  const [stats, setStats] = useState({ again: 0, hard: 0, good: 0 });
  const [total, setTotal] = useState(0);
  const [requeued, setRequeued] = useState<Set<string>>(new Set());
  const [allMode, setAllMode] = useState(false);
  const [info, setInfo] = useState({ due: 0, fresh: 0 });

  const load = useCallback(async () => {
    setQueue(null);
    const sb = supabase();
    const ids = topicIdsInScope(tree, scope).filter((id) => {
      if (!part) return true;
      const t = tree.topics.find((x) => x.id === id);
      const lf = tree.lfs.find((l) => l.id === t?.learning_field_id);
      const parts = t?.exam_parts.length ? t.exam_parts : lf?.exam_parts ?? [];
      return !parts.length || parts.includes(part);
    });
    const cards = await fetchFlashcards(sb, ids);
    const { data } = await sb.from("card_states").select("card_id,ease,interval_days,reps,lapses,due").limit(10000);
    const map = new Map<string, StateRow>(((data ?? []) as StateRow[]).map((r) => [r.card_id, r]));
    setStates(map);
    const now = Date.now();
    const rng = makeRng(randomSeed());
    const due = cards.filter((c) => map.has(c.id) && new Date(map.get(c.id)!.due).getTime() <= now).sort((a, b) => +new Date(map.get(a.id)!.due) - +new Date(map.get(b.id)!.due));
    const fresh = shuffle(cards.filter((c) => !map.has(c.id)), rng);
    setInfo({ due: due.length, fresh: fresh.length });
    const limit = n ?? 20;
    const q = allMode ? shuffle(cards, rng).slice(0, limit) : [...due, ...fresh.slice(0, NEW_PER_SESSION)].slice(0, limit);
    setTotal(q.length);
    setQueue(q);
    setFlipped(false);
    setHint(false);
    setStats({ again: 0, hard: 0, good: 0 });
    setRequeued(new Set());
  }, [tree, scope, part, n, allMode]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, [load]);

  async function rate(r: Rating) {
    if (!queue || !queue[0]) return;
    const card = queue[0];
    const prev = states.get(card.id) ?? NEW_STATE;
    const next = review(prev, r);
    const sb = supabase();
    sb.from("card_states").upsert({ user_id: profile.id, card_id: card.id, ...next }).then(({ error }) => error && console.warn(error.message));
    sb.from("answers").insert({
      topic_id: card.topic_id, source_kind: "card", source_id: card.id, q_type: "card",
      correct: r === "good", score: r === "good" ? 1 : r === "hard" ? 0.5 : 0, mode: "karten",
    }).then(({ error }) => error && console.warn(error.message));
    setStates(new Map(states).set(card.id, { ...next, card_id: card.id }));
    setStats((s) => ({ ...s, [r]: s[r] + 1 }));
    let rest = queue.slice(1);
    if (r === "again" && !requeued.has(card.id)) {
      rest = [...rest, card];
      setRequeued(new Set(requeued).add(card.id));
      setTotal((t) => t + 1);
    }
    setQueue(rest);
    setFlipped(false);
    setHint(false);
  }

  const back = `/lernen?scope=${scopeToParam(scope)}`;
  if (!queue) return <Spinner />;

  if (queue.length === 0) {
    const finished = stats.again + stats.hard + stats.good > 0;
    return (
      <div className="card space-y-3 text-center">
        {finished ? (
          <>
            <p className="text-2xl font-bold">Geschafft! 🎉</p>
            <p className="text-muted">Gewusst: {stats.good} · Unsicher: {stats.hard} · Nicht gewusst: {stats.again}</p>
          </>
        ) : (
          <p className="font-medium">{info.due + info.fresh === 0 && !allMode ? "Heute ist nichts fällig – oder es gibt hier noch keine Karten." : "Keine Karten gefunden."}</p>
        )}
        <div className="grid gap-2 sm:grid-cols-2">
          <button className="btn btn-primary" onClick={() => { setAllMode(true); if (allMode) load(); }}>Alle Karten durchgehen</button>
          {finished && !allMode && <button className="btn" onClick={load}>Noch eine Runde</button>}
          <Link className="btn sm:col-span-2" href={back}>Zurück</Link>
        </div>
      </div>
    );
  }

  const card = queue[0];
  const done = total - queue.length;
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm text-muted">
        <Link href={back} className="text-brand">← Beenden</Link>
        <span>Karteikarten · {Math.min(done + 1, total)}/{total}{allMode ? "" : ` · ${info.due} fällig`}</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-surface2"><div className="h-full bg-brand transition-all" style={{ width: `${(done / Math.max(total, 1)) * 100}%` }} /></div>
      <button type="button" onClick={() => setFlipped((f) => !f)} aria-label={flipped ? "Vorderseite zeigen" : "Antwort aufdecken"}
        className="card flex min-h-64 w-full flex-col items-center justify-center gap-3 text-center text-lg">
        <span className="chip">{flipped ? "Antwort" : "Frage"}</span>
        <span className="whitespace-pre-line font-medium leading-relaxed">{flipped ? card.back : card.front}</span>
        {!flipped && <span className="text-xs text-muted">Tippen zum Umdrehen</span>}
      </button>
      {!flipped && card.hint && (
        <div className="text-center">
          {hint ? <p className="text-sm text-muted">💡 {card.hint}</p> : <button className="text-sm text-brand" onClick={() => setHint(true)}>Tipp anzeigen</button>}
        </div>
      )}
      {flipped ? (
        <div className="grid grid-cols-3 gap-2">
          <button className="btn btn-bad" onClick={() => rate("again")}>Nicht gewusst</button>
          <button className="btn" style={{ background: "var(--warn-soft)", color: "var(--warn)" }} onClick={() => rate("hard")}>Unsicher</button>
          <button className="btn btn-ok" onClick={() => rate("good")}>Gewusst</button>
        </div>
      ) : (
        <button className="btn btn-primary w-full" onClick={() => setFlipped(true)}>Umdrehen</button>
      )}
    </div>
  );
}
