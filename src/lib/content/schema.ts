// Inhaltsformat: Single Source of Truth für App, Import-Skript und Admin-Seite.
import { z } from "zod";

const num = z.union([z.number(), z.string()]); // String = Formel (nur in Vorlagen sinnvoll)

export const mcBody = z.object({
  prompt: z.string(),
  options: z.array(z.object({ text: z.string(), correct: z.boolean() })).min(2),
});
export const tfBody = z.object({ statement: z.string(), answer: z.boolean() });
export const matchBody = z.object({
  prompt: z.string(),
  items: z.array(z.object({ term: z.string(), match: z.string() })).min(2),
  distractors: z.array(z.string()).default([]),
});
export const orderBody = z.object({ prompt: z.string(), items: z.array(z.string()).min(2) });
export const clozeBody = z.object({
  prompt: z.string().optional(),
  /** Lücken als [[Antwort]] oder [[Antwort|Alternative|…]] */
  text: z.string(),
});
export const calcBody = z.object({
  prompt: z.string(),
  answer: num,
  unit: z.string().optional(),
  decimals: z.number().int().min(0).max(6).default(2),
  tolerance: z.number().optional(),
  steps: z.array(z.string()).default([]),
});
export const bookingBody = z.object({
  prompt: z.string(),
  accounts: z.array(z.string()).min(2),
  lines: z
    .array(z.object({ account: z.string(), side: z.enum(["S", "H"]), amount: num }))
    .min(2),
});
export const caseBody = z.object({
  situation: z.string(),
  tasks: z
    .array(
      z.object({
        text: z.string(),
        points: z.number(),
        sample: z.string(),
        checklist: z.array(z.string()).min(1),
      }),
    )
    .min(1),
});
export const errorBody = z.object({
  prompt: z.string(),
  items: z.array(z.object({ text: z.string(), wrong: z.boolean(), fix: z.string().optional() })).min(2),
});
export const adBody = z.object({
  prompt: z.string(),
  imageUrl: z.string().optional(),
  adText: z.string().optional(),
  parts: z.array(mcBody).min(1),
});

export const QTYPES = ["mc", "tf", "match", "order", "cloze", "calc", "booking", "case", "error", "ad"] as const;
export type QType = (typeof QTYPES)[number];

export const bodyByType = {
  mc: mcBody,
  tf: tfBody,
  match: matchBody,
  order: orderBody,
  cloze: clozeBody,
  calc: calcBody,
  booking: bookingBody,
  case: caseBody,
  error: errorBody,
  ad: adBody,
} as const;

export type McBody = z.infer<typeof mcBody>;
export type TfBody = z.infer<typeof tfBody>;
export type MatchBody = z.infer<typeof matchBody>;
export type OrderBody = z.infer<typeof orderBody>;
export type ClozeBody = z.infer<typeof clozeBody>;
export type CalcBody = z.infer<typeof calcBody>;
export type BookingBody = z.infer<typeof bookingBody>;
export type CaseBody = z.infer<typeof caseBody>;
export type ErrorBody = z.infer<typeof errorBody>;
export type AdBody = z.infer<typeof adBody>;

export const DEFAULT_POINTS: Record<QType, number> = {
  mc: 2,
  tf: 1,
  match: 4,
  order: 3,
  cloze: 3,
  calc: 5,
  booking: 4,
  case: 25,
  error: 3,
  ad: 6,
};

const questionBase = {
  key: z.string().min(1).optional(),
  exam_part: z.number().int().min(1).max(3),
  difficulty: z.number().int().min(1).max(3).default(2),
  points: z.number().positive().optional(),
  explanation: z.string().optional(),
  source: z.string().optional(),
};

function variants<T extends Record<string, z.ZodTypeAny>>(extra: T) {
  return QTYPES.map((t) =>
    z.object({ ...questionBase, ...extra, type: z.literal(t), body: bodyByType[t] }),
  ) as unknown as [z.ZodObject<any>, ...z.ZodObject<any>[]];
}

export const questionSchema = z.discriminatedUnion("type", variants({}));

// Vorlagen-Variablen
export const varSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("int"), min: z.number(), max: z.number(), step: z.number().default(1), fmt: z.string().optional() }),
  z.object({ type: z.literal("dec"), min: z.number(), max: z.number(), decimals: z.number().int().default(1), fmt: z.string().optional() }),
  z.object({ type: z.literal("pick"), options: z.array(z.any()).min(1) }),
  z.object({ type: z.literal("expr"), expr: z.string(), decimals: z.number().int().optional(), fmt: z.string().optional() }),
]);
export type VarDef = z.infer<typeof varSchema>;

export const templateSchema = z.discriminatedUnion(
  "type",
  variants({ vars: z.record(z.string(), varSchema).default({}) }),
);

export const flashcardSchema = z.object({
  key: z.string().optional(),
  front: z.string(),
  back: z.string(),
  hint: z.string().optional(),
  difficulty: z.number().int().min(1).max(3).default(2),
  source: z.string().optional(),
});
export const glossarySchema = z.object({
  key: z.string().optional(),
  term: z.string(),
  definition: z.string(),
  source: z.string().optional(),
});
export const summarySchema = z.object({
  key: z.string().optional(),
  title: z.string(),
  content_md: z.string(),
  source: z.string().optional(),
});
export const caseSchema = z.object({
  key: z.string(),
  title: z.string(),
  situation: z.string(),
  prompts: z.array(z.object({ question: z.string(), sample: z.array(z.string()).min(1) })).min(1),
  source: z.string().optional(),
});

export const topicDef = z.object({
  key: z.string(),
  name: z.string(),
  exam_parts: z.array(z.number().int().min(1).max(4)).default([]),
});
export const lfDef = z.object({
  key: z.string(),
  code: z.string().optional(),
  name: z.string(),
  exam_parts: z.array(z.number().int().min(1).max(4)).default([]),
  topics: z.array(topicDef).default([]),
});
export const subjectDef = z.object({
  key: z.string(),
  name: z.string(),
  description: z.string().optional(),
  color: z.string().optional(),
  learning_fields: z.array(lfDef).default([]),
});

/** Inhalte zu einem Thema (Thema per key referenziert). */
export const itemsDef = z.object({
  topic: z.string(),
  summary: summarySchema.optional(),
  flashcards: z.array(flashcardSchema).default([]),
  glossary: z.array(glossarySchema).default([]),
  questions: z.array(questionSchema).default([]),
  templates: z.array(templateSchema).default([]),
  cases: z.array(caseSchema).default([]),
});

/** Eine Inhaltsdatei in content/**.json */
export const bundleSchema = z.object({
  /** true = Demo-Daten (werden mit `npm run content:reset-demo` entfernt) */
  demo: z.boolean().default(false),
  subjects: z.array(subjectDef).default([]),
  items: z.array(itemsDef).default([]),
});
export type Bundle = z.infer<typeof bundleSchema>;
