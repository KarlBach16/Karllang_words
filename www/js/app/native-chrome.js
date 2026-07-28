// Native shell bridge. The WebView remains the source of truth for routes.

let NATIVE_CHROME_LISTENERS_READY = false;
let NATIVE_CHROME_UPDATE_TIMER = null;
let NATIVE_CHROME_LAST_SIGNATURE = "";

function getNativeChromePlugin() {
  if (!isNativePlatform()) return null;

  return (
    window.Capacitor?.Plugins?.NativeChrome || window.Capacitor?.NativeChrome || null
  );
}

function getNativeChromeTabLabels() {
  const labels = {};
  if (!DOM.bottomTabs || !DOM.bottomTabs.length) return labels;

  DOM.bottomTabs.forEach((tab) => {
    const view = tab.dataset.view;
    const label = tab.querySelector("span")?.textContent?.trim();
    if (view && label) labels[view] = label;
  });

  return labels;
}

function getNativeChromePresentation() {
  if (!DOM.app || getComputedStyle(DOM.app).display === "none") {
    return "hidden";
  }

  const keyboardVisible = isNativeChromeKeyboardVisible();

  if (APP_STATE.currentView === "wordDrop") {
    return keyboardVisible ? "immersive" : "session";
  }

  if (DOM.detailOverlay?.classList.contains("active")) {
    return "overlay";
  }

  if (keyboardVisible) {
    return "focused";
  }

  if (document.body.classList.contains("study-session-active")) {
    return "session";
  }

  return "standard";
}

function isNativeChromeKeyboardVisible() {
  const viewport = window.visualViewport;
  if (!viewport || !APP_LAYOUT_VIEWPORT_HEIGHT) return false;

  return APP_LAYOUT_VIEWPORT_HEIGHT - viewport.height > 120;
}

function getNativeChromePayload() {
  const view = APP_STATE.currentView || "study";
  return {
    view,
    title: getAppHeaderTitle(view),
    activeTab: getBottomNavView(view),
    presentation: getNativeChromePresentation(),
    tabLabels: getNativeChromeTabLabels(),
    settings:
      typeof getNativeSettingsPayload === "function"
        ? getNativeSettingsPayload()
        : {},
    home:
      typeof getNativeHomePayload === "function" ? getNativeHomePayload() : {},
    words:
      typeof getNativeWordsPayload === "function" ? getNativeWordsPayload() : {},
    training:
      typeof getNativeTrainingPayload === "function" ? getNativeTrainingPayload() : {},
    study:
      typeof getNativeStudyPayload === "function" ? getNativeStudyPayload() : {},
  };
}

function applyNativeChromeInsets(result) {
  if (!result || typeof result !== "object") return;

  const topInset = Number(result.topInset);
  const bottomInset = Number(result.bottomInset);
  if (Number.isFinite(topInset) && topInset >= 0) {
    document.documentElement.style.setProperty(
      "--native-shell-top-inset",
      `${Math.round(topInset)}px`,
    );
  }
  if (Number.isFinite(bottomInset) && bottomInset >= 0) {
    document.documentElement.style.setProperty(
      "--native-shell-bottom-inset",
      `${Math.round(bottomInset)}px`,
    );
  }

  if (result.ready === true) {
    document.body.classList.add("native-shell-enabled");
  }
}

function updateNativeChrome({ force = false } = {}) {
  const plugin = getNativeChromePlugin();
  if (!plugin || typeof plugin.update !== "function") return;

  const payload = getNativeChromePayload();
  const signature = JSON.stringify(payload);
  if (!force && signature === NATIVE_CHROME_LAST_SIGNATURE) return;
  NATIVE_CHROME_LAST_SIGNATURE = signature;

  Promise.resolve(plugin.update(payload))
    .then(applyNativeChromeInsets)
    .catch((error) => {
      console.warn("[native-chrome] update failed", error);
    });
}

function scheduleNativeChromeUpdate(options = {}) {
  if (!getNativeChromePlugin()) return;
  if (NATIVE_CHROME_UPDATE_TIMER) clearTimeout(NATIVE_CHROME_UPDATE_TIMER);

  NATIVE_CHROME_UPDATE_TIMER = setTimeout(() => {
    NATIVE_CHROME_UPDATE_TIMER = null;
    updateNativeChrome(options);
  }, 0);
}

function handleNativeChromeNavigation(detail = {}) {
  const view = detail.view;
  const allowedViews = [
    "user",
    "study",
    "training",
    "words",
    "settings",
    "mistakes",
    "bookmark",
    "search",
  ];
  if (!allowedViews.includes(view)) return;

  const willMove =
    view === "study"
      ? APP_STATE.currentView !== "study" || APP_STATE.phase !== "READY"
      : APP_STATE.currentView !== view;
  const tabName = getTabAnalyticsName(view);
  if (tabName && willMove) {
    logAnalyticsEvent("select_tab", { tab: tabName });
  }
  if (willMove && typeof triggerHaptic === "function") {
    triggerHaptic("light");
  }

  if (view === "study") {
    goToStudyFromNav();
    return;
  }
  showView(view);
}

function initNativeChrome() {
  if (NATIVE_CHROME_LISTENERS_READY) return;
  NATIVE_CHROME_LISTENERS_READY = true;

  window.addEventListener("karllang:nativeNavigate", (event) => {
    handleNativeChromeNavigation(event.detail || {});
  });

  const plugin = getNativeChromePlugin();
  if (plugin && typeof plugin.addListener === "function") {
    plugin.addListener("navigate", handleNativeChromeNavigation);
  }

  scheduleNativeChromeUpdate({ force: true });
}
