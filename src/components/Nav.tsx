"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ITEMS = [
  { href: "/", label: "Start", icon: "🏠" },
  { href: "/lernen", label: "Lernen", icon: "📚" },
  { href: "/pruefung", label: "Prüfung", icon: "📝" },
  { href: "/freunde", label: "Freunde", icon: "👥" },
  { href: "/mehr", label: "Mehr", icon: "⋯" },
];

export function Nav() {
  const path = usePathname();
  const active = (href: string) => (href === "/" ? path === "/" : path === href || path.startsWith(href + "/"));
  const extra = ["/glossar", "/fehlerkiste", "/einstellungen", "/admin", "/ueben"];
  const isActive = (href: string) =>
    href === "/mehr" ? active("/mehr") || extra.some((e) => active(e)) : active(href);
  return (
    <>
      <nav aria-label="Hauptnavigation" className="fixed inset-x-0 bottom-0 z-30 flex border-t border-line bg-surface pb-[env(safe-area-inset-bottom)] md:hidden">
        {ITEMS.map((i) => (
          <Link key={i.href} href={i.href} aria-current={isActive(i.href) ? "page" : undefined}
            className={`flex flex-1 flex-col items-center gap-0.5 py-2 text-[11px] font-medium ${isActive(i.href) ? "text-brand" : "text-muted"}`}>
            <span className="text-xl leading-none">{i.icon}</span>
            {i.label}
          </Link>
        ))}
      </nav>
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-56 flex-col border-r border-line bg-surface p-3 md:flex">
        <div className="mb-4 flex items-center gap-2 px-2 pt-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand font-black text-brandfg">L</span>
          <span className="text-lg font-bold">LernIt</span>
        </div>
        {[...ITEMS.slice(0, 4), { href: "/glossar", label: "Glossar", icon: "🔎" }, { href: "/fehlerkiste", label: "Fehlerkiste", icon: "📦" }, { href: "/einstellungen", label: "Einstellungen", icon: "⚙️" }].map((i) => (
          <Link key={i.href} href={i.href} aria-current={active(i.href) ? "page" : undefined}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium ${active(i.href) ? "bg-brandsoft text-brand" : "text-fg hover:bg-surface2"}`}>
            <span className="w-5 text-center">{i.icon}</span>
            {i.label}
          </Link>
        ))}
      </aside>
    </>
  );
}
