#!/usr/bin/env python3
import re, sys, unicodedata
from collections import Counter, deque
SRC='/home/claude/aklanon-devtools/sources/ocr/ED145704-dictionary-ocr.txt'
OUT='/home/claude/zorc/extract/'
VALID={'n','adj','adv','v','pron','part','prep','conj','num','int','interj','expr','idm','CV','DV','OV','IV','AV','PV','dec','Qp','pfx','sfx','det','A/dec','N/det','N. det','art','mrk','vb'}
for k in range(1,9): VALID|={'v%d'%k,'RV%d'%k}
for k in range(1,6): VALID.add('ST%d'%k)
VALID|={'RV','ST','V'}
AMBIG={'a','0','o','M','m','nm','@','1','2','p','D','fM','q','N','Nn','h)','','()','in','ni','mn','ri','rn','i','e'}
TAGS={'oak':'Oak','o&k':'Oak','ibj':'Ibj','nab':'Nab','bkd':'Bkd','sp':'Sp','eng':'Eng','ch':'Ch','hil':'Hil','tag':'Tag','ceb':'Ceb','sp.cor':'Sp','bat':'Bat','mal':'Mal','jap':'Jap','lat':'Lat','kap':'Kap'}
LABELS={'sup','slg','cor','vul','gen','stf','fp'}
FUNC={'ko','mo','ni','sa','ra','ron','it','ka','nga','kay','ku','ay'}
LANGS={'sp':'Sp','eng':'Eng','ch':'Ch','hil':'Hil','tag':'Tag','ceb':'Ceb','bkd':'Bkd','sp.cor':'Sp','fp':'Sp','s15':''}
GRP=re.compile(r'[\(\{\[\|]\s*([^\(\)\{\}\[\]\|]{0,7}?)\s*[\)\}\]\|]')
MA=re.compile(r'^\W{0,2}[Jj\[\{I|\(]?ma[\{\}\]\)fl\|1]?\W{0,2}$')
SKIPG=re.compile(r'^\W*\[?\s*(tree|plant|bird|fish|shrimp|crab|vine|shrub|herb|palm|grass|snake|bamboo|insect|shellfish|seaweed|mollusk|fern|orchid|weed|tool|implement|fruit|flower|reptile|lizard|beetle|ant|moth|butterfly|mushroom|banana|rice\s*variet|sea\s*shell|shell|turtle|frog|bat|fresh\s*water|vegetable|root\s*crop|sea\s*food)',re.I)
LATIN=re.compile(r'\b[A-Z][a-z]+ [a-z]{4,}\b.*\b(Linn|Blume|Merr|Lour|Vid|Blanco|Willd|DC|Roxb)')
OBS=re.compile(r'\[\s*vul\s*\]|\bvul\b',re.I)
def strip_acc(s):
    return ''.join(c for c in unicodedata.normalize('NFD',s) if unicodedata.category(c)!='Mn')
