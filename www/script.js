// KarlLang v10 - typing/card/copy modes, CEFR progress, search, TTS/bookmark

/* ============================================
   ========== 1. GLOBAL CONSTANTS & STATE ======
   ============================================ */

const STORAGE_KEYS = {
  SETTINGS: "karllang_settings_v3",
  SRS_PREFIX: "karllang_word_", // 여기는 그대로 두고
  STATS: "karllang_stats_v4", // ✅ 언어별 통계용 새 버전
  WORD_STATS: "karllang_word_stats_v4", // ✅ 언어별 북마크/틀린단어용 새 버전
  DAILY_SUMMARY: "karllang_daily_summary_v1",
  ATTENDANCE: "karllang_attendance_v1",
  STUDY_WORD_SET: "karllang_study_word_set_v1",
  USER_DATA_SCHEMA: "karllang_user_data_schema_v1",
};

function getCurrentStudyLang() {
  return (SETTINGS.studyLang || "de").toLowerCase();
}
const APP_STATE = {
  phase: "READY", // READY, QUESTION, ANSWER, FINISHED
  currentCard: null,
  queue: [],
  completed: 0,
  totalTarget: 0,
  newCount: 0,
  reviewCount: 0,
  sessionMode: null,
  sessionCorrectCount: 0,
  sessionWrongCount: 0,
  sessionHardCount: 0,
  sessionNormalCount: 0,
  sessionEasyCount: 0,
  sessionSummarySaved: false,
  sessionWrongWords: [],
  currentView: "study",
};

let SETTINGS = { ...DEFAULT_SETTINGS };
let CURRENT_LANG = "ko";
// 🔹 훈련소 모드 활성화 여부 (정규 학습 vs 훈련소 구분용)
let TRAINING_MODE_ACTIVE = false;
let TRAINING_MODE_KIND = "none"; // "typing" | "copy" | "mix"
let TRAINING_MIX_WORDS = []; // Mix 모드에서 쓸 단어 리스트
let TRAINING_MIX_INDEX = 0; // 현재 몇 번째 단어인지
let TRAINING_MIX_STEP = 0; // 0=카드, 1=카피, 2=타이핑

/* ============================================
   ========== 4. TRANSLATION ENGINE ============
   ============================================ */


/* ============================================
   ========== 5. WORD / SRS ENGINE ============
   ============================================ */

/* ============================================
   ========== 7. ANSWER / RATING / TTS =========
   ============================================ */


/* ============================================
   ========== 12. EVENT BINDINGS ==============
   ============================================ */



/* ============================================
   ========== 13. INIT / BOOTSTRAP ============
   ============================================ */



/* v1 iOS 출시 기준: PWA Service Worker 등록 비활성화 */
// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker
//       .register("./service-worker.js")
//       .then((reg) => console.log("서비스 워커 등록 성공:", reg))
//       .catch((err) => console.log("서비스 워커 등록 실패:", err));
//   });
// }
