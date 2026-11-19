/* Aklanon drill content, part 2 (0.2.7): the drills that bring Mag-istorya Kita level with Hablemos.
   Loaded after js/data/drills.js and before js/drills.js. DRAFT, unreviewed by a native speaker; (Z p. N) = the sentence
   or its pattern is in Zorc & de la Cruz 1968; SR = Salas Reyes et al. 1969; ◌ = author's sentence on an attested pattern.
   Structures:
     DRILL_TRANSFORM_TYPES  { type: label }   (filter menu of #/drills/transform, in this order)
     DRILL_TRANSFORM  [{ id, type, instr, from, to, alt: [other correct answers], wrong: [exactly 3 well-formed
                       Aklanon sentences that do NOT follow the instruction], en (English of `to`), l (lesson id), why }]
                       Typed answers are checked against to + alt ignoring case, commas, spaces and end punctuation.
                       to, alt and wrong are all distinct and none equals from.
     WORD_PAIRS       [{ id, type: 'opp' | 'syn' | 'col', a, ea, b, eb, note?, en? }]
                       opp = opposites, syn = near-synonyms (note says the difference), col = words that go together
                       (a + ' ' + b is the phrase; en = its English). Every a and b is a dictionary headword (or, for col b,
                       a short phrase of headwords). No b repeats within a type; no pair twice in either direction.
     DRILL_GAP_SETS   { setId: { title, eyebrow, blurb, intro, lesson } }  extra Fill-the-gap drills, appended to the drill
                       list automatically; items are pushed into DRILL_GAPS with that set id (same shape as drills.js).
   Further items for the 0.2.6 drills are pushed into DRILL_CLOZE, DRILL_BUILD, DRILL_ERRORS, DRILL_TRANSLATE, and
   hand-written lesson practice is merged into LESSON_GAPS.
   Ids (tr-, wp-) are permanent: append only. */
window.DRILL_TRANSFORM_TYPES = {
  neg: 'Make it negative',
  past: 'Put it in the past',
  future: 'Put it in the future',
  ongoing: 'Make it ongoing or habitual',
  command: 'Make it a command',
  prohibit: 'Make it a prohibition',
  respect: 'Make it respectful',
  question: 'Make it a question',
  ability: 'Can and cannot',
  focus: 'Change the focus'
};

