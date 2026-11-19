# Handoff: Mag-istorya Kita (Aklanon variant of Usap Tayo)

Updated 2026-11-19 after v0.1.5 (source verification against the Zorc PDFs) and v0.1.4 (anxiety section). 0.1.2 added data/hospital.js and 0.1.3 fixed phone-menu scrolling (13 Nov).

## 1. Project and audience
- App: **Mag-istorya Kita**, Aklanon ("Akeanon") for the psychiatric interview, for a psychiatrist who speaks Tagalog and English and will see patients in Kalibo, Aklan. Grammar lessons are the priority.
- Repo: `isaymotion/Aklanon`, branch `main` (site), branch `dev-tools` (this file, smoke test, **OCR text of both Zorc PDFs in `sources/ocr/`**, verifier `tools/verify_dict.py`). Live: https://isaymotion.github.io/Aklanon/ once GitHub Pages is enabled (Settings → Pages → main, / root) — **not confirmed enabled yet**.
- Sister app / engine source: `isaymotion/Tagalog` (Usap Tayo 3.1.0). Clone it read-only when engine behaviour is unclear.
- Project doc with decisions: `claude/mag-istorya-kita-plan.md` in the claude.ai Project "Aklanon".

## 2. Fixed rules
- Attribution exactly: `App created by Isabella Navarro, MD. Latest version <Month YYYY>. isaymotion@gmail.com`.
- Storage key `magistorya.v1`; sessionStorage `magistorya.banner`, `magistorya.navmax`; SW `PREFIX='magistorya-'`, `KEEP=['magistorya-audio']`. Never reuse `usaptayo`. Version must match in `data/app-meta.js`, `data/changelog.js` (newest first) and `sw.js` VERSION; bump on every publish.
- No native Aklanon reviewer for ~3 years: every Aklanon line is a **draft**. Keep the draft banner, keep ⚑ flags, mark author reconstructions in lessons with ◌, cite Zorc pages where attested. Dictionary notes cite `Z` (grammar) or `SR ~p. N` (Salas Reyes, Zorc & Prado 1969 dictionary; N ≈ PDF page − 4). **Check every new Aklanon word against `sources/ocr/` before using it** (recipe in §4); Hiligaynon look-alikes are the main error source (see the 0.1.5 list in §6). Prefer short conservative sentences from attested vocabulary over idiom. Never remove the "unreviewed" wording.
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
- Dictionary `js/data/dict-core.js` (or new `dict-*.js` pushing to `DICT_RAW`): one line `aklanon|english|pos|category|root|note|tagalog`; empty optionals as `||`. Example: `owa|none; did not|adv|basics||Z. Negates existence and past.|wala`. Mark `Z.` or `SR ~p. N` in the note when attested. Check duplicates: `cut -d'|' -f1 js/data/dict-core.js | sort | uniq -d` (kita, isip, obra, tueog are intentional homonym pairs). Route `#/dict`, entries `#/dict/d<n>`.
- Phrases `js/data/psych-phrases.js`: `PSYCH_SECTIONS = [{ id, group, title, intro, phrases: [{ en, f, c, n? }] }]`. Route `#/psych/s/<id>`, phrase `?p=<index>`.
- Replies `js/data/psych-answers.js`: `PSYCH_ANSWERS = { common: [{id,title,items:[[akl,en,clinicalNote?,spoken?]]}], sections: { <sectionId>: [[akl,en,note?]] } }`. Point board `#/psych/point?s=<id>`, listening drill `#/psych/listen?s=<id>`.
- Review flags: `App.state.flags[key]` in `magistorya.v1`; key `p:<sec>:<i>` or `a:<reply text>`; page `#/review` with Copy all / Clear.
- Changelog item types: feature | update | correction | content.

## 4. Per-unit recipe (adding an interview section)
1. Append a section object to `PSYCH_SECTIONS` (8–12 phrases, `f` and `c`, `n` for Shea technique or culture note). Keep lines short; use attested vocabulary; put culture-specific items (tuba, mama/betel, aswang, kulam) where relevant.
2. Add `sections.<id>` replies (7–11) to `PSYCH_ANSWERS` with clinical notes ≤14 words.
3. Add new words to `dict-core.js` with Tagalog column — **after verifying each against the dictionary OCR**:
   - `grep -n -i "headword" sources/ocr/ED145704-dictionary-ocr.txt` on the dev-tools worktree (accented vowels come out as digits/&/f: ó→6, á→4, í→f; l between vowels is e in Aklanon: salamat→saeamat). Or batch: write `headword<TAB>gloss` lines to a file and run `python3 tools/verify_dict.py words.tsv report.tsv` → HEAD (dictionary headword with POS), TEXT (in an example), MISS.
   - A headword line ending in `[Hil]`/`[Tag]` with `[Akl: X]` means the word is Hiligaynon/Tagalog; use X.
   - If MISS, search the English gloss instead (`grep -i "(n) .*sweat"`) — the Aklanon word is often different from the Hiligaynon one.
   - Cite `SR ~p. <PDF page − 4>` in the note.
