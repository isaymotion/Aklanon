/* What's New. Newest entry FIRST. version = semver string (also the key for the unseen badge on Home,
   the menu and the footer). date = ISO YYYY-MM-DD. Item type: feature | update | correction | content.
   For every release: add an entry here, then bump APP_META.version (data/app-meta.js) and VERSION in sw.js. */
window.APP_CHANGELOG = [
  {
    version: '0.2.4', date: '2026-11-19', title: 'Seven more lessons and 232 dictionary entries from Zorc',
    items: [
      { type: 'content', text: 'Four grammar and culture lessons from the last unused chapters of Zorc: Pronunciation II (the e sound against y, l and g; glottal-stop minimal pairs such as bug-at heavy vs bughat relapse; the o/u spelling rule; stress pairs); Three Aklanons and a thousand loans (town, age and prestige dimensions, how Spanish, English, Chinese, Tagalog and Hiligaynon words are reshaped, and the dictionary\'s tags [Sp] [Hil] [Akl:] [Oak] [slg]); Sentence patterns (predicate first, ro vs do, persons are never direct objects, ku definite vs it indefinite, two-topic sentences, hay inversion and emphasis, may for there-is and has); Counting II (ka, ika- ordinals, bisis and kaywa, tig- distributives, money from kwarta to piso, the Spanish clock, dates, and age with idad).' },
      { type: 'content', text: 'Three more Vocabulary lessons built from the dictionary: house, food, town and getting around; the everyday verbs (moving, giving and taking, speaking and thinking); describing people and things (opposites and Zorc\'s character adjectives).' },
      { type: 'content', text: '232 dictionary entries, mostly words taken from Zorc\'s own example sentences with page citations (tinapay, karne, sueod, kilid, uyahon face, osoy look for, hakwat, subeang, hueam, sugo, pilit, kasayod, hibayag, hangae, hueay, kalisdanan, pangalisod, kamatayon, pakamatay, kinabuhi, kabulig, kasimanwa, mataeaw, matinahuron, mabinuligon, tawohon haunted, utang, ilong, ngipon, gatas, saging, apo, eapsag baby, daeaga, ilo, tulay, kalye, daean, saeog, baril, puti, dueom, human, duea lose, wad-an bereaved, eumos drown, batasan manners, tinun-an education, the weekdays, man-o how much, idad, bisis, tig- and ika- forms, libo, piso, salapi, medya, alas, manga about, pangidaron…). Now 1,173 entries in all.' },
      { type: 'correction', text: 'Lesson 32: the money question is man-o (with a glottal stop); mano means the right side.' },
      { type: 'update', text: 'Totals: 39 lessons, 11 sections, 127 phrases, 1,173 dictionary entries. The grammar has now been read end to end; what remains are its formal definitions and the appendix.' }
    ]
  },
  {
    version: '0.2.3', date: '2026-11-19', title: 'Cognition section',
    items: [
      { type: 'content', text: 'New section Cognition: orientation, memory, attention — a bedside screen in MMSE order with 13 phrases: schooling first, orientation to time (pitsa, buean, dag-on) and place, president and mayor, registration of three words (baeay, lapis, isda), months backwards or serial sevens from isaea ka gatos, recall, naming, repetition using Zorc\'s own greeting (Mayad nga agahon kinyong tanan), a three-stage command (tuo nga alima, piloa, ibutang sa lamesa), reading and writing, and a judgement question set on a Kalibo road. 9 point-board replies (Indi ko madumduman; Ta-o ko; Owa ako makaeskwela…) and 14 dictionary entries (lapis, papel, yabi, relo, tuo, presidente, meyor, ta-o, dayon, hasta, baeot-baeot, kwenta…). pilo, tunga and piyong carry ⚑.' },
      { type: 'update', text: 'Totals: 32 lessons, 11 sections, 127 phrases, 943 dictionary entries. Next: collateral, children, elderly.' }
    ]
  },
  {
    version: '0.2.2', date: '2026-11-19', title: 'Eleven more lessons and 177 dictionary entries',
    items: [
      { type: 'content', text: 'Five grammar lessons from the parts of Zorc not used before: Why words change shape (the ten sound changes: imna, kan-on, pamahaw, panumdum, the rang/ring/raa contractions); Choosing a focus (roles, the two book paradigms, the idioms that must be object focus, why all-actor-focus sounds childish); Reading the dictionary (the full tense set, owa + mag- past vs indi + mag- future, manog-, the participle, and what RV1–RV9, ST1–ST5, CV and DV mean); Doing a lot, doing together, becoming (pang-, mang- occupations, maging-, mag- kin pairs, makig- sharing, -in- languages, the ka-/-eV-/-in-/-ilin- qualifiers); Question words II and the time markers (kan-o vs hin-uno, Sino ro imong ngaean, haman, mauno, ku/it/sa, mga and ka, the Kalibo sin- quotative, ka-…-ta exclamations).' },
      { type: 'content', text: 'A new Vocabulary unit of six thematic word lessons drawn only from verified dictionary entries, each with Tagalog beside Aklanon, book example sentences and a quiz: the body and its complaints; feelings and states of mind; family, people and address; time, frequency and the daily round; illness, medicine, healers and the unseen; drink, money, work and trouble.' },
      { type: 'content', text: '177 more dictionary entries from a second pass over the OCR (now 929 in all): hanabo (accident), bughat (relapse), batyag (root of pamatyag), higugma, kabubut-on (inner self), panghayhay (sigh), hapot and danga-danga (pant), eadway (froth at the mouth), eigot-eogot (grind the teeth), paldado, walid, kutis, pisngi, siko, singad, sid-ot (hiccup), baeo (widow), kaeasaeon, primo/prima, panugangan, ginikanan, pamahaw, ihapon, sweldo, haega, renta, presohan, kastigo, supeot (bully), pahog, abuso, swerte, kataeigman, pangadyi-on, and many more.' },
      { type: 'update', text: 'The three older lessons with 5–6-column tables (focus, aspect, numbers and time) were split so nothing clips on a phone. Totals: 32 lessons, 10 sections, 114 phrases, 929 dictionary entries.' }
    ]
  },
  {
    version: '0.2.1', date: '2026-11-19', title: 'Substances section',
    items: [
      { type: 'content', text: 'New interview section Alcohol, tobacco, betel and drugs: 12 phrases in both registers — the local drinks (tuba, beer, gin), the three AUDIT-C questions (how often, how much in bottles or tagayan, six or more in one sitting), the CAGE ideas (cut down, complaints, trouble caused, morning drinking and the Aklanon hangover idiom pasuebo), withdrawal (shaking, sweating, seeing things), cigarettes per day and mama (betel), shabu and marijuana with a face-saving \'even once\', and pharmacy medicines without a prescription. 11 point-board replies including the usual minimising answers; 17 dictionary entries (alkuhol, bote, tagayan, makahilong, paeahilong, pasuebo, abano, binga, apog, apyan, droga, anad, abyan, problema, reklamo, okasyon, reseta). A note warns that baso means foolish in Aklanon, not glass.' },
      { type: 'update', text: 'Totals: 10 sections, 114 phrases, 751 dictionary entries. Next: cognition, collateral, children, elderly.' }
    ]
  },
  {
    version: '0.2.0', date: '2026-11-19', title: 'Nine new grammar lessons and 343 dictionary entries from the reference books',
    items: [
      { type: 'content', text: 'Lessons 13–21, written from a fresh OCR of Zorc & de la Cruz (1968) with page-cited examples: Feelings are verbs (stative verbs na-/ma-, ka- nouns, maka- adjectives); Can, happened to, and commands (maka-, hi-, the four imperatives, polite and negative commands); pa- causative (feed, remind, have the doctor called); Adjectives (degrees, ka- intensive, comparison, qualifiers, illness adjectives in -an/-on); Whose, which and where (pronoun table, possession, nga as relative, relator nouns); Hedges and colour (basi, siguro, kunta, matsa, gali, abi, makon, mana, tags, Zorc\'s Aklanon-to-Pilipino key); Joining ideas (ag, ukon, pero, kon, agod, bisan, samtang, bangod, busa); When, how and where (time words, manner with it, the four-distance place words); Making words (pag-, ka-…-an, ka-…-on, kina-, ig-, mag-, isigka-, mang-, paea-, taga-). Each ends with a clinical note and a four-question quiz.' },
      { type: 'content', text: 'New dictionary file dict-clinical.js: 343 entries selected by hand from about 8,600 OCR\'d headwords of Salas Reyes, Zorc & Prado (1969), restricted to body, health, feelings and mental states, family, people, daily life, time and common verbs and adjectives; each headword re-checked against the OCR, each with an SR page reference and a Tagalog equivalent where the author is confident. Examples: binhod (numb limb), atipiyong (feel faint), dikeong (relapse), hageok (wheeze), eignat (fever), igit (diarrhea), paeapo (stomach ache), uli-anon (senile), himamatyon (dying), buringot (moody), konsumido (worried), kueuyapan (high-strung), hawag (anxious), mikot (feelings hurt), mas-ot (hard feelings), taka (fed up), hidlaw (miss someone), palhi (shy), pikon, tamilay (weak from low spirits), nam-an (lose hope), manogbarang (sorcerer), maligno, gaba, wakwak, tandok, and family terms (igmanghod, magueang, subang, manghod, hipag, payaw, panugangan, ginikanan, tiya, tiyo). Headwords whose OCR spelling was normalised say so in the note.' },
      { type: 'correction', text: 'lipong (dizzy, faint) is attested in SR after all (ST2) and returns to the dictionary beside hilo and mabuyog; baeaka (concern, help) is listed as the Aklanon root behind Kalibo kabalaka.' },
      { type: 'update', text: 'Totals: 21 lessons, 9 sections, 102 phrases, 734 dictionary entries. Version 0.2.0 marks the end of the first content phase; next: substances, cognition and collateral sections, and the native-speaker review list (#/review).' }
    ]
  },
  {
    version: '0.1.6', date: '2026-11-19', title: 'Trauma section',
    items: [
      { type: 'content', text: 'New interview section Trauma and its aftermath: 12 phrases in both registers — a normalising gateway (accident, typhoon, beatings at home, something done to the patient), permission to skip details, timing (kato anay), intrusion (memories coming back uman, nightmares tupay), avoidance (likaw, padumdum), arousal (on guard, startle kigbot, sleep, anger), numbing and detachment, self-blame (saea, hinuesoe), whether it is still happening and whether home is safe now, and a closing that returns control to the patient. 11 point-board replies with risk notes; 23 new dictionary entries, each checked against the Aklanon dictionary (bagyo, linog, bunae, hampak, sampae, abuso, pahog, siyagit, igbata, kato anay, uman, padumdum, tupay, bangungot, kigbot, saea, parehas, maeain, madali, hinay, kalma, linong, saeanhon). Two draft forms carry a ⚑: kigbot (noisy line) and sang-una.' },
      { type: 'update', text: 'Totals: 9 sections, 102 phrases, 392 dictionary entries. Next: substances, cognition, collateral, children, elderly.' }
    ]
  },
  {
    version: '0.1.5', date: '2026-11-19', title: 'Source verification against the Aklanon dictionary',
    items: [
      { type: 'correction', text: 'Every dictionary entry was checked against the 1969 Aklanon dictionary (Salas Reyes, Zorc & Prado, ERIC ED145704) and the 1968 grammar, read from a fresh OCR of the scans. Words that turned out to be Hiligaynon, with the attested Aklanon form now used throughout the phrases, replies and lessons: salamat → saeamat; tambae → bueong (medicine); kulba → kueba (fear, nervousness); pirme → permi; kun kaisa → kon amat; talagsa → paeangta; kapoy → gaoy (tired); madamo → abo (many); dugay → buhay (long time); lipong → hilo; baehas → hueas (sweat); atake → ataki; multo → mueto; dako → bahoe; diutay → sangkiri; matugnaw → maeamig; hibi → tangis; butig → puril; dumdom → dumdum; tagipusuon → tagipuso-on; hunahuna → huna-huna; baba → ba-ba; delikado (which means fragile in Aklanon) → may peligro; palengke → tindahan.' },
      { type: 'update', text: 'About 100 dictionary entries now carry an SR page reference instead of being unmarked drafts (e.g. dughan, dueonggan, husto, matuod, likaw, budlay, kusog, dasig, pahuway, tungod, atubangan). 20 attested words added: himud-os (worry), kuyap, nirbyos, mabuyog, kalipay, hinuesoe (regret), hangos, mabahoe, kiri, mabuhay, kabuhay, dominggo, kurandero, kahilapit, eamig, hukom, baeabag, ugali, gihapon, loko. 369 entries in all.' },
      { type: 'update', text: 'Still draft and not found in the dictionary: kabalaka (worry; Aklanon himud-os is attested), buang, upang, gwa, kaimaw, untat, sugod, intindi, istorya, pasyente, boses, semana (attested only in the grammar), sugal, misyon, kinaandan, palibot, basol, hugot, sakay. The draft banner and ⚑ flags stay until a native speaker reviews.' }
    ]
  },
  {
    version: '0.1.4', date: '2026-11-19', title: 'Anxiety section',
    items: [
      { type: 'content', text: 'New interview section Anxiety, worry and panic: 13 phrases in respectful and everyday register covering generalised worry (content, control, six-month duration, muscle tension and sleep), panic attacks (sudden onset, pounding heart, shaking, breathlessness, dizziness and sweating, fear of dying or going mad, duration, cued or unexpected), agoraphobic fears with Kalibo examples (crowds, the palengke, the jeep, being far from home), avoidance and impairment, social fear of being watched or judged, and caffeine, alcohol or pharmacy sedatives taken for the nerves; 11 point-board replies with clinical notes; 34 new dictionary entries (ginakulbaan, kahadlok, butang, gagmay, mabudlay, tungod, hugot, abaga, gulpi, kurog, baehas, atake, likaw, upang, gwa, bantay, husga, atubangan, kaimaw, nahuya, botika and others, with Tagalog equivalents). All lines are unreviewed draft; Western Bisayan forms not yet found in Zorc (mabudlay, baehas, likaw, upang, gwa, hugot, kurog) are named in the notes for the reviewer.' },
      { type: 'update', text: 'Totals: 8 sections, 90 phrases, 349 dictionary entries. Next: trauma, substances, cognition, collateral, children, elderly.' }
    ]
  },
  {
    version: '0.1.3', date: '2026-11-13', title: 'Menu scrolling fixed',
    items: [
      { type: 'correction', text: 'The menu that opens from More now scrolls on phones and tablets. Before, it was taller than the screen and could not be scrolled, so the items at the bottom of the list (such as Settings and About) could not be reached from it.' }
    ]
  },
  {
    version: '0.1.2', date: '2026-11-13', title: 'Hospital details file',
    items: [
      { type: 'update', text: 'Added data/hospital.js, the per-site settings file the shared design uses (hospital name, program, form numbers, crisis line). No hospital is named yet, so only the crisis line shows; the About page now reads NCMH 1553 and the alternate mobile numbers from it.' }
    ]
  },
  {
    version: '0.1.1', date: '2026-11-08', title: 'Mania section',
    items: [
      { type: 'content', text: 'New interview section Elevated mood and DIGFAST (mania): 12 phrases in respectful and everyday register screening a distinct period of elevated or irritable mood, duration, decreased need for sleep, talkativeness, racing thoughts, distractibility, increased activity, grandiosity, spending and risk-taking, prior episodes and collateral; 11 point-board replies with clinical notes; 26 new dictionary entries (sadya, masadya, kusog, madasig, dugay, gasto, baligya, basol, gahum, maaeam, kinaandan, pasikat and others, with Tagalog equivalents). All lines are unreviewed draft; words attested in Zorc & de la Cruz are marked Z.' },
      { type: 'update', text: 'Totals: 7 sections, 77 phrases, 315 dictionary entries. Next: anxiety, trauma, substances, cognition, collateral, children, elderly.' }
    ]
  },
  {
    version: '0.1.0', date: '2026-11-08', title: 'First draft: engine fork from Usap Tayo',
    items: [
      { type: 'feature', text: 'Mag-istorya Kita ("let’s talk" in Aklanon) runs on the same engine as Usap Tayo: Home, Lessons with quizzes, Dictionary with root search, universal search, Flashcards (topic and psychiatry decks, My mistakes), the Psychiatry phrase sections, Point board, Listening drill, Practice, Progress, Settings, backup, theme and text size, offline use and install to home screen.' },
      { type: 'feature', text: 'Draft banner on every page with a Why? note, and a ⚑ review flag on every phrase and point-board reply. Flagged lines, with your comments, are listed under App → For review, ready to copy for a native Akeanon speaker.' },
      { type: 'feature', text: 'Dictionary entries and flashcards can show the Tagalog equivalent (TL:), since the learner already speaks Tagalog.' },
      { type: 'content', text: '12 contrastive grammar and culture lessons for Tagalog speakers (sounds and the Aklanon e; markers; pronouns; demonstratives; may/owa and the four negators; question words; verb focus; aspect; particles; numbers and time; respect without po; real Kalibo speech and interpreting), each with a quiz, citing Zorc & de la Cruz 1968 by page.' },
      { type: 'content', text: '6 interview sections, 65 phrases (opening, HPI, depression, suicide risk, hallucinations and delusions, closing), point-board replies for each plus the common groups and a spoken 0–10 scale, and a 289-entry core and clinical dictionary with Tagalog equivalents. All Aklanon is an unreviewed draft built from published sources; lines marked ◌ in the lessons are reconstructions.' },
      { type: 'update', text: 'Deferred: the remaining interview sections (mania, anxiety, trauma, substances incl. tuba and betel, cognition, collateral, children, elderly), a larger dictionary, an Aklanon verb trainer, recorded audio by a native speaker (there is no Aklanon text-to-speech voice), case simulations, ward tools and printable handouts.' }
    ]
  }
];
