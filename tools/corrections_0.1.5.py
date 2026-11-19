#!/usr/bin/env python3
"""Apply source-verified corrections (Salas Reyes et al. 1969 dictionary = SR, Zorc & de la Cruz 1968 = Z)
to the Mag-istorya Kita content files. Page numbers are SR book pages (~ PDF page - 4)."""
import re, sys
R = '/home/claude/aklanon/js/data/'
files = {n: open(R + n).read() for n in ['lessons.js', 'psych-phrases.js', 'psych-answers.js', 'dict-core.js']}
log = []

def sub_all(names, old, new, regex=False, count_expect=None):
    tot = 0
    for n in names:
        s = files[n]
        if regex:
            s2, k = re.subn(old, new, s)
        else:
            k = s.count(old); s2 = s.replace(old, new)
        files[n] = s2; tot += k
    log.append(f"{old!r} -> {new!r}: {tot}")
    return tot

CONTENT = ['psych-phrases.js', 'psych-answers.js', 'lessons.js']

# ---------- 1. whole-word replacements in phrases / replies / lessons ----------
W = lambda w: r'(?<![A-Za-z\-])' + w + r'(?![A-Za-z\-])'
# saeamat (SR ~p. 327): "Salamat po" in the Tagalog column of lessons must stay Tagalog, so target Aklanon contexts only.
sub_all(CONTENT, W('Salamat gid'), 'Saeamat gid', True)
sub_all(['lessons.js'], '<b>Salamat.</b>', '<b>Saeamat.</b>')
sub_all(CONTENT, W('salamat gid'), 'saeamat gid', True)
# permi (SR ~p. 16, 24 examples "Permi ako nagakaon it humay")
sub_all(CONTENT, W('Pirme'), 'Permi', True); sub_all(CONTENT, W('pirme'), 'permi', True)
# tagipuso-on (SR ~p. 316, 362)
sub_all(CONTENT, 'tagipusuon', 'tagipuso-on')
# bueong = medicine (SR ~p. 13641 example "Imna ro bueong"); tambae is Hiligaynon tambal
sub_all(CONTENT, W('tambae'), 'bueong', True); sub_all(CONTENT, W('Tambae'), 'Bueong', True)
# kueba' (SR ~p. 139: kueba' n. fear, timidity; "Ginakueba-an ako" I'm trembling with fear; pakueba' feel nervous)
sub_all(CONTENT, 'Ginakulbaan', 'Ginakueba-an'); sub_all(CONTENT, 'ginakulbaan', 'ginakueba-an')
sub_all(CONTENT, W('kulba'), 'kueba', True); sub_all(CONTENT, W('Kulba'), 'Kueba', True)
# hueas = sweat (SR ~p. 218)
sub_all(CONTENT, 'nagbaehas', 'naghueas'); sub_all(CONTENT, W('baehas'), 'hueas', True)
# hilo = become dizzy (SR ~p. 213), mabuyog = dizzy (SR ~p. 114)
sub_all(CONTENT, 'naglipong', 'naghilo')
# ataki (SR ~p. 65)
sub_all(CONTENT, W('atake'), 'ataki', True)
# huna-huna (SR ~p. 200 "Akl: isip, huna'-huna', paino-ino")
sub_all(CONTENT, 'hunahuna', 'huna-huna')
# gaoy = tired (SR ~p. 192, "Owa ako gagaoy" I'm not tired); kapoy is Hiligaynon
sub_all(CONTENT, 'pero indi kamo kapoy?', 'pero owa kamo gagaoy?')
sub_all(CONTENT, 'pero indi ka kapoy?', 'pero owa ka gagaoy?')
sub_all(CONTENT, "'Pirme kamo kapoy?'", "'Permi kamo gagaoy?'")  # already Permi above; harmless
sub_all(CONTENT, "'Permi kamo kapoy?'", "'Permi kamo gagaoy?'")
sub_all(CONTENT, "'Permi ka kapoy?'", "'Permi ka gagaoy?'")
sub_all(CONTENT, "'Indi ako kapoy bisan owa ako it tueog.'", "'Owa ako gagaoy bisan owa ako it tueog.'")
sub_all(CONTENT, "'Kapoy ako permi.'", "'Gagaoy ako permi.'")
sub_all(CONTENT, W('kapoy'), 'gaoy', True); sub_all(CONTENT, W('Kapoy'), 'Gaoy', True)
# abo' = many (SR ~p. 156 "damo' [Hil] ... Akl: abo'"; Z "abo' nga saeamat")
sub_all(CONTENT, W('madamo'), 'abo', True); sub_all(CONTENT, W('Madamo'), 'Abo', True)
# buhay = long time (SR ~p. 105 mabuhay, kabuhay); dugay is Hiligaynon
sub_all(CONTENT, 'nagdugay', 'nagbuhay'); sub_all(CONTENT, 'kadugay', 'kabuhay'); sub_all(CONTENT, 'madugay', 'mabuhay')
# delikado in SR = fragile, touchy (~p. 162); danger = peligro (~p. 305)
sub_all(CONTENT, 'nga delikado', 'nga may peligro')
# tindahan = market (SR ~p. 13, 69 "baeakean, tindahan"); palengke not listed
sub_all(CONTENT, 'sa palengke', 'sa tindahan')
# kon amat = sometimes (SR ~p. 139, 142); paeangta' = seldom (~p. 289)
sub_all(CONTENT, "'Kon kaisa lang.'", "'Kon amat lang.'")
sub_all(CONTENT, "'Talagsa lang.'", "'Paeangta lang.'")
sub_all(['lessons.js'], '<b>kun kaisa</b> / <b>kaisa-isa</b> ◌', '<b>kon amat</b> (SR ~p. 142)')
sub_all(['lessons.js'], '<b>talagsa</b> ◌', '<b>paeangta</b> (SR ~p. 289)')
sub_all(['lessons.js'], '<b>pirme</b></td><td>always ◌', '<b>permi</b></td><td>always (SR ~p. 16)')
sub_all(['lessons.js'], '<b>permi</b></td><td>always ◌', '<b>permi</b></td><td>always (SR ~p. 16)')
# mueto (SR ~p. 263)
sub_all(CONTENT, W('multo'), 'mueto', True)
# notes in anxiety phrases that named draft forms now attested
sub_all(['psych-phrases.js'], 'kulba = nervousness and palpitation; nagakabalaka = worried (in dictionary). Ask what the patient means by kulba.',
        "kueba' is attested (SR ~p. 139: fear, timidity; \"Ginakueba-an ako\" = I'm trembling with fear), so it leans to fear; ask whether the patient means fear, nerves or palpitations. kabalaka is shared with Hiligaynon; the attested Aklanon root for worry is himud-os.")
