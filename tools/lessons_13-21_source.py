#!/usr/bin/env python3
"""Append lessons 13–21 to js/data/lessons.js. Sources: Zorc & de la Cruz 1968 (page numbers = printed pages)."""
P = '/home/claude/aklanon/js/data/lessons.js'
s = open(P).read()
assert s.rstrip().endswith('];')

L = r"""
,{
  id: 'statives', level: 'A2', unit: 'Verbs II', title: 'Feelings are verbs: nagutom, nahadlok, nasubo (stative verbs)',
  summary: 'Hungry, tired, afraid, sad, happy: Aklanon says these with a verb class of its own. One prefix pair covers most of the interview.',
  body: `
<p>In Tagalog you say <i>gutom ako</i>, <i>natatakot ako</i>, <i>malungkot ako</i>: a mix of adjectives and verbs. Aklanon puts nearly all inner states into one grammatical box, the <b>stative verb</b> (Zorc pp. 120–129). They cannot take degree (no <i>mas gutom</i>), and their present form is simply <b>na-</b> + root.</p>
<table><tr><th>Tagalog</th><th>Aklanon</th><th>English</th><th>Zorc</th></tr>
<tr><td>Gutom ako.</td><td><b>Nagutom ako.</b></td><td>I'm hungry.</td><td>p. 121</td></tr>
<tr><td>Pagod siya.</td><td><b>Gina-oy imaw.</b> / Nagaoy imaw.</td><td>He is tired.</td><td>p. 122</td></tr>
<tr><td>Hindi siya nauuhaw.</td><td><b>Owa imaw giohawa.</b></td><td>He is not thirsty.</td><td>p. 122</td></tr>
<tr><td>Galit ako sa pinsan ko.</td><td><b>Naakig ako sa akong igkampud.</b></td><td>I'm angry with my cousin.</td><td>p. 123</td></tr>
<tr><td>Kailan ka ipinanganak?</td><td><b>Kan-o ikaw natawo?</b></td><td>When were you born?</td><td>p. 123</td></tr>
<tr><td>Nasaktan ako nang husto sa sinabi mo.</td><td><b>Nasaktan ako it duro ku imong ginhambae.</b></td><td>I was deeply hurt by what you said.</td><td>p. 128</td></tr>
<tr><td>Parang gusto kong umiyak.</td><td><b>Natagtangis ako.</b></td><td>I feel like crying.</td><td>p. 128</td></tr></table>
<h3>The two forms you need</h3>
<ul>
<li><b>na-</b> + root = the state now or in the past: <i>nahadlok</i> (afraid), <i>nasubo</i> (sad), <i>nalipay</i> (happy), <i>nagaoy</i> (tired), <i>naduyog</i> (sleepy), <i>nakibot</i> (startled), <i>namingaw</i> (lonely, low), <i>nahidlaw</i> (missing someone).</li>
<li><b>ma-</b> + root = the state in the future or as a possibility: <i>mahadlok</i> (will be afraid), <i>masubo</i>. Compare Tagalog <i>matatakot</i>.</li>
<li>The negative uses <b>owa</b> + <i>gi-…-a</i> for present states of Class I (<i>Owa imaw giohawa</i>, p. 122) but plain <b>owa</b> + root is understood everywhere: <i>Owa ako gagaoy</i> "I'm not tired" (dictionary). ◌ For the clinic, <i>Owa ako it kahadlok</i> "I have no fear" also works.</li>
</ul>
<h3>Zorc's lists of feeling roots</h3>
<p><b>Class I</b> (fullest conjugation, p. 121): <i>duyog</i> sleepy, <i>gutom</i> hungry, <i>ga-oy</i> tired, <i>ohaw</i> thirsty, <i>kibot</i> startled, <i>hidlaw</i> lonely for someone, <i>mingaw</i> lonely, depressed, <i>sum-oe</i> bored. <b>Class II</b> internal states (p. 123): <i>akig</i> angry, <i>hadlok</i> afraid, <i>ila</i> like, love, <i>lipat</i> forget, <i>lipay</i> happy, <i>subo</i> sad, <i>tueog</i> asleep; and happenings: <i>matay</i> die, <i>tawo</i> be born, <i>hueog</i> fall, <i>duea</i> get lost. <b>Class V</b> referent forms in <i>-an</i> (p. 127): <i>hapdi</i> pain, <i>sakit</i> hurt: <i>Mahapdi-an ka sa nina ngara</i> "This cut will cause you pain" (p. 128).</p>
<h3>Three words from one root</h3>
<table><tr><th>Root</th><th>Stative verb</th><th>ka- noun (p. 129)</th><th>maka- adjective "causes …" (p. 129)</th></tr>
<tr><td>subo</td><td>nasubo (is sad)</td><td>kasubo (sorrow)</td><td>makasueubo (saddening)</td></tr>
<tr><td>sakit</td><td>nasakit / nasaktan (was hurt)</td><td>kasakit (pain)</td><td>makasaeakit (painful; makes one sick)</td></tr>
<tr><td>lipay</td><td>nalipay (is happy)</td><td>kalipay (joy)</td><td>—</td></tr>
<tr><td>ga-oy</td><td>nagaoy (is tired)</td><td>kaga-oy (tiredness)</td><td>—</td></tr>
<tr><td>gutom</td><td>nagutom</td><td>kagutom (hunger)</td><td>—</td></tr>
<tr><td>kueba</td><td>ginakueba-an (seized by fear)</td><td>kueba (fear, nerves)</td><td>makakueueba (fearsome, p. 171)</td></tr></table>
<p>Two more qualifiers from the same pages: <b>tag-</b> = "feel like": <i>Natagtangis ako</i> (p. 128); <b>kina-</b> = "deeply, on and on": <i>kinatueog</i> sleep deeply, <i>kinasakit</i> be gravely ill (p. 129).</p>
<div class="note">Clinical use: your mood screen is a list of statives. <i>Nasubo kamo?</i> Are you sad? <i>Namingaw kamo?</i> Do you feel low and lonely? <i>Nahadlok kamo?</i> Are you afraid? <i>Nagaoy kamo permi?</i> Are you always tired? <i>Naduyog kamo sa adlaw?</i> Sleepy in the day? ◌ Listen for the <b>ka-</b> nouns in replies: <i>kasubo</i>, <i>kahadlok</i>, <i>kasakit</i>.</div>`,
  quiz: [
    ['Which is Zorc\'s sentence for "I\'m hungry"?', ['Gutom ako.', 'Nagutom ako.', 'Magutom ako.', 'Gutomon ako.'], 1, 'Stative verbs use na- + root for the present state (p. 121). Ma- is future or possible.'],
    ['"Natawo" means:', ['got tired', 'was born', 'fell down', 'forgot'], 1, 'tawo is a Class II happening root: Kan-o ikaw natawo? When were you born? (p. 123).'],
    ['"Makasaeakit" is best translated:', ['very sick', 'a sick person', 'painful; makes one sick', 'to hurt someone'], 2, 'maka- plus the -eV- infix makes a "causes …" adjective from a stative root (p. 129).'],
    ['"Natagtangis ako" means:', ['I cried.', 'I am crying loudly.', 'I feel like crying.', 'I made him cry.'], 2, 'tag- on a stative root gives "feel like, might want to" (p. 128).']
  ]
},
{
  id: 'mood', level: 'B1', unit: 'Verbs II', title: 'Can, happened to, and commands: maka-, hi-, and the four imperatives',
  summary: 'Ability and chance in the verb, then commands from gentle to sharp, with the polite forms you will actually use.',
  body: `
<p>Tagalog <i>maka-/naka-</i> (ability) and <i>makapag-</i> have close Aklanon cousins; the shapes are the same, the use is wider (Zorc pp. 66–69).</p>
<h3>Ability and chance</h3>
<table><tr><th>Mood</th><th>Real (done)</th><th>Unreal (not yet)</th><th>Meaning</th></tr>
<tr><td>Simple</td><td>nag-, naga-</td><td>mag-, maga-</td><td>plain action (lesson 8)</td></tr>
<tr><td>Aptative</td><td><b>naka-</b> (naha- in object focus)</td><td><b>maka-</b> (maha-)</td><td>can, could; managed to; also "has …-ed" with <i>eon</i></td></tr>
<tr><td>Accidental</td><td colspan="2"><b>hi-</b></td><td>purely by chance, often with <i>basi</i></td></tr></table>
<table><tr><th>Tagalog</th><th>Aklanon</th><th>English</th><th>Zorc</th></tr>
<tr><td>Marunong ka bang lumangoy?</td><td><b>Makaeangoy ka?</b></td><td>Can you swim?</td><td>p. 67</td></tr>
<tr><td>Nakakain na ba kayo?</td><td><b>Nakakaon eon kamo?</b></td><td>Have you eaten already?</td><td>p. 67</td></tr>
<tr><td>Hindi ko mabubuhat iyan dahil mabigat.</td><td><b>Indi ako makahakwat karon bangod nga mabug-at ron.</b></td><td>I cannot carry that since it is heavy.</td><td>p. 67</td></tr>
<tr><td>Nakasalubong namin si Henry sa palengke.</td><td><b>Nakasubeang kami ni Henry sa tindahan.</b></td><td>We ran into Henry at the market.</td><td>p. 67</td></tr>
<tr><td>Baka makalimutan mo.</td><td><b>Basi hilipat ka.</b></td><td>You might forget.</td><td>p. 123</td></tr></table>
<p>◌ Clinic: <i>Nakatueog kamo kagab-i?</i> Were you able to sleep last night? <i>Makaobra pa kamo?</i> Can you still work? <i>Indi ako makatueog</i> is the patient's "I can't sleep". Note <b>bangod</b> = because (p. 67), beside <i>tungod</i>.</p>
<h3>Commands, from soft to strong (pp. 68–69)</h3>
<table><tr><th>Form</th><th>Strength</th><th>Example</th></tr>
<tr><td>bare root</td><td>simple</td><td><i>Hipos eon.</i> Be quiet now. (p. 69) · <i>Hueat anay.</i> Wait a moment. (p. 202)</td></tr>
<tr><td>-um- (subject <i>ka/kamo</i> must be said)</td><td>common</td><td><i>Uminom ka eagi it tubi.</i> Drink some water now. (p. 122)</td></tr>
<tr><td>mag-</td><td>quite strong</td><td><i>Maghimuning!</i> Be still! (p. 69)</td></tr>
<tr><td>pag- + root</td><td>very strong, never to elders</td><td><i>Paghipos anay kamo tanan.</i> (p. 69)</td></tr>
<tr><td>-a (object), -i (referent), i- (thing)</td><td>focus commands</td><td><i>Daea ron.</i> Bring that. · <i>Taw-i imaw it eukas.</i> Give him a gift. (p. 68) · <i>Sugidi ako.</i> Tell me. ◌</td></tr></table>
<p><b>Polite commands</b> use the subjunctive, usually with <i>anay</i> or first person plural: <i>Mos, mauli eon kita.</i> Come on, let's go home. (p. 69) · <i>Mos, kaon ta.</i> Come on, let's eat. (p. 158). This is your register with patients: <b>Lingkod anay kamo</b>, <b>Mos, mag-istorya kita</b>. ◌</p>
<p><b>Negative commands</b>: <b>indi</b> + mag- form, or <b>ayaw</b> + root (often <i>ayaw it</i> + root): <i>Indi magpanaw it maeayo.</i> Do not go far. (p. 69) · <i>Ayaw magtubako.</i> Don't smoke. · <i>Ayaw it singgit.</i> Don't shout. (p. 196) · <i>Ayaw ninyo ako paghibaygi.</i> Don't you laugh at me. (p. 159)</p>
<div class="note">Dosing instructions are commands. Soft and clear: <i>Imna ro bueong kada aga.</i> Drink the medicine every morning (dictionary example "Imna ro bueong"). <i>Ayaw it inom it alak samtang nagainom it bueong.</i> ◌ Don't drink alcohol while taking the medicine.</div>`,
  quiz: [
    ['"Nakakaon eon kamo?" means:', ['Are you eating?', 'Have you eaten already?', 'Will you eat?', 'Can you cook?'], 1, 'naka- + eon gives English "have …-ed" (p. 67).'],
    ['Which command form should you never use with an elder?', ['bare root', '-um- with ka', 'pag- + root', 'mag-'], 2, 'pag- + root is the very strong imperative, not used to peers or superiors (p. 68).'],
    ['The polite way to say "let\'s go home" in Zorc is:', ['Pag-uli kamo!', 'Mos, mauli eon kita.', 'Umuli ka.', 'Uli!'], 1, 'Polite commands use the subjunctive, here with first person plural (p. 69).'],
    ['"Ayaw it singgit" is:', ['a question', 'a negative command: don\'t shout', 'a wish', 'past tense'], 1, 'ayaw + it + root is one of the two negative command patterns (p. 196).']
  ]
},
{
  id: 'causative', level: 'B1', unit: 'Verbs II', title: 'pa-: feed, remind, send, have the doctor called',
  summary: 'One prefix turns "eat" into "feed" and "come" into "have him come", and gives you every referral and instruction sentence.',
  body: `
<p>Tagalog <i>pa-</i> (<i>pakainin</i>, <i>paalalahanan</i>, <i>ipatawag</i>) exists in Aklanon with the same shape and a freer focus system (Zorc pp. 99–105). The subject becomes a <b>causer</b> who has, lets, or makes someone (the <b>agent</b>) do the action; the agent, when not in focus, takes <b>sa</b>.</p>
<table><tr><th>Root</th><th>pa- form</th><th>Tagalog</th></tr>
<tr><td>kaon (eat)</td><td><b>pakaon</b> (feed)</td><td>pakainin</td></tr>
<tr><td>dumdum (think, remember)</td><td><b>padumdum</b> (remind)</td><td>paalalahanan</td></tr>
<tr><td>kita (see)</td><td><b>pakita</b> (show)</td><td>ipakita</td></tr>
<tr><td>daea (bring)</td><td><b>padaea</b> (send)</td><td>ipadala</td></tr>
<tr><td>kasayod (know)</td><td><b>pasayod</b> (notify)</td><td>ipaalam</td></tr>
<tr><td>hueam (borrow)</td><td><b>pahueam</b> (lend)</td><td>pahiram</td></tr>
<tr><td>obra (make)</td><td><b>paobra</b> (have made)</td><td>ipagawa</td></tr></table>
<p>All from p. 99. Zorc's own sentences:</p>
<table><tr><th>Aklanon</th><th>English</th><th>Zorc</th></tr>
<tr><td><b>Ipatawag mo ro doktor.</b></td><td>Have the doctor called.</td><td>p. 105</td></tr>
<tr><td><b>Paadtuna imaw riya.</b></td><td>Have him come here.</td><td>pp. 102, 105</td></tr>
<tr><td><b>Palingkora ro bisita.</b></td><td>Have the visitor sit down.</td><td>p. 102</td></tr>
<tr><td><b>Ginpalingkod nimo ro bisita?</b></td><td>Did you have the visitor sit down?</td><td>p. 102</td></tr>
<tr><td><b>Si Roney nagpakanta sa anang mga igmanghod.</b></td><td>Roney made his brothers sing.</td><td>p. 102</td></tr>
<tr><td><b>Magapaobra ako it baeay.</b></td><td>I will have a house built.</td><td>p. 99</td></tr></table>
<h3>Focus with pa- (p. 104)</h3>
<p>"Mother had Lito buy candy for Maria": <i>Nagpabakae si Nanay kay Lito it dulsi para kay Maria</i> (causer in focus) · <i>Ginpabakae ni Nanay si Lito it dulsi</i> (agent in focus) · <i>Ginpabakean ni Nanay kay Lito it dulsi si Maria</i> (beneficiary in focus). You only need the first two patterns: <b>nagpa-</b> (I had someone…) and <b>ginpa-</b> (someone was made to…).</p>
<h3>pa- + place = go there (p. 105)</h3>
<p><i>pauli</i> go home, <i>paeapit</i> approach, <i>paeayo</i> withdraw, <i>pabanwa</i> go to town, <i>pabukid</i> go to the hills, <i>paKalibo</i> go to Kalibo: <i>Pauli eon kami.</i> We are going home now.</p>
<div class="note">Referral sentences ◌: <i>Ipadaea ko kamo sa ospital.</i> I will send you to the hospital. <i>Papahuwaya anay imaw.</i> Let him rest first. <i>Pakaona imaw it gamay.</i> Have him eat a little. <i>Ipaadto ninyo imaw sa RHU hin-aga.</i> Have him brought to the RHU tomorrow. Note that <i>pa-</i> says nothing about force: for "forced" Zorc suggests <i>pilit</i> or <i>sugo</i> (p. 99).</div>`,
  quiz: [
    ['"Pakaon" means:', ['eat a lot', 'feed; have someone eat', 'food', 'eat together'], 1, 'pa- before the root makes a causative: the subject has or lets someone else do the action (p. 99).'],
    ['"Ipatawag mo ro doktor" means:', ['Call the doctor yourself.', 'Have the doctor called.', 'The doctor called you.', 'Do not call the doctor.'], 1, 'Zorc p. 105.'],
    ['In "Ginpabakae ni Nanay si Lito it dulsi", who is in focus (marked by si)?', ['the causer, Nanay', 'the agent, Lito', 'the goal, candy', 'the beneficiary'], 1, 'Object focus with pa- stresses the agent (p. 104).'],
    ['"Pauli eon kami" means:', ['We are going home now.', 'We just arrived.', 'Send us home.', 'We live here.'], 0, 'pa- + a place or direction word means "go toward" (p. 105).']
  ]
},
{
  id: 'adjectives', level: 'A2', unit: 'Sentences II', title: 'Adjectives: ma-, a little, very, the most, and comparing',
  summary: 'Degrees and comparison with the same tools as Tagalog (ma-, mas, pinaka-) plus Aklanon\'s own ka- and -ue-.',
  body: `
<p>Most adjectives take <b>ma-</b> as in Tagalog and link to a noun with <b>nga</b> (Zorc pp. 169–175): <i>masakit</i>, <i>masubo</i>, <i>mabug-at</i> heavy, <i>mahapdi</i> painful, <i>mataas</i>, <i>matambok</i> fat, <i>mataeaw</i> cowardly.</p>
<h3>Degree (Zorc's chart, p. 174)</h3>
<table><tr><th>Degree</th><th>maeumo (easy)</th><th>malisod (difficult)</th><th>Tagalog</th></tr>
<tr><td>Diminutive, "slightly"</td><td>maeumo-eumo</td><td>malisod-lisod</td><td>medyo madali</td></tr>
<tr><td>Positive</td><td>maeumo</td><td>malisod</td><td>madali</td></tr>
<tr><td>Relative, "a little more"</td><td>mueamaeumo</td><td>maluelisod</td><td>mas madali nang kaunti</td></tr>
<tr><td>Intensive, "very"</td><td><b>kaeumo</b></td><td><b>kalisod</b></td><td>napakadali</td></tr>
<tr><td>Superlative</td><td>kaeumohan; pinakamaeumo; maeumo gid</td><td>kalisoran; pinakamalisod; malisod gid</td><td>pinakamadali</td></tr>
<tr><td>Negative</td><td>bukon it maeumo</td><td>bukon it malisod</td><td>hindi madali</td></tr></table>
<p>The <b>ka-</b> intensive is the one that will surprise a Tagalog ear: <i>Kasadya ro sine kabi-i.</i> The movie last night was very nice. (p. 173) · <i>Kainit nga panahon daya nga matsa mamatay ako.</i> The weather is so hot that I could die. (p. 179). ◌ So <i>Kasakit!</i> = It hurts so much; <i>Kasubo</i> as an exclamation = how sad.</p>
<h3>Qualifiers (p. 175)</h3>
<table><tr><th>Aklanon</th><th>Meaning</th><th>Example</th></tr>
<tr><td>medyo</td><td>somewhat</td><td><i>Medyo mahae ro anang mga barong.</i> (p. 175)</td></tr>
<tr><td>… gid</td><td>very</td><td><i>Mainit gid do sabaw.</i> (p. 175)</td></tr>
<tr><td>… it duro</td><td>very much</td><td><i>Nasaktan ako it duro.</i> (p. 128)</td></tr>
<tr><td>sobra nga / sobra it</td><td>too</td><td><i>sobra nga masakit</i> ◌</td></tr>
<tr><td>matsa</td><td>it seems</td><td><i>Matsa maeamig ro tyempo makaron.</i> (p. 175)</td></tr>
<tr><td>bukon it</td><td>not</td><td><i>bukon it masakit</i></td></tr></table>
<h3>Comparing (pp. 176–180)</h3>
<ul>
<li>Same: <b>kamana ku</b> / <b>parehas ku</b>: <i>Mataas imaw, kamana man ku anang ama.</i> He is as tall as his father. (p. 177)</li>
<li>More: <b>mas … sa</b>: <i>Mas makusog imaw sa anwang.</i> He is stronger than a carabao. (p. 178). With pronouns and names, <i>sa</i> becomes <i>ku sa imo</i>, <i>kay</i>: <i>Maisot-isot ro akong ayam ku sa imo.</i> (p. 178)</li>
<li>Most of a group: <b>ka-…-an sa tanan</b> or <b>pinaka-</b>: <i>Kaaeaman imaw sa tanan nga anang isigkaklasi.</i> He is the smartest of all his classmates. (p. 180)</li>
</ul>
<h3>Illness adjectives in -an / -on (p. 170)</h3>
<p><i>sip-onan</i> having a cold, <i>biki-an</i> having a goitre, <i>tisikonan</i> having tuberculosis, <i>utokan</i> intelligent, <i>buot-an</i> mature, sensible; and <i>uli-anon</i> senile (p. 171). These are how people describe a chronic condition: "si Tatay hay uli-anon eon". ◌</p>
<div class="note">Severity scale for the interview ◌: <i>gamay lang</i> (a little) · <i>medyo masakit</i> · <i>masakit</i> · <i>masakit gid</i> · <i>kasakit!</i> / <i>sobra nga masakit</i>. And the key comparison: <i>Mas mayad eon kamo, ukon mas maeain?</i> Are you better now, or worse? <i>Parehas lang?</i> The same?</div>`,
  quiz: [
    ['"Kalisod" in Zorc\'s chart means:', ['a little difficult', 'very difficult', 'not difficult', 'difficulty (noun)'], 1, 'ka- + root is the intensive degree, "very" (p. 174).'],
    ['"He is stronger than a carabao" is:', ['Makusog imaw kamana ku anwang.', 'Mas makusog imaw sa anwang.', 'Kakusog imaw it anwang.', 'Pinakamakusog ro anwang.'], 1, 'Scalar comparison: mas + adjective + sa (p. 178).'],
    ['"Medyo mahae" means:', ['very expensive', 'not expensive', 'somewhat expensive', 'the most expensive'], 2, 'medyo = somewhat, an unlinked qualifier (p. 175).'],
    ['"Sip-onan" describes a person who:', ['sneezes loudly', 'has a cold', 'sells handkerchiefs', 'is intelligent'], 1, '-an / -on adjectives mean "having the quality of", often an illness (p. 170).']
  ]
},
{
  id: 'possession', level: 'A2', unit: 'Sentences II', title: 'Whose, which, and where: akon/imo, nga, it, and sa sueod it',
  summary: 'Possession before or after the noun, the linker nga that builds relative clauses, and the relator nouns that make sa precise.',
  body: `
<p>Tagalog says <i>ang anak ko</i> or <i>ang aking anak</i>; Aklanon has the same two orders, and the same two pronoun sets (Zorc pp. 155–160).</p>
<h3>The pronoun table (pp. 157–160)</h3>
<table><tr><th></th><th>Topic (ang)</th><th>Before the noun (aking)</th><th>After the noun (ko)</th><th>sa-form (sa akin)</th></tr>
<tr><td>I</td><td>ako</td><td><b>akon</b> (nga)</td><td><b>nakon</b>, ko</td><td><b>kakon</b></td></tr>
<tr><td>we (excl.)</td><td>kami</td><td>amon</td><td>namon</td><td>kamon</td></tr>
<tr><td>we (incl.)</td><td>kita, ta</td><td>aton</td><td>naton, ta</td><td>katon</td></tr>
<tr><td>you</td><td>ikaw, ka</td><td><b>imo</b> (nga)</td><td><b>nimo</b>, mo</td><td><b>kimo</b></td></tr>
<tr><td>you (pl. / respectful)</td><td>kamo</td><td>inyo</td><td>ninyo</td><td>kinyo</td></tr>
<tr><td>he, she</td><td>imaw</td><td>ana</td><td>nana</td><td>kana</td></tr>
<tr><td>they</td><td>sanda</td><td>anda</td><td>nanda</td><td>kanda</td></tr></table>
<p>Before the noun add <b>nga</b> (shortened to <b>-ng</b> after a vowel): <i>ro akong eawas</i> = <i>ro eawas ko</i>, my body. The enclitics <i>ko, mo, ta, ka</i> must come second in the clause (p. 160): <i>Nano ro imong ginaobra?</i> What are you doing? (p. 159) · <i>Ihatod mo ako sa baeay.</i> Bring me home. (p. 158)</p>
<h3>Possession with nouns and names (p. 155)</h3>
<table><tr><th>Order</th><th>Common noun</th><th>Personal name</th></tr>
<tr><td>before</td><td><i>ro ana ku unga nga haboe</i> (the child's blanket)</td><td><i>ro ay Manong nga asawa</i> (Manong's wife)</td></tr>
<tr><td>after</td><td><i>ro haboe ku unga</i></td><td><i>ro asawa ni Manong</i></td></tr></table>
<p>Both sentences on p. 155: <i>Ro asawa ni Manong masakit.</i> Older brother's wife is sick. After the noun, <b>it</b> marks an indefinite possessor.</p>
<h3>nga as "who / that / which" (p. 156)</h3>
<p><i>Indi dapat maghangae sa tawo nga bag-ong bugtaw.</i> It is not well to joke with a person who just woke up. · <i>ro tawo nga nagasakit</i> the person who is ill ◌ · <i>ro bueong nga ginainom ninyo</i> the medicine that you take ◌.</p>
<h3>Marker choice changes meaning (p. 154)</h3>
<p><i>Naila ako <b>sa</b> imong asawa.</i> I like your wife. · <i>Naila ako <b>it</b> imong asawa.</i> I want your wife. The object marker <i>it</i> makes the thing a goal; <i>sa</i> keeps it a referent. Handle with care.</p>
<h3>Where exactly? Relator nouns + it (p. 156)</h3>
<p><i>sa sueod it baeay</i> inside the house · <i>sa idaeum it</i> under · <i>sa ibabaw it</i> on top of · <i>sa kilid it</i> beside · <i>sa atubang it</i> in front of · <i>sa pihak it</i> on the other side of. ◌ <i>Masakit sa sueod it ueo</i>: pain inside the head.</p>
<div class="note">Family history runs on this lesson ◌: <i>May nagasakit man sa inyong pamilya?</i> Does anyone in your family also get ill? <i>Ro imong tatay, may parehas man nga sakit?</i> Your father, did he have the same illness? <i>Sin-o ro kaimaw ninyo sa baeay?</i> Who lives with you at home?</div>`,
  quiz: [
    ['"My body" with the pronoun before the noun is:', ['ro eawas akon', 'ro akong eawas', 'ro kakon eawas', 'ro eawas nakon nga'], 1, 'akon + nga (-ng after a vowel) + noun (p. 155, 157).'],
    ['"Ro asawa ni Manong masakit" means:', ['Manong is sick.', 'Manong\'s wife is sick.', 'Manong\'s wife is a nurse.', 'Manong married a sick woman.'], 1, 'Postpositive possession with a personal name uses ni (p. 155).'],
    ['Which sentence means "I want your wife" rather than "I like your wife"?', ['Naila ako sa imong asawa.', 'Naila ako it imong asawa.', 'Naila ako kay imong asawa.', 'Naila ako nga imong asawa.'], 1, 'it marks a goal, sa a referent (p. 154).'],
    ['"Inside the house" is:', ['sa baeay sueod', 'sa sueod it baeay', 'sueod nga baeay', 'sa sueod ni baeay'], 1, 'Relator noun + it + noun (p. 156).']
  ]
},
{
  id: 'modal-particles', level: 'B1', unit: 'Sentences II', title: 'Hedges and colour: basi, siguro, kunta, matsa, gali, abi, makon',
  summary: 'The particles that carry doubt, hope, surprise and excuse, with Zorc\'s own Aklanon-to-Pilipino key.',
  body: `
<p>Lesson 9 covered <i>eon, pa, gid, man, lang, anay, kuno, baea</i>. The rest of Zorc's particle chapter (pp. 199–209) is where patients hedge, excuse, quote and doubt; hearing these correctly is half of a good history.</p>
<h3>Zorc's key to Pilipino (p. 209)</h3>
<table><tr><th>Aklanon</th><th>Tagalog</th><th>Meaning</th><th>Zorc</th></tr>
<tr><td><b>abi</b></td><td>kasi</td><td>excuse, giving a reason: <i>Masakit abi ako.</i> (But) I was sick.</td><td>p. 200</td></tr>
<tr><td><b>baea</b></td><td>kaya</td><td>question emphasis: <i>Siin baea imaw?</i> Where in the world is he?</td><td>p. 199</td></tr>
<tr><td><b>kunta</b></td><td>sana</td><td>wish: <i>Tapus eon kunta ro akong obra.</i> I wish my work were finished.</td><td>p. 207</td></tr>
<tr><td><b>kuno</b></td><td>daw / raw</td><td>they say: <i>Hu-o, kuno.</i></td><td>p. 205</td></tr>
<tr><td><b>gali</b></td><td>pala</td><td>surprise, reminded: so it is after all</td><td>p. 204</td></tr>
<tr><td><b>gid</b></td><td>talaga</td><td>really, very</td><td>p. 203</td></tr>
<tr><td><b>giato</b></td><td>yata</td><td>may be, no idea of the outcome</td><td>p. 207</td></tr>
<tr><td><b>eagi</b></td><td>agad</td><td>right away: <i>Mapanaw eagi kita.</i></td><td>p. 202</td></tr>
<tr><td><b>haeos</b></td><td>halos</td><td>almost: <i>Haeos human eon don.</i> It is almost ready.</td><td>p. 203</td></tr>
<tr><td><b>matsa, medyo</b></td><td>tila</td><td>it seems; somewhat: <i>Matsa temprano pa, ano?</i></td><td>p. 207</td></tr>
<tr><td><b>ngani</b></td><td>nga</td><td>indeed; I know: <i>Ta-o ngani.</i> I just don't know.</td><td>p. 204</td></tr>
<tr><td><b>ta-o</b></td><td>aywan / ewan</td><td>I don't know</td><td>p. 206</td></tr>
<tr><td><b>sige</b>, <b>pwede</b></td><td>sige, pwede</td><td>go ahead; can, may (also <i>sarang</i>, <i>mahimo</i>)</td><td>p. 206</td></tr></table>
<h3>Doubt from weak to strong (pp. 206–207)</h3>
<p><b>basi</b> = might, probably not (doubt or warning): <i>Basi mahueog ka.</i> You might fall. · <b>siguro</b> = probably; <b>sigurado</b> = certainly · <b>giato</b> = who knows · <b>sabon</b> = mild uncertainty, in replies. A patient's <i>Basi</i> and <i>Siguro</i> are not the same yes.</p>
<h3>Quoting (pp. 202–203)</h3>
<p><b>kuno</b> it is said · <b>makon</b> I said / I thought: <i>Makon ta nga patay ka eon ting.</i> I thought you were dead. · <b>mana</b> he/she said: <i>Masakit mana imaw.</i> He said he was sick. · <b>maton</b> you should say (polite correction). ◌ Collateral history: <i>Nagahambae kuno imaw nga owa it tawo</i>: he reportedly talks when nobody is there.</p>
<h3>Answer particles (pp. 200–201)</h3>
<p><b>man</b> is in almost every answer (<i>Mayad man.</i> Fine.) · <b>ron</b> a brief direct yes (<i>Hu-o ron.</i>) · <b>gang</b> a reluctant or apologetic reply · <b>rayon</b> consequently, then. <b>Tags</b> at the end: <i>ano?</i> isn't it so? · <i>ha?</i> O.K.? · <i>ho</i> see · <i>ay</i> disappointment (p. 208).</p>
<p>Zorc's nine shades of yes (p. 205): <i>Hu-o.</i> Yes. · <i>Hu-o, abi.</i> But of course. · <i>Hu-o, anay.</i> Yes, but just a minute. · <i>Hu-o, baea?</i> Yes, isn't that right? · <i>Hu-o, kuno.</i> They said yes. · <i>Hu-o, makon.</i> I said yes. · <i>Hu-o, eon.</i> Yes, for the present. · <i>Hu-o, man.</i> Yes again.</p>
<div class="note">Order of enclitics (p. 205): pronoun first (<i>ka, ko, mo</i>), then <i>eon/pa</i>, then <i>man</i>, then <i>lang</i>, then <i>gid</i>, then the rest. Zorc's child stalling for time uses seven in a row: <i>Owa pa eang gid abi anay ngani makon nahuman, ha.</i></div>`,
  quiz: [
    ['"Masakit abi ako" is best rendered:', ['I am very sick.', 'It is said I am sick.', 'But (you see) I was sick.', 'I hope I am not sick.'], 2, 'abi gives an excuse or reason, like Tagalog kasi (p. 200).'],
    ['Which particle corresponds to Tagalog "sana"?', ['kuno', 'kunta', 'gali', 'basi'], 1, 'kunta = wish, hopefully (pp. 207, 209).'],
    ['"Masakit mana imaw" means:', ['He is very sick.', 'He said that he was sick.', 'Maybe he is sick.', 'He is sick again.'], 1, 'mana = he/she said (p. 203).'],
    ['Which expresses the weakest certainty?', ['sigurado', 'siguro', 'basi', 'syempre'], 2, 'basi = might, probably untrue; siguro = probably; sigurado = certainly (pp. 206–207).']
  ]
},
{
  id: 'conjunctions', level: 'B1', unit: 'Sentences II', title: 'Joining ideas: ag, ukon, pero, kon, agod, bisan, samtang, bangod',
  summary: 'Compound questions and conditions, built from Zorc\'s list of conjunctions and his own example sentences.',
  body: `
<p>Tagalog <i>at, o, pero, kung, para, kahit, habang, dahil</i> all have Aklanon partners (Zorc pp. 210–211). <b>Coordinating</b> conjunctions stand between two like elements; <b>subordinating</b> ones start a dependent clause.</p>
<table><tr><th>Tagalog</th><th>Aklanon</th><th>Zorc's example</th></tr>
<tr><td>at</td><td><b>ag</b></td><td><i>Si Pedro ag si Carlos nakatuon sa Manila.</i> (p. 210)</td></tr>
<tr><td>o</td><td><b>ukon</b>, o</td><td><i>Mas mayad eon kamo, ukon mas maeain?</i> ◌</td></tr>
<tr><td>pero, ngunit</td><td><b>pero</b>, apang, ugaling</td><td><i>Naila ako magiba kinyo, pero may akon man nga obra.</i> I would like to go with you, but I have my own work. (p. 210)</td></tr>
<tr><td>ni … ni</td><td><b>indi … kundi</b></td><td><i>Indi si Mario kundi si Perning makasunod kinyo.</i> Neither Mario nor Perning can follow you. (p. 210)</td></tr>
<tr><td>dahil</td><td><b>ay</b>, <b>bangod</b>, tungod sa</td><td><i>Indi ako makahakwat karon bangod nga mabug-at ron.</i> (p. 67)</td></tr>
<tr><td>kung, kapag</td><td><b>kon</b></td><td><i>Hidlawon ako kimo kon hipanaw ka eon.</i> I will miss you if you go away. (p. 122)</td></tr>
<tr><td>para, upang</td><td><b>agod</b></td><td><i>Magobra it mayad agod gumayad ro imong kinabuhi.</i> Work hard so that your life will improve. (p. 211)</td></tr>
<tr><td>kahit</td><td><b>bisan</b>, aber, maskin</td><td><i>Bisan manggaranon imaw, mapainubsanon ag mabuot imaw gihapon.</i> Even if he is rich, he is still humble and kind. (p. 211)</td></tr>
<tr><td>habang</td><td><b>samtang</b></td><td><i>Samtang si David nagasueat, si Beato hay nagabasa.</i> (p. 211)</td></tr>
<tr><td>basta</td><td><b>basta</b></td><td><i>Basta ikaw, masugot ako.</i> So long as it is you, I agree. (p. 211)</td></tr>
<tr><td>kaya</td><td><b>busa</b></td><td><i>Ro mahugod indi paggutomon, busa kita tanan hay magmahugod man.</i> (p. 211)</td></tr>
<tr><td>maliban sa</td><td><b>pwera</b></td><td>—</td></tr></table>
<p>Zorc's most clinical sentence (p. 211): <i><b>Pwede pa nga ikaw magpalugyat, maskin mayad ka eon.</b></i> You might still relapse, even if you feel well now. Keep it for the discharge talk.</p>
<h3>Building history questions ◌</h3>
<ul>
<li><i>Nagsugod raya <b>kon</b> may natabo, <b>ukon</b> owa lang it rason?</i> Did this start when something happened, or for no reason?</li>
<li><i>Nagainom kamo it bueong <b>pero</b> owa gihapon it kaayuhan?</i> You take the medicine but there is still no improvement?</li>
<li><i>Indi kamo makatueog <b>bangod</b> sa kabalaka, <b>ukon bangod</b> sa sakit?</i> Can't you sleep because of worry, or because of pain?</li>
<li><i>Nagahambae imaw <b>samtang</b> owa it tawo?</i> Does he talk while nobody is there?</li>
<li><i>Imna raya kada adlaw <b>agod</b> indi magbalik ro sakit.</i> Take this every day so that the illness does not come back.</li>
<li><i><b>Bisan</b> mayad eon ro pamatyag, ayaw it untat it bueong.</i> Even when you feel well, don't stop the medicine.</li>
</ul>
<div class="note"><b>kon</b> doubles as "whether" after verbs of knowing: <i>Ta-o kon hin-uno imaw mabalik.</i> I don't know when he will return (p. 211). And <b>ay</b> as "because" (p. 67: <i>Makatuon pa ako ay may akon man nga skolarship</i>) is not the Tagalog topic marker <i>ay</i>: Aklanon uses <i>hay</i> for that.</div>`,
  quiz: [
    ['Aklanon for "and" is:', ['at', 'kag', 'ag', 'ug'], 2, 'ag (p. 210). kag is Hiligaynon, ug Cebuano.'],
    ['"Agod" corresponds to Tagalog:', ['kahit', 'para / upang', 'habang', 'dahil'], 1, 'agod = so that (p. 211).'],
    ['"Pwede pa nga ikaw magpalugyat, maskin mayad ka eon" means:', ['You can go now since you are well.', 'You might still relapse even if you feel well now.', 'You must rest even if you feel well.', 'You are well, so no relapse is possible.'], 1, 'Zorc p. 211; maskin = even if.'],
    ['Which word means "because" in "Indi ako makahakwat karon bangod nga mabug-at ron"?', ['karon', 'bangod', 'nga', 'ron'], 1, 'bangod (nga) = because, since (p. 67); tungod sa is also used.']
  ]
},
{
  id: 'adverbs-deictics', level: 'A2', unit: 'Sentences II', title: 'When, how and where: kahapon, hinduna, it mayad, riya/runa/rina/rito',
  summary: 'Time words for the timeline, manner with it, and the four-way place system that mirrors the pronouns.',
  body: `
<p>Adverbs answer when, where, how (Zorc pp. 181–187). They cannot be put in focus. A manner adverb is marked by <b>first position</b> or by <b>it</b>; an adjective is linked with <b>nga</b>:</p>
<p><i>Mayad <b>nga</b> manogobra imaw.</i> He is a good worker. · <i>Nagaobra imaw <b>it</b> mayad.</i> / <i>Mayad imaw nagaobra.</i> He works well. (p. 181)</p>
<h3>Time words (pp. 181, 184)</h3>
<table><tr><th>Tagalog</th><th>Aklanon</th><th>English</th></tr>
<tr><td>kanina</td><td><b>kaina</b></td><td>earlier</td></tr>
<tr><td>kagabi</td><td><b>kabi-i</b></td><td>last night</td></tr>
<tr><td>kahapon</td><td><b>kahapon</b></td><td>yesterday</td></tr>
<tr><td>bukas</td><td><b>hin-aga</b></td><td>tomorrow</td></tr>
<tr><td>mamaya</td><td><b>hinduna</b></td><td>later on</td></tr>
<tr><td>ngayon</td><td><b>makaron</b></td><td>now</td></tr>
<tr><td>araw-araw</td><td><b>adlaw-adlaw</b></td><td>daily</td></tr>
<tr><td>noong unang panahon</td><td><b>kato anay</b></td><td>long ago, back then</td></tr>
<tr><td>maaga / huli</td><td><b>temprano</b> / <b>ulihi</b></td><td>early / late</td></tr>
<tr><td>bihira</td><td><b>taeagsa</b>, imaeaka</td><td>rarely, seldom</td></tr>
<tr><td>sa Lunes / noong Huwebes</td><td><b>sa Lunes</b> / <b>ku Huwebes</b></td><td>on Monday / last Thursday</td></tr>
<tr><td>sa darating na buwan</td><td><b>sa umabot nga buean</b></td><td>in the coming month</td></tr></table>
<p>Note <b>sa</b> for future time and <b>ku</b> for past time with days of the week (p. 184). Zorc: <i>Kahapon imaw nagpanaw.</i> He left yesterday. (p. 182) · <i>Hinduna mabalik ako.</i> I will return later. (p. 182) · <i>Pag-abot nana kahapon, nagaeaba kami sa bubon.</i> When he arrived yesterday, we were washing at the well. (p. 183)</p>
<h3>Manner (p. 184)</h3>
<p><i>mabakas</i> fast · <i>mahinay</i> slowly · <i>madali</i> quickly · <i>maeumo</i> easily · <i>malipay</i> happily · <i>it mayad</i> well · <i>it mahipos</i> quietly · <i>it duro</i> very much · <i>it sangkurot</i> a little. <i>Mahinay magkanta.</i> / <i>Magkanta it mahinay.</i> Sing softly. (pp. 182–183) · <b>tig-</b> + number = at a time: <i>tigdaywa</i> two at a time, <i>tigsangkurot</i> a little at a time (p. 184). ◌ <i>Imna tig-isaea kada aga</i>: take one each morning.</p>
<h3>Place words: four distances (pp. 185–187)</h3>
<table><tr><th>Near</th><th>Basic</th><th>After the verb</th><th>Emphatic (motion)</th><th>Pronoun it matches</th></tr>
<tr><td>me</td><td><b>iya</b></td><td><b>riya</b> / diya</td><td>rikara</td><td>ako, kami</td></tr>
<tr><td>you and me</td><td><b>una</b></td><td><b>runa</b> / duna</td><td>rikaron</td><td>kita</td></tr>
<tr><td>you, far from me</td><td><b>ina</b></td><td><b>rina</b> / dina</td><td>rikana</td><td>ikaw, kamo</td></tr>
<tr><td>neither of us</td><td><b>idto</b></td><td><b>rito</b> / dito</td><td>rikato</td><td>imaw, sanda</td></tr></table>
<p><i>Iya si Carlos?</i> Is Carl here? · <i>Owa riya si Nene.</i> Nene is not here. · <i>Si Henry runa sa baeay.</i> Henry is there at home. · <i>Una kimo ro makinilya?</i> Is the typewriter there with you? (p. 185) · <i>Ma-agi kita dikato.</i> Let's pass that way. (p. 186). Tagalog <i>dito</i> is a false friend: Aklanon <i>dito/rito</i> is <b>far away</b>; here is <i>riya</i>.</p>
<p>Deictics also carry attitude (pp. 186–187): <i>si Marde <b>ngara</b></i> this Marde (approving) vs <i>si Marde <b>ngaron</b></i> / <i>ngato</i> (disapproving, distancing).</p>
<div class="note">Timeline questions ◌: <i>Kan-o nagsugod? Kaina, kabi-i, kahapon, ukon kato anay pa?</i> When did it start? Earlier today, last night, yesterday, or long ago? <i>Adlaw-adlaw raya, ukon taeagsa lang?</i> Every day, or only seldom? <i>Siin masakit, riya?</i> Where does it hurt, here? (pointing)</div>`,
  quiz: [
    ['Aklanon for "tomorrow" is:', ['bukas', 'hin-aga', 'hinduna', 'buwas'], 1, 'hin-aga = tomorrow; hinduna = later on today (p. 184).'],
    ['"Nagaobra imaw it mayad" means:', ['He is a good worker.', 'He works well.', 'He made it well.', 'He is well.'], 1, 'it marks the manner adverb; nga would make mayad an adjective on a noun (p. 181).'],
    ['Aklanon "rito" means:', ['here, near me', 'there, near you', 'there, far from both of us', 'everywhere'], 2, 'The four deictics follow the pronoun orientation; rito matches imaw/sanda, far from both (p. 185).'],
    ['"Ku Huwebes" means:', ['on Thursday (future)', 'last Thursday', 'every Thursday', 'until Thursday'], 1, 'ku marks past time, sa future time, with days of the week (p. 184).']
  ]
},
{
  id: 'word-building', level: 'B1', unit: 'Word building', title: 'Making words: pag-, ka-…-an, ka-…-on, ig-, isigka-, mang-, paea-',
  summary: 'Nine noun affixes from Zorc that let you decode most long words a patient says, and build the clinical nouns you need.',
  body: `
<p>Tagalog speakers already read <i>pag-</i>, <i>ka-…-an</i>, <i>mang-</i> and <i>pala-</i>. Aklanon uses the same machinery (Zorc pp. 135–139), with the <i>e</i> spelling and a few affixes Tagalog lacks.</p>
<table><tr><th>Affix</th><th>Meaning</th><th>Zorc's examples</th><th>Tagalog</th></tr>
<tr><td><b>pag-</b></td><td>the act of (gerund)</td><td>pagkaon food, eating · paghambae speaking · pagdumdum thought · paghigugma love</td><td>pag-</td></tr>
<tr><td><b>pagka-</b></td><td>fixed state</td><td>pagkamatay death · pagkatawo character · pagkabuot goodness</td><td>pagka-</td></tr>
<tr><td><b>panga-</b></td><td>(pang- + ka-)</td><td>pangabuhi life, livelihood · pangabudlay difficulties · pangalipay joy · pangalisod hardship</td><td>pangka-</td></tr>
<tr><td><b>ka-</b></td><td>attained quality; companion</td><td>kasakit pain · kabug-at weight · kabulig helper · kasakay fellow passenger</td><td>ka-</td></tr>
<tr><td><b>ka-…-an</b></td><td>abstract quality; place</td><td>kalipayan happiness · kasubo-an sadness · katapusan end · kapaeayan rice field</td><td>ka-…-an</td></tr>
<tr><td><b>ka-…-anan</b></td><td>collective</td><td>kalisdanan hardships · kapuslanan worth · kabangdanan cause, reason</td><td>—</td></tr>
<tr><td><b>ka-…-on</b></td><td>state of being (matches the statives)</td><td>kagutomon hunger · kaohawon thirst · kamatayon death · katueogon sleep · <b>kahubut-on</b> one's psyche, interior self</td><td>ka-…-an</td></tr>
<tr><td><b>kina-</b></td><td>essence, culmination</td><td>kinabuhi one's whole life · kinahangean one's needs · kinaaeam wisdom · kinatawohan birthday</td><td>—</td></tr>
<tr><td><b>ig-</b></td><td>one relative</td><td>igkampud cousin · igmanghod sibling · igbata relative · igsu-on godbrother</td><td>—</td></tr>
<tr><td><b>mag-</b></td><td>a related pair (with -eV- for 3+)</td><td>magama father and child · magina mother and child · magmanghod siblings · magmaeanghod brothers and sisters</td><td>mag-</td></tr>
<tr><td><b>isigka-</b></td><td>fellow</td><td>isigkatawo fellow man · isigkahilapit neighbour · isigkaklasi classmate</td><td>kapwa</td></tr>
<tr><td><b>kasi(ng)-</b></td><td>same source</td><td>kasimaeay housemate · kasimanwa townmate · kasimaryo barrio-mate · kasingkasing heart, core</td><td>ka-</td></tr>
<tr><td><b>maNV-</b> / <b>manog-</b></td><td>occupation / part-time doer</td><td>mangingisda fisherman · mangunguma farmer · manunuro teacher · manogarado plowman · manoghambae lecturer</td><td>mang-, tagapag-</td></tr>
<tr><td><b>paea-</b></td><td>habitual person</td><td>paeakaon glutton · paeata-o fond of giving · paeaugot easily angered</td><td>pala-</td></tr>
<tr><td><b>paka-</b></td><td></td><td>paka-ayad repair · pakabuot good sense · <b>pakamatay</b> suicide</td><td>—</td></tr>
<tr><td><b>taga-</b> / <b>tag-</b></td><td>origin / owner</td><td>tagabukid from the mountains · tagariya from here · tagbaeay homeowner</td><td>taga-, may-</td></tr></table>
<p>Zorc notes that noun affixes keep the stress inside the root while verb affixes pull it to the end: <i>hampangan</i> playground vs <i>hampangán</i> to play with (p. 135).</p>
<h3>Zorc's sentences using these nouns</h3>
<p><i>Pila kamo magmaeanghod?</i> How many brothers and sisters are you? (p. 194) · <i>Naakig ako sa akong igkampud.</i> (p. 123) · <i>Nakapapati imaw kakon nga may kapuslanan rong kalisdanan.</i> He made me believe that sufferings have value. (p. 67) · <i>Magobra it mayad agod gumayad ro imong kinabuhi.</i> (p. 211) · <i>Kinahangean eagi nimo raya?</i> Do you need this right away? (p. 202)</p>
<div class="note">Clinical nouns you can now build and recognise ◌: <i>pagtueog</i> sleep (the act), <i>katueogon</i> sleepiness, <i>pagkaon</i> appetite/food, <i>kasubo-an</i> sadness, <i>kalipayan</i> happiness, <i>kahadlok</i> fear, <i>kaga-oy</i> fatigue, <i>pangabuhi</i> livelihood, <i>kinabuhi</i> life, <i>kahubut-on</i> the inner self (useful when asking how someone is "inside"), <i>pakamatay</i> suicide (a word to recognise, not to lead with: ask with the suicide section's indirect openers first), <i>igmanghod</i> sibling for the family tree. The sibling question for the genogram: <i>Pila kamo magmaeanghod?</i></div>`,
  quiz: [
    ['"Pila kamo magmaeanghod?" asks:', ['How old are your siblings?', 'How many brothers and sisters are you?', 'How many children do you have?', 'How many live with you?'], 1, 'mag- + -eV- + manghod = a group of siblings (p. 194).'],
    ['"Kamatayon" is:', ['a dead person', 'to kill', 'death (the state)', 'a killer'], 2, 'ka-…-on nouns name states, matching stative roots (p. 138).'],
    ['"Igkampud" means:', ['cousins (the pair)', 'cousin (one relative)', 'nephew', 'in-law'], 1, 'ig- names one specific relative; mag- names the related pair (p. 137).'],
    ['"Paeakaon" describes:', ['a cook', 'food', 'someone fond of eating', 'a dining table'], 2, 'paea- = habitual person, like Tagalog pala- (p. 139).']
  ]
}
];"""
s = s.rstrip()
assert s.endswith('];')
s = s[:-2].rstrip() + L + '\n'
open(P, 'w').write(s)
print('ok')
