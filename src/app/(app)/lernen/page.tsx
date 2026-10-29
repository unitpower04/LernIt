"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useApp } from "@/components/AppContext";
import { Markdown } from "@/components/Markdown";
import { PageHeader, ProgressBar, Spinner } from "@/components/ui";
import { fetchTypeCounts } from "@/lib/data/pool";
import { scopeFromParam, scopeLabel, scopeToParam, topicIdsInScope, type Scope } from "@/lib/data/types";
import { PART_SHORT } from "@/lib/exam/blueprint";
import { MODES } from "@/lib/modes";
import { avgMastery, loadProgress, type TopicProgress } from "@/lib/progress";
import { supabase } from "@/lib/supabase/client";

function LernenInner() {
  const { tree } = useApp();
  const sp = useSearchParams();
  const scopeParam = sp.get("scope");
  const scope = useMemo(() => scopeFromParam(scopeParam), [scopeParam]);
  const part = sp.get("part") ? Number(sp.get("part")) : null;
  const [prog, setProg] = useState<Record<string, TopicProgress> | null>(null);
  const [typeCounts, setTypeCounts] = useState<Record<string, number> | null>(null);
  const [summary, setSummary] = useState<{ title: string; content_md: string } | null | undefined>(undefined);

  const topicIds = useMemo(() => topicIdsInScope(tree, scope), [tree, scope]);

  useEffect(() => {
    loadProgress(supabase(), tree).then(setProg);
  }, [tree]);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTypeCounts(null);
    fetchTypeCounts(supabase(), topicIds, part).then(setTypeCounts);
  }, [topicIds, part]);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSummary(undefined);
    if (scope.kind !== "topic") return;
    supabase().from("summaries").select("title,content_md").eq("topic_id", scope.id).eq("active", true).limit(1).maybeSingle().then(({ data }) => setSummary(data));
  }, [scope]);

  const href = (s: Scope, p = part) => `/lernen?scope=${scopeToParam(s)}${p ? `&part=${p}` : ""}`;

  // Breadcrumb (Eltern)
  const crumbs: { label: string; scope: Scope }[] = [{ label: "Lernen", scope: { kind: "all" } }];
  let cur = scope;
  const chain: { label: string; scope: Scope }[] = [];
  if (cur.kind === "topic") {
    const t = tree.topics.find((x) => x.id === cur.id);
    const l = tree.lfs.find((x) => x.id === t?.learning_field_id);
    const s = tree.subjects.find((x) => x.id === l?.subject_id);
    if (s) chain.push({ label: s.name, scope: { kind: "subject", id: s.id } });
    if (l) chain.push({ label: `${l.code ?? ""} ${l.name}`.trim(), scope: { kind: "lf", id: l.id } });
  } else if (cur.kind === "lf") {
    const l = tree.lfs.find((x) => x.id === cur.id);
    const s = tree.subjects.find((x) => x.id === l?.subject_id);
    if (s) chain.push({ label: s.name, scope: { kind: "subject", id: s.id } });
  }
  crumbs.push(...chain);

  const children: { id: string; label: string; sub?: string; scope: Scope; topicIds: string[]; color?: string | null }[] =
    scope.kind === "all"
      ? tree.subjects.map((s) => ({ id: s.id, label: s.name, sub: s.description ?? undefined, scope: { kind: "subject", id: s.id }, color: s.color, topicIds: topicIdsInScope(tree, { kind: "subject", id: s.id }) }))
      : scope.kind === "subject"
        ? tree.lfs.filter((l) => l.subject_id === scope.id).map((l) => ({ id: l.id, label: `${l.code ? l.code + " – " : ""}${l.name}`, scope: { kind: "lf", id: l.id }, topicIds: topicIdsInScope(tree, { kind: "lf", id: l.id }) }))
        : scope.kind === "lf"
          ? tree.topics.filter((t) => t.learning_field_id === scope.id).map((t) => ({ id: t.id, label: t.name, scope: { kind: "topic", id: t.id }, topicIds: [t.id] }))
          : [];

  const cardCount = topicIds.reduce((s, id) => s + (tree.counts[id]?.cards ?? 0), 0);
  const label = scopeLabel(tree, scope);
  const empty = tree.subjects.length === 0;

  return (
    <div className="space-y-5">
      <PageHeader title={scope.kind === "all" ? "Lernen" : label} sub={scope.kind === "all" ? "Wähle ein Fach – oder übe alles gemischt." : undefined}
        back={crumbs.length > 1 ? { href: href(crumbs[crumbs.length - 1].scope), label: crumbs[crumbs.length - 1].label } : undefined} />

      {empty && <div className="card text-sm text-muted">Noch keine Inhalte. Importiere Inhalte mit <code>npm run content:import</code>.</div>}

      <div className="flex flex-wrap gap-2" role="group" aria-label="Prüfungsteil filtern">
        {[null, 1, 2, 3, 4].map((p) => (
          <Link key={p ?? "all"} href={href(scope, p)} className={`chip !px-3 !py-1.5 ${part === p ? "!bg-brand !text-brandfg" : ""}`} aria-current={part === p ? "true" : undefined}>
            {p ? `Teil ${p} · ${PART_SHORT[p]}` : "Alle Teile"}
          </Link>
        ))}
      </div>

      {children.length > 0 && (
        <section className="space-y-2" aria-label="Unterbereiche">
          {children.map((c) => {
            const m = prog ? avgMastery(tree, prog, c.topicIds) : null;
            const nContent = c.topicIds.reduce((s, id) => s + (tree.counts[id] ? tree.counts[id].cards + tree.counts[id].questions + tree.counts[id].templates : 0), 0);
            return (
              <Link key={c.id} href={href(c.scope)} className="card block transition hover:border-brand">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold">{c.label}</span>
                  <span className="chip">{nContent} Inhalte</span>
                </div>
                {c.sub && <p className="text-sm text-muted">{c.sub}</p>}
                <div className="mt-2"><ProgressBar value={nContent ? m : null} color={c.color ?? undefined} label={`Fortschritt ${c.label}`} /></div>
              </Link>
            );
          })}
        </section>
      )}

      {scope.kind === "topic" && (
        <section className="card space-y-2">
          <h2 className="h2">Lernzettel</h2>
          {summary === undefined ? <Spinner /> : summary ? <Markdown>{`## ${summary.title}\n\n${summary.content_md}`}</Markdown> : <p className="text-sm text-muted">Für dieses Thema gibt es noch keinen Lernzettel.</p>}
        </section>
      )}

      <section aria-label="Üben" className="space-y-2">
        <h2 className="h2">Üben: {label}</h2>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {MODES.map((m) => {
            const count = m.key === "karten" ? cardCount : m.key === "sprint" ? cardCount : m.key === "gemischt" ? Object.entries(typeCounts ?? {}).filter(([t]) => t !== "case").reduce((s, [, v]) => s + v, 0) : m.types ? m.types.reduce((s, t) => s + (typeCounts?.[t] ?? 0), 0) : 0;
            const disabled = typeCounts !== null && count === 0;
            const url = `/ueben/${m.key}?scope=${scopeToParam(scope)}${part ? `&part=${part}` : ""}`;
            return (
              <Link key={m.key} href={disabled ? "#" : url} aria-disabled={disabled} onClick={(e) => disabled && e.preventDefault()}
                className={`card flex flex-col gap-1 transition ${disabled ? "opacity-40" : "hover:border-brand"}`}>
                <span className="text-2xl">{m.icon}</span>
                <span className="text-sm font-semibold leading-tight">{m.label}</span>
                <span className="text-xs text-muted">{typeCounts === null ? "…" : `${count} verfügbar`}</span>
              </Link>
            );
          })}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Link href={`/ueben/tagesquiz?scope=${scopeToParam(scope)}${part ? `&part=${part}` : ""}`} className="btn btn-primary">⚡ Schnelle Session (10)</Link>
          <Link href={`/ueben/fehlerkiste?scope=${scopeToParam(scope)}`} className="btn">📦 Fehlerkiste</Link>
        </div>
      </section>
    </div>
  );
}

export default function LernenPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <LernenInner />
    </Suspense>
  );
}
