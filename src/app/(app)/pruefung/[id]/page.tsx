"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useApp } from "@/components/AppContext";
import { QuestionView } from "@/components/questions/QuestionView";
import { Spinner } from "@/components/ui";
import { applyScore, persistAttempt, recordExamAnswers, scoreExam, type Attempt, type ExamState } from "@/lib/exam/attempts";
import { BLUEPRINTS, ihkGrade, type ExamKind } from "@/lib/exam/blueprint";
import { isAnswered, type Answer } from "@/lib/engine/grade";
import { dateDE, mmss } from "@/lib/format";
import { supabase } from "@/lib/supabase/client";

export default function ExamPage() {
  const { id } = useParams<{ id: string }>();
  const [attempt, setAttempt] = useState<Attempt | null | undefined>(undefined);

  useEffect(() => {
    supabase().from("exam_attempts").select("*").eq("id", id).maybeSingle().then(({ data }) => setAttempt((data as Attempt) ?? null));
  }, [id]);

  if (attempt === undefined) return <Spinner />;
  if (attempt === null) return <div className="card">Versuch nicht gefunden. <Link className="text-brand" href="/pruefung">Zurück</Link></div>;
  if (attempt.kind === "teil4") return <Teil4Redirect id={attempt.id} />;
  if (attempt.status === "finished") return <Result attempt={attempt} onChange={setAttempt} />;
  if (attempt.status === "aborted") return <div className="card">Dieser Versuch wurde abgebrochen. <Link className="text-brand" href="/pruefung">Zurück</Link></div>;
  return <Runner attempt={attempt} onFinish={setAttempt} />;
}

function Teil4Redirect({ id }: { id: string }) {
  const router = useRouter();
  useEffect(() => {
    router.replace(`/pruefung/teil4?attempt=${id}`);
  }, [id, router]);
  return <Spinner />;
}

