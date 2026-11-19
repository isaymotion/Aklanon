#!/usr/bin/env python3
"""Append lessons 36–39 (phonology II, dimensions and loans, sentence patterns, counting) to js/data/lessons.js."""
P = '/home/claude/aklanon/js/data/lessons.js'
s = open(P).read().rstrip()
assert s.endswith('];')
L = r"""
,{
  id: 'pronunciation', level: 'A1', unit: 'Sounds', title: 'Pronunciation II: the e sound in contrast, the glottal stop, o or u, and stress',
  summary: 'What to listen for when there is no Aklanon TTS: the minimal pairs that separate e from y, l and g; bug-at from bughat; and the spelling rules for o and u.',
  body: `
<p>Lesson 1 introduced the velar fricative written <b>e</b>. Zorc\'s phonology chapter (pp. 8–33) gives the contrasts a learner must hear, and the spelling rules this app follows. The Filipino device voice will get all of this wrong; read the pairs aloud yourself.</p>
<h3>Hearing e against its neighbours (pp. 14–15, 20)</h3>
<table><tr><th>e-word</th><th>Not the same as</th><th>Learners\' error</th></tr>
<tr><td><b>eabi</b> special, single out</td><td>yabi key</td><td>saying y for e</td></tr>
<tr><td><b>aeam</b> wise</td><td>ayam dog</td><td>y for e</td></tr>
<tr><td><b>tueo</b> drip</td><td>tuyo soy sauce</td><td>y for e</td></tr>
<tr><td><b>eana</b> coconut oil</td><td>lana wool; gana appetite</td><td>l or g for e</td></tr>
<tr><td><b>haeo</b> lizard</td><td>halo mixed</td><td>l for e</td></tr>
<tr><td><b>uean</b> rain</td><td>—</td><td>g for e</td></tr>
<tr><td><b>bungoe</b> deaf</td><td>bungog stupid</td><td>g for e</td></tr>
<tr><td><b>busoe</b> large seed</td><td>busog full (after eating)</td><td>g for e</td></tr>
<tr><td><b>isoe</b> move backward</td><td>isog courage</td><td>g for e</td></tr></table>
<p>Zorc calls it a "gargled g" (p. 14). It stands where Hiligaynon and Tagalog have <b>l</b>: <i>saeamat</i>, <i>eang</i>, <i>baeay</i>, <i>bueong</i>, <i>eagnat</i> fever. It is still productive: Spanish <i>lagare</i> became <i>eagari</i>, <i>corral</i> <i>kurae</i>, <i>casar</i> <i>kasae</i> (p. 15). But Aklanon also has a real <b>l</b>, mostly next to <b>i</b>: <i>likod</i>, <i>alima</i>, <i>ilo</i> orphan, <i>uli</i> go home, <i>ulihi</i> late, <i>puril</i> lie, <i>libak</i> gossip (p. 20). "Aklanon has no l" is folk linguistics.</p>
<h3>The glottal stop is a consonant (pp. 11–12)</h3>
<table><tr><th>With glottal stop</th><th>Without</th></tr>
<tr><td><b>bug-at</b> heavy</td><td>bughat relapse</td></tr>
<tr><td><b>ka-on</b> eat</td><td>kahon box</td></tr>
<tr><td><b>ta-o</b> give</td><td>taho ginger tea</td></tr>
<tr><td><b>bag-o</b> new</td><td>bago before</td></tr>
<tr><td><b>man-o</b> how much?</td><td>mano right (not left)</td></tr>
<tr><td><b>baga\'</b> lungs</td><td>baga embers</td></tr>
<tr><td><b>bata\'</b> young</td><td>bata bathrobe</td></tr>
<tr><td><b>sako\'</b> busy</td><td>sako sack</td></tr>
<tr><td><b>uman</b> repeat (initial stop)</td><td>human finished</td></tr>
<tr><td><b>huna\'</b> thought (h)</td><td>una\' present, existing</td></tr></table>
<p>Spelling (p. 32): a hyphen between a vowel and a consonant (<i>sin-o, tam-is, ba-o</i>); unwritten between two vowels (<i>tao, huo, siin</i>, each said with a catch) and at the end of a word, where the dictionary writes <b>\'</b> and this app usually drops it. Three kinds of word-final vowel show themselves before a suffix: <i>bata\' → kabata-an</i>; <i>simba(h) → simbahan</i>, <i>tinda(h) → tindahan</i>, <i>basa(h) → basahon</i>; <i>tubo → katubwan</i> (p. 12).</p>
<h3>o or u? (pp. 28, 33)</h3>
<p>Native Aklanon has three vowels, i a u; e and o came with Spanish and are now real sounds (<i>pare\'</i> compadre vs <i>pari\'</i> priest, p. 25). The rule of thumb, which is also the spelling rule: in a two-syllable root write <b>u</b> in the first syllable and <b>o</b> in the second: <i>unga, sueod, uean, bueong, humay, huo</i>. Closed, unstressed syllables tend to u; stressed ones to o. One-syllable words take o (<i>ro, do, ko, mo, eon, ron</i>) except the marker <b>ku</b>, spelled with u to keep it apart from the pronoun <i>ko</i>: <i>baeay ko</i> my house, <i>baeay ku amo</i> the master\'s house (p. 33). Affixes keep one spelling whatever the root does: <i>tagipuso-on</i>, <i>manogitlog</i>. In unstressed syllables e and i swap freely (<i>pwede/pwedi</i>, <i>yabe/yabi</i>); stressed e must stay e, and <i>sigi</i> for <i>sige</i> is "illiterate" (p. 26).</p>
<h3>Reading a written e (p. 33)</h3>
<p>Next to a vowel it is the consonant: <i>baeay, kaeamay, hueay</i>. Next to a consonant it is the vowel /e/: <i>presko, permi, kalye, eskuyla</i>.</p>
<h3>Stress (pp. 30–31)</h3>
<table><tr><th>Penultimate</th><th>Final</th></tr>
<tr><td>píto whistle</td><td>pitó seven</td></tr>
<tr><td>hápon afternoon</td><td>hapón Japanese</td></tr>
<tr><td>túbo pipe</td><td>tubó sugar cane</td></tr>
<tr><td>pagká\'on food</td><td>pagka\'ón while eating</td></tr>
<tr><td>hampángan toy</td><td>hampangán will be played with</td></tr>
<tr><td>kasákay fellow passenger</td><td>kasakáy could have ridden</td></tr></table>
<p>Default stress is penultimate; the dictionary marks only the exceptions (D. 38). Pitch works at sentence level: <i>Iya imaw.</i> He is here. <i>Iya imaw?</i> Is he here? (p. 31)</p>
<div class="note">For the clinic: the pair most likely to matter is <b>bug-at</b> (heavy, as in <i>mabug-at ro dughan</i>, a heavy chest) versus <b>bughat</b> (relapse after illness or childbirth). And <i>baga\'</i> with the catch is lungs. When unsure, say the word slowly with a clear catch and watch the patient\'s face.</div>`,
  quiz: [
    ['"Bughat" and "bug-at" differ by:', ['stress only', 'a glottal stop; they mean relapse and heavy', 'the e sound', 'o versus u'], 1, 'bug-at = heavy, bughat = relapse (Z p. 11).'],
    ['Aklanon "l" is found mostly:', ['at the end of words', 'next to i, as in likod, alima, ilo', 'in Spanish loans only', 'nowhere; Aklanon has no l'], 1, 'Z p. 20: real l survives mostly next to i.'],
    ['Why is the marker spelled "ku" though one-syllable words take o?', ['It is Spanish', 'To keep it apart from the pronoun ko', 'It is stressed', 'A printing error'], 1, 'Z p. 33: baeay ko vs baeay ku amo.'],
    ['In "presko" the written e is:', ['the velar consonant', 'the vowel e, because it stands next to a consonant', 'silent', 'a glottal stop'], 1, 'Z p. 33: next to a consonant, e is the vowel.']
  ]
},
{
  id: 'kalibo-dimensions', level: 'B1', unit: 'Culture', title: 'Three Aklanons and a thousand loans: town, age, prestige, and reading the dictionary tags',
  summary: 'Why the old man from Libacao, the Kalibo nurse and the teenager on the jeep sound different, how borrowed words are reshaped, and what [Sp], [Hil], [Akl:] and [Oak] mean.',
  body: `
<p>Zorc describes the Aklanon of <b>Kalibo, spoken by middle-aged people</b> (p. 7), and says plainly that it is not "pure": it borrows from Tagalog and Ilongo and is full of colloquialisms (p. 5). That is the Aklanon you will hear in the clinic, and the dictionary this app is checked against was built to record it, with "a very large representation of English and Spanish words" (D. 1).</p>
<h3>The three dimensions (pp. 5–7)</h3>
<table><tr><th>Dimension</th><th>Groups</th><th>What you will hear</th></tr>
<tr><td>Town</td><td>Kalibo, New Washington (the model); conservative towns (Altavas, Balete, Banga, Batan, Lezo, Libacao, Makato, Malay, Madalag, Malinao, Tangalan, SW Ibajay); Hiligaynon-leaning (towards Capiz); Kinaray-a-leaning (NE Ibajay, Nabas, towards Antique)</td><td>older forms and "deep" words from the hill towns; Hiligaynon words from the Capiz side; Kinaray-a from the Antique side</td></tr>
<tr><td>Age</td><td>over 55; 30–55; under 29</td><td>older: archaic words, complex sentences, slow speech, higher intonation; middle: standard, with English and Spanish insertions; young: Tagalog and English borrowing, slang, short sentences</td></tr>
<tr><td>Prestige</td><td>sermons, campaigns, formal occasions</td><td>e-words over loans (<i>eaeawigan</i> not <i>probinsya</i>), <b>r-forms over d-forms</b> (<i>ro</i>, <i>raya</i>, not <i>do</i>, <i>daya</i>: the d-forms are called baby talk or careless), long structures</td></tr></table>
<p>So an elderly patient from Libacao and a Kalibo adolescent are both speaking Aklanon; neither matches the other, and the dictionary marks words from both ends: <b>[Oak]</b> old or deep Aklanon, <b>[slg]</b> young slang, <b>[Lib]</b>, <b>[Ibj]</b>, <b>[Bkd]</b> for town and mountain speech, <b>[Kin]</b> for the Kinaray-a-mixed areas (D. 4–6).</p>
<h3>Borrowed words and how they are reshaped (pp. 12–22, 133–134)</h3>
<table><tr><th>Source</th><th>Examples</th><th>Adaptation</th></tr>
<tr><td>Spanish (by far the largest layer)</td><td>permi, petsa, presko, karne, kabayo, kutsara, swerte, bapor, baril, relo, renta, lugar, estar, tumar (take medicine), konpesar</td><td>f → p, v → b, ch → ts, j → dy; final r kept in loan verbs; initial r almost always marks a loan (p. 21); Spanish l or r can become the e-sound: eagari, kurae, kasae</td></tr>
<tr><td>English</td><td>titser, nars, dyip, ayskrim, bakwit (evacuate), haloblak, kas, kredit</td><td>respelled natively; takes native affixes (<i>pabulkit</i> vulcanise)</td></tr>
<tr><td>Chinese</td><td><b>tiyan</b> stomach, pansit, syopaw, tsa tea, boysit bad luck</td><td>old loans, fully native now</td></tr>
<tr><td>Sanskrit via Malay</td><td>daeaga maiden, <b>mahae</b> dear, turo teach, mutya pearl</td><td>ancient</td></tr>
<tr><td>Tagalog, Hiligaynon</td><td>marked <b>[Tag]</b>, <b>[Hil]</b> with the native word: <i>damo [Hil] [Akl: abo]</i>, <i>hibi [Hil] [Akl: tangis]</i>, <i>anyo [Sp] [Akl: dag-on]</i></td><td>the source of most of this app\'s 0.1.5 corrections</td></tr></table>
<p>Loans conjugate like any root: <i>Nagpa-X-ray eon kamo?</i> ◌ <i>Nagtext imaw kakon.</i> ◌ <i>Ginareseta ko kinyo</i>. ◌ Numbers for money and clock time are Spanish (<i>alas tres</i>, <i>beynte singko</i>); native numbers count things (lesson 39).</p>
<h3>The dictionary\'s tags, which this app copies (D. 4–9)</h3>
<table><tr><th>Tag</th><th>Meaning</th></tr>
<tr><td>[Sp] [Eng] [Ch] [Jp] [Tag] [Hil]</td><td>source language</td></tr>
<tr><td>[Akl: …]</td><td>the native Aklanon equivalent of a loan</td></tr>
<tr><td>[Oak] [slg] [gen] [vul] [idm] [expr] [Sup] [cor]</td><td>old/deep, slang, general, vulgar, idiom, expression, superstition, corrupted form</td></tr>
<tr><td>[Alt:] [Syn:] [Opp:] [Cf:] [Ctr:] [Abr:]</td><td>alternate, synonym, opposite, compare, contraction (<i>rang = ro akon nga</i>), abbreviation (<i>mga = manga</i>)</td></tr>
<tr><td>]ma[ ]pag[</td><td>a root always used with that prefix (<i>sunsun ]ma[ → masunsun</i>)</td></tr>
<tr><td>(h) and \'</td><td>a hidden final h (<i>simba(h)</i>) or a final glottal stop (<i>baba\'</i>)</td></tr>
<tr><td>RV1–RV9, CV, DV, ST1–ST5</td><td>verb classes (lesson 30)</td></tr></table>
<p>Register in one entry (D. 7): <i>utot</i> is "flatulence" in scientific register, "bad air" in general speech and a vulgar word; one word, <i>pandiho\'</i>, covers both the polite and the crude "move the bowels". Name respelling (D. 36): a word that can take <i>ro</i> is spelled natively (<i>Kalibo, Libakaw</i>); a word that takes <i>si</i> keeps its own spelling (<i>Victor, New Washington</i>).</p>
<div class="note">Clinical reading: expect an older patient to use words you will not find in Kalibo speech (ask the family to gloss; note <i>[Oak]</i> entries), a middle-aged one to code-switch to English for symptoms, and a young one to answer in Tagalog slang. Match the register you hear; prestige r-forms and e-words are the safe default for a doctor.</div>`,
  quiz: [
    ['Zorc\'s model Aklanon is that of:', ['Libacao elders', 'Kalibo, middle-aged speakers', 'Ibajay fishermen', 'radio announcers'], 1, 'Z p. 7.'],
    ['In prestige speech, which pair is preferred?', ['do, daya', 'ro, raya', 'both equally', 'neither'], 1, 'r-forms; the d-forms are dismissed as baby talk or careless (Z p. 7).'],
    ['"Tiyan" (stomach) is a loan from:', ['Spanish', 'English', 'Chinese', 'Sanskrit'], 2, 'Z p. 134.'],
    ['The dictionary tag [Akl: dag-on] after "anyo" means:', ['anyo is old Aklanon', 'dag-on is the native word for the loan anyo', 'dag-on is slang', 'anyo is vulgar'], 1, 'D. 6: [Akl:] gives the native equivalent.']
  ]
},
{
  id: 'sentence-patterns', level: 'A2', unit: 'Sentences II', title: 'Sentence patterns: predicate first, ro or do, persons are never objects, hay and may',
  summary: 'The shape of the basic sentence, the two-topic sentence, the hay inversion that fronts what matters, and the may sentence for "there is" and "has".',
  body: `
<h3>The basic sentence (pp. 151, 197)</h3>
<p>Two parts: the <b>predicate</b> ("the news") first, the <b>topic</b> (what is uppermost in the speaker\'s mind) second. <i>Nagpanaw sa Manila si Tatay.</i> Father left for Manila. · <i>Nahuman kahapon ro baeay.</i> The house was finished yesterday. · <i>Masakit ro akong ueo.</i> ◌ The topic is marked <b>ro / do</b> (common nouns), <b>si / sanday</b> (names: <i>sanday Maria</i> = Maria and company), or is a topic pronoun or deictic. Towns take the common markers: <i>sa Kalibo</i>, never <i>kay Kalibo</i> (p. 143).</p>
<h3>ro or do?</h3>
<p>They are the same word in two shapes (p. 143). <i>ro</i> is the general and the prestige form; <i>do</i> is preferred after a word ending in d, t or n: <i>Mainit gid <b>do</b> sabaw</i>, <i>Haron <b>do</b> imo</i>. In the lessons both appear, as they do in Zorc. <i>ro mga</i> contracts to <b>rong</b>: <i>Rong mangingilaw kuno nagakaon kay Pedro.</i> The ogres are said to be eating Pedro. (p. 153)</p>
<h3>Persons are never direct objects (pp. 145–146)</h3>
<p>You cannot say *<i>nagakaon it Pedro</i>. A person who receives an action is put in the referent form (<i>kay Pedro</i>, <i>kakon</i>, <i>kimo</i>) or made the topic: <i>Si Pedro kuno ginakaon kung mangingilaw.</i> Zorc reads this as Philippine respect and indirectness. For you: <i>Nagabulig ako <b>kinyo</b></i> I help you; <i>Ginabantayan nanda <b>si Nanay</b></i> they watch Mother. ◌</p>
<h3>ku is definite, it is indefinite (pp. 152–153)</h3>
<p><i>Nakabakae ka eon <b>it</b> gatas?</i> Did you buy (some) milk? · <i>… <b>ku</b> gatas?</i> the milk. · <i>ku mga unga</i> the children / <i>it mga unga</i> some children. The actor must be <i>ku</i> when the object is <i>it</i>.</p>
<h3>Two topics: the identificational sentence (p. 151)</h3>
<p><i>Ro nagpanaw sa Manila hay si Tatay.</i> The one who left for Manila was Father. · <i>Si Nanay ro ginbakean it isda ku tawo.</i> Mother was the one the man bought fish for. (p. 152) · <i>Sanday Maria ro nagbakae.</i> Maria and her companions were the ones who bought. The first topic is the more important; the second is the news. ◌ <i>Ro nagahambae kinyo hay sin-o?</i> Who is it that speaks to you?</p>
<h3>hay: turning the sentence round (p. 197)</h3>
<table><tr><th>Normal order</th><th>With hay</th></tr>
<tr><td>Raya ro akong unga.</td><td>Ro akong unga hay raya. This is my child.</td></tr>
<tr><td>Mahae ro singsing.</td><td>Ro singsing hay mahae. The ring is expensive.</td></tr>
<tr><td>Ginbaligya nana ro anwang.</td><td>Ro anwang hay ginbaligya nana. He sold the carabao.</td></tr>
<tr><td>Mataas ro mga baeay sa Manila.</td><td>Sa Manila hay mataas ro mga baeay. In Manila, well, the buildings are high.</td></tr>
<tr><td>Hin-aga ma-adto kita.</td><td>Hin-aga hay ma-adto kita. Tomorrow, well, we will go.</td></tr>
<tr><td>—</td><td>Ako hay bata pa ngani. Well me, I\'m still young.</td></tr>
<tr><td>—</td><td>Imaw hay presidente. He is a president. (D. 31)</td></tr></table>
<p>Simple inversion first; then the <b>emphasis derivation</b>, which fronts any element with "well, …" and sometimes adds a resumptive word (<i>Ro anwang, hay ginbaligya <b>ron</b> sa Kalibo</i>). This is the Tagalog <i>ay</i> sentence, and Kalibo speech uses it constantly (lesson 12). ◌ <i>Ro inom hay nagsugod kan-o?</i> The drinking, when did it start?</p>
<h3>may: there is, someone, has (p. 198)</h3>
<table><tr><th>Use</th><th>Example</th></tr>
<tr><td>existential</td><td><i>May baha kabi-i.</i> There was a flood last night. · <i>May patay sa datag.</i> There is a dead man in the field.</td></tr>
<tr><td>indefinite someone / something</td><td><i>May tawo runa?</i> Is someone there? · <i>May iya nga doktor kaina.</i> Some doctor was here a while ago.</td></tr>
<tr><td>has (possessor in focus)</td><td><i>May baeay ro akong tiyo.</i> My uncle has a house. · <i>May kapuslanan ro anang ginhambae.</i> What he said has worth.</td></tr>
<tr><td>has (relationship in focus)</td><td><i>May amon nga baeay.</i> We have a house. · <i>May ay Maria nga eagnat.</i> Maria has a fever.</td></tr>
<tr><td>with the negative</td><td><i>May tinun-an gid imaw, pero owa man imaw it batasan.</i> He may have an education, but he has no manners.</td></tr></table>
<div class="note">Symptom questions are <b>may</b> sentences ◌: <i>May eagnat kamo?</i> Do you have a fever? <i>May nabatian kamo nga boses nga owa it tawo?</i> Did you hear voices with nobody there? <i>May ginainom kamo nga bueong?</i> <i>May natabo?</i> Did something happen? And the answer, from lesson 5, is <i>May.</i> / <i>Owa.</i></div>`,
  quiz: [
    ['The normal Aklanon sentence order is:', ['topic, then predicate', 'predicate, then topic', 'verb last', 'free'], 1, 'Z p. 151, 197.'],
    ['Which is impossible in Aklanon?', ['Nagakaon it isda si Pedro.', 'Nagakaon it Pedro ro mangingilaw.', 'Ginakaon si Pedro.', 'Nagakaon kay Pedro.'], 1, 'Persons are never direct objects with it; use the referent kay or make the person the topic (Z pp. 145–146).'],
    ['"Nakabakae ka eon ku gatas?" means:', ['Did you buy some milk?', 'Did you buy the milk?', 'Will you buy milk?', 'Did you sell milk?'], 1, 'ku is definite, it indefinite (Z p. 153).'],
    ['"May ay Maria nga eagnat" means:', ['Maria is a fever.', 'Maria has a fever.', 'There is fever in Maria\'s house.', 'Maria had a fever before.'], 1, 'may + prepositive associate + nga + thing: possession with the relationship in focus (Z p. 198).']
  ]
},
{
  id: 'counting', level: 'A2', unit: 'Sentences II', title: 'Counting II: ka, ordinals, times, tig-, money, the clock, dates and age',
  summary: 'Native numbers for things, Spanish numbers for money and time, and the forms that turn a number into "the third", "twice", "two at a time" and "about three o\'clock".',
  body: `
<p>Lesson 10 gave the numbers 1–10. Zorc has no numeral chapter; what follows is assembled from his function-noun pages (pp. 163–164, 184, 190, 208) and the dictionary.</p>
<h3>Counting things (p. 190)</h3>
<p>Number + <b>ka</b> + noun, or number + <b>nga</b> + noun; never <i>mga</i> with a number: <i>daywang ka unga</i> two children · <i>tatlong ka kabayo</i> · <i>napueong ka baeay</i> ten houses · <i>Pila ka kilometros pa sa Libacao?</i> · <i>Limang ka dag-on eon ako riya.</i> I have been here five years now. (p. 201). <b>Sambato</b> and <b>sambilog</b> are "one" as a count word: <i>Sambato eang ro naka-abot.</i> Only one arrived. (p. 163). <b>Hundred</b> is <i>gatos</i> (<i>limang gatos</i>, <i>sang gatos</i>), <b>thousand</b> <i>libo</i>. Native 11–99 are not recorded in either book; Kalibo speakers use the Spanish set (<i>onse, dose, kinse, beynte, trenta, kwarinta</i>).</p>
<h3>Derived forms</h3>
<table><tr><th>Form</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>ika-</b> + number</td><td>ordinal</td><td><i>ikatlong unga</i> third child · <i>ikapito</i> seventh · <i>Ikapila ka sa imong klase?</i> What rank are you in your class? (p. 194). "First" is <i>una</i> in loans (<i>ala una</i>) and <i>panganay</i> for a first-born.</td></tr>
<tr><td><b>bisis</b></td><td>time, occasion</td><td><i>sambisis lang</i> just once · <i>tatlong bisis eon</i> the third time already · <i>kaywa</i> twice · <i>pilambisis</i> how many times</td></tr>
<tr><td><b>tig-</b> + number</td><td>N at a time, N each</td><td><i>Tigdaywa nagasaka rong sapat sa arka.</i> The animals went up two by two. (p. 184) · <i>tigsambato</i> one at a time · <i>tigsangkurot</i> a little at a time · <i>tigpila?</i> how much apiece?</td></tr>
<tr><td>number as a verb</td><td>make into N</td><td><i>Ap-ata ro saging.</i> Make it four bananas. · <i>An-oma ring unga.</i> Have six children. (D. 60, 57)</td></tr>
<tr><td><b>manga</b> + number</td><td>about</td><td><i>Manga lima kanda naeumos.</i> About five of them drowned. (p. 208)</td></tr></table>
<h3>Money (D. 150)</h3>
<p><i>kwarta</i> money, also one centavo · <i>piso, pisos</i> peso (<i>mamiso</i> at a peso each) · <i>salapi</i> fifty centavos · <i>kahati</i> twenty-five · <i>peseta</i> twenty · <i>dyes</i> ten · <i>bakod</i> five, slang. The question is <b>man-o</b> (with the catch; <i>mano</i> is the right hand): <i>Man-o ro manok ngara?</i> How much is this chicken? (p. 194) · <i>Pila ro alimango?</i> How much are the crabs? (D. 304) · <i>Ayawa nga beynte singko.</i> Make it exactly 25 centavos. (D. 68)</p>
<h3>The clock (D. 49, 261, 151)</h3>
<p><i>ala una</i> one o\'clock (only for one); <b>alas</b> + Spanish number for two to twelve: <i>alas dos, alas tres, alas says, alas otso, alas onse</i> · <i>alas says e medya</i> half past six · <i>minus kwarto para alas syete</i> a quarter to seven · <i>Manga alas tres makaron.</i> It is about three now. (p. 208) · <i>Makita ko ikaw sa alas otso.</i> I\'ll see you at eight. (p. 126) · <i>Hapita ako it alas says.</i> Pick me up at six. (D. 208)</p>
<h3>Dates, years, age</h3>
<p><i>Ano\'ng pitsaha makaron?</i> What is the date today? · <i>Pitsa dos it Enero.</i> January second. (D. 309) · years and months are Spanish (<i>Abril, Agosto, 1963</i>); <i>dag-on</i> is the native year, <i>panag-on</i> a season. Age uses <b>idad</b>: <i>Pila ro imong idad?</i> How old are you? · <i>May idad eon imaw.</i> He is old enough. · <i>Kat nagapangidaron imaw it dyes.</i> When he was ten. (D. 225). Counting back and forward (lesson 32): <i>daywang adlaw eon</i> two days ago · <i>sa tatlo pang adlaw</i> in three more days · <i>sa sueod it daywang oras</i> within two hours.</p>
<div class="note">Dosing in these forms ◌: <i>Tigsambato kada aga ag kada gabii.</i> One each morning and evening. <i>Tigdaywa pagkatapos it pagkaon.</i> Two after meals. <i>Sa tatlo pang adlaw, balik kamo.</i> Come back in three days. <i>Kaywa eang sa isaea ka adlaw.</i> Only twice a day. And for the MSE: <i>Pila ro inyong idad? Ano\'ng pitsaha makaron?</i></div>`,
  quiz: [
    ['"Two children" in Aklanon is:', ['daywa mga unga', 'daywang ka unga', 'mga daywa unga', 'unga daywa'], 1, 'number + ka (or nga) + noun; never mga with a number (Z p. 190).'],
    ['"Tigdaywa" means:', ['twenty', 'two at a time, two each', 'the second', 'twice'], 1, 'tig- + number = N at a time (Z p. 184).'],
    ['The dictionary\'s question for someone\'s age is:', ['Pila ka dag-on ka?', 'Pila ro imong idad?', 'Ikapila ka?', 'Man-o ro imong edad?'], 1, 'SR D. 225: Pila ro imong idad?'],
    ['"Alas says e medya" is:', ['six in the morning', 'half past six', 'a quarter past six', 'six thirty-five'], 1, 'medya = half (SR D. 261); clock time uses Spanish numbers.']
  ]
}
];"""
s = s[:-2].rstrip() + L + '\n'
open(P, 'w').write(s)
print('ok')
