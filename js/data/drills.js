/* Aklanon drill content (0.2.6). View: js/drills.js (#/drills), js/vocab.js (#/vocab), handouts in js/grammar-handout.js.
   DRAFT: written by Claude from the lessons, every sentence built from attested words; (Z p. N) = the sentence or its
   pattern is in Zorc & de la Cruz 1968; ◌ = author's sentence on an attested pattern. Unreviewed by a native speaker.
   Structures:
     DRILL_CLOZE_SETS  { setId: { title, opts: [markers], lesson } }
     DRILL_CLOZE       [{ q (one ____), en, a, set, why }]
     DRILL_BUILD       [{ en, t: [tiles in model order], end, alt?: [[other accepted orders, same tiles]], why }]
     DRILL_ERRORS      [{ bad, i: [index of the wrong word in bad.split(' ')], fix, en, set, why }]
                       sets: m markers and pronouns · o small words · v verb forms · x Tagalog or Hiligaynon slips
     DRILL_TRANSLATE   [{ en, akl: [accepted answers], set }]   sets: e everyday · w on the ward
     DRILL_GAPS        [{ q (one ____), en, a, opts, full, set, why }]   sets: neg · pn · qw · pt · asp
     AKL_CLOSED        { group: [words] } closed-class words the lesson-practice generator may blank
     AKL_LESSON_GROUP  { lessonId: [groups] } which groups to prefer for a lesson
   Items are keyed by their text: edit or reorder freely. */
window.DRILL_CLOZE_SETS = {
  m: { title: 'Ro, ku, it, sa', opts: ['ro', 'ku', 'it', 'sa'], lesson: 'markers' },
  n: { title: 'Si, ni, kay', opts: ['si', 'ni', 'kay'], lesson: 'markers' }
};
window.DRILL_CLOZE = [
  { q: 'Ginbakae ____ unga ro isda.', en: 'The child bought the fish.', a: 'ku', set: 'm', why: 'A definite doer of an object-focus verb takes ku (Z p. 33). Tagalog would use ng.' },
  { q: 'Ginbakae ku unga ____ isda.', en: 'The child bought the fish.', a: 'ro', set: 'm', why: 'Object focus (gin-): the thing bought is the topic, so it takes ro (Z p. 33).' },
  { q: 'Owa ako ____ kwarta.', en: 'I have no money.', a: 'it', set: 'm', why: 'An indefinite object (any money) takes it. ◌' },
  { q: 'Nagainom ka ____ bueong?', en: 'Are you taking medicine?', a: 'it', set: 'm', why: 'With an actor-focus verb, an indefinite object takes it. ◌' },
  { q: 'Imnon mo ____ bueong?', en: 'Will you take the medicine?', a: 'ro', set: 'm', why: 'Object focus (-on): the medicine is the topic, so ro. ◌' },
  { q: 'Maadto ako ____ Kalibo.', en: 'I will go to Kalibo.', a: 'sa', set: 'm', why: 'Place and direction take sa, as in Tagalog (Z p. 61).' },
  { q: 'Ano ____ ngaean mo?', en: 'What is your name?', a: 'ro', set: 'm', why: 'The topic after a question word takes ro (Tagalog ang). ◌' },
  { q: 'Nag-abot imaw kahapon ____ hapon.', en: 'He arrived yesterday afternoon.', a: 'it', set: 'm', why: 'kahapon it hapon: a time within a day takes it (Z p. 165).' },
  { q: 'Ihatod mo ____ unga.', en: 'Take the child (there).', a: 'ro', set: 'm', why: 'Instrument focus (i-): the one conveyed is the topic, ro (Z p. 68).' },
  { q: 'Permi ako nagakaon ____ humay.', en: 'I always eat rice.', a: 'it', set: 'm', why: 'Indefinite object of an actor-focus verb: it (SR ~p. 16).' },
  { q: 'Riya kita ____ ospital.', en: 'We are here at the hospital.', a: 'sa', set: 'm', why: 'Location takes sa. ◌' },
  { q: 'Imaw ____ asawa ko.', en: 'He (she) is my spouse.', a: 'ro', set: 'm', why: 'The topic of an identifying sentence takes ro (lesson 3).' },
  { q: 'Siin ____ sakit?', en: 'Where is the pain?', a: 'ro', set: 'm', why: 'The topic after siin takes ro. ◌' },
  { q: 'Raya ro baeay ____ doktor.', en: 'This is the doctor\'s house.', a: 'ku', set: 'm', why: 'A definite owner takes ku (baeay ku doktor). ◌' },
  { q: 'Itao mo ____ Nanay.', en: 'Give it to Mother.', a: 'kay', set: 'n', why: 'A person who receives something takes kay, as in Tagalog. ◌' },
  { q: 'Raya ro baeay ____ Doktora.', en: 'This is the doctor\'s house (a woman doctor, by title).', a: 'ni', set: 'n', why: 'The owner, when it is a name or title, takes ni (Z p. 152).' },
  { q: 'Ginbakae ____ Pedro ro isda.', en: 'Pedro bought the fish.', a: 'ni', set: 'n', why: 'The doer of an object-focus verb, when it is a name, takes ni. ◌' },
  { q: 'Nag-abot eon ____ Nanay.', en: 'Mother has arrived.', a: 'si', set: 'n', why: 'A name or title as the topic takes si. ◌' },
  { q: 'Isugid mo raya ____ Tatay.', en: 'Tell this to Father.', a: 'kay', set: 'n', why: 'The person told takes kay. ◌' },
  { q: '____ Maria ro nagdaea kana riya.', en: 'Maria is the one who brought him here.', a: 'Si', set: 'n', why: 'A name as topic: si. ◌' }
];

