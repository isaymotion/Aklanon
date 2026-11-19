#!/usr/bin/env python3
"""Append Vocabulary lessons 7–9 to js/data/lessons.js."""
P = '/home/claude/aklanon/js/data/lessons.js'
s = open(P).read().rstrip()
assert s.endswith('];')
L = r"""
,{
  id: 'vocab-house', level: 'A1', unit: 'Vocabulary', title: 'Words: house, food, town and getting around',
  summary: 'The nouns of daily life from Zorc\'s example sentences and the dictionary: home, meals, the town, weather and transport.',
  body: `
<h3>At home</h3>
<table><tr><th>Aklanon</th><th>English</th><th>Tagalog</th></tr>
<tr><td>baeay</td><td>house</td><td>bahay</td></tr>
<tr><td>dingding</td><td>wall</td><td>dingding</td></tr>
<tr><td>lamesa</td><td>table</td><td>mesa</td></tr>
<tr><td>tahiras</td><td>cot, small bed</td><td>teheras</td></tr>
<tr><td>mahiea</td><td>pillow</td><td>unan</td></tr>
<tr><td>haboe</td><td>blanket</td><td>kumot</td></tr>
<tr><td>pandiho-an, basin</td><td>toilet, toilet bowl</td><td>kubeta, inidoro</td></tr>
<tr><td>yabi</td><td>key</td><td>susi</td></tr>
<tr><td>relo</td><td>watch, clock</td><td>relo</td></tr>
<tr><td>eimbong, pantalon, saya</td><td>shirt or dress, trousers, skirt</td><td>damit, pantalon, palda</td></tr>
<tr><td>hampangan</td><td>toy</td><td>laruan</td></tr>
<tr><td>sanduko</td><td>bolo</td><td>itak</td></tr></table>
<h3>Food and drink</h3>
<table><tr><th>Aklanon</th><th>English</th><th>Tagalog</th></tr>
<tr><td>pagkaon</td><td>food</td><td>pagkain</td></tr>
<tr><td>kan-on, humay</td><td>cooked rice</td><td>kanin</td></tr>
<tr><td>isda</td><td>fish</td><td>isda</td></tr>
<tr><td>karne</td><td>meat</td><td>karne</td></tr>
<tr><td>tinapay</td><td>bread</td><td>tinapay</td></tr>
<tr><td>sabaw</td><td>soup</td><td>sabaw</td></tr>
<tr><td>tubi</td><td>water</td><td>tubig</td></tr>
<tr><td>kape</td><td>coffee</td><td>kape</td></tr>
<tr><td>tuba</td><td>coconut wine</td><td>tuba</td></tr>
<tr><td>pamahaw / ihapon</td><td>breakfast / supper</td><td>almusal / hapunan</td></tr>
<tr><td>eaha</td><td>cook</td><td>luto</td></tr>
<tr><td>kiwa</td><td>slice</td><td>hiwa</td></tr>
<tr><td>matam-is / mapait</td><td>sweet / bitter</td><td>matamis / mapait</td></tr>
<tr><td>mainit / maeamig</td><td>hot / cold</td><td>mainit / malamig</td></tr></table>
<h3>Town, country, weather, travel</h3>
<table><tr><th>Aklanon</th><th>English</th><th>Tagalog</th></tr>
<tr><td>banwa / baryo</td><td>town / village</td><td>bayan / baryo</td></tr>
<tr><td>tindahan</td><td>market, store</td><td>palengke, tindahan</td></tr>
<tr><td>simbahan</td><td>church</td><td>simbahan</td></tr>
<tr><td>eskwela, bueutho-an</td><td>school</td><td>eskwelahan</td></tr>
<tr><td>ospital, klinika, botika</td><td>hospital, clinic, pharmacy</td><td>ospital, klinika, botika</td></tr>
<tr><td>karsada</td><td>road</td><td>kalsada</td></tr>
<tr><td>uma</td><td>farm, field</td><td>bukid</td></tr>
<tr><td>bukid</td><td>mountain</td><td>bundok</td></tr>
<tr><td>suba</td><td>river</td><td>ilog</td></tr>
<tr><td>dagat, baybay</td><td>sea, beach</td><td>dagat, dalampasigan</td></tr>
<tr><td>uean, bagyo, linog</td><td>rain, typhoon, earthquake</td><td>ulan, bagyo, lindol</td></tr>
<tr><td>tyempo, panahon</td><td>weather</td><td>panahon</td></tr>
<tr><td>jeep, motor</td><td>jeepney, motorcycle</td><td>jeep, motor</td></tr>
<tr><td>biyahe</td><td>trip</td><td>biyahe</td></tr>
<tr><td>anwang, ayam</td><td>carabao, dog</td><td>kalabaw, aso</td></tr></table>
<h3>Frames</h3>
<p><i>Ro andang baeay maeapit sa bukid pero maeayo sa banwa.</i> Their house is near the mountain but far from the town. (Z p. 166) · <i>Nakasubeang kami ni Henry sa tindahan.</i> We ran into Henry at the market. (Z p. 67) · <i>Mainit gid do sabaw.</i> The soup is very hot. (Z p. 175) · <i>Matsa maeamig ro tyempo makaron.</i> The weather seems cold now. (Z p. 175) · <i>Nagasimba ako adlaw-adlaw.</i> I go to church every day. (Z p. 62) · <i>Siin kamo nagapuyo? Maeayo sa ospital?</i> Where do you live? Far from the hospital? ◌</p>
<div class="note">Social history in these words ◌: <i>Sin-o ro kaimaw ninyo sa baeay?</i> who is at home; <i>Ano ro inyong pangita, sa uma ukon sa dagat?</i> farming or fishing; <i>Pa-ano kamo nag-abot riya, sa jeep?</i> how did you get here; <i>Nagakaon kamo it tatlo ka beses sa isaea ka adlaw?</i> three meals a day.</div>`,
  quiz: [
    ['"Tindahan" in Aklanon means:', ['a sari-sari store only', 'market, store', 'kitchen', 'school'], 1, 'tindahan = market, store (SR; Z p. 71).'],
    ['Aklanon for "river" is:', ['ilog', 'suba', 'sapa', 'dagat'], 1, 'suba (Z p. 39); dagat = sea.'],
    ['"Haboe" is a:', ['pillow', 'blanket', 'mat', 'bed'], 1, 'haboe = blanket (Z p. 155).'],
    ['"Uma" means:', ['mountain', 'farm, field', 'house', 'market'], 1, 'uma = farm (dictionary; mangunguma = farmer).']
  ]
},
{
  id: 'vocab-verbs', level: 'A2', unit: 'Vocabulary', title: 'Words: the everyday verbs',
  summary: 'Sixty verbs of movement, exchange, speech, work and care, with the Zorc sentence each came from where there is one.',
  body: `
<p>Roots only; lessons 8, 14 and 30 give the affixes. Where Zorc\'s page is cited, the sentence is his.</p>
<h3>Moving</h3>
<table><tr><th>Aklanon</th><th>English</th><th>Tagalog</th></tr>
<tr><td>adto, agto</td><td>go (there)</td><td>punta</td></tr>
<tr><td>abot</td><td>arrive, come</td><td>dating</td></tr>
<tr><td>panaw</td><td>leave, go away</td><td>alis</td></tr>
<tr><td>balik, uli</td><td>return, go home</td><td>balik, uwi</td></tr>
<tr><td>daeagan</td><td>run</td><td>takbo</td></tr>
<tr><td>baktas</td><td>walk, hike</td><td>lakad</td></tr>
<tr><td>sakay</td><td>ride</td><td>sakay</td></tr>
<tr><td>hapit</td><td>drop by</td><td>daan</td></tr>
<tr><td>eapit / eayo</td><td>approach / move away</td><td>lapit / layo</td></tr>
<tr><td>sueod / gwa</td><td>enter / go out</td><td>pasok / labas</td></tr>
<tr><td>lingkod / tindog</td><td>sit / stand</td><td>upo / tayo</td></tr>
<tr><td>eubog, hayang</td><td>lie down, lie on the back</td><td>higa, tihaya</td></tr>
<tr><td>hueog</td><td>fall</td><td>hulog</td></tr>
<tr><td>subeang</td><td>meet, run into</td><td>salubong</td></tr>
<tr><td>eangoy</td><td>swim</td><td>langoy</td></tr>
<tr><td>kueas, pidlos</td><td>flee, escape</td><td>takas</td></tr></table>
<h3>Giving, taking, doing</h3>
<table><tr><th>Aklanon</th><th>English</th><th>Tagalog</th></tr>
<tr><td>tao</td><td>give</td><td>bigay</td></tr>
<tr><td>daea</td><td>bring, carry along</td><td>dala</td></tr>
<tr><td>hatod</td><td>take to, deliver</td><td>hatid</td></tr>
<tr><td>dawat</td><td>hand over, pass</td><td>abot</td></tr>
<tr><td>hakwat</td><td>lift, carry</td><td>buhat</td></tr>
<tr><td>bakae / baligya</td><td>buy / sell</td><td>bili / benta</td></tr>
<tr><td>hueam</td><td>borrow</td><td>hiram</td></tr>
<tr><td>bayad</td><td>pay</td><td>bayad</td></tr>
<tr><td>himo, obra</td><td>do, make, work</td><td>gawa</td></tr>
<tr><td>osoy</td><td>look for</td><td>hanap</td></tr>
<tr><td>hueat</td><td>wait</td><td>hintay</td></tr>
<tr><td>tago, hab-on</td><td>hide, put away</td><td>tago</td></tr>
<tr><td>takaw, takab</td><td>steal</td><td>nakaw</td></tr>
<tr><td>sugod / untat, tapos</td><td>start / stop, finish</td><td>simula / tigil, tapos</td></tr>
<tr><td>eaba, hugas, limpyo</td><td>wash clothes, wash dishes, clean</td><td>laba, hugas, linis</td></tr>
<tr><td>bantay</td><td>watch, guard</td><td>bantay</td></tr>
<tr><td>tatap, dipara, libang</td><td>take care of</td><td>alaga</td></tr></table>
<h3>Speaking and thinking</h3>
<table><tr><th>Aklanon</th><th>English</th><th>Tagalog</th></tr>
<tr><td>hambae</td><td>say, speak</td><td>sabi, salita</td></tr>
<tr><td>sugid</td><td>tell</td><td>sabi, kuwento</td></tr>
<tr><td>istorya, sugilanon</td><td>talk, converse</td><td>kuwentuhan</td></tr>
<tr><td>pangutana / sabat</td><td>ask / answer</td><td>tanong / sagot</td></tr>
<tr><td>pangayo, pangabay</td><td>ask for, request</td><td>hingi, pakiusap</td></tr>
<tr><td>singgit, siyagit</td><td>shout, scream</td><td>sigaw</td></tr>
<tr><td>hutik</td><td>whisper</td><td>bulong</td></tr>
<tr><td>tangis / hibayag</td><td>cry / laugh</td><td>iyak / tawa</td></tr>
<tr><td>bati, pamati</td><td>hear, listen</td><td>dinig, pakinig</td></tr>
<tr><td>kita, tan-aw, eantaw</td><td>see, look at</td><td>kita, tingin</td></tr>
<tr><td>isip, huna-huna, paino-ino</td><td>think</td><td>isip</td></tr>
<tr><td>dumdum / lipat</td><td>remember / forget</td><td>alala / limot</td></tr>
<tr><td>kasayod, maman-an</td><td>know (a fact)</td><td>alam</td></tr>
<tr><td>kilaea</td><td>know (a person)</td><td>kilala</td></tr>
<tr><td>intindi, hangop</td><td>understand</td><td>intindi, unawa</td></tr>
<tr><td>pati, saeig</td><td>believe, trust</td><td>paniwala, tiwala</td></tr>
<tr><td>sugot / balibad</td><td>agree, allow / refuse</td><td>payag / tanggi</td></tr>
<tr><td>hangae</td><td>joke, tease</td><td>biro</td></tr>
<tr><td>mueay, pangisog, isog</td><td>scold</td><td>pagalitan</td></tr></table>
<h3>Frames</h3>
<p><i>Ihatod ro unga sa anang baeay.</i> Bring the child home. (Z p. 73) · <i>Sugiri kami ku natabo.</i> Tell us what happened. (Z p. 73) · <i>Eabhi anay ro akong eambong.</i> Please wash my dress. (Z p. 73) · <i>Sino ro ginaosoy mo?</i> Whom are you looking for? (Z p. 85) · <i>Hueat anay.</i> Wait a moment. (Z p. 202) · <i>Kan-o imaw nag-abot?</i> When did he arrive? (Z p. 193) · <i>Nakakaon eon kamo?</i> Have you eaten? (Z p. 67)</p>
<div class="note">The verbs patients use for function ◌: <i>Makaobra pa kamo? Makapanaw kamo nga owa it kaimaw? Makaeaba, makaeaha kamo?</i> Can you still work, go out alone, do the washing and cooking? These are your ADLs in Aklanon.</div>`,
  quiz: [
    ['Aklanon for "look for, search" is:', ['tan-aw', 'osoy', 'kita', 'bantay'], 1, 'osoy (Z p. 85: Sino ro ginaosoy mo?).'],
    ['"Hatod" means:', ['to buy', 'to take to, deliver, escort', 'to wait', 'to hide'], 1, 'hatod (Z p. 68, 73: Ihatod ro unga sa anang baeay).'],
    ['Which pair is "remember / forget"?', ['dumdum / lipat', 'isip / tanda', 'kilaea / kasayod', 'hueat / hapit'], 0, 'dumdum (SR) and lipat (Z, SR).'],
    ['"Hibayag" means:', ['to cry', 'to laugh', 'to shout', 'to whisper'], 1, 'hibayag = laugh (Z p. 113); tangis = cry.']
  ]
},
{
  id: 'vocab-describing', level: 'A2', unit: 'Vocabulary', title: 'Words: describing people and things',
  summary: 'Opposites, sizes and qualities, and Zorc\'s list of character adjectives, for the mental status and the collateral history.',
  body: `
<h3>Opposites</h3>
<table><tr><th>Aklanon</th><th>English</th><th>Tagalog</th></tr>
<tr><td>mabahoe, bahoe / maisot, gamay</td><td>big / small</td><td>malaki / maliit</td></tr>
<tr><td>mataas / manaba</td><td>tall / short</td><td>mataas / mababa</td></tr>
<tr><td>matambok / maniwang</td><td>fat / thin</td><td>mataba / payat</td></tr>
<tr><td>mabug-at / magaan</td><td>heavy / light</td><td>mabigat / magaan</td></tr>
<tr><td>mainit / maeamig</td><td>hot / cold</td><td>mainit / malamig</td></tr>
<tr><td>bag-o / daan</td><td>new / old (things)</td><td>bago / luma</td></tr>
<tr><td>mahae / barato</td><td>expensive / cheap</td><td>mahal / mura</td></tr>
<tr><td>maeapit / maeayo</td><td>near / far</td><td>malapit / malayo</td></tr>
<tr><td>madasig, mabakas / mahinay</td><td>fast / slow</td><td>mabilis / mabagal</td></tr>
<tr><td>maeumo, madali / malisod, mabudlay</td><td>easy / difficult</td><td>madali / mahirap</td></tr>
<tr><td>mayad / maeain</td><td>good / bad</td><td>mabuti / masama</td></tr>
<tr><td>husto, matuod / saea, puril</td><td>right, true / wrong, a lie</td><td>tama, totoo / mali, kasinungalingan</td></tr>
<tr><td>mabaskog, makusog / maeuya</td><td>strong / weak</td><td>malakas / mahina</td></tr>
<tr><td>mahipos / magahod</td><td>quiet / noisy</td><td>tahimik / maingay</td></tr>
<tr><td>parehas / eain</td><td>same / different</td><td>pareho / iba</td></tr>
<tr><td>abo / sangkiri</td><td>many / few</td><td>marami / kaunti</td></tr>
<tr><td>bisi / owa it obra</td><td>busy / idle</td><td>abala / walang gawa</td></tr></table>
<h3>Character (Zorc pp. 169–171 and the dictionary)</h3>
<table><tr><th>Aklanon</th><th>English</th><th>Tagalog</th></tr>
<tr><td>mabuot, buot-an</td><td>kind, sensible</td><td>mabait</td></tr>
<tr><td>mabinuligon</td><td>helpful</td><td>matulungin</td></tr>
<tr><td>matinahuron</td><td>respectful</td><td>magalang</td></tr>
<tr><td>mahinigugmaon</td><td>loving</td><td>mapagmahal</td></tr>
<tr><td>mapainubsanon, kubos</td><td>humble</td><td>mapagpakumbaba</td></tr>
<tr><td>maamigohon, hirop</td><td>friendly</td><td>palakaibigan</td></tr>
<tr><td>maaeam, utokan, lista</td><td>intelligent</td><td>matalino</td></tr>
<tr><td>maisog</td><td>brave; fierce</td><td>matapang</td></tr>
<tr><td>mataeaw, taslit</td><td>cowardly</td><td>duwag</td></tr>
<tr><td>matamaran, tamad</td><td>lazy</td><td>tamad</td></tr>
<tr><td>maeangas</td><td>naughty, noisy</td><td>malikot</td></tr>
<tr><td>hambog, bug-akon, bugaeon</td><td>boastful, proud</td><td>mayabang</td></tr>
<tr><td>sueopakton, bingkoe</td><td>stubborn</td><td>matigas ang ulo</td></tr>
<tr><td>pikon, buringot</td><td>touchy, moody</td><td>pikon, masungit</td></tr>
<tr><td>mahisa, maimon</td><td>envious, possessive</td><td>mainggitin, seloso</td></tr>
<tr><td>makibaeus</td><td>vengeful</td><td>mapaghiganti</td></tr>
<tr><td>makikwarta</td><td>money-loving</td><td>gahaman sa pera</td></tr>
<tr><td>paeahibayag</td><td>always laughing</td><td>palatawa</td></tr>
<tr><td>palhi, kimi</td><td>shy</td><td>mahiyain</td></tr>
<tr><td>bastos, hunes, sutil</td><td>rude, ill-mannered</td><td>bastos</td></tr>
<tr><td>baso, gaga, gig, loko</td><td>foolish, crazy (insulting)</td><td>gago, loko</td></tr></table>
<h3>Frames</h3>
<p><i>Mas makusog imaw sa anwang.</i> He is stronger than a carabao. (Z p. 178) · <i>Mataas imaw, kamana man ku anang ama.</i> He is as tall as his father. (Z p. 177) · <i>Kabuot ta kana!</i> He is so kind! (Z p. 168) · <i>Bisan manggaranon imaw, mapainubsanon ag mabuot imaw gihapon.</i> Even if he is rich, he is still humble and kind. (Z p. 211) · <i>Ano imaw nga klase it tawo sang-una, bago magsakit?</i> What kind of person was he before, before the illness? ◌</p>
<div class="note">Premorbid personality from the family ◌: <i>Mahipos imaw ukon maeangas? Mabuot ukon pikon? Mahilig sa mga amigo ukon nagaisaea?</i> Quiet or lively? Kind or touchy? Sociable or solitary? Then the change: <i>Nag-eain imaw halin sadto?</i> Did he become different since then?</div>`,
  quiz: [
    ['"Mataeaw" means:', ['tall', 'cowardly', 'fat', 'lazy'], 1, 'mataeaw = cowardly (Z p. 169).'],
    ['Which word means "stubborn"?', ['mabuot', 'sueopakton', 'maeangas', 'palhi'], 1, 'sueopakton (SR), also bingkoe.'],
    ['"Mabinuligon" is built on the root:', ['buot', 'bulig (help)', 'buli', 'bunga'], 1, 'ma- + -in- + bulig + -on = helpful (Z p. 171).'],
    ['The Aklanon pair for "easy / difficult" is:', ['maeumo / malisod', 'mahinay / madasig', 'mayad / maeain', 'maeapit / maeayo'], 0, 'maeumo / malisod (Z p. 174).']
  ]
}
];"""
s = s[:-2].rstrip() + L + '\n'
open(P, 'w').write(s)
print('ok')
