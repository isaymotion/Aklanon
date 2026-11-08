/* Psychiatry track views: hub and phrase sections. Point board and listening drill: js/point-listen.js. */
(function () {
  const { esc, shuffle, pick, icons } = App;
  const V = App.views;
  const S = () => App.state;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const primary = (p) => (S().settings.register === 'c' ? p.c || p.f : p.f);
  const secondary = (p) => (S().settings.register === 'c' ? p.f : p.c);

  V.psych = (el, p, q) => {
    const groups = {};
    PSYCH_SECTIONS.forEach((s) => (groups[s.group] = groups[s.group] || []).push(s));
    const done = S().done;
    const tab = q && q.tab === 'bedside' ? 'bedside' : 'interview';
    const T = (h, eyebrow, title, p) => '<a class="tile" href="' + h + '"><span class="eyebrow">' + eyebrow + '</span><h3>' + title + '</h3><p>' + p + '</p></a>';
    const TABS = [['interview', 'Interview'], ['bedside', 'Point board and listening']];
    // Lessons marked psych: true in js/data/lessons.js are listed here (none yet).
    const related = (window.LESSONS || []).filter((l) => l.psych);
    const body = {
      interview: Object.entries(groups).map(([g, ss]) => '<h2 style="margin-top:16px">' + esc(g) + '</h2><div class="grid">' + ss.map((s) =>
        '<a class="tile" href="#/psych/s/' + s.id + '"><h3>' + esc(s.title) + '</h3><p>' + s.phrases.length + ' phrases' + (s.draft ? ' · draft for review' : '') + '</p>' + (done.sections[s.id] ? '<div class="meta"><span class="pill good">opened</span></div>' : '') + '</a>').join('') + '</div>').join('') +
        (related.length ? '<h2 style="margin-top:20px">Related lessons</h2><div class="grid">' + related.map((l) => '<a class="tile" href="#/lessons/' + l.id + '"><h3>' + esc(l.title) + '</h3><p>' + esc(l.summary) + '</p></a>').join('') + '</div>' : ''),
      bedside: '<div class="grid" style="margin-top:14px">' +
        T('#/psych/point', 'Bedside', 'Point board (' + esc(LANG.point.title) + ')', 'Turn the phone around: the patient points to a reply, the phone speaks it, you read the English.') +
        T('#/psych/listen', 'Listen', 'Listening drill', 'Hear a patient reply, choose the meaning, then see the text.') +
        T('#/flash/psych', 'Memorize', 'Psychiatry flashcards', 'All phrases with spaced repetition.') +
        T('#/review', 'Review', 'For review', 'Phrases and replies you flagged for the native-speaker reviewer.') + '</div>'
    };
    el.innerHTML = '<h1>Psychiatry ' + esc(LANG.name) + '</h1>' +
      '<p class="muted" style="margin-top:4px">Phrases for the psychiatric interview and MSE, ' + LANG.registerIntro + '.</p>' +
      '<div class="ptabs" role="tablist">' + TABS.map(([k, t]) => '<a role="tab" aria-selected="' + (k === tab) + '" class="' + (k === tab ? 'on' : '') + '" href="#/psych?tab=' + k + '">' + t + '</a>').join('') + '</div>' +
      (tab === 'interview' ? '<div class="notice info" style="margin-top:12px">Practice phrasings for training, not validated translations, and not yet reviewed by a native speaker. Tap ⚑ on any line that needs checking.</div>' : '') +
      body[tab];
  };

  V.psychSection = (el, p, q) => {
    const s = PSYCH_SECTIONS.find((x) => x.id === p.id);
    if (!s) { el.innerHTML = '<p>Section not found. <a href="#/psych">Psychiatry</a></p>'; return; }
    if (!S().done.sections[s.id]) { S().done.sections[s.id] = true; App.save(); }
    const idx = PSYCH_SECTIONS.indexOf(s), next = PSYCH_SECTIONS[idx + 1], prev = PSYCH_SECTIONS[idx - 1];
    let mode = 'study';
    const draw = () => {
      const body = el.querySelector('#pbody');
      if (mode === 'quiz') {
        const qs = shuffle(s.phrases.map((ph, i) => ({ ph, i }))).slice(0, 10).map(({ ph, i }) => {
          const others = pick(s.phrases.filter((x) => x !== ph), 3).map(primary);
          return { q: ph.en, opts: [primary(ph)].concat(others), a: 0, exp: secondary(ph) ? 'Also: ' + secondary(ph) : '', tlo: true, cardId: 'p:' + s.id + ':' + i, say: null };
        });
        body.innerHTML = '<div id="qz"></div>';
        App.runQuiz(body.querySelector('#qz'), qs, { onDone: (r, n) => { S().done.sections[s.id] = Math.round((100 * r) / n); App.activity(10); } });
        return;
      }
      if (mode === 'reverse') {
        const qs = shuffle(s.phrases.map((ph, i) => ({ ph, i }))).slice(0, 10).map(({ ph, i }) => ({ q: primary(ph), say: primary(ph), opts: [ph.en].concat(pick(s.phrases.filter((x) => x !== ph), 3).map((x) => x.en)), a: 0, exp: ph.n || '', tlq: true, cardId: 'p:' + s.id + ':' + i }));
        body.innerHTML = '<div id="qz"></div>';
        App.runQuiz(body.querySelector('#qz'), qs, { onDone: () => App.activity(10) });
        return;
      }
      const recall = mode === 'recall';
      body.innerHTML = '<div class="card">' + s.phrases.map((ph, i) => {
        const id = 'p:' + s.id + ':' + i, inDeck = !!S().srs[id];
        return '<div class="phrase' + (recall ? ' hide-tl' : '') + '" id="ph' + i + '">' +
          '<div class="en">' + esc(ph.en) + '</div><div class="acts">' + App.sayBtn(primary(ph)) +
          App.flagBtn(id, { kind: 'phrase', sec: s.id, secTitle: s.title, tl: ph.f + (ph.c && ph.c !== ph.f ? ' / ' + ph.c : ''), en: ph.en }) +
          '<button class="say" data-addcard="' + id + '" title="' + (inDeck ? 'In your review deck' : 'Add to flashcards') + '" aria-label="Add to flashcards">' + (inDeck ? icons.check : icons.plus) + '</button></div>' +
          '<div class="main" style="grid-column:1/-1" data-reveal>' + esc(primary(ph)) + '</div>' +
          (secondary(ph) && secondary(ph) !== primary(ph) ? '<div class="alt" style="grid-column:1/-1" data-reveal><b>' + (S().settings.register === 'c' ? LANG.registers.f.short : LANG.registers.c.short) + '</b>' + esc(secondary(ph)) + ' ' + '</div>' : '') +
          (ph.n ? '<div class="note">' + esc(ph.n) + '</div>' : '') +
          (ph.answers ? '<div class="ans"><span class="eyebrow">Patients may answer</span>' + ph.answers.map(([t, e]) => '<div><span>' + esc(t) + '</span> <span class="muted">— ' + esc(e) + '</span> ' + App.flagBtn('a:' + t, { kind: 'reply', sec: s.id, secTitle: s.title, tl: t, en: e }, true) + '</div>').join('') + '</div>' : '') +
          '</div>';
      }).join('') + '</div>';
      if (recall) body.querySelectorAll('[data-reveal]').forEach((r) => (r.onclick = () => r.closest('.phrase').classList.remove('hide-tl')));
      if (q.p != null) { const t = body.querySelector('#ph' + q.p); if (t) { t.scrollIntoView({ block: 'center' }); t.style.background = 'var(--surface-2)'; } }
    };
    // Optional links to the Psychiatric Interviewing Trainer (window.SHEA_LINKS / SHEA_TRAINER); none ship with this app yet.
    const sheaRaw = (window.SHEA_LINKS || {})[s.id], ST = window.SHEA_TRAINER;
    const shea = sheaRaw ? [].concat(sheaRaw) : [];
    const sheaA = (l) => '<a href="' + (l.href ? ST.root + l.href : ST.base + l.ch + '/' + l.sec) + '" target="_blank" rel="noopener">' + esc(l.label) + '</a>';
    const sheaLink = shea.length && ST ? (shea.length === 1
      ? '<p class="small"><b>Technique notes:</b> ' + sheaA(shea[0]) + ' in the ' + esc(ST.name) + ' explains why these questions are worded this way.</p>'
      : '<div class="small"><b>Technique notes</b> in the ' + esc(ST.name) + ', on why these questions are worded this way:<ul style="margin:4px 0 12px;padding-left:20px">' + shea.map((l) => '<li>' + sheaA(l) + '</li>').join('') + '</ul></div>') : '';
    const draftNote = s.draft ? '<div class="notice warn" style="margin-bottom:12px">' + esc(ST && ST.draftNotice ? ST.draftNotice : LANG.draftNotice) + '</div>' : '';
    el.innerHTML = crumb([['Psychiatry', '#/psych'], [s.title]]) + '<span class="eyebrow">' + esc(s.group) + '</span><h1>' + esc(s.title) + '</h1><p class="muted">' + esc(s.intro) + '</p>' + draftNote + sheaLink +
      '<div class="spread" style="margin-bottom:12px"><div class="seg" role="group" aria-label="Mode">' +
      [['study', 'Study'], ['recall', 'Recall'], ['quiz', 'Quiz ' + LANG.quiz.toTarget], ['reverse', 'Quiz ' + LANG.quiz.toEnglish]].map(([k, t]) => '<button data-m="' + k + '" class="' + (mode === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div>' +
      '<div class="row"><a class="btn sm" href="#/psych/point?s=' + s.id + '">Point board</a><a class="btn sm" href="#/psych/listen?s=' + s.id + '">Listen</a><button class="btn sm" id="addall">' + icons.plus + ' Add all to flashcards</button></div></div>' +
      '<p class="muted small" id="modehelp">Recall hides the ' + LANG.name + ': say it aloud from the English, then tap to check. ⚑ flags a line for the native-speaker reviewer.</p>' +
      '<div id="pbody"></div>' +
      '<div class="spread" style="margin-top:16px">' + (prev ? '<a class="btn" href="#/psych/s/' + prev.id + '">← ' + esc(prev.title) + '</a>' : '<span></span>') + (next ? '<a class="btn" href="#/psych/s/' + next.id + '">' + esc(next.title) + ' →</a>' : '') + '</div>';
    el.querySelectorAll('[data-m]').forEach((b) => (b.onclick = () => { mode = b.dataset.m; el.querySelectorAll('[data-m]').forEach((x) => x.classList.toggle('on', x === b)); q.p = null; draw(); }));
    el.querySelector('#addall').onclick = () => {
      let n = 0;
      s.phrases.forEach((ph, i) => { const id = 'p:' + s.id + ':' + i; if (!S().srs[id]) { S().srs[id] = { e: 2.5, i: 0, r: 0, due: Date.now() }; n++; } });
      App.save(); App.toast(n ? n + ' phrases added to your reviews.' : 'All phrases are already in your reviews.'); draw();
    };
    draw();
  };

})();
