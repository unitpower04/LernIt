-- LernIt: Basisschema (Inhalte, Nutzerdaten, RLS, Einladungscodes)

-- ---------- Profile & Einladungen ----------
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default 'Lernende:r',
  is_admin boolean not null default false,
  exam_date date,
  show_in_leaderboard boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.invite_codes (
  code text primary key,
  note text,
  max_uses int,
  uses int not null default 0,
  active boolean not null default true,
  makes_admin boolean not null default false,
  created_at timestamptz not null default now()
);

create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select coalesce((select is_admin from public.profiles where id = auth.uid()), false)
$$;

-- Vorab-Prüfung des Codes (für freundliche Fehlermeldung); Verbrauch passiert im Trigger
create or replace function public.check_invite_code(p_code text) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.invite_codes
    where code = upper(trim(p_code)) and active and (max_uses is null or uses < max_uses)
  )
$$;

-- Trigger VOR dem Anlegen eines Nutzers: Code prüfen/verbrauchen, E-Mail direkt bestätigen
create or replace function public.before_user_insert() returns trigger
language plpgsql security definer set search_path = public as $$
declare inv public.invite_codes;
begin
  select * into inv from public.invite_codes
   where code = upper(trim(coalesce(new.raw_user_meta_data->>'invite_code', '')))
   for update;
  if not found or not inv.active or (inv.max_uses is not null and inv.uses >= inv.max_uses) then
    raise exception 'Ungültiger Einladungscode';
  end if;
  update public.invite_codes set uses = uses + 1 where code = inv.code;
  new.email_confirmed_at := coalesce(new.email_confirmed_at, now());
  -- Metadaten serverseitig setzen (nie dem Client vertrauen)
  new.raw_user_meta_data := (coalesce(new.raw_user_meta_data, '{}'::jsonb) - 'invite_code' - 'makes_admin')
    || jsonb_build_object('makes_admin', inv.makes_admin);
  return new;
end $$;

create trigger before_user_insert before insert on auth.users
  for each row execute function public.before_user_insert();

create or replace function public.after_user_insert() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, display_name, is_admin)
  values (
    new.id,
    coalesce(nullif(trim(new.raw_user_meta_data->>'display_name'), ''), split_part(new.email, '@', 1)),
    coalesce((new.raw_user_meta_data->>'makes_admin')::boolean, false)
  );
  return new;
end $$;

create trigger after_user_insert after insert on auth.users
  for each row execute function public.after_user_insert();

-- ---------- Inhalte ----------
create table public.subjects (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,
  name text not null,
  description text,
  color text,
  sort int not null default 0,
  active boolean not null default true,
  is_demo boolean not null default false
);

create table public.learning_fields (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,
  subject_id uuid not null references public.subjects(id) on delete cascade,
  code text,
  name text not null,
  exam_parts int[] not null default '{}',
  sort int not null default 0,
  active boolean not null default true,
  is_demo boolean not null default false
);

create table public.topics (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,
  learning_field_id uuid not null references public.learning_fields(id) on delete cascade,
  name text not null,
  exam_parts int[] not null default '{}',
  sort int not null default 0,
  active boolean not null default true,
  is_demo boolean not null default false
);

create table public.flashcards (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,
  topic_id uuid not null references public.topics(id) on delete cascade,
  front text not null,
  back text not null,
  hint text,
  difficulty int not null default 2 check (difficulty between 1 and 3),
  source text,
  active boolean not null default true,
  is_demo boolean not null default false
);

create table public.questions (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,
  topic_id uuid not null references public.topics(id) on delete cascade,
  type text not null check (type in ('mc','tf','match','order','cloze','calc','booking','case','error','ad')),
  exam_part int not null check (exam_part between 1 and 3),
  difficulty int not null default 2 check (difficulty between 1 and 3),
  points numeric not null default 2,
  body jsonb not null,
  explanation text,
  source text,
  active boolean not null default true,
  is_demo boolean not null default false
);

create table public.question_templates (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,
  topic_id uuid not null references public.topics(id) on delete cascade,
  type text not null check (type in ('mc','tf','match','order','cloze','calc','booking','case','error','ad')),
  exam_part int not null check (exam_part between 1 and 3),
  difficulty int not null default 2 check (difficulty between 1 and 3),
  points numeric not null default 2,
  vars jsonb not null default '{}',
  body jsonb not null,
  explanation text,
  source text,
  active boolean not null default true,
  is_demo boolean not null default false
);

create table public.summaries (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,
  topic_id uuid not null references public.topics(id) on delete cascade,
  title text not null,
  content_md text not null,
  source text,
  active boolean not null default true,
  is_demo boolean not null default false
);

create table public.glossary (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,
  topic_id uuid references public.topics(id) on delete set null,
  term text not null,
  definition text not null,
  source text,
  active boolean not null default true,
  is_demo boolean not null default false
);

