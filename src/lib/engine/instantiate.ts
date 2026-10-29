import { evalExpr } from "@/lib/expr";
import { fmtEur, fmtNumber, fmtPct, round } from "@/lib/format";
import { makeRng, type Rng } from "@/lib/rng";
import type { Concrete, RawQuestion, RawTemplate } from "./types";
import type { VarDef } from "@/lib/content/schema";
import { DEFAULT_POINTS } from "@/lib/content/schema";

type Val = number | string | Record<string, unknown>;

function fmtVal(v: number, def: VarDef | undefined): string {
  const fmt = def && "fmt" in def ? def.fmt : undefined;
  const dec = def && "decimals" in def ? def.decimals : undefined;
  switch (fmt) {
    case "eur":
      return fmtEur(v, 2);
    case "eur0":
      return fmtEur(v, 0);
    case "pct":
      return fmtPct(v, dec ?? 1);
    case "int":
      return fmtNumber(Math.round(v), 0);
    case "d1":
      return fmtNumber(v, 1);
    case "d2":
      return fmtNumber(v, 2);
    case "raw":
      return String(v);
  }
  if (def?.type === "int") return fmtNumber(v, 0);
  if (def?.type === "dec") return fmtNumber(v, def.decimals);
  return fmtNumber(v, dec);
}

function getPath(vals: Record<string, Val>, path: string): unknown {
  const [head, ...rest] = path.split(".");
  let cur: unknown = vals[head];
  for (const p of rest) {
    if (cur && typeof cur === "object") cur = (cur as Record<string, unknown>)[p];
    else return undefined;
  }
  return cur;
}

function interpolate(s: string, vals: Record<string, Val>, defs: Record<string, VarDef>): string {
  return s.replace(/\{([A-Za-z_][\w.]*)(?:\|(\w+))?\}/g, (m, path: string, fmt?: string) => {
    const v = getPath(vals, path);
    if (v === undefined) return m;
    if (typeof v === "number") {
      const def = defs[path];
      return fmt ? fmtVal(v, { type: "expr", expr: "", fmt } as VarDef) : fmtVal(v, def);
    }
    return String(v);
  });
}

function deepMap(x: unknown, f: (s: string) => string): unknown {
  if (typeof x === "string") return f(x);
  if (Array.isArray(x)) return x.map((y) => deepMap(y, f));
  if (x && typeof x === "object")
    return Object.fromEntries(Object.entries(x).map(([k, v]) => [k, deepMap(v, f)]));
  return x;
}

export function rollVars(defs: Record<string, VarDef>, rng: Rng): Record<string, Val> {
  // Reihenfolge der Schlüssel ist nach dem Speichern in jsonb nicht garantiert:
  // erst alle unabhängigen Variablen würfeln (sortiert → reproduzierbar), dann abgeleitete (expr) nach Abhängigkeit.
  const vals: Record<string, Val> = {};
  const nums = () => Object.fromEntries(Object.entries(vals).filter(([, v]) => typeof v === "number")) as Record<string, number>;
  const entries = Object.entries(defs).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0));
  for (const [name, d] of entries) {
    switch (d.type) {
      case "int": {
        const steps = Math.floor((d.max - d.min) / d.step);
        vals[name] = d.min + Math.floor(rng() * (steps + 1)) * d.step;
        break;
      }
      case "dec": {
        const f = 10 ** d.decimals;
        const lo = Math.round(d.min * f);
        const hi = Math.round(d.max * f);
        vals[name] = (lo + Math.floor(rng() * (hi - lo + 1))) / f;
        break;
      }
      case "pick":
        vals[name] = d.options[Math.floor(rng() * d.options.length)] as Val;
        break;
    }
  }
  let pending = entries.filter(([, d]) => d.type === "expr");
  while (pending.length) {
    const rest: typeof pending = [];
    let lastErr: unknown;
    for (const [name, d] of pending) {
      if (d.type !== "expr") continue;
      try {
        const v = evalExpr(d.expr, nums());
        vals[name] = d.decimals !== undefined ? round(v, d.decimals) : v;
      } catch (e) {
        lastErr = e;
        rest.push([name, d]);
      }
    }
    if (rest.length === pending.length) throw lastErr;
    pending = rest;
  }
  return vals;
}

export function fromQuestion(q: RawQuestion, seed: number): Concrete {
  return {
    ref: { kind: "question", id: q.id },
    topicId: q.topic_id,
    type: q.type,
    examPart: q.exam_part,
    difficulty: q.difficulty,
    points: Number(q.points) || DEFAULT_POINTS[q.type],
    explanation: q.explanation,
    source: q.source,
    seed,
    body: q.body,
  };
}

/** Vorlage + Seed → konkrete Aufgabe mit Zufallswerten, automatisch berechneter Lösung. */
export function instantiate(t: RawTemplate, seed: number): Concrete {
  const rng = makeRng(seed);
  const defs = (t.vars ?? {}) as Record<string, VarDef>;
  const vals = rollVars(defs, rng);
  const numVals = Object.fromEntries(Object.entries(vals).filter(([, v]) => typeof v === "number")) as Record<string, number>;
  const evalMaybe = (x: unknown) => (typeof x === "string" ? evalExpr(x, numVals) : x);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const body: any = structuredClone(t.body);
  if (t.type === "calc") {
    body.answer = round(Number(evalMaybe(body.answer)), body.decimals ?? 2);
    vals.result = body.answer; // in Lösungsweg/Erklärung als {result} nutzbar
  }
  if (t.type === "booking") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body.lines = body.lines.map((l: any) => ({ ...l, amount: round(Number(evalMaybe(l.amount)), 2) }));
  }
  const filled = deepMap(body, (s) => interpolate(s, vals, defs)) as Concrete["body"];
  return {
    ref: { kind: "template", id: t.id },
    topicId: t.topic_id,
    type: t.type,
    examPart: t.exam_part,
    difficulty: t.difficulty,
    points: Number(t.points) || DEFAULT_POINTS[t.type],
    explanation: t.explanation ? (deepMap(t.explanation, (s) => interpolate(s, vals, defs)) as string) : null,
    source: t.source,
    seed,
    body: filled,
  };
}
