/* Dictionary part 1: core and clinical words.
   Format per line: aklanon | english | part of speech | category | root (optional) | note (optional) | tagalog (optional)
   Empty optional columns are written as ||. To add words, append lines in the same format.
   Sources: Z = attested in Zorc & de la Cruz 1968 (grammar); SR ~p. N = attested in Salas Reyes, Zorc & Prado 1969, A Study of the Aklanon
   Dialect, vol. 2 Dictionary (ERIC ED145704), page approximate (PDF page minus 4), verified 2026-11-19 from a 300-dpi Tesseract OCR.
   Entries whose note says "is Hiligaynon" are common in Kalibo speech but marked [Hil] or absent in SR; the attested Aklanon word is given.
   Unmarked entries are the author's draft from general Western Bisayan knowledge. ALL entries await native-speaker review.
   Spelling: "e" before a vowel is the Aklanon velar sound (bueak, baeay). */
window.DICT_RAW = window.DICT_RAW || [];
window.DICT_RAW.push(`
huo|yes|interj|basics||Z. SR ~p. 221 (used more narrowly than English yes).|oo
indi|no; not (future, habitual); won't|adv|basics||Z. Negates future and unreal actions and is the plain answer "no".|hindi
owa|none; there is no; did not|adv|basics||Z (owa'). Negates existence and completed actions: Owa ako it kwarta.|wala
ayaw|don't (prohibitive)|adv|basics||Z. Not "doesn't want" as in Tagalog.|huwag
bukon|not (before a noun or adjective)|adv|basics||Z (bukon it). Bukon it doktor imaw.|hindi
siguro|maybe; perhaps|adv|basics|||siguro
saeamat|thank you|interj|basics||SR ~p. 327 (saeamat; pasaeamat = to thank). l > e between vowels; not salamat.|salamat
saeamat gid|thank you very much|phr|basics|saeamat|Z also abo' nga saeamat = many thanks.|maraming salamat
owa it anuman|you're welcome|phr|basics|||walang anuman
pasensya|patience; sorry, bear with me|n|basics||Z.|pasensya
palihog|please (request)|adv|basics|||paki-
anay|first; please; for a moment|part|basics||Z. Lingkod anay kamo. Softens commands.|muna
sige|okay; go ahead|interj|basics||Z (Sige lang).|sige
kamusta|how are you; how is|phr|basics||Z (kamusta).|kumusta
mayad|good; well; fine|adj|basics||Z (mayad nga hapon). Also maayad.|mabuti
mayad-ayad nga aga|good morning (warm greeting)|phr|basics|mayad||magandang umaga
mayad nga aga|good morning|phr|basics|mayad|Z pattern.|magandang umaga
mayad nga hapon|good afternoon|phr|basics|mayad|Z p. 205.|magandang hapon
mayad nga gabii|good evening|phr|basics|mayad||magandang gabi
dayon|come in; stay|v|basics||Z (dayon: dwell, stay). Dayon kamo.|tuloy
adyos|goodbye (long parting)|interj|basics||Z (adios/adyos).|paalam
ro|the (topic marker, common noun)|part|grammar||Z. Also heard do.|ang
ku|of; by (definite non-topic marker)|part|grammar||Z. Spelled ku to differ from ko.|ng
it|a; some (indefinite object marker); of|part|grammar||Z.|ng
sa|to; at; in; for|part|grammar||Z.|sa
si|topic marker, person's name|part|grammar||Z.|si
ni|of (person's name)|part|grammar||Z.|ni
kay|to; for (person's name)|part|grammar||Z.|kay
sanday|X and companions (plural si)|part|grammar||Z.|sina
nga|linker|part|grammar||Z. Contracts to -ng after a vowel.|na / -ng
mga|plural marker|part|grammar||Z.|mga
ka|counter linker after numbers|part|grammar||Z. tatlo ka adlaw.|-ng
may|there is; have|part|grammar||Z.|may
hay|inversion marker (topic, then predicate)|part|grammar||Z pp. 151-152.|ay
ag|and|conj|grammar||Z.|at
ukon|or|conj|grammar||Z.|o
pero|but|conj|grammar||Z.|pero
kon|if; when|conj|grammar||Z (kon). Also kung.|kung
bangod|because|conj|grammar||Z (uncertain spelling).|dahil
agod|so that|conj|grammar||SR ~p. 47.|para
samtang|while|conj|grammar||Z.|habang
bisan|even though; even|conj|grammar||Z.|kahit
ako|I|pron|grammar||Z.|ako
ikaw|you (singular)|pron|grammar||Z. Short form ka.|ikaw
imaw|he; she|pron|grammar||Z.|siya
kita|we (you and I)|pron|grammar||Z. Short form ta.|tayo
kami|we (not you)|pron|grammar||Z.|kami
kamo|you (plural; respectful to one person)|pron|grammar||Z.|kayo
sanda|they|pron|grammar||Z.|sila
ko|my; by me|pron|grammar||Z.|ko
mo|your; by you|pron|grammar||Z.|mo
na|his; her; by him or her|pron|grammar||Z. Not Tagalog na (= eon).|niya
naton|our (inclusive)|pron|grammar||Z.|natin
namon|our (exclusive)|pron|grammar||Z.|namin
ninyo|your (plural; respectful)|pron|grammar||Z.|ninyo
nanda|their|pron|grammar||Z.|nila
akon|my; mine (before noun)|pron|grammar||Z.|akin
imo|your; yours (before noun)|pron|grammar||Z.|iyo
ana|his; hers (before noun)|pron|grammar||Z.|kanya
aton|our; ours (inclusive)|pron|grammar||Z.|atin
amon|our; ours (exclusive)|pron|grammar||Z.|amin
inyo|your; yours (plural)|pron|grammar||Z.|inyo
anda|their; theirs|pron|grammar||Z.|kanila
kakon|to me; for me|pron|grammar||Reconstructed from Zorc's k- pattern.|sa akin
kimo|to you; for you|pron|grammar||Z.|sa iyo
kana|to him; to her|pron|grammar||Z.|sa kanya
kinyo|to you (plural; respectful)|pron|grammar||Z.|sa inyo
kanda|to them|pron|grammar||Z.|sa kanila
raya|this|pron|grammar||Z. Short form ra.|ito
ruyon|that (near both)|pron|grammar||Z. Short form ron.|iyan
rana|that (near you)|pron|grammar||Z (ran(h)a').|iyan
rato|that (far)|pron|grammar||Z. Short form to.|iyon
riya|here|adv|grammar||Z. Not Tagalog "dito"-sounding rito.|dito
rito|there (far)|adv|grammar||Z. False friend: means doon.|doon
ano|what|pron|questions||Z. Also nano.|ano
sin-o|who|pron|questions||Z.|sino
siin|where|pron|questions||Z.|saan
kan-o|when (past)|pron|questions||Z.|kailan
hin-uno|when (future)|pron|questions||Z dictionary.|kailan
pila|how many; how much|pron|questions||Z.|ilan; magkano
ham-at|why|pron|questions||Z (also ham-an).|bakit
paano|how|pron|questions||Z (paano / paalin).|paano
mauno|how is; how was|pron|questions||Z.|kumusta
alin|which|pron|questions|||alin
baea|really? (question emphasis)|part|grammar||Z.|ba
eon|now; already|part|grammar||Z. Also ron. Excludes pa.|na
pa|still; yet; more|part|grammar||Z.|pa
gid|really; very; indeed|part|grammar||Z.|talaga
man|also; too|part|grammar||Z. Not Tagalog man.|din / rin
lang|just; only|part|grammar||Z. Also eang.|lang
kuno|they say; reportedly|part|grammar||Z.|daw / raw
abi|because, you see|part|grammar||Z.|kasi
ngani|indeed; I know|part|grammar||Z.|nga
eagi|at once; right away|part|grammar||Z.|agad
haeos|almost|adv|grammar||Z.|halos
makaron|now; today; at this time|adv|time||Z (mga alas tres makaron); SR ~p. 250.|ngayon
kahapon|yesterday|adv|time||Z.|kahapon
kabii|last night|adv|time||Z.|kagabi
buwas|tomorrow|adv|time||Draft; also "sa aga".|bukas
aga|morning|n|time||Z (agahon).|umaga
udto|noon|n|time|||tanghali
hapon|afternoon|n|time||Z.|hapon
gabii|night; evening|n|time||SR ~p. 189.|gabi
adlaw|day; sun|n|time||Z.|araw
semana|week|n|time||Z (sa masunod nga semana).|linggo
buean|month; moon|n|time||Z.|buwan
dag-on|year|n|time||Z.|taon
oras|hour; time|n|time||Z.|oras
adlaw-adlaw|every day|adv|time|adlaw||araw-araw
permi|always|adv|time||SR ~p. 16, 24 (Permi ako nagakaon it humay). Spelled permi, not pirme.|palagi
kon amat|sometimes; from time to time|adv|time||SR ~p. 142 (idm). SR gives kon kis-a as non-Aklanon with Akl: kon amat.|minsan
paeangta|seldom; rarely; every now and then|adv|time||SR ~p. 289 (paeangta'). talagsa is Hiligaynon.|bihira
sadto|before; back then|adv|time|||noon
masunod|next; following|adj|time||Z.|susunod
isaea|one|num|numbers||Z also sambato.|isa
daywa|two|num|numbers||Z.|dalawa
tatlo|three|num|numbers||Z.|tatlo
ap-at|four|num|numbers||Z.|apat
lima|five|num|numbers||Z.|lima
an-om|six|num|numbers||SR ~p. 57.|anim
pito|seven|num|numbers|||pito
waeo|eight|num|numbers||SR ~p. 391.|walo
siyam|nine|num|numbers|||siyam
pueo|ten|num|numbers||Also napueo.|sampu
gatos|hundred|num|numbers||Z.|daan
tawo|person; people|n|people||Z.|tao
eaki|man; male|n|people||SR ~p. 173 (alt. eaeaki).|lalaki
bayi|woman; female|n|people|||babae
unga|child|n|people||Z (unga').|bata; anak
asawa|spouse; husband or wife|n|family||Z; SR ~p. 12 (mag-asawa = be married). bana = husband in Kalibo speech.|asawa
nanay|mother|n|family||Z (nay, ina). Title Nay.|nanay
tatay|father|n|family||Z. Title Tay.|tatay
manong|older brother; older man (title Nong)|n|family|||kuya
manang|older sister; older woman (title Nang)|n|family|||ate
lolo|grandfather|n|family|||lolo
lola|grandmother|n|family|||lola
toto|boy; young man (address)|n|family||SR ~p. 388 (toto', common address for a boy).|totoy
inday|girl; young woman (address)|n|family|||neneng
pamilya|family|n|family|||pamilya
amigo|friend (male)|n|people||Z.|kaibigan
amiga|friend (female)|n|people|||kaibigan
kaibahan|companion; someone one lives or goes with|n|people|iba|SR ~p. 224; Z p. 16 (from iba = go together). Attested where kaimaw is not.|kasama
kaingod|neighbour|n|people||SR ~p. 121 (alt. kahilapit).|kapitbahay
doktor|doctor|n|people|||doktor
nars|nurse|n|people||SR ~p. 268 [Eng].|nurse
pasyente|patient|n|people|||pasyente
albularyo|folk healer|n|people||Not in SR, which uses herbolario in glosses and lists kurandero/kurandera (~p. 146) = healer.|albularyo
pulis|police|n|people|||pulis
pari|priest|n|people||Z (pari').|pari
baeay|house; home|n|daily||SR ~p. 74.|bahay
ospital|hospital|n|daily||SR ~p. 222 (hospital [Sp]).|ospital
klinika|clinic|n|daily|||klinika
trabaho|work; job|n|daily|||trabaho
obra|work; make|n|daily||Z.|gawa
kwarta|money|n|daily|||pera
eskwela|schooling; student|n|daily||SR ~p. 234 glosses eskwela (alt. of eskuyla) as student; Kalibo nagaeskwela = goes to school. The school building is eskwelahan.|eskwela
banwa|town|n|daily||Z.|bayan
baryo|village|n|daily||SR ~p. 77.|baryo
dagat|sea|n|daily||Z.|dagat
uma|farm; field|n|daily|||bukid
baybay|beach|n|daily||Z.|dalampasigan
tubi|water|n|daily|||tubig
kan-on|cooked rice|n|daily||SR ~p. 126 (rice; staple food).|kanin
pagkaon|food|n|daily|kaon|Z.|pagkain
isda|fish|n|daily||Z.|isda
bueong|medicine|n|health||SR ~p. 103 (bueong n. medicine, cure); ~p. 231 "Imna ro bueong" = Drink the medicine. tambae (Hiligaynon tambal) appears in SR only as a coagulant.|gamot
tuba|coconut wine|n|substances||Z.|tuba
alak|liquor|n|substances|||alak
sigarilyo|cigarette|n|substances|||sigarilyo
mama|betel quid; chew betel|n|substances||SR ~p. 253 (mama' = chew tobacco or betel nut).|nganga
eawas|body|n|body||SR ~p. 182.|katawan
ueo|head|n|body||Z sound rules (ulo > ueo).|ulo
mata|eye|n|body||Z.|mata
dueonggan|ear|n|body||SR ~p. 166, 168.|tainga
ba-ba|mouth|n|body||SR ~p. 69 (ba-ba'); SR marks bunganga as Tagalog.|bibig
tiyan|stomach; belly|n|body|||tiyan
dughan|chest|n|body||SR ~p. 166 (chest, breast).|dibdib
tagipuso-on|heart|n|body||SR ~p. 316, 362 (tagipuso'-on); SR marks kasing-kasing as Hiligaynon.|puso
alima|hand|n|body||Z (ring alima).|kamay
siki|foot; leg|n|body|||paa
utok|brain|n|body|||utak
ginhawa|breath; health|n|body||Z.|hininga
isip|mind; thought|n|mind|||isip
huna-huna|mind; thinking|n|mind||SR ~p. 200 lists Akl: isip, huna'-huna', paino-ino for "idea".|isip
kaeag|soul; spirit|n|mind|||kaluluwa
damgo|dream|n|mind||SR ~p. 156 (damgohanon = aspirations; cf. damgo).|panaginip
boses|voice|n|mind|||boses
sakit|pain; illness|n|health||SR ~p. 326.|sakit
masakit|painful; sick|adj|health|sakit|SR ~p. 326.|masakit
eagnat|fever|n|health||Z.|lagnat
gaoy|tired; exhausted|v|health||SR ~p. 192 (gaoy ST: to be tired; "Owa ako gagaoy" = I'm not tired). kapoy is Hiligaynon and not in SR.|pagod
gaoy gid|very tired|phr|health|gaoy|Gagaoy gid ako = I'm very tired.|pagod na pagod
gana|appetite|n|health|||gana
tueog|sleep|n|health|||tulog
subo|sadness|n|emotions||SR ~p. 347 (masubo' = sad, depressed).|lungkot
masubo|sad|adj|emotions|subo|SR ~p. 347.|malungkot
lipay|joy; happiness|n|emotions||Z.|saya
malipayon|happy|adj|emotions|lipay|SR ~p. 246 (happy by nature); kalipay = joy.|masaya
hadlok|fear|n|emotions||SR ~p. 201 (kahadlok = fear; makahaeadlok = frightening).|takot
nahadlok|afraid|adj|emotions|hadlok|SR ~p. 201 root.|takot
akig|anger; angry|n|emotions||SR ~p. 42 (akig adj. angry).|galit
naakig|angry|adj|emotions|akig||galit
huya|shame; face|n|emotions||Z.|hiya
nahuhuya|ashamed; shy|adj|emotions|huya|SR ~p. 223 (makahuhuya' = shameful; mahuluy-on = shy).|nahihiya
mingaw|lonely; missing someone|adj|emotions||Z.|nalulungkot; nangungulila
kabalaka|worry|n|emotions||Shared with Hiligaynon; not in SR. Attested Aklanon root for worry: himud-os (SR ~p. 214).|pag-aalala
nagakabalaka|worried|v|emotions|balaka||nag-aalala
kueba|fear; timidity; nervousness|n|emotions||SR ~p. 139 (kueba' n. fear, timidity; kueba' ST = be afraid, tremble; pakueba' = feel nervous). Not kulba.|kaba
buang|crazy; insane (stigmatizing)|adj|mind||Avoid with patients. Not in SR, which lists loko/loka, bulangog, paltik.|baliw
kaon|eat|v|verbs||Z. nagkaon, nagakaon, magakaon.|kain
inom|drink|v|verbs|||inom
tueog|sleep|v|verbs||matueog, nakatueog.|tulog
kita|see|v|verbs||Z (kita').|kita
bati|hear|v|verbs||Not confirmed in SR (bati(h) [Sp] there = to blend).|dinig
hambae|speak; say|v|verbs|||salita
istorya|talk; converse|v|verbs||mag-istorya.|usap
sugid|tell; relate; reveal|v|verbs||SR ~p. 33, 322 (Akl for Spanish reporte). Sugidi ako = tell me; isugid = to tell (something).|sabi; kuwento
pangutana|ask|v|verbs|||tanong
sabat|answer|v|verbs||SR ~p. 324.|sagot
maman-an|know (fact)|v|verbs||Indi ko maman-an = I don't know.|alam
kilaea|know (a person); recognize|v|verbs|||kilala
intindi|understand|v|verbs||maintindihan.|intindi
hangop|understand; grasp|v|verbs|||unawa
gusto|want; like|v|verbs||Z.|gusto
kinahangean|need|v|verbs||SR ~p. 135 (n. need, necessity).|kailangan
bulig|help|v|verbs|||tulong
tao|give|v|verbs||itao.|bigay
hueat|wait|v|verbs||Z (Hueat anay). SR hueat n. there = partition.|hintay
agto|go|v|verbs||Z (agto', adto).|punta
abot|arrive; come|v|verbs|||dating
panaw|leave; walk|v|verbs||Z.|alis; lakad
balik|return|v|verbs||SR ~p. 80.|balik
lingkod|sit|v|verbs||Z.|upo
tindog|stand|v|verbs|||tayo
tangis|cry; weep|v|verbs||SR ~p. 211 marks hibi' as Hiligaynon with Akl: tangis; ~p. 369 "Nano ring ginatangisan?" = What are you crying about?|iyak
isip|think|v|verbs||mag-isip, nagaisip.|isip
lipat|forget; leave behind|v|verbs||Z (hilipatan); SR ~p. 246 (lipat RV3). Hiligaynon limot is not Aklanon.|limot
dumdum|remember; keep in mind|v|verbs||SR ~p. 167 (dumdum RV1); also padumdum = remind. Spelled dumdum.|alala
patay|die; dead|v|verbs||Z (patay).|patay
kabuhi|life|n|mind|buhi||buhay
buhi|alive; live|adj|mind||SR ~p. 106 (buhi' = alive, opp. patay).|buhay
sakit sa ueo|headache|phr|health|sakit||sakit ng ulo
hilo|become dizzy; feel faint|v|health||SR ~p. 213 (hilo ST2); also mabuyog = dizzy (~p. 114). lipong is Hiligaynon.|hilo
suka|vomit|v|health|||suka
away|quarrel; fight|v|verbs||SR ~p. 66.|away
bunae|hit; beat; beating|v|verbs||SR ~p. 54 (mamumunae = one who beats). l > e: Hiligaynon bunal.|bugbog
daeagan|run|v|verbs|||takbo
tago|hide|v|verbs||SR ~p. 363.|tago
obra|work (verb)|v|verbs||Z (magapangobra).|trabaho
pahuway|rest|v|verbs||SR ~p. 291 (relax, rest from).|pahinga
sueat|write|v|verbs||SR ~p. 349.|sulat
basa|read|v|verbs||Z (Basaha ra).|basa
tan-aw|look at|v|verbs||Z (Tan-awa).|tingin
tudlo|point; teach|v|verbs||Itudlo = point to.|turo
sugod|enter; go into|v|verbs||Z p. 28 (minimal pair sugód "enter, go into"). Not "start": that sense is Hiligaynon; Aklanon start = umpisa (corrected 0.2.5).|pasok
untat|stop|v|verbs|||tigil
bakae|buy|v|verbs||Z (ginbakae).|bili
bahoe|big; large|adj|adjectives||SR ~p. 78 (mabahoe = big, huge; nagbahoe = grew). dako is Hiligaynon and not in SR.|malaki
maintok|small|adj|adjectives||Z.|maliit
bag-o|new|adj|adjectives||Z.|bago
daan|old (things)|adj|adjectives||SR ~p. 180 (old rice, old maid).|luma
maeapit|near|adj|adjectives|||malapit
maeayo|far|adj|adjectives||Z (maeayo').|malayo
mabaskog|strong; loud|adj|adjectives||SR ~p. 88.|malakas
maeuya|weak; feeble|adj|adjectives|euya|SR ~p. 188 (euya adj. weak, not strong).|mahina
mainit|hot|adj|adjectives|||mainit
maeamig|cold|adj|adjectives|eamig|SR ~p. 383 marks tugnaw as Hiligaynon with Akl: eamig; "Maeamig kuno rito sa America".|malamig
matam-is|sweet|adj|adjectives||Z (tam-is).|matamis
husto|right; correct; enough|adj|adjectives||Z.|tama
saea|wrong; mistake; fault; sin|n|adjectives||SR ~p. 200 ("may saea man" = also at fault), ~p. 266 (sad-an). l > e: Tagalog sala.|mali; kasalanan
matuod|true|adj|adjectives||SR ~p. 386.|totoo
puril|lie; falsehood|n|adjectives||SR ~p. 113 marks butig as Hiligaynon with Akl: puril; purilon = liar.|kasinungalingan
abo|many; much|adj|quantity||SR ~p. 156 marks damo' as Hiligaynon with Akl: abo'; Z "abo' nga saeamat". Kalibo speakers also say madamo.|marami
sangkiri|few; a little|adj|quantity|kiri|SR ~p. 118, 136 (kiri' = few; sangkiri' = a little bit). diutay is Hiligaynon.|kaunti
sangkurot|a little; a little bit|adj|quantity||Z p. 42 (sang- + kurot); tigsangkurot = a little at a time (p. 184).|kaunti
tanan|all|adj|quantity|||lahat
ngaean|name|n|basics|||pangalan
edad|age|n|basics||Z (idad).|edad
Akean|Aklan|n|places||SR ~p. 42.|Aklan
Inakeanon|the Aklanon language|n|places|||Aklanon
Akeanon|Aklanon (person)|n|places||SR ~p. 42.|Aklanon
Kalibo|Kalibo|n|places||SR ~p. 122 (capital municipality of Aklan).|Kalibo
aswang|aswang (folk monster)|n|folk||Z.|aswang
kulam|sorcery|n|folk||Z.|kulam
mueto|ghost|n|folk||SR ~p. 263 (mueto'); SR marks multo as Tagalog. "makasubeang kamo it mueto sa daean".|multo
ingkanto|enchanted being|n|folk||Z.|engkanto
pasma|folk illness from heat/cold exposure|n|folk||Z.|pasma
anting-anting|amulet|n|folk||Z.|anting-anting
sadya|be happy; fun|v|emotions||Z (~p. 334). masadya = happy; kasadyahan = happiness.|saya
masadya|happy; cheerful; lively|adj|emotions|sadya|Z. In mania the patient's own word for feeling well.|masaya
kasadyahan|happiness; merriment|n|emotions|sadya|Z.|kasiyahan
kusog|strength; energy|n|body||SR ~p. 148 (strength, vigor, power). makusog = strong.|lakas
makusog|strong; full of energy|adj|adjectives|kusog||malakas
dasig|speed|n|adjectives||SR ~p. 159 (dasig = speed up, go faster). madasig = fast.|bilis
madasig|fast; quick|adj|adjectives|dasig||mabilis
buhay|last a long time; long (duration)|v|time||SR ~p. 105 (buhay = last a long time; mabuhay = long-lasting, takes too long; kabuhay = duration). dugay is Hiligaynon.|tagal
maakig|angry; irritable|adj|emotions|akig|Z (makaakig). Madali maakig = easily angered.|magalit
gasto|expenses; spend|n|daily||Z (~p. 192). Nagsobra it gasto = overspent.|gastos
baligya|sell|v|verbs||Z (~p. 91, ginbaligya).|benta
basol|regret; blame|v|emotions||ginabasol = regrets, blames.|sisi
sobra|too much; excess; more than|adj|quantity||Spanish loan, shared with Tagalog and Hiligaynon.|sobra
gahum|power; authority|n|mind||SR ~p. 190 (gahom RV3 = govern, rule). Espesyal nga gahum = special power.|kapangyarihan
maaeam|knowledgeable; clever|adj|adjectives|aeam|SR ~p. 44 (intelligent, bright, wise).|marunong
misyon|mission|n|mind||Spanish loan; common grandiose theme.|misyon
tunog|sound; noise|n|daily|||tunog
hueag|movement; move|n|verbs||Cognate of Hiligaynon hulag.|galaw
sugal|gambling|n|daily||Spanish loan (jugar).|sugal
kinaandan|usual; habitual; customary|adj|adjectives|anad|Indi kinaandan = not one's usual.|nakasanayan
peligro|danger|n|adjectives||SR ~p. 305. In Aklanon delikado means fragile or touchy (SR ~p. 162), not dangerous; arisgado = risky.|panganib
halin|from; since|prep|grammar||SR ~p. 203 (come from, originate). Halin sa Diyos = from God.|mula
plano|plan|n|mind||SR ~p. 310 (plano = to plan).|plano
palibot|surroundings; around|n|daily||Sa palibot = around (someone).|paligid
pasikat|showy; acting above one's status|adj|people||Z (~p. 300). Family's word for grandiose behaviour.|mayabang
motor|motorcycle|n|daily||Common asset sold in manic spending.|motor
ayad|get well; improve|v|health||nag-ayad = got better; cf. mayad.|galing
ginakueba-an|be seized by fear; feel nervous|v|emotions|kueba|SR ~p. 139 "Ginakueba-an ako" = I'm trembling with fear. For palpitation ask about the heart (tagipuso-on) directly.|kinakabahan
ginakabalak-an|the thing worried about|v|emotions|balaka|Ano ro ginakabalak-an mo? = What do you worry about?|inaalala
kahadlok|fear; being afraid|n|emotions|hadlok|SR ~p. 201. ginhadlukan = was seized by fear (draft form).|takot
butang|thing; matter|n|daily||Z root list. Abo nga butang = many things.|bagay
gamay|small; little|adj|quantity||gagmay = small (plural). Gamay lang = just a little.|maliit
gagmay|small (plural)|adj|quantity|gamay|Bisan gagmay lang = even small ones.|maliliit
kontrol|control|n|mind||SR ~p. 145 [Eng] (kontrol = to control).|kontrol
budlay|difficulty; exhaustion|n|adjectives||SR ~p. 102 (budlay ST = be exhausted; find difficult). mabudlay = hard.|hirap
mabudlay|difficult; hard to do|adj|adjectives|budlay|Mabudlay magginhawa = hard to breathe.|mahirap
tungod|because of; due to|prep|grammar||SR ~p. 386 (tungod kimo = because of you).|dahil
hugot|tightness; tight|adj|body||mahugot ro eawas = the body is tense.|higpit
abaga|shoulder|n|body||SR ~p. 39 (abaga = to shoulder, take on).|balikat
gulpi|suddenly; all at once|adv|time||SR ~p. 229 (opp. inanay = gradually). Also hinali' = suddenly (~p. 155).|bigla
kurog|tremble; shake|v|body||SR ~p. 133 (synonym under kubig = shiver, tremble). nagakurog = is shaking.|panginginig
hueas|sweat; perspire|n|body||SR ~p. 218 (hueas n. sweat; hueas RV5 = to sweat). Not balhas/baehas.|pawis
ataki|attack (of illness); heart attack; stroke|n|health||SR ~p. 65 (ataki [Sp]; ataki ST4 = get a heart attack). Used for a panic attack too.|atake
minuto|minute|n|time||Spanish loan.|minuto
rason|reason|n|mind||SR ~p. 320 [Sp]. Owa it rason = no reason.|dahilan
lugar|place|n|daily||Spanish loan. Pila ka lugar = certain places.|lugar
sitwasyon|situation|n|mind||Spanish loan.|sitwasyon
tindahan|market; store|n|places||SR ~p. 13, 69 ("Ginbakae ko ra sa tindahan" = I bought this at the market; also baeakean = store, market). palengke is not in SR.|palengke
sakay|ride; board a vehicle|v|verbs||magsakay it jeep = ride the jeep; pagsakay = riding.|sakay
jeep|jeepney|n|daily||Also dyip.|jeep
likaw|avoid; veer away from|v|verbs||SR ~p. 242 (likaw RV3). ginalikawan = is avoided.|iwas
upang|hinder; obstruct|v|verbs||Not in SR (SR apang = but). Draft; SR gives baeabag = block, thwart (~p. 72).|hadlang
gwa|go out; outside|v|verbs||maggwa sa baeay = go out of the house; sa gwa = outside. Also guwa.|labas
bantay|watch; guard|v|verbs||SR ~p. 83 [Ch]. ginabantayan = is being watched.|bantay
husga|judge (a person)|v|verbs||SR ~p. 222 lists husgar [Sp] with Akl: hukom. ginahusgahan = is being judged.|husga
atubangan|front; in front of|n|daily||SR ~p. 66. Sa atubangan nanda = in front of them.|harapan
kaimaw|together with; companion|prep|people||Not found in SR (SR: dungan = together; kaaeundog = companion). Draft.|kasama
nahuya|embarrassed; shy|adj|emotions|huya|Z (huya). Ordinary shyness; distinguish from social anxiety.|nahihiya
kape|coffee|n|daily||SR ~p. 127 lists kape only as café; the drink is a loan used everywhere.|kape
botika|pharmacy; drugstore|n|places||Spanish loan.|botika
para|for; in order to|prep|grammar||Spanish loan. Para makatueog = in order to sleep.|para
himud-os|worry (about)|v|emotions||SR ~p. 214 (himud-os RV8 = to worry about); konsumido = worried (~p. 144).|mag-alala
kuyap|be nervous; get the jitters|v|emotions||SR ~p. 149 (kuyap ST5, from fear); kueuyapan = high-strung.|kabahan
nirbyos|be extremely nervous; nervous breakdown|v|emotions||SR ~p. 270 [Sp].|nerbiyos
mabuyog|dizzy; whirling|adj|health|buyog|SR ~p. 114.|nahihilo
kalipay|joy; happiness|n|emotions|lipay|SR ~p. 246 (kalipayan = happiness; SR marks ligaya as Tagalog).|ligaya
hinuesoe|regret; repent; feel sorry|v|emotions||SR ~p. 215 (hinuesoe RV2). basol is Hiligaynon.|pagsisisi
hangos|breathless; out of breath|adj|body||SR ~p. 207.|hingal
mabahoe|big; large; huge|adj|adjectives|bahoe|SR ~p. 78; hanggod = large (syn.).|malaki
kiri|few; little|adj|quantity||SR ~p. 136 (kiri' adj., opp. abo').|kaunti
mabuhay|long-lasting; takes too long|adj|time|buhay|SR ~p. 105. Pila kabuhay? = how long?|matagal
kabuhay|duration; long time|n|time|buhay|SR ~p. 105.|tagal
dominggo|week; Sunday|n|time||SR ~p. 167 [Sp] (Sunday; week of 7 days). semana also attested in Z.|linggo
kurandero|folk healer; medicine man|n|people||SR ~p. 146 (kurandera = medicine woman).|albularyo
kahilapit|neighbour|n|people||SR ~p. 121, 180 (alt. of kaingod).|kapitbahay
eamig|cold|n|adjectives||SR ~p. 383 (Akl: eamig for Hiligaynon tugnaw); maeamig = cold.|lamig
hukom|judge|v|verbs||SR ~p. 222 (Akl for husgar).|hukom
baeabag|block; thwart|v|verbs||SR ~p. 72 (baeabag V3 = block or stop one's moves or plans).|hadlang
ugali|custom; habit|n|mind||SR ~p. 277 (ugali').|ugali
gihapon|usually; just the same|adv|time||SR ~p. 194.|karaniwan
loko|crazy; foolish|adj|mind||SR ~p. 248 [Sp] (loko m., loka f.). Stigmatizing; patients use it of themselves.|loko
bagyo|typhoon; storm|n|daily||SR ~p. 77 (hurricane, storm; "sinalipdan ro andang baeay sa bagyo").|bagyo
linog|earthquake|n|daily||SR ~p. 245.|lindol
aksidente|accident|n|health||Spanish loan; not in SR as a headword.|aksidente
hampak|beat; spank; slap|v|verbs||SR ~p. 205.|hampas
sampae|slap|v|verbs||SR ~p. 367 (tampa\', tampaling = slap, syn. sampae).|sampal
abuso|abuse; take advantage of|v|verbs||SR ~p. 41 [Sp] (abuso, abusar; abusador = abuser).|abuso
pahog|threaten; scare|v|verbs||SR ~p. 291 (syn. paeog, pahadlok).|takot (pananakot)
siyagit|scream; shout|n|verbs||SR ~p. 346.|sigaw
igbata|relative|n|family||SR ~p. 56, 89 ("Igbata namon imaw" = he is our relative); SR marks paryente as Spanish.|kamag-anak
kato anay|long ago; formerly; back then|adv|time||SR ~p. 24, 30 (kato anay, with makaron, kaina).|noon
uman|repeat; do again|v|grammar||Z grammar root list (uman = repeat, do again). nagakatabo uman = happening again.|ulit
padumdum|remind|v|verbs|dumdum|SR ~p. 26.|paalala
tupay|have a bad dream; have a nightmare|v|health||SR ~p. 221, 387 (tupay ST2; syn. hupa\'). ginatupay = keeps having nightmares.|binabangungot
bangungot|nightmare believed to be fatal|n|folk||SR ~p. 85 (bangungot ST4).|bangungot
kigbot|startle; frighten; be startled|v|emotions||SR ~p. 140 (read from a noisy OCR line; Hiligaynon kibot). makigbot = easily startled. ⚑ verify.|gulat
parehas|same; alike|adj|adjectives||SR ~p. 176 (opp. eain = different), ~p. 262.|pareho
maeain|bad; ill|adj|adjectives|eain|SR ~p. 176 ("maeain dang pamatyag" = I feel bad). Note eain alone = different, other.|masama
madali|easy; quick; easily|adj|adjectives||SR ~p. 155 ("madali hilipatan" = easily forgotten).|madali
hinay|slowly; softly|adv|adjectives||SR ~p. 215 (hinay = go slowly, not be loud or fast). hinay-hinay = little by little.|dahan-dahan
kalma|calm; serene|adj|emotions||SR ~p. 122 [Sp] (syn. hasay).|kalma
linong|calm; peaceful|adj|emotions||SR ~p. 245 (syn. linaw; cf. tawhay, tagnong).|payapa
saeanhon|alone; individual|adj|people||SR ~p. 328.|mag-isa
sang-una|before; in the past|adv|time||Draft (Western Bisayan); SR gives kato anay. ⚑ verify.|dati
alkuhol|alcohol|n|substances||SR ~p. 50 [Sp].|alkohol
bote|bottle|n|daily||SR ~p. 113 [Sp] (alt. boti).|bote
tagayan|cup; drinking cup|n|daily|tagay|SR ~p. 368 (Akl for Spanish tasa); tagay = pour out slowly.|tasa
makahilong|intoxicating; quickly makes one drunk|adj|substances|hilong|SR ~p. 213.|nakakalasing
paeahilong|drunkard; habitual drinker|n|substances|hilong|SR ~p. 213 (paea- = habitual person).|lasenggo
pasuebo|drink alcohol during a hangover (to cure it)|v|substances||SR ~p. 301 [idm] (RV5).|tagay sa hangover
abano|large cigar|n|substances||SR ~p. 39 [Sp].|tabako
binga|betel nut|n|substances||SR ~p. 109 (Areca catechu).|bunga
apog|powdered lime for the betel quid|n|substances||SR ~p. 60.|apog
apyan|opium|n|substances||SR ~p. 61 [Sp] (alt. opyo); apyaniro = dope addict.|opyo
droga|drug; illegal drug|n|substances||Spanish loan in general use; not in SR. shabu, marijuana likewise.|droga
anad|be accustomed to; be used to|v|mind||Z p. 17 (Naanad eon ako magsigarilyo = I'm already used to smoking).|sanay
abyan|friend|n|people||SR ~p. 40.|kaibigan
problema|problem|n|mind||SR ~p. 310 [Sp]; problema ST5 = to have problems; Tueogi ring problema = sleep off your problem.|problema
reklamo|complain; complaint|v|verbs||Spanish loan in general use; not in SR as a headword.|reklamo
okasyon|occasion|n|time||Spanish loan.|okasyon
reseta|prescription|n|health||Spanish loan.|reseta
kasubo|sorrow; sadness|n|emotions|subo|Z p. 129 (ka- noun of the stative root).|kalungkutan
igkampud|cousin|n|family||Z p. 123, 137 (Naakig ako sa akong igkampud).|pinsan
hin-aga|tomorrow|adv|time||Z p. 184. Also buwas in Kalibo speech.|bukas
hinduna|later on (today)|adv|time||Z p. 182, 184 (Hinduna mabalik ako).|mamaya
hinay-hinay|little by little; slowly|adv|time|hinay|SR ~p. 215 (hinay = go slowly).|dahan-dahan; unti-unti
sip-on|mucus; a cold|n|health||Z p. 170 (sip-onan = having a cold).|sipon
matay|die|v|health||Z p. 123 (Class II stative: namatay = died); SR ~p. 258.|mamatay
pangabuhi|life; livelihood|n|daily||Z p. 136 (panga- noun); SR ~p. 106 pangabuhi-an = occupation.|kabuhayan
mangunguma|farmer|n|people||Z p. 138 (occupational maNV- noun).|magsasaka
lapis|pencil|n|daily||SR ~p. 240 [Sp] (Isueat mo ro lapis ngara = write with this pencil, SR ~p. 24).|lapis
papel|paper|n|daily||SR ~p. 286 [Sp].|papel
yabi|key|n|daily||SR ~p. 393 [Sp] (alt. yawi, lyabe).|susi
relo|watch; clock|n|daily||SR ~p. 35 [Sp] (relo RV5 = wear a watch).|relo
lamesa|table|n|daily||Spanish loan in general use.|mesa
tuo|right (side, hand)|n|body||SR ~p. 162 (Akl for Spanish dimano; opp. waea).|kanan
presidente|president|n|people||SR ~p. 318 [Sp]; Z p. 197 \"Imaw hay presidente\".|presidente
meyor|mayor|n|people||SR ~p. 49 (syn. alkalde); \"Binaligya ku meyor ro baeay\" (SR intro).|alkalde
ta-o|I don't know (particle)|part|grammar||Z p. 206 (ta-o ngani = I just don't know). Tagalog ewan/aywan.|ewan
dayon|then; next; right away|adv|time||Z p. 64 (mapanaw dayon kita = then we will leave).|tapos; agad
hasta|until; up to|prep|grammar||Z p. 166 [Sp] (syn. tubtub).|hanggang
grado|grade (in school)|n|daily||Spanish loan.|grado
baeot-baeot|repeat|v|verbs||SR ~p. 75 (syn. uman).|ulit
kwenta|count; settle money matters; value|v|mind||SR ~p. 151 [Sp] (Akl: husay); owa it kwenta = worthless.|kuwenta
# Part 3, 2026-11-19: words taken from Zorc & de la Cruz's own example sentences (Z p. = printed page), added for the vocabulary lessons.
tinapay|bread|n|daily||Z p. 71, 77.|tinapay
karne|meat|n|daily||Z p. 87 [Sp].|karne
sanduko|bolo; large knife|n|daily||Z p. 87.|itak
dapaean|cutting board|n|daily||Z p. 87.|sangkalan
sabaw|soup; broth|n|daily||Z p. 175 (Mainit gid do sabaw).|sabaw
haboe|blanket|n|daily||Z p. 155 (ro haboe ku unga).|kumot
eukas|gift|n|daily||Z p. 68 (Taw-i imaw it eukas).|regalo
tueon-an|book|n|daily||Z p. 72 (Ginuli ko ro tueon-an).|aklat
pisara|blackboard|n|daily||Z p. 81 [Sp].|pisara
dingding|wall|n|daily||Z p. 47 (primitive word).|dingding
simbahan|church|n|places||Z p. 39 (simba + -an).|simbahan
suba|river|n|places||Z p. 39 (suba' = river; suba = go upriver, differing only in stress).|ilog
bukid|mountain; hills|n|places||Z p. 44 (kabukiran = hilly area), p. 166 (maeapit sa bukid).|bundok
kalibutan|world; universe|n|places||Z p. 39 (libot + ka-…-an).|mundo
sueod|inside; interior|n|grammar||Z p. 156 (sa sueod it baeay = inside the house).|loob
idaeum|under; below|n|grammar||Z p. 156 (sa idaeum it).|ilalim
ibabaw|on top of; above|n|grammar||Z p. 156 (sa ibabaw it).|ibabaw
kilid|side; beside|n|grammar||Z p. 156 (sa kilid it); takilid = turn one's side to.|tabi; gilid
pihak|the other side|n|grammar||Z p. 156 (sa pihak it).|kabila
hain|from|prep|grammar||Z p. 166 (alt. halin).|mula
hanungod|about; concerning|prep|grammar||Z p. 166.|tungkol
tubtub|until; up to|prep|grammar||Z p. 47, 166 (syn. hasta).|hanggang
ugaling|but; however|conj|grammar||Z p. 163, 210 (Nagadto ako kato, ugaling owa imaw runa).|ngunit
duro|much; very (it duro)|adv|quantity||Z p. 128, 191 (Nasaktan ako it duro = I was deeply hurt).|lubha
sambilog|one (piece)|num|numbers||Z p. 41 (sang- + bilog); sambuean = one month.|isa
pilambisis|how many times|pron|questions||Z p. 41 (pila + ng + bisis).|ilang beses
lunes|Monday|n|time||Z p. 184 [Sp]; ku Lunes = last Monday, sa Lunes = on Monday.|Lunes
martes|Tuesday|n|time||Spanish loan, as the other weekdays.|Martes
miyerkoles|Wednesday|n|time||Spanish loan.|Miyerkules
huwebes|Thursday|n|time||Z p. 184 (ku Huwebes = last Thursday).|Huwebes
biyernes|Friday|n|time||Spanish loan.|Biyernes
sabado|Saturday|n|time||Spanish loan.|Sabado
enero|January|n|time||Z p. 165 (ku Enero = last January); the months are Spanish loans.|Enero
temprano|early|adv|time||Z p. 184 [Sp] (opp. ulihi).|maaga
taeagsa|rarely; seldom|adv|time||Z p. 184 (with imaeaka); SR gives paeangta'. Hiligaynon talagsa is the same word.|bihira
gerra|war|n|time||Z p. 165 (ku gerra = during the war).|giyera
kabi-i|last night|adv|time||Z p. 65, 173 (alt. of kabii).|kagabi
hampangan|toy|n|daily||Z p. 39 (hampang + -an; stress distinguishes it from hampangan = to play with).|laruan
saeo-saeo|party; feast|n|daily||Z p. 118.|salu-salo
sine|movie|n|daily||Z p. 173 [Sp] (Kasadya ro sine kabi-i).|sine
tyempo|weather; time|n|time||Z p. 175 [Sp] (Matsa maeamig ro tyempo makaron).|panahon
panahon|weather; season; time|n|time||Z p. 179 (Kainit nga panahon).|panahon
anwang|carabao|n|daily||Z p. 178.|kalabaw
ayam|dog|n|daily||Z p. 178 (Maisot-isot ro akong ayam).|aso
uyahon|face|n|body||Z p. 82 (Hatanda-an pa nakon ro anang uyahon).|mukha
osoy|look for; search for|v|verbs||Z p. 85 (Sino ro ginaosoy mo? = Whom are you looking for?).|hanap
hakwat|lift; carry (something heavy)|v|verbs||Z p. 67 (Indi ako makahakwat karon).|buhat
subeang|meet; run into|v|verbs||Z p. 67 (Nakasubeang kami ni Henry sa tindahan); SR makasubeang it mueto.|salubong
eangoy|swim|v|verbs||Z p. 67 (Makaeangoy ka?).|langoy
daea|bring; carry; take along|v|verbs||Z p. 68 (Daea ron = bring that), p. 90.|dala
hatod|take to; bring to; deliver|v|verbs||Z p. 68, 73 (Ihatod mo ro unga sa anang baeay); ihatod = escort.|hatid
eaha|cook|v|daily||Z p. 39, 73 (Eaha-on mo ro isda).|luto
hugas|wash (dishes, hands)|v|daily||Z p. 64, 91 (Hugasi ring alima).|hugas
limpyo|clean|v|daily||Z p. 91 [Sp].|linis
kiwa|slice; cut|v|daily||Z p. 87 (magakiwa it karne).|hiwa
takaw|steal|v|verbs||Z p. 90 (also takab in SR).|nakaw
adto|go (there)|v|verbs||Z p. 64, 92, 116 (Kinahangean sanda gaadto sa Antique).|punta
saot|dance|v|verbs||Z p. 92.|sayaw
hueam|borrow|v|verbs||Z p. 99 (pahueam = lend).|hiram
pakita|show|v|verbs|kita|Z p. 99 (pa- + kita).|ipakita
padaea|send|v|verbs|daea|Z p. 99.|ipadala
sugo|order; send on an errand|v|verbs||Z p. 99 (also = force, with pilit).|utos
pilit|force; insist|v|verbs||Z p. 99.|pilit
kasayod|know (a fact)|v|mind||Z p. 99 (pasayod = notify); nasayoran = is known (p. 44).|alam
himuning|be still; keep still|v|verbs||Z p. 69 (Maghimuning!).|tumigil
singgit|shout|v|verbs||Z p. 196 (Ayaw it singgit).|sigaw
hibayag|laugh|v|emotions||Z p. 113 (Nakighibayag imaw kakon); panghibayag = laughing (p. 42).|tawa
hangae|joke; tease|v|emotions||Z p. 156 (Indi dapat maghangae sa tawo nga bag-ong bugtaw).|biro
hueay|share (in)|v|emotions||Z p. 113 (Nakighueay imaw ku imong kalisod).|makiramay
dismayo|faint|v|health||Z p. 112 [Sp] (nagdismayo ro nobya).|himatay
nobya|bride; girlfriend|n|family||Z p. 112 [Sp]; nobyo = groom.|nobya
eangas|naughtiness; noise|n|emotions||Z p. 45, 82, 114 (kaeangas = noise; maeangas = naughty; Ayaw maglinahog).|kalikutan
kagahod|noise; din|n|daily||Z p. 81 (Basi ikaakig nana ro kagahod).|ingay
biyahe|trip; journey|n|daily||Z p. 82 [Sp] (Naeayo-an ro magueang sa anang biyahe).|biyahe
handom|ambition; wish; cherished dream|n|mind||Z p. 161 (Daya ro akong handom).|hangarin
diskurso|speech; lecture|n|daily||Z p. 165 [Sp].|talumpati
kabata-an|youth; childhood|n|time||Z p. 166 (halin sa anang kabata-an).|kabataan
buot|will; mind; inner self|n|mind||Z p. 108 (hantop sa imong buot = with all your heart); root of kabubut-on, mabuot, buot-an.|loob
pueos|use; worth|n|mind||Z p. 108 (owa it pueos = worthless); SR syn. kapuslanan.|silbi
kalisdanan|hardships; difficulties|n|emotions|lisod|Z p. 39, 43 (akong kalisdanan = my misery), p. 67.|kahirapan
malisod|difficult|adj|adjectives|lisod|Z p. 174 (degree chart); kalisod = very difficult.|mahirap
maeumo|easy|adj|adjectives||Z p. 174, 184 (maeumo = easily).|madali
pangalisod|suffering; hardship|n|emotions|lisod|Z p. 43, 136 (pang- + kalisod).|paghihirap
pangabudlay|difficulties; toil|n|emotions|budlay|Z p. 136.|paghihirap
panumdum|thinking; thought|n|mind|dumdum|Z p. 42 (pang- + dumdum).|pag-iisip
pagdumdum|thought; remembering|n|mind|dumdum|Z p. 135.|pag-alala
paghigugma|love|n|emotions|higugma|Z p. 135, 89 (paghigugma it Dyos).|pag-ibig
pagkatawo|character; personality|n|mind|tawo|Z p. 38, 135.|pagkatao
pagkamatay|death; dying|n|health|matay|Z p. 135 (pagka- fixed state).|pagkamatay
kamatayon|death (the state)|n|health|matay|Z p. 138 (ka-…-on).|kamatayan
kagutom|hunger|n|body|gutom|Z p. 129; kagutomon = state of hunger (p. 138).|gutom
kaohawon|thirst|n|body|ohaw|Z p. 138.|uhaw
kaga-oy|tiredness; fatigue|n|health|gaoy|Z p. 129.|pagod
kasubo-an|sadness|n|emotions|subo|Z p. 138.|kalungkutan
kalipayan|happiness|n|emotions|lipay|Z p. 138.|kaligayahan
kaisog|bravery; courage|n|emotions|isog|Z p. 137; also Kaisog ta kakon (p. 168).|tapang
kapuslanan|worth; value|n|mind|pueos|Z p. 67, 138 (may kapuslanan rong kalisdanan).|halaga
kabangdanan|cause; reason|n|mind|bangod|Z p. 138.|dahilan
katapusan|end|n|time|tapus|Z p. 138.|katapusan
kinaaeam|wisdom; knowledge|n|mind|aeam|Z p. 138.|karunungan
kinabuhi|life; one's whole life|n|mind|buhi|Z p. 138, 211 (agod gumayad ro imong kinabuhi).|buhay
kahuhuya|shameful; disgraceful|adj|emotions|huya|Z p. 48.|kahiya-hiya
pakamatay|suicide; killing oneself|n|health|matay|Z p. 139 (paka- noun). Recognise it; do not lead with it.|pagpapakamatay
pakisama|get along with people; fit in|v|people||Z p. 139 (paki- noun/verb).|pakikisama
pakiusap|request; plead|v|verbs||Z p. 139.|pakiusap
kabulig|helper; assistant|n|people|bulig|Z p. 137.|katulong
kasimaeay|housemate|n|people||Z p. 42, 138 (kasing- + baeay).|kasambahay
kasimanwa|townmate; fellow citizen|n|people||Z p. 42, 138.|kababayan
kasimaryo|barrio-mate|n|people||Z p. 138.|kabaryo
isigkatawo|fellow man|n|people||Z p. 137.|kapwa
igsu-on|godbrother; godsister|n|family||Z p. 137 (ig- relationship noun).|kinakapatid
magama|father and child|n|family||Z p. 112, 137 (mag- pair).|mag-ama
magina|mother and child|n|family||Z p. 137.|mag-ina
magasawa|husband and wife|n|family||Z p. 112 (mag- + asawa).|mag-asawa
magmaeanghod|brothers and sisters (three or more)|n|family|manghod|Z p. 137, 194 (Pila kamo magmaeanghod?).|magkakapatid
ina|mother|n|family||Z p. 87, 112 (ro ina; magina). nanay in address.|ina
tagbaeay|homeowner; householder|n|people||Z p. 139.|may-bahay
tagabukid|from the mountains; highlander|n|people||Z p. 139.|taga-bundok
tagariya|from here; local|n|people||Z p. 139.|taga-rito
manunuro|teacher|n|people|turo|Z p. 110, 138 (also manogturo).|guro
mananahi|seamstress; tailor|n|people||Z p. 138.|mananahi
mabug-at|heavy|adj|adjectives|bug-at|Z p. 67 (mabug-at ron).|mabigat
mahapdi|painful; smarting|adj|health|hapdi|Z p. 128, 169 (Mahapdi-an ka).|mahapdi
mataas|tall; high|adj|adjectives||Z p. 167, 177.|mataas
matambok|fat; stout|adj|adjectives||Z p. 169.|mataba
mataeaw|cowardly; timid|adj|emotions||Z p. 169.|duwag
maeangas|naughty; noisy|adj|emotions|eangas|Z p. 171.|malikot
mabinuligon|helpful|adj|emotions|bulig|Z p. 171.|matulungin
matinahuron|respectful|adj|emotions|tahod|Z p. 171.|magalang
mahinigugmaon|loving|adj|emotions|higugma|Z p. 171.|mapagmahal
matamaran|lazy|adj|adjectives|tamad|Z p. 171.|tamad
makibaeus|vengeful|adj|emotions|baeos|Z p. 171 (maki- = fond of).|mapaghiganti
makikwarta|money-loving; mercenary|adj|emotions|kwarta|Z p. 171.|gahaman sa pera
paeahibayag|always laughing|adj|emotions|hibayag|Z p. 171 (paea- habitual).|palatawa
makakueueba|fearsome; frightening|adj|emotions|kueba|Z p. 171.|nakakatakot
buot-an|sensible; mature|adj|mind|buot|Z p. 170.|mabait
biki-an|having a goitre|adj|health||Z p. 170.|may bosyo
tawohon|haunted; inhabited by spirits|adj|folk|tawo|SR intro p. 9, 11 (Tawohon kuno ro kahoy ngara = this tree is said to be inhabited).|may nakatira (engkanto)
bulok|bad; worthless; rotten|adj|adjectives||Z p. 46 (kabulokkan = worst of all).|bulok
init|heat; hot|n|adjectives||Z p. 47, 179 (init-init = warm; kainit nga panahon).|init
linaga|boiled (in water)|adj|daily|eaga|Z p. 45.|nilaga
natawo|was born|v|family|tawo|Z p. 38, 123 (Kan-o ikaw natawo?).|ipinanganak
nasaktan|was hurt; got hurt|v|health|sakit|Z p. 41, 128.|nasaktan
parayaw|favourite; pet child|n|family|dayaw|Z p. 44.|paborito
pandiho|move the bowels|v|body||Z p. 41 (pang- + diho); pandiho-an = toilet.|dumumi
pamaligos|bathing; act of taking a bath|n|daily|paligos|Z p. 42.|pagligo
panugid|narrating; telling|n|verbs|sugid|Z p. 43.|pagkukuwento
panuro|teaching|n|daily|turo|Z p. 43.|pagtuturo
panimba|going to church|n|folk|simba|Z p. 108 (vs pangsimba = church clothes).|pagsisimba
baeay-baeay|doll house; play house|n|daily|baeay|Z p. 47 (reduplication = artificial or small).|bahay-bahayan
kaon-kaon|nibble; taste a little|v|daily|kaon|Z p. 47.|kain-kain
uli|go home; return home|v|verbs||Z p. 69, 105 (Mos, mauli eon kita; pauli = go home); SR ~p. 279 pauli' RV9.|uwi
bayad|pay; payment|v|daily||General Visayan and Tagalog; not found in SR's OCR.|bayad
isog|bravery; fierceness; also scold|n|emotions||Z p. 137, 168 (kaisog; Kaisog ta kakon); isog RV3 = scold (Z p. 91). maisog = brave, fierce.|tapang; pagalitan
maisog|brave; fierce|adj|emotions|isog|Z p. 168 (kaisog = bravery).|matapang
manaba|short (not tall); low|adj|adjectives|naba|SR ~p. 266 (manaba'; naba' RV6 = become shorter).|mababa
maniwang|thin; skinny|adj|adjectives|niwang|SR ~p. 270 (niwang RV6 = get thinner).|payat
barato|cheap; inexpensive|adj|adjectives||SR ~p. 86 [Sp] (barato ST5 = find inexpensive).|mura
magahod|noisy|adj|adjectives|gahod|Z p. 81 (kagahod = noise, din).|maingay
# Part 4, 2026-11-19: from the phonology, sentence-pattern and counting pages (Z) and dictionary entries cited there (SR p. = printed page).
man-o|how much? (price)|pron|questions||Z p. 194 (Man-o ro manok ngara?); SR p. 304. With a glottal stop: mano = right side.|magkano
idad|age|n|people||SR p. 225 [Sp] (Pila ro imong idad? = How old are you?; May idad eon imaw = he is old enough). Also edad.|edad
pangidaron|be at a certain age|v|people|idad|SR p. 225 (RV6; Kat nagapangidaron imaw it dyes).|nasa edad
bisis|time; occasion|n|time||SR p. 98 [Sp] (sambisis lang = just once; tatlong bisis eon = the third time already; pilambisis = how many times).|beses
sambisis|once; one time|adv|time|bisis|SR p. 98.|minsan; isang beses
kaywa|twice; the second time|adv|time||SR p. 133 (contraction of ikaywa).|dalawang beses
ikatlo|third|num|numbers||SR p. 225 (ikatlong unga = third child); ika- + numeral = ordinal.|ikatlo
ikapito|seventh|num|numbers||SR p. 309.|ikapito
tigdaywa|two at a time; two by two|adv|numbers||Z p. 184 (Tigdaywa nagasaka rong sapat sa arka); tig- + numeral = N at a time.|dala-dalawa
tigsambato|one at a time|adv|numbers||SR p. 95 (also tigsambilog).|isa-isa
sambato|one|num|numbers||Z p. 163 (Sambato eang ro naka-abot); SR p. 33.|isa
libo|thousand|num|numbers||SR p. 241 (daywang libo = 2,000).|libo
napueo|ten|num|numbers||SR p. 268 (napueo'); napueong ka baeay = ten houses (Z p. 190).|sampu
piso|peso|n|daily||SR p. 308 [Sp] (pisos lang = just one peso); mamiso = at one peso apiece.|piso
salapi|fifty centavos; half a peso|n|daily||SR p. 330.|salapi
medya|half (in time and money)|n|time||SR p. 261 [Sp] (alas says e medya = six thirty).|medya
alas|o'clock (from two to twelve)|n|time||SR p. 49 [Sp] (alas tres; ala una = one o'clock); manga alas says = about six (Z p. 208).|alas
manga|about; approximately (with numbers and times)|adv|quantity||Z p. 208 (Manga alas tres makaron); the same word as the plural marker mga.|mga
utang|debt|n|daily||Z p. 27.|utang
ilong|nose|n|body||Z p. 28.|ilong
ngipon|tooth|n|body||Z p. 18.|ngipin
namuk|mosquito|n|daily||Z p. 27.|lamok
itlog|egg|n|daily||Z p. 25.|itlog
gatas|milk|n|daily||Z p. 152, 153 (Nakabakae ka eon it gatas?).|gatas
saging|banana|n|daily||Z p. 83, 151.|saging
manok|chicken|n|daily||Z p. 194 (Man-o ro manok ngara?).|manok
baboy|pig|n|daily||Z p. 29.|baboy
kahoy|tree; wood|n|daily||Z p. 29 (pangahoy = gather wood).|kahoy; puno
sapat|animal|n|daily||Z p. 184.|hayop
kabayo|horse|n|daily||Z p. 133, 190 [Sp].|kabayo
apo|grandchild|n|family||Z p. 29.|apo
eapsag|baby; infant|n|family||Z p. 152 (ro amon nga eapsag).|sanggol
bata|young; child|adj|people||Z p. 12 (bata' = young; kabata-an = youth; batang eaeaki = a young male, p. 43).|bata
daeaga|young woman; maiden|n|people||Z p. 134 (Sanskrit loan).|dalaga
ilo|orphan|n|family||Z p. 11, 20.|ulila
pare|compadre; co-godparent|n|people||Z p. 25 [Sp] (pare' vs pari' = priest).|pare; kumpare
titser|teacher|n|people||Z p. 133 [Eng].|titser
tulay|bridge|n|places||Z p. 28.|tulay
kalye|street|n|places||Z p. 26, 29 [Sp].|kalye
daean|road; way|n|places||Z p. 164 (sa daean); SR (makasubeang kamo it mueto sa daean).|daan
saeog|floor|n|daily||Z p. 153 (Magsilhig ka sa saeog).|sahig
silhig|sweep|v|daily||Z p. 91, 153.|walis
datag|field; open ground|n|places||Z p. 198 (May patay sa datag).|parang
eaeawigan|province|n|places||Z p. 7 (the prestige word; probinsya is also used).|lalawigan
kueon|cooking pot|n|daily||Z p. 14.|palayok
kutsara|spoon|n|daily||Z p. 12 [Sp].|kutsara
sabon|soap|n|daily||Z p. 28 [Sp].|sabon
tsa|tea|n|daily||Z p. 134 [Ch].|tsaa
baril|gun|n|daily||Z p. 12 [Sp].|baril
puti|white|adj|adjectives||Z p. 25 (puti'); SR opp. itim.|puti
dueom|dark; not bright|adj|adjectives||Z p. 14.|madilim
damoe|thick|adj|adjectives||Z p. 14.|makapal
eab-as|fresh (from the sea)|adj|daily||Z p. 14.|sariwa
human|finished; done|adj|verbs||Z p. 11 (vs uman = repeat); Haeos human eon don (p. 203).|tapos
huna|thought|n|mind||Z p. 11 (huna' vs una' = present, existing); huna-huna = think.|isip
baho|odour; smell|n|body||Z p. 12 (baho' = odour; baho = bass).|amoy
sako|busy|adj|daily||Z p. 12 (sako' = busy; sako = sack).|abala
tubo|growth; interest (on money)|n|daily||Z p. 12 (tubo' = growth, interest; tubo = sugar cane; patubo = lend with interest).|tubo
mukeat|open the eyes|v|body||Z p. 10.|dilat
duea|lose; get lost|v|verbs||Z p. 123 (duea = get lost, Class II stative); SR p. 28 Naduea-an ako it kwarta = I lost some money.|wala
wad-an|be bereaved of; suffer the loss of|v|emotions|waea|SR p. 28 (Nawad-an sanda it unga = they lost a child).|namatayan
eumos|drown|v|health||Z p. 36, 208 (naeumos).|lunod
batasan|manners; conduct|n|mind||Z p. 198 (owa imaw it batasan = he has no manners).|asal
tinun-an|education; learning|n|mind|tuon|Z p. 198 (May tinun-an gid imaw).|pinag-aralan
tikang|step; walk|v|verbs||Z p. 164 (nagatikang sa daean).|hakbang
panag-on|season; time; era|n|time|dag-on|SR p. 154.|panahon
pangadyi|prayer; pray|n|folk||Z p. 29 (pangadyi'); pangadyi-on = prayer.|dasal
kahati|twenty-five centavos; a quarter|n|daily||SR p. 120, 150 [Oak].|kahati
peseta|twenty centavos|n|daily||SR p. 150 [Sp].|peseta
bakod|five centavos|n|daily||SR p. 71, 150 [slg].|singko
panganay|eldest; first-born|n|family||SR p. 55.|panganay
rong|the (plural): contraction of ro mga|part|grammar||Z p. 149 (Rong mangingilaw kuno nagakaon kay Pedro).|ang mga
# Part 5, 2026-11-19 (0.2.5): collateral-history words, each checked against SR before use.
umpisa|begin; start|v|verbs||SR ~p. 280 [Sp] (Umpisahi ring obra = Start your work; opp. tapos). Kan-o nag-umpisa? = When did it start?|simula
trangka|lock up; bar|v|verbs||SR ~p. 389 [Sp].|ikandado; ikulong
balighot|tie up|v|verbs||SR ~p. 80 (opp. hubad = untie).|gapos; tali
atipan|watch over; guide; take care of|v|verbs||SR ~p. 65.|alaga
uyon|agree with; be in favour of|v|verbs||SR ~p. 68.|sang-ayon
bisyo|vice; bad habit (smoking, drinking)|n|substances||SR ~p. 98 [Sp].|bisyo
bagwas|separate; leave; divorce|v|family||SR ~p. 77.|hiwalay
kambyado|changed; changeable|adj|mind||SR ~p. 123 [Sp].|nagbago
panubli-on|inheritance; inherited trait|n|family||SR ~p. 295.|mana
lagaw|go around; travel about; wander|v|verbs||SR ~p. 238. naglagaw-lagaw = wandered about.|gala
ampon|adopt; adopted child|v|family||SR ~p. 54.|ampon
basag|broken|adj|adjectives||SR ~p. 87 (syn. pusa'). buong (break) is Hiligaynon.|basag; sira
barang|be cursed or bewitched (illness sent by sorcery)|v|folk||SR ~p. 86 (ST4). nabarang = bewitched.|kulam
# Part 6, 2026-11-19 (0.2.7): child and adolescent words, each checked against SR before use.
kamang|crawl (on all fours)|v|verbs||SR ~p. 123 (RV6).|gapang
partera|midwife|n|health||SR ~p. 254 [Sp] (given as synonym of the native word for midwife).|hilot; komadrona
maestra|teacher (woman)|n|people||SR ~p. 252 [Sp] (Nakahambae eon ako sa maestra = I already spoke to the teacher); maestro = man teacher.|guro; titser
eskwelahan|school (the building)|n|daily||SR ~p. 234 (headword eskuylahan, alt. eskwelahan; Eng school is marked Akl: eskuylahan).|paaralan
sunlog|tease; joke with; kid|v|verbs||SR ~p. 353 (sunlogon = teaser).|tukso; biro
masinueundon|obedient; docile|adj|emotions|sunod|SR ~p. 353 (opp. disobedient).|masunurin
sunod|follow; obey|v|verbs||SR ~p. 353 (RV3; syn. tuman, pati). masunod = next.|sunod; sumunod
tuman|obey; follow; oblige|v|verbs||SR ~p. 384 (RV1; syn. sunod).|sunod; tupad
ealis|disobey|v|verbs||SR ~p. 176 (opp. sunod, tuman).|sumuway
eahog|naughty; mischievous; misbehaved|adj|emotions||SR ~p. 105, 179 (syn. of bugoy, eangas; opp. him-ong).|pilyo; malikot
bulingag|stubborn; hard-headed|adj|emotions||SR ~p. 107 (alt. balingag, bingkoe).|matigas ang ulo
silot|punishment; penalty|n|people||SR ~p. 342; SR ~p. 130 gives kastigo [Sp] with Akl: silot.|parusa
ihi|urine; urinate|v|body||SR ~p. 226 (ihi' n.; RV5 = urinate); Natag-ihi' ako = I need to urinate.|ihi
kameot|touch (with the fingers)|v|verbs||SR ~p. 124 (RV1; syn. kawkaw).|hawak; hipo
pae-at|be absent; leave a gap|v|daily||SR ~p. 289 (RV3); Eng absent is marked Akl: pae-at.|liban; absent
pasuso|breastfeed; suckle|v|family|suso|SR ~p. 355 (CV; Pasuswa ro eapsag = Suckle the baby).|pasusuhin
hampang|play|v|verbs||SR ~p. 205 (RV3); Z p. 39 (hampangan = toy).|laro
bakuna|vaccinate|v|health||SR ~p. 71 (RV3).|bakuna
kurot|pinch|v|verbs||SR ~p. 147 (RV1); sangkurot = a little bit (Z).|kurot
binata|young man; bachelor|n|people||SR ~p. 89 (binata', syn. soltero).|binata
gamit|use; thing, article|v|verbs||SR ~p. 191 (RV1 = use; n. = article, thing).|gamit
`);