window.DRILL_BUILD = [
  { en: 'Have you eaten already?', t: ['Nakakaon', 'ka', 'eon'], end: '?', why: 'The short pronoun ka sits right after the verb, then eon (Z p. 66, 204).' },
  { en: 'Have you eaten already? (respectful)', t: ['Nakakaon', 'eon', 'kamo'], end: '?', alt: [['Nakakaon', 'kamo', 'eon']], why: 'Zorc writes Nakakaon eon kamo? (p. 66): a two-syllable pronoun may follow the particle.' },
  { en: 'Please sit down.', t: ['Lingkod', 'anay', 'kamo'], end: '.', why: 'anay softens the request (Z p. 68).' },
  { en: 'I did not go to church yesterday.', t: ['Owa', 'ako', 'magsimba', 'kahapon'], end: '.', why: 'owa, then the pronoun, then the bare mag- verb (Z p. 64).' },
  { en: 'I will not eat.', t: ['Indi', 'ako', 'magkaon'], end: '.', why: 'indi for the future, with the bare mag- verb (Z p. 61).' },
  { en: 'He is not a doctor.', t: ['Bukon', 'it', 'doktor', 'imaw'], end: '.', why: 'bukon negates a noun; the noun takes it (Z p. 174).' },
  { en: 'What is your name?', t: ['Ano', 'ro', 'ngaean', 'mo'], end: '?', why: 'Question word, ro, the noun, then the owner mo.' },
  { en: 'Where are you going?', t: ['Siin', 'ka', 'gaadto'], end: '?', why: 'ka comes right after the first word, siin (Z p. 117).' },
  { en: 'When did the illness start?', t: ['Kan-o', 'nag-umpisa', 'ro', 'sakit'], end: '?', why: 'kan-o (past) with the completed verb; the topic last. ◌' },
  { en: 'There is none at all now.', t: ['Owa', 'gid', 'eon'], end: '.', why: 'gid before eon (cf. Z p. 205).' },
  { en: 'Do this first.', t: ['Obraha', 'anay', 'raya'], end: '.', why: 'Object-focus command, anay, then the object raya (Z p. 200).' },
  { en: 'I cannot sleep.', t: ['Indi', 'ako', 'makatueog'], end: '.', why: 'indi + maka- for cannot. ◌' },
  { en: 'Is he still there?', t: ['Una', 'pa', 'imaw'], end: '?', why: 'pa (still) follows the first word (Z p. 201).' },
  { en: 'I am better now.', t: ['Mayad', 'eon', 'ako'], end: '.', alt: [['Mayad', 'ako', 'eon']], why: 'Particles and the pronoun follow the first word. ◌' }
];

window.DRILL_ERRORS = [
  // Tagalog or Hiligaynon slips: the commonest errors for this learner
  { bad: 'Salamat gid.', i: [0], fix: 'Saeamat gid.', en: 'Thank you very much.', set: 'x', why: 'salamat is Hiligaynon and Tagalog; Aklanon has e for the l between vowels: saeamat.' },
  { bad: 'Siya ro asawa ko.', i: [0], fix: 'Imaw ro asawa ko.', en: 'He (she) is my spouse.', set: 'x', why: 'The Aklanon third person is imaw, not siya.' },
  { bad: 'Hindi ako magkaon.', i: [0], fix: 'Indi ako magkaon.', en: 'I will not eat.', set: 'x', why: 'Tagalog hindi is Aklanon indi (Z p. 61).' },
  { bad: 'Wala ako it kwarta.', i: [0], fix: 'Owa ako it kwarta.', en: 'I have no money.', set: 'x', why: 'Tagalog wala is Aklanon owa.' },
  { bad: 'Kan-o nagsugod ro sakit?', i: [1], fix: 'Kan-o nag-umpisa ro sakit?', en: 'When did the illness start?', set: 'x', why: 'sugod means enter in Aklanon (Zorc); start is umpisa (SR). The start sense is Hiligaynon.' },
  { bad: 'Kapoy eon ako.', i: [0], fix: 'Gaoy eon ako.', en: 'I am tired now.', set: 'x', why: 'kapoy is Hiligaynon; Aklanon tired is gaoy (SR).' },
  { bad: 'Madamo ro trabaho.', i: [0], fix: 'Abo ro trabaho.', en: 'There is a lot of work.', set: 'x', why: 'madamo is Hiligaynon; Aklanon many, much is abo (SR).' },
  { bad: 'Lingkod dito.', i: [1], fix: 'Lingkod riya.', en: 'Sit here.', set: 'x', why: 'Tagalog dito is Aklanon riya. Careful: Aklanon rito means there, far.' },
  { bad: 'Pila ka baso ro imong nainom?', i: [2], fix: 'Pila ka bote ro imong nainom?', en: 'How many bottles did you drink?', set: 'x', why: 'In Aklanon baso means foolish (SR); count drinks in bote or tagayan.' },
  { bad: 'Nabuong ro bote.', i: [0], fix: 'Nabasag ro bote.', en: 'The bottle broke.', set: 'x', why: 'buong (break) is Hiligaynon; Aklanon uses basag or pusa\' (SR).' },
  // markers and pronouns
  { bad: 'Rito ro sakit.', i: [0], fix: 'Riya ro sakit.', en: 'The pain is here.', set: 'm', why: 'riya is here; rito is there, far away. The false friend for Tagalog dito.' },
  { bad: 'Owa ako ro kwarta.', i: [2], fix: 'Owa ako it kwarta.', en: 'I have no money.', set: 'm', why: 'An indefinite object takes it, not the topic marker ro.' },
  { bad: 'Itao mo sa Nanay.', i: [2], fix: 'Itao mo kay Nanay.', en: 'Give it to Mother.', set: 'm', why: 'Names and titles take kay, not sa.' },
  { bad: 'Ano ro ngaean kamo, Nay?', i: [3], fix: 'Ano ro ngaean ninyo, Nay?', en: 'What is your name, ma\'am?', set: 'm', why: 'The owner takes the genitive ninyo; kamo is the topic form.' },
  { bad: 'Masakit ro ueo ako.', i: [3], fix: 'Masakit ro ueo ko.', en: 'My head hurts.', set: 'm', why: 'After a noun the owner is ko, not the topic form ako.' },
  // small words
  { bad: 'Owa eon.', i: [1], fix: 'Owa pa.', en: 'Not yet.', set: 'o', why: 'pa is yet, still; owa eon means not any more.' },
  { bad: 'Ako gid.', i: [1], fix: 'Ako man.', en: 'Me too.', set: 'o', why: 'man is also, too (Tagalog din); gid is really, very.' },
  { bad: 'Lingkod pa kamo.', i: [1], fix: 'Lingkod anay kamo.', en: 'Please sit down.', set: 'o', why: 'anay softens a request (Z p. 68); pa means still.' },
  // verb forms
  { bad: 'Owa ako nagsimba kahapon.', i: [2], fix: 'Owa ako magsimba kahapon.', en: 'I did not go to church yesterday.', set: 'v', why: 'After owa the verb takes the bare mag- form (Z p. 64).' },
  { bad: 'Indi ako nagkaon.', i: [2], fix: 'Indi ako magkaon.', en: 'I will not eat.', set: 'v', why: 'After indi the verb takes the bare mag- form (Z p. 61).' },
  { bad: 'Gusto ko nagkaon.', i: [2], fix: 'Gusto ko magkaon.', en: 'I want to eat.', set: 'v', why: 'After gusto the verb is bare: magkaon. ◌' },
  { bad: 'Masakit ro ulo ko.', i: [2], fix: 'Masakit ro ueo ko.', en: 'My head hurts.', set: 'x', why: 'Head is ueo in Aklanon (the l between vowels becomes e); ulo is a different, vulgar word in SR.' },
  { bad: 'Kumain eon ako.', i: [0], fix: 'Nagkaon eon ako.', en: 'I have eaten.', set: 'v', why: '-um- does not exist in current Aklanon (Zorc); use nag- with the root kaon.' }
];

