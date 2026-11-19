#!/usr/bin/env python3
"""Usage: python3 tools/check_pdf_glyphs.py /home/claude/aklanon
Lists every non-ASCII character in the app's text data that neither Roboto (pdfmake's font) nor the Marks
font (js/vendor/vfs_marks.js) can draw: those print as boxes in the PDF handouts. Expect "missing 0".
Fix: add the code point to the pyftsubset list (see vfs_marks.js header) and to MARKS in js/handout.js."""
import re, io, sys, glob, base64
from fontTools.ttLib import TTFont
root = sys.argv[1] if len(sys.argv) > 1 else '.'
def font(path, name):
    m = re.search(re.escape(name) + r"['\"]?\]?\s*[:=]\s*['\"]([^'\"]+)", open(path).read())
    return TTFont(io.BytesIO(base64.b64decode(m.group(1)))).getBestCmap()
rob = font(root + '/js/vendor/vfs_fonts.js', 'Roboto-Regular.ttf')
mk = font(root + '/js/vendor/vfs_marks.js', 'Marks.ttf')
text = ''.join(open(p).read() for p in glob.glob(root + '/js/data/*.js') + [root + '/js/lang.js', root + '/data/strings.js', root + '/data/app-meta.js'])
miss = sorted({ch for ch in text if ord(ch) > 127 and ord(ch) not in rob and ord(ch) not in mk})
for ch in miss: print(repr(ch), 'U+%04X' % ord(ch), text.count(ch))
print('missing', len(miss))
