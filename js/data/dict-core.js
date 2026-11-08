/* Dictionary part 1: core and clinical words.
   Format per line: aklanon | english | part of speech | category | root (optional) | note (optional) | tagalog (optional)
   Empty optional columns are written as ||. To add words, append lines in the same format.
   Sources: Z = attested in Zorc & de la Cruz 1968 (grammar) or Salas Reyes et al. 1969 (dictionary), as read through a rough OCR;
   unmarked entries are the author's draft from general Western Bisayan knowledge. ALL entries await native-speaker review.
   Spelling: "e" before a vowel is the Aklanon velar sound (bueak, baeay). */
window.DICT_RAW = window.DICT_RAW || [];
window.DICT_RAW.push(`
huo|yes|interj|basics|||oo
indi|no; not (future, habitual); won't|adv|basics||Z. Negates future and unreal actions and is the plain answer "no".|hindi
owa|none; there is no; did not|adv|basics||Z (owa'). Negates existence and completed actions: Owa ako it kwarta.|wala
ayaw|don't (prohibitive)|adv|basics||Z. Not "doesn't want" as in Tagalog.|huwag
bukon|not (before a noun or adjective)|adv|basics||Z (bukon it). Bukon it doktor imaw.|hindi
siguro|maybe; perhaps|adv|basics|||siguro
salamat|thank you|interj|basics|||salamat
salamat gid|thank you very much|phr|basics|||maraming salamat
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
agod|so that|conj|grammar|||para
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
gabii|night; evening|n|time|||gabi
adlaw|day; sun|n|time||Z.|araw
semana|week|n|time||Z (sa masunod nga semana).|linggo
buean|month; moon|n|time||Z.|buwan
dag-on|year|n|time||Z.|taon
oras|hour; time|n|time||Z.|oras
adlaw-adlaw|every day|adv|time|adlaw||araw-araw
pirme|always|adv|time|||palagi
kun kaisa|sometimes|adv|time|||minsan
talagsa|rarely|adv|time|||bihira
sadto|before; back then|adv|time|||noon
masunod|next; following|adj|time||Z.|susunod
isaea|one|num|numbers||Z also sambato.|isa
daywa|two|num|numbers||Z.|dalawa
tatlo|three|num|numbers||Z.|tatlo
ap-at|four|num|numbers||Z.|apat
lima|five|num|numbers||Z.|lima
an-om|six|num|numbers|||anim
pito|seven|num|numbers|||pito
waeo|eight|num|numbers|||walo
siyam|nine|num|numbers|||siyam
pueo|ten|num|numbers||Also napueo.|sampu
gatos|hundred|num|numbers||Z.|daan
tawo|person; people|n|people||Z.|tao
eaki|man; male|n|people|||lalaki
bayi|woman; female|n|people|||babae
unga|child|n|people||Z (unga').|bata; anak
asawa|spouse|n|family||Z.|asawa
nanay|mother|n|family||Z (nay, ina). Title Nay.|nanay
tatay|father|n|family||Z. Title Tay.|tatay
manong|older brother; older man (title Nong)|n|family|||kuya
manang|older sister; older woman (title Nang)|n|family|||ate
lolo|grandfather|n|family|||lolo
lola|grandmother|n|family|||lola
toto|boy; young man (address)|n|family|||totoy
inday|girl; young woman (address)|n|family|||neneng
pamilya|family|n|family|||pamilya
amigo|friend (male)|n|people||Z.|kaibigan
amiga|friend (female)|n|people|||kaibigan
kaibahan|companion|n|people|||kasama
kaingod|neighbour|n|people|||kapitbahay
doktor|doctor|n|people|||doktor
nars|nurse|n|people|||nurse
pasyente|patient|n|people|||pasyente
albularyo|folk healer|n|people|||albularyo
pulis|police|n|people|||pulis
pari|priest|n|people||Z (pari').|pari
baeay|house; home|n|daily|||bahay
ospital|hospital|n|daily|||ospital
klinika|clinic|n|daily|||klinika
trabaho|work; job|n|daily|||trabaho
obra|work; make|n|daily||Z.|gawa
kwarta|money|n|daily|||pera
eskwela|school|n|daily|||eskwela
banwa|town|n|daily||Z.|bayan
baryo|village|n|daily|||baryo
dagat|sea|n|daily||Z.|dagat
uma|farm; field|n|daily|||bukid
baybay|beach|n|daily||Z.|dalampasigan
tubi|water|n|daily|||tubig
kan-on|cooked rice|n|daily|||kanin
pagkaon|food|n|daily|kaon|Z.|pagkain
isda|fish|n|daily||Z.|isda
tambae|medicine|n|health|||gamot
tuba|coconut wine|n|substances||Z.|tuba
alak|liquor|n|substances|||alak
sigarilyo|cigarette|n|substances|||sigarilyo
mama|betel quid|n|substances|||nganga
eawas|body|n|body|||katawan
ueo|head|n|body|||ulo
mata|eye|n|body||Z.|mata
dueonggan|ear|n|body|||tainga
baba|mouth|n|body|||bibig
tiyan|stomach; belly|n|body|||tiyan
dughan|chest|n|body|||dibdib
tagipusuon|heart|n|body|||puso
alima|hand|n|body||Z (ring alima).|kamay
siki|foot; leg|n|body|||paa
utok|brain|n|body|||utak
ginhawa|breath; health|n|body||Z.|hininga
isip|mind; thought|n|mind|||isip
hunahuna|mind; thinking|n|mind|||isip
kaeag|soul; spirit|n|mind|||kaluluwa
damgo|dream|n|mind|||panaginip
boses|voice|n|mind|||boses
sakit|pain; illness|n|health|||sakit
masakit|painful; sick|adj|health|sakit||masakit
eagnat|fever|n|health||Z.|lagnat
kapoy|tiredness|n|health|||pagod
kapoy gid|very tired|phr|health|kapoy||pagod na pagod
gana|appetite|n|health|||gana
tueog|sleep|n|health|||tulog
subo|sadness|n|emotions|||lungkot
masubo|sad|adj|emotions|subo||malungkot
lipay|joy; happiness|n|emotions||Z.|saya
malipayon|happy|adj|emotions|lipay||masaya
hadlok|fear|n|emotions|||takot
nahadlok|afraid|adj|emotions|hadlok||takot
akig|anger|n|emotions|||galit
naakig|angry|adj|emotions|akig||galit
huya|shame; face|n|emotions||Z.|hiya
nahuhuya|ashamed; shy|adj|emotions|huya||nahihiya
mingaw|lonely; missing someone|adj|emotions||Z.|nalulungkot; nangungulila
kabalaka|worry|n|emotions|||pag-aalala
nagakabalaka|worried|v|emotions|balaka||nag-aalala
kulba|nervousness; palpitation|n|emotions|||kaba
buang|crazy; insane (stigmatizing)|adj|mind||Avoid with patients.|baliw
kaon|eat|v|verbs||Z. nagkaon, nagakaon, magakaon.|kain
inom|drink|v|verbs|||inom
tueog|sleep|v|verbs||matueog, nakatueog.|tulog
kita|see|v|verbs||Z (kita').|kita
bati|hear|v|verbs|||dinig
hambae|speak; say|v|verbs|||salita
istorya|talk; converse|v|verbs||mag-istorya.|usap
sugid|tell; relate|v|verbs||Sugidi ako = tell me.|sabi; kuwento
pangutana|ask|v|verbs|||tanong
sabat|answer|v|verbs|||sagot
maman-an|know (fact)|v|verbs||Indi ko maman-an = I don't know.|alam
kilaea|know (a person); recognize|v|verbs|||kilala
intindi|understand|v|verbs||maintindihan.|intindi
hangop|understand; grasp|v|verbs|||unawa
gusto|want; like|v|verbs||Z.|gusto
kinahangean|need|v|verbs|||kailangan
bulig|help|v|verbs|||tulong
tao|give|v|verbs||itao.|bigay
hueat|wait|v|verbs|||hintay
agto|go|v|verbs||Z (agto', adto).|punta
abot|arrive; come|v|verbs|||dating
panaw|leave; walk|v|verbs||Z.|alis; lakad
balik|return|v|verbs|||balik
lingkod|sit|v|verbs||Z.|upo
tindog|stand|v|verbs|||tayo
hibi|cry|v|verbs|||iyak
isip|think|v|verbs||mag-isip, nagaisip.|isip
lipat|forget|v|verbs||Z (hilipatan).|limot
dumdom|remember|v|verbs|||alala
patay|die; dead|v|verbs||Z (patay).|patay
kabuhi|life|n|mind|buhi||buhay
buhi|alive; live|adj|mind|||buhay
sakit sa ueo|headache|phr|health|sakit||sakit ng ulo
lipong|dizziness|n|health|||hilo
suka|vomit|v|health|||suka
away|quarrel; fight|v|verbs|||away
bunae|hit; beat|v|verbs|||bugbog
daeagan|run|v|verbs|||takbo
tago|hide|v|verbs|||tago
obra|work (verb)|v|verbs||Z (magapangobra).|trabaho
pahuway|rest|v|verbs|||pahinga
sueat|write|v|verbs|||sulat
basa|read|v|verbs||Z (Basaha ra).|basa
tan-aw|look at|v|verbs||Z (Tan-awa).|tingin
tudlo|point; teach|v|verbs||Itudlo = point to.|turo
sugod|start|v|verbs|||simula
untat|stop|v|verbs|||tigil
bakae|buy|v|verbs||Z (ginbakae).|bili
dako|big|adj|adjectives|||malaki
maintok|small|adj|adjectives||Z.|maliit
bag-o|new|adj|adjectives||Z.|bago
daan|old (things)|adj|adjectives|||luma
maeapit|near|adj|adjectives|||malapit
maeayo|far|adj|adjectives||Z (maeayo').|malayo
mabaskog|strong; loud|adj|adjectives|||malakas
maeuya|weak|adj|adjectives|||mahina
mainit|hot|adj|adjectives|||mainit
matugnaw|cold|adj|adjectives|||malamig
matam-is|sweet|adj|adjectives||Z (tam-is).|matamis
husto|right; correct; enough|adj|adjectives||Z.|tama
saea|wrong; mistake|n|adjectives|||mali
matuod|true|adj|adjectives|||totoo
butig|lie; false|n|adjectives|||kasinungalingan
madamo|many; much|adj|quantity|||marami
diutay|few; little|adj|quantity|||kaunti
sangkurot|a little|adj|quantity||Z.|kaunti
tanan|all|adj|quantity|||lahat
ngaean|name|n|basics|||pangalan
edad|age|n|basics||Z (idad).|edad
Akean|Aklan|n|places|||Aklan
Inakeanon|the Aklanon language|n|places|||Aklanon
Akeanon|Aklanon (person)|n|places|||Aklanon
Kalibo|Kalibo|n|places|||Kalibo
aswang|aswang (folk monster)|n|folk||Z.|aswang
kulam|sorcery|n|folk||Z.|kulam
multo|ghost|n|folk||Z.|multo
ingkanto|enchanted being|n|folk||Z.|engkanto
pasma|folk illness from heat/cold exposure|n|folk||Z.|pasma
anting-anting|amulet|n|folk||Z.|anting-anting
`);
