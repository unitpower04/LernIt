"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import { PageHeader, Spinner } from "@/components/ui";
import { ihkGrade } from "@/lib/exam/blueprint";
import { mmss } from "@/lib/format";
import { shuffle, makeRng, randomSeed } from "@/lib/rng";
import { supabase } from "@/lib/supabase/client";
import type { Attempt } from "@/lib/exam/attempts";

type Case = { id: string; title: string; situation: string; prompts: { question: string; sample: string[] }[] };
type T4State = { caseId: string; notes: string; ratings: number[] };
const PREP = 20 * 60;
const RATES = [0, 25, 50, 75, 100];

function Inner() {
  const attemptId = useSearchParams().get("attempt");
  const [cases, setCases] = useState<Case[] | null>(null);
  const [saved, setSaved] = useState<Attempt | null>(null);
  const [phase, setPhase] = useState<"choose" | "prep" | "qa" | "done">("choose");
  const [chosen, setChosen] = useState<Case | null>(null);
  const [left, setLeft] = useState(PREP);
  const [notes, setNotes] = useState("");
  const [qi, setQi] = useState(0);
  const [showSample, setShowSample] = useState(false);
  const [ratings, setRatings] = useState<number[]>([]);
  const [result, setResult] = useState<number | null>(null);
  const endsAt = useRef(0);

  useEffect(() => {
    const sb = supabase();
    if (attemptId) {
      sb.from("exam_attempts").select("*").eq("id", attemptId).maybeSingle().then(async ({ data }) => {
        setSaved(data as Attempt);
        const cid = (data?.state as T4State | undefined)?.caseId;
        if (cid) {
          const { data: c } = await sb.from("exam_cases").select("id,title,situation,prompts").eq("id", cid).maybeSingle();
          if (c) setChosen(c as Case);
        }
        setCases([]);
      });
      return;
    }
    sb.from("exam_cases").select("id,title,situation,prompts").eq("active", true).limit(500).then(({ data }) => {
      setCases(shuffle((data ?? []) as Case[], makeRng(randomSeed())).slice(0, 2));
    });
  }, [attemptId]);

  useEffect(() => {
    if (phase !== "prep") return;
    endsAt.current = Date.now() + left * 1000;
    const t = setInterval(() => {
      const r = Math.max(0, Math.round((endsAt.current - Date.now()) / 1000));
      setLeft(r);
      if (r <= 0) setPhase("qa");
    }, 500);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  async function finish(r: number[]) {
    const pct = r.reduce((a, b) => a + b, 0) / Math.max(1, r.length);
    setResult(pct);
    setPhase("done");
    const state: T4State = { caseId: chosen!.id, notes, ratings: r };
    await supabase().from("exam_attempts").insert({
      kind: "teil4", status: "finished", seed: 0, duration_sec: PREP, remaining_sec: 0, state, percent: pct, score_points: pct, max_points: 100,
      grade: ihkGrade(pct).label, finished_at: new Date().toISOString(),
    });
  }

  if (!cases) return <Spinner />;

  if (attemptId && saved) {
    const st = saved.state as unknown as T4State;
    return (
      <div className="space-y-4">
        <PageHeader title="Fachgespräch – Ergebnis" back={{ href: "/pruefung/verlauf", label: "Verlauf" }} />
        <div className="card text-center">
          <p className="text-5xl font-bold">{Math.round(saved.percent ?? 0)}</p>
          <p className="font-semibold">{saved.grade}</p>
          <p className="mt-1 text-sm text-muted">{chosen?.title}</p>
        </div>
        {st.notes && <div className="card"><h2 className="h2">Deine Notizen</h2><p className="whitespace-pre-line text-sm">{st.notes}</p></div>}
      </div>
    );
  }

  if (phase === "choose")
    return (
      <div className="space-y-4">
        <PageHeader title="Fachgespräch (light)" sub="Wähle einen von zwei Praxisfällen – wie in der Prüfung." back={{ href: "/pruefung", label: "Prüfung" }} />
        {cases.length === 0 && <div className="card text-sm text-muted">Noch keine Praxisfälle vorhanden.</div>}
        {cases.map((c) => (
          <div key={c.id} className="card space-y-2">
            <h2 className="h2">{c.title}</h2>
            <p className="line-clamp-4 text-sm text-muted">{c.situation}</p>
            <button className="btn btn-primary w-full" onClick={() => { setChosen(c); setLeft(PREP); setPhase("prep"); }}>Diesen Fall wählen</button>
          </div>
        ))}
      </div>
    );

  if (!chosen) return null;

  if (phase === "prep")
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="h2">Vorbereitung</h1>
          <span className="rounded-lg bg-surface2 px-2 py-1 font-mono text-lg font-bold tabular-nums">{mmss(left)}</span>
        </div>
        <div className="card space-y-2">
          <h2 className="h2">{chosen.title}</h2>
          <p className="whitespace-pre-line text-sm leading-relaxed">{chosen.situation}</p>
        </div>
        <label className="label" htmlFor="notes">Notizen (Analyse, Lösungsansatz, Präsentation)</label>
        <textarea id="notes" className="input min-h-48" value={notes} onChange={(e) => setNotes(e.target.value)} />
        <button className="btn btn-primary w-full" onClick={() => setPhase("qa")}>Vorbereitung beenden → Gespräch</button>
      </div>
    );

  if (phase === "qa") {
    const p = chosen.prompts[qi];
    const rate = (v: number) => {
      const r = [...ratings, v];
      setRatings(r);
      setShowSample(false);
      if (qi + 1 >= chosen.prompts.length) finish(r);
      else setQi(qi + 1);
    };
    return (
      <div className="space-y-4">
        <p className="text-sm text-muted">Frage {qi + 1}/{chosen.prompts.length} · {chosen.title}</p>
        <details className="card text-sm"><summary className="cursor-pointer font-medium">Fall & Notizen anzeigen</summary>
          <p className="mt-2 whitespace-pre-line">{chosen.situation}</p>
          {notes && <p className="mt-2 whitespace-pre-line rounded-lg bg-surface2 p-2">{notes}</p>}
        </details>
        <div className="card space-y-2">
          <p className="chip">Prüfer fragt</p>
          <p className="text-lg font-medium">{p.question}</p>
          <p className="text-sm text-muted">Antworte laut, so als säße die Prüfungskommission vor dir. Dann vergleiche mit der Musterantwort.</p>
        </div>
        {!showSample ? (
          <button className="btn btn-primary w-full" onClick={() => setShowSample(true)}>Musterantwort zeigen</button>
        ) : (
          <>
            <div className="card space-y-1 bg-oksoft">
              <p className="font-semibold">Musterantwort (Stichpunkte)</p>
              <ul className="ml-5 list-disc text-sm">{p.sample.map((s, i) => <li key={i}>{s}</li>)}</ul>
            </div>
            <p className="text-sm font-medium">Wie gut war deine Antwort?</p>
            <div className="grid grid-cols-5 gap-1">
              {RATES.map((v) => <button key={v} className="btn !px-1" onClick={() => rate(v)}>{v} %</button>)}
            </div>
          </>
        )}
      </div>
    );
  }

  const g = ihkGrade(result ?? 0);
  return (
    <div className="space-y-4">
      <div className="card space-y-1 text-center">
        <p className="text-5xl font-bold">{Math.round(result ?? 0)}</p>
        <p className="text-lg font-semibold">{g.label} (Note {g.note})</p>
        <p className="text-xs text-muted">Selbsteinschätzung – nimm sie mit einer Prise Ehrlichkeit 😉</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Link className="btn btn-primary" href="/pruefung/teil4">Neuer Fall</Link>
        <Link className="btn" href="/pruefung">Zur Prüfung</Link>
      </div>
    </div>
  );
}

export default function Teil4Page() {
  return (
    <Suspense fallback={<Spinner />}>
      <Inner />
    </Suspense>
  );
}