window.DRILL_TRANSFORM = [
  // negative
  { id: 'tr-001', type: 'neg', instr: 'Make it negative (I have none).', from: 'May kwarta ako.', to: 'Owa ako it kwarta.', alt: [], wrong: ['Indi ako it kwarta.', 'Bukon ako it kwarta.', 'May kwarta pa ako.'], en: 'I have no money.', l: 'may-owa', why: 'may … → owa + pronoun + it (lesson may-owa). ◌' },
  { id: 'tr-002', type: 'neg', instr: 'Make it negative (it did not happen).', from: 'Nakatueog ako kabii.', to: 'Owa ako makatueog kabii.', alt: [], wrong: ['Indi ako makatueog kabii.', 'Bukon ako makatueog kabii.', 'Nakatueog eon ako kabii.'], en: 'I could not sleep last night.', l: 'mood', why: 'A past event that did not happen: owa, then the unreal form maka- (Z p. 64). ◌' },
  { id: 'tr-003', type: 'neg', instr: 'Make it negative (not a …).', from: 'Doktor imaw.', to: 'Bukon it doktor imaw.', alt: [], wrong: ['Owa it doktor imaw.', 'Indi it doktor imaw.', 'Doktor man imaw.'], en: 'He is not a doctor.', l: 'may-owa', why: 'bukon negates a noun, which takes it (Z p. 174).' },
  { id: 'tr-004', type: 'neg', instr: 'Make it negative (I will not).', from: 'Magkaon ako.', to: 'Indi ako magkaon.', alt: [], wrong: ['Owa ako magkaon.', 'Bukon ako magkaon.', 'Magkaon eon ako.'], en: 'I will not eat.', l: 'may-owa', why: 'indi for the future, with the bare mag- verb (Z p. 61).' },
  { id: 'tr-005', type: 'neg', instr: 'Make it negative.', from: 'Nagsimba ako kahapon.', to: 'Owa ako magsimba kahapon.', alt: [], wrong: ['Indi ako magsimba kahapon.', 'Owa ako nagsimba kahapon.', 'Nagsimba man ako kahapon.'], en: 'I did not go to church yesterday.', l: 'aspect', why: 'owa + pronoun + the bare mag- form (Z p. 64). The verb loses its nag-.' },
  { id: 'tr-006', type: 'neg', instr: 'Make it negative (I have none).', from: 'May bueong ako.', to: 'Owa ako it bueong.', alt: [], wrong: ['Indi ako it bueong.', 'Bukon ako it bueong.', 'May bueong pa ako.'], en: 'I have no medicine.', l: 'may-owa', why: 'may → owa; the thing had takes it. ◌' },
  { id: 'tr-007', type: 'neg', instr: 'Make it negative (it is not so).', from: 'Matuod raya.', to: 'Bukon it matuod raya.', alt: [], wrong: ['Owa it matuod raya.', 'Indi it matuod raya.', 'Matuod gid raya.'], en: 'This is not true.', l: 'may-owa', why: 'Denying a description: bukon it … ◌' },
  // past
  { id: 'tr-008', type: 'past', instr: 'Put it in the past (completed).', from: 'Nagakaon ako it humay.', to: 'Nagkaon ako it humay.', alt: [], wrong: ['Magakaon ako it humay.', 'Magkaon ako it humay.', 'Nagakaon pa ako it humay.'], en: 'I ate rice.', l: 'aspect', why: 'naga- (going on) → nag- (done), Z p. 95.' },
  { id: 'tr-009', type: 'past', instr: 'Put it in the past (completed), keeping the focus.', from: 'Ginabakae ku unga ro isda.', to: 'Ginbakae ku unga ro isda.', alt: [], wrong: ['Bakaeon ku unga ro isda.', 'Ginabakae pa ku unga ro isda.', 'Ginbakae ku unga ro gatas.'], en: 'The child bought the fish.', l: 'aspect', why: 'gina- (going on) → gin- (done), object focus (Z p. 33).' },
  { id: 'tr-010', type: 'past', instr: 'Put it in the past (completed).', from: 'Nagainom imaw it bueong.', to: 'Nag-inom imaw it bueong.', alt: [], wrong: ['Magainom imaw it bueong.', 'Mag-inom imaw it bueong.', 'Nagainom eon imaw it bueong.'], en: 'He took (some) medicine.', l: 'aspect', why: 'naga- → nag-; the hyphen marks the glottal stop before inom. ◌' },
  { id: 'tr-011', type: 'past', instr: 'Put it in the past (I could not).', from: 'Indi ako makatueog.', to: 'Owa ako makatueog.', alt: [], wrong: ['Bukon ako makatueog.', 'Ayaw ako makatueog.', 'Indi ako nakatueog.'], en: 'I could not sleep.', l: 'mood', why: 'indi (not now, not later) → owa (did not); the verb stays maka-. ◌' },
  { id: 'tr-012', type: 'past', instr: 'Put it in the past (completed).', from: 'Nagaobra imaw sa Kalibo.', to: 'Nagobra imaw sa Kalibo.', alt: ['Nag-obra imaw sa Kalibo.'], wrong: ['Magaobra imaw sa Kalibo.', 'Magobra imaw sa Kalibo.', 'Nagaobra pa imaw sa Kalibo.'], en: 'He worked in Kalibo.', l: 'aspect', why: 'naga- → nag-. ◌' },
  // future
  { id: 'tr-013', type: 'future', instr: 'Put it in the future.', from: 'Nagkaon kami.', to: 'Magakaon kami.', alt: [], wrong: ['Nagakaon kami.', 'Nagkaon eon kami.', 'Owa kami magkaon.'], en: 'We will eat.', l: 'aspect', why: 'nag- (done) → maga- (still to come), Z p. 95.' },
  { id: 'tr-014', type: 'future', instr: 'Put it in the future (tomorrow).', from: 'Nagbalik imaw kahapon.', to: 'Magabalik imaw hin-aga.', alt: ['Mabalik imaw hin-aga.'], wrong: ['Nagabalik imaw hin-aga.', 'Nagbalik imaw hin-aga.', 'Magabalik imaw kahapon.'], en: 'He will come back tomorrow.', l: 'aspect', why: 'maga- for the future, and the time word changes too: kahapon → hin-aga. ◌' },
  { id: 'tr-015', type: 'future', instr: 'Put it in the future, keeping the focus.', from: 'Ginbakae ko ro bueong.', to: 'Bakaeon ko ro bueong.', alt: [], wrong: ['Ginabakae ko ro bueong.', 'Ginbakae ko eon ro bueong.', 'Nagbakae ako it bueong.'], en: 'I will buy the medicine.', l: 'aspect', why: 'Object focus: gin- (done) → -on (still to come). ◌' },
  { id: 'tr-016', type: 'future', instr: 'Put it in the future, keeping the focus.', from: 'Gin-inom mo ro bueong?', to: 'Imnon mo ro bueong?', alt: [], wrong: ['Ginainom mo ro bueong?', 'Inomon mo ro bueong?', 'Gin-inom mo eon ro bueong?'], en: 'Will you take the medicine?', l: 'sound-changes', why: 'inom + -on loses a vowel and swaps: imnon, not inomon (Z p. 45).' },
  // ongoing
  { id: 'tr-017', type: 'ongoing', instr: 'Make it ongoing or habitual.', from: 'Nag-inom ako it alak.', to: 'Nagainom ako it alak.', alt: [], wrong: ['Mag-inom ako it alak.', 'Magainom ako it alak.', 'Owa ako mag-inom it alak.'], en: 'I drink liquor (these days).', l: 'aspect', why: 'nag- (done) → naga- (going on, habit). ◌' },
  { id: 'tr-018', type: 'ongoing', instr: 'Make it ongoing or habitual, keeping the focus.', from: 'Ginbakae ko ro gatas.', to: 'Ginabakae ko ro gatas.', alt: [], wrong: ['Bakaeon ko ro gatas.', 'Ginbakae ko eon ro gatas.', 'Nagbakae ako it gatas.'], en: 'I buy (am buying) the milk.', l: 'aspect', why: 'gin- → gina- (Z p. 33). ◌' },
  { id: 'tr-019', type: 'ongoing', instr: 'Make it habitual (always).', from: 'Nagkaon ako it humay.', to: 'Permi ako nagakaon it humay.', alt: ['Nagakaon ako permi it humay.'], wrong: ['Permi ako nagkaon it humay.', 'Permi ako magakaon it humay.', 'Taeagsa ako nagakaon it humay.'], en: 'I always eat rice.', l: 'aspect', why: 'A habit takes naga- (SR ~p. 16: permi = always).' },
  // command
  { id: 'tr-020', type: 'command', instr: 'Make it a polite request (anay).', from: 'Nagalingkod kamo.', to: 'Lingkod anay kamo.', alt: ['Lingkod kamo anay.'], wrong: ['Naglingkod kamo.', 'Nagalingkod anay kamo.', 'Ayaw kamo maglingkod.'], en: 'Please sit down.', l: 'mood', why: 'The bare root is the simple command; anay softens it (Z p. 68).' },
  { id: 'tr-021', type: 'command', instr: 'Make it a command (object focus).', from: 'Ginbasa mo ra.', to: 'Basaha ra.', alt: ['Basaha raya.'], wrong: ['Basahon mo ra.', 'Ginabasa mo ra.', 'Basahi ra.'], en: 'Read this.', l: 'focus', why: 'Object-focus command: root + -a (Z p. 68). -i is the referent command.' },
  { id: 'tr-022', type: 'command', instr: 'Make it a command (referent focus).', from: 'Ginhugasan mo ro alima.', to: 'Hugasi ring alima.', alt: ['Hugasi ro imong alima.'], wrong: ['Hugasa ring alima.', 'Ginahugasan mo ring alima.', 'Nagahugas ka it alima.'], en: 'Wash your hands.', l: 'focus', why: 'The hands are only partly affected: referent focus, command -i (Z p. 64); ring = ro imong.' },
  { id: 'tr-023', type: 'command', instr: 'Make it a command.', from: 'Ginasugid mo kakon.', to: 'Sugidi ako.', alt: [], wrong: ['Sugida ako.', 'Isugid ako.', 'Ginsugid mo kakon.'], en: 'Tell me.', l: 'mood', why: 'The person told is the referent: sugid + -i, with ako in focus (SR ~p. 322). ◌' },
  { id: 'tr-024', type: 'command', instr: 'Make it a dosing instruction (command).', from: 'Nagainom kamo it bueong kada aga.', to: 'Imna ro bueong kada aga.', alt: ['Imna ninyo ro bueong kada aga.'], wrong: ['Imnon ro bueong kada aga.', 'Gin-inom ro bueong kada aga.', 'Ayaw it inom it bueong kada aga.'], en: 'Drink the medicine every morning.', l: 'mood', why: 'inom + -a → imna (SR: Imna ro bueong).' },
  { id: 'tr-025', type: 'command', instr: 'Make it a polite invitation (let\'s).', from: 'Nag-uli kita.', to: 'Mos, mauli eon kita.', alt: ['Mauli eon kita.'], wrong: ['Nag-uli eon kita.', 'Nagauli kita.', 'Indi kita mauli.'], en: 'Come on, let\'s go home.', l: 'mood', why: 'Polite commands use the unreal form with kita (Z p. 69).' },
  // prohibition
  { id: 'tr-026', type: 'prohibit', instr: 'Tell him not to.', from: 'Nagainom ka it alak.', to: 'Ayaw it inom it alak.', alt: ['Ayaw mag-inom it alak.', 'Ayaw ka mag-inom it alak.'], wrong: ['Owa ka mag-inom it alak.', 'Indi ka nagainom it alak.', 'Nag-inom ka eon it alak.'], en: 'Don\'t drink liquor.', l: 'mood', why: 'ayaw + it + root, or ayaw + mag- (Z pp. 65, 196).' },
  { id: 'tr-027', type: 'prohibit', instr: 'Tell them not to.', from: 'Nagasinggit kamo.', to: 'Ayaw it singgit.', alt: ['Ayaw kamo magsinggit.', 'Ayaw magsinggit.'], wrong: ['Owa kamo magsinggit.', 'Bukon kamo nagsinggit.', 'Nagsinggit kamo.'], en: 'Don\'t shout.', l: 'mood', why: 'Zorc p. 196: Ayaw it singgit.' },
  { id: 'tr-028', type: 'prohibit', instr: 'Tell him not to.', from: 'Nagatubako ka.', to: 'Ayaw magtubako.', alt: ['Ayaw ka magtubako.', 'Ayaw it tubako.'], wrong: ['Owa ka magtubako.', 'Bukon ka magtubako.', 'Nagtubako ka.'], en: 'Don\'t smoke.', l: 'mood', why: 'ayaw + the bare mag- form (Z p. 69).' },
  { id: 'tr-029', type: 'prohibit', instr: 'Tell her not to be.', from: 'Nahadlok ka.', to: 'Ayaw kahadlok.', alt: ['Ayaw ka kahadlok.'], wrong: ['Owa ka nahadlok.', 'Indi ka nahadlok.', 'Mahadlok ka.'], en: 'Don\'t be afraid.', l: 'statives', why: 'ayaw + ka- form of the stative. ◌' },
  // respect
  { id: 'tr-030', type: 'respect', instr: 'Make it respectful (to an elder).', from: 'Nakakaon ka eon?', to: 'Nakakaon eon kamo?', alt: ['Nakakaon kamo eon?'], wrong: ['Nakakaon eon sanda?', 'Nakakaon ka eon, Nay?', 'Nakakaon eon kami?'], en: 'Have you eaten? (to an elder)', l: 'politeness', why: 'Respect = plural kamo (+ a title), never po (Z p. 66).' },
  { id: 'tr-031', type: 'respect', instr: 'Make it respectful.', from: 'Ano ro ngaean mo?', to: 'Ano ro ngaean ninyo?', alt: ['Ano ro ngaean ninyo, Nay?', 'Ano ro inyong ngaean?'], wrong: ['Ano ro ngaean kamo?', 'Ano ro ngaean nanda?', 'Ano ro ngaean na?'], en: 'What is your name? (respectful)', l: 'politeness', why: 'mo → ninyo after the noun; inyo + -ng before it.' },
  { id: 'tr-032', type: 'respect', instr: 'Make it respectful.', from: 'Lingkod anay ka.', to: 'Lingkod anay kamo.', alt: ['Lingkod kamo anay.'], wrong: ['Lingkod anay sanda.', 'Lingkod anay kami.', 'Lingkod anay ninyo.'], en: 'Please sit down. (respectful)', l: 'politeness', why: 'ka → kamo; the genitive ninyo cannot be the topic.' },
  { id: 'tr-033', type: 'respect', instr: 'Make it respectful.', from: 'Saeamat gid kimo.', to: 'Saeamat gid kinyo.', alt: [], wrong: ['Saeamat gid kanda.', 'Saeamat gid kamo.', 'Saeamat gid ninyo.'], en: 'Thank you very much. (respectful)', l: 'politeness', why: 'The oblique kimo → kinyo.' },
  { id: 'tr-034', type: 'respect', instr: 'Make it respectful.', from: 'Siin ka nagaistar?', to: 'Siin kamo nagaistar?', alt: [], wrong: ['Siin ninyo nagaistar?', 'Siin sanda nagaistar?', 'Siin kinyo nagaistar?'], en: 'Where do you live? (respectful)', l: 'politeness', why: 'The actor of an actor-focus verb is the topic: kamo.' },
  // questions
  { id: 'tr-035', type: 'question', instr: 'Ask where he lives (siin).', from: 'Nagaistar imaw sa Kalibo.', to: 'Siin imaw nagaistar?', alt: [], wrong: ['Sin-o imaw nagaistar?', 'Kan-o imaw nagaistar?', 'Pila imaw nagaistar?'], en: 'Where does he live?', l: 'questions', why: 'The pronoun moves up to follow siin (Z p. 117).' },
  { id: 'tr-036', type: 'question', instr: 'Ask when it started (past).', from: 'Nag-umpisa ro sakit ku Lunes.', to: 'Kan-o nag-umpisa ro sakit?', alt: [], wrong: ['Hin-uno nag-umpisa ro sakit?', 'Siin nag-umpisa ro sakit?', 'Kan-o mag-umpisa ro sakit?'], en: 'When did the illness start?', l: 'questions-ii', why: 'kan-o looks back, with the completed verb (Z p. 122).' },
  { id: 'tr-037', type: 'question', instr: 'Ask when he will come back (future).', from: 'Magabalik imaw sa Lunes.', to: 'Hin-uno imaw mabalik?', alt: ['Hin-uno imaw magabalik?'], wrong: ['Kan-o imaw mabalik?', 'Siin imaw mabalik?', 'Hin-uno imaw nagbalik?'], en: 'When will he come back?', l: 'questions-ii', why: 'hin-uno looks forward. ◌' },
  { id: 'tr-038', type: 'question', instr: 'Ask who brought him.', from: 'Si Maria ro nagdaea kana riya.', to: 'Sin-o ro nagdaea kana riya?', alt: [], wrong: ['Ano ro nagdaea kana riya?', 'Siin ro nagdaea kana riya?', 'Sin-o ro gindaea kana riya?'], en: 'Who brought him here?', l: 'questions', why: 'sin-o replaces the name and keeps ro. ◌' },
  { id: 'tr-039', type: 'question', instr: 'Ask what he is doing (object focus).', from: 'Nagabasa imaw it libro.', to: 'Nano ro ginabasa na?', alt: ['Ano ro ginabasa na?', 'Nano ro anang ginabasa?', 'Ano ro anang ginabasa?'], wrong: ['Sa ano imaw nagabasa?', 'Nano imaw nagabasa?', 'Sin-o ro ginabasa na?'], en: 'What is he reading?', l: 'focus-ii', why: 'What-questions about the thing go in object focus: Nano ring ginabasa? (Z p. 85). *Sa ano ikaw nagabasa? is wrong.' },
  // ability
  { id: 'tr-040', type: 'ability', instr: 'Say you cannot.', from: 'Nagatueog ako.', to: 'Indi ako makatueog.', alt: [], wrong: ['Owa ako matueog.', 'Bukon ako makatueog.', 'Indi ako nakatueog.'], en: 'I cannot sleep.', l: 'mood', why: 'indi + maka- (Z p. 67).' },
  { id: 'tr-041', type: 'ability', instr: 'Ask whether she can still work (maka-).', from: 'Nagaobra pa imaw.', to: 'Makaobra pa imaw?', alt: [], wrong: ['Nakaobra pa imaw?', 'Magaobra pa imaw?', 'Indi imaw makaobra?'], en: 'Can she still work?', l: 'mood', why: 'maka- = can (not yet done); naka- = was able, managed. ◌' },
  { id: 'tr-042', type: 'ability', instr: 'Ask whether he was able to (naka-).', from: 'Nagtueog imaw kabii.', to: 'Nakatueog imaw kabii?', alt: [], wrong: ['Makatueog imaw kabii?', 'Nagatueog imaw kabii?', 'Owa imaw matueog kabii?'], en: 'Was he able to sleep last night?', l: 'mood', why: 'naka- = managed to (lesson mood). ◌' },
  // focus
  { id: 'tr-043', type: 'focus', instr: 'Put the thing bought in focus (gin-).', from: 'Nagbakae ro unga it isda.', to: 'Ginbakae ku unga ro isda.', alt: [], wrong: ['Ginbakae ro unga it isda.', 'Ginbakae ku unga it isda.', 'Nagbakae ku unga ro isda.'], en: 'The child bought the fish.', l: 'focus', why: 'Object focus: the fish takes ro, the doer ku (Z p. 33).' },
  { id: 'tr-044', type: 'focus', instr: 'Put the medicine in focus (gin-).', from: 'Nag-inom imaw it bueong.', to: 'Gin-inom na ro bueong.', alt: [], wrong: ['Gin-inom imaw ro bueong.', 'Gin-inom na it bueong.', 'Nag-inom na ro bueong.'], en: 'He took the medicine.', l: 'focus', why: 'The doer becomes the genitive na; the thing takes ro (cf. ginhimo na, Z p. 152). ◌' },
  { id: 'tr-045', type: 'focus', instr: 'Put the doer in focus (nag-).', from: 'Ginbakae ku tawo ro tinapay.', to: 'Nagbakae ro tawo it tinapay.', alt: [], wrong: ['Nagbakae ku tawo ro tinapay.', 'Nagbakae ro tawo ro tinapay.', 'Ginbakae ro tawo it tinapay.'], en: 'The man bought bread.', l: 'focus-ii', why: 'Actor focus: the doer takes ro, the thing it (Z pp. 77–79).' },
  { id: 'tr-046', type: 'focus', instr: 'Put the doer in focus (future).', from: 'Bakaeon ku tawo ro tinapay.', to: 'Ro tawo magabakae it tinapay.', alt: ['Magabakae ro tawo it tinapay.'], wrong: ['Magabakae ku tawo ro tinapay.', 'Nagbakae ro tawo it tinapay.', 'Bakaeon ro tawo it tinapay.'], en: 'The man will buy bread.', l: 'focus-ii', why: 'Zorc\'s own sentence (pp. 77–79): Ro tawo magabakae it tinapay.' }
];

