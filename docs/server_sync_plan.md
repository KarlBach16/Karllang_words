# KarlLang Server Sync Plan - 2026-06-08

## 0. 문서 목적

이 문서는 KarlLang에 Supabase 기반 서버 동기화를 도입하기 전의 기준 설계다.

현재 KarlLang은 localStorage 기반으로 학습 기록을 보존한다. 서버 도입의 목적은 이 로컬 학습 흐름을 대체하는 것이 아니라, 계정 기반 백업과 iOS/Android 기기 간 동기화를 추가하는 것이다.

## 1. 서버 도입 목표

### 1.1 핵심 목표

- iPhone / Android 간 학습 기록 동기화
- 앱 재설치 또는 기기 변경 시 학습 기록 복원
- Guest 사용 흐름 유지
- 로그인 사용자는 localStorage 데이터를 서버에 백업
- 서버 장애 또는 네트워크 문제 시에도 학습 가능

### 1.2 제품 원칙

- 앱은 계속 로컬 우선으로 동작한다.
- 서버 동기화는 학습 시작 속도를 늦추면 안 된다.
- 기존 localStorage 데이터는 첫 로그인 시 보존/업로드한다.
- 서버 스키마는 단어 ID 안정성을 전제로 한다.
- v1은 복잡한 merge보다 단순하고 예측 가능한 정책을 우선한다.

## 2. 현재 결정 사항

### 2.1 서버

- Supabase 사용
- 프로젝트 리전: Tokyo
- DB 생성 완료

### 2.2 인증

v1 권장 범위:

- Guest 유지
- Apple Login
- Google Login

v1 제외:

- 이메일/비밀번호 로그인
- 소셜 로그인 추가 확장
- 팀/가족/공유 계정

## 3. 현재 localStorage 구조

현재 전역 저장 키는 `www/script.js`의 `STORAGE_KEYS`를 기준으로 한다.

```js
STORAGE_KEYS = {
  SETTINGS: "karllang_settings_v3",
  SRS_PREFIX: "karllang_word_",
  STATS: "karllang_stats_v4",
  WORD_STATS: "karllang_word_stats_v4",
  DAILY_SUMMARY: "karllang_daily_summary_v1",
  ATTENDANCE: "karllang_attendance_v1",
  STUDY_WORD_SET: "karllang_study_word_set_v1",
  USER_DATA_SCHEMA: "karllang_user_data_schema_v1",
}
```

### 3.1 Settings

키:

- `karllang_settings_v3`

현재 기본 구조:

```js
{
  mode: "copy",
  goalTyping: 5,
  goalCard: 5,
  newWordCefr: "A1",
  uiLang: "ko",
  studyLang: "de",
  soundEnabled: true,
  newWordCategory: "all",
  appVersion: APP_VERSION,
  dataVersion: DATA_VERSION,
  seenOnboarding: false,
  hapticEnabled: true,
  studyReminderEnabled: false,
  studyReminderTime: "20:30"
}
```

### 3.2 SRS

키 형식:

- `karllang_word_${lang}_${wordId}`

예:

- `karllang_word_de_tag_nm_1`

값 구조:

```js
{
  level: 0,
  lastReviewed: 0,
  nextDue: 0,
  isNew: true
}
```

특징:

- 단어별 개별 localStorage key로 저장된다.
- 언어 코드와 단어 ID가 같이 들어간다.
- 서버 전환 시 가장 중요한 데이터다.

### 3.3 Stats

키:

- `karllang_stats_v4`

언어별 구조:

```js
{
  de: {
    totalReviewed: 0,
    newLearned: 0
  }
}
```

### 3.4 Word Stats

키:

- `karllang_word_stats_v4`

언어별/단어별 구조:

```js
{
  de: {
    wordId: {
      hardCount: 0,
      wrongAttempts: 0,
      bookmarked: false,
      level: 0,
      lastWrongAt: 0,
      lastHardAt: 0,
      totalViews: 0
    }
  }
}
```

용도:

- 북마크
- 틀린 단어
- 어려운 단어
- 단어 노출 횟수

### 3.5 Attendance

키:

- `karllang_attendance_v1`

구조:

```js
{
  dates: ["2026-06-08"]
}
```

### 3.6 Daily Summary

키:

- `karllang_daily_summary_v1`

언어별 오늘 요약 구조:

```js
{
  de: {
    day: 20613,
    total: 0,
    newCount: 0,
    reviewCount: 0,
    correct: 0,
    wrong: 0,
    hard: 0,
    normal: 0,
    easy: 0,
    modeCounts: {},
    difficultWords: []
  }
}
```

주의:

- 현재 day는 `Math.floor(Date.now() / 86400000)` 기반이다.
- 서버 저장 시 timezone/date key 기준을 별도로 정해야 한다.

### 3.7 Study Word Set

키:

- `karllang_study_word_set_v1`

용도:

- 현재 학습 단어 세트 고정
- 사용자가 `새 단어 세트` 버튼을 누르기 전까지 같은 세트를 유지

v1 서버 sync 대상에서는 제외하는 것을 권장한다.