4. Update README "What's inside" counts, add changelog entry, bump version in `app-meta.js`, `changelog.js`, `sw.js`.
5. `node --check` every changed file; run smoke test; commit on main; push. Update this HANDOFF status table and the project plan doc.

Adding a lesson: same, plus a 3–4 question quiz and Zorc page citations; mark ◌ on reconstructions.

## 5. Commands
```
git clone --depth 1 https://github.com/isaymotion/Aklanon /home/claude/aklanon
git -C /home/claude/aklanon fetch --depth 1 origin dev-tools && git -C /home/claude/aklanon worktree add /home/claude/aklanon-devtools FETCH_HEAD && git -C /home/claude/aklanon-devtools checkout -B dev-tools
for f in js/*.js js/data/*.js data/*.js sw.js; do node --check $f || echo FAIL $f; done
cd /home/claude/aklanon && (python3 -m http.server 8123 &) && python3 /home/claude/aklanon-devtools/tools/smoke_test.py
```
Passing: every route body length > 900; LESSONS 12 / SECTIONS 8 / phrases 90, 369 dictionary entries (update as content grows); ERRORS empty (Google Fonts failures are filtered; the sandbox blocks them).
Design checks: skill `isaymotion-app-design` → `scripts/check_sw.py /home/claude/aklanon` (must pass) and `scripts/check_design.py` (warns about `hospital.js` and `icon-maskable-512` naming — both intentional).
Commit with `-c user.name="Isabella Navarro" -c user.email="isaymotion@gmail.com"` and the Claude co-author trailer from the session reminder.

## 6. Status
| Item | Status |
|---|---|
| Engine fork, identity, icon, palette, banner, flags, #/review | done (v0.1.0) |
| Current version | 0.1.5 (2026-11-19) |
| Lessons | 12 done: sounds, markers, pronouns, demonstratives, may-owa, questions, focus, aspect, particles, numbers-time, politeness, kalibo-register |
| Dictionary | 369 entries; 265 carry Z or SR page references after the 0.1.5 verification; the rest are listed in the 0.1.5 changelog as still-draft |
| Phrase sections | 8 / ~20: opening, hpi, depression, suicide, psychosis, closing, mania, anxiety (90 phrases) |
| Point-board replies | common groups + 8 sections |
| Audio | none (no TTS exists); recorded pack by native speaker later |
| GitHub Pages | user must enable |
| Mania section (0.1.1) | 12 phrases, 11 replies, 26 dict entries; Z-marked where attested (sadya, akig, hambae, gasto, baligya, obra, pasikat); unmarked forms (madasig, dugay, kusog, gahum, maaeam, kinaandan, basol, hueag, halin) are author's Western Bisayan drafts to verify against the PDFs |
| Anxiety section (0.1.4) | 13 phrases, 11 replies, 34 dict entries; verified in 0.1.5 (budlay, likaw, kurog, atubangan now SR-cited; baehas→hueas, lipong→hilo, atake→ataki, palengke→tindahan corrected). Still draft: upang, gwa, hugot, sakay, kaimaw, kabalaka |
| Source verification (0.1.5) | Done for the whole dictionary from a 300-dpi Tesseract OCR of ED145704/ED145705 (saved in `sources/ocr/`). 24 Hiligaynon forms replaced app-wide: salamat→saeamat, tambae→bueong, kulba→kueba, pirme→permi, kun kaisa→kon amat, talagsa→paeangta, kapoy→gaoy, madamo→abo, dugay→buhay, lipong→hilo, baehas→hueas, atake→ataki, multo→mueto, dako→bahoe, diutay→sangkiri, matugnaw→maeamig, hibi→tangis, butig→puril, dumdom→dumdum, tagipusuon→tagipuso-on, hunahuna→huna-huna, baba→ba-ba, delikado→peligro, palengke→tindahan. Lesson ◌ sentences were NOT individually re-verified (only the words in them); that is a separate pass |

