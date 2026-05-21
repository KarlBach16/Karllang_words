# KarlLang JS Refactor Map

Purpose: split `www/script.js` into smaller files without changing behavior.

This refactor is intentionally conservative:

- Refactor only.
- Do not change UI or behavior.
- Keep the current `<script>` loading model.
- Do not switch to ES modules yet.
- Do not rename public/global functions unless every reference is updated.
- After each extraction, run syntax checks and list exactly what moved.

## Current Loading Order

`www/index.html` loads the app in this order:

1. `category_meta.js`
2. `translations.js`
3. word data files
4. `lang_config.js`
5. `js/core/utils.js`
6. `js/core/storage.js`
7. `js/core/analytics.js`
8. `js/app/runtime-chrome.js`
9. `js/features/answer-effects.js`
10. `js/features/cram.js`
11. `js/features/review.js`
12. `js/features/typing-hint.js`
13. `js/features/answer-autosubmit.js`
14. `js/features/tts.js`
15. `js/features/study-ready.js`
16. `js/app/navigation.js`
17. feature files
18. `script.js`

Initial extraction should insert classic scripts between `lang_config.js` and
`script.js`, so existing data globals remain available.

## Current `script.js` Map

Line numbers are from the pre-refactor baseline and are approximate. Use them as
orientation, not as exact current locations.

| Area                                 | Current range | Notes                                                                                             |
| ------------------------------------ | ------------: | ------------------------------------------------------------------------------------------------- |
| Data aggregation                     |         1-152 | Builds `ALL_WORDS_*` from loaded data globals. Low logic, high load-order sensitivity.            |
| Storage keys, app constants, globals |       153-474 | `STORAGE_KEYS`, `APP_STATE`, `SETTINGS`, native plugin handles, Word Drop state. Split carefully. |
| Language/UI labels                   |       491-730 | UI language labels, feedback labels, native plugin constants.                                     |
| Native shell helpers                 |       745-914 | Haptics, Android back, intro visual, toast.                                                       |
| DOM cache                            |      915-1128 | `DOM` references. Must remain available before event binding.                                     |
| Storage and migration                |     1129-1366 | `safeGet`, `safeSet`, JSON migration, settings load/save. Good early extraction target.           |
| Translation helpers                  |     1374-2388 | `t`, `I18N_KEYS`, category labels, app translation pass.                                          |
| Word data helpers                    |     2389-2573 | `getAllWords`, article/gender/form/meaning/reading helpers.                                       |
| SRS, attendance, study set           |     2574-2948 | Word state, attendance, queue cache. Split after storage is stable.                               |
| Study chrome/runtime state           |     2949-3137 | Progress, phase, keyboard chrome, input focus.                                                    |
| Study reminders                      |     3145-3364 | Notification support, scheduling, settings UI. Good feature extraction target.                    |
| Ready state and POS labels           |     3369-3805 | Ready screen, POS label translations, cram ghost helpers.                                         |
| Cram mode                            |     3806-4130 | Cram target, submit, auto-submit, completion.                                                     |
| Study card flow                      |     4131-6214 | Main question render, answer handling, TTS/detail/stats/rating. High-risk extraction; do later.   |
| Word Drop                            |     6215-6890 | Word Drop pools, countdown, animation loop, input, result. Strong feature extraction target.      |
| Training start and reset             |     6891-7165 | Training start dispatch, SRS/stat reset.                                                          |
| Stats and share card                 |     7166-7707 | Daily summary, share-card data and canvas rendering. Good feature extraction target.              |
| End stats and wrong review           |     7708-7955 | Session completion and wrong-word review flow.                                                    |
| Wordbook/search                      |     7956-8410 | Mistakes, bookmarks, search rendering.                                                            |
| Navigation/view router               |     8411-8572 | Header, bottom nav, view switching.                                                               |
| Viewport/device/feedback/analytics   |     8573-8728 | Viewport sync, feedback mail, analytics event helpers.                                            |
| Event binding                        |     8729-9174 | Central listener attachment. Split only after feature functions are moved.                        |
| Settings hydration/init              |     9175-9310 | Startup sequence and `DOMContentLoaded`. Keep last until structure settles.                       |

## Proposed Extraction Order

### Step 1: Documentation only

Create and maintain this map. No runtime changes.

### Step 2: Core helpers

Target files:

- `www/js/core/utils.js`
- `www/js/core/storage.js`
- `www/js/core/analytics.js`

Move only leaf helpers first. Keep function names unchanged.

Do not move app state ownership in this step.

Moved so far:

- `www/js/core/utils.js`
  - `escapeHtml`
  - `buildFullGhostHtml`
  - `buildFirstLetterGhostHtmlForCram`
  - `buildTypingHintGhostHtml`
  - `normalizeAnswer`
