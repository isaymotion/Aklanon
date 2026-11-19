"""Usage: python3 tools/drills_playthrough.py [port]
Plays build, errors and translate with the model answers (expect 10 / 10 each),
downloads two lesson PDFs, prints page errors (expect ERRORS [])."""
import sys
PORT = sys.argv[1] if len(sys.argv) > 1 else "8123"
BASE = "http://localhost:%s/" % PORT
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(); errs=[]
    pg.on('pageerror',lambda e: errs.append(str(e)))
    # build: tap tiles in model order (data-k ascending)
    pg.goto(BASE+'#/drills/build'); pg.wait_for_timeout(600); pg.click('#dgo')
    for n in range(10):
        pg.wait_for_timeout(150)
        ks=sorted(int(x) for x in pg.locator('#dbox [data-w=bank]').evaluate_all('e=>e.map(x=>x.dataset.k)'))
        for k in ks: pg.locator('#dbox [data-w=bank][data-k="%d"]'%k).first.click()
        pg.click('#dbox [data-act=check]'); pg.wait_for_timeout(150)
        fb=pg.locator('#dbox [data-fb]').inner_text()
        nx=pg.locator('#dbox button:has-text("Next"), #dbox button:has-text("See")')
        if nx.count(): nx.first.click()
    print('build:', pg.locator('#dbox').inner_text()[:120].replace('\n',' '))
    # errors: tap the wrong word, using the data
    pg.goto(BASE+'#/drills/errors'); pg.wait_for_timeout(600); pg.click('#dgo')
    for n in range(10):
        pg.wait_for_timeout(150)
        words=pg.locator('#dbox [data-line] .wtile').evaluate_all('e=>e.map(x=>x.textContent)')
        bad=' '.join(words)
        it=pg.evaluate('(b)=>{const e=DRILL_ERRORS.find(x=>x.bad===b);return e?e.i[0]:0}', bad)
        pg.locator('#dbox [data-line] .wtile').nth(it).click(); pg.wait_for_timeout(150)
        nx=pg.locator('#dbox button:has-text("Next"), #dbox button:has-text("See")')
        if nx.count(): nx.first.click()
    print('errors:', pg.locator('#dbox').inner_text()[:120].replace('\n',' '))
    # translate: type first accepted answer
    pg.goto(BASE+'#/drills/translate'); pg.wait_for_timeout(600); pg.click('#dgo')
    for n in range(10):
        pg.wait_for_timeout(200)
        en=pg.locator('#dbox .card').first.inner_text()
        ans=pg.evaluate('(t)=>{const e=DRILL_TRANSLATE.find(x=>t.includes(x.en));return e?e.akl[0]:"owa"}', en)
        pg.locator('#dbox input[data-in]:enabled').fill(ans); pg.keyboard.press('Enter'); pg.wait_for_timeout(200)
        nx=pg.locator('#dbox button:has-text("Next"), #dbox button:has-text("See")')
        if nx.count(): nx.first.click()
    print('translate:', pg.locator('#dbox').inner_text()[:120].replace('\n',' '))
    # lesson handout PDF
    for lid in ['conjunctions','pronouns']:
        pg.goto(BASE+'#/lessons/handout?id='+lid); pg.wait_for_timeout(800)
        with pg.expect_download(timeout=30000) as d:
            pg.locator('button:has-text("PDF")').first.click()
        path=d.value.path(); import os; print('pdf',lid,os.path.getsize(path), d.value.suggested_filename)
    print('ERRORS',errs)
    b.close()
