/* Grammar and culture lessons for Mag-istorya Kita. body is trusted HTML authored here.
   quiz: [question, [options], correctIndex, explanation]
   The learner already speaks Tagalog, so every lesson is CONTRASTIVE: the Tagalog form is shown beside the Aklanon form.
   Sources: de la Cruz & Zorc 1968, A Study of the Aklanon Dialect Vol. 1 Grammar (Peace Corps, public domain, ERIC ED145705);
   Salas Reyes, Prado, de la Cruz & Zorc 1969, Vol. 2 Dictionary (ERIC ED145704). Page numbers below point to Vol. 1.
   DRAFT: not yet reviewed by a native Akeanon speaker. Lines marked ◌ are the author's reconstruction, not quoted from Zorc. */
window.LESSONS = [
{
  id: 'sounds', level: 'A1', unit: 'Foundations', title: 'Sounds and spelling: the Aklanon "e"',
  summary: 'One new sound, one spelling rule, and a Tagalog-to-Aklanon sound shift you can apply at once.',
  body: `
<p>You already read Tagalog aloud correctly. Almost all of that carries over: the five vowels, <b>ng</b> as one sound, unaspirated <b>p t k</b>, glottal stops that change meaning. Aklanon adds <b>one new sound</b> and spells it with a letter you think you know.</p>
<h3>The letter "e" before a vowel</h3>
<p>Aklanons write their signature sound as <b>e</b>. The rule (Zorc pp. 32–33): <b>"e" before a vowel is a consonant</b>, a soft voiced sound made far back in the mouth, like a <i>g</i> that never quite closes (linguists call it a velar fricative or approximant). <b>"e" before a consonant, or at the end of a word, is the ordinary vowel e</b> (as in <i>bed</i>).</p>
<table><tr><th>Aklanon</th><th>Say</th><th>Tagalog</th><th>English</th></tr>
<tr><td>Ak<b>e</b>an</td><td>Ak-ɣan (soft g)</td><td>Aklan</td><td>Aklan</td></tr>
<tr><td>ba<b>e</b>ay</td><td>ba-ɣay</td><td>bahay (cf. Hiligaynon <i>balay</i>)</td><td>house</td></tr>
<tr><td>bu<b>e</b>ak</td><td>bu-ɣak</td><td>bulaklak</td><td>flower</td></tr>
<tr><td>u<b>e</b>an</td><td>u-ɣan</td><td>ulan</td><td>rain</td></tr>
<tr><td>tu<b>e</b>og</td><td>tu-ɣog</td><td>tulog</td><td>sleep</td></tr>
<tr><td>isa<b>e</b>a</td><td>i-sa-ɣa</td><td>isa</td><td>one</td></tr>
<tr><td>d<b>e</b>sk</td><td>desk (plain e: before a consonant)</td><td>desk</td><td>desk</td></tr></table>
<p>If you cannot make the sound yet, a plain <b>l</b> is understood everywhere in Aklan (the Malaynon dialect around Malay and Buruanga keeps <i>l</i>), and most people switch to <i>l</i> with outsiders. Understanding it is what matters first: when you hear "ba-ɣay", hear <i>balay</i>.</p>
<h3>The shift you can apply today: Tagalog l → Aklanon e</h3>
<p>Where Tagalog (and Hiligaynon) have <b>l between vowels</b>, Aklanon usually has <b>e</b>. Where <i>l</i> sits next to a consonant it stays <i>l</i>: <i>adlaw</i> (day), <i>lima</i> (five), <i>lingkod</i> (sit).</p>
<table><tr><th>Tagalog</th><th>Aklanon</th><th>English</th></tr>
<tr><td>ulo</td><td>ueo</td><td>head</td></tr>
<tr><td>sulat</td><td>sueat</td><td>write, letter</td></tr>
<tr><td>walo</td><td>waeo</td><td>eight</td></tr>
<tr><td>bulan</td><td>buean</td><td>month, moon</td></tr>
<tr><td>dalagan</td><td>daeagan</td><td>run</td></tr>
<tr><td>langit</td><td>eangit</td><td>sky, heaven</td></tr></table>
<h3>Other things to listen for</h3>
<ul>
<li><b>r where Tagalog has d</b> in the little words: Tagalog <i>dito</i> → Aklanon <i>riya</i>; the topic marker is <b>ro</b> (some speakers say <i>do</i>; Zorc p. 21 treats <i>ro</i> as standard).</li>
<li><b>Hyphens mark a glottal stop before a consonant</b> (Zorc p. 32): <i>sin-o</i> (who), <i>kan-o</i> (when), <i>ap-at</i> (four), <i>an-om</i> (six), <i>tam-is</i> (sweet). Say the catch, then the consonant.</li>
<li>Final glottal stops are unwritten, as in Tagalog. <i>Baho</i> is both "bass" and "smell" (Zorc p. 32); context decides.</li>
<li><b>Stress is meaningful</b>, as in Tagalog (Zorc pp. 30–31). Speak slowly and evenly when unsure.</li>
<li><b>o and u</b>: roots spell first-syllable /o/ as <i>u</i> and final-syllable /o/ as <i>o</i> (<i>tueog</i>, <i>buean</i>); you will see both in the wild.</li>
</ul>
<div class="note">Clinical tip: patients will not expect you to produce the Aklanon e. They will expect you to <i>understand</i> <i>baeay</i>, <i>tueog</i>, <i>ueo</i>, <i>eawas</i> (body). Train your ear on the l→e shift first.</div>`,
  quiz: [
    ['In "bueak" (flower), how is the letter e pronounced?', ['Like e in "bed"', 'A soft consonant made at the back of the mouth, like a g that does not close', 'Silent', 'Like ee in "see"'], 1, 'Before a vowel, e is the Aklanon consonant. Before a consonant it is the plain vowel e.'],
    ['Tagalog "ulo" (head) is most likely which Aklanon word?', ['ulo', 'ueo', 'uro', 'uyo'], 1, 'Tagalog l between vowels usually corresponds to Aklanon e.'],
    ['What does the hyphen in "kan-o" mark?', ['Stress on the first syllable', 'A glottal stop before the consonant', 'Two separate words', 'A long vowel'], 1, 'Zorc p. 32: a glottal stop between a vowel and a consonant is written with a dash.'],
    ['Which word keeps its l in Aklanon?', ['bulan (month)', 'adlaw (day)', 'sulat (write)', 'walo (eight)'], 1, 'l next to a consonant stays l: adlaw. Between vowels it becomes e: buean, sueat, waeo.']
  ]
},
{
  id: 'markers', level: 'A1', unit: 'Foundations', title: 'ang, ng, sa → ro, it/ku, sa',
  summary: 'The three Tagalog markers map onto Aklanon almost one to one, with one useful split.',
  body: `
<p>Aklanon sentences are built the way Tagalog sentences are: a verb or predicate, then nouns introduced by little markers that say what role each noun plays. Zorc calls them <i>function markers</i> (pp. 146–148, 189–191). Here is the map.</p>
<table><tr><th>Role</th><th>Tagalog</th><th>Aklanon (common noun)</th><th>Aklanon (person's name)</th></tr>
<tr><td>Topic / focus ("the one")</td><td>ang</td><td><b>ro</b> (also heard <i>do</i>)</td><td><b>si</b></td></tr>
<tr><td>Non-topic, definite: owner, agent</td><td>ng</td><td><b>ku</b></td><td><b>ni</b></td></tr>
<tr><td>Non-topic, indefinite object</td><td>ng</td><td><b>it</b></td><td>—</td></tr>
<tr><td>Location, direction, recipient</td><td>sa</td><td><b>sa</b></td><td><b>kay</b></td></tr>
<tr><td>Plural of a name ("X and company")</td><td>sina / nina / kina</td><td>—</td><td><b>sanday / nanday / kanday</b></td></tr></table>
<h3>The one split to learn: ku vs it</h3>
<p>Tagalog <b>ng</b> does two jobs that Aklanon separates. <b>ku</b> marks a <i>definite</i> non-topic noun, typically the doer or the owner (Zorc spells it <i>ku</i> to keep it apart from the pronoun <i>ko</i>, p. 33). <b>it</b> marks an <i>indefinite</i> object or an attribute ("some", "a").</p>
<table><tr><th>Tagalog</th><th>Aklanon</th><th>English</th></tr>
<tr><td>bahay <b>ng</b> doktor</td><td>baeay <b>ku</b> doktor</td><td>the doctor's house</td></tr>
<tr><td>Binili <b>ng</b> bata ang isda.</td><td>Ginbakae <b>ku</b> unga ro isda.</td><td>The child bought the fish. (Zorc p. 33)</td></tr>
<tr><td>May pera ka ba?</td><td>May kwarta ka?</td><td>Do you have money?</td></tr>
<tr><td>Wala akong pera.</td><td>Owa ako <b>it</b> kwarta.</td><td>I have no money. ◌</td></tr>
<tr><td>kahapon <b>ng</b> hapon</td><td>kahapon <b>it</b> hapon</td><td>yesterday afternoon (Zorc p. 165)</td></tr></table>
<h3>Names and people</h3>
<table><tr><th>Tagalog</th><th>Aklanon</th><th>English</th></tr>
<tr><td><b>si</b> Nanay</td><td><b>si</b> Nanay</td><td>Mother (topic)</td></tr>
<tr><td>bahay <b>ni</b> Doktora</td><td>baeay <b>ni</b> Doktora</td><td>the doctor's house (Zorc p. 152)</td></tr>
<tr><td>Ibigay mo <b>kay</b> Nanay.</td><td>Itao mo <b>kay</b> Nanay.</td><td>Give it to Mother. ◌</td></tr>
<tr><td><b>sina</b> Pedro</td><td><b>sanday</b> Pedro</td><td>Pedro and the others</td></tr></table>
<h3>Plural and linker</h3>
<ul>
<li><b>mga</b> is the plural marker, exactly as in Tagalog (written <i>mga</i>, Zorc p. 190): <i>ro mga unga</i> (the children), <i>ro mga tawo</i> (the people).</li>
<li>The linker is <b>nga</b> where Tagalog has <i>na / -ng</i>: <i>mayad nga aga</i> (good morning), <i>akon nga baeay</i> (my house). After a vowel it often contracts to <i>-ng</i> just as in Tagalog: <i>akong baeay</i>, <i>imong ngaean</i> (your name) (Zorc p. 164).</li>
<li>Numbers take <b>ka</b> before the noun where Tagalog uses <i>-ng</i>: <i>tatlo <b>ka</b> adlaw</i> = tatlong araw (three days); <i>limang <b>ka</b> buean</i> = limang buwan (Zorc p. 165).</li>
</ul>
<div class="note">Listening shortcut: whenever you would expect <i>ang</i>, listen for <b>ro</b>; whenever you would expect <i>ng</i>, listen for <b>ku</b> or <b>it</b>. The sentence shape is otherwise the one you already know.</div>`,
  quiz: [
    ['Tagalog "ang pasyente" (the patient, as topic) in Aklanon:', ['si pasyente', 'ro pasyente', 'it pasyente', 'sa pasyente'], 1, 'ro is the topic marker for common nouns.'],
    ['"The nurse\'s house" — nurse is a definite owner. Which marker?', ['baeay it nars', 'baeay ku nars', 'baeay sa nars', 'baeay ro nars'], 1, 'ku marks a definite non-topic noun such as an owner or doer; it marks indefinite objects.'],
    ['Tagalog "tatlong araw" (three days) in Aklanon:', ['tatlong adlaw', 'tatlo nga adlaw', 'tatlo ka adlaw', 'tatlo it adlaw'], 2, 'Numbers link to their noun with ka: tatlo ka adlaw.'],
    ['"Give it to Nanay" uses which marker before Nanay?', ['si', 'ni', 'kay', 'ro'], 2, 'kay marks a person as recipient or location, as in Tagalog.']
  ]
},
{
  id: 'pronouns', level: 'A1', unit: 'Foundations', title: 'Pronouns: ako, ikaw, imaw, kita, kamo, sanda',
  summary: 'Three pronoun sets, like Tagalog. New forms to learn: imaw, sanda, and the k-set.',
  body: `
<p>Aklanon has the same three pronoun sets as Tagalog: a <b>topic</b> set (ako…), a <b>genitive</b> set that follows a word (ko, mo…) or precedes it (akin…), and an <b>oblique</b> set (sa akin…). Zorc (pp. 157–160) calls them topic, associate and referent. Most forms are familiar; the third person is new.</p>
<table><tr><th></th><th colspan="2">Topic (ako)</th><th colspan="2">Genitive after (ko)</th><th colspan="2">Genitive before (akin)</th><th colspan="2">Oblique (sa akin)</th></tr>
<tr><th></th><th>Tag.</th><th>Akl.</th><th>Tag.</th><th>Akl.</th><th>Tag.</th><th>Akl.</th><th>Tag.</th><th>Akl.</th></tr>
<tr><td>I</td><td>ako</td><td><b>ako</b></td><td>ko</td><td><b>ko</b></td><td>akin</td><td><b>akon</b></td><td>sa akin</td><td><b>kakon</b> ◌</td></tr>
<tr><td>you (sg.)</td><td>ikaw / ka</td><td><b>ikaw / ka</b></td><td>mo</td><td><b>mo</b></td><td>iyo</td><td><b>imo</b></td><td>sa iyo</td><td><b>kimo</b></td></tr>
<tr><td>he / she</td><td>siya</td><td><b>imaw</b></td><td>niya</td><td><b>na</b></td><td>kanya</td><td><b>ana</b></td><td>sa kanya</td><td><b>kana</b></td></tr>
<tr><td>we (you and I)</td><td>tayo</td><td><b>kita / ta</b></td><td>natin</td><td><b>naton / ta</b></td><td>atin</td><td><b>aton</b></td><td>sa atin</td><td><b>katon</b> ◌</td></tr>
<tr><td>we (not you)</td><td>kami</td><td><b>kami</b></td><td>namin</td><td><b>namon</b></td><td>amin</td><td><b>amon</b></td><td>sa amin</td><td><b>kamon</b> ◌</td></tr>
<tr><td>you (pl.)</td><td>kayo</td><td><b>kamo</b></td><td>ninyo</td><td><b>ninyo</b></td><td>inyo</td><td><b>inyo</b></td><td>sa inyo</td><td><b>kinyo</b></td></tr>
<tr><td>they</td><td>sila</td><td><b>sanda</b></td><td>nila</td><td><b>nanda</b></td><td>kanila</td><td><b>anda</b></td><td>sa kanila</td><td><b>kanda</b></td></tr></table>
<p>Topic, before-genitive and after-genitive sets are from Zorc pp. 157–158; the oblique set is partly reconstructed from the forms he cites (<i>kimo</i>, <i>kana</i>, <i>kanda</i>, <i>kinyo</i>) and from the pattern k + genitive (p. 160).</p>
<h3>What to notice</h3>
<ul>
<li><b>imaw</b> = siya; <b>sanda</b> = sila; <b>kamo</b> = kayo. These three carry most of the interview: <i>Imaw ro asawa ko</i> (He/she is my spouse). <i>Kamusta kamo?</i> (How are you? said respectfully).</li>
<li>The after-genitive set (<b>ko, mo, na, naton, namon, ninyo, nanda</b>) is Tagalog <i>ko, mo, niya…</i> with Visayan vowels: <i>ngaean ko</i> (my name), <i>ngaean mo</i> (your name), <i>asawa na</i> (his/her spouse), <i>unga nanda</i> (their child).</li>
<li>The before-genitive set (<b>akon, imo, ana, aton, amon, inyo, anda</b>) takes the linker: <i>akon nga baeay</i> / <i>akong baeay</i> (my house); <i>imong ngaean</i> (your name).</li>
<li><b>ka</b> and <b>ta</b> are short topic forms that must sit second in the clause (Zorc p. 157), like Tagalog <i>ka</i>: <i>Nakakaon ka eon?</i> (Have you eaten?). <i>Mapanaw ta.</i> (Let's go.) ◌</li>
<li>Pronoun clitics come <b>before</b> the particles (<i>eon, pa, gid, man</i>…), as in Tagalog: <i>Nakakaon <b>ka eon</b>?</i> (Zorc pp. 66, 204).</li>
</ul>
<h3>Respect without "po"</h3>
<p>Aklanon has no <i>po</i>. To one older patient, use the <b>plural</b>: <b>kamo</b> (topic), <b>ninyo</b> (genitive), <b>kinyo</b> (oblique), together with a title (<i>Nay, Tay, Nong, Nang</i>). This is the Visayan equivalent of <i>kayo / ninyo / sa inyo</i> + <i>po</i>, and Lesson 11 covers it in detail. Zorc's grammar does not discuss politeness directly, so treat this as common usage, not a rule he states.</p>
<div class="note">Example: Tagalog "Ano po ang pangalan ninyo?" → Aklanon <i>"Ano ro ngaean ninyo, Nay?"</i>. Tagalog "Ano ang pangalan mo?" → <i>"Ano ro ngaean mo?"</i></div>`,
  quiz: [
    ['Tagalog "siya" (he/she) in Aklanon:', ['siya', 'imaw', 'sanda', 'ana'], 1, 'imaw is he/she. (Zorc pp. 4, 157.) sanda is they.'],
    ['"Their child" (anak nila):', ['unga nanda', 'unga nila', 'unga anda', 'unga kanda'], 0, 'After the noun, use the after-genitive set: nanda = nila. (anda is the before-noun form: anda nga unga.)'],
    ['To address one elderly patient respectfully you say:', ['ikaw', 'kamo', 'sanda', 'imaw'], 1, 'Aklanon has no po; the plural kamo/ninyo/kinyo to one person carries respect.'],
    ['"Ano ro ngaean ___?" (What is your name?, respectful):', ['mo', 'ninyo', 'ko', 'na'], 1, 'ninyo = your (plural / respectful), exactly as in Tagalog.']
  ]
},
{
  id: 'demonstratives', level: 'A1', unit: 'Foundations', title: 'This, that, here, there: raya, ron, rato; riya, rito',
  summary: 'The r-words. Tagalog ito/iyan/iyon and dito/diyan/doon with an r.',
  body: `
<p>Aklanon demonstratives begin with <b>r</b> (some speakers say <b>d</b>, which Zorc p. 161 calls less prestigious). Three distances, as in Tagalog, plus a fourth Zorc lists for "near both of us".</p>
<table><tr><th>Meaning</th><th>Tagalog</th><th>Aklanon (topic)</th><th>Short form</th></tr>
<tr><td>this (near me)</td><td>ito</td><td><b>raya</b></td><td>ra</td></tr>
<tr><td>that (near you)</td><td>iyan</td><td><b>rana</b> ◌ (Zorc: <i>ran(h)a'</i>)</td><td>na'</td></tr>
<tr><td>that (near us both)</td><td>—</td><td><b>ruyon</b></td><td>ron</td></tr>
<tr><td>that (far from both)</td><td>iyon</td><td><b>rato</b></td><td>to</td></tr></table>
<table><tr><th>Meaning</th><th>Tagalog</th><th>Aklanon (place)</th></tr>
<tr><td>here</td><td>dito</td><td><b>riya</b></td></tr>
<tr><td>there (near you)</td><td>diyan</td><td><b>rina</b> ◌</td></tr>
<tr><td>there (far)</td><td>doon</td><td><b>rito</b></td></tr></table>
<p>Zorc's examples (p. 161): <i>Ano <b>ron</b>?</i> "What is that?"; <i>Pila <b>ruyon</b>?</i> "How much is that?"; <i>Basaha <b>ra</b>.</i> "Read this." (p. 68). Place forms: <i>riya</i> "here", <i>rito</i> "there, far" (p. 21).</p>
<h3>Careful: rito is NOT dito</h3>
<p>The false friend that catches every Tagalog speaker: Aklanon <b>rito</b> means <i>doon</i> (there, far), while <b>riya</b> means <i>dito</i> (here). <i>Lingkod riya</i> = sit here. <i>Siin ka gaadto? — Rito.</i> = Where are you going? — Over there.</p>
<h3>Genitive and oblique demonstratives</h3>
<p>Like <i>nito / dito</i> in Tagalog, Aklanon has <b>ku-</b> and <b>ka-</b> sets (Zorc p. 163): <i>kuraya</i> (of this), <i>karaya</i> (to this), <i>kato</i> (to that, far). You will mostly hear <b>kato</b> and <b>kara</b>; recognizing them is enough for now.</p>
<div class="note">Clinical use: <i>Riya o rito ro sakit?</i> (Is the pain here or there?) while pointing. <i>Ano ron?</i> when the patient brings something out. <i>Itudlo ro sakit.</i> (Point to the pain.)</div>`,
  quiz: [
    ['Aklanon "rito" means:', ['here (dito)', 'there, far (doon)', 'this (ito)', 'that near you (iyan)'], 1, 'rito = doon. "Here" is riya.'],
    ['"What is that?" (Zorc p. 161):', ['Ano raya?', 'Ano ron?', 'Ano riya?', 'Ano kato?'], 1, 'Ano ron? uses the short form of ruyon, "that".'],
    ['"Read this" (Zorc p. 68):', ['Basaha ra.', 'Basaha to.', 'Basaha riya.', 'Basaha rito.'], 0, 'ra is the short form of raya, "this".']
  ]
},
{
  id: 'may-owa', level: 'A1', unit: 'Foundations', title: 'may and owa; indi, ayaw, bukon: having and negating',
  summary: 'Tagalog has hindi and wala. Aklanon has four negators, each with its own job.',
  body: `
<h3>Having: may = may</h3>
<p><b>may</b> works as in Tagalog: existence and possession (Zorc pp. 4, 45). <i>May baeay eon imaw.</i> (He already has a house.) <i>May sakit ka?</i> (Are you ill? / Do you have pain?) <i>May unga kamo?</i> (Do you have children?)</p>
<h3>Not having, did not: owa = wala</h3>
<p><b>owa</b> (with a final glottal stop; also heard <i>wa</i>) is Tagalog <b>wala</b>. It negates existence and <b>completed</b> actions, just as <i>wala</i> does in colloquial Tagalog (<i>wala akong pumunta</i>). Zorc p. 64: <i>Owa ako magsimba kahapon.</i> "I did not go to church yesterday." Note the verb after <i>owa</i> takes the bare <b>mag-</b> form, not <i>nag-</i>.</p>
<table><tr><th>Tagalog</th><th>Aklanon</th><th>English</th></tr>
<tr><td>Wala akong pera.</td><td>Owa ako it kwarta.</td><td>I have no money. ◌</td></tr>
<tr><td>Wala siya rito.</td><td>Owa imaw riya.</td><td>He is not here. ◌</td></tr>
<tr><td>Hindi ako nakatulog. / Wala akong tulog.</td><td>Owa ako makatueog.</td><td>I could not sleep. ◌</td></tr>
<tr><td>Wala pa.</td><td>Owa pa.</td><td>Not yet.</td></tr>
<tr><td>Wala na talaga.</td><td>Owa gid eon.</td><td>There is none at all now. (cf. Zorc p. 205)</td></tr></table>
<h3>Will not, does not: indi = hindi</h3>
<p><b>indi</b> (final glottal) negates <b>future, habitual and unreal</b> actions and is the ordinary "no" in answer to a question (Zorc p. 61: <i>Indi ako magkaon.</i> "I will not eat."). <i>Indi ko maman-an.</i> (I don't know.) ◌ <i>Indi.</i> (No.)</p>
<h3>Don't: ayaw = huwag</h3>
<p><b>ayaw</b> is the prohibitive, Tagalog <i>huwag</i> (Zorc pp. 65, 68): <i>Ayaw magpanaw.</i> (Don't leave.) <i>Ayaw kahadlok.</i> (Don't be afraid.) ◌ Tagalog speakers: Aklanon <i>ayaw</i> does <b>not</b> mean "doesn't want". "Doesn't want" is <i>indi gusto</i> or <i>owa it gana</i>.</p>
<h3>It isn't a…: bukon</h3>
<p><b>bukon</b> negates a <b>noun or adjective predicate</b>, where Tagalog uses <i>hindi</i> (Zorc pp. 174, 195): <i>Bukon it doktor imaw.</i> (He is not a doctor.) ◌ <i>Bukon ra akon.</i> (This isn't mine.) ◌ Hiligaynon speakers use <i>indi</i> here, and you will hear both in Kalibo.</p>
<table><tr><th>You want to say</th><th>Use</th></tr>
<tr><td>no (answer); won't; doesn't (habit)</td><td><b>indi</b></td></tr>
<tr><td>didn't; there is no; none</td><td><b>owa</b></td></tr>
<tr><td>don't (command)</td><td><b>ayaw</b></td></tr>
<tr><td>is not a (noun/adjective)</td><td><b>bukon</b></td></tr></table>
<div class="note">Screening pattern: <i>May ___ ka?</i> → <i>Huo</i> / <i>Owa</i>. <i>Nag-___ ka?</i> (Did you…?) → <i>Huo</i> / <i>Owa</i>. <i>Maga-___ ka?</i> (Will you…?) → <i>Huo</i> / <i>Indi</i>.</div>`,
  quiz: [
    ['"I did not sleep last night": which negator?', ['indi', 'owa', 'ayaw', 'bukon'], 1, 'owa negates completed actions and existence, like Tagalog wala.'],
    ['Tagalog "huwag" is Aklanon:', ['indi', 'owa', 'ayaw', 'bukon'], 2, 'ayaw = don\'t (prohibitive). It does not mean "doesn\'t want" as in Tagalog.'],
    ['"He is not a doctor" uses:', ['indi', 'owa', 'ayaw', 'bukon'], 3, 'bukon negates a noun or adjective predicate (Zorc p. 174, 195).'],
    ['After "owa", the verb appears as:', ['nagsimba', 'magsimba', 'magasimba', 'nagasimba'], 1, 'Zorc p. 64: Owa ako magsimba kahapon. The verb takes the bare mag- form.']
  ]
},
{
  id: 'questions', level: 'A1', unit: 'Foundations', title: 'Question words: ano, sin-o, siin, kan-o, hin-uno, pila, ham-at',
  summary: 'Two words for "when", and "why" that sounds like nothing in Tagalog.',
  body: `
<table><tr><th>English</th><th>Tagalog</th><th>Aklanon</th><th>Example</th></tr>
<tr><td>what</td><td>ano</td><td><b>ano</b> (also <i>nano</i>)</td><td><i>Ano ro ngaean mo?</i> What is your name? ◌ · <i>Ano ron?</i> What is that? (Zorc p. 161)</td></tr>
<tr><td>who</td><td>sino</td><td><b>sin-o</b></td><td><i>Sin-o ro kaibahan mo?</i> Who is with you? ◌</td></tr>
<tr><td>where</td><td>saan / nasaan</td><td><b>siin</b></td><td><i>Siin ka gaadto?</i> Where are you going? (Zorc p. 117) · <i>Siin ka nagaistar?</i> Where do you live? ◌</td></tr>
<tr><td>when (past)</td><td>kailan</td><td><b>kan-o</b></td><td><i>Kan-o ikaw natawo?</i> When were you born? (Zorc p. 122) · <i>Kan-o nagsugod?</i> When did it start? ◌</td></tr>
<tr><td>when (future)</td><td>kailan</td><td><b>hin-uno</b></td><td><i>Hin-uno kamo mabalik?</i> When will you come back? ◌</td></tr>
<tr><td>how many / much</td><td>ilan / magkano</td><td><b>pila</b></td><td><i>Pila ro edad mo?</i> How old are you? ◌ · <i>Pila ruyon?</i> How much is that? (Zorc p. 161)</td></tr>
<tr><td>why</td><td>bakit</td><td><b>ham-at</b> (also <i>ham-an</i>)</td><td><i>Ham-at nag-abot ka riya?</i> Why did you come here? ◌</td></tr>
<tr><td>how (manner)</td><td>paano</td><td><b>paano</b> / <b>paalin</b></td><td><i>Paano ka nag-abot riya?</i> How did you get here? ◌</td></tr>
<tr><td>how is / how was</td><td>kumusta</td><td><b>mauno</b>, <b>kamusta</b></td><td><i>Mauno ro tueog mo?</i> How is your sleep? ◌ · <i>Kamusta kamo?</i></td></tr>
<tr><td>which</td><td>alin</td><td><b>alin</b> / <b>siin</b></td><td><i>Alin ro mas masakit?</i> Which hurts more? ◌</td></tr></table>
<h3>Two "whens"</h3>
<p>Like Cebuano and Hiligaynon, Aklanon splits <i>kailan</i>: <b>kan-o</b> asks about the <b>past</b> (Zorc p. 122), <b>hin-uno</b> about the <b>future</b> (listed in Zorc's dictionary as "when, future"). For the interview, <b>kan-o</b> is the one you will use most: <i>Kan-o pa?</i> (Since when?) ◌</p>
<h3>Yes/no questions</h3>
<p>Tagalog <i>ba</i> has a cousin, <b>baea</b>, but it adds emphasis ("really?", Zorc p. 199) and is not needed for a plain question. A plain yes/no question is made by intonation alone: <i>May unga kamo?</i> (Do you have children?) <i>Nakakaon ka eon?</i> (Have you eaten? Zorc p. 66).</p>
<div class="note">Answers to expect: <b>Huo</b> (yes), <b>Indi</b> (no), <b>Owa</b> (none / didn't), <b>Siguro</b> (maybe), <b>Indi ko maman-an</b> (I don't know). ◌</div>`,
  quiz: [
    ['"When did it start?" uses:', ['hin-uno', 'kan-o', 'san-o', 'kailan'], 1, 'kan-o asks about the past (Zorc p. 122: Kan-o ikaw natawo?).'],
    ['"Where do you live?" begins with:', ['saan', 'siin', 'sin-o', 'ano'], 1, 'siin = where (Zorc p. 117). sin-o = who.'],
    ['"Why" in Aklanon:', ['bakit', 'ngaa', 'ham-at', 'paano'], 2, 'ham-at (also ham-an). ngaa is Hiligaynon and you may hear it in Kalibo too.'],
    ['Is a particle like Tagalog "ba" required for a yes/no question?', ['Yes, always add baea', 'No; intonation alone is enough, baea adds emphasis', 'Yes, add ba', 'Only with pronouns'], 1, 'Zorc p. 199 lists baea as an emphasizing question particle ("really?"), not an obligatory one.']
  ]
},
{
  id: 'focus', level: 'A2', unit: 'Verbs', title: 'Verb focus: mag-, -on, -an, i- with Aklanon spelling',
  summary: 'Same focus system as Tagalog. The affixes are old friends with a Visayan accent.',
  body: `
<p>Aklanon verbs, like Tagalog verbs, choose a <b>focus</b>: the topic (<i>ro</i>-phrase) is the actor, the object, the location/beneficiary, or the instrument/thing conveyed. Zorc (pp. 55–120) calls these actor, object, referent and instrument focus. The affixes are the ones you know, in Visayan shape.</p>
<table><tr><th>Focus</th><th>Tagalog</th><th>Aklanon</th><th>Tagalog example</th><th>Aklanon example</th></tr>
<tr><td>Actor</td><td>mag-, -um-, ma-</td><td><b>mag-</b> (maga-/naga-/nag-), <b>ma-</b></td><td>Kumain ako.</td><td>Nagkaon ako.</td></tr>
<tr><td>Object</td><td>-in, -in-</td><td><b>-on</b> (gina-/gin-), imperative <b>-a</b></td><td>Kainin mo ito.</td><td>Kaunon mo ra. ◌ / Basaha ra. (Zorc p. 68)</td></tr>
<tr><td>Location / beneficiary</td><td>-an</td><td><b>-an</b> (gina-…-an / gin-…-an), imperative <b>-i</b></td><td>Hugasan mo ang kamay mo.</td><td>Hugasi ring alima. (Zorc p. 64)</td></tr>
<tr><td>Instrument / conveyed</td><td>i-</td><td><b>i-</b> (gina-/gin-)</td><td>Ihatid mo ang bata.</td><td>Ihatod mo ro unga. (Zorc p. 68)</td></tr></table>
<h3>What is different from Tagalog</h3>
<ul>
<li><b>-um- is rare.</b> Where Tagalog says <i>kumain, uminom, pumunta</i>, Aklanon says <b>nagkaon, nag-inom, nag-agto</b>. Zorc records <i>-um-</i> only in a few subjunctive/imperative uses (<i>Umadto ka sa Capiz</i>, p. 63). Default to <b>mag-</b>.</li>
<li><b>-in → -on.</b> Tagalog <i>kainin</i> → Aklanon <i>kaunon</i>; <i>inumin</i> → <i>imnon</i>; <i>sabihin</i> → <i>sugidon</i> ◌.</li>
<li><b>gin- / gina-</b> replace the Tagalog infix <i>-in-</i> and reduplication for completed and ongoing non-actor forms: <i>binili</i> → <b>ginbakae</b>; <i>binibili</i> → <b>ginabakae</b>; <i>ginawa niya</i> → <b>ginhimo na</b> (Zorc pp. 33, 152). An infixed form <i>-in-</i> also exists (<i>Dawatin ro asin</i>, "Pass the salt", p. 68).</li>
<li><b>Imperatives are short</b>: object focus <b>-a</b> (<i>Basaha ra</i>, read this; <i>Tan-awa</i>, look at; <i>Obraha anay raya</i>, do this first, Zorc pp. 57, 68, 200), referent focus <b>-i</b> (<i>Hugasi</i>, wash; <i>Tubi-i ro mga bueak</i>, water the flowers, p. 68), actor focus bare root or <i>mag-</i> (<i>Lingkod anay kamo</i>, please sit, p. 68).</li>
</ul>
<h3>Causative pa- works as in Tagalog</h3>
<p><i>Ipatawag mo ro doktor.</i> Have the doctor called (Zorc p. 101). <i>Palingkora ro bisita.</i> Have the visitor sit down (p. 68). <i>Pakaon</i> = feed (pa + kaon).</p>
<div class="note">For the interview you mostly need actor-focus questions (<i>Nag-___ ka?</i>) and a few object-focus commands (<i>Tan-awa</i>, <i>Sugidi ako</i> "tell me" ◌, <i>Itudlo</i> "point to"). Lesson 8 gives the aspect forms.</div>`,
  quiz: [
    ['Tagalog "kumain ako" in Aklanon:', ['Kumaon ako.', 'Nagkaon ako.', 'Ginkaon ako.', 'Kaunon ako.'], 1, '-um- is rare in Aklanon; actor focus uses mag-/nag-.'],
    ['Tagalog object-focus "-in" (kainin) corresponds to Aklanon:', ['-in', '-on', '-an', 'i-'], 1, 'kainin → kaunon.'],
    ['"Wash your hands" (Zorc p. 64) uses which imperative ending?', ['-a', '-i', '-on', 'i-'], 1, 'Hugasi: referent/location focus imperative -i.'],
    ['Tagalog "binili" (was bought) is Aklanon:', ['ginbakae', 'ginabakae', 'bakaeon', 'magbakae'], 0, 'gin- marks the completed non-actor form (Zorc p. 33: ginbakae ku unga).']
  ]
},
{
  id: 'aspect', level: 'A2', unit: 'Verbs', title: 'Aspect: nag-, naga-, maga-, mag- and gin-, gina-, -on',
  summary: 'Completed, ongoing, future, and the bare form. One table to memorize.',
  body: `
<p>Tagalog marks aspect with infixes and reduplication (<i>kumain, kumakain, kakain</i>). Aklanon does it with prefixes, which is easier. Zorc's full chart (p. 95) is organized by real/unreal aspects; the forms below are the four you need, with his examples where available.</p>
<table><tr><th>Aspect</th><th>Tagalog (kain)</th><th>Actor focus (kaon)</th><th>Object focus (kaon)</th><th>Referent (-an)</th><th>Instrument (i-)</th></tr>
<tr><td>Completed</td><td>kumain / kinain</td><td><b>nag</b>kaon</td><td><b>gin</b>kaon</td><td>gin…an</td><td>gin-i…</td></tr>
<tr><td>Ongoing / habitual</td><td>kumakain / kinakain</td><td><b>naga</b>kaon</td><td><b>gina</b>kaon</td><td>gina…an</td><td>gina-i…</td></tr>
<tr><td>Future</td><td>kakain / kakainin</td><td><b>maga</b>kaon</td><td>kaun<b>on</b> (paga-kaunon)</td><td>…an</td><td>i…</td></tr>
<tr><td>Bare (after indi, owa, gusto, dapat; commands)</td><td>kumain / kainin</td><td><b>mag</b>kaon</td><td>kaun<b>on</b> / imperative kaun<b>a</b></td><td>…an / imper. …i</td><td>i…</td></tr></table>
<p>Attested in Zorc: <i>nag-</i> perfective, <i>maga-</i> future, <i>mag-</i> dependent/subjunctive, <i>pag-</i> participle (p. 95); <i>gina-/gin-</i> for non-actor imperfective/perfective (p. 95); <i>Nakakaon eon kamo?</i> (p. 66); <i>Owa ako magsimba kahapon</i> (p. 64); <i>Indi ako magkaon</i> (p. 61); <i>Magaadto pa ako…</i> (p. ~60). The <i>naga-</i> ongoing form appears in his examples (<i>nagatikang</i>, p. 164; <i>Siin ka gaadto?</i>, p. 117, where <i>ga-</i> is the clipped colloquial form of <i>naga-</i>).</p>
<h3>Clinical sentences built from the table</h3>
<table><tr><th>Tagalog</th><th>Aklanon</th><th>English</th></tr>
<tr><td>Natulog ka ba kagabi?</td><td>Nakatueog ka kabii?</td><td>Did you sleep last night? ◌</td></tr>
<tr><td>Umiinom ka ba ng gamot?</td><td>Nagainom ka it tambae?</td><td>Are you taking medicine? ◌</td></tr>
<tr><td>Iinom mo ba ang gamot?</td><td>Imnon mo ro tambae?</td><td>Will you take the medicine? ◌</td></tr>
<tr><td>Kumakain ka ba nang maayos?</td><td>Nagakaon ka it mayad?</td><td>Are you eating well? ◌</td></tr>
<tr><td>Hindi ako makatulog.</td><td>Indi ako makatueog.</td><td>I can't sleep. ◌</td></tr>
<tr><td>Hindi ako nakatulog.</td><td>Owa ako makatueog.</td><td>I couldn't sleep. ◌</td></tr>
<tr><td>Babalik kami sa susunod na linggo.</td><td>Magabalik kami sa masunod nga semana.</td><td>We will come back next week. (cf. Zorc p. 166)</td></tr></table>
<h3>Ability: naka- / maka- = naka- / maka-</h3>
<p>Same as Tagalog (Zorc pp. 59–60, 66): <i>Nakakaon eon kamo?</i> Have you eaten? <i>Indi ako makatueog.</i> I cannot sleep. The completed negative uses <b>owa + maka-</b>: <i>Owa ako makatueog.</i></p>
<h3>Spoken shortcuts you will hear</h3>
<ul>
<li><b>naga- → ga-</b>: <i>Gakaon ka?</i> (Are you eating?), <i>Siin ka gaadto?</i> (Zorc p. 117).</li>
<li><b>maga- → ma-</b>: <i>Maadto ako sa Kalibo.</i> (I'll go to Kalibo.) Zorc p. 61 lists <i>ma-</i> as a future form.</li>
<li><b>eon</b> after a completed verb = Tagalog <i>na</i>: <i>Nagkaon eon ako.</i> (I have eaten.)</li>
</ul>
<div class="note">Memory hook for Tagalog speakers: Aklanon <b>nag- / naga- / maga-</b> line up with Tagalog <b>nag- / nag-CV- / mag-CV-</b> (nagluto / nagluluto / magluluto). Aklanon just drops the reduplication and uses one extra <i>a</i>.</div>`,
  quiz: [
    ['"Are you (currently) taking medicine?" — the verb form:', ['nag-inom', 'nagainom', 'magainom', 'mag-inom'], 1, 'naga- marks ongoing/habitual action (Tagalog umiinom).'],
    ['"We will come back" — the verb form:', ['nagbalik', 'nagabalik', 'magabalik', 'ginbalik'], 2, 'maga- is the future (Tagalog babalik).'],
    ['Which Tagalog form matches Aklanon "ginakaon"?', ['kinain', 'kinakain', 'kakainin', 'kainin'], 1, 'gina- = ongoing non-actor focus = Tagalog kinakain.'],
    ['Spoken "Gakaon ka?" is a shortening of:', ['Nagkaon ka?', 'Nagakaon ka?', 'Magakaon ka?', 'Ginkaon ka?'], 1, 'naga- is often clipped to ga- in speech (Zorc p. 117: Siin ka gaadto?).']
  ]
},
{
  id: 'particles', level: 'A2', unit: 'Sentences', title: 'Particles: eon, pa, gid, man, lang, anay, kuno, baea',
  summary: 'na → eon, talaga → gid, din → man, muna → anay, daw → kuno. The rest you already have.',
  body: `
<p>Tagalog speakers already think in particles. Aklanon has the same slots (Zorc pp. 199–209): pronoun clitics first, then <b>pa</b> or <b>eon</b>, then the others. Here is the translation table, with Zorc's examples.</p>
<table><tr><th>Tagalog</th><th>Aklanon</th><th>Meaning</th><th>Example (Zorc page)</th></tr>
<tr><td>na</td><td><b>eon</b> (also <i>ron</i>)</td><td>now, already</td><td><i>Nakakaon ka eon?</i> Have you eaten? (p. 201) · <i>Husto eon.</i> That's enough. (p. 201)</td></tr>
<tr><td>pa</td><td><b>pa</b></td><td>still, yet, more</td><td><i>Una pa imaw?</i> Is he still there? (p. 201) · <i>Owa pa.</i> Not yet.</td></tr>
<tr><td>talaga</td><td><b>gid</b></td><td>really, very, at all</td><td><i>Owa gid.</i> None at all. (p. 205) · <i>Salamat gid.</i> Thank you very much. ◌</td></tr>
<tr><td>din / rin</td><td><b>man</b></td><td>also, too</td><td><i>Mayad nga hapon man.</i> Good afternoon to you too. (p. 205)</td></tr>
<tr><td>lang / lamang</td><td><b>lang</b>, <b>eang</b></td><td>just, only</td><td><i>Sige lang.</i> Go ahead. (p. 205) · <i>Sangkurot eang.</i> Just a little. (p. 205)</td></tr>
<tr><td>muna</td><td><b>anay</b></td><td>first; please</td><td><i>Lingkod anay kamo.</i> Please sit down. (p. 68) · <i>Obraha anay raya.</i> Do this first. (p. 200)</td></tr>
<tr><td>daw / raw</td><td><b>kuno</b></td><td>they say, reportedly</td><td><i>Mayad gid kuno.</i> It is said to be very good. (p. 202)</td></tr>
<tr><td>ba (emphatic)</td><td><b>baea</b></td><td>really? (emphasis)</td><td><i>Siin baea imaw?</i> Where on earth is he? (p. 199)</td></tr>
<tr><td>kasi / eh</td><td><b>abi</b></td><td>because, you see</td><td><i>Masakit abi ako.</i> But I was sick, you see. (p. 200)</td></tr>
<tr><td>nga (emphatic)</td><td><b>ngani</b></td><td>indeed; I know</td><td><i>Huo ngani.</i> Yes, I know. (p. 207)</td></tr>
<tr><td>agad</td><td><b>eagi</b></td><td>at once</td><td><i>Mapanaw kita eagi?</i> Shall we leave right away? (p. 203)</td></tr>
<tr><td>halos</td><td><b>haeos</b></td><td>almost</td><td><i>Haeos adlaw-adlaw.</i> Almost every day. ◌</td></tr>
<tr><td>ha</td><td><b>ha</b></td><td>okay? tag</td><td><i>Mamunot man ako, ha?</i> I'll come along, okay? (p. 208)</td></tr></table>
<h3>Order</h3>
<p>Zorc's position chart (p. 204): <b>pronoun → pa / eon → the rest</b>. <i>Nakakaon <b>ka eon</b>?</i> <i>Owa <b>pa</b> gid.</i> <i>Sige <b>lang</b> anay.</i> ◌ <i>pa</i> and <i>eon</i> never occur together, just as <i>pa</i> and <i>na</i> do not in Tagalog.</p>
<h3>Three particles you hear in every clinic conversation</h3>
<ul>
<li><b>eon</b> for change of state: <i>Mayad eon ako.</i> I'm better now. ◌ <i>Owa eon.</i> Not anymore. ◌</li>
<li><b>gid</b> for intensity, and in <i>Salamat gid</i>: your most-used polite phrase.</li>
<li><b>anay</b> to soften any request: <i>Hueat anay.</i> Please wait. ◌ <i>Sugidi ako anay.</i> Please tell me. ◌</li>
</ul>
<div class="note">False friend: Aklanon <b>man</b> is Tagalog <i>din/rin</i>, not Tagalog <i>man</i> ("even"). <i>Ako man.</i> = Me too.</div>`,
  quiz: [
    ['Tagalog "na" (already) in Aklanon:', ['na', 'eon', 'pa', 'man'], 1, 'eon (also ron): Nakakaon ka eon?'],
    ['Tagalog "muna" (first, please) in Aklanon:', ['anay', 'lang', 'gid', 'kuno'], 0, 'anay: Lingkod anay kamo = Please sit down (Zorc p. 68).'],
    ['"Ako man" means:', ['Even me', 'Me too', 'Only me', 'Me first'], 1, 'man = also/too (Tagalog din/rin).'],
    ['Correct particle order:', ['Nakakaon eon ka?', 'Nakakaon ka eon?', 'Eon nakakaon ka?', 'Nakakaon ka na?'], 1, 'Pronoun clitic first, then eon (Zorc pp. 66, 204).']
  ]
},
{
  id: 'numbers-time', level: 'A2', unit: 'Sentences', title: 'Numbers, time words, how long and how often',
  summary: 'Native numbers to ten, Spanish numbers for the rest, and the time phrases every HPI needs.',
  body: `
<h3>Native numbers</h3>
<table><tr><th></th><th>Tagalog</th><th>Aklanon</th><th></th><th>Tagalog</th><th>Aklanon</th></tr>
<tr><td>1</td><td>isa</td><td><b>isaea</b> (also <i>sambato</i>, Zorc p. 163)</td><td>6</td><td>anim</td><td><b>an-om</b></td></tr>
<tr><td>2</td><td>dalawa</td><td><b>daywa</b></td><td>7</td><td>pito</td><td><b>pito</b></td></tr>
<tr><td>3</td><td>tatlo</td><td><b>tatlo</b></td><td>8</td><td>walo</td><td><b>waeo</b></td></tr>
<tr><td>4</td><td>apat</td><td><b>ap-at</b></td><td>9</td><td>siyam</td><td><b>siyam</b></td></tr>
<tr><td>5</td><td>lima</td><td><b>lima</b></td><td>10</td><td>sampu</td><td><b>pueo</b> / <i>napueo</i></td></tr></table>
<p>As in Tagalog, <b>Spanish numbers</b> (uno, dos, tres… bente, trenta, sien) are used for age, money, dates and clock time: <i>Kinse anyos</i> (fifteen years old), <i>alas tres</i> (three o'clock), <i>biyente e syete</i> (27, Zorc p. 201). Numbers link to nouns with <b>ka</b>: <i>tatlo ka adlaw</i> (three days), <i>limang ka buean</i> (five months, Zorc p. 165).</p>
<h3>Time words</h3>
<table><tr><th>Tagalog</th><th>Aklanon</th><th>English</th></tr>
<tr><td>ngayon</td><td><b>makaron</b></td><td>now (Zorc p. 201: <i>mga alas tres makaron</i>) ◌</td></tr>
<tr><td>kahapon</td><td><b>kahapon</b></td><td>yesterday (p. 165)</td></tr>
<tr><td>kagabi</td><td><b>kabii</b></td><td>last night (p. 158: <i>kabii</i>)</td></tr>
<tr><td>bukas</td><td><b>sa aga</b> / <b>buwas</b> ◌</td><td>tomorrow</td></tr>
<tr><td>umaga / tanghali / hapon / gabi</td><td><b>aga / udto / hapon / gabii</b></td><td>morning / noon / afternoon / night</td></tr>
<tr><td>araw / linggo / buwan / taon</td><td><b>adlaw / semana (domingo) / buean / dag-on</b></td><td>day / week / month / year (p. 165: <i>dag-on</i>)</td></tr>
<tr><td>noon, dati</td><td><b>kato</b>, <b>sadto</b> ◌</td><td>back then, before</td></tr>
<tr><td>noong Lunes</td><td><b>ku Lunes</b></td><td>last Monday (p. 166)</td></tr></table>
<h3>How long ago, since when, how often</h3>
<table><tr><th>Tagalog</th><th>Aklanon</th><th>English</th></tr>
<tr><td>dalawang araw na ang nakalipas</td><td><b>daywang adlaw eon</b></td><td>two days ago (Zorc p. 165)</td></tr>
<tr><td>limang buwan na</td><td><b>limang ka buean eon</b></td><td>five months ago / for five months now (p. 165)</td></tr>
<tr><td>tatlong taon na</td><td><b>tatlo ka dag-on eon</b></td><td>three years now (p. 165)</td></tr>
<tr><td>sa loob ng dalawang oras</td><td><b>sa sueod it daywang oras</b></td><td>within two hours (p. 166)</td></tr>
<tr><td>sa susunod na linggo</td><td><b>sa masunod nga semana</b></td><td>next week (p. 166)</td></tr>
<tr><td>Kailan pa?</td><td><b>Kan-o pa?</b></td><td>Since when? ◌</td></tr>
<tr><td>araw-araw</td><td><b>adlaw-adlaw</b></td><td>every day ◌</td></tr>
<tr><td>palagi / lagi</td><td><b>pirme</b></td><td>always ◌</td></tr>
<tr><td>minsan</td><td><b>kun kaisa</b> / <b>kaisa-isa</b> ◌</td><td>sometimes</td></tr>
<tr><td>bihira</td><td><b>talagsa</b> ◌</td><td>rarely</td></tr>
<tr><td>hindi kailanman</td><td><b>owa gid</b></td><td>never (did) ◌</td></tr></table>
<p>Zorc has no frequency section; the frequency words above are the author's and are a priority for native-speaker review. The duration formula <b>NUMBER ka UNIT eon</b> = "for N units now / N units ago" is attested (pp. 165–166) and covers most of the HPI.</p>
<div class="note">HPI template: <i>Kan-o nagsugod?</i> (When did it start?) → <i>Daywang semana eon.</i> (Two weeks now.) <i>Pila ka beses sa isaea ka semana?</i> (How many times a week?) ◌</div>`,
  quiz: [
    ['Aklanon for four:', ['apat', 'ap-at', 'upat', 'kwatro only'], 1, 'ap-at, with the glottal stop written as a hyphen.'],
    ['"Five months now / five months ago" (Zorc p. 165):', ['lima buean na', 'limang ka buean eon', 'lima nga buean pa', 'sa lima ka buean'], 1, 'NUMBER ka UNIT eon.'],
    ['"Last night" in Aklanon:', ['kagabi', 'kabii', 'gabii', 'kahapon'], 1, 'kabii = last night; gabii = night.'],
    ['Which Zorc-attested phrase means "next week"?', ['sa masunod nga semana', 'ku semana', 'semana eon', 'sa semana pa'], 0, 'sa + masunod nga + unit for future time (p. 166); ku + unit for past (ku Lunes).']
  ]
},
{
  id: 'politeness', level: 'A2', unit: 'Culture', title: 'Respect without po: kamo, titles, anay, greetings',
  summary: 'What replaces po/opo, how to greet, how to thank, and how to address an elder.',
  body: `
<p>Tagalog speakers feel naked without <i>po</i>. Aklanon, like all Visayan languages, never had it. Respect is carried by four other things.</p>
<h3>1. The plural for one person</h3>
<p>Say <b>kamo / ninyo / kinyo</b> to an older or unfamiliar person, exactly as you say <i>kayo / ninyo / sa inyo</i> in formal Tagalog. <i>Kamusta kamo?</i> <i>Ano ro ngaean ninyo?</i> <i>Para kinyo raya.</i> (This is for you.) ◌ Zorc's grammar does not comment on this; it is everyday usage.</p>
<h3>2. Titles</h3>
<table><tr><th>Say to</th><th>Aklanon</th><th>Tagalog equivalent</th></tr>
<tr><td>older woman / mother</td><td><b>Nay</b> (Nanay)</td><td>Nanay, Ate (for an older woman)</td></tr>
<tr><td>older man / father</td><td><b>Tay</b> (Tatay)</td><td>Tatay</td></tr>
<tr><td>somewhat older man</td><td><b>Nong</b> (Manong)</td><td>Kuya</td></tr>
<tr><td>somewhat older woman</td><td><b>Nang</b> (Manang)</td><td>Ate</td></tr>
<tr><td>elderly</td><td><b>Lolo / Lola</b></td><td>Lolo / Lola</td></tr>
<tr><td>boy, young man</td><td><b>Toto</b> ◌</td><td>Totoy</td></tr>
<tr><td>girl, young woman</td><td><b>Inday</b> ◌</td><td>Neneng</td></tr>
<tr><td>a doctor</td><td><b>Dok</b>, <b>Doktor / Doktora</b></td><td>Dok</td></tr></table>
<p>Use the title at the end of the sentence the way you would place <i>po</i>: <i>Lingkod anay kamo, Nay.</i> <i>Salamat gid, Tay.</i></p>
<h3>3. anay</h3>
<p><b>anay</b> (= <i>muna</i>, Zorc pp. 68, 200) softens commands into requests: <i>Hueat anay.</i> Please wait. ◌ <i>Lingkod anay kamo.</i> Please sit down. (Zorc p. 68) <i>Istorya anay kita.</i> Let's talk first. ◌ Also <b>palihog</b> / <b>paki-</b> for "please" in requests (<i>Palihog sueat riya</i>, please write here ◌; Zorc's dictionary lists the <i>paki-</i> prefix).</p>
<h3>4. Formulae</h3>
<table><tr><th>Tagalog</th><th>Aklanon</th><th>Note</th></tr>
<tr><td>Magandang umaga po.</td><td><b>Mayad nga aga.</b> / <b>Mayad-ayad nga aga.</b></td><td>Zorc p. 205 attests <i>Mayad nga hapon</i>; the reduplicated <i>mayad-ayad</i> is the warm, typical Aklanon greeting. ◌</td></tr>
<tr><td>Magandang hapon / gabi po.</td><td><b>Mayad nga hapon / gabii.</b></td><td></td></tr>
<tr><td>Kumusta po kayo?</td><td><b>Kamusta kamo?</b></td><td>Reply: <i>Mayad man.</i> (Fine too.) ◌</td></tr>
<tr><td>Salamat po.</td><td><b>Salamat.</b> / <b>Salamat gid.</b></td><td>gid = talaga</td></tr>
<tr><td>Walang anuman.</td><td><b>Owa it anuman.</b> ◌</td><td></td></tr>
<tr><td>Pasensya na po.</td><td><b>Pasensya eon.</b> ◌</td><td>Zorc's dictionary lists <i>pasensya</i>.</td></tr>
<tr><td>Tuloy po kayo.</td><td><b>Dayon kamo.</b></td><td>come in; <i>dayon</i> "stay, dwell" in Zorc's dictionary</td></tr>
<tr><td>Sige po. / Opo.</td><td><b>Sige.</b> / <b>Huo.</b></td><td>No <i>opo</i>; a plain <i>Huo, Nay</i> is respectful.</td></tr>
<tr><td>Paalam po.</td><td><b>Sige, mauna eon ako.</b> ◌ / <b>Adyos.</b></td><td>Zorc's dictionary: <i>adyos</i> for long partings</td></tr></table>
<h3>hiya and face</h3>
<p>Aklanon <b>huya</b> is Tagalog <i>hiya</i> (Zorc's dictionary: "face, pride, shame"). <i>Nahuhuya ako</i> ◌ = nahihiya ako. The same shame-attenuation moves you use in Tagalog apply: normalize, ask permission before sensitive topics, use the title.</p>
<div class="note">Rule of thumb: every place you would put <i>po</i>, put nothing, and make sure the pronoun is <i>kamo/ninyo</i> and the sentence ends with <i>Nay / Tay / Nong / Nang</i>.</div>`,
  quiz: [
    ['How is respect to an elder expressed in Aklanon?', ['Adding po', 'Using the plural kamo/ninyo plus a title', 'Using imaw', 'Adding baea'], 1, 'Aklanon has no po; plural pronoun + title (Nay, Tay, Nong, Nang) carry respect.'],
    ['Tagalog "muna" / please-softener in Aklanon:', ['anay', 'eon', 'gid', 'man'], 0, 'anay: Lingkod anay kamo (Zorc p. 68).'],
    ['Good morning in Aklanon:', ['Maayong umaga', 'Mayad nga aga', 'Mabuting umaga', 'Mayad nga gabii'], 1, 'Mayad nga aga (cf. Zorc p. 205, Mayad nga hapon).'],
    ['Respectful "yes" to an elder:', ['Opo', 'Huo, Nay', 'Oo po', 'Huo po'], 1, 'Huo plus the title; no po/opo exists.']
  ]
},
{
  id: 'kalibo-register', level: 'B1', unit: 'Culture', title: 'Real Kalibo speech: hay, mixing, and when your Aklanon is not enough',
  summary: 'The ay-inversion, the three languages patients actually mix, and how to run an interpreted interview.',
  body: `
<h3>hay = ay</h3>
<p>Tagalog <i>ay</i>-inversion exists in Aklanon as <b>hay</b> (Zorc pp. 151–152): topic first, then <i>hay</i>, then the predicate. <i>Ro nagpanaw sa Manila <b>hay</b> si Tatay.</i> "The one who left for Manila was Father." <i>Ro baeay ni Doctora <b>hay</b> ginhimo ni Juan.</i> "Doctora's house was built by Juan." Patients narrating a history use it constantly: <i>Ro asawa ko hay nagainom.</i> (My husband drinks.) ◌ Hear <i>hay</i> as the hinge between "what I'm talking about" and "what about it".</p>
<h3>What you will actually hear in Kalibo</h3>
<ul>
<li><b>Aklanon</b> with the <i>e</i> sound, from most Kalibo-born patients and families.</li>
<li><b>Hiligaynon (Ilonggo)</b> forms mixed in, because it is the regional lingua franca of Panay: <i>ang</i> instead of <i>ro</i>, <i>wala</i> instead of <i>owa</i>, <i>ngaa</i> for <i>ham-at</i>, <i>siya</i> for <i>imaw</i>, <i>sila</i> for <i>sanda</i>, <i>balay</i> for <i>baeay</i>, <i>san-o</i> for <i>kan-o</i>. If a word sounds "more Tagalog than expected", it is probably Hiligaynon.</li>
<li><b>Tagalog and English</b> for school, medical and government words (<i>depression, blood pressure, stress, check-up, maintenance</i>). Patients will often switch fully to Tagalog for you once they hear your accent, and that is fine.</li>
<li><b>Malaynon</b> speakers from Malay, Buruanga and Boracay keep <i>l</i> (<i>balay</i>, <i>bulak</i>).</li>
</ul>
<h3>Tell patients what you can do</h3>
<p><i>Nagatuon pa ako it Inakeanon. Kon indi ninyo ako maintindihan, sugidi ako, Nay.</i> (I'm still learning Aklanon. If you don't understand me, tell me.) ◌ Most patients will meet you halfway in Tagalog; your Aklanon is for <b>understanding</b> what they say to each other and to you when they are distressed, tired or elderly, and for the few lines that build rapport.</p>
<h3>When your Aklanon is not enough: run the interview, do not hand it over</h3>
<ul>
<li><b>Interpreter is a nurse or staff member, not the family.</b> Family soften, summarize and answer for the patient; you lose the exact words that carry suicidal intent, delusional content and thought form.</li>
<li><b>Brief the interpreter</b>: translate everything, first person, word for word, including pauses and swearing; do not tidy up disorganized speech; tell me when a word has no equivalent.</li>
<li><b>Speak to the patient</b>, not to the interpreter. Short sentences. One question at a time.</li>
<li><b>Ask for the Aklanon back</b> on risk items: "What exactly did she say?" Then look it up or flag it in this app.</li>
<li><b>Rating scales</b>: use a validated Filipino version if the patient reads Tagalog; otherwise document that items were administered through an interpreter.</li>
</ul>
<div class="note">Chart line: "Interview conducted in Tagalog/English with Aklanon phrases; key statements verified through nurse interpreter (Aklanon)."</div>`,
  quiz: [
    ['Aklanon "hay" corresponds to Tagalog:', ['ay (inversion marker)', 'may', 'ba', 'kasi'], 0, 'Zorc pp. 151–152: topic, hay, predicate.'],
    ['A Kalibo patient says "wala", "ngaa" and "siya". These are most likely:', ['Standard Aklanon', 'Hiligaynon forms mixed in', 'Tagalog', 'Malaynon'], 1, 'Hiligaynon is the regional lingua franca; Aklanon would be owa, ham-at, imaw.'],
    ['Who should interpret a risk assessment?', ['The patient\'s spouse', 'The eldest child', 'A nurse or staff member briefed to translate word for word', 'Nobody; skip the item'], 2, 'Family soften and summarize; a briefed staff interpreter preserves the patient\'s exact words.']
  ]
}
];
