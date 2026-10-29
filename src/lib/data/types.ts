export type Subject = { id: string; key: string; name: string; description: string | null; color: string | null; sort: number };
export type LearningField = { id: string; key: string; subject_id: string; code: string | null; name: string; exam_parts: number[]; sort: number };
export type Topic = { id: string; key: string; learning_field_id: string; name: string; exam_parts: number[]; sort: number };
export type Counts = { topic_id: string; cards: number; questions: number; templates: number };
export type Profile = {
  id: string;
  display_name: string;
  is_admin: boolean;
  exam_date: string | null;
  show_in_leaderboard: boolean;
};

export type Tree = {
  subjects: Subject[];
  lfs: LearningField[];
  topics: Topic[];
  counts: Record<string, Counts>;
};

export type Scope =
  | { kind: "all" }
  | { kind: "subject"; id: string }
  | { kind: "lf"; id: string }
  | { kind: "topic"; id: string };

export const scopeToParam = (s: Scope): string => (s.kind === "all" ? "all" : `${s.kind[0]}:${s.id}`);
export function scopeFromParam(p: string | null): Scope {
  if (!p || p === "all") return { kind: "all" };
  const [k, id] = p.split(":");
  if (k === "s") return { kind: "subject", id };
  if (k === "l") return { kind: "lf", id };
  if (k === "t") return { kind: "topic", id };
  return { kind: "all" };
}

export function topicIdsInScope(tree: Tree, scope: Scope): string[] {
  const lfOf = (t: Topic) => tree.lfs.find((l) => l.id === t.learning_field_id);
  switch (scope.kind) {
    case "all":
      return tree.topics.map((t) => t.id);
    case "topic":
      return [scope.id];
    case "lf":
      return tree.topics.filter((t) => t.learning_field_id === scope.id).map((t) => t.id);
    case "subject":
      return tree.topics.filter((t) => lfOf(t)?.subject_id === scope.id).map((t) => t.id);
  }
}

export function scopeLabel(tree: Tree, scope: Scope): string {
  switch (scope.kind) {
    case "all":
      return "Alles gemischt";
    case "subject":
      return tree.subjects.find((s) => s.id === scope.id)?.name ?? "Fach";
    case "lf": {
      const l = tree.lfs.find((x) => x.id === scope.id);
      return l ? `${l.code ? l.code + " " : ""}${l.name}` : "Lernfeld";
    }
    case "topic":
      return tree.topics.find((t) => t.id === scope.id)?.name ?? "Thema";
  }
}
