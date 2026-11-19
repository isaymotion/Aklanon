"""Usage: python3 tools/lesson_gaps_report.py [port] > report.txt
Lists the Practise-a-lesson items per lesson (auto + LESSON_GAPS) and how many lessons have >= 4.
Serve the main checkout first: cd <repo> && python3 -m http.server <port> &"""
import sys
PORT = sys.argv[1] if len(sys.argv) > 1 else "8123"
BASE = "http://localhost:%s/" % PORT
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(); pg.goto(BASE+'#/'); pg.wait_for_timeout(1500)
    r=pg.evaluate("""()=>LESSONS.map(l=>{const it=App.lessonGapItems(l.id)||[];return [l.id,it.length,it.slice(0,40).map(x=>x.q+' | '+x.a+' | '+(x.opts||[]).join('/')+' | '+x.en)]})""")
    tot=0
    for id,n,its in r:
        tot+= n>=4
        print('##',id,n)
        for x in its: print('   ',x)
    print('lessons>=4:',tot)
    b.close()