window.WORD_PAIRS = [
  // opposites
  { id: 'wp-001', type: 'opp', a: 'mayad', ea: 'good', b: 'maeain', eb: 'bad' },
  { id: 'wp-002', type: 'opp', a: 'mainit', ea: 'hot', b: 'maeamig', eb: 'cold' },
  { id: 'wp-003', type: 'opp', a: 'buhi', ea: 'alive', b: 'patay', eb: 'dead' },
  { id: 'wp-004', type: 'opp', a: 'bag-o', ea: 'new', b: 'daan', eb: 'old (things)' },
  { id: 'wp-005', type: 'opp', a: 'mahae', ea: 'expensive', b: 'barato', eb: 'cheap' },
  { id: 'wp-006', type: 'opp', a: 'manggaranon', ea: 'rich', b: 'pobre', eb: 'poor' },
  { id: 'wp-007', type: 'opp', a: 'lingkod', ea: 'sit', b: 'tindog', eb: 'stand' },
  { id: 'wp-008', type: 'opp', a: 'umpisa', ea: 'begin', b: 'tapos', eb: 'finish' },
  { id: 'wp-009', type: 'opp', a: 'hambae', ea: 'speak', b: 'hipos', eb: 'keep quiet' },
  { id: 'wp-010', type: 'opp', a: 'sunod', ea: 'obey', b: 'ealis', eb: 'disobey' },
  { id: 'wp-011', type: 'opp', a: 'masinueundon', ea: 'obedient', b: 'bulingag', eb: 'stubborn' },
  { id: 'wp-012', type: 'opp', a: 'aga', ea: 'morning', b: 'gabii', eb: 'night' },
  { id: 'wp-013', type: 'opp', a: 'panganay', ea: 'eldest child', b: 'kamanghuran', eb: 'youngest child' },
  { id: 'wp-014', type: 'opp', a: 'daeaga', ea: 'young woman', b: 'binata', eb: 'young man' },
  { id: 'wp-015', type: 'opp', a: 'magueang', ea: 'elder sibling', b: 'manghod', eb: 'younger' },
  { id: 'wp-016', type: 'opp', a: 'kahapon', ea: 'yesterday', b: 'hin-aga', eb: 'tomorrow' },
  { id: 'wp-017', type: 'opp', a: 'permi', ea: 'always', b: 'taeagsa', eb: 'seldom' },
  { id: 'wp-018', type: 'opp', a: 'gutom', ea: 'be hungry', b: 'busog', eb: 'full (after eating)' },
  { id: 'wp-019', type: 'opp', a: 'dumdum', ea: 'remember', b: 'lipat', eb: 'forget' },
  { id: 'wp-020', type: 'opp', a: 'lipay', ea: 'joy', b: 'subo', eb: 'sadness' },
  { id: 'wp-021', type: 'opp', a: 'madali', ea: 'quick; easy', b: 'hinay', eb: 'slowly' },
  { id: 'wp-022', type: 'opp', a: 'tatay', ea: 'father', b: 'nanay', eb: 'mother' },
  // near-synonyms
  { id: 'wp-101', type: 'syn', a: 'puril', ea: 'lie, falsehood', b: 'lilong', eb: 'tell a lie, deceive', note: 'puril is the thing (a lie); lilong is the verb. butig is Hiligaynon.' },
  { id: 'wp-102', type: 'syn', a: 'tuman', ea: 'obey, oblige', b: 'sunod', eb: 'follow, obey', note: 'SR gives them as synonyms; sunod also means follow after (masunod = next).' },
  { id: 'wp-103', type: 'syn', a: 'bunae', ea: 'hit, beat', b: 'hampak', eb: 'spank, slap', note: 'bunae is any beating; hampak is the word for spanking a child (SR).' },
  { id: 'wp-104', type: 'syn', a: 'kalma', ea: 'calm (Spanish)', b: 'linong', eb: 'calm, peaceful', note: 'kalma is the Spanish loan; linong is native (SR).' },
  { id: 'wp-105', type: 'syn', a: 'silot', ea: 'punishment', b: 'kastigo', eb: 'punish (Spanish)', note: 'SR marks kastigo as Spanish, with Aklanon silot.' },
  { id: 'wp-106', type: 'syn', a: 'obra', ea: 'work (native use)', b: 'trabaho', eb: 'work, job', note: 'obra is the everyday Aklanon verb (nagaobra); trabaho is the noun for a job.' },
  { id: 'wp-107', type: 'syn', a: 'kan-on', ea: 'cooked rice', b: 'humay', eb: 'rice', note: 'kan-on is rice ready to eat (from kaon); humay is rice in general (SR).' },
  { id: 'wp-108', type: 'syn', a: 'makusog', ea: 'strong, full of energy', b: 'mabaskog', eb: 'strong; loud', note: 'mabaskog is also used of a loud voice.' },
  { id: 'wp-109', type: 'syn', a: 'mingaw', ea: 'lonely', b: 'hidlaw', eb: 'miss someone, be homesick', note: 'hidlaw is longing for a person or place; mingaw is low and lonely (Z p. 121).' },
  { id: 'wp-110', type: 'syn', a: 'hadlok', ea: 'fear', b: 'kueba', eb: 'nervousness, timidity', note: 'kueba is the nervous fear of the anxiety section; kulba is Hiligaynon.' },
  { id: 'wp-111', type: 'syn', a: 'eskwela', ea: 'schooling; student', b: 'eskwelahan', eb: 'school (the building)', note: 'SR glosses eskwela as student; Kalibo nagaeskwela = goes to school.' },
  // words that go together
  { id: 'wp-201', type: 'col', a: 'inom', ea: 'drink', b: 'it bueong', eb: 'some medicine', en: 'take medicine (nagainom it bueong)' },
  { id: 'wp-202', type: 'col', a: 'kaon', ea: 'eat', b: 'it kan-on', eb: 'some rice', en: 'eat rice (a meal)' },
  { id: 'wp-203', type: 'col', a: 'hueat', ea: 'wait', b: 'anay', eb: 'first, a moment', en: 'please wait' },
  { id: 'wp-204', type: 'col', a: 'saeamat', ea: 'thanks', b: 'gid', eb: 'very', en: 'thank you very much' },
  { id: 'wp-205', type: 'col', a: 'owa', ea: 'none; did not', b: 'pa', eb: 'yet', en: 'not yet' },
  { id: 'wp-206', type: 'col', a: 'tueog', ea: 'sleep', b: 'it mayad', eb: 'well', en: 'sleep well' },
  { id: 'wp-207', type: 'col', a: 'adlaw-adlaw', ea: 'every day', b: 'nga obra', eb: 'work (linked)', en: 'daily work' },
  { id: 'wp-208', type: 'col', a: 'masakit', ea: 'painful', b: 'ro ueo', eb: 'the head', en: 'the head hurts (Masakit ro ueo ko)' },
  { id: 'wp-209', type: 'col', a: 'imna', ea: 'drink it!', b: 'ro bueong', eb: 'the medicine', en: 'take the medicine (a command)' },
  { id: 'wp-210', type: 'col', a: 'hugasi', ea: 'wash!', b: 'ring alima', eb: 'your hands', en: 'wash your hands (Z p. 64)' },
  { id: 'wp-211', type: 'col', a: 'mayad', ea: 'good', b: 'nga aga', eb: 'morning (linked)', en: 'good morning' },
  { id: 'wp-212', type: 'col', a: 'ayaw', ea: 'don\'t', b: 'kahadlok', eb: 'be afraid', en: 'don\'t be afraid' }
];

