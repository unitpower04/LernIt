import type { QType } from "@/lib/content/schema";

export type Ref = { kind: "question" | "template"; id: string };

/** Eine konkrete, anzeigbare Aufgabe (Vorlagen sind bereits mit Zufallswerten gefüllt). */
export type Concrete = {
  ref: Ref;
  topicId: string;
  type: QType;
  examPart: number;
  difficulty: number;
  points: number;
  explanation?: string | null;
  source?: string | null;
  seed: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any;
};

export type RawQuestion = {
  id: string;
  topic_id: string;
  type: QType;
  exam_part: number;
  difficulty: number;
  points: number;
  body: unknown;
  explanation: string | null;
  source: string | null;
};
export type RawTemplate = RawQuestion & { vars: Record<string, unknown> };

export type Grade = { score: number; correct: boolean; detail?: string };