- `www/js/core/storage.js`
  - `safeGet`
  - `safeSet`
  - `parseStoredJson`
  - `getStoredStudyLangFallback`
  - `looksLikeFlatStats`
  - `looksLikeWordStatEntry`
  - `looksLikeFlatWordStats`
  - `migrateJsonStorageKey`
  - `normalizeStatsStorageShape`
  - `normalizeWordStatsStorageShape`
  - `migrateUserData`
  - `shouldResetLearningDataForDataVersion`
  - `resetKarlLangData`
- `www/js/core/analytics.js`
  - `logAnalyticsEvent`
  - `getSessionAnalyticsParams`
  - `getTabAnalyticsName`
  - `logLanguageChange`

### Step 3: Feature slices

Target files:

- `www/js/features/worddrop.js`
- `www/js/features/answer-effects.js`
- `www/js/features/cram.js`
- `www/js/features/review.js`
- `www/js/features/typing-hint.js`
- `www/js/features/answer-autosubmit.js`
- `www/js/features/tts.js`
- `www/js/features/study-ready.js`
- `www/js/features/share-card.js`
- `www/js/features/reminders.js`

Move one feature at a time. Each feature should keep its current global state
until a later state cleanup pass.

Moved so far:

- `www/js/features/answer-effects.js`
  - `applyAnswerEffect`
- `www/js/features/cram.js`
  - `TRAINING_CRAM_WORDS`
  - `TRAINING_CRAM_INDEX`
  - `TRAINING_CRAM_REPEAT_TOTAL`
  - `TRAINING_CRAM_REPEAT_INDEX`
  - `TRAINING_CRAM_GIVEUP_ARMED`
  - `getGhostTypeForCram`
  - `buildFirstLetterGhost`
  - `applyCramGhost`
  - `getCramTargetText`
  - `showCramQuestion`
  - `handleCramSubmit`
  - `completeCramTrainingSession`
- `www/js/features/review.js`
  - `WRONG_PRACTICE_ACTIVE`
  - `WRONG_PRACTICE_PREVIOUS_MODE`
  - `WRONG_PRACTICE_RETURN_VIEW`
  - `restoreWrongPracticeMode`
  - `finishWrongPractice`
  - `advanceWrongPracticeStep`
  - `startWrongWordsTraining`
- `www/js/features/typing-hint.js`
  - `TYPING_HINT_COUNT`
  - `getTypingHintTargetText`
  - `getTypingHintMaxCount`
  - `isTypingHintAvailable`
  - `updateTypingHintUi`
  - `handleTypingHint`
  - `updateRatingButtonsForHint`
- `www/js/features/answer-autosubmit.js`
  - `ANSWER_INPUT_COMPOSING`
  - `ANSWER_INPUT_CLEAR_UNTIL`
  - `getAutoSubmitTargetText`
  - `checkAnswerInputAutoSubmit`
  - `scheduleAnswerInputAutoSubmitCheck`
- `www/js/features/tts.js`
  - `TTS_SUPPORTED`
  - `TTS_READY`
  - `TTS_VOICE`
  - `TTS_WARNED_UNSUPPORTED`
  - `NativeTTS`
  - `showTtsWarning`
  - `showEnglishVoiceMissingWarning`
  - `getTtsLangCode`
  - `hasNativeTtsSupport`
  - `updateTtsUiState`
  - `pickTtsVoiceForLang`
  - `initTtsVoices`
  - `isNativeTtsAvailable`
  - `speakWithWebSpeech`
  - `speakGerman`
- `www/js/features/study-ready.js`
  - `updateStudyStartSummary`
  - `resetSessionReport`
  - `clearStudyCardForReady`
  - `showReadyState`
- `www/js/features/share-card.js`
  - `SHARE_CARD_CACHE`
  - `NativeImageSaver`
  - `getShareStudyLangLabel`
  - `getShareModeLabel`
  - `getTopShareModes`
  - `getShareCardData`
  - `drawShareText`
  - `createShareCardDataUrl`
  - `roundRectPath`
  - `drawShareStat`
  - `prepareShareCard`
  - `openShareCardModal`
  - `closeShareCardModal`
  - `canUseNativeImageSaver`
  - `saveShareCardImageNative`
  - `downloadShareCardImage`
  - `dataUrlToBlob`
  - `shareCardImage`
- `www/js/features/reminders.js`
  - `NativeLocalNotifications`
  - `NativeAppSettings`
  - `STUDY_REMINDER_NOTIFICATION_ID`
  - `DEFAULT_STUDY_REMINDER_TIME`
  - `isStudyReminderSupported`
  - `normalizeReminderTime`
  - `formatReminderTimeLabel`
  - `populateStudyReminderTimeSelect`
  - `getStudyReminderTimeParts`
  - `getSystemNotificationLang`
  - `getReminderTranslation`
  - `getStudyReminderNotificationText`
  - `cancelStudyReminderNotification`
  - `getStudyReminderPermissionDisplay`
  - `canOpenNativeAppSettings`
  - `openNativeAppSettings`
  - `scheduleStudyReminderNotification`
  - `updateStudyReminderToggle`
  - `setStudyReminderEnabled`
  - `ensureStudyReminderSchedule`
