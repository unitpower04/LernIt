"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useApp } from "@/components/AppContext";
import { Markdown } from "@/components/Markdown";
import { ProgressBar, Spinner } from "@/components/ui";
import { fetchTypeCounts } from "@/lib/data/pool";
import { scopeFromParam, scopeLabel, scopeToParam, topicIdsInScope, type Scope } from "@/lib/data/types";
import { PART_SHORT } from "@/lib/exam/blueprint";
import { MODES, MODE_GROUPS } from "@/lib/modes";
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
  const cur = scope;
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
  const partQ = part ? `&part=${part}` : "";
  const sc = scopeToParam(scope);
  const mixedCount = Object.entries(typeCounts ?? {}).filter(([t]) => t !== "case").reduce((s, [, v]) => s + v, 0);
  const countOf = (m: (typeof MODES)[number]) =>
    m.key === "karten" || m.key === "sprint" ? cardCount : m.types ? m.types.reduce((s, t) => s + (typeCounts?.[t] ?? 0), 0) : 0;
  const childTitle = scope.kind === "all" ? "Wähle ein Fach" : scope.kind === "subject" ? "Wähle ein Lernfeld" : "Wähle ein Thema";
  const here = scope.kind === "all" ? "Alle Fächer" : label;

  return (
    <div className="space-y-6">
      {/* Wo bin ich? */}
      <nav aria-label="Pfad" className="flex flex-wrap items-center gap-1 text-sm">
        {crumbs.map((c) => (
          <span key={c.label} className="flex items-center gap-1">
            <Link href={href(c.scope)} className="rounded-full bg-surface2 px-3 py-1 text-brand">{c.scope.kind === "all" ? "🏠 Lernen" : c.label}</Link>
            <span className="text-muted">›</span>
          </span>
        ))}
        <span className="rounded-full bg-brandsoft px-3 py-1 font-semibold" aria-current="page">{here}</span>
      </nav>

      <header>
        <h1 className="h1">{scope.kind === "all" ? "Lernen" : label}</h1>
        <p className="text-sm text-muted">
          {scope.kind === "all" && "Starte direkt mit „Alles gemischt“ – oder such dir unten ein Fach aus."}
          {scope.kind === "subject" && "Übe das ganze Fach gemischt oder wähle unten ein Lernfeld."}
          {scope.kind === "lf" && "Übe das ganze Lernfeld gemischt oder wähle unten ein Thema."}
          {scope.kind === "topic" && "Lies erst den Lernzettel, dann Karteikarten, dann Aufgaben – so sitzt es am besten."}
        </p>
      </header>

      {empty && <div className="card text-sm text-muted">Noch keine Inhalte. Importiere Inhalte mit <code>npm run content:import</code>.</div>}

      {/* 1. Alles gemischt – groß */}
      <section aria-label="Schnellstart" className="space-y-2">
        <Link
          href={mixedCount === 0 && typeCounts !== null ? "#" : `/ueben/gemischt?scope=${sc}${partQ}`}
          aria-disabled={typeCounts !== null && mixedCount === 0}
          onClick={(e) => typeCounts !== null && mixedCount === 0 && e.preventDefault()}
          className={`flex items-center gap-4 rounded-2xl bg-brand p-5 text-brandfg shadow-md transition active:scale-[0.99] ${typeCounts !== null && mixedCount === 0 ? "opacity-40" : ""}`}
        >
          <span className="text-4xl">🎲</span>
          <span className="flex-1">
            <span className="block text-xl font-bold">Alles gemischt</span>
            <span className="block text-sm opacity-90">Zufällige Aufgaben aller Typen aus „{here}“ · {typeCounts === null ? "…" : `${mixedCount} verfügbar`}</span>
          </span>
          <span className="text-2xl" aria-hidden>→</span>
        </Link>
        <div className="grid grid-cols-2 gap-2">
          <Link href={`/ueben/tagesquiz?scope=${sc}${partQ}`} className="btn">⚡ Schnelle Session (10)</Link>
          <Link href={`/ueben/fehlerkiste?scope=${sc}`} className="btn">📦 Fehlerkiste</Link>
        </div>
      </section>

      {/* Prüfungsteil-Filter */}
      <section aria-label="Prüfungsteil filtern" className="space-y-1">
        <p className="text-xs font-medium uppercase tracking-wide text-muted">Nur Aufgaben für Prüfungsteil</p>
        <div className="flex flex-wrap gap-2" role="group">
          {[null, 1, 2, 3, 4].map((p) => (
            <Link key={p ?? "all"} href={href(scope, p)} className={`chip !px-3 !py-1.5 ${part === p ? "!bg-brand !text-brandfg" : ""}`} aria-current={part === p ? "true" : undefined}>
              {p ? `Teil ${p} · ${PART_SHORT[p]}` : "Alle Teile"}
            </Link>
          ))}
        </div>
      </section>

      {/* 2. Weiter navigieren */}
      {children.length > 0 && (
        <section className="space-y-2" aria-label="Unterbereiche">
          <h2 className="h2">{childTitle}</h2>
          {children.map((c) => {
            const m = prog ? avgMastery(tree, prog, c.topicIds) : null;
            const nContent = c.topicIds.reduce((s, id) => s + (tree.counts[id] ? tree.counts[id].cards + tree.counts[id].questions + tree.counts[id].templates : 0), 0);
            return (
              <Link key={c.id} href={href(c.scope)} className="card flex items-center gap-3 transition hover:border-brand">
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold">{c.label}</span>
                  {c.sub && <span className="block text-sm text-muted">{c.sub}</span>}
                  <span className="mt-1 block"><ProgressBar value={nContent ? m : null} color={c.color ?? undefined} label={`Fortschritt ${c.label}`} /></span>
                </span>
                <span className="flex flex-col items-end gap-1">
                  <span className="chip">{nContent} Inhalte</span>
                  <span className="text-xl text-muted" aria-hidden>›</span>
                </span>
              </Link>
            );
          })}
        </section>
      )}

      {/* 3. Lernweg + Lernzettel (nur Thema) */}
      {scope.kind === "topic" && (
        <>
          <section className="card space-y-2" aria-label="Lernweg">
            <h2 className="h2">So lernst du dieses Thema</h2>
            <ol className="space-y-2">
              {[
                { n: 1, t: "Lernzettel lesen", d: "Überblick bekommen", href: "#zettel" },
                { n: 2, t: "Karteikarten", d: "Begriffe und Formeln einprägen", href: `/ueben/karten?scope=${sc}${partQ}` },
                { n: 3, t: "Aufgaben üben", d: "Wissen anwenden", href: "#ueben" },
                { n: 4, t: "Fehlerkiste", d: "Falsche Aufgaben wiederholen", href: `/ueben/fehlerkiste?scope=${sc}` },
              ].map((st) => (
                <li key={st.n}>
                  <Link href={st.href} className="flex items-center gap-3 rounded-xl bg-surface2 p-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-brandfg">{st.n}</span>
                    <span><span className="block font-medium">{st.t}</span><span className="block text-xs text-muted">{st.d}</span></span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>
          <section id="zettel" className="card scroll-mt-4 space-y-2">
            <h2 className="h2">Lernzettel</h2>
            {summary === undefined ? <Spinner /> : summary ? <Markdown>{`## ${summary.title}\n\n${summary.content_md}`}</Markdown> : <p className="text-sm text-muted">Für dieses Thema gibt es noch keinen Lernzettel.</p>}
          </section>
        </>
      )}

      {/* 4. Übungsarten, gruppiert */}
      <section id="ueben" aria-label="Übungsarten" className="scroll-mt-4 space-y-4">
        <h2 className="h2">Übungsarten für „{here}“</h2>
        {MODE_GROUPS.map((g) => (
          <div key={g.key} className="space-y-2">
            <div>
              <h3 className="font-semibold">{g.title}</h3>
              <p className="text-xs text-muted">{g.hint}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {MODES.filter((m) => m.group === g.key).map((m) => {
                const count = countOf(m);
                const disabled = typeCounts !== null && count === 0;
                return (
                  <Link key={m.key} href={disabled ? "#" : `/ueben/${m.key}?scope=${sc}${partQ}`} aria-disabled={disabled} onClick={(e) => disabled && e.preventDefault()}
                    className={`card flex flex-col gap-1 transition ${disabled ? "opacity-40" : "hover:border-brand"}`}>
                    <span className="text-2xl">{m.icon}</span>
                    <span className="text-sm font-semibold leading-tight">{m.label}</span>
                    <span className="text-xs text-muted">{m.desc}</span>
                    <span className="text-xs font-medium text-brand">{typeCounts === null ? "…" : `${count} verfügbar`}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
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
