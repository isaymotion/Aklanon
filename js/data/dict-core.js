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
makaron|now|adv|time||Z (mga alas tres makaron).|ngayon
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
asawa|spouse|n|family||Z.|asawa
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
kaibahan|companion|n|people|||kasama
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
eskwela|school|n|daily|||eskwela
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
sugid|tell; relate|v|verbs||Sugidi ako = tell me.|sabi; kuwento
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
lipat|forget|v|verbs||Z (hilipatan).|limot
dumdum|remember; keep in mind|v|verbs||SR ~p. 167 (dumdum RV1); also padumdum = remind. Spelled dumdum.|alala
patay|die; dead|v|verbs||Z (patay).|patay
kabuhi|life|n|mind|buhi||buhay
buhi|alive; live|adj|mind||SR ~p. 106 (buhi' = alive, opp. patay).|buhay
sakit sa ueo|headache|phr|health|sakit||sakit ng ulo
hilo|become dizzy; feel faint|v|health||SR ~p. 213 (hilo ST2); also mabuyog = dizzy (~p. 114). lipong is Hiligaynon.|hilo
suka|vomit|v|health|||suka
away|quarrel; fight|v|verbs||SR ~p. 66.|away
bunae|hit; beat|v|verbs|||bugbog
daeagan|run|v|verbs|||takbo
tago|hide|v|verbs||SR ~p. 363.|tago
obra|work (verb)|v|verbs||Z (magapangobra).|trabaho
pahuway|rest|v|verbs||SR ~p. 291 (relax, rest from).|pahinga
sueat|write|v|verbs||SR ~p. 349.|sulat
basa|read|v|verbs||Z (Basaha ra).|basa
tan-aw|look at|v|verbs||Z (Tan-awa).|tingin
tudlo|point; teach|v|verbs||Itudlo = point to.|turo
sugod|start|v|verbs|||simula
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
saea|wrong; mistake|n|adjectives|||mali
matuod|true|adj|adjectives||SR ~p. 386.|totoo
puril|lie; falsehood|n|adjectives||SR ~p. 113 marks butig as Hiligaynon with Akl: puril; purilon = liar.|kasinungalingan
abo|many; much|adj|quantity||SR ~p. 156 marks damo' as Hiligaynon with Akl: abo'; Z "abo' nga saeamat". Kalibo speakers also say madamo.|marami
sangkiri|few; a little|adj|quantity|kiri|SR ~p. 118, 136 (kiri' = few; sangkiri' = a little bit). diutay is Hiligaynon.|kaunti
sangkurot|a little|adj|quantity||Z.|kaunti
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
`);
