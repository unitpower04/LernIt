"use client";
import { useMemo } from "react";
import { parseCloze, type Answer, type BookingAns, type CaseAns } from "@/lib/engine/grade";
import type { Concrete } from "@/lib/engine/types";
import { fmtNumber } from "@/lib/format";
import { makeRng, shuffle, shuffledIndices } from "@/lib/rng";

type Props = {
  q: Concrete;
  value: Answer;
  onChange: (a: Answer) => void;
  /** Auswertung anzeigen (richtig/falsch markieren, Lösung zeigen) */
  reveal: boolean;
};

const LETTERS = "ABCDEFGHIJKLMNOP";

export function QuestionView({ q, value, onChange, reveal }: Props) {
  switch (q.type) {
    case "mc":
      return <McInput prompt={q.body.prompt} options={q.body.options} seed={q.seed} value={value as number[]} onChange={onChange} reveal={reveal} />;
    case "tf":
      return <TfInput body={q.body} value={value as boolean | null} onChange={onChange} reveal={reveal} />;
    case "match":
      return <MatchInput q={q} value={value as (string | null)[]} onChange={onChange} reveal={reveal} />;
    case "order":
      return <OrderInput q={q} value={value as number[]} onChange={onChange} reveal={reveal} />;
    case "cloze":
      return <ClozeInput q={q} value={value as string[]} onChange={onChange} reveal={reveal} />;
    case "calc":
      return <CalcInput q={q} value={value as string} onChange={onChange} reveal={reveal} />;
    case "booking":
      return <BookingInput q={q} value={value as BookingAns[]} onChange={onChange} reveal={reveal} />;
    case "error":
      return <ErrorInput q={q} value={value as number[]} onChange={onChange} reveal={reveal} />;
    case "ad":
      return <AdInput q={q} value={value as number[][]} onChange={onChange} reveal={reveal} />;
    case "case":
      return <CaseInput q={q} value={value as CaseAns} onChange={onChange} reveal={reveal} />;
  }
}

function Prompt({ text }: { text: string }) {
  return <p className="whitespace-pre-line text-base font-medium leading-relaxed">{text}</p>;
}

