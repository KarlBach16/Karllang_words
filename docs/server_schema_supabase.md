# KarlLang Supabase Schema Draft - 2026-06-08

## 0. 문서 목적

이 문서는 `docs/server_sync_plan.md`를 기준으로 Supabase에 생성할 v1 서버 스키마 초안을 정리한다.

아직 최종 실행 SQL이 아니라 검토용 초안이다. 실제 Supabase SQL Editor에 적용하기 전에는 테이블명, 컬럼명, RLS 정책, 인덱스를 한 번 더 확인한다.

## 1. 설계 원칙

- Supabase Auth의 `auth.users.id`를 사용자 식별자로 사용한다.
- 앱은 계속 localStorage 우선으로 동작한다.
- 서버는 백업/동기화 역할을 한다.
- 단어 데이터 자체는 서버에 올리지 않는다.
- 사용자 학습 상태는 `study_lang + word_id` 기준으로 저장한다.
- 첫 로그인 충돌은 자동 병합하지 않고 사용자 선택을 우선한다.
- v1은 단순한 구조, 디버깅 쉬운 구조를 우선한다.

## 2. v1 테이블 목록

| Table | Purpose |
| --- | --- |
| `profiles` | 사용자 기본 프로필/마지막 접속 |
| `user_settings` | 사용자 설정 |
| `user_word_progress` | 단어별 SRS + 북마크 + 오답/어려운 단어 상태 |
| `user_language_stats` | 언어별 총 학습 통계 |
| `user_attendance` | 출석 날짜 |
| `sync_meta` | 마이그레이션/동기화 상태 |

v1에서 제외:

- `daily_summary`
- `study_word_set`
- 서버 단어 데이터 테이블
- 소셜/랭킹 관련 테이블

## 3. 확장 기능

Supabase/Postgres에서 UUID 생성을 위해 `pgcrypto`를 활성화한다.

```sql
create extension if not exists pgcrypto;
```

## 4. 공통 Updated At Trigger

`updated_at` 자동 갱신용 함수.

```sql
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;
```

## 5. Tables

### 5.1 profiles

사용자 기본 row.

```sql
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
```

### 5.2 user_settings

v1은 컬럼형으로 시작한다.

이유:

- 설정 값이 많지 않다.
- RLS/debug/query가 쉽다.
- 나중에 앱 설정이 자주 늘어나면 `settings_json jsonb` 추가를 검토한다.

```sql
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
    check (new_word_cefr in ('A1', 'A2', 'B1', 'B2')),
  constraint user_settings_reminder_time_check
    check (reminder_time ~ '^([01][0-9]|2[0-3]):[0-5][0-9]$')
);

create trigger set_user_settings_updated_at
before update on public.user_settings
for each row
execute function public.set_updated_at();
```

주의:

- 현재 앱의 정규 학습 모드는 `copy`, `card`, `typing`을 사용한다.
- `cram`, `word_drop`은 훈련소 세션 모드이며 `user_settings.mode`에는 저장하지 않는다.
- 과거 localStorage에 `typing_de`가 남아 있으면 서버 업로드 전 `typing`으로 normalize한다.
- 과거 localStorage에 `copy_de`, `cram`, `mix`, `word_drop` 같은 값이 남아 있으면 서버 업로드 전 앱에서 `copy`로 normalize한다.
- `new_word_category`는 카테고리 확장 가능성이 있어 check를 두지 않는다.
- `reminder_time`은 DB에서 `00:00`부터 `23:59` 형식으로 검증하고, 앱 쪽 validation도 유지한다.

### 5.3 user_word_progress

SRS와 Word Stats를 단어 단위로 합친다.

```sql
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
```

권장 인덱스:

```sql
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
```

주의:

- `word_id`는 앱 단어 데이터의 stable ID를 그대로 사용한다.
- 서버는 단어 ID의 유효성을 검증하지 않는다.
- 실제 단어 존재 여부는 앱 데이터 기준으로 판단한다.
- v1에서는 row 수 증가보다 동기화/디버깅 단순성을 우선한다.

### 5.4 user_language_stats

언어별 총 학습량.

```sql
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
```

### 5.5 user_attendance

출석 날짜.

```sql
create table public.user_attendance (
  user_id uuid not null references auth.users(id) on delete cascade,
  date_key date not null,
  created_at timestamptz not null default now(),

  primary key (user_id, date_key)
);
```

동기화 정책:

- 서버/로컬 날짜를 합집합으로 병합한다.
- 같은 날짜가 중복되면 무시한다.
- 삭제 동기화는 v1에서 하지 않는다.

### 5.6 sync_meta

사용자별 sync 상태.

```sql
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
```

## 6. Row Level Security

모든 사용자 데이터 테이블은 RLS를 켠다.

```sql
alter table public.profiles enable row level security;
alter table public.user_settings enable row level security;
alter table public.user_word_progress enable row level security;
alter table public.user_language_stats enable row level security;
alter table public.user_attendance enable row level security;
alter table public.sync_meta enable row level security;
```

### 6.1 profiles policies

```sql
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
```

### 6.2 user_settings policies

```sql
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
```

### 6.3 user_word_progress policies