## 7. Next steps
1. Dictionary verification is done (0.1.5). Remaining verification work, optional and separable: (a) the 63 ◌ sentences in `lessons.js` — check each against grammar examples in `sources/ocr/ED145705-grammar-ocr.txt` (search a distinctive word; e.g. `grep -n -i "owa.*kwarta"`), drop ◌ and add `(p. N)` when a matching example exists, N = PDF page − 10 for the grammar (the grammar's printed page numbers are ~10 less than the PDF page; verify on the page); (b) the still-draft words listed in the 0.1.5 changelog item 3 — most are loans or Hiligaynon and may simply have no SR entry.
2. Next section units, in this order (`mania` 0.1.1, `anxiety` 0.1.4 done): `trauma`, `substances` (tuba, alak, shabu, mama/betel, sigarilyo; AUDIT-C stems), `cognition` (orientation, recall in Aklanon), `collateral` (family informant), `children`, `elderly`. Version 0.2.0 when sections reach 12 (next content release is 0.1.6).
3. Later: Aklanon verb trainer (new paradigms, not Usap Tayo's conjugate.js), case simulations, readings, native review pass, recorded audio.

## 8. Pitfalls learned
- The shell cannot reach eric.ed.gov (proxy 403). WebFetch works but returns a model summary of ~100k-char chunks over bad OCR; it is not a substitute for the PDF. Ask the user to attach the PDFs.
- Subagent summaries of Zorc contained guesses (e.g. "siya"); the attested 3rd person is `imaw`. Do not trust a form unless a page example shows it.
- GitHub API call to enable Pages was denied by the permission classifier (creates a public surface) — the user enables it.
- Google Fonts fail in the sandbox; ignore in smoke tests.
- `worktree add … dev-tools` fails on a shallow clone ("invalid reference"): add the worktree from FETCH_HEAD, then `checkout -B dev-tools` (command in §5).
- The git proxy refuses pushes until the repo is added to the session with the add_repo tool (access: push); the existing clone can then push as is.
- Pushing from a fresh shallow clone is fine; fetch `origin main` before pushing if the clone is stale (413 otherwise).
- `data/hospital.js` exists since 0.1.2 (crisis line only, no hospital named), so `check_design.py` no longer fails on it; it still warns on `icon-maskable-512.png` (intentional). Only `check_sw.py` must pass.
- `check_design.py` expects `icon-maskable-512.png`; this app keeps Usap Tayo's `maskable-512.png` naming on purpose.
- Lesson tables with 4+ columns are tight on a 390px phone; keep tables ≤ 4 columns or split.

## 9. Files to re-attach
- Nothing. The PDFs' text now lives in `sources/ocr/` on dev-tools (dictionary 1.2 MB, grammar 0.7 MB, with `=== PDF PAGE n ===` markers and form feeds between pages). Re-OCR only if a page is unreadable: `pdftoppm -r 300 -gray X.pdf img/p && tesseract img/p-NNN.pgm out -l eng --psm 6` (~1.7 s/page on 2 cores; 632 pages ≈ 20 min; the PDFs are on ERIC as ED145704/ED145705 and the user can re-attach them).

## Note, 13 Nov 2026 (version 0.1.3, pushed)
- Phone menu fix: the menu that opens from More could not scroll on phones (the fixed `.rail` took the height of its content inside the `.shell` grid). The phone rule in `css/style.css` now sets `align-self: stretch` and a max-height. Found and fixed first in Hanashimashō (`isaymotion/Japanese` 0.12.1); test with `qa/drawer-any.py <port> <label>` on that repo's dev-tools branch ("scrolls OK" at 390×844, 360×640 and 820×1180). Version bumped in app-meta.js, changelog.js, sw.js and README.

## Note, 19 Nov 2026 (version 0.1.4, pushed)
- Anxiety section added as 0.1.4 (0.1.2/0.1.3 had been used on 13 Nov for hospital.js and the menu fix, so the handoff's "0.1.2" became 0.1.4). Remote main had moved since the previous handoff: always `git fetch origin main` and compare before assuming the next version number.
- Smoke test routes now include `#/psych/s/anxiety`, `#/psych/point?s=anxiety`, `#/psych/listen?s=anxiety`.
- Dictionary duplicate check used before commit: `cut -d'|' -f1 js/data/dict-core.js | sort | uniq -d` — the pairs kita, isip, obra, tueog are intentional noun/verb homonyms; anything else is a mistake.

## Note, 19 Nov 2026 (version 0.1.5, pushed)
- The user attached both ERIC PDFs. Embedded OCR (CVISION) was unusable; Tesseract at 300 dpi, `--psm 6`, is good enough to read headwords, POS tags and examples. Accented vowels OCR as digits (á→4, ó→6, í→f/1, ú→ti/i); `tools/verify_dict.py` encodes that.
- Biggest lesson: a Western Bisayan "draft" word is more often Hiligaynon than Aklanon. SR explicitly tags such words `[Hil]` with `[Akl: …]`; the gloss search (English → Aklanon) finds the rest. Always check before adding.
- `verify_dict.py` HEAD hits still need eyeballing: it matched gamay→"tentacle", para→"to stop", kape→"café". The report in `sources/ocr/verify-report-0.1.4.tsv` is the pre-correction run.
- Not changed on purpose: `semana` (attested in Zorc's grammar), `kwarta`, `kaon/inom`, Spanish loans (minuto, rason, lugar, sitwasyon, botika, kontrol), code-switch items (madistract), and `kabalaka` (kept in phrases because Kalibo speakers use it; `himud-os` added to the dictionary as the attested root).
