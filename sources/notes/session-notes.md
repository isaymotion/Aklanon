# Mag-istorya Kita: release notes from build sessions

Moved out of HANDOFF.md on 2026-11-19 to keep the handoff short. Newest at the bottom.

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

## Note, 19 Nov 2026 (version 0.1.6, pushed)
- Trauma section written with the new rule: every candidate word run through `tools/verify_dict.py` and gloss search first. Attested finds worth reusing: kato anay (long ago), uman (again), tupay/hupa' (nightmare), bangungot, kigbot (startle, noisy), saea (fault), hinuesoe (regret), parehas, maeain (bad; eain alone = different), madali, hinay, kalma/linong, igbata (relative), abuso, pahog (threaten), siyagit, bunae/hampak/sampae.
- Not found in SR and therefore avoided or flagged: luwas (safe) → say "owa it peligro"; liwat (again) → uman; basol → hinuesoe or "may saea"; sang-una (⚑); istorya is Kalibo usage, kept (it is in the app's name).
- Watch for duplicate headwords when adding: this release re-added asawa, bunae, lipat, makaron, saea, sugid and had to merge them (the `uniq -d` check in §3 catches it).

## Note, 19 Nov 2026 (version 0.2.0, pushed)
- Lessons 13–21 were written from `sources/notes/zorc-grammar-notes.md` (an Opus subagent's extraction of pp. 66–69, 99–105, 120–129, 135–139, 155–160, 169–187, 195–211; p. 160's enclitic pronoun table is unreadable, katon/kana are reconstructed). Grammar page offset is **−18** (PDF 84 = p. 66), not −17 as an earlier note said.
- Dictionary expansion pipeline: two Sonnet subagents ran `tools/extract_dict_entries.py` over the OCR (8,633 raw rows, ~35 % flagged), a filter kept 1,286 clean + on-topic + new candidates, and the author picked 373 by hand in five batches, re-verified them with `tools/verify_dict.py` (13 misses dropped or flagged) and dropped 13 duplicates of dict-core. Picks file keeps the `orig>new` respellings so the reviewer can see every normalisation.
- Found while picking: `lipong` is attested (ST2) despite the 0.1.5 correction; `baeaka` is the Aklanon root (concern, help) under Kalibo `kabalaka`; `mabdos` = pregnant; `binhod` = numb limb; `dikeong` = relapse; `uli-anon` = senile; `himamatyon` = dying.
- Tagalog column in dict-clinical.js is the author's (a Tagalog speaker), not from the book; blank where unsure.

## Note, 19 Nov 2026 evening (versions 0.2.1 and 0.2.2, pushed)
- 0.2.1 substances: words checked first (tuba', alkuhol, hilong, pasuebo' idiom, sigarilyo attested in Z p. 17, mama'/binga/apog, apyan, bote, tagayan = cup). **baso = foolish in Aklanon** (SR), so drinks are counted in bote/tagayan. untat still unattested.
- 0.2.2 grammar lessons came from `zorc-grammar-notes-2.md` (Opus subagent; clean except the p. 95 inflection chart, ~12 cells [?]). Surprises worth remembering: the grammar never uses RV/CV/DV — those tags are defined in the dictionary's front matter (SR pp. 25–27, RV1–RV9 not RV1–RV8); the -um- conjugation "does not exist in current Aklanon"; kan-o = when (past) vs hin-uno = when (future); Sino ro imong ngaean? is the native idiom; sin- is the Kalibo quotative (kun- in the north); lipong is attested after all.
- Dictionary pass 2: 2,544 OCR-confirmed headword rows not seen in pass 1 → topic filter → 588 → 181 picked by hand → 30 respellings failed verify_dict (11 dropped, 14 kept with ⚑) → 170 added, plus 9 base words the vocabulary lessons needed. Pass 1 + 2 together mean every clean row with a readable POS has been looked at once.
- Vocabulary lessons list only words present in the dictionary (checked by script); if a dictionary line is renamed, re-run that check (`node` snippet in the 0.2.2 build: compare `<tr><td>` first cells against DICT_RAW headwords).

## Note, 19 Nov 2026 night (versions 0.2.3 and 0.2.4, pushed)
- Cognition section: MMSE order; repetition item is Zorc's own greeting (p. 191); three-stage command uses tuo (right, SR) and ⚑ pilo/tunga; reading card PIYONGA RO MATA ⚑. Age question attested as "Pila ro imong idad?" (SR D. 225); date as "Ano'ng pitsaha makaron?" (D. 309).
- notes-3 findings: money question is **man-o** (mano = right side); "una" = first is not in either book (anay / panganay / ala una); native 11–99 are not recorded (Spanish numbers used); pila ka bisis is not attested (pilambisis, sambisis, kaywa are); tiyan is a Chinese loan; prestige speech prefers ro/raya over do/daya; "Aklanon has no l" is false (l next to i: likod, alima, ilo, uli, ulihi, puril).
- Dictionary Parts 3–4 in dict-core.js came from Zorc's example sentences (clean text, so no ⚑); the script that found them: collect Aklanon tokens from the notes' examples, subtract DICT_RAW headwords, pick by hand.
- Vocabulary lessons: a script checks every `<tr><td>` first cell against DICT_RAW (run it after any dictionary rename). Current misses are only derived forms (nalipay, nagaoy…) and multiword phrases.
- Vocabulary coverage by category now: body 70, health 105, emotions 110, mind 60, family 55, people 50, time 60, daily 150, places 25, folk 27, substances 16, verbs 200, adjectives 90.

## Note, 19 Nov 2026 late night (versions 0.2.5 and 0.2.6, pushed)
- 0.2.5 collateral: 15 phrases, 11 replies, 13 SR-checked words (umpisa, trangka, balighot, atipan, uyon, bisyo, bagwas, kambyado, panubli-on, lagaw, ampon, basag, barang). Traps: **utod** = piece of something (sibling = igmanghod); **buong** (break) Hiligaynon → basag/pusa'; **ulo** in SR is vulgar (head = ueo); **iba** = different/other AND go together (kaibahan = companion, attested; kaimaw is not); **sabi** is Tagalog (say = hambae); **kay** is not "because" (use bangod); "say" quotative sin- (lesson 32).
- **sugod is not "start"** (Zorc p. 28: enter, go into; start is Hiligaynon). Replaced app-wide by umpisa (SR ~p. 280, Umpisahi ring obra): HPI, anxiety, one hpi reply (flag key changed), seven lesson examples; dict sugod now = enter.
- 0.2.6 drills/handouts: engine ported by an Opus subagent from Usap Tayo (drills.js, vocab.js, handout.js, grammar-handout.js); Aklanon items written by Claude from lesson examples (◌ / Zorc pages in `why`). Data check one-liner used before commit: every cloze answer in its set's opts, every gap `full` = q with the answer, build alts use the same tiles, error indices in range (node snippet in the 0.2.6 session; easy to rewrite).
- Worked from a second worktree (`git worktree add /home/claude/akl-025 HEAD`) so the 0.2.5 commit stayed clean while the subagent edited the main checkout; copy the subagent's files across afterwards. Useful whenever a subagent and the author edit at the same time.

## Note, 19 Nov 2026 night (version 0.2.7, pushed)
- Children section: 21 phrases, all words run through verify_dict.py and gloss search first (~20 min). Useful finds: mabdos is SR's Akl for Tagalog buntis; eapsag = baby; pasuso CV (Pasuswa ro eapsag); kamang = crawl; panaw = go on foot; pae-at = absent (Eng absent marked Akl: pae-at); eskwelahan/eskuylahan = school, while **eskwela in SR = student**; maestra example "Nakahambae eon ako sa maestra"; "Sa ano ka nga grado?" attested; sunlog = tease; masinueundon/bulingag = obedient/stubborn; eahog = naughty; kastigo is marked [Sp] with Akl: silot; lilong/puril = lie; kameot = touch with the fingers; ginikanan = parents; pilit (Z p. 99). Not found: kaklase, lawas (use eawas), hilanat (eagnat), luwas, tilaw, a bedwetting verb (OCR "eimid" unreadable: the line asks Nagaihi pa imaw kon nagatueog?).
- Drills level with Hablemos: an Opus subagent ported the engines (transform, gap sets, unit review, word pairs, in context) into js/drills.js and js/vocab.js and extended smoke_test.py, check_drills_data.js and drills_playthrough.py, while Claude wrote js/data/drills-2.js and the section in parallel (no file overlap; worked fine in one checkout). The checker requires `full` on every DRILL_GAPS item, so drills-2.js fills it from q + a; build `alt` orders must reuse exactly the same tiles (capitals count).
