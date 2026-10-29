import type { SupabaseClient } from "@supabase/supabase-js";
import type { Counts, Profile, Tree } from "./types";

export async function loadTree(sb: SupabaseClient): Promise<Tree> {
  const [s, l, t, c] = await Promise.all([
    sb.from("subjects").select("id,key,name,description,color,sort").eq("active", true).order("sort").order("name"),
    sb.from("learning_fields").select("id,key,subject_id,code,name,exam_parts,sort").eq("active", true).order("sort").order("name"),
    sb.from("topics").select("id,key,learning_field_id,name,exam_parts,sort").eq("active", true).order("sort").order("name"),
    sb.from("topic_counts").select("*"),
  ]);
  const counts: Tree["counts"] = {};
  ((c.data ?? []) as Counts[]).forEach((x) => (counts[x.topic_id] = x));
  return { subjects: s.data ?? [], lfs: l.data ?? [], topics: t.data ?? [], counts };
}

export async function loadProfile(sb: SupabaseClient): Promise<Profile | null> {
  const { data: u } = await sb.auth.getUser();
  if (!u.user) return null;
  const { data } = await sb.from("profiles").select("*").eq("id", u.user.id).maybeSingle();
  return data as Profile | null;
}
