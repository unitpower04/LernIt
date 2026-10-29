"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useApp } from "@/components/AppContext";
import { PageHeader } from "@/components/ui";
import { supabase } from "@/lib/supabase/client";

export default function MehrPage() {
  const { profile } = useApp();
  const router = useRouter();
  const links = [
    { href: "/glossar", label: "🔎 Glossar" },
    { href: "/fehlerkiste", label: "📦 Fehlerkiste" },
    { href: "/pruefung/verlauf", label: "📈 Prüfungsverlauf" },
    { href: "/einstellungen", label: "⚙️ Einstellungen" },
    ...(profile.is_admin ? [{ href: "/admin", label: "🛠️ Admin" }] : []),
  ];
  return (
    <div className="space-y-4">
      <PageHeader title="Mehr" sub={profile.display_name} />
      <div className="space-y-2">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="card block font-medium">{l.label}</Link>
        ))}
      </div>
      <button className="btn w-full" onClick={async () => { await supabase().auth.signOut(); router.replace("/login"); router.refresh(); }}>Abmelden</button>
    </div>
  );
}
