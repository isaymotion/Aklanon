/* Likely patient replies for the point board (#/psych/point) and the listening drill (#/psych/listen).
   DRAFT: not yet reviewed by a native Akeanon speaker. Plain conversational Aklanon as Kalibo patients speak it,
   with the Hiligaynon and Tagalog words that commonly slip in.
   common: groups of general replies shown on every point board. sections: replies specific to each PSYCH_SECTIONS id.
   Each item: [aklanon, english, clinicalNote?, spoken?]  clinicalNote = short (<= 14 words) what it signals clinically;
   spoken = what to speak when the tile text itself is not Aklanon (optional). */
window.PSYCH_ANSWERS = {
  common: [
    { id: 'yesno', title: 'Yes / no', items: [
      ['Huo.', 'Yes.'],
      ['Indi.', 'No.'],
      ['Owa.', 'None. / It didn\'t happen.'],
      ['Siguro.', 'Maybe.'],
      ['Kon kaisa.', 'Sometimes.'],
      ['Indi ko maman-an.', 'I don\'t know.'],
      ['Indi ko gusto magsabat.', 'I don\'t want to answer.', 'Refusal; note the topic and revisit gently later.'],
      ['Sadto huo, makaron owa eon.', 'It used to be, but not anymore.'],
      ['Indi ako sigurado.', 'I\'m not sure.']
    ] },
    { id: 'freq', title: 'How often', items: [
      ['Adlaw-adlaw.', 'Every day.'],
      ['Haeos adlaw-adlaw.', 'Almost every day.'],
      ['Pila ka beses sa isaea ka semana.', 'A few times a week.'],
      ['Isaea ka beses lang sa isaea ka semana.', 'Only once a week.'],
      ['Kon kaisa lang.', 'Only once in a while.'],
      ['Talagsa lang.', 'Rarely.'],
      ['Pila ka beses sa isaea ka adlaw.', 'Several times a day.'],
      ['Owa pa gid matabo.', 'It has never happened.']
    ] },
    { id: 'when', title: 'Since when', items: [
      ['Kahapon pa.', 'Since yesterday.'],
      ['Isaea ka semana eon.', 'A week now.'],
      ['Daywa ka semana eon.', 'Two weeks now.'],
      ['Isaea ka buean eon.', 'A month now.'],
      ['Pila eon ka buean.', 'Several months now.'],
      ['Isaea ka dag-on eon.', 'A year now.'],
      ['Dugay eon gid.', 'A very long time now.'],
      ['Indi ko madumduman kon kan-o.', 'I can\'t remember when.']
    ] },
    { id: 'howmuch', title: 'How much', items: [
      ['Sangkurot lang.', 'Just a little.'],
      ['Katamtaman.', 'Moderate.'],
      ['Madamo.', 'A lot.'],
      ['Grabe gid.', 'Very severe.'],
      ['Owa gid.', 'Not at all.'],
      ['Indi ko kaya.', 'I can\'t bear it.', 'Distress; check safety and coping.']
    ] },
    { id: 'feel', title: 'How I feel', items: [
      ['Okay lang ako.', 'I\'m okay.'],
      ['Masubo ako.', 'I\'m sad.'],
      ['Nahadlok ako.', 'I\'m afraid.'],
      ['Naakig ako.', 'I\'m angry.'],
      ['Kapoy gid ako.', 'I\'m very tired.'],
      ['Nagakabalaka ako.', 'I\'m worried.'],
      ['Nahuhuya ako.', 'I\'m ashamed.', 'Huya (hiya); attenuate shame before probing.'],
      ['Owa ako it pamatyag.', 'I feel nothing.', 'Possible anhedonia or numbing.'],
      ['Mingaw ako.', 'I feel lonely. / I miss someone.']
    ] },
    { id: 'help', title: 'I need…', items: [
      ['Gusto ko it tubi.', 'I want some water.'],
      ['Gusto ko magpahuway.', 'I want to rest.'],
      ['Gusto ko mag-ihi.', 'I need the toilet.'],
      ['Gusto ko magtawag sa pamilya ko.', 'I want to call my family.'],
      ['Gusto ko it tambae.', 'I want medicine.'],
      ['Masakit ro ueo ko.', 'My head hurts.'],
      ['Gusto ko eon mag-uli.', 'I want to go home now.'],
      ['Hueat anay.', 'Wait a moment.']
    ] }
  ],
  sections: {
    opening: [
      ['Mayad man.', 'I\'m fine.'],
      ['Indi ako mayad.', 'I\'m not well.'],
      ['Gindaea ako it pamilya ko riya.', 'My family brought me here.', 'Possible limited insight; ask what the family noticed.'],
      ['Okay lang nga mag-Inakeanon kita.', 'It\'s fine to speak Aklanon.'],
      ['Mas gusto ko it Tagalog.', 'I prefer Tagalog.'],
      ['Indi ko kamo maintindihan.', 'I don\'t understand you.'],
      ['Ro asawa ko ro kaibahan ko.', 'My spouse is with me.'],
      ['Owa ako it problema.', 'I have no problem.', 'Denial of illness; explore gently through the family\'s concern.']
    ],
    hpi: [
      ['Nagsugod kato pagkapatay it tatay ko.', 'It started when my father died.', 'Grief or loss as precipitant.'],
      ['Hinali lang.', 'It was sudden.'],
      ['Amat-amat lang.', 'It came slowly.'],
      ['Nagagrabe.', 'It is getting worse.'],
      ['Pareho lang.', 'It\'s the same.'],
      ['Natabo eon raya sadto.', 'This has happened before.', 'Ask about previous episodes and treatment.'],
      ['Nagpa-albularyo kami anay.', 'We went to a folk healer first.'],
      ['Owa ako it ginainom nga tambae.', 'I\'m not taking any medicine.'],
      ['Indi eon ako makatrabaho.', 'I can\'t work anymore.', 'Functional impairment.']
    ],
    depression: [
      ['Pirme ako masubo.', 'I\'m always sad.'],
      ['Owa eon ako it gana sa tanan.', 'I have no interest in anything anymore.', 'Anhedonia.'],
      ['Indi ako makatueog.', 'I can\'t sleep.'],
      ['Nagabugtaw ako it temprano ag indi eon makatueog.', 'I wake early and can\'t go back to sleep.', 'Early morning awakening.'],
      ['Owa ako it gana magkaon.', 'I have no appetite.'],
      ['Nagniwang ako.', 'I lost weight.'],
      ['Kapoy ako pirme.', 'I\'m tired all the time.'],
      ['Indi ako makapokus.', 'I can\'t concentrate.'],
      ['Paeas-anon lang ako sa pamilya ko.', 'I\'m just a burden to my family.', 'Worthlessness; screen suicide risk now.'],
      ['Owa eon it paglaom.', 'There is no hope anymore.', 'Hopelessness; screen suicide risk now.'],
      ['Pirme ako nagahibi.', 'I cry all the time.']
    ],
    suicide: [
      ['Owa ako it amo ria nga isip.', 'I have no such thoughts.'],
      ['Kon kaisa nagaisip ako nga mas mayad pa nga mapatay.', 'Sometimes I think it would be better to be dead.', 'Passive ideation; explore plan, intent, means.'],
      ['Gusto ko eon lang matueog ag indi eon magbugtaw.', 'I just want to sleep and not wake up.', 'Passive death wish.'],
      ['Nagaisip ako nga tapuson ro kabuhi ko.', 'I think about ending my life.', 'Active ideation; assess plan and means now.'],
      ['May plano ako.', 'I have a plan.', 'High risk; ask how, when, access to means.'],
      ['Owa ako it plano.', 'I have no plan.'],
      ['Nagtinguha ako sadto.', 'I tried before.', 'Past attempt; strongest predictor. Get details.'],
      ['Tungod sa mga unga ko, indi ko mahimo.', 'Because of my children, I couldn\'t do it.', 'Protective factor.'],
      ['Nahadlok ako sa Ginoo.', 'I\'m afraid of God.', 'Protective factor (faith).'],
      ['Indi ko gusto mag-istorya riya.', 'I don\'t want to talk about this.', 'Do not drop it; return via a nurse who speaks Aklanon.']
    ],
    psychosis: [
      ['May nababatian ako nga boses.', 'I hear voices.'],
      ['Ginahambaean ako it boses nga owa ako it pueos.', 'The voices tell me I\'m worthless.', 'Derogatory voices; mood-congruent? screen depression.'],
      ['Ginasugo ako nga sakitan ro kaugalingon ko.', 'They tell me to hurt myself.', 'Command hallucination; safety first.'],
      ['May nakikita ako nga itom nga tawo.', 'I see a dark figure.'],
      ['May gusto magsakit kakon.', 'Someone wants to harm me.', 'Persecutory content.'],
      ['Ginaistoryahan ako it mga tawo.', 'People are talking about me.', 'Ideas of reference.'],
      ['Ginkulam ako.', 'Someone put a curse on me.', 'Culturally shared or delusional? Ask the family.'],
      ['May aswang sa baeay namon.', 'There is an aswang in our house.', 'Folk belief vs delusion; check conviction and family view.'],
      ['Owa nagapati ro pamilya ko.', 'My family doesn\'t believe me.'],
      ['Sigurado gid ako.', 'I\'m completely sure.', 'Fixed conviction.']
    ],
    mania: [
      ['Masadya gid ako makaron. Owa ako it problema.', 'I\'m really happy now. I have no problem.', 'Euphoria with denial of illness; get collateral.'],
      ['Indi ako kapoy bisan owa ako it tueog.', 'I\'m not tired even without sleep.', 'Decreased need for sleep: core manic symptom.'],
      ['Tatlo ka oras lang ro tueog ko, pero makusog ako.', 'I sleep only three hours, but I\'m strong.', 'Decreased need for sleep.'],
      ['Madasig ro akon hunahuna. Madamo ako it plano.', 'My mind is fast. I have many plans.', 'Racing thoughts; check goal-directed activity.'],
      ['Kuno sobra ako it hambae.', 'They say I talk too much.', 'Talkativeness reported by others.'],
      ['Nag-gasto ako it madamo nga kwarta.', 'I spent a lot of money.', 'Indiscretion; ask amount and source.'],
      ['Ginbaligya ko ro amon motor.', 'I sold our motorcycle.', 'Indiscretion with family consequences; confirm with family.'],
      ['May misyon ako halin sa Diyos.', 'I have a mission from God.', 'Grandiosity; test conviction, consider psychosis.'],
      ['Madali ako maakig makaron.', 'I get angry easily now.', 'Irritability; ask about aggression and safety.'],
      ['Bukon ako it buang. Ro pamilya ko ro may problema.', 'I\'m not crazy. My family is the one with the problem.', 'Poor insight; keep rapport, avoid arguing.'],
      ['Sadto natabo eon raya, pero nag-ayad man.', 'This happened before, but it got better too.', 'Prior episode; ask about treatment and depression between episodes.']
    ],
    closing: [
      ['Owa ako it pangutana.', 'I have no questions.'],
      ['Pila ro bayad it tambae?', 'How much does the medicine cost?', 'Cost barrier; discuss generics or free supply.'],
      ['Pila ka beses ko imnon?', 'How many times do I take it?'],
      ['Mabalik ako sa masunod nga semana.', 'I\'ll come back next week.'],
      ['Indi ako makabalik, maeayo ro baeay namon.', 'I can\'t come back, our house is far.', 'Access barrier; consider longer follow-up interval or RHU link.'],
      ['Salamat gid, Dok.', 'Thank you very much, Doc.'],
      ['Maintindihan ko.', 'I understand.'],
      ['Indi ko maintindihan.', 'I don\'t understand.']
    ]
  }
};
