import type { QType } from "@/lib/content/schema";

export type ModeGroup = "merken" | "aufgaben" | "rechnen" | "pruefung";

export const MODE_GROUPS: { key: ModeGroup; title: string; hint: string }[] = [
  { key: "merken", title: "Merken & Wiederholen", hint: "Begriffe und Wissen einprägen – ideal zum Start eines Themas" },
  { key: "aufgaben", title: "Aufgaben üben", hint: "Wissen anwenden, wie in den gebundenen Prüfungsteilen (Teil 2 WiSo & Teil 3 Umsetzung)" },
  { key: "rechnen", title: "Rechnen & Buchen", hint: "Neue Zahlen bei jedem Durchgang" },
  { key: "pruefung", title: "Prüfungsstil", hint: "Offene und analytische Aufgaben (u. a. Teil 1)" },
];

export type ModeDef = {
  key: string;
  group?: ModeGroup;
  label: string;
  icon: string;
  desc: string;
  types?: QType[];
  n: number;
};

export const MODES: ModeDef[] = [
  { key: "karten", group: "merken", label: "Karteikarten", icon: "🃏", desc: "Spaced Repetition: fällige zuerst", n: 20 },
  { key: "mc", group: "aufgaben", label: "Multiple Choice", icon: "☑️", desc: "Eine oder mehrere richtige Antworten", types: ["mc"], n: 10 },
  { key: "tf", group: "aufgaben", label: "Richtig / Falsch", icon: "⚖️", desc: "Aussagen beurteilen", types: ["tf"], n: 10 },
  { key: "zuordnung", group: "aufgaben", label: "Zuordnen", icon: "🔗", desc: "Begriff ↔ Definition, Ziffern eintragen", types: ["match"], n: 6 },
  { key: "reihenfolge", group: "aufgaben", label: "Reihenfolge", icon: "↕️", desc: "Prozesse in die richtige Folge bringen", types: ["order"], n: 6 },
  { key: "luecke", group: "aufgaben", label: "Lückentext", icon: "✍️", desc: "Fehlende Begriffe einsetzen", types: ["cloze"], n: 8 },
  { key: "rechnen", group: "rechnen", label: "Rechnen", icon: "🧮", desc: "Neue Zahlen bei jedem Durchgang", types: ["calc"], n: 8 },
  { key: "buchung", group: "rechnen", label: "Buchungssätze", icon: "📒", desc: "Soll an Haben", types: ["booking"], n: 6 },
  { key: "fall", group: "pruefung", label: "Fallstudien", icon: "📋", desc: "Offene Aufgaben (Teil 1)", types: ["case"], n: 2 },
  { key: "sprint", group: "merken", label: "Begriffs-Sprint", icon: "⏱️", desc: "60 Sekunden, so viele wie möglich", n: 0 },
  { key: "fehler", group: "aufgaben", label: "Fehler finden", icon: "🔍", desc: "Fehlerhafte Aussagen aufspüren", types: ["error"], n: 6 },
  { key: "anzeige", group: "pruefung", label: "Anzeigenanalyse", icon: "🖼️", desc: "AIDA & Gestaltung bewerten", types: ["ad"], n: 3 },
  { key: "gemischt", label: "Alles gemischt", icon: "🎲", desc: "Zufällige Aufgaben aller Typen", n: 10 },
];

export const MODE_BY_KEY = Object.fromEntries(MODES.map((m) => [m.key, m]));
export const SPECIAL_MODES = {
  fehlerkiste: { label: "Fehlerkiste", n: 15 },
  tagesquiz: { label: "Tagesquiz", n: 10 },
} as const;