window.DRILL_TRANSLATE = [
  { en: 'Have you eaten?', akl: ['Nakakaon ka eon?', 'Nakakaon eon kamo?', 'Nakakaon kamo eon?', 'Nakakaon eon ka?', 'Nagkaon ka eon?'], set: 'e' },
  { en: 'Not yet.', akl: ['Owa pa.', 'Owa pa gid.'], set: 'e' },
  { en: 'Thank you very much.', akl: ['Saeamat gid.', 'Saeamat gid kinyo.', 'Saeamat gid kimo.'], set: 'e' },
  { en: 'I don\'t know.', akl: ['Indi ko maman-an.', 'Ta-o ko.'], set: 'e' },
  { en: 'Please sit down.', akl: ['Lingkod anay kamo.', 'Lingkod anay.', 'Lingkod kamo anay.', 'Lingkod anay ka.'], set: 'e' },
  { en: 'Where do you live?', akl: ['Siin ka nagaistar?', 'Siin kamo nagaistar?'], set: 'e' },
  { en: 'What is your name?', akl: ['Ano ro ngaean mo?', 'Ano ro imong ngaean?', 'Sino ro imong ngaean?', 'Sin-o ro imong ngaean?', 'Ano ro ngaean ninyo?'], set: 'e' },
  { en: 'Me too.', akl: ['Ako man.'], set: 'e' },
  { en: 'I have no money.', akl: ['Owa ako it kwarta.'], set: 'e' },
  { en: 'Where are you going?', akl: ['Siin ka gaadto?', 'Siin ka nagaadto?', 'Siin kamo gaadto?'], set: 'e' },
  { en: 'When did it start?', akl: ['Kan-o nag-umpisa?', 'Kan-o raya nag-umpisa?', 'Kan-o nag-umpisa raya?'], set: 'w' },
  { en: 'Are you taking medicine?', akl: ['Nagainom ka it bueong?', 'Nagainom kamo it bueong?', 'May ginainom ka nga bueong?', 'May ginainom kamo nga bueong?'], set: 'w' },
  { en: 'Did you sleep last night?', akl: ['Nakatueog ka kabii?', 'Nakatueog kamo kabii?'], set: 'w' },
  { en: 'Don\'t be afraid.', akl: ['Ayaw kahadlok.', 'Ayaw kamo kahadlok.', 'Ayaw ka kahadlok.'], set: 'w' },
  { en: 'Please wait.', akl: ['Hueat anay.', 'Hueat anay kamo.', 'Hueat kamo anay.'], set: 'w' },
  { en: 'Where is the pain?', akl: ['Siin ro sakit?', 'Siin masakit?'], set: 'w' },
  { en: 'Point to the pain.', akl: ['Itudlo ro sakit.', 'Itudlo mo ro sakit.', 'Itudlo ninyo ro sakit.'], set: 'w' },
  { en: 'Who is with you?', akl: ['Sin-o ro kaibahan mo?', 'Sin-o ro kaibahan ninyo?'], set: 'w' },
  { en: 'I cannot sleep.', akl: ['Indi ako makatueog.'], set: 'w' },
  { en: 'Come back next week.', akl: ['Balik kamo sa masunod nga dominggo.', 'Balik ka sa masunod nga dominggo.', 'Balik kamo sa masunod nga semana.', 'Balik ka sa masunod nga semana.'], set: 'w' }
];

