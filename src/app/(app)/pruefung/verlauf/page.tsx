"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { PageHeader, Spinner } from "@/components/ui";
import type { Attempt } from "@/lib/exam/attempts";
import { BLUEPRINTS, EXAM_WEIGHT, ihkGrade, overallResult, PART_SHORT, type ExamKind } from "@/lib/exam/blueprint";
import { dateDE } from "@/lib/format";
import { supabase } from "@/lib/supabase/client";

const LABEL: Record<string, string> = { teil1: "Teil 1 – Konzepte", teil2: "Teil 2 – WiSo", teil3: "Teil 3 – Umsetzung", teil4: "Teil 4 (Gespräch)", mini: "Mini-Prüfung" };

export default function VerlaufPage() {
  const [items, setItems] = useState<Attempt[] | null>(null);
  useEffect(() => {
    supabase().from("exam_attempts").select("id,kind,status,percent,grade,started_at,finished_at,duration_sec,remaining_sec").eq("status", "finished").order("started_at", { ascending: false }).limit(500).then(({ data }) => setItems((data ?? []) as Attempt[]));
  }, []);

  const latest = useMemo(() => {
    const m: { 1?: number; 2?: number; 3?: number; 4?: number } = {};
    for (const a of items ?? []) {
      const k = a.kind === "teil1" ? 1 : a.kind === "teil2" ? 2 : a.kind === "teil3" ? 3 : a.kind === "teil4" ? 4 : null;
      if (k && m[k] === undefined && a.percent !== null) m[k] = Number(a.percent);
    }
    return m;
  }, [items]);
  const res = overallResult(latest);

  if (!items) return <Spinner />;
  return (
    <div className="space-y-5">
      <PageHeader title="Prüfungsverlauf" back={{ href: "/pruefung", label: "Prüfung" }} />

      <section className="card space-y-2" aria-label="Bestehens-Rechner">
        <h2 className="h2">Bestehens-Rechner</h2>
        <p className="text-xs text-muted">Nimmt jeweils dein letztes Ergebnis je Prüfungsbereich und rechnet mit den Gewichten der Verordnung.</p>
        {[1, 2, 3, 4].map((k) => (
          <div key={k} className="flex items-center justify-between text-sm">
            <span>Teil {k} · {PART_SHORT[k]} <span className="text-muted">({Math.round(EXAM_WEIGHT[k] * 100)} %)</span></span>
            <span className="tabular-nums">{latest[k as 1] === undefined ? "–" : `${Math.round(latest[k as 1]!)} (${ihkGrade(latest[k as 1]!).label})`}</span>
          </div>
        ))}
        <div className="border-t border-line pt-2">
          <p className="font-semibold">Gesamt: {Math.round(res.total * 10) / 10} Punkte {res.complete ? (res.passed ? "✅ bestanden" : "❌ nicht bestanden") : <span className="text-sm font-normal text-muted">(es fehlen noch Teile)</span>}</p>
          {res.complete && !res.passed && <ul className="ml-5 list-disc text-sm text-bad">{res.reasons.map((r) => <li key={r}>{r}</li>)}</ul>}
        </div>
      </section>

      <section className="space-y-2" aria-label="Alle Versuche">
        <h2 className="h2">Alle Versuche</h2>
        {items.length === 0 && <div className="card text-sm text-muted">Noch keine abgeschlossenen Prüfungen.</div>}
        {items.map((a) => (
          <Link key={a.id} href={`/pruefung/${a.id}`} className="card flex items-center justify-between gap-2">
            <div>
              <p className="font-medium">{LABEL[a.kind]}</p>
              <p className="text-xs text-muted">{dateDE(a.started_at)} · {a.kind in BLUEPRINTS ? BLUEPRINTS[a.kind as ExamKind].minutes + " Min" : ""}</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold tabular-nums">{Math.round(Number(a.percent ?? 0))}</p>
              <p className="text-xs text-muted">{a.grade}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
