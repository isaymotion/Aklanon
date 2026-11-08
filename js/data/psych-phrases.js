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
    { en: 'I will ask many questions. Some may feel personal. You may tell me if you do not want to answer.', f: 'Madamo ako it pangutana. Ro iba hay personal. Sugidi lang ako kon indi ninyo gusto magsabat.', c: 'Madamo ako it pangutana. Ro iba personal. Sugidi lang ako kon indi mo gusto magsabat.' },
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
    { en: 'Are you taking any medicine?', f: 'May ginainom kamo nga tambae?', c: 'May ginainom ka nga tambae?' },
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
    { en: 'Do you feel tired all the time?', f: 'Pirme kamo kapoy?', c: 'Pirme ka kapoy?' },
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
    { en: 'Sometimes when people feel this way, they think it would be better to be dead. Has this happened to you?', f: 'Kon kaisa, kon amo raya ro pamatyag, nagaisip ro tawo nga mas mayad pa nga mapatay. Natabo raya kinyo?', c: 'Kon kaisa, kon amo raya ro pamatyag, nagaisip ro tawo nga mas mayad pa nga mapatay. Natabo raya kimo?', n: 'Normalization first (Shea).' },
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
    { en: 'Thank you for telling me. You are not alone in this.', f: 'Salamat gid sa pagsugid kakon. Bukon kamo it isaeahanon riya.', c: 'Salamat gid sa pagsugid. Bukon ka it isaeahanon riya.' }
  ]
},
{
  id: 'psychosis', group: 'Interview', title: 'Hallucinations and delusions',
  intro: 'Normalize, ask about each sense, then content, command quality and conviction. Distinguish culturally shared beliefs (aswang, kulam) from fixed idiosyncratic ones by asking what the family thinks.',
  phrases: [
    { en: 'Sometimes when people are under stress, they hear or see things others do not. Has that happened to you?', f: 'Kon kaisa, kon may stress ro tawo, may nababatian ukon nakikita imaw nga owa it iba nga nakabati ukon nakakita. Natabo raya kinyo?', c: 'Kon kaisa, kon may stress, may nababatian ukon nakikita ro tawo nga owa it iba nga nakabati ukon nakakita. Natabo raya kimo?' },
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
    { en: 'Thank you. That helps me understand your situation.', f: 'Salamat gid, Nay. Nakabulig raya para maintindihan ko ro inyong sitwasyon.', c: 'Salamat gid. Nakabulig raya para maintindihan ko ro sitwasyon mo.' },
    { en: 'Do you have any questions for me?', f: 'May pangutana kamo kakon?', c: 'May pangutana ka kakon?' },
    { en: 'Here is what I think is happening.', f: 'Amo raya ro pagtan-aw ko sa nagakatabo.', c: 'Amo raya ro pagtan-aw ko sa nagakatabo.' },
    { en: 'This medicine is for sleep and mood. Take it every night.', f: 'Raya nga tambae hay para sa tueog ag sa pamatyag. Imnon ninyo kada gabii.', c: 'Raya nga tambae para sa tueog ag sa pamatyag. Imnon mo kada gabii.' },
    { en: 'If it gets worse, come back right away or go to the hospital.', f: 'Kon maggrabe, balik kamo eagi riya, ukon agto kamo sa ospital.', c: 'Kon maggrabe, balik ka eagi riya ukon agto sa ospital.' },
    { en: 'We will see each other again in two weeks.', f: 'Magkita kita liwat sa daywa ka semana.', c: 'Magkita kita liwat sa daywa ka semana.' },
    { en: 'Please bring your medicines next time.', f: 'Palihog daeha ro inyong mga tambae sa masunod.', c: 'Daeha ro mga tambae mo sa masunod.' },
    { en: 'Take care. See you again.', f: 'Mag-amping kamo, Nay. Magkita kita liwat.', c: 'Amping. Magkita kita liwat.' }
  ]
},
{
  id: 'mania', group: 'Interview', title: 'Elevated mood and DIGFAST',
  intro: 'Screen for a distinct period of elevated or irritable mood, then DIGFAST: distractibility, indiscretion, grandiosity, flight of ideas, activity, sleep, talkativeness. Ask for duration and for a collateral account; patients in mania often feel well (masadya) and deny illness.',
  phrases: [
    { en: 'Have there been days when you felt unusually happy or full of energy, different from your normal self?', f: 'May mga adlaw nga sobra kamo kasadya ukon kakusog, nga iba sa normal ninyo?', c: 'May mga adlaw nga sobra ka kasadya ukon kakusog, nga iba sa normal mo?', n: 'sadya / masadya attested (Zorc dict. ~p. 334). Open with the patient’s own experience of feeling good before naming symptoms.' },
    { en: 'Have you been easily angered or irritated these past days?', f: 'Madali kamo maakig kang mga nagligad nga adlaw?', c: 'Madali ka maakig kang mga nagligad nga adlaw?', n: 'Irritable mood counts as well as euphoria. akig attested (Zorc dict.).' },
    { en: 'How many days did that feeling last? More than a week?', f: 'Pila ka adlaw nagdugay ro amo nga pamatyag? Sobra sa isaea ka semana?', c: 'Pila ka adlaw nagdugay ro amo nga pamatyag? Sobra isaea ka semana?', n: 'Duration separates mania (≥ 7 days or hospitalization) from hypomania (≥ 4 days).' },
    { en: 'Did you sleep only a few hours and still not feel tired?', f: 'Pila ka oras lang ro tueog ninyo, pero indi kamo kapoy?', c: 'Pila ka oras lang ro tueog mo, pero indi ka kapoy?', n: 'Decreased need for sleep, not insomnia: the key is the absence of tiredness.' },
    { en: 'Did people say you were talking more or faster than usual?', f: 'May nagsugid kinyo nga mas madamo kamo it hambae ukon mas madasig kaysa sadto?', c: 'May nagsugid kimo nga mas madamo ka it hambae ukon mas madasig kaysa sadto?', n: 'Talkativeness / pressured speech. hambae attested (Zorc dict. ~p. 208).' },
    { en: 'Did your thoughts run so fast that you could not keep up with them?', f: 'Sobra kadasig ro inyong hunahuna, nga indi eon ninyo masundan?', c: 'Sobra kadasig ro hunahuna mo, nga indi mo eon masundan?', n: 'Flight of ideas / racing thoughts.' },
    { en: 'Were you easily distracted, for example by small sounds or things moving around you?', f: 'Madali kamo madistract, halimbawa sa gamay nga tunog ukon hueag sa palibot ninyo?', c: 'Madali ka madistract, halimbawa sa gamay nga tunog ukon hueag sa palibot mo?', n: 'Distractibility. "madistract" is the usual Kalibo code-switch; a purer form would be a reconstruction.' },
    { en: 'Did you take on many more activities or plans than usual, or feel you could not rest?', f: 'Mas madamo kamo it ginaobra ukon plano kaysa sadto, ukon indi kamo makapahuway?', c: 'Mas madamo ka it ginaobra ukon plano kaysa sadto, ukon indi ka makapahuway?', n: 'Increased goal-directed activity / psychomotor agitation. obra attested (Zorc).' },
    { en: 'Did you feel stronger, smarter or more important than other people, or that you had a special power or mission?', f: 'Nagbatyag kamo nga mas makusog, mas maaeam, ukon mas importante kamo kaysa sa iba, ukon nga may espesyal kamo nga gahum ukon misyon?', c: 'Nagbatyag ka nga mas makusog, mas maaeam, ukon mas importante ka kaysa sa iba, ukon nga may espesyal ka nga gahum ukon misyon?', n: 'Grandiosity; if conviction is fixed, cross to the psychosis section. Religious missions are a common Panay theme.' },
    { en: 'Did you spend much more money than usual, or buy or sell things you now regret?', f: 'Nagsobra kamo it gasto, ukon may ginbakae ukon ginbaligya kamo nga ginabasol ninyo makaron?', c: 'Nagsobra ka it gasto, ukon may ginbakae ukon ginbaligya ka nga ginabasol mo makaron?', n: 'Indiscretion: money. gasto, ginbakae, baligya attested (Zorc).' },
    { en: 'Did you do anything risky, for example drinking much more, gambling, or relationships you would not usually have?', f: 'May ginhimo kamo nga delikado, halimbawa sobra nga inom, sugal, ukon relasyon nga indi ninyo kinaandan?', c: 'May ginhimo ka nga delikado, halimbawa sobra nga inom, sugal, ukon relasyon nga indi mo kinaandan?', n: 'Indiscretion: risk-taking and sexual indiscretion, asked without judgement. Ask in the everyday register only after rapport.' },
    { en: 'Has this happened before? May I also ask your family about it?', f: 'Natabo eon raya sadto? Puede ko man mapangutana ro inyong pamilya?', c: 'Natabo eon raya sadto? Puede ko man mapangutana ro pamilya mo?', n: 'Prior episodes and collateral; insight is often poor, so the family account carries weight.' }
  ]
}
];
