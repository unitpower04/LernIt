-- Einladungscodes verwalten (nur Admin)
create extension if not exists pgcrypto with schema extensions;

create or replace function public.create_invite(p_note text default null, p_max_uses int default 10) returns text
language plpgsql security definer set search_path = public, extensions as $$
declare c text;
begin
  if not public.is_admin() then raise exception 'Nicht erlaubt'; end if;
  c := 'LERN-' || upper(substr(encode(gen_random_bytes(6), 'hex'), 1, 10));
  insert into public.invite_codes (code, note, max_uses) values (c, p_note, p_max_uses);
  return c;
end $$;

create or replace function public.set_invite_active(p_code text, p_active boolean) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'Nicht erlaubt'; end if;
  update public.invite_codes set active = p_active where code = p_code;
end $$;

revoke execute on function public.create_invite(text, int), public.set_invite_active(text, boolean) from public, anon;
grant execute on function public.create_invite(text, int), public.set_invite_active(text, boolean) to authenticated;
