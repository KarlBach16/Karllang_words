-- KarlLang Supabase schema v1
-- Generated from docs/server_schema_supabase.md.
-- Apply from the Supabase SQL Editor after reviewing project settings.

create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  last_seen_at timestamptz
);

create trigger set_profiles_updated_at
before update on public.profiles
for each row
execute function public.set_updated_at();

create table public.user_settings (
  user_id uuid primary key references auth.users(id) on delete cascade,
  ui_lang text not null default 'en',
  study_lang text not null default 'de',
  mode text not null default 'copy',
  goal_typing int not null default 5,
  goal_card int not null default 5,
  new_word_cefr text not null default 'A1',
  new_word_category text not null default 'all',
  sound_enabled boolean not null default true,
  haptic_enabled boolean not null default true,
  reminder_enabled boolean not null default false,
  reminder_time text not null default '20:30',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint user_settings_ui_lang_check
    check (ui_lang in ('ko', 'en', 'de', 'es', 'fr', 'it', 'pt', 'ja', 'zh', 'ru')),
  constraint user_settings_study_lang_check
    check (study_lang in ('de', 'es', 'en', 'fr', 'it', 'pt', 'pl', 'nl', 'ru', 'sv', 'ko', 'ja', 'zh')),
  constraint user_settings_mode_check
    check (mode in ('card', 'copy', 'typing')),
  constraint user_settings_goal_typing_check
    check (goal_typing in (5, 10, 20, 30, 50)),
  constraint user_settings_goal_card_check
    check (goal_card in (5, 10, 20, 30, 50)),
  constraint user_settings_cefr_check
    check (new_word_cefr in ('all', 'A1', 'A2', 'B1', 'B2')),
  constraint user_settings_reminder_time_check
    check (reminder_time ~ '^([01][0-9]|2[0-3]):[0-5][0-9]$')
);

create trigger set_user_settings_updated_at
before update on public.user_settings
for each row
execute function public.set_updated_at();

create table public.user_word_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  study_lang text not null,
  word_id text not null,

  srs_level int not null default 0,
  last_reviewed bigint not null default 0,
  next_due bigint not null default 0,
  is_new boolean not null default true,

  bookmarked boolean not null default false,
  wrong_attempts int not null default 0,
  hard_count int not null default 0,
  last_wrong_at bigint not null default 0,
  last_hard_at bigint not null default 0,
  total_views int not null default 0,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  primary key (user_id, study_lang, word_id),

  constraint user_word_progress_study_lang_check
    check (study_lang in ('de', 'es', 'en', 'fr', 'it', 'pt', 'pl', 'nl', 'ru', 'sv', 'ko', 'ja', 'zh')),
  constraint user_word_progress_srs_level_check
    check (srs_level between 0 and 5),
  constraint user_word_progress_counts_check
    check (wrong_attempts >= 0 and hard_count >= 0 and total_views >= 0),
  constraint user_word_progress_time_check
    check (last_reviewed >= 0 and next_due >= 0 and last_wrong_at >= 0 and last_hard_at >= 0)
);

create trigger set_user_word_progress_updated_at
before update on public.user_word_progress
for each row
execute function public.set_updated_at();

create index user_word_progress_due_idx
on public.user_word_progress (user_id, study_lang, next_due);

create index user_word_progress_bookmark_idx
on public.user_word_progress (user_id, study_lang)
where bookmarked = true;

create index user_word_progress_mistake_idx
on public.user_word_progress (user_id, study_lang)
where wrong_attempts > 0 or hard_count > 0;

create index user_word_progress_updated_idx
on public.user_word_progress (user_id, updated_at);

create table public.user_language_stats (
  user_id uuid not null references auth.users(id) on delete cascade,
  study_lang text not null,
  total_reviewed int not null default 0,
  new_learned int not null default 0,
  last_studied_at bigint not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  primary key (user_id, study_lang),

  constraint user_language_stats_study_lang_check
    check (study_lang in ('de', 'es', 'en', 'fr', 'it', 'pt', 'pl', 'nl', 'ru', 'sv', 'ko', 'ja', 'zh')),
  constraint user_language_stats_counts_check
    check (total_reviewed >= 0 and new_learned >= 0),
  constraint user_language_stats_last_studied_check
    check (last_studied_at >= 0)
);

create trigger set_user_language_stats_updated_at
before update on public.user_language_stats
for each row
execute function public.set_updated_at();

create table public.user_attendance (
  user_id uuid not null references auth.users(id) on delete cascade,
  date_key date not null,
  created_at timestamptz not null default now(),

  primary key (user_id, date_key)
);

create table public.sync_meta (
  user_id uuid primary key references auth.users(id) on delete cascade,
  schema_version int not null default 1,
  first_migration_completed boolean not null default false,
  first_migration_completed_at timestamptz,
  last_pull_at timestamptz,
  last_push_at timestamptz,
  last_local_migration_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger set_sync_meta_updated_at
before update on public.sync_meta
for each row
execute function public.set_updated_at();

alter table public.profiles enable row level security;
alter table public.user_settings enable row level security;
alter table public.user_word_progress enable row level security;
alter table public.user_language_stats enable row level security;
alter table public.user_attendance enable row level security;
alter table public.sync_meta enable row level security;

create policy "profiles_select_own"
on public.profiles
for select
using (auth.uid() = id);

create policy "profiles_insert_own"
on public.profiles
for insert
with check (auth.uid() = id);

create policy "profiles_update_own"
on public.profiles
for update
using (auth.uid() = id)
with check (auth.uid() = id);

create policy "user_settings_select_own"
on public.user_settings
for select
using (auth.uid() = user_id);

create policy "user_settings_insert_own"
on public.user_settings
for insert
with check (auth.uid() = user_id);

create policy "user_settings_update_own"
on public.user_settings
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "user_word_progress_select_own"
on public.user_word_progress
for select
using (auth.uid() = user_id);

create policy "user_word_progress_insert_own"
on public.user_word_progress
for insert
with check (auth.uid() = user_id);

create policy "user_word_progress_update_own"
on public.user_word_progress
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "user_language_stats_select_own"
on public.user_language_stats
for select
using (auth.uid() = user_id);

create policy "user_language_stats_insert_own"
on public.user_language_stats
for insert
with check (auth.uid() = user_id);

create policy "user_language_stats_update_own"
on public.user_language_stats
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "user_attendance_select_own"
on public.user_attendance
for select
using (auth.uid() = user_id);

create policy "user_attendance_insert_own"
on public.user_attendance
for insert
with check (auth.uid() = user_id);

create policy "sync_meta_select_own"
on public.sync_meta
for select
using (auth.uid() = user_id);

create policy "sync_meta_insert_own"
on public.sync_meta
for insert
with check (auth.uid() = user_id);

create policy "sync_meta_update_own"
on public.sync_meta
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

grant usage on schema public to authenticated;

grant select, insert, update on public.profiles to authenticated;
grant select, insert, update on public.user_settings to authenticated;
grant select, insert, update on public.user_word_progress to authenticated;
grant select, insert, update on public.user_language_stats to authenticated;
grant select, insert on public.user_attendance to authenticated;
grant select, insert, update on public.sync_meta to authenticated;
