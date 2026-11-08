# Handoff: Mag-istorya Kita (Aklanon variant of Usap Tayo)

Updated 2026-11-08 after v0.1.1 (mania section).

## 1. Project and audience
- App: **Mag-istorya Kita**, Aklanon ("Akeanon") for the psychiatric interview, for a psychiatrist who speaks Tagalog and English and will see patients in Kalibo, Aklan. Grammar lessons are the priority.
- Repo: `isaymotion/Aklanon`, branch `main` (site), branch `dev-tools` (this file, Zorc notes, smoke test). Live: https://isaymotion.github.io/Aklanon/ once GitHub Pages is enabled (Settings → Pages → main, / root) — **not confirmed enabled yet**.
- Sister app / engine source: `isaymotion/Tagalog` (Usap Tayo 3.1.0). Clone it read-only when engine behaviour is unclear.
- Project doc with decisions: `claude/mag-istorya-kita-plan.md` in the claude.ai Project "Aklanon".

## 2. Fixed rules
- Attribution exactly: `App created by Isabella Navarro, MD. Latest version <Month YYYY>. isaymotion@gmail.com`.
- Storage key `magistorya.v1`; sessionStorage `magistorya.banner`, `magistorya.navmax`; SW `PREFIX='magistorya-'`, `KEEP=['magistorya-audio']`. Never reuse `usaptayo`. Version must match in `data/app-meta.js`, `data/changelog.js` (newest first) and `sw.js` VERSION; bump on every publish.
- No native Aklanon reviewer for ~3 years: every Aklanon line is a **draft**. Keep the draft banner, keep ⚑ flags, mark author reconstructions in lessons with ◌, cite Zorc pages where attested. Prefer short conservative sentences from attested vocabulary over idiom. Never remove the "unreviewed" wording.
- Learner speaks Tagalog: lessons are contrastive (Tagalog form beside Aklanon form); dictionary has a Tagalog column.
- Register: no *po*. `f` = plural `kamo/ninyo/kinyo` + title (Nay/Tay/Nong/Nang); `c` = `ikaw/ka/mo`. Title placeholder in `f` lines is "Nay".
- Aklanon spelling: `e` before a vowel = the velar sound (baeay, bueak, tueog, ueo, isaea, pueo, waeo); hyphen = glottal before consonant (sin-o, kan-o, ap-at, an-om). Standard forms: ro/it/ku/sa, si/ni/kay, imaw, sanda, kamo, owa, indi, ayaw, bukon, eon, gid, man, anay, kuno, huo.
- No Aklanon TTS exists. `LANG.packVoices` is empty; app falls back to a Filipino device voice with a warning. Do not run `tools/make_audio_pack.py` with Filipino voices for Aklanon.
- User preference: delegate mechanical work (fork edits, extraction, QA) to subagents; Claude writes clinical/language content and does final review.
- Section ids and phrase order key flashcards (`p:<section>:<index>`) and review flags: append, never reorder.

## 3. Architecture and data formats
Plain HTML/CSS/JS, no build. Layout: `index.html`, `css/style.css`, `sw.js`, `manifest.webmanifest`, `data/{app-meta,changelog,strings}.js`, `js/{app,core,views,psych-views,point-listen,review,audio-key,lang}.js`, `js/data/{lessons,dict-core,psych-phrases,psych-answers}.js`, `icons/` (8 PNGs), `tools/` (future audio pack).

- `js/lang.js` — `window.LANG`: code 'akl', registers f/c, quiz words, `bridgeLang {tl}`, `numbers` (11 spoken 0–10), `scaleTitle`, `stem {prefixes,suffixes}` for root search, `draftNotice`.
- Lessons `js/data/lessons.js`: `{ id, level, unit, title, summary, body (HTML), quiz: [[q, [opts], correctIdx, expl], …] }`. Route `#/lessons/<id>`.
- Dictionary `js/data/dict-core.js` (or new `dict-*.js` pushing to `DICT_RAW`): one line `aklanon|english|pos|category|root|note|tagalog`; empty optionals as `||`. Example: `owa|none; did not|adv|basics||Z. Negates existence and past.|wala`. Mark `Z.` in note when attested in Zorc. Route `#/dict`, entries `#/dict/d<n>`.
- Phrases `js/data/psych-phrases.js`: `PSYCH_SECTIONS = [{ id, group, title, intro, phrases: [{ en, f, c, n? }] }]`. Route `#/psych/s/<id>`, phrase `?p=<index>`.
- Replies `js/data/psych-answers.js`: `PSYCH_ANSWERS = { common: [{id,title,items:[[akl,en,clinicalNote?,spoken?]]}], sections: { <sectionId>: [[akl,en,note?]] } }`. Point board `#/psych/point?s=<id>`, listening drill `#/psych/listen?s=<id>`.
- Review flags: `App.state.flags[key]` in `magistorya.v1`; key `p:<sec>:<i>` or `a:<reply text>`; page `#/review` with Copy all / Clear.
- Changelog item types: feature | update | correction | content.

