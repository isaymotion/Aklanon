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
<tr><td>when (past)</td><td>kailan</td><td><b>kan-o</b></td><td><i>Kan-o ikaw natawo?</i> When were you born? (Zorc p. 122) · <i>Kan-o nag-umpisa?</i> When did it start? ◌</td></tr>
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
<table><tr><th>Focus</th><th>Tagalog affix</th><th>Aklanon affix</th></tr>
<tr><td>Actor</td><td>mag-, -um-, ma-</td><td><b>mag-</b> (maga-/naga-/nag-), <b>ma-</b></td></tr>
<tr><td>Object</td><td>-in, -in-</td><td><b>-on</b> (gina-/gin-), imperative <b>-a</b></td></tr>
<tr><td>Location / beneficiary</td><td>-an</td><td><b>-an</b> (gina-…-an / gin-…-an), imperative <b>-i</b></td></tr>
<tr><td>Instrument / conveyed</td><td>i-</td><td><b>i-</b> (gina-/gin-)</td></tr></table>
<table><tr><th>Focus</th><th>Tagalog example</th><th>Aklanon example</th></tr>
<tr><td>Actor</td><td>Kumain ako.</td><td>Nagkaon ako.</td></tr>
<tr><td>Object</td><td>Kainin mo ito.</td><td>Kaunon mo ra. ◌ / Basaha ra. (Zorc p. 68)</td></tr>
<tr><td>Location / beneficiary</td><td>Hugasan mo ang kamay mo.</td><td>Hugasi ring alima. (Zorc p. 64)</td></tr>
<tr><td>Instrument / conveyed</td><td>Ihatid mo ang bata.</td><td>Ihatod mo ro unga. (Zorc p. 68)</td></tr></table>
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
<table><tr><th>Aspect</th><th>Tagalog (kain)</th><th>Actor focus (kaon)</th><th>Object focus (kaon)</th></tr>
<tr><td>Completed</td><td>kumain / kinain</td><td><b>nag</b>kaon</td><td><b>gin</b>kaon</td></tr>
<tr><td>Ongoing / habitual</td><td>kumakain / kinakain</td><td><b>naga</b>kaon</td><td><b>gina</b>kaon</td></tr>
<tr><td>Future</td><td>kakain / kakainin</td><td><b>maga</b>kaon</td><td>kaun<b>on</b> (paga-kaunon)</td></tr>
<tr><td>Bare (after indi, owa, gusto, dapat; commands)</td><td>kumain / kainin</td><td><b>mag</b>kaon</td><td>kaun<b>on</b> / imperative kaun<b>a</b></td></tr></table>
<table><tr><th>Aspect</th><th>Referent (-an)</th><th>Instrument (i-)</th></tr>
<tr><td>Completed</td><td>gin…an</td><td>gin-i…</td></tr>
<tr><td>Ongoing / habitual</td><td>gina…an</td><td>gina-i…</td></tr>
<tr><td>Future</td><td>…an</td><td>i…</td></tr>
<tr><td>Bare / commands</td><td>…an / imper. …i</td><td>i…</td></tr></table>
<p>Attested in Zorc: <i>nag-</i> perfective, <i>maga-</i> future, <i>mag-</i> dependent/subjunctive, <i>pag-</i> participle (p. 95); <i>gina-/gin-</i> for non-actor imperfective/perfective (p. 95); <i>Nakakaon eon kamo?</i> (p. 66); <i>Owa ako magsimba kahapon</i> (p. 64); <i>Indi ako magkaon</i> (p. 61); <i>Magaadto pa ako…</i> (p. ~60). The <i>naga-</i> ongoing form appears in his examples (<i>nagatikang</i>, p. 164; <i>Siin ka gaadto?</i>, p. 117, where <i>ga-</i> is the clipped colloquial form of <i>naga-</i>).</p>
<h3>Clinical sentences built from the table</h3>
<table><tr><th>Tagalog</th><th>Aklanon</th><th>English</th></tr>
<tr><td>Natulog ka ba kagabi?</td><td>Nakatueog ka kabii?</td><td>Did you sleep last night? ◌</td></tr>
<tr><td>Umiinom ka ba ng gamot?</td><td>Nagainom ka it bueong?</td><td>Are you taking medicine? ◌</td></tr>
<tr><td>Iinom mo ba ang gamot?</td><td>Imnon mo ro bueong?</td><td>Will you take the medicine? ◌</td></tr>
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
<tr><td>talaga</td><td><b>gid</b></td><td>really, very, at all</td><td><i>Owa gid.</i> None at all. (p. 205) · <i>Saeamat gid.</i> Thank you very much. ◌</td></tr>
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
<li><b>gid</b> for intensity, and in <i>Saeamat gid</i>: your most-used polite phrase.</li>
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
<table><tr><th></th><th>Tagalog</th><th>Aklanon</th></tr>
<tr><td>1</td><td>isa</td><td><b>isaea</b> (also <i>sambato</i>, Zorc p. 163)</td></tr>
<tr><td>2</td><td>dalawa</td><td><b>daywa</b></td></tr>
<tr><td>3</td><td>tatlo</td><td><b>tatlo</b></td></tr>
<tr><td>4</td><td>apat</td><td><b>ap-at</b></td></tr>
<tr><td>5</td><td>lima</td><td><b>lima</b></td></tr>
<tr><td>6</td><td>anim</td><td><b>an-om</b></td></tr>
<tr><td>7</td><td>pito</td><td><b>pito</b></td></tr>
<tr><td>8</td><td>walo</td><td><b>waeo</b></td></tr>
<tr><td>9</td><td>siyam</td><td><b>siyam</b></td></tr>
<tr><td>10</td><td>sampu</td><td><b>pueo</b> / <i>napueo</i></td></tr></table>
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
<tr><td>palagi / lagi</td><td><b>permi</b></td><td>always (SR ~p. 16)</td></tr>
<tr><td>minsan</td><td><b>kon amat</b> (SR ~p. 142)</td><td>sometimes</td></tr>
<tr><td>bihira</td><td><b>paeangta</b> (SR ~p. 289)</td><td>rarely</td></tr>
<tr><td>hindi kailanman</td><td><b>owa gid</b></td><td>never (did) ◌</td></tr></table>
<p>Zorc has no frequency section; the frequency words above are the author's and are a priority for native-speaker review. The duration formula <b>NUMBER ka UNIT eon</b> = "for N units now / N units ago" is attested (pp. 165–166) and covers most of the HPI.</p>
<div class="note">HPI template: <i>Kan-o nag-umpisa?</i> (When did it start?) → <i>Daywang semana eon.</i> (Two weeks now.) <i>Pila ka beses sa isaea ka semana?</i> (How many times a week?) ◌</div>`,
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
<p>Use the title at the end of the sentence the way you would place <i>po</i>: <i>Lingkod anay kamo, Nay.</i> <i>Saeamat gid, Tay.</i></p>
<h3>3. anay</h3>
<p><b>anay</b> (= <i>muna</i>, Zorc pp. 68, 200) softens commands into requests: <i>Hueat anay.</i> Please wait. ◌ <i>Lingkod anay kamo.</i> Please sit down. (Zorc p. 68) <i>Istorya anay kita.</i> Let's talk first. ◌ Also <b>palihog</b> / <b>paki-</b> for "please" in requests (<i>Palihog sueat riya</i>, please write here ◌; Zorc's dictionary lists the <i>paki-</i> prefix).</p>
<h3>4. Formulae</h3>
<table><tr><th>Tagalog</th><th>Aklanon</th><th>Note</th></tr>
<tr><td>Magandang umaga po.</td><td><b>Mayad nga aga.</b> / <b>Mayad-ayad nga aga.</b></td><td>Zorc p. 205 attests <i>Mayad nga hapon</i>; the reduplicated <i>mayad-ayad</i> is the warm, typical Aklanon greeting. ◌</td></tr>
<tr><td>Magandang hapon / gabi po.</td><td><b>Mayad nga hapon / gabii.</b></td><td></td></tr>
<tr><td>Kumusta po kayo?</td><td><b>Kamusta kamo?</b></td><td>Reply: <i>Mayad man.</i> (Fine too.) ◌</td></tr>
<tr><td>Salamat po.</td><td><b>Saeamat.</b> / <b>Saeamat gid.</b></td><td>gid = talaga</td></tr>
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
,{
  id: 'statives', level: 'A2', unit: 'Verbs II', title: 'Feelings are verbs: nagutom, nahadlok, nasubo (stative verbs)',
  summary: 'Hungry, tired, afraid, sad, happy: Aklanon says these with a verb class of its own. One prefix pair covers most of the interview.',
  body: `
<p>In Tagalog you say <i>gutom ako</i>, <i>natatakot ako</i>, <i>malungkot ako</i>: a mix of adjectives and verbs. Aklanon puts nearly all inner states into one grammatical box, the <b>stative verb</b> (Zorc pp. 120–129). They cannot take degree (no <i>mas gutom</i>), and their present form is simply <b>na-</b> + root.</p>
<table><tr><th>Tagalog</th><th>Aklanon</th><th>English</th><th>Zorc</th></tr>
<tr><td>Gutom ako.</td><td><b>Nagutom ako.</b></td><td>I'm hungry.</td><td>p. 121</td></tr>
<tr><td>Pagod siya.</td><td><b>Gina-oy imaw.</b> / Nagaoy imaw.</td><td>He is tired.</td><td>p. 122</td></tr>
<tr><td>Hindi siya nauuhaw.</td><td><b>Owa imaw giohawa.</b></td><td>He is not thirsty.</td><td>p. 122</td></tr>
<tr><td>Galit ako sa pinsan ko.</td><td><b>Naakig ako sa akong igkampud.</b></td><td>I'm angry with my cousin.</td><td>p. 123</td></tr>
<tr><td>Kailan ka ipinanganak?</td><td><b>Kan-o ikaw natawo?</b></td><td>When were you born?</td><td>p. 123</td></tr>
<tr><td>Nasaktan ako nang husto sa sinabi mo.</td><td><b>Nasaktan ako it duro ku imong ginhambae.</b></td><td>I was deeply hurt by what you said.</td><td>p. 128</td></tr>
<tr><td>Parang gusto kong umiyak.</td><td><b>Natagtangis ako.</b></td><td>I feel like crying.</td><td>p. 128</td></tr></table>
<h3>The two forms you need</h3>
<ul>
<li><b>na-</b> + root = the state now or in the past: <i>nahadlok</i> (afraid), <i>nasubo</i> (sad), <i>nalipay</i> (happy), <i>nagaoy</i> (tired), <i>naduyog</i> (sleepy), <i>nakibot</i> (startled), <i>namingaw</i> (lonely, low), <i>nahidlaw</i> (missing someone).</li>
<li><b>ma-</b> + root = the state in the future or as a possibility: <i>mahadlok</i> (will be afraid), <i>masubo</i>. Compare Tagalog <i>matatakot</i>.</li>
<li>The negative uses <b>owa</b> + <i>gi-…-a</i> for present states of Class I (<i>Owa imaw giohawa</i>, p. 122) but plain <b>owa</b> + root is understood everywhere: <i>Owa ako gagaoy</i> "I'm not tired" (dictionary). ◌ For the clinic, <i>Owa ako it kahadlok</i> "I have no fear" also works.</li>
</ul>
<h3>Zorc's lists of feeling roots</h3>
<p><b>Class I</b> (fullest conjugation, p. 121): <i>duyog</i> sleepy, <i>gutom</i> hungry, <i>ga-oy</i> tired, <i>ohaw</i> thirsty, <i>kibot</i> startled, <i>hidlaw</i> lonely for someone, <i>mingaw</i> lonely, depressed, <i>sum-oe</i> bored. <b>Class II</b> internal states (p. 123): <i>akig</i> angry, <i>hadlok</i> afraid, <i>ila</i> like, love, <i>lipat</i> forget, <i>lipay</i> happy, <i>subo</i> sad, <i>tueog</i> asleep; and happenings: <i>matay</i> die, <i>tawo</i> be born, <i>hueog</i> fall, <i>duea</i> get lost. <b>Class V</b> referent forms in <i>-an</i> (p. 127): <i>hapdi</i> pain, <i>sakit</i> hurt: <i>Mahapdi-an ka sa nina ngara</i> "This cut will cause you pain" (p. 128).</p>
<h3>Three words from one root</h3>
<table><tr><th>Root</th><th>Stative verb</th><th>ka- noun (p. 129)</th><th>maka- adjective "causes …" (p. 129)</th></tr>
<tr><td>subo</td><td>nasubo (is sad)</td><td>kasubo (sorrow)</td><td>makasueubo (saddening)</td></tr>
<tr><td>sakit</td><td>nasakit / nasaktan (was hurt)</td><td>kasakit (pain)</td><td>makasaeakit (painful; makes one sick)</td></tr>
<tr><td>lipay</td><td>nalipay (is happy)</td><td>kalipay (joy)</td><td>—</td></tr>
<tr><td>ga-oy</td><td>nagaoy (is tired)</td><td>kaga-oy (tiredness)</td><td>—</td></tr>
<tr><td>gutom</td><td>nagutom</td><td>kagutom (hunger)</td><td>—</td></tr>
<tr><td>kueba</td><td>ginakueba-an (seized by fear)</td><td>kueba (fear, nerves)</td><td>makakueueba (fearsome, p. 171)</td></tr></table>
<p>Two more qualifiers from the same pages: <b>tag-</b> = "feel like": <i>Natagtangis ako</i> (p. 128); <b>kina-</b> = "deeply, on and on": <i>kinatueog</i> sleep deeply, <i>kinasakit</i> be gravely ill (p. 129).</p>
<div class="note">Clinical use: your mood screen is a list of statives. <i>Nasubo kamo?</i> Are you sad? <i>Namingaw kamo?</i> Do you feel low and lonely? <i>Nahadlok kamo?</i> Are you afraid? <i>Nagaoy kamo permi?</i> Are you always tired? <i>Naduyog kamo sa adlaw?</i> Sleepy in the day? ◌ Listen for the <b>ka-</b> nouns in replies: <i>kasubo</i>, <i>kahadlok</i>, <i>kasakit</i>.</div>`,
  quiz: [
    ['Which is Zorc\'s sentence for "I\'m hungry"?', ['Gutom ako.', 'Nagutom ako.', 'Magutom ako.', 'Gutomon ako.'], 1, 'Stative verbs use na- + root for the present state (p. 121). Ma- is future or possible.'],
    ['"Natawo" means:', ['got tired', 'was born', 'fell down', 'forgot'], 1, 'tawo is a Class II happening root: Kan-o ikaw natawo? When were you born? (p. 123).'],
    ['"Makasaeakit" is best translated:', ['very sick', 'a sick person', 'painful; makes one sick', 'to hurt someone'], 2, 'maka- plus the -eV- infix makes a "causes …" adjective from a stative root (p. 129).'],
    ['"Natagtangis ako" means:', ['I cried.', 'I am crying loudly.', 'I feel like crying.', 'I made him cry.'], 2, 'tag- on a stative root gives "feel like, might want to" (p. 128).']
  ]
},
{
  id: 'mood', level: 'B1', unit: 'Verbs II', title: 'Can, happened to, and commands: maka-, hi-, and the four imperatives',
  summary: 'Ability and chance in the verb, then commands from gentle to sharp, with the polite forms you will actually use.',
  body: `
