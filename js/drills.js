/* Grammar drills for Mag-istorya Kita (ported from Usap Tayo 3.x js/drills.js and adapted to Aklanon).
   #/drills lists them, #/drills/<id> runs one, #/daily is a short mix. Data: js/data/drills.js (see its header).
   switch      Respectful or everyday?  the f and c forms of every PSYCH_SECTIONS phrase (no data of its own)
   markers     Choose the marker        DRILL_CLOZE + DRILL_CLOZE_SETS (set menu built from the sets)
   build       Build the sentence       DRILL_BUILD (word tiles)
   roots       Find the root            dictionary entries whose root App.findRoots can recover (no data of its own)
   errors      Find the mistake         DRILL_ERRORS (set menu built from the sets present in the data)
   translate   Say it in Aklanon        DRILL_TRANSLATE (typed; accepted answers in `akl`, or `tl`)
   negation, pronoun, qword, particle, aspect   Fill the gap: DRILL_GAPS sets neg, pn, qw, pt, asp
   lessongaps  Practise a lesson        LESSON_GAPS[id] if present, otherwise gap sentences made from the lesson itself
                                        (App.lessonGapItems; see autoLessonGaps below). #/drills/lessongaps?l=<lesson id>
   Best scores: state.done.drills['<id>:<set>']; lesson practice: state.done.lessonGaps['<lesson id>'];
   daily mix: state.done.daily['YYYY-MM-DD']. Every Aklanon line is an unreviewed draft. */
