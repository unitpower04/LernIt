// Kompakte Schreibhilfe für Inhalte. `npm run content:build` erzeugt daraus content/real/*.json.
// Konvention: Fragen/Karten bekommen fortlaufende Schlüssel je Thema (wsp-xyz-q01 …). Bei Änderungen
// bestehender Einträge die Reihenfolge nicht verschieben, neue Einträge hinten anhängen.

const pad = (n) => String(n).padStart(2, "0");

/** Thema-Builder: part = Prüfungsteil (1 Konzepte, 2 WiSo, 3 Umsetzung). */
export function topic(key, defaults = {}) {
  const d = { part: 2, src: "", pts: undefined, ...defaults };
  const n = { q: 0, t: 0, c: 0, g: 0 };
  const out = { topic: key, flashcards: [], glossary: [], questions: [], templates: [], cases: [] };
  const base = (o = {}) => ({
    exam_part: o.part ?? d.part,
    difficulty: o.d ?? 2,
    ...((o.pts ?? d.pts) ? { points: o.pts ?? d.pts } : {}),
    ...(o.e ? { explanation: o.e } : {}),
    ...((o.src ?? d.src) ? { source: o.src ?? d.src } : {}),
  });
  const opts = (right, wrong) => [
    ...[].concat(right).map((text) => ({ text, correct: true })),
    ...wrong.map((text) => ({ text, correct: false })),
  ];
  const q = (type, body, o) => {
    out.questions.push({ key: `${key}-q${pad(++n.q)}`, type, ...base(o), body });
    return api;
  };
  const t = (type, vars, body, o) => {
    out.templates.push({ key: `${key}-t${pad(++n.t)}`, type, ...base(o), vars, body });
    return api;
  };
  const api = {
    out,
    summary(title, content_md) {
      out.summary = { key: `${key}-zettel`, title, content_md };
      return api;
    },
    card(front, back, hint) {
      out.flashcards.push({ key: `${key}-c${pad(++n.c)}`, front, back, ...(hint ? { hint } : {}) });
      return api;
    },
    cards(list) {
      list.forEach(([f, b, h]) => api.card(f, b, h));
      return api;
    },
    gl(term, definition) {
      out.glossary.push({ key: `${key}-g${pad(++n.g)}`, term, definition });
      return api;
    },
    gls(list) {
      list.forEach(([a, b]) => api.gl(a, b));
      return api;
    },
    mc: (prompt, right, wrong, o) => q("mc", { prompt, options: opts(right, wrong) }, o),
    tf: (statement, answer, o) => q("tf", { statement, answer }, o),
    match: (prompt, pairs, distractors = [], o) =>
      q("match", { prompt, items: pairs.map(([term, match]) => ({ term, match })), distractors }, o),
    order: (prompt, items, o) => q("order", { prompt, items }, o),
    cloze: (text, o, prompt) => q("cloze", { ...(prompt ? { prompt } : {}), text }, o),
    calc: (prompt, answer, o = {}) =>
      q("calc", { prompt, answer, ...(o.unit ? { unit: o.unit } : {}), decimals: o.dec ?? 2, steps: o.steps ?? [], ...(o.tol !== undefined ? { tolerance: o.tol } : {}) }, o),
    error: (prompt, items, o) => q("error", { prompt, items: items.map(([text, wrong, fix]) => ({ text, wrong, ...(fix ? { fix } : {}) })) }, o),
    booking: (prompt, accounts, lines, o) =>
      q("booking", { prompt, accounts, lines: lines.map(([account, side, amount]) => ({ account, side, amount })) }, o),
    ad: (prompt, adText, parts, o) => q("ad", { prompt, adText, parts }, o),
    caseq: (situation, tasks, o = {}) =>
      q("case", { situation, tasks: tasks.map(([text, points, sample, checklist]) => ({ text, points, sample, checklist })) }, { pts: tasks.reduce((s, x) => s + x[1], 0), ...o }),
    // ---- Vorlagen ----
    tcalc: (prompt, answer, vars, o = {}) =>
      t("calc", vars, { prompt, answer, ...(o.unit ? { unit: o.unit } : {}), decimals: o.dec ?? 2, steps: o.steps ?? [] }, o),
    tmc: (prompt, right, wrong, vars, o) => t("mc", vars, { prompt, options: opts(right, wrong) }, o),
    tmatch: (prompt, pairs, distractors, vars, o) =>
      t("match", vars, { prompt, items: pairs.map(([term, match]) => ({ term, match })), distractors: distractors ?? [] }, o),
    tbooking: (prompt, accounts, lines, vars, o) =>
      t("booking", vars, { prompt, accounts, lines: lines.map(([account, side, amount]) => ({ account, side, amount })) }, o),
    tcloze: (text, vars, o) => t("cloze", vars, { text }, o),
    caseDef(title, situation, prompts) {
      out.cases.push({ key: `${key}-fall${pad(out.cases.length + 1)}`, title, situation, prompts: prompts.map(([question, sample]) => ({ question, sample })) });
      return api;
    },
    done: () => out,
  };
  return api;
}

export const V = {
  int: (min, max, step = 1, fmt) => ({ type: "int", min, max, step, ...(fmt ? { fmt } : {}) }),
  dec: (min, max, decimals = 1, fmt) => ({ type: "dec", min, max, decimals, ...(fmt ? { fmt } : {}) }),
  pick: (options) => ({ type: "pick", options }),
  expr: (expr, decimals, fmt) => ({ type: "expr", expr, ...(decimals !== undefined ? { decimals } : {}), ...(fmt ? { fmt } : {}) }),
};

/** Strukturdatei (Fach → Lernfelder → Themen). */
export const structure = (subjects) => ({ demo: false, subjects, items: [] });
export const subject = (key, name, description, color, lfs) => ({ key, name, description, color, learning_fields: lfs });
export const lf = (key, code, name, exam_parts, topics) => ({ key, code, name, exam_parts, topics });
export const tp = (key, name, exam_parts = []) => ({ key, name, exam_parts });
