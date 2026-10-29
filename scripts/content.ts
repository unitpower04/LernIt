/* Inhalte validieren / importieren / Demo-Daten entfernen.
 *   npm run content:validate            – nur prüfen (inkl. Selbsttest aller Vorlagen)
 *   npm run content:import              – in Supabase schreiben (benötigt SUPABASE_SERVICE_ROLE_KEY)
 *   npm run content:import -- --emit    – JSON-Payload je Datei als SQL ausgeben (für SQL-Editor/MCP)
 *   npm run content:reset-demo          – alle Demo-Daten entfernen
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { createClient } from "@supabase/supabase-js";
import { withKeys } from "../src/lib/content/keys";
import { bundleSchema, type Bundle } from "../src/lib/content/schema";
import { emptyAnswer, gradeAnswer } from "../src/lib/engine/grade";
import { fromQuestion, instantiate } from "../src/lib/engine/instantiate";
import { solve } from "../src/lib/engine/solve";
import type { RawQuestion, RawTemplate } from "../src/lib/engine/types";
import { DEFAULT_POINTS } from "../src/lib/content/schema";

const ROOT = join(__dirname, "..", "content");
const args = process.argv.slice(2);
const cmd = args[0] ?? "validate";

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith(".json") ? [p] : [];
  });
}

function load(): { file: string; bundle: Bundle }[] {
  const out: { file: string; bundle: Bundle }[] = [];
  let bad = 0;
  for (const f of walk(ROOT)) {
    const rel = relative(ROOT, f);
    try {
      const parsed = bundleSchema.safeParse(JSON.parse(readFileSync(f, "utf8")));
      if (!parsed.success) {
        bad++;
        console.error(`✗ ${rel}`);
        for (const i of parsed.error.issues.slice(0, 8)) console.error(`   ${i.path.join(".")}: ${i.message}`);
        continue;
      }
      out.push({ file: rel, bundle: withKeys(parsed.data) });
    } catch (e) {
      bad++;
      console.error(`✗ ${rel}: ${(e as Error).message}`);
    }
  }
  if (bad) process.exit(1);
  return out;
}

/** Struktur- und Referenz-Check + Selbsttest: richtige Antwort muss volle Punktzahl ergeben. */
function check(all: { file: string; bundle: Bundle }[]) {
  const topics = new Set(all.flatMap((a) => a.bundle.subjects.flatMap((s) => s.learning_fields.flatMap((l) => l.topics.map((t) => t.key)))));
  const keys = new Set<string>();
  let problems = 0;
  const fail = (m: string) => {
    problems++;
    console.error("✗ " + m);
  };
  for (const { file, bundle } of all) {
    for (const it of bundle.items) {
      if (!topics.has(it.topic) && !process.env.ALLOW_EXTERNAL_TOPICS) fail(`${file}: Thema "${it.topic}" ist in keiner Strukturdatei definiert (Import prüft zusätzlich gegen die DB)`);
      const dupe = (k?: string) => {
        if (!k) return;
        if (keys.has(k)) fail(`${file}: doppelter key ${k}`);
        keys.add(k);
      };
      for (const f of it.flashcards) dupe(f.key);
      for (const g of it.glossary) dupe(g.key);
      for (const c of it.cases) dupe(c.key);
      for (const q of it.questions) {
        dupe(q.key);
        const raw: RawQuestion = { id: q.key!, topic_id: it.topic, type: q.type, exam_part: q.exam_part, difficulty: q.difficulty, points: q.points ?? DEFAULT_POINTS[q.type], body: q.body, explanation: q.explanation ?? null, source: q.source ?? null };
        const c = fromQuestion(raw, 1);
        const g = gradeAnswer(c, solve(c));
        if (!g.correct) fail(`${file}: ${q.key} – Musterlösung wird nicht als richtig gewertet`);
        if (q.type === "mc" && !q.body.options.some((o: { correct: boolean }) => o.correct)) fail(`${file}: ${q.key} – keine richtige Antwort`);
        if (!gradeAnswer(c, emptyAnswer(c)).correct === false && q.type !== "case") fail(`${file}: ${q.key} – leere Antwort gilt als richtig`);
      }
      for (const t of it.templates) {
        dupe(t.key);
        for (let seed = 1; seed <= 40; seed++) {
          try {
            const raw: RawTemplate = { id: t.key!, topic_id: it.topic, type: t.type, exam_part: t.exam_part, difficulty: t.difficulty, points: t.points ?? DEFAULT_POINTS[t.type], body: t.body, explanation: t.explanation ?? null, source: t.source ?? null, vars: t.vars };
            const c = instantiate(raw, seed * 7919);
            const text = JSON.stringify(c.body) + (c.explanation ?? "");
            if (/\{[A-Za-z_][\w.]*(\|\w+)?\}/.test(text)) throw new Error("unaufgelöster Platzhalter: " + (text.match(/\{[A-Za-z_][\w.]*(\|\w+)?\}/) ?? [""])[0]);
            const g = gradeAnswer(c, solve(c));
            if (!g.correct) throw new Error("Musterlösung nicht richtig gewertet");
            if (t.type === "mc") {
              const texts = c.body.options.map((o: { text: string }) => o.text);
              if (new Set(texts).size !== texts.length) throw new Error("doppelte Antwortoptionen " + texts.join(" | "));
            }
          } catch (e) {
            fail(`${file}: Vorlage ${t.key} (Seed ${seed * 7919}) – ${(e as Error).message}`);
            break;
          }
        }
      }
    }
  }
  if (problems) {
    console.error(`\n${problems} Problem(e).`);
    process.exit(1);
  }
}

