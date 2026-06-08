-- Allow signed-in users to access their own rows through RLS policies.
-- Delete privileges are intentionally excluded in v1.

grant usage on schema public to authenticated;

grant select, insert, update on public.profiles to authenticated;
grant select, insert, update on public.user_settings to authenticated;
grant select, insert, update on public.user_word_progress to authenticated;
grant select, insert, update on public.user_language_stats to authenticated;
grant select, insert on public.user_attendance to authenticated;
grant select, insert, update on public.sync_meta to authenticated;