```sql
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

create policy "user_word_progress_delete_own"
on public.user_word_progress
for delete
using (auth.uid() = user_id);
```

삭제 정책은 v1 앱에서 적극적으로 쓰지 않는다. 다만 future cleanup을 위해 열어둘지 최종 검토가 필요하다.

### 6.4 user_language_stats policies

```sql
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
```

### 6.5 user_attendance policies

```sql
create policy "user_attendance_select_own"
on public.user_attendance
for select
using (auth.uid() = user_id);

create policy "user_attendance_insert_own"
on public.user_attendance
for insert
with check (auth.uid() = user_id);

create policy "user_attendance_delete_own"
on public.user_attendance
for delete
using (auth.uid() = user_id);
```

삭제 정책은 v1 앱에서 쓰지 않는 것을 권장한다.

### 6.6 sync_meta policies

```sql
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
```

## 7. Initial Profile Creation

Supabase Auth 가입 직후 `profiles` row를 자동 생성할지 선택해야 한다.

선택지:

1. DB trigger로 자동 생성
2. 앱 로그인 성공 후 upsert

v1 추천:

- 앱 로그인 성공 후 `profiles`, `user_settings`, `sync_meta`를 upsert한다.

이유:

- 구현 흐름이 앱에서 명확하다.
- trigger 디버깅 부담이 적다.
- Apple/Google provider 세부 metadata를 나중에 다룰 때 앱에서 조정하기 쉽다.

## 8. Upsert 기준

### 8.1 user_settings

```text
conflict target: user_id
```

### 8.2 user_word_progress

```text
conflict target: user_id, study_lang, word_id
```

### 8.3 user_language_stats

```text
conflict target: user_id, study_lang
```

### 8.4 user_attendance

```text
conflict target: user_id, date_key
```

### 8.5 sync_meta

```text
conflict target: user_id
```

## 9. Sync Payload Mapping

### 9.1 Settings

localStorage `karllang_settings_v3`에서 서버에 올릴 필드:

| Local | Server |
| --- | --- |
| `uiLang` | `ui_lang` |
| `studyLang` | `study_lang` |
| `mode` | `mode` |
| `goalTyping` | `goal_typing` |
| `goalCard` | `goal_card` |
| `newWordCefr` | `new_word_cefr` |
| `newWordCategory` | `new_word_category` |
| `soundEnabled` | `sound_enabled` |
| `hapticEnabled` | `haptic_enabled` |
| `studyReminderEnabled` | `reminder_enabled` |
| `studyReminderTime` | `reminder_time` |

서버에 올리지 않는 필드:

- `appVersion`
- `dataVersion`
- `seenOnboarding`

### 9.2 SRS + Word Stats

앱에서는 SRS와 Word Stats가 분리되어 있다.

- SRS: `karllang_word_${lang}_${wordId}`
- Word Stats: `karllang_word_stats_v4`

서버 업로드 시 같은 `(study_lang, word_id)`로 합쳐 `user_word_progress` row를 만든다.

### 9.3 Language Stats

localStorage `karllang_stats_v4`의 언어별 값을 `user_language_stats`로 매핑한다.

`last_studied_at`은 현재 localStorage stats에 직접 저장되어 있지 않다.

초기 migration 후보:

- 해당 언어 SRS row의 `lastReviewed` 최댓값
- 출석 날짜 중 가장 최근 날짜
- 둘 다 없으면 `0`

앱 구현 후에는 학습 세션 완료 시 `Date.now()` 기준으로 갱신한다.

### 9.4 Attendance

localStorage `karllang_attendance_v1.dates[]`를 `user_attendance.date_key` rows로 매핑한다.

## 10. 위험 요소와 보류 사항

### 10.1 user_word_progress row 증가

유저가 여러 언어를 오래 학습하면 row 수가 늘어난다.

현재 판단:

- v1 규모에서는 문제로 보지 않는다.
- 디버깅과 부분 sync가 쉬운 장점이 더 크다.

나중에 검토할 수 있는 대안:

- 언어별 JSON snapshot
- 최근 변경분 delta sync
- batch sync 제한

### 10.2 settings 컬럼형 vs JSON형

현재 초안은 컬럼형이다.

보류:

- 앱 설정 변경이 잦아지면 `settings_json jsonb`를 병행하거나 전환할 수 있다.

### 10.3 삭제 정책

v1은 대부분 삭제 sync를 하지 않는다.

주의:

- 단어 데이터에서 word ID가 제거되어도 서버 row는 남을 수 있다.
- 앱은 존재하지 않는 word ID를 무시해야 한다.
- cleanup은 나중에 별도 작업으로 처리한다.

### 10.4 timestamps

localStorage의 시간 값은 대부분 `Date.now()` 기반 millisecond number다.

서버:

- 학습 이벤트 시간: bigint 유지
- row 변경 시간: `updated_at timestamptz`

## 11. 다음 작업

1. 이 문서를 리뷰하고 테이블/컬럼명 확정
2. RLS delete policy 유지 여부 결정
3. `user_settings` 컬럼형 vs JSON형 최종 결정
4. 실행 가능한 `supabase_schema.sql` 작성
5. Supabase SQL Editor에서 적용
6. 앱 쪽 `supabase-client.js`, `auth.js` 구현 시작
