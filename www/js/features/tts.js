// Text-to-speech support for study words.

// 🔊 TTS 상태 플래그 (구형 Android WebView 대응)
let TTS_SUPPORTED = false;
let TTS_READY = false;
let TTS_VOICE = null;
let TTS_WARNED_UNSUPPORTED = false;
const NativeTTS = window.Capacitor
  ? (window.Capacitor.Plugins && window.Capacitor.Plugins.NativeTTS) || null
  : null;

function showTtsWarning() {
  if (TTS_WARNED_UNSUPPORTED) return;
  TTS_WARNED_UNSUPPORTED = true;

  const msg = trKey(
    "tts_unsupported_notice",
    "이 기기에서는 발음 기능이 제한될 수 있습니다.",
  );

  if (DOM && DOM.feedback) {
    DOM.feedback.textContent = msg;
  } else if (DOM && DOM.hintDisplay) {
    DOM.hintDisplay.textContent = msg;
  } else {
    console.warn(msg);
  }
}

function showEnglishVoiceMissingWarning() {
  const msg = trKey(
    "tts_english_voice_missing",
    "영어 음성(EN-US/EN-GB)이 없어 발음을 재생하지 않았습니다. 기기 TTS에서 영어 음성을 설치해 주세요.",
  );
  if (DOM && DOM.feedback) {
    DOM.feedback.textContent = msg;
  } else if (DOM && DOM.hintDisplay) {
    DOM.hintDisplay.textContent = msg;
  } else {
    console.warn(msg);
  }
}

function getTtsLangCode(studyLang) {
  const target = (studyLang || "de").toLowerCase();
  if (target === "en") return "en-US";
  if (target === "ko") return "ko-KR";
  if (target === "fr") return "fr-FR";
  if (target === "it") return "it-IT";
  if (target === "es") return "es-ES";
  if (target === "pt") return "pt-PT";
  if (target === "pl") return "pl-PL";
  if (target === "nl") return "nl-NL";
  if (target === "ru") return "ru-RU";
  if (target === "sv") return "sv-SE";
  if (target === "ja") return "ja-JP";
  if (target === "zh") return "zh-CN";
  return "de-DE";
}

function hasNativeTtsSupport() {
  if (!NativeTTS) return false;

  const platform =
    window.Capacitor && typeof window.Capacitor.getPlatform === "function"
      ? window.Capacitor.getPlatform()
      : "web";
  const isNativeRuntime = platform === "android" || platform === "ios";
  return (
    isNativeRuntime &&
    typeof NativeTTS.speak === "function" &&
    typeof NativeTTS.stop === "function" &&
    typeof NativeTTS.isAvailable === "function"
  );
}

// 🔊 스피커 버튼 활성/비활성 반영
function updateTtsUiState() {
  const soundOn = SETTINGS.soundEnabled !== false;
  // 네이티브 TTS(플러그인) 또는 Web Speech 중 하나만 살아있어도 버튼 활성
  const canClick = soundOn && (hasNativeTtsSupport() || TTS_SUPPORTED);

  document.querySelectorAll("button.speaker-icon").forEach((el) => {
    el.disabled = !canClick;
    el.classList.toggle("tts-disabled", !canClick);
  });
}

function pickTtsVoiceForLang(voices, studyLang) {
  const lang = (studyLang || "de").toLowerCase();
  const prefixes =
    lang === "de"
      ? ["de-"]
      : lang === "en"
      ? ["en-us", "en-gb", "en-"]
      : lang === "ko"
      ? ["ko-"]
      : lang === "es"
      ? ["es-"]
      : [lang + "-"];

  const lower = (s) => (s || "").toLowerCase();
  const badNameTokens = [
    "novelty",
    "funny",
    "clown",
    "whisper",
    "robot",
    "monster",
    "alien",
    "zombie",
    "child",
    "kid",
    "baby",
  ];
  const femaleNameTokens = [
    "female",
    "woman",
    "girl",
    "samantha",
    "victoria",
    "karen",
    "moira",
    "aria",
    "jenny",
    "zira",
    "emma",
    "siri female",
  ];
  const maleNameTokens = [
    "male",
    "man",
    "boy",
    "david",
    "thomas",
    "daniel",
    "alex",
    "google uk english male",
  ];
  const goodNameTokens = [
    "google",
    "samantha",
    "victoria",
    "karen",
    "moira",
    "aria",
    "jenny",
    "zira",
    "natural",
    "enhanced",
    "premium",
    "neural",
  ];

  let best = null;
  let bestScore = -999;

  for (const v of voices || []) {
    const vLang = lower(v.lang);
    const vName = `${lower(v.name)} ${lower(v.voiceURI)}`;

    let prefixScore = -1;
    for (let i = 0; i < prefixes.length; i += 1) {
      if (vLang.startsWith(prefixes[i])) {
        prefixScore = prefixes.length - i;
        break;
      }
    }
    if (prefixScore < 0) continue;

    let score = prefixScore * 100;
    if (v.default) score += 10;

    for (const t of goodNameTokens) {
      if (vName.includes(t)) score += 6;
    }
    for (const t of femaleNameTokens) {
      if (vName.includes(t)) score += 14;
    }
    for (const t of maleNameTokens) {
      if (vName.includes(t)) score -= 8;
    }
    for (const t of badNameTokens) {
      if (vName.includes(t)) score -= 20;
    }

    if (score > bestScore) {
      bestScore = score;
      best = v;
    }
  }

  return best || null;
}