## 4. Sync 대상 분류

### 4.1 v1 필수 sync

서버 MVP에서 반드시 동기화한다.

- SRS
  - `level`
  - `lastReviewed`
  - `nextDue`
  - `isNew`
- Word Stats
  - `bookmarked`
  - `wrongAttempts`
  - `hardCount`
  - `lastWrongAt`
  - `lastHardAt`
  - `totalViews`
- Settings 일부
  - `uiLang`
  - `studyLang`
  - `mode`
  - `goalTyping`
  - `goalCard`
  - `newWordCefr`
  - `newWordCategory`
  - `soundEnabled`
  - `hapticEnabled`
  - `studyReminderEnabled`
  - `studyReminderTime`

### 4.2 v1 sync 권장

- Attendance
  - 연속 학습/출석 UX에 중요
  - 공유 이미지의 day streak에도 영향
- Stats
  - 전체 학습량 복원에 필요

### 4.3 v1 보류

- Daily Summary
  - 오늘 공유 이미지 생성에는 유용하지만, 서버 저장 필수성은 낮다.
  - timezone 정책을 먼저 정해야 한다.
  - v1에서는 로컬 유지 또는 일 단위 집계 테이블로 축소 저장을 검토한다.

### 4.4 로컬 전용 권장

- Study Word Set
  - 기기별 현재 세트 상태는 동기화하지 않는 편이 자연스럽다.
  - 다른 기기에서 같은 세트가 갑자기 이어지면 오히려 혼란스러울 수 있다.
- `seenOnboarding`
  - 기기별 UI 상태로 볼 수 있다.
- `appVersion`
  - 서버 사용자 데이터로 저장하지 않는다.
- `dataVersion`
  - 서버 사용자 데이터로 저장하지 않는다.

## 5. Supabase 스키마 초안

최종 테이블 생성 전 초안이다. 실제 SQL 작성 전 한 번 더 검토한다.

### 5.1 profiles

사용자 기본 프로필.

```text
profiles
- id uuid primary key references auth.users(id)
- created_at timestamptz
- updated_at timestamptz
- last_seen_at timestamptz
```

### 5.2 user_settings

사용자 설정.

```text
user_settings
- user_id uuid primary key references auth.users(id)
- ui_lang text
- study_lang text
- mode text
- goal_typing int
- goal_card int
- new_word_cefr text
- new_word_category text
- sound_enabled boolean
- haptic_enabled boolean
- reminder_enabled boolean
- reminder_time text
- updated_at timestamptz
```

대안:

- v1에서는 `settings_json jsonb` 통짜 저장도 가능하다.
- 현재 설정 수가 많지 않아 컬럼형/JSON형 모두 가능하다.
- 컬럼형은 쿼리와 검증이 명확하고, JSON형은 앱 설정 변경에 유연하다.
- 최종 SQL 작성 전 둘 중 하나를 확정한다.

### 5.3 user_word_progress

SRS와 단어별 상태를 합쳐 저장하는 v1 후보 테이블.

```text
user_word_progress
- user_id uuid references auth.users(id)
- study_lang text
- word_id text
- srs_level int
- last_reviewed bigint
- next_due bigint
- is_new boolean
- bookmarked boolean
- wrong_attempts int
- hard_count int
- last_wrong_at bigint
- last_hard_at bigint
- total_views int
- updated_at timestamptz

primary key (user_id, study_lang, word_id)
```

이유:

- SRS와 Word Stats가 앱에서는 분리되어 있지만, 서버에서는 같은 `word_id` 단위로 관리하는 편이 조회/동기화가 단순하다.
- `bookmarked`, `wrong_attempts`, `hard_count`만 있는 단어도 같은 테이블에 저장할 수 있다.

### 5.4 user_language_stats

언어별 총량 통계.

```text
user_language_stats
- user_id uuid references auth.users(id)
- study_lang text
- total_reviewed int
- new_learned int
- updated_at timestamptz

primary key (user_id, study_lang)
```

### 5.5 user_attendance

출석 날짜.

```text
user_attendance
- user_id uuid references auth.users(id)
- date_key date
- created_at timestamptz

primary key (user_id, date_key)
```

### 5.6 sync_meta

동기화 상태 추적.

```text
sync_meta
- user_id uuid primary key references auth.users(id)
- schema_version int
- last_pull_at timestamptz
- last_push_at timestamptz
- last_local_migration_at timestamptz
- updated_at timestamptz
```

## 6. 로그인/마이그레이션 정책

### 6.1 Guest 유지

- 앱은 로그인 없이도 기존처럼 사용 가능해야 한다.
- Guest 상태에서도 localStorage 저장은 계속 유지한다.
- 로그인 유도는 설정 또는 별도 계정 화면에서 제공한다.

### 6.2 첫 로그인

첫 로그인 시 처리:

1. 현재 localStorage를 읽는다.
2. 서버에 기존 데이터가 있는지 확인한다.
3. 서버 데이터가 없으면 localStorage 전체를 서버에 업로드한다.
4. 서버 데이터가 있고 localStorage에도 학습 데이터가 있으면 사용자에게 한 번 선택하게 한다.
5. 사용자가 선택한 방향으로 동기화한다.
6. 성공 후 localStorage는 그대로 유지한다.

