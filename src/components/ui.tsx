import Link from "next/link";

export function ProgressBar({ value, label, color }: { value: number | null; label?: string; color?: string }) {
  const pct = value === null ? 0 : Math.round(value * 100);
  return (
    <div className="flex items-center gap-2" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={label ?? "Fortschritt"}>
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface2">
        <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: color ?? "var(--brand)" }} />
      </div>
      <span className="w-10 text-right text-xs tabular-nums text-muted">{value === null ? "–" : `${pct} %`}</span>
    </div>
  );
}

export function PageHeader({ title, sub, back }: { title: string; sub?: string; back?: { href: string; label: string } }) {
  return (
    <header className="mb-4">
      {back && (
        <Link href={back.href} className="mb-1 inline-block text-sm text-brand">
          ← {back.label}
        </Link>
      )}
      <h1 className="h1">{title}</h1>
      {sub && <p className="text-sm text-muted">{sub}</p>}
    </header>
  );
}

export function Empty({ children }: { children: React.ReactNode }) {
  return <div className="card text-center text-sm text-muted">{children}</div>;
}

export function Spinner({ text = "Lade …" }: { text?: string }) {
  return (
    <div className="py-10 text-center text-muted" role="status">
      {text}
    </div>
  );
}

export const PART_BADGE: Record<number, string> = { 1: "Teil 1", 2: "Teil 2", 3: "Teil 3", 4: "Teil 4" };
