"use client";
import { useEffect, useMemo, useState } from "react";
import { PageHeader, Spinner } from "@/components/ui";
import { supabase } from "@/lib/supabase/client";

type G = { id: string; term: string; definition: string; topic_id: string | null };

export default function GlossarPage() {
  const [items, setItems] = useState<G[] | null>(null);
  const [q, setQ] = useState("");
  useEffect(() => {
    supabase().from("glossary").select("id,term,definition,topic_id").eq("active", true).order("term").limit(5000).then(({ data }) => setItems((data ?? []) as G[]));
  }, []);
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return (items ?? []).filter((g) => !s || g.term.toLowerCase().includes(s) || g.definition.toLowerCase().includes(s));
  }, [items, q]);
  return (
    <div className="space-y-4">
      <PageHeader title="Glossar" sub="Begriffe nachschlagen" />
      <input className="input" type="search" placeholder="Suchen …" aria-label="Glossar durchsuchen" value={q} onChange={(e) => setQ(e.target.value)} />
      {!items ? <Spinner /> : list.length === 0 ? <div className="card text-sm text-muted">Nichts gefunden.</div> : (
        <dl className="space-y-2">
          {list.map((g) => (
            <div key={g.id} className="card">
              <dt className="font-semibold">{g.term}</dt>
              <dd className="text-sm text-muted">{g.definition}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
