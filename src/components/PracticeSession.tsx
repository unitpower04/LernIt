"use client";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useApp } from "@/components/AppContext";
import { QuestionView } from "@/components/questions/QuestionView";
import { Spinner } from "@/components/ui";
import type { QType } from "@/lib/content/schema";
import { scopeLabel, topicIdsInScope, scopeToParam, type Scope } from "@/lib/data/types";
import { drawConcrete, fetchByIds, fetchPool } from "@/lib/data/pool";
import { caseScore, emptyAnswer, gradeAnswer, isAnswered, type Answer, type CaseAns } from "@/lib/engine/grade";
import type { Concrete, Grade, RawQuestion, RawTemplate } from "@/lib/engine/types";
import { MODE_BY_KEY, SPECIAL_MODES } from "@/lib/modes";
import { loadProgress } from "@/lib/progress";
import { makeRng, randomSeed } from "@/lib/rng";
import { supabase } from "@/lib/supabase/client";

type Result = { q: Concrete; a: Answer; g: Grade };

export function saveAnswer(q: Concrete, g: Grade, seconds: number, mode: string) {
  return supabase()
    .from("answers")
    .insert({
      topic_id: q.topicId,
      source_kind: q.ref.kind,
      source_id: q.ref.id,
      q_type: q.type,
      exam_part: q.examPart,
      correct: g.correct,
      score: g.score,
      seconds: Math.round(seconds),
      mode,
    })
    .then(({ error }) => {
      if (error) console.warn("Antwort nicht gespeichert:", error.message);
    });
}

