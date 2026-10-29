import type { SupabaseClient } from "@supabase/supabase-js";
import type { QType } from "@/lib/content/schema";
import { fromQuestion, instantiate } from "@/lib/engine/instantiate";
import type { Concrete, RawQuestion, RawTemplate } from "@/lib/engine/types";
import { makeRng, randomSeed, shuffle, type Rng } from "@/lib/rng";

export type Flashcard = { id: string; topic_id: string; front: string; back: string; hint: string | null; difficulty: number };

const Q_COLS = "id,topic_id,type,exam_part,difficulty,points,body,explanation,source";
const PAGE = 1000;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function fetchAll<T>(build: (from: number, to: number) => PromiseLike<{ data: any; error: any }>): Promise<T[]> {
  const out: T[] = [];
  for (let from = 0; ; from += PAGE) {
    const { data, error } = await build(from, from + PAGE - 1);
    if (error) throw new Error(error.message);
    out.push(...(data as T[]));
    if (!data || data.length < PAGE) break;
  }
  return out;
}

export type PoolFilter = { topicIds?: string[]; part?: number | null; parts?: number[]; types?: readonly QType[] };

export async function fetchPool(sb: SupabaseClient, f: PoolFilter): Promise<{ questions: RawQuestion[]; templates: RawTemplate[] }> {
  if (f.topicIds && f.topicIds.length === 0) return { questions: [], templates: [] };
  const mk = (table: string, cols: string) => (from: number, to: number) => {
    let q = sb.from(table).select(cols).eq("active", true);
    if (f.topicIds) q = q.in("topic_id", f.topicIds);
    if (f.part) q = q.eq("exam_part", f.part);
    if (f.parts) q = q.in("exam_part", f.parts);
    if (f.types) q = q.in("type", [...f.types]);
    return q.order("id").range(from, to);
  };
  const [questions, templates] = await Promise.all([
    fetchAll<RawQuestion>(mk("questions", Q_COLS)),
    fetchAll<RawTemplate>(mk("question_templates", Q_COLS + ",vars")),
  ]);
  return { questions, templates };
}

export async function fetchByIds(sb: SupabaseClient, kind: "question" | "template", ids: string[]) {
  if (!ids.length) return [];
  const table = kind === "question" ? "questions" : "question_templates";
  const cols = kind === "question" ? Q_COLS : Q_COLS + ",vars";
  const { data } = await sb.from(table).select(cols).in("id", ids).eq("active", true);
  return (data ?? []) as unknown as (RawQuestion | RawTemplate)[];
}

/** Konkrete Aufgaben aus dem Pool ziehen. Vorlagen bekommen frische Zufallswerte. */
export function drawConcrete(
  pool: { questions: RawQuestion[]; templates: RawTemplate[] },
  n: number,
  rng: Rng,
  weight?: (topicId: string) => number,
): Concrete[] {
  type Item = { q: RawQuestion; tpl: boolean };
  const items: Item[] = [...pool.questions.map((q) => ({ q, tpl: false })), ...pool.templates.map((q) => ({ q, tpl: true }))];
  // gewichtete Zufallsreihenfolge (Efraimidis-Spirakis)
  const keyed = items.map((it) => {
    const w = Math.max(0.05, weight ? weight(it.q.topic_id) : 1);
    return { it, k: Math.pow(rng(), 1 / w) };
  });
  keyed.sort((a, b) => b.k - a.k);
  return keyed.slice(0, n).map(({ it }) => {
    const seed = Math.floor(rng() * 2147483647);
    return it.tpl ? instantiate(it.q as RawTemplate, seed) : fromQuestion(it.q, seed);
  });
}

export async function fetchFlashcards(sb: SupabaseClient, topicIds: string[]): Promise<Flashcard[]> {
  if (!topicIds.length) return [];
  return fetchAll<Flashcard>((from, to) =>
    sb.from("flashcards").select("id,topic_id,front,back,hint,difficulty").eq("active", true).in("topic_id", topicIds).order("id").range(from, to),
  );
}

export { makeRng, randomSeed, shuffle };

/** Anzahl Aufgaben je Typ (Fragen + Vorlagen) im Auswahlbereich. */
export async function fetchTypeCounts(sb: SupabaseClient, topicIds: string[], part: number | null): Promise<Record<string, number>> {
  const out: Record<string, number> = {};
  if (!topicIds.length) return out;
  for (const table of ["questions", "question_templates"]) {
    const rows = await fetchAll<{ type: string }>((from, to) => {
      let q = sb.from(table).select("type").eq("active", true).in("topic_id", topicIds);
      if (part) q = q.eq("exam_part", part);
      return q.order("id").range(from, to);
    });
    rows.forEach((r) => (out[r.type] = (out[r.type] ?? 0) + 1));
  }
  return out;
}
