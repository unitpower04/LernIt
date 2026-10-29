"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useApp } from "@/components/AppContext";
import { ProgressBar, Spinner } from "@/components/ui";
import { topicIdsInScope } from "@/lib/data/types";
import { avgMastery, loadProgress, recommend, type Recommendation, type TopicProgress } from "@/lib/progress";
import { supabase } from "@/lib/supabase/client";

type Day = { day: string; total: number; correct: number };

const GROUPS: { key: Recommendation["group"]; title: string; hint: string; cls: string }[] = [
  { key: "now", title: "🔴 Jetzt lernen", hint: "schwach & prüfungsrelevant", cls: "border-bad/40" },
  { key: "repeat", title: "🟡 Wiederholen", hint: "fällig oder noch wackelig", cls: "border-warn/40" },
  { key: "ok", title: "🟢 Sitzt, kann warten", hint: "gut beherrscht", cls: "border-ok/40" },
];

export default function Dashboard() {
  const { tree, profile } = useApp();
  const [prog, setProg] = useState<Record<string, TopicProgress> | null>(null);
  const [streak, setStreak] = useState(0);
  const [days, setDays] = useState<Day[]>([]);
  const [wrongCount, setWrongCount] = useState(0);
  const [nowMs] = useState(() => Date.now());

  useEffect(() => {
    const sb = supabase();
    loadProgress(sb, tree).then(setProg);
    sb.rpc("my_streak").then(({ data }) => setStreak(Number(data ?? 0)));
    sb.from("my_wrong_items").select("source_id", { count: "exact", head: true }).eq("correct", false).then(({ count }) => setWrongCount(count ?? 0));
    const since = new Date(Date.now() - 13 * 86_400_000);
    since.setHours(0, 0, 0, 0);
    sb.from("answers").select("created_at,correct").gte("created_at", since.toISOString()).order("created_at").limit(20000).then(({ data }) => {
      const map = new Map<string, Day>();
      for (let i = 0; i < 14; i++) {
        const d = new Date(since.getTime() + i * 86_400_000);
        const k = d.toLocaleDateString("sv-SE");
        map.set(k, { day: k, total: 0, correct: 0 });
      }
      (data ?? []).forEach((r: { created_at: string; correct: boolean }) => {
        const e = map.get(new Date(r.created_at).toLocaleDateString("sv-SE"));
        if (e) {
          e.total++;
          if (r.correct) e.correct++;
        }
      });
      setDays([...map.values()]);
    });
  }, [tree]);

  const recs = useMemo(() => (prog ? recommend(tree, prog) : []), [tree, prog]);
  const overall = prog ? avgMastery(tree, prog, tree.topics.map((t) => t.id)) : null;
  const daysLeft = profile.exam_date ? Math.ceil((new Date(profile.exam_date + "T00:00:00").getTime() - nowMs) / 86_400_000) : null;
  const maxDay = Math.max(1, ...days.map((d) => d.total));
  const today = days[days.length - 1];

  if (!prog) return <Spinner />;
  const topicName = (id: string) => tree.topics.find((t) => t.id === id)?.name ?? "";
  const lfName = (id: string) => {
    const t = tree.topics.find((x) => x.id === id);
    const l = tree.lfs.find((x) => x.id === t?.learning_field_id);
    return l ? `${l.code ?? ""} ${l.name}`.trim() : "";
  };

  return (
    <div className="space-y-5">
      <header>
        <h1 className="h1">Moin, {profile.display_name} 👋</h1>
        <p className="text-sm text-muted">{today?.total ? `Heute schon ${today.total} Aufgaben – weiter so!` : "Heute noch nichts geübt – los geht’s!"}</p>
      </header>

      <div className="grid grid-cols-3 gap-2">
        <div className="card text-center">
          <p className="text-2xl font-bold">{daysLeft === null ? "–" : daysLeft >= 0 ? daysLeft : 0}</p>
          <p className="text-xs text-muted">{daysLeft === null ? <Link href="/einstellungen" className="text-brand">Datum setzen</Link> : "Tage bis Prüfung"}</p>
        </div>
        <div className="card text-center">
          <p className="text-2xl font-bold">🔥 {streak}</p>
          <p className="text-xs text-muted">Tage Streak</p>
        </div>
        <div className="card text-center">
          <p className="text-2xl font-bold">{overall === null ? "–" : Math.round(overall * 100) + " %"}</p>
          <p className="text-xs text-muted">Beherrschung</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Link href="/ueben/tagesquiz?scope=all" className="btn btn-primary">⚡ Tagesquiz</Link>
        <Link href="/ueben/fehlerkiste?scope=all" className="btn">📦 Fehlerkiste ({wrongCount})</Link>
      </div>

      {days.length > 0 && (
        <section className="card" aria-label="Aktivität der letzten 14 Tage">
          <h2 className="h2 mb-2">Letzte 14 Tage</h2>
          <div className="flex h-24 items-end gap-1">
            {days.map((d) => (
              <div key={d.day} className="flex h-full flex-1 flex-col justify-end" title={`${d.day}: ${d.correct}/${d.total} richtig`}>
                <div className="rounded-t bg-brandsoft" style={{ height: `${(d.total / maxDay) * 100}%`, minHeight: d.total ? 3 : 0 }}>
                  <div className="w-full rounded-t bg-brand" style={{ height: d.total ? `${(d.correct / d.total) * 100}%` : 0 }} />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-1 text-xs text-muted">Balken = Aufgaben pro Tag, dunkel = richtig.</p>
        </section>
      )}

      <section className="card space-y-2" aria-label="Fächer">
        <h2 className="h2">Fächer</h2>
        {tree.subjects.length === 0 && <p className="text-sm text-muted">Noch keine Inhalte vorhanden.</p>}
        {tree.subjects.map((s) => {
          const ids = topicIdsInScope(tree, { kind: "subject", id: s.id });
          const m = avgMastery(tree, prog, ids);
          return (
            <Link key={s.id} href={`/lernen?scope=s:${s.id}`} className="block">
              <div className="mb-1 text-sm font-medium">{s.name}</div>
              <ProgressBar value={m} color={s.color ?? undefined} label={s.name} />
            </Link>
          );
        })}
      </section>

      {recs.length === 0 ? (
        <div className="card text-sm text-muted">Empfehlungen erscheinen, sobald Inhalte vorhanden sind.</div>
      ) : (
        GROUPS.map((g) => {
          const list = recs.filter((r) => r.group === g.key);
          if (!list.length) return null;
          return (
            <section key={g.key} className={`card space-y-2 ${g.cls}`} aria-label={g.title}>
              <div>
                <h2 className="h2">{g.title}</h2>
                <p className="text-xs text-muted">{g.hint}</p>
              </div>
              {list.slice(0, g.key === "ok" ? 3 : 5).map((r) => (
                <div key={r.topicId} className="flex items-center justify-between gap-2 rounded-xl bg-surface2 p-2.5">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{topicName(r.topicId)}</p>
                    <p className="truncate text-xs text-muted">{lfName(r.topicId)} · {r.reason}</p>
                  </div>
                  <div className="flex shrink-0 gap-1">
                    <Link className="btn !min-h-9 !px-3" href={`/ueben/karten?scope=t:${r.topicId}`} aria-label={`Karteikarten ${topicName(r.topicId)}`}>🃏</Link>
                    <Link className="btn btn-primary !min-h-9 !px-3" href={`/ueben/gemischt?scope=t:${r.topicId}`}>Üben</Link>
                  </div>
                </div>
              ))}
            </section>
          );
        })
      )}
    </div>
  );
}