export function PracticeSession({ mode, scope, part, n: nParam }: { mode: string; scope: Scope; part: number | null; n: number | null }) {
  const { tree } = useApp();
  const [queue, setQueue] = useState<Concrete[] | null>(null);
  const [idx, setIdx] = useState(0);
  const [answer, setAnswer] = useState<Answer>(null);
  const [revealed, setRevealed] = useState(false);
  const [grade, setGrade] = useState<Grade | null>(null);
  const [results, setResults] = useState<Result[]>([]);
  const [run, setRun] = useState(0);
  const t0 = useRef(Date.now());

  const def = MODE_BY_KEY[mode];
  const special = SPECIAL_MODES[mode as keyof typeof SPECIAL_MODES];
  const title = def?.label ?? special?.label ?? "Üben";
  const n = nParam ?? def?.n ?? special?.n ?? 10;

  const start = useCallback(
    async (fixed?: Concrete[]) => {
      setQueue(null);
      setIdx(0);
      setResults([]);
      setRevealed(false);
      setGrade(null);
      const sb = supabase();
      let q: Concrete[];
      if (fixed) {
        q = fixed.map((c) => ({ ...c, seed: randomSeed() }));
      } else {
        const rng = makeRng(randomSeed());
        const topicIds = topicIdsInScope(tree, scope);
        if (mode === "fehlerkiste") {
          const { data } = await sb.from("my_wrong_items").select("source_kind,source_id,topic_id").eq("correct", false);
          const rows = ((data ?? []) as { source_kind: "question" | "template"; source_id: string; topic_id: string }[]).filter((r) => topicIds.includes(r.topic_id));
          const [qs, ts] = await Promise.all([
            fetchByIds(sb, "question", rows.filter((r) => r.source_kind === "question").map((r) => r.source_id)),
            fetchByIds(sb, "template", rows.filter((r) => r.source_kind === "template").map((r) => r.source_id)),
          ]);
          q = drawConcrete({ questions: qs as RawQuestion[], templates: ts as RawTemplate[] }, n, rng);
        } else {
          const types: QType[] | undefined = def?.types ?? (mode === "gemischt" || mode === "tagesquiz" ? ["mc", "tf", "match", "order", "cloze", "calc", "booking", "error", "ad"] : undefined);
          const pool = await fetchPool(sb, { topicIds, part, types });
          let weight: ((id: string) => number) | undefined;
          if (mode === "tagesquiz") {
            const prog = await loadProgress(sb, tree);
            weight = (id) => 0.15 + (1 - (prog[id]?.mastery ?? 0));
          }
          q = drawConcrete(pool, n, rng, weight);
        }
      }
      setAnswer(q[0] ? emptyAnswer(q[0]) : null);
      t0.current = Date.now();
      setQueue(q);
    },
    [tree, scope, part, mode, n, def],
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    start();
  }, [start, run]);

  const cur = queue?.[idx];
  const done = !!queue && idx >= queue.length;

  function check() {
    if (!cur) return;
    const g = gradeAnswer(cur, answer);
    setGrade(g);
    setRevealed(true);
    if (cur.type !== "case") saveAnswer(cur, g, (Date.now() - t0.current) / 1000, mode);
  }

  function next() {
    if (!cur || !grade) return;
    let g = grade;
    if (cur.type === "case") {
      const s = caseScore(cur.body, answer as CaseAns);
      g = { score: s, correct: s >= 0.6 };
      saveAnswer(cur, g, (Date.now() - t0.current) / 1000, mode);
    }
    setResults((r) => [...r, { q: cur, a: answer, g }]);
    const ni = idx + 1;
    setIdx(ni);
    setRevealed(false);
    setGrade(null);
    if (queue && queue[ni]) setAnswer(emptyAnswer(queue[ni]));
    t0.current = Date.now();
  }

  const backHref = `/lernen?scope=${scopeToParam(scope)}`;
  const wrong = useMemo(() => results.filter((r) => !r.g.correct), [results]);

  if (!queue) return <Spinner text="Aufgaben werden zusammengestellt …" />;

  if (queue.length === 0)
    return (
      <div className="card space-y-3 text-center">
        <p className="font-medium">
          {mode === "fehlerkiste" ? "Deine Fehlerkiste ist leer – stark! 🎉" : "Für diese Auswahl gibt es (noch) keine Aufgaben dieses Typs."}
        </p>
        <Link className="btn btn-primary" href={backHref}>Andere Auswahl</Link>
      </div>
    );

  if (done) {
    const pts = results.reduce((s, r) => s + r.g.score, 0);
    const pct = Math.round((pts / results.length) * 100);
    return (
      <div className="space-y-4">
        <div className="card text-center">
          <p className="text-4xl font-bold">{pct} %</p>
          <p className="text-muted">{results.filter((r) => r.g.correct).length} von {results.length} richtig – {scopeLabel(tree, scope)}</p>
        </div>
        {wrong.length > 0 && (
          <div className="card space-y-2">
            <h2 className="h2">Zum Nachschauen</h2>
            {wrong.map((r, i) => (
              <details key={i} className="rounded-xl border border-line p-3">
                <summary className="cursor-pointer text-sm font-medium">{summaryOf(r.q)}</summary>
                <div className="mt-3"><QuestionView q={r.q} value={r.a} onChange={() => {}} reveal /></div>
                {r.q.explanation && <p className="mt-2 rounded-xl bg-brandsoft p-3 text-sm">💡 {r.q.explanation}</p>}
              </details>
            ))}
          </div>
        )}
        <div className="grid gap-2 sm:grid-cols-2">
          <button className="btn btn-primary" onClick={() => setRun((x) => x + 1)}>Nochmal (neue Aufgaben)</button>
          {wrong.length > 0 && <button className="btn" onClick={() => start(wrong.map((w) => w.q))}>Nur Fehler wiederholen</button>}
          <Link className="btn sm:col-span-2" href={backHref}>Zurück</Link>
        </div>
      </div>
    );
  }

  const canCheck = isAnswered(cur!, answer);
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm text-muted">
        <Link href={backHref} className="text-brand">← Beenden</Link>
        <span>{title} · {idx + 1}/{queue.length}</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-surface2"><div className="h-full bg-brand transition-all" style={{ width: `${(idx / queue.length) * 100}%` }} /></div>
      <div className="card space-y-4">
        <div className="flex flex-wrap gap-1">
          <span className="chip">Teil {cur!.examPart}</span>
          <span className="chip">{"★".repeat(cur!.difficulty)}{"☆".repeat(3 - cur!.difficulty)}</span>
        </div>
        <QuestionView key={`${idx}-${run}`} q={cur!} value={answer} onChange={setAnswer} reveal={revealed} />
        {revealed && grade && (
          <div className={`rounded-xl p-3 text-sm ${grade.correct ? "bg-oksoft text-ok" : "bg-badsoft text-bad"}`} role="status">
            <b>{grade.correct ? "Richtig! ✓" : grade.score > 0 ? `Teilweise richtig (${Math.round(grade.score * 100)} %)` : cur!.type === "case" ? "Vergleiche mit der Musterlösung" : "Leider falsch ✗"}</b>
          </div>
        )}
        {revealed && cur!.explanation && <p className="rounded-xl bg-brandsoft p-3 text-sm">💡 {cur!.explanation}</p>}
        {revealed && cur!.source && <p className="text-xs text-muted">Quelle: {cur!.source}</p>}
      </div>
      {!revealed ? (
        <button className="btn btn-primary w-full" disabled={!canCheck} onClick={check}>Prüfen</button>
      ) : (
        <button className="btn btn-primary w-full" onClick={next}>{idx + 1 >= queue.length ? "Ergebnis ansehen" : "Weiter"}</button>
      )}
    </div>
  );
}

function summaryOf(q: Concrete): string {
  const b = q.body;
  const s: string = b.prompt ?? b.statement ?? b.situation ?? b.text ?? "Aufgabe";
  return s.length > 110 ? s.slice(0, 110) + " …" : s;
}
