/* Printable handouts, part 1: the shared PDF kit (App.pdfKit, also used by js/grammar-handout.js) and the psychiatry
   phrase handout (#/psych/handout), ported from Usap Tayo 3.x js/handout.js and cut down to what this app's data has:
   PSYCH_SECTIONS (choose sections; f / c / both registers; English shown, hidden or as a numbered key at the end; the
   clinician notes) and PSYCH_ANSWERS.sections (likely patient replies). One content model, rendered as an on-screen
   preview (also used for Print) and as a PDF through pdfmake, which is loaded only when a PDF is made (js/vendor/; the
   service worker precaches it, so it works offline). Every page carries the attribution and a draft line. */
(function () {
  const { esc, icons } = App;
  const V = App.views;
  const S = () => App.state;
  const NAME = LANG.name;

  /* ---------- Shared PDF kit ---------- */
  let pdfReady = null;
  function loadPdfMake() {
    if (window.pdfMake && window.pdfMake.vfs && window.pdfMake.vfs['Marks.ttf']) return Promise.resolve();
    if (pdfReady) return pdfReady;
    const add = (src) => new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = () => rej(new Error('Could not load ' + src)); document.head.appendChild(s); });
    pdfReady = add('js/vendor/pdfmake.min.js').then(() => add('js/vendor/vfs_fonts.js')).then(() => add('js/vendor/vfs_marks.js')).then(() => {
      // Roboto (pdfmake's default) has no ◌ or ⚑: those runs use the small Marks font (js/vendor/vfs_marks.js).
      window.pdfMake.fonts = Object.assign({}, window.pdfMake.fonts || {}, {
        Roboto: { normal: 'Roboto-Regular.ttf', bold: 'Roboto-Medium.ttf', italics: 'Roboto-Italic.ttf', bolditalics: 'Roboto-MediumItalic.ttf' },
        Marks: { normal: 'Marks.ttf', bold: 'Marks.ttf', italics: 'Marks.ttf', bolditalics: 'Marks.ttf' }
      });
    });
    pdfReady.catch(() => (pdfReady = null));
    return pdfReady;
  }
  function logoDataURL() {
    return new Promise((res) => {
      const img = new Image();
      img.onload = () => { try { const c = document.createElement('canvas'); c.width = c.height = 96; c.getContext('2d').drawImage(img, 0, 0, 96, 96); res(c.toDataURL('image/png')); } catch (e) { res(null); } };
      img.onerror = () => res(null);
      img.src = 'icons/logo-96.png';
    });
  }
  // Characters Roboto lacks are kept, as runs in the Marks font. Walks the tree in place so layout functions survive.
  const MARKS = /([◌⚑→↔✗✓☐])/;
  const runs = (s) => s.split(MARKS).filter((x) => x !== '').map((x) => (MARKS.test(x) && x.length === 1 ? { text: x, font: 'Marks' } : x));
  function fixGlyphs(node) {
    if (Array.isArray(node)) node.forEach((x, i) => { if (typeof x === 'string') { if (MARKS.test(x)) node[i] = { text: runs(x) }; } else fixGlyphs(x); });
    else if (node && typeof node === 'object') Object.keys(node).forEach((k) => {
      const v = node[k];
      if (k === 'text' && typeof v === 'string') { if (MARKS.test(v)) node[k] = runs(v); }
      else if (k !== 'image' && k !== 'canvas' && v && typeof v === 'object') fixGlyphs(v);
    });
    return node;
  }
  // Brand colours of this app (teal and sun gold), used for the paper preview and the PDF.
  const NAVY = '#1C676E', GOLD = '#F5C863', MUTED = '#5a6b6d', LINE = '#d4e2e3', TINT = '#eef5f5';
  const ATTR = () => (window.APP_META && APP_META.attribution) || ('App created by Isabella Navarro, MD. Latest version ' + ((window.APP_META && APP_META.updated) || '') + '. isaymotion@gmail.com');
  const DRAFT = () => LANG.draftShort || ('Draft: the ' + NAME + ' has not been checked by a native speaker.');
  const footHTML = (extra) => '<footer class="ho-foot">' + esc(ATTR()) + '<br>' + esc(DRAFT()) + (extra ? ' ' + esc(extra) : '') + '</footer>';
  // The PDF footer of every handout: attribution, the draft line, page numbers.
  const footer = (a5, extra) => (cur, total) => ({ margin: a5 ? [28, 8, 28, 0] : [40, 12, 40, 0], columns: [
    { text: ATTR() + '\n' + DRAFT() + (extra ? ' ' + extra : ''), fontSize: a5 ? 5.5 : 6.5, color: MUTED },
    { text: cur + ' / ' + total, alignment: 'right', fontSize: a5 ? 6.5 : 7.5, color: MUTED, width: 40 }
  ] });
  const fileName = (title, fallback, suffix) => ((title || fallback).replace(/[^\w\- ]+/g, '').trim().replace(/\s+/g, '-').toLowerCase() || fallback) + (suffix || '') + '.pdf';
  const today = () => new Date().toLocaleDateString('en-PH', { year: 'numeric', month: 'long', day: 'numeric' });
  // Make the PDF and download it; resolves with the file name. Used by both handout pages.
  async function makePdf(doc, name) {
    await loadPdfMake();
    return new Promise((res, rej) => { try { window.pdfMake.createPdf(doc).download(name, () => res(name)); } catch (e) { rej(e); } });
  }
  App.pdfKit = { load: loadPdfMake, logo: logoDataURL, fixGlyphs, makePdf, footer, footHTML, attribution: ATTR, draft: DRAFT, fileName, today, NAVY, GOLD, MUTED, LINE, TINT };

  /* ---------- Psychiatry phrase handout ---------- */
  const SEC = () => window.PSYCH_SECTIONS || [];
  const ANS = () => (window.PSYCH_ANSWERS && PSYCH_ANSWERS.sections) || {};
  const DEFAULTS = { sections: null, register: 'f', english: 'show', notes: true, answers: false, paper: 'A4', size: 'normal', title: NAME + ' Interview Phrases', preparedFor: '' };
  function opts() { const o = Object.assign({}, DEFAULTS, S().settings.handout || {}); if (!Array.isArray(o.sections)) o.sections = SEC().map((s) => s.id); return o; }
  function saveOpts(o) { S().settings.handout = o; App.save(); }
  const regLabel = (r) => (r === 'c' ? LANG.registers.c.label : r === 'both' ? LANG.registers.f.label + ', with the ' + LANG.registers.c.short.toLowerCase() + ' form in italics' : LANG.registers.f.label);
  function build(o) {
    const key = [];
    const body = SEC().filter((s) => o.sections.includes(s.id)).map((s, si) => {
      const phrases = s.phrases.map((p, k) => {
        const main = o.register === 'c' ? p.c || p.f : p.f;
        const alt = o.register === 'both' && p.c && p.c !== p.f ? p.c : '';
        const num = (si + 1) + '.' + (k + 1);
        key.push([num, p.en]);
        return { num, tl: main, alt, en: p.en, note: o.notes ? p.n || '' : '' };
      });
      const replies = o.answers ? (ANS()[s.id] || []).filter((r) => Array.isArray(r) && r[0]).map((r) => ({ tl: r[0], en: r[1] || '', note: o.notes ? r[2] || '' : '' })) : [];
      return { n: si + 1, id: s.id, title: s.title, group: s.group, intro: o.notes ? s.intro || '' : '', phrases, replies };
    });
    return { title: o.title || DEFAULTS.title, preparedFor: o.preparedFor, date: today(), body, key: o.english === 'key' ? key : null, o };
  }
  const canPrint = (o) => o.sections.length > 0;
  function renderHTML(m) {
    const o = m.o, showEn = o.english === 'show', numbered = o.english === 'key';
    const ph = (p) => '<div class="ho-ph' + (showEn ? '' : ' one') + '">' + (numbered ? '<span class="ho-num">' + p.num + '</span>' : '') +
      '<div class="ho-tl"><b class="tl">' + esc(p.tl) + '</b>' + (p.alt ? '<i class="tl">' + esc(p.alt) + '</i>' : '') + (p.note ? '<small>' + esc(p.note) + '</small>' : '') + '</div>' +
      (showEn ? '<div class="ho-en">' + esc(p.en) + '</div>' : '') + '</div>';
    const rep = (r) => '<div class="ho-ph' + (showEn ? '' : ' one') + '"><div class="ho-tl"><b class="tl">' + esc(r.tl) + '</b>' + (r.note ? '<small>' + esc(r.note) + '</small>' : '') + '</div>' + (showEn ? '<div class="ho-en">' + esc(r.en) + '</div>' : '') + '</div>';
    let h = '<header class="ho-head"><img src="icons/logo-96.png" alt=""><div><h1>' + esc(m.title) + '</h1><p>' + (m.preparedFor ? 'Prepared for ' + esc(m.preparedFor) + ' · ' : '') + esc(m.date) + ' · ' + esc(regLabel(o.register)) + '</p></div></header>';
    m.body.forEach((st) => {
      h += '<section class="ho-sec"><h2><span class="ho-n">' + st.n + '</span>' + esc(st.title) + '</h2>' + (st.intro ? '<p class="ho-goal">' + esc(st.intro) + '</p>' : '') + st.phrases.map(ph).join('') +
        (st.replies.length ? '<h3>Likely replies</h3>' + st.replies.map(rep).join('') : '') + '</section>';
    });
    if (m.key) h += '<section class="ho-sec"><h2>English key</h2><div class="ho-key">' + m.key.map(([k, e]) => '<div><span class="ho-num">' + k + '</span>' + esc(e) + '</div>').join('') + '</div></section>';
    return h + footHTML('Practice phrasings for training, not validated instrument translations.');
  }
  function docDef(m, logo) {
    const o = m.o, showEn = o.english === 'show', numbered = o.english === 'key';
    const base = { small: 8.5, normal: 10, large: 12 }[o.size] || 10, a5 = o.paper === 'A5';
    const content = [];
    const titleStack = { stack: [{ text: m.title, style: 'h1' }, { text: (m.preparedFor ? 'Prepared for ' + m.preparedFor + ' · ' : '') + m.date + ' · ' + regLabel(o.register), style: 'meta' }] };
    content.push(logo ? { columns: [{ image: logo, width: a5 ? 30 : 40 }, Object.assign(titleStack, { width: '*', margin: [8, a5 ? 0 : 3, 0, 0] })], margin: [0, 0, 0, 10] } : Object.assign(titleStack, { margin: [0, 0, 0, 10] }));
    const row = (p, num) => {
      const tl = [{ text: p.tl, bold: true }];
      if (p.alt) tl.push({ text: '\n' + p.alt, italics: true, color: MUTED });
      if (p.note) tl.push({ text: '\n' + p.note, fontSize: base - 1.5, color: MUTED });
      const r = [];
      if (numbered) r.push({ text: num || '', color: MUTED, fontSize: base - 1.5 });
      r.push({ text: tl });
      if (showEn) r.push({ text: p.en, color: '#333a3c' });
      return r;
    };
    const widths = () => (numbered ? ['auto'] : []).concat(showEn ? ['*', a5 ? '40%' : '42%'] : ['*']);
    const layout = { hLineWidth: (i, node) => (i === 0 || i === node.table.body.length ? 0 : 0.5), vLineWidth: () => 0, hLineColor: () => LINE, paddingTop: () => 3.5, paddingBottom: () => 3.5, paddingLeft: (i) => (i === 0 ? 0 : 6), paddingRight: () => 4 };
    const heading = (n, title) => ({ table: { widths: n != null ? [a5 ? 16 : 20, '*'] : ['*'], body: [(n != null ? [{ text: String(n), color: NAVY, bold: true, fillColor: GOLD, alignment: 'center' }] : []).concat([{ text: title, color: '#ffffff', bold: true, fillColor: NAVY }])] }, layout: { hLineWidth: () => 0, vLineWidth: () => 0, paddingTop: () => 3, paddingBottom: () => 3, paddingLeft: () => 6 }, margin: [0, 10, 0, 4], fontSize: base + 1.5 });
    m.body.forEach((st) => {
      const block = [heading(st.n, st.title)];
      if (st.intro) block.push({ text: st.intro, color: MUTED, fontSize: base - 1, margin: [0, 0, 0, 3] });
      block.push({ table: { widths: widths(), dontBreakRows: true, body: st.phrases.map((p) => row(p, p.num)) }, layout });
      if (st.replies.length) {
        block.push({ text: 'Likely replies', bold: true, color: NAVY, margin: [0, 6, 0, 2] });
        block.push({ table: { widths: widths(), dontBreakRows: true, body: st.replies.map((r) => row(r, '')) }, layout, fontSize: base - 0.5 });
      }
      content.push({ stack: block });
    });
    if (m.key) {
      content.push(Object.assign(heading(null, 'English key'), { pageBreak: 'before' }));
      const per = Math.ceil(m.key.length / 2);
      content.push({ columns: [0, 1].map((half) => ({ stack: m.key.slice(half * per, (half + 1) * per).map(([k, e]) => ({ text: [{ text: k + '  ', color: MUTED }, e], fontSize: base - 1.5, margin: [0, 0, 0, 2] })) })), columnGap: 14 });
    }
    return {
      pageSize: o.paper === 'LETTER' ? 'LETTER' : o.paper,
      pageMargins: a5 ? [28, 28, 28, 44] : [40, 40, 40, 56],
      info: { title: m.title, author: APP_META.author, subject: 'Psychiatric interview in ' + NAME, creator: APP_META.name + ' ' + APP_META.version },
      content: fixGlyphs(content),
      footer: footer(a5, 'Practice phrasings, not validated instrument translations.'),
      defaultStyle: { font: 'Roboto', fontSize: base, lineHeight: 1.15 },
      styles: { h1: { fontSize: a5 ? base + 5 : base + 8, bold: true, color: NAVY }, meta: { color: MUTED, fontSize: base - 1 } }
    };
  }
  App.handoutBuild = build;
  App.handoutDoc = (o) => docDef(build(Object.assign({}, DEFAULTS, { sections: SEC().map((s) => s.id) }, o))); // for tests

  V.handout = (el, p, q) => {
    let o = opts();
    if (q.s && SEC().some((s) => s.id === q.s)) o = Object.assign({}, o, { sections: [q.s] });
    const chk = (k, label, hint) => '<label class="ho-chk"><input type="checkbox" data-o="' + k + '"' + (o[k] ? ' checked' : '') + '> <span>' + label + (hint ? '<small class="muted"> ' + hint + '</small>' : '') + '</span></label>';
    const seg = (k, items) => '<div class="seg" role="group">' + items.map(([v, t]) => '<button data-seg="' + k + '" data-v="' + v + '" class="' + (o[k] === v ? 'on' : '') + '">' + t + '</button>').join('') + '</div>';
    const draw = () => {
      const groups = [];
      SEC().forEach((s) => { let g = groups.find((x) => x[0] === s.group); if (!g) groups.push((g = [s.group, []])); g[1].push(s); });
      el.innerHTML = '<div class="breadcrumb"><a href="#/psych">Psychiatry</a> / Handout</div><h1>Printable handout</h1>' +
        '<p class="muted">Build a phrase sheet for the ward or clinic from the interview sections, then download it as a PDF or print it. Your choices are remembered on this device.</p>' +
        '<div class="notice warn" style="margin-bottom:12px">' + esc(DRAFT()) + ' Practice phrasings for training, not validated instrument translations.</div>' +
        '<div class="card stack ho-controls">' +
        '<div class="ho-grid">' +
        '<div><div class="eyebrow">English translation</div>' + seg('english', [['show', 'Show'], ['hide', 'Hide'], ['key', 'Key at the end']]) + '<p class="small muted" style="margin:4px 0 0">Hide it to practise; the key numbers each line.</p></div>' +
        '<div><div class="eyebrow">Register</div>' + seg('register', [['f', esc(LANG.registers.f.short)], ['c', esc(LANG.registers.c.short)], ['both', 'Both']]) + '</div>' +
        '<div><div class="eyebrow">Paper</div>' + seg('paper', [['A4', 'A4'], ['LETTER', 'Letter'], ['A5', 'A5 booklet']]) + '</div>' +
        '<div><div class="eyebrow">Text size</div>' + seg('size', [['small', 'Small'], ['normal', 'Normal'], ['large', 'Large']]) + '</div>' +
        '</div>' +
        '<div><div class="eyebrow">Include</div><div class="ho-chks">' + chk('notes', 'Section notes and clinician tips') + chk('answers', 'Likely patient replies', 'from the point board') + '</div></div>' +
        '<details open><summary><b>Sections</b> <span class="muted small" data-n>(' + o.sections.length + ' selected)</span></summary><div class="ho-chks" style="margin-top:8px">' +
        groups.map(([g, ss]) => '<div class="small muted" style="grid-column:1/-1">' + esc(g) + '</div>' + ss.map((s) => '<label class="ho-chk"><input type="checkbox" data-sec="' + esc(s.id) + '"' + (o.sections.includes(s.id) ? ' checked' : '') + '> <span>' + esc(s.title) + ' <small class="muted">' + s.phrases.length + '</small></span></label>').join('')).join('') +
        '<div class="row" style="grid-column:1/-1"><button class="btn sm" data-all="1">Select all</button><button class="btn sm" data-all="0">Clear</button></div></div></details>' +
        '<div class="ho-grid"><label class="small">Title<input class="input" id="hoTitle" value="' + esc(o.title) + '"></label><label class="small">Prepared for (optional)<input class="input" id="hoFor" value="' + esc(o.preparedFor) + '" placeholder="e.g., First years, Dept. of Psychiatry"></label></div>' +
        '<div class="row"><button class="btn primary" id="hoPdf">' + icons.read + ' Download PDF</button><button class="btn" id="hoPrint">Print</button><span class="muted small" id="hoStat" role="status"></span></div></div>' +
        '<h2 style="margin-top:18px">Preview</h2><div class="ho-paper ho-' + o.paper + ' ho-size-' + o.size + '" id="hoPaper"></div>';
      bind();
      preview();
    };
    const preview = () => { const paper = el.querySelector('#hoPaper'); paper.innerHTML = canPrint(o) ? renderHTML(build(o)) : '<p class="muted">Choose at least one section.</p>'; };
    const update = (patch, redraw) => { o = Object.assign({}, o, patch); saveOpts(o); if (redraw) draw(); else preview(); };
    const bind = () => {
      el.querySelectorAll('[data-seg]').forEach((b) => (b.onclick = () => {
        el.querySelectorAll('[data-seg="' + b.dataset.seg + '"]').forEach((x) => x.classList.toggle('on', x === b));
        const patch = { [b.dataset.seg]: b.dataset.v };
        if (b.dataset.seg === 'paper' || b.dataset.seg === 'size') el.querySelector('#hoPaper').className = 'ho-paper ho-' + (patch.paper || o.paper) + ' ho-size-' + (patch.size || o.size);
        update(patch);
      }));
      el.querySelectorAll('[data-o]').forEach((c) => (c.onchange = () => update({ [c.dataset.o]: c.checked })));
      el.querySelectorAll('[data-sec]').forEach((c) => (c.onchange = () => {
        const sections = SEC().map((s) => s.id).filter((id) => (id === c.dataset.sec ? c.checked : o.sections.includes(id)));
        update({ sections });
        el.querySelector('[data-n]').textContent = '(' + sections.length + ' selected)';
      }));
      el.querySelectorAll('[data-all]').forEach((b) => (b.onclick = () => update({ sections: b.dataset.all === '1' ? SEC().map((s) => s.id) : [] }, true)));
      el.querySelector('#hoTitle').oninput = (e) => update({ title: e.target.value });
      el.querySelector('#hoFor').oninput = (e) => update({ preparedFor: e.target.value });
      el.querySelector('#hoPrint').onclick = () => window.print();
      el.querySelector('#hoPdf').onclick = async () => {
        const stat = el.querySelector('#hoStat'), btn = el.querySelector('#hoPdf');
        if (!canPrint(o)) { App.toast('Choose at least one section first.'); return; }
        btn.disabled = true; stat.textContent = 'Making your PDF…';
        try {
          await loadPdfMake();
          const logo = await logoDataURL();
          const name = await makePdf(docDef(build(o), logo), fileName(o.title, 'interview-phrases', o.english === 'hide' ? '-' + LANG.code + '-only' : ''));
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
  };
})();
