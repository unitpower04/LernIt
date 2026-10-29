"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useApp } from "@/components/AppContext";
import { PageHeader, Spinner } from "@/components/ui";
import { drawConcrete, fetchPool } from "@/lib/data/pool";
import { dateDE } from "@/lib/format";
import { makeRng, randomSeed } from "@/lib/rng";
import { supabase } from "@/lib/supabase/client";

type Row = { display_name: string; answered: number; correct: number; streak: number; is_me: boolean };
type Duel = { id: string; code: string; created_at: string };

const CODE_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const newCode = () => Array.from({ length: 6 }, () => CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]).join("");

export default function FreundePage() {
  const { profile } = useApp();
  const router = useRouter();
  const [days, setDays] = useState(7);
  const [rows, setRows] = useState<Row[] | null>(null);
  const [duels, setDuels] = useState<Duel[]>([]);
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRows(null);
    supabase().rpc("leaderboard", { p_days: days }).then(({ data }) => setRows((data ?? []) as Row[]));
  }, [days]);
  useEffect(() => {
    supabase().from("duels").select("id,code,created_at").order("created_at", { ascending: false }).limit(8).then(({ data }) => setDuels((data ?? []) as Duel[]));
  }, []);

  async function createDuel() {
    setBusy(true);
    setErr(null);
    try {
      const sb = supabase();
      const pool = await fetchPool(sb, { types: ["mc", "tf", "match", "cloze", "calc", "order", "error"] });
      const qs = drawConcrete(pool, 10, makeRng(randomSeed()));
      if (qs.length < 3) throw new Error("Zu wenige Aufgaben für ein Duell.");
      const c = newCode();
      const { error } = await sb.from("duels").insert({ code: c, questions: qs });
      if (error) throw error;
      router.push(`/duell/${c}`);
    } catch (e) {
      setErr(e instanceof Error ? e.message : (e as { message?: string }).message ?? "Fehler");
      setBusy(false);
    }
  }

  return (
    <div className="space-y-5">
      <PageHeader title="Mit Freunden" sub="Rangliste, Duelle und Lern-Streak" />

      <section className="card space-y-3" aria-label="Duell">
        <h2 className="h2">⚔️ Duell</h2>
        <p className="text-sm text-muted">Gleiche 10 Fragen für alle – Code teilen, Ergebnisse vergleichen.</p>
        <button className="btn btn-primary w-full" disabled={busy} onClick={createDuel}>{busy ? "Erstelle …" : "Neues Duell starten"}</button>
        <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); if (code.trim()) router.push(`/duell/${code.trim().toUpperCase()}`); }}>
          <input className="input" placeholder="Duell-Code" aria-label="Duell-Code" value={code} onChange={(e) => setCode(e.target.value)} autoCapitalize="characters" />
          <button className="btn">Beitreten</button>
        </form>
        {err && <p role="alert" className="text-sm text-bad">{err}</p>}
        {duels.length > 0 && (
          <div className="space-y-1 text-sm">
            <p className="font-medium">Letzte Duelle</p>
            {duels.map((d) => <Link key={d.id} href={`/duell/${d.code}`} className="flex justify-between rounded-lg bg-surface2 px-3 py-2"><b>{d.code}</b><span className="text-muted">{dateDE(d.created_at)}</span></Link>)}
          </div>
        )}
      </section>

      <section className="card space-y-2" aria-label="Rangliste">
        <div className="flex items-center justify-between">
          <h2 className="h2">🏆 Rangliste</h2>
          <select className="input !min-h-9 !w-auto" aria-label="Zeitraum" value={days} onChange={(e) => setDays(Number(e.target.value))}>
            <option value={7}>7 Tage</option>
            <option value={30}>30 Tage</option>
            <option value={365}>Gesamt</option>
          </select>
        </div>
        {!profile.show_in_leaderboard && <p className="rounded-lg bg-warnsoft p-2 text-xs">Du bist für andere unsichtbar. <Link className="text-brand underline" href="/einstellungen">In den Einstellungen</Link> kannst du dich freischalten.</p>}
        {!rows ? <Spinner /> : rows.length === 0 ? <p className="text-sm text-muted">Noch niemand dabei.</p> : (
          <ol className="space-y-1">
            {rows.map((r, i) => (
              <li key={i} className={`flex items-center gap-3 rounded-xl px-3 py-2 ${r.is_me ? "bg-brandsoft" : "bg-surface2"}`}>
                <span className="w-6 text-center font-bold">{i + 1}</span>
                <span className="flex-1 truncate font-medium">{r.display_name}{r.is_me ? " (du)" : ""}</span>
                <span className="text-xs text-muted">🔥 {r.streak}</span>
                <span className="w-24 text-right text-sm tabular-nums">{r.correct}/{r.answered} ✓</span>
              </li>
            ))}
          </ol>
        )}
        <p className="text-xs text-muted">Gewertet wird die Zahl richtiger Antworten im Zeitraum.</p>
      </section>
    </div>
  );
}
