/* Lokaler Supabase-Ersatz NUR für automatisierte UI-Tests (die Sandbox erreicht supabase.co nicht).
 * Bildet Auth + die genutzten PostgREST-Funktionen im Speicher nach, Inhalte stammen aus e2e/fixtures/demo.
 * Start: npx tsx e2e/mock-supabase.ts [port]
 */
import { randomUUID } from "node:crypto";
import { readdirSync, readFileSync } from "node:fs";
import { createServer, type IncomingMessage, type ServerResponse } from "node:http";
import { join } from "node:path";
import { withKeys } from "../src/lib/content/keys";
import { bundleSchema } from "../src/lib/content/schema";

type Row = Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
const db: Record<string, Row[]> = {};
const T = (n: string) => (db[n] ??= []);
const users: { id: string; email: string; password: string; meta: Row }[] = [];
const CODES: Record<string, boolean> = { TESTCODE: false, ADMINCODE: true };

function importBundle(p: Row, demo: boolean) {
  const c: Row = { subjects: 0, learning_fields: 0, topics: 0, flashcards: 0, glossary: 0, questions: 0, templates: 0, summaries: 0, cases: 0 };
  const up = (table: string, row: Row) => {
    const ex = T(table).find((r) => r.key === row.key);
    if (ex) Object.assign(ex, row);
    else T(table).push({ id: randomUUID(), active: true, ...row });
    return T(table).find((r) => r.key === row.key)!;
  };
  (p.subjects ?? []).forEach((s: Row, si: number) => {
    const sub = up("subjects", { key: s.key, name: s.name, description: s.description ?? null, color: s.color ?? null, sort: si + 1, is_demo: demo });
    c.subjects++;
    (s.learning_fields ?? []).forEach((l: Row, li: number) => {
      const lf = up("learning_fields", { key: l.key, subject_id: sub.id, code: l.code ?? null, name: l.name, exam_parts: l.exam_parts ?? [], sort: li + 1, is_demo: demo });
      c.learning_fields++;
      (l.topics ?? []).forEach((t: Row, ti: number) => {
        up("topics", { key: t.key, learning_field_id: lf.id, name: t.name, exam_parts: t.exam_parts ?? [], sort: ti + 1, is_demo: demo });
        c.topics++;
      });
    });
  });
  for (const it of p.items ?? []) {
    const topic = T("topics").find((t) => t.key === it.topic);
    if (!topic) throw new Error(`Thema ${it.topic} nicht gefunden`);
    const base = { topic_id: topic.id, is_demo: demo };
    if (it.summary) { up("summaries", { ...base, ...it.summary }); c.summaries++; }
    for (const x of it.flashcards ?? []) { up("flashcards", { ...base, hint: null, source: null, ...x }); c.flashcards++; }
    for (const x of it.glossary ?? []) { up("glossary", { ...base, source: null, ...x }); c.glossary++; }
    for (const x of it.questions ?? []) { up("questions", { ...base, points: 2, explanation: null, source: null, ...x }); c.questions++; }
    for (const x of it.templates ?? []) { up("question_templates", { ...base, points: 2, explanation: null, source: null, ...x }); c.templates++; }
    for (const x of it.cases ?? []) { up("exam_cases", { ...base, source: null, ...x }); c.cases++; }
  }
  T("import_runs").push({ id: randomUUID(), created_at: new Date().toISOString(), source: p.source ?? "mock", note: demo ? "demo" : null, counts: c });
  return c;
}

function seed() {
  const dir = join(__dirname, "fixtures", "demo");
  const files = readdirSync(dir).filter((f) => f.endsWith(".json")).sort((a, b) => (a.startsWith("struktur") ? -1 : b.startsWith("struktur") ? 1 : 0));
  for (const f of files) {
    const b = withKeys(bundleSchema.parse(JSON.parse(readFileSync(join(dir, f), "utf8"))));
    importBundle(b, b.demo);
  }
}

