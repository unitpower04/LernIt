import type { Bundle } from "./schema";

/** Kleiner, stabiler Hash (FNV-1a) – läuft im Browser und in Node gleich. */
export function hash(x: unknown): string {
  const s = JSON.stringify(x);
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(36);
}

/** Ergänzt fehlende Schlüssel (für idempotenten Upsert). Besser: im Inhalt eigene `key`s vergeben. */
export function withKeys(b: Bundle): Bundle {
  for (const it of b.items) {
    for (const f of it.flashcards) f.key ??= `${it.topic}/card-${hash([f.front, f.back])}`;
    for (const g of it.glossary) g.key ??= `${it.topic}/gl-${hash(g.term)}`;
    for (const q of it.questions) q.key ??= `${it.topic}/q-${hash([q.type, q.body])}`;
    for (const t of it.templates) t.key ??= `${it.topic}/t-${hash([t.type, t.body])}`;
    if (it.summary) it.summary.key ??= `${it.topic}/summary`;
  }
  return b;
}

export function summarize(b: Bundle) {
  const sum = { subjects: b.subjects.length, topics: 0, cards: 0, glossary: 0, questions: 0, templates: 0, cases: 0, summaries: 0 };
  sum.topics = b.subjects.reduce((s, x) => s + x.learning_fields.reduce((a, l) => a + l.topics.length, 0), 0);
  for (const it of b.items) {
    sum.cards += it.flashcards.length;
    sum.glossary += it.glossary.length;
    sum.questions += it.questions.length;
    sum.templates += it.templates.length;
    sum.cases += it.cases.length;
    sum.summaries += it.summary ? 1 : 0;
  }
  return sum;
}
