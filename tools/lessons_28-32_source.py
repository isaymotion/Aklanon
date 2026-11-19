#!/usr/bin/env python3
"""Append grammar lessons 28–32 (from grammar-notes-2.md) to js/data/lessons.js."""
P = '/home/claude/aklanon/js/data/lessons.js'
s = open(P).read().rstrip()
assert s.endswith('];')
L = r"""
,{
  id: 'sound-changes', level: 'B1', unit: 'Sounds', title: 'Why words change shape: imna, kan-on, pamahaw, rang',
  summary: 'The ten sound changes that turn a root you know into a word you do not recognise, so you can hear inom inside imna and dumdum inside panumdum.',
  body: `
<p>Aklanon likes two-syllable words with the stress on the second-last syllable. When an affix is added, the root is squeezed, and the result can hide the root from a Tagalog ear (Zorc pp. 39–48). Tagalog does some of this too (<i>kain → kanin</i>), Aklanon does more of it.</p>
<h3>The changes that matter most</h3>
<table><tr><th>Rule</th><th>Root → form</th><th>Zorc</th></tr>
<tr><td>Vowel dropped, consonants swap (metathesis)</td><td><b>inom → imna</b> drink it! · <b>kaon → kan-on</b> rice · tanom → tamna · ilis → islan</td><td>p. 45</td></tr>
<tr><td>Final stressed vowel lost before a suffix</td><td><b>sakit → nasaktan</b> hurt · lisod → nalisdan · patay → patyon · sugot → sugtan</td><td>pp. 40–41</td></tr>
<tr><td>Final a, i, o before a suffix</td><td>asawa → asaw-on · mata → ginmat-an · siki → nasikyan · dugo → karugwan</td><td>p. 40</td></tr>
<tr><td>ng of pang-/mang-/sang- changes and the root's first sound drops</td><td>pang + bahaw → <b>pamahaw</b> breakfast · pang + dumdum → <b>panumdum</b> thinking · pang + kalisod → <b>pangalisod</b> suffering · pang + sugid → panugid · sang + bilog → sambilog one · pang + kutana → pangutana ask</td><td>pp. 41–43</td></tr>
<tr><td>ng kept before k, g, e, h, glottal, w, y</td><td>mang + isda → mangisda · pang + hibayag → panghibayag laugh</td><td>p. 42</td></tr>
<tr><td>d → r at the end of a root before a suffix</td><td>bukid → kabukiran · sayod → nasayoran known · tahod → tahoron respected</td><td>p. 44</td></tr>
<tr><td>e → l next to the -in- infix</td><td>eaga → linaga boiled · eangas → linangas naughty</td><td>p. 45</td></tr>
<tr><td>eon pronounced yun after t, d, s, n, y</td><td><i>Sabat eon</i> is heard as "sabat yun"; <i>tapus eon?</i> "tapus yun?"</td><td>p. 45</td></tr>
<tr><td>Contractions</td><td>akon nga → akong · abo nga tawo → abong tawo · owa it anoman → "uwa t anuman" you're welcome</td><td>p. 43</td></tr>
<tr><td>Reduplication</td><td>baeay-baeay doll house · init-init warm · eamig-eamig cool · kaon-kaon nibble · adlaw-adlaw every day</td><td>p. 47</td></tr>
<tr><td>-eV- infix = intensifying</td><td>duyog → <b>makadueuyog</b> sleep-inducing · sakit → <b>makasaeakit</b> painful · uhaw → makaueuhaw thirst-inducing · uean → tigueuean rainy season</td><td>p. 48</td></tr></table>
<h3>Marker + pronoun contractions (p. 44)</h3>
<p>These one-syllable words are everywhere in speech and nowhere in the dictionary:</p>
<table><tr><th></th><th>+ akon nga (my)</th><th>+ imo nga (your)</th><th>+ ana nga (his, her)</th></tr>
<tr><td>ro</td><td><b>rang</b></td><td><b>ring</b></td><td><b>raa</b></td></tr>
<tr><td>ku</td><td>kang</td><td>king</td><td>kaa</td></tr>
<tr><td>it</td><td>tang</td><td>ting</td><td>ta</td></tr>
<tr><td>sa</td><td>saang</td><td>sing</td><td>saa</td></tr></table>
<p><i>Nano <b>ring</b> ginaobra?</i> = <i>Nano ro imong ginaobra?</i> What are you doing? · <i>Tueogi <b>ring</b> problema.</i> Sleep off your problem. (SR) · <i>Hugasi <b>ring</b> alima bago kumaon.</i> Wash your hands before you eat. (p. 64) · <i>Indi <b>tang</b> magpati kimo.</i> I won't believe you. (p. 168)</p>
<h3>Stress alone can change the word (p. 39)</h3>
<p><i>súba</i> go upriver / <i>subá</i> river · <i>pagkáon</i> while eating / <i>pagka'ón</i> food · <i>hampangón</i> will be played with / <i>hampángan</i> toy. The app does not mark stress; the recorded pack by a native speaker will.</p>
<div class="note">For the clinic: when a patient says <i>panumdum</i>, hear <i>dumdum</i> (think, remember); in <i>pangalisod</i> hear <i>lisod</i> (hardship); in <i>pamatyag</i> hear <i>batyag</i> (feel); in <i>nasaktan</i> hear <i>sakit</i>; in <i>kan-on</i> hear <i>kaon</i>. Dictionary roots are the full forms; search the root, not the squeezed form.</div>`,
  quiz: [
    ['"Imna" comes from which root?', ['imon', 'inom', 'ima', 'mina'], 1, 'Metathesis: inom + -a → imna, "drink it" (p. 45).'],
    ['"Pamahaw" (breakfast) is built from:', ['pa- + mahaw', 'pang- + bahaw', 'pam- + ahaw', 'pa- + bahaw'], 1, 'pang- + bahaw: ng → m before b, then b is lost (p. 42).'],
    ['"Ring" in "Tueogi ring problema" means:', ['ring (the jewel)', 'ro imo nga = your', 'ro akon nga = my', 'ro ana nga = his'], 1, 'ro + imo nga contracts to ring (p. 44).'],
    ['"Makasaeakit" contains which intensifying device?', ['the -in- infix', 'the -eV- infix', 'full reduplication', 'the ka- prefix'], 1, '-eV- (here -ea-) inside sakit = pain-inducing (p. 48).']
  ]
},
{
  id: 'focus-ii', level: 'B1', unit: 'Verbs III', title: 'Choosing a focus: roles, the two paradigms, and the idioms that must be object-focus',
  summary: 'Zorc\'s rules for which focus to use, why actor focus everywhere sounds childish, and the sentences that only work one way.',
  body: `
<p>Lesson 7 introduced the four focuses. Zorc's longest chapter (pp. 70–89) is about <b>choosing</b> between them, and he calls this "the most important point in the whole structure of the language" (p. 89). Tagalog speakers already have the instinct (<i>Kinain ko</i> vs <i>Kumain ako</i>); Aklanon uses it more often and in more idioms.</p>
<h3>Roles and what each focus puts first (pp. 74–82)</h3>
<table><tr><th>Focus</th><th>Topic marked by ro / si / topic pronoun</th><th>Typical markers when not in focus</th></tr>
<tr><td>Actor (naga-, nag-, maga-, mag-)</td><td>the doer</td><td>ku + actor</td></tr>
<tr><td>Instrument (gina-, gin-, i-, iga-)</td><td>an instrument, a companion, the thing moved or conveyed, the content of speech, a special beneficiary, a reason</td><td>ku + instrument</td></tr>
<tr><td>Object (gina-, gin-, -on)</td><td>a goal that receives the whole action</td><td>it + object</td></tr>
<tr><td>Referent (gina-…-an, gin-…-an, -an)</td><td>a place, an indirect object or beneficiary, a partly affected object, the person affected, an indirect cause</td><td>sa + referent, para sa + beneficiary</td></tr></table>
<h3>One picture, four sentences (pp. 77–79)</h3>
<p>"The man will buy bread for the child with the money."</p>
<table><tr><th>Focus</th><th>Aklanon</th></tr>
<tr><td>Actor</td><td><b>Ro tawo</b> magabakae it tinapay para sa unga.</td></tr>
<tr><td>Instrument</td><td><b>Ro kwarta</b> igabakae it tinapay ku tawo para sa unga.</td></tr>
<tr><td>Object</td><td><b>Ro tinapay</b> bakeon ku tawo ku kwarta para sa unga.</td></tr>
<tr><td>Referent (beneficiary)</td><td><b>Ro unga</b> bakean it tinapay ku tawo ku kwarta.</td></tr>
<tr><td>Referent (place)</td><td><b>Ro tindahan</b> bakean it tinapay ku tawo para sa unga.</td></tr></table>
<p>Zorc's second paradigm (p. 87), "The mother will slice the meat with the bolo on the board": <i>Ro ina magakiwa it karne ku sanduko sa dapaean</i> · <i>Ro sanduko igakiwa ku ina it karne</i> · <i>Ro karne pagakiwa-on ku ina</i> · <i>Ro dapaean pagakiwa-an ku ina</i>.</p>
<h3>Idioms that are object or referent focus, never actor (pp. 85–86)</h3>
<table><tr><th>Correct</th><th>Wrong (actor focus)</th><th>English</th></tr>
<tr><td><b>Nano ring ginabasa?</b></td><td>*Sa ano ikaw nagabasa?</td><td>What are you reading?</td></tr>
<tr><td><b>Sino ro ginaosoy mo?</b></td><td>*Kanyo ikaw nagaosoy?</td><td>Whom are you looking for?</td></tr>
<tr><td><b>Bantayi ro imong manghod.</b></td><td>*Magbantay ka sa imong manghod.</td><td>Watch your younger sibling.</td></tr>
<tr><td><b>Mathematics ro akong ginaturo.</b></td><td>Gaturo ako it Mathematics. (childish)</td><td>I teach Mathematics.</td></tr></table>
<p>The lesson for your questions: <b>what, whom, which</b> questions about the thing go in object focus with <i>ro</i> on the question word: <i>Nano ro imong ginhuna-huna?</i> What were you thinking? ◌ · <i>Nano ro imong gintangisan?</i> What were you crying about? (p. 82) · <i>Sino ro ginakahadlukan mo?</i> Whom are you afraid of? ◌ · <i>Ano ro ginainom mo nga bueong?</i> What medicine do you take? ◌</p>
<h3>Focus is not the passive (pp. 83–84)</h3>
<p><i>Kinaon ro saging.</i> The banana was eaten (by someone unnamed). · <i>May kumaon it saging.</i> Somebody ate the banana. · <i>Si George ro nagkaon it saging.</i> George was the one who ate it. Leaving out the actor in object focus makes the actor indefinite; it does not hide anyone, and nothing about it is formal or written.</p>
<h3>Referent focus for feelings and causes (pp. 81–82)</h3>
<p><i>Si Pedro ginaakigan ni Karl ku kaeangas it mga iba.</i> Karl is angry at Pedro because of the others' noise. · <i>Naeayo-an ro magueang sa anang biyahe.</i> The old man felt the distance of his trip. · <i>Hatanda-an pa nakon ro anang uyahon.</i> I still remember his face. · <i>Basi ikaakig nana ro kagahod.</i> Maybe the noise will make him angry (instrument focus for a reason).</p>
<div class="note">Style rule (pp. 87–88): put in focus whatever matters now, and change focus as the conversation moves. <i>Kumosta ka?</i> (you in focus) <i>… Nano ring ginaobra?</i> (your work in focus). A whole interview in actor focus, <i>Nagainom ka it bueong? Nagatueog ka? Nagakaon ka?</i>, is grammatical and sounds like a child. Mix in <i>Ginainom mo ro bueong? Pila ka oras ro tueog mo?</i></div>`,
  quiz: [
    ['In "Ro unga bakean it tinapay ku tawo", the topic is the:', ['actor', 'object (bread)', 'beneficiary (child)', 'instrument (money)'], 2, 'Referent focus -an puts the beneficiary in focus (p. 78).'],
    ['Which is the correct idiom for "What are you reading?"', ['Sa ano ikaw nagabasa?', 'Nano ring ginabasa?', 'Nagabasa ka it nano?', 'Ano ka nagabasa?'], 1, 'Object focus with the question word as topic (p. 85).'],
    ['"Kinaon ro saging" without an actor means:', ['The banana ate.', 'Someone (unspecified) ate the banana.', 'I ate the banana.', 'Do not eat the banana.'], 1, 'Object focus with no actor indefinitises the actor; it is not a passive (p. 83).'],
    ['Zorc says a speaker who uses only actor focus sounds:', ['formal', 'childish or vain', 'rural', 'angry'], 1, 'p. 88: constant actor focus "sounds childish or vain".']
  ]
},
{
  id: 'verb-classes', level: 'B1', unit: 'Verbs III', title: 'Reading the dictionary: tenses, conditioned forms, and the tags RV1–RV9, ST1–ST5, CV, DV',
  summary: 'The full tense set behind lesson 8, the past- and future-conditioned forms after owa and indi, and what the verb tags in Zorc\'s dictionary tell you.',
  body: `
<p>Aklanon verbs mark <b>aspect</b> (begun or not), not clock time (Zorc p. 59). Lesson 8 gave the four everyday forms; here is the whole set, and the tags you will meet in the dictionary and in this app's notes.</p>
<h3>The tenses (pp. 60–65)</h3>
<table><tr><th>Form</th><th>Name</th><th>Use</th><th>Example</th></tr>
<tr><td>naga-</td><td>imperfective (real)</td><td>now, habitual, ongoing in the past</td><td><i>Nagasimba ako adlaw-adlaw.</i> I go to church every day. (p. 62)</td></tr>
<tr><td>nag-</td><td>perfective (real)</td><td>done</td><td><i>Nagtanom sanda it bataw.</i> They planted beans. (p. 62)</td></tr>
<tr><td><b>mag-</b> after owa, kan-o, siin, ayaw</td><td>past conditioned</td><td>the past under a negative or a question word</td><td><i>Owa ako magsimba kahapon.</i> I did not go to church yesterday. (p. 64) · <i>Kan-o kamo maguli kabi-i?</i> When did you go home last night? (p. 65)</td></tr>
<tr><td>maga-</td><td>future (unreal)</td><td>will</td><td><i>Magabakae ro tawo.</i></td></tr>
<tr><td><b>manog-</b></td><td>expected</td><td>about to, intends to</td><td><i>Manoghalin kuno kamo.</i> They say you intend to move. (p. 63)</td></tr>
<tr><td>ma-</td><td>subjunctive</td><td>after mos, basi, kunta, kon, siguro</td><td><i>Basi mahueog ka.</i> You might fall. (p. 63)</td></tr>
<tr><td>mag-</td><td>dependent</td><td>after gusto, naila, dapat, kinahangean, antigo</td><td><i>Kinahangean sanda gaadto sa Antique.</i> They must go to Antique. (p. 64)</td></tr>
<tr><td><b>mag-</b> after indi</td><td>future conditioned</td><td>will not</td><td><i>Indi ako magkaon.</i> I will not eat.</td></tr>
<tr><td><b>pag-</b></td><td>participle</td><td>gerund, or "when …" in the past</td><td><i>Pag-abot nana kahapon, nagaeaba kami.</i> When he arrived yesterday, we were washing. (p. 62)</td></tr></table>
<p>So <b>owa + mag-</b> is past ("did not") and <b>indi + mag-</b> is future ("will not"): the particle carries the time (p. 61). The object-focus pair is <i>Owa ko pagobraha ruyon</i> I did not do that (p. 98) and <i>Hin-uno imaw pagpukawon?</i> At what time is he to be awakened? (p. 98). The old <b>-um-</b> conjugation "does not exist in current Aklanon" except as an alternate in commands and after <i>kon</i>: <i>Kon umabot eon si Tatay…</i> (pp. 63–64).</p>
<h3>The dictionary's verb tags (SR pp. 25–27; Zorc pp. 90–92)</h3>
<table><tr><th>Tag</th><th>Class</th><th>Example roots</th></tr>
<tr><td>RV1</td><td>transitive; takes all focuses; object with it, -on</td><td>bakae, kaon, inom, daea, hueat</td></tr>
<tr><td>RV2</td><td>goal shown by instrument focus (i-)</td><td>baligya sell, tao give, sugid tell, hatod take</td></tr>
<tr><td>RV3</td><td>goal with it or sa, suffix -an / -i</td><td>bantay, lipat, tanda, isog scold, bisita, likaw</td></tr>
<tr><td>RV4</td><td>goal only with sa</td><td>lingkod sit on, sakay ride</td></tr>
<tr><td>RV5</td><td>object built into the verb (pang- verbs)</td><td>pangisda, pamunit</td></tr>
<tr><td>RV6</td><td>intransitive motion</td><td>adto, daeagan, panaw, hapit</td></tr>
<tr><td>RV7</td><td>inanimate actor</td><td>uean rain, bukae boil, tubo sprout</td></tr>
<tr><td>RV8</td><td>always plural doers (reciprocal)</td><td>saeabtanan argue, pangaway fight each other</td></tr>
<tr><td>RV9</td><td>pa- directional motion</td><td>pauli, paeapit, paKalibo</td></tr>
<tr><td>CV</td><td>causative pa- (lesson 15)</td><td>pakaon, patawag</td></tr>
<tr><td>DV</td><td>distributive pang- (lesson 31)</td><td>pamakae, panindahan</td></tr>
<tr><td>ST1</td><td>feelings conjugated like object focus with actor meaning</td><td>gutom, duyog, uhaw, ga-oy</td></tr>
<tr><td>ST2</td><td>feelings and conditions, na-/hi-/ha- only</td><td>akig, hadlok, subo, lipay, matay, bughat</td></tr>
<tr><td>ST3</td><td>accidental happenings to things</td><td>buka break, gisi tear, bagbag crash</td></tr>
<tr><td>ST4</td><td>bodily afflictions</td><td>sakit, piling cramps, sip-on, binhod, kuyap</td></tr>
<tr><td>ST5</td><td>psychological reaction to something outside, like referent focus</td><td>eayo (Naeayo-an ako ku biyahe), problema, kuyap</td></tr></table>
<p>Why it matters: a root tagged RV2 (<i>sugid</i>) will say <i>Isugid mo</i>, not *<i>sugidon mo</i>; an RV3 root (<i>isog</i>, <i>bantay</i>) takes <i>-i</i> in commands, <i>Bantayi</i>, <i>Isugi</i>; an ST4 root (<i>sakit</i>) is a condition, <i>ginasakit</i>, <i>nasaktan</i>; an ST5 root is felt about something, <i>Naproblemahan ako sa…</i>.</p>
<div class="note">Zorc's own tag string looks like <i>masimba = gAF-S/subj</i>: g general quality, AF actor focus, S simple mode, subj subjunctive (p. 98). You will not need to write these, only to read SR's RV/ST labels, which this app copies into the dictionary notes where it has them.</div>`,
  quiz: [
    ['"Owa ako magsimba kahapon" uses mag- as:', ['future', 'past conditioned, after owa', 'imperative', 'dependent'], 1, 'owa + mag- is the past conditioned form; the negative particle carries past time (pp. 61, 64).'],
    ['"Manoghalin kuno kamo" means:', ['You moved, they say.', 'They say you intend to move.', 'You must move.', 'Did you move?'], 1, 'manog- = expected, "about to, intends to" (p. 63).'],
    ['A root tagged RV2 shows its goal with:', ['-on (object focus)', 'i- (instrument focus)', 'sa only', 'no goal at all'], 1, 'RV2: goal shown by instrument focus, e.g. isugid, ibaligya (SR pp. 25–27).'],
    ['Which tag marks bodily afflictions like sakit, sip-on, binhod?', ['ST1', 'ST2', 'ST4', 'RV7'], 2, 'ST4 = physical afflictions of the body (SR).']
  ]
},
{
  id: 'verbs-iii', level: 'B1', unit: 'Verbs III', title: 'Doing a lot, doing together, becoming: pang-, mang-, maging-, mag-, makig-, -in-, and the intensives',
  summary: 'The other verb classes: distributive pang-, occupations in mang-, becoming with maging-, kin pairs with mag-, sharing with makig-, and the qualifiers that say "kept on" and "all of them".',
  body: `
<h3>Distributive pang- (p. 106)</h3>
<p>Spreads an action over time or many objects, builds an idiom, or folds the object into the verb. The sound changes of lesson 28 apply.</p>
<table><tr><th>Root</th><th>pang- form</th><th>Meaning</th></tr>
<tr><td>bakae</td><td>pamakae</td><td>buy plenty</td></tr>
<tr><td>tindahan</td><td>panindahan</td><td>go marketing</td></tr>
<tr><td>asawa</td><td>pangasawa</td><td>court and marry</td></tr>
<tr><td>kita</td><td>pangita</td><td>livelihood</td></tr>
<tr><td>sigarilyo</td><td>panigarilyo</td><td>cigarette smoking</td></tr>
<tr><td>isda</td><td>pangisda</td><td>go fishing</td></tr>
<tr><td>kutana</td><td>pangutana</td><td>ask questions</td></tr>
<tr><td>amuyo</td><td>pangamuyo</td><td>pray</td></tr></table>
<p><i>Nagpangisda sanda kabi-i.</i> They fished last night. (p. 107) · <i>Nagapangamuyo kami it uean.</i> We are praying for rain. (p. 107) · <i>Ipangsugid mo kanda ro hatabo.</i> Tell them everything that happened. (p. 107). Beware the look-alike instrumental gerund without sound change: <i>panimba</i> going to church vs <i>pangsimba</i> church clothes (p. 108).</p>
<h3>mang-: the verb and the occupation (pp. 109–110)</h3>
<table><tr><th>Root</th><th>mang- verb</th><th>Occupation noun</th></tr>
<tr><td>isda</td><td>mangisda (fish)</td><td>mangingisda fisherman</td></tr>
<tr><td>uma</td><td>mangumah (farm)</td><td>mangunguma farmer</td></tr>
<tr><td>turo</td><td>manuro (teach)</td><td>manunuro teacher</td></tr>
<tr><td>patay</td><td>mamatay (kill)</td><td>mamamatay killer</td></tr></table>
<p><i>Si Pedro owa mangayo it kwarta ay may ana man.</i> Pedro did not ask for money because he has his own. (p. 109)</p>
<h3>maging-: become (p. 110)</h3>
<p><i>nagin(g)-</i> real, <i>magin(g)-</i> unreal, on a noun or pronoun: <i>Buot nakon kunta magingpari.</i> I wanted to become a priest. (p. 111) · <i>Nagingunga nakon imaw.</i> He became my child. (p. 111). ◌ <i>Nagingkaeain imaw halin sadto</i>: he became different since then.</p>
<h3>mag-: a related pair (pp. 111–112)</h3>
<p><i>mag-</i> + kin root = "are (related as)": <i>magasawa</i> husband and wife, <i>magina</i> mother and child, <i>magama</i> father and child, <i>magkampud</i> cousins, <i>magamigo</i> friends, <i>magkilaea</i> acquaintances; with <i>-eV-</i> for three or more, <i>magmaeanghod</i> siblings. <i>Nagkilaea sanda kahapon.</i> They met yesterday. (p. 112) · <i>Pagasawa nanda, nagdismayo ro nobya.</i> When they were married, the bride fainted. (p. 112)</p>
<h3>makig- / makipag-: seeking to share (p. 113)</h3>
<p><i>Nakighueay imaw ku imong kalisod.</i> He shares with you in your bereavement. · <i>Nakighibayag imaw kakon.</i> He is with me in my joy. · ◌ <i>Makig-istorya ako kinyo</i>: I would like to talk with you. The real forms are <i>nakig-</i>, <i>nakipag-</i>.</p>
<h3>-in-: speaking like, acting like (p. 114)</h3>
<p><i>Inakeanon</i> the Aklanon language · <i>Binisaya</i> Visayan · <i>Ininglis</i> English · <i>inamerikano</i> acting like an American · <i>Ayaw maglinahog.</i> Don't be naughty. (p. 114)</p>
<h3>Qualifiers (pp. 117–119)</h3>
<table><tr><th>Form</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>ka-</b> perfective</td><td>state achieved</td><td><i>nagakatueog</i> is already sleeping; <i>nagkahueog</i> was down and out (p. 117)</td></tr>
<tr><td><b>-eV-</b> progressive, plural</td><td>kept on; all of them</td><td><i>Nagkaeamatay sanda sa gutom.</i> They were all dying from hunger. (p. 118)</td></tr>
<tr><td><b>-in-</b> intensive</td><td>strongly, repeatedly</td><td><i>Nagkinaon sanda sa amon nga saeo-saeo.</i> They ate and ate at our party. (p. 118)</td></tr>
<tr><td><b>-ilin-</b> more intensive</td><td>unending</td><td><i>ilinuean</i> continuous downpour; <i>hilinambae</i> unending chatter (p. 119)</td></tr>
<tr><td><b>-CV-</b> diminutive</td><td>less likely, a little</td><td><i>hidadakpan</i> might happen to be caught (p. 96); <i>Abo ro akong naiinom.</i> I managed to drink a great deal. (p. 119)</td></tr>
<tr><td><b>si-</b> distributive</td><td>many act individually</td><td><i>sihambae</i> talk together (p. 92)</td></tr></table>
<div class="note">Mania history in these forms ◌: <i>Nagkinaon ag nagkinaon imaw?</i> Did he eat and eat? <i>Nagahilinambae imaw bisan owa it kaimaw?</i> Does he chatter without stopping even with no one there? <i>Nagpamakae imaw it abo nga butang?</i> Did he buy plenty of things? The <i>-in-</i> and <i>-eV-</i> forms are how family describe excess.</div>`,
  quiz: [
    ['"Pangasawa" means:', ['a wife', 'to court and marry', 'married couple', 'to divorce'], 1, 'pang- idiom from asawa (p. 106).'],
    ['The occupation noun from "isda" is:', ['mangisda', 'mangingisda', 'pangisda', 'isdaan'], 1, 'mang- noun with the extra nasal + vowel syllable: mangingisda (p. 110).'],
    ['"Nagkaeamatay sanda sa gutom" means:', ['They killed for food.', 'They were all dying from hunger.', 'They nearly starved once.', 'They will die of hunger.'], 1, '-eV- progressive/plural inside matay (p. 118).'],
    ['"Nakighueay imaw ku imong kalisod" expresses:', ['He caused your hardship.', 'He shares in your hardship.', 'He laughed at your hardship.', 'He forgot your hardship.'], 1, 'makig-/nakig- = seeking mutuality, sharing (p. 113).']
  ]
},
{
  id: 'questions-ii', level: 'A2', unit: 'Sentences II', title: 'Question words II and the time markers: kan-o vs hin-uno, sino ro imong ngaean, ku / it / sa',
  summary: 'The full interrogator table, two words for "when", the real way to ask a name, and how ku, it and sa place an event in time.',
  body: `
<h3>Zorc's interrogators (pp. 192–194)</h3>
<table><tr><th>Aklanon</th><th>Meaning</th><th>Tagalog</th></tr>
<tr><td><b>sino</b> / nanyo / anyo / kanyo</td><td>who (topic) / by whom / whose / to whom</td><td>sino / nino / kanino / kanino</td></tr>
<tr><td><b>ano</b>, nano</td><td>what (topic / associate)</td><td>ano</td></tr>
<tr><td>ano kuno</td><td>what did they say?</td><td>ano daw</td></tr>
<tr><td><b>alin</b>, ano</td><td>do what? (a verb: <i>Gaalin ka?</i> What are you doing?)</td><td>umaano</td></tr>
<tr><td><b>kan-o</b></td><td>when (past)</td><td>kailan</td></tr>
<tr><td><b>hin-uno</b></td><td>when (future)</td><td>kailan</td></tr>
<tr><td><b>siin</b></td><td>where; which of several</td><td>saan; alin</td></tr>
<tr><td><b>haman</b></td><td>why (mild)</td><td>bakit</td></tr>
<tr><td>basi</td><td>why (northern Aklan)</td><td>bakit</td></tr>
<tr><td><b>pa-ano, pa-alin</b></td><td>how, in what way</td><td>paano</td></tr>
<tr><td><b>pila</b> / ikapila / mano</td><td>how many / what number / how much (price)</td><td>ilan / pang-ilan / magkano</td></tr>
<tr><td><b>mauno</b></td><td>how, of what quality</td><td>kumusta; paano</td></tr></table>
<p>Zorc's examples: <i>Sino ro imong ngaean?</i> What is your name? (the native idiom; <i>Ano ro imong ngaean?</i> is a borrowing, now also accepted, p. 192) · <i>Kanyo nakon itao ro kwarta?</i> To whom should I give the money? (p. 192) · <i>Kan-o imaw nag-abot?</i> When did he arrive? · <i>Hin-uno sanda maadto?</i> When will they go? (p. 193) · <i>Haman indi ikaw mamunot?</i> Why aren't you going along? (p. 194) · <i>Pa-ano ro paghambae karon sa Ininglis?</i> How do you say that in English? (p. 194) · <i>Mauno ro imong pamatyag?</i> How do you feel? (p. 194)</p>
<h3>Two whens</h3>
<p><b>kan-o</b> looks back and takes the past-conditioned verb: <i>Kan-o nagsugod ro sakit?</i> When did the illness start? ◌ <b>hin-uno</b> looks forward: <i>Hin-uno kamo mabalik?</i> When will you come back? ◌ · <i>Hin-uno imaw pagpukawon?</i> At what time is he to be awakened? (p. 98). Tagalog has one <i>kailan</i>; the Aklanon pair is a frequent slip.</p>
<h3>Placing an event in time: ku, it, sa (pp. 165–166)</h3>
<table><tr><th>Marker</th><th>Time</th><th>Examples</th></tr>
<tr><td><b>ku</b></td><td>a completed past point</td><td>ku Lunes last Monday · ku Enero last January · ku isaeang adlaw the day before yesterday · ku isaeang dominggo the week before last · ku gerra during the war</td></tr>
<tr><td><b>… eon</b></td><td>counted back from now</td><td>daywang adlaw eon two days ago · limang ka buean eon five months ago · tatlo ka dag-on eon three years ago</td></tr>
<tr><td><b>it</b></td><td>time within</td><td>kahapon it hapon yesterday afternoon · sa sueod it daywang oras within the next two hours</td></tr>
<tr><td><b>sa</b></td><td>future</td><td>sa Lunes on Monday · sa masunod nga dominggo next week · sa daywa pang adlaw in two more days</td></tr></table>
<p>◌ History-taking: <i>Nagsugod raya ku Enero?</i> Did this begin last January? · <i>Tatlo ka buean eon?</i> Three months ago? · <i>Balik kamo sa masunod nga dominggo.</i> Come back next week. · <i>Kabii it gabii, nakatueog kamo?</i> Last night, did you sleep?</p>
<h3>Plural and counting words (p. 190)</h3>
<p><b>mga</b> pluralises (<i>ro mga unga</i>), <b>ka</b> follows numbers and <i>pila</i> (<i>daywang ka unga</i>, <i>pila ka adlaw</i>), and <i>mga</i> is never used with a number. The linker <b>nga</b> becomes <b>-ng</b> after a vowel, h, glottal or n: <i>tawong mabuot</i>, <i>batang eaeaki</i>, <i>Mayad nga agahon</i> good morning, <i>Mayad nga hapon kinyong tanan</i> (p. 191).</p>
<h3>Who said it: the Kalibo quotative (p. 167)</h3>
<p><i>Sinay Carlos, "Makaon eon kita."</i> Carlos said, "Let's eat." · <i>Ano sinimo?</i> What did you say? · <i>sinana</i> he said, <i>sinanda</i> they said. Around Kalibo the prefix is <b>sin-</b>; north around Ibajay it is <b>kun-</b>. ◌ Collateral: <i>Sinay Nanay, owa imaw gatueog it tatlo ka gabii.</i> Mother says he has not slept for three nights.</p>
<div class="note">Exclamations with <b>ka- + root + ta + k-pronoun</b> (p. 168): <i>Kahinay ta kimo!</i> You're so slow! · <i>Kabuot ta kana!</i> He is so kind! · <i>Kaisog ta kakon.</i> I am very brave. You will hear <i>Kasakit ta kakon!</i> as a cry of pain. ◌</div>`,
  quiz: [
    ['Which word asks "when" about the future?', ['kan-o', 'hin-uno', 'siin', 'haman'], 1, 'hin-uno = when (future); kan-o = when (past) (p. 193).'],
    ['The native Aklanon way to ask a name is:', ['Ano ro imong ngaean?', 'Sino ro imong ngaean?', 'Siin ro imong ngaean?', 'Nano ngaean mo?'], 1, 'Personal-name interrogators follow the si paradigm: Sino ro imong ngaean? (p. 192).'],
    ['"Ku Lunes" means:', ['on Monday (future)', 'last Monday', 'every Monday', 'by Monday'], 1, 'ku marks a completed past point; sa Lunes is the future (p. 165).'],
    ['"Daywang adlaw eon" means:', ['two more days', 'two days ago', 'every two days', 'the second day'], 1, 'Number + eon counts back from now (p. 165).']
  ]
}
];"""
s = s[:-2].rstrip() + L + '\n'
open(P, 'w').write(s)
print('ok')