window.DRILL_GAPS = [
  // owa, indi, ayaw, bukon
  { q: '____ ako it kwarta.', en: 'I have no money.', a: 'Owa', opts: ['Owa', 'Indi', 'Ayaw', 'Bukon'], full: 'Owa ako it kwarta.', set: 'neg', why: 'Having none: owa (Tagalog wala).' },
  { q: '____ ako magkaon.', en: 'I will not eat.', a: 'Indi', opts: ['Owa', 'Indi', 'Ayaw', 'Bukon'], full: 'Indi ako magkaon.', set: 'neg', why: 'A future action: indi (Z p. 61).' },
  { q: '____ kahadlok.', en: 'Don\'t be afraid.', a: 'Ayaw', opts: ['Owa', 'Indi', 'Ayaw', 'Bukon'], full: 'Ayaw kahadlok.', set: 'neg', why: 'A command not to: ayaw (Tagalog huwag). It does not mean "doesn\'t want".' },
  { q: '____ it doktor imaw.', en: 'He is not a doctor.', a: 'Bukon', opts: ['Owa', 'Indi', 'Ayaw', 'Bukon'], full: 'Bukon it doktor imaw.', set: 'neg', why: 'Not a (noun): bukon (Z p. 174).' },
  { q: '____ ako magsimba kahapon.', en: 'I did not go to church yesterday.', a: 'Owa', opts: ['Owa', 'Indi', 'Ayaw', 'Bukon'], full: 'Owa ako magsimba kahapon.', set: 'neg', why: 'A completed action that did not happen: owa (Z p. 64).' },
  { q: '____ ko maman-an.', en: 'I don\'t know.', a: 'Indi', opts: ['Owa', 'Indi', 'Ayaw', 'Bukon'], full: 'Indi ko maman-an.', set: 'neg', why: 'A present state of not knowing: indi. ◌' },
  { q: '____ magpanaw.', en: 'Don\'t leave.', a: 'Ayaw', opts: ['Owa', 'Indi', 'Ayaw', 'Bukon'], full: 'Ayaw magpanaw.', set: 'neg', why: 'Prohibition: ayaw (Z pp. 65, 68).' },
  { q: '____ ra akon.', en: 'This isn\'t mine.', a: 'Bukon', opts: ['Owa', 'Indi', 'Ayaw', 'Bukon'], full: 'Bukon ra akon.', set: 'neg', why: 'Denying what something is: bukon. ◌' },
  { q: '____ pa.', en: 'Not yet.', a: 'Owa', opts: ['Owa', 'Indi', 'Ayaw', 'Bukon'], full: 'Owa pa.', set: 'neg', why: 'Owa pa = Tagalog wala pa.' },
  { q: '____ ako makatueog kabii.', en: 'I could not sleep last night.', a: 'Owa', opts: ['Owa', 'Indi', 'Ayaw', 'Bukon'], full: 'Owa ako makatueog kabii.', set: 'neg', why: 'Last night is completed: owa + maka-. ◌' },
  { q: '____ ako makatueog kon gabii.', en: 'I cannot sleep at night (as a rule).', a: 'Indi', opts: ['Owa', 'Indi', 'Ayaw', 'Bukon'], full: 'Indi ako makatueog kon gabii.', set: 'neg', why: 'A habit: indi + maka-. ◌' },
  { q: '____ it matuod raya.', en: 'This is not true.', a: 'Bukon', opts: ['Owa', 'Indi', 'Ayaw', 'Bukon'], full: 'Bukon it matuod raya.', set: 'neg', why: 'Denying a description: bukon. ◌' },
  { q: '____ mag-inom it alak.', en: 'Don\'t drink liquor.', a: 'Ayaw', opts: ['Owa', 'Indi', 'Ayaw', 'Bukon'], full: 'Ayaw mag-inom it alak.', set: 'neg', why: 'A command: ayaw with the bare mag- verb. ◌' },
  // pronouns
  { q: 'Masakit ro ueo ____.', en: 'My head hurts.', a: 'ko', opts: ['ako', 'ko', 'akon', 'kakon'], full: 'Masakit ro ueo ko.', set: 'pn', why: 'After a noun, the owner: ko.' },
  { q: 'Gaoy eon ____.', en: 'I am tired now.', a: 'ako', opts: ['ako', 'ko', 'akon', 'kakon'], full: 'Gaoy eon ako.', set: 'pn', why: 'The topic of the sentence: ako. ◌' },
  { q: 'Raya ro ____ nga baeay.', en: 'This is my house.', a: 'akon', opts: ['ako', 'ko', 'akon', 'kakon'], full: 'Raya ro akon nga baeay.', set: 'pn', why: 'Before a noun, with the linker nga: akon (lesson 3).' },
  { q: 'Hambaea uman ____.', en: 'Say it to me again.', a: 'kakon', opts: ['ako', 'ko', 'akon', 'kakon'], full: 'Hambaea uman kakon.', set: 'pn', why: 'To me: the oblique form kakon. ◌' },
  { q: 'Ano ro ngaean ____, Nay?', en: 'What is your name, ma\'am?', a: 'ninyo', opts: ['kamo', 'ninyo', 'inyo', 'kinyo'], full: 'Ano ro ngaean ninyo, Nay?', set: 'pn', why: 'Respectful owner after a noun: ninyo.' },
  { q: 'Kamusta ____?', en: 'How are you? (respectful)', a: 'kamo', opts: ['kamo', 'ninyo', 'inyo', 'kinyo'], full: 'Kamusta kamo?', set: 'pn', why: 'The topic, said to an elder: kamo.' },
  { q: 'Ano ro ngaean ____?', en: 'What is his name?', a: 'na', opts: ['imaw', 'na', 'ana', 'kana'], full: 'Ano ro ngaean na?', set: 'pn', why: 'After a noun, his or her: na (lesson 3).' },
  { q: 'Masakit ro ____ nga unga.', en: 'Her child is sick.', a: 'ana', opts: ['imaw', 'na', 'ana', 'kana'], full: 'Masakit ro ana nga unga.', set: 'pn', why: 'Before a noun with nga: ana. ◌' },
  { q: 'Indi ko isugid raya ____.', en: 'I will not tell this to him.', a: 'kana', opts: ['imaw', 'na', 'ana', 'kana'], full: 'Indi ko isugid raya kana.', set: 'pn', why: 'To him: the oblique kana. ◌' },
  { q: 'Imaw ro unga ____.', en: 'He is their child.', a: 'nanda', opts: ['sanda', 'nanda', 'anda', 'kanda'], full: 'Imaw ro unga nanda.', set: 'pn', why: 'After a noun, their: nanda (lesson 3).' },
  { q: 'Magabalik ____ sa Lunes.', en: 'They will come back on Monday.', a: 'sanda', opts: ['sanda', 'nanda', 'anda', 'kanda'], full: 'Magabalik sanda sa Lunes.', set: 'pn', why: 'The doer of an actor-focus verb is the topic: sanda. ◌' },
  { q: 'Nakakaon ____ eon?', en: 'Have you eaten?', a: 'ka', opts: ['ka', 'ikaw', 'mo', 'imo'], full: 'Nakakaon ka eon?', set: 'pn', why: 'The short topic form ka, second in the sentence (Z p. 157).' },
  // question words
  { q: '____ ro ngaean mo?', en: 'What is your name?', a: 'Ano', opts: ['Ano', 'Sin-o', 'Siin', 'Pila'], full: 'Ano ro ngaean mo?', set: 'qw', why: 'what: ano. Zorc notes Sino ro imong ngaean? as the older native idiom (p. 192).' },
  { q: '____ ro kaibahan mo?', en: 'Who is with you?', a: 'Sin-o', opts: ['Ano', 'Sin-o', 'Siin', 'Pila'], full: 'Sin-o ro kaibahan mo?', set: 'qw', why: 'who: sin-o. ◌' },
  { q: '____ ka nagaistar?', en: 'Where do you live?', a: 'Siin', opts: ['Ano', 'Sin-o', 'Siin', 'Pila'], full: 'Siin ka nagaistar?', set: 'qw', why: 'where: siin (Z p. 194).' },
  { q: '____ ikaw natawo?', en: 'When were you born?', a: 'Kan-o', opts: ['Kan-o', 'Hin-uno', 'Pila', 'Siin'], full: 'Kan-o ikaw natawo?', set: 'qw', why: 'When, about the past: kan-o (Z p. 122).' },
  { q: '____ kamo mabalik?', en: 'When will you come back?', a: 'Hin-uno', opts: ['Kan-o', 'Hin-uno', 'Pila', 'Siin'], full: 'Hin-uno kamo mabalik?', set: 'qw', why: 'When, about the future: hin-uno. ◌' },
  { q: '____ nag-umpisa ro sakit?', en: 'When did the illness start?', a: 'Kan-o', opts: ['Kan-o', 'Hin-uno', 'Pila', 'Siin'], full: 'Kan-o nag-umpisa ro sakit?', set: 'qw', why: 'A completed verb looks back: kan-o. ◌' },
  { q: '____ ro imong idad?', en: 'How old are you?', a: 'Pila', opts: ['Ano', 'Sin-o', 'Siin', 'Pila'], full: 'Pila ro imong idad?', set: 'qw', why: 'how many: pila (SR).' },
  { q: '____ nag-abot ka riya?', en: 'Why did you come here?', a: 'Ham-at', opts: ['Ham-at', 'Paano', 'Siin', 'Kan-o'], full: 'Ham-at nag-abot ka riya?', set: 'qw', why: 'why: ham-at (Tagalog bakit). ◌' },
  { q: '____ ka nag-abot riya?', en: 'How did you get here?', a: 'Paano', opts: ['Ham-at', 'Paano', 'Siin', 'Kan-o'], full: 'Paano ka nag-abot riya?', set: 'qw', why: 'how, in what way: paano. ◌' },
  { q: '____ ro tueog mo?', en: 'How is your sleep?', a: 'Mauno', opts: ['Mauno', 'Ano', 'Siin', 'Pila'], full: 'Mauno ro tueog mo?', set: 'qw', why: 'how is, of what quality: mauno (Z p. 194). ◌' },
  { q: '____ ro mas masakit?', en: 'Which hurts more?', a: 'Alin', opts: ['Alin', 'Ano', 'Sin-o', 'Pila'], full: 'Alin ro mas masakit?', set: 'qw', why: 'which of these: alin. ◌' },
  { q: '____ ron?', en: 'What is that?', a: 'Ano', opts: ['Ano', 'Sin-o', 'Siin', 'Pila'], full: 'Ano ron?', set: 'qw', why: 'Zorc p. 161.' },
  // small words
  { q: 'Nakakaon ka ____?', en: 'Have you eaten already?', a: 'eon', opts: ['eon', 'pa', 'gid', 'man'], full: 'Nakakaon ka eon?', set: 'pt', why: 'already: eon (Tagalog na), Z p. 201.' },
  { q: 'Owa ____.', en: 'Not yet.', a: 'pa', opts: ['eon', 'pa', 'gid', 'man'], full: 'Owa pa.', set: 'pt', why: 'yet, still: pa.' },
  { q: 'Owa ____.', en: 'None at all.', a: 'gid', opts: ['eon', 'pa', 'gid', 'man'], full: 'Owa gid.', set: 'pt', why: 'really, at all: gid (Z p. 205).' },
  { q: 'Mayad nga hapon ____.', en: 'Good afternoon to you too.', a: 'man', opts: ['eon', 'pa', 'gid', 'man'], full: 'Mayad nga hapon man.', set: 'pt', why: 'too, also: man (Tagalog din), Z p. 205.' },
  { q: 'Sige ____.', en: 'Go ahead.', a: 'lang', opts: ['lang', 'anay', 'kuno', 'gid'], full: 'Sige lang.', set: 'pt', why: 'just, only: lang (Z p. 205).' },
  { q: 'Lingkod ____ kamo.', en: 'Please sit down.', a: 'anay', opts: ['lang', 'anay', 'kuno', 'gid'], full: 'Lingkod anay kamo.', set: 'pt', why: 'anay softens a request (Z p. 68).' },
  { q: 'Mayad gid ____.', en: 'It is said to be very good.', a: 'kuno', opts: ['lang', 'anay', 'kuno', 'man'], full: 'Mayad gid kuno.', set: 'pt', why: 'reportedly, they say: kuno (Z p. 202).' },
  { q: 'Saeamat ____.', en: 'Thank you very much.', a: 'gid', opts: ['eon', 'pa', 'gid', 'man'], full: 'Saeamat gid.', set: 'pt', why: 'very much: gid.' },
  { q: 'Mayad ____ ako.', en: 'I am better now.', a: 'eon', opts: ['eon', 'pa', 'gid', 'man'], full: 'Mayad eon ako.', set: 'pt', why: 'A change of state: eon. ◌' },
  { q: 'Ako ____.', en: 'Me too.', a: 'man', opts: ['eon', 'pa', 'gid', 'man'], full: 'Ako man.', set: 'pt', why: 'too: man.' },
  { q: 'Hueat ____.', en: 'Please wait.', a: 'anay', opts: ['lang', 'anay', 'kuno', 'pa'], full: 'Hueat anay.', set: 'pt', why: 'anay: first, for now; softens the command. ◌' },
  // aspect
  { q: '____ eon ako.', en: 'I have eaten.', a: 'Nagkaon', opts: ['Nagkaon', 'Nagakaon', 'Magakaon', 'Magkaon'], full: 'Nagkaon eon ako.', set: 'asp', why: 'Completed: nag- (Z p. 95).' },
  { q: '____ ka it bueong?', en: 'Are you taking any medicine (these days)?', a: 'Nagainom', opts: ['Nag-inom', 'Nagainom', 'Magainom', 'Mag-inom'], full: 'Nagainom ka it bueong?', set: 'asp', why: 'Ongoing or habitual: naga-. ◌' },
  { q: 'Owa ako ____ kahapon.', en: 'I did not go to church yesterday.', a: 'magsimba', opts: ['nagsimba', 'nagasimba', 'magasimba', 'magsimba'], full: 'Owa ako magsimba kahapon.', set: 'asp', why: 'After owa, the bare mag- form (Z p. 64).' },
  { q: 'Indi ako ____.', en: 'I will not eat.', a: 'magkaon', opts: ['nagkaon', 'nagakaon', 'magakaon', 'magkaon'], full: 'Indi ako magkaon.', set: 'asp', why: 'After indi, the bare mag- form (Z p. 61).' },
  { q: '____ kami sa masunod nga semana.', en: 'We will come back next week.', a: 'Magabalik', opts: ['Nagbalik', 'Nagabalik', 'Magabalik', 'Magbalik'], full: 'Magabalik kami sa masunod nga semana.', set: 'asp', why: 'Future: maga- (cf. Z p. 166).' },
  { q: '____ mo ro bueong?', en: 'Will you take the medicine?', a: 'Imnon', opts: ['Gin-inom', 'Ginainom', 'Imnon'], full: 'Imnon mo ro bueong?', set: 'asp', why: 'Future, object focus: -on (inom → imnon). ◌' },
  { q: '____ ku unga ro isda.', en: 'The child bought the fish.', a: 'Ginbakae', opts: ['Ginbakae', 'Ginabakae', 'Bakaeon'], full: 'Ginbakae ku unga ro isda.', set: 'asp', why: 'Completed, object focus: gin- (Z p. 33).' },
  { q: 'Permi ako ____ it humay.', en: 'I always eat rice.', a: 'nagakaon', opts: ['nagkaon', 'nagakaon', 'magakaon', 'magkaon'], full: 'Permi ako nagakaon it humay.', set: 'asp', why: 'A habit: naga- (SR ~p. 16).' },
  { q: 'Gusto ko ____.', en: 'I want to eat.', a: 'magkaon', opts: ['nagkaon', 'nagakaon', 'magakaon', 'magkaon'], full: 'Gusto ko magkaon.', set: 'asp', why: 'After gusto, the bare form. ◌' },
  { q: 'Kahapon imaw ____.', en: 'He left yesterday.', a: 'nagpanaw', opts: ['nagpanaw', 'nagapanaw', 'magapanaw', 'magpanaw'], full: 'Kahapon imaw nagpanaw.', set: 'asp', why: 'Yesterday, completed: nag- (Z p. 182).' }
];

