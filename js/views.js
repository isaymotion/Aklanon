/* Views: home, search, dictionary, flashcards, lessons, progress, settings, What's New, About. */
(function () {
  const { esc, norm, shuffle, pick, icons } = App;
  const V = (App.views = {});
  const S = () => App.state;
  const lvPill = (lv) => '<span class="pill lv">' + esc(lv) + '</span>';
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';

  /* ---------- Reusable quiz ---------- */
  // qs: [{q, opts, a, exp, cardId}]
  App.runQuiz = function (el, qs, opts) {
    opts = opts || {};
    let i = 0, right = 0;
    const draw = () => {
      if (i >= qs.length) {
        const pct = Math.round((100 * right) / qs.length);
        el.innerHTML = '<div class="card stack"><h3>' + (pct >= 80 ? LANG.quiz.great : pct >= 50 ? LANG.quiz.ok : LANG.quiz.keepGoing) + ' ' + right + ' / ' + qs.length + '</h3>' +
          '<div class="progress"><i style="width:' + pct + '%"></i></div>' +
          '<div class="row"><button class="btn primary" data-act="retry">Try again</button>' + (opts.after || '') + '</div></div>';
        el.querySelector('[data-act=retry]').onclick = () => { i = 0; right = 0; qs = shuffle(qs); draw(); };
        opts.onDone && opts.onDone(right, qs.length);
        return;
      }
      const q = qs[i];
      const order = shuffle(q.opts.map((o, k) => k));
      // q.hideQ: listening item. The text is hidden until answered; the clip plays on load and from the big button.
      const play = () => App.speak(q.say, q.rate ? { rate: q.rate } : undefined);
      el.innerHTML = '<div class="card stack"><div class="spread"><span class="eyebrow">Question ' + (i + 1) + ' of ' + qs.length + '</span>' + (q.say && !q.hideQ ? App.sayBtn(q.say) : '') + '</div>' +
        (q.hideQ
          ? '<div class="listen-q"><button class="btn primary" data-act="play" aria-label="Play again">' + App.icons.sound + ' Play again</button><span class="muted small">' + esc(q.hideQ === true ? 'Listen, then choose what the patient means.' : q.hideQ) + '</span></div><div class="tl" data-qtext hidden style="font-size:1.12rem;font-weight:600">' + esc(q.q) + '</div>'
          : '<div class="' + (q.tlq ? 'tl' : '') + '" style="font-size:1.12rem;font-weight:600">' + esc(q.q) + '</div>') + (q.sub ? '<div class="muted">' + esc(q.sub) + '</div>' : '') +
        '<div class="opts">' + order.map((k) => '<button class="opt' + (q.tlo ? ' tl' : '') + '" data-k="' + k + '">' + esc(q.opts[k]) + '</button>').join('') + '</div><div data-fb></div></div>';
      if (q.hideQ) { el.querySelector('[data-act=play]').onclick = play; setTimeout(play, 150); }
      el.querySelectorAll('.opt').forEach((b) => (b.onclick = () => {
        const k = +b.dataset.k, ok = k === q.a;
        if (ok) right++;
        App.recordAnswer(ok, q.cardId);
        el.querySelectorAll('.opt').forEach((x) => { x.disabled = true; if (+x.dataset.k === q.a) x.classList.add('right'); });
        if (!ok) b.classList.add('wrong');
        if (q.hideQ) { const qt = el.querySelector('[data-qtext]'); if (qt) qt.hidden = false; }
        el.querySelector('[data-fb]').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + '">' + '<b>' + (ok ? LANG.quiz.right : LANG.quiz.wrong) + '</b> ' + esc(q.exp || '') + '</div>' +
          '<div class="row" style="margin-top:10px"><button class="btn primary" data-act="next">' + (i + 1 < qs.length ? 'Next' : 'See score') + '</button></div>';
        el.querySelector('[data-act=next]').onclick = () => { i++; draw(); };
        el.querySelector('[data-act=next]').focus();
      }));
    };
    draw();
  };

  /* ---------- Home ---------- */
  V.home = (el) => {
    const s = S();
    const decks = App.decks();
    const due = decks.find((d) => d.id === 'due').ids.length;
    const lessonsDone = Object.keys(s.done.lessons).length;
    const nextLesson = (window.LESSONS || []).find((l) => !(l.id in s.done.lessons));
    const isNew = s.seenVersion !== APP_META.version;
    const tile = (h, eyebrow, title, p) => '<a class="tile" href="' + h + '"><span class="eyebrow">' + eyebrow + '</span><h3>' + title + '</h3>' + (p ? '<p>' + p + '</p>' : '') + '</a>';
    const pins = (s.pins || []).slice().reverse();
    const recent = (s.recent || []).filter((r) => !/^#\/(more|settings|progress|new|about|search)/.test(r.hash) && !App.isPinned(r.hash)).slice(0, 4);
    // One quick drill a day, rotating so the Home screen nudges different skills.
    const quick = [['#/psych/listen', 'Listening drill', 'Hear 10 replies, pick the meaning'], ['#/flash/psych', 'Psychiatry flashcards', 'A quick review'], ['#/psych/point', 'Point board', 'Rehearse the replies a patient can tap']];
    const qd = quick[Math.floor(Date.now() / 864e5) % quick.length];
    const secs = window.PSYCH_SECTIONS || [];
    el.innerHTML =
      '<section class="hero"><svg class="rays" viewBox="0 0 100 100" aria-hidden="true">' + Array.from({ length: 8 }, (_, k) => '<rect x="47" y="2" width="6" height="30" fill="#F5C863" transform="rotate(' + k * 45 + ' 50 50)"/>').join('') + '<circle cx="50" cy="50" r="16" fill="#F5C863"/></svg>' +
      '<img src="icons/logo-96.png" alt=""><div><h1>' + esc(APP_META.name) + '</h1><p>' + esc(LANG.name) + ' for the psychiatric interview in Kalibo, Aklan.</p></div></section>' +
      (isNew ? '<a class="tile" href="#/new" style="margin-top:12px;border-color:var(--sand)"><span class="eyebrow">What\'s New · v' + esc(APP_META.version) + '</span><h3 style="margin-top:4px">' + esc(APP_CHANGELOG[0].title) + '</h3><p>See what\'s in this version.</p></a>' : '') +
      '<div class="stats" style="margin-top:14px">' +
      '<div class="stat"><b>' + App.streakNow() + '</b><span>day streak</span></div>' +
      '<div class="stat"><b>' + due + '</b><span>cards due</span></div>' +
      '<div class="stat"><b>' + lessonsDone + '/' + LESSONS.length + '</b><span>lessons done</span></div>' +
      '<div class="stat"><b>' + Object.keys(s.flags || {}).length + '</b><span>lines flagged for review</span></div></div>' +
      '<h2 style="margin-top:22px">Today</h2><div class="grid">' +
      (due ? tile('#/flash/due', 'Review', due + ' cards due', 'Spaced repetition keeps words fresh.') : tile('#/flash', 'Flashcards', 'Start a deck', 'Vocabulary and psychiatry phrases.')) +
      tile(qd[0], 'Quick practice', qd[1], qd[2]) +
      (nextLesson ? tile('#/lessons/' + nextLesson.id, 'Next lesson · ' + esc(nextLesson.level), esc(nextLesson.title), esc(nextLesson.summary)) : '') +
      '</div>' +
      (pins.length ? '<h2 style="margin-top:22px">Pinned</h2><div class="grid">' + pins.map((p) => tile(esc(p.hash), esc(p.sec || 'Pinned'), esc(p.title))).join('') + '</div>' : '') +
      (recent.length ? '<h2 style="margin-top:22px">Continue</h2><div class="grid">' + recent.map((r) => tile(esc(r.hash), esc(r.sec || 'Recent'), esc(r.title))).join('') + '</div>' : '') +
      '<h2 style="margin-top:22px">Psychiatry ' + esc(LANG.name) + '</h2><div class="grid">' +
      (secs[0] ? tile('#/psych/s/' + secs[0].id, 'Interview', esc(secs[0].title), secs[0].phrases.length + ' phrases.') : '') +
      tile('#/psych/point', 'Bedside', 'Point board (' + esc(LANG.point.title) + ')', 'The patient taps a reply; you read the English.') +
      tile('#/review', 'Review', 'For review', 'Lines you flagged for the native-speaker reviewer.') +
      tile('#/psych', 'All sections', 'Open the psychiatry track', secs.length + ' section' + (secs.length === 1 ? '' : 's') + ', the point board and the listening drill.') + '</div>' +
      '<p class="muted small" style="margin-top:18px">The <a href="#/dict">Dictionary</a> and every other page are listed under <a href="#/more">More</a>, and the search box at the top finds words, phrases, lessons and pages from anywhere. Pin any page with the star beside its title to keep it here.</p>';
  };

  /* ---------- Search results ---------- */
  V.search = (el, p, q) => {
    const term = q.q || '';
    const res = App.searchAll(term);
    const groups = {};
    res.forEach((r) => (groups[r.type] = groups[r.type] || []).push(r));
    el.innerHTML = '<h1>Search</h1><div class="row"><input class="input" id="sq" type="search" value="' + esc(term) + '" placeholder="Search ' + esc(LANG.name) + ' or English" style="flex:1;min-width:0"></div>' +
      '<p class="muted small">' + res.length + ' results' + (term ? ' for “' + esc(term) + '”' : '') + '. ' + esc(LANG.name) + ' words are matched by root too.</p>' +
      Object.entries(groups).map(([g, items]) => '<h2>' + esc(g) + ' <span class="muted small">' + items.length + '</span></h2><div class="card">' +
        items.slice(0, 40).map((r) => '<div class="entry"><div class="w"><a href="' + r.route + '">' + esc(r.title) + '</a></div><div class="d muted">' + esc(r.sub || '') + '</div></div>').join('') + '</div>').join('');
    const inp = el.querySelector('#sq');
    inp.onkeydown = (e) => { if (e.key === 'Enter') App.go('#/search?q=' + encodeURIComponent(inp.value)); };
  };

  /* ---------- Dictionary ---------- */
  V.dict = (el, p, q) => {
    let dir = q.dir || 'both', cat = q.cat || '', term = q.q || '', letter = q.l || '';
    const draw = () => {
      let list;
      if (term) list = App.searchDict(term, dir === 'both' ? null : dir).map((r) => Object.assign({ why: r.why }, r.e));
      else {
        list = App.DICT.filter((e) => (!cat || e.cat === cat) && (!letter || e.ftl.startsWith(letter)));
        if (dir === 'en') list = list.slice().sort((a, b) => a.nen.localeCompare(b.nen));
      }
      const shown = list.slice(0, 200);
      el.querySelector('#dres').innerHTML = '<p class="muted small">' + list.length + ' entries' + (list.length > 200 ? ' (showing 200)' : '') + '</p><div class="card">' +
        (shown.length ? shown.map((e) => entryHTML(e, dir === 'en')).join('') : '<p>No match. Try a shorter word or the root form.</p>') + '</div>';
    };
    const letters = 'a b k d e g h i l m n ng o p r s t u w y'.split(' ');
    el.innerHTML = '<h1>Dictionary</h1>' +
      '<div class="stack"><input class="input" id="dq" type="search" placeholder="Type ' + esc(LANG.name) + ' or English" value="' + esc(term) + '">' +
      '<div class="spread"><div class="seg" role="group" aria-label="Direction">' +
      [['both', 'Both'], ['tl', LANG.dictDir.tl], ['en', LANG.dictDir.en]].map(([k, t]) => '<button data-dir="' + k + '" class="' + (dir === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div>' +
      '<select class="input" id="dcat" style="width:auto;max-width:100%"><option value="">All topics</option>' + Object.entries(App.CATS).map(([k, t]) => '<option value="' + k + '"' + (cat === k ? ' selected' : '') + '>' + esc(t) + '</option>').join('') + '</select></div>' +
      '<div class="letters" aria-label="Browse by letter">' + letters.map((L) => '<button data-l="' + L + '" class="' + (letter === L ? 'on' : '') + '">' + L.toUpperCase() + '</button>').join('') + '</div></div><div id="dres" style="margin-top:12px"></div>';
    const dq = el.querySelector('#dq');
    let t;
    dq.oninput = () => { clearTimeout(t); t = setTimeout(() => { term = dq.value; letter = ''; draw(); }, 150); };
    el.querySelectorAll('[data-dir]').forEach((b) => (b.onclick = () => { dir = b.dataset.dir; el.querySelectorAll('[data-dir]').forEach((x) => x.classList.toggle('on', x === b)); draw(); }));
    el.querySelector('#dcat').onchange = (e) => { cat = e.target.value; term = ''; dq.value = ''; draw(); };
    el.querySelectorAll('[data-l]').forEach((b) => (b.onclick = () => { letter = letter === b.dataset.l ? '' : b.dataset.l; term = ''; dq.value = ''; el.querySelectorAll('[data-l]').forEach((x) => x.classList.toggle('on', x.dataset.l === letter)); draw(); }));
    draw();
    if (!term) setTimeout(() => window.innerWidth > 860 && dq.focus(), 0);
  };
  function entryHTML(e, enFirst) {
    const inDeck = !!S().srs[e.id];
    const head = enFirst ? '<div class="w" style="font-family:var(--font-ui)">' + esc(e.en) + '</div>' : '<div class="w"><a href="#/dict/' + e.id + '">' + esc(e.tl) + '</a></div>';
    const body = enFirst ? '<div class="d"><a class="tl" href="#/dict/' + e.id + '" style="font-weight:600">' + esc(e.tl) + '</a> <span class="muted small">' + esc(App.POS[e.pos] || '') + '</span></div>' : '<div class="d">' + esc(e.en) + ' <span class="muted small">' + esc(App.POS[e.pos] || '') + (e.root ? ' · root <a href="#/dict?q=' + encodeURIComponent(e.root) + '">' + esc(e.root) + '</a>' : '') + '</span></div>';
    return '<div class="entry">' + head + '<div class="acts">' + App.sayBtn(e.tl, e.tl) +
      '<button class="say" data-addcard="' + e.id + '" title="' + (inDeck ? 'In your review deck' : 'Add to flashcards') + '" aria-label="Add to flashcards">' + (inDeck ? icons.check : icons.plus) + '</button></div>' +
      body + bridgeLine(e.tagalog, 'nn') + (e.note ? '<div class="nn">' + esc(e.note) + '</div>' : '') + (e.why ? '<div class="nn">Matched by ' + esc(e.why) + '</div>' : '') + '</div>';
  }
  App.entryHTML = entryHTML;
  // Bridge language (LANG.bridgeLang, Tagalog): the learner's own language, shown as a small "TL:" line when present.
  function bridgeLine(text, cls) {
    if (!text) return '';
    const B = LANG.bridgeLang || { code: 'tl', name: '' };
    return '<div class="' + (cls || 'nn') + ' bridge"><abbr title="' + esc(B.name) + '">' + esc(String(B.code).toUpperCase()) + ':</abbr> ' + esc(text) + '</div>';
  }
  App.bridgeLine = bridgeLine;

  V.word = (el, p) => {
    const e = App.dictById[p.id];
    if (!e) { el.innerHTML = '<p>Word not found. <a href="#/dict">Back to dictionary</a></p>'; return; }
    const r = e.root || '';
    const related = r ? (App.byRoot.get(App.flat(r)) || []).filter((x) => x.id !== e.id) : [];
    const phrases = [];
    PSYCH_SECTIONS.forEach((s) => s.phrases.forEach((ph, i) => { if (App.flat(ph.f + ' ' + (ph.c || '')).includes(e.ftl) && e.ftl.length > 2) phrases.push([s, ph, i]); }));
    el.innerHTML = crumb([['Dictionary', '#/dict'], [e.tl]]) +
      '<div class="card stack"><div class="spread"><h1 class="tl" style="margin:0">' + esc(e.tl) + '</h1><div class="row">' + App.sayBtn(e.tl) +
      '<button class="btn sm" data-addcard="' + e.id + '">' + (S().srs[e.id] ? icons.check + ' In deck' : icons.plus + ' Add to flashcards') + '</button></div></div>' +
      '<div style="font-size:1.15rem">' + esc(e.en) + '</div><div class="row"><span class="pill">' + esc(App.POS[e.pos] || e.pos) + '</span><a class="pill" href="#/dict?cat=' + e.cat + '">' + esc(App.CATS[e.cat] || e.cat) + '</a>' + (r ? '<span class="pill">root: ' + esc(r) + '</span>' : '') + '</div>' + bridgeLine(e.tagalog, 'bridge-lg') +
      (e.note ? '<div class="notice info">' + esc(e.note) + '</div>' : '') + '</div>' +
      (related.length ? '<h2 style="margin-top:18px">Same root</h2><div class="card">' + related.map((x) => entryHTML(x)).join('') + '</div>' : '') +
      (phrases.length ? '<h2 style="margin-top:18px">In psychiatry phrases</h2><div class="card">' + phrases.slice(0, 8).map(([s, ph, i]) => '<div class="entry"><div class="w"><a href="#/psych/s/' + s.id + '?p=' + i + '">' + esc(ph.f) + '</a></div><div class="d muted">' + esc(ph.en) + '</div></div>').join('') + '</div>' : '');
  };

  /* ---------- Flashcards ---------- */
  V.flash = (el) => {
    const decks = App.decks();
    const groups = {};
    decks.forEach((d) => (groups[d.group] = groups[d.group] || []).push(d));
    const now = Date.now();
    el.innerHTML = '<h1>Flashcards</h1><p class="muted">Spaced repetition: cards you know come back less often, cards you miss come back sooner. Wrong answers anywhere in the app go to <b>My mistakes</b>.</p>' +
      '<div class="row" style="margin-bottom:12px"><span class="muted small">Card front:</span><div class="seg" role="group">' +
      [['tl-en', LANG.cardDir['tl-en']], ['en-tl', LANG.cardDir['en-tl']]].map(([k, t]) => '<button data-dirc="' + k + '" class="' + (S().settings.cardDir === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div></div>' +
      Object.entries(groups).map(([g, ds]) => '<h2>' + esc(g) + '</h2><div class="grid">' + ds.map((d) => {
        const seen = d.ids.filter((id) => S().srs[id]).length;
        const due = d.ids.filter((id) => S().srs[id] && S().srs[id].due <= now).length;
        const disabled = !d.ids.length;
        return '<a class="tile" href="' + (disabled ? '#/flash' : '#/flash/' + d.id) + '"' + (disabled ? ' aria-disabled="true" style="opacity:.6"' : '') + '><h3>' + esc(d.name) + '</h3><p>' + d.ids.length + ' cards · ' + seen + ' learned</p><div class="meta row">' + (due ? '<span class="pill warn">' + due + ' due</span>' : '') + (d.id === 'mistakes' && !d.ids.length ? '<span class="pill good">No mistakes yet</span>' : '') + '</div></a>';
      }).join('') + '</div>').join('');
    el.querySelectorAll('[data-dirc]').forEach((b) => (b.onclick = () => { S().settings.cardDir = b.dataset.dirc; App.save(); V.flash(el); }));
  };

  V.review = (el, p) => {
    const deck = App.decks().find((d) => d.id === p.deck);
    if (!deck) { el.innerHTML = '<p>Deck not found. <a href="#/flash">All decks</a></p>'; return; }
    let queue = p.deck === 'mistakes' ? shuffle(deck.ids) : App.srsQueue(deck.ids);
    let i = 0, flipped = false, done = 0;
    const enFirst = S().settings.cardDir === 'en-tl';
    const draw = () => {
      if (i >= queue.length) {
        el.innerHTML = crumb([['Flashcards', '#/flash'], [deck.name]]) + '<div class="card stack" style="text-align:center"><h2>' + (done ? 'Done! ' + done + ' cards reviewed.' : 'Nothing due in this deck right now.') + '</h2>' +
          '<p class="muted">' + (done ? 'Come back tomorrow for the next reviews.' : 'You have reviewed everything due and reached today\'s new-card limit for this deck.') + '</p>' +
          '<div class="row" style="justify-content:center"><a class="btn primary" href="#/flash">All decks</a><button class="btn" data-act="cram">Practice anyway</button></div></div>';
        el.querySelector('[data-act=cram]').onclick = () => { queue = pick(deck.ids, 20); i = 0; draw(); };
        return;
      }
      const c = App.cardFor(queue[i]);
      if (!c) { i++; draw(); return; }
      const front = enFirst ? esc(c.en) : esc(c.tl), back = enFirst ? esc(c.tl) : esc(c.en);
      el.innerHTML = crumb([['Flashcards', '#/flash'], [deck.name]]) +
        '<div class="spread" style="margin-bottom:8px"><span class="muted small">' + (i + 1) + ' / ' + queue.length + (S().srs[c.id] ? '' : ' · <span class="pill">new</span>') + '</span>' + App.sayBtn(c.tl) + '</div>' +
        '<div class="progress" style="margin-bottom:12px"><i style="width:' + Math.round((100 * i) / queue.length) + '%"></i></div>' +
        '<div class="card flash" id="fc" tabindex="0" role="button" aria-label="Flip card"><div>' +
        '<div class="front" style="' + (enFirst ? 'font-family:var(--font-ui);font-size:1.35rem' : '') + '">' + front + '</div>' +
        (flipped ? '<div class="back ' + (enFirst ? 'tl' : '') + '">' + back + '</div>' + (c.alt ? '<div class="hint tl">Also: ' + esc(c.alt) + '</div>' : '') + bridgeLine(c.bridge, 'hint') + (c.note ? '<div class="hint">' + esc(c.note) + '</div>' : '') + (c.sub ? '<div class="hint">' + esc(c.sub) + '</div>' : '') : '<div class="hint">Tap or press Space to show the answer</div>') +
        '</div></div>' +
        (flipped ? '<div class="grade" style="margin-top:12px">' + [['again', 'Again', 0], ['', 'Hard', 1], ['good', 'Good', 2], ['', 'Easy', 3]].map(([cls, t, g]) => '<button class="' + cls + '" data-g="' + g + '">' + t + '<small>' + App.nextLabel(c.id, g) + '</small></button>').join('') + '</div><p class="muted small" style="text-align:center">Keys: 1 Again · 2 Hard · 3 Good · 4 Easy</p>' : '');
      const fc = el.querySelector('#fc');
      fc.onclick = (ev) => { if (ev.target.closest('.say')) return; if (!flipped) { flipped = true; if (!enFirst) App.speak(c.tl); draw(); } };
      el.querySelectorAll('[data-g]').forEach((b) => (b.onclick = () => grade(+b.dataset.g, c)));
    };
    const grade = (g, c) => { App.srsGrade(c.id, g); done++; if (g === 0) queue.push(c.id); i++; flipped = false; draw(); };
    App.keyHandler = (e) => {
      if (e.target.matches('input,textarea,select')) return;
      if (e.key === ' ' && !flipped) { e.preventDefault(); flipped = true; draw(); }
      else if (flipped && ['1', '2', '3', '4'].includes(e.key)) { const c = App.cardFor(queue[i]); c && grade(+e.key - 1, c); }
    };
    draw();
  };

  /* ---------- Lessons ---------- */
  V.lessons = (el) => {
    const units = {};
    LESSONS.forEach((l) => (units[l.unit] = units[l.unit] || []).push(l));
    el.innerHTML = '<h1>Lessons</h1><p class="muted">Short grammar and culture lessons, each with a quiz. Tap <span class="kbd">🔊</span> on any example to hear it.</p>' +
      Object.entries(units).map(([u, ls]) => '<h2>' + esc(u) + '</h2><div class="grid">' + ls.map((l) => {
        const sc = S().done.lessons[l.id];
        return '<a class="tile" href="#/lessons/' + l.id + '"><div class="row">' + lvPill(l.level) + (sc != null ? '<span class="pill good">' + icons.check.replace('<svg', '<svg width="12" height="12"') + ' ' + sc + '%</span>' : '') + '</div><h3 style="margin-top:6px">' + esc(l.title) + '</h3><p>' + esc(l.summary) + '</p></a>';
      }).join('') + '</div>').join('');
  };
  V.lesson = (el, p) => {
    const l = LESSONS.find((x) => x.id === p.id);
    if (!l) { el.innerHTML = '<p>Lesson not found.</p>'; return; }
    const idx = LESSONS.indexOf(l), next = LESSONS[idx + 1], prev = LESSONS[idx - 1];
    el.innerHTML = crumb([['Lessons', '#/lessons'], [l.title]]) + '<div class="row">' + lvPill(l.level) + '<span class="muted small">' + esc(l.unit) + '</span></div><h1 style="margin-top:6px">' + esc(l.title) + '</h1>' +
      (l.draft ? '<div class="notice warn" style="margin-bottom:12px">Draft for review: the ' + esc(LANG.name) + ' in this lesson has not yet been checked by a native speaker.</div>' : '') +
      '<div class="lesson-body">' + l.body.replace(/<table>/g, '<div class="tablewrap"><table>').replace(/<\/table>/g, '</table></div>') + '</div>' +
      '<h2 style="margin-top:20px">Check yourself</h2><div id="lq"></div>' +
      '<div class="spread" style="margin-top:16px">' + (prev ? '<a class="btn" href="#/lessons/' + prev.id + '">← ' + esc(prev.title) + '</a>' : '<span></span>') + (next ? '<a class="btn" href="#/lessons/' + next.id + '">' + esc(next.title) + ' →</a>' : '') + '</div>';
    // speak buttons for examples
    el.querySelectorAll('.lesson-body .ex').forEach((ex) => { const b = ex.querySelector('b'); if (b) { ex.style.gridTemplateColumns = 'minmax(0,1fr) auto'; const btn = document.createElement('div'); btn.innerHTML = App.sayBtn(b.textContent); btn.style.gridRow = '1 / span 2'; btn.style.gridColumn = '2'; ex.appendChild(btn.firstChild); } });
    App.runQuiz(el.querySelector('#lq'), l.quiz.map(([q, opts, a, exp]) => ({ q, opts, a, exp })), {
      onDone: (r, n) => { const pct = Math.round((100 * r) / n); S().done.lessons[l.id] = Math.max(pct, S().done.lessons[l.id] || 0); App.activity(10); }
    });
  };

  /* ---------- Speech support note (used by Settings) ---------- */
  function speechSupportNote() {
    const st = App.audioStatus();
    const parts = [];
    if (st.pack || st.voiceKind === 'native' || st.voiceKind === 'chosen') { /* a recording or a native device voice */ }
    else if (st.voiceKind === 'near') parts.push('There is no ' + esc(LANG.voiceName) + ' voice' + (App.hasPackLang ? ' installed' : ' on any device yet') + ', so audio uses the closest voice on this device (' + esc(st.voiceName) + '). Treat it as a rough guide, not native pronunciation.');
    else parts.push(App.canSpeak ? 'No usable voice on this device for ' + esc(LANG.name) + '.' : 'This browser has no text-to-speech.');
    return parts.length ? '<div class="notice" style="margin-bottom:12px">' + parts.join(' ') + ' <a href="#/settings">Voice settings</a></div>' : '';
  }
  App.speechSupportNote = speechSupportNote;

  /* ---------- Progress ---------- */
  V.progress = (el) => {
    const s = S();
    const learned = Object.keys(s.srs).length;
    const mature = Object.values(s.srs).filter((c) => c.i >= 21).length;
    const acc = s.stats.answered ? Math.round((100 * s.stats.correct) / s.stats.answered) : 0;
    const days = new Set(s.streak.days || []);
    const cal = Array.from({ length: 84 }, (_, k) => { const d = new Date(Date.now() - (83 - k) * 864e5); const key = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); return '<i title="' + key + '" style="display:block;aspect-ratio:1;border-radius:3px;background:' + (days.has(key) ? 'var(--sand)' : 'var(--surface-2)') + '"></i>'; }).join('');
    const sec = PSYCH_SECTIONS.length, secSeen = Object.keys(s.done.sections).length;
    el.innerHTML = '<h1>Progress</h1><div class="stats">' +
      [[App.streakNow(), 'day streak'], [s.streak.best || 0, 'best streak'], [s.xp, 'XP'], [Object.keys(s.flags || {}).length, 'flagged for review'], [learned, 'cards learned'], [mature, 'cards mature (21d+)'], [acc + '%', 'accuracy'], [s.mistakes.length, 'in mistakes deck']]
        .map(([b, t]) => '<div class="stat"><b>' + esc(b) + '</b><span>' + t + '</span></div>').join('') + '</div>' +
      '<h2 style="margin-top:18px">Last 12 weeks</h2><div class="card"><div style="display:grid;grid-template-columns:repeat(21,1fr);gap:3px;max-width:520px">' + cal + '</div></div>' +
      '<h2 style="margin-top:18px">Completion</h2><div class="card stack">' +
      [['Lessons', Object.keys(s.done.lessons).length, LESSONS.length], ['Psychiatry sections opened', secSeen, sec]]
        .map(([t, a, b]) => '<div><div class="spread small"><span>' + t + '</span><span class="muted">' + a + ' / ' + b + '</span></div><div class="progress"><i style="width:' + Math.round((100 * a) / Math.max(1, b)) + '%"></i></div></div>').join('') + '</div>' +
      '<h2 style="margin-top:18px">Backup</h2><div class="card stack"><p style="margin:0">Progress is saved on this device. Export a backup file to move it to another phone or browser. The same buttons are in the footer of every page.</p>' +
      '<div class="row"><button class="btn" id="exp">Export backup</button><label class="btn" for="imp">Import backup</label><input type="file" id="imp" class="sr-only" accept="application/json,.json"></div>' +
      '<p class="small muted" style="margin:0">' + esc(App.t('backup.onDevice').replace('{summary}', App.backup.summary())) + '</p>' +
      '<details><summary class="small muted">Copy backup as text instead</summary><textarea class="input" id="bk" rows="4" style="margin-top:8px;font-family:ui-monospace,monospace;font-size:.75rem"></textarea><div class="row" style="margin-top:6px"><button class="btn sm" id="bkload">Load from text</button></div></details></div>';
    // Same functions as the footer backup panel (js/app.js App.backup): confirm before replacing, undo from the footer.
    el.querySelector('#bk').value = JSON.stringify(App.backup.payload());
    el.querySelector('#exp').onclick = () => App.backup.export();
    el.querySelector('#imp').onchange = (e) => { const f = e.target.files[0]; if (f) App.backup.importFile(f); e.target.value = ''; };
    el.querySelector('#bkload').onclick = () => App.backup.importText(el.querySelector('#bk').value);
  };

  /* ---------- Settings ---------- */
  V.settings = (el) => {
    const s = S().settings;
    const voices = App.voices();
    el.innerHTML = '<h1>Settings</h1><div class="stack">' +
      '<div class="card stack"><h2 style="margin:0">Appearance</h2><div class="seg" role="group" aria-label="Theme">' + ['system', 'light', 'dark'].map((k) => '<button type="button" data-theme="' + k + '" aria-pressed="' + ((s.theme || 'system') === k) + '" class="' + ((s.theme || 'system') === k ? 'on' : '') + '">' + esc(App.themeName(k)) + '</button>').join('') + '</div><p class="muted small" style="margin:10px 0 6px">Text size (also under the <b>Aa</b> button in the top bar)</p>' + App.textSizeSeg() + '</div>' +
      '<div class="card stack"><h2 style="margin:0">Register</h2><p class="muted" style="margin:0">Which version of each psychiatry phrase to show first. ' + LANG.registers.f.short + ' ' + LANG.registers.f.help + '. ' + LANG.registers.c.short + ' ' + LANG.registers.c.help + '.</p>' +
      '<div class="seg" role="group" aria-label="Register">' + [['f', LANG.registers.f.label], ['c', LANG.registers.c.label]].map(([k, t]) => '<button data-reg="' + k + '" class="' + (s.register === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div></div>' +
      '<div class="card stack"><h2 style="margin:0">Voice</h2>' + voiceCard(s, voices) + '</div>' +
      '<div class="card stack"><h2 style="margin:0">Flashcards</h2><label>New cards per day <input class="input" type="number" id="npd" min="5" max="100" value="' + s.newPerDay + '" style="width:120px"></label></div>' +
      '<div class="card stack"><h2 style="margin:0">Install</h2><p style="margin:0">Add ' + esc(APP_META.name) + ' to your home screen to use it like an app, even offline. iPhone: Safari → Share → <b>Add to Home Screen</b>. Android: Chrome menu → <b>Install app</b>.</p><div class="row"><button class="btn" id="install" hidden>Install now</button></div></div>' +
      '<div class="card stack"><h2 style="margin:0">Backup</h2><p class="muted" style="margin:0">Save your progress and review flags to a file, or restore one. You can undo an import from the footer.</p><div class="row"><button class="btn" type="button" id="sexp">Export backup</button><label class="btn" for="simp">Import backup</label><input type="file" id="simp" class="sr-only" accept="application/json,.json"></div></div>' +
      '<div class="card stack"><h2 style="margin:0">Reset</h2><p class="muted" style="margin:0">Erase all progress on this device. Export a backup first if you want to keep it.</p><div class="row"><button class="btn" id="reset1">Erase progress…</button><span id="reset2" hidden><span class="small">Are you sure? </span><button class="btn sm" id="resetyes" style="color:var(--bad);border-color:var(--bad)">Yes, erase everything</button> <button class="btn sm" id="resetno">Cancel</button></span></div></div>' +
      '</div>';
    el.querySelectorAll('[data-theme]').forEach((b) => (b.onclick = () => { s.theme = b.dataset.theme; App.save(); App.applyTheme(); V.settings(el); }));
    el.querySelectorAll('[data-ts]').forEach((b) => (b.onclick = () => { s.textSize = b.dataset.ts; App.save(); App.applyTextSize(); V.settings(el); }));
    el.querySelectorAll('[data-reg]').forEach((b) => (b.onclick = () => { s.register = b.dataset.reg; App.save(); V.settings(el); }));
    el.querySelector('#sexp').onclick = () => App.backup.export();
    el.querySelector('#simp').onchange = (e) => { const f = e.target.files[0]; if (f) App.backup.importFile(f); e.target.value = ''; };
    el.querySelector('#voice').onchange = (e) => { s.voice = e.target.value; App.save(); };
    el.querySelectorAll('[data-vsrc]').forEach((b) => (b.onclick = () => { s.voiceSource = b.dataset.vsrc; App.save(); V.settings(el); }));
    const dl = el.querySelector('#dlAudio');
    if (dl) dl.onclick = async () => {
      const keys = [...App.pack.keys], stat = el.querySelector('#dlStat');
      dl.disabled = true; let n = 0, fail = 0;
      let cache = null; try { cache = await caches.open('magistorya-audio'); } catch (e) {}
      for (let i = 0; i < keys.length; i += 8) {
        await Promise.all(keys.slice(i, i + 8).map(async (k) => {
          const url = 'audio/' + k + '.mp3';
          try { if (cache && (await cache.match(url))) { n++; return; } const r = await fetch(url); if (!r.ok) throw 0; if (cache) await cache.put(url, r); n++; } catch (e) { fail++; }
        }));
        stat.textContent = 'Saved ' + n + ' of ' + keys.length + (fail ? ' (' + fail + ' failed)' : '');
      }
      stat.textContent = fail ? 'Saved ' + n + ' of ' + keys.length + '. Some failed; tap again to retry.' : 'All ' + n + ' clips saved for offline use.';
      dl.disabled = false;
    };
    el.querySelector('#rate').oninput = (e) => { s.rate = +e.target.value; App.save(); };
    el.querySelector('#npd').onchange = (e) => { s.newPerDay = Math.max(5, Math.min(100, +e.target.value || 20)); App.save(); };
    el.querySelector('#test').onclick = () => App.speak(LANG.testLine);
    if (App.installPrompt) { const b = el.querySelector('#install'); b.hidden = false; b.onclick = () => App.installPrompt.prompt(); }
    el.querySelector('#reset1').onclick = () => { el.querySelector('#reset2').hidden = false; };
    el.querySelector('#resetno').onclick = () => { el.querySelector('#reset2').hidden = true; };
    el.querySelector('#resetyes').onclick = () => { App.reset(); App.applyTheme(); App.applyTextSize(); App.backup.paint(); App.updateBadges(); App.toast('Progress erased.'); V.settings(el); };
    if (!voices.length && App.canSpeak) setTimeout(() => { if (App.voices().length && location.hash.startsWith('#/settings')) V.settings(el); }, 600);
  };

  function voiceCard(s, voices) {
    const info = App.pack.info;
    // The recorded-pack controls appear only when the language pack names a recorded voice (LANG.packVoices).
    const packLine = !App.hasPackLang ? '' : info
      ? '<span class="pill good">Installed</span> ' + info.count + ' recorded clips · ' + esc(info.voice) + ' · ' + esc(info.generated) + ' · ' + (info.bytes / 1e6).toFixed(0) + ' MB'
      : (App.pack.ready ? '<span class="pill warn">Not installed yet</span> See "Audio pack" in the README.' : 'Checking…');
    const dev = App.bestVoice();
    const devLine = dev.kind === 'native' || dev.kind === 'chosen' ? LANG.voiceName + ' voice: ' + esc(dev.voice.name) : dev.kind === 'near' ? 'No ' + LANG.voiceName + ' voice on this device. Closest match: ' + esc(dev.voice.name + ' (' + dev.voice.lang + ')') + '.' : 'No usable voice on this device.';
    return (App.hasPackLang ? '<div class="seg" role="group" aria-label="Voice source" style="display:flex;flex-wrap:wrap">' + [['pack', 'Recorded ' + LANG.voiceName + ' voice'], ['device', 'Device voice']].map(([k, t]) => '<button data-vsrc="' + k + '" class="' + (s.voiceSource === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div>' +
      '<div class="small"><b>Audio pack:</b> ' + packLine + '</div>' +
      (info ? '<div class="row"><button class="btn sm" id="dlAudio">Save all audio for offline use</button><span class="small muted" id="dlStat"></span></div>' : '') : '') +
      '<div class="small"><b>Device voice:</b> ' + devLine + (App.hasPackLang ? ' Used for anything without a recording' + (s.voiceSource === 'device' ? ' and, with this setting, for everything' : '') + '.' : '') + ' It never uses an English voice for ' + LANG.name + ' unless you pick one below.</div>' +
      '<p class="small muted" style="margin:0">' + LANG.deviceVoiceHelp + '</p>' +
      '<details><summary class="small">Choose a device voice</summary><label class="small" style="display:block;margin-top:6px">Voice <select class="input" id="voice"><option value="">Automatic</option>' + voices.map((v) => '<option value="' + esc(v.name) + '"' + (s.voice === v.name ? ' selected' : '') + '>' + esc(v.name + ' (' + v.lang + ')') + '</option>').join('') + '</select></label></details>' +
      '<label>Speed <input type="range" id="rate" min="0.5" max="1.2" step="0.05" value="' + s.rate + '" style="width:100%"></label>' +
      '<div class="row"><button class="btn" id="test">' + icons.sound + ' Test: "' + esc(LANG.testLine) + '"</button></div>';
  }

  /* ---------- What's New ---------- */
  V.whatsnew = (el) => {
    S().seenVersion = APP_META.version; App.save(); App.updateBadges();
    const label = { feature: ['New', 'good'], update: ['Improved', ''], correction: ['Fixed', 'warn'], content: ['Content', ''] };
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const when = (d) => { const m = /^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(d || ''); return m ? (m[3] ? MONTHS[+m[2] - 1] + ' ' + (+m[3]) + ', ' + m[1] : MONTHS[+m[2] - 1] + ' ' + m[1]) : esc(d || ''); };
    el.innerHTML = '<h1>What\'s New</h1><p class="muted">Latest version ' + esc(APP_META.version) + ' · ' + esc(APP_META.updated) + '</p>' +
      APP_CHANGELOG.map((r) => '<div class="card stack" style="margin-bottom:12px"><div class="spread"><h2 style="margin:0">Version ' + esc(r.version) + ' · ' + esc(r.title) + '</h2><time class="muted small" datetime="' + esc(r.date) + '">' + when(r.date) + '</time></div><div class="chg">' +
        r.items.map((it) => '<span class="pill ' + (label[it.type] || ['', ''])[1] + '">' + (label[it.type] || [it.type])[0] + '</span><span>' + esc(it.text) + '</span>').join('') + '</div></div>').join('') +
      '<p class="muted small">Suggestions or corrections? Email <span style="user-select:all">' + esc(APP_META.email) + '</span>.</p>';
  };

  /* ---------- About ---------- */
  V.about = (el) => {
    const B = LANG.bridgeLang || { name: '' };
    el.innerHTML = '<div class="card stack" style="text-align:center;align-items:center;justify-items:center"><img src="icons/icon-192.png" alt="' + esc(APP_META.name) + ' icon" width="96" height="96" style="border-radius:22px"><h1 style="margin:0">' + esc(APP_META.name) + '</h1><p class="muted" style="margin:0">' + esc(APP_META.tagline) + ' · version ' + esc(APP_META.version) + '</p>' +
      '<p style="margin:8px 0 0"><b>App created by ' + esc(APP_META.author) + '.</b><br>Latest version ' + esc(APP_META.updated) + '.<br><a href="mailto:' + esc(APP_META.email) + '">' + esc(APP_META.email) + '</a></p>' +
      '<div class="row" style="justify-content:center"><a class="btn" href="#/new">What\'s New</a><button class="btn" id="copymail">Copy email</button></div></div>' +
      '<div class="notice warn" style="margin-top:14px">' + esc(LANG.draftNotice) + ' <a href="#/review">For review</a> lists the lines you have flagged.</div>' +
      '<h2 style="margin-top:18px">' + esc(App.t('about.settings')) + '</h2><div class="card stack"><div><p style="margin:0 0 8px;font-weight:600">' + esc(App.t('about.language')) + '</p><div class="seg" role="group" aria-label="' + esc(App.t('about.language')) + '">' +
        [['en', 'about.langEn'], ['tl', 'about.langTl']].map(([k, l]) => '<button type="button" data-lang="' + k + '" aria-pressed="' + ((S().settings.uiLang || 'en') === k) + '" class="' + ((S().settings.uiLang || 'en') === k ? 'on' : '') + '">' + esc(App.t(l)) + '</button>').join('') + '</div><p class="muted small" style="margin:8px 0 0">' + esc(App.t('about.langNote')) + '</p></div>' +
        '<p class="small" style="margin:0">Theme, text size, voice and register: <a href="#/settings">Settings</a>.</p></div>' +
      '<h2 style="margin-top:18px">About the content</h2><div class="card stack"><p style="margin:0">"Mag-istorya kita" means "let\'s talk" in ' + esc(LANG.name) + '. The app teaches ' + esc(LANG.nameFull) + ' to a psychiatrist who will see patients in Kalibo, Aklan, starting from ' + esc(B.name) + ', which the learner already speaks.</p>' +
      '<p style="margin:0">Psychiatry phrases are practice phrasings written for training. They are <b>not</b> validated translations of research instruments (such as the PHQ-9 or C-SSRS), and none of the ' + esc(LANG.name) + ' has yet been checked by a native speaker. Confirm wording with ' + esc(LANG.name) + '-speaking staff and patients.</p>' +
      '<p style="margin:0">There is no ' + esc(LANG.name) + ' text-to-speech voice. Spoken lines use the closest device voice and are a rough guide only.</p>' +
      '<p style="margin:0">Crisis line in the Philippines: ' + esc((window.HOSPITAL && HOSPITAL.crisis && HOSPITAL.crisis.name) || 'NCMH Crisis Hotline') + ' <b>' + esc((window.HOSPITAL && HOSPITAL.crisis && HOSPITAL.crisis.number) || '1553') + '</b>' + ((window.HOSPITAL && HOSPITAL.crisis && HOSPITAL.crisis.note) ? ' (' + esc(HOSPITAL.crisis.note) + ')' : '') + '. Verify current numbers locally.</p></div>' +
      '<h2 style="margin-top:18px">Keyboard shortcuts</h2><div class="card"><p style="margin:0"><span class="kbd">/</span> search · <span class="kbd">Alt</span>+<span class="kbd">←</span>/<span class="kbd">→</span> back/forward · <span class="kbd">Space</span> flip flashcard · <span class="kbd">1</span>–<span class="kbd">4</span> grade card</p></div>';
    el.querySelectorAll('[data-lang]').forEach((b) => (b.onclick = () => App.setLang(b.dataset.lang)));
    el.querySelector('#copymail').onclick = () => { navigator.clipboard && navigator.clipboard.writeText(APP_META.email).then(() => App.toast('Email copied.'), () => App.toast(APP_META.email)); };
  };
})();