window.DRILL_GAP_SETS = {
  foc: { title: 'Choose the focus', eyebrow: 'Verbs · 10 gaps', blurb: 'Nag- or gin-? -a, -i or i-? Who or what is the topic decides the verb.', intro: 'Each sentence needs a verb form. Look at what takes ro (the topic): the doer, the thing, the place or person affected, or the thing moved. Then choose the matching focus (Zorc pp. 55–89).', lesson: 'focus' },
  abl: { title: 'Can, could, happened to', eyebrow: 'Verbs · 10 gaps', blurb: 'maka- or naka-? And hi- for what happens by accident.', intro: 'maka- is can (not yet done), naka- is was able, managed, or has already; hi- is by chance (Zorc pp. 66–69, 123). After owa and indi the unreal maka- form is used.', lesson: 'mood' },
  caus: { title: 'Have someone do it (pa-)', eyebrow: 'Verbs · 8 gaps', blurb: 'Ipatawag, palingkora, pakaon: the causative pa-.', intro: 'pa- makes the topic a causer who has, lets or makes someone do the action (Zorc pp. 99–105). Choose the form that fits.', lesson: 'causative' },
  stat: { title: 'Feelings are verbs', eyebrow: 'Statives · 8 gaps', blurb: 'Nagutom, naakig, nasaktan: na- for how you feel now.', intro: 'Aklanon says feelings with stative verbs: na- + root for the state now or in the past, ma- for later, ka- for the noun (Zorc pp. 120–129). Tagalog adjectives like gutom are verbs here.', lesson: 'statives' },
  wb: { title: 'Build the word', eyebrow: 'Word building · 9 gaps', blurb: 'ig-, mag-, paea-, mang-, tag-: one root, many words.', intro: 'Choose the derived word that the sentence needs: a relative (ig-), a pair (mag-), a habit (paea-), an occupation (maNV-) or an origin (taga-), Zorc pp. 135–139.', lesson: 'word-building' },
  snd: { title: 'Squeezed words', eyebrow: 'Sounds · 8 gaps', blurb: 'imna, nasaktan, ring, pamahaw: roots that change shape.', intro: 'When an affix is added the root is squeezed (Zorc pp. 39–48), and markers fuse with pronouns (ro imong → ring). Choose the form a speaker actually says.', lesson: 'sound-changes' }
};

