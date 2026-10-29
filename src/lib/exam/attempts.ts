import type { SupabaseClient } from "@supabase/supabase-js";
import { caseScore, gradeAnswer, type Answer, type CaseAns } from "@/lib/engine/grade";
import type { Concrete } from "@/lib/engine/types";
import { ihkGrade } from "./blueprint";

export type ExamState = {
  questions: Concrete[];
  answers: Answer[];
  idx: number;
  flags: boolean[];
  casesSaved?: boolean;
};

export type Attempt = {
  id: string;
  kind: "teil1" | "teil2" | "teil3" | "teil4" | "mini";
  status: "running" | "paused" | "finished" | "aborted";
  seed: number;
  duration_sec: number;
  remaining_sec: number;
  state: ExamState | Record<string, unknown>;
  score_points: number | null;
  max_points: number | null;
  percent: number | null;
  grade: string | null;
  topic_breakdown: Record<string, { points: number; max: number }> | null;
  started_at: string;
  finished_at: string | null;
};

export type Scored = {
  per: { score: number; correct: boolean; points: number }[];
  got: number;
  max: number;
  percent: number;
  breakdown: Record<string, { points: number; max: number }>;
};

export function scoreExam(state: ExamState): Scored {
  let got = 0;
  let max = 0;
  const breakdown: Scored["breakdown"] = {};
  const per = state.questions.map((q, i) => {
    const a = state.answers[i];
    const g = q.type === "case" ? { score: caseScore(q.body, a as CaseAns), correct: false } : gradeAnswer(q, a);
    const pts = g.score * q.points;
    got += pts;
    max += q.points;
    const b = (breakdown[q.topicId] ??= { points: 0, max: 0 });
    b.points += pts;
    b.max += q.points;
    return { score: g.score, correct: g.score >= 0.999, points: pts };
  });
  return { per, got, max, percent: max ? (got / max) * 100 : 0, breakdown };
}

export async function persistAttempt(sb: SupabaseClient, id: string, patch: Partial<Attempt>) {
  const { error } = await sb.from("exam_attempts").update({ ...patch, updated_at: new Date().toISOString() }).eq("id", id);
  if (error) console.warn("Prüfungsstand nicht gespeichert:", error.message);
}

export function applyScore(state: ExamState): Partial<Attempt> {
  const s = scoreExam(state);
  return {
    score_points: Math.round(s.got * 100) / 100,
    max_points: s.max,
    percent: Math.round(s.percent * 10) / 10,
    grade: s.max ? ihkGrade(s.percent).label : null,
    topic_breakdown: s.breakdown,
  };
}

/** Schreibt Einzelergebnisse in die Antworten-Statistik (für Fortschritt/Fehlerkiste). */
export async function recordExamAnswers(sb: SupabaseClient, state: ExamState, includeCases: boolean) {
  const s = scoreExam(state);
  const rows = state.questions.flatMap((q, i) =>
    q.type === "case" && !includeCases
      ? []
      : [{ topic_id: q.topicId, source_kind: q.ref.kind, source_id: q.ref.id, q_type: q.type, exam_part: q.examPart, correct: s.per[i].correct, score: s.per[i].score, mode: "pruefung" }],
  );
  if (rows.length) {
    const { error } = await sb.from("answers").insert(rows);
    if (error) console.warn(error.message);
  }
}
