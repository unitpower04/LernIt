"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useApp } from "@/components/AppContext";
import { PageHeader } from "@/components/ui";
import { supabase } from "@/lib/supabase/client";

export default function Einstellungen() {
  const { profile, setProfile } = useApp();
  const router = useRouter();
  const [name, setName] = useState(profile.display_name);
  const [date, setDate] = useState(profile.exam_date ?? "");
  const [board, setBoard] = useState(profile.show_in_leaderboard);
  const [dark, setDark] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    const patch = { display_name: name.trim() || profile.display_name, exam_date: date || null, show_in_leaderboard: board };
    const { error } = await supabase().from("profiles").update(patch).eq("id", profile.id);
    if (error) return setMsg("Speichern fehlgeschlagen: " + error.message);
    setProfile({ ...profile, ...patch });
    setMsg("Gespeichert ✓");
  }

  function toggleTheme(v: boolean) {
    setDark(v);
    document.documentElement.classList.toggle("dark", v);
    try {
      localStorage.setItem("theme", v ? "dark" : "light");
    } catch {}
  }

  return (
    <div className="space-y-4">
      <PageHeader title="Einstellungen" />
      <form onSubmit={save} className="card space-y-4">
        <div>
          <label className="label" htmlFor="n">Anzeigename</label>
          <input id="n" className="input" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label className="label" htmlFor="d">Prüfungsdatum</label>
          <input id="d" type="date" className="input" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <label className="flex items-center gap-3">
          <input type="checkbox" className="h-5 w-5" checked={board} onChange={(e) => setBoard(e.target.checked)} />
          <span>In der Rangliste für Freunde sichtbar sein</span>
        </label>
        <label className="flex items-center gap-3">
          <input type="checkbox" className="h-5 w-5" checked={dark} onChange={(e) => toggleTheme(e.target.checked)} />
          <span>Dunkles Design</span>
        </label>
        {msg && <p role="status" className="text-sm">{msg}</p>}
        <button className="btn btn-primary w-full">Speichern</button>
      </form>
      <button className="btn w-full" onClick={async () => { await supabase().auth.signOut(); router.replace("/login"); router.refresh(); }}>Abmelden</button>
    </div>
  );
}