(function () {
  const { esc, shuffle, pick, norm } = App;
  const V = (App.views = App.views || {});
  const W = window;
  const CLOZE = W.DRILL_CLOZE || [], SETS = W.DRILL_CLOZE_SETS || {}, BUILD = W.DRILL_BUILD || [];
  const TRANS = W.DRILL_TRANSLATE || [], ERRORS = W.DRILL_ERRORS || [], GAPS = W.DRILL_GAPS || [];
  const LGAPS = W.LESSON_GAPS && typeof W.LESSON_GAPS === 'object' ? W.LESSON_GAPS : {};
  const CLOSED = W.AKL_CLOSED && typeof W.AKL_CLOSED === 'object' ? W.AKL_CLOSED : {};
  const LGROUP = W.AKL_LESSON_GROUP && typeof W.AKL_LESSON_GROUP === 'object' ? W.AKL_LESSON_GROUP : {};
  const SECTIONS = () => W.PSYCH_SECTIONS || [];
  const N = 10;
  const NAME = LANG.name, R = LANG.registers;
  const DRAFT = LANG.draftShort || ('Draft: the ' + NAME + ' has not been checked by a native speaker.');
  const draftNote = (extra) => '<div class="notice warn" style="margin:10px 0 12px">' + esc(DRAFT) + (extra ? ' ' + extra : '') + '</div>';
  const ALL = '<a class="btn" href="#/drills">All drills</a>';

  // Set menus built from the data: markers from DRILL_CLOZE_SETS, errors from the sets that have items.
  const ERR_LABEL = Object.assign({ m: 'Markers and pronouns', o: 'Small words', v: 'Verb forms', x: 'Tagalog or Hiligaynon slips' }, W.DRILL_ERROR_SETS || {});
  const markerOpts = () => { const ks = Object.keys(SETS).filter((k) => CLOZE.some((it) => it.set === k)); return ks.length > 1 ? [['all', 'All sets']].concat(ks.map((k) => [k, SETS[k].title || k])) : []; };
  const errorOpts = () => { const ks = [...new Set(ERRORS.map((it) => it.set).filter(Boolean))]; return ks.length > 1 ? [['all', 'All sets']].concat(ks.map((k) => [k, ERR_LABEL[k] || k])) : []; };
  const transOpts = () => { const ks = [...new Set(TRANS.map((it) => it.set).filter(Boolean))]; const lab = { e: 'Everyday', w: 'On the ward' }; return ks.length > 1 ? [['all', 'All sets']].concat(ks.map((k) => [k, lab[k] || k])) : []; };
  const setList = (k) => Object.keys(SETS).filter((s) => CLOZE.some((it) => it.set === s)).map((s) => (SETS[s].opts || []).join(', ')).join(' · ');

  const DRILLS = [
    { id: 'switch', g: 'Grammar', title: 'Respectful or everyday?', eyebrow: 'Register · 10 questions', blurb: 'See a line in one register, find the same line in the other.',
      intro: NAME + ' has no po. Respect is carried by the plural pronoun (kamo, ninyo, kinyo for one person) and a title such as Nay, Tay, Manong or Manang; the everyday form uses ikaw, ka and mo. Every interview phrase in this app has both forms. Here you see a line in one register and choose the same line in the other.',
      opts: () => [['f-c', R.f.short + ' → ' + R.c.short.toLowerCase()], ['c-f', R.c.short + ' → ' + R.f.short.toLowerCase()]], lessons: ['politeness', 'kalibo-register', 'pronouns'] },
    { id: 'markers', g: 'Grammar', title: 'Choose the marker', eyebrow: 'Grammar · 10 questions', blurb: 'Ro, ku, it or sa? Si, ni or kay?',
      intro: 'Fill the gap with the right marker. Ro marks the topic, it an indefinite object, ku a definite owner or doer, sa a place or direction; si, ni and kay do the same jobs for names and titles. The English line tells you who did what.',
      opts: markerOpts, lessons: ['markers'] },
    { id: 'build', g: 'Grammar', title: 'Build the sentence', eyebrow: 'Word order · 10 sentences', blurb: 'Tap the words into order. Where do ako, eon and pa go?',
      intro: 'Tap the words in order to build the ' + NAME + ' sentence. As in Tagalog, short pronouns (ako, ka, ko, mo) and small words (eon, pa, gid, man, lang, anay) come right after the first word of the sentence, so after owa, indi or bukon they stand before the verb: Owa ako magsimba (Zorc p. 64), Nakakaon ka eon? (p. 66).',
      opts: () => [], lessons: ['particles', 'pronouns', 'sentence-patterns'] },
    { id: 'roots', g: 'Vocabulary', title: 'Find the root', eyebrow: 'Roots · 10 questions', blurb: 'Strip the affixes from a dictionary word and name its root.',
      intro: 'Most ' + NAME + ' words are a root plus affixes, as in Tagalog, but the affixes have a Visayan shape (naga-, maga-, gin-, -on, -an). If you can see the root, you can look the word up. Each question shows a word from the dictionary; choose its root.',
      opts: () => [['all', 'All words'], ['v', 'Verbs'], ['clin', 'Health and mind words']], lessons: ['word-building', 'focus', 'aspect'] },
    { id: 'errors', g: 'Grammar', title: 'Find the mistake', eyebrow: 'Grammar · 10 sentences', blurb: 'One word is wrong in each sentence. Tap it.',
      intro: 'Each sentence has one mistake a learner often makes: a wrong marker or pronoun, a wrong small word or negator, a verb in the wrong form, or a Tagalog or Hiligaynon word where ' + NAME + ' has its own. Tap the word that is wrong, then read the corrected sentence.',
      opts: errorOpts, lessons: ['markers', 'pronouns', 'may-owa', 'aspect'] },
    { id: 'translate', g: 'Writing', title: 'Say it in ' + NAME, eyebrow: 'Writing · 10 sentences', blurb: 'Read the English, type the ' + NAME + '. Several answers are accepted.',
      intro: 'Type the ' + NAME + ' for each English line. Your answer is compared word by word with the accepted answers; capitals and punctuation do not count. There is often more than one right way to say a thing, so read the model answer even when you are marked wrong.',
      opts: transOpts, lessons: ['questions', 'particles', 'politeness'] },
    { id: 'negation', g: 'Grammar', gap: 'neg', title: 'Owa, indi, ayaw or bukon?', eyebrow: 'Negation · 10 gaps', blurb: 'Four ways to say no, where Tagalog has hindi, wala and huwag.',
      intro: 'Owa says there is none, or that something did not happen (Tagalog wala). Indi says no to a future or habitual action and is the plain "no" (Tagalog hindi). Ayaw is "don\'t" in commands (Tagalog huwag; it does not mean "doesn\'t want"). Bukon says something is not a thing or not so (Tagalog hindi before a noun). Choose the one that fits.',
      opts: () => [], lessons: ['may-owa'] },
    { id: 'pronoun', g: 'Grammar', gap: 'pn', title: 'Ako, ko or akon?', eyebrow: 'Pronouns · 10 gaps', blurb: 'The topic form, the form after a word, and the form before it.',
      intro: 'As in Tagalog, each pronoun has a topic form (ako, ikaw, imaw), a form that follows a word (ko, mo, na) for the doer of an object-focus verb and the owner, and a form that goes before a word or stands alone (akon, imo, ana). Choose the form that fits the gap.',
      opts: () => [], lessons: ['pronouns', 'possession'] },
    { id: 'qword', g: 'Grammar', gap: 'qw', title: 'Choose the question word', eyebrow: 'Questions · 10 gaps', blurb: 'Siin, sin-o, kan-o or hin-uno? Pila or ano?',
      intro: 'Choose the question word that fits the sentence and the English line: ano, sin-o, siin, kan-o (when, past), hin-uno (when, future), pila, ham-at, paalin.',
      opts: () => [], lessons: ['questions', 'questions-ii'] },
    { id: 'particle', g: 'Grammar', gap: 'pt', title: 'Choose the small word', eyebrow: 'Particles · 10 gaps', blurb: 'Eon, pa, gid, man, lang, anay, kuno: one small word changes the meaning.',
      intro: 'Small words like eon (already, now; Tagalog na), pa (still, yet), gid (really, very; Tagalog talaga), man (also; Tagalog din), lang (only), anay (first, please; Tagalog muna) and kuno (they say; Tagalog daw) come right after the first word or the pronoun. The English line tells you which one the speaker meant.',
      opts: () => [], lessons: ['particles', 'modal-particles'] },
    { id: 'aspect', g: 'Grammar', gap: 'asp', title: 'Choose the aspect', eyebrow: 'Verbs · 10 gaps', blurb: 'Nag-, naga-, maga- or mag-? Done, going on, still to come, or bare.',
      intro: NAME + ' marks aspect with prefixes: nag- for completed, naga- for ongoing or habitual, maga- for future, and the bare mag- after owa, indi, ayaw, gusto and in commands. Object focus has gin-, gina- and -on. Choose the verb form that fits; the English line tells you when it happens.',
      opts: () => [], lessons: ['aspect', 'focus', 'verb-classes'] },
    { id: 'lessongaps', g: 'Grammar', title: 'Practise a lesson', eyebrow: 'Lessons · 10 gaps', blurb: 'Ten gap sentences from the examples of one lesson.',
      intro: 'Choose a lesson and fill the gap in ten of its example sentences. The English line tells you what the sentence means. Each lesson page has a button for its own practice.',
      opts: () => [], lessons: [] }
  ];
  const GROUPS = ['Grammar', 'Vocabulary', 'Writing'];
  const HANDOUT = ['markers', 'negation', 'pronoun', 'qword', 'particle', 'aspect', 'errors', 'translate'];
  App.DRILLS = DRILLS;
  const byId = (id) => DRILLS.find((d) => d.id === id);
  const lgStore = () => { const d = App.state.done; if (!d.lessonGaps || typeof d.lessonGaps !== 'object' || Array.isArray(d.lessonGaps)) d.lessonGaps = {}; return d.lessonGaps; };
  const bestOf = (id) => {
    if (id === 'lessongaps') { const g = lgStore(), v = Object.keys(g).map((k) => g[k]).filter((x) => typeof x === 'number'); return v.length ? Math.max(...v) : null; }
    const o = App.state.done.drills || {}; const v = Object.keys(o).filter((k) => k.split(':')[0] === id).map((k) => o[k]); return v.length ? Math.max(...v) : null;
  };
  const saveBest = (key, right, total) => {
    if (!total) return;
    const s = App.state; s.done.drills = s.done.drills || {};
    s.done.drills[key] = Math.max(s.done.drills[key] || 0, Math.round((100 * right) / total));
    App.activity(10); App.save();
  };
  const scoreCard = (right, n) => { const pct = Math.round((100 * right) / Math.max(1, n)); return '<div class="card stack"><h3>' + (pct >= 80 ? LANG.quiz.great : pct >= 50 ? LANG.quiz.ok : LANG.quiz.keepGoing) + ' ' + right + ' / ' + n + '</h3>' +
    '<div class="progress"><i style="width:' + pct + '%"></i></div><div class="row"><button class="btn primary" data-act="retry">Try again</button>' + ALL + '</div></div>'; };
  const empty = (box) => { box.innerHTML = '<div class="notice info">No items for this drill are loaded yet.</div>'; };

  /* ---------- Seeded sampling (shared with the drills handout) ---------- */
  const seededRnd = (seed) => {
    let h = 2166136261; for (const ch of String(seed)) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
    return () => ((h = Math.imul(h ^ (h >>> 15), 2246822507) ^ Math.imul(h ^ (h >>> 13), 3266489909)) >>> 0) / 4294967296;
  };
  const seededPick = (list, n, rnd) => { const a = list.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a.slice(0, Math.max(0, Math.min(n, a.length))); };
  App.drillSeeded = { rnd: seededRnd, pick: seededPick };

  /* ---------- Respectful ↔ everyday ---------- */
  function switchQs(dir, n) {
    const from = dir === 'c-f' ? 'c' : 'f', to = from === 'f' ? 'c' : 'f';
    const pool = [];
    SECTIONS().forEach((s) => s.phrases.forEach((p, i) => { if (p.f && p.c && p.f !== p.c) pool.push({ s, p, i }); }));
    return pick(pool, n).map(({ s, p, i }) => {
      const same = shuffle(s.phrases.filter((x) => x !== p && x[to] && x[to] !== p[to]).map((x) => x[to]));
      const other = shuffle(pool.filter((x) => x.s !== s).map((x) => x.p[to]));
      const wrong = [...new Set(same.concat(other))].filter((x) => x !== p[to]).slice(0, 3);
      return { q: p[from], sub: p.en + ' · ' + (to === 'c' ? 'Choose the ' + R.c.short.toLowerCase() + ' form.' : 'Choose the ' + R.f.short.toLowerCase() + ' form.'), tlq: true, tlo: true, say: p[from],
        opts: [p[to]].concat(wrong), a: 0, cardId: 'p:' + s.id + ':' + i, sayAfter: p[to], exp: p[to] };
    });
  }

  /* ---------- Choose the marker ---------- */
  const fill = (it) => it.q.replace('____', it.a);
  function clozeQs(set, n) {
    const src = CLOZE.filter((it) => SETS[it.set] && Array.isArray(SETS[it.set].opts) && SETS[it.set].opts.includes(it.a) && (set === 'all' || it.set === set));
    return pick(src, Math.min(n, src.length)).map((it) => {
      const opts = SETS[it.set].opts.slice();
      return { q: it.q, sub: it.en, tlq: true, tlo: true, opts, a: opts.indexOf(it.a), sayAfter: fill(it), exp: fill(it) + (it.why ? ' ' + it.why : '') };
    });
  }

  /* ---------- Build the sentence ---------- */
  const sentence = (it, tiles) => { const s = (tiles || it.t).join(' '); return s.charAt(0).toUpperCase() + s.slice(1) + (it.end || '.'); };
  const accepted = (it) => [it.t].concat(it.alt || []).map((t) => t.join(' ').toLowerCase());
  App.drillBuildOk = (it, tiles) => accepted(it).includes(tiles.join(' ').toLowerCase());
  function runBuild(box, key) {
    const all = BUILD.filter((it) => Array.isArray(it.t) && it.t.length > 1);
    if (!all.length) return empty(box);
    let items = pick(all, Math.min(N, all.length)), i = 0, right = 0;
    const draw = () => {
      if (i >= items.length) {
        box.innerHTML = scoreCard(right, items.length);
        box.querySelector('[data-act=retry]').onclick = () => { items = pick(all, Math.min(N, all.length)); i = 0; right = 0; draw(); };
        saveBest(key, right, items.length);
        return;
      }
      const it = items[i];
      let bank = shuffle(it.t.map((w, k) => k));
      if (bank.every((k, j) => k === j)) bank = bank.reverse();
      const chosen = [];
      let done = false;
      const tile = (k, where) => '<button class="wtile tl" data-k="' + k + '" data-w="' + where + '"' + (done ? ' disabled' : '') + '>' + esc(k === 0 ? it.t[0].charAt(0).toLowerCase() + it.t[0].slice(1) : it.t[k]) + '</button>';
      const paint = () => {
        box.innerHTML = '<div class="card stack"><div class="spread"><span class="eyebrow">Sentence ' + (i + 1) + ' of ' + items.length + '</span></div>' +
          '<div style="font-size:1.12rem;font-weight:600">' + esc(it.en) + '</div>' +
          '<div class="wline" data-line aria-label="Your sentence">' + (chosen.length ? chosen.map((k) => tile(k, 'line')).join('') : '<span class="muted small">Tap the words below in order.</span>') + '</div>' +
          '<div class="wbank" data-bank aria-label="Words">' + bank.filter((k) => !chosen.includes(k)).map((k) => tile(k, 'bank')).join('') + '</div>' +
          '<div class="row"><button class="btn primary" data-act="check"' + (chosen.length === it.t.length && !done ? '' : ' disabled') + '>Check</button><button class="btn" data-act="clear"' + (chosen.length && !done ? '' : ' disabled') + '>Clear</button></div><div data-fb></div></div>';
        box.querySelectorAll('.wtile').forEach((b) => (b.onclick = () => {
          const k = +b.dataset.k;
          if (b.dataset.w === 'bank') chosen.push(k); else chosen.splice(chosen.indexOf(k), 1);
          paint();
        }));
        box.querySelector('[data-act=clear]').onclick = () => { chosen.length = 0; paint(); };
        box.querySelector('[data-act=check]').onclick = () => {
          const mine = chosen.map((k) => it.t[k]);
          const ok = App.drillBuildOk(it, mine);
          if (ok) right++;
          App.recordAnswer(ok);
          done = true; paint();
          const model = ok ? sentence(it, mine) : sentence(it);
          box.querySelector('[data-line]').classList.add(ok ? 'right' : 'wrong');
          box.querySelector('[data-fb]').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? LANG.quiz.right : LANG.quiz.wrong) + '</b> <span class="tl">' + esc(model) + '</span> ' + App.sayBtn(model) + (it.why ? '<div style="margin-top:4px">' + esc(it.why) + '</div>' : '') + '</div>' +
            '<div class="row" style="margin-top:10px"><button class="btn primary" data-act="next">' + (i + 1 < items.length ? 'Next' : 'See score') + '</button></div>';
          const nx = box.querySelector('[data-act=next]');
          nx.onclick = () => { i++; draw(); };
          nx.focus();
        };
      };
      paint();
    };
    draw();
  }

  /* ---------- Find the root ---------- */
  const CLIN_CATS = ['health', 'mind', 'risk', 'substance', 'clinical', 'emotions'];
  const STEM = LANG.stem || { prefixes: [], suffixes: [] };
  const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const PRE_RE = new RegExp('^(' + (STEM.prefixes || []).slice().sort((a, b) => b.length - a.length).map(escRe).join('|') + ')');
  const SUF_RE = new RegExp('(' + (STEM.suffixes || []).slice().sort((a, b) => b.length - a.length).map(escRe).join('|') + ')$');
  let rootPool = null;
  const rootWords = () => rootPool || (rootPool = App.DICT.filter((e) => e.root && e.cat !== 'stigma' && !/[\s-]/.test(e.tl) && !/[\s-]/.test(e.root) && App.flat(e.tl) !== App.flat(e.root) && App.findRoots(e.tl).includes(App.flat(e.root))));
  function rootQs(set, n) {
    const all = rootWords();
    const src = all.filter((e) => set === 'all' || (set === 'v' ? e.pos === 'v' : CLIN_CATS.includes(e.cat)));
    const roots = [...new Set(all.map((e) => e.root.toLowerCase()))];
    return pick(src, Math.min(n, src.length)).map((e) => {
      const w = e.tl.toLowerCase(), r = e.root.toLowerCase();
      // Wrong answers: the word with one affix left on (the real mistake), a chop, then real roots with the same first letter.
      const plausible = (x) => x.length >= 3 && x !== w && /[aeiou]/.test(x);
      const half = [STEM.prefixes.length ? w.replace(PRE_RE, '') : '', STEM.suffixes.length ? w.replace(SUF_RE, '') : ''];
      const chops = [...new Set(shuffle(half.filter(plausible)).concat(shuffle([w.slice(2), w.slice(0, -2)].filter(plausible))))].slice(0, 2);
      const near = shuffle(roots.filter((x) => x[0] === r[0])).concat(shuffle(roots));
      const wrong = [...new Set(chops.concat(near))].filter((x) => App.flat(x) !== App.flat(r)).slice(0, 3);
      return { q: e.tl, sub: e.en + ' · What is the root word?', tlq: true, tlo: true, say: e.tl, opts: [r].concat(wrong), a: 0, cardId: e.id,
        exp: e.tl + ' (' + e.en + ') is built on the root ' + r + '.' + (e.tagalog ? ' ' + LANG.bridgeLang.name + ': ' + e.tagalog + '.' : '') };
    });
  }

  /* ---------- Say it in Aklanon (typed) ---------- */
  App.drillTypedScore = (answers, typed) => Math.max(0, ...answers.map((a) => App.similarity(a, typed)));
  const answersOf = (it) => (Array.isArray(it.akl) ? it.akl : Array.isArray(it.tl) ? it.tl : typeof (it.akl || it.tl) === 'string' ? [it.akl || it.tl] : []).filter(Boolean);
  App.drillAnswers = answersOf;
  const transItems = (set) => TRANS.filter((it) => (set === 'all' || it.set === set) && answersOf(it).length).map((it) => ({ prompt: it.en, answers: answersOf(it), why: it.why }));
  function runTyped(box, all, key) {
    if (!all.length) return empty(box);
    let items = pick(all, Math.min(N, all.length)), i = 0, right = 0;
    const draw = () => {
      if (i >= items.length) {
        box.innerHTML = scoreCard(right, items.length);
        box.querySelector('[data-act=retry]').onclick = () => { items = pick(all, Math.min(N, all.length)); i = 0; right = 0; draw(); };
        saveBest(key, right, items.length);
        return;
      }
      const it = items[i], ph = 'Type the ' + NAME;
      box.innerHTML = '<div class="card stack"><div class="spread"><span class="eyebrow">Sentence ' + (i + 1) + ' of ' + items.length + '</span></div>' +
        '<div style="font-size:1.12rem;font-weight:600">' + esc(it.prompt) + '</div>' +
        '<div class="row"><input class="input tl" data-in autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" style="flex:1;min-width:0" placeholder="' + esc(ph) + '" aria-label="' + esc(ph) + '">' +
        '<button class="btn primary" data-act="check">Check</button></div><div data-fb></div></div>';
      const inp = box.querySelector('[data-in]'), chk = box.querySelector('[data-act=check]');
      inp.focus();
      const check = () => {
        if (chk.disabled || !inp.value.trim()) return;
        const s = App.drillTypedScore(it.answers, inp.value), ok = s >= 80;
        if (ok) right++;
        App.recordAnswer(ok);
        chk.disabled = true; inp.disabled = true;
        const others = it.answers.slice(1, 4);
        box.querySelector('[data-fb]').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? LANG.quiz.right : LANG.quiz.wrong) + '</b> ' + s + '% of words match.' +
          '<div style="margin-top:6px"><span class="tl">' + esc(it.answers[0]) + '</span> ' + App.sayBtn(it.answers[0]) + '</div>' +
          (others.length ? '<div class="muted small" style="margin-top:4px">Also accepted: <span class="tl">' + others.map(esc).join(' · ') + '</span></div>' : '') +
          (it.why ? '<div style="margin-top:4px">' + esc(it.why) + '</div>' : '') + '</div>' +
          '<div class="row" style="margin-top:10px"><button class="btn primary" data-act="next">' + (i + 1 < items.length ? 'Next' : 'See score') + '</button></div>';
        const nx = box.querySelector('[data-act=next]');
        nx.onclick = () => { i++; draw(); };
        nx.focus();
      };
      chk.onclick = check;
      inp.onkeydown = (ev) => { if (ev.key === 'Enter') { ev.preventDefault(); check(); } };
    };
    draw();
  }

  /* ---------- Find the mistake ---------- */
  const errOk = (it) => it && typeof it.bad === 'string' && Array.isArray(it.i) && it.i.length && typeof it.fix === 'string';
  function runErrors(box, set, key) {
    const all = ERRORS.filter((it) => errOk(it) && (set === 'all' || it.set === set));
    if (!all.length) return empty(box);
    let items = pick(all, Math.min(N, all.length)), i = 0, right = 0;
    const draw = () => {
      if (i >= items.length) {
        box.innerHTML = scoreCard(right, items.length);
        box.querySelector('[data-act=retry]').onclick = () => { items = pick(all, Math.min(N, all.length)); i = 0; right = 0; draw(); };
        saveBest(key, right, items.length);
        return;
      }
      const it = items[i], words = it.bad.split(' ');
      box.innerHTML = '<div class="card stack"><div class="spread"><span class="eyebrow">Sentence ' + (i + 1) + ' of ' + items.length + '</span>' + (ERR_LABEL[it.set] ? '<span class="pill">' + esc(ERR_LABEL[it.set]) + '</span>' : '') + '</div>' +
        '<div class="muted">' + esc(it.en) + ' · Tap the word that is wrong.</div>' +
        '<div class="wline" data-line>' + words.map((w, k) => '<button class="wtile tl" data-k="' + k + '">' + esc(w) + '</button>').join('') + '</div><div data-fb></div></div>';
      box.querySelectorAll('.wtile').forEach((b) => (b.onclick = () => {
        const k = +b.dataset.k, ok = it.i.includes(k);
        if (ok) right++;
        App.recordAnswer(ok);
        box.querySelectorAll('.wtile').forEach((x) => { x.disabled = true; if (it.i.includes(+x.dataset.k)) x.classList.add('bad'); });
        if (!ok) b.classList.add('miss');
        box.querySelector('[data-fb]').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? LANG.quiz.right : LANG.quiz.wrong) + '</b> <span class="tl">' + esc(it.fix) + '</span> ' + App.sayBtn(it.fix) + (it.why ? '<div style="margin-top:4px">' + esc(it.why) + '</div>' : '') + '</div>' +
          '<div class="row" style="margin-top:10px"><button class="btn primary" data-act="next">' + (i + 1 < items.length ? 'Next' : 'See score') + '</button></div>';
        const nx = box.querySelector('[data-act=next]');
        nx.onclick = () => { i++; draw(); };
        nx.focus();
      }));
    };
    draw();
  }
  // The same items as a two-way choice, for the daily mix.
  const errorQs = (n) => pick(ERRORS.filter(errOk), n).map((it) => ({ q: 'Which sentence is right?', sub: it.en, tlo: true, opts: [it.fix, it.bad], a: 0, sayAfter: it.fix, exp: it.fix + (it.why ? ' ' + it.why : '') }));

  /* ---------- Fill the gap: DRILL_GAPS ---------- */
  const gapOk = (it) => it && typeof it.q === 'string' && it.q.split('____').length === 2 && Array.isArray(it.opts) && it.opts.length >= 2 && it.opts.includes(it.a);
  const gapFull = (it) => it.full || it.q.replace('____', it.a);
  App.drillGapFull = gapFull;
  function gapQs(set, n) {
    const src = GAPS.filter((it) => gapOk(it) && it.set === set);
    return pick(src, Math.min(n, src.length)).map((it) => ({ q: it.q, sub: it.en, tlq: true, tlo: true, opts: it.opts.slice(), a: it.opts.indexOf(it.a), sayAfter: gapFull(it), exp: gapFull(it) + (it.why ? ' ' + it.why : '') }));
  }

  /* ---------- Practise a lesson: LESSON_GAPS, or gap sentences made from the lesson ----------
     Automatic items: Aklanon sentences from (a) <table> rows whose header row has a cell reading exactly "Aklanon"
     (meaning from the "English" column if any) and (b) <i>…</i> in a <p> followed by "(English)". One token from an
     AKL_CLOSED group is blanked (a group from AKL_LESSON_GROUP[lesson] first); the wrong options are 2 or 3 other words of
     that group, picked with a seed made from the sentence, so an item is the same every time. */
  const CLOSED_IDX = new Map();
  Object.keys(CLOSED).forEach((g) => (Array.isArray(CLOSED[g]) ? CLOSED[g] : []).forEach((w) => { const k = norm(w); if (k && !CLOSED_IDX.has(k)) CLOSED_IDX.set(k, g); }));
  const GROUP_WORD = { markers: 'marker', personal: 'name marker', negators: 'negator', pronouns: 'pronoun', particles: 'small word', questions: 'question word' };
  // Words that only Tagalog has: a line with one of them is a Tagalog example, not an Aklanon one.
  const TL_ONLY = new Set(['ang', 'ng', 'nang', 'hindi', 'wala', 'huwag', 'siya', 'po', 'opo', 'niya', 'kayo', 'sila', 'ito', 'iyan', 'iyon', 'natin', 'akin', 'kanya', 'dito', 'doon', 'talaga', 'muna']);
  const cleanEn = (s) => String(s || '').replace(/\((?:cf\.|Zorc|SR\b)[^)]*\)/gi, '').replace(/[◌⚑]/g, '').replace(/\s+/g, ' ').trim();
  // Aklanon cell or span: the first of "A / B" alternatives, without brackets (notes, citations) or draft marks.
  const cleanAk = (s) => String(s || '').split(' / ')[0].replace(/\([^)]*\)/g, '').replace(/[◌⚑]/g, '').replace(/\s+([,.?!])/g, '$1').replace(/\s+/g, ' ').trim();
  // A list of single words ("lang, eang") is not a sentence.
  const isList = (s) => s.includes(',') && s.split(',').every((x) => x.trim().split(/\s+/).length <= 1);
  const coreOf = (tok) => tok.replace(/^[^\p{L}]+|[^\p{L}]+$/gu, '');
  function lessonSentences(l) {
    const out = [], seen = new Set();
    if (!l || typeof l.body !== 'string' || typeof DOMParser === 'undefined') return out;
    const doc = new DOMParser().parseFromString('<body>' + l.body + '</body>', 'text/html');
    const add = (ak, en) => { ak = cleanAk(ak); en = cleanEn(en); const k = norm(ak); if (!ak || seen.has(k)) return; seen.add(k); out.push({ ak, en }); };
    doc.querySelectorAll('table').forEach((t) => {
      const rows = [...t.querySelectorAll('tr')];
      if (rows.length < 2) return;
      const head = [...rows[0].children].map((c) => c.textContent.trim());
      const ai = head.indexOf('Aklanon'), ei = head.indexOf('English');
      if (ai < 0) return;
      rows.slice(1).forEach((tr) => { const c = tr.children; if (c[ai]) add(c[ai].textContent, ei >= 0 && c[ei] ? c[ei].textContent : ''); });
    });
    doc.querySelectorAll('p i').forEach((i) => {
      const nx = i.nextSibling, m = nx && nx.nodeType === 3 ? /^\s*\(([^)]+)\)/.exec(nx.nodeValue) : null;
      if (!m || /^\s*(cf\.|Zorc|SR\b)/i.test(m[1])) return;
      add(i.textContent, m[1]);
    });
    return out;
  }
  function autoItem(l, s) {
    const toks = s.ak.split(/\s+/);
    if (toks.filter((t) => coreOf(t)).length < 2 || isList(s.ak)) return null;
    // An item needs a real English meaning: not empty, not a page reference or a grammar label.
    const en = (s.en || '').trim();
    if (!/[a-z]{2}/i.test(en) || /^(c?f\.|pp?\.|~|d\.)\s*\d/i.test(en) || /\bin focus\b/i.test(en)) return null;
    const cores = toks.map(coreOf), keys = cores.map(norm);
    if (keys.some((k) => TL_ONLY.has(k))) return null;
    const pref = [].concat(LGROUP[l.id] || []);
    const cand = keys.map((k, i) => ({ i, k, g: CLOSED_IDX.get(k) })).filter((c) => c.g && keys.filter((x) => x === c.k).length === 1 && CLOSED[c.g].length >= 3);
    if (!cand.length) return null;
    const best = cand.filter((c) => pref.includes(c.g));
    const rnd = seededRnd(l.id + '|' + s.ak);
    const c = seededPick(best.length ? best : cand, 1, rnd)[0];
    const others = [...new Set(CLOSED[c.g].map(norm))].filter((w) => w && w !== c.k);
    const wrong = seededPick(others, Math.min(3, others.length), rnd);
    if (wrong.length < 2) return null;
    const q = toks.map((t, i) => (i === c.i ? t.replace(cores[i], '____') : t)).join(' ');
    return { q, en: s.en, a: c.k, opts: [c.k].concat(wrong), full: s.ak, why: s.ak + ' (' + c.k + ' is a ' + (GROUP_WORD[c.g] || c.g) + ').', auto: true };
  }
  const lgOk = (it) => gapOk(it);
  const autoCache = {};
  const autoLessonGaps = (l) => (autoCache[l.id] || (autoCache[l.id] = lessonSentences(l).map((s) => autoItem(l, s)).filter(Boolean)));
  const LV = () => W.LESSONS || [];
  const lgItems = (id) => {
    if (typeof id !== 'string') return [];
    if (Object.prototype.hasOwnProperty.call(LGAPS, id) && Array.isArray(LGAPS[id])) { const v = LGAPS[id].filter(lgOk); if (v.length) return v; }
    const l = LV().find((x) => x && x.id === id);
    return l ? autoLessonGaps(l) : [];
  };
  const LG_MIN = 4;
  App.lessonGapItems = lgItems;
  App.lessonGapCount = (id) => { const n = lgItems(id).length; return n >= LG_MIN ? n : 0; };
  const lgQ = (it) => ({ q: it.q, sub: it.en, tlq: true, tlo: true, opts: it.opts.slice(), a: it.opts.indexOf(it.a), sayAfter: gapFull(it), exp: it.why || gapFull(it) });
  const lgLessons = () => LV().filter((l) => l && lgItems(l.id).length >= LG_MIN);
  const lgLessonQs = (id) => shuffle(lgItems(id)).slice(0, N).map(lgQ);
  const lgBest = (k) => { const v = lgStore()[k]; return typeof v === 'number' ? v : null; };
  const lgPill = (b) => (b != null ? ' <span class="pill good">Best ' + b + '%</span>' : '');
  function lgPicker(el, q) {
    const all = lgLessons(), units = [];
    all.forEach((l) => { let u = units.find((x) => x[0] === l.unit); if (!u) units.push((u = [l.unit, []])); u[1].push(l); });
    const done = all.filter((l) => lgBest(l.id) != null).length;
    const first = all.find((l) => App.state.done.lessons[l.id] != null && lgBest(l.id) == null) || all.find((l) => lgBest(l.id) == null) || all[0];
    el.innerHTML = '<div class="breadcrumb"><a href="#/drills">Drills</a> / Practise a lesson</div><h1>Practise a lesson</h1><p class="muted">Ten gap sentences from the examples of one lesson. Choose the word that fills the gap; the English line tells you what the sentence means. Every lesson page with enough examples has a button for its own practice.</p>' +
      draftNote() +
      (q.l ? '<div class="notice info" style="margin-bottom:12px">That lesson has too few example sentences for practice. Choose one below.</div>' : '') +
      (all.length ? '<div class="card stack"><label class="small lg-pick">Lesson <select class="input" id="lgsel">' +
        units.map(([u, ls]) => '<optgroup label="' + esc(u) + '">' + ls.map((l) => { const b = lgBest(l.id); return '<option value="' + esc(l.id) + '"' + (l === first ? ' selected' : '') + '>' + esc(l.title) + ' (' + lgItems(l.id).length + ')' + (b != null ? ' · best ' + b + '%' : '') + '</option>'; }).join('') + '</optgroup>').join('') +
        '</select></label><div class="row"><button class="btn primary" id="lggo">Start</button><span class="muted small">' + done + ' of ' + all.length + ' lessons practised</span></div></div>'
        : '<div class="notice info">No lesson has enough example sentences yet.</div>') +
      '<div class="row" style="margin-top:14px"><a class="btn" href="#/lessons">All lessons</a>' + ALL + '</div>';
    const go = el.querySelector('#lggo');
    if (go) go.onclick = () => { const id = el.querySelector('#lgsel').value; App._lgAuto = id; App.go('#/drills/lessongaps?l=' + encodeURIComponent(id)); };
  }
  function lgView(el, q) {
    const les = q.l ? LV().find((l) => l && l.id === q.l && lgItems(l.id).length >= LG_MIN) : null;
    if (!les) return lgPicker(el, q);
    const order = lgLessons(), next = order[order.indexOf(les) + 1], n = lgItems(les.id).length;
    el.innerHTML = '<div class="breadcrumb"><a href="#/drills">Drills</a> / <a href="#/drills/lessongaps">Practise a lesson</a></div>' +
      '<div class="row"><span class="pill lv">' + esc(les.level || '') + '</span><span class="eyebrow">Lesson practice · ' + esc(les.unit || '') + '</span></div>' +
      '<h1 style="margin-top:6px">' + esc(les.title) + '</h1><p class="muted">' + n + ' gap sentences from this lesson' + (n > N ? ', ten at a time' : '') + ', in a new order each time. Choose the word that fills the gap; the English line tells you what the sentence means.</p>' +
      draftNote() +
      '<div class="card stack"><div class="row"><button class="btn primary" id="lggo">Start</button><span data-best>' + lgPill(lgBest(les.id)) + '</span></div><div id="dbox"></div></div>' +
      '<div class="row" style="margin-top:14px"><a class="btn" href="#/lessons/' + esc(les.id) + '">Back to the lesson</a><a class="btn" href="#/drills/lessongaps">Choose another lesson</a></div>';
    const box = el.querySelector('#dbox');
    const after = '<a class="btn" href="#/lessons/' + esc(les.id) + '">Back to the lesson</a>' + (next ? '<a class="btn" href="#/drills/lessongaps?l=' + esc(next.id) + '" data-lgauto="' + esc(next.id) + '">Next lesson’s practice</a>' : '');
    const start = () => {
      const inner = document.createElement('div'); inner.style.marginTop = '12px'; box.innerHTML = ''; box.appendChild(inner);
      inner.addEventListener('click', (e) => { const a = e.target.closest('[data-lgauto]'); if (a) App._lgAuto = a.dataset.lgauto; });
      App.runQuiz(inner, lgLessonQs(les.id), { after, onDone: (r, k) => {
        const g = lgStore(); g[les.id] = Math.max(lgBest(les.id) || 0, Math.round((100 * r) / k));
        App.activity(10); App.save();
        const b = el.querySelector('[data-best]'); if (b) b.innerHTML = lgPill(g[les.id]);
      } });
    };
    el.querySelector('#lggo').onclick = start;
    if (App._lgAuto && App._lgAuto === les.id) { App._lgAuto = null; start(); }
  }
  App.drillLessonGaps = { items: lgItems, lessons: lgLessons, lessonQs: lgLessonQs, sentences: (id) => lessonSentences(LV().find((l) => l.id === id)) }; // for tests

  /* ---------- Daily mix: one question from each of several drills ---------- */
  function vocabQs(n) {
    const s = App.state, now = Date.now();
    const mine = (s.mistakes || []).concat(Object.keys(s.srs || {}).filter((id) => (s.srs[id].due || 0) <= now)).filter((id) => /^d\d+$/.test(id)).map((id) => App.dictById[id]).filter(Boolean);
    const src = [...new Set(shuffle(mine).slice(0, n).concat(pick(App.DICT.filter((e) => e.cat !== 'stigma'), n)))].slice(0, n);
    return src.map((e) => {
      const wrong = [...new Set(shuffle(App.DICT.filter((x) => x.cat === e.cat && x.en !== e.en)).map((x) => x.en))].slice(0, 3);
      return { q: e.tl, sub: 'What does it mean?', tlq: true, say: e.tl, opts: [e.en].concat(wrong), a: 0, cardId: e.id, exp: e.tl + ' = ' + e.en + '.' };
    }).filter((q) => q.opts.length >= 2);
  }
  const dayKey = () => App.today();
  App.dailyToday = () => (App.state.done.daily || {})[dayKey()];
  const DAILY_PARTS = [['Markers', () => clozeQs('all', 1)], ['Register', () => switchQs('f-c', 1)], ['Roots', () => rootQs('all', 1)], ['Find the mistake', () => errorQs(1)],
    ['Negation', () => gapQs('neg', 1)], ['Pronouns', () => gapQs('pn', 1)], ['Question words', () => gapQs('qw', 1)], ['Small words', () => gapQs('pt', 1)], ['Aspect', () => gapQs('asp', 1)],
    ['Lesson practice', () => { const ls = lgLessons(); if (!ls.length) return []; const fin = ls.filter((l) => App.state.done.lessons[l.id] != null); const l = pick(fin.length ? fin : ls, 1)[0]; return pick(lgItems(l.id), 1).map(lgQ); }]];
  const DAILY_N = 8;
  const tagged = (tag) => (q) => Object.assign(q, { sub: tag + ' · ' + (q.sub || '') });
  const dailyQs = () => {
    const extra = Array.isArray(App.dailyExtra) ? App.dailyExtra.filter((p) => Array.isArray(p) && typeof p[1] === 'function') : [];
    const out = vocabQs(2).map(tagged('Vocabulary')), used = new Set(['Vocabulary']);
    for (const [tag, f] of shuffle(DAILY_PARTS.concat(extra))) {
      if (used.size > DAILY_N) break;
      if (used.has(tag)) continue;
      let got = []; try { got = f() || []; } catch (e) { got = []; }
      if (!got.length) continue;
      used.add(tag); out.push(tagged(tag)(got[0]));
    }
    return shuffle(out);
  };
  V.daily = (el) => {
    const done = App.dailyToday(), days = Object.keys(App.state.done.daily || {}).length;
    el.innerHTML = '<div class="breadcrumb"><a href="#/drills">Drills</a> / Daily mix</div><h1>Daily mix</h1><p class="muted">About ten mixed questions, a few minutes: two words (your mistakes and due cards first), then one question from each of up to eight drills, chosen at random. A new set every time you start.</p>' +
      draftNote() +
      '<div class="card stack"><div class="row"><button class="btn primary" id="dgo">' + (done != null ? 'Go again' : 'Start') + '</button><span class="pill' + (done != null ? ' good' : '') + '">' + (done != null ? 'Done today · best ' + done + '%' : 'Not done today') + '</span>' + (days ? '<span class="muted small">' + days + (days === 1 ? ' day' : ' days') + ' so far</span>' : '') + '</div><div id="dbox"></div></div>' +
      '<div class="row" style="margin-top:14px">' + ALL + '<a class="btn" href="#/flash/due">Flashcards due</a></div>';
    const box = el.querySelector('#dbox');
    el.querySelector('#dgo').onclick = () => {
      const inner = document.createElement('div'); inner.style.marginTop = '12px'; box.innerHTML = ''; box.appendChild(inner);
      App.runQuiz(inner, dailyQs(), { after: '<a class="btn" href="#/">Home</a>', onDone: (r, n) => {
        const s = App.state, d = (s.done.daily = s.done.daily || {}), k = dayKey();
        d[k] = Math.max(d[k] || 0, Math.round((100 * r) / n));
        Object.keys(d).sort().slice(0, -90).forEach((old) => delete d[old]); // keep three months
        App.activity(15); App.save();
      } });
    };
  };

  /* ---------- Runners and pages ---------- */
  const quiz = (box, qs, key) => { if (!qs.length) return empty(box); App.runQuiz(box, qs, { onDone: (r, n) => saveBest(key, r, n), after: ALL }); };
  const RUN = {
    switch: (box, set) => quiz(box, switchQs(set, N), 'switch:' + set),
    markers: (box, set) => quiz(box, clozeQs(set, N), 'markers:' + set),
    build: (box) => runBuild(box, 'build:all'),
    roots: (box, set) => quiz(box, rootQs(set, N), 'roots:' + set),
    errors: (box, set) => runErrors(box, set, 'errors:' + set),
    translate: (box, set) => runTyped(box, transItems(set), 'translate:' + set)
  };
  DRILLS.filter((d) => d.gap).forEach((d) => (RUN[d.id] = (box) => quiz(box, gapQs(d.gap, N), d.id + ':all')));
  App.drillQs = { switch: switchQs, markers: clozeQs, roots: rootQs, rootWords, errors: errorQs, gaps: gapQs, vocab: vocabQs, daily: dailyQs, translate: transItems }; // for tests

  const countOf = (d) => (d.id === 'switch' ? SECTIONS().reduce((a, s) => a + s.phrases.filter((p) => p.f && p.c && p.f !== p.c).length, 0) : d.id === 'markers' ? clozeQs('all', 1e6).length : d.id === 'build' ? BUILD.length : d.id === 'roots' ? rootWords().length :
    d.id === 'errors' ? ERRORS.filter(errOk).length : d.id === 'translate' ? transItems('all').length : d.gap ? GAPS.filter((it) => gapOk(it) && it.set === d.gap).length : d.id === 'lessongaps' ? lgLessons().length : 0);
  const tileOf = (d) => { const b = bestOf(d.id), n = countOf(d); return '<a class="tile" href="#/drills/' + d.id + '"><span class="eyebrow">' + esc(d.eyebrow) + '</span><h3>' + esc(d.title) + '</h3><p>' + esc(d.blurb) + '</p><div class="meta row"><span class="pill' + (b != null ? ' good' : '') + '">' + (b != null ? 'Best ' + b + '%' : 'Not tried yet') + '</span><span class="muted small">' + n + (d.id === 'lessongaps' ? ' lessons' : ' items') + '</span></div></a>'; };
  App.drillTiles = (ids) => (ids ? ids.map(byId).filter(Boolean) : DRILLS).map(tileOf).join(''); // the Practice page (js/app.js)
  V.drills = (el) => {
    el.innerHTML = '<h1>Grammar drills</h1><p class="muted">Short grammar and writing drills, ten items each. They go with the lessons; each drill links to the lessons it practises.</p>' +
      draftNote('Flag anything doubtful in the lessons or phrases for <a href="#/review">review</a>.') +
      GROUPS.map((g, i) => { const ds = DRILLS.filter((d) => (d.g || 'Grammar') === g); return ds.length ? '<h2' + (i ? ' style="margin-top:18px"' : '') + '>' + esc(g) + '</h2><div class="grid">' + ds.map(tileOf).join('') + '</div>' : ''; }).join('') +
      '<div class="row" style="margin-top:14px"><a class="btn primary" href="#/daily">Daily mix</a><a class="btn" href="#/drills/handout">' + App.icons.read + ' Print handout</a><a class="btn" href="#/vocab">Vocabulary practice</a><a class="btn" href="#/practice">All practice</a></div>';
  };
  V.drill = (el, p, q) => {
    if (p.id === 'lessongaps') return lgView(el, q || {});
    const d = byId(p.id);
    if (!d) { el.innerHTML = '<h1>Grammar drills</h1><p>That drill does not exist. <a href="#/drills">See all drills</a>.</p>'; return; }
    const lessons = LV().filter((l) => d.lessons.includes(l.id));
    const opts = d.opts();
    el.innerHTML = '<div class="breadcrumb"><a href="#/drills">Drills</a> / ' + esc(d.title) + '</div><h1>' + esc(d.title) + '</h1><p class="muted">' + esc(d.intro) + '</p>' + draftNote() +
      (d.id === 'markers' && setList() ? '<p class="muted small" style="margin-top:-4px">Sets: <span class="tl">' + esc(setList()) + '</span></p>' : '') +
      '<div class="card stack"><div class="row">' +
      (opts.length ? '<label class="small" style="max-width:100%">Set <select class="input" id="dset" style="width:auto;max-width:100%">' + opts.map(([v, t]) => '<option value="' + esc(v) + '">' + esc(t) + '</option>').join('') + '</select></label>' : '') +
      '<button class="btn primary" id="dgo">Start</button><span class="muted small">' + countOf(d) + ' items</span></div><div id="dbox"></div></div>' +
      (lessons.length ? '<p class="muted small" style="margin-top:12px">Lessons for this drill: ' + lessons.map((l) => '<a href="#/lessons/' + l.id + '">' + esc(l.title) + '</a>').join(' · ') + '</p>' : '') +
      (HANDOUT.includes(d.id) ? '<div class="row" style="margin-top:10px"><a class="btn" href="#/drills/handout">' + App.icons.read + ' Print handout</a></div>' : '') +
      (d.id === 'switch' ? '<div class="notice info" style="margin-top:12px">Practice phrasings, not validated instrument translations.</div>' : '');
    const box = el.querySelector('#dbox');
    el.querySelector('#dgo').onclick = () => {
      const inner = document.createElement('div'); inner.style.marginTop = '12px'; box.innerHTML = ''; box.appendChild(inner);
      const sel = el.querySelector('#dset');
      RUN[d.id](inner, sel ? sel.value : (opts[0] && d.id === 'switch' ? 'f-c' : 'all'));
    };
  };
})();
