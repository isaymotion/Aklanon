#!/usr/bin/env python3
"""Append the Vocabulary unit (6 lessons) to js/data/lessons.js. Every word is in the app dictionary and source-checked
(Z = Zorc & de la Cruz 1968, printed pages; SR = Salas Reyes et al. 1969). Sentences marked ◌ are the author's."""
P = '/home/claude/aklanon/js/data/lessons.js'
s = open(P).read().rstrip()
assert s.endswith('];')

L = r"""
,{
  id: 'vocab-body', level: 'A1', unit: 'Vocabulary', title: 'Words: the body and its complaints',
  summary: 'Thirty body words and the verbs patients use for symptoms, with the sentence frames to ask where it hurts.',
  body: `
<p>Every word here is in the dictionary with its source. The Tagalog column shows how often Aklanon is Tagalog with <b>l → e</b> (<i>ulo → ueo</i>, <i>buto → tue-an</i> is not one of them) and how often it is a different word.</p>
<h3>Parts</h3>
<table><tr><th>Aklanon</th><th>English</th><th>Tagalog</th></tr>
<tr><td>eawas</td><td>body</td><td>katawan</td></tr>
<tr><td>ueo</td><td>head</td><td>ulo</td></tr>
<tr><td>mata</td><td>eye</td><td>mata</td></tr>
<tr><td>dueonggan</td><td>ear</td><td>tainga</td></tr>
<tr><td>ba-ba</td><td>mouth</td><td>bibig</td></tr>
<tr><td>tutunlan</td><td>throat</td><td>lalamunan</td></tr>
<tr><td>dughan</td><td>chest</td><td>dibdib</td></tr>
<tr><td>tagipuso-on</td><td>heart</td><td>puso</td></tr>
<tr><td>baga</td><td>lungs</td><td>baga</td></tr>
<tr><td>tiyan</td><td>stomach, belly</td><td>tiyan</td></tr>
<tr><td>likod</td><td>back</td><td>likod</td></tr>
<tr><td>abaga</td><td>shoulder</td><td>balikat</td></tr>
<tr><td>alima</td><td>hand</td><td>kamay</td></tr>
<tr><td>siki</td><td>foot</td><td>paa</td></tr>
<tr><td>pia</td><td>thigh</td><td>hita</td></tr>
<tr><td>tue-an</td><td>bone</td><td>buto</td></tr>
<tr><td>panit</td><td>skin</td><td>balat</td></tr>
<tr><td>dugo</td><td>blood</td><td>dugo</td></tr>
<tr><td>utok</td><td>brain</td><td>utak</td></tr></table>
<h3>What the body does</h3>
<table><tr><th>Aklanon</th><th>English</th><th>Tagalog</th></tr>
<tr><td>ginhawa</td><td>breath; to breathe</td><td>hininga</td></tr>
<tr><td>hangos</td><td>out of breath</td><td>hingal</td></tr>
<tr><td>hueas</td><td>sweat</td><td>pawis</td></tr>
<tr><td>kurog</td><td>tremble</td><td>nanginginig</td></tr>
<tr><td>binhod</td><td>numb, tingling (a limb)</td><td>manhid</td></tr>
<tr><td>ubo</td><td>cough</td><td>ubo</td></tr>
<tr><td>sid-ot</td><td>hiccup</td><td>sinok</td></tr>
<tr><td>suka</td><td>vomit</td><td>suka</td></tr>
<tr><td>igit</td><td>diarrhea</td><td>pagtatae</td></tr>
<tr><td>ihit</td><td>urinate</td><td>ihi</td></tr>
<tr><td>tueon</td><td>swallow</td><td>lunok</td></tr>
<tr><td>gutom / hanghang</td><td>hungry / thirsty</td><td>gutom / uhaw</td></tr>
<tr><td>busog</td><td>full after eating</td><td>busog</td></tr>
<tr><td>katueogon</td><td>sleepiness</td><td>antok</td></tr></table>
<h3>Frames</h3>
<p><i>Masakit ro akong ueo.</i> My head hurts. ◌ · <i>Siin masakit?</i> Where does it hurt? ◌ · <i>Mahapdi-an ka sa nina ngara.</i> This cut will cause you pain. (Z p. 128) · <i>Nasaktan ako it duro.</i> I was deeply hurt. (Z p. 128) · <i>Nagutom ako.</i> I'm hungry. (Z p. 121) · <i>Owa ako gagaoy.</i> I'm not tired. (SR) · <i>Mabudlay ako magginhawa.</i> It is hard for me to breathe. ◌</p>
<div class="note">Say <b>tagipuso-on</b> for heart; SR marks <i>kasing-kasing</i> as Hiligaynon. <b>Alima</b> is the Aklanon hand (SR), though Kalibo speakers also say <i>kamot</i>. For "chest pain" use <i>masakit ro dughan</i>; for the panic patient's "pounding heart", <i>madasig ro tagipuso-on</i>.</div>`,
  quiz: [
    ['Aklanon for "ear" is:', ['tainga', 'dueonggan', 'dalunggan', 'talinga'], 1, 'dueonggan (SR); the l of Hiligaynon dalunggan becomes e.'],
    ['"Binhod" describes:', ['a swollen foot', 'a numb, tingling limb', 'a cramp', 'a bruise'], 1, 'binhod ST4 = tingle, be numb, "fall asleep" (SR).'],
    ['"Hangos" means:', ['breath', 'cough', 'out of breath', 'sneeze'], 2, 'hangos = breathless (SR); ginhawa is breath.'],
    ['Which is the Aklanon word for "bone"?', ['buto', 'tue-an', 'tul-an', 'tudlo'], 1, 'tue-an (SR; Hiligaynon tul-an).']
  ]
},
{
  id: 'vocab-feelings', level: 'A2', unit: 'Vocabulary', title: 'Words: feelings and states of mind',
  summary: 'The emotional vocabulary of the interview, from the common roots to the fine shades Zorc\'s dictionary records.',
  body: `
<p>Lesson 13 showed that feelings are stative verbs; this is the word list. Most roots take <b>na-</b> for the state and <b>ka-</b> for the noun.</p>
<h3>Core roots</h3>
<table><tr><th>Aklanon</th><th>English</th><th>Tagalog</th></tr>
<tr><td>subo (masubo, kasubo)</td><td>sad, sadness</td><td>lungkot</td></tr>
<tr><td>lipay (nalipay, kalipay)</td><td>happy, joy</td><td>saya, ligaya</td></tr>
<tr><td>sadya (masadya)</td><td>cheerful, enjoyable</td><td>masaya</td></tr>
<tr><td>hadlok (nahadlok, kahadlok)</td><td>afraid, fear</td><td>takot</td></tr>
<tr><td>kueba (ginakueba-an)</td><td>fear, nerves, trembling</td><td>kaba</td></tr>
<tr><td>akig (naakig, kaakig)</td><td>angry, anger</td><td>galit</td></tr>
<tr><td>huya (nahuya)</td><td>shame, embarrassed</td><td>hiya</td></tr>
<tr><td>mingaw (namingaw)</td><td>lonely, low</td><td>lungkot, pangungulila</td></tr>
<tr><td>hidlaw (nahidlaw)</td><td>missing someone</td><td>nangungulila</td></tr>
<tr><td>gaoy (nagaoy)</td><td>tired</td><td>pagod</td></tr>
<tr><td>ila (naila)</td><td>like, love</td><td>gusto</td></tr>
<tr><td>higugma</td><td>love (romantic, deep)</td><td>pagmamahal</td></tr></table>
<h3>Worry, nerves, mood</h3>
<table><tr><th>Aklanon</th><th>English</th><th>Tagalog</th></tr>
<tr><td>himud-os</td><td>worry about</td><td>mag-alala</td></tr>
<tr><td>konsumido</td><td>worried, miserable</td><td>balisa</td></tr>
<tr><td>hawag</td><td>anxious</td><td>balisa</td></tr>
<tr><td>kuyap</td><td>be nervous, jittery</td><td>kabahan</td></tr>
<tr><td>kueuyapan</td><td>high-strung, hysterical</td><td>—</td></tr>
<tr><td>nirbyos</td><td>extremely nervous; breakdown</td><td>nerbiyos</td></tr>
<tr><td>kigbot (nakigbot)</td><td>startled</td><td>gulat</td></tr>
<tr><td>buringot</td><td>moody, crabby</td><td>masungit</td></tr>
<tr><td>pikon</td><td>touchy, easily angered</td><td>pikon</td></tr>
<tr><td>nangit</td><td>irritated</td><td>inis</td></tr>
<tr><td>tamilay</td><td>weak from low spirits</td><td>—</td></tr>
<tr><td>nam-an</td><td>lose hope, be frustrated</td><td>—</td></tr>
<tr><td>mikot</td><td>feelings hurt</td><td>nasaktan</td></tr>
<tr><td>mas-ot / sentimyento</td><td>hard feelings, ill will</td><td>sama ng loob</td></tr>
<tr><td>himot</td><td>bear a grudge</td><td>sama ng loob</td></tr>
<tr><td>hinuesoe / kaghat</td><td>regret, repent</td><td>pagsisisi</td></tr>
<tr><td>taka / madla</td><td>fed up, sick and tired of</td><td>sawa</td></tr>
<tr><td>kalma / linong</td><td>calm, peaceful</td><td>kalma, payapa</td></tr>
<tr><td>bio</td><td>lively, vivacious</td><td>masigla</td></tr></table>
<h3>Said of a person</h3>
<p><i>mabuot</i> good, meek · <i>mahinukeogon</i> compassionate · <i>mabinaeak-on</i> concerned, helpful · <i>mapainubsanon</i> humble · <i>palhi / kimi</i> shy · <i>taslit</i> cowardly · <i>mahisa / maimon</i> envious, possessive · <i>hambog / bug-akon</i> boastful · <i>sueopakton / bingkoe</i> stubborn · <i>makaeueuoy</i> pitiable.</p>
<h3>Frames</h3>
<p><i>Mauno ro imong pamatyag?</i> How do you feel? (Z p. 194) · <i>Maeain dang pamatyag.</i> I feel bad. (SR) · <i>Ginakueba-an ako.</i> I'm trembling with fear. (SR) · <i>Naakig ako sa akong igkampud.</i> I'm angry with my cousin. (Z p. 123) · <i>Natagtangis ako.</i> I feel like crying. (Z p. 128) · <i>Nasubo kamo makaron?</i> Are you sad now? ◌</p>
<div class="note">Two words that look like Tagalog but are not: <b>baeaka</b> in SR means concern and help, not worry (Kalibo <i>kabalaka</i> is a Hiligaynon import), and <b>kabubut-on</b> is the inner self, Tagalog <i>kalooban</i>: <i>Mauno ro imong kabubut-on?</i> How are you inside? ◌</div>`,
  quiz: [
    ['Which root means "lonely, low in spirits"?', ['subo', 'mingaw', 'akig', 'huya'], 1, 'mingaw / namingaw = lonely, depressed (Z p. 121; SR).'],
    ['"Konsumido" means:', ['consumed; eaten', 'worried, miserable', 'customer', 'tired'], 1, 'SR: konsumido = worried, miserable (a Spanish loan with a shifted sense).'],
    ['The Aklanon equivalent of Tagalog "kalooban" is:', ['kabuhi', 'kabubut-on', 'kalipay', 'kaugot'], 1, 'kabubut-on = heart, interior self, deep inside oneself (SR; Z p. 138).'],
    ['"Hinuesoe" means:', ['to hope', 'to regret, repent', 'to hate', 'to tremble'], 1, 'SR ~p. 211 hinuesoe RV2 = regret, repent.']
  ]
},
{
  id: 'vocab-family', level: 'A1', unit: 'Vocabulary', title: 'Words: family, people and how to address them',
  summary: 'Kin terms, address forms and the people of a town, for the genogram and the collateral history.',
  body: `
<table><tr><th>Aklanon</th><th>English</th><th>Tagalog</th></tr>
<tr><td>pamilya</td><td>family</td><td>pamilya</td></tr>
<tr><td>ginikanan</td><td>parents</td><td>magulang</td></tr>
<tr><td>nanay / Nay</td><td>mother / Mom (address)</td><td>nanay</td></tr>
<tr><td>tatay / Tay</td><td>father / Dad (address)</td><td>tatay</td></tr>
<tr><td>asawa</td><td>spouse (husband or wife)</td><td>asawa</td></tr>
<tr><td>unga</td><td>child; son, daughter</td><td>anak, bata</td></tr>
<tr><td>igmanghod</td><td>sibling</td><td>kapatid</td></tr>
<tr><td>magueang / manghod</td><td>elder / younger sibling</td><td>nakatatanda / bunso</td></tr>
<tr><td>subang</td><td>eldest</td><td>panganay</td></tr>
<tr><td>Manong, Nong / Manang, Nang</td><td>older brother / sister (address, also for any older person)</td><td>kuya / ate</td></tr>
<tr><td>Toto, Nonoy / Inday</td><td>boy / girl (address)</td><td>totoy / neneng</td></tr>
<tr><td>lolo / lola</td><td>grandfather / grandmother</td><td>lolo / lola</td></tr>
<tr><td>tiyo / tiya</td><td>uncle / aunt</td><td>tiyo / tiya</td></tr>
<tr><td>igkampud, primo / prima</td><td>cousin</td><td>pinsan</td></tr>
<tr><td>igbata</td><td>relative</td><td>kamag-anak</td></tr>
<tr><td>panugangan</td><td>parents-in-law</td><td>biyenan</td></tr>
<tr><td>payaw / hipag</td><td>brother- / sister-in-law</td><td>bayaw / hipag</td></tr>
<tr><td>ama-ama</td><td>stepfather</td><td>amain</td></tr>
<tr><td>baeo</td><td>widow, widower</td><td>biyuda, biyudo</td></tr>
<tr><td>soltero / soltera</td><td>single man / woman</td><td>binata / dalaga</td></tr>
<tr><td>kaeasaeon</td><td>engaged</td><td>—</td></tr>
<tr><td>kasae, iras</td><td>wed; wedding</td><td>kasal</td></tr>
<tr><td>palangga</td><td>favourite, cherished one</td><td>paborito</td></tr>
<tr><td>gikop</td><td>dependent, one in your care</td><td>—</td></tr></table>
<h3>People of the town</h3>
<p><i>tawo</i> person · <i>eaki / bayi</i> man / woman · <i>abyan, amigo</i> friend · <i>kaibahan, kaimaw</i> companion · <i>kaingod, kahilapit</i> neighbour · <i>doktor, mediko</i> doctor · <i>nars</i> nurse · <i>pasyente</i> patient · <i>kurandero, albularyo</i> healer · <i>pari</i> priest · <i>pulis</i> police · <i>manogtatap</i> caretaker · <i>mangingisda</i> fisherman · <i>mangunguma</i> farmer · <i>pobre / manggaranon</i> poor / rich · <i>saeanhon</i> alone.</p>
<h3>Frames</h3>
<p><i>Pila kamo magmaeanghod?</i> How many brothers and sisters are you? (Z p. 194) · <i>Ro asawa ni Manong masakit.</i> Manong's wife is sick. (Z p. 155) · <i>Igbata namon imaw.</i> He is our relative. (SR) · <i>Sin-o ro kaimaw ninyo sa baeay?</i> Who lives with you? ◌ · <i>May unga kamo? Pila?</i> Do you have children? How many? ◌ · <i>Puede ko mapangutana ro inyong pamilya?</i> May I ask your family? (section Mania)</p>
<div class="note">Address is the politeness system (lesson 11): <b>Nay / Tay</b> for an older patient, <b>Nong / Nang</b> for one your age or a little older, <b>Toto / Inday</b> for the young. <i>Lolo / Lola</i> only for the clearly elderly, and only warmly.</div>`,
  quiz: [
    ['"Igmanghod" means:', ['cousin', 'sibling', 'nephew', 'in-law'], 1, 'ig- names one relative; igmanghod = brother or sister (Z p. 137; SR).'],
    ['Which word is the general address for an older woman you are not related to?', ['Lola', 'Nang / Manang', 'Inday', 'Tiya'], 1, 'Manang / Nang, the kin title used as a respect marker (lesson 11).'],
    ['"Panugangan" are your:', ['grandchildren', 'parents-in-law', 'godparents', 'neighbours'], 1, 'panugangan = parents-in-law (SR).'],
    ['"Baeo" means:', ['a baby', 'a widow or widower', 'an orphan', 'a bachelor'], 1, 'baeo = widow(er); l > e of Tagalog balo (SR).']
  ]
},
{
  id: 'vocab-time', level: 'A1', unit: 'Vocabulary', title: 'Words: time, frequency and the daily round',
  summary: 'The words that put a history in order: when, how often, how long, and the parts of a normal day.',
  body: `
<h3>When</h3>
<table><tr><th>Aklanon</th><th>English</th><th>Tagalog</th></tr>
<tr><td>makaron</td><td>now</td><td>ngayon</td></tr>
<tr><td>kaina</td><td>earlier today</td><td>kanina</td></tr>
<tr><td>kabii / kabi-i</td><td>last night</td><td>kagabi</td></tr>
<tr><td>kahapon</td><td>yesterday</td><td>kahapon</td></tr>
<tr><td>hin-aga, buwas</td><td>tomorrow</td><td>bukas</td></tr>
<tr><td>hin-isa</td><td>day after tomorrow</td><td>samakalawa</td></tr>
<tr><td>hinduna</td><td>later today</td><td>mamaya</td></tr>
<tr><td>sadto, sang-una</td><td>before, in the past</td><td>noon, dati</td></tr>
<tr><td>kato anay</td><td>long ago</td><td>noong unang panahon</td></tr>
<tr><td>masunod</td><td>next</td><td>susunod</td></tr>
<tr><td>sa umabot nga buean</td><td>in the coming month</td><td>sa susunod na buwan</td></tr></table>
<h3>How often, how long</h3>
<table><tr><th>Aklanon</th><th>English</th><th>Tagalog</th></tr>
<tr><td>permi</td><td>always</td><td>palagi</td></tr>
<tr><td>adlaw-adlaw</td><td>every day</td><td>araw-araw</td></tr>
<tr><td>daeas, sigin</td><td>often</td><td>madalas</td></tr>
<tr><td>gihapon</td><td>usually; still the same</td><td>karaniwan; pa rin</td></tr>
<tr><td>kon amat, kis-a</td><td>sometimes</td><td>minsan</td></tr>
<tr><td>paeangta</td><td>seldom</td><td>bihira</td></tr>
<tr><td>gulpi</td><td>suddenly</td><td>bigla</td></tr>
<tr><td>inanay, hinay-hinay</td><td>gradually, little by little</td><td>unti-unti</td></tr>
<tr><td>mabuhay / kabuhay</td><td>a long time / duration</td><td>matagal / tagal</td></tr>
<tr><td>matag-od</td><td>short (time)</td><td>maikli, sandali</td></tr>
<tr><td>tado</td><td>continual</td><td>tuloy-tuloy</td></tr>
<tr><td>ulihi</td><td>late</td><td>huli</td></tr></table>
<h3>Units and the day</h3>
<p><i>minuto</i> · <i>oras</i> hour · <i>adlaw</i> day · <i>semana, dominggo</i> week · <i>buean</i> month · <i>dag-on</i> year · <i>kinatawohan</i> birthday · <i>pitsa</i> date. The day: <i>aga-aga</i> dawn · <i>aga</i> morning · <i>udto</i> noon · <i>hapon</i> afternoon · <i>gabii</i> night · <i>nagob</i> midnight. Meals: <i>pamahaw</i> breakfast · <i>ihapon</i> supper. Routine verbs: <i>bugtaw, pikaw</i> wake · <i>bangon</i> get up · <i>paligos</i> bathe · <i>kaon, inom</i> · <i>obra, trabaho</i> work · <i>pahuway</i> rest · <i>tueog</i> sleep · <i>puka</i> stay up late.</p>
<h3>Frames</h3>
<p><i>Kahapon imaw nagpanaw.</i> He left yesterday. (Z p. 182) · <i>Hinduna mabalik ako.</i> I'll be back later. (Z p. 182) · <i>Permi ako nagakaon it humay.</i> I always eat rice. (SR) · <i>Pila kabuhay eon?</i> How long has it been? ◌ · <i>Kan-o nagsugod?</i> When did it start? ◌ · <i>Anong oras kamo nagatueog ag nagabugtaw?</i> What time do you sleep and wake? ◌</p>
<div class="note">For a timeline, offer anchors the patient can pick: <i>kaina, kabii, kahapon, isaea ka semana, isaea ka buean, kato anay</i>. For frequency use the scale <i>permi · daeas · kon amat · paeangta · owa gid</i>.</div>`,
  quiz: [
    ['Aklanon for "sometimes" attested in SR is:', ['kun kaisa', 'kon amat', 'minsan', 'talagsa'], 1, 'kon amat (SR ~p. 142); kis-a also appears. talagsa is Hiligaynon; SR gives paeangta for seldom.'],
    ['"Hinduna" means:', ['tomorrow', 'later today', 'yesterday', 'long ago'], 1, 'hinduna = later on (Z p. 184); hin-aga = tomorrow.'],
    ['"Mabuhay" in Aklanon most often means:', ['long live!', 'alive', 'long-lasting, taking a long time', 'early'], 2, 'buhay = last a long time (SR ~p. 105); Tagalog mabuhay is a false friend.'],
    ['Which is the Aklanon word for "often"?', ['madalas', 'daeas', 'pirme', 'gihapon'], 1, 'daeas (SR); permi = always; gihapon = usually.']
  ]
},
{
  id: 'vocab-illness', level: 'A2', unit: 'Vocabulary', title: 'Words: illness, medicine, healers and the unseen',
  summary: 'Symptom verbs, the course of an illness, treatment words, and the folk vocabulary patients and families will use.',
  body: `
<h3>Being ill</h3>
<table><tr><th>Aklanon</th><th>English</th><th>Tagalog</th></tr>
<tr><td>sakit / masakit</td><td>illness, pain / sick, painful</td><td>sakit / masakit</td></tr>
<tr><td>angoe</td><td>afflicted with an illness</td><td>—</td></tr>
<tr><td>eagnat, eignat</td><td>fever</td><td>lagnat</td></tr>
<tr><td>maeangaang</td><td>developing a fever</td><td>nilalagnat</td></tr>
<tr><td>sip-on, sip-onon</td><td>a cold, having a cold</td><td>sipon</td></tr>
<tr><td>hageok</td><td>wheeze</td><td>hingal</td></tr>
<tr><td>hilo, lipong, mabuyog</td><td>dizzy, faint</td><td>hilo</td></tr>
<tr><td>ayo, atipiyong</td><td>faint, feel faint</td><td>himatay</td></tr>
<tr><td>paeapo, hilab</td><td>stomach ache, upset stomach</td><td>sakit ng tiyan</td></tr>
<tr><td>bagi, haeok, paga</td><td>swell, swollen</td><td>maga</td></tr>
<tr><td>nina</td><td>wound</td><td>sugat</td></tr>
<tr><td>eabed, paakeos</td><td>bruise, abrasion</td><td>pasa, galos</td></tr>
<tr><td>piling</td><td>cramps</td><td>pulikat</td></tr>
<tr><td>eadway</td><td>froth at the mouth</td><td>laway</td></tr>
<tr><td>eigot-eogot, pagot</td><td>grind the teeth</td><td>ngalit</td></tr>
<tr><td>niwang</td><td>lose weight</td><td>pumayat</td></tr>
<tr><td>mabdos</td><td>pregnant</td><td>buntis</td></tr>
<tr><td>bughat, dikeong</td><td>relapse</td><td>binat</td></tr>
<tr><td>eain, eiot</td><td>get worse</td><td>lumala</td></tr>
<tr><td>ayad, mayad-ayad</td><td>get well, a little better</td><td>gumaling, medyo mabuti</td></tr>
<tr><td>timsog</td><td>get stronger, healthy</td><td>lumakas</td></tr>
<tr><td>uli-anon, ut-i</td><td>senile</td><td>ulyanin</td></tr>
<tr><td>himamatyon, hagoeng</td><td>dying, in death throes</td><td>naghihingalo</td></tr>
<tr><td>matay / patay</td><td>die / dead</td><td>mamatay / patay</td></tr>
<tr><td>hanabo, aksidente</td><td>accident</td><td>aksidente</td></tr></table>
<h3>Treatment</h3>
<p><i>bueong</i> medicine · <i>tomar, inom</i> take (medicine) · <i>reseta</i> prescription · <i>botika</i> pharmacy · <i>botilya</i> medicine bottle · <i>rimedyo</i> remedy · <i>hilot, pisoe</i> massage · <i>tapue</i> herbal poultice · <i>pirga</i> purgative · <i>tandok</i> horn-suction cure · <i>ospital, klinika</i> · <i>doktor, nars, kurandero</i>.</p>
<h3>The unseen</h3>
<p><i>aswang, wakwak</i> · <i>kulam, manogbarang</i> sorcery, sorcerer · <i>mueto</i> ghost · <i>ingkanto, maligno</i> spirits · <i>gaba</i> divine punishment · <i>maldisyon</i> curse · <i>bangungot</i> fatal nightmare · <i>pasma</i> · <i>anting-anting</i> amulet · <i>kataeigman</i> premonition · <i>swerte / boesit</i> luck / bad luck · <i>pangadyi-on</i> prayer.</p>
<h3>Frames</h3>
<p><i>Imna ro bueong.</i> Drink the medicine. (SR) · <i>Tueogi ring problema.</i> Sleep off your problem. (SR) · <i>Pwede pa nga ikaw magpalugyat, maskin mayad ka eon.</i> You might still relapse even if you feel well now. (Z p. 211) · <i>May ginhimo kinyo nga kulam, kuno?</i> They say someone put a hex on you? ◌ · <i>Nagpa-kurandero kamo eon?</i> Have you already been to a healer? ◌</p>
<div class="note">Ask the explanatory model without arguing: <i>Ano sa inyong huna-huna ro rason it sakit?</i> What do you think is the cause? ◌ Most families have tried the <i>kurandero</i> first; <i>tandok</i>, <i>tapue</i> and prayer are not obstacles to treatment and should be in the note.</div>`,
  quiz: [
    ['Aklanon for "medicine" is:', ['tambae', 'bueong', 'gamot', 'bulong'], 1, 'bueong (SR ~p. 103); tambae in SR is only a coagulant, tambal is Hiligaynon.'],
    ['"Bughat" refers to:', ['a fever', 'a relapse, often after childbirth', 'a sprain', 'a rash'], 1, 'SR: bughat ST2 = relapse, get sick again.'],
    ['"Himamatyon" describes someone who is:', ['sleepy', 'recovering', 'about to die', 'pregnant'], 2, 'himamatyon = about to die, at the point of death (SR).'],
    ['"Tandok" is:', ['a prayer', 'an amulet', 'a horn-suction folk cure', 'a purgative'], 2, 'tandok = folk cure by sucking the sick area through a horn (SR).']
  ]
},
{
  id: 'vocab-life', level: 'A2', unit: 'Vocabulary', title: 'Words: drink, money, work and trouble',
  summary: 'The social-history vocabulary: substances, livelihood, debt, fights, the law, and what people do to each other.',
  body: `
<h3>Substances</h3>
<table><tr><th>Aklanon</th><th>English</th><th>Tagalog</th></tr>
<tr><td>tuba, tuba-an</td><td>coconut wine, tuba stand</td><td>tuba</td></tr>
<tr><td>alak, alkuhol</td><td>liquor, alcohol</td><td>alak</td></tr>
<tr><td>hilong, paeahilong</td><td>drunk, drunkard</td><td>lasing, lasenggo</td></tr>
<tr><td>makahilong</td><td>intoxicating</td><td>nakakalasing</td></tr>
<tr><td>pasuebo</td><td>drink for a hangover</td><td>—</td></tr>
<tr><td>sigarilyo, abano</td><td>cigarette, cigar</td><td>sigarilyo, tabako</td></tr>
<tr><td>mama, binga, apog</td><td>betel chew, nut, lime</td><td>nganga</td></tr>
<tr><td>droga, apyan</td><td>drugs, opium</td><td>droga</td></tr>
<tr><td>sugae, sugal</td><td>gamble</td><td>sugal</td></tr>
<tr><td>anad (naanad)</td><td>be used to</td><td>sanay</td></tr></table>
<h3>Money and work</h3>
<table><tr><th>Aklanon</th><th>English</th><th>Tagalog</th></tr>
<tr><td>kwarta</td><td>money</td><td>pera</td></tr>
<tr><td>obra, trabaho, pangita</td><td>work, livelihood</td><td>trabaho, hanapbuhay</td></tr>
<tr><td>pangabuhi</td><td>life, livelihood</td><td>kabuhayan</td></tr>
<tr><td>sweldo</td><td>salary</td><td>sweldo</td></tr>
<tr><td>gasto</td><td>expenses</td><td>gastos</td></tr>
<tr><td>haega</td><td>price</td><td>halaga</td></tr>
<tr><td>renta</td><td>rent</td><td>renta</td></tr>
<tr><td>kueang</td><td>run short, lack</td><td>kulang</td></tr>
<tr><td>pobre / manggaranon, kwartahan</td><td>poor / rich</td><td>mahirap / mayaman</td></tr>
<tr><td>obligasyon</td><td>obligation</td><td>obligasyon</td></tr>
<tr><td>uma, mangunguma</td><td>farm, farmer</td><td>bukid, magsasaka</td></tr></table>
<h3>Trouble</h3>
<p><i>away, gang, disgusto</i> fight, quarrel · <i>bunae, hampak, bire, sueop</i> beat, hit, punch · <i>sampae</i> slap · <i>pahog</i> threaten · <i>abuso</i> abuse · <i>supeot</i> bully · <i>binggaroe</i> a bully · <i>libak, yibit</i> slander · <i>takab</i> steal · <i>lilong, dinaya</i> lie, deceit · <i>baeos</i> revenge · <i>pulis</i> police · <i>preso, presohan</i> jail · <i>kastigo, silat</i> punish · <i>problema</i> · <i>saea</i> fault · <i>hanabo</i> accident · <i>peligro</i> danger · <i>dangop</i> seek help · <i>ligtas, kueas</i> escape, flee.</p>
<h3>Frames</h3>
<p><i>Naanad eon ako magsigarilyo.</i> I'm already used to smoking. (Z p. 17) · <i>Nag-away kami ku akon asawa tungod sa inom.</i> My spouse and I fought because of the drinking. (section Substances) · <i>Ano ro inyong pangita?</i> What is your livelihood? ◌ · <i>May utang kamo?</i> Do you have debts? ◌ · <i>Nagdaea it problema ro inom?</i> Has drinking caused trouble? (section Substances)</p>
<div class="note">Remember <b>baso</b> = foolish, not glass: count drinks in <i>bote</i> or <i>tagayan</i>. And <b>delikado</b> = fragile or touchy; danger is <i>peligro</i>.</div>`,
  quiz: [
    ['"Paeahilong" is:', ['a hangover', 'a drunkard', 'a bar', 'a strong drink'], 1, 'paea- (habitual person) + hilong (drunk) (SR ~p. 213).'],
    ['"Pangita" in Aklanon means:', ['a search', 'livelihood, job', 'a vision', 'a market'], 1, 'pangita = job, occupation, livelihood (SR; syn. pangabuhi-an).'],
    ['Which word means "to threaten"?', ['pahog', 'hampak', 'supeot', 'takab'], 0, 'pahog = threaten, scare (SR ~p. 291); hampak = beat, supeot = bully, takab = steal.'],
    ['Why not say "baso" for a glass of tuba?', ['It is Tagalog only', 'In Aklanon baso means foolish', 'It means bottle', 'It is vulgar'], 1, 'SR: baso = foolish, silly, crazy; use bote or tagayan.']
  ]
}
];"""
s = s[:-2].rstrip() + L + '\n'
open(P, 'w').write(s)
print('ok')
