/* Language pack for Mag-istorya Kita (Aklanon / Akeanon). Everything in the ENGINE (core.js, views.js,
   psych-views.js, app.js, point-listen.js) that is specific to the target language lives here; content lives in
   js/data/*. Shell UI strings (menu, footer, backup) are in data/strings.js and go through t().
   DRAFT: Aklanon wording in this file has not yet been reviewed by a native Akeanon speaker. */
window.LANG = {
  code: 'akl',                // short code used in CSS classes (.akl) and quiz flags
  name: 'Aklanon',            // how the app names the language in UI text
  nameFull: 'Aklanon (Akeanon / Inakeanon)',
  voiceName: 'Aklanon',       // how device voices for this language are referred to
  bcp47: 'akl-PH',            // no browser or cloud voice exists for Aklanon; see nearVoices
  // Device voices that are THIS language: none exist (Nov 2026). Kept so the engine's matcher has something to test.
  voiceLang: /^(akl|mlz)([-_]|$)/i,
  voiceNameMatch: /aklanon|akeanon|inakeanon/i,
  // Voices whose language reads Aklanon spelling closely, used because no native voice exists. Never English.
  // Filipino reads the consonants and plain vowels right but says the special "e" (as in Akean, bueak) as a plain e.
  nearVoices: [/^(fil|tl)([-_]|$)/i, /^ceb([-_]|$)/i, /^id([-_]|$)/i, /^ms([-_]|$)/i],
  packVoices: '',             // no recorded audio pack yet; a native speaker will record the core phrases later
  deviceVoiceHelp: 'There is no Aklanon voice on any phone or computer. The app reads Aklanon with a Filipino voice if your device has one (Android: Settings → Google Text-to-speech → install Filipino). It will mispronounce the Aklanon letter e before a vowel (Akean, bueak), so treat spoken lines as a rough guide only, until the recorded pack by a native speaker exists.',
  testLine: 'Mayad-ayad nga aga. Kamusta kamo?',

  // Two registers for every interview phrase. Aklanon has no "po": respect is carried by the plural pronoun
  // (kamo / ninyo / kinyo for one person), kin titles (Nay, Tay, Manong, Manang, Lola, Lolo) and tone.
  registers: {
    f: { label: 'Respectful (kamo)', short: 'Respectful', help: 'uses the plural <i>kamo / ninyo</i> for one person and a title such as <i>Nay, Tay, Manong, Manang</i> (for elders, most adult patients, and family)' },
    c: { label: 'Everyday (ikaw)', short: 'Everyday', help: 'uses <i>ikaw / ka / mo</i> (for younger patients, children and peers); may mix in Tagalog or English words as Kalibo speakers do' }
  },
  registerIntro: 'each in a respectful (<i>kamo</i>) and an everyday (<i>ikaw</i>) form',

  // Short words the engine prints in quizzes and drills.
  quiz: { great: 'Maayo gid!', ok: 'Sige!', keepGoing: 'Kaya mo ra!', right: 'Husto!', wrong: 'Saea.', toTarget: 'EN→AKL', toEnglish: 'AKL→EN' },
  yes: 'Huo', no: 'Indi',
  // Flashcard direction labels (settings.cardDir values stay 'tl-en' / 'en-tl' for engine compatibility).
  cardDir: { 'tl-en': 'Aklanon first', 'en-tl': 'English first' },
  dictDir: { tl: 'Aklanon → English', en: 'English → Aklanon' },

  // Point board: the strip the interviewer reads after the patient taps a tile.
  point: { title: 'Itudlo', subtitle: 'Point to your answer', pass: 'Ipakita sa pasyente rayang screen.', passEn: 'Hand the phone or tablet to the patient.' },

  // Mag-istorya Kita only: the learner already speaks Tagalog, so lessons and dictionary show a Tagalog column.
  bridgeLang: { code: 'tl', name: 'Tagalog' },
  // Spoken 0–10 for the point-board scale (Spanish numbers are what Kalibo speakers use for scales; native shown in brackets).
  numbers: ['sero', 'uno', 'dos', 'tres', 'kwatro', 'singko', 'sais', 'syete', 'otso', 'nwebe', 'dyes'],
  scaleTitle: 'Sa sero hasta dyes, pila?',
  // Root-word search (core.js stemmer): affixes stripped when looking for a root. DRAFT list from published grammars
  // (Aklanon object focus -on/-hon where Tagalog has -in/-hin; progressive naga-/maga-; past gin-). Review with a speaker.
  stem: {
    prefixes: ['nagapa', 'magapa', 'pinaka', 'nagpa', 'magpa', 'naga', 'maga', 'naka', 'maka', 'naki', 'maki', 'gina', 'gin', 'ipa', 'nag', 'mag', 'pag', 'ka', 'na', 'ma', 'pa', 'i'],
    suffixes: ['hon', 'han', 'on', 'an']
  },
  draftNotice: 'Draft. The Aklanon in this app was written from published grammars and dictionaries and has not yet been checked by a native Akeanon speaker. Use it to understand patients and to learn; confirm wording with Aklanon-speaking staff before relying on a line clinically.'
};
