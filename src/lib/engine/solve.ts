// Erzeugt die jeweils richtige Antwort – für Selbsttests (Import-Check, E2E).
import { parseCloze, type Answer } from "./grade";
import type { Concrete } from "./types";

export function solve(q: Concrete): Answer {
  const b = q.body;
  switch (q.type) {
    case "mc":
      return b.options.flatMap((o: { correct: boolean }, i: number) => (o.correct ? [i] : []));
    case "tf":
      return b.answer;
    case "match":
      return b.items.map((i: { match: string }) => i.match);
    case "order":
      return b.items.map((_: unknown, i: number) => i);
    case "cloze":
      return parseCloze(b.text).flatMap((s) => ("blank" in s ? [s.blank[0]] : []));
    case "calc":
      return String(b.answer);
    case "booking":
      return b.lines.map((l: { account: string; side: "S" | "H"; amount: number }) => ({ ...l, amount: String(l.amount) }));
    case "error":
      return b.items.flatMap((i: { wrong: boolean }, k: number) => (i.wrong ? [k] : []));
    case "ad":
      return b.parts.map((p: { options: { correct: boolean }[] }) => p.options.flatMap((o, i) => (o.correct ? [i] : [])));
    case "case":
      return {
        text: b.tasks.map(() => "x"),
        checks: b.tasks.map((t: { checklist: string[] }) => t.checklist.map(() => true)),
      };
  }
}
