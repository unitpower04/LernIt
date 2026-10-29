import { drawConcrete } from "@/lib/data/pool";
import type { Concrete, RawQuestion, RawTemplate } from "@/lib/engine/types";
import { fromQuestion, instantiate } from "@/lib/engine/instantiate";
import { makeRng, shuffle } from "@/lib/rng";
import { BLUEPRINTS, type ExamKind } from "./blueprint";

type Pool = { questions: RawQuestion[]; templates: RawTemplate[] };

/**
 * Stellt einen Prüfungssatz zusammen: Aufgaben möglichst gleichmäßig über Themen verteilt
 * (Round-Robin), Vorlagen mit frischen Zufallswerten, jede Quelle höchstens einmal.
 */
export function composeExam(kind: ExamKind, pool: Pool, seed: number): Concrete[] {
  const bp = BLUEPRINTS[kind];
  const rng = makeRng(seed);
  type Item = { q: RawQuestion; tpl: boolean };
  const byTopic = new Map<string, Item[]>();
  for (const q of pool.questions) (byTopic.get(q.topic_id) ?? byTopic.set(q.topic_id, []).get(q.topic_id)!).push({ q, tpl: false });
  for (const q of pool.templates) (byTopic.get(q.topic_id) ?? byTopic.set(q.topic_id, []).get(q.topic_id)!).push({ q, tpl: true });
  const queues = shuffle([...byTopic.values()].map((l) => shuffle(l, rng)), rng);

  const picked: Item[] = [];
  while (picked.length < bp.count && queues.some((l) => l.length)) {
    for (const l of queues) {
      if (picked.length >= bp.count) break;
      const it = l.shift();
      if (it) picked.push(it);
    }
  }
  const out = picked.map((it) => {
    const s = Math.floor(rng() * 2147483647);
    return it.tpl ? instantiate(it.q as RawTemplate, s) : fromQuestion(it.q, s);
  });
  // Rechen-/Buchungsaufgaben nach hinten, wie in gebundenen Prüfungen üblich
  const weight = (c: Concrete) => (c.type === "calc" || c.type === "booking" ? 1 : 0);
  return kind === "teil1" ? out : out.map((c, i) => ({ c, i })).sort((a, b) => weight(a.c) - weight(b.c) || a.i - b.i).map((x) => x.c);
}

export function poolSize(pool: Pool) {
  return pool.questions.length + pool.templates.length;
}

export { drawConcrete };
