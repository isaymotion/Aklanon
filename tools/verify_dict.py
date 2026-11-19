#!/usr/bin/env python3
"""Usage: python3 tools/verify_dict.py words.tsv report.tsv  (words.tsv: headword<TAB>gloss per line;
make it from dict-core.js with the node one-liner in HANDOFF.md §5). Match app dictionary headwords against the OCR'd Salas Reyes/Zorc dictionary (txt704)
and Zorc grammar (txt705). Accented vowels in the OCR come out as digits/&/f, so each vowel in
the headword matches itself or one of those noise characters.
Output TSV: headword, app gloss, status, page, OCR line.
  HEAD  = headword followed by a part-of-speech tag "(n)", "(adj)", "(RV3)", "[Sp]" -> a dictionary entry
  TEXT  = headword appears inside an example or definition line
  MISS  = nothing
  G<page> lines = occurrences in the grammar."""
import re, sys, glob, os

VOW = {'a': "(?:a|[0-9&é@]|f)", 'e': "(?:e|[0-9&é@]|f)", 'i': "(?:i|[0-9&é@]|f|l|1)",
       'o': "(?:o|[0-9&é@]|f|0)", 'u': "(?:u|i|ti|[0-9&é@]|f)"}

def pat(word):
    out = ''
    for ch in word.lower():
        if ch in VOW: out += VOW[ch]
        elif ch == ' ': out += r'\s+'
        elif ch == '-': out += r"[-~\s]?"
        else: out += re.escape(ch)
    return out

def load(d):
    """d = a directory of per-page tesseract files p-NNN.txt (fresh OCR), or a combined
    sources/ocr/*.txt file where pages are separated by form feeds (tesseract emits one per page)."""
    pages = []
    if os.path.isdir(d):
        for f in sorted(glob.glob(d + '/p-*.txt')):
            n = int(re.search(r'p-(\d+)', f).group(1))
            with open(f, errors='ignore') as fh:
                for line in fh:
                    if line.strip(): pages.append((n, line.rstrip('\n').lower()))
    else:
        for n, page in enumerate(open(d, errors='ignore').read().split('\f'), 1):
            for line in page.split('\n'):
                if line.strip(): pages.append((n, line.lower()))
    return pages

def main():
    here = os.path.dirname(os.path.abspath(__file__)) + '/../sources/ocr/'
    dic = load(sys.argv[3] if len(sys.argv) > 3 else here + 'ED145704-dictionary-ocr.txt')
    gram = load(sys.argv[4] if len(sys.argv) > 4 else here + 'ED145705-grammar-ocr.txt')
    words = [l.rstrip('\n').split('\t') for l in open(sys.argv[1]) if l.strip()]
    out = open(sys.argv[2], 'w'); stats = {'HEAD': 0, 'TEXT': 0, 'MISS': 0}
    for row in words:
        hw, gloss = row[0], row[1] if len(row) > 1 else ''
        p = pat(hw.strip())
        head = re.compile(r'(?<![a-z])' + p + r"[’'(h)]*\s*(?:\[[a-z]+\]\s*)?\((?:n|v|adj|adv|pron|part|prep|conj|num|int|qp|dem|rv\d*|cv\d*|ov\d*|iv\d*|av\d*|dv\d*|pv\d*)[^)]*\)")
        inside = re.compile(r'(?<![a-z])' + p + r'(?![a-z])')
        hh = [(n, l) for n, l in dic if head.search(l)]
        st = 'HEAD'
        if not hh:
            hh = [(n, l) for n, l in dic if inside.search(l)][:3]
            st = 'TEXT' if hh else 'MISS'
        gh = [(n, l) for n, l in gram if inside.search(l)][:2]
        stats[st] += 1
        for n, l in (hh[:3] or [('', '')]):
            out.write(f"{hw}\t{gloss}\t{st}\tD{n}\t{l.strip()}\n")
        for n, l in gh:
            out.write(f"{hw}\t{gloss}\tGRAM\tG{n}\t{l.strip()}\n")
    out.close(); print(stats)

if __name__ == '__main__':
    main()