서버 데이터와 현재 기기 데이터가 모두 있을 때 선택지:

1. 서버 데이터 사용
   - 서버 데이터를 현재 기기에 내려받아 localStorage에 반영한다.
   - 현재 기기 데이터는 덮어쓸 수 있으므로 명확한 경고 문구가 필요하다.
2. 현재 기기 데이터 업로드
   - 현재 localStorage 데이터를 서버에 업로드한다.
   - 기존 서버 데이터는 덮어쓸 수 있으므로 명확한 경고 문구가 필요하다.

이 선택은 첫 충돌 상황에서만 묻는 것을 목표로 한다.

이유:

- 첫 로그인은 가장 위험한 순간이다.
- 오래 공부한 기기 데이터가 오래된 서버 데이터에 덮이면 학습 기록 손실로 이어진다.
- v1에서는 자동 병합보다 사용자 선택이 더 안전하다.

주의:

- 첫 로그인 직후 localStorage를 지우지 않는다.
- 업로드 실패 시 앱 사용을 막지 않는다.
- migration 완료 여부는 별도 sync meta로 기록한다.
- 선택 없이 자동으로 localStorage나 서버 데이터를 삭제하지 않는다.

### 6.3 로그아웃

v1 권장:

- 로그아웃해도 localStorage는 유지한다.
- 다른 사용자로 로그인하려는 경우에는 명확한 경고/선택 UI가 필요하다.

보류:

- 로그아웃 시 로컬 데이터 삭제
- 계정별 로컬 프로필 분리

## 7. 충돌 정책

v1 일반 sync 기본 정책:

- Last Updated Wins

단, 첫 로그인에서 서버 데이터와 현재 기기 데이터가 모두 있는 경우에는 Last Updated Wins를 자동 적용하지 않고 사용자 선택을 우선한다.

적용 기준:

- 설정: `updated_at`이 최신인 쪽 채택
- 단어별 진행도: `(user_id, study_lang, word_id)` 단위로 최신 `updated_at` 채택
- 언어별 stats: 최신 `updated_at` 채택
- 출석: 날짜 set union

예외 권장:

- Attendance는 삭제보다 합집합이 자연스럽다.
- `wrongAttempts`, `hardCount`, `totalViews`는 나중에 max/sum merge를 검토할 수 있으나 v1에서는 복잡한 merge를 하지 않는다.

## 8. 구현 순서

### Phase 1 - 설계/조사

- `docs/server_sync_plan.md` 작성
- 현재 localStorage 구조 확인
- Sync 대상 확정
- Supabase table SQL 초안 작성

### Phase 2 - 기반 연결

- Supabase JS SDK 추가
- `www/js/core/supabase-client.js` 추가
- `www/js/features/auth.js` 추가
- 설정 화면에 로그인 상태 UI 추가

### Phase 3 - 로컬 데이터 Export/Import

- localStorage에서 sync payload 생성
- server payload를 localStorage 구조로 반영하는 import 함수 작성
- destructive reset 없이 동작하게 구현

### Phase 4 - 첫 로그인 Migration

- 로그인 성공 시 localStorage 업로드
- 서버 데이터 존재 여부 확인
- v1 충돌 정책 적용
- sync meta 저장

### Phase 5 - 자동 Sync

- 앱 시작 시 pull
- 학습 세션 종료 후 push
- 설정 변경 후 push
- 네트워크 실패 시 조용히 보류

### Phase 6 - 실기기 테스트

- iOS Apple Login
- Android Google Login
- iOS → Android 동기화
- Android → iOS 동기화
- 로그아웃/재로그인
- 오프라인 사용 후 재접속

## 9. v1 비목표

- 서버 기반 실시간 학습
- 랭킹/소셜 기능
- 친구/공유 단어장
- 관리자 대시보드
- 서버에서 SRS 큐 계산
- 단어 데이터 서버 전환
- 복잡한 충돌 병합 UI
- 이메일 로그인

## 10. 열려 있는 질문

- Daily Summary를 서버에 저장할 것인가, 아니면 공유 이미지용 로컬 데이터로 둘 것인가?
- 날짜 기준은 사용자 로컬 timezone 기준인가, UTC 기준인가?
- 여러 계정으로 같은 기기에서 로그인할 때 localStorage를 어떻게 분리할 것인가?
- 서버 데이터가 localStorage보다 오래된 경우 사용자에게 선택지를 줄 것인가?
- SRS와 Word Stats를 한 테이블로 합칠지, 별도 테이블로 분리할지 최종 결정이 필요하다.
- Supabase RLS 정책은 테이블별로 어떻게 작성할 것인가?

## 11. 다음 작업

다음 구현 전 선행 작업:

1. 이 문서를 기준으로 Sync 대상 최종 확정
2. Supabase SQL schema 초안 작성
3. 현재 localStorage export payload 예시 작성
4. Auth UI 위치 결정
5. 첫 로그인 migration UX 문구 결정
