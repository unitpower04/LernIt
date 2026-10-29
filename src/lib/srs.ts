// Spaced Repetition (vereinfachtes SM-2) mit drei Bewertungen.
export type Rating = "again" | "hard" | "good";
export type CardState = { ease: number; interval_days: number; reps: number; lapses: number };

export const NEW_STATE: CardState = { ease: 2.5, interval_days: 0, reps: 0, lapses: 0 };

export function review(s: CardState, r: Rating, now = new Date()): CardState & { due: string; last_review: string } {
  let { ease, interval_days: iv, reps, lapses } = s;
  if (r === "again") {
    reps = 0;
    lapses += 1;
    iv = 0;
    ease = Math.max(1.3, ease - 0.2);
  } else if (r === "hard") {
    ease = Math.max(1.3, ease - 0.15);
    iv = reps === 0 ? 1 : Math.max(1, Math.round(iv * 1.2));
    reps = Math.max(reps, 1);
  } else {
    reps += 1;
    iv = reps === 1 ? 1 : reps === 2 ? 3 : Math.round(iv * ease);
    ease = Math.min(3, ease + 0.05);
  }
  const due = new Date(now.getTime() + (iv === 0 ? 10 * 60_000 : iv * 86_400_000));
  return { ease, interval_days: iv, reps, lapses, due: due.toISOString(), last_review: now.toISOString() };
}
