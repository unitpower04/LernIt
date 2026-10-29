"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Spinner, PageHeader } from "@/components/ui";
import { fetchPool } from "@/lib/data/pool";
import { BLUEPRINTS, type ExamKind } from "@/lib/exam/blueprint";
import { composeExam, poolSize } from "@/lib/exam/compose";
import type { Attempt } from "@/lib/exam/attempts";
import { dateDE, mmss } from "@/lib/format";
import { randomSeed } from "@/lib/rng";
import { supabase } from "@/lib/supabase/client";

const KINDS: ExamKind[] = ["teil1", "teil2", "teil3", "mini"];

export default function PruefungPage() {
  const router = useRouter();
  const [open, setOpen] = useState<Attempt[] | null>(null);
  const [counts, setCounts] = useState<Record<string, number> | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const load = useCallback(async () => {
    const sb = supabase();
    const { data } = await sb.from("exam_attempts").select("*").in("status", ["running", "paused"]).order("started_at", { ascending: false });
    setOpen((data ?? []) as Attempt[]);
    const c: Record<string, number> = {};
    for (const k of KINDS) {
      const bp = BLUEPRINTS[k];
      const p = await fetchPool(sb, { parts: bp.parts, types: bp.types });
      c[k] = poolSize(p);
    }
    setCounts(c);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, [load]);

  async function start(kind: ExamKind) {
    setBusy(kind);
    setErr(null);
    try {
      const sb = supabase();
      const bp = BLUEPRINTS[kind];
      const pool = await fetchPool(sb, { parts: bp.parts, types: bp.types });
      const seed = randomSeed();
      const questions = composeExam(kind, pool, seed);
      if (!questions.length) throw new Error("Für diesen Prüfungsteil gibt es noch keine Aufgaben.");
      const state = { questions, answers: [], idx: 0, flags: questions.map(() => false) };
      const { emptyAnswer } = await import("@/lib/engine/grade");
      state.answers = questions.map((q) => emptyAnswer(q)) as never[];
      const { data, error } = await sb
        .from("exam_attempts")
        .insert({ kind, seed, duration_sec: bp.minutes * 60, remaining_sec: bp.minutes * 60, state, status: "running" })
        .select("id")
        .single();
      if (error) throw error;
      router.push(`/pruefung/${data.id}`);
    } catch (e) {
      setErr(e instanceof Error ? e.message : (e as { message?: string }).message ?? "Fehler");
      setBusy(null);
    }
  }

  async function abort(id: string) {
    await supabase().from("exam_attempts").update({ status: "aborted" }).eq("id", id);
    load();
  }

  if (!open || !counts) return <Spinner />;
  return (
    <div className="space-y-5">
      <PageHeader title="Prüfung" sub="Original-Zeiten, jederzeit pausierbar. Jeder Durchgang ist ein neu zusammengestellter Satz." />

      {open.length > 0 && (
        <section className="space-y-2" aria-label="Laufende Versuche">
          <h2 className="h2">Fortsetzen</h2>
          {open.map((a) => (
            <div key={a.id} className="card flex items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="truncate font-medium">{a.kind === "teil4" ? "Teil 4 – Fachgespräch" : BLUEPRINTS[a.kind as ExamKind]?.label}</p>
                <p className="text-xs text-muted">Gestartet {dateDE(a.started_at)} · noch {mmss(a.remaining_sec)} · {a.status === "paused" ? "pausiert" : "läuft"}</p>
              </div>
              <div className="flex gap-1">
                <Link className="btn btn-primary !min-h-9" href={`/pruefung/${a.id}`}>Weiter</Link>
                <button className="btn !min-h-9" onClick={() => abort(a.id)} aria-label="Versuch abbrechen">✕</button>
              </div>
            </div>
          ))}
        </section>
      )}

      {err && <p role="alert" className="rounded-lg bg-badsoft p-2 text-sm text-bad">{err}</p>}

      <section className="space-y-3" aria-label="Neue Prüfung">
        {KINDS.map((k) => {
          const bp = BLUEPRINTS[k];
          const n = counts[k] ?? 0;
          return (
            <div key={k} className="card space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h2 className="h2">{bp.label}</h2>
                  <p className="text-sm text-muted">{bp.desc}</p>
                </div>
                <span className="chip shrink-0">{bp.minutes} Min</span>
              </div>
              <p className="text-xs text-muted">{bp.form} · Pool: {n} Aufgaben/Vorlagen{n < bp.count ? ` (Ziel ${bp.count} – Satz fällt kleiner aus)` : ""}</p>
              <button className="btn btn-primary w-full" disabled={!n || busy !== null} onClick={() => start(k)}>{busy === k ? "Stelle zusammen …" : "Starten"}</button>
            </div>
          );
        })}
        <div className="card space-y-2">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h2 className="h2">Teil 4 – Fachgespräch (light)</h2>
              <p className="text-sm text-muted">Praxisfall wählen, 20 Min Vorbereitung mit Notizen, dann typische Prüferfragen.</p>
            </div>
            <span className="chip shrink-0">20 + 20 Min</span>
          </div>
          <Link className="btn btn-primary w-full" href="/pruefung/teil4">Starten</Link>
        </div>
      </section>

      <Link className="btn w-full" href="/pruefung/verlauf">📈 Verlauf &amp; Bestehens-Rechner</Link>
    </div>
  );
}
