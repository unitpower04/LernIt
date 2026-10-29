"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";

export default function NewPasswordPage() {
  const router = useRouter();
  const [pw, setPw] = useState("");
  const [ready, setReady] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    const sb = supabase();
    sb.auth.getSession().then(({ data }) => setReady(!!data.session));
    const { data: sub } = sb.auth.onAuthStateChange((_e, s) => setReady(!!s));
    return () => sub.subscription.unsubscribe();
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase().auth.updateUser({ password: pw });
    if (error) return setMsg(error.message);
    router.replace("/");
    router.refresh();
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <h2 className="h2">Neues Passwort</h2>
      {!ready && <p className="text-sm text-muted">Link wird geprüft … Falls nichts passiert, fordere bitte einen neuen Link an.</p>}
      <div>
        <label className="label" htmlFor="pw">Neues Passwort (min. 8 Zeichen)</label>
        <input id="pw" className="input" type="password" minLength={8} required value={pw} onChange={(e) => setPw(e.target.value)} autoComplete="new-password" />
      </div>
      {msg && <p role="alert" className="rounded-lg bg-badsoft p-2 text-sm text-bad">{msg}</p>}
      <button className="btn btn-primary w-full" disabled={!ready}>Speichern</button>
    </form>
  );
}