window.DRILL_GAPS.push(
  // focus
  { q: '____ ku unga ro isda.', en: 'The child bought the fish.', a: 'Ginbakae', opts: ['Ginbakae', 'Nagbakae'], set: 'foc', why: 'The fish takes ro and the doer ku: object focus, gin- (Z p. 33).' },
  { q: '____ ro unga it isda.', en: 'The child bought (some) fish.', a: 'Nagbakae', opts: ['Ginbakae', 'Nagbakae'], set: 'foc', why: 'The doer takes ro and the thing it: actor focus, nag-.' },
  { q: 'Nano ro imong ____?', en: 'What were you thinking?', a: 'ginhuna-huna', opts: ['ginhuna-huna', 'naghuna-huna'], set: 'foc', why: 'What-questions about the thing go in object focus (Z pp. 85–86). ◌' },
  { q: '____ ro imong manghod.', en: 'Watch your younger sibling.', a: 'Bantayi', opts: ['Bantayi', 'Bantaya', 'Magbantay'], set: 'foc', why: 'Zorc p. 86: Bantayi ro imong manghod; *Magbantay ka sa imong manghod is wrong.' },
  { q: '____ ring alima.', en: 'Wash your hands.', a: 'Hugasi', opts: ['Hugasi', 'Hugasa', 'Ihugas'], set: 'foc', why: 'Referent command -i: the hands are only partly affected (Z p. 64).' },
  { q: '____ ra.', en: 'Read this.', a: 'Basaha', opts: ['Basaha', 'Basahi', 'Ibasa'], set: 'foc', why: 'Object command -a (Z p. 68).' },
  { q: '____ mo ro unga.', en: 'Take the child there.', a: 'Ihatod', opts: ['Ihatod', 'Naghatod', 'Nagahatod'], set: 'foc', why: 'The one conveyed is the topic: instrument focus i- (Z p. 68).' },
  { q: 'Si George ro ____ it saging.', en: 'George was the one who ate the banana.', a: 'nagkaon', opts: ['nagkaon', 'kinaon', 'ginkaon'], set: 'foc', why: 'George is the topic (ro … the one who): actor focus (Z p. 84).' },
  { q: '____ ro saging.', en: 'The banana was eaten (by someone).', a: 'Kinaon', opts: ['Kinaon', 'Nagkaon', 'Nagakaon'], set: 'foc', why: 'Object focus with no actor named (Z p. 83).' },
  { q: 'Ro kwarta ____ it tinapay ku tawo para sa unga.', en: 'The money will be used by the man to buy bread for the child.', a: 'igabakae', opts: ['igabakae', 'magabakae', 'bakean'], set: 'foc', why: 'The instrument is the topic: iga- (Z p. 78).' },
  { q: 'Ro unga ____ it tinapay ku tawo ku kwarta.', en: 'The child will be bought bread by the man with the money.', a: 'bakean', opts: ['bakean', 'bakeon', 'igabakae'], set: 'foc', why: 'The beneficiary is the topic: referent -an (Z p. 79).' },
  { q: 'Ro tinapay ____ ku tawo para sa unga.', en: 'The bread will be bought by the man for the child.', a: 'bakeon', opts: ['bakeon', 'bakean', 'magabakae'], set: 'foc', why: 'The thing bought is the topic: object -on (Z p. 78).' },
  // ability and accident
  { q: 'Indi ako ____.', en: 'I cannot sleep.', a: 'makatueog', opts: ['makatueog', 'nakatueog', 'nagatueog'], set: 'abl', why: 'indi + maka- = cannot (Z p. 67).' },
  { q: '____ kamo kabii?', en: 'Were you able to sleep last night?', a: 'Nakatueog', opts: ['Nakatueog', 'Makatueog', 'Magatueog'], set: 'abl', why: 'naka- = managed to, was able (lesson mood). ◌' },
  { q: '____ ka?', en: 'Can you swim?', a: 'Makaeangoy', opts: ['Makaeangoy', 'Nakaeangoy', 'Nagaeangoy'], set: 'abl', why: 'Zorc p. 67: Makaeangoy ka?' },
  { q: '____ eon kamo?', en: 'Have you eaten already?', a: 'Nakakaon', opts: ['Nakakaon', 'Makakaon', 'Magakaon'], set: 'abl', why: 'naka- + eon = have already (Z p. 67).' },
  { q: 'Basi ____ ka.', en: 'You might forget.', a: 'hilipat', opts: ['hilipat', 'nakalipat', 'naglipat'], set: 'abl', why: 'hi- = by accident, often with basi (Z p. 123).' },
  { q: '____ kami ni Henry sa tindahan.', en: 'We ran into Henry at the market.', a: 'Nakasubeang', opts: ['Nakasubeang', 'Makasubeang', 'Nagasubeang'], set: 'abl', why: 'naka- for a chance encounter (Z p. 67).' },
  { q: '____ pa kamo?', en: 'Can you still work?', a: 'Makaobra', opts: ['Makaobra', 'Nakaobra', 'Magaobra'], set: 'abl', why: 'maka- = can, still possible. ◌' },
  { q: 'Owa ako ____ kabii.', en: 'I could not sleep last night.', a: 'makatueog', opts: ['makatueog', 'nakatueog', 'nagtueog'], set: 'abl', why: 'After owa the unreal form is used: owa + maka-. ◌' },
  // causative
  { q: '____ mo ro doktor.', en: 'Have the doctor called.', a: 'Ipatawag', opts: ['Ipatawag', 'Itawag', 'Nagtawag'], set: 'caus', why: 'Zorc p. 105: Ipatawag mo ro doktor.' },
  { q: '____ ro bisita.', en: 'Have the visitor sit down.', a: 'Palingkora', opts: ['Palingkora', 'Lingkora', 'Naglingkod'], set: 'caus', why: 'pa- + lingkod + -a, d → r (Z p. 102).' },
  { q: '____ imaw riya.', en: 'Have him come here.', a: 'Paadtuna', opts: ['Paadtuna', 'Adtuna', 'Nag-adto'], set: 'caus', why: 'Zorc pp. 102, 105.' },
  { q: 'Si Roney ____ sa anang mga igmanghod.', en: 'Roney made his brothers sing.', a: 'nagpakanta', opts: ['nagpakanta', 'nagkanta', 'ginkanta'], set: 'caus', why: 'The causer is the topic: nagpa- (Z p. 102).' },
  { q: '____ ako it baeay.', en: 'I will have a house built.', a: 'Magapaobra', opts: ['Magapaobra', 'Magaobra', 'Nagpaobra'], set: 'caus', why: 'maga- + pa- + obra (Z p. 99).' },
  { q: '____ ko kamo sa ospital.', en: 'I will send you to the hospital.', a: 'Ipadaea', opts: ['Ipadaea', 'Idaea', 'Gindaea'], set: 'caus', why: 'padaea = send (Z p. 99); i- puts the one sent in focus. ◌' },
  { q: '____ eon kami.', en: 'We are going home now.', a: 'Pauli', opts: ['Pauli', 'Pakaon', 'Pakita'], set: 'caus', why: 'pa- + place or direction = go there: pauli go home (Z p. 105).' },
  { q: '____ ninyo ro eapsag.', en: 'Feed the baby.', a: 'Pakaona', opts: ['Pakaona', 'Kaona', 'Pakita'], set: 'caus', why: 'pakaon = feed (pa + kaon, Z p. 99), command -a. ◌' },
  // statives
  { q: '____ ako.', en: 'I\'m hungry.', a: 'Nagutom', opts: ['Nagutom', 'Gutom', 'Magutom'], set: 'stat', why: 'Tagalog Gutom ako is Aklanon Nagutom ako (Z p. 121).' },
  { q: '____ ako sa akong igkampud.', en: 'I\'m angry with my cousin.', a: 'Naakig', opts: ['Naakig', 'Akig', 'Maakig'], set: 'stat', why: 'Zorc p. 123.' },
  { q: '____ ako it duro ku imong ginhambae.', en: 'I was deeply hurt by what you said.', a: 'Nasaktan', opts: ['Nasaktan', 'Masakit', 'Kasakit'], set: 'stat', why: 'sakit + -an squeezes to nasaktan (Z p. 128).' },
  { q: '____ ako.', en: 'I feel like crying.', a: 'Natagtangis', opts: ['Natagtangis', 'Nagtangis', 'Matangis'], set: 'stat', why: 'tag- = feel like (Z p. 128).' },
  { q: 'Kan-o ikaw ____?', en: 'When were you born?', a: 'natawo', opts: ['natawo', 'nagtawo', 'matawo'], set: 'stat', why: 'Zorc p. 123.' },
  { q: '____ kamo?', en: 'Are you sad?', a: 'Nasubo', opts: ['Nasubo', 'Masubo', 'Kasubo'], set: 'stat', why: 'na- for the state now; kasubo is the noun, sorrow. ◌' },
  { q: 'Owa imaw ____.', en: 'He is not thirsty.', a: 'giohawa', opts: ['giohawa', 'naohaw', 'maohaw'], set: 'stat', why: 'owa + gi-…-a for a present state (Z p. 122).' },
  { q: 'Owa ako it ____.', en: 'I have no fear.', a: 'kahadlok', opts: ['kahadlok', 'nahadlok', 'mahadlok'], set: 'stat', why: 'After owa … it, the ka- noun (lesson statives). ◌' },
  // word building
  { q: 'Pila kamo ____?', en: 'How many brothers and sisters are you?', a: 'magmaeanghod', opts: ['magmaeanghod', 'igmanghod', 'manghod'], set: 'wb', why: 'mag- + -eV- for three or more related (Z p. 194).' },
  { q: 'Naakig ako sa akong ____.', en: 'I\'m angry with my cousin.', a: 'igkampud', opts: ['igkampud', 'magkampud', 'kampud'], set: 'wb', why: 'ig- = one relative; magkampud = (two) cousins (Z pp. 111, 123).' },
  { q: '____ sanda.', en: 'They are friends.', a: 'Mag-amigo', opts: ['Mag-amigo', 'Igamigo', 'Amigo'], set: 'wb', why: 'mag- + a relation = are (related as) (SR: Mag-amigo sanda).' },
  { q: '____ ro anang tatay.', en: 'His father is a fisherman.', a: 'Mangingisda', opts: ['Mangingisda', 'Nagpangisda', 'Isda'], set: 'wb', why: 'maNV- = occupation (Z p. 109). ◌' },
  { q: '____ imaw.', en: 'He is a glutton.', a: 'Paeakaon', opts: ['Paeakaon', 'Pagkaon', 'Kan-on'], set: 'wb', why: 'paea- = habitual person (Tagalog pala-), Z p. 138. ◌' },
  { q: '____ imaw.', en: 'He is easily angered.', a: 'Paeaugot', opts: ['Paeaugot', 'Naakig', 'Kaakig'], set: 'wb', why: 'paea- + ugot (Z p. 138). ◌' },
  { q: 'Mayad ro anang ____?', en: 'Is his appetite good?', a: 'pagkaon', opts: ['pagkaon', 'paeakaon', 'kan-on'], set: 'wb', why: 'pag- = the act of: pagkaon eating, food (Z p. 135). ◌' },
  { q: '____ ka?', en: 'Are you from here?', a: 'Tagariya', opts: ['Tagariya', 'Tagbaeay', 'Igbata'], set: 'wb', why: 'taga- = from (Z p. 139). ◌' },
  { q: 'Nakapapati imaw kakon nga may kapuslanan rong ____.', en: 'He made me believe that sufferings have value.', a: 'kalisdanan', opts: ['kalisdanan', 'pangalisod', 'nalisdan'], set: 'wb', why: 'ka-…-anan = collective (Z p. 67).' },
  // sound changes
  { q: '____ ro bueong.', en: 'Drink the medicine.', a: 'Imna', opts: ['Imna', 'Inoma', 'Inuma'], set: 'snd', why: 'inom + -a → imna: vowel dropped, consonants swap (Z p. 45; SR).' },
  { q: 'Nano ____ ginaobra?', en: 'What are you doing?', a: 'ring', opts: ['ring', 'rang', 'raa'], set: 'snd', why: 'ring = ro imong (Z p. 44).' },
  { q: '____ unga masakit.', en: 'My child is sick.', a: 'Rang', opts: ['Rang', 'Ring', 'Raa'], set: 'snd', why: 'rang = ro akong (Z p. 44). ◌' },
  { q: '____ ako it duro.', en: 'I was deeply hurt.', a: 'Nasaktan', opts: ['Nasaktan', 'Nasakitan', 'Nasakit-an'], set: 'snd', why: 'The last vowel of the root drops before -an (Z pp. 40–41, 128).' },
  { q: 'Kaon ta it ____.', en: 'Let\'s eat rice.', a: 'kan-on', opts: ['kan-on', 'kaunon', 'kaon'], set: 'snd', why: 'kaon + -on → kan-on, cooked rice (Z p. 45). ◌' },
  { q: 'Ano ro inyong ____?', en: 'What do you have for breakfast?', a: 'pamahaw', opts: ['pamahaw', 'pangbahaw', 'bahaw'], set: 'snd', why: 'pang + bahaw → pamahaw (Z p. 42). ◌' },
  { q: 'Owa it ____.', en: 'You\'re welcome.', a: 'anoman', opts: ['anoman', 'ano', 'saeamat'], set: 'snd', why: 'Owa it anoman, said "uwa t anuman" (Z p. 43).' }
);

