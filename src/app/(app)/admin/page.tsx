"use client";
import { useCallback, useEffect, useState } from "react";
import { useApp } from "@/components/AppContext";
import { PageHeader, Spinner } from "@/components/ui";
import { summarize, withKeys } from "@/lib/content/keys";
import { bundleSchema, questionSchema, templateSchema, type Bundle } from "@/lib/content/schema";
import { dateDE } from "@/lib/format";
import { supabase } from "@/lib/supabase/client";

const TABLES = [
  { key: "questions", label: "Aufgaben", cols: "id,key,type,exam_part,active,is_demo,body" },
  { key: "question_templates", label: "Vorlagen", cols: "id,key,type,exam_part,active,is_demo,vars,body" },
  { key: "flashcards", label: "Karteikarten", cols: "id,key,front,back,active,is_demo" },
  { key: "glossary", label: "Glossar", cols: "id,key,term,definition,active,is_demo" },
  { key: "summaries", label: "Lernzettel", cols: "id,key,title,content_md,active,is_demo" },
  { key: "exam_cases", label: "Praxisfälle", cols: "id,key,title,situation,prompts,active,is_demo" },
] as const;

type Row = Record<string, unknown> & { id: string; key: string; active: boolean; is_demo: boolean };
type Invite = { code: string; note: string | null; uses: number; max_uses: number | null; active: boolean };
type Run = { id: string; created_at: string; source: string | null; note: string | null; counts: Record<string, number> };

const snippet = (r: Row) => {
  const b = r.body as Record<string, unknown> | undefined;
  const s = (b?.prompt ?? b?.statement ?? b?.situation ?? b?.text ?? r.front ?? r.term ?? r.title ?? r.key) as string;
  return String(s ?? "").slice(0, 120);
};

export default function AdminPage() {
  const { profile } = useApp();
  if (!profile.is_admin) return <div className="card">Kein Zugriff. Dieser Bereich ist nur für Admins.</div>;
  return (
    <div className="space-y-6">
      <PageHeader title="Admin" sub="Inhalte, Import und Einladungen" />
      <Stats />
      <ImportBox />
      <Browser />
      <Runs />
      <Invites />
    </div>
  );
}

function Stats() {
  const [c, setC] = useState<Record<string, number> | null>(null);
  useEffect(() => {
    const sb = supabase();
    Promise.all(TABLES.map((t) => sb.from(t.key).select("id", { count: "exact", head: true }).eq("active", true))).then((rs) => setC(Object.fromEntries(TABLES.map((t, i) => [t.label, rs[i].count ?? 0]))));
  }, []);
  if (!c) return <Spinner />;
  return (
    <section className="grid grid-cols-3 gap-2" aria-label="Übersicht">
      {Object.entries(c).map(([k, v]) => <div key={k} className="card text-center"><p className="text-xl font-bold">{v}</p><p className="text-xs text-muted">{k}</p></div>)}
    </section>
  );
}

function ImportBox() {
  const [text, setText] = useState("");
  const [bundle, setBundle] = useState<Bundle | null>(null);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [busy, setBusy] = useState(false);

  function parse(t: string) {
    setText(t);
    setBundle(null);
    setMsg(null);
    if (!t.trim()) return;
    try {
      const r = bundleSchema.safeParse(JSON.parse(t));
      if (!r.success) return setMsg({ ok: false, text: r.error.issues.slice(0, 5).map((i) => `${i.path.join(".")}: ${i.message}`).join("\n") });
      setBundle(withKeys(r.data));
    } catch (e) {
      setMsg({ ok: false, text: "Kein gültiges JSON: " + (e as Error).message });
    }
  }
  async function run() {
    if (!bundle) return;
    setBusy(true);
    const { data, error } = await supabase().rpc("import_bundle", { p: { ...bundle, source: "admin-ui" } });
    setBusy(false);
    setMsg(error ? { ok: false, text: error.message } : { ok: true, text: "Importiert: " + JSON.stringify(data) });
  }
  async function resetDemo() {
    if (!window.confirm("Alle Demo-Inhalte inkl. zugehöriger Antworten, Prüfungsversuche und Duelle löschen?")) return;
    const { data, error } = await supabase().rpc("reset_demo", { p_wipe_attempts: true });
    setMsg(error ? { ok: false, text: error.message } : { ok: true, text: "Demo-Daten entfernt: " + JSON.stringify(data) });
  }
  return (
    <section className="card space-y-3" aria-label="Import">
      <h2 className="h2">Inhalte importieren</h2>
      <p className="text-xs text-muted">JSON-Datei im Inhaltsformat (siehe <code>content/</code> im Repo) einfügen. Mehrfaches Importieren ist unkritisch (Upsert über <code>key</code>).</p>
      <input type="file" accept=".json,application/json" aria-label="JSON-Datei wählen" onChange={async (e) => { const f = e.target.files?.[0]; if (f) parse(await f.text()); }} />
      <textarea className="input min-h-32 font-mono text-xs" placeholder='{"items":[…]}' aria-label="JSON" value={text} onChange={(e) => parse(e.target.value)} />
      {bundle && <p className="rounded-lg bg-oksoft p-2 text-sm">Gültig: {Object.entries(summarize(bundle)).filter(([, v]) => v).map(([k, v]) => `${v} ${k}`).join(", ")}{bundle.demo ? " (Demo)" : ""}</p>}
      {msg && <pre className={`whitespace-pre-wrap rounded-lg p-2 text-xs ${msg.ok ? "bg-oksoft" : "bg-badsoft text-bad"}`}>{msg.text}</pre>}
      <div className="grid grid-cols-2 gap-2">
        <button className="btn btn-primary" disabled={!bundle || busy} onClick={run}>{busy ? "Importiere …" : "Importieren"}</button>
        <button className="btn" onClick={resetDemo}>Demo-Daten entfernen</button>
      </div>
    </section>
  );
}