/* ---------- Auth ---------- */
const b64 = (o: unknown) => Buffer.from(JSON.stringify(o)).toString("base64url");
function tokenFor(u: (typeof users)[number]) {
  const exp = Math.floor(Date.now() / 1000) + 3600;
  const access = `${b64({ alg: "HS256", typ: "JWT" })}.${b64({ sub: u.id, role: "authenticated", aud: "authenticated", exp, email: u.email })}.sig`;
  return { access_token: access, token_type: "bearer", expires_in: 3600, expires_at: exp, refresh_token: "r-" + u.id, user: userJson(u) };
}
const userJson = (u: (typeof users)[number]) => ({ id: u.id, aud: "authenticated", role: "authenticated", email: u.email, email_confirmed_at: new Date().toISOString(), app_metadata: {}, user_metadata: u.meta, created_at: new Date().toISOString() });
function userFromAuth(req: IncomingMessage) {
  const m = /^Bearer (.+)$/.exec(req.headers.authorization ?? "");
  if (!m) return null;
  try {
    const sub = JSON.parse(Buffer.from(m[1].split(".")[1], "base64url").toString()).sub;
    return users.find((u) => u.id === sub) ?? null;
  } catch {
    return null;
  }
}

/* ---------- PostgREST ---------- */
const OWN = new Set(["answers", "card_states", "exam_attempts"]);
const day = (d: string) => new Date(d).toLocaleDateString("sv-SE");

function view(name: string, uid: string): Row[] | null {
  const mine = T("answers").filter((a) => a.user_id === uid);
  if (name === "topic_counts")
    return T("topics").map((t) => ({
      topic_id: t.id,
      cards: T("flashcards").filter((x) => x.topic_id === t.id && x.active).length,
      questions: T("questions").filter((x) => x.topic_id === t.id && x.active).length,
      templates: T("question_templates").filter((x) => x.topic_id === t.id && x.active).length,
    }));
  if (name === "my_topic_stats") {
    const m = new Map<string, Row>();
    for (const a of mine.filter((x) => x.topic_id)) {
      const r = m.get(a.topic_id) ?? { topic_id: a.topic_id, attempts: 0, correct: 0, last_at: a.created_at };
      r.attempts++;
      if (a.correct) r.correct++;
      if (a.created_at > r.last_at) r.last_at = a.created_at;
      m.set(a.topic_id, r);
    }
    return [...m.values()];
  }
  if (name === "my_card_stats") {
    const m = new Map<string, Row>();
    for (const cs of T("card_states").filter((x) => x.user_id === uid)) {
      const card = T("flashcards").find((f) => f.id === cs.card_id);
      if (!card) continue;
      const r = m.get(card.topic_id) ?? { topic_id: card.topic_id, seen: 0, mature: 0, due: 0 };
      r.seen++;
      if (cs.interval_days >= 6) r.mature++;
      if (new Date(cs.due) <= new Date()) r.due++;
      m.set(card.topic_id, r);
    }
    return [...m.values()];
  }
  if (name === "my_wrong_items") {
    const latest = new Map<string, Row>();
    for (const a of mine.filter((x) => (x.source_kind === "question" || x.source_kind === "template") && x.source_id).sort((x, y) => (x.created_at < y.created_at ? -1 : 1))) latest.set(a.source_kind + a.source_id, a);
    return [...latest.values()];
  }
  return null;
}

function applyFilters(rows: Row[], q: URLSearchParams) {
  const reserved = new Set(["select", "order", "limit", "offset", "on_conflict", "columns"]);
  for (const [k, v] of q) {
    if (reserved.has(k)) continue;
    const dot = v.indexOf(".");
    const op = v.slice(0, dot);
    const val = v.slice(dot + 1);
    rows = rows.filter((r) => {
      const x = r[k];
      switch (op) {
        case "eq": return String(x) === val;
        case "neq": return String(x) !== val;
        case "in": return val.slice(1, -1).split(",").map((s) => s.replace(/^"|"$/g, "")).includes(String(x));
        case "gte": return String(x) >= val;
        case "lte": return String(x) <= val;
        case "is": return val === "null" ? x == null : String(x) === val;
        case "ilike": return String(x ?? "").toLowerCase().includes(val.replace(/\*/g, "").toLowerCase());
        default: return true;
      }
    });
  }
  return rows;
}

