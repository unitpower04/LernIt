-- Entfernt alle Demo-Inhalte (und damit verknüpfte Nutzerdaten wie Antworten/Kartenstände).
create or replace function public.reset_demo(p_wipe_attempts boolean default true) returns jsonb
language plpgsql security definer set search_path = public as $$
declare n_sub int; n_ans int;
begin
  if not (coalesce(auth.role(), '') = 'service_role' or session_user in ('postgres', 'supabase_admin') or public.is_admin()) then
    raise exception 'Nicht erlaubt';
  end if;
  delete from answers where topic_id in (select t.id from topics t where t.is_demo)
     or source_id in (select id from questions where is_demo union select id from question_templates where is_demo union select id from flashcards where is_demo);
  get diagnostics n_ans = row_count;
  if p_wipe_attempts then delete from exam_attempts where true; delete from duels where true; end if;
  delete from glossary where is_demo;
  delete from exam_cases where is_demo;
  delete from summaries where is_demo;
  delete from questions where is_demo;
  delete from question_templates where is_demo;
  delete from flashcards where is_demo;
  delete from topics where is_demo;
  delete from learning_fields where is_demo;
  delete from subjects where is_demo;
  get diagnostics n_sub = row_count;
  return jsonb_build_object('subjects_deleted', n_sub, 'answers_deleted', n_ans);
end $$;