function Browser() {
  const [t, setT] = useState<(typeof TABLES)[number]>(TABLES[0]);
  const [q, setQ] = useState("");
  const [rows, setRows] = useState<Row[] | null>(null);
  const [edit, setEdit] = useState<Row | null>(null);

  const load = useCallback(async () => {
    setRows(null);
    let query = supabase().from(t.key).select(t.cols).order("key").limit(60);
    if (q.trim()) query = query.ilike("key", `%${q.trim()}%`);
    const { data } = await query;
    setRows((data ?? []) as unknown as Row[]);
  }, [t, q]);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, [load]);

  async function toggle(r: Row) {
    await supabase().from(t.key).update({ active: !r.active }).eq("id", r.id);
    setRows((rs) => rs && rs.map((x) => (x.id === r.id ? { ...x, active: !r.active } : x)));
  }

  return (
    <section className="card space-y-3" aria-label="Inhalte">
      <h2 className="h2">Inhalte durchsuchen &amp; korrigieren</h2>
      <div className="flex flex-wrap gap-1">
        {TABLES.map((x) => <button key={x.key} className={`chip !px-3 !py-1.5 ${x.key === t.key ? "!bg-brand !text-brandfg" : ""}`} onClick={() => setT(x)}>{x.label}</button>)}
      </div>
      <input className="input" type="search" placeholder="Nach key suchen …" aria-label="Suche" value={q} onChange={(e) => setQ(e.target.value)} />
      {!rows ? <Spinner /> : rows.length === 0 ? <p className="text-sm text-muted">Nichts gefunden.</p> : (
        <ul className="space-y-1">
          {rows.map((r) => (
            <li key={r.id} className={`flex items-center gap-2 rounded-xl bg-surface2 p-2 text-sm ${r.active ? "" : "opacity-50"}`}>
              <div className="min-w-0 flex-1">
                <p className="truncate font-mono text-xs text-muted">{r.key}{r.is_demo ? " · DEMO" : ""}{r.type ? ` · ${r.type}` : ""}</p>
                <p className="truncate">{snippet(r)}</p>
              </div>
              <button className="btn !min-h-9 !px-2" onClick={() => setEdit(r)}>✏️</button>
              <button className="btn !min-h-9 !px-2" onClick={() => toggle(r)} aria-label={r.active ? "deaktivieren" : "aktivieren"}>{r.active ? "👁" : "🚫"}</button>
            </li>
          ))}
        </ul>
      )}
      {edit && <Editor table={t.key} row={edit} onClose={(changed) => { setEdit(null); if (changed) load(); }} />}
    </section>
  );
}

