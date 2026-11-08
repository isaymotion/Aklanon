#!/usr/bin/env node
/* FUTURE recorded pack. Collects every Aklanon string the app can speak and writes tools/texts.json:
   [{ key, text }]. key = audio file name (see js/audio-key.js; the same function is used here).
   There is no Aklanon TTS voice; the plan is for a native Akeanon speaker to record these lines.
   Run: node tools/collect-texts.js  (tools/texts.json is not committed until a recording session is planned) */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.join(__dirname, '..');
const ctx = { window: {}, console, TextEncoder, Buffer };
ctx.window = ctx;
vm.createContext(ctx);
const load = (f) => { const p = path.join(root, f); if (fs.existsSync(p)) vm.runInContext(fs.readFileSync(p, 'utf8'), ctx, { filename: f }); };
// Every content file under js/data/, plus the language pack and the key function.
fs.readdirSync(path.join(root, 'js/data')).filter((f) => f.endsWith('.js')).sort().forEach((f) => load('js/data/' + f));
['js/lang.js', 'js/audio-key.js'].forEach(load);

const out = new Map();
const add = (t) => {
  if (!t || typeof t !== 'string') return;
  t = t.trim();
  if (!t || !/[a-zA-ZñÑ]/.test(t)) return;
  const key = ctx.AudioKey(t);
  if (!out.has(key)) out.set(key, t);
};

(ctx.DICT_RAW || []).join('\n').split('\n').forEach((line) => { line = line.trim(); if (line && !line.startsWith('#')) add(line.split('|')[0]); });
(ctx.PSYCH_SECTIONS || []).forEach((s) => s.phrases.forEach((p) => { add(p.f); add(p.c); (p.answers || []).forEach((a) => add(a[0])); }));
if (ctx.PSYCH_ANSWERS) { (ctx.PSYCH_ANSWERS.common || []).forEach((g) => g.items.forEach((it) => add(it[3] || it[0]))); Object.values(ctx.PSYCH_ANSWERS.sections || {}).forEach((l) => l.forEach((it) => add(it[0]))); }
(ctx.LESSONS || []).forEach((l) => { const re = /<div class="ex"><b>([^<]+)<\/b>/g; let m; while ((m = re.exec(l.body))) add(m[1].replace(/&#39;/g, "'").replace(/&amp;/g, '&')); });
if (ctx.LANG) { add(ctx.LANG.testLine); (ctx.LANG.numbers || []).forEach(add); }
// Lines other apps may play from this pack, one per line (# for comments), in tools/extra-texts/*.txt.
const extra = path.join(__dirname, 'extra-texts');
if (fs.existsSync(extra)) fs.readdirSync(extra).filter((f) => f.endsWith('.txt')).forEach((f) => fs.readFileSync(path.join(extra, f), 'utf8').split('\n').forEach((l) => { if (!l.startsWith('#')) add(l); }));

const list = [...out.entries()].map(([key, text]) => ({ key, text })).sort((a, b) => a.key.localeCompare(b.key));
fs.writeFileSync(path.join(__dirname, 'texts.json'), JSON.stringify(list, null, 0));
console.log('Collected', list.length, 'texts');