/* ---------------- Durchführung ---------------- */
function Runner({ attempt, onFinish }: { attempt: Attempt; onFinish: (a: Attempt) => void }) {
  const router = useRouter();
  const [state, setState] = useState<ExamState>(attempt.state as ExamState);
  const [remaining, setRemaining] = useState(attempt.remaining_sec);
  const [paused, setPaused] = useState(attempt.status === "paused");
  const [confirm, setConfirm] = useState(false);
  const endsAt = useRef(0);
  const dirty = useRef(false);
  const stateRef = useRef(state);
  const remainingRef = useRef(remaining);
  const sb = supabase();
  const bp = BLUEPRINTS[attempt.kind as ExamKind];

  useEffect(() => {
    stateRef.current = state;
  }, [state]);
  useEffect(() => {
    remainingRef.current = remaining;
  }, [remaining]);

  const save = useCallback(
    (status?: Attempt["status"]) => {
      dirty.current = false;
      return persistAttempt(sb, attempt.id, { state: stateRef.current, remaining_sec: Math.max(0, Math.round(remainingRef.current)), ...(status ? { status } : {}) });
    },
    [sb, attempt.id],
  );

  // Timer
  useEffect(() => {
    if (paused) return;
    endsAt.current = Date.now() + remainingRef.current * 1000;
    const t = setInterval(() => {
      const r = Math.max(0, Math.round((endsAt.current - Date.now()) / 1000));
      setRemaining(r);
      remainingRef.current = r;
    }, 500);
    return () => clearInterval(t);
  }, [paused]);

  // Auto-Speichern
  useEffect(() => {
    const t = setInterval(() => {
      if (dirty.current || !paused) save();
    }, 15000);
    return () => clearInterval(t);
  }, [save, paused]);
  useEffect(() => {
    const onHide = () => {
      if (document.visibilityState === "hidden") save();
    };
    document.addEventListener("visibilitychange", onHide);
    return () => document.removeEventListener("visibilitychange", onHide);
  }, [save]);

  const finish = useCallback(async () => {
    const s = stateRef.current;
    const patch = { state: s, remaining_sec: Math.round(remainingRef.current), status: "finished" as const, finished_at: new Date().toISOString(), ...applyScore(s) };
    await persistAttempt(sb, attempt.id, patch);
    await recordExamAnswers(sb, s, false);
    onFinish({ ...attempt, ...patch } as Attempt);
  }, [sb, attempt, onFinish]);

  useEffect(() => {
    if (remaining <= 0 && !paused) {
      finish();
    }
  }, [remaining, paused, finish]);

  const q = state.questions[state.idx];
  const answered = state.questions.map((qq, i) => isAnswered(qq, state.answers[i]));
  const setAnswer = (a: Answer) => {
    dirty.current = true;
    setState((s) => ({ ...s, answers: s.answers.map((x, i) => (i === s.idx ? a : x)) }));
  };
  const go = (i: number) => setState((s) => ({ ...s, idx: Math.max(0, Math.min(s.questions.length - 1, i)) }));
  const pause = async () => {
    setPaused(true);
    remainingRef.current = Math.max(0, Math.round((endsAt.current - Date.now()) / 1000));
    setRemaining(remainingRef.current);
    await save("paused");
  };
  const resume = async () => {
    setPaused(false);
    await persistAttempt(sb, attempt.id, { status: "running" });
  };
  const abort = async () => {
    if (!window.confirm("Versuch wirklich abbrechen? Der Zwischenstand geht verloren.")) return;
    await persistAttempt(sb, attempt.id, { status: "aborted" });
    router.replace("/pruefung");
  };
  const leave = async () => {
    await save(paused ? "paused" : "running");
    router.push("/pruefung");
  };

  const low = remaining < 300;
  return (
    <div className="space-y-4">
      <div className="sticky top-0 z-20 -mx-4 flex items-center justify-between gap-2 border-b border-line bg-bg/95 px-4 py-2 backdrop-blur md:-mx-8 md:px-8">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{bp.label}</p>
          <p className="text-xs text-muted">Aufgabe {state.idx + 1}/{state.questions.length} · Teil {q.examPart}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className={`rounded-lg px-2 py-1 font-mono text-lg font-bold tabular-nums ${low ? "bg-badsoft text-bad" : "bg-surface2"}`} aria-label="Verbleibende Zeit">{mmss(remaining)}</span>
          <button className="btn !min-h-9 !px-3" onClick={pause}>⏸</button>
        </div>
      </div>

      {paused ? (
        <div className="card space-y-3 text-center">
          <p className="text-3xl">⏸</p>
          <h2 className="h2">Pausiert</h2>
          <p className="text-sm text-muted">Dein Zwischenstand ist gespeichert. Restzeit: {mmss(remaining)}</p>
          <button className="btn btn-primary w-full" onClick={resume}>Fortsetzen</button>
          <button className="btn w-full" onClick={leave}>Später weitermachen</button>
          <button className="btn w-full" onClick={abort}>Abbrechen</button>
        </div>
      ) : (
        <>
          <nav aria-label="Aufgabenübersicht" className="flex flex-wrap gap-1.5">
            {state.questions.map((_, i) => (
              <button key={i} onClick={() => go(i)} aria-label={`Aufgabe ${i + 1}${answered[i] ? " beantwortet" : ""}${state.flags[i] ? " markiert" : ""}`} aria-current={i === state.idx}
                className={`h-9 w-9 rounded-lg border text-sm font-semibold ${i === state.idx ? "border-brand bg-brand text-brandfg" : answered[i] ? "border-ok/50 bg-oksoft" : "border-line bg-surface"} ${state.flags[i] ? "ring-2 ring-warn" : ""}`}>
                {i + 1}
              </button>
            ))}
          </nav>

          <div className="card space-y-4">
            <div className="flex items-center justify-between">
              <span className="chip">{q.points} Punkte</span>
              <button className="text-sm text-brand" onClick={() => { dirty.current = true; setState((s) => ({ ...s, flags: s.flags.map((f, i) => (i === s.idx ? !f : f)) })); }}>
                {state.flags[state.idx] ? "★ Markierung entfernen" : "☆ Markieren"}
              </button>
            </div>
            <QuestionView key={state.idx} q={q} value={state.answers[state.idx]} onChange={setAnswer} reveal={false} />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button className="btn" disabled={state.idx === 0} onClick={() => go(state.idx - 1)}>← Zurück</button>
            {state.idx < state.questions.length - 1 ? (
              <button className="btn btn-primary" onClick={() => go(state.idx + 1)}>Weiter →</button>
            ) : (
              <button className="btn btn-primary" onClick={() => setConfirm(true)}>Abgeben</button>
            )}
          </div>
          <div className="flex justify-between text-sm">
            <button className="text-brand" onClick={() => setConfirm(true)}>Prüfung abgeben</button>
            <button className="text-muted" onClick={abort}>Abbrechen</button>
          </div>
        </>
      )}

      {confirm && (
        <div className="fixed inset-0 z-40 flex items-end justify-center bg-black/50 p-4 sm:items-center" role="dialog" aria-modal="true" aria-label="Abgabe bestätigen">
          <div className="card w-full max-w-md space-y-3">
            <h2 className="h2">Prüfung abgeben?</h2>
            <p className="text-sm">{answered.filter(Boolean).length} von {answered.length} Aufgaben beantwortet{state.flags.some(Boolean) ? `, ${state.flags.filter(Boolean).length} markiert` : ""}.</p>
            <div className="grid grid-cols-2 gap-2">
              <button className="btn" onClick={() => setConfirm(false)}>Zurück</button>
              <button className="btn btn-primary" onClick={finish}>Abgeben</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- Auswertung ---------------- */
function Result({ attempt, onChange }: { attempt: Attempt; onChange: (a: Attempt) => void }) {
  const { tree } = useApp();
  const [state, setState] = useState<ExamState>(attempt.state as ExamState);
  const [onlyWrong, setOnlyWrong] = useState(false);
  const sb = supabase();
  const sc = scoreExam(state);
  const grade = ihkGrade(sc.percent);
  const hasCases = state.questions.some((q) => q.type === "case");

  async function setCase(i: number, a: Answer) {
    const next = { ...state, answers: state.answers.map((x, k) => (k === i ? a : x)) };
    setState(next);
  }
  async function saveCases() {
    const next = { ...state, casesSaved: true };
    setState(next);
    const patch = { state: next, ...applyScore(next) };
    await persistAttempt(sb, attempt.id, patch);
    await recordExamAnswers(sb, { ...next, questions: next.questions.filter((q) => q.type === "case"), answers: next.answers.filter((_, k) => next.questions[k].type === "case") }, true);
    onChange({ ...attempt, ...patch } as Attempt);
  }

  const topicName = (id: string) => tree.topics.find((t) => t.id === id)?.name ?? "Thema";
  const rows = Object.entries(sc.breakdown).sort((a, b) => a[1].points / a[1].max - b[1].points / b[1].max);

  return (
    <div className="space-y-4">
      <div className="card space-y-1 text-center">
        <p className="text-sm text-muted">{BLUEPRINTS[attempt.kind as ExamKind].label} · {dateDE(attempt.started_at)}</p>
        <p className="text-5xl font-bold">{Math.round(sc.percent)} <span className="text-2xl">Punkte</span></p>
        <p className="text-lg font-semibold">{grade.label} (Note {grade.note})</p>
        <p className="text-xs text-muted">{Math.round(sc.got * 10) / 10} von {sc.max} Rohpunkten · IHK-Schlüssel (100 Punkte)</p>
        <p className="text-xs text-muted">Bestanden ab 50 Punkten.</p>
      </div>

      {hasCases && !state.casesSaved && (
        <div className="card space-y-2 bg-warnsoft">
          <p className="text-sm"><b>Offene Aufgaben selbst bewerten:</b> Vergleiche deine Antwort mit der Musterlösung und hake unten im Erwartungshorizont ab, was du genannt hast. Dann speichern.</p>
          <button className="btn btn-primary w-full" onClick={saveCases}>Selbstbewertung speichern</button>
        </div>
      )}

      <section className="card space-y-2" aria-label="Ergebnis je Thema">
        <h2 className="h2">Ergebnis je Thema</h2>
        {rows.map(([id, v]) => (
          <div key={id}>
            <div className="flex justify-between text-sm"><span>{topicName(id)}</span><span className="tabular-nums text-muted">{Math.round(v.points * 10) / 10}/{v.max} P.</span></div>
            <div className="h-2 overflow-hidden rounded-full bg-surface2"><div className="h-full bg-brand" style={{ width: `${(v.points / v.max) * 100}%` }} /></div>
          </div>
        ))}
      </section>

      <section className="space-y-2" aria-label="Aufgaben im Detail">
        <div className="flex items-center justify-between">
          <h2 className="h2">Aufgaben</h2>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={onlyWrong} onChange={(e) => setOnlyWrong(e.target.checked)} /> nur Fehler</label>
        </div>
        {state.questions.map((q, i) => {
          const p = sc.per[i];
          if (onlyWrong && p.correct) return null;
          return (
            <details key={i} className="card" open={q.type === "case" && !state.casesSaved}>
              <summary className="flex cursor-pointer items-center justify-between gap-2 text-sm font-medium">
                <span>{p.correct ? "✅" : p.score > 0 ? "🟡" : "❌"} Aufgabe {i + 1}</span>
                <span className="chip">{Math.round(p.points * 10) / 10}/{q.points} P.</span>
              </summary>
              <div className="mt-3 space-y-3">
                <QuestionView q={q} value={state.answers[i]} onChange={(a) => q.type === "case" && !state.casesSaved && setCase(i, a)} reveal />
                {q.explanation && <p className="rounded-xl bg-brandsoft p-3 text-sm">💡 {q.explanation}</p>}
              </div>
            </details>
          );
        })}
      </section>
      <div className="grid grid-cols-2 gap-2">
        <Link className="btn btn-primary" href="/pruefung">Neue Prüfung</Link>
        <Link className="btn" href="/pruefung/verlauf">Verlauf</Link>
      </div>
    </div>
  );
}