// Gap items written without `full` get it from q + a (the engine and the checker expect it).
window.DRILL_GAPS.forEach((g) => { if (!g.full) g.full = g.q.replace('____', g.a); });

/* More items for the 0.2.6 drills. */
window.DRILL_CLOZE.push(
  { q: 'Gindaea ninyo imaw ____ kurandero?', en: 'Did you take him to a healer?', a: 'sa', set: 'm', why: 'The place or person gone to takes sa. ◌' },
  { q: 'Ano ro ngaean ____ inyong unga?', en: 'What is your child\'s name?', a: 'ku', set: 'm', why: 'A definite owner after the noun takes ku (Z p. 155).' },
  { q: 'May eagnat ____ unga?', en: 'Does the child have a fever?', a: 'ro', set: 'm', why: 'With may, the one who has takes ro (Z p. 198). ◌' },
  { q: 'Nagainom imaw ____ alak?', en: 'Does he drink liquor?', a: 'it', set: 'm', why: 'An indefinite object of an actor-focus verb: it. ◌' },
  { q: 'Ginsunlog imaw ____ iba nga unga.', en: 'The other children teased him.', a: 'ku', set: 'm', why: 'The doer of a gin- verb, a common noun: ku. ◌' },
  { q: 'Ro anang lola ____ nagaatipan kana.', en: 'His grandmother is the one who looks after him.', a: 'ro', set: 'm', why: 'X ro nagaatipan: the one who … takes ro. ◌' },
  { q: 'Nakahambae eon ako ____ maestra.', en: 'I already spoke to the teacher.', a: 'sa', set: 'm', why: 'SR ~p. 252: Nakahambae eon ako sa maestra.' },
  { q: 'Daeha ron ____ Nanay.', en: 'Bring that to Mother.', a: 'kay', set: 'n', why: 'SR: Daeha ron kay Nanay.' },
  { q: 'Ginpabakae ____ Nanay si Lito it dulsi.', en: 'Mother had Lito buy candy.', a: 'ni', set: 'n', why: 'The causer, a title, not in focus: ni (Z p. 104).' },
  { q: 'Nagpabakae ____ Nanay kay Lito it dulsi.', en: 'Mother had Lito buy candy.', a: 'si', set: 'n', why: 'The causer in focus, a title: si (Z p. 104).' }
);

