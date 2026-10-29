import { parseNumber, round } from "@/lib/format";
import type { Concrete, Grade } from "./types";

export type BookingAns = { account: string; side: "S" | "H"; amount: string };
export type CaseAns = { text: string[]; checks: boolean[][] };

export type Answer =
  | number[] // mc, error, order
  | boolean
  | null
  | (string | null)[] // match
  | string[] // cloze
  | string // calc
  | BookingAns[]
  | number[][] // ad
  | CaseAns;

export type ClozeSeg = { text: string } | { blank: string[] };

export function parseCloze(text: string): ClozeSeg[] {
  const out: ClozeSeg[] = [];
  const re = /\[\[(.+?)\]\]/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push({ text: text.slice(last, m.index) });
    out.push({ blank: m[1].split("|").map((s) => s.trim()) });
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push({ text: text.slice(last) });
  return out;
}

const norm = (s: string) => s.toLowerCase().replace(/\s+/g, " ").replace(/[.,;:!?]+$/, "").trim();

function clozeMatch(given: string, accepted: string[]): boolean {
  const g = norm(given);
  if (!g) return false;
  const gn = parseNumber(given);
  return accepted.some((a) => {
    if (norm(a) === g) return true;
    const an = parseNumber(a);
    return an !== null && gn !== null && Math.abs(an - gn) < 1e-9;
  });
}

const eqSet = (a: number[], b: number[]) => a.length === b.length && [...a].sort().every((v, i) => v === [...b].sort()[i]);

export function emptyAnswer(q: Concrete): Answer {
  switch (q.type) {
    case "mc":
    case "error":
    case "order":
      return [];
    case "tf":
      return null;
    case "match":
      return q.body.items.map(() => null);
    case "cloze":
      return parseCloze(q.body.text).filter((s) => "blank" in s).map(() => "");
    case "calc":
      return "";
    case "booking":
      return [];
    case "ad":
      return q.body.parts.map(() => []);
    case "case":
      return {
        text: q.body.tasks.map(() => ""),
        checks: q.body.tasks.map((t: { checklist: string[] }) => t.checklist.map(() => false)),
      };
  }
}

export function isAnswered(q: Concrete, a: Answer): boolean {
  switch (q.type) {
    case "mc":
    case "error":
      return (a as number[]).length > 0;
    case "order":
      return (a as number[]).length === q.body.items.length;
    case "tf":
      return a !== null;
    case "match":
      return (a as (string | null)[]).every((x) => x);
    case "cloze":
      return (a as string[]).some((x) => x.trim());
    case "calc":
      return !!(a as string).trim();
    case "booking":
      return (a as BookingAns[]).length > 0;
    case "ad":
      return (a as number[][]).every((x) => x.length > 0);
    case "case":
      return (a as CaseAns).text.some((x) => x.trim());
  }
}

export function caseScore(body: Concrete["body"], a: CaseAns): number {
  let got = 0;
  let max = 0;
  body.tasks.forEach((t: { points: number; checklist: string[] }, i: number) => {
    max += t.points;
    const c = a.checks[i] ?? [];
    got += (t.points * c.filter(Boolean).length) / t.checklist.length;
  });
  return max ? got / max : 0;
}

export function gradeAnswer(q: Concrete, a: Answer): Grade {
  const done = (score: number, detail?: string): Grade => ({ score, correct: score >= 0.999, detail });
  switch (q.type) {
    case "mc": {
      const right = q.body.options.flatMap((o: { correct: boolean }, i: number) => (o.correct ? [i] : []));
      return done(eqSet(a as number[], right) ? 1 : 0);
    }
    case "tf":
      return done(a === q.body.answer ? 1 : 0);
    case "match": {
      const ans = a as (string | null)[];
      const ok = q.body.items.filter((it: { match: string }, i: number) => ans[i] === it.match).length;
      return done(ok / q.body.items.length);
    }
    case "order": {
      const ans = a as number[];
      const ok = ans.filter((v, i) => v === i).length;
      return done(ans.length === q.body.items.length ? ok / q.body.items.length : 0);
    }
    case "cloze": {
      const blanks = parseCloze(q.body.text).filter((s): s is { blank: string[] } => "blank" in s);
      const ans = a as string[];
      const ok = blanks.filter((b, i) => clozeMatch(ans[i] ?? "", b.blank)).length;
      return done(blanks.length ? ok / blanks.length : 0);
    }
    case "calc": {
      const given = parseNumber(a as string);
      if (given === null) return done(0);
      const dec = q.body.decimals ?? 2;
      const tol = q.body.tolerance ?? 0.5 * 10 ** -dec;
      return done(Math.abs(given - Number(q.body.answer)) <= tol + 1e-9 ? 1 : 0);
    }
    case "booking": {
      const key = (l: { account: string; side: string; amount: number }) => `${l.account}|${l.side}|${round(l.amount, 2)}`;
      const expected = (q.body.lines as { account: string; side: "S" | "H"; amount: number }[]).map(key);
      const given = (a as BookingAns[])
        .map((l) => ({ ...l, amount: parseNumber(l.amount) ?? NaN }))
        .filter((l) => l.account && !Number.isNaN(l.amount))
        .map(key);
      const pool = [...expected];
      let ok = 0;
      for (const g of given) {
        const i = pool.indexOf(g);
        if (i >= 0) {
          ok++;
          pool.splice(i, 1);
        }
      }
      return done(ok / Math.max(expected.length, given.length, 1));
    }
    case "error": {
      const wrong = q.body.items.flatMap((it: { wrong: boolean }, i: number) => (it.wrong ? [i] : []));
      const sel = a as number[];
      const diff = q.body.items.filter((_: unknown, i: number) => wrong.includes(i) !== sel.includes(i)).length;
      return done(Math.max(0, 1 - diff / q.body.items.length));
    }
    case "ad": {
      const parts = q.body.parts as Concrete["body"][];
      const scores = parts.map((p, i) => {
        const right = p.options.flatMap((o: { correct: boolean }, k: number) => (o.correct ? [k] : []));
        return eqSet((a as number[][])[i] ?? [], right) ? 1 : 0;
      });
      return done(scores.reduce((x: number, y: number) => x + y, 0) / parts.length);
    }
    case "case": {
      const s = caseScore(q.body, a as CaseAns);
      return { score: s, correct: s >= 0.6 };
    }
  }
}
