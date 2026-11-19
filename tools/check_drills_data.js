// Usage: node tools/check_drills_data.js <repo>/js/data/drills.js   -> expect "bad 0"
// Every cloze answer is in its set's opts, every gap has one ____ and full = q with the answer,
// build alts use the same tiles, error indices are in range, LESSON_GAPS answers are in opts.
// drills-2.js next to drills.js (if present) is loaded after it: DRILL_TRANSFORM, WORD_PAIRS and DRILL_GAP_SETS are checked too.
const path = require('path'), fs = require('fs');
global.window = {}; const D1 = path.resolve(process.argv[2]); require(D1);
const D2 = path.join(path.dirname(D1), 'drills-2.js'); if (fs.existsSync(D2)) require(D2);
const W = window; let bad = 0, warn = 0;
W.DRILL_CLOZE.forEach((c) => { const o = W.DRILL_CLOZE_SETS[c.set].opts.map((x) => x.toLowerCase()); if (!o.includes(c.a.toLowerCase()) || (c.q.match(/____/g) || []).length !== 1) { bad++; console.log('cloze', c.q); } });
W.DRILL_GAPS.forEach((g) => { if (!g.opts.includes(g.a) || (g.q.match(/____/g) || []).length !== 1 || g.full !== g.q.replace('____', g.a)) { bad++; console.log('gap', g.q); } });
Object.entries(W.LESSON_GAPS || {}).forEach(([k, v]) => v.forEach((g) => { if (!g.opts.includes(g.a) || (g.q.match(/____/g) || []).length !== 1) { bad++; console.log('lessongap', k, g.q); } }));
W.DRILL_BUILD.forEach((b) => (b.alt || []).forEach((a) => { if (a.slice().sort().join() !== b.t.slice().sort().join()) { bad++; console.log('build', b.en); } }));
W.DRILL_ERRORS.forEach((e) => { if (e.i.some((i) => i >= e.bad.split(' ').length)) { bad++; console.log('error', e.bad); } });
// DRILL_TRANSFORM
const TT = W.DRILL_TRANSFORM_TYPES || {}, TR = W.DRILL_TRANSFORM || [], WP = W.WORD_PAIRS || [], GS = W.DRILL_GAP_SETS || {};
const str = (x) => typeof x === 'string' && x.trim() !== '';
const tn = (s) => String(s || '').toLowerCase().replace(/[,?!.]/g, ' ').replace(/\s+/g, ' ').trim();
const trIds = new Set();
TR.forEach((x, i) => {
  const why = [];
  if (!str(x.id)) why.push('no id'); else if (trIds.has(x.id)) why.push('duplicate id'); else trIds.add(x.id);
  ['type', 'instr', 'from', 'to', 'en'].forEach((k) => { if (!str(x[k])) why.push('no ' + k); });
  if (!Object.prototype.hasOwnProperty.call(TT, x.type)) why.push('type not in DRILL_TRANSFORM_TYPES');
  if (!Array.isArray(x.wrong) || x.wrong.length !== 3 || !x.wrong.every(str)) why.push('wrong must be 3 sentences');
  if (x.alt != null && (!Array.isArray(x.alt) || !x.alt.every(str))) why.push('alt must be a list of sentences');
  const all = [x.to].concat(x.alt || [], x.wrong || []).map(tn);
  if (new Set(all).size !== all.length) why.push('to/alt/wrong not distinct');
  if (all.includes(tn(x.from))) why.push('an answer equals from');
  if (why.length) { bad++; console.log('transform', x.id || i, why.join('; ')); }
});
// WORD_PAIRS
const wpIds = new Set(), seenPair = new Set(), bByType = {};
WP.forEach((x, i) => {
  const why = [], a = String(x.a || '').trim().toLowerCase(), b = String(x.b || '').trim().toLowerCase();
  if (!str(x.id)) why.push('no id'); else if (wpIds.has(x.id)) why.push('duplicate id'); else wpIds.add(x.id);
  if (!['opp', 'syn', 'col'].includes(x.type)) why.push('bad type');
  ['a', 'ea', 'b', 'eb'].forEach((k) => { if (!str(x[k])) why.push('no ' + k); });
  if (a && a === b) why.push('a = b');
  if (seenPair.has(x.type + '|' + a + '|' + b) || seenPair.has(x.type + '|' + b + '|' + a)) why.push('pair twice');
  seenPair.add(x.type + '|' + a + '|' + b);
  const bs = (bByType[x.type] = bByType[x.type] || new Set()); if (bs.has(b)) why.push('b repeated within type'); bs.add(b);
  if (why.length) { bad++; console.log('pair', x.id || i, why.join('; ')); }
});
// DRILL_GAP_SETS (each set's items are already checked with the gaps above)
const gsCount = {};
Object.keys(GS).forEach((k) => {
  const s = GS[k] || {}, n = W.DRILL_GAPS.filter((g) => g.set === k).length; gsCount[k] = n;
  if (!str(s.title)) { bad++; console.log('gapset', k, 'no title'); }
  if (n < 4) { warn++; console.log('WARN gapset', k, 'has', n, 'items (the drill appears at 4)'); }
});
const trTypes = {}; TR.forEach((x) => (trTypes[x.type] = (trTypes[x.type] || 0) + 1));
const lowT = Object.keys(TT).filter((t) => (trTypes[t] || 0) < 3); if (TR.length && lowT.length) { warn++; console.log('WARN transform types under 3 items (hidden):', lowT.join(', ')); }
const wpT = {}; WP.forEach((x) => (wpT[x.type] = (wpT[x.type] || 0) + 1));
console.log('bad', bad, '| cloze', W.DRILL_CLOZE.length, 'build', W.DRILL_BUILD.length, 'errors', W.DRILL_ERRORS.length, 'translate', W.DRILL_TRANSLATE.length, 'gaps', W.DRILL_GAPS.length,
  '| transform', TR.length, JSON.stringify(trTypes), 'pairs', WP.length, JSON.stringify(wpT), 'gapsets', JSON.stringify(gsCount), '| warnings', warn);