/* ---------- Multiple Choice ---------- */
export function McInput({
  prompt, options, seed, value, onChange, reveal,
}: {
  prompt: string;
  options: { text: string; correct: boolean }[];
  seed: number;
  value: number[];
  onChange: (a: number[]) => void;
  reveal: boolean;
}) {
  const order = useMemo(() => shuffle(options.map((_, i) => i), makeRng(seed)), [options, seed]);
  const nRight = options.filter((o) => o.correct).length;
  const toggle = (i: number) => {
    if (reveal) return;
    if (nRight === 1) return onChange([i]);
    onChange(value.includes(i) ? value.filter((x) => x !== i) : [...value, i]);
  };
  return (
    <div className="space-y-3">
      <Prompt text={prompt} />
      <p className="text-xs text-muted">{nRight === 1 ? "Eine Antwort ist richtig." : `${nRight} Antworten sind richtig.`}</p>
      <div className="space-y-2" role={nRight === 1 ? "radiogroup" : "group"}>
        {order.map((i) => {
          const o = options[i];
          const sel = value.includes(i);
          const state = reveal ? (o.correct ? "right" : sel ? "wrong" : undefined) : undefined;
          return (
            <button key={i} type="button" className="opt" data-sel={sel && !reveal} data-state={state}
              role={nRight === 1 ? "radio" : "checkbox"} aria-checked={sel} onClick={() => toggle(i)}>
              <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-line text-xs ${nRight === 1 ? "rounded-full" : "rounded"} ${sel ? "bg-brand text-brandfg" : ""}`}>{sel ? "✓" : ""}</span>
              <span>{o.text}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Richtig/Falsch ---------- */
function TfInput({ body, value, onChange, reveal }: { body: { statement: string; answer: boolean }; value: boolean | null; onChange: (a: Answer) => void; reveal: boolean }) {
  const btn = (v: boolean, label: string) => {
    const state = reveal ? (body.answer === v ? "right" : value === v ? "wrong" : undefined) : undefined;
    return (
      <button type="button" className="opt justify-center font-semibold" data-sel={value === v && !reveal} data-state={state} aria-pressed={value === v} onClick={() => !reveal && onChange(v)}>
        {label}
      </button>
    );
  };
  return (
    <div className="space-y-3">
      <Prompt text={body.statement} />
      <div className="grid grid-cols-2 gap-2">
        {btn(true, "Richtig")}
        {btn(false, "Falsch")}
      </div>
    </div>
  );
}

/* ---------- Zuordnung ---------- */
function MatchInput({ q, value, onChange, reveal }: { q: Concrete; value: (string | null)[]; onChange: (a: Answer) => void; reveal: boolean }) {
  const items = q.body.items as { term: string; match: string }[];
  const choices = useMemo(
    () => shuffle([...new Set([...items.map((i) => i.match), ...(q.body.distractors as string[])])], makeRng(q.seed)),
    [items, q.body.distractors, q.seed],
  );
  return (
    <div className="space-y-3">
      <Prompt text={q.body.prompt} />
      <ol className="space-y-1 rounded-xl bg-surface2 p-3 text-sm">
        {choices.map((c, i) => (
          <li key={c}><b>{LETTERS[i]}</b> – {c}</li>
        ))}
      </ol>
      <div className="space-y-2">
        {items.map((it, i) => {
          const ok = value[i] === it.match;
          return (
            <div key={i} className="flex items-center gap-2">
              <span className="flex-1 text-sm">{it.term}</span>
              <select className="input w-24 shrink-0" aria-label={`Zuordnung für ${it.term}`} disabled={reveal} value={value[i] ?? ""}
                onChange={(e) => { const v = [...value]; v[i] = e.target.value || null; onChange(v); }}
                style={reveal ? { borderColor: ok ? "var(--ok)" : "var(--bad)" } : undefined}>
                <option value="">–</option>
                {choices.map((c, k) => <option key={c} value={c}>{LETTERS[k]}</option>)}
              </select>
              {reveal && !ok && <span className="w-10 text-xs font-bold text-ok">→ {LETTERS[choices.indexOf(it.match)]}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Reihenfolge ---------- */
function OrderInput({ q, value, onChange, reveal }: { q: Concrete; value: number[]; onChange: (a: Answer) => void; reveal: boolean }) {
  const items = q.body.items as string[];
  const initial = useMemo(() => shuffledIndices(items.length, q.seed), [items.length, q.seed]);
  const cur = value.length === items.length ? value : initial;
  const move = (pos: number, d: number) => {
    const t = pos + d;
    if (t < 0 || t >= cur.length || reveal) return;
    const n = [...cur];
    [n[pos], n[t]] = [n[t], n[pos]];
    onChange(n);
  };
  return (
    <div className="space-y-3">
      <Prompt text={q.body.prompt} />
      <p className="text-xs text-muted">Mit den Pfeilen in die richtige Reihenfolge bringen.</p>
      <ol className="space-y-2">
        {cur.map((idx, pos) => {
          const state = reveal ? (idx === pos ? "right" : "wrong") : undefined;
          return (
            <li key={idx} className="opt items-center" data-state={state}>
              <span className="w-5 text-sm font-bold text-muted">{pos + 1}.</span>
              <span className="flex-1">{items[idx]}</span>
              {!reveal && (
                <span className="flex gap-1">
                  <button type="button" className="btn !min-h-9 !px-2" aria-label="nach oben" onClick={() => move(pos, -1)}>▲</button>
                  <button type="button" className="btn !min-h-9 !px-2" aria-label="nach unten" onClick={() => move(pos, 1)}>▼</button>
                </span>
              )}
            </li>
          );
        })}
      </ol>
      {reveal && (
        <div className="rounded-xl bg-oksoft p-3 text-sm">
          <b>Richtige Reihenfolge:</b>
          <ol className="ml-5 list-decimal">{items.map((s) => <li key={s}>{s}</li>)}</ol>
        </div>
      )}
    </div>
  );
}

/* ---------- Lückentext ---------- */
function ClozeInput({ q, value, onChange, reveal }: { q: Concrete; value: string[]; onChange: (a: Answer) => void; reveal: boolean }) {
  const segs = useMemo(() => parseCloze(q.body.text), [q.body.text]);
  let bi = -1;
  return (
    <div className="space-y-3">
      {q.body.prompt && <Prompt text={q.body.prompt} />}
      <p className="whitespace-pre-line leading-10">
        {segs.map((s, i) => {
          if ("text" in s) return <span key={i}>{s.text}</span>;
          bi++;
          const k = bi;
          const given = value[k] ?? "";
          const ok = reveal && s.blank.some((a) => a.toLowerCase().trim() === given.toLowerCase().trim());
          return (
            <span key={i} className="inline-block align-middle">
              <input className="input !inline-block !min-h-9 !w-36 !py-1 text-center" aria-label={`Lücke ${k + 1}`} value={given} disabled={reveal}
                onChange={(e) => { const v = [...value]; v[k] = e.target.value; onChange(v); }}
                style={reveal ? { borderColor: ok ? "var(--ok)" : "var(--bad)" } : undefined} />
              {reveal && !ok && <span className="ml-1 text-sm font-semibold text-ok">{s.blank[0]}</span>}
            </span>
          );
        })}
      </p>
    </div>
  );
}

/* ---------- Rechnen ---------- */
function CalcInput({ q, value, onChange, reveal }: { q: Concrete; value: string; onChange: (a: Answer) => void; reveal: boolean }) {
  const dec = q.body.decimals ?? 2;
  return (
    <div className="space-y-3">
      <Prompt text={q.body.prompt} />
      <div className="flex items-center gap-2">
        <input className="input max-w-48 text-right" inputMode="decimal" aria-label="Ergebnis" placeholder="Ergebnis" value={value} disabled={reveal} onChange={(e) => onChange(e.target.value)} />
        {q.body.unit && <span className="text-muted">{q.body.unit}</span>}
      </div>
      {reveal && (
        <div className="space-y-2 rounded-xl bg-oksoft p-3 text-sm">
          <p><b>Ergebnis:</b> {fmtNumber(Number(q.body.answer), dec)} {q.body.unit}</p>
          {q.body.steps?.length > 0 && (
            <div>
              <b>Lösungsweg:</b>
              <ol className="ml-5 list-decimal">{q.body.steps.map((s: string, i: number) => <li key={i}>{s}</li>)}</ol>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ---------- Buchungssatz ---------- */
function BookingInput({ q, value, onChange, reveal }: { q: Concrete; value: BookingAns[]; onChange: (a: Answer) => void; reveal: boolean }) {
  const accounts = q.body.accounts as string[];
  const lines = value.length ? value : [];
  const upd = (i: number, patch: Partial<BookingAns>) => onChange(lines.map((l, k) => (k === i ? { ...l, ...patch } : l)));
  return (
    <div className="space-y-3">
      <Prompt text={q.body.prompt} />
      <div className="space-y-2">
        {lines.map((l, i) => (
          <div key={i} className="grid grid-cols-[1fr_auto] gap-2 rounded-xl border border-line p-2 sm:grid-cols-[1fr_6rem_7rem_auto]">
            <select className="input" aria-label="Konto" disabled={reveal} value={l.account} onChange={(e) => upd(i, { account: e.target.value })}>
              <option value="">Konto wählen …</option>
              {accounts.map((a) => <option key={a}>{a}</option>)}
            </select>
            <select className="input" aria-label="Soll oder Haben" disabled={reveal} value={l.side} onChange={(e) => upd(i, { side: e.target.value as "S" | "H" })}>
              <option value="S">Soll</option>
              <option value="H">Haben</option>
            </select>
            <input className="input text-right" inputMode="decimal" aria-label="Betrag" placeholder="Betrag" disabled={reveal} value={l.amount} onChange={(e) => upd(i, { amount: e.target.value })} />
            {!reveal && <button type="button" className="btn" aria-label="Zeile entfernen" onClick={() => onChange(lines.filter((_, k) => k !== i))}>✕</button>}
          </div>
        ))}
      </div>
      {!reveal && (
        <button type="button" className="btn" onClick={() => onChange([...lines, { account: "", side: lines.some((l) => l.side === "S") ? "H" : "S", amount: "" }])}>
          + Buchungszeile
        </button>
      )}
      {reveal && (
        <div className="rounded-xl bg-oksoft p-3 text-sm">
          <b>Richtiger Buchungssatz:</b>
          <table className="mt-1 w-full">
            <tbody>
              {(q.body.lines as { account: string; side: string; amount: number }[]).map((l, i) => (
                <tr key={i}>
                  <td className="pr-2">{l.side === "S" ? "Soll" : "Haben"}</td>
                  <td className="pr-2">{l.account}</td>
                  <td className="text-right tabular-nums">{fmtNumber(l.amount, 2)} €</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

/* ---------- Fehler finden ---------- */
function ErrorInput({ q, value, onChange, reveal }: { q: Concrete; value: number[]; onChange: (a: Answer) => void; reveal: boolean }) {
  const items = q.body.items as { text: string; wrong: boolean; fix?: string }[];
  const order = useMemo(() => shuffle(items.map((_, i) => i), makeRng(q.seed)), [items, q.seed]);
  return (
    <div className="space-y-3">
      <Prompt text={q.body.prompt} />
      <p className="text-xs text-muted">Tippe alle fehlerhaften Zeilen an.</p>
      <div className="space-y-2">
        {order.map((i) => {
          const it = items[i];
          const sel = value.includes(i);
          const state = reveal ? (it.wrong ? "right" : sel ? "wrong" : undefined) : undefined;
          return (
            <div key={i}>
              <button type="button" className="opt" aria-pressed={sel} data-sel={sel && !reveal} data-state={state} onClick={() => !reveal && onChange(sel ? value.filter((x) => x !== i) : [...value, i])}>
                <span className="mt-0.5">{sel ? "⚠️" : "▫️"}</span>
                <span>{it.text}</span>
              </button>
              {reveal && it.wrong && it.fix && <p className="ml-9 mt-1 text-sm text-ok">Richtig: {it.fix}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Anzeigenanalyse ---------- */
function AdInput({ q, value, onChange, reveal }: { q: Concrete; value: number[][]; onChange: (a: Answer) => void; reveal: boolean }) {
  return (
    <div className="space-y-4">
      <Prompt text={q.body.prompt} />
      {q.body.imageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={q.body.imageUrl} alt="Anzeige / Werbemittel" className="max-h-96 w-full rounded-xl border border-line object-contain" />
      )}
      {q.body.adText && <blockquote className="whitespace-pre-line rounded-xl border-l-4 border-brand bg-surface2 p-3 text-sm">{q.body.adText}</blockquote>}
      {(q.body.parts as { prompt: string; options: { text: string; correct: boolean }[] }[]).map((p, i) => (
        <McInput key={i} prompt={`${i + 1}. ${p.prompt}`} options={p.options} seed={q.seed + i} reveal={reveal}
          value={value[i] ?? []} onChange={(a) => onChange(value.map((v, k) => (k === i ? a : v)))} />
      ))}
    </div>
  );
}

/* ---------- Fallstudie (offen) ---------- */
function CaseInput({ q, value, onChange, reveal }: { q: Concrete; value: CaseAns; onChange: (a: Answer) => void; reveal: boolean }) {
  const tasks = q.body.tasks as { text: string; points: number; sample: string; checklist: string[] }[];
  return (
    <div className="space-y-5">
      <div className="whitespace-pre-line rounded-xl bg-surface2 p-3 text-sm leading-relaxed">{q.body.situation}</div>
      {tasks.map((t, i) => (
        <div key={i} className="space-y-2">
          <p className="font-medium">
            {i + 1}. {t.text} <span className="chip">{t.points} P.</span>
          </p>
          <textarea className="input min-h-32" aria-label={`Antwort zu Aufgabe ${i + 1}`} placeholder="Deine Antwort …" value={value.text[i] ?? ""} disabled={reveal && false}
            onChange={(e) => onChange({ ...value, text: value.text.map((x, k) => (k === i ? e.target.value : x)) })} />
          {reveal && (
            <div className="space-y-2 rounded-xl bg-oksoft p-3 text-sm">
              <p className="whitespace-pre-line"><b>Musterlösung:</b> {t.sample}</p>
              <p className="font-semibold">Erwartungshorizont – hake ab, was du genannt hast:</p>
              {t.checklist.map((c, k) => (
                <label key={k} className="flex min-h-9 items-start gap-2">
                  <input type="checkbox" className="mt-1 h-5 w-5" checked={value.checks[i]?.[k] ?? false}
                    onChange={(e) => onChange({ ...value, checks: value.checks.map((row, r) => (r === i ? row.map((x, c2) => (c2 === k ? e.target.checked : x)) : row)) })} />
                  <span>{c}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