window.DRILL_BUILD.push(
  { en: 'Can you still work?', t: ['Makaobra', 'pa', 'kamo'], end: '?', why: 'pa follows the verb; the two-syllable pronoun may come last. ◌' },
  { en: 'Drink the medicine every morning.', t: ['Imna', 'ro', 'bueong', 'kada', 'aga'], end: '.', why: 'Command first, then the topic, then the time (SR). ◌' },
  { en: 'Have the doctor called.', t: ['Ipatawag', 'mo', 'ro', 'doktor'], end: '.', why: 'Zorc p. 105: the genitive mo right after the verb.' },
  { en: 'I was deeply hurt by what you said.', t: ['Nasaktan', 'ako', 'it', 'duro', 'ku', 'imong', 'ginhambae'], end: '.', why: 'Zorc p. 128.' },
  { en: 'What grade are you in?', t: ['Sa', 'ano', 'ka', 'nga', 'grado'], end: '?', why: 'SR ~p. 198: ka moves up after the first phrase.' },
  { en: 'Don\'t be afraid.', t: ['Ayaw', 'kahadlok'], end: '.', why: 'ayaw + ka- form. ◌' },
  { en: 'The man will buy bread.', t: ['Ro', 'tawo', 'magabakae', 'it', 'tinapay'], end: '.', why: 'Zorc pp. 77–79 (Magabakae ro tawo it tinapay is also correct).' },
  { en: 'Who looks after him?', t: ['Sin-o', 'ro', 'nagaatipan', 'kana'], end: '?', why: 'sin-o ro + verb: who is the one who … ◌' }
);

