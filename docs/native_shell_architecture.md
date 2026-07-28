# KarlLang Native Shell Architecture

Last updated: 2026-07-28

## 1. Decision

KarlLang will keep its existing HTML/CSS/JavaScript learning application inside Capacitor, but the native iOS and Android projects will own the application chrome.

The native shell is responsible for the system-facing parts of the app:

- Status bar and safe-area treatment
- Screen header and navigation title
- Bottom tab navigation
- Native sheets, alerts, and touch feedback where appropriate
- Keyboard-aware visibility of navigation chrome

The WebView remains responsible for learning content and all existing product behavior:

- Study, Copy, Typing, Cram, Word Drop, and completion screens
- Home progress, word lists, search, and settings content
- Localization, local storage, Supabase auth/sync, word data, and learning state
- Existing Capacitor plugin calls for TTS, haptics, notifications, browser auth, analytics, and image save

## 2. Why This Architecture

CSS can make a WebView look cleaner, but cannot provide the platform-level rhythm of a real `UITabBar` / native Android navigation component, native safe-area ownership, or OS-consistent headers and sheets.

Rewriting every learning screen natively would duplicate a large and working JavaScript application. A native shell gives the highest perceived-quality gain while retaining the tested learning engine.

## 3. Shell Ownership

| Area | Native shell | WebView |
| --- | --- | --- |
| Status bar, home indicator, gesture inset | Owns | Reserves content space |
| Header title | Owns | Reports current route/title state |
| Bottom tabs | Owns | Receives navigation request |
| Main screen content | Frames | Owns |
| Study/Word Drop keyboard state | Hides or reduces shell | Reports active state |
| Auth browser and callback | Uses existing Capacitor path | Owns Supabase session handling |
| Modal/sheet | Native for shell-level decisions; web for learning detail | Owns existing study/detail overlays |

## 4. Bridge Contract

Create one small `NativeChrome` Capacitor plugin for iOS and Android.

### Web to native

The web app reports its state whenever route or session chrome changes:

```js
NativeChrome.update({
  view: "study",
  title: "Study",
  activeTab: "study",
  presentation: "standard" // standard | focused | immersive
});
```

`focused` is used for typing/copy/cram keyboard-active study. `immersive` is used for active Word Drop. Native chrome can hide its header/tab bar accordingly.

### Native to web

Native tab selection sends a navigation request to the web layer:

```js
window.dispatchEvent(new CustomEvent("karllang:nativeNavigate", {
  detail: { view: "training" }
}));
```

The existing `showView()` API remains the single web routing function.

## 5. Web Changes

- Add `native-shell-enabled` to the document body only when a native shell confirms readiness.
- In this mode, hide the HTML `#appHeader` and `#bottomNav` without removing them from PWA/browser builds.
- Replace direct web header/tab rendering with a single bridge update from navigation/runtime chrome code.
- Listen for `karllang:nativeNavigate` and route through existing navigation handlers.
- Do not change study data, auth, sync, word data, or translation keys.

## 6. iOS Implementation

- Keep `MainViewController: CAPBridgeViewController` as the WebView host.
- Add a native header view and `UITabBar`-style bottom navigation above the bridge web view.
- Use SF Symbols and UIKit-native controls.
- Use `UIVisualEffectView` for the tab-bar material and safe-area aware constraints.
- Create `NativeChromePlugin.swift` to receive web state and send native navigation events.
- Preserve existing `AppDelegate` OAuth callback forwarding and current native plugins.

## 7. Android Implementation

- Keep `MainActivity: BridgeActivity` as the WebView host.
- Add a native top app bar and Material `NavigationBarView` around/above the WebView.
- Use Material icons, Android ripple feedback, window insets, and edge-to-edge layout.
- Create `NativeChromePlugin.kt` to receive web state and send navigation events.
- Preserve existing OAuth intent handling and native plugins.

## 8. Delivery Order

1. Define and implement the web bridge contract without changing visible UI.
2. Implement iOS native shell with the existing WebView underneath.
3. Implement Android native shell with the same bridge contract.
4. Hide duplicate web header/navigation only after each platform shell confirms readiness.
5. Verify Study, Drill, Words, Settings, active typing, Cram, Word Drop, OAuth return, and back behavior.
6. Redesign remaining web content screens using the native shell as the stable frame.

## 9. Non-goals and Safety Rules

- No full Swift/Kotlin rewrite of learning content.
- No duplicated navigation state: the web route remains authoritative.
- No server/schema/auth behavior change as part of shell work.
- PWA stays functional with its existing HTML header/navigation.
- Ship iOS and Android shell changes only after real-device testing on both platforms.

---

# KarlLang 네이티브 셸 아키텍처

최종 수정일: 2026년 7월 28일

## 1. 결정

KarlLang은 기존 HTML/CSS/JavaScript 학습 앱을 Capacitor 안에 유지하되, iOS와 Android 네이티브 프로젝트가 앱의 외곽 UI를 직접 담당한다.

네이티브 셸은 사용자가 OS와 맞닿는 영역을 맡는다.

- 상태바와 safe area 처리
- 화면 헤더와 내비게이션 제목
- 하단 탭 내비게이션
- 필요한 경우 네이티브 시트, 알림창, 터치 피드백
- 키보드 상태에 따른 헤더/하단 탭 표시 제어

WebView는 이미 검증된 학습 콘텐츠와 제품 동작을 맡는다.

- 학습, 따라쓰기, 타이핑, 크램, Word Drop, 세션 종료
- 홈 진척도, 단어 목록, 검색, 설정 콘텐츠
- 다국어, localStorage, Supabase 인증/동기화, 단어 데이터, 학습 상태
- TTS, 햅틱, 알림, OAuth 브라우저, 분석, 이미지 저장을 위한 기존 Capacitor 플러그인 호출

