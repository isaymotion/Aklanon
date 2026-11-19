# Handoff: Mag-istorya Kita (Aklanon variant of Usap Tayo)

Updated 2026-11-19 (night, 21:00+) after v0.2.7 (children section; transform, gap-set, unit review, word pairs and in-context drills), v0.2.6 (grammar drills, vocabulary practice, lesson practice, PDF handouts), v0.2.5 (collateral section; sugod→umpisa), v0.2.4 (lessons 33–39, 1,173 entries), v0.2.3 (cognition section), v0.2.2 (lessons 22–32, 929 entries), v0.2.1 (substances section), v0.2.0 (lessons 13–21 and dict-clinical.js), v0.1.6 (trauma section), v0.1.5 (source verification against the Zorc PDFs) and v0.1.4 (anxiety section). GitHub Pages is enabled: https://isaymotion.github.io/Aklanon/ (the sandbox shell cannot reach github.io; the user checks the live site). 0.1.2 added data/hospital.js and 0.1.3 fixed phone-menu scrolling (13 Nov).

## 1. Project and audience
- App: **Mag-istorya Kita**, Aklanon ("Akeanon") for the psychiatric interview, for a psychiatrist who speaks Tagalog and English and will see patients in Kalibo, Aklan. Grammar lessons are the priority.
- Repo: `isaymotion/Aklanon`, branch `main` (site), branch `dev-tools` (this file, smoke test, **OCR text of both Zorc PDFs in `sources/ocr/`**, verifier `tools/verify_dict.py`). Live: https://isaymotion.github.io/Aklanon/ (GitHub Pages enabled 19 Nov 2026, main / root).
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
Plain HTML/CSS/JS, no build. Layout: `index.html`, `css/style.css`, `sw.js`, `manifest.webmanifest`, `data/{app-meta,changelog,strings,hospital}.js`, `js/{app,core,views,psych-views,point-listen,review,audio-key,lang,drills,vocab,handout,grammar-handout}.js`, `js/vendor/` (pdfmake, vfs_fonts, vfs_marks = DejaVu subset for ◌ ⚑ in PDFs), `js/data/{lessons,dict-core,dict-clinical,psych-phrases,psych-answers,drills,drills-2}.js` (a new `js/data/*.js` must be added to both `index.html` and the `sw.js` precache list), `icons/` (8 PNGs), `tools/` (future audio pack).