def repair(tok,pageletter):
    q=False; s=tok
    s=strip_acc(s)
    s=re.sub(r"^[^A-Za-z0-9@&]+",'',s)
    s=re.sub(r"[^A-Za-z0-9'\-@&\)\(\{\}~]+$",'',s)
    s=re.sub(r'\(h\)$','',s)
    s=re.sub(r'\(h\)','',s)
    s=s.replace('~','-')
    if not s: return None
    if s[0] in '@&':
        if pageletter and pageletter in 'aeiou': s=pageletter+s[1:]
        else: s='a'+s[1:]
        q=True
    out=[]
    for i,c in enumerate(s):
        if c=='4': out.append('a')
        elif c=='6': out.append('o')
        elif c in 'fF' : out.append('i')
        elif c=='0': out.append('o'); q=True
        elif c=='1': out.append('i'); q=True
        elif c=='3': out.append('e'); q=True
        elif c=='&': out.append('a'); q=True
        elif c=='@': out.append('a'); q=True
        elif c in '{}()': q=True
        elif c.isdigit(): q=True
        else: out.append(c)
    w=''.join(out)
    w=w.lower()
    if re.match(r'^[bkdglmnprswyh]ti',w) and not re.match(r'^[bkdglmnprswyh]ti[aeiou]',w) or re.match(r'^[bkdgp]ti',w):
        w=w[0]+'u'+w[3:]; q=True
    if 'ii' in w: w=w.replace('ii','u'); q=True
    if w.startswith('-'): w=w.lstrip('-')
    if not re.match(r"^[a-z][a-z'\-]*$",w): return None
    if len(w)<2: return None
    if not re.search(r'[aeiou]',w): return None
    if re.search(r'(.)\1\1',w): q=True
    if re.search(r"[bkdgmprstwlyh][bkdgmprstwlyh]",w.replace('ng','N')) and not re.search(r'ng|[mn][bpdtkgs]|rk|rt|rd',w): q=True
    if re.search(r'[bkgmpstwlyhr]d|dd|d[rlkbgmpstw]|dr$',w): q=True
    return w+('?' if q else '')
def canon_pos(g):
    g=g.strip().rstrip('.').strip()
    g2=g.replace('l','1') if False else g
    if g in VALID: return g, False
    if g.lower() in {x.lower() for x in VALID}:
        for x in VALID:
            if x.lower()==g.lower(): return x, False
    if g in ('RVl','RWS','RVi','RVI'): return 'RV1',True
    if g in ('Vl','Vi','VI','V1'): return 'v1',True
    m=re.match(r'^(RV|V|v|ST|STS)(\d)$',g)
    if m: return ('ST5' if m.group(1)=='STS' else (m.group(1).replace('V','v') if m.group(1) in('V',) else m.group(1))+m.group(2)), True
    if g in ('verb',): return 'v',False
    if g in AMBIG: return 'n',True
    return None,False
def clean_gloss(g):
    g=re.sub(r'[\[\{\(]\s*(Syn|Cf|Alt|Opp|Ak[lIif1]|Sp|G|D|Dim|Ant)\s*[:;.,][^\]\}\)]*[\]\}\)]?','',g)
    g=re.sub(r'\[\s*(Syn|Cf|Alt|Opp|Akl|G|D|Dim|Ant)[^\]\}]*[\]\}]?','',g)
    g=re.sub(r'\{\s*(Syn|Cf|Alt|Opp|Akl)[^\}\]]*[\}\]]?','',g)
    g=re.sub(r'\(\s*(Syn|Cf|Alt|Opp|Akl)[^\)\]]*[\)\]]?','',g)
    g=re.sub(r'\[\s*[GD]\.?\s*[\d\-, ]+\]','',g)
    g=re.sub(r'\s*/\s.*$','',g)  # example sentence
    toks=g.split()
    keep=set('a i to of or an as at be by do go he if in is it me my no on so up us we'.split())
    while toks and (not re.search(r'[A-Za-z]',toks[-1]) or (len(re.sub(r'\W','',toks[-1]))<=2 and toks[-1].strip(',;.').lower() not in keep)):
        toks.pop()
    while toks and len(re.sub(r'\W','',toks[0]))<=1 and toks[0] not in('a','A','I') : toks.pop(0)
    g=' '.join(toks)
    g=re.sub(r'\s+',' ',g).strip(' ,;._-~\'"‘’`:')
    g=re.sub(r"[“”‘’]",'"',g).strip('" ')
    if len(re.findall(r'[A-Za-z]',g))<3: return ''
    return g
