# KarlLang

KarlLang is a typing-first vocabulary trainer focused on active recall.

The app is built around a simple idea: words are easier to recognize than to remember, so KarlLang makes learners type, recall, and drill vocabulary instead of only tapping through flashcards.

## Product

- Typing-first study flow for active memory
- Study modes: Card, Copy, Typing, and Cram
- Drill modes: Cram and Word Drop
- Local SRS, bookmarks, mistake lists, word stats, and daily progress
- Shareable study summary image cards
- Local learning reminders on native builds
- Offline-first app data with no login requirement

## Supported Languages

KarlLang currently includes vocabulary data for 13 study languages:

- German, Spanish, English, French, Italian, Portuguese
- Polish, Dutch, Russian, Swedish
- Korean, Japanese, Chinese

The UI currently supports 10 languages:

- Korean, English, German, Spanish, French, Italian, Portuguese, Japanese, Chinese, Russian

## Platform

- HTML / CSS / JavaScript app
- Capacitor 8 native shell
- iOS and Android targets
- PWA/browser build is used mainly for local testing

User learning data is stored locally on the device. App or UI updates should not reset SRS, bookmarks, mistakes, stats, or study history.

## Project Structure

```text
www/
  index.html              App shell
  style.css               App styles
  script.js               Global state and storage keys
  js/app/                 App initialization, settings, i18n, DOM, events
  js/core/                Shared helpers, storage, analytics
  js/features/            Feature modules such as Word Drop, Cram, TTS, review
  js/study/               Study queue, SRS, word text, rendering, word stats
  data/                   Vocabulary data by language and CEFR level

docs/
  prd_260522.md           Current product definition
  refactor_map.md         Refactor map and module notes
  devlog.md               Development log, newest entries first

ios/                      Capacitor iOS project
android/                  Capacitor Android project
```

Word data tooling is kept outside this app repo under `karl-tools/karllang-app-tools/`.

## Local Development

Install dependencies:

```bash
npm install
```

Run a local static server from `www/` when testing in a browser:

```bash
cd www
python3 -m http.server 4173
```

Sync native projects after web changes that need to be tested on devices:

```bash
npx cap sync
```

## Maintenance Notes

- Keep vocabulary IDs stable. Existing user progress is keyed by word ID.
- App version changes must not reset learning data.
- Data resets should only happen when word ID compatibility is truly broken.
- Keep refactors behavior-preserving and split into small commits.
- Avoid adding build artifacts, local IDE settings, API logs, or temporary data to the app repo.

## Support

- Email: **karllang.app@gmail.com**
- Website: https://karllang.app
- GitHub: https://github.com/KarlBach16