/* Closed-class words for "Practise a lesson" (the generator blanks one of these in a lesson's own sentences). */
window.AKL_CLOSED = {
  markers: ['ro', 'ku', 'it', 'sa'],
  personal: ['si', 'ni', 'kay'],
  negators: ['owa', 'indi', 'ayaw', 'bukon'],
  pronouns: ['ako', 'ikaw', 'imaw', 'kita', 'kami', 'kamo', 'sanda'],
  genitives: ['ko', 'mo', 'na', 'naton', 'namon', 'ninyo', 'nanda'],
  possessives: ['akon', 'imo', 'ana', 'aton', 'amon', 'inyo', 'anda'],
  obliques: ['kakon', 'kimo', 'kana', 'kinyo', 'kanda'],
  particles: ['eon', 'pa', 'gid', 'man', 'lang', 'anay', 'kuno'],
  hedges: ['basi', 'siguro', 'kunta', 'gali', 'abi', 'ngani'],
  questions: ['ano', 'sin-o', 'siin', 'kan-o', 'hin-uno', 'pila', 'ham-at', 'paano', 'mauno', 'alin'],
  demonstratives: ['raya', 'ruyon', 'rato', 'riya', 'rito', 'ron', 'ra'],
  conjunctions: ['ag', 'ukon', 'pero', 'kon', 'agod', 'bisan', 'bangod'],
  time: ['kahapon', 'kabii', 'kaina', 'makaron', 'hinduna', 'permi']
};
window.AKL_LESSON_GROUP = {
  markers: ['markers', 'personal'], pronouns: ['pronouns', 'genitives', 'possessives', 'obliques'], demonstratives: ['demonstratives'],
  'may-owa': ['negators'], questions: ['questions'], 'questions-ii': ['questions', 'markers'], particles: ['particles'],
  'modal-particles': ['hedges', 'particles'], conjunctions: ['conjunctions'], 'adverbs-deictics': ['time', 'demonstratives'],
  possession: ['possessives', 'genitives', 'markers'], politeness: ['pronouns', 'genitives', 'particles'], 'sentence-patterns': ['markers', 'pronouns'],
  'numbers-time': ['time', 'markers'], counting: ['markers'], aspect: ['negators', 'pronouns'], focus: ['markers', 'genitives']
};
window.DRILL_ERROR_SETS = { x: 'Tagalog or Hiligaynon slips', m: 'Markers and pronouns', o: 'Small words', v: 'Verb forms' };

