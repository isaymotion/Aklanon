/* What's New. Newest entry FIRST. version = semver string (also the key for the unseen badge on Home,
   the menu and the footer). date = ISO YYYY-MM-DD. Item type: feature | update | correction | content.
   For every release: add an entry here, then bump APP_META.version (data/app-meta.js) and VERSION in sw.js. */
window.APP_CHANGELOG = [
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
