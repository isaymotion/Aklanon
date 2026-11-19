/* Printable handouts, part 2 (ported from Usap Tayo 3.x js/grammar-handout.js; only two topics kept):
   lesson  #/lessons/handout?id=<lesson id>  the lesson text (tables, examples, notes; ◌ and ⚑ kept), its quiz as a
           worksheet, an answer key on its own page, and optionally the lesson's gap sentences (js/drills.js).
   drills  #/drills/handout  a worksheet from js/data/drills.js: fill the gap, build the sentence, find the mistake, say it
           in Aklanon; sampled with a seeded shuffle ("New set" moves the seed) so preview, Print and PDF agree; key at the end.
   One content model per topic, rendered as an on-screen preview (also used for Print) and as a PDF with pdfmake
   (App.pdfKit, js/handout.js). Options are saved in settings.ghandout.<topic>. */
(function () {
  const { esc } = App;
  const V = (App.views = App.views || {});
  const S = () => App.state;
  const NAME = LANG.name;
  const K = () => App.pdfKit;
  const LV = () => window.LESSONS || [];
  const letter = (i) => String.fromCharCode(65 + i);

  const DEF = {
    lesson: { topic: 'lesson', lesson: '', english: 'show', paper: 'A4', size: 'normal', body: true, quiz: true, gaps: false, key: true, title: '', preparedFor: '' },
    drills: { topic: 'drills', english: 'show', paper: 'A4', size: 'normal', n: '8', seed: 1, gap: true, build: true, errors: true, translate: true, key: true, title: NAME + ' Grammar Drills', preparedFor: '' }
  };
  const opts = (topic) => Object.assign({}, DEF[topic], (S().settings.ghandout || {})[topic] || {});
  const saveOpts = (o, topic) => { S().settings.ghandout = Object.assign({}, S().settings.ghandout || {}, { [topic]: o }); App.save(); };

  /* ---------- Shared PDF scaffolding ---------- */
  function kit(m, logo) {
    const k = K(), { NAVY, MUTED, LINE, TINT } = k;
    const o = m.o, base = { small: 8.5, normal: 10, large: 12 }[o.size] || 10, a5 = o.paper === 'A5';
    const content = [];
    const titleStack = { stack: [{ text: m.title, style: 'h1' }, { text: (m.preparedFor ? 'Prepared for ' + m.preparedFor + ' · ' : '') + m.date + ' · ' + m.scope, style: 'meta' }] };
    content.push(logo ? { columns: [{ image: logo, width: a5 ? 30 : 40 }, Object.assign(titleStack, { width: '*', margin: [8, a5 ? 0 : 3, 0, 0] })], margin: [0, 0, 0, 10] } : Object.assign(titleStack, { margin: [0, 0, 0, 10] }));
    const heading = (title, sub) => ({ table: { widths: ['*'], body: [[{ text: [{ text: title, bold: true }].concat(sub ? [{ text: '   ' + sub, bold: false, fontSize: base - 1 }] : []), color: '#ffffff', fillColor: NAVY }]] }, layout: { hLineWidth: () => 0, vLineWidth: () => 0, paddingTop: () => 3, paddingBottom: () => 3, paddingLeft: () => 6 }, margin: [0, 10, 0, 4], fontSize: base + 1.5 });
    const sub = (t) => ({ text: t, bold: true, color: NAVY, fontSize: base + 0.5, margin: [0, 6, 0, 3] });
    return { NAVY, MUTED, LINE, TINT, o, base, a5, content, heading, sub };
  }
  function finish(m, k, subject) {
    const { NAVY, MUTED, o, base, a5 } = k;
    return {
      pageSize: o.paper === 'LETTER' ? 'LETTER' : o.paper,
      pageMargins: a5 ? [28, 28, 28, 44] : [40, 40, 40, 56],
      info: { title: m.title, author: APP_META.author, subject, creator: APP_META.name + ' ' + APP_META.version },
      content: K().fixGlyphs(k.content),
      footer: K().footer(a5),
      defaultStyle: { font: 'Roboto', fontSize: base, lineHeight: 1.15 },
      styles: { h1: { fontSize: a5 ? base + 5 : base + 8, bold: true, color: NAVY }, meta: { color: MUTED, fontSize: base - 1 } }
    };
  }
  const headHTML = (m) => '<header class="ho-head"><img src="icons/logo-96.png" alt=""><div><h1>' + esc(m.title) + '</h1><p>' + (m.preparedFor ? 'Prepared for ' + esc(m.preparedFor) + ' · ' : '') + esc(m.date) + ' · ' + esc(m.scope) + '</p></div></header>';
  const pageW = (o) => ({ A4: 515, LETTER: 532, A5: 363 })[o.paper] || 515;

  /* Lesson body HTML to pdfmake nodes. Supports the tags lessons use (p, h3, b/strong, i/em, u, ul/ol/li, table, dl/dt/dd,
     div.ex, div.note, span, a, br); an unknown tag keeps its text. Inline formatting becomes pdfmake text runs. */
  function htmlToPdf(html, st) {
    const k = K(), base = (st && st.base) || 10, NAVY = k.NAVY, MUTED = k.MUTED, TINT = k.TINT, GOLD = k.GOLD, LINE = k.LINE;
    const doc = new DOMParser().parseFromString('<body>' + html + '</body>', 'text/html');
    const BLOCK = new Set(['P', 'H1', 'H2', 'H3', 'H4', 'UL', 'OL', 'DL', 'TABLE', 'DIV', 'LI', 'DT', 'DD', 'TR', 'TD', 'TH', 'THEAD', 'TBODY', 'TFOOT']);
    const run = (n, style, out) => {
      if (n.nodeType === 3) { const t = n.nodeValue.replace(/\s+/g, ' '); if (t) out.push(Object.assign({ text: t }, style)); return out; }
      if (n.nodeType !== 1) return out;
      if (n.tagName === 'BR') { out.push({ text: '\n' }); return out; }
      const s = Object.assign({}, style), t = n.tagName;
      if (t === 'B' || t === 'STRONG') s.bold = true; else if (t === 'I' || t === 'EM') s.italics = true; else if (t === 'U') s.decoration = 'underline';
      n.childNodes.forEach((c) => run(c, s, out));
      return out;
    };
    const inline = (n, style) => { const out = []; n.childNodes.forEach((c) => run(c, style || {}, out)); return out; };
    const tidy = (r) => {
      while (r.length && /^\s*$/.test(r[0].text)) r.shift();
      while (r.length && /^\s*$/.test(r[r.length - 1].text)) r.pop();
      if (r.length) { r[0].text = r[0].text.replace(/^\s+/, ''); const l = r[r.length - 1]; l.text = l.text.replace(/\s+$/, ''); }
      return r;
    };
    const blocks = (parent, tight) => {
      const out = []; let buf = [];
      const flush = () => { const r = tidy(buf); buf = []; if (r.length) out.push({ text: r, margin: [0, 0, 0, tight ? 1 : 4] }); };
      parent.childNodes.forEach((n) => {
        if (n.nodeType !== 1 || !BLOCK.has(n.tagName)) { run(n, {}, buf); return; }
        flush();
        const t = n.tagName;
        if (t === 'P' || t === 'LI' || t === 'DT' || t === 'DD') { const r = tidy(inline(n)); if (r.length) out.push({ text: r, margin: [0, 0, 0, tight ? 1 : 4] }); }
        else if (/^H\d$/.test(t)) { const r = tidy(inline(n)); if (r.length) out.push({ text: r, bold: true, color: NAVY, fontSize: base + 1, margin: [0, 8, 0, 3] }); }
        else if (t === 'UL' || t === 'OL') out.push(list(n));
        else if (t === 'DL') out.push(...defs(n));
        else if (t === 'TABLE') out.push(table(n));
        else if (t === 'DIV' && n.classList.contains('ex')) out.push(ex(n));
        else if (t === 'DIV' && n.classList.contains('note')) out.push(note(n));
        else out.push(...blocks(n, tight));
      });
      flush();
      return out;
    };
    const single = (ch) => (ch.length === 1 && ch[0].text !== undefined && !ch[0].table ? ch[0] : null);
    const list = (n) => {
      const items = [...n.children].filter((c) => c.tagName === 'LI').map((li) => { const ch = blocks(li, true), s = single(ch); return s ? { text: s.text } : ch.length ? { stack: ch } : { text: '' }; });
      return { [n.tagName === 'OL' ? 'ol' : 'ul']: items, margin: [0, 0, 0, 5] };
    };
    const defs = (n) => {
      const out = [];
      [...n.children].forEach((c) => {
        if (c.tagName === 'DT') out.push({ text: tidy(inline(c)), bold: true, margin: [0, 5, 0, 1] });
        else { const ch = blocks(c, true); if (ch.length) out.push({ stack: ch, margin: [14, 0, 0, 3] }); }
      });
      return out;
    };
    const table = (n) => {
      const rows = [...n.querySelectorAll('tr')].map((tr) => [...tr.children].filter((c) => c.tagName === 'TD' || c.tagName === 'TH'));
      const cols = Math.max(1, ...rows.map((r) => r.length));
      const head = rows.length > 1 && rows[0].length && rows[0].every((c) => c.tagName === 'TH');
      const body = rows.map((r) => {
        const cells = r.map((c) => {
          const isTh = c.tagName === 'TH', ch = blocks(c, true), s = single(ch);
          const cell = s ? { text: s.text } : ch.length ? { stack: ch } : { text: '' };
          cell.fontSize = base - 0.5;
          if (isTh) { cell.bold = true; cell.color = NAVY; cell.fillColor = TINT; }
          return cell;
        });
        while (cells.length < cols) cells.push({ text: '' });
        return cells;
      });
      return { table: { headerRows: head ? 1 : 0, dontBreakRows: true, widths: Array(cols).fill('*'), body }, layout: { hLineWidth: () => 0.5, vLineWidth: () => 0, hLineColor: () => LINE, paddingTop: () => 3, paddingBottom: () => 3, paddingLeft: () => 4, paddingRight: () => 4 }, margin: [0, 2, 0, 7] };
    };
    const ex = (n) => {
      const tl = [], en = [];
      let target = tl;
      n.childNodes.forEach((c) => { if (c.nodeType === 1 && c.tagName === 'SPAN') target = en; run(c, {}, target); });
      const stack = [{ text: tidy(tl), bold: true, fontSize: base + 0.5 }];
      if (tidy(en).length) stack.push({ text: en, color: MUTED, fontSize: base - 1, margin: [0, 1, 0, 0] });
      return { table: { widths: [3, '*'], body: [[{ text: '', fillColor: GOLD }, { stack, fillColor: TINT }]] }, layout: { hLineWidth: () => 0, vLineWidth: () => 0, paddingLeft: (i) => (i === 0 ? 0 : 8), paddingRight: (i) => (i === 0 ? 0 : 6), paddingTop: () => 4, paddingBottom: () => 4 }, unbreakable: true, margin: [0, 2, 0, 4] };
    };
    const note = (n) => {
      const ch = blocks(n, true);
      return { table: { widths: ['*'], body: [[{ stack: ch.length ? ch : [{ text: '' }], fillColor: TINT, fontSize: base - 0.5 }]] }, layout: { hLineWidth: () => 0, vLineWidth: () => 0, paddingLeft: () => 8, paddingRight: () => 8, paddingTop: () => 5, paddingBottom: () => 5 }, unbreakable: true, margin: [0, 3, 0, 6] };
    };
    return blocks(doc.body);
  }
  App.htmlToPdf = htmlToPdf;

  /* ===================== Topic: lesson ===================== */
  const gapsOf = (id) => (App.lessonGapCount && App.lessonGapCount(id) ? App.lessonGapItems(id) : []);
  function lessonBuild(o) {
    const l = LV().find((x) => x.id === o.lesson) || LV()[0] || { id: '', title: 'Lesson', unit: '', level: '', body: '', quiz: [] };
    const quiz = Array.isArray(l.quiz) ? l.quiz.filter((q) => Array.isArray(q) && Array.isArray(q[1])) : [];
    const gaps = o.gaps ? App.drillSeeded.pick(gapsOf(l.id), 10, App.drillSeeded.rnd('lesson:' + l.id)) : [];
    return {
      topic: 'lesson', l, o, title: o.title || l.title, preparedFor: o.preparedFor, date: K().today(),
      scope: [l.unit, l.level].filter(Boolean).join(' · '),
      body: o.body ? l.body : null, quiz: o.quiz && quiz.length ? quiz : null, gaps: gaps.length ? gaps : null,
      key: o.key && ((o.quiz && quiz.length) || gaps.length) ? { quiz: o.quiz ? quiz : [], gaps } : null
    };
  }
  const lessonCanPrint = (o) => o.body || o.quiz || o.gaps || o.key;
  const lqHTML = (qs) => '<ol class="gh-quiz">' + qs.map((q) => '<li><b>' + esc(q[0]) + '</b><ol type="A" class="gh-qopts">' + q[1].map((x) => '<li>' + esc(x) + '</li>').join('') + '</ol></li>').join('') + '</ol>';
  const lkeyHTML = (qs) => '<ol class="gh-keyB gh-keyQ">' + qs.map((q) => '<li><b>' + letter(q[2]) + '. ' + esc(q[1][q[2]]) + '</b> <small>' + esc(q[3] || '') + '</small></li>').join('') + '</ol>';
  const optLine = (opts) => '(' + opts.join(' · ') + ')';
  const gapWsHTML = (gs, en) => '<ol class="gh-wsB">' + gs.map((g) => '<li><span class="tl">' + esc(g.q) + '</span> <span class="gh-dopts tl">' + esc(optLine(g.opts.slice().sort())) + '</span>' + (en && g.en ? '<div class="gh-en gh-den">' + esc(g.en) + '</div>' : '') + '</li>').join('') + '</ol>';
  function lessonHTML(m) {
    let h = headHTML(m);
    if (m.body) h += '<section class="ho-sec"><div class="lesson-body">' + m.body.replace(/<table>/g, '<div class="ho-tw"><table>').replace(/<\/table>/g, '</table></div>') + '</div></section>';
    if (m.quiz) h += '<section class="ho-sec gh-ws"><h2>Check yourself</h2>' + lqHTML(m.quiz) + '</section>';
    if (m.gaps) h += '<section class="ho-sec gh-ws"><h2>Fill the gap</h2><p class="ho-goal">Write the missing word on the line. The choices are in brackets.</p>' + gapWsHTML(m.gaps, m.o.english !== 'hide') + '</section>';
    if (m.key) h += '<section class="ho-sec gh-key"><h2>Answer key</h2>' + (m.key.quiz.length ? (m.key.gaps.length ? '<h3>Check yourself</h3>' : '') + lkeyHTML(m.key.quiz) : '') +
      (m.key.gaps.length ? '<h3>Fill the gap</h3><ol class="gh-keyB">' + m.key.gaps.map((g) => '<li><b>' + esc(g.a) + '</b> · <span class="tl">' + esc(App.drillGapFull(g)) + '</span></li>').join('') + '</ol>' : '') + '</section>';
    return h + K().footHTML();
  }
  function lessonDoc(m, logo) {
    const k = kit(m, logo), { MUTED, NAVY, base, content, heading, sub } = k, en = m.o.english !== 'hide';
    const run = (t, extra) => Object.assign({ text: t }, extra || {});
    if (m.body) htmlToPdf(m.body, { base }).forEach((x) => content.push(x));
    if (m.quiz) {
      content.push(heading('Check yourself', m.quiz.length + ' questions'));
      m.quiz.forEach((q, i) => content.push({ stack: [{ text: [run((i + 1) + '. ', { color: MUTED }), run(q[0], { bold: true })] }].concat(q[1].map((x, j) => ({ text: [run(letter(j) + '.  ', { color: MUTED }), run(x)], margin: [16, 1, 0, 0] }))), unbreakable: true, margin: [0, 0, 0, 7] }));
    }
    if (m.gaps) {
      content.push(heading('Fill the gap', m.gaps.length + ' sentences'));
      content.push({ text: 'Write the missing word on the line. The choices are in brackets.', color: MUTED, fontSize: base - 1, margin: [0, 0, 0, 4] });
      m.gaps.forEach((g, i) => content.push({ stack: [{ text: [run((i + 1) + '. ', { color: MUTED }), run(g.q, { bold: true }), run('   ' + optLine(g.opts.slice().sort()), { color: NAVY })] }].concat(en && g.en ? [{ text: g.en, color: MUTED, fontSize: base - 1, margin: [12, 1, 0, 0] }] : []), unbreakable: true, margin: [0, 0, 0, 6] }));
    }
    if (m.key) {
      content.push(Object.assign(heading('Answer key', m.l.title), { pageBreak: content.length > 1 ? 'before' : undefined }));
      if (m.key.quiz.length) {
        if (m.key.gaps.length) content.push(sub('Check yourself'));
        m.key.quiz.forEach((q, i) => content.push({ text: [run((i + 1) + '  ', { color: MUTED }), run(letter(q[2]) + '. ' + q[1][q[2]], { bold: true }), run('  ' + (q[3] || ''), { color: MUTED, fontSize: base - 1.5 })], margin: [0, 0, 0, 4] }));
      }
      if (m.key.gaps.length) {
        content.push(sub('Fill the gap'));
        m.key.gaps.forEach((g, i) => content.push({ text: [run((i + 1) + '  ', { color: MUTED }), run(g.a + '  ·  ', { bold: true, color: NAVY }), run(App.drillGapFull(g), { bold: true })], margin: [0, 0, 0, 3] }));
      }
    }
    return finish(m, k, NAME + ' lesson handout');
  }

  /* ===================== Topic: drills ===================== */
  const DRILL_PARTS = [
    ['gap', 'Fill the gap', 'Write the missing word on the line. The choices are in brackets.'],
    ['build', 'Build the sentence', 'Put the words in order and write the sentence.'],
    ['errors', 'Find the mistake', 'One word in each sentence is wrong. Write the corrected sentence.'],
    ['translate', 'Say it in ' + NAME, 'Write each sentence in ' + NAME + '.']
  ];
  function drillPart(k, n, rnd) {
    const W = window, pick = App.drillSeeded.pick;
    if (k === 'gap') {
      const sets = W.DRILL_CLOZE_SETS || {};
      const cl = (W.DRILL_CLOZE || []).filter((it) => sets[it.set] && (sets[it.set].opts || []).includes(it.a)).map((it) => ({ q: it.q, en: it.en, a: it.a, opts: sets[it.set].opts, full: it.q.replace('____', it.a) }));
      const gp = (W.DRILL_GAPS || []).filter((it) => it && typeof it.q === 'string' && Array.isArray(it.opts) && it.opts.includes(it.a)).map((it) => ({ q: it.q, en: it.en, a: it.a, opts: it.opts, full: App.drillGapFull(it) }));
      // About a third markers, the rest the gap sets; topped up from either list when one runs short.
      const a = pick(cl, Math.ceil(n / 3), rnd), b = pick(gp, n - a.length, rnd);
      const more = pick(cl.filter((x) => !a.includes(x)), n - a.length - b.length, rnd);
      return pick(a.concat(b, more), n, rnd).map((x) => ({ item: { tl: x.q, en: x.en, opts: x.opts }, key: { a: x.a, tl: x.full } }));
    }
    if (k === 'build') return pick((W.DRILL_BUILD || []).filter((x) => Array.isArray(x.t) && x.t.length > 1), n, rnd).map((x) => {
      let tiles = pick(x.t.map((w, i) => (i === 0 ? w.charAt(0).toLowerCase() + w.slice(1) : w)), x.t.length, rnd);
      if (tiles.join(' ').toLowerCase() === x.t.join(' ').toLowerCase()) tiles = tiles.reverse();
      const full = x.t.join(' '); return { item: { tl: tiles.join(' / '), en: x.en, line: 1 }, key: { tl: full.charAt(0).toUpperCase() + full.slice(1) + (x.end || '.') } };
    });
    if (k === 'errors') return pick((W.DRILL_ERRORS || []).filter((x) => x && x.bad && x.fix), n, rnd).map((x) => ({ item: { tl: x.bad, en: x.en, line: 1 }, key: { tl: x.fix, en: x.why } }));
    if (k === 'translate') return pick((W.DRILL_TRANSLATE || []).filter((x) => App.drillAnswers(x).length), n, rnd).map((x) => ({ item: { en: x.en, line: 1 }, key: { tl: App.drillAnswers(x)[0], en: App.drillAnswers(x).slice(1, 3).join(' · ') } }));
    return [];
  }
  function drillsBuild(o) {
    const n = [8, 12, 16].includes(+o.n) ? +o.n : 8, seed = o.seed || 1;
    const parts = DRILL_PARTS.filter(([k]) => o[k]).map(([k, title, how]) => {
      const rows = drillPart(k, n, App.drillSeeded.rnd(seed + ':' + k));
      return { k, title, how, items: rows.map((r) => r.item), key: rows.map((r) => r.key) };
    }).filter((p) => p.items.length).map((p, i) => Object.assign(p, { id: letter(i) }));
    return {
      topic: 'drills', o, n, seed, title: o.title || DEF.drills.title, preparedFor: o.preparedFor, date: K().today(),
      scope: parts.length + (parts.length === 1 ? ' part' : ' parts') + ' · up to ' + n + ' items each · set ' + seed,
      parts, key: o.key && parts.length ? parts.map((p) => ({ id: p.id, k: p.k, title: p.title, answers: p.key })) : null
    };
  }
  const drillsCanPrint = (o) => DRILL_PARTS.some(([k]) => o[k]);
  function drillsHTML(m) {
    const en = m.o.english === 'show';
    let h = headHTML(m) + '<p class="ho-goal">Name: ____________________ Date: __________</p>';
    m.parts.forEach((p) => {
      h += '<section class="ho-sec gh-ws"><h2>' + p.id + '. ' + esc(p.title) + '</h2><p class="ho-goal">' + esc(p.how) + '</p><ol class="gh-wsB">' + p.items.map((it) =>
        '<li>' + (it.tl ? '<span class="tl">' + esc(it.tl) + '</span>' : '') + (it.opts ? ' <span class="gh-dopts tl">' + esc(optLine(it.opts)) + '</span>' : '') +
        (it.en && (en || !it.tl) ? '<div class="gh-en gh-den">' + esc(it.en) + '</div>' : '') +
        (it.line ? '<div class="gh-lines"><span class="gh-blank"></span></div>' : '') + '</li>').join('') + '</ol></section>';
    });
    if (m.key) h += '<section class="ho-sec gh-key"><h2>Answer key</h2>' + m.key.map((p) => '<h3>' + p.id + '. ' + esc(p.title) + '</h3><ol class="gh-keyB">' + p.answers.map((a) => '<li>' + (a.a ? '<b>' + esc(a.a) + '</b> · ' : '') + '<b class="tl">' + esc(a.tl) + '</b>' + (a.en && en ? ' <small>' + esc(a.en) + '</small>' : '') + '</li>').join('') + '</ol>').join('') + '</section>';
    return h + K().footHTML();
  }
  function drillsDoc(m, logo) {
    const k = kit(m, logo), { MUTED, LINE, NAVY, base, content, heading, sub } = k, en = m.o.english === 'show', w = pageW(m.o) - 16;
    const run = (t, x) => Object.assign({ text: t }, x || {});
    const rule = () => ({ canvas: [{ type: 'line', x1: 0, y1: 0, x2: w, y2: 0, lineWidth: 0.6, lineColor: LINE }], margin: [12, 16, 0, 0] }); // fresh node each time: pdfmake mutates nodes
    content.push({ text: 'Name: ______________________   Date: ____________', margin: [0, 2, 0, 2] });
    m.parts.forEach((p) => {
      const head = [heading(p.id + '. ' + p.title, ''), { text: p.how, color: MUTED, fontSize: base - 1, margin: [0, 0, 0, 4] }];
      p.items.forEach((it, i) => {
        const line1 = [run((i + 1) + '. ', { color: MUTED })];
        if (it.tl) line1.push(run(it.tl, { bold: true }));
        if (it.opts) line1.push(run('   ' + optLine(it.opts), { color: NAVY }));
        if (!it.tl && it.en) line1.push(run(it.en));
        const stack = [{ text: line1 }];
        if (it.tl && it.en && en) stack.push({ text: it.en, color: MUTED, fontSize: base - 1, margin: [12, 1, 0, 0] });
        if (it.line) stack.push(rule());
        // The part heading travels with its first item so it never sits alone at the foot of a page.
        content.push({ stack: i === 0 ? head.concat(stack) : stack, unbreakable: true, margin: [0, 0, 0, it.line ? 8 : 5] });
      });
    });
    if (m.key) {
      content.push(Object.assign(heading('Answer key', m.title), { pageBreak: 'before' }));
      m.key.forEach((p) => {
        content.push(sub(p.id + '. ' + p.title));
        p.answers.forEach((a, i) => content.push({ text: [run((i + 1) + '  ', { color: MUTED })].concat(a.a ? [run(a.a + '  ·  ', { bold: true, color: NAVY })] : []).concat([run(a.tl, { bold: true })]).concat(a.en && en ? [run('  ' + a.en, { color: MUTED, fontSize: base - 1.5 })] : []), margin: [0, 0, 0, 3] }));
      });
    }
    return finish(m, k, NAME + ' grammar drills handout');
  }

  const build = (o) => (o.topic === 'drills' ? drillsBuild(o) : lessonBuild(o));
  const renderHTML = (m) => (m.topic === 'drills' ? drillsHTML(m) : lessonHTML(m));
  const docDef = (m, logo) => (m.topic === 'drills' ? drillsDoc(m, logo) : lessonDoc(m, logo));
  const withDefaults = (o) => Object.assign({}, DEF[(o && o.topic) || 'lesson'], o);
  App.grammarHandoutBuild = (o) => build(withDefaults(o)); // for tests
  App.grammarHandoutDoc = (o) => docDef(build(withDefaults(o)));

  /* ---------- Page ---------- */
  const canPrint = (o) => (o.topic === 'drills' ? drillsCanPrint : lessonCanPrint)(o);
  const PAGE = {
    lesson: { h1: 'Lesson handout', crumb: '<a href="#/lessons">Lessons</a> / Handout', intro: 'Print a lesson with its quiz and an answer key on a separate page. ◌ (author reconstruction) and ⚑ (to check) are kept. Your choices are remembered on this device.', file: 'lesson-handout' },
    drills: { h1: 'Drills handout', crumb: '<a href="#/drills">Drills</a> / Handout', intro: 'Print a grammar worksheet made from the drills: fill the gap, build the sentence, find the mistake and say it in ' + NAME + ', with the answer key on its own page. New set picks other sentences. Your choices are remembered on this device.', file: 'drills-handout' }
  };
  function page(topic, el, p, q) {
    let o = opts(topic);
    if (topic === 'lesson') {
      if (q.id && LV().some((l) => l.id === q.id)) o = Object.assign({}, o, { lesson: q.id, title: o.lesson === q.id ? o.title : '' });
      if (!LV().some((l) => l.id === o.lesson)) o.lesson = (LV()[0] || {}).id;
    }
    const pg = PAGE[topic];
    const chk = (k, label, hint, off) => '<label class="ho-chk"><input type="checkbox" data-o="' + k + '"' + (o[k] && !off ? ' checked' : '') + (off ? ' disabled' : '') + '> <span>' + label + (hint ? '<small class="muted"> ' + hint + '</small>' : '') + '</span></label>';
    const seg = (k, items) => '<div class="seg" role="group">' + items.map(([v, t]) => '<button data-seg="' + k + '" data-v="' + v + '" class="' + (String(o[k]) === v ? 'on' : '') + '">' + t + '</button>').join('') + '</div>';
    const paperSize = '<div><div class="eyebrow">Paper</div>' + seg('paper', [['A4', 'A4'], ['LETTER', 'Letter'], ['A5', 'A5 booklet']]) + '</div><div><div class="eyebrow">Text size</div>' + seg('size', [['small', 'Small'], ['normal', 'Normal'], ['large', 'Large']]) + '</div>';
    const englishSeg = '<div><div class="eyebrow">English</div>' + seg('english', [['show', 'Show'], ['hide', 'Hide']]) + '<p class="small muted" style="margin:4px 0 0">Hide it on the worksheet for an ' + esc(NAME) + '-only sheet.</p></div>';
    const controls = () => {
      if (topic === 'lesson') {
        const units = [];
        LV().forEach((l) => { let u = units.find((x) => x[0] === l.unit); if (!u) units.push((u = [l.unit, []])); u[1].push(l); });
        const sel = '<div><div class="eyebrow">Lesson</div><select class="input" id="ghLesson">' + units.map(([u, ls]) => '<optgroup label="' + esc(u) + '">' + ls.map((l) => '<option value="' + esc(l.id) + '"' + (o.lesson === l.id ? ' selected' : '') + '>' + esc(l.title) + (l.level ? ' (' + esc(l.level) + ')' : '') + '</option>').join('') + '</optgroup>').join('') + '</select></div>';
        const ng = gapsOf(o.lesson).length;
        return '<div class="ho-grid">' + sel + englishSeg + paperSize + '</div>' +
          '<div><div class="eyebrow">Include</div><div class="ho-chks">' + chk('body', 'Lesson text', 'with examples and tables') + chk('quiz', 'Quiz worksheet', 'lettered options, no answers') +
          chk('gaps', 'Fill-the-gap sentences', ng ? 'up to 10 from the lesson examples' : 'this lesson has too few examples', !ng) + chk('key', 'Answer key', 'on its own page') + '</div></div>';
      }
      const nSeg = '<div><div class="eyebrow">Items per part</div>' + seg('n', [['8', '8'], ['12', '12'], ['16', '16']]) + '</div>';
      const setBox = '<div><div class="eyebrow">Sentences</div><div class="row"><button class="btn sm" id="ghNew">New set</button><span class="muted small">Set ' + esc(String(o.seed || 1)) + '</span></div><p class="small muted" style="margin:4px 0 0">The same set prints the same sentences.</p></div>';
      return '<div class="ho-grid">' + nSeg + setBox + englishSeg + paperSize + '</div>' +
        '<div><div class="eyebrow">Include</div><div class="ho-chks">' + chk('gap', 'Fill the gap', 'markers, negators, pronouns, question words, small words, aspect' + (App.drillGapSets ? App.drillGapSets().map((g) => ', ' + esc(g.title.toLowerCase())).join('') : '')) + chk('build', 'Build the sentence', 'words in a jumbled order') +
        chk('errors', 'Find the mistake', 'write the corrected sentence') + chk('translate', 'Say it in ' + esc(NAME), 'from the English') + chk('key', 'Answer key', 'on its own page') + '</div></div>';
    };
    const defTitle = () => (topic === 'lesson' ? (LV().find((l) => l.id === o.lesson) || {}).title || '' : DEF.drills.title);
    const draw = () => {
      el.innerHTML = '<div class="breadcrumb">' + pg.crumb + '</div><h1>' + pg.h1 + '</h1><p class="muted">' + esc(pg.intro) + '</p>' +
        '<div class="notice warn" style="margin-bottom:12px">' + esc(K().draft()) + '</div>' +
        '<div class="card stack ho-controls">' + controls() +
        '<div class="ho-grid"><label class="small">Title<input class="input" id="ghTitle" value="' + esc(o.title) + '" placeholder="' + esc(defTitle()) + '"></label><label class="small">Prepared for (optional)<input class="input" id="ghFor" value="' + esc(o.preparedFor) + '" placeholder="e.g., First years, Dept. of Psychiatry"></label></div>' +
        '<div class="row"><button class="btn primary" id="ghPdf">' + App.icons.read + ' Download PDF</button><button class="btn" id="ghPrint">Print</button>' + (topic === 'lesson' ? '<a class="btn" href="#/lessons/' + esc(o.lesson) + '">Open the lesson</a>' : '') + '<span class="muted small" id="ghStat" role="status"></span></div></div>' +
        '<h2 style="margin-top:18px">Preview</h2><div class="ho-paper ho-' + o.paper + ' ho-size-' + o.size + '" id="ghPaper"></div>';
      bind();
      preview();
    };
    const preview = () => { const paper = el.querySelector('#ghPaper'); paper.innerHTML = canPrint(o) ? renderHTML(build(o)) : '<p class="muted">Choose at least one part to include.</p>'; };
    const update = (patch, redraw) => { o = Object.assign({}, o, patch); saveOpts(o, topic); if (redraw) draw(); else preview(); };
    const bind = () => {
      el.querySelectorAll('[data-seg]').forEach((b) => (b.onclick = () => {
        const k = b.dataset.seg;
        el.querySelectorAll('[data-seg="' + k + '"]').forEach((x) => x.classList.toggle('on', x === b));
        const patch = { [k]: b.dataset.v };
        if (k === 'paper' || k === 'size') el.querySelector('#ghPaper').className = 'ho-paper ho-' + (patch.paper || o.paper) + ' ho-size-' + (patch.size || o.size);
        update(patch);
      }));
      el.querySelectorAll('[data-o]').forEach((c) => (c.onchange = () => update({ [c.dataset.o]: c.checked })));
      const ls = el.querySelector('#ghLesson'); if (ls) ls.onchange = () => update({ lesson: ls.value, title: '' }, true);
      const nw = el.querySelector('#ghNew'); if (nw) nw.onclick = () => update({ seed: (+o.seed || 1) + 1 }, true);
      el.querySelector('#ghTitle').oninput = (e) => update({ title: e.target.value });
      el.querySelector('#ghFor').oninput = (e) => update({ preparedFor: e.target.value });
      el.querySelector('#ghPrint').onclick = () => window.print();
      el.querySelector('#ghPdf').onclick = async () => {
        const stat = el.querySelector('#ghStat'), btn = el.querySelector('#ghPdf');
        if (!canPrint(o)) { App.toast('Choose at least one part first.'); return; }
        btn.disabled = true; stat.textContent = 'Making your PDF…';
        try {
          await K().load();
          const logo = await K().logo();
          const m = build(o);
          const name = await K().makePdf(docDef(m, logo), K().fileName(m.title, pg.file, o.english === 'hide' && topic === 'drills' ? '-' + LANG.code + '-only' : ''));
          stat.textContent = 'Downloaded ' + name; btn.disabled = false;
          App.activity(5);
        } catch (e) {
          console.warn(e);
          stat.textContent = ''; btn.disabled = false;
          App.toast('The PDF tool could not load. Check your connection once, or use Print → Save as PDF.');
        }
      };
    };
    draw();
  }
  V.ghandoutLesson = (el, p, q) => page('lesson', el, p, q);
  V.ghandoutDrills = (el, p, q) => page('drills', el, p, q);
})();