// 🔊 TTS 보이스 초기화 (WebView voice loading 대응)
function initTtsVoices() {
  if (!("speechSynthesis" in window)) {
    TTS_SUPPORTED = false;
    TTS_READY = false;
    TTS_VOICE = null;
    updateTtsUiState();
    return;
  }

  TTS_SUPPORTED = true;

  const loadVoices = () => {
    const voices = window.speechSynthesis.getVoices() || [];
    if (!voices.length) {
      TTS_READY = false;
      TTS_VOICE = null;
      updateTtsUiState();
      return;
    }

    // 해당 학습 언어 보이스가 있을 때만 ready
    const voice = pickTtsVoiceForLang(voices, SETTINGS.studyLang);
    TTS_VOICE = voice || null;
    TTS_READY = !!TTS_VOICE;
    updateTtsUiState();
  };

  loadVoices();

  if (typeof window.speechSynthesis.onvoiceschanged !== "undefined") {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}

async function isNativeTtsAvailable(lang) {
  if (!hasNativeTtsSupport()) return false;
  try {
    const ret = await NativeTTS.isAvailable({ lang });
    return !!(ret && ret.available);
  } catch (e) {
    console.warn("Native TTS isAvailable failed", e);
    return false;
  }
}

function speakWithWebSpeech(text, targetLang, targetLangCode) {
  if (!("speechSynthesis" in window)) {
    TTS_SUPPORTED = false;
    TTS_READY = false;
    updateTtsUiState();
    showTtsWarning();
    return;
  }

  TTS_SUPPORTED = true;
  if (!TTS_READY) {
    // 첫 클릭 시점에 voices가 늦게 준비되는 기기 대응: 재조회만 하고 fallback 허용
    const voices = window.speechSynthesis.getVoices() || [];
    if (voices.length) {
      TTS_VOICE = pickTtsVoiceForLang(voices, SETTINGS.studyLang);
      TTS_READY = !!TTS_VOICE;
    }
    updateTtsUiState();
  }

  const utter = new SpeechSynthesisUtterance(text);

  // 영어는 반드시 영어 보이스가 잡힌 경우만 재생 (한국어 억양 fallback 방지)
  if (targetLang === "en" && !TTS_VOICE) {
    showEnglishVoiceMissingWarning();
    return;
  }

  if (TTS_VOICE) {
    utter.voice = TTS_VOICE;
    utter.lang = TTS_VOICE.lang || "de-DE";
  } else {
    utter.lang = targetLangCode;
  }

  utter.rate = 0.95;
  utter.pitch = 1;
  utter.onerror = (event) => {
    const error = event && event.error ? String(event.error) : "";
    // macOS/Safari/Chrome can report the previous utterance as canceled or
    // interrupted when we call cancel() before starting a new one. Playback of
    // the new utterance can still succeed, so this is not an unsupported state.
    if (error === "canceled" || error === "interrupted") {
      return;
    }
    showTtsWarning();
  };

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

function speakGerman(text) {
  if (!text) return;
  if (SETTINGS.soundEnabled === false) return;

  const targetLangCode = getTtsLangCode(SETTINGS.studyLang || "de");
  const targetLang = (SETTINGS.studyLang || "de").toLowerCase();

  // 1) 앱(iOS/Android)에서는 네이티브 TTS 우선
  if (hasNativeTtsSupport()) {
    isNativeTtsAvailable(targetLangCode)
      .then((available) => {
        if (!available) {
          speakWithWebSpeech(text, targetLang, targetLangCode);
          return;
        }
        return NativeTTS.speak({ text, lang: targetLangCode }).catch((e) => {
          console.warn("Native TTS failed, fallback to Web Speech", e);
          speakWithWebSpeech(text, targetLang, targetLangCode);
        });
      })
      .catch((e) => {
        console.warn("Native TTS availability check failed", e);
        speakWithWebSpeech(text, targetLang, targetLangCode);
      });
    return;
  }

  // 2) 웹/PWA에서는 기존 Web Speech fallback 유지
  speakWithWebSpeech(text, targetLang, targetLangCode);
}