- `js/lang.js` — `window.LANG`: code 'akl', registers f/c, quiz words, `bridgeLang {tl}`, `numbers` (11 spoken 0–10), `scaleTitle`, `stem {prefixes,suffixes}` for root search, `draftNotice`.
- Lessons `js/data/lessons.js`: `{ id, level, unit, title, summary, body (HTML), quiz: [[q, [opts], correctIdx, expl], …] }`. Route `#/lessons/<id>`.
- Dictionary `js/data/dict-core.js` (or new `dict-*.js` pushing to `DICT_RAW`): one line `aklanon|english|pos|category|root|note|tagalog`; empty optionals as `||`. Example: `owa|none; did not|adv|basics||Z. Negates existence and past.|wala`. Mark `Z.` or `SR ~p. N` in the note when attested. Check duplicates: `cut -d'|' -f1 js/data/dict-core.js | sort | uniq -d` (kita, isip, obra, tueog are intentional homonym pairs). Route `#/dict`, entries `#/dict/d<n>`.
- Phrases `js/data/psych-phrases.js`: `PSYCH_SECTIONS = [{ id, group, title, intro, phrases: [{ en, f, c, n? }] }]`. Route `#/psych/s/<id>`, phrase `?p=<index>`.
- Replies `js/data/psych-answers.js`: `PSYCH_ANSWERS = { common: [{id,title,items:[[akl,en,clinicalNote?,spoken?]]}], sections: { <sectionId>: [[akl,en,note?]] } }`. Point board `#/psych/point?s=<id>`, listening drill `#/psych/listen?s=<id>`.
- Review flags: `App.state.flags[key]` in `magistorya.v1`; key `p:<sec>:<i>` or `a:<reply text>`; page `#/review` with Copy all / Clear.
- Changelog item types: feature | update | correction | content.
- Drills `js/data/drills.js` (0.2.6; contract in its header): DRILL_CLOZE_SETS/DRILL_CLOZE (ro/ku/it/sa; si/ni/kay), DRILL_BUILD, DRILL_ERRORS (+DRILL_ERROR_SETS; set x = Tagalog/Hiligaynon slips), DRILL_TRANSLATE (`akl: [accepted]`), DRILL_GAPS (sets neg/pn/qw/pt/asp, each item has its own opts), AKL_CLOSED + AKL_LESSON_GROUP (closed-class words the automatic lesson practice may blank), LESSON_GAPS (hand-written lesson practice; overrides the automatic items). Engine `js/drills.js` routes `#/drills`, `#/drills/<id>`, `#/drills/lessongaps?l=<lesson>`, `#/daily`; `js/vocab.js` `#/vocab/<match|type|hear|odd>`; handouts `#/lessons/handout?id=`, `#/drills/handout`, `#/psych/handout` (pdfmake lazy-loaded, precached). Automatic lesson practice reads table rows under a header cell exactly "Aklanon" (English from the "English" column) and `<i>…</i> (English)` in paragraphs; it drops items whose English is empty, a page reference or a grammar label, and lessons with < 4 items. `LANG.draftShort` is the one-line draft notice used on drill pages and handout footers.
- Drills part 2 `js/data/drills-2.js` (0.2.7; contract in its header; loaded after drills.js): DRILL_TRANSFORM + DRILL_TRANSFORM_TYPES (`#/drills/transform?type=&mode=choose|type`; item `{id, type, instr, from, to, alt, wrong[3], en, l, why}`; a type shows at ≥ 3 items), WORD_PAIRS (`#/vocab/pairs?type=opp|syn|col`; ≥ 4 per type; col needs `en`), DRILL_GAP_SETS (each key becomes drill `#/drills/gap-<key>` at ≥ 4 DRILL_GAPS items; keys must not be neg/pn/qw/pt/asp; new gaps without `full` get it from q + a at the end of the file). Also pushes more items into DRILL_CLOZE/BUILD/ERRORS/TRANSLATE and merges LESSON_GAPS. Engine-only additions: `#/drills/unit?u=<unit>` (12 lesson-quiz questions per unit + up to 3 related gaps) and `#/vocab/context` (sentence pool from phrases `c`, gaps `full`, translate, transform; blanks an exact dictionary headword, n/v/adj/adv, ≥ 4 letters, not AKL_CLOSED).

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
Drill checks (0.2.6), with the server running on the port given:
```
node tools/check_drills_data.js /home/claude/aklanon/js/data/drills.js      # expect "bad 0 … warnings 0" (also loads drills-2.js)
python3 tools/lesson_gaps_report.py 8123 | tail -1                         # expect "lessons>=4: 25" (or more)
python3 tools/drills_playthrough.py 8123                                   # expect 10 / 10 four times (build, errors, translate, transform), two PDFs, ERRORS []
```
Passing: every route body length > 900; LESSONS 39 / DICT 1207 / SECTIONS 13 / phrases 163 (routes now include every drill, vocab mode, gap set, unit review and handout) (update as content grows); ERRORS empty (Google Fonts failures are filtered; the sandbox blocks them).
Design checks: skill `isaymotion-app-design` → `scripts/check_sw.py /home/claude/aklanon` (must pass) and `scripts/check_design.py` (warns about `hospital.js` and `icon-maskable-512` naming — both intentional).
Commit with `-c user.name="Isabella Navarro" -c user.email="isaymotion@gmail.com"` and the Claude co-author trailer from the session reminder.