function order(rows: Row[], o: string | null) {
  if (!o) return rows;
  const keys = o.split(",").map((s) => s.split("."));
  return [...rows].sort((a, b) => {
    for (const [k, dir] of keys) {
      if (a[k] === b[k]) continue;
      const r = a[k] < b[k] ? -1 : 1;
      return dir === "desc" ? -r : r;
    }
    return 0;
  });
}

function rpc(name: string, args: Row, user: ReturnType<typeof userFromAuth>) {
  const uid = user?.id ?? "";
  switch (name) {
    case "check_invite_code": return String(args.p_code).trim().toUpperCase() in CODES;
    case "my_streak": {
      const days = new Set(T("answers").filter((a) => a.user_id === uid).map((a) => day(a.created_at)));
      let n = 0;
      const d = new Date();
      if (!days.has(day(d.toISOString()))) d.setDate(d.getDate() - 1);
      while (days.has(day(d.toISOString()))) { n++; d.setDate(d.getDate() - 1); }
      return n;
    }
    case "leaderboard":
      return T("profiles").filter((p) => p.show_in_leaderboard || p.id === uid).map((p) => {
        const a = T("answers").filter((x) => x.user_id === p.id);
        return { display_name: p.display_name, answered: a.length, correct: a.filter((x) => x.correct).length, streak: 0, is_me: p.id === uid };
      });
    case "import_bundle": return importBundle(args.p, !!args.p.demo);
    case "reset_demo": return { subjects_deleted: 0, answers_deleted: 0 };
    case "create_invite": { const c = "LERN-" + randomUUID().slice(0, 10).toUpperCase(); CODES[c] = false; T("invite_codes").push({ code: c, note: args.p_note, uses: 0, max_uses: args.p_max_uses, active: true, created_at: new Date().toISOString() }); return c; }
    case "set_invite_active": return null;
  }
  throw new Error("RPC " + name + " nicht im Mock");
}

async function body(req: IncomingMessage): Promise<Row | Row[] | null> {
  const chunks: Buffer[] = [];
  for await (const c of req) chunks.push(c as Buffer);
  const s = Buffer.concat(chunks).toString();
  return s ? JSON.parse(s) : null;
}

const send = (res: ServerResponse, code: number, data?: unknown, headers: Record<string, string> = {}) => {
  res.writeHead(code, { "content-type": "application/json", ...headers });
  res.end(data === undefined ? undefined : JSON.stringify(data));
};

