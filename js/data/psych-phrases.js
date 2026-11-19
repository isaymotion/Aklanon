/* Psychiatry Aklanon: interview phrase sections. DRAFT: not yet reviewed by a native Akeanon speaker.
   Each phrase: en, f (respectful: plural kamo / ninyo / kinyo for one person, with a title such as Nay, Tay, Manong,
   Manang), c (everyday: ikaw / ka / mo; may mix in Tagalog or English as Kalibo speakers do), n (note, optional),
   answers (optional likely replies [aklanon, english]).
   Section ids key saved flashcards ('p:<section>:<index>') and review flags: keep ids and phrase order stable.
   Lines are deliberately short and built from attested vocabulary (Zorc & de la Cruz 1968; Salas Reyes et al. 1969);
   they are practice phrasings for training, not validated translations. Confirm with Aklanon-speaking staff.
   Convention: the title in f lines is "Nay" as a placeholder; swap for Tay / Nong / Nang / Lola / Lolo as fits. */
window.PSYCH_SECTIONS = [
{
  id: 'opening', group: 'Interview', title: 'Opening and rapport',
  intro: 'Greet, introduce yourself, say plainly that you are learning Aklanon, and set the agenda. A warm opening lowers huya (hiya). Without po, respect lives in kamo/ninyo and the title.',
  phrases: [
    { en: 'Good morning. I\'m Dr. Navarro, one of the doctors here.', f: 'Mayad-ayad nga aga, Nay. Ako si Dr. Navarro, isaea sa mga doktor riya.', c: 'Mayad nga aga. Ako si Dr. Navarro, isaea sa mga doktor riya.' },
    { en: 'What would you like me to call you?', f: 'Ano ro gusto ninyo nga itawag ko kinyo?', c: 'Ano ro gusto mo nga itawag ko kimo?' },
    { en: 'Please have a seat.', f: 'Lingkod anay kamo, Nay.', c: 'Lingkod anay.', n: 'Zorc p. 68: Lingkod anay kamo = please sit down.' },
    { en: 'I\'m still learning Aklanon. Please tell me if you don\'t understand me.', f: 'Nagatuon pa ako it Inakeanon. Sugidi ako kon indi ninyo ako maintindihan.', c: 'Nagatuon pa ako it Inakeanon. Sugidi lang ako kon indi mo ako maintindihan.', n: 'Say this early. It earns patience and gives the patient permission to switch to Tagalog.' },
    { en: 'Is it all right if we speak in Aklanon, or would you prefer Tagalog?', f: 'Okay lang kinyo nga mag-Inakeanon kita, ukon mas gusto ninyo it Tagalog?', c: 'Okay lang kimo nga mag-Inakeanon kita, ukon mas gusto mo Tagalog?' },
    { en: 'We have about thirty minutes to talk.', f: 'May mga trenta minutos kita para mag-istorya.', c: 'May mga 30 minutes kita para mag-istorya.' },
    { en: 'I will ask many questions. Some may feel personal. You may tell me if you do not want to answer.', f: 'Abo ako it pangutana. Ro iba hay personal. Sugidi lang ako kon indi ninyo gusto magsabat.', c: 'Abo ako it pangutana. Ro iba personal. Sugidi lang ako kon indi mo gusto magsabat.' },
    { en: 'Everything you tell me stays between us and the care team.', f: 'Ro tanan nga isugid ninyo kakon hay sa aton lang ag sa mga nagaatipan kinyo.', c: 'Ro tanan nga isugid mo kakon hay sa aton lang ag sa mga nagaatipan kimo.' },
    { en: 'Who is with you today?', f: 'Sin-o ro kaibahan ninyo makaron?', c: 'Sin-o ro kaibahan mo makaron?' },
    { en: 'What brings you here today?', f: 'Ano ro rason it inyong pag-abot riya makaron?', c: 'Ano ro rason nga nag-abot ka riya?' }
  ]
},
{
  id: 'hpi', group: 'Interview', title: 'History of present illness',
  intro: 'Onset, course, duration and impact. The duration formula NUMBER ka UNIT eon (Zorc pp. 165–166) answers most "how long" questions.',
  phrases: [
    { en: 'What is the problem?', f: 'Ano ro problema ninyo, Nay?', c: 'Ano ro problema mo?' },
    { en: 'When did it start?', f: 'Kan-o nagsugod?', c: 'Kan-o nagsugod?', n: 'kan-o = when (past). Zorc p. 122.' },
    { en: 'Since when have you felt this way?', f: 'Kan-o pa ninyo ginabatyag raya?', c: 'Kan-o pa mo ginabatyag raya?' },
    { en: 'How long has this been going on? Days, weeks, months?', f: 'Pila eon ka adlaw, semana, ukon buean raya?', c: 'Pila eon ka adlaw, semana, ukon buean?' },
    { en: 'Did it start suddenly or slowly?', f: 'Hinali ro pagsugod, ukon amat-amat?', c: 'Hinali ukon amat-amat?' },
    { en: 'Is it getting worse, better, or the same?', f: 'Nagagrabe, nagamayad, ukon pareho lang?', c: 'Nagagrabe, nagamayad, ukon pareho lang?' },
    { en: 'What happened before this started?', f: 'Ano ro natabo bago raya nagsugod?', c: 'Ano ro natabo bago raya nagsugod?' },
    { en: 'Has this happened before?', f: 'Natabo eon raya sadto?', c: 'Natabo eon raya sadto?' },
    { en: 'Have you seen a doctor or a healer for this?', f: 'Nagpa-doktor eon kamo, ukon nagpa-albularyo, para riya?', c: 'Nagpa-doktor ka eon ukon nagpa-albularyo para riya?', n: 'Ask about the albularyo without judgement; many families consult both.' },
    { en: 'Are you taking any medicine?', f: 'May ginainom kamo nga bueong?', c: 'May ginainom ka nga bueong?' },
    { en: 'How does this affect your work and your family?', f: 'Paano raya nakaapekto sa inyong trabaho ag pamilya?', c: 'Paano raya nakaapekto sa trabaho ag pamilya mo?' },
    { en: 'Is there anything else bothering you?', f: 'May iba pa nga nagapabalaka kinyo?', c: 'May iba pa nga nagapabalaka kimo?' }
  ]
},
{
  id: 'depression', group: 'Interview', title: 'Depressed mood and SIGECAPS',
  intro: 'Mood, interest, sleep, appetite, energy, concentration, guilt and worthlessness. Keep each question to one symptom.',
  phrases: [
    { en: 'How has your mood been lately?', f: 'Ano ro pamatyag ninyo kang mga nagligad nga adlaw?', c: 'Ano ro pamatyag mo kang mga nagligad nga adlaw?' },
    { en: 'Have you been feeling sad or down?', f: 'Nagabatyag kamo it kasubo?', c: 'Masubo ka?' },
    { en: 'Do you still enjoy the things you used to enjoy?', f: 'Nalipay pa kamo sa mga butang nga ginakalipay ninyo sadto?', c: 'Nalipay ka pa sa mga butang nga ginakalipay mo sadto?' },
    { en: 'How is your sleep?', f: 'Mauno ro tueog ninyo?', c: 'Mauno ro tueog mo?' },
    { en: 'Do you have trouble falling asleep, or do you wake up too early?', f: 'Mabudlay kamo makatueog, ukon temprano kamo nagabugtaw?', c: 'Mabudlay ka makatueog, ukon temprano ka nagabugtaw?' },
    { en: 'How is your appetite? Have you lost weight?', f: 'Mauno ro gana ninyo sa pagkaon? Nagniwang kamo?', c: 'May gana ka magkaon? Nagniwang ka?' },
    { en: 'Do you feel tired all the time?', f: 'Permi kamo gagaoy?', c: 'Permi ka gagaoy?' },
    { en: 'Is it hard to concentrate, for example when reading or watching TV?', f: 'Mabudlay kamo mag-pokus, halimbawa kon nagabasa ukon nagatan-aw it TV?', c: 'Mabudlay ka mag-pokus, halimbawa kon nagabasa ukon nagatan-aw TV?' },
    { en: 'Do you feel guilty or feel that you are a burden?', f: 'Nagabatyag kamo nga may saea kamo, ukon nga paeas-anon kamo it iba?', c: 'Nagabatyag ka nga may saea ka, ukon nga paeas-anon ka it iba?' },
    { en: 'Do you feel worthless or hopeless?', f: 'Nagabatyag kamo nga owa kamo it pueos, ukon owa eon it paglaom?', c: 'Nagabatyag ka nga owa ka it pueos, ukon owa eon it paglaom?' },
    { en: 'Do you cry more than usual?', f: 'Mas madalas kamo maghibi kaysa sadto?', c: 'Mas madalas ka maghibi kaysa sadto?' },
    { en: 'On most days, how many hours do you sleep?', f: 'Sa masunson, pila ka oras ro tueog ninyo?', c: 'Pila ka oras ro tueog mo kada gabii?' }
  ]
},
{
  id: 'suicide', group: 'Risk', title: 'Suicide risk',
  intro: 'Screen, then explore ideation, plan, means, intent, past attempts and protective factors. Ask directly; asking does not plant the idea. Verify any affirmative answer through an Aklanon-speaking nurse if your comprehension is uncertain.',
  phrases: [
    { en: 'Sometimes when people feel this way, they think it would be better to be dead. Has this happened to you?', f: 'Kon amat, kon amo raya ro pamatyag, nagaisip ro tawo nga mas mayad pa nga mapatay. Natabo raya kinyo?', c: 'Kon amat, kon amo raya ro pamatyag, nagaisip ro tawo nga mas mayad pa nga mapatay. Natabo raya kimo?', n: 'Normalization first (Shea).' },
    { en: 'Have you had thoughts of hurting yourself?', f: 'May naisip kamo nga sakitan ro inyong kaugalingon?', c: 'May naisip ka nga sakitan ro imong kaugalingon?' },
    { en: 'Have you thought about ending your life?', f: 'Nagaisip kamo nga tapuson ro inyong kabuhi?', c: 'Nagaisip ka nga tapuson ro imong kabuhi?' },
    { en: 'When did you last have these thoughts?', f: 'Kan-o ro ulihi nga naisip ninyo raya?', c: 'Kan-o ro ulihi nga naisip mo raya?' },
    { en: 'How often do these thoughts come?', f: 'Pila ka beses nagaabot raya nga isip?', c: 'Pila ka beses nagaabot raya nga isip?' },
    { en: 'Do you have a plan? How would you do it?', f: 'May plano kamo? Paano ninyo himuon?', c: 'May plano ka? Paano mo himuon?' },
    { en: 'Do you have the means to do it?', f: 'May paagi kamo nga himuon raya?', c: 'May paagi ka nga himuon raya?' },
    { en: 'Have you tried to hurt yourself before?', f: 'Nagtinguha eon kamo sadto nga sakitan ro inyong kaugalingon?', c: 'Nagtinguha ka eon sadto nga sakitan ro imong kaugalingon?' },
    { en: 'What has kept you going until now?', f: 'Ano ro nagapabaskog kinyo hasta makaron?', c: 'Ano ro nagapabaskog kimo hasta makaron?', n: 'Protective factors: children, faith, family.' },
    { en: 'Is there anyone you can turn to when you feel this way?', f: 'May tawo nga mapaeapitan ninyo kon amo raya ro pamatyag ninyo?', c: 'May tawo nga mapaeapitan mo kon amo raya ro pamatyag mo?' },
    { en: 'Can you promise to tell someone right away if the thoughts come back?', f: 'Mapromisa kamo nga magsugid eagi sa isaea ka tawo kon magbalik raya nga isip?', c: 'Mapromisa ka nga magsugid eagi kon magbalik raya nga isip?' },
    { en: 'Thank you for telling me. You are not alone in this.', f: 'Saeamat gid sa pagsugid kakon. Bukon kamo it isaeahanon riya.', c: 'Saeamat gid sa pagsugid. Bukon ka it isaeahanon riya.' }
  ]
},
{
  id: 'psychosis', group: 'Interview', title: 'Hallucinations and delusions',
  intro: 'Normalize, ask about each sense, then content, command quality and conviction. Distinguish culturally shared beliefs (aswang, kulam) from fixed idiosyncratic ones by asking what the family thinks.',
  phrases: [
    { en: 'Sometimes when people are under stress, they hear or see things others do not. Has that happened to you?', f: 'Kon amat, kon may stress ro tawo, may nababatian ukon nakikita imaw nga owa it iba nga nakabati ukon nakakita. Natabo raya kinyo?', c: 'Kon amat, kon may stress, may nababatian ukon nakikita ro tawo nga owa it iba nga nakabati ukon nakakita. Natabo raya kimo?' },
    { en: 'Do you hear voices when no one is around?', f: 'May nababatian kamo nga boses kon owa it tawo sa palibot?', c: 'May nababatian ka nga boses kon owa it tawo?' },
    { en: 'What do the voices say?', f: 'Ano ro ginahambae it mga boses?', c: 'Ano ro ginahambae it mga boses?' },
    { en: 'Do the voices tell you to do something?', f: 'Ginasugo kamo it mga boses nga maghimo it butang?', c: 'Ginasugo ka it mga boses nga maghimo it butang?', n: 'Command hallucinations: ask what, and whether the patient feels able to resist.' },
    { en: 'Do you see things that other people cannot see?', f: 'May nakikita kamo nga indi makita it iba?', c: 'May nakikita ka nga indi makita it iba?' },
    { en: 'Do you feel that someone wants to harm you?', f: 'Nagabatyag kamo nga may gusto magsakit kinyo?', c: 'Nagabatyag ka nga may gusto magsakit kimo?' },
    { en: 'Do you feel that people are talking about you or watching you?', f: 'Nagabatyag kamo nga ginaistoryahan kamo ukon ginabantayan it mga tawo?', c: 'Nagabatyag ka nga ginaistoryahan ka ukon ginabantayan it mga tawo?' },
    { en: 'Do you think someone has used sorcery or sent a spirit against you?', f: 'Nagaisip kamo nga may nagkulam kinyo, ukon may ispirito nga ginpadaea kinyo?', c: 'Nagaisip ka nga may nagkulam kimo, ukon may ispirito nga ginpadaea kimo?', n: 'kulam, aswang, ingkanto are in Zorc\'s dictionary. Ask: what does your family think?' },
    { en: 'Do you have special powers or a special mission?', f: 'May espesyal kamo nga gahom ukon misyon?', c: 'May espesyal ka nga gahom ukon misyon?' },
    { en: 'Does your family believe this too?', f: 'Nagapati man raya ro inyong pamilya?', c: 'Nagapati man raya ro pamilya mo?' },
    { en: 'How sure are you about this?', f: 'Pila ka sigurado kamo riya?', c: 'Sigurado ka gid riya?' }
  ]
},
{
  id: 'closing', group: 'Interview', title: 'Closing, plan and follow-up',
  intro: 'Summarize, check understanding, agree the next step, and end warmly. Give the follow-up date in Spanish numbers, as patients do.',
  phrases: [
    { en: 'Thank you. That helps me understand your situation.', f: 'Saeamat gid, Nay. Nakabulig raya para maintindihan ko ro inyong sitwasyon.', c: 'Saeamat gid. Nakabulig raya para maintindihan ko ro sitwasyon mo.' },
    { en: 'Do you have any questions for me?', f: 'May pangutana kamo kakon?', c: 'May pangutana ka kakon?' },
    { en: 'Here is what I think is happening.', f: 'Amo raya ro pagtan-aw ko sa nagakatabo.', c: 'Amo raya ro pagtan-aw ko sa nagakatabo.' },
    { en: 'This medicine is for sleep and mood. Take it every night.', f: 'Raya nga bueong hay para sa tueog ag sa pamatyag. Imnon ninyo kada gabii.', c: 'Raya nga bueong para sa tueog ag sa pamatyag. Imnon mo kada gabii.' },
    { en: 'If it gets worse, come back right away or go to the hospital.', f: 'Kon maggrabe, balik kamo eagi riya, ukon agto kamo sa ospital.', c: 'Kon maggrabe, balik ka eagi riya ukon agto sa ospital.' },
    { en: 'We will see each other again in two weeks.', f: 'Magkita kita liwat sa daywa ka semana.', c: 'Magkita kita liwat sa daywa ka semana.' },
    { en: 'Please bring your medicines next time.', f: 'Palihog daeha ro inyong mga bueong sa masunod.', c: 'Daeha ro mga bueong mo sa masunod.' },
    { en: 'Take care. See you again.', f: 'Mag-amping kamo, Nay. Magkita kita liwat.', c: 'Amping. Magkita kita liwat.' }
  ]
},
{
  id: 'mania', group: 'Interview', title: 'Elevated mood and DIGFAST',
  intro: 'Screen for a distinct period of elevated or irritable mood, then DIGFAST: distractibility, indiscretion, grandiosity, flight of ideas, activity, sleep, talkativeness. Ask for duration and for a collateral account; patients in mania often feel well (masadya) and deny illness.',
  phrases: [
    { en: 'Have there been days when you felt unusually happy or full of energy, different from your normal self?', f: 'May mga adlaw nga sobra kamo kasadya ukon kakusog, nga iba sa normal ninyo?', c: 'May mga adlaw nga sobra ka kasadya ukon kakusog, nga iba sa normal mo?', n: 'sadya / masadya attested (Zorc dict. ~p. 334). Open with the patient’s own experience of feeling good before naming symptoms.' },
    { en: 'Have you been easily angered or irritated these past days?', f: 'Madali kamo maakig kang mga nagligad nga adlaw?', c: 'Madali ka maakig kang mga nagligad nga adlaw?', n: 'Irritable mood counts as well as euphoria. akig attested (Zorc dict.).' },
    { en: 'How many days did that feeling last? More than a week?', f: 'Pila ka adlaw nagbuhay ro amo nga pamatyag? Sobra sa isaea ka semana?', c: 'Pila ka adlaw nagbuhay ro amo nga pamatyag? Sobra isaea ka semana?', n: 'Duration separates mania (≥ 7 days or hospitalization) from hypomania (≥ 4 days).' },
    { en: 'Did you sleep only a few hours and still not feel tired?', f: 'Pila ka oras lang ro tueog ninyo, pero owa kamo gagaoy?', c: 'Pila ka oras lang ro tueog mo, pero owa ka gagaoy?', n: 'Decreased need for sleep, not insomnia: the key is the absence of tiredness. gaoy = tired (SR ~p. 192, "Owa ako gagaoy"); kapoy is Hiligaynon.' },
    { en: 'Did people say you were talking more or faster than usual?', f: 'May nagsugid kinyo nga mas abo kamo it hambae ukon mas madasig kaysa sadto?', c: 'May nagsugid kimo nga mas abo ka it hambae ukon mas madasig kaysa sadto?', n: 'Talkativeness / pressured speech. hambae attested (Zorc dict. ~p. 208).' },
    { en: 'Did your thoughts run so fast that you could not keep up with them?', f: 'Sobra kadasig ro inyong huna-huna, nga indi eon ninyo masundan?', c: 'Sobra kadasig ro huna-huna mo, nga indi mo eon masundan?', n: 'Flight of ideas / racing thoughts.' },
    { en: 'Were you easily distracted, for example by small sounds or things moving around you?', f: 'Madali kamo madistract, halimbawa sa gamay nga tunog ukon hueag sa palibot ninyo?', c: 'Madali ka madistract, halimbawa sa gamay nga tunog ukon hueag sa palibot mo?', n: 'Distractibility. "madistract" is the usual Kalibo code-switch; a purer form would be a reconstruction.' },
    { en: 'Did you take on many more activities or plans than usual, or feel you could not rest?', f: 'Mas abo kamo it ginaobra ukon plano kaysa sadto, ukon indi kamo makapahuway?', c: 'Mas abo ka it ginaobra ukon plano kaysa sadto, ukon indi ka makapahuway?', n: 'Increased goal-directed activity / psychomotor agitation. obra attested (Zorc).' },
    { en: 'Did you feel stronger, smarter or more important than other people, or that you had a special power or mission?', f: 'Nagbatyag kamo nga mas makusog, mas maaeam, ukon mas importante kamo kaysa sa iba, ukon nga may espesyal kamo nga gahum ukon misyon?', c: 'Nagbatyag ka nga mas makusog, mas maaeam, ukon mas importante ka kaysa sa iba, ukon nga may espesyal ka nga gahum ukon misyon?', n: 'Grandiosity; if conviction is fixed, cross to the psychosis section. Religious missions are a common Panay theme.' },
    { en: 'Did you spend much more money than usual, or buy or sell things you now regret?', f: 'Nagsobra kamo it gasto, ukon may ginbakae ukon ginbaligya kamo nga ginabasol ninyo makaron?', c: 'Nagsobra ka it gasto, ukon may ginbakae ukon ginbaligya ka nga ginabasol mo makaron?', n: 'Indiscretion: money. gasto, ginbakae, baligya attested (Zorc).' },
    { en: 'Did you do anything risky, for example drinking much more, gambling, or relationships you would not usually have?', f: 'May ginhimo kamo nga may peligro, halimbawa sobra nga inom, sugal, ukon relasyon nga indi ninyo kinaandan?', c: 'May ginhimo ka nga may peligro, halimbawa sobra nga inom, sugal, ukon relasyon nga indi mo kinaandan?', n: 'Indiscretion: risk-taking and sexual indiscretion, asked without judgement. peligro = danger (SR ~p. 305); delikado in Aklanon means fragile or touchy. Ask in the everyday register only after rapport.' },
    { en: 'Has this happened before? May I also ask your family about it?', f: 'Natabo eon raya sadto? Puede ko man mapangutana ro inyong pamilya?', c: 'Natabo eon raya sadto? Puede ko man mapangutana ro pamilya mo?', n: 'Prior episodes and collateral; insight is often poor, so the family account carries weight.' }
  ]
},
{
  id: 'anxiety', group: 'Interview', title: 'Anxiety, worry and panic',
  intro: 'Screen generalised worry (content, control, duration, tension, sleep), then panic attacks (sudden, peaks in minutes, autonomic symptoms, fear of dying or going mad), then phobic avoidance: agoraphobia (crowds, the tindahan/market, the jeep, being far from home) and social fear. Kueba covers both nervousness and palpitations, so ask which the patient means. Rule out caffeine, thyroid, asthma and pharmacy-bought sedatives before closing.',
  phrases: [
    { en: 'Have you been feeling nervous or tense, or worrying all the time, these past days?', f: 'Ginakueba-an kamo, ukon permi kamo nagakabalaka, kang mga nagligad nga adlaw?', c: 'Ginakueba-an ka, ukon permi ka nagakabalaka, kang mga nagligad nga adlaw?', n: 'Opener for GAD-7 items 1–3. kueba\' is attested (SR ~p. 139: fear, timidity; \"Ginakueba-an ako\" = I\'m trembling with fear), so it leans to fear; ask whether the patient means fear, nerves or palpitations. kabalaka is shared with Hiligaynon; the attested Aklanon root for worry is himud-os.' },
    { en: 'What do you worry about? Many things, even small ones?', f: 'Ano ro inyong ginakabalak-an? Abo nga butang, bisan gagmay lang?', c: 'Ano ro ginakabalak-an mo? Abo nga butang, bisan gagmay lang?', n: 'Worry content and breadth; multiple domains (money, children, health) point to GAD. gagmay = plural of gamay.' },
    { en: 'Can you control the worry, or is it hard to stop once it starts?', f: 'Makontrol ninyo ro kabalaka, ukon mabudlay eon mauntat kon nagsugod?', c: 'Makontrol mo ro kabalaka, ukon mabudlay eon mauntat kon nagsugod?', n: 'Uncontrollability is the DSM-5-TR GAD criterion B. budlay attested (SR ~p. 102: find difficult, be exhausted); untat not found in SR.' },
    { en: 'How long has it been like this? More than six months?', f: 'Pila kabuhay eon nga amo raya? Sobra sa an-om ka buean?', c: 'Pila kabuhay eon nga amo raya? Sobra an-om ka buean?', n: 'Six-month duration for GAD; shorter worry after a stressor suggests adjustment disorder.' },
    { en: 'Because of the worry, is your body tense, or do your head and shoulders hurt, or can you not sleep?', f: 'Tungod sa kabalaka, mahugot ro inyong eawas, masakit ro ueo ukon abaga, ukon indi kamo makatueog?', c: 'Tungod sa kabalaka, mahugot ro eawas mo, masakit ro ueo ukon abaga, ukon indi ka makatueog?', n: 'Muscle tension and initial insomnia; somatic complaints are the usual RHU presentation. tungod = because; hugot = tight.' },
    { en: 'Have there been times when, all of a sudden, you felt intense fear, with your heart pounding, shaking, or trouble breathing?', f: 'May mga beses nga gulpi lang kamo ginhadlukan it sobra, nga madasig ro tagipuso-on, nagakurog kamo, ukon mabudlay magginhawa?', c: 'May mga beses nga gulpi lang ka ginhadlukan it sobra, nga madasig ro tagipuso-on, nagakurog ka, ukon mabudlay magginhawa?', n: 'Panic attack screen. gulpi (SR ~p. 229, opp. inanay); kurog attested as a synonym under kubig = tremble (SR ~p. 133); ginhawa attested (SR ~p. 195). Ask the patient to describe the worst one.' },
    { en: 'During that time, did you feel dizzy or sweaty, or feel that you might die or go out of your mind?', f: 'Sa amo nga oras, naghilo kamo ukon naghueas, ukon pamatyag ninyo mapatay kamo ukon mabuang?', c: 'Sa amo nga oras, naghilo ka ukon naghueas, ukon pamatyag mo mapatay ka ukon mabuang?', n: 'Fear of dying and of losing control; patients often went to the ER first for a "heart attack". hilo = become dizzy (SR ~p. 213, same as Tagalog); hueas = sweat (SR ~p. 218). Use mabuang here only as the patient’s own fear, not as a label.' },
    { en: 'How long does one attack last? A few minutes, or longer?', f: 'Pila kabuhay ro isaea ka ataki? Pila ka minuto lang, ukon mas mabuhay?', c: 'Pila kabuhay ro isaea ka ataki? Pila ka minuto lang, ukon mas mabuhay?', n: 'Panic peaks within about 10 minutes; hour-long "attacks" suggest anxiety with other causes. ataki [Sp] attested for heart attack or stroke (SR ~p. 65).' },
    { en: 'Does it come suddenly without a reason, or only in certain places or situations?', f: 'Gulpi lang raya nagaabot nga owa it rason, ukon sa pila lang ka lugar ukon sitwasyon?', c: 'Gulpi lang raya nagaabot nga owa it rason, ukon sa pila lang ka lugar ukon sitwasyon?', n: 'Unexpected attacks (panic disorder) versus cued attacks (phobia, social anxiety). abot = come, in dictionary.' },
    { en: 'Are you afraid of crowded places, the market, riding the jeep, or being far from home?', f: 'Nahadlok kamo sa abo nga tawo, sa tindahan, sa pagsakay it jeep, ukon kon maeayo kamo sa baeay?', c: 'Nahadlok ka sa abo nga tawo, sa tindahan, sa pagsakay it jeep, ukon kon maeayo ka sa baeay?', n: 'Agoraphobia with Kalibo examples: the public market (tindahan, SR ~p. 13), tricycle and jeepney rides, and rural distance from help. maeayo attested.' },
    { en: 'Do you avoid those places because of the fear? Has it stopped you from working or going out?', f: 'Ginalikawan ninyo ro amo nga mga lugar tungod sa hadlok? Nakaupang raya sa inyong obra ukon sa paggwa sa baeay?', c: 'Ginalikawan mo ro amo nga mga lugar tungod sa hadlok? Nakaupang raya sa obra mo ukon sa paggwa sa baeay?', n: 'Avoidance and functional impairment decide the diagnosis. likaw attested (SR ~p. 242: avoid, veer away); upang and gwa not found in SR (SR has apang = but), still draft.' },
    { en: 'Are you afraid that other people are watching or judging you, for example when you speak in front of them or eat with them?', f: 'Nahadlok kamo nga ginabantayan ukon ginahusgahan kamo it iba nga tawo, halimbawa kon maghambae kamo sa atubangan nanda ukon magkaon kaimaw nanda?', c: 'Nahadlok ka nga ginabantayan ukon ginahusgahan ka it iba nga tawo, halimbawa kon maghambae ka sa atubangan nanda ukon magkaon kaimaw nanda?', n: 'Social anxiety; separate from ordinary huya (shyness) by distress and avoidance. nanda = their (Zorc); kaimaw = together with.' },
    { en: 'Do you drink coffee, energy drinks or alcohol because of the nerves, or take any medicine from the pharmacy for them?', f: 'Nagainom kamo it kape, energy drink ukon alak tungod sa kueba, ukon may ginainom kamo nga bueong halin sa botika para raya?', c: 'Nagainom ka it kape, energy drink ukon alak tungod sa kueba, ukon may ginainom ka nga bueong halin sa botika para raya?', n: 'Caffeine mimics anxiety; alcohol and over-the-counter sedatives (diazepam, antihistamines) are common self-treatment. Get the medicine name or the box. Substances section follows later.' }
  ]
},
{
  id: 'trauma', group: 'Interview', title: 'Trauma and its aftermath',
  intro: 'Gateway first, with normalisation and permission to stop; details can wait. Then the four PTSD clusters: intrusion (memories, nightmares), avoidance, negative mood and cognition (self-blame, numbness, distance), arousal (on guard, startle, anger, sleep). Always ask whether it is still happening and whether the patient is safe at home now. Typhoons (Yolanda 2013 hit Kalibo), road accidents and violence at home are the common Aklan stories. Use the respectful register and the patient\'s own words; never press for the details of abuse in a first interview.',
  phrases: [
    { en: 'Many people have been through something very frightening or painful: an accident, a typhoon, beatings at home, or someone doing something bad to them. Has anything like that happened to you?', f: 'Abo nga tawo ro may natabo nga makahadlok gid ukon masakit gid: aksidente, bagyo, pagbunae sa baeay, ukon may naghimo kanda it maeain. May parehas nga natabo kinyo?', c: 'Abo nga tawo ro may natabo nga makahadlok gid ukon masakit gid: aksidente, bagyo, pagbunae sa baeay, ukon may naghimo kanda it maeain. May parehas nga natabo kimo?', n: 'Shea gateway with normalisation and a menu the patient can point to. bagyo (SR ~p. 77), bunae = beating (SR ~p. 54), parehas (SR ~p. 176), maeain = bad (SR ~p. 176 "maeain dang pamatyag").' },
    { en: 'You do not have to tell me the details now. Can you tell me what kind of thing it was, and when?', f: 'Indi kinahangean nga isugid ninyo ro tanan makaron. Puede ninyo mahambae kon ano nga klase raya, ag kan-o natabo?', c: 'Indi kinahangean nga isugid mo ro tanan makaron. Puede mo mahambae kon ano nga klase raya, ag kan-o natabo?', n: 'Permission to stay general lowers avoidance. sugid = tell, reveal (SR ~p. 322); makaron = now (SR ~p. 250); kan-o = when (past).' },
    { en: 'Was it long ago, or recently?', f: 'Kato anay pa raya, ukon bag-o lang?', c: 'Kato anay pa raya, ukon bag-o lang?', n: 'Timing separates acute stress from PTSD and tells you whether it may still be going on. kato anay = long ago, formerly (SR ~p. 24, 30); bag-o lang = just recently.' },
    { en: 'Does it come back into your mind even when you do not want it to, as if it were happening again?', f: 'Nagabalik raya sa inyong huna-huna bisan indi ninyo gusto, nga daw nagakatabo uman?', c: 'Nagabalik raya sa huna-huna mo bisan indi mo gusto, nga daw nagakatabo uman?', n: 'Intrusive memories and flashbacks. uman = repeat, do again (Z grammar root list); daw = as if.' },
    { en: 'Do you have bad dreams or nightmares about it?', f: 'May maeain kamo nga damgo ukon ginatupay kamo parte raya?', c: 'May maeain ka nga damgo ukon ginatupay ka parte raya?', n: 'Nightmares. tupay = have a bad dream or nightmare (SR ~p. 221, 387; syn. hupa\'). Ask also about bangungot, the feared fatal nightmare, if the patient names it.' },
    { en: 'Do you avoid places, people or conversations that remind you of it?', f: 'Ginalikawan ninyo ro mga lugar, tawo ukon istorya nga nagapadumdum kinyo it raya?', c: 'Ginalikawan mo ro mga lugar, tawo ukon istorya nga nagapadumdum kimo it raya?', n: 'Avoidance cluster. likaw (SR ~p. 242); padumdum = remind (SR ~p. 26).' },
    { en: 'Since then, are you always on guard, easily startled, or unable to sleep?', f: 'Halin kato, permi kamo nagabantay, madali makigbot, ukon indi makatueog?', c: 'Halin kato, permi ka nagabantay, madali makigbot, ukon indi makatueog?', n: 'Arousal cluster: hypervigilance, startle, insomnia. kigbot = surprise, frighten (SR ~p. 140, read from a noisy line; Hiligaynon kibot) — ⚑ for the reviewer. madali = easily (SR ~p. 155).' },
    { en: 'Do you get angry quickly now, more than before?', f: 'Madali kamo maakig makaron, sobra pa sang-una?', c: 'Madali ka maakig makaron, sobra pa sang-una?', n: 'Irritability and anger outbursts; also a bridge to asking about fights and alcohol. sang-una = before, in the past (draft; check with reviewer).' },
    { en: 'Do you feel numb, as if you have no feelings any more, or far away from other people?', f: 'Pamatyag ninyo owa eon kamo it pamatyag, ukon maeayo kamo sa ibang tawo?', c: 'Pamatyag mo owa eon ka it pamatyag, ukon maeayo ka sa ibang tawo?', n: 'Numbing and detachment. pamatyag = feeling, sense (SR ~p. 91, 176).' },
    { en: 'Do you feel that it was your fault, or keep blaming yourself for what happened?', f: 'Pamatyag ninyo nga kamo ro may saea sa natabo, ukon permi kamo nagahinuesoe?', c: 'Pamatyag mo nga ikaw ro may saea sa natabo, ukon permi ka nagahinuesoe?', n: 'Negative cognition: guilt and self-blame. saea = fault, sin (SR ~p. 200 "may saea man"); hinuesoe = regret (SR ~p. 211). Follow with phrase 12.' },
    { en: 'Is it still happening now? Are you safe at home at this time?', f: 'Nagakatabo pa raya makaron? Owa it peligro kinyo sa baeay makaron?', c: 'Nagakatabo pa raya makaron? Owa it peligro kimo sa baeay makaron?', n: 'Current safety decides the plan (barangay VAW desk, DSWD, admission). peligro = danger (SR ~p. 305). Ask with the family out of the room.' },
    { en: 'Thank you for telling me. What happened was not your fault. We can take this slowly, and you can stop whenever you want.', f: 'Saeamat sa pagsugid kinyo. Bukon it inyong saea ro natabo. Hinay-hinayon naton raya, ag puede kamo mag-untat kon gusto ninyo.', c: 'Saeamat sa pagsugid kimo. Bukon it imong saea ro natabo. Hinay-hinayon naton raya, ag puede ka mag-untat kon gusto mo.', n: 'Closing the gateway safely: validation, no blame, control returned to the patient. hinay = go slowly, softly (SR ~p. 215); untat not in SR (draft).' }
  ]
},
{
  id: 'substances', group: 'Interview', title: 'Alcohol, tobacco, betel and drugs',
  intro: 'Normalise, then quantify. Tuba in the afternoon with friends is ordinary in Aklan, so ask frequency, amount and the six-or-more question (AUDIT-C) before asking about harm. Then the four CAGE ideas: cut down, complaints from others, trouble caused, morning drinking. Ask about withdrawal (shaking, sweating, seeing things), tobacco and mama (betel) by sticks or chews per day, shabu and marijuana with a face-saving \'even once\', and pharmacy sleeping pills. Keep a neutral voice; the point board has the usual minimising replies.',
  phrases: [
    { en: 'Do you drink: tuba, beer, gin or other liquor?', f: 'Nagainom kamo it tuba, beer, gin ukon iba nga alak?', c: 'Nagainom ka it tuba, beer, gin ukon iba nga alak?', n: 'Gateway, listing the local drinks. tuba\' attested (SR ~p. 139, 254); alkuhol = alcohol (SR ~p. 50); gin is the cheap spirit in sari-sari stores.' },
    { en: 'How often? Every day, a few times a week, or only on occasions?', f: 'Pila ka beses? Adlaw-adlaw, pila ka beses sa isaea ka semana, ukon kon may okasyon lang?', c: 'Pila ka beses? Adlaw-adlaw, pila ka beses sa isaea ka semana, ukon kon may okasyon lang?', n: 'AUDIT-C item 1. adlaw-adlaw attested (Z p. 184); semana attested in the grammar, dominggo in SR.' },
    { en: 'On a day when you drink, how much? How many bottles or glasses?', f: 'Kon nagainom kamo, pila kabahoe? Pila ka bote ukon tagayan?', c: 'Kon nagainom ka, pila kabahoe? Pila ka bote ukon tagayan?', n: 'AUDIT-C item 2. bote (SR ~p. 113); tagayan = cup (SR ~p. 368, Akl for Spanish tasa). Do not say baso: in Aklanon baso means foolish (SR ~p. 209). Convert to standard drinks yourself; a gallon of tuba shared is the usual unit.' },
    { en: 'Are there times when you drink six or more in one sitting?', f: 'May beses nga an-om ukon sobra pa ro inyong nainom sa isaea lang ka pag-inom?', c: 'May beses nga an-om ukon sobra pa ro nainom mo sa isaea lang ka pag-inom?', n: 'AUDIT-C item 3 (binge). an-om = six (SR ~p. 57); pag-inom = the drinking (pag- gerund, lesson 21).' },
    { en: 'Have you ever thought you should cut down, or stop drinking?', f: 'Nahuna-huna ninyo eon nga dapat ninyo bawasan ro inom, ukon indi eon mag-inom?', c: 'Nahuna-huna mo eon nga dapat mo bawasan ro inom, ukon indi eon mag-inom?', n: 'CAGE: Cut down. bawas = reduce (SR ~p. 90); untat (stop) is not in SR, so the phrase says \'not drink any more\'.' },
    { en: 'Do family or friends complain about your drinking?', f: 'Nagareklamo ro inyong pamilya ukon mga abyan parte sa inyong inom?', c: 'Nagareklamo ro pamilya mo ukon mga abyan parte sa imong inom?', n: 'CAGE: Annoyed by criticism. abyan = friend (SR ~p. 40); reklamo is a Spanish loan in general use.' },
    { en: 'Has drinking caused trouble: fights, money, work, the family, the police?', f: 'Nagdaea it problema ro inom: away, kwarta, obra, pamilya, ukon pulis?', c: 'Nagdaea it problema ro inom: away, kwarta, obra, pamilya, ukon pulis?', n: 'Harm and social consequences. problema attested (SR ~p. 310, \'Tueogi ring problema\' = sleep off your problem); away = fight, quarrel (SR ~p. 66).' },
    { en: 'Do you drink in the morning, to steady your nerves or for a hangover?', f: 'Nagainom kamo sa aga, agod mag-ayad ro pamatyag ukon ro kurog?', c: 'Nagainom ka sa aga, agod mag-ayad ro pamatyag ukon ro kurog?', n: 'CAGE: Eye-opener; dependence marker. SR has the idiom pasuebo\' = drink alcohol during a hangover in the belief it cures it (SR ~p. 301); agahon = morning (SR ~p. 45).' },
    { en: 'When you have not had a drink, do you shake, sweat, or see things that are not there?', f: 'Kon owa kamo it inom, nagakurog kamo, nagahueas, ukon may nakikita kamo nga bukon it matuod?', c: 'Kon owa ka it inom, nagakurog ka, nagahueas, ukon may nakikita ka nga bukon it matuod?', n: 'Withdrawal and delirium tremens screen; admit if present with fever or confusion. kurog (SR ~p. 133), hueas (SR ~p. 218), matuod = true (SR ~p. 386).' },
    { en: 'Do you smoke? How many cigarettes a day? Do you chew betel?', f: 'Nagasigarilyo kamo? Pila ka sigarilyo sa isaea ka adlaw? Nagamama kamo?', c: 'Nagasigarilyo ka? Pila ka sigarilyo sa isaea ka adlaw? Nagamama ka?', n: 'Tobacco and betel. magsigarilyo attested (Z p. 17: Naanad eon ako magsigarilyo = I\'m already used to smoking); mama\' = chew betel (SR ~p. 253); binga = betel nut, apog = lime (SR ~p. 109, 60). Betel quid with tobacco is common in older rural patients.' },
    { en: 'Have you used shabu, marijuana or any other drug, even once?', f: 'Naggamit kamo eon it shabu, marijuana ukon iba nga droga, bisan isaea lang ka beses?', c: 'Naggamit ka eon it shabu, marijuana ukon iba nga droga, bisan isaea lang ka beses?', n: 'Face-saving \'even once\'. gamit = use (SR ~p. 191); shabu, marijuana and droga are modern loans not in SR (SR has apyan = opium, apyaniro = addict, ~p. 61). Reassure about confidentiality before this question; say it with the family out of the room.' },
    { en: 'Do you take sleeping pills or other medicine without a prescription? Where do you get them?', f: 'May ginainom kamo nga bueong para makatueog ukon iba nga bueong nga owa it reseta? Siin ninyo nabakae?', c: 'May ginainom ka nga bueong para makatueog ukon iba nga bueong nga owa it reseta? Siin mo nabakae?', n: 'Over-the-counter benzodiazepines and antihistamines; also herbal and kurandero preparations. bueong = medicine (SR ~p. 103); bakae = buy (attested); reseta is a loan.' }
  ]
}
];
