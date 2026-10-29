import type { QType } from "@/lib/content/schema";

export type ModeDef = {
  key: string;
  label: string;
  icon: string;
  desc: string;
  types?: QType[];
  n: number;
};

export const MODES: ModeDef[] = [
  { key: "karten", label: "Karteikarten", icon: "🃏", desc: "Spaced Repetition: fällige zuerst", n: 20 },
  { key: "mc", label: "Multiple Choice", icon: "☑️", desc: "Eine oder mehrere richtige Antworten", types: ["mc"], n: 10 },
  { key: "tf", label: "Richtig / Falsch", icon: "⚖️", desc: "Aussagen beurteilen", types: ["tf"], n: 10 },
  { key: "zuordnung", label: "Zuordnen", icon: "🔗", desc: "Begriff ↔ Definition, Ziffern eintragen", types: ["match"], n: 6 },
  { key: "reihenfolge", label: "Reihenfolge", icon: "↕️", desc: "Prozesse in die richtige Folge bringen", types: ["order"], n: 6 },
  { key: "luecke", label: "Lückentext", icon: "✍️", desc: "Fehlende Begriffe einsetzen", types: ["cloze"], n: 8 },
  { key: "rechnen", label: "Rechnen", icon: "🧮", desc: "Neue Zahlen bei jedem Durchgang", types: ["calc"], n: 8 },
  { key: "buchung", label: "Buchungssätze", icon: "📒", desc: "Soll an Haben", types: ["booking"], n: 6 },
  { key: "fall", label: "Fallstudien", icon: "📋", desc: "Offene Aufgaben (Teil 1)", types: ["case"], n: 2 },
  { key: "sprint", label: "Begriffs-Sprint", icon: "⏱️", desc: "60 Sekunden, so viele wie möglich", n: 0 },
  { key: "fehler", label: "Fehler finden", icon: "🔍", desc: "Fehlerhafte Aussagen aufspüren", types: ["error"], n: 6 },
  { key: "anzeige", label: "Anzeigenanalyse", icon: "🖼️", desc: "AIDA & Gestaltung bewerten", types: ["ad"], n: 3 },
  { key: "gemischt", label: "Alles gemischt", icon: "🎲", desc: "Zufällige Aufgaben aller Typen", n: 10 },
];

export const MODE_BY_KEY = Object.fromEntries(MODES.map((m) => [m.key, m]));
export const SPECIAL_MODES = {
  fehlerkiste: { label: "Fehlerkiste", n: 15 },
  tagesquiz: { label: "Tagesquiz", n: 10 },
} as const;