- `www/js/features/wordbook.js`
  - `formatHardCountLabel`
  - `formatWrongLabel`
  - `createWordListItem`
  - `renderMistakes`
  - `renderBookmarks`
  - `renderWordbookIfNeeded`
  - `handleSearch`
  - `clearSearchView`
- `www/js/features/stats-summary.js`
  - `nowDay`
  - `getLocalDateKey`
  - `shiftLocalDate`
  - `getWeekStartMonday`
  - `getAttendanceDates`
  - `saveAttendanceDates`
  - `recordAttendanceForStudyStart`
  - `getLearningStreakDays`
  - `renderAttendance`
  - `getStats`
  - `saveStats`
  - `getEmptyDailySummary`
  - `getDailySummary`
  - `saveDailySummary`
  - `getSessionModeKey`
  - `addDailyModeCount`
  - `addDailyDifficultWords`
  - `addCurrentSessionToDailySummary`
  - `addTrainingSessionToDailySummary`
- `www/js/features/worddrop.js`
  - `WORD_DROP_STATE`
  - `WORD_DROP_BASE_SPEED`
  - `getWordDropText`
  - `dedupeWordsById`
  - `getNormalizedCefrLevel`
  - `getWordDropNormalLevels`
  - `buildWordDropPools`
  - `pickNonRecent`
  - `pickWordForDrop`
  - `updateWordDropHud`
  - `getWordDropTargetCount`
  - `completeWordDropItem`
  - `focusWordDropInput`
  - `setWordDropReadyMessage`
  - `getWordDropTapToStartText`
  - `hideWordDropReadyMessage`
  - `updateWordDropKeyboardChrome`
  - `beginWordDropGameplay`
  - `startWordDropCountdown`
  - `prepareWordDropInputFocus`
  - `cancelWordDropCountdown`
  - `handleWordDropInputFocus`
  - `setNextWordDropWord`
  - `playWordDropHitEffect`
  - `playWordDropMissEffect`
  - `getWordDropLaneLeft`
  - `recordWordDropMiss`
  - `formatWordDropResult`
  - `getComparableWordDropInputValue`
  - `getComparableWordDropCurrentText`
  - `checkWordDropAnswer`
  - `handleWordDropInput`
  - `scheduleWordDropAnswerCheck`
  - `runWordDropFrame`
  - `stopWordDrop`
  - `endWordDrop`
  - `startWordDrop`

### Step 4: Study core

Target files:

- `www/js/study/study-session.js`
- `www/js/study/cram.js`
- `www/js/study/review.js`
- `www/js/study/srs.js`

This is the highest-risk area because study rendering, keyboard behavior,
SRS, TTS, and analytics are coupled. Extract only after Word Drop/share/reminder
splits are verified.

### Step 5: App shell

Target files:

- `www/js/app/navigation.js`
- `www/js/app/render.js`
- `www/js/app/init.js`

Do this last. The current `script.js` should gradually shrink into an app
orchestrator before being renamed.

Moved so far:

- `www/js/app/runtime-chrome.js`
  - `APP_LAYOUT_VIEWPORT_HEIGHT`
  - `setPhase`
  - `updateStudySettingsVisibility`
  - `isKeyboardStudyPhase`
  - `updateKeyboardModeChrome`
  - `updateRuntimeChromeClass`
  - `focusInputWithoutScroll`
  - `refocusAnswerInputForTyping`
  - `isNativePlatform`
  - `syncAppViewportHeight`
- `www/js/app/navigation.js`
  - `getBottomNavView`
  - `getAppHeaderTitle`
  - `updateAppHeader`
  - `updateBottomNavActive`
  - `goToStudyFromNav`
  - `showView`

## Verification Checklist

Run after every extraction:

1. `node --check www/script.js`
2. `node --check` on every newly created JS file
3. Browser/PWA smoke test:
   - app starts
   - study card mode starts
   - copy mode auto-submits
   - typing mode hint and answer flow works
   - session completion works
   - wrong-word review works
   - cram works
   - Word Drop starts, accepts input, ends
   - share image modal opens
   - wordbook/search works
   - settings/reminder UI works
   - bottom nav and header behave during keyboard input

Only run `npx cap sync` after verified runtime changes that should reach native
shells.

## Known Risks

- Top-level load order matters because word data files define globals consumed
  by `script.js`.
- `let`/`const` declarations in classic scripts are global lexical bindings,
  but not `window` properties. Avoid depending on `window.NAME` unless explicitly
  assigned.
- `APP_STATE`, `SETTINGS`, `CURRENT_LANG`, and `DOM` are widely shared. Do not
  move ownership until feature files are stable.
- Keyboard and native plugin behavior differs across browser, PWA, iOS, and
  Android. Any extraction around viewport, focus, Word Drop, or reminders needs
  manual device testing later.
