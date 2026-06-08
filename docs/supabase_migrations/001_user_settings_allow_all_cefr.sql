-- Allow KarlLang's "all levels" setting to sync to user_settings.

alter table public.user_settings
drop constraint if exists user_settings_cefr_check;

alter table public.user_settings
add constraint user_settings_cefr_check
check (new_word_cefr in ('all', 'A1', 'A2', 'B1', 'B2'));