## 2. 이 구조를 선택한 이유

CSS는 WebView를 더 깔끔하게 만들 수는 있지만, 실제 `UITabBar`나 Android 내비게이션 컴포넌트의 시스템 질감, native safe area 소유권, OS 문법에 맞는 헤더와 시트까지 제공할 수는 없다.

반대로 모든 학습 화면을 네이티브로 다시 만들면, 이미 동작하는 큰 JavaScript 앱을 두 번 구현하게 된다. 네이티브 셸은 현재 구조를 살리면서 사용자가 체감하는 완성도를 가장 크게 올리는 방식이다.

## 3. 역할 분리

| 영역 | 네이티브 셸 | WebView |
| --- | --- | --- |
| 상태바, 홈 인디케이터, 제스처 inset | 직접 담당 | 콘텐츠 여백 확보 |
| 헤더 제목 | 직접 담당 | 현재 화면/제목 상태 전달 |
| 하단 탭 | 직접 담당 | 내비게이션 요청 수신 |
| 주요 화면 콘텐츠 | 프레임 제공 | 직접 담당 |
| 타이핑/크램/Word Drop 중 키보드 상태 | 셸 숨김 또는 축소 | 활성 상태 전달 |
| 인증 브라우저와 콜백 | 기존 Capacitor 흐름 사용 | Supabase 세션 처리 |
| 모달/시트 | 앱 전반 결정은 네이티브, 학습 상세는 웹 | 기존 학습/단어 상세 오버레이 담당 |

## 4. 브리지 계약

iOS와 Android에 공통으로 `NativeChrome` Capacitor 플러그인을 만든다.

### 웹에서 네이티브로

웹 앱은 화면 또는 학습 상태가 바뀔 때 네이티브 셸에 상태를 전달한다.

```js
NativeChrome.update({
  view: "study",
  title: "Study",
  activeTab: "study",
  presentation: "standard" // standard | focused | immersive
});
```

`focused`는 타이핑/따라쓰기/크램처럼 키보드에 집중하는 학습 상태에 사용한다. `immersive`는 진행 중인 Word Drop에 사용한다. 네이티브 셸은 해당 상태에 맞춰 헤더와 탭을 숨긴다.

### 네이티브에서 웹으로

사용자가 네이티브 하단 탭을 누르면 웹 레이어로 화면 전환 요청을 보낸다.

```js
window.dispatchEvent(new CustomEvent("karllang:nativeNavigate", {
  detail: { view: "training" }
}));
```

웹에서는 기존 `showView()`가 유일한 화면 전환 함수로 유지된다.

## 5. 웹 코드 변경 범위

- 네이티브 셸이 준비됐을 때만 `native-shell-enabled` 클래스를 body에 추가한다.
- 이 상태에서만 HTML `#appHeader`, `#bottomNav`를 숨긴다. PWA/브라우저 화면은 기존 헤더와 탭을 유지한다.
- 네비게이션/runtime chrome 코드가 웹 헤더와 탭을 직접 그리는 대신 네이티브 셸에도 상태를 전달한다.
- `karllang:nativeNavigate` 이벤트를 받아 기존 내비게이션 처리로 전달한다.
- 학습 데이터, 인증, 동기화, 단어 데이터, 번역 key는 바꾸지 않는다.

## 6. iOS 구현

- `MainViewController: CAPBridgeViewController`를 WebView 호스트로 유지한다.
- bridge WebView 위에 네이티브 헤더와 `UITabBar` 형식의 하단 내비게이션을 배치한다.
- SF Symbols와 UIKit 기본 컨트롤을 사용한다.
- 하단 탭은 `UIVisualEffectView`의 시스템 material을 사용하고 safe area constraint를 따른다.
- 웹 상태를 받고 네이티브 탭 이벤트를 보내는 `NativeChromePlugin.swift`를 만든다.
- 기존 `AppDelegate` OAuth callback 전달과 네이티브 플러그인은 유지한다.

## 7. Android 구현

- `MainActivity: BridgeActivity`를 WebView 호스트로 유지한다.
- WebView 위/아래에 native top app bar와 Material `NavigationBarView`를 배치한다.
- Material icon, Android ripple, window inset, edge-to-edge 레이아웃을 사용한다.
- 웹 상태를 받고 네이티브 탭 이벤트를 보내는 `NativeChromePlugin.kt`를 만든다.
- 기존 OAuth intent 처리와 네이티브 플러그인은 유지한다.

## 8. 구현 순서

1. 눈에 보이는 UI를 바꾸지 않고 웹 브리지 계약부터 구현한다.
2. 기존 WebView 위에 iOS 네이티브 셸을 구현한다.
3. 같은 브리지 계약으로 Android 네이티브 셸을 구현한다.
4. 각 플랫폼에서 셸 준비가 확인된 뒤에만 중복 HTML 헤더/탭을 숨긴다.
5. 학습, 훈련소, 단어장, 설정, 타이핑, 크램, Word Drop, OAuth 복귀, 뒤로가기를 검증한다.
6. 안정적인 네이티브 프레임 위에서 남은 웹 콘텐츠 화면을 다시 디자인한다.

## 9. 비목표와 안전 규칙

- 학습 콘텐츠 전체를 Swift/Kotlin으로 다시 작성하지 않는다.
- 화면 상태를 두 곳에서 따로 관리하지 않는다. 웹의 route가 기준이다.
- 셸 작업 중 서버, 스키마, 인증 동작을 바꾸지 않는다.
- PWA는 기존 HTML 헤더/하단 탭으로 계속 동작해야 한다.
- iOS와 Android 모두 실기기 테스트를 마친 뒤에만 셸 변경을 배포한다.