function summary(all: { file: string; bundle: Bundle }[]) {
  const sum = { subjects: 0, topics: 0, cards: 0, glossary: 0, questions: 0, templates: 0, cases: 0, summaries: 0 };
  for (const { bundle } of all) {
    sum.subjects += bundle.subjects.length;
    sum.topics += bundle.subjects.reduce((s, x) => s + x.learning_fields.reduce((a, l) => a + l.topics.length, 0), 0);
    for (const it of bundle.items) {
      sum.cards += it.flashcards.length;
      sum.glossary += it.glossary.length;
      sum.questions += it.questions.length;
      sum.templates += it.templates.length;
      sum.cases += it.cases.length;
      sum.summaries += it.summary ? 1 : 0;
    }
  }
  return sum;
}

async function main() {
  if (cmd === "validate") {
    const all = load();
    check(all);
    console.log("✓ Inhalte gültig:", summary(all));
    return;
  }
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (cmd === "emit") {
    const all = load();
    check(all);
    for (const { bundle } of all) console.log(`select public.import_bundle(${"$json$"}${JSON.stringify({ ...bundle, source: "emit" })}${"$json$"}::jsonb);`);
    return;
  }
  if (!url || !key) {
    console.error("NEXT_PUBLIC_SUPABASE_URL und SUPABASE_SERVICE_ROLE_KEY müssen in .env.local gesetzt sein.");
    process.exit(1);
  }
  const sb = createClient(url, key, { auth: { persistSession: false } });
  if (cmd === "reset-demo") {
    const { data, error } = await sb.rpc("reset_demo", { p_wipe_attempts: true });
    if (error) throw error;
    console.log("✓ Demo-Daten entfernt:", data);
    return;
  }
  if (cmd === "import") {
    const all = load();
    check(all);
    // Strukturdateien zuerst, damit Themen existieren
    all.sort((a, b) => b.bundle.subjects.length - a.bundle.subjects.length);
    for (const { file, bundle } of all) {
      const { data, error } = await sb.rpc("import_bundle", { p: { ...bundle, source: file } });
      if (error) throw new Error(`${file}: ${error.message}`);
      console.log(`✓ ${file}`, data);
    }
    return;
  }
  console.error("Unbekannter Befehl:", cmd);
  process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
