"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useApp } from "@/components/AppContext";
import { QuestionView } from "@/components/questions/QuestionView";
import { PageHeader, Spinner } from "@/components/ui";
import { emptyAnswer, gradeAnswer, isAnswered, type Answer } from "@/lib/engine/grade";
import type { Concrete } from "@/lib/engine/types";
import { supabase } from "@/lib/supabase/client";

type Duel = { id: string; code: string; questions: Concrete[] };
type Res = { user_id: string; display_name: string; score: number; total: number; seconds: number | null };

export default function DuelPage() {
  const { code } = useParams<{ code: string }>();
  const { profile } = useApp();
  const [duel, setDuel] = useState<Duel | null | undefined>(undefined);
  const [results, setResults] = useState<Res[]>([]);
  const [idx, setIdx] = useState(0);
  const [ans, setAns] = useState<Answer>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [playing, setPlaying] = useState(false);
  const t0 = useRef(0);

  async function loadResults(id: string) {
    const { data } = await supabase().from("duel_results").select("user_id,display_name,score,total,seconds").eq("duel_id", id);
    setResults(((data ?? []) as Res[]).sort((a, b) => b.score - a.score || (a.seconds ?? 1e9) - (b.seconds ?? 1e9)));
    return (data ?? []) as Res[];
  }

  useEffect(() => {
    supabase().from("duels").select("id,code,questions").eq("code", code.toUpperCase()).maybeSingle().then(async ({ data }) => {
      if (!data) return setDuel(null);
      const d = data as Duel;
      setDuel(d);
      const r = await loadResults(d.id);
      if (!r.some((x) => x.user_id === profile.id)) {
        setAns(emptyAnswer(d.questions[0]));
        t0.current = Date.now();
        setPlaying(true);
      }
    });
  }, [code, profile.id]);

  if (duel === undefined) return <Spinner />;
  if (duel === null) return <div className="card">Kein Duell mit diesem Code. <Link className="text-brand" href="/freunde">Zurück</Link></div>;

  const q = duel.questions[idx];
  const last = idx + 1 >= duel.questions.length;

  async function next(gained: number) {
    if (!duel) return;
    if (last) {
      setPlaying(false);
      await supabase().from("duel_results").insert({ duel_id: duel.id, display_name: profile.display_name, score: Math.round(gained * 10) / 10, total: duel.questions.length, seconds: Math.round((Date.now() - t0.current) / 1000) });
      await loadResults(duel.id);
    } else {
      setIdx(idx + 1);
      setAns(emptyAnswer(duel.questions[idx + 1]));
      setRevealed(false);
    }
  }

  if (playing && q)
    return (
      <div className="space-y-4">
        <p className="text-sm text-muted">Duell {duel.code} · Frage {idx + 1}/{duel.questions.length} · {Math.round(score * 10) / 10} Punkte</p>
        <div className="card space-y-4">
          <QuestionView key={idx} q={q} value={ans} onChange={setAns} reveal={revealed} />
          {revealed && q.explanation && <p className="rounded-xl bg-brandsoft p-3 text-sm">💡 {q.explanation}</p>}
        </div>
        {!revealed ? (
          <button className="btn btn-primary w-full" disabled={!isAnswered(q, ans)} onClick={() => { setScore((s) => s + gradeAnswer(q, ans).score); setRevealed(true); }}>Prüfen</button>
        ) : (
          <button className="btn btn-primary w-full" onClick={() => next(score)}>{last ? "Fertig" : "Weiter"}</button>
        )}
      </div>
    );

  return (
    <div className="space-y-4">
      <PageHeader title={`Duell ${duel.code}`} sub="Teile den Code mit deinen Freunden." back={{ href: "/freunde", label: "Freunde" }} />
      <div className="card space-y-2">
        <h2 className="h2">Ergebnisse</h2>
        {results.length === 0 && <p className="text-sm text-muted">Noch keine Ergebnisse.</p>}
        <ol className="space-y-1">
          {results.map((r, i) => (
            <li key={r.user_id} className={`flex items-center gap-3 rounded-xl px-3 py-2 ${r.user_id === profile.id ? "bg-brandsoft" : "bg-surface2"}`}>
              <span className="w-6 text-center font-bold">{i + 1}</span>
              <span className="flex-1 truncate">{r.display_name}</span>
              <span className="tabular-nums">{r.score}/{r.total}</span>
              <span className="w-14 text-right text-xs text-muted">{r.seconds}s</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
