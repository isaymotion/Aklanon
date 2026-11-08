# Mag-istorya Kita: Aklanon for the Psychiatric Interview

<img src="icons/icon-192.png" alt="Mag-istorya Kita icon" width="96" align="right">

*Mag-istorya kita* means "let's talk" in Aklanon. This web app teaches Aklanon (Akeanon / Inakeanon) to a psychiatrist who will see patients in Kalibo, Aklan, with a training track for the psychiatric interview. It is the sister app of [Usap Tayo](https://isaymotion.github.io/Tagalog/) and runs on the same engine.

**App created by Isabella Navarro, MD. Latest version November 2026. isaymotion@gmail.com**

Version **0.1.0** (2026-11-08): first draft, engine fork from Usap Tayo. It runs entirely in the browser, works offline after the first visit, and can be installed on phones and desktops.

**Live site:** https://isaymotion.github.io/Aklanon/ (after GitHub Pages is switched on; see below)

> **Draft. None of the Aklanon in this app has been reviewed by a native Akeanon speaker yet.** The content is placeholder material written from published grammars and dictionaries. Do not rely on any line clinically until it has been checked. There is **no Aklanon text-to-speech voice** on any phone or computer: spoken lines use the closest device voice (Filipino, if installed) and mispronounce the Aklanon *e*, so treat audio as a rough guide only.

## Who it is for

The learner is assumed to **speak Tagalog already**. Lessons are contrastive (what is the same as Tagalog, what differs), the dictionary has an optional Tagalog column shown as a small **TL:** line, and the app's own menu labels can be switched to Tagalog on the About page.

## What's inside

| Section | What it does |
|---|---|
| **Psychiatry Aklanon** | Interview phrase sections, each phrase in a respectful (*kamo*) and an everyday (*ikaw*) form, with Study, Recall and two quiz modes. 7 sections, 77 phrases: opening and rapport, history of present illness, depressed mood and SIGECAPS, suicide risk, elevated mood and DIGFAST, hallucinations and delusions, closing and follow-up. Route `#/psych/s/<section id>`. |
| **Point board** (*Itudlo*) | Turn the phone around: the patient taps a reply, the phone speaks it and the interviewer reads the English. General replies (yes/no, how often, since when, how much, how I feel, I need…), a 0–10 scale, and replies per interview section. Nothing is saved. Route `#/psych/point?s=<section>`. |
| **Listening drill** | Hear a patient reply, choose its meaning from four, then see the Aklanon. Pool: the point-board replies. Route `#/psych/listen?s=<section>`. |
| **For review** | Every phrase and point-board reply has a **⚑** flag. Flagged lines, with an optional one-line comment, are listed by section at `#/review` (App menu), with **Copy all** (plain text) and **Clear**. This is the worklist for the native-speaker reviewer. |
| **Lessons** | 12 contrastive grammar and culture lessons with quizzes, written for a Tagalog speaker and citing Zorc & de la Cruz (1968) by page: sounds and the Aklanon *e*; *ang/ng/sa → ro/it(ku)/sa*; pronouns; demonstratives; *may/owa* and the four negators; question words; verb focus; aspect (*nag-/naga-/maga-/mag-*, *gin-/gina-/-on*); particles; numbers and time; respect without *po*; real Kalibo speech, *hay* and interpreting. Lines marked ◌ are the author's reconstructions, not quotations. |
| **Dictionary** | English → Aklanon and Aklanon → English, with root-word search and the Tagalog equivalent when given. 315 core and clinical entries; entries marked Z in the file are attested in Zorc's grammar or dictionary. |
| **Universal search** | One search bar (press `/`) across words, phrases, lessons and pages. |
| **Flashcards** | Spaced repetition with topic decks, psychiatry decks and an automatic "My mistakes" deck. |
| **You** | Streaks, XP, progress, backup export/import (review flags included), settings, What's New, About. |

Also: a draft banner under the top bar on every page (the **Why?** link explains; hide it for the session with ✕), a Practice page, pin-to-Home stars, match-device/light/dark theme, adjustable text size (Aa), back/forward buttons, offline support and install-to-home-screen (PWA).

**Deferred to later versions:** the remaining interview sections (anxiety, trauma, substances including tuba and betel, cognition, collateral, children, elderly), a fuller dictionary, an Aklanon verb trainer (new; Usap Tayo's Tagalog morphology engine was not carried over), recorded audio by a native speaker, case simulations, ward tools and printable handouts.

## Draft status and reviewer workflow

1. While studying, tap **⚑** beside any phrase or point-board reply that looks doubtful, and add a short comment (e.g. "Kalibo usage?").
2. When a native Akeanon speaker is available, open **App → For review**, tap **Copy all**, and paste the list into an email or message. Each line shows the section, the Aklanon, the English and your comment.
3. Correct the content files under `js/data/` from the reviewer's answers, then **Clear** the list (or unflag lines one by one).
4. When a section has been reviewed, say so in its `intro` and in What's New. When the whole app has been reviewed, change `draftNotice` in `js/lang.js` and remove the banner from `index.html`.

Flags live in the browser's progress store (`magistorya.v1`, key `flags`), so a backup file carries them to another device.

## Sources

- de la Cruz, Beato A. and R. David Paul Zorc. 1968. *A Study of the Aklanon Dialect, Vol. 1: Grammar.* Kalibo / Peace Corps. Public domain. ERIC ED145705.
- Salas Reyes, Vicente, Nicolas L. Prado, Beato A. de la Cruz and R. David Paul Zorc. 1969. *A Study of the Aklanon Dialect, Vol. 2: Dictionary (of root words and derivations), Aklanon to English.* Public domain. ERIC ED145704.
- Clinical interview structure follows Usap Tayo and Shea's *Psychiatric Interviewing* (validity techniques).

## Publish it with GitHub Pages

1. On GitHub, open the **Aklanon** repository → **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
3. After a minute the app is live at `https://isaymotion.github.io/Aklanon/`.
4. On a phone, open that link, then use **Add to Home Screen** (iPhone Safari) or **Install app** (Android Chrome).

There is no build step and no dependencies. To try it locally: run `python3 -m http.server` in this folder and open `http://localhost:8000`. (Opening `index.html` directly also works, but offline mode needs a web server.)

## Audio

There is no Aklanon voice in any browser or cloud TTS service (November 2026). The app speaks Aklanon lines with a Filipino device voice if one is installed (Android: Google Text-to-speech → Filipino), otherwise Cebuano, Indonesian or Malay, never English. `LANG.packVoices` in `js/lang.js` is empty, so the app does not look for a recorded pack and Settings hides the pack controls.

`tools/collect-texts.js` (lists every Aklanon line the app can speak, keyed by `js/audio-key.js`) and `tools/make_audio_pack.py` are kept for a **future recorded pack** by a native speaker. The Python script's TTS engines are Tagalog voices and must not be used to voice Aklanon; adapt it to package human recordings. When a pack exists, set `LANG.packVoices`, add the clips under `audio/`, and the service worker caches them in `magistorya-audio`.

## Adding content

All content lives in plain JavaScript files under `js/data/`. No build step.

- **Dictionary words** (`dict-core.js`, or a new `dict-*.js` that pushes to `DICT_RAW`): one line per entry,
  `aklanon | english | pos | category | root | note | tagalog`. Columns 5–7 are optional; leave one empty with `||`. The 7th column is the Tagalog equivalent, shown as **TL:** in the dictionary and on flashcards. A new file needs a `<script>` tag in `index.html` and a line in `FILES` in `sw.js`.
- **Psychiatry phrases** (`psych-phrases.js`): `{ en, f, c, n, answers }` objects in a section (`f` = respectful *kamo* form, `c` = everyday *ikaw* form, `n` = note, `answers` = likely replies `[aklanon, english]`). Section ids and phrase order key flashcards and review flags: keep them stable.
- **Point-board replies** (`psych-answers.js`): `common` groups and `sections.<id>` lists of `[aklanon, english, clinicalNote?, spoken?]`.
- **Lessons** (`lessons.js`): `{ id, level, unit, title, summary, body, quiz, tl?, draft?, psych? }`. `tl` is an optional Tagalog-contrast note (tolerated, not shown yet); `psych: true` lists the lesson under the Psychiatry hub.
- **Language pack** (`js/lang.js`): language name, voice matching, register labels, quiz words, point-board labels, root-search affixes (`stem`), `bridgeLang` and `draftNotice`. Optional `numbers` (11 words) makes the 0–10 scale speak Aklanon numbers.
- **What's New**: add a new entry at the top of `APP_CHANGELOG` in `data/changelog.js` (semver `version`, ISO `date`, items typed `feature`, `update`, `correction` or `content`), then set the same `version` (and `updated` month) in `data/app-meta.js`.

After changing files, bump `VERSION` in `sw.js` (`PREFIX + 'x.y.z'`, the same number as `data/app-meta.js` and the newest changelog entry) so installed copies pick up the update. The service worker only deletes caches whose names start with `magistorya-`, and keeps `magistorya-audio`; never change that rule, because every isaymotion app shares the same site.

## Storage

Everything this app saves starts with `magistorya.` (`magistorya.v1` = progress, settings and review flags; `magistorya.lastBackup`), so it never collides with Usap Tayo (`usaptayo.`) on the shared `isaymotion.github.io` origin. Session-only keys (`magistorya.navmax`, `magistorya.banner`) are in sessionStorage. Backup files are tagged `mag-istorya-kita`; Usap Tayo backups are refused.

## Important note on clinical content

Psychiatry phrases are practice phrasings written for training and are unreviewed drafts. They are not validated translations of research instruments (such as the PHQ-9 or C-SSRS). Confirm wording with Aklanon-speaking staff and patients before relying on it.

Crisis line in the Philippines: NCMH Crisis Hotline **1553** (24/7).

## Project structure

```
.nojekyll               (empty)
index.html              App shell (top bar, draft banner, rail / tab bar, footer)
manifest.webmanifest    Install metadata
sw.js                   Offline cache (prefix magistorya-)
css/style.css           Styles: shared isaymotion tokens (sea-teal palette, light and dark), shell, screens
data/app-meta.js        Name, version, attribution, APP_LINKS (Other apps menu, off)
data/changelog.js       What's New (APP_CHANGELOG)
data/strings.js         English and Tagalog (draft) labels for the menu, footer, backup and banner
icons/                  App icons (favicon-32, favicon-64, logo-96, apple-touch-icon, icon-192, icon-512, maskable-192, maskable-512)
js/lang.js              Language pack (Aklanon)
js/audio-key.js         Text → audio file name (for a future recorded pack)
js/core.js              Storage, dictionary index, root-word stemmer, search, spaced repetition, speech
js/views.js             Main pages (home, search, dictionary, flashcards, lessons, progress, settings, What's New, About)
js/psych-views.js       Psychiatry hub and phrase sections
js/point-listen.js      Point board and listening drill
js/review.js            Review flags (⚑) and the For review page
js/app.js               Routing, rail / tab bar / More drawer, back-forward, theme, text size, search bar, backup, draft banner
js/data/                All content (dict-core, lessons, psych-phrases, psych-answers)
tools/                  collect-texts.js and make_audio_pack.py, for a future recorded pack
```

## Version convention

Semver `x.y.z`, the same in `data/app-meta.js`, the newest `data/changelog.js` entry and `VERSION` in `sw.js`. `0.x` while the content is a draft; `1.0.0` once a native speaker has reviewed the core sections.

## Attribution

App created by Isabella Navarro, MD. Latest version November 2026. isaymotion@gmail.com
