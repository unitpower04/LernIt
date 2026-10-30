"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useApp } from "@/components/AppContext";
import { PageHeader, Spinner } from "@/components/ui";
import { drawConcrete, fetchPool } from "@/lib/data/pool";
import { dateDE } from "@/lib/format";
import { makeRng, randomSeed } from "@/lib/rng";
import { supabase } from "@/lib/supabase/client";

type Row = { display_name: string; answered: number; correct: number; streak: number; is_me: boolean };
type Duel = { id: string; code: string; created_at: string };
type Friend = { id: string; status: "pending" | "accepted"; incoming: boolean; display_name: string; answered: number; correct: number };
const FRIEND_MSG: Record<string, string> = {
  sent: "Anfrage gesendet ✓",
  accepted: "Ihr seid jetzt befreundet ✓",
  already_friends: "Ihr seid schon befreundet.",
  already_sent: "Die Anfrage wurde schon gesendet.",
  self: "Das ist dein eigener Code.",
  not_found: "Diesen Freundescode gibt es nicht.",
};

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
  const [scope, setScope] = useState<"all" | "friends">("all");
  const [friends, setFriends] = useState<Friend[]>([]);
  const [myCode, setMyCode] = useState<string | null>(null);
  const [friendCode, setFriendCode] = useState("");
  const [friendMsg, setFriendMsg] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const loadFriends = useCallback(async () => {
    const sb = supabase();
    const [f, c] = await Promise.all([sb.rpc("friends_list", { p_days: 7 }), sb.rpc("my_friend_code")]);
    setFriends((f.data ?? []) as Friend[]);
    setMyCode((c.data as string | null) ?? null);
  }, []);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadFriends();
  }, [loadFriends]);

  async function sendRequest() {
    setFriendMsg(null);
    if (!friendCode.trim()) return;
    const { data, error } = await supabase().rpc("send_friend_request", { p_code: friendCode });
    setFriendMsg(error ? "Das hat nicht geklappt. Bitte später erneut versuchen." : FRIEND_MSG[data as string] ?? "Fertig.");
    if (!error && (data === "sent" || data === "accepted")) setFriendCode("");
    loadFriends();
  }
  async function respond(id: string, accept: boolean) {
    await supabase().rpc("respond_friend_request", { p_id: id, p_accept: accept });
    loadFriends();
  }
  async function removeFriend(id: string) {
    await supabase().rpc("remove_friendship", { p_id: id });
    loadFriends();
  }
  async function copyCode() {
    if (!myCode) return;
    try {
      await navigator.clipboard.writeText(myCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRows(null);
    supabase().rpc(scope === "friends" ? "leaderboard_friends" : "leaderboard", { p_days: days }).then(({ data }) => setRows((data ?? []) as Row[]));
  }, [days, scope, friends.length]);
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
      <PageHeader title="Mit Freunden" sub="Freunde hinzufügen, Rangliste und Duelle" />

      <section className="card space-y-3" aria-label="Freunde">
        <h2 className="h2">👥 Freunde</h2>
        {myCode && (
          <div className="flex items-center justify-between gap-2 rounded-xl bg-surface2 px-3 py-2">
            <div>
              <p className="text-xs text-muted">Dein Freundescode</p>
              <p className="text-lg font-bold tracking-widest" aria-label="Dein Freundescode">{myCode}</p>
            </div>
            <button className="btn" onClick={copyCode}>{copied ? "Kopiert ✓" : "Kopieren"}</button>
          </div>
        )}
        <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); sendRequest(); }}>
          <input className="input" placeholder="Freundescode eingeben" aria-label="Freundescode eingeben" value={friendCode} onChange={(e) => setFriendCode(e.target.value)} autoCapitalize="characters" maxLength={12} />
          <button className="btn btn-primary">Anfrage senden</button>
        </form>
        {friendMsg && <p role="status" className="text-sm text-muted">{friendMsg}</p>}
        {friends.some((f) => f.status === "pending" && f.incoming) && (
          <div className="space-y-1">
            <p className="text-sm font-medium">Anfragen an dich</p>
            {friends.filter((f) => f.status === "pending" && f.incoming).map((f) => (
              <div key={f.id} className="flex items-center gap-2 rounded-xl bg-brandsoft px-3 py-2">
                <span className="flex-1 truncate font-medium">{f.display_name}</span>
                <button className="btn btn-primary !min-h-9" onClick={() => respond(f.id, true)}>Annehmen</button>
                <button className="btn !min-h-9" onClick={() => respond(f.id, false)}>Ablehnen</button>
              </div>
            ))}
          </div>
        )}
        {friends.some((f) => f.status === "pending" && !f.incoming) && (
          <div className="space-y-1">
            <p className="text-sm font-medium">Gesendet</p>
            {friends.filter((f) => f.status === "pending" && !f.incoming).map((f) => (
              <div key={f.id} className="flex items-center gap-2 rounded-xl bg-surface2 px-3 py-2">
                <span className="flex-1 truncate">{f.display_name} <span className="text-xs text-muted">· wartet auf Antwort</span></span>
                <button className="btn !min-h-9" onClick={() => removeFriend(f.id)}>Zurückziehen</button>
              </div>
            ))}
          </div>
        )}
        <div className="space-y-1">
          <p className="text-sm font-medium">Meine Freunde</p>
          {friends.filter((f) => f.status === "accepted").length === 0 ? (
            <p className="text-sm text-muted">Noch keine Freunde – teile deinen Code oder gib den Code eines Freundes ein.</p>
          ) : friends.filter((f) => f.status === "accepted").map((f) => (
            <div key={f.id} className="flex items-center gap-2 rounded-xl bg-surface2 px-3 py-2">
              <span className="flex-1 truncate font-medium">{f.display_name}</span>
              <span className="text-xs text-muted">{f.correct}/{f.answered} ✓ (7 Tage)</span>
              <button className="btn !min-h-9" aria-label={`${f.display_name} entfernen`} onClick={() => { if (confirm(`${f.display_name} aus der Freundesliste entfernen?`)) removeFriend(f.id); }}>✕</button>
            </div>
          ))}
        </div>
      </section>

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
        <div className="flex gap-2" role="group" aria-label="Wer wird angezeigt">
          <button className={`btn !min-h-9 flex-1 ${scope === "all" ? "btn-primary" : ""}`} aria-pressed={scope === "all"} onClick={() => setScope("all")}>Alle</button>
          <button className={`btn !min-h-9 flex-1 ${scope === "friends" ? "btn-primary" : ""}`} aria-pressed={scope === "friends"} onClick={() => setScope("friends")}>Nur Freunde</button>
        </div>
        {scope === "all" && !profile.show_in_leaderboard && <p className="rounded-lg bg-warnsoft p-2 text-xs">Du bist für andere unsichtbar. <Link className="text-brand underline" href="/einstellungen">In den Einstellungen</Link> kannst du dich freischalten.</p>}
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