sub_all(['psych-phrases.js'], 'untat = stop (dictionary); mabudlay = difficult is a Western Bisayan draft form.', 'budlay attested (SR ~p. 102: find difficult, be exhausted); untat not found in SR.')
sub_all(['psych-phrases.js'], 'gulpi = suddenly (Spanish loan); kurog = tremble; ginhawa attested (Zorc).', 'gulpi (SR ~p. 229, opp. inanay); kurog attested as a synonym under kubig = tremble (SR ~p. 133); ginhawa attested (SR ~p. 195).')
sub_all(['psych-phrases.js'], 'lipong attested; baehas is a draft form (Hiligaynon balhas).', 'hilo = become dizzy (SR ~p. 213, same as Tagalog); hueas = sweat (SR ~p. 218).')
sub_all(['psych-phrases.js'], 'atake is the usual Kalibo word for an attack of any illness.', 'ataki [Sp] attested for heart attack or stroke (SR ~p. 65).')
sub_all(['psych-phrases.js'], 'the public market, tricycle and jeepney rides, and rural distance from help. maeayo attested (Zorc).', 'the public market (tindahan, SR ~p. 13), tricycle and jeepney rides, and rural distance from help. maeayo attested.')
sub_all(['psych-phrases.js'], 'likaw = avoid; upang = hinder; gwa = go out — all Western Bisayan draft forms to verify.', 'likaw attested (SR ~p. 242: avoid, veer away); upang and gwa not found in SR (SR has apang = but), still draft.')
sub_all(['psych-phrases.js'], 'Indiscretion: risk-taking and sexual indiscretion, asked without judgement.', 'Indiscretion: risk-taking and sexual indiscretion, asked without judgement. peligro = danger (SR ~p. 305); delikado in Aklanon means fragile or touchy.')
sub_all(['psych-phrases.js'], 'Decreased need for sleep, not insomnia: the key is the absence of tiredness.', 'Decreased need for sleep, not insomnia: the key is the absence of tiredness. gaoy = tired (SR ~p. 192, "Owa ako gagaoy"); kapoy is Hiligaynon.')