## 6. Status
| Item | Status |
|---|---|
| Engine fork, identity, icon, palette, banner, flags, #/review | done (v0.1.0) |
| Current version | 0.2.7 (2026-11-19) |
| Lessons | 39: 12 originals; 13–21 (0.2.0, notes 1); 22–27 Vocabulary (0.2.2); 28–32 (0.2.2, notes 2); 33–35 vocab-house/-verbs/-describing and 36–39 pronunciation, kalibo-dimensions, sentence-patterns, counting (0.2.4, from `sources/notes/zorc-grammar-notes-3.md`). **The grammar has now been read end to end**; only its formal definitions (pp. 34–38, 130–132) and appendix remain, not worth lessons. Further lessons would have to come from the dictionary (e.g. thematic vocabulary) or from new sources |
| Dictionary | 1,207 in the app (0.2.7 added 21 child/adolescent words as Part 6 of dict-core; 0.2.5 added 13 collateral words as Part 5): `dict-core.js` 697 (incl. Part 3 = words from Zorc's example sentences, Part 4 = phonology/counting pages) + `dict-clinical.js` 512 (0.2.0 picks in `sources/notes/dict-clinical-picks-0.2.0.txt`, 0.2.2 second pass in `…-0.2.2.txt`; extraction `tools/extract_dict_entries.py`, filter logic described in the 0.2.0/0.2.2 notes below). The two passes have now reviewed every clean on-topic OCR row; a third pass would need the ~1,000 `?`-flagged rows re-read against page images. Still-draft: 0.1.5 changelog list, kigbot, sang-una, ⚑ entries, "spelling normalised" entries |
| Phrase sections | 13 / ~14: opening, hpi, depression, suicide, psychosis, closing, mania, anxiety, trauma, substances, cognition, collateral, children (163 phrases) |
| Children section (0.2.7) | 21 phrases (parent: referral, who raises the child, pregnancy, birth, breastfeeding, milestones, febrile fits, school, teacher, bullying, conduct, discipline, enuresis/nightmares; child alone: confidentiality, abuse screen, secrecy; HEADSS), 11 replies, 21 SR-checked words. ⚑ gwa (outside); ◌ kay sin-o, samtang mabdos, nakahuna-huna. Avoided as unattested: kaklase (isigkaklasi is Zorc's), lawas (eawas), luwas, siling, tilaw, hilanat (eagnat), nahuli (late) |
| Drills (0.2.7) | 0.2.7 brought them level with Hablemos: Change the sentence (46 items, 10 types, choose/type), six gap-set drills (foc 12, abl 8, caus 8, stat 8, wb 9, snd 7), Unit review (9 units), Word pairs (22 opp, 11 syn, 12 col), In context (~150-sentence automatic pool); existing sets now 30 cloze, 22 build, 33 errors, 30 translate, 110 gaps; Practise a lesson for 25 lessons (hand-written added: focus, focus-ii, verbs-iii, word-building, sound-changes, sounds, pronunciation). Still not ported from Hablemos/Usap Tayo: dictation, numbers/dates/time drill, picture words, placement test, stress. 0.2.6 base: 11 grammar drills + daily mix; Practise a lesson for 18 grammar lessons (9 automatic: markers, may-owa, aspect, numbers-time, statives, mood, causative + 2; 9 hand-written in LESSON_GAPS: pronouns, questions, particles, demonstratives, possession, modal-particles, conjunctions, adverbs-deictics, sentence-patterns, adjectives, questions-ii). Vocabulary lessons rely on #/vocab instead. Not ported from Usap Tayo: dictation, focus switch, stress, change-the-sentence, linker, word families, opposites/collocations, pictures, vocab-in-context (no data) |
| Handouts (0.2.6) | lesson (body, quiz worksheet, gap sentences, key), drills worksheet, psychiatry phrases (sections, register, English show/hide/key, likely replies). Known cosmetic: a section heading can sit alone at the foot of a PDF page |
| Point-board replies | common groups + 11 sections |
| Audio | none (no TTS exists); recorded pack by native speaker later |
| GitHub Pages | enabled 19 Nov 2026 |
| Mania section (0.1.1) | 12 phrases, 11 replies, 26 dict entries; Z-marked where attested (sadya, akig, hambae, gasto, baligya, obra, pasikat); unmarked forms (madasig, dugay, kusog, gahum, maaeam, kinaandan, basol, hueag, halin) are author's Western Bisayan drafts to verify against the PDFs |
| Anxiety section (0.1.4) | 13 phrases, 11 replies, 34 dict entries; verified in 0.1.5 (budlay, likaw, kurog, atubangan now SR-cited; baehas→hueas, lipong→hilo, atake→ataki, palengke→tindahan corrected). Still draft: upang, gwa, hugot, sakay, kaimaw, kabalaka |
| Trauma section (0.1.6) | 12 phrases, 11 replies, 23 dict entries, all SR-checked before use (the §4 recipe worked: ~10 min). ⚑ kigbot (SR line noisy), sang-una (draft). Kalibo context: Yolanda 2013, VAW desk, DSWD |
| Source verification (0.1.5) | Done for the whole dictionary from a 300-dpi Tesseract OCR of ED145704/ED145705 (saved in `sources/ocr/`). 24 Hiligaynon forms replaced app-wide: salamat→saeamat, tambae→bueong, kulba→kueba, pirme→permi, kun kaisa→kon amat, talagsa→paeangta, kapoy→gaoy, madamo→abo, dugay→buhay, lipong→hilo, baehas→hueas, atake→ataki, multo→mueto, dako→bahoe, diutay→sangkiri, matugnaw→maeamig, hibi→tangis, butig→puril, dumdom→dumdum, tagipusuon→tagipuso-on, hunahuna→huna-huna, baba→ba-ba, delikado→peligro, palengke→tindahan. Lesson ◌ sentences were NOT individually re-verified (only the words in them); that is a separate pass |

## 7. Next steps
1. Dictionary verification is done (0.1.5). Remaining verification work, optional and separable: (a) the 63 ◌ sentences in `lessons.js` — check each against grammar examples in `sources/ocr/ED145705-grammar-ocr.txt` (search a distinctive word; e.g. `grep -n -i "owa.*kwarta"`), drop ◌ and add `(p. N)` when a matching example exists, N = PDF page − 17 for the grammar (checked: "Owa gid" example is PDF page 222 = printed p. 205; verify on the page, the front matter shifts it); (b) the still-draft words listed in the 0.1.5 changelog item 3 — most are loans or Hiligaynon and may simply have no SR entry.
2. Section units done: mania 0.1.1, anxiety 0.1.4, trauma 0.1.6, substances 0.2.1, cognition 0.2.3, collateral 0.2.5. children 0.2.7. **Next: 0.2.8 = `elderly`** (geriatric: the caregiver as informant, memory and getting lost (uli-anon = senile, SR), falls, continence, sleep, medicines and who gives them, hearing and sight, loneliness when children are abroad, elder neglect/abuse screen, capacity and who decides). Section id `elderly`, append after `children`; add the routes to smoke_test.py (pattern: '#/psych/s/children' …); dictionary Part 7 in dict-core.js; changelog 0.2.8; bump app-meta.js, changelog.js, sw.js VERSION and README (13→14 sections). After that the native-review export and recorded audio are the real blockers.
3. Drills, optional: a numbers/dates/time drill (Hablemos #/numbers; Aklanon native 0–10 only, clock and dates Spanish, lesson counting), dictation; more DRILL_TRANSFORM items for the thin types (ongoing 3, ability 3); a few automatic items offer a second grammatical option (e.g. pronoun blanks): replace with LESSON_GAPS where a reviewer flags one.
4. Later: Aklanon verb trainer (new paradigms, not Usap Tayo's conjugate.js), case simulations, readings, native review pass, recorded audio.

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
- Lesson tables wider than the phone DO scroll horizontally inside `.tablewrap` (verified: scrollWidth > clientWidth), but the hidden part is invisible in screenshots and easy to miss; keep tables ≤ 4 columns. All lessons now comply (the three older wide tables were split in 0.2.2). Cells use overflow-wrap: break-word.

## 9. Files to re-attach
- Nothing. The PDFs' text now lives in `sources/ocr/` on dev-tools (dictionary 1.2 MB, grammar 0.7 MB, with `=== PDF PAGE n ===` markers and form feeds between pages). Re-OCR only if a page is unreadable: `pdftoppm -r 300 -gray X.pdf img/p && tesseract img/p-NNN.pgm out -l eng --psm 6` (~1.7 s/page on 2 cores; 632 pages ≈ 20 min; the PDFs are on ERIC as ED145704/ED145705 and the user can re-attach them).

## 10. Release notes
Per-release findings and traps (0.1.3 → 0.2.6) are in `sources/notes/session-notes.md` on dev-tools. Read the latest note before a new unit; the word traps are also summarised in the project plan doc.
