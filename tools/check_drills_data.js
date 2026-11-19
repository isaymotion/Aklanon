// Usage: node tools/check_drills_data.js <repo>/js/data/drills.js   -> expect "bad 0"
// Every cloze answer is in its set's opts, every gap has one ____ and full = q with the answer,
// build alts use the same tiles, error indices are in range, LESSON_GAPS answers are in opts.
global.window = {}; require(require('path').resolve(process.argv[2])); const W = window; let bad = 0;
W.DRILL_CLOZE.forEach((c) => { const o = W.DRILL_CLOZE_SETS[c.set].opts.map((x) => x.toLowerCase()); if (!o.includes(c.a.toLowerCase()) || (c.q.match(/____/g) || []).length !== 1) { bad++; console.log('cloze', c.q); } });
W.DRILL_GAPS.forEach((g) => { if (!g.opts.includes(g.a) || (g.q.match(/____/g) || []).length !== 1 || g.full !== g.q.replace('____', g.a)) { bad++; console.log('gap', g.q); } });
Object.entries(W.LESSON_GAPS || {}).forEach(([k, v]) => v.forEach((g) => { if (!g.opts.includes(g.a) || (g.q.match(/____/g) || []).length !== 1) { bad++; console.log('lessongap', k, g.q); } }));
W.DRILL_BUILD.forEach((b) => (b.alt || []).forEach((a) => { if (a.slice().sort().join() !== b.t.slice().sort().join()) { bad++; console.log('build', b.en); } }));
W.DRILL_ERRORS.forEach((e) => { if (e.i.some((i) => i >= e.bad.split(' ').length)) { bad++; console.log('error', e.bad); } });
console.log('bad', bad, '| cloze', W.DRILL_CLOZE.length, 'build', W.DRILL_BUILD.length, 'errors', W.DRILL_ERRORS.length, 'translate', W.DRILL_TRANSLATE.length, 'gaps', W.DRILL_GAPS.length);