window.DRILL_ERRORS.push(
  { bad: 'Gutom ako.', i: [0], fix: 'Nagutom ako.', en: 'I\'m hungry.', set: 'x', why: 'Tagalog says gutom ako; Aklanon feelings are stative verbs: nagutom (Z p. 121).' },
  { bad: 'Pagod imaw.', i: [0], fix: 'Nagaoy imaw.', en: 'He is tired.', set: 'x', why: 'pagod is Tagalog, kapoy Hiligaynon; Aklanon nagaoy (Z p. 122).' },
  { bad: 'Kaklase ko imaw.', i: [0], fix: 'Isigkaklasi ko imaw.', en: 'He is my classmate.', set: 'x', why: 'Zorc gives isigkaklasi, with isigka- = fellow (p. 136).' },
  { bad: 'Nagbuntis imaw.', i: [0], fix: 'Mabdos imaw.', en: 'She is pregnant.', set: 'x', why: 'buntis is Tagalog; SR marks it with Akl: mabdos.' },
  { bad: 'Ginsakit imaw ku anang tatay.', i: [0], fix: 'Ginbunae imaw ku anang tatay.', en: 'His father beat him.', set: 'v', why: 'For hitting, bunae or hampak; ginsakit is not the beating verb. ◌' },
  { bad: 'Sa ano ikaw nagabasa?', i: [3], fix: 'Nano ring ginabasa?', en: 'What are you reading?', set: 'v', why: 'Zorc p. 85: what-questions about the thing are object focus. The actor-focus question is wrong.' },
  { bad: 'Magbantay ka sa imong manghod.', i: [0], fix: 'Bantayi ro imong manghod.', en: 'Watch your younger sibling.', set: 'v', why: 'Zorc p. 86: an idiom that must be referent focus.' },
  { bad: 'Palingkoda ro bisita.', i: [0], fix: 'Palingkora ro bisita.', en: 'Have the visitor sit down.', set: 'v', why: 'd becomes r before a suffix (Z pp. 44, 102).' },
  { bad: 'Inomon mo ro bueong.', i: [0], fix: 'Imnon mo ro bueong.', en: 'Take the medicine (later).', set: 'v', why: 'inom + -on squeezes to imnon (Z p. 45).' },
  { bad: 'Pila ka grado ka?', i: [0], fix: 'Sa ano ka nga grado?', en: 'What grade are you in?', set: 'o', why: 'SR ~p. 198: Sa ano ka nga grado? A grade is asked with ano, not pila.' }
);

window.DRILL_TRANSLATE.push(
  { en: 'How old is your child?', akl: ['Pila ro idad ku imong unga?', 'Pila ro idad ku inyong unga?', 'Pila eon ro idad ku imong unga?', 'Pila eon ro idad ku inyong unga?'], set: 'w' },
  { en: 'Is he going to school?', akl: ['Nagaeskwela imaw?', 'Nagaeskwela pa imaw?'], set: 'w' },
  { en: 'Does he have friends?', akl: ['May amigo imaw?', 'May mga amigo imaw?'], set: 'w' },
  { en: 'Wait outside for a while.', akl: ['Hueat anay sa gwa.', 'Hueat anay kamo sa gwa.', 'Hueat kamo anay sa gwa.', 'Hueat anay ka sa gwa.'], set: 'w' },
  { en: 'It is not your fault.', akl: ['Owa ka it saea.', 'Owa kamo it saea.'], set: 'w' },
  { en: 'I\'m hungry.', akl: ['Nagutom ako.'], set: 'e' },
  { en: 'Have the doctor called.', akl: ['Ipatawag mo ro doktor.', 'Ipatawag ninyo ro doktor.'], set: 'w' },
  { en: 'Wash your hands.', akl: ['Hugasi ring alima.', 'Hugasi ro imong alima.', 'Hugasi ro inyong alima.'], set: 'e' },
  { en: 'Don\'t shout.', akl: ['Ayaw it singgit.', 'Ayaw magsinggit.', 'Ayaw kamo magsinggit.', 'Ayaw ka magsinggit.'], set: 'w' },
  { en: 'Can you swim?', akl: ['Makaeangoy ka?', 'Makaeangoy kamo?'], set: 'e' }
);

/* Hand-written "Practise a lesson" for lessons that had no items. */
window.LESSON_GAPS = Object.assign(window.LESSON_GAPS || {}, {
  focus: window.DRILL_GAPS.filter((g) => g.set === 'foc').slice(0, 9),
  'focus-ii': window.DRILL_GAPS.filter((g) => g.set === 'foc').slice(7),
  'word-building': window.DRILL_GAPS.filter((g) => g.set === 'wb'),
  'sound-changes': window.DRILL_GAPS.filter((g) => g.set === 'snd'),
  'verbs-iii': [
    { q: '____ sanda kabi-i.', en: 'They fished last night.', a: 'Nagpangisda', opts: ['Nagpangisda', 'Mangingisda', 'Nagaisda'], why: 'Distributive pang- (Z p. 107).' },
    { q: '____ kami it uean.', en: 'We are praying for rain.', a: 'Nagapangamuyo', opts: ['Nagapangamuyo', 'Pangamuyo', 'Nagaamuyo'], why: 'pang- + amuyo, ongoing naga- (Z p. 107).' },
    { q: 'Buot nakon kunta ____.', en: 'I wanted to become a priest.', a: 'magingpari', opts: ['magingpari', 'nagingpari', 'pari'], why: 'maging- = become; unreal after kunta (Z p. 111).' },
    { q: '____ imaw kakon.', en: 'He is with me in my joy.', a: 'Nakighibayag', opts: ['Nakighibayag', 'Naghibayag', 'Hibayag'], why: 'makig- / nakig- = share in (Z p. 113).' },
    { q: 'Ayaw ____.', en: 'Don\'t be naughty.', a: 'maglinahog', opts: ['maglinahog', 'eahog', 'nageahog'], why: 'Zorc p. 114: e → l next to -in-.' },
    { q: '____ sanda sa gutom.', en: 'They were all dying from hunger.', a: 'Nagkaeamatay', opts: ['Nagkaeamatay', 'Nagpatay', 'Patay'], why: 'ka- + -eV- = all of them, kept on (Z p. 118).' },
    { q: 'Ipangsugid mo ____ ro hatabo.', en: 'Tell them everything that happened.', a: 'kanda', opts: ['kanda', 'sanda', 'nanda'], why: 'Zorc p. 107; to them = kanda.' }
  ],
  sounds: [
    { q: '____ gid.', en: 'Thank you very much.', a: 'Saeamat', opts: ['Saeamat', 'Salamat'], why: 'The l between vowels is the e sound in Aklanon: saeamat.' },
    { q: 'Masakit ro ____ ko.', en: 'My head hurts.', a: 'ueo', opts: ['ueo', 'ulo'], why: 'Head is ueo; ulo is a different, vulgar word in SR.' },
    { q: 'Riya ro akong ____.', en: 'Here is my house.', a: 'baeay', opts: ['baeay', 'balay'], why: 'balay is Hiligaynon spelling; Aklanon baeay.' },
    { q: 'Indi ako ____.', en: 'I cannot sleep.', a: 'makatueog', opts: ['makatueog', 'makatulog'], why: 'tulog → tueog.' },
    { q: '____ anay.', en: 'Please wait.', a: 'Hueat', opts: ['Hueat', 'Hulat'], why: 'hulat → hueat.' },
    { q: '____ lang ako sa baeay.', en: 'I am alone at home.', a: 'Isaea', opts: ['Isaea', 'Isala'], why: 'isala → isaea (one, alone). ◌' }
  ],
  pronunciation: [
    { q: '____ nag-umpisa?', en: 'When did it start?', a: 'Kan-o', opts: ['Kan-o', 'Kano'], why: 'The hyphen is a glottal stop: kan-o = when; kano is an American.' },
    { q: 'Pila eon ka ____?', en: 'How many years now?', a: 'dag-on', opts: ['dag-on', 'dagon'], why: 'dag-on = year, with a glottal stop.' },
    { q: '____ ka tawo.', en: 'four people', a: 'Ap-at', opts: ['Ap-at', 'Apat'], why: 'ap-at (Z p. 59): the glottal stop is written with a hyphen.' },
    { q: '____ ka adlaw.', en: 'six days', a: 'An-om', opts: ['An-om', 'Anom'], why: 'an-om = six (Z p. 59).' },
    { q: 'Mas mayad eon kamo, ukon mas ____?', en: 'Are you better now, or worse?', a: 'maeain', opts: ['maeain', 'malain'], why: 'The l between vowels is e: maeain.' }
  ]
});
