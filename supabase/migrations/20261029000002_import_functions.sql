-- Import-/Reset-Funktionen (nur Service-Role, Admin oder DB-Owner)

create or replace function public.import_bundle(p jsonb) returns jsonb
language plpgsql security definer set search_path = public as $$
declare
  demo boolean := coalesce((p->>'demo')::boolean, false);
  s jsonb; l jsonb; t jsonb; it jsonb; x jsonb;
  sid uuid; lid uuid; tid uuid;
  si int; li int; ti int;
  c jsonb := jsonb_build_object('subjects',0,'learning_fields',0,'topics',0,'flashcards',0,'glossary',0,'questions',0,'templates',0,'summaries',0,'cases',0);
  inc text;
begin
  if not (coalesce(auth.role(), '') = 'service_role' or session_user in ('postgres', 'supabase_admin') or public.is_admin()) then
    raise exception 'Nicht erlaubt';
  end if;

  si := 0;
  for s in select * from jsonb_array_elements(coalesce(p->'subjects', '[]')) loop
    si := si + 1;
    insert into subjects (key, name, description, color, sort, is_demo)
    values (s->>'key', s->>'name', s->>'description', s->>'color', si, demo)
    on conflict (key) do update set name = excluded.name, description = excluded.description, color = excluded.color, sort = excluded.sort, is_demo = excluded.is_demo
    returning id into sid;
    c := jsonb_set(c, '{subjects}', to_jsonb((c->>'subjects')::int + 1));
    li := 0;
    for l in select * from jsonb_array_elements(coalesce(s->'learning_fields', '[]')) loop
      li := li + 1;
      insert into learning_fields (key, subject_id, code, name, exam_parts, sort, is_demo)
      values (l->>'key', sid, l->>'code', l->>'name',
              coalesce((select array_agg(v::int) from jsonb_array_elements_text(coalesce(l->'exam_parts','[]')) v), '{}'), li, demo)
      on conflict (key) do update set subject_id = excluded.subject_id, code = excluded.code, name = excluded.name, exam_parts = excluded.exam_parts, sort = excluded.sort, is_demo = excluded.is_demo
      returning id into lid;
      c := jsonb_set(c, '{learning_fields}', to_jsonb((c->>'learning_fields')::int + 1));
      ti := 0;
      for t in select * from jsonb_array_elements(coalesce(l->'topics', '[]')) loop
        ti := ti + 1;
        insert into topics (key, learning_field_id, name, exam_parts, sort, is_demo)
        values (t->>'key', lid, t->>'name',
                coalesce((select array_agg(v::int) from jsonb_array_elements_text(coalesce(t->'exam_parts','[]')) v), '{}'), ti, demo)
        on conflict (key) do update set learning_field_id = excluded.learning_field_id, name = excluded.name, exam_parts = excluded.exam_parts, sort = excluded.sort, is_demo = excluded.is_demo;
        c := jsonb_set(c, '{topics}', to_jsonb((c->>'topics')::int + 1));
      end loop;
    end loop;
  end loop;

  for it in select * from jsonb_array_elements(coalesce(p->'items', '[]')) loop
    select id into tid from topics where key = it->>'topic';
    if tid is null then raise exception 'Thema "%" nicht gefunden', it->>'topic'; end if;

    if it->'summary' is not null and it->>'summary' is not null then
      x := it->'summary';
      insert into summaries (key, topic_id, title, content_md, source, is_demo)
      values (x->>'key', tid, x->>'title', x->>'content_md', x->>'source', demo)
      on conflict (key) do update set topic_id = excluded.topic_id, title = excluded.title, content_md = excluded.content_md, source = excluded.source, is_demo = excluded.is_demo, active = true;
      c := jsonb_set(c, '{summaries}', to_jsonb((c->>'summaries')::int + 1));
    end if;

    for x in select * from jsonb_array_elements(coalesce(it->'flashcards', '[]')) loop
      insert into flashcards (key, topic_id, front, back, hint, difficulty, source, is_demo)
      values (x->>'key', tid, x->>'front', x->>'back', x->>'hint', coalesce((x->>'difficulty')::int, 2), x->>'source', demo)
      on conflict (key) do update set topic_id = excluded.topic_id, front = excluded.front, back = excluded.back, hint = excluded.hint, difficulty = excluded.difficulty, source = excluded.source, is_demo = excluded.is_demo;
      c := jsonb_set(c, '{flashcards}', to_jsonb((c->>'flashcards')::int + 1));
    end loop;

    for x in select * from jsonb_array_elements(coalesce(it->'glossary', '[]')) loop
      insert into glossary (key, topic_id, term, definition, source, is_demo)
      values (x->>'key', tid, x->>'term', x->>'definition', x->>'source', demo)
      on conflict (key) do update set topic_id = excluded.topic_id, term = excluded.term, definition = excluded.definition, source = excluded.source, is_demo = excluded.is_demo;
      c := jsonb_set(c, '{glossary}', to_jsonb((c->>'glossary')::int + 1));
    end loop;

    for x in select * from jsonb_array_elements(coalesce(it->'questions', '[]')) loop
      insert into questions (key, topic_id, type, exam_part, difficulty, points, body, explanation, source, is_demo)
      values (x->>'key', tid, x->>'type', (x->>'exam_part')::int, coalesce((x->>'difficulty')::int, 2), coalesce((x->>'points')::numeric, 2), x->'body', x->>'explanation', x->>'source', demo)
      on conflict (key) do update set topic_id = excluded.topic_id, type = excluded.type, exam_part = excluded.exam_part, difficulty = excluded.difficulty, points = excluded.points, body = excluded.body, explanation = excluded.explanation, source = excluded.source, is_demo = excluded.is_demo;
      c := jsonb_set(c, '{questions}', to_jsonb((c->>'questions')::int + 1));
    end loop;

    for x in select * from jsonb_array_elements(coalesce(it->'templates', '[]')) loop
      insert into question_templates (key, topic_id, type, exam_part, difficulty, points, vars, body, explanation, source, is_demo)
      values (x->>'key', tid, x->>'type', (x->>'exam_part')::int, coalesce((x->>'difficulty')::int, 2), coalesce((x->>'points')::numeric, 2), coalesce(x->'vars', '{}'), x->'body', x->>'explanation', x->>'source', demo)
      on conflict (key) do update set topic_id = excluded.topic_id, type = excluded.type, exam_part = excluded.exam_part, difficulty = excluded.difficulty, points = excluded.points, vars = excluded.vars, body = excluded.body, explanation = excluded.explanation, source = excluded.source, is_demo = excluded.is_demo;
      c := jsonb_set(c, '{templates}', to_jsonb((c->>'templates')::int + 1));
    end loop;

    for x in select * from jsonb_array_elements(coalesce(it->'cases', '[]')) loop
      insert into exam_cases (key, topic_id, title, situation, prompts, source, is_demo)
      values (x->>'key', tid, x->>'title', x->>'situation', x->'prompts', x->>'source', demo)
      on conflict (key) do update set topic_id = excluded.topic_id, title = excluded.title, situation = excluded.situation, prompts = excluded.prompts, source = excluded.source, is_demo = excluded.is_demo;
      c := jsonb_set(c, '{cases}', to_jsonb((c->>'cases')::int + 1));
    end loop;
  end loop;

  insert into import_runs (source, note, counts) values (coalesce(p->>'source', 'import_bundle'), case when demo then 'demo' else null end, c);
  return c;
end $$;

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
  if p_wipe_attempts then delete from exam_attempts; delete from duels; end if;
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

revoke execute on function public.import_bundle(jsonb), public.reset_demo(boolean) from public, anon;
grant execute on function public.import_bundle(jsonb), public.reset_demo(boolean) to authenticated, service_role;