<p>Tagalog <i>maka-/naka-</i> (ability) and <i>makapag-</i> have close Aklanon cousins; the shapes are the same, the use is wider (Zorc pp. 66–69).</p>
<h3>Ability and chance</h3>
<table><tr><th>Mood</th><th>Real (done)</th><th>Unreal (not yet)</th><th>Meaning</th></tr>
<tr><td>Simple</td><td>nag-, naga-</td><td>mag-, maga-</td><td>plain action (lesson 8)</td></tr>
<tr><td>Aptative</td><td><b>naka-</b> (naha- in object focus)</td><td><b>maka-</b> (maha-)</td><td>can, could; managed to; also "has …-ed" with <i>eon</i></td></tr>
<tr><td>Accidental</td><td colspan="2"><b>hi-</b></td><td>purely by chance, often with <i>basi</i></td></tr></table>
<table><tr><th>Tagalog</th><th>Aklanon</th><th>English</th><th>Zorc</th></tr>
<tr><td>Marunong ka bang lumangoy?</td><td><b>Makaeangoy ka?</b></td><td>Can you swim?</td><td>p. 67</td></tr>
<tr><td>Nakakain na ba kayo?</td><td><b>Nakakaon eon kamo?</b></td><td>Have you eaten already?</td><td>p. 67</td></tr>
<tr><td>Hindi ko mabubuhat iyan dahil mabigat.</td><td><b>Indi ako makahakwat karon bangod nga mabug-at ron.</b></td><td>I cannot carry that since it is heavy.</td><td>p. 67</td></tr>
<tr><td>Nakasalubong namin si Henry sa palengke.</td><td><b>Nakasubeang kami ni Henry sa tindahan.</b></td><td>We ran into Henry at the market.</td><td>p. 67</td></tr>
<tr><td>Baka makalimutan mo.</td><td><b>Basi hilipat ka.</b></td><td>You might forget.</td><td>p. 123</td></tr></table>
<p>◌ Clinic: <i>Nakatueog kamo kagab-i?</i> Were you able to sleep last night? <i>Makaobra pa kamo?</i> Can you still work? <i>Indi ako makatueog</i> is the patient's "I can't sleep". Note <b>bangod</b> = because (p. 67), beside <i>tungod</i>.</p>
<h3>Commands, from soft to strong (pp. 68–69)</h3>
<table><tr><th>Form</th><th>Strength</th><th>Example</th></tr>
<tr><td>bare root</td><td>simple</td><td><i>Hipos eon.</i> Be quiet now. (p. 69) · <i>Hueat anay.</i> Wait a moment. (p. 202)</td></tr>
<tr><td>-um- (subject <i>ka/kamo</i> must be said)</td><td>common</td><td><i>Uminom ka eagi it tubi.</i> Drink some water now. (p. 122)</td></tr>
<tr><td>mag-</td><td>quite strong</td><td><i>Maghimuning!</i> Be still! (p. 69)</td></tr>
<tr><td>pag- + root</td><td>very strong, never to elders</td><td><i>Paghipos anay kamo tanan.</i> (p. 69)</td></tr>
<tr><td>-a (object), -i (referent), i- (thing)</td><td>focus commands</td><td><i>Daea ron.</i> Bring that. · <i>Taw-i imaw it eukas.</i> Give him a gift. (p. 68) · <i>Sugidi ako.</i> Tell me. ◌</td></tr></table>
<p><b>Polite commands</b> use the subjunctive, usually with <i>anay</i> or first person plural: <i>Mos, mauli eon kita.</i> Come on, let's go home. (p. 69) · <i>Mos, kaon ta.</i> Come on, let's eat. (p. 158). This is your register with patients: <b>Lingkod anay kamo</b>, <b>Mos, mag-istorya kita</b>. ◌</p>
<p><b>Negative commands</b>: <b>indi</b> + mag- form, or <b>ayaw</b> + root (often <i>ayaw it</i> + root): <i>Indi magpanaw it maeayo.</i> Do not go far. (p. 69) · <i>Ayaw magtubako.</i> Don't smoke. · <i>Ayaw it singgit.</i> Don't shout. (p. 196) · <i>Ayaw ninyo ako paghibaygi.</i> Don't you laugh at me. (p. 159)</p>
<div class="note">Dosing instructions are commands. Soft and clear: <i>Imna ro bueong kada aga.</i> Drink the medicine every morning (dictionary example "Imna ro bueong"). <i>Ayaw it inom it alak samtang nagainom it bueong.</i> ◌ Don't drink alcohol while taking the medicine.</div>`,
  quiz: [
    ['"Nakakaon eon kamo?" means:', ['Are you eating?', 'Have you eaten already?', 'Will you eat?', 'Can you cook?'], 1, 'naka- + eon gives English "have …-ed" (p. 67).'],
    ['Which command form should you never use with an elder?', ['bare root', '-um- with ka', 'pag- + root', 'mag-'], 2, 'pag- + root is the very strong imperative, not used to peers or superiors (p. 68).'],
    ['The polite way to say "let\'s go home" in Zorc is:', ['Pag-uli kamo!', 'Mos, mauli eon kita.', 'Umuli ka.', 'Uli!'], 1, 'Polite commands use the subjunctive, here with first person plural (p. 69).'],
    ['"Ayaw it singgit" is:', ['a question', 'a negative command: don\'t shout', 'a wish', 'past tense'], 1, 'ayaw + it + root is one of the two negative command patterns (p. 196).']
  ]
},
{
  id: 'causative', level: 'B1', unit: 'Verbs II', title: 'pa-: feed, remind, send, have the doctor called',
  summary: 'One prefix turns "eat" into "feed" and "come" into "have him come", and gives you every referral and instruction sentence.',
  body: `
<p>Tagalog <i>pa-</i> (<i>pakainin</i>, <i>paalalahanan</i>, <i>ipatawag</i>) exists in Aklanon with the same shape and a freer focus system (Zorc pp. 99–105). The subject becomes a <b>causer</b> who has, lets, or makes someone (the <b>agent</b>) do the action; the agent, when not in focus, takes <b>sa</b>.</p>
<table><tr><th>Root</th><th>pa- form</th><th>Tagalog</th></tr>
<tr><td>kaon (eat)</td><td><b>pakaon</b> (feed)</td><td>pakainin</td></tr>
<tr><td>dumdum (think, remember)</td><td><b>padumdum</b> (remind)</td><td>paalalahanan</td></tr>
<tr><td>kita (see)</td><td><b>pakita</b> (show)</td><td>ipakita</td></tr>
<tr><td>daea (bring)</td><td><b>padaea</b> (send)</td><td>ipadala</td></tr>
<tr><td>kasayod (know)</td><td><b>pasayod</b> (notify)</td><td>ipaalam</td></tr>
<tr><td>hueam (borrow)</td><td><b>pahueam</b> (lend)</td><td>pahiram</td></tr>
<tr><td>obra (make)</td><td><b>paobra</b> (have made)</td><td>ipagawa</td></tr></table>
<p>All from p. 99. Zorc's own sentences:</p>
<table><tr><th>Aklanon</th><th>English</th><th>Zorc</th></tr>
<tr><td><b>Ipatawag mo ro doktor.</b></td><td>Have the doctor called.</td><td>p. 105</td></tr>
<tr><td><b>Paadtuna imaw riya.</b></td><td>Have him come here.</td><td>pp. 102, 105</td></tr>
<tr><td><b>Palingkora ro bisita.</b></td><td>Have the visitor sit down.</td><td>p. 102</td></tr>
<tr><td><b>Ginpalingkod nimo ro bisita?</b></td><td>Did you have the visitor sit down?</td><td>p. 102</td></tr>
<tr><td><b>Si Roney nagpakanta sa anang mga igmanghod.</b></td><td>Roney made his brothers sing.</td><td>p. 102</td></tr>
<tr><td><b>Magapaobra ako it baeay.</b></td><td>I will have a house built.</td><td>p. 99</td></tr></table>
<h3>Focus with pa- (p. 104)</h3>
<p>"Mother had Lito buy candy for Maria": <i>Nagpabakae si Nanay kay Lito it dulsi para kay Maria</i> (causer in focus) · <i>Ginpabakae ni Nanay si Lito it dulsi</i> (agent in focus) · <i>Ginpabakean ni Nanay kay Lito it dulsi si Maria</i> (beneficiary in focus). You only need the first two patterns: <b>nagpa-</b> (I had someone…) and <b>ginpa-</b> (someone was made to…).</p>
<h3>pa- + place = go there (p. 105)</h3>
<p><i>pauli</i> go home, <i>paeapit</i> approach, <i>paeayo</i> withdraw, <i>pabanwa</i> go to town, <i>pabukid</i> go to the hills, <i>paKalibo</i> go to Kalibo: <i>Pauli eon kami.</i> We are going home now.</p>
<div class="note">Referral sentences ◌: <i>Ipadaea ko kamo sa ospital.</i> I will send you to the hospital. <i>Papahuwaya anay imaw.</i> Let him rest first. <i>Pakaona imaw it gamay.</i> Have him eat a little. <i>Ipaadto ninyo imaw sa RHU hin-aga.</i> Have him brought to the RHU tomorrow. Note that <i>pa-</i> says nothing about force: for "forced" Zorc suggests <i>pilit</i> or <i>sugo</i> (p. 99).</div>`,
  quiz: [
    ['"Pakaon" means:', ['eat a lot', 'feed; have someone eat', 'food', 'eat together'], 1, 'pa- before the root makes a causative: the subject has or lets someone else do the action (p. 99).'],
    ['"Ipatawag mo ro doktor" means:', ['Call the doctor yourself.', 'Have the doctor called.', 'The doctor called you.', 'Do not call the doctor.'], 1, 'Zorc p. 105.'],
    ['In "Ginpabakae ni Nanay si Lito it dulsi", who is in focus (marked by si)?', ['the causer, Nanay', 'the agent, Lito', 'the goal, candy', 'the beneficiary'], 1, 'Object focus with pa- stresses the agent (p. 104).'],
    ['"Pauli eon kami" means:', ['We are going home now.', 'We just arrived.', 'Send us home.', 'We live here.'], 0, 'pa- + a place or direction word means "go toward" (p. 105).']
  ]
},
{
  id: 'adjectives', level: 'A2', unit: 'Sentences II', title: 'Adjectives: ma-, a little, very, the most, and comparing',
  summary: 'Degrees and comparison with the same tools as Tagalog (ma-, mas, pinaka-) plus Aklanon\'s own ka- and -ue-.',
  body: `
<p>Most adjectives take <b>ma-</b> as in Tagalog and link to a noun with <b>nga</b> (Zorc pp. 169–175): <i>masakit</i>, <i>masubo</i>, <i>mabug-at</i> heavy, <i>mahapdi</i> painful, <i>mataas</i>, <i>matambok</i> fat, <i>mataeaw</i> cowardly.</p>
<h3>Degree (Zorc's chart, p. 174)</h3>
<table><tr><th>Degree</th><th>maeumo (easy)</th><th>malisod (difficult)</th><th>Tagalog</th></tr>
<tr><td>Diminutive, "slightly"</td><td>maeumo-eumo</td><td>malisod-lisod</td><td>medyo madali</td></tr>
<tr><td>Positive</td><td>maeumo</td><td>malisod</td><td>madali</td></tr>
<tr><td>Relative, "a little more"</td><td>mueamaeumo</td><td>maluelisod</td><td>mas madali nang kaunti</td></tr>
<tr><td>Intensive, "very"</td><td><b>kaeumo</b></td><td><b>kalisod</b></td><td>napakadali</td></tr>
<tr><td>Superlative</td><td>kaeumohan; pinakamaeumo; maeumo gid</td><td>kalisoran; pinakamalisod; malisod gid</td><td>pinakamadali</td></tr>
<tr><td>Negative</td><td>bukon it maeumo</td><td>bukon it malisod</td><td>hindi madali</td></tr></table>
<p>The <b>ka-</b> intensive is the one that will surprise a Tagalog ear: <i>Kasadya ro sine kabi-i.</i> The movie last night was very nice. (p. 173) · <i>Kainit nga panahon daya nga matsa mamatay ako.</i> The weather is so hot that I could die. (p. 179). ◌ So <i>Kasakit!</i> = It hurts so much; <i>Kasubo</i> as an exclamation = how sad.</p>
<h3>Qualifiers (p. 175)</h3>
<table><tr><th>Aklanon</th><th>Meaning</th><th>Example</th></tr>
<tr><td>medyo</td><td>somewhat</td><td><i>Medyo mahae ro anang mga barong.</i> (p. 175)</td></tr>
<tr><td>… gid</td><td>very</td><td><i>Mainit gid do sabaw.</i> (p. 175)</td></tr>
<tr><td>… it duro</td><td>very much</td><td><i>Nasaktan ako it duro.</i> (p. 128)</td></tr>
<tr><td>sobra nga / sobra it</td><td>too</td><td><i>sobra nga masakit</i> ◌</td></tr>
<tr><td>matsa</td><td>it seems</td><td><i>Matsa maeamig ro tyempo makaron.</i> (p. 175)</td></tr>
<tr><td>bukon it</td><td>not</td><td><i>bukon it masakit</i></td></tr></table>
<h3>Comparing (pp. 176–180)</h3>
<ul>
<li>Same: <b>kamana ku</b> / <b>parehas ku</b>: <i>Mataas imaw, kamana man ku anang ama.</i> He is as tall as his father. (p. 177)</li>
<li>More: <b>mas … sa</b>: <i>Mas makusog imaw sa anwang.</i> He is stronger than a carabao. (p. 178). With pronouns and names, <i>sa</i> becomes <i>ku sa imo</i>, <i>kay</i>: <i>Maisot-isot ro akong ayam ku sa imo.</i> (p. 178)</li>
<li>Most of a group: <b>ka-…-an sa tanan</b> or <b>pinaka-</b>: <i>Kaaeaman imaw sa tanan nga anang isigkaklasi.</i> He is the smartest of all his classmates. (p. 180)</li>
</ul>
<h3>Illness adjectives in -an / -on (p. 170)</h3>
<p><i>sip-onan</i> having a cold, <i>biki-an</i> having a goitre, <i>tisikonan</i> having tuberculosis, <i>utokan</i> intelligent, <i>buot-an</i> mature, sensible; and <i>uli-anon</i> senile (p. 171). These are how people describe a chronic condition: "si Tatay hay uli-anon eon". ◌</p>
<div class="note">Severity scale for the interview ◌: <i>gamay lang</i> (a little) · <i>medyo masakit</i> · <i>masakit</i> · <i>masakit gid</i> · <i>kasakit!</i> / <i>sobra nga masakit</i>. And the key comparison: <i>Mas mayad eon kamo, ukon mas maeain?</i> Are you better now, or worse? <i>Parehas lang?</i> The same?</div>`,
  quiz: [
    ['"Kalisod" in Zorc\'s chart means:', ['a little difficult', 'very difficult', 'not difficult', 'difficulty (noun)'], 1, 'ka- + root is the intensive degree, "very" (p. 174).'],
    ['"He is stronger than a carabao" is:', ['Makusog imaw kamana ku anwang.', 'Mas makusog imaw sa anwang.', 'Kakusog imaw it anwang.', 'Pinakamakusog ro anwang.'], 1, 'Scalar comparison: mas + adjective + sa (p. 178).'],
    ['"Medyo mahae" means:', ['very expensive', 'not expensive', 'somewhat expensive', 'the most expensive'], 2, 'medyo = somewhat, an unlinked qualifier (p. 175).'],
    ['"Sip-onan" describes a person who:', ['sneezes loudly', 'has a cold', 'sells handkerchiefs', 'is intelligent'], 1, '-an / -on adjectives mean "having the quality of", often an illness (p. 170).']
  ]
},
{
  id: 'possession', level: 'A2', unit: 'Sentences II', title: 'Whose, which, and where: akon/imo, nga, it, and sa sueod it',
  summary: 'Possession before or after the noun, the linker nga that builds relative clauses, and the relator nouns that make sa precise.',
  body: `
<p>Tagalog says <i>ang anak ko</i> or <i>ang aking anak</i>; Aklanon has the same two orders, and the same two pronoun sets (Zorc pp. 155–160).</p>
<h3>The pronoun table (pp. 157–160)</h3>
<table><tr><th></th><th>Topic (ang)</th><th>Before the noun (aking)</th><th>After the noun (ko)</th></tr>
<tr><td>I</td><td>ako</td><td><b>akon</b> (nga)</td><td><b>nakon</b>, ko</td></tr>
<tr><td>we (excl.)</td><td>kami</td><td>amon</td><td>namon</td></tr>
<tr><td>we (incl.)</td><td>kita, ta</td><td>aton</td><td>naton, ta</td></tr>
<tr><td>you</td><td>ikaw, ka</td><td><b>imo</b> (nga)</td><td><b>nimo</b>, mo</td></tr>
<tr><td>you (pl. / respectful)</td><td>kamo</td><td>inyo</td><td>ninyo</td></tr>
<tr><td>he, she</td><td>imaw</td><td>ana</td><td>nana</td></tr>
<tr><td>they</td><td>sanda</td><td>anda</td><td>nanda</td></tr></table>
<p>The <b>sa-forms</b> (Tagalog <i>sa akin, sa iyo</i>…) are <b>k-</b> + the "before the noun" set (p. 160): <b>kakon</b>, kamon, katon, <b>kimo</b>, <b>kinyo</b>, kana, kanda. <i>Una kanda do kwarta.</i> The money is there with them. (p. 160)</p>
<p>Before the noun add <b>nga</b> (shortened to <b>-ng</b> after a vowel): <i>ro akong eawas</i> = <i>ro eawas ko</i>, my body. The enclitics <i>ko, mo, ta, ka</i> must come second in the clause (p. 160): <i>Nano ro imong ginaobra?</i> What are you doing? (p. 159) · <i>Ihatod mo ako sa baeay.</i> Bring me home. (p. 158)</p>
<h3>Possession with nouns and names (p. 155)</h3>
<table><tr><th>Order</th><th>Common noun</th><th>Personal name</th></tr>
<tr><td>before</td><td><i>ro ana ku unga nga haboe</i> (the child's blanket)</td><td><i>ro ay Manong nga asawa</i> (Manong's wife)</td></tr>
<tr><td>after</td><td><i>ro haboe ku unga</i></td><td><i>ro asawa ni Manong</i></td></tr></table>
<p>Both sentences on p. 155: <i>Ro asawa ni Manong masakit.</i> Older brother's wife is sick. After the noun, <b>it</b> marks an indefinite possessor.</p>
<h3>nga as "who / that / which" (p. 156)</h3>
<p><i>Indi dapat maghangae sa tawo nga bag-ong bugtaw.</i> It is not well to joke with a person who just woke up. · <i>ro tawo nga nagasakit</i> the person who is ill ◌ · <i>ro bueong nga ginainom ninyo</i> the medicine that you take ◌.</p>
<h3>Marker choice changes meaning (p. 154)</h3>
<p><i>Naila ako <b>sa</b> imong asawa.</i> I like your wife. · <i>Naila ako <b>it</b> imong asawa.</i> I want your wife. The object marker <i>it</i> makes the thing a goal; <i>sa</i> keeps it a referent. Handle with care.</p>
<h3>Where exactly? Relator nouns + it (p. 156)</h3>
<p><i>sa sueod it baeay</i> inside the house · <i>sa idaeum it</i> under · <i>sa ibabaw it</i> on top of · <i>sa kilid it</i> beside · <i>sa atubang it</i> in front of · <i>sa pihak it</i> on the other side of. ◌ <i>Masakit sa sueod it ueo</i>: pain inside the head.</p>
<div class="note">Family history runs on this lesson ◌: <i>May nagasakit man sa inyong pamilya?</i> Does anyone in your family also get ill? <i>Ro imong tatay, may parehas man nga sakit?</i> Your father, did he have the same illness? <i>Sin-o ro kaimaw ninyo sa baeay?</i> Who lives with you at home?</div>`,
  quiz: [
    ['"My body" with the pronoun before the noun is:', ['ro eawas akon', 'ro akong eawas', 'ro kakon eawas', 'ro eawas nakon nga'], 1, 'akon + nga (-ng after a vowel) + noun (p. 155, 157).'],
    ['"Ro asawa ni Manong masakit" means:', ['Manong is sick.', 'Manong\'s wife is sick.', 'Manong\'s wife is a nurse.', 'Manong married a sick woman.'], 1, 'Postpositive possession with a personal name uses ni (p. 155).'],
    ['Which sentence means "I want your wife" rather than "I like your wife"?', ['Naila ako sa imong asawa.', 'Naila ako it imong asawa.', 'Naila ako kay imong asawa.', 'Naila ako nga imong asawa.'], 1, 'it marks a goal, sa a referent (p. 154).'],
    ['"Inside the house" is:', ['sa baeay sueod', 'sa sueod it baeay', 'sueod nga baeay', 'sa sueod ni baeay'], 1, 'Relator noun + it + noun (p. 156).']
  ]
},
{
  id: 'modal-particles', level: 'B1', unit: 'Sentences II', title: 'Hedges and colour: basi, siguro, kunta, matsa, gali, abi, makon',
  summary: 'The particles that carry doubt, hope, surprise and excuse, with Zorc\'s own Aklanon-to-Pilipino key.',
  body: `
<p>Lesson 9 covered <i>eon, pa, gid, man, lang, anay, kuno, baea</i>. The rest of Zorc's particle chapter (pp. 199–209) is where patients hedge, excuse, quote and doubt; hearing these correctly is half of a good history.</p>
<h3>Zorc's key to Pilipino (p. 209)</h3>
<table><tr><th>Aklanon</th><th>Tagalog</th><th>Meaning</th><th>Zorc</th></tr>
<tr><td><b>abi</b></td><td>kasi</td><td>excuse, giving a reason: <i>Masakit abi ako.</i> (But) I was sick.</td><td>p. 200</td></tr>
<tr><td><b>baea</b></td><td>kaya</td><td>question emphasis: <i>Siin baea imaw?</i> Where in the world is he?</td><td>p. 199</td></tr>
<tr><td><b>kunta</b></td><td>sana</td><td>wish: <i>Tapus eon kunta ro akong obra.</i> I wish my work were finished.</td><td>p. 207</td></tr>
<tr><td><b>kuno</b></td><td>daw / raw</td><td>they say: <i>Hu-o, kuno.</i></td><td>p. 205</td></tr>
<tr><td><b>gali</b></td><td>pala</td><td>surprise, reminded: so it is after all</td><td>p. 204</td></tr>
<tr><td><b>gid</b></td><td>talaga</td><td>really, very</td><td>p. 203</td></tr>
<tr><td><b>giato</b></td><td>yata</td><td>may be, no idea of the outcome</td><td>p. 207</td></tr>
<tr><td><b>eagi</b></td><td>agad</td><td>right away: <i>Mapanaw eagi kita.</i></td><td>p. 202</td></tr>
<tr><td><b>haeos</b></td><td>halos</td><td>almost: <i>Haeos human eon don.</i> It is almost ready.</td><td>p. 203</td></tr>
<tr><td><b>matsa, medyo</b></td><td>tila</td><td>it seems; somewhat: <i>Matsa temprano pa, ano?</i></td><td>p. 207</td></tr>
<tr><td><b>ngani</b></td><td>nga</td><td>indeed; I know: <i>Ta-o ngani.</i> I just don't know.</td><td>p. 204</td></tr>
<tr><td><b>ta-o</b></td><td>aywan / ewan</td><td>I don't know</td><td>p. 206</td></tr>
<tr><td><b>sige</b>, <b>pwede</b></td><td>sige, pwede</td><td>go ahead; can, may (also <i>sarang</i>, <i>mahimo</i>)</td><td>p. 206</td></tr></table>
<h3>Doubt from weak to strong (pp. 206–207)</h3>
<p><b>basi</b> = might, probably not (doubt or warning): <i>Basi mahueog ka.</i> You might fall. · <b>siguro</b> = probably; <b>sigurado</b> = certainly · <b>giato</b> = who knows · <b>sabon</b> = mild uncertainty, in replies. A patient's <i>Basi</i> and <i>Siguro</i> are not the same yes.</p>
<h3>Quoting (pp. 202–203)</h3>
<p><b>kuno</b> it is said · <b>makon</b> I said / I thought: <i>Makon ta nga patay ka eon ting.</i> I thought you were dead. · <b>mana</b> he/she said: <i>Masakit mana imaw.</i> He said he was sick. · <b>maton</b> you should say (polite correction). ◌ Collateral history: <i>Nagahambae kuno imaw nga owa it tawo</i>: he reportedly talks when nobody is there.</p>
<h3>Answer particles (pp. 200–201)</h3>
<p><b>man</b> is in almost every answer (<i>Mayad man.</i> Fine.) · <b>ron</b> a brief direct yes (<i>Hu-o ron.</i>) · <b>gang</b> a reluctant or apologetic reply · <b>rayon</b> consequently, then. <b>Tags</b> at the end: <i>ano?</i> isn't it so? · <i>ha?</i> O.K.? · <i>ho</i> see · <i>ay</i> disappointment (p. 208).</p>
<p>Zorc's nine shades of yes (p. 205): <i>Hu-o.</i> Yes. · <i>Hu-o, abi.</i> But of course. · <i>Hu-o, anay.</i> Yes, but just a minute. · <i>Hu-o, baea?</i> Yes, isn't that right? · <i>Hu-o, kuno.</i> They said yes. · <i>Hu-o, makon.</i> I said yes. · <i>Hu-o, eon.</i> Yes, for the present. · <i>Hu-o, man.</i> Yes again.</p>
<div class="note">Order of enclitics (p. 205): pronoun first (<i>ka, ko, mo</i>), then <i>eon/pa</i>, then <i>man</i>, then <i>lang</i>, then <i>gid</i>, then the rest. Zorc's child stalling for time uses seven in a row: <i>Owa pa eang gid abi anay ngani makon nahuman, ha.</i></div>`,
  quiz: [
    ['"Masakit abi ako" is best rendered:', ['I am very sick.', 'It is said I am sick.', 'But (you see) I was sick.', 'I hope I am not sick.'], 2, 'abi gives an excuse or reason, like Tagalog kasi (p. 200).'],
    ['Which particle corresponds to Tagalog "sana"?', ['kuno', 'kunta', 'gali', 'basi'], 1, 'kunta = wish, hopefully (pp. 207, 209).'],
    ['"Masakit mana imaw" means:', ['He is very sick.', 'He said that he was sick.', 'Maybe he is sick.', 'He is sick again.'], 1, 'mana = he/she said (p. 203).'],
    ['Which expresses the weakest certainty?', ['sigurado', 'siguro', 'basi', 'syempre'], 2, 'basi = might, probably untrue; siguro = probably; sigurado = certainly (pp. 206–207).']
  ]
},
{
  id: 'conjunctions', level: 'B1', unit: 'Sentences II', title: 'Joining ideas: ag, ukon, pero, kon, agod, bisan, samtang, bangod',
  summary: 'Compound questions and conditions, built from Zorc\'s list of conjunctions and his own example sentences.',
  body: `
<p>Tagalog <i>at, o, pero, kung, para, kahit, habang, dahil</i> all have Aklanon partners (Zorc pp. 210–211). <b>Coordinating</b> conjunctions stand between two like elements; <b>subordinating</b> ones start a dependent clause.</p>
<table><tr><th>Tagalog</th><th>Aklanon</th><th>Zorc's example</th></tr>
<tr><td>at</td><td><b>ag</b></td><td><i>Si Pedro ag si Carlos nakatuon sa Manila.</i> (p. 210)</td></tr>
<tr><td>o</td><td><b>ukon</b>, o</td><td><i>Mas mayad eon kamo, ukon mas maeain?</i> ◌</td></tr>
<tr><td>pero, ngunit</td><td><b>pero</b>, apang, ugaling</td><td><i>Naila ako magiba kinyo, pero may akon man nga obra.</i> I would like to go with you, but I have my own work. (p. 210)</td></tr>
<tr><td>ni … ni</td><td><b>indi … kundi</b></td><td><i>Indi si Mario kundi si Perning makasunod kinyo.</i> Neither Mario nor Perning can follow you. (p. 210)</td></tr>
<tr><td>dahil</td><td><b>ay</b>, <b>bangod</b>, tungod sa</td><td><i>Indi ako makahakwat karon bangod nga mabug-at ron.</i> (p. 67)</td></tr>
<tr><td>kung, kapag</td><td><b>kon</b></td><td><i>Hidlawon ako kimo kon hipanaw ka eon.</i> I will miss you if you go away. (p. 122)</td></tr>
<tr><td>para, upang</td><td><b>agod</b></td><td><i>Magobra it mayad agod gumayad ro imong kinabuhi.</i> Work hard so that your life will improve. (p. 211)</td></tr>
<tr><td>kahit</td><td><b>bisan</b>, aber, maskin</td><td><i>Bisan manggaranon imaw, mapainubsanon ag mabuot imaw gihapon.</i> Even if he is rich, he is still humble and kind. (p. 211)</td></tr>
<tr><td>habang</td><td><b>samtang</b></td><td><i>Samtang si David nagasueat, si Beato hay nagabasa.</i> (p. 211)</td></tr>
<tr><td>basta</td><td><b>basta</b></td><td><i>Basta ikaw, masugot ako.</i> So long as it is you, I agree. (p. 211)</td></tr>
<tr><td>kaya</td><td><b>busa</b></td><td><i>Ro mahugod indi paggutomon, busa kita tanan hay magmahugod man.</i> (p. 211)</td></tr>
<tr><td>maliban sa</td><td><b>pwera</b></td><td>—</td></tr></table>
<p>Zorc's most clinical sentence (p. 211): <i><b>Pwede pa nga ikaw magpalugyat, maskin mayad ka eon.</b></i> You might still relapse, even if you feel well now. Keep it for the discharge talk.</p>
<h3>Building history questions ◌</h3>
<ul>
<li><i>Nag-umpisa raya <b>kon</b> may natabo, <b>ukon</b> owa lang it rason?</i> Did this start when something happened, or for no reason?</li>
<li><i>Nagainom kamo it bueong <b>pero</b> owa gihapon it kaayuhan?</i> You take the medicine but there is still no improvement?</li>
<li><i>Indi kamo makatueog <b>bangod</b> sa kabalaka, <b>ukon bangod</b> sa sakit?</i> Can't you sleep because of worry, or because of pain?</li>
<li><i>Nagahambae imaw <b>samtang</b> owa it tawo?</i> Does he talk while nobody is there?</li>
<li><i>Imna raya kada adlaw <b>agod</b> indi magbalik ro sakit.</i> Take this every day so that the illness does not come back.</li>
<li><i><b>Bisan</b> mayad eon ro pamatyag, ayaw it untat it bueong.</i> Even when you feel well, don't stop the medicine.</li>
</ul>
<div class="note"><b>kon</b> doubles as "whether" after verbs of knowing: <i>Ta-o kon hin-uno imaw mabalik.</i> I don't know when he will return (p. 211). And <b>ay</b> as "because" (p. 67: <i>Makatuon pa ako ay may akon man nga skolarship</i>) is not the Tagalog topic marker <i>ay</i>: Aklanon uses <i>hay</i> for that.</div>`,
  quiz: [
    ['Aklanon for "and" is:', ['at', 'kag', 'ag', 'ug'], 2, 'ag (p. 210). kag is Hiligaynon, ug Cebuano.'],
    ['"Agod" corresponds to Tagalog:', ['kahit', 'para / upang', 'habang', 'dahil'], 1, 'agod = so that (p. 211).'],
    ['"Pwede pa nga ikaw magpalugyat, maskin mayad ka eon" means:', ['You can go now since you are well.', 'You might still relapse even if you feel well now.', 'You must rest even if you feel well.', 'You are well, so no relapse is possible.'], 1, 'Zorc p. 211; maskin = even if.'],
    ['Which word means "because" in "Indi ako makahakwat karon bangod nga mabug-at ron"?', ['karon', 'bangod', 'nga', 'ron'], 1, 'bangod (nga) = because, since (p. 67); tungod sa is also used.']
  ]
},
{
  id: 'adverbs-deictics', level: 'A2', unit: 'Sentences II', title: 'When, how and where: kahapon, hinduna, it mayad, riya/runa/rina/rito',
  summary: 'Time words for the timeline, manner with it, and the four-way place system that mirrors the pronouns.',
  body: `
<p>Adverbs answer when, where, how (Zorc pp. 181–187). They cannot be put in focus. A manner adverb is marked by <b>first position</b> or by <b>it</b>; an adjective is linked with <b>nga</b>:</p>
<p><i>Mayad <b>nga</b> manogobra imaw.</i> He is a good worker. · <i>Nagaobra imaw <b>it</b> mayad.</i> / <i>Mayad imaw nagaobra.</i> He works well. (p. 181)</p>
<h3>Time words (pp. 181, 184)</h3>
<table><tr><th>Tagalog</th><th>Aklanon</th><th>English</th></tr>
<tr><td>kanina</td><td><b>kaina</b></td><td>earlier</td></tr>
<tr><td>kagabi</td><td><b>kabi-i</b></td><td>last night</td></tr>
<tr><td>kahapon</td><td><b>kahapon</b></td><td>yesterday</td></tr>
<tr><td>bukas</td><td><b>hin-aga</b></td><td>tomorrow</td></tr>
<tr><td>mamaya</td><td><b>hinduna</b></td><td>later on</td></tr>
<tr><td>ngayon</td><td><b>makaron</b></td><td>now</td></tr>
<tr><td>araw-araw</td><td><b>adlaw-adlaw</b></td><td>daily</td></tr>
<tr><td>noong unang panahon</td><td><b>kato anay</b></td><td>long ago, back then</td></tr>
<tr><td>maaga / huli</td><td><b>temprano</b> / <b>ulihi</b></td><td>early / late</td></tr>
<tr><td>bihira</td><td><b>taeagsa</b>, imaeaka</td><td>rarely, seldom</td></tr>
<tr><td>sa Lunes / noong Huwebes</td><td><b>sa Lunes</b> / <b>ku Huwebes</b></td><td>on Monday / last Thursday</td></tr>
<tr><td>sa darating na buwan</td><td><b>sa umabot nga buean</b></td><td>in the coming month</td></tr></table>
<p>Note <b>sa</b> for future time and <b>ku</b> for past time with days of the week (p. 184). Zorc: <i>Kahapon imaw nagpanaw.</i> He left yesterday. (p. 182) · <i>Hinduna mabalik ako.</i> I will return later. (p. 182) · <i>Pag-abot nana kahapon, nagaeaba kami sa bubon.</i> When he arrived yesterday, we were washing at the well. (p. 183)</p>
<h3>Manner (p. 184)</h3>
<p><i>mabakas</i> fast · <i>mahinay</i> slowly · <i>madali</i> quickly · <i>maeumo</i> easily · <i>malipay</i> happily · <i>it mayad</i> well · <i>it mahipos</i> quietly · <i>it duro</i> very much · <i>it sangkurot</i> a little. <i>Mahinay magkanta.</i> / <i>Magkanta it mahinay.</i> Sing softly. (pp. 182–183) · <b>tig-</b> + number = at a time: <i>tigdaywa</i> two at a time, <i>tigsangkurot</i> a little at a time (p. 184). ◌ <i>Imna tig-isaea kada aga</i>: take one each morning.</p>
<h3>Place words: four distances (pp. 185–187)</h3>
<table><tr><th>Near</th><th>Basic</th><th>After the verb</th><th>Matches</th></tr>
<tr><td>me</td><td><b>iya</b></td><td><b>riya</b> / diya</td><td>ako, kami</td></tr>
<tr><td>you and me</td><td><b>una</b></td><td><b>runa</b> / duna</td><td>kita</td></tr>
<tr><td>you, far from me</td><td><b>ina</b></td><td><b>rina</b> / dina</td><td>ikaw, kamo</td></tr>
<tr><td>neither of us</td><td><b>idto</b></td><td><b>rito</b> / dito</td><td>imaw, sanda</td></tr></table>
<p>For motion or pointing there is an emphatic set, <b>rikara, rikaron, rikana, rikato</b> (also with d-): <i>Dikara eang ako mabapit.</i> I'll just drop in over here. (p. 186)</p>
<p><i>Iya si Carlos?</i> Is Carl here? · <i>Owa riya si Nene.</i> Nene is not here. · <i>Si Henry runa sa baeay.</i> Henry is there at home. · <i>Una kimo ro makinilya?</i> Is the typewriter there with you? (p. 185) · <i>Ma-agi kita dikato.</i> Let's pass that way. (p. 186). Tagalog <i>dito</i> is a false friend: Aklanon <i>dito/rito</i> is <b>far away</b>; here is <i>riya</i>.</p>
<p>Deictics also carry attitude (pp. 186–187): <i>si Marde <b>ngara</b></i> this Marde (approving) vs <i>si Marde <b>ngaron</b></i> / <i>ngato</i> (disapproving, distancing).</p>
<div class="note">Timeline questions ◌: <i>Kan-o nag-umpisa? Kaina, kabi-i, kahapon, ukon kato anay pa?</i> When did it start? Earlier today, last night, yesterday, or long ago? <i>Adlaw-adlaw raya, ukon taeagsa lang?</i> Every day, or only seldom? <i>Siin masakit, riya?</i> Where does it hurt, here? (pointing)</div>`,
  quiz: [
    ['Aklanon for "tomorrow" is:', ['bukas', 'hin-aga', 'hinduna', 'buwas'], 1, 'hin-aga = tomorrow; hinduna = later on today (p. 184).'],
    ['"Nagaobra imaw it mayad" means:', ['He is a good worker.', 'He works well.', 'He made it well.', 'He is well.'], 1, 'it marks the manner adverb; nga would make mayad an adjective on a noun (p. 181).'],
    ['Aklanon "rito" means:', ['here, near me', 'there, near you', 'there, far from both of us', 'everywhere'], 2, 'The four deictics follow the pronoun orientation; rito matches imaw/sanda, far from both (p. 185).'],
    ['"Ku Huwebes" means:', ['on Thursday (future)', 'last Thursday', 'every Thursday', 'until Thursday'], 1, 'ku marks past time, sa future time, with days of the week (p. 184).']
  ]
},
{
  id: 'word-building', level: 'B1', unit: 'Word building', title: 'Making words: pag-, ka-…-an, ka-…-on, ig-, isigka-, mang-, paea-',
  summary: 'Nine noun affixes from Zorc that let you decode most long words a patient says, and build the clinical nouns you need.',
  body: `
<p>Tagalog speakers already read <i>pag-</i>, <i>ka-…-an</i>, <i>mang-</i> and <i>pala-</i>. Aklanon uses the same machinery (Zorc pp. 135–139), with the <i>e</i> spelling and a few affixes Tagalog lacks.</p>
<table><tr><th>Affix</th><th>Meaning</th><th>Zorc's examples</th><th>Tagalog</th></tr>
<tr><td><b>pag-</b></td><td>the act of (gerund)</td><td>pagkaon food, eating · paghambae speaking · pagdumdum thought · paghigugma love</td><td>pag-</td></tr>
<tr><td><b>pagka-</b></td><td>fixed state</td><td>pagkamatay death · pagkatawo character · pagkabuot goodness</td><td>pagka-</td></tr>
<tr><td><b>panga-</b></td><td>(pang- + ka-)</td><td>pangabuhi life, livelihood · pangabudlay difficulties · pangalipay joy · pangalisod hardship</td><td>pangka-</td></tr>
<tr><td><b>ka-</b></td><td>attained quality; companion</td><td>kasakit pain · kabug-at weight · kabulig helper · kasakay fellow passenger</td><td>ka-</td></tr>
<tr><td><b>ka-…-an</b></td><td>abstract quality; place</td><td>kalipayan happiness · kasubo-an sadness · katapusan end · kapaeayan rice field</td><td>ka-…-an</td></tr>
<tr><td><b>ka-…-anan</b></td><td>collective</td><td>kalisdanan hardships · kapuslanan worth · kabangdanan cause, reason</td><td>—</td></tr>
<tr><td><b>ka-…-on</b></td><td>state of being (matches the statives)</td><td>kagutomon hunger · kaohawon thirst · kamatayon death · katueogon sleep · <b>kahubut-on</b> one's psyche, interior self</td><td>ka-…-an</td></tr>
<tr><td><b>kina-</b></td><td>essence, culmination</td><td>kinabuhi one's whole life · kinahangean one's needs · kinaaeam wisdom · kinatawohan birthday</td><td>—</td></tr>
<tr><td><b>ig-</b></td><td>one relative</td><td>igkampud cousin · igmanghod sibling · igbata relative · igsu-on godbrother</td><td>—</td></tr>
<tr><td><b>mag-</b></td><td>a related pair (with -eV- for 3+)</td><td>magama father and child · magina mother and child · magmanghod siblings · magmaeanghod brothers and sisters</td><td>mag-</td></tr>
<tr><td><b>isigka-</b></td><td>fellow</td><td>isigkatawo fellow man · isigkahilapit neighbour · isigkaklasi classmate</td><td>kapwa</td></tr>
<tr><td><b>kasi(ng)-</b></td><td>same source</td><td>kasimaeay housemate · kasimanwa townmate · kasimaryo barrio-mate · kasingkasing heart, core</td><td>ka-</td></tr>
<tr><td><b>maNV-</b> / <b>manog-</b></td><td>occupation / part-time doer</td><td>mangingisda fisherman · mangunguma farmer · manunuro teacher · manogarado plowman · manoghambae lecturer</td><td>mang-, tagapag-</td></tr>
<tr><td><b>paea-</b></td><td>habitual person</td><td>paeakaon glutton · paeata-o fond of giving · paeaugot easily angered</td><td>pala-</td></tr>
<tr><td><b>paka-</b></td><td></td><td>paka-ayad repair · pakabuot good sense · <b>pakamatay</b> suicide</td><td>—</td></tr>
<tr><td><b>taga-</b> / <b>tag-</b></td><td>origin / owner</td><td>tagabukid from the mountains · tagariya from here · tagbaeay homeowner</td><td>taga-, may-</td></tr></table>
<p>Zorc notes that noun affixes keep the stress inside the root while verb affixes pull it to the end: <i>hampangan</i> playground vs <i>hampangán</i> to play with (p. 135).</p>
<h3>Zorc's sentences using these nouns</h3>
<p><i>Pila kamo magmaeanghod?</i> How many brothers and sisters are you? (p. 194) · <i>Naakig ako sa akong igkampud.</i> (p. 123) · <i>Nakapapati imaw kakon nga may kapuslanan rong kalisdanan.</i> He made me believe that sufferings have value. (p. 67) · <i>Magobra it mayad agod gumayad ro imong kinabuhi.</i> (p. 211) · <i>Kinahangean eagi nimo raya?</i> Do you need this right away? (p. 202)</p>
<div class="note">Clinical nouns you can now build and recognise ◌: <i>pagtueog</i> sleep (the act), <i>katueogon</i> sleepiness, <i>pagkaon</i> appetite/food, <i>kasubo-an</i> sadness, <i>kalipayan</i> happiness, <i>kahadlok</i> fear, <i>kaga-oy</i> fatigue, <i>pangabuhi</i> livelihood, <i>kinabuhi</i> life, <i>kahubut-on</i> the inner self (useful when asking how someone is "inside"), <i>pakamatay</i> suicide (a word to recognise, not to lead with: ask with the suicide section's indirect openers first), <i>igmanghod</i> sibling for the family tree. The sibling question for the genogram: <i>Pila kamo magmaeanghod?</i></div>`,
  quiz: [
    ['"Pila kamo magmaeanghod?" asks:', ['How old are your siblings?', 'How many brothers and sisters are you?', 'How many children do you have?', 'How many live with you?'], 1, 'mag- + -eV- + manghod = a group of siblings (p. 194).'],
    ['"Kamatayon" is:', ['a dead person', 'to kill', 'death (the state)', 'a killer'], 2, 'ka-…-on nouns name states, matching stative roots (p. 138).'],
    ['"Igkampud" means:', ['cousins (the pair)', 'cousin (one relative)', 'nephew', 'in-law'], 1, 'ig- names one specific relative; mag- names the related pair (p. 137).'],
    ['"Paeakaon" describes:', ['a cook', 'food', 'someone fond of eating', 'a dining table'], 2, 'paea- = habitual person, like Tagalog pala- (p. 139).']
  ]
}
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
<p><i>Kahapon imaw nagpanaw.</i> He left yesterday. (Z p. 182) · <i>Hinduna mabalik ako.</i> I'll be back later. (Z p. 182) · <i>Permi ako nagakaon it humay.</i> I always eat rice. (SR) · <i>Pila kabuhay eon?</i> How long has it been? ◌ · <i>Kan-o nag-umpisa?</i> When did it start? ◌ · <i>Anong oras kamo nagatueog ag nagabugtaw?</i> What time do you sleep and wake? ◌</p>
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
,{
  id: 'sound-changes', level: 'B1', unit: 'Sounds', title: 'Why words change shape: imna, kan-on, pamahaw, rang',
  summary: 'The ten sound changes that turn a root you know into a word you do not recognise, so you can hear inom inside imna and dumdum inside panumdum.',
  body: `
<p>Aklanon likes two-syllable words with the stress on the second-last syllable. When an affix is added, the root is squeezed, and the result can hide the root from a Tagalog ear (Zorc pp. 39–48). Tagalog does some of this too (<i>kain → kanin</i>), Aklanon does more of it.</p>
<h3>The changes that matter most</h3>
<table><tr><th>Rule</th><th>Root → form</th><th>Zorc</th></tr>
<tr><td>Vowel dropped, consonants swap (metathesis)</td><td><b>inom → imna</b> drink it! · <b>kaon → kan-on</b> rice · tanom → tamna · ilis → islan</td><td>p. 45</td></tr>
<tr><td>Final stressed vowel lost before a suffix</td><td><b>sakit → nasaktan</b> hurt · lisod → nalisdan · patay → patyon · sugot → sugtan</td><td>pp. 40–41</td></tr>
<tr><td>Final a, i, o before a suffix</td><td>asawa → asaw-on · mata → ginmat-an · siki → nasikyan · dugo → karugwan</td><td>p. 40</td></tr>
<tr><td>ng of pang-/mang-/sang- changes and the root's first sound drops</td><td>pang + bahaw → <b>pamahaw</b> breakfast · pang + dumdum → <b>panumdum</b> thinking · pang + kalisod → <b>pangalisod</b> suffering · pang + sugid → panugid · sang + bilog → sambilog one · pang + kutana → pangutana ask</td><td>pp. 41–43</td></tr>
<tr><td>ng kept before k, g, e, h, glottal, w, y</td><td>mang + isda → mangisda · pang + hibayag → panghibayag laugh</td><td>p. 42</td></tr>
<tr><td>d → r at the end of a root before a suffix</td><td>bukid → kabukiran · sayod → nasayoran known · tahod → tahoron respected</td><td>p. 44</td></tr>
<tr><td>e → l next to the -in- infix</td><td>eaga → linaga boiled · eangas → linangas naughty</td><td>p. 45</td></tr>
<tr><td>eon pronounced yun after t, d, s, n, y</td><td><i>Sabat eon</i> is heard as "sabat yun"; <i>tapus eon?</i> "tapus yun?"</td><td>p. 45</td></tr>
<tr><td>Contractions</td><td>akon nga → akong · abo nga tawo → abong tawo · owa it anoman → "uwa t anuman" you're welcome</td><td>p. 43</td></tr>
<tr><td>Reduplication</td><td>baeay-baeay doll house · init-init warm · eamig-eamig cool · kaon-kaon nibble · adlaw-adlaw every day</td><td>p. 47</td></tr>
<tr><td>-eV- infix = intensifying</td><td>duyog → <b>makadueuyog</b> sleep-inducing · sakit → <b>makasaeakit</b> painful · uhaw → makaueuhaw thirst-inducing · uean → tigueuean rainy season</td><td>p. 48</td></tr></table>
<h3>Marker + pronoun contractions (p. 44)</h3>
<p>These one-syllable words are everywhere in speech and nowhere in the dictionary:</p>
<table><tr><th></th><th>+ akon nga (my)</th><th>+ imo nga (your)</th><th>+ ana nga (his, her)</th></tr>
<tr><td>ro</td><td><b>rang</b></td><td><b>ring</b></td><td><b>raa</b></td></tr>
<tr><td>ku</td><td>kang</td><td>king</td><td>kaa</td></tr>
<tr><td>it</td><td>tang</td><td>ting</td><td>ta</td></tr>
<tr><td>sa</td><td>saang</td><td>sing</td><td>saa</td></tr></table>
<p><i>Nano <b>ring</b> ginaobra?</i> = <i>Nano ro imong ginaobra?</i> What are you doing? · <i>Tueogi <b>ring</b> problema.</i> Sleep off your problem. (SR) · <i>Hugasi <b>ring</b> alima bago kumaon.</i> Wash your hands before you eat. (p. 64) · <i>Indi <b>tang</b> magpati kimo.</i> I won't believe you. (p. 168)</p>
<h3>Stress alone can change the word (p. 39)</h3>
<p><i>súba</i> go upriver / <i>subá</i> river · <i>pagkáon</i> while eating / <i>pagka'ón</i> food · <i>hampangón</i> will be played with / <i>hampángan</i> toy. The app does not mark stress; the recorded pack by a native speaker will.</p>
<div class="note">For the clinic: when a patient says <i>panumdum</i>, hear <i>dumdum</i> (think, remember); in <i>pangalisod</i> hear <i>lisod</i> (hardship); in <i>pamatyag</i> hear <i>batyag</i> (feel); in <i>nasaktan</i> hear <i>sakit</i>; in <i>kan-on</i> hear <i>kaon</i>. Dictionary roots are the full forms; search the root, not the squeezed form.</div>`,
  quiz: [
    ['"Imna" comes from which root?', ['imon', 'inom', 'ima', 'mina'], 1, 'Metathesis: inom + -a → imna, "drink it" (p. 45).'],
    ['"Pamahaw" (breakfast) is built from:', ['pa- + mahaw', 'pang- + bahaw', 'pam- + ahaw', 'pa- + bahaw'], 1, 'pang- + bahaw: ng → m before b, then b is lost (p. 42).'],
    ['"Ring" in "Tueogi ring problema" means:', ['ring (the jewel)', 'ro imo nga = your', 'ro akon nga = my', 'ro ana nga = his'], 1, 'ro + imo nga contracts to ring (p. 44).'],
    ['"Makasaeakit" contains which intensifying device?', ['the -in- infix', 'the -eV- infix', 'full reduplication', 'the ka- prefix'], 1, '-eV- (here -ea-) inside sakit = pain-inducing (p. 48).']
  ]
},
{
  id: 'focus-ii', level: 'B1', unit: 'Verbs III', title: 'Choosing a focus: roles, the two paradigms, and the idioms that must be object-focus',
  summary: 'Zorc\'s rules for which focus to use, why actor focus everywhere sounds childish, and the sentences that only work one way.',
  body: `
<p>Lesson 7 introduced the four focuses. Zorc's longest chapter (pp. 70–89) is about <b>choosing</b> between them, and he calls this "the most important point in the whole structure of the language" (p. 89). Tagalog speakers already have the instinct (<i>Kinain ko</i> vs <i>Kumain ako</i>); Aklanon uses it more often and in more idioms.</p>
<h3>Roles and what each focus puts first (pp. 74–82)</h3>
<table><tr><th>Focus</th><th>Topic marked by ro / si / topic pronoun</th><th>Typical markers when not in focus</th></tr>
<tr><td>Actor (naga-, nag-, maga-, mag-)</td><td>the doer</td><td>ku + actor</td></tr>
<tr><td>Instrument (gina-, gin-, i-, iga-)</td><td>an instrument, a companion, the thing moved or conveyed, the content of speech, a special beneficiary, a reason</td><td>ku + instrument</td></tr>
<tr><td>Object (gina-, gin-, -on)</td><td>a goal that receives the whole action</td><td>it + object</td></tr>
<tr><td>Referent (gina-…-an, gin-…-an, -an)</td><td>a place, an indirect object or beneficiary, a partly affected object, the person affected, an indirect cause</td><td>sa + referent, para sa + beneficiary</td></tr></table>
<h3>One picture, four sentences (pp. 77–79)</h3>
<p>"The man will buy bread for the child with the money."</p>
<table><tr><th>Focus</th><th>Aklanon</th></tr>
<tr><td>Actor</td><td><b>Ro tawo</b> magabakae it tinapay para sa unga.</td></tr>
<tr><td>Instrument</td><td><b>Ro kwarta</b> igabakae it tinapay ku tawo para sa unga.</td></tr>
<tr><td>Object</td><td><b>Ro tinapay</b> bakeon ku tawo ku kwarta para sa unga.</td></tr>
<tr><td>Referent (beneficiary)</td><td><b>Ro unga</b> bakean it tinapay ku tawo ku kwarta.</td></tr>
<tr><td>Referent (place)</td><td><b>Ro tindahan</b> bakean it tinapay ku tawo para sa unga.</td></tr></table>
<p>Zorc's second paradigm (p. 87), "The mother will slice the meat with the bolo on the board": <i>Ro ina magakiwa it karne ku sanduko sa dapaean</i> · <i>Ro sanduko igakiwa ku ina it karne</i> · <i>Ro karne pagakiwa-on ku ina</i> · <i>Ro dapaean pagakiwa-an ku ina</i>.</p>
<h3>Idioms that are object or referent focus, never actor (pp. 85–86)</h3>
<table><tr><th>Correct</th><th>Wrong (actor focus)</th><th>English</th></tr>
<tr><td><b>Nano ring ginabasa?</b></td><td>*Sa ano ikaw nagabasa?</td><td>What are you reading?</td></tr>
<tr><td><b>Sino ro ginaosoy mo?</b></td><td>*Kanyo ikaw nagaosoy?</td><td>Whom are you looking for?</td></tr>
<tr><td><b>Bantayi ro imong manghod.</b></td><td>*Magbantay ka sa imong manghod.</td><td>Watch your younger sibling.</td></tr>
<tr><td><b>Mathematics ro akong ginaturo.</b></td><td>Gaturo ako it Mathematics. (childish)</td><td>I teach Mathematics.</td></tr></table>
<p>The lesson for your questions: <b>what, whom, which</b> questions about the thing go in object focus with <i>ro</i> on the question word: <i>Nano ro imong ginhuna-huna?</i> What were you thinking? ◌ · <i>Nano ro imong gintangisan?</i> What were you crying about? (p. 82) · <i>Sino ro ginakahadlukan mo?</i> Whom are you afraid of? ◌ · <i>Ano ro ginainom mo nga bueong?</i> What medicine do you take? ◌</p>
<h3>Focus is not the passive (pp. 83–84)</h3>
<p><i>Kinaon ro saging.</i> The banana was eaten (by someone unnamed). · <i>May kumaon it saging.</i> Somebody ate the banana. · <i>Si George ro nagkaon it saging.</i> George was the one who ate it. Leaving out the actor in object focus makes the actor indefinite; it does not hide anyone, and nothing about it is formal or written.</p>
<h3>Referent focus for feelings and causes (pp. 81–82)</h3>
<p><i>Si Pedro ginaakigan ni Karl ku kaeangas it mga iba.</i> Karl is angry at Pedro because of the others' noise. · <i>Naeayo-an ro magueang sa anang biyahe.</i> The old man felt the distance of his trip. · <i>Hatanda-an pa nakon ro anang uyahon.</i> I still remember his face. · <i>Basi ikaakig nana ro kagahod.</i> Maybe the noise will make him angry (instrument focus for a reason).</p>
<div class="note">Style rule (pp. 87–88): put in focus whatever matters now, and change focus as the conversation moves. <i>Kumosta ka?</i> (you in focus) <i>… Nano ring ginaobra?</i> (your work in focus). A whole interview in actor focus, <i>Nagainom ka it bueong? Nagatueog ka? Nagakaon ka?</i>, is grammatical and sounds like a child. Mix in <i>Ginainom mo ro bueong? Pila ka oras ro tueog mo?</i></div>`,
  quiz: [
    ['In "Ro unga bakean it tinapay ku tawo", the topic is the:', ['actor', 'object (bread)', 'beneficiary (child)', 'instrument (money)'], 2, 'Referent focus -an puts the beneficiary in focus (p. 78).'],
    ['Which is the correct idiom for "What are you reading?"', ['Sa ano ikaw nagabasa?', 'Nano ring ginabasa?', 'Nagabasa ka it nano?', 'Ano ka nagabasa?'], 1, 'Object focus with the question word as topic (p. 85).'],
    ['"Kinaon ro saging" without an actor means:', ['The banana ate.', 'Someone (unspecified) ate the banana.', 'I ate the banana.', 'Do not eat the banana.'], 1, 'Object focus with no actor indefinitises the actor; it is not a passive (p. 83).'],
    ['Zorc says a speaker who uses only actor focus sounds:', ['formal', 'childish or vain', 'rural', 'angry'], 1, 'p. 88: constant actor focus "sounds childish or vain".']
  ]
},
{
  id: 'verb-classes', level: 'B1', unit: 'Verbs III', title: 'Reading the dictionary: tenses, conditioned forms, and the tags RV1–RV9, ST1–ST5, CV, DV',
  summary: 'The full tense set behind lesson 8, the past- and future-conditioned forms after owa and indi, and what the verb tags in Zorc\'s dictionary tell you.',
  body: `
<p>Aklanon verbs mark <b>aspect</b> (begun or not), not clock time (Zorc p. 59). Lesson 8 gave the four everyday forms; here is the whole set, and the tags you will meet in the dictionary and in this app's notes.</p>
<h3>The tenses (pp. 60–65)</h3>
<table><tr><th>Form</th><th>Name</th><th>Use</th><th>Example</th></tr>
<tr><td>naga-</td><td>imperfective (real)</td><td>now, habitual, ongoing in the past</td><td><i>Nagasimba ako adlaw-adlaw.</i> I go to church every day. (p. 62)</td></tr>
<tr><td>nag-</td><td>perfective (real)</td><td>done</td><td><i>Nagtanom sanda it bataw.</i> They planted beans. (p. 62)</td></tr>
<tr><td><b>mag-</b> after owa, kan-o, siin, ayaw</td><td>past conditioned</td><td>the past under a negative or a question word</td><td><i>Owa ako magsimba kahapon.</i> I did not go to church yesterday. (p. 64) · <i>Kan-o kamo maguli kabi-i?</i> When did you go home last night? (p. 65)</td></tr>
<tr><td>maga-</td><td>future (unreal)</td><td>will</td><td><i>Magabakae ro tawo.</i></td></tr>
<tr><td><b>manog-</b></td><td>expected</td><td>about to, intends to</td><td><i>Manoghalin kuno kamo.</i> They say you intend to move. (p. 63)</td></tr>
<tr><td>ma-</td><td>subjunctive</td><td>after mos, basi, kunta, kon, siguro</td><td><i>Basi mahueog ka.</i> You might fall. (p. 63)</td></tr>
<tr><td>mag-</td><td>dependent</td><td>after gusto, naila, dapat, kinahangean, antigo</td><td><i>Kinahangean sanda gaadto sa Antique.</i> They must go to Antique. (p. 64)</td></tr>
<tr><td><b>mag-</b> after indi</td><td>future conditioned</td><td>will not</td><td><i>Indi ako magkaon.</i> I will not eat.</td></tr>
<tr><td><b>pag-</b></td><td>participle</td><td>gerund, or "when …" in the past</td><td><i>Pag-abot nana kahapon, nagaeaba kami.</i> When he arrived yesterday, we were washing. (p. 62)</td></tr></table>
<p>So <b>owa + mag-</b> is past ("did not") and <b>indi + mag-</b> is future ("will not"): the particle carries the time (p. 61). The object-focus pair is <i>Owa ko pagobraha ruyon</i> I did not do that (p. 98) and <i>Hin-uno imaw pagpukawon?</i> At what time is he to be awakened? (p. 98). The old <b>-um-</b> conjugation "does not exist in current Aklanon" except as an alternate in commands and after <i>kon</i>: <i>Kon umabot eon si Tatay…</i> (pp. 63–64).</p>
<h3>The dictionary's verb tags (SR pp. 25–27; Zorc pp. 90–92)</h3>
<table><tr><th>Tag</th><th>Class</th><th>Example roots</th></tr>
<tr><td>RV1</td><td>transitive; takes all focuses; object with it, -on</td><td>bakae, kaon, inom, daea, hueat</td></tr>
<tr><td>RV2</td><td>goal shown by instrument focus (i-)</td><td>baligya sell, tao give, sugid tell, hatod take</td></tr>
<tr><td>RV3</td><td>goal with it or sa, suffix -an / -i</td><td>bantay, lipat, tanda, isog scold, bisita, likaw</td></tr>
<tr><td>RV4</td><td>goal only with sa</td><td>lingkod sit on, sakay ride</td></tr>
<tr><td>RV5</td><td>object built into the verb (pang- verbs)</td><td>pangisda, pamunit</td></tr>
<tr><td>RV6</td><td>intransitive motion</td><td>adto, daeagan, panaw, hapit</td></tr>
<tr><td>RV7</td><td>inanimate actor</td><td>uean rain, bukae boil, tubo sprout</td></tr>
<tr><td>RV8</td><td>always plural doers (reciprocal)</td><td>saeabtanan argue, pangaway fight each other</td></tr>
<tr><td>RV9</td><td>pa- directional motion</td><td>pauli, paeapit, paKalibo</td></tr>
<tr><td>CV</td><td>causative pa- (lesson 15)</td><td>pakaon, patawag</td></tr>
<tr><td>DV</td><td>distributive pang- (lesson 31)</td><td>pamakae, panindahan</td></tr>
<tr><td>ST1</td><td>feelings conjugated like object focus with actor meaning</td><td>gutom, duyog, uhaw, ga-oy</td></tr>
<tr><td>ST2</td><td>feelings and conditions, na-/hi-/ha- only</td><td>akig, hadlok, subo, lipay, matay, bughat</td></tr>
<tr><td>ST3</td><td>accidental happenings to things</td><td>buka break, gisi tear, bagbag crash</td></tr>
<tr><td>ST4</td><td>bodily afflictions</td><td>sakit, piling cramps, sip-on, binhod, kuyap</td></tr>
<tr><td>ST5</td><td>psychological reaction to something outside, like referent focus</td><td>eayo (Naeayo-an ako ku biyahe), problema, kuyap</td></tr></table>
<p>Why it matters: a root tagged RV2 (<i>sugid</i>) will say <i>Isugid mo</i>, not *<i>sugidon mo</i>; an RV3 root (<i>isog</i>, <i>bantay</i>) takes <i>-i</i> in commands, <i>Bantayi</i>, <i>Isugi</i>; an ST4 root (<i>sakit</i>) is a condition, <i>ginasakit</i>, <i>nasaktan</i>; an ST5 root is felt about something, <i>Naproblemahan ako sa…</i>.</p>
<div class="note">Zorc's own tag string looks like <i>masimba = gAF-S/subj</i>: g general quality, AF actor focus, S simple mode, subj subjunctive (p. 98). You will not need to write these, only to read SR's RV/ST labels, which this app copies into the dictionary notes where it has them.</div>`,
  quiz: [
    ['"Owa ako magsimba kahapon" uses mag- as:', ['future', 'past conditioned, after owa', 'imperative', 'dependent'], 1, 'owa + mag- is the past conditioned form; the negative particle carries past time (pp. 61, 64).'],
    ['"Manoghalin kuno kamo" means:', ['You moved, they say.', 'They say you intend to move.', 'You must move.', 'Did you move?'], 1, 'manog- = expected, "about to, intends to" (p. 63).'],
    ['A root tagged RV2 shows its goal with:', ['-on (object focus)', 'i- (instrument focus)', 'sa only', 'no goal at all'], 1, 'RV2: goal shown by instrument focus, e.g. isugid, ibaligya (SR pp. 25–27).'],
    ['Which tag marks bodily afflictions like sakit, sip-on, binhod?', ['ST1', 'ST2', 'ST4', 'RV7'], 2, 'ST4 = physical afflictions of the body (SR).']
  ]
},
{
  id: 'verbs-iii', level: 'B1', unit: 'Verbs III', title: 'Doing a lot, doing together, becoming: pang-, mang-, maging-, mag-, makig-, -in-, and the intensives',
  summary: 'The other verb classes: distributive pang-, occupations in mang-, becoming with maging-, kin pairs with mag-, sharing with makig-, and the qualifiers that say "kept on" and "all of them".',
  body: `
<h3>Distributive pang- (p. 106)</h3>
<p>Spreads an action over time or many objects, builds an idiom, or folds the object into the verb. The sound changes of lesson 28 apply.</p>
<table><tr><th>Root</th><th>pang- form</th><th>Meaning</th></tr>
<tr><td>bakae</td><td>pamakae</td><td>buy plenty</td></tr>
<tr><td>tindahan</td><td>panindahan</td><td>go marketing</td></tr>
<tr><td>asawa</td><td>pangasawa</td><td>court and marry</td></tr>
<tr><td>kita</td><td>pangita</td><td>livelihood</td></tr>
<tr><td>sigarilyo</td><td>panigarilyo</td><td>cigarette smoking</td></tr>
<tr><td>isda</td><td>pangisda</td><td>go fishing</td></tr>
<tr><td>kutana</td><td>pangutana</td><td>ask questions</td></tr>
<tr><td>amuyo</td><td>pangamuyo</td><td>pray</td></tr></table>
<p><i>Nagpangisda sanda kabi-i.</i> They fished last night. (p. 107) · <i>Nagapangamuyo kami it uean.</i> We are praying for rain. (p. 107) · <i>Ipangsugid mo kanda ro hatabo.</i> Tell them everything that happened. (p. 107). Beware the look-alike instrumental gerund without sound change: <i>panimba</i> going to church vs <i>pangsimba</i> church clothes (p. 108).</p>
<h3>mang-: the verb and the occupation (pp. 109–110)</h3>
<table><tr><th>Root</th><th>mang- verb</th><th>Occupation noun</th></tr>
<tr><td>isda</td><td>mangisda (fish)</td><td>mangingisda fisherman</td></tr>
<tr><td>uma</td><td>mangumah (farm)</td><td>mangunguma farmer</td></tr>
<tr><td>turo</td><td>manuro (teach)</td><td>manunuro teacher</td></tr>
<tr><td>patay</td><td>mamatay (kill)</td><td>mamamatay killer</td></tr></table>
<p><i>Si Pedro owa mangayo it kwarta ay may ana man.</i> Pedro did not ask for money because he has his own. (p. 109)</p>
<h3>maging-: become (p. 110)</h3>
<p><i>nagin(g)-</i> real, <i>magin(g)-</i> unreal, on a noun or pronoun: <i>Buot nakon kunta magingpari.</i> I wanted to become a priest. (p. 111) · <i>Nagingunga nakon imaw.</i> He became my child. (p. 111). ◌ <i>Nagingkaeain imaw halin sadto</i>: he became different since then.</p>
<h3>mag-: a related pair (pp. 111–112)</h3>
<p><i>mag-</i> + kin root = "are (related as)": <i>magasawa</i> husband and wife, <i>magina</i> mother and child, <i>magama</i> father and child, <i>magkampud</i> cousins, <i>magamigo</i> friends, <i>magkilaea</i> acquaintances; with <i>-eV-</i> for three or more, <i>magmaeanghod</i> siblings. <i>Nagkilaea sanda kahapon.</i> They met yesterday. (p. 112) · <i>Pagasawa nanda, nagdismayo ro nobya.</i> When they were married, the bride fainted. (p. 112)</p>
<h3>makig- / makipag-: seeking to share (p. 113)</h3>
<p><i>Nakighueay imaw ku imong kalisod.</i> He shares with you in your bereavement. · <i>Nakighibayag imaw kakon.</i> He is with me in my joy. · ◌ <i>Makig-istorya ako kinyo</i>: I would like to talk with you. The real forms are <i>nakig-</i>, <i>nakipag-</i>.</p>
<h3>-in-: speaking like, acting like (p. 114)</h3>
<p><i>Inakeanon</i> the Aklanon language · <i>Binisaya</i> Visayan · <i>Ininglis</i> English · <i>inamerikano</i> acting like an American · <i>Ayaw maglinahog.</i> Don't be naughty. (p. 114)</p>
<h3>Qualifiers (pp. 117–119)</h3>
<table><tr><th>Form</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>ka-</b> perfective</td><td>state achieved</td><td><i>nagakatueog</i> is already sleeping; <i>nagkahueog</i> was down and out (p. 117)</td></tr>
<tr><td><b>-eV-</b> progressive, plural</td><td>kept on; all of them</td><td><i>Nagkaeamatay sanda sa gutom.</i> They were all dying from hunger. (p. 118)</td></tr>
<tr><td><b>-in-</b> intensive</td><td>strongly, repeatedly</td><td><i>Nagkinaon sanda sa amon nga saeo-saeo.</i> They ate and ate at our party. (p. 118)</td></tr>
<tr><td><b>-ilin-</b> more intensive</td><td>unending</td><td><i>ilinuean</i> continuous downpour; <i>hilinambae</i> unending chatter (p. 119)</td></tr>
<tr><td><b>-CV-</b> diminutive</td><td>less likely, a little</td><td><i>hidadakpan</i> might happen to be caught (p. 96); <i>Abo ro akong naiinom.</i> I managed to drink a great deal. (p. 119)</td></tr>
<tr><td><b>si-</b> distributive</td><td>many act individually</td><td><i>sihambae</i> talk together (p. 92)</td></tr></table>
<div class="note">Mania history in these forms ◌: <i>Nagkinaon ag nagkinaon imaw?</i> Did he eat and eat? <i>Nagahilinambae imaw bisan owa it kaimaw?</i> Does he chatter without stopping even with no one there? <i>Nagpamakae imaw it abo nga butang?</i> Did he buy plenty of things? The <i>-in-</i> and <i>-eV-</i> forms are how family describe excess.</div>`,
  quiz: [
    ['"Pangasawa" means:', ['a wife', 'to court and marry', 'married couple', 'to divorce'], 1, 'pang- idiom from asawa (p. 106).'],
    ['The occupation noun from "isda" is:', ['mangisda', 'mangingisda', 'pangisda', 'isdaan'], 1, 'mang- noun with the extra nasal + vowel syllable: mangingisda (p. 110).'],
    ['"Nagkaeamatay sanda sa gutom" means:', ['They killed for food.', 'They were all dying from hunger.', 'They nearly starved once.', 'They will die of hunger.'], 1, '-eV- progressive/plural inside matay (p. 118).'],
    ['"Nakighueay imaw ku imong kalisod" expresses:', ['He caused your hardship.', 'He shares in your hardship.', 'He laughed at your hardship.', 'He forgot your hardship.'], 1, 'makig-/nakig- = seeking mutuality, sharing (p. 113).']
  ]
},
{
  id: 'questions-ii', level: 'A2', unit: 'Sentences II', title: 'Question words II and the time markers: kan-o vs hin-uno, sino ro imong ngaean, ku / it / sa',
  summary: 'The full interrogator table, two words for "when", the real way to ask a name, and how ku, it and sa place an event in time.',
  body: `
<h3>Zorc's interrogators (pp. 192–194)</h3>
<table><tr><th>Aklanon</th><th>Meaning</th><th>Tagalog</th></tr>
<tr><td><b>sino</b> / nanyo / anyo / kanyo</td><td>who (topic) / by whom / whose / to whom</td><td>sino / nino / kanino / kanino</td></tr>
<tr><td><b>ano</b>, nano</td><td>what (topic / associate)</td><td>ano</td></tr>
<tr><td>ano kuno</td><td>what did they say?</td><td>ano daw</td></tr>
<tr><td><b>alin</b>, ano</td><td>do what? (a verb: <i>Gaalin ka?</i> What are you doing?)</td><td>umaano</td></tr>
<tr><td><b>kan-o</b></td><td>when (past)</td><td>kailan</td></tr>
<tr><td><b>hin-uno</b></td><td>when (future)</td><td>kailan</td></tr>
<tr><td><b>siin</b></td><td>where; which of several</td><td>saan; alin</td></tr>
<tr><td><b>haman</b></td><td>why (mild)</td><td>bakit</td></tr>
<tr><td>basi</td><td>why (northern Aklan)</td><td>bakit</td></tr>
<tr><td><b>pa-ano, pa-alin</b></td><td>how, in what way</td><td>paano</td></tr>
<tr><td><b>pila</b> / ikapila / man-o</td><td>how many / what number / how much (price)</td><td>ilan / pang-ilan / magkano</td></tr>
<tr><td><b>mauno</b></td><td>how, of what quality</td><td>kumusta; paano</td></tr></table>
<p>Zorc's examples: <i>Sino ro imong ngaean?</i> What is your name? (the native idiom; <i>Ano ro imong ngaean?</i> is a borrowing, now also accepted, p. 192) · <i>Kanyo nakon itao ro kwarta?</i> To whom should I give the money? (p. 192) · <i>Kan-o imaw nag-abot?</i> When did he arrive? · <i>Hin-uno sanda maadto?</i> When will they go? (p. 193) · <i>Haman indi ikaw mamunot?</i> Why aren't you going along? (p. 194) · <i>Pa-ano ro paghambae karon sa Ininglis?</i> How do you say that in English? (p. 194) · <i>Mauno ro imong pamatyag?</i> How do you feel? (p. 194)</p>
<h3>Two whens</h3>
<p><b>kan-o</b> looks back and takes the past-conditioned verb: <i>Kan-o nag-umpisa ro sakit?</i> When did the illness start? ◌ <b>hin-uno</b> looks forward: <i>Hin-uno kamo mabalik?</i> When will you come back? ◌ · <i>Hin-uno imaw pagpukawon?</i> At what time is he to be awakened? (p. 98). Tagalog has one <i>kailan</i>; the Aklanon pair is a frequent slip.</p>
<h3>Placing an event in time: ku, it, sa (pp. 165–166)</h3>
<table><tr><th>Marker</th><th>Time</th><th>Examples</th></tr>
<tr><td><b>ku</b></td><td>a completed past point</td><td>ku Lunes last Monday · ku Enero last January · ku isaeang adlaw the day before yesterday · ku isaeang dominggo the week before last · ku gerra during the war</td></tr>
<tr><td><b>… eon</b></td><td>counted back from now</td><td>daywang adlaw eon two days ago · limang ka buean eon five months ago · tatlo ka dag-on eon three years ago</td></tr>
<tr><td><b>it</b></td><td>time within</td><td>kahapon it hapon yesterday afternoon · sa sueod it daywang oras within the next two hours</td></tr>
<tr><td><b>sa</b></td><td>future</td><td>sa Lunes on Monday · sa masunod nga dominggo next week · sa daywa pang adlaw in two more days</td></tr></table>
<p>◌ History-taking: <i>Nag-umpisa raya ku Enero?</i> Did this begin last January? · <i>Tatlo ka buean eon?</i> Three months ago? · <i>Balik kamo sa masunod nga dominggo.</i> Come back next week. · <i>Kabii it gabii, nakatueog kamo?</i> Last night, did you sleep?</p>
<h3>Plural and counting words (p. 190)</h3>
<p><b>mga</b> pluralises (<i>ro mga unga</i>), <b>ka</b> follows numbers and <i>pila</i> (<i>daywang ka unga</i>, <i>pila ka adlaw</i>), and <i>mga</i> is never used with a number. The linker <b>nga</b> becomes <b>-ng</b> after a vowel, h, glottal or n: <i>tawong mabuot</i>, <i>batang eaeaki</i>, <i>Mayad nga agahon</i> good morning, <i>Mayad nga hapon kinyong tanan</i> (p. 191).</p>
<h3>Who said it: the Kalibo quotative (p. 167)</h3>
<p><i>Sinay Carlos, "Makaon eon kita."</i> Carlos said, "Let's eat." · <i>Ano sinimo?</i> What did you say? · <i>sinana</i> he said, <i>sinanda</i> they said. Around Kalibo the prefix is <b>sin-</b>; north around Ibajay it is <b>kun-</b>. ◌ Collateral: <i>Sinay Nanay, owa imaw gatueog it tatlo ka gabii.</i> Mother says he has not slept for three nights.</p>
<div class="note">Exclamations with <b>ka- + root + ta + k-pronoun</b> (p. 168): <i>Kahinay ta kimo!</i> You're so slow! · <i>Kabuot ta kana!</i> He is so kind! · <i>Kaisog ta kakon.</i> I am very brave. You will hear <i>Kasakit ta kakon!</i> as a cry of pain. ◌</div>`,
  quiz: [
    ['Which word asks "when" about the future?', ['kan-o', 'hin-uno', 'siin', 'haman'], 1, 'hin-uno = when (future); kan-o = when (past) (p. 193).'],
    ['The native Aklanon way to ask a name is:', ['Ano ro imong ngaean?', 'Sino ro imong ngaean?', 'Siin ro imong ngaean?', 'Nano ngaean mo?'], 1, 'Personal-name interrogators follow the si paradigm: Sino ro imong ngaean? (p. 192).'],
    ['"Ku Lunes" means:', ['on Monday (future)', 'last Monday', 'every Monday', 'by Monday'], 1, 'ku marks a completed past point; sa Lunes is the future (p. 165).'],
    ['"Daywang adlaw eon" means:', ['two more days', 'two days ago', 'every two days', 'the second day'], 1, 'Number + eon counts back from now (p. 165).']
  ]
}
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
<tr><td>umpisa / tapos</td><td>start / finish</td><td>simula / tapos</td></tr>
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
<tr><td>mabug-at</td><td>heavy</td><td>mabigat</td></tr>
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
,{
  id: 'pronunciation', level: 'A1', unit: 'Sounds', title: 'Pronunciation II: the e sound in contrast, the glottal stop, o or u, and stress',
  summary: 'What to listen for when there is no Aklanon TTS: the minimal pairs that separate e from y, l and g; bug-at from bughat; and the spelling rules for o and u.',
  body: `
<p>Lesson 1 introduced the velar fricative written <b>e</b>. Zorc\'s phonology chapter (pp. 8–33) gives the contrasts a learner must hear, and the spelling rules this app follows. The Filipino device voice will get all of this wrong; read the pairs aloud yourself.</p>
<h3>Hearing e against its neighbours (pp. 14–15, 20)</h3>
<table><tr><th>e-word</th><th>Not the same as</th><th>Learners\' error</th></tr>
<tr><td><b>eabi</b> special, single out</td><td>yabi key</td><td>saying y for e</td></tr>
<tr><td><b>aeam</b> wise</td><td>ayam dog</td><td>y for e</td></tr>
<tr><td><b>tueo</b> drip</td><td>tuyo soy sauce</td><td>y for e</td></tr>
<tr><td><b>eana</b> coconut oil</td><td>lana wool; gana appetite</td><td>l or g for e</td></tr>
<tr><td><b>haeo</b> lizard</td><td>halo mixed</td><td>l for e</td></tr>
<tr><td><b>uean</b> rain</td><td>—</td><td>g for e</td></tr>
<tr><td><b>bungoe</b> deaf</td><td>bungog stupid</td><td>g for e</td></tr>
<tr><td><b>busoe</b> large seed</td><td>busog full (after eating)</td><td>g for e</td></tr>
<tr><td><b>isoe</b> move backward</td><td>isog courage</td><td>g for e</td></tr></table>
<p>Zorc calls it a "gargled g" (p. 14). It stands where Hiligaynon and Tagalog have <b>l</b>: <i>saeamat</i>, <i>eang</i>, <i>baeay</i>, <i>bueong</i>, <i>eagnat</i> fever. It is still productive: Spanish <i>lagare</i> became <i>eagari</i>, <i>corral</i> <i>kurae</i>, <i>casar</i> <i>kasae</i> (p. 15). But Aklanon also has a real <b>l</b>, mostly next to <b>i</b>: <i>likod</i>, <i>alima</i>, <i>ilo</i> orphan, <i>uli</i> go home, <i>ulihi</i> late, <i>puril</i> lie, <i>libak</i> gossip (p. 20). "Aklanon has no l" is folk linguistics.</p>
<h3>The glottal stop is a consonant (pp. 11–12)</h3>
<table><tr><th>With glottal stop</th><th>Without</th></tr>
<tr><td><b>bug-at</b> heavy</td><td>bughat relapse</td></tr>
<tr><td><b>ka-on</b> eat</td><td>kahon box</td></tr>
<tr><td><b>ta-o</b> give</td><td>taho ginger tea</td></tr>
<tr><td><b>bag-o</b> new</td><td>bago before</td></tr>
<tr><td><b>man-o</b> how much?</td><td>mano right (not left)</td></tr>
<tr><td><b>baga\'</b> lungs</td><td>baga embers</td></tr>
<tr><td><b>bata\'</b> young</td><td>bata bathrobe</td></tr>
<tr><td><b>sako\'</b> busy</td><td>sako sack</td></tr>
<tr><td><b>uman</b> repeat (initial stop)</td><td>human finished</td></tr>
<tr><td><b>huna\'</b> thought (h)</td><td>una\' present, existing</td></tr></table>
<p>Spelling (p. 32): a hyphen between a vowel and a consonant (<i>sin-o, tam-is, ba-o</i>); unwritten between two vowels (<i>tao, huo, siin</i>, each said with a catch) and at the end of a word, where the dictionary writes <b>\'</b> and this app usually drops it. Three kinds of word-final vowel show themselves before a suffix: <i>bata\' → kabata-an</i>; <i>simba(h) → simbahan</i>, <i>tinda(h) → tindahan</i>, <i>basa(h) → basahon</i>; <i>tubo → katubwan</i> (p. 12).</p>
<h3>o or u? (pp. 28, 33)</h3>
<p>Native Aklanon has three vowels, i a u; e and o came with Spanish and are now real sounds (<i>pare\'</i> compadre vs <i>pari\'</i> priest, p. 25). The rule of thumb, which is also the spelling rule: in a two-syllable root write <b>u</b> in the first syllable and <b>o</b> in the second: <i>unga, sueod, uean, bueong, humay, huo</i>. Closed, unstressed syllables tend to u; stressed ones to o. One-syllable words take o (<i>ro, do, ko, mo, eon, ron</i>) except the marker <b>ku</b>, spelled with u to keep it apart from the pronoun <i>ko</i>: <i>baeay ko</i> my house, <i>baeay ku amo</i> the master\'s house (p. 33). Affixes keep one spelling whatever the root does: <i>tagipuso-on</i>, <i>manogitlog</i>. In unstressed syllables e and i swap freely (<i>pwede/pwedi</i>, <i>yabe/yabi</i>); stressed e must stay e, and <i>sigi</i> for <i>sige</i> is "illiterate" (p. 26).</p>
<h3>Reading a written e (p. 33)</h3>
<p>Next to a vowel it is the consonant: <i>baeay, kaeamay, hueay</i>. Next to a consonant it is the vowel /e/: <i>presko, permi, kalye, eskuyla</i>.</p>
<h3>Stress (pp. 30–31)</h3>
<table><tr><th>Penultimate</th><th>Final</th></tr>
<tr><td>píto whistle</td><td>pitó seven</td></tr>
<tr><td>hápon afternoon</td><td>hapón Japanese</td></tr>
<tr><td>túbo pipe</td><td>tubó sugar cane</td></tr>
<tr><td>pagká\'on food</td><td>pagka\'ón while eating</td></tr>
<tr><td>hampángan toy</td><td>hampangán will be played with</td></tr>
<tr><td>kasákay fellow passenger</td><td>kasakáy could have ridden</td></tr></table>
<p>Default stress is penultimate; the dictionary marks only the exceptions (D. 38). Pitch works at sentence level: <i>Iya imaw.</i> He is here. <i>Iya imaw?</i> Is he here? (p. 31)</p>
<div class="note">For the clinic: the pair most likely to matter is <b>bug-at</b> (heavy, as in <i>mabug-at ro dughan</i>, a heavy chest) versus <b>bughat</b> (relapse after illness or childbirth). And <i>baga\'</i> with the catch is lungs. When unsure, say the word slowly with a clear catch and watch the patient\'s face.</div>`,
  quiz: [
    ['"Bughat" and "bug-at" differ by:', ['stress only', 'a glottal stop; they mean relapse and heavy', 'the e sound', 'o versus u'], 1, 'bug-at = heavy, bughat = relapse (Z p. 11).'],
    ['Aklanon "l" is found mostly:', ['at the end of words', 'next to i, as in likod, alima, ilo', 'in Spanish loans only', 'nowhere; Aklanon has no l'], 1, 'Z p. 20: real l survives mostly next to i.'],
    ['Why is the marker spelled "ku" though one-syllable words take o?', ['It is Spanish', 'To keep it apart from the pronoun ko', 'It is stressed', 'A printing error'], 1, 'Z p. 33: baeay ko vs baeay ku amo.'],
    ['In "presko" the written e is:', ['the velar consonant', 'the vowel e, because it stands next to a consonant', 'silent', 'a glottal stop'], 1, 'Z p. 33: next to a consonant, e is the vowel.']
  ]
},
{
  id: 'kalibo-dimensions', level: 'B1', unit: 'Culture', title: 'Three Aklanons and a thousand loans: town, age, prestige, and reading the dictionary tags',
  summary: 'Why the old man from Libacao, the Kalibo nurse and the teenager on the jeep sound different, how borrowed words are reshaped, and what [Sp], [Hil], [Akl:] and [Oak] mean.',
  body: `
<p>Zorc describes the Aklanon of <b>Kalibo, spoken by middle-aged people</b> (p. 7), and says plainly that it is not "pure": it borrows from Tagalog and Ilongo and is full of colloquialisms (p. 5). That is the Aklanon you will hear in the clinic, and the dictionary this app is checked against was built to record it, with "a very large representation of English and Spanish words" (D. 1).</p>
<h3>The three dimensions (pp. 5–7)</h3>
<table><tr><th>Dimension</th><th>Groups</th><th>What you will hear</th></tr>
<tr><td>Town</td><td>Kalibo, New Washington (the model); conservative towns (Altavas, Balete, Banga, Batan, Lezo, Libacao, Makato, Malay, Madalag, Malinao, Tangalan, SW Ibajay); Hiligaynon-leaning (towards Capiz); Kinaray-a-leaning (NE Ibajay, Nabas, towards Antique)</td><td>older forms and "deep" words from the hill towns; Hiligaynon words from the Capiz side; Kinaray-a from the Antique side</td></tr>
<tr><td>Age</td><td>over 55; 30–55; under 29</td><td>older: archaic words, complex sentences, slow speech, higher intonation; middle: standard, with English and Spanish insertions; young: Tagalog and English borrowing, slang, short sentences</td></tr>
<tr><td>Prestige</td><td>sermons, campaigns, formal occasions</td><td>e-words over loans (<i>eaeawigan</i> not <i>probinsya</i>), <b>r-forms over d-forms</b> (<i>ro</i>, <i>raya</i>, not <i>do</i>, <i>daya</i>: the d-forms are called baby talk or careless), long structures</td></tr></table>
<p>So an elderly patient from Libacao and a Kalibo adolescent are both speaking Aklanon; neither matches the other, and the dictionary marks words from both ends: <b>[Oak]</b> old or deep Aklanon, <b>[slg]</b> young slang, <b>[Lib]</b>, <b>[Ibj]</b>, <b>[Bkd]</b> for town and mountain speech, <b>[Kin]</b> for the Kinaray-a-mixed areas (D. 4–6).</p>
<h3>Borrowed words and how they are reshaped (pp. 12–22, 133–134)</h3>
<table><tr><th>Source</th><th>Examples</th><th>Adaptation</th></tr>
<tr><td>Spanish (by far the largest layer)</td><td>permi, petsa, presko, karne, kabayo, kutsara, swerte, bapor, baril, relo, renta, lugar, estar, tumar (take medicine), konpesar</td><td>f → p, v → b, ch → ts, j → dy; final r kept in loan verbs; initial r almost always marks a loan (p. 21); Spanish l or r can become the e-sound: eagari, kurae, kasae</td></tr>
<tr><td>English</td><td>titser, nars, dyip, ayskrim, bakwit (evacuate), haloblak, kas, kredit</td><td>respelled natively; takes native affixes (<i>pabulkit</i> vulcanise)</td></tr>
<tr><td>Chinese</td><td><b>tiyan</b> stomach, pansit, syopaw, tsa tea, boysit bad luck</td><td>old loans, fully native now</td></tr>
<tr><td>Sanskrit via Malay</td><td>daeaga maiden, <b>mahae</b> dear, turo teach, mutya pearl</td><td>ancient</td></tr>
<tr><td>Tagalog, Hiligaynon</td><td>marked <b>[Tag]</b>, <b>[Hil]</b> with the native word: <i>damo [Hil] [Akl: abo]</i>, <i>hibi [Hil] [Akl: tangis]</i>, <i>anyo [Sp] [Akl: dag-on]</i></td><td>the source of most of this app\'s 0.1.5 corrections</td></tr></table>
<p>Loans conjugate like any root: <i>Nagpa-X-ray eon kamo?</i> ◌ <i>Nagtext imaw kakon.</i> ◌ <i>Ginareseta ko kinyo</i>. ◌ Numbers for money and clock time are Spanish (<i>alas tres</i>, <i>beynte singko</i>); native numbers count things (lesson 39).</p>
<h3>The dictionary\'s tags, which this app copies (D. 4–9)</h3>
<table><tr><th>Tag</th><th>Meaning</th></tr>
<tr><td>[Sp] [Eng] [Ch] [Jp] [Tag] [Hil]</td><td>source language</td></tr>
<tr><td>[Akl: …]</td><td>the native Aklanon equivalent of a loan</td></tr>
<tr><td>[Oak] [slg] [gen] [vul] [idm] [expr] [Sup] [cor]</td><td>old/deep, slang, general, vulgar, idiom, expression, superstition, corrupted form</td></tr>
<tr><td>[Alt:] [Syn:] [Opp:] [Cf:] [Ctr:] [Abr:]</td><td>alternate, synonym, opposite, compare, contraction (<i>rang = ro akon nga</i>), abbreviation (<i>mga = manga</i>)</td></tr>
<tr><td>]ma[ ]pag[</td><td>a root always used with that prefix (<i>sunsun ]ma[ → masunsun</i>)</td></tr>
<tr><td>(h) and \'</td><td>a hidden final h (<i>simba(h)</i>) or a final glottal stop (<i>baba\'</i>)</td></tr>
<tr><td>RV1–RV9, CV, DV, ST1–ST5</td><td>verb classes (lesson 30)</td></tr></table>
<p>Register in one entry (D. 7): <i>utot</i> is "flatulence" in scientific register, "bad air" in general speech and a vulgar word; one word, <i>pandiho\'</i>, covers both the polite and the crude "move the bowels". Name respelling (D. 36): a word that can take <i>ro</i> is spelled natively (<i>Kalibo, Libakaw</i>); a word that takes <i>si</i> keeps its own spelling (<i>Victor, New Washington</i>).</p>
<div class="note">Clinical reading: expect an older patient to use words you will not find in Kalibo speech (ask the family to gloss; note <i>[Oak]</i> entries), a middle-aged one to code-switch to English for symptoms, and a young one to answer in Tagalog slang. Match the register you hear; prestige r-forms and e-words are the safe default for a doctor.</div>`,
  quiz: [
    ['Zorc\'s model Aklanon is that of:', ['Libacao elders', 'Kalibo, middle-aged speakers', 'Ibajay fishermen', 'radio announcers'], 1, 'Z p. 7.'],
    ['In prestige speech, which pair is preferred?', ['do, daya', 'ro, raya', 'both equally', 'neither'], 1, 'r-forms; the d-forms are dismissed as baby talk or careless (Z p. 7).'],
    ['"Tiyan" (stomach) is a loan from:', ['Spanish', 'English', 'Chinese', 'Sanskrit'], 2, 'Z p. 134.'],
    ['The dictionary tag [Akl: dag-on] after "anyo" means:', ['anyo is old Aklanon', 'dag-on is the native word for the loan anyo', 'dag-on is slang', 'anyo is vulgar'], 1, 'D. 6: [Akl:] gives the native equivalent.']
  ]
},
{
  id: 'sentence-patterns', level: 'A2', unit: 'Sentences II', title: 'Sentence patterns: predicate first, ro or do, persons are never objects, hay and may',
  summary: 'The shape of the basic sentence, the two-topic sentence, the hay inversion that fronts what matters, and the may sentence for "there is" and "has".',
  body: `
<h3>The basic sentence (pp. 151, 197)</h3>
<p>Two parts: the <b>predicate</b> ("the news") first, the <b>topic</b> (what is uppermost in the speaker\'s mind) second. <i>Nagpanaw sa Manila si Tatay.</i> Father left for Manila. · <i>Nahuman kahapon ro baeay.</i> The house was finished yesterday. · <i>Masakit ro akong ueo.</i> ◌ The topic is marked <b>ro / do</b> (common nouns), <b>si / sanday</b> (names: <i>sanday Maria</i> = Maria and company), or is a topic pronoun or deictic. Towns take the common markers: <i>sa Kalibo</i>, never <i>kay Kalibo</i> (p. 143).</p>
<h3>ro or do?</h3>
<p>They are the same word in two shapes (p. 143). <i>ro</i> is the general and the prestige form; <i>do</i> is preferred after a word ending in d, t or n: <i>Mainit gid <b>do</b> sabaw</i>, <i>Haron <b>do</b> imo</i>. In the lessons both appear, as they do in Zorc. <i>ro mga</i> contracts to <b>rong</b>: <i>Rong mangingilaw kuno nagakaon kay Pedro.</i> The ogres are said to be eating Pedro. (p. 153)</p>
<h3>Persons are never direct objects (pp. 145–146)</h3>
<p>You cannot say *<i>nagakaon it Pedro</i>. A person who receives an action is put in the referent form (<i>kay Pedro</i>, <i>kakon</i>, <i>kimo</i>) or made the topic: <i>Si Pedro kuno ginakaon kung mangingilaw.</i> Zorc reads this as Philippine respect and indirectness. For you: <i>Nagabulig ako <b>kinyo</b></i> I help you; <i>Ginabantayan nanda <b>si Nanay</b></i> they watch Mother. ◌</p>
<h3>ku is definite, it is indefinite (pp. 152–153)</h3>
<p><i>Nakabakae ka eon <b>it</b> gatas?</i> Did you buy (some) milk? · <i>… <b>ku</b> gatas?</i> the milk. · <i>ku mga unga</i> the children / <i>it mga unga</i> some children. The actor must be <i>ku</i> when the object is <i>it</i>.</p>
<h3>Two topics: the identificational sentence (p. 151)</h3>
<p><i>Ro nagpanaw sa Manila hay si Tatay.</i> The one who left for Manila was Father. · <i>Si Nanay ro ginbakean it isda ku tawo.</i> Mother was the one the man bought fish for. (p. 152) · <i>Sanday Maria ro nagbakae.</i> Maria and her companions were the ones who bought. The first topic is the more important; the second is the news. ◌ <i>Ro nagahambae kinyo hay sin-o?</i> Who is it that speaks to you?</p>
<h3>hay: turning the sentence round (p. 197)</h3>
<table><tr><th>Normal order</th><th>With hay</th></tr>
<tr><td>Raya ro akong unga.</td><td>Ro akong unga hay raya. This is my child.</td></tr>
<tr><td>Mahae ro singsing.</td><td>Ro singsing hay mahae. The ring is expensive.</td></tr>
<tr><td>Ginbaligya nana ro anwang.</td><td>Ro anwang hay ginbaligya nana. He sold the carabao.</td></tr>
<tr><td>Mataas ro mga baeay sa Manila.</td><td>Sa Manila hay mataas ro mga baeay. In Manila, well, the buildings are high.</td></tr>
<tr><td>Hin-aga ma-adto kita.</td><td>Hin-aga hay ma-adto kita. Tomorrow, well, we will go.</td></tr>
<tr><td>—</td><td>Ako hay bata pa ngani. Well me, I\'m still young.</td></tr>
<tr><td>—</td><td>Imaw hay presidente. He is a president. (D. 31)</td></tr></table>
<p>Simple inversion first; then the <b>emphasis derivation</b>, which fronts any element with "well, …" and sometimes adds a resumptive word (<i>Ro anwang, hay ginbaligya <b>ron</b> sa Kalibo</i>). This is the Tagalog <i>ay</i> sentence, and Kalibo speech uses it constantly (lesson 12). ◌ <i>Ro inom hay nag-umpisa kan-o?</i> The drinking, when did it start?</p>
<h3>may: there is, someone, has (p. 198)</h3>
<table><tr><th>Use</th><th>Example</th></tr>
<tr><td>existential</td><td><i>May baha kabi-i.</i> There was a flood last night. · <i>May patay sa datag.</i> There is a dead man in the field.</td></tr>
<tr><td>indefinite someone / something</td><td><i>May tawo runa?</i> Is someone there? · <i>May iya nga doktor kaina.</i> Some doctor was here a while ago.</td></tr>
<tr><td>has (possessor in focus)</td><td><i>May baeay ro akong tiyo.</i> My uncle has a house. · <i>May kapuslanan ro anang ginhambae.</i> What he said has worth.</td></tr>
<tr><td>has (relationship in focus)</td><td><i>May amon nga baeay.</i> We have a house. · <i>May ay Maria nga eagnat.</i> Maria has a fever.</td></tr>
<tr><td>with the negative</td><td><i>May tinun-an gid imaw, pero owa man imaw it batasan.</i> He may have an education, but he has no manners.</td></tr></table>
<div class="note">Symptom questions are <b>may</b> sentences ◌: <i>May eagnat kamo?</i> Do you have a fever? <i>May nabatian kamo nga boses nga owa it tawo?</i> Did you hear voices with nobody there? <i>May ginainom kamo nga bueong?</i> <i>May natabo?</i> Did something happen? And the answer, from lesson 5, is <i>May.</i> / <i>Owa.</i></div>`,
  quiz: [
    ['The normal Aklanon sentence order is:', ['topic, then predicate', 'predicate, then topic', 'verb last', 'free'], 1, 'Z p. 151, 197.'],
    ['Which is impossible in Aklanon?', ['Nagakaon it isda si Pedro.', 'Nagakaon it Pedro ro mangingilaw.', 'Ginakaon si Pedro.', 'Nagakaon kay Pedro.'], 1, 'Persons are never direct objects with it; use the referent kay or make the person the topic (Z pp. 145–146).'],
    ['"Nakabakae ka eon ku gatas?" means:', ['Did you buy some milk?', 'Did you buy the milk?', 'Will you buy milk?', 'Did you sell milk?'], 1, 'ku is definite, it indefinite (Z p. 153).'],
    ['"May ay Maria nga eagnat" means:', ['Maria is a fever.', 'Maria has a fever.', 'There is fever in Maria\'s house.', 'Maria had a fever before.'], 1, 'may + prepositive associate + nga + thing: possession with the relationship in focus (Z p. 198).']
  ]
},
{
  id: 'counting', level: 'A2', unit: 'Sentences II', title: 'Counting II: ka, ordinals, times, tig-, money, the clock, dates and age',
  summary: 'Native numbers for things, Spanish numbers for money and time, and the forms that turn a number into "the third", "twice", "two at a time" and "about three o\'clock".',
  body: `
<p>Lesson 10 gave the numbers 1–10. Zorc has no numeral chapter; what follows is assembled from his function-noun pages (pp. 163–164, 184, 190, 208) and the dictionary.</p>
<h3>Counting things (p. 190)</h3>
<p>Number + <b>ka</b> + noun, or number + <b>nga</b> + noun; never <i>mga</i> with a number: <i>daywang ka unga</i> two children · <i>tatlong ka kabayo</i> · <i>napueong ka baeay</i> ten houses · <i>Pila ka kilometros pa sa Libacao?</i> · <i>Limang ka dag-on eon ako riya.</i> I have been here five years now. (p. 201). <b>Sambato</b> and <b>sambilog</b> are "one" as a count word: <i>Sambato eang ro naka-abot.</i> Only one arrived. (p. 163). <b>Hundred</b> is <i>gatos</i> (<i>limang gatos</i>, <i>sang gatos</i>), <b>thousand</b> <i>libo</i>. Native 11–99 are not recorded in either book; Kalibo speakers use the Spanish set (<i>onse, dose, kinse, beynte, trenta, kwarinta</i>).</p>
<h3>Derived forms</h3>
<table><tr><th>Form</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>ika-</b> + number</td><td>ordinal</td><td><i>ikatlong unga</i> third child · <i>ikapito</i> seventh · <i>Ikapila ka sa imong klase?</i> What rank are you in your class? (p. 194). "First" is <i>una</i> in loans (<i>ala una</i>) and <i>panganay</i> for a first-born.</td></tr>
<tr><td><b>bisis</b></td><td>time, occasion</td><td><i>sambisis lang</i> just once · <i>tatlong bisis eon</i> the third time already · <i>kaywa</i> twice · <i>pilambisis</i> how many times</td></tr>
<tr><td><b>tig-</b> + number</td><td>N at a time, N each</td><td><i>Tigdaywa nagasaka rong sapat sa arka.</i> The animals went up two by two. (p. 184) · <i>tigsambato</i> one at a time · <i>tigsangkurot</i> a little at a time · <i>tigpila?</i> how much apiece?</td></tr>
<tr><td>number as a verb</td><td>make into N</td><td><i>Ap-ata ro saging.</i> Make it four bananas. · <i>An-oma ring unga.</i> Have six children. (D. 60, 57)</td></tr>
<tr><td><b>manga</b> + number</td><td>about</td><td><i>Manga lima kanda naeumos.</i> About five of them drowned. (p. 208)</td></tr></table>
<h3>Money (D. 150)</h3>
<p><i>kwarta</i> money, also one centavo · <i>piso, pisos</i> peso (<i>mamiso</i> at a peso each) · <i>salapi</i> fifty centavos · <i>kahati</i> twenty-five · <i>peseta</i> twenty · <i>dyes</i> ten · <i>bakod</i> five, slang. The question is <b>man-o</b> (with the catch; <i>mano</i> is the right hand): <i>Man-o ro manok ngara?</i> How much is this chicken? (p. 194) · <i>Pila ro alimango?</i> How much are the crabs? (D. 304) · <i>Ayawa nga beynte singko.</i> Make it exactly 25 centavos. (D. 68)</p>
<h3>The clock (D. 49, 261, 151)</h3>
<p><i>ala una</i> one o\'clock (only for one); <b>alas</b> + Spanish number for two to twelve: <i>alas dos, alas tres, alas says, alas otso, alas onse</i> · <i>alas says e medya</i> half past six · <i>minus kwarto para alas syete</i> a quarter to seven · <i>Manga alas tres makaron.</i> It is about three now. (p. 208) · <i>Makita ko ikaw sa alas otso.</i> I\'ll see you at eight. (p. 126) · <i>Hapita ako it alas says.</i> Pick me up at six. (D. 208)</p>
<h3>Dates, years, age</h3>
<p><i>Ano\'ng pitsaha makaron?</i> What is the date today? · <i>Pitsa dos it Enero.</i> January second. (D. 309) · years and months are Spanish (<i>Abril, Agosto, 1963</i>); <i>dag-on</i> is the native year, <i>panag-on</i> a season. Age uses <b>idad</b>: <i>Pila ro imong idad?</i> How old are you? · <i>May idad eon imaw.</i> He is old enough. · <i>Kat nagapangidaron imaw it dyes.</i> When he was ten. (D. 225). Counting back and forward (lesson 32): <i>daywang adlaw eon</i> two days ago · <i>sa tatlo pang adlaw</i> in three more days · <i>sa sueod it daywang oras</i> within two hours.</p>
<div class="note">Dosing in these forms ◌: <i>Tigsambato kada aga ag kada gabii.</i> One each morning and evening. <i>Tigdaywa pagkatapos it pagkaon.</i> Two after meals. <i>Sa tatlo pang adlaw, balik kamo.</i> Come back in three days. <i>Kaywa eang sa isaea ka adlaw.</i> Only twice a day. And for the MSE: <i>Pila ro inyong idad? Ano\'ng pitsaha makaron?</i></div>`,
  quiz: [
    ['"Two children" in Aklanon is:', ['daywa mga unga', 'daywang ka unga', 'mga daywa unga', 'unga daywa'], 1, 'number + ka (or nga) + noun; never mga with a number (Z p. 190).'],
    ['"Tigdaywa" means:', ['twenty', 'two at a time, two each', 'the second', 'twice'], 1, 'tig- + number = N at a time (Z p. 184).'],
    ['The dictionary\'s question for someone\'s age is:', ['Pila ka dag-on ka?', 'Pila ro imong idad?', 'Ikapila ka?', 'Man-o ro imong edad?'], 1, 'SR D. 225: Pila ro imong idad?'],
    ['"Alas says e medya" is:', ['six in the morning', 'half past six', 'a quarter past six', 'six thirty-five'], 1, 'medya = half (SR D. 261); clock time uses Spanish numbers.']
  ]
}
];
