/* Review flags: a worklist for the future native-speaker reviewer.
   Every phrase in a psychiatry section and every point-board reply carries a small ⚑ button. Tapping it flags the
   line (with an optional one-line comment); tapping again removes the flag.
   Storage: App.state.flags (inside 'magistorya.v1', so the footer backup exports and restores it):
     { '<key>': { kind: 'phrase' | 'reply', sec, secTitle, tl, en, comment, at } }
   key = 'p:<section id>:<phrase index>' for phrases (the flashcard id), 'a:<reply text>' for replies.
   The page #/review lists the flags grouped by section, with Copy all (plain text) and Clear. */
(function () {
  const { esc } = App;
  const V = App.views;
  const S = () => App.state;
  const flags = () => (S().flags = S().flags || {});
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';

  App.isFlagged = (key) => Object.prototype.hasOwnProperty.call(flags(), key);

  /* The button. meta = { kind, sec, secTitle, tl, en }; it is stored with the flag so the list still reads well
     if the line's wording changes later. */
  App.flagBtn = (key, meta, inline) => {
    const on = App.isFlagged(key);
    const label = on ? 'Flagged for review (tap to remove)' : 'Flag for native-speaker review';
    return '<button type="button" class="say flagbtn' + (on ? ' on' : '') + (inline ? ' flagbtn--inline' : '') + '" data-flag="' + esc(key) + '" data-flagmeta="' + esc(JSON.stringify(meta || {})) + '" aria-pressed="' + on + '" title="' + label + '" aria-label="' + label + (meta && meta.tl ? ': ' + esc(meta.tl) : '') + '"><span aria-hidden="true">⚑</span></button>';
  };
  function paint(btn, on) {
    const label = on ? 'Flagged for review (tap to remove)' : 'Flag for native-speaker review';
    btn.classList.toggle('on', on); btn.setAttribute('aria-pressed', String(on)); btn.title = label;
    let meta = {}; try { meta = JSON.parse(btn.dataset.flagmeta || '{}'); } catch (e) {}
    btn.setAttribute('aria-label', label + (meta.tl ? ': ' + meta.tl : ''));
  }
  App.toggleFlag = (key, meta, btn) => {
    const f = flags();
    if (App.isFlagged(key)) {
      delete f[key]; App.save(); App.toast('Flag removed.');
    } else {
      const c = window.prompt('Flag for review. Optional comment for the reviewer (one line):', '');
      if (c === null) return;   // cancelled: nothing flagged
      f[key] = Object.assign({ kind: '', sec: '', secTitle: '', tl: '', en: '' }, meta, { comment: String(c).replace(/\s+/g, ' ').trim().slice(0, 300), at: new Date().toISOString() });
      App.save(); App.toast('Flagged. See App → For review.');
    }
    document.querySelectorAll('[data-flag]').forEach((b) => { if (b.dataset.flag === key) paint(b, App.isFlagged(key)); });
    if (/^#\/review/.test(location.hash) && V.reviewList) V.reviewList(document.getElementById('view'));   // the list itself changed
  };
  // One delegated handler for every flag button (capture phase, so tile and row handlers never see the tap).
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-flag]');
    if (!b) return;
    e.preventDefault(); e.stopPropagation();
    let meta = {}; try { meta = JSON.parse(b.dataset.flagmeta || '{}'); } catch (err) {}
    App.toggleFlag(b.dataset.flag, meta, b);
  }, true);

  /* Plain-text worklist: section, Aklanon line, English, comment. */
  function asText(list) {
    const L = window.LANG || { name: 'Target' };
    const head = (window.APP_META ? APP_META.name + ' ' + APP_META.version : '') + ' · lines flagged for review · ' + new Date().toISOString().slice(0, 10);
    return head + '\n\n' + list.map(([title, items]) => '## ' + title + '\n' + items.map(([k, f], i) =>
      (i + 1) + '. ' + L.name + ': ' + f.tl + '\n   English: ' + f.en + (f.comment ? '\n   Comment: ' + f.comment : '')).join('\n')).join('\n\n') + '\n';
  }
  function grouped() {
    const g = {};
    Object.entries(flags()).forEach(([k, f]) => { const t = f.secTitle || f.sec || 'Other'; (g[t] = g[t] || []).push([k, f]); });
    Object.values(g).forEach((items) => items.sort((a, b) => String(a[1].at).localeCompare(String(b[1].at))));
    return Object.entries(g).sort((a, b) => a[0].localeCompare(b[0]));
  }

  V.reviewList = (el) => {
    const list = grouped(), n = Object.keys(flags()).length;
    el.innerHTML = crumb([['App', '#/more'], ['For review']]) + '<h1>For review</h1>' +
      '<p class="muted">Lines you flagged with ⚑ for the native ' + esc(LANG.name) + ' speaker who will review the app. ' + esc(LANG.draftNotice) + '</p>' +
      (n ? '<div class="row" style="margin-bottom:12px"><button class="btn primary" id="rvCopy">Copy all (' + n + ')</button><button class="btn" id="rvClear">Clear</button></div>' +
        list.map(([title, items]) => '<h2 style="margin-top:16px">' + esc(title) + ' <span class="muted small">' + items.length + '</span></h2><div class="card">' +
          items.map(([k, f]) => '<div class="phrase review-item"><div class="main tl">' + esc(f.tl) + '</div><div class="acts">' + App.sayBtn(f.tl.split(' / ')[0]) + App.flagBtn(k, f) + '</div>' +
            '<div class="en" style="grid-column:1/-1;font-weight:500">' + esc(f.en) + '</div>' +
            (f.comment ? '<div class="note">' + esc(f.comment) + '</div>' : '') +
            (f.kind === 'phrase' && f.sec ? '<div class="small" style="grid-column:1/-1"><a href="#/psych/s/' + esc(f.sec) + '">Open the section</a></div>' : '') + '</div>').join('') + '</div>').join('')
        : '<div class="card stack"><p style="margin:0">Nothing flagged yet.</p><p class="muted small" style="margin:0">Open a <a href="#/psych">psychiatry section</a> or the <a href="#/psych/point">point board</a> and tap ⚑ beside any line that needs a native speaker’s check. Flags are saved on this device and included in backups.</p></div>') +
      '<textarea class="sr-only" id="rvText" aria-hidden="true" tabindex="-1" readonly></textarea>';
    const copy = el.querySelector('#rvCopy');
    if (copy) copy.onclick = () => {
      const text = asText(grouped());
      const fallback = () => { const ta = el.querySelector('#rvText'); ta.value = text; ta.select(); let ok = false; try { ok = document.execCommand('copy'); } catch (e) {} App.toast(ok ? 'Copied ' + n + ' lines.' : 'Copy failed: select and copy by hand.'); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(() => App.toast('Copied ' + n + ' lines.'), fallback); else fallback();
    };
    const clr = el.querySelector('#rvClear');
    if (clr) clr.onclick = () => { if (!window.confirm('Remove all ' + n + ' review flags and comments from this device?')) return; S().flags = {}; App.save(); V.reviewList(el); App.toast('Review flags cleared.'); };
  };
})();
