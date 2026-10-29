"use client";
import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase/client";

export default function ForgotPage() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    const { error } = await supabase().auth.resetPasswordForEmail(email.trim(), {
      redirectTo: `${window.location.origin}/passwort-neu`,
    });
    setMsg(error ? "Das hat nicht geklappt: " + error.message : "Falls die E-Mail existiert, ist ein Link unterwegs.");
    setBusy(false);
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <h2 className="h2">Passwort vergessen</h2>
      <div>
        <label className="label" htmlFor="email">E-Mail</label>
        <input id="email" className="input" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      {msg && <p role="status" className="rounded-lg bg-brandsoft p-2 text-sm">{msg}</p>}
      <button className="btn btn-primary w-full" disabled={busy}>Link senden</button>
      <p className="text-center text-sm"><Link className="text-brand underline" href="/login">Zurück zum Login</Link></p>
    </form>
  );
}