def parse_line(line,pageletter):
    line=line.rstrip()
    if len(line)<8 or '/' in line[:12]: return None
    for m in GRP.finditer(line):
        if m.start()>60: break
        g=m.group(1)
        pos,unsure=canon_pos(g)
        if pos is None: continue
        pre=line[:m.start()]
        post=line[m.end():]
        if '/' in pre: return None
        # lang tag
        lang=''
        for lm in GRP.finditer(pre):
            k=lm.group(1).strip().lower().strip('.')
            if k in LANGS and k!='' : lang=LANGS[k]; pre=pre.replace(lm.group(0),' ')
        if not lang:
            pm=GRP.match(post.lstrip())
            if pm and pm.group(1).strip().lower() in LANGS:
                lang=LANGS[pm.group(1).strip().lower()]; post=post.lstrip()[pm.end():]
        pre=re.sub(r'\(h\)',' ',pre) if re.search(r'\(h\)\s*$',pre) else pre
        toks=[]
        for t in pre.split():
            k=re.sub(r'[^A-Za-z&.]','',t).lower()
            if k in TAGS and len(t)<=7 and re.search(r'^\W{0,2}\w',t) and (t[0] in '[{(\'‘' or t[-1] in ']})'):
                lang=TAGS[k]; continue
            if k in LABELS and (t[0] in '[{(' or t[-1] in ']})'): continue
            if re.search(r'[A-Za-z0-9@&]',t): toks.append(t)
        toks=[t for t in toks if not MA.match(t)]
        if not toks or len(toks)>6: continue
        hw=repair(toks[-1],pageletter)
        if not hw and len(toks)>=2 and not re.search(r'[A-Za-z]{3}',toks[-1]):
            toks=toks[:-1]; hw=repair(toks[-1],pageletter)
        if not hw: continue
        if len(toks)>=2 and re.sub(r'\W','',toks[-1]).lower() in FUNC:
            h2=repair(toks[-2],pageletter)
            if h2: hw=h2+' '+hw
        if pos=='n' and unsure and g not in AMBIG: continue
        return dict(hw=hw,pos=pos,posq=unsure,lang=lang,gloss_raw=post.strip(),raw=line)
    return None
def main():
    t=open(SRC,encoding='utf-8',errors='replace').read()
    pages=t.split('\f')
    entries=[];hiltag=[]
    recent=deque(maxlen=25)
    for pg in pages:
        m=re.match(r'=== PDF PAGE (\d+) ===',pg)
        if not m: continue
        n=int(m.group(1))
        if n<40 or n>230: continue
        for line in pg.split('\n')[1:]:
            pl=Counter(recent).most_common(1)[0][0] if recent else ''
            e=parse_line(line,pl)
            if not e: continue
            hw=e['hw']
            if hw[0] in 'abdeghiklmnoprstuwy' and not hw.endswith('?') : recent.append(hw[0])
            g0=e['gloss_raw']
            if OBS.search(line) : continue
            if SKIPG.match(g0.strip(' _-.,\'‘')) or LATIN.search(g0): continue
            if re.match(r'^\W*(barrio|town|municipality|village|island)\b',g0,re.I): continue
            gl=clean_gloss(g0)
            if not gl: continue
            posf=e['pos']+('?' if e['posq'] else '')
            e.update(page=n,gloss=gl,posf=posf)
            if e['lang'] in('Hil','Tag'):
                am=re.search(r'[\[\{\(]\s*Ak[lIif1][\s]*[:;.,]\s*([^\]\}\)]+)',g0)
                e['akl']=am.group(1).strip(' ._') if am else ''
                hiltag.append(e)
            else: entries.append(e)
    with open(OUT+'dict-A-K.tsv','w') as f:
        f.write('headword\tpos\tgloss\tlang\tpdf_page\traw\n')
        for e in entries: f.write('\t'.join([e['hw'],e['posf'],e['gloss'],e['lang'],str(e['page']),e['raw'].replace('\t',' ')])+'\n')
    with open(OUT+'hil-tag-A-K.tsv','w') as f:
        f.write('headword\tpos\tgloss\tlang\takl_equivalent\tpdf_page\traw\n')
        for e in hiltag: f.write('\t'.join([e['hw'],e['posf'],e['gloss'],e['lang'],e['akl'],str(e['page']),e['raw'].replace('\t',' ')])+'\n')
    print(len(entries),len(hiltag))
main()