/* Hand-written "Practise a lesson" items for grammar lessons whose examples the automatic generator cannot use
   (examples inside running text). Built from each lesson's own examples; page numbers are Zorc's. */
window.LESSON_GAPS = Object.assign(window.LESSON_GAPS || {}, {
  pronouns: window.DRILL_GAPS.filter((g) => g.set === 'pn'),
  questions: window.DRILL_GAPS.filter((g) => g.set === 'qw'),
  particles: window.DRILL_GAPS.filter((g) => g.set === 'pt'),
  demonstratives: [
    { q: 'Ano ____?', en: 'What is that (near us)?', a: 'ron', opts: ['ron', 'riya', 'rito'], why: 'ron is the short form of ruyon, that near us both (Z p. 161).' },
    { q: 'Pila ____?', en: 'How much is that?', a: 'ruyon', opts: ['ruyon', 'riya', 'rito'], why: 'Zorc p. 161: Pila ruyon?' },
    { q: 'Lingkod ____.', en: 'Sit here.', a: 'riya', opts: ['riya', 'rito', 'raya'], why: 'riya = here (Tagalog dito); rito is there, far away.' },
    { q: 'Siin ka gaadto? — ____.', en: 'Where are you going? — Over there.', a: 'Rito', opts: ['Riya', 'Rito', 'Raya'], why: 'rito = there, far (Tagalog doon). The false friend.' },
    { q: 'Basaha ____.', en: 'Read this.', a: 'ra', opts: ['ra', 'riya', 'rito'], why: 'ra is the short form of raya, this (Z p. 68).' },
    { q: 'Riya o ____ ro sakit?', en: 'Is the pain here or there?', a: 'rito', opts: ['riya', 'rito', 'raya'], why: 'Pointing: riya here, rito there. ◌' }
  ],
  possession: [
    { q: 'Ro asawa ____ Manong masakit.', en: 'Older brother\'s wife is sick.', a: 'ni', opts: ['ni', 'ku', 'it', 'sa'], why: 'After the noun, a name or title owner takes ni (Z p. 155).' },
    { q: 'ro haboe ____ unga', en: 'the child\'s blanket', a: 'ku', opts: ['ni', 'ku', 'ro', 'sa'], why: 'After the noun, a definite common-noun owner takes ku (Z p. 155).' },
    { q: 'Ihatod mo ____ sa baeay.', en: 'Bring me home.', a: 'ako', opts: ['ako', 'ko', 'akon'], why: 'The one brought is the topic: ako (Z p. 160).' },
    { q: 'Nano ro ____ ginaobra?', en: 'What are you doing?', a: 'imong', opts: ['imong', 'mo', 'ikaw'], why: 'Before the noun, imo + -ng (Z p. 159).' },
    { q: 'sa sueod ____ baeay', en: 'inside the house', a: 'it', opts: ['it', 'ro', 'ni'], why: 'Relator nouns take it: sa sueod it, sa ibabaw it (Z p. 156).' },
    { q: 'ro bueong ____ ginainom ninyo', en: 'the medicine that you take', a: 'nga', opts: ['nga', 'ro', 'it'], why: 'nga links a relative clause: who, that, which (Z p. 156). ◌' }
  ],
  'modal-particles': [
    { q: 'Masakit ____ ako.', en: '(But) I was sick, you see.', a: 'abi', opts: ['abi', 'kunta', 'basi'], why: 'abi gives an excuse or reason (Tagalog kasi), Z p. 200.' },
    { q: 'Tapus eon ____ ro akong obra.', en: 'I wish my work were finished.', a: 'kunta', opts: ['abi', 'kunta', 'basi'], why: 'kunta = Tagalog sana, a wish (Z p. 207).' },
    { q: '____ mahueog ka.', en: 'You might fall.', a: 'Basi', opts: ['Basi', 'Siguro', 'Kunta'], why: 'basi warns or doubts: might (Z pp. 206–207).' },
    { q: 'Ta-o ____.', en: 'I just don\'t know.', a: 'ngani', opts: ['ngani', 'abi', 'kunta'], why: 'ngani = indeed, I know (Z p. 204).' },
    { q: 'Siin ____ imaw?', en: 'Where in the world is he?', a: 'baea', opts: ['baea', 'abi', 'kunta'], why: 'baea adds emphasis to a question (Z p. 199).' },
    { q: '____ human eon don.', en: 'It is almost ready.', a: 'Haeos', opts: ['Haeos', 'Basi', 'Kunta'], why: 'haeos = almost (Tagalog halos), Z p. 203.' }
  ],
  conjunctions: [
    { q: 'Si Pedro ____ si Carlos nakatuon sa Manila.', en: 'Pedro and Carlos studied in Manila.', a: 'ag', opts: ['ag', 'ukon', 'pero', 'kon'], why: 'and: ag (Z p. 210).' },
    { q: 'Mas mayad eon kamo, ____ mas maeain?', en: 'Are you better now, or worse?', a: 'ukon', opts: ['ag', 'ukon', 'pero', 'kon'], why: 'or: ukon. ◌' },
    { q: 'Hidlawon ako kimo ____ hipanaw ka eon.', en: 'I will miss you if you go away.', a: 'kon', opts: ['ag', 'ukon', 'kon', 'agod'], why: 'if, when: kon (Z p. 122).' },
    { q: 'Magobra it mayad ____ gumayad ro imong kinabuhi.', en: 'Work hard so that your life will improve.', a: 'agod', opts: ['kon', 'agod', 'bisan', 'pero'], why: 'so that: agod (Tagalog para), Z p. 211.' },
    { q: '____ manggaranon imaw, mabuot imaw gihapon.', en: 'Even if he is rich, he is still kind.', a: 'Bisan', opts: ['Kon', 'Agod', 'Bisan', 'Pero'], why: 'even if: bisan (Z p. 211).' },
    { q: 'Indi kamo makatueog ____ sa kabalaka?', en: 'Can\'t you sleep because of worry?', a: 'bangod', opts: ['bangod', 'agod', 'bisan', 'samtang'], why: 'because: bangod (Z p. 67). ◌' },
    { q: 'Nagahambae imaw ____ owa it tawo?', en: 'Does he talk while nobody is there?', a: 'samtang', opts: ['bangod', 'agod', 'bisan', 'samtang'], why: 'while: samtang (Z p. 211). ◌' }
  ],
  'adverbs-deictics': [
    { q: '____ imaw nagpanaw.', en: 'He left yesterday.', a: 'Kahapon', opts: ['Kahapon', 'Hinduna', 'Hin-aga'], why: 'yesterday: kahapon, with the completed verb (Z p. 182).' },
    { q: '____ mabalik ako.', en: 'I will return later.', a: 'Hinduna', opts: ['Kahapon', 'Hinduna', 'Kaina'], why: 'later on: hinduna (Tagalog mamaya), Z p. 182.' },
    { q: 'Nagaobra imaw ____ mayad.', en: 'He works well.', a: 'it', opts: ['it', 'nga', 'ro'], why: 'A manner adverb after the verb takes it (Z p. 181).' },
    { q: 'Mayad ____ manogobra imaw.', en: 'He is a good worker.', a: 'nga', opts: ['it', 'nga', 'ro'], why: 'An adjective links to its noun with nga (Z p. 181).' },
    { q: 'Owa ____ si Nene.', en: 'Nene is not here.', a: 'riya', opts: ['riya', 'rito', 'rina'], why: 'here, near me: riya (Z p. 185).' },
    { q: 'Adlaw-adlaw raya, ukon ____ lang?', en: 'Every day, or only seldom?', a: 'taeagsa', opts: ['taeagsa', 'permi', 'makaron'], why: 'seldom: taeagsa. ◌' }
  ],
  'sentence-patterns': [
    { q: 'Nagpanaw sa Manila ____ Tatay.', en: 'Father left for Manila.', a: 'si', opts: ['si', 'ni', 'kay'], why: 'The topic is a title: si, at the end (Z p. 151).' },
    { q: 'Ro akong unga ____ raya.', en: 'This is my child.', a: 'hay', opts: ['hay', 'ro', 'nga'], why: 'hay turns the sentence round, like Tagalog ay (Z p. 197).' },
    { q: 'Nakabakae ka eon ____ gatas?', en: 'Did you buy (some) milk?', a: 'it', opts: ['it', 'ku', 'ro'], why: 'Indefinite: some milk takes it (Z pp. 152–153).' },
    { q: '____ baha kabi-i.', en: 'There was a flood last night.', a: 'May', opts: ['May', 'Owa', 'Hay'], why: 'Existence: may (Z p. 198).' },
    { q: 'May baeay ____ akong tiyo.', en: 'My uncle has a house.', a: 'ro', opts: ['ro', 'it', 'ku'], why: 'The possessor is the topic: ro (Z p. 198).' },
    { q: 'Mainit gid ____ sabaw.', en: 'The soup is very hot.', a: 'do', opts: ['do', 'it', 'ku'], why: 'do is ro after a word ending in d, t or n (Z p. 143, 175).' }
  ],
  adjectives: [
    { q: '____ ro sine kabi-i.', en: 'The movie last night was very nice.', a: 'Kasadya', opts: ['Kasadya', 'Masadya', 'Masadya-sadya'], why: 'The ka- intensive means very (Z p. 173).' },
    { q: 'Medyo ____ ro anang mga barong.', en: 'His barongs are somewhat expensive.', a: 'mahae', opts: ['mahae', 'kahae'], why: 'medyo + the ma- adjective (Z p. 175).' },
    { q: 'Mas makusog imaw ____ anwang.', en: 'He is stronger than a carabao.', a: 'sa', opts: ['sa', 'it', 'ro'], why: 'mas … sa = more … than (Z p. 178).' },
    { q: 'Nasaktan ako ____ duro.', en: 'I was hurt very much.', a: 'it', opts: ['it', 'nga', 'ro'], why: 'it duro = very much (Z p. 128).' },
    { q: 'Mas mayad eon kamo, ukon mas ____?', en: 'Are you better now, or worse?', a: 'maeain', opts: ['maeain', 'mayad', 'parehas'], why: 'maeain = bad, worse (SR). ◌' },
    { q: '____ nga masakit.', en: 'Too painful.', a: 'Sobra', opts: ['Sobra', 'Medyo', 'Mas'], why: 'sobra nga = too. ◌' }
  ],
  'questions-ii': [
    { q: '____ ro imong ngaean?', en: 'What is your name? (the native idiom)', a: 'Sino', opts: ['Sino', 'Siin', 'Pila'], why: 'Zorc p. 192: Sino ro imong ngaean? is the native idiom.' },
    { q: '____ nag-umpisa ro sakit?', en: 'When did the illness start?', a: 'Kan-o', opts: ['Kan-o', 'Hin-uno'], why: 'kan-o looks back. ◌' },
    { q: '____ kamo mabalik?', en: 'When will you come back?', a: 'Hin-uno', opts: ['Kan-o', 'Hin-uno'], why: 'hin-uno looks forward. ◌' },
    { q: 'Nag-umpisa raya ____ Enero?', en: 'Did this begin last January?', a: 'ku', opts: ['ku', 'sa', 'it'], why: 'A completed past point takes ku (Z pp. 165–166). ◌' },
    { q: 'Balik kamo ____ masunod nga dominggo.', en: 'Come back next week.', a: 'sa', opts: ['ku', 'sa', 'it'], why: 'Future time takes sa (Z p. 166). ◌' },
    { q: 'kahapon ____ hapon', en: 'yesterday afternoon', a: 'it', opts: ['ku', 'sa', 'it'], why: 'Time within: it (Z p. 165).' }
  ]
});
