import type { SupabaseClient } from "@supabase/supabase-js";
import type { Tree } from "./data/types";
import { EXAM_WEIGHT } from "./exam/blueprint";

export type TopicProgress = {
  topicId: string;
  attempts: number;
  correct: number;
  lastAt: string | null;
  cardsSeen: number;
  cardsMature: number;
  cardsDue: number;
  hasContent: boolean;
  mastery: number; // 0..1
};

type StatRow = { topic_id: string; attempts: number; correct: number; last_at: string };
type CardRow = { topic_id: string; seen: number; mature: number; due: number };

/** Beherrschungsgrad aus Trefferquote, Wiederholungen (Karten) und Zeit seit dem letzten Üben. */
export function masteryOf(p: Omit<TopicProgress, "mastery">, cardsTotal: number, now = Date.now()): number {
  if (!p.attempts && !p.cardsSeen) return 0;
  const acc = (p.correct + 1) / (p.attempts + 2);
  const conf = Math.min(1, p.attempts / 8);
  const qPart = p.attempts ? acc * (0.4 + 0.6 * conf) : 0;
  const cPart = cardsTotal ? Math.min(1, (p.cardsMature + 0.3 * (p.cardsSeen - p.cardsMature)) / cardsTotal) : 0;
  const base = p.attempts && cardsTotal ? 0.6 * qPart + 0.4 * cPart : p.attempts ? qPart : cPart;
  const days = p.lastAt ? (now - new Date(p.lastAt).getTime()) / 86_400_000 : 60;
  const decay = Math.exp(-days / 25);
  return Math.max(0, Math.min(1, base * (0.65 + 0.35 * decay)));
}

export async function loadProgress(sb: SupabaseClient, tree: Tree): Promise<Record<string, TopicProgress>> {
  const [a, c] = await Promise.all([sb.from("my_topic_stats").select("*"), sb.from("my_card_stats").select("*")]);
  const stats = new Map(((a.data ?? []) as StatRow[]).map((r) => [r.topic_id, r]));
  const cards = new Map(((c.data ?? []) as CardRow[]).map((r) => [r.topic_id, r]));
  const out: Record<string, TopicProgress> = {};
  for (const t of tree.topics) {
    const s = stats.get(t.id);
    const cs = cards.get(t.id);
    const counts = tree.counts[t.id];
    const total = counts ? counts.cards : 0;
    const base = {
      topicId: t.id,
      attempts: s?.attempts ?? 0,
      correct: s?.correct ?? 0,
      lastAt: s?.last_at ?? null,
      cardsSeen: cs?.seen ?? 0,
      cardsMature: cs?.mature ?? 0,
      cardsDue: cs?.due ?? 0,
      hasContent: !!counts && counts.cards + counts.questions + counts.templates > 0,
    };
    out[t.id] = { ...base, mastery: masteryOf(base, total) };
  }
  return out;
}

/** Durchschnitt über Themen, gewichtet nach Inhaltsmenge; Themen ohne Inhalt zählen nicht. */
export function avgMastery(tree: Tree, prog: Record<string, TopicProgress>, topicIds: string[]): number | null {
  let sum = 0;
  let w = 0;
  for (const id of topicIds) {
    const p = prog[id];
    const c = tree.counts[id];
    if (!p || !p.hasContent || !c) continue;
    const weight = Math.sqrt(c.cards + c.questions + c.templates);
    sum += p.mastery * weight;
    w += weight;
  }
  return w ? sum / w : null;
}

export type Recommendation = { topicId: string; group: "now" | "repeat" | "ok"; priority: number; reason: string };

export function recommend(tree: Tree, prog: Record<string, TopicProgress>): Recommendation[] {
  const recs: Recommendation[] = [];
  for (const t of tree.topics) {
    const p = prog[t.id];
    if (!p || !p.hasContent) continue;
    const parts = t.exam_parts.length ? t.exam_parts : tree.lfs.find((l) => l.id === t.learning_field_id)?.exam_parts ?? [];
    const weight = parts.length ? Math.max(...parts.map((x) => EXAM_WEIGHT[x] ?? 0.1)) : 0.15;
    const gap = 1 - p.mastery;
    const priority = gap * (0.5 + weight * 2);
    if (p.mastery < 0.55) {
      recs.push({
        topicId: t.id,
        group: "now",
        priority,
        reason: p.attempts || p.cardsSeen ? `Beherrschung ${Math.round(p.mastery * 100)} %` : "Noch nicht geübt",
      });
    } else if (p.cardsDue > 0 || p.mastery < 0.8) {
      recs.push({
        topicId: t.id,
        group: "repeat",
        priority,
        reason: p.cardsDue > 0 ? `${p.cardsDue} Karte${p.cardsDue === 1 ? "" : "n"} fällig` : `Beherrschung ${Math.round(p.mastery * 100)} %`,
      });
    } else {
      recs.push({ topicId: t.id, group: "ok", priority, reason: `Sitzt (${Math.round(p.mastery * 100)} %)` });
    }
  }
  return recs.sort((a, b) => b.priority - a.priority);
}
