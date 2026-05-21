// Native/PWA shell helpers: haptics, toast, intro visual, and Android back.

// 햅틱 플러그인 래퍼 (Capacitor 5/6 둘 다 커버)
const NativeHaptics = window.Capacitor
  ? (window.Capacitor.Plugins && window.Capacitor.Plugins.Haptics) ||
    window.Capacitor.Haptics ||
    null
  : null;

async function triggerHaptic(type) {
  // 설정에서 끄면 바로 무시
  if (window.SETTINGS && SETTINGS.hapticEnabled === false) {
    return;
  }

  // 1) 네이티브 햅틱 우선
  if (NativeHaptics) {
    try {
      switch (type) {
        case "light":
          await NativeHaptics.impact({ style: "LIGHT" });
          break;
        case "medium":
          await NativeHaptics.impact({ style: "MEDIUM" });
          break;
        case "success":
          await NativeHaptics.notification({ type: "SUCCESS" });
          break;
        case "error":
          await NativeHaptics.notification({ type: "ERROR" });
          break;
        default:
          await NativeHaptics.vibrate();
          break;
      }
      return; // 네이티브에서 성공했으면 여기서 끝
    } catch (e) {
      console.warn("Native haptics failed", e);
    }
  }

  // 2) 웹/PWA fallback (iOS 사파리/PWA에서는 어차피 안 됨)
  if (navigator.vibrate) {
    switch (type) {
      case "light":
        navigator.vibrate(10);
        break;
      case "medium":
        navigator.vibrate([15, 30]);
        break;
      case "success":
        navigator.vibrate([10, 30, 10]);
        break;
      case "error":
        navigator.vibrate([30, 60, 30]);
        break;
      default:
        navigator.vibrate(20);
    }
  }
}

// Capacitor App 플러그인 (안드로이드 back 버튼용)
const NativeApp = window.Capacitor
  ? (window.Capacitor.Plugins && window.Capacitor.Plugins.App) ||
    window.Capacitor.App ||
    null
  : null;

let LAST_BACK_TIME = 0;
const FORCE_START_SCREEN_FOR_DESIGN = false;

function prepareIntroVisual() {
  const body = document.body;
  const logo = document.querySelector("#introScreen .hero-logo");
  if (!body || !logo) {
    if (body) body.classList.add("intro-ready");
    return;
  }

  let revealed = false;
  const reveal = () => {
    if (revealed) return;
    revealed = true;
    body.classList.add("intro-ready");
  };

  if (logo.complete && logo.naturalWidth > 0) {
    if (typeof logo.decode === "function") {
      logo.decode().then(reveal).catch(reveal);
    } else {
      reveal();
    }
    return;
  }

  logo.addEventListener("load", reveal, { once: true });
  logo.addEventListener("error", reveal, { once: true });
  setTimeout(reveal, 700);
}

function showSystemToast(message, duration = 1500) {
  if (!DOM.systemToast) return;
  DOM.systemToast.textContent = message;
  DOM.systemToast.classList.add("visible");
  setTimeout(() => {
    if (DOM.systemToast && DOM.systemToast.textContent === message) {
      DOM.systemToast.textContent = "";
      DOM.systemToast.classList.remove("visible");
    }
  }, duration);
}

function handleAndroidBack() {
  // 1) 단어 상세 오버레이 열려 있으면 닫기
  if (DOM.detailOverlay && DOM.detailOverlay.classList.contains("active")) {
    closeWordDetail();
    return;
  }

  // 2) 학습 세션 진행 중이면 → 확인 후 학습 시작 상태로
  if (APP_STATE.phase === "QUESTION" || APP_STATE.phase === "ANSWER") {
    const msg = trKey(
      "confirm.exit_session",
      "학습을 종료하고 학습 시작 화면으로 돌아갈까요?",
    );
    if (window.confirm(msg)) {
      showReadyState();
      showView("study");
    }
    return;
  }

  // 3) 단어 하위 화면에서는 → 단어 허브로
  if (
    APP_STATE.currentView === "mistakes" ||
    APP_STATE.currentView === "bookmark" ||
    APP_STATE.currentView === "search"
  ) {
    showView("words");
    return;
  }

  // 4) 세션 완료(FINISHED) 또는 다른 탭에 있으면 → Study 뷰로
  if (APP_STATE.phase === "FINISHED") {
    showReadyState();
    showView("study");
    return;
  }

  if (APP_STATE.currentView !== "study") {
    showView("study");
    return;
  }

  // 5) Study + READY 상태 → 두 번 눌러야 종료
  const now = Date.now();
  if (now - LAST_BACK_TIME < 2000) {
    if (NativeApp && typeof NativeApp.exitApp === "function") {
      NativeApp.exitApp();
    }
  } else {
    LAST_BACK_TIME = now;
    const msg = trKey("back.exit_hint", "한 번 더 누르면 앱이 종료됩니다.");
    showSystemToast(msg);
  }
}

function setupAndroidBackHandler() {
  if (!NativeApp || typeof NativeApp.addListener !== "function") return;
  NativeApp.addListener("backButton", () => {
    handleAndroidBack();
  });
}