## 4. Per-unit recipe (adding an interview section)
1. Append a section object to `PSYCH_SECTIONS` (8–12 phrases, `f` and `c`, `n` for Shea technique or culture note). Keep lines short; use attested vocabulary; put culture-specific items (tuba, mama/betel, aswang, kulam) where relevant.
2. Add `sections.<id>` replies (7–11) to `PSYCH_ANSWERS` with clinical notes ≤14 words.
3. Add new words to `dict-core.js` with Tagalog column.
4. Update README "What's inside" counts, add changelog entry, bump version in `app-meta.js`, `changelog.js`, `sw.js`.
5. `node --check` every changed file; run smoke test; commit on main; push. Update this HANDOFF status table and the project plan doc.

Adding a lesson: same, plus a 3–4 question quiz and Zorc page citations; mark ◌ on reconstructions.

## 5. Commands
```
git clone --depth 1 https://github.com/isaymotion/Aklanon /home/claude/aklanon
git -C /home/claude/aklanon fetch --depth 1 origin dev-tools && git -C /home/claude/aklanon worktree add /home/claude/aklanon-devtools dev-tools
for f in js/*.js js/data/*.js data/*.js sw.js; do node --check $f || echo FAIL $f; done
cd /home/claude/aklanon && (python3 -m http.server 8123 &) && python3 /home/claude/aklanon-devtools/tools/smoke_test.py
```
Passing: every route body length > 900; LESSONS 12 / SECTIONS 7 / phrases 77 (update as content grows); ERRORS empty (Google Fonts failures are filtered; the sandbox blocks them).
Design checks: skill `isaymotion-app-design` → `scripts/check_sw.py /home/claude/aklanon` (must pass) and `scripts/check_design.py` (warns about `hospital.js` and `icon-maskable-512` naming — both intentional).
Commit with `-c user.name="Isabella Navarro" -c user.email="isaymotion@gmail.com"` and the Claude co-author trailer from the session reminder.

## 6. Status
| Item | Status |
|---|---|
| Engine fork, identity, icon, palette, banner, flags, #/review | done (v0.1.0) |
| Current version | 0.1.1 (2026-11-08) |
| Lessons | 12 done: sounds, markers, pronouns, demonstratives, may-owa, questions, focus, aspect, particles, numbers-time, politeness, kalibo-register |
| Dictionary | 315 entries (core, grammar, time, body, emotions, verbs, folk, mania vocabulary) |
| Phrase sections | 7 / ~20: opening, hpi, depression, suicide, psychosis, closing, mania (77 phrases) |
| Point-board replies | common groups + 7 sections |
| Audio | none (no TTS exists); recorded pack by native speaker later |
| GitHub Pages | user must enable |
| Mania section (0.1.1) | 12 phrases, 11 replies, 26 dict entries; Z-marked where attested (sadya, akig, hambae, gasto, baligya, obra, pasikat); unmarked forms (madasig, dugay, kusog, gahum, maaeam, kinaandan, basol, hueag, halin) are author's Western Bisayan drafts to verify against the PDFs |
| Source verification | Zorc grammar partly extracted (verb chart p. 95 unreadable); dictionary ~400 noisy rows. Proper OCR pending PDFs |

## 7. Next steps
1. If the user attached `ED145705.pdf` / `ED145704.pdf`: OCR them (pdftotext/tesseract via the pdf skill), rebuild `sources/zorc-*.md` from real text, re-verify every ◌ line in lessons and every unmarked dictionary entry; fix and commit as 0.1.1 with `correction` changelog items.
2. Otherwise next section units, in this order (`mania` done in 0.1.1): `anxiety` (incl. kulba, panic), `trauma`, `substances` (tuba, alak, shabu, mama/betel, sigarilyo; AUDIT-C stems), `cognition` (orientation, recall in Aklanon), `collateral` (family informant), `children`, `elderly`. Version 0.2.0 when sections reach 12.
3. Later: Aklanon verb trainer (new paradigms, not Usap Tayo's conjugate.js), case simulations, readings, native review pass, recorded audio.

## 8. Pitfalls learned
- The shell cannot reach eric.ed.gov (proxy 403). WebFetch works but returns a model summary of ~100k-char chunks over bad OCR; it is not a substitute for the PDF. Ask the user to attach the PDFs.
- Subagent summaries of Zorc contained guesses (e.g. "siya"); the attested 3rd person is `imaw`. Do not trust a form unless a page example shows it.
- GitHub API call to enable Pages was denied by the permission classifier (creates a public surface) — the user enables it.
- Google Fonts fail in the sandbox; ignore in smoke tests.
- Pushing from a fresh shallow clone is fine; fetch `origin main` before pushing if the clone is stale (413 otherwise).
- `check_design.py` reports `missing data/hospital.js` as FAIL and `icon-maskable-512.png` as WARN; both are intentional for this app (no hospital forms, Usap Tayo icon naming). Only `check_sw.py` must pass.
- `check_design.py` expects `icon-maskable-512.png`; this app keeps Usap Tayo's `maskable-512.png` naming on purpose.
- Lesson tables with 4+ columns are tight on a 390px phone; keep tables ≤ 4 columns or split.

## 9. Files to re-attach
- `ED145705.pdf` (Zorc grammar) and `ED145704.pdf` (dictionary) from https://files.eric.ed.gov/fulltext/ — needed for source verification and dictionary expansion (next step 1). Not needed for adding sections from existing vocabulary.
- Nothing else; icons and content live in the repo.