function Editor({ table, row, onClose }: { table: string; row: Row; onClose: (changed: boolean) => void }) {
  const { id, ...rest } = row;
  const [text, setText] = useState(JSON.stringify(rest, null, 2));
  const [err, setErr] = useState<string | null>(null);
  async function save() {
    try {
      const obj = JSON.parse(text);
      if (table === "questions" || table === "question_templates") {
        const schema = table === "questions" ? questionSchema : templateSchema;
        const r = schema.safeParse({ ...obj, key: obj.key });
        if (!r.success) throw new Error(r.error.issues.slice(0, 4).map((i) => `${i.path.join(".")}: ${i.message}`).join("\n"));
      }
      delete obj.id;
      const { error } = await supabase().from(table).update(obj).eq("id", id);
      if (error) throw new Error(error.message);
      onClose(true);
    } catch (e) {
      setErr((e as Error).message);
    }
  }
  return (
    <div className="fixed inset-0 z-40 flex items-end justify-center bg-black/50 p-3 sm:items-center" role="dialog" aria-modal="true" aria-label="Eintrag bearbeiten">
      <div className="card flex max-h-[90dvh] w-full max-w-2xl flex-col gap-3">
        <h3 className="h2">Eintrag bearbeiten</h3>
        <textarea className="input min-h-80 flex-1 font-mono text-xs" value={text} onChange={(e) => setText(e.target.value)} aria-label="JSON des Eintrags" />
        {err && <pre className="whitespace-pre-wrap rounded-lg bg-badsoft p-2 text-xs text-bad">{err}</pre>}
        <div className="grid grid-cols-2 gap-2">
          <button className="btn" onClick={() => onClose(false)}>Abbrechen</button>
          <button className="btn btn-primary" onClick={save}>Speichern</button>
        </div>
      </div>
    </div>
  );
}

function Runs() {
  const [runs, setRuns] = useState<Run[] | null>(null);
  useEffect(() => {
    supabase().from("import_runs").select("*").order("created_at", { ascending: false }).limit(10).then(({ data }) => setRuns((data ?? []) as Run[]));
  }, []);
  return (
    <section className="card space-y-2" aria-label="Import-Status">
      <h2 className="h2">Import-Status</h2>
      {!runs ? <Spinner /> : runs.length === 0 ? <p className="text-sm text-muted">Noch keine Importe.</p> : runs.map((r) => (
        <div key={r.id} className="rounded-xl bg-surface2 p-2 text-xs">
          <p className="font-medium">{dateDE(r.created_at)} · {r.source}{r.note ? ` · ${r.note}` : ""}</p>
          <p className="text-muted">{Object.entries(r.counts).filter(([, v]) => v).map(([k, v]) => `${v} ${k}`).join(", ")}</p>
        </div>
      ))}
    </section>
  );
}

function Invites() {
  const [list, setList] = useState<Invite[] | null>(null);
  const [note, setNote] = useState("");
  const [max, setMax] = useState(10);
  const [fresh, setFresh] = useState<string | null>(null);
  const load = useCallback(() => {
    supabase().from("invite_codes").select("code,note,uses,max_uses,active").order("created_at", { ascending: false }).then(({ data }) => setList((data ?? []) as Invite[]));
  }, []);
  useEffect(() => {
    load();
  }, [load]);
  async function create() {
    const { data } = await supabase().rpc("create_invite", { p_note: note || null, p_max_uses: max });
    setFresh(data as string);
    setNote("");
    load();
  }
  return (
    <section className="card space-y-3" aria-label="Einladungscodes">
      <h2 className="h2">Einladungscodes</h2>
      <div className="flex gap-2">
        <input className="input" placeholder="Notiz (z. B. Name)" aria-label="Notiz" value={note} onChange={(e) => setNote(e.target.value)} />
        <input className="input !w-20" type="number" min={1} aria-label="Max. Nutzungen" value={max} onChange={(e) => setMax(Number(e.target.value))} />
        <button className="btn btn-primary" onClick={create}>+</button>
      </div>
      {fresh && <p className="rounded-lg bg-oksoft p-2 text-sm">Neuer Code: <b className="font-mono">{fresh}</b></p>}
      {!list ? <Spinner /> : list.map((i) => (
        <div key={i.code} className="flex items-center justify-between gap-2 rounded-xl bg-surface2 p-2 text-sm">
          <div className="min-w-0"><p className="truncate font-mono">{i.code}</p><p className="text-xs text-muted">{i.note ?? "–"} · {i.uses}/{i.max_uses ?? "∞"}</p></div>
          <button className="btn !min-h-9" onClick={async () => { await supabase().rpc("set_invite_active", { p_code: i.code, p_active: !i.active }); load(); }}>{i.active ? "Sperren" : "Aktivieren"}</button>
        </div>
      ))}
    </section>
  );
}
