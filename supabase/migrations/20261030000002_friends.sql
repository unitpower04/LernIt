-- Freunde: Freundescode, Anfragen, Rangliste nur unter Freunden

create or replace function public.gen_friend_code() returns text
language plpgsql as $$
declare chars text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; c text; i int;
begin
  loop
    c := '';
    for i in 1..6 loop c := c || substr(chars, 1 + floor(random() * length(chars))::int, 1); end loop;
    exit when not exists (select 1 from public.profiles where friend_code = c);
  end loop;
  return c;
end $$;

alter table public.profiles add column if not exists friend_code text unique;
update public.profiles set friend_code = public.gen_friend_code() where friend_code is null;
alter table public.profiles alter column friend_code set default public.gen_friend_code();
alter table public.profiles alter column friend_code set not null;

create table if not exists public.friendships (
  id uuid primary key default gen_random_uuid(),
  requester uuid not null references public.profiles(id) on delete cascade,
  addressee uuid not null references public.profiles(id) on delete cascade,
  status text not null default 'pending' check (status in ('pending', 'accepted')),
  created_at timestamptz not null default now(),
  check (requester <> addressee)
);
create unique index if not exists friendships_pair on public.friendships (least(requester, addressee), greatest(requester, addressee));
alter table public.friendships enable row level security;
create policy friendships_select on public.friendships for select to authenticated using (auth.uid() in (requester, addressee));
-- Schreiben nur über die Funktionen unten

create or replace function public.my_friend_code() returns text
language sql stable security definer set search_path = public as $$
  select friend_code from public.profiles where id = auth.uid()
$$;

create or replace function public.send_friend_request(p_code text) returns text
language plpgsql security definer set search_path = public as $$
declare other uuid; f public.friendships;
begin
  select id into other from public.profiles where friend_code = upper(trim(p_code));
  if other is null then return 'not_found'; end if;
  if other = auth.uid() then return 'self'; end if;
  select * into f from public.friendships
   where least(requester, addressee) = least(auth.uid(), other) and greatest(requester, addressee) = greatest(auth.uid(), other);
  if found then
    if f.status = 'accepted' then return 'already_friends'; end if;
    if f.addressee = auth.uid() then
      update public.friendships set status = 'accepted' where id = f.id;
      return 'accepted';
    end if;
    return 'already_sent';
  end if;
  insert into public.friendships (requester, addressee) values (auth.uid(), other);
  return 'sent';
end $$;

create or replace function public.respond_friend_request(p_id uuid, p_accept boolean) returns void
language plpgsql security definer set search_path = public as $$
begin
  if p_accept then
    update public.friendships set status = 'accepted' where id = p_id and addressee = auth.uid() and status = 'pending';
  else
    delete from public.friendships where id = p_id and addressee = auth.uid() and status = 'pending';
  end if;
end $$;

create or replace function public.remove_friendship(p_id uuid) returns void
language sql security definer set search_path = public as $$
  delete from public.friendships where id = p_id and auth.uid() in (requester, addressee)
$$;

create or replace function public.friends_list(p_days int default 7)
returns table (id uuid, status text, incoming boolean, display_name text, answered bigint, correct bigint)
language sql stable security definer set search_path = public as $$
  select f.id, f.status, (f.addressee = auth.uid()) as incoming, p.display_name,
         case when f.status = 'accepted' then (select count(*) from public.answers a where a.user_id = p.id and a.created_at >= now() - make_interval(days => p_days)) else 0 end,
         case when f.status = 'accepted' then (select count(*) from public.answers a where a.user_id = p.id and a.correct and a.created_at >= now() - make_interval(days => p_days)) else 0 end
  from public.friendships f
  join public.profiles p on p.id = case when f.requester = auth.uid() then f.addressee else f.requester end
  where auth.uid() in (f.requester, f.addressee)
  order by f.status, p.display_name
$$;

create or replace function public.leaderboard_friends(p_days int default 7)
returns table (display_name text, answered bigint, correct bigint, streak int, is_me boolean)
language sql stable security definer set search_path = public as $$
  with u as (
    select id, display_name from public.profiles where id = auth.uid()
    union
    select p.id, p.display_name from public.friendships f
      join public.profiles p on p.id = case when f.requester = auth.uid() then f.addressee else f.requester end
     where f.status = 'accepted' and auth.uid() in (f.requester, f.addressee)
  ),
  a as (
    select user_id, count(*) as answered, sum(case when correct then 1 else 0 end) as correct
    from public.answers where created_at >= now() - make_interval(days => p_days) group by user_id
  ),
  days as (select distinct user_id, (created_at at time zone 'Europe/Berlin')::date as day from public.answers),
  g as (select user_id, day, day - (row_number() over (partition by user_id order by day))::int as grp from days),
  isl as (select user_id, max(day) as last_day, count(*) as len from g group by user_id, grp),
  s as (
    select distinct on (user_id) user_id, len from isl
    where last_day >= (now() at time zone 'Europe/Berlin')::date - 1
    order by user_id, last_day desc
  )
  select u.display_name, coalesce(a.answered, 0), coalesce(a.correct, 0)::bigint, coalesce(s.len, 0)::int, (u.id = auth.uid())
  from u left join a on a.user_id = u.id left join s on s.user_id = u.id
  order by coalesce(a.correct, 0) desc, coalesce(a.answered, 0) desc
$$;

revoke execute on function public.my_friend_code(), public.send_friend_request(text), public.respond_friend_request(uuid, boolean),
  public.remove_friendship(uuid), public.friends_list(int), public.leaderboard_friends(int) from public, anon;
grant execute on function public.my_friend_code(), public.send_friend_request(text), public.respond_friend_request(uuid, boolean),
  public.remove_friendship(uuid), public.friends_list(int), public.leaderboard_friends(int) to authenticated;
