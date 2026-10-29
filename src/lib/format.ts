const nf = (min: number, max: number) =>
  new Intl.NumberFormat("de-DE", { minimumFractionDigits: min, maximumFractionDigits: max });

export function fmtNumber(n: number, decimals?: number): string {
  if (decimals === undefined) return nf(0, 2).format(round(n, 6));
  return nf(decimals, decimals).format(n);
}
export const fmtEur = (n: number, decimals = 2) => `${fmtNumber(n, decimals)} €`;
export const fmtPct = (n: number, decimals = 1) => `${fmtNumber(n, decimals)} %`;

export function round(n: number, d = 0): number {
  const f = 10 ** d;
  return Math.round((n + Number.EPSILON) * f) / f;
}

/** Zahl aus Nutzereingabe (deutsch/englisch, mit €, %, Leerzeichen). */
export function parseNumber(input: string): number | null {
  let s = input.trim().replace(/[€%\s ]/g, "").replace(/[A-Za-z]+$/, "");
  if (!s) return null;
  const hasDot = s.includes(".");
  const hasComma = s.includes(",");
  if (hasDot && hasComma) {
    s = s.lastIndexOf(",") > s.lastIndexOf(".") ? s.replace(/\./g, "").replace(",", ".") : s.replace(/,/g, "");
  } else if (hasComma) {
    s = s.replace(/,/g, ".");
  } else if (hasDot && /^-?\d{1,3}(\.\d{3})+$/.test(s)) {
    s = s.replace(/\./g, "");
  }
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
}

export function dateDE(d: string | Date): string {
  return new Date(d).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });
}

export function mmss(sec: number): string {
  const s = Math.max(0, Math.round(sec));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const ss = s % 60;
  const p = (x: number) => String(x).padStart(2, "0");
  return h ? `${h}:${p(m)}:${p(ss)}` : `${p(m)}:${p(ss)}`;
}