const server = createServer(async (req, res) => {
  res.setHeader("access-control-allow-origin", req.headers.origin ?? "*");
  res.setHeader("access-control-allow-headers", "*");
  res.setHeader("access-control-allow-methods", "GET,POST,PATCH,DELETE,HEAD,OPTIONS");
  res.setHeader("access-control-expose-headers", "content-range");
  res.setHeader("access-control-allow-credentials", "true");
  if (req.method === "OPTIONS") return send(res, 204);
  const url = new URL(req.url!, "http://x");
  const path = url.pathname;
  try {
    /* ---- Auth ---- */
    if (path === "/auth/v1/health") return send(res, 200, { ok: true });
    if (path === "/auth/v1/signup") {
      const b = (await body(req)) as Row;
      const code = String(b.data?.invite_code ?? "").trim().toUpperCase();
      if (!(code in CODES)) return send(res, 500, { code: 500, error_code: "unexpected_failure", msg: "Database error saving new user" });
      if (users.some((u) => u.email === b.email)) return send(res, 422, { code: 422, error_code: "user_already_exists", msg: "User already registered" });
      const u = { id: randomUUID(), email: b.email, password: b.password, meta: { display_name: b.data?.display_name } };
      users.push(u);
      T("profiles").push({ id: u.id, display_name: u.meta.display_name || b.email.split("@")[0], is_admin: CODES[code], exam_date: null, show_in_leaderboard: false });
      return send(res, 200, tokenFor(u));
    }
    if (path === "/auth/v1/token") {
      const b = (await body(req)) as Row;
      const u = users.find((x) => x.email === b.email && x.password === b.password);
      if (!u) return send(res, 400, { code: 400, error_code: "invalid_credentials", msg: "Invalid login credentials" });
      return send(res, 200, tokenFor(u));
    }
    if (path === "/auth/v1/user") {
      const u = userFromAuth(req);
      return u ? send(res, 200, userJson(u)) : send(res, 401, { code: 401, msg: "invalid JWT" });
    }
    if (path === "/auth/v1/logout") return send(res, 204);

    /* ---- REST ---- */
    const m = /^\/rest\/v1\/(.+)$/.exec(path);
    if (!m) return send(res, 404, { msg: "not found" });
    const user = userFromAuth(req);
    const name = m[1];
    if (!user && name !== "rpc/check_invite_code") return send(res, 401, { message: "JWT required", code: "PGRST301" });
    if (name.startsWith("rpc/")) {
      const out = rpc(name.slice(4), ((await body(req)) as Row) ?? {}, user);
      return send(res, 200, out === null ? null : out);
    }
    const q = url.searchParams;
    const asObject = (req.headers.accept ?? "").includes("vnd.pgrst.object");
    const prefer = String(req.headers.prefer ?? "");
    if (!user) return send(res, 401, {});
    const tbl = view(name, user.id) ?? T(name);
    const scoped = (rows: Row[]) => (OWN.has(name) ? rows.filter((r) => r.user_id === user.id) : name === "profiles" ? rows.filter((r) => r.id === user.id) : rows);

    if (req.method === "GET" || req.method === "HEAD") {
      let rows = order(applyFilters(scoped(tbl), q), q.get("order"));
      const total = rows.length;
      const off = Number(q.get("offset") ?? 0);
      const lim = q.get("limit") ? Number(q.get("limit")) : undefined;
      rows = rows.slice(off, lim === undefined ? undefined : off + lim);
      const hdr = { "content-range": `${rows.length ? off : "*"}-${off + rows.length - 1}/${total}` };
      if (req.method === "HEAD") return send(res, 200, undefined, hdr);
      if (asObject) return rows.length === 1 ? send(res, 200, rows[0], hdr) : send(res, 406, { code: "PGRST116", message: "JSON object requested, multiple (or no) rows returned" }, hdr);
      return send(res, 200, rows, hdr);
    }
    if (req.method === "POST") {
      const b = (await body(req)) as Row | Row[];
      const list = Array.isArray(b) ? b : [b];
      const out: Row[] = [];
      for (const r of list) {
        const row: Row = { id: randomUUID(), active: true, created_at: new Date().toISOString(), ...r };
        if (OWN.has(name) || name === "duels" || name === "duel_results") row.user_id ??= user.id;
        if (name === "duels") row.created_by = user.id;
        if (prefer.includes("merge-duplicates")) {
          const keys = (q.get("on_conflict") ?? "id").split(",");
          const ex = T(name).find((x) => keys.every((k) => x[k] === row[k]));
          if (ex) { Object.assign(ex, r); out.push(ex); continue; }
        }
        if (name === "card_states") delete row.id;
        T(name).push(row);
        out.push(row);
      }
      if (prefer.includes("return=representation")) return send(res, 201, asObject ? out[0] : out);
      return send(res, 201);
    }
    if (req.method === "PATCH") {
      const patch = (await body(req)) as Row;
      const rows = applyFilters(scoped(T(name)), q);
      rows.forEach((r) => Object.assign(r, patch));
      return prefer.includes("return=representation") ? send(res, 200, rows) : send(res, 204);
    }
    if (req.method === "DELETE") {
      const rows = new Set(applyFilters(scoped(T(name)), q));
      db[name] = T(name).filter((r) => !rows.has(r));
      return send(res, 204);
    }
    return send(res, 405, {});
  } catch (e) {
    console.error(e);
    return send(res, 500, { message: (e as Error).message });
  }
});

seed();
const port = Number(process.argv[2] ?? 54321);
server.listen(port, "127.0.0.1", () => console.log(`mock-supabase auf http://127.0.0.1:${port}`));
