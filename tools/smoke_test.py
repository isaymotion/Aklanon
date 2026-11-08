"""Headless smoke test for Mag-istorya Kita. Run from the repo root on main:
   python3 -m http.server 8123 &  then  python3 tools/smoke_test.py
Needs: pip install --break-system-packages playwright && playwright install chromium
Passes when every route prints a body length > 900 and ERRORS lists only fonts.googleapis (blocked in sandboxes)."""
from playwright.sync_api import sync_playwright
routes=['#/','#/lessons','#/lessons/markers','#/dict','#/dict/d3','#/flash','#/psych','#/psych/s/opening','#/psych/s/suicide','#/psych/s/mania','#/psych/point?s=mania',
        '#/psych/point?s=depression','#/psych/listen','#/practice','#/progress','#/settings','#/about','#/review','#/new']
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_context(viewport={'width':390,'height':844}).new_page()
    errs=[]; pg.on('console',lambda m: errs.append((pg.url,m.text)) if m.type=='error' else None)
    pg.on('requestfailed',lambda r: errs.append((pg.url,'FAILED '+r.url)))
    for r in routes:
        pg.goto('http://localhost:8123/'+r); pg.wait_for_timeout(500); print(r,'|',len(pg.inner_text('body')))
    print('LESSONS',pg.evaluate('LESSONS.length'),'SECTIONS',pg.evaluate('PSYCH_SECTIONS.length'),'phrases',pg.evaluate('PSYCH_SECTIONS.reduce((a,s)=>a+s.phrases.length,0)'))
    print('ERRORS',[e for e in errs if 'fonts.g' not in e[1] and 'ERR_TUNNEL' not in e[1]])
    b.close()
