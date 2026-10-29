"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "@/lib/supabase/client";

export default function RegisterPage() {
  const router = useRouter();
  const [f, setF] = useState({ name: "", email: "", password: "", code: "" });
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement>) => setF({ ...f, [k]: e.target.value });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const sb = supabase();
    const { data: ok } = await sb.rpc("check_invite_code", { p_code: f.code });
    if (!ok) {
      setError("Der Einladungscode ist ungültig oder aufgebraucht.");
      setBusy(false);
      return;
    }
    if (f.password.length < 8) {
      setError("Das Passwort braucht mindestens 8 Zeichen.");
      setBusy(false);
      return;
    }
    const { error: err } = await sb.auth.signUp({
      email: f.email.trim(),
      password: f.password,
      options: { data: { display_name: f.name.trim(), invite_code: f.code.trim() } },
    });
    if (err) {
      setError(/already|registered/i.test(err.message) ? "Diese E-Mail ist schon registriert." : "Registrierung nicht möglich: " + err.message);
      setBusy(false);
      return;
    }
    const { error: loginErr } = await sb.auth.signInWithPassword({ email: f.email.trim(), password: f.password });
    if (loginErr) {
      setError("Konto angelegt – bitte jetzt anmelden.");
      setBusy(false);
      router.replace("/login");
      return;
    }
    router.replace("/");
    router.refresh();
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <h2 className="h2">Registrieren</h2>
      <p className="text-sm text-muted">Nur mit Einladungscode.</p>
      <div>
        <label className="label" htmlFor="code">Einladungscode</label>
        <input id="code" className="input" required value={f.code} onChange={set("code")} autoCapitalize="characters" autoComplete="off" />
      </div>
      <div>
        <label className="label" htmlFor="name">Anzeigename</label>
        <input id="name" className="input" required value={f.name} onChange={set("name")} autoComplete="nickname" />
      </div>
      <div>
        <label className="label" htmlFor="email">E-Mail</label>
        <input id="email" className="input" type="email" required value={f.email} onChange={set("email")} autoComplete="email" />
      </div>
      <div>
        <label className="label" htmlFor="pw">Passwort (min. 8 Zeichen)</label>
        <input id="pw" className="input" type="password" required minLength={8} value={f.password} onChange={set("password")} autoComplete="new-password" />
      </div>
      {error && <p role="alert" className="rounded-lg bg-badsoft p-2 text-sm text-bad">{error}</p>}
      <button className="btn btn-primary w-full" disabled={busy}>{busy ? "Moment …" : "Konto erstellen"}</button>
      <p className="text-center text-sm">
        Schon ein Konto? <Link className="text-brand underline" href="/login">Anmelden</Link>
      </p>
    </form>
  );
}
