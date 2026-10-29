import type { QType } from "@/lib/content/schema";

/** Gewichtung der Prüfungsbereiche (MarketKfmAusbV § 9). */
export const EXAM_WEIGHT: Record<number, number> = { 1: 0.3, 2: 0.3, 3: 0.1, 4: 0.3 };

export const PART_NAMES: Record<number, string> = {
  1: "Entwicklung von Marketing- und Kommunikationskonzepten",
  2: "Umsetzung und Steuerung von Marketing- und Kommunikationsmaßnahmen",
  3: "Wirtschafts- und Sozialkunde",
  4: "Fallbezogenes Fachgespräch",
};
export const PART_SHORT: Record<number, string> = { 1: "Konzepte", 2: "Umsetzung", 3: "WiSo", 4: "Fachgespräch" };

export type ExamKind = "teil1" | "teil2" | "teil3" | "mini";

export type Blueprint = {
  label: string;
  parts: number[]; // Prüfungsteile, aus denen Aufgaben stammen
  minutes: number;
  count: number; // Zielanzahl Aufgaben
  types: QType[]; // erlaubte Aufgabentypen
  form: string;
  desc: string;
};

export const BLUEPRINTS: Record<ExamKind, Blueprint> = {
  teil1: {
    label: "Teil 1 – Konzeptentwicklung",
    parts: [1],
    minutes: 150,
    count: 4,
    types: ["case"],
    form: "schriftlich, ungebunden",
    desc: "Offene Handlungssituationen mit Teilaufgaben: Marktanalyse, Planung, Maßnahmen, Budget. 150 Min.",
  },
  teil2: {
    label: "Teil 2 – Umsetzung & Steuerung",
    parts: [2],
    minutes: 90,
    count: 25,
    types: ["mc", "tf", "match", "order", "cloze", "calc", "booking", "error", "ad"],
    form: "schriftlich, gebunden",
    desc: "Ankreuz-, Zuordnungs- und Rechenaufgaben inkl. Rechnungswesen. 90 Min.",
  },
  teil3: {
    label: "Teil 3 – Wirtschafts- und Sozialkunde",
    parts: [3],
    minutes: 60,
    count: 25,
    types: ["mc", "tf", "match", "order", "cloze", "calc", "error"],
    form: "schriftlich, gebunden",
    desc: "Gebundene Aufgaben zu Berufs- und Arbeitswelt, Recht, VWL. 60 Min.",
  },
  mini: {
    label: "Mini-Prüfung (20 Min)",
    parts: [2, 3],
    minutes: 20,
    count: 10,
    types: ["mc", "tf", "match", "order", "cloze", "calc", "booking", "error"],
    form: "gemischt",
    desc: "10 gemischte Aufgaben aus Teil 2 und 3 – zum schnellen Testen.",
  },
};

export function ihkGrade(percent: number): { label: string; note: number } {
  const p = Math.round(percent);
  if (p >= 92) return { label: "sehr gut", note: 1 };
  if (p >= 81) return { label: "gut", note: 2 };
  if (p >= 67) return { label: "befriedigend", note: 3 };
  if (p >= 50) return { label: "ausreichend", note: 4 };
  if (p >= 30) return { label: "mangelhaft", note: 5 };
  return { label: "ungenügend", note: 6 };
}

/** Bestehensregeln der Abschlussprüfung. */
export function overallResult(p: { 1?: number; 2?: number; 3?: number; 4?: number }) {
  const total = [1, 2, 3, 4].reduce((s, k) => s + (p[k as 1] ?? 0) * EXAM_WEIGHT[k], 0);
  const written = [p[1], p[2], p[3]];
  const writtenOk = written.filter((x) => x !== undefined && x >= 50).length;
  const anyZero = [1, 2, 3, 4].some((k) => (p[k as 1] ?? 100) < 30);
  const oralOk = (p[4] ?? 0) >= 50;
  const complete = [1, 2, 3, 4].every((k) => p[k as 1] !== undefined);
  return {
    total,
    complete,
    passed: complete && total >= 50 && writtenOk >= 2 && oralOk && !anyZero,
    reasons: [
      total < 50 && "Gesamt unter 50 Punkten",
      writtenOk < 2 && "weniger als 2 schriftliche Bereiche mit mind. „ausreichend“",
      !oralOk && "Fachgespräch unter „ausreichend“",
      anyZero && "ein Bereich „ungenügend“",
    ].filter(Boolean) as string[],
  };
}