-- Teil 4: Praxisfälle fürs Fachgespräch
create table public.exam_cases (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,
  topic_id uuid references public.topics(id) on delete set null,
  title text not null,
  situation text not null,
  prompts jsonb not null default '[]', -- [{question, sample: string[]}]
  source text,
  active boolean not null default true,
  is_demo boolean not null default false
);

create table public.import_runs (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  source text,
  note text,
  counts jsonb not null default '{}'
);

create index on public.learning_fields (subject_id);
create index on public.topics (learning_field_id);
create index on public.flashcards (topic_id);
create index on public.questions (topic_id);
create index on public.questions (exam_part);
create index on public.question_templates (topic_id);
create index on public.question_templates (exam_part);
create index on public.summaries (topic_id);
create index on public.glossary (topic_id);

-- ---------- Nutzerdaten ----------
create table public.answers (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  topic_id uuid references public.topics(id) on delete set null,
  source_kind text not null check (source_kind in ('question','template','card','glossary','case')),
  source_id uuid,
  q_type text,
  exam_part int,
  correct boolean not null,
  score numeric not null default 0,
  seconds numeric,
  mode text,
  created_at timestamptz not null default now()
);
create index on public.answers (user_id, created_at desc);
create index on public.answers (user_id, topic_id);
create index on public.answers (user_id, source_kind, source_id, created_at desc);

create table public.card_states (
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  card_id uuid not null references public.flashcards(id) on delete cascade,
  ease numeric not null default 2.5,
  interval_days numeric not null default 0,
  reps int not null default 0,
  lapses int not null default 0,
  due timestamptz not null default now(),
  last_review timestamptz,
  primary key (user_id, card_id)
);
create index on public.card_states (user_id, due);

create table public.exam_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  kind text not null check (kind in ('teil1','teil2','teil3','teil4','mini')),
  status text not null default 'running' check (status in ('running','paused','finished','aborted')),
  seed int not null,
  duration_sec int not null,
  remaining_sec int not null,
  state jsonb not null default '{}',
  score_points numeric,
  max_points numeric,
  percent numeric,
  grade text,
  topic_breakdown jsonb,
  started_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  finished_at timestamptz
);
create index on public.exam_attempts (user_id, started_at desc);

create table public.duels (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  created_by uuid not null default auth.uid() references auth.users(id) on delete cascade,
  questions jsonb not null,
  created_at timestamptz not null default now()
);

create table public.duel_results (
  duel_id uuid not null references public.duels(id) on delete cascade,
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  display_name text not null,
  score numeric not null,
  total numeric not null,
  seconds numeric,
  created_at timestamptz not null default now(),
  primary key (duel_id, user_id)
);

-- ---------- Views & Funktionen ----------
create view public.my_topic_stats with (security_invoker = true) as
  select topic_id, count(*)::int as attempts,
         sum(case when correct then 1 else 0 end)::int as correct,
         max(created_at) as last_at
  from public.answers where user_id = auth.uid() and topic_id is not null
  group by topic_id;

create view public.my_card_stats with (security_invoker = true) as
  select f.topic_id,
         count(cs.card_id)::int as seen,
         sum(case when cs.interval_days >= 6 then 1 else 0 end)::int as mature,
         sum(case when cs.due <= now() then 1 else 0 end)::int as due
  from public.card_states cs join public.flashcards f on f.id = cs.card_id
  where cs.user_id = auth.uid() and f.active
  group by f.topic_id;

create view public.my_wrong_items with (security_invoker = true) as
  select distinct on (source_kind, source_id) source_kind, source_id, topic_id, correct, created_at
  from public.answers
  where user_id = auth.uid() and source_kind in ('question','template') and source_id is not null
  order by source_kind, source_id, created_at desc;

create view public.topic_counts with (security_invoker = true) as
  select t.id as topic_id,
    (select count(*) from public.flashcards f where f.topic_id = t.id and f.active)::int as cards,
    (select count(*) from public.questions q where q.topic_id = t.id and q.active)::int as questions,
    (select count(*) from public.question_templates q where q.topic_id = t.id and q.active)::int as templates
  from public.topics t;

create or replace function public.my_streak() returns int
language sql stable security invoker set search_path = public as $$
  with d as (
    select distinct (created_at at time zone 'Europe/Berlin')::date as day
    from public.answers where user_id = auth.uid()
  ), g as (
    select day, day - (row_number() over (order by day))::int as grp from d
  ), islands as (
    select max(day) as last_day, count(*) as len from g group by grp
  )
  select coalesce((select len from islands
    where last_day >= (now() at time zone 'Europe/Berlin')::date - 1
    order by last_day desc limit 1), 0)::int
$$;

