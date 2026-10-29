"use client";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { loadProfile, loadTree } from "@/lib/data/load";
import type { Profile, Tree } from "@/lib/data/types";

type Ctx = {
  profile: Profile;
  tree: Tree;
  reload: () => Promise<void>;
  setProfile: (p: Profile) => void;
};
const C = createContext<Ctx | null>(null);

export function useApp(): Ctx {
  const v = useContext(C);
  if (!v) throw new Error("useApp außerhalb von AppProvider");
  return v;
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [tree, setTree] = useState<Tree | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const reload = useCallback(async () => {
    try {
      const sb = supabase();
      const [p, t] = await Promise.all([loadProfile(sb), loadTree(sb)]);
      if (!p) {
        window.location.href = "/login";
        return;
      }
      setProfile(p);
      setTree(t);
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Fehler beim Laden");
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    reload();
  }, [reload]);

  if (err) return <p className="p-6 text-bad">Laden fehlgeschlagen: {err}</p>;
  if (!profile || !tree)
    return (
      <div className="flex min-h-dvh items-center justify-center text-muted" role="status">
        Lade …
      </div>
    );
  return <C.Provider value={{ profile, tree, reload, setProfile }}>{children}</C.Provider>;
}
