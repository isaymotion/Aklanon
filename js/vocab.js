/* Vocabulary practice for Mag-istorya Kita (ported from Usap Tayo 3.x js/vocab.js). #/vocab lists the games,
   #/vocab/<mode> runs one. Data: the dictionary (App.DICT: tl = the Aklanon headword, en, pos, cat, root, note,
   tagalog). Optional window.WORD_ODD = [{ w: [four words], odd: index of the odd one, why }] replaces the automatic
   odd-one-out questions.
   match  Match the pairs: five words and five meanings a round, three rounds
   type   Type the word: English to Aklanon, typed; a near miss on a long word passes as "Almost"
   hear   Hear the word: the word is played (a Filipino device voice: no Aklanon voice exists), pick the meaning
   odd    Odd one out: three words of one dictionary topic and one of another
   pairs  Word pairs: WORD_PAIRS (js/data/drills-2.js); see `a`, choose its partner `b` of the same type. ?type=opp|syn|col
   context In context: an Aklanon sentence already in the app with one dictionary word blanked; choose the word
   Word source (match, type, hear): ?cat=<key> or state.settings.vocabCat; 'mine' = mistakes and due cards, 'all', a topic.
   Best scores: state.done.vocab['<mode>:<source>']. */
(function () {
  const { esc, shuffle, pick, norm } = App;
  const V = (App.views = App.views || {});
  const NAME = LANG.name;
  const N = 10;
  const ALL = '<a class="btn" href="#/vocab">All vocabulary practice</a>';
  const DRAFT = '<p class="muted small" style="margin-top:12px">' + esc(LANG.draftShort || ('Draft: the ' + NAME + ' has not been checked by a native speaker.')) + '</p>';

  const MODES = [
    { id: 'match', title: 'Match the pairs', eyebrow: 'Tap pairs · 3 rounds', src: true, blurb: 'Five words, five meanings. Tap a word, then its meaning.',
      intro: 'Each round shows five ' + NAME + ' words and their meanings in a different order. Tap a word, then its meaning. Three rounds, fifteen pairs.' },
    { id: 'type', title: 'Type the word', eyebrow: 'Writing · 10 words', src: true, blurb: 'Read the meaning, type the ' + NAME + ' word.',
      intro: 'Read the meaning and type the ' + NAME + ' word. Capitals, accents and hyphens do not count, and a one-letter slip in a long word passes with a spelling note. Words you miss go to My mistakes.' },
    { id: 'hear', title: 'Hear the word', eyebrow: 'Listening · 10 words', src: true, audio: true, blurb: 'Hear a word, pick its meaning.',
      intro: 'A word is played. Choose what it means; the word is shown after you answer. There is no ' + NAME + ' voice on any device, so the word is read by a Filipino voice if your device has one: a rough guide to the sound only. Words you miss go to My mistakes.' },
    { id: 'odd', title: 'Odd one out', eyebrow: 'Vocabulary · 10 questions', blurb: 'Three words share a topic. Find the one that does not.',
      intro: 'Three of the four words come from one topic of the dictionary, such as the body or the family. Choose the word that does not belong.' },
    { id: 'pairs', title: 'Word pairs', eyebrow: 'Vocabulary · 10 questions', blurb: 'Opposites, similar words and words that go together.', ok: () => pairTypes().length > 0, opts: () => pairOpts(), optLabel: 'Type', optKey: 'type',
      intro: 'Learn words in pairs: opposites (good and bad), similar words, and words that go together. Each question shows a word; choose its partner from four.' },
    { id: 'context', title: 'In context', eyebrow: 'Vocabulary · 10 sentences', blurb: 'A sentence from the app with one word missing. Choose the word.', ok: () => ctxPool().length >= CTX_MIN,
      intro: 'Each question is an ' + NAME + ' sentence from the lessons, drills or interview phrases with one word left out. Choose the dictionary word that fits; the English of the sentence is shown under it. The word in the sentence is the dictionary form, so the wrong choices are the same part of speech.' }
  ];
  const byId = (id) => MODES.find((m) => m.id === id);
  const bestOf = (id) => { const o = App.state.done.vocab || {}; const v = Object.keys(o).filter((k) => k.split(':')[0] === id).map((k) => o[k]); return v.length ? Math.max(...v) : null; };
  const saveBest = (key, right, total) => {
    if (!total) return;
    const s = App.state; s.done.vocab = s.done.vocab || {};
    s.done.vocab[key] = Math.max(s.done.vocab[key] || 0, Math.round((100 * right) / total));
    App.activity(10); App.save();
  };
  const scoreCard = (pct, line) => '<div class="card stack"><h3>' + (pct >= 80 ? LANG.quiz.great : pct >= 50 ? LANG.quiz.ok : LANG.quiz.keepGoing) + ' ' + line + '</h3>' +
    '<div class="progress"><i style="width:' + pct + '%"></i></div><div class="row"><button class="btn primary" data-act="retry">Try again</button>' + ALL + '</div></div>';

  /* ---------- Word pools ---------- */
  // A usable word: up to three words long, English of 40 characters or fewer, never a stigmatizing word.
  const usable = (e) => e && e.cat !== 'stigma' && e.tl.trim().split(/\s+/).length <= 3 && e.en.length <= 40;
  const oneWord = (e) => !/\s/.test(e.tl.trim());
  const mineIds = () => {
    const s = App.state, now = Date.now();
    return [...new Set((s.mistakes || []).concat(Object.keys(s.srs || {}).filter((id) => (s.srs[id].due || 0) <= now)))].filter((id) => /^d\d+$/.test(id));
  };
  App.vocabPool = (cat) => (cat === 'mine' ? mineIds().map((id) => App.dictById[id]).filter(usable) : App.DICT.filter((e) => usable(e) && (!cat || cat === 'all' || e.cat === cat)));
  // Up to n entries, no two with the same English or the same Aklanon.
  const distinct = (list, n) => {
    const out = [], en = new Set(), tl = new Set();
    for (const e of shuffle(list)) { if (out.length >= n) break; if (en.has(e.nen) || tl.has(e.ftl)) continue; en.add(e.nen); tl.add(e.ftl); out.push(e); }
    return out;
  };
  const sources = () => {
    const out = [];
    if (distinct(App.vocabPool('mine'), 5).length >= 5) out.push(['mine', 'My mistakes and cards due']);
    out.push(['all', 'All words']);
    Object.keys(App.CATS).forEach((c) => { if (c !== 'stigma' && distinct(App.vocabPool(c), 5).length >= 5) out.push([c, App.CATS[c]]); });
    return out;
  };
  // A source with too few words falls back to all words (the caller shows a note).
  const poolFor = (src, min, filter) => {
    const f = filter || (() => true);
    let pool = App.vocabPool(src).filter(f);
    if (distinct(pool, min).length < min) { src = 'all'; pool = App.vocabPool('all').filter(f); }
    return { pool, src };
  };
  const wrongGloss = (right, first, rest) => {
    const seen = new Set([norm(right)]), out = [];
    for (const x of first.concat(rest)) { if (out.length >= 3) break; const k = norm(x); if (!seen.has(k)) { seen.add(k); out.push(x); } }
    return out;
  };

  /* ---------- Hear the word ---------- */
  function hearQs(n, cat) {
    const { pool } = poolFor(cat || 'all', 4);
    const all = App.vocabPool('all');
    return distinct(pool, n).map((e) => {
      const wrong = wrongGloss(e.en, shuffle(App.vocabPool(e.cat)).map((x) => x.en), shuffle(all).slice(0, 40).map((x) => x.en));
      return { q: e.tl, sub: 'What does it mean?', tlq: true, hideQ: 'Listen, then choose what the word means.', say: e.tl, opts: [e.en].concat(wrong), a: 0, cardId: e.id,
        exp: e.tl + ' = ' + e.en + '.' + (e.tagalog ? ' ' + LANG.bridgeLang.name + ': ' + e.tagalog + '.' : '') };
    });
  }

  /* ---------- Odd one out ----------
     WORD_ODD when loaded; otherwise three words of one topic and one of a topic from another family, so the odd one is
     clear (no "health" word as the odd one among "mind" words). */
  const FAMILY = { health: 'c', mind: 'c', risk: 'c', substance: 'c', clinical: 'c', emotions: 'c', beliefs: 'c', basics: 'g', particles: 'g', grammar: 'g', pronouns: 'g', questions: 'g', modals: 'g', verbs: 'g', adjectives: 'g', people: 'p', family: 'p' };
  const famOf = (c) => FAMILY[c] || c;
  function oddQs(n) {
    const ODD = (window.WORD_ODD || []).filter((it) => it && Array.isArray(it.w) && it.w.length >= 3 && it.w[it.odd]);
    if (ODD.length) return pick(ODD, Math.min(n, ODD.length)).map((it) => { const opts = shuffle(it.w), right = it.w[it.odd]; return { q: 'Which word does not belong?', sub: 'Three of these words share a topic.', tlo: true, opts, a: opts.indexOf(right), exp: it.why || '' }; });
    const by = {};
    App.vocabPool('all').filter((e) => oneWord(e) || e.tl.split(/\s+/).length <= 2).forEach((e) => (by[e.cat] = by[e.cat] || []).push(e));
    const cats = Object.keys(by).filter((c) => c !== 'other' && distinct(by[c], 3).length >= 3);
    if (cats.length < 2) return [];
    const out = [];
    for (let k = 0; k < n * 3 && out.length < n; k++) {
      const a = pick(cats, 1)[0], others = cats.filter((c) => famOf(c) !== famOf(a));
      if (!others.length) continue;
      const b = pick(others, 1)[0];
      const three = distinct(by[a], 3), odd = pick(by[b].filter((e) => !three.some((x) => x.nen === e.nen || x.ftl === e.ftl)), 1)[0];
      if (!odd || out.some((q) => q.opts.includes(odd.tl))) continue;
      const opts = shuffle(three.concat(odd));
      out.push({ q: 'Which word does not belong?', sub: 'Three of these words share a topic.', tlo: true, opts: opts.map((e) => e.tl), a: opts.indexOf(odd), cardId: odd.id,
        exp: odd.tl + ' (' + odd.en + ') is ' + (App.CATS[b] || b) + '. The others are ' + (App.CATS[a] || a) + ': ' + three.map((e) => e.tl + ' (' + e.en + ')').join(', ') + '.' });
    }
    return out;
  }
  /* ---------- Word pairs: WORD_PAIRS ----------
     { id, type: opp | syn | col, a, ea, b, eb, note?, en? }. The question shows a (and ea); the options are b and three other
     b of the same type that are not a partner of a anywhere in the data. A type is offered once it has 4 pairs. */
  const PAIR_TYPES = [['opp', 'Opposites'], ['syn', 'Similar words'], ['col', 'Words that go together']];
  const PAIR_ASK = { opp: 'Opposite of', syn: 'Similar to', col: 'Which word goes with' };
  const PAIR_MIN = 4;
  const isStr = (x) => typeof x === 'string' && x.trim() !== '';
  const lc = (s) => String(s || '').trim().toLowerCase();
  const pairsAll = () => (Array.isArray(window.WORD_PAIRS) ? window.WORD_PAIRS : []).filter((p) => p && isStr(p.id) && isStr(p.a) && isStr(p.b) && PAIR_ASK[p.type] && lc(p.a) !== lc(p.b));
  const pairTypes = () => { const all = pairsAll(); return PAIR_TYPES.filter(([k]) => all.filter((p) => p.type === k).length >= PAIR_MIN); };
  const pairOpts = () => { const t = pairTypes(); return t.length ? [['all', 'All']].concat(t) : []; };
  function pairOthers(p, data) {
    const a = lc(p.a), seen = new Set([a, lc(p.b)]);
    data.forEach((x) => { if (lc(x.a) === a) seen.add(lc(x.b)); if (lc(x.b) === a) seen.add(lc(x.a)); });
    const out = [];
    for (const x of shuffle(data.filter((y) => y !== p && y.type === p.type))) { if (out.length >= 3) break; const b = lc(x.b); if (seen.has(b)) continue; seen.add(b); out.push(x.b); }
    return out;
  }
  function pairQs(n, type) {
    const data = pairsAll(), ok = pairTypes().map(([k]) => k);
    const src = data.filter((p) => ok.includes(p.type) && (type === 'all' || !type || p.type === type));
    const out = [];
    for (const p of shuffle(src)) {
      if (out.length >= n) break;
      const o = pairOthers(p, data);
      if (o.length < 3) continue;
      const col = p.type === 'col', both = p.a + ' ' + p.b;
      const exp = col ? both + (isStr(p.en) ? ' = ' + p.en : '') + '.' + (isStr(p.note) ? ' ' + p.note : '')
        : p.a + (isStr(p.ea) ? ' (' + p.ea + ')' : '') + (p.type === 'opp' ? ' ↔ ' : ' ≈ ') + p.b + (isStr(p.eb) ? ' (' + p.eb + ')' : '') + '.' + (isStr(p.note) ? ' ' + p.note : '');
      out.push({ q: p.a, sub: PAIR_ASK[p.type] + (isStr(p.ea) ? ' “' + p.ea + '”' : '') + ' · choose its partner.', tlq: true, tlo: true, say: p.a, opts: [p.b].concat(o), a: 0, sayAfter: col ? both : p.b, exp });
    }
    return out;
  }

  /* ---------- In context ----------
     A sentence pool built once, lazily, from Aklanon already in the app: interview phrases (everyday form `c`), DRILL_GAPS
     `full`, the first DRILL_TRANSLATE answer and DRILL_TRANSFORM `to`, each with its English. A token blanked is exactly a
     dictionary headword (one word, 4+ letters, noun, verb, adjective or adverb, not in AKL_CLOSED, not a stigma word) that
     occurs once in the sentence; the choice is seeded by the sentence, so an item is the same every time. Options: the word
     and three other headwords of the same part of speech (same topic first), none with the same English and none that is
     also in the sentence, shares the root, or contains the word (or is contained in it). The mode is listed once the pool has 10 sentences. */
  const CTX_MIN = 10, CTX_POS = { n: 1, v: 1, adj: 1, adv: 1 };
  const hash = (str) => { let h = 2166136261; for (const ch of String(str)) h = Math.imul(h ^ ch.charCodeAt(0), 16777619); return h >>> 0; };
  const rnd = (seed) => (App.drillSeeded ? App.drillSeeded.rnd(seed) : (() => { let h = hash(seed); return () => ((h = Math.imul(h ^ (h >>> 15), 2246822507) >>> 0) / 4294967296); })());
  const seededShuffle = (list, r) => { const a = list.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const coreOf = (t) => t.replace(/^[^\p{L}]+|[^\p{L}]+$/gu, '');
  const cleanAk = (s) => String(s || '').replace(/\([^)]*\)/g, '').replace(/[◌⚑]/g, '').replace(/\s+([,.?!])/g, '$1').replace(/\s+/g, ' ').trim();
  let ctxCache = null, ctxKey = '', headIdx = null;
  const headwords = () => {
    if (headIdx) return headIdx;
    const W = window, closed = new Set();
    const C = W.AKL_CLOSED && typeof W.AKL_CLOSED === 'object' ? W.AKL_CLOSED : {};
    Object.keys(C).forEach((g) => (Array.isArray(C[g]) ? C[g] : []).forEach((w) => closed.add(lc(w))));
    headIdx = new Map();
    App.DICT.forEach((e) => {
      const w = lc(e.tl);
      if (!CTX_POS[e.pos] || e.cat === 'stigma' || /[\s]/.test(w) || w.replace(/[^\p{L}]/gu, '').length < 4 || closed.has(w)) return;
      if (!headIdx.has(w)) headIdx.set(w, e);
    });
    return headIdx;
  };
  function ctxPool() {
    const W = window, S = W.PSYCH_SECTIONS || [], G = W.DRILL_GAPS || [], T = W.DRILL_TRANSLATE || [], F = W.DRILL_TRANSFORM || [];
    const key = [S.length, G.length, T.length, F.length].join(':');
    if (ctxCache && key === ctxKey) return ctxCache;
    const idx = headwords(), out = [], seen = new Set();
    const add = (ak, en) => {
      ak = cleanAk(ak); en = String(en || '').replace(/\s+/g, ' ').trim();
      if (!ak || !en || /____|\//.test(ak) || seen.has(lc(ak))) return;
      const toks = ak.split(' '), cores = toks.map(coreOf), keys = cores.map(lc);
      const n = keys.filter(Boolean).length;
      if (n < 3 || n > 16) return;
      const cand = keys.map((k, i) => ({ k, i })).filter((c) => idx.has(c.k) && keys.filter((x) => x === c.k).length === 1);
      if (!cand.length) return;
      const r = rnd('ctx|' + ak), c = seededShuffle(cand, r)[0], e = idx.get(c.k);
      const inSent = new Set(keys);
      const w = lc(e.tl), root = lc(e.root);
      // Not the same English, not built on the same root, and neither word inside the other (Akeanon / Inakeanon).
      const same = Array.from(idx.values()).filter((x) => { const k = lc(x.tl); return x !== e && x.pos === e.pos && !inSent.has(k) && x.nen !== e.nen && !k.includes(w) && !w.includes(k) && !(root && (lc(x.root) === root || k === root)) && !(x.root && lc(x.root) === w); });
      const opts = [], used = new Set([lc(e.tl)]);
      for (const x of seededShuffle(same.filter((y) => y.cat === e.cat), r).concat(seededShuffle(same, r))) { if (opts.length >= 3) break; const k = lc(x.tl); if (used.has(k)) continue; used.add(k); opts.push(x.tl); }
      if (opts.length < 3) return;
      seen.add(lc(ak));
      const q = toks.map((t, i) => (i === c.i ? t.replace(cores[i], '____') : t)).join(' ');
      out.push({ q, en, full: ak, word: e, opts: [e.tl].concat(opts) });
    };
    try {
      S.forEach((s) => (s && Array.isArray(s.phrases) ? s.phrases : []).forEach((p) => p && add(p.c, p.en)));
      G.forEach((it) => it && typeof it.q === 'string' && add(it.full || (it.a ? it.q.replace('____', it.a) : ''), it.en));
      T.forEach((it) => { const a = it && (Array.isArray(it.akl) ? it.akl[0] : it.akl); if (a) add(a, it.en); });
      F.forEach((it) => it && add(it.to, it.en));
    } catch (err) { /* a broken entry is skipped */ }
    ctxCache = out; ctxKey = key;
    return out;
  }
  const ctxQs = (n) => pick(ctxPool(), Math.min(n, ctxPool().length)).map((it) => ({ q: it.q, sub: it.en, tlq: true, tlo: true, opts: it.opts.slice(), a: 0, cardId: it.word.id, sayAfter: it.full,
    exp: it.word.tl + ' = ' + it.word.en + '. ' + it.full }));
  App.vocabQs = { hear: hearQs, odd: oddQs, pairs: pairQs, context: ctxQs, contextPool: ctxPool };

  /* ---------- Match the pairs ---------- */
  function matchGame(src) {
    const rounds = [];
    const { pool, src: used } = poolFor(src, 5);
    let seen = [];
    for (let r = 0; r < 3; r++) {
      let Rd = distinct(pool.filter((e) => !seen.includes(e)), 5);
      if (Rd.length < 5) Rd = distinct(pool, 5);
      seen = seen.concat(Rd);
      rounds.push(Rd.map((e) => ({ l: e.tl, r: e.en, say: e.tl, id: e.id })));
    }
    return { rounds, src: used, fell: used !== src };
  }
  App.vocabMatchGame = matchGame;
  function runMatch(box, src) {
    let game, ri, pairs, misses;
    const start = () => { game = matchGame(src); ri = 0; pairs = 0; misses = 0; round(); };
    const finish = () => {
      const pct = Math.round((100 * pairs) / Math.max(1, pairs + misses));
      box.innerHTML = scoreCard(pct, pct + '%').replace('</h3>', '</h3><p class="muted" style="margin:0">' + pairs + ' pairs, ' + misses + (misses === 1 ? ' miss' : ' misses') + '.</p>');
      box.querySelector('[data-act=retry]').onclick = start;
      saveBest('match:' + game.src, pairs, pairs + misses);
    };
    const round = () => {
      if (ri >= game.rounds.length) return finish();
      const Rd = game.rounds[ri];
      let sel = null, matched = 0;
      const tile = (k, side) => { const x = Rd[k]; return '<button type="button" class="vtile" data-side="' + side + '" data-pair="' + k + '" aria-pressed="false">' + (side === 'l' ? '<span class="tl">' + esc(x.l) + '</span>' : '<span>' + esc(x.r) + '</span>') + '</button>'; };
      box.innerHTML = (game.fell && ri === 0 ? '<div class="notice info" style="margin-bottom:10px">Not enough words there yet, so this game uses all words.</div>' : '') +
        '<div class="card stack"><div class="spread"><span class="eyebrow">Round ' + (ri + 1) + ' of ' + game.rounds.length + '</span><span class="muted small" data-miss>Misses: ' + misses + '</span></div>' +
        '<p class="muted small" style="margin:0">Tap a word, then its meaning.</p>' +
        '<div class="vmatch"><div class="vcol" role="group" aria-label="' + esc(NAME) + ' words">' + shuffle(Rd.map((x, k) => k)).map((k) => tile(k, 'l')).join('') + '</div>' +
        '<div class="vcol" role="group" aria-label="Meanings">' + shuffle(Rd.map((x, k) => k)).map((k) => tile(k, 'r')).join('') + '</div></div></div>';
      const mark = (b, on) => { b.classList.toggle('sel', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); };
      box.querySelectorAll('.vtile').forEach((b) => (b.onclick = () => {
        if (b.disabled) return;
        if (!sel || sel.dataset.side === b.dataset.side) { if (sel) mark(sel, false); sel = sel === b ? null : b; if (sel) mark(sel, true); return; }
        const a = sel; sel = null; mark(a, false);
        if (a.dataset.pair === b.dataset.pair) {
          [a, b].forEach((x) => { x.classList.remove('miss'); x.classList.add('right'); x.disabled = true; });
          pairs++; matched++; App.recordAnswer(true);
          App.speak(Rd[+a.dataset.pair].say, { quiet: true });
          if (matched === Rd.length) setTimeout(() => { if (box.isConnected) { ri++; round(); } }, 500);
        } else {
          misses++; App.recordAnswer(false, Rd[+(a.dataset.side === 'l' ? a : b).dataset.pair].id);
          box.querySelector('[data-miss]').textContent = 'Misses: ' + misses;
          [a, b].forEach((x) => x.classList.add('miss'));
          setTimeout(() => [a, b].forEach((x) => x.classList.remove('miss')), 600);
        }
      }));
    };
    start();
  }

  /* ---------- Type the word ---------- */
  // 2 = right, 1 = almost (a near miss on a word of 6+ letters), 0 = wrong. Accepted: the word, or any headword with the same English.
  const accepted = (e) => [...new Set([e.tl].concat(App.DICT.filter((x) => x !== e && x.nen === e.nen).map((x) => x.tl)))];
  const letterSim = (a, b) => App.similarity(App.flat(a).split('').join(' '), App.flat(b).split('').join(' '));
  App.vocabTypeCheck = (e, typed) => {
    const t = App.flat(typed);
    if (!t) return 0;
    const ok = accepted(e).map(App.flat).filter(Boolean);
    if (ok.includes(t)) return 2;
    return ok.some((a) => a.length >= 6 && letterSim(t, a) >= 85) ? 1 : 0;
  };
  App.vocabTypeItems = (src) => { const { pool, src: used } = poolFor(src, 4, oneWord); return { items: distinct(pool, N), src: used }; };
  function runType(box, src) {
    let game, i, right;
    const start = () => { game = App.vocabTypeItems(src); i = 0; right = 0; draw(); };
    const draw = () => {
      const items = game.items;
      if (i >= items.length) {
        const pct = Math.round((100 * right) / Math.max(1, items.length));
        box.innerHTML = scoreCard(pct, right + ' / ' + items.length);
        box.querySelector('[data-act=retry]').onclick = start;
        saveBest('type:' + game.src, right, items.length);
        return;
      }
      const e = items[i], pos = App.POS[e.pos], ph = 'Type the ' + NAME + ' word';
      box.innerHTML = (game.src !== src && i === 0 ? '<div class="notice info" style="margin-bottom:10px">Not enough words there yet, so this game uses all words.</div>' : '') +
        '<div class="card stack"><div class="spread"><span class="eyebrow">Word ' + (i + 1) + ' of ' + items.length + '</span></div>' +
        '<div style="font-size:1.12rem;font-weight:600" data-prompt>' + esc(e.en) + '</div>' + (pos ? '<div class="muted small">' + esc(pos) + '</div>' : '') +
        '<div class="row"><input class="input tl" data-in autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" style="flex:1;min-width:0" placeholder="' + esc(ph) + '" aria-label="' + esc(ph) + '">' +
        '<button class="btn primary" data-act="check">Check</button></div><div data-fb></div></div>';
      const inp = box.querySelector('[data-in]'), chk = box.querySelector('[data-act=check]');
      inp.focus();
      const check = () => {
        if (chk.disabled || !inp.value.trim()) return;
        const g = App.vocabTypeCheck(e, inp.value), ok = g > 0;
        if (ok) right++;
        App.recordAnswer(ok, e.id);
        chk.disabled = true; inp.disabled = true;
        const others = accepted(e).filter((x) => App.flat(x) !== App.flat(e.tl)).slice(0, 3);
        box.querySelector('[data-fb]').innerHTML = '<div class="feedback ' + (g === 2 ? 'ok' : g ? 'mid' : 'no') + '"><b>' + (g === 2 ? LANG.quiz.right : g ? 'Almost: check the spelling.' : LANG.quiz.wrong) + '</b>' +
          '<div style="margin-top:6px"><span class="tl" style="font-weight:600">' + esc(e.tl) + '</span> ' + App.sayBtn(e.tl) + '</div><div class="muted small">' + esc(e.en) + '</div>' +
          (e.tagalog ? App.bridgeLine(e.tagalog, 'muted small') : '') +
          (others.length ? '<div class="muted small" style="margin-top:4px">Also accepted: <span class="tl">' + others.map(esc).join(' · ') + '</span></div>' : '') + '</div>' +
          '<div class="row" style="margin-top:10px"><button class="btn primary" data-act="next">' + (i + 1 < items.length ? 'Next' : 'See score') + '</button></div>';
        const nx = box.querySelector('[data-act=next]');
        nx.onclick = () => { i++; draw(); };
        nx.focus();
      };
      chk.onclick = check;
      inp.onkeydown = (ev) => { if (ev.key === 'Enter') { ev.preventDefault(); check(); } };
    };
    start();
  }

  /* ---------- Runners and pages ---------- */
  const quiz = (gen, key) => (box) => { const qs = gen(); if (!qs.length) { box.innerHTML = '<div class="notice info">Not enough words for this game yet.</div>'; return; } App.runQuiz(box, qs, { onDone: (r, n) => saveBest(key, r, n), after: ALL }); };
  const RUN = {
    match: runMatch, type: runType,
    odd: quiz(() => oddQs(N), 'odd:all'),
    hear: (box, src) => { const used = poolFor(src, 4).src; return quiz(() => hearQs(N, used), 'hear:' + used)(box); },
    pairs: (box, t) => quiz(() => pairQs(N, t), 'pairs:' + t)(box),
    context: quiz(() => ctxQs(N), 'context:all')
  };
  const tileHTML = (m) => { const b = bestOf(m.id); return '<a class="tile" href="#/vocab/' + m.id + '" data-mode="' + m.id + '"><span class="eyebrow">' + esc(m.eyebrow) + '</span><h3>' + esc(m.title) + '</h3><p>' + esc(m.blurb) + '</p>' +
    '<div class="meta row"><span class="pill' + (b != null ? ' good' : '') + '">' + (b != null ? 'Best ' + b + '%' : 'Not tried yet') + '</span></div></a>'; };
  const shown = () => MODES.filter((m) => !m.ok || m.ok());
  App.vocabTiles = () => shown().map(tileHTML).join(''); // the Practice page (js/app.js)
  App.VOCAB_MODES = MODES;

  // One row per dictionary topic: words, cards in the deck (an srs entry), known (srs r >= 3).
  const catStats = () => {
    const srs = App.state.srs || {}, by = {};
    App.DICT.forEach((e) => (by[e.cat] = by[e.cat] || []).push(e));
    return Object.keys(App.CATS).filter((c) => by[c]).map((c) => ({ c, label: App.CATS[c], n: by[c].length, deck: by[c].filter((e) => srs[e.id]).length, known: by[c].filter((e) => srs[e.id] && srs[e.id].r >= 3).length }));
  };
  App.vocabCatStats = catStats;
  V.vocab = (el) => {
    const matchable = new Set(sources().map(([k]) => k));
    el.innerHTML = '<h1>Vocabulary practice</h1><p class="muted">Short word games from the dictionary: matching, typing, listening, odd one out' + (shown().length > 4 ? ', and more' : '') + '.</p>' +
      '<div class="notice warn" style="margin:10px 0 12px">' + esc(LANG.draftShort || 'Draft.') + '</div>' +
      '<div class="grid">' + App.vocabTiles() + '</div>' +
      '<h2 style="margin-top:22px">Your words by topic</h2><p class="muted small">Words in the dictionary, how many are in your flashcards, and how many you know well. Tap a topic to open its flashcards.</p>' +
      '<div class="card vcats">' + catStats().map((x) => '<div class="vcat" data-cat="' + x.c + '"><div class="spread"><a href="#/flash/c-' + x.c + '"><b>' + esc(x.label) + '</b></a>' +
        (matchable.has(x.c) ? '<a class="btn sm" href="#/vocab/match?cat=' + x.c + '">Match</a>' : '') + '</div>' +
        '<div class="muted small">' + x.n + ' words · ' + x.deck + ' in your cards · ' + x.known + ' known</div>' +
        '<div class="progress vbar" aria-hidden="true"><i style="width:' + Math.round((100 * x.known) / Math.max(1, x.n)) + '%"></i></div></div>').join('') + '</div>' +
      '<div class="row" style="margin-top:14px"><a class="btn" href="#/flash">Flashcards</a><a class="btn" href="#/dict">Dictionary</a><a class="btn" href="#/drills">Grammar drills</a><a class="btn" href="#/practice">All practice</a></div>';
  };
  V.vocabMode = (el, p, q) => {
    const m = byId(p.mode);
    if (!m) { el.innerHTML = '<h1>Vocabulary practice</h1><p>That game does not exist. <a href="#/vocab">See all vocabulary practice</a>.</p>'; return; }
    const st = App.state.settings, srcs = m.src ? sources() : null, key = 'vocabCat';
    const has = (v) => srcs && srcs.some(([k]) => k === v);
    const cur = has(q && q.cat) ? q.cat : has(st[key]) ? st[key] : 'all';
    if (m.ok && !m.ok()) {
      el.innerHTML = '<div class="breadcrumb"><a href="#/vocab">Vocabulary practice</a> / ' + esc(m.title) + '</div><h1>' + esc(m.title) + '</h1><p class="muted">' + esc(m.intro) + '</p>' +
        '<div class="notice info">Not enough items for this game yet. They arrive with the next data update.</div><div class="row" style="margin-top:14px">' + ALL + '</div>' + DRAFT;
      return;
    }
    const mo = m.opts ? m.opts() : [], mk = m.optKey;
    const mcur = mo.some(([k]) => q && k === q[mk]) ? q[mk] : 'all';
    el.innerHTML = '<div class="breadcrumb"><a href="#/vocab">Vocabulary practice</a> / ' + esc(m.title) + '</div><h1>' + esc(m.title) + '</h1><p class="muted">' + esc(m.intro) + '</p>' +
      (m.audio && App.speechSupportNote ? App.speechSupportNote() : '') +
      '<div class="card stack"><div class="row">' +
      (mo.length ? '<label class="small" style="max-width:100%">' + esc(m.optLabel) + ' <select class="input" id="vopt" style="width:auto;max-width:100%">' + mo.map(([v, t]) => '<option value="' + esc(v) + '"' + (v === mcur ? ' selected' : '') + '>' + esc(t) + '</option>').join('') + '</select></label>' : '') +
      (srcs ? '<label class="small" style="max-width:100%">Words <select class="input" id="vsrc" style="width:auto;max-width:100%">' + srcs.map(([v, t]) => '<option value="' + esc(v) + '"' + (v === cur ? ' selected' : '') + '>' + esc(t) + '</option>').join('') + '</select></label>' : '') +
      '<button class="btn primary" id="vgo">Start</button></div><div id="vbox"></div></div>' + DRAFT;
    const sel = el.querySelector('#vsrc'), box = el.querySelector('#vbox');
    if (sel) sel.onchange = () => { st[key] = sel.value; App.save(); };
    el.querySelector('#vgo').onclick = () => {
      const osel = el.querySelector('#vopt');
      const src = sel ? sel.value : osel ? osel.value : 'all';
      if (sel) { st[key] = src; App.save(); }
      const inner = document.createElement('div'); inner.style.marginTop = '12px'; box.innerHTML = ''; box.appendChild(inner);
      RUN[m.id](inner, src);
    };
  };

  // Daily mix (js/drills.js reads App.dailyExtra).
  App.dailyExtra = (App.dailyExtra || []).concat([['Odd one out', () => oddQs(1)], ['Hear the word', () => hearQs(1, 'all')]]);
})();