create or replace function public.leaderboard(p_days int default 7)
returns table (display_name text, answered bigint, correct bigint, streak int, is_me boolean)
language sql stable security definer set search_path = public as $$
  with u as (select id, display_name from public.profiles where show_in_leaderboard or id = auth.uid()),
  a as (
    select user_id, count(*) as answered, sum(case when correct then 1 else 0 end) as correct
    from public.answers where created_at >= now() - make_interval(days => p_days) group by user_id
  ),
  days as (
    select distinct user_id, (created_at at time zone 'Europe/Berlin')::date as day from public.answers
  ),
  g as (select user_id, day, day - (row_number() over (partition by user_id order by day))::int as grp from days),
  isl as (select user_id, max(day) as last_day, count(*) as len from g group by user_id, grp),
  s as (
    select distinct on (user_id) user_id, len from isl
    where last_day >= (now() at time zone 'Europe/Berlin')::date - 1
    order by user_id, last_day desc
  )
  select u.display_name, coalesce(a.answered, 0), coalesce(a.correct, 0)::bigint, coalesce(s.len, 0)::int,
         (u.id = auth.uid())
  from u left join a on a.user_id = u.id left join s on s.user_id = u.id
  order by coalesce(a.correct, 0) desc, coalesce(a.answered, 0) desc
$$;

-- ---------- Rechte & RLS ----------
alter table public.profiles enable row level security;
alter table public.invite_codes enable row level security;
alter table public.subjects enable row level security;
alter table public.learning_fields enable row level security;
alter table public.topics enable row level security;
alter table public.flashcards enable row level security;
alter table public.questions enable row level security;
alter table public.question_templates enable row level security;
alter table public.summaries enable row level security;
alter table public.glossary enable row level security;
alter table public.exam_cases enable row level security;
alter table public.import_runs enable row level security;
alter table public.answers enable row level security;
alter table public.card_states enable row level security;
alter table public.exam_attempts enable row level security;
alter table public.duels enable row level security;
alter table public.duel_results enable row level security;

-- Profile: nur eigenes lesen/ändern (is_admin nicht änderbar)
create policy profiles_select on public.profiles for select to authenticated using (id = auth.uid());
create policy profiles_update on public.profiles for update to authenticated using (id = auth.uid()) with check (id = auth.uid());
revoke all on public.profiles from anon, authenticated;
grant select on public.profiles to authenticated;
grant update (display_name, exam_date, show_in_leaderboard) on public.profiles to authenticated;

create policy invite_admin_select on public.invite_codes for select to authenticated using (public.is_admin());
revoke all on public.invite_codes from anon, authenticated;
grant select on public.invite_codes to authenticated;

-- Inhalte: Lesen für Angemeldete, Schreiben nur Admin
do $$
declare t text;
begin
  foreach t in array array['subjects','learning_fields','topics','flashcards','questions','question_templates','summaries','glossary','exam_cases','import_runs']
  loop
    execute format('revoke all on public.%I from anon, authenticated', t);
    execute format('grant select, insert, update, delete on public.%I to authenticated', t);
    execute format('create policy %I on public.%I for select to authenticated using (true)', t || '_select', t);
    execute format('create policy %I on public.%I for insert to authenticated with check (public.is_admin())', t || '_ins', t);
    execute format('create policy %I on public.%I for update to authenticated using (public.is_admin()) with check (public.is_admin())', t || '_upd', t);
    execute format('create policy %I on public.%I for delete to authenticated using (public.is_admin())', t || '_del', t);
  end loop;
end $$;

-- Nutzerdaten: nur eigene Zeilen
do $$
declare t text;
begin
  foreach t in array array['answers','card_states','exam_attempts']
  loop
    execute format('revoke all on public.%I from anon, authenticated', t);
    execute format('grant select, insert, update, delete on public.%I to authenticated', t);
    execute format('create policy %I on public.%I for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid())', t || '_own', t);
  end loop;
end $$;

revoke all on public.duels, public.duel_results from anon, authenticated;
grant select, insert on public.duels, public.duel_results to authenticated;
create policy duels_select on public.duels for select to authenticated using (true);
create policy duels_insert on public.duels for insert to authenticated with check (created_by = auth.uid());
create policy duel_results_select on public.duel_results for select to authenticated using (true);
create policy duel_results_insert on public.duel_results for insert to authenticated with check (user_id = auth.uid());

grant select on public.my_topic_stats, public.my_card_stats, public.my_wrong_items, public.topic_counts to authenticated;
revoke all on public.my_topic_stats, public.my_card_stats, public.my_wrong_items, public.topic_counts from anon;

revoke execute on all functions in schema public from public, anon;
grant execute on function public.check_invite_code(text) to anon, authenticated;
grant execute on function public.is_admin(), public.my_streak(), public.leaderboard(int) to authenticated;
