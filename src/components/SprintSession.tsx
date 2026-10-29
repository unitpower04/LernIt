"use client";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useApp } from "@/components/AppContext";
import { Spinner } from "@/components/ui";
import { scopeToParam, topicIdsInScope, type Scope } from "@/lib/data/types";
import { makeRng, randomSeed, shuffle } from "@/lib/rng";
import { supabase } from "@/lib/supabase/client";

type Term = { id: string; kind: "glossary" | "card"; topic_id: string | null; term: string; definition: string };
type Round = { target: Term; options: string[] };
const SECONDS = 60;

export function SprintSession({ scope }: { scope: Scope }) {
  const { tree } = useApp();
  const [terms, setTerms] = useState<Term[] | null>(null);
  const [phase, setPhase] = useState<"ready" | "run" | "done">("ready");
  const [left, setLeft] = useState(SECONDS);
  const [round, setRound] = useState<Round | null>(null);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState({ right: 0, wrong: 0 });
  const log = useRef<{ t: Term; ok: boolean }[]>([]);
  const rng = useRef(makeRng(randomSeed()));
  const deck = useRef<Term[]>([]);

  useEffect(() => {
    (async () => {
      const sb = supabase();
      const ids = topicIdsInScope(tree, scope);
      const [g, c] = await Promise.all([
        sb.from("glossary").select("id,topic_id,term,definition").eq("active", true).limit(2000),
        sb.from("flashcards").select("id,topic_id,front,back").eq("active", true).in("topic_id", ids.length ? ids : ["00000000-0000-0000-0000-000000000000"]).limit(2000),
      ]);
      const gl: Term[] = (g.data ?? []).filter((x) => scope.kind === "all" || !x.topic_id || ids.includes(x.topic_id)).map((x) => ({ id: x.id, kind: "glossary", topic_id: x.topic_id, term: x.term, definition: x.definition }));
      const cs: Term[] = (c.data ?? []).filter((x) => x.front.length <= 60).map((x) => ({ id: x.id, kind: "card", topic_id: x.topic_id, term: x.front, definition: x.back }));
      const seen = new Set<string>();
      setTerms([...gl, ...cs].filter((t) => (seen.has(t.term.toLowerCase()) ? false : seen.add(t.term.toLowerCase()))));
    })();
  }, [tree, scope]);

  const nextRound = useCallback(() => {
    if (!terms) return;
    if (!deck.current.length) deck.current = shuffle(terms, rng.current);
    const target = deck.current.pop()!;
    const others = shuffle(terms.filter((t) => t.term !== target.term), rng.current).slice(0, 3).map((t) => t.term);
    setRound({ target, options: shuffle([target.term, ...others], rng.current) });
    setPicked(null);
  }, [terms]);

  useEffect(() => {
    if (phase !== "run") return;
    const id = setInterval(() => setLeft((l) => l - 1), 1000);
    return () => clearInterval(id);
  }, [phase]);

  useEffect(() => {
    if (phase === "run" && left <= 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPhase("done");
      const rows = log.current.filter((l) => l.t.topic_id).map((l) => ({
        topic_id: l.t.topic_id, source_kind: l.t.kind === "card" ? "card" : "glossary", source_id: l.t.id, q_type: "sprint",
        correct: l.ok, score: l.ok ? 1 : 0, mode: "sprint",
      }));
      if (rows.length) supabase().from("answers").insert(rows).then(({ error }) => error && console.warn(error.message));
    }
  }, [left, phase]);

  function begin() {
    log.current = [];
    deck.current = [];
    setScore({ right: 0, wrong: 0 });
    setLeft(SECONDS);
    nextRound();
    setPhase("run");
  }

  function choose(opt: string) {
    if (!round || picked) return;
    const ok = opt === round.target.term;
    setPicked(opt);
    log.current.push({ t: round.target, ok });
    setScore((s) => ({ right: s.right + (ok ? 1 : 0), wrong: s.wrong + (ok ? 0 : 1) }));
    setTimeout(nextRound, ok ? 350 : 900);
  }

  const back = `/lernen?scope=${scopeToParam(scope)}`;
  if (!terms) return <Spinner />;
  if (terms.length < 4)
    return (
      <div className="card space-y-3 text-center">
        <p>Für den Begriffs-Sprint braucht es mindestens 4 Begriffe (Glossar oder kurze Karteikarten).</p>
        <Link className="btn btn-primary" href={back}>Zurück</Link>
      </div>
    );

  if (phase === "ready")
    return (
      <div className="card space-y-3 text-center">
        <p className="text-4xl">⏱️</p>
        <h2 className="h2">Begriffs-Sprint</h2>
        <p className="text-muted">Du siehst eine Definition – tippe den passenden Begriff. 60 Sekunden, so viele richtig wie möglich.</p>
        <button className="btn btn-primary w-full" onClick={begin}>Los!</button>
        <Link className="btn w-full" href={back}>Zurück</Link>
      </div>
    );

  if (phase === "done")
    return (
      <div className="card space-y-3 text-center">
        <p className="text-5xl font-bold">{score.right}</p>
        <p className="text-muted">richtig · {score.wrong} falsch</p>
        <button className="btn btn-primary w-full" onClick={begin}>Nochmal</button>
        <Link className="btn w-full" href={back}>Zurück</Link>
      </div>
    );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold tabular-nums" aria-live="off">{left}s</span>
        <span className="text-sm text-muted">✓ {score.right} · ✗ {score.wrong}</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-surface2"><div className="h-full bg-brand transition-all" style={{ width: `${(left / SECONDS) * 100}%` }} /></div>
      {round && (
        <>
          <div className="card text-lg font-medium leading-relaxed">{round.target.definition}</div>
          <div className="grid gap-2 sm:grid-cols-2">
            {round.options.map((o) => (
              <button key={o} className="opt" data-state={picked ? (o === round.target.term ? "right" : o === picked ? "wrong" : undefined) : undefined} onClick={() => choose(o)}>{o}</button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