# ---------- 2. dictionary line rewrites ----------
D = {
 'huo|yes|interj|basics|||oo': "huo|yes|interj|basics||Z. SR ~p. 221 (used more narrowly than English yes).|oo",
 'salamat|thank you|interj|basics|||salamat': "saeamat|thank you|interj|basics||SR ~p. 327 (saeamat; pasaeamat = to thank). l > e between vowels; not salamat.|salamat",
 'salamat gid|thank you very much|phr|basics|||maraming salamat': "saeamat gid|thank you very much|phr|basics|saeamat|Z also abo' nga saeamat = many thanks.|maraming salamat",
 'agod|so that|conj|grammar|||para': "agod|so that|conj|grammar||SR ~p. 47.|para",
 'gabii|night; evening|n|time|||gabi': "gabii|night; evening|n|time||SR ~p. 189.|gabi",
 'pirme|always|adv|time|||palagi': "permi|always|adv|time||SR ~p. 16, 24 (Permi ako nagakaon it humay). Spelled permi, not pirme.|palagi",
 'kun kaisa|sometimes|adv|time|||minsan': "kon amat|sometimes; from time to time|adv|time||SR ~p. 142 (idm). SR gives kon kis-a as non-Aklanon with Akl: kon amat.|minsan",
 'talagsa|rarely|adv|time|||bihira': "paeangta|seldom; rarely; every now and then|adv|time||SR ~p. 289 (paeangta'). talagsa is Hiligaynon.|bihira",
 'an-om|six|num|numbers|||anim': "an-om|six|num|numbers||SR ~p. 57.|anim",
 'waeo|eight|num|numbers|||walo': "waeo|eight|num|numbers||SR ~p. 391.|walo",
 'eaki|man; male|n|people|||lalaki': "eaki|man; male|n|people||SR ~p. 173 (alt. eaeaki).|lalaki",
 'toto|boy; young man (address)|n|family|||totoy': "toto|boy; young man (address)|n|family||SR ~p. 388 (toto', common address for a boy).|totoy",
 'kaingod|neighbour|n|people|||kapitbahay': "kaingod|neighbour|n|people||SR ~p. 121 (alt. kahilapit).|kapitbahay",
 'nars|nurse|n|people|||nurse': "nars|nurse|n|people||SR ~p. 268 [Eng].|nurse",
 'albularyo|folk healer|n|people|||albularyo': "albularyo|folk healer|n|people||Not in SR, which uses herbolario in glosses and lists kurandero/kurandera (~p. 146) = healer.|albularyo",
 'baeay|house; home|n|daily|||bahay': "baeay|house; home|n|daily||SR ~p. 74.|bahay",
 'ospital|hospital|n|daily|||ospital': "ospital|hospital|n|daily||SR ~p. 222 (hospital [Sp]).|ospital",
 'baryo|village|n|daily|||baryo': "baryo|village|n|daily||SR ~p. 77.|baryo",
 'kan-on|cooked rice|n|daily|||kanin': "kan-on|cooked rice|n|daily||SR ~p. 126 (rice; staple food).|kanin",
 'tambae|medicine|n|health|||gamot': "bueong|medicine|n|health||SR ~p. 103 (bueong n. medicine, cure); ~p. 231 \"Imna ro bueong\" = Drink the medicine. tambae (Hiligaynon tambal) appears in SR only as a coagulant.|gamot",
 'mama|betel quid|n|substances|||nganga': "mama|betel quid; chew betel|n|substances||SR ~p. 253 (mama' = chew tobacco or betel nut).|nganga",
 'eawas|body|n|body|||katawan': "eawas|body|n|body||SR ~p. 182.|katawan",
 'dueonggan|ear|n|body|||tainga': "dueonggan|ear|n|body||SR ~p. 166, 168.|tainga",
 'baba|mouth|n|body|||bibig': "ba-ba|mouth|n|body||SR ~p. 69 (ba-ba'); SR marks bunganga as Tagalog.|bibig",
 'dughan|chest|n|body|||dibdib': "dughan|chest|n|body||SR ~p. 166 (chest, breast).|dibdib",
 'tagipusuon|heart|n|body|||puso': "tagipuso-on|heart|n|body||SR ~p. 316, 362 (tagipuso'-on); SR marks kasing-kasing as Hiligaynon.|puso",
 'hunahuna|mind; thinking|n|mind|||isip': "huna-huna|mind; thinking|n|mind||SR ~p. 200 lists Akl: isip, huna'-huna', paino-ino for \"idea\".|isip",
 'damgo|dream|n|mind|||panaginip': "damgo|dream|n|mind||SR ~p. 156 (damgohanon = aspirations; cf. damgo).|panaginip",
 'sakit|pain; illness|n|health|||sakit': "sakit|pain; illness|n|health||SR ~p. 326.|sakit",
 'masakit|painful; sick|adj|health|sakit||masakit': "masakit|painful; sick|adj|health|sakit|SR ~p. 326.|masakit",
 'kapoy|tiredness|n|health|||pagod': "gaoy|tired; exhausted|v|health||SR ~p. 192 (gaoy ST: to be tired; \"Owa ako gagaoy\" = I'm not tired). kapoy is Hiligaynon and not in SR.|pagod",
 'kapoy gid|very tired|phr|health|kapoy||pagod na pagod': "gaoy gid|very tired|phr|health|gaoy||Gagaoy gid ako = I'm very tired.|pagod na pagod",
 'subo|sadness|n|emotions|||lungkot': "subo|sadness|n|emotions||SR ~p. 347 (masubo' = sad, depressed).|lungkot",
 'masubo|sad|adj|emotions|subo||malungkot': "masubo|sad|adj|emotions|subo|SR ~p. 347.|malungkot",
 'malipayon|happy|adj|emotions|lipay||masaya': "malipayon|happy|adj|emotions|lipay|SR ~p. 246 (happy by nature); kalipay = joy.|masaya",
 'hadlok|fear|n|emotions|||takot': "hadlok|fear|n|emotions||SR ~p. 201 (kahadlok = fear; makahaeadlok = frightening).|takot",
 'nahadlok|afraid|adj|emotions|hadlok||takot': "nahadlok|afraid|adj|emotions|hadlok|SR ~p. 201 root.|takot",
 'akig|anger|n|emotions|||galit': "akig|anger; angry|n|emotions||SR ~p. 42 (akig adj. angry).|galit",
 'nahuhuya|ashamed; shy|adj|emotions|huya||nahihiya': "nahuhuya|ashamed; shy|adj|emotions|huya|SR ~p. 223 (makahuhuya' = shameful; mahuluy-on = shy).|nahihiya",
 'kabalaka|worry|n|emotions|||pag-aalala': "kabalaka|worry|n|emotions||Shared with Hiligaynon; not in SR. Attested Aklanon root for worry: himud-os (SR ~p. 214).|pag-aalala",
 'kulba|nervousness; palpitation|n|emotions|||kaba': "kueba|fear; timidity; nervousness|n|emotions||SR ~p. 139 (kueba' n. fear, timidity; kueba' ST = be afraid, tremble; pakueba' = feel nervous). Not kulba.|kaba",
 'buang|crazy; insane (stigmatizing)|adj|mind||Avoid with patients.|baliw': "buang|crazy; insane (stigmatizing)|adj|mind||Avoid with patients. Not in SR, which lists loko/loka, bulangog, paltik.|baliw",
 'bati|hear|v|verbs|||dinig': "bati|hear|v|verbs||Not confirmed in SR (bati(h) [Sp] there = to blend).|dinig",
 'sabat|answer|v|verbs|||sagot': "sabat|answer|v|verbs||SR ~p. 324.|sagot",
 'kinahangean|need|v|verbs|||kailangan': "kinahangean|need|v|verbs||SR ~p. 135 (n. need, necessity).|kailangan",
 'balik|return|v|verbs|||balik': "balik|return|v|verbs||SR ~p. 80.|balik",
 'hibi|cry|v|verbs|||iyak': "tangis|cry; weep|v|verbs||SR ~p. 211 marks hibi' as Hiligaynon with Akl: tangis; ~p. 369 \"Nano ring ginatangisan?\" = What are you crying about?|iyak",
 'dumdom|remember|v|verbs|||alala': "dumdum|remember; keep in mind|v|verbs||SR ~p. 167 (dumdum RV1); also padumdum = remind. Spelled dumdum.|alala",
 'lipong|dizziness|n|health|||hilo': "hilo|become dizzy; feel faint|v|health||SR ~p. 213 (hilo ST2); also mabuyog = dizzy (~p. 114). lipong is Hiligaynon.|hilo",
 'away|quarrel; fight|v|verbs|||away': "away|quarrel; fight|v|verbs||SR ~p. 66.|away",
 'tago|hide|v|verbs|||tago': "tago|hide|v|verbs||SR ~p. 363.|tago",
 'pahuway|rest|v|verbs|||pahinga': "pahuway|rest|v|verbs||SR ~p. 291 (relax, rest from).|pahinga",
 'sueat|write|v|verbs|||sulat': "sueat|write|v|verbs||SR ~p. 349.|sulat",
 'dako|big|adj|adjectives|||malaki': "bahoe|big; large|adj|adjectives||SR ~p. 78 (mabahoe = big, huge; nagbahoe = grew). dako is Hiligaynon and not in SR.|malaki",
 'daan|old (things)|adj|adjectives|||luma': "daan|old (things)|adj|adjectives||SR ~p. 180 (old rice, old maid).|luma",
 'mabaskog|strong; loud|adj|adjectives|||malakas': "mabaskog|strong; loud|adj|adjectives||SR ~p. 88.|malakas",
 'maeuya|weak|adj|adjectives|||mahina': "maeuya|weak; feeble|adj|adjectives|euya|SR ~p. 188 (euya adj. weak, not strong).|mahina",
 'matugnaw|cold|adj|adjectives|||malamig': "maeamig|cold|adj|adjectives|eamig|SR ~p. 383 marks tugnaw as Hiligaynon with Akl: eamig; \"Maeamig kuno rito sa America\".|malamig",
 'matuod|true|adj|adjectives|||totoo': "matuod|true|adj|adjectives||SR ~p. 386.|totoo",
 'butig|lie; false|n|adjectives|||kasinungalingan': "puril|lie; falsehood|n|adjectives||SR ~p. 113 marks butig as Hiligaynon with Akl: puril; purilon = liar.|kasinungalingan",
 'madamo|many; much|adj|quantity|||marami': "abo|many; much|adj|quantity||SR ~p. 156 marks damo' as Hiligaynon with Akl: abo'; Z \"abo' nga saeamat\". Kalibo speakers also say madamo.|marami",
 'diutay|few; little|adj|quantity|||kaunti': "sangkiri|few; a little|adj|quantity|kiri|SR ~p. 118, 136 (kiri' = few; sangkiri' = a little bit). diutay is Hiligaynon.|kaunti",
 'Akean|Aklan|n|places|||Aklan': "Akean|Aklan|n|places||SR ~p. 42.|Aklan",
 'Akeanon|Aklanon (person)|n|places|||Aklanon': "Akeanon|Aklanon (person)|n|places||SR ~p. 42.|Aklanon",
 'Kalibo|Kalibo|n|places|||Kalibo': "Kalibo|Kalibo|n|places||SR ~p. 122 (capital municipality of Aklan).|Kalibo",
 'multo|ghost|n|folk||Z.|multo': "mueto|ghost|n|folk||SR ~p. 263 (mueto'); SR marks multo as Tagalog. \"makasubeang kamo it mueto sa daean\".|multo",
 'kusog|strength; energy|n|body||makusog = strong, energetic.|lakas': "kusog|strength; energy|n|body||SR ~p. 148 (strength, vigor, power). makusog = strong.|lakas",
 'dasig|speed|n|adjectives||madasig = fast; kadasig = how fast.|bilis': "dasig|speed|n|adjectives||SR ~p. 159 (dasig = speed up, go faster). madasig = fast.|bilis",
 'dugay|long (time)|adj|time||nagdugay = lasted; madugay = will take long.|tagal': "buhay|last a long time; long (duration)|v|time||SR ~p. 105 (buhay = last a long time; mabuhay = long-lasting, takes too long; kabuhay = duration). dugay is Hiligaynon.|tagal",
 'gahum|power; authority|n|mind||Also gahom. Espesyal nga gahum = special power (grandiosity).|kapangyarihan': "gahum|power; authority|n|mind||SR ~p. 190 (gahom RV3 = govern, rule). Espesyal nga gahum = special power.|kapangyarihan",
 'maaeam|knowledgeable; clever|adj|adjectives|aeam|Cognate of Hiligaynon maalam; l > e between vowels.|marunong': "maaeam|knowledgeable; clever|adj|adjectives|aeam|SR ~p. 44 (intelligent, bright, wise).|marunong",
 'delikado|dangerous; risky|adj|adjectives||Spanish loan.|delikado': "peligro|danger|n|adjectives||SR ~p. 305. In Aklanon delikado means fragile or touchy (SR ~p. 162), not dangerous; arisgado = risky.|panganib",
 'halin|from; since|prep|grammar||Halin sa Diyos = from God. Also "leave".|mula': "halin|from; since|prep|grammar||SR ~p. 203 (come from, originate). Halin sa Diyos = from God.|mula",
 'plano|plan|n|mind||Spanish loan.|plano': "plano|plan|n|mind||SR ~p. 310 (plano = to plan).|plano",
 'ginakulbaan|feel nervous; have palpitations|v|emotions|kulba|Ginakulbaan ako = I feel nervous / my heart is pounding. Ask which the patient means.|kinakabahan': "ginakueba-an|be seized by fear; feel nervous|v|emotions|kueba|SR ~p. 139 \"Ginakueba-an ako\" = I'm trembling with fear. For palpitation ask about the heart (tagipuso-on) directly.|kinakabahan",
 'kahadlok|fear; being afraid|n|emotions|hadlok|ginhadlukan = was seized by fear.|takot': "kahadlok|fear; being afraid|n|emotions|hadlok|SR ~p. 201. ginhadlukan = was seized by fear (draft form).|takot",
 'butang|thing; matter|n|daily||Madamo nga butang = many things.|bagay': "butang|thing; matter|n|daily||Z root list. Abo nga butang = many things.|bagay",
 'kontrol|control|n|mind||Spanish loan; makontrol = can control.|kontrol': "kontrol|control|n|mind||SR ~p. 145 [Eng] (kontrol = to control).|kontrol",
 'budlay|difficulty; hardship|n|adjectives||mabudlay = difficult, hard. Western Bisayan form to verify for Kalibo.|hirap': "budlay|difficulty; exhaustion|n|adjectives||SR ~p. 102 (budlay ST = be exhausted; find difficult). mabudlay = hard.|hirap",
 'tungod|because of; due to|prep|grammar||Tungod sa kabalaka = because of worry.|dahil': "tungod|because of; due to|prep|grammar||SR ~p. 386 (tungod kimo = because of you).|dahil",
 'abaga|shoulder|n|body|||balikat': "abaga|shoulder|n|body||SR ~p. 39 (abaga = to shoulder, take on).|balikat",
 'gulpi|suddenly; all at once|adv|time||Spanish loan (golpe). Gulpi lang = just suddenly.|bigla': "gulpi|suddenly; all at once|adv|time||SR ~p. 229 (opp. inanay = gradually). Also hinali' = suddenly (~p. 155).|bigla",
 'kurog|tremble; shake|v|body||nagakurog = is shaking.|panginginig': "kurog|tremble; shake|v|body||SR ~p. 133 (synonym under kubig = shiver, tremble). nagakurog = is shaking.|panginginig",
 'baehas|sweat|n|body||nagbaehas = sweated. Draft form from Hiligaynon balhas; verify Aklanon spelling.|pawis': "hueas|sweat; perspire|n|body||SR ~p. 218 (hueas n. sweat; hueas RV5 = to sweat). Not balhas/baehas.|pawis",
 'atake|attack (of illness); panic attack|n|health||Spanish loan; used for any sudden episode, incl. heart attack.|atake': "ataki|attack (of illness); heart attack; stroke|n|health||SR ~p. 65 (ataki [Sp]; ataki ST4 = get a heart attack). Used for a panic attack too.|atake",
 'rason|reason|n|mind||Spanish loan. Owa it rason = no reason.|dahilan': "rason|reason|n|mind||SR ~p. 320 [Sp]. Owa it rason = no reason.|dahilan",
 'palengke|public market|n|places||Spanish loan (palenque); the Kalibo market as an agoraphobic setting.|palengke': "tindahan|market; store|n|places||SR ~p. 13, 69 (\"Ginbakae ko ra sa tindahan\" = I bought this at the market; also baeakean = store, market). palengke is not in SR.|palengke",
 'likaw|avoid|v|verbs||ginalikawan = is avoided. Western Bisayan form to verify.|iwas': "likaw|avoid; veer away from|v|verbs||SR ~p. 242 (likaw RV3). ginalikawan = is avoided.|iwas",
 'upang|hinder; obstruct|v|verbs||nakaupang = has hindered. Western Bisayan form to verify.|hadlang': "upang|hinder; obstruct|v|verbs||Not in SR (SR apang = but). Draft; SR gives baeabag = block, thwart (~p. 72).|hadlang",
 'bantay|watch; guard|v|verbs||ginabantayan = is being watched.|bantay': "bantay|watch; guard|v|verbs||SR ~p. 83 [Ch]. ginabantayan = is being watched.|bantay",
 'husga|judge (a person)|v|verbs||Spanish loan (juzgar); ginahusgahan = is being judged.|husga': "husga|judge (a person)|v|verbs||SR ~p. 222 lists husgar [Sp] with Akl: hukom. ginahusgahan = is being judged.|husga",
 'atubangan|front; in front of|n|daily||Sa atubangan nanda = in front of them.|harapan': "atubangan|front; in front of|n|daily||SR ~p. 66. Sa atubangan nanda = in front of them.|harapan",
 'kaimaw|together with; companion|prep|people||Z (imaw). Kaimaw nanda = with them.|kasama': "kaimaw|together with; companion|prep|people||Not found in SR (SR: dungan = together; kaaeundog = companion). Draft.|kasama",
 'kape|coffee|n|daily||Spanish loan.|kape': "kape|coffee|n|daily||SR ~p. 127 lists kape only as café; the drink is a loan used everywhere.|kape",
 'buhi|alive; live|adj|mind|||buhay': "buhi|alive; live|adj|mind||SR ~p. 106 (buhi' = alive, opp. patay).|buhay",
 'ueo|head|n|body|||ulo': "ueo|head|n|body||Z sound rules (ulo > ueo).|ulo",
 'hueat|wait|v|verbs|||hintay': "hueat|wait|v|verbs||Z (Hueat anay). SR hueat n. there = partition.|hintay",
}
s = files['dict-core.js']; miss = []
for old, new in D.items():
    if ('\n' + old + '\n') in s: s = s.replace('\n' + old + '\n', '\n' + new + '\n', 1)
    else: miss.append(old)
files['dict-core.js'] = s
log.append(f"dict rewrites: {len(D) - len(miss)} applied, missing: {miss}")

# ---------- 3. new attested entries ----------
NEW = """himud-os|worry (about)|v|emotions||SR ~p. 214 (himud-os RV8 = to worry about); konsumido = worried (~p. 144).|mag-alala
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
"""
files['dict-core.js'] = files['dict-core.js'].replace('\n`);', '\n' + NEW + '`);', 1)
log.append('new entries: ' + str(NEW.count('\n')))

for n, s in files.items(): open(R + n, 'w').write(s)
print('\n'.join(log))
