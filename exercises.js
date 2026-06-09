// ============================================
// EXERCISES.JS — Pflege 26: Mundpflege & Zahnpflege
// 7 exerciții × 10 itemi = 70 itemi total
// Schreiben form: forms.gle/2NDhZ8UUZxppyaDX6
// REGULĂ: la propoziții, răspunsul e valid CU sau FĂRĂ punct final
//   → normalizeAnswer elimină . ! ? ; : + .trim() + variante de topică în accept[]
// Claudia Toth · Annettes Deutschkurs · A2.1
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim();
}

function answerMatches(item, userInput) {
    const u = normalizeAnswer(userInput);
    if (!u) return false;
    if (item.accept.some(a => normalizeAnswer(a) === u)) return true;
    if (item.sentence) {
        const sentenceClean = item.sentence.replace(/\s*\([^)]*\)\s*/g, ' ');
        return item.accept.some(a => {
            const full = sentenceClean.replace(/____+/g, a);
            return normalizeAnswer(full) === u;
        });
    }
    return false;
}

// EX 1: Match Mund + Zähne + Prothese
const ex1Data = [
    { id: 'a', de: 'die Mundpflege', accept: ['ingrijirea gurii', 'igiena gurii'], correct: 'îngrijirea gurii' },
    { id: 'b', de: 'die Zähne', accept: ['dintii', 'dinti'], correct: 'dinții' },
    { id: 'c', de: 'das Zahnfleisch', accept: ['gingia', 'gingie'], correct: 'gingia' },
    { id: 'd', de: 'die Zahnbürste', accept: ['periuta de dinti', 'periuta', 'periuta dentara'], correct: 'periuța de dinți' },
    { id: 'e', de: 'die Zahnpasta', accept: ['pasta de dinti', 'pasta', 'pasta dentara'], correct: 'pasta de dinți' },
    { id: 'f', de: 'die Zahnprothese', accept: ['proteza dentara', 'proteza', 'dantura', 'gebiss'], correct: 'proteza dentară' },
    { id: 'g', de: 'herausnehmen', accept: ['a scoate', 'a scoate afara', 'scoate'], correct: 'a scoate (din gură)' },
    { id: 'h', de: 'die Reinigungstablette', accept: ['tableta de curatare', 'tableta curatare', 'tableta efervescenta', 'pastila de curatare'], correct: 'tableta de curățare' },
    { id: 'i', de: 'der trockene Mund', accept: ['gura uscata', 'gura uscat'], correct: 'gura uscată' },
    { id: 'j', de: 'der Soor', accept: ['candidoza', 'candidoza bucala', 'afta alba', 'strat alb'], correct: 'candidoza bucală (strat alb)' }
];

function buildEx1() {
    const c = document.getElementById('ex1-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🦷 Scrie traducerea</strong> pentru vocabularul de igienă a gurii.</div>';
    ex1Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>🇩🇪 ${it.de}</label><input type="text" id="ex1-${it.id}" placeholder="Scrie traducerea..."></div><div class="feedback" id="ex1-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx1() {
    let correct = 0; const total = ex1Data.length;
    ex1Data.forEach(it => {
        const inp = document.getElementById(`ex1-${it.id}`); const fb = document.getElementById(`ex1-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx1() { ex1Data.forEach(it => { const i = document.getElementById(`ex1-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex1-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 2: reflexive Verben mit Dativ (STAR — mir cu obiect direct vs mich fără)
const ex2Data = [
    { id: 'a', sentence: 'Ich putze ____ die Zähne. (e DEJA un obiect: die Zähne → reflexiv DATIV)', translation: 'ÎMI spăl dinții.', correct: 'mir', accept: ['mir'] },
    { id: 'b', sentence: 'Ich wasche ____. (reflexivul e SINGURUL obiect → Akkusativ)', translation: 'MĂ spăl.', correct: 'mich', accept: ['mich'] },
    { id: 'c', sentence: 'Putzen Sie ____ die Zähne. (Sie-Form + obiect → reflexiv DATIV)', translation: 'Spălați-VĂ pe dinți.', correct: 'sich', accept: ['sich'] },
    { id: 'd', sentence: 'Ich wasche ____ die Hände. (e un obiect: die Hände → DATIV)', translation: 'ÎMI spăl mâinile.', correct: 'mir', accept: ['mir'] },
    { id: 'e', sentence: 'Ich spüle ____ den Mund aus. (e un obiect: den Mund → DATIV)', translation: 'ÎMI clătesc gura.', correct: 'mir', accept: ['mir'] },
    { id: 'f', sentence: 'Sie putzt ____ die Zähne. (ea + obiect → DATIV)', translation: 'Ea ÎȘI spală dinții.', correct: 'sich', accept: ['sich'] },
    { id: 'g', sentence: 'Wäschst du ____? (reflexivul e SINGURUL obiect → Akkusativ)', translation: 'TE speli?', correct: 'dich', accept: ['dich'] },
    { id: 'h', sentence: 'Putz ____ die Zähne! (imperativ du + obiect → DATIV)', translation: 'Spală-ȚI dinții!', correct: 'dir', accept: ['dir'] },
    { id: 'i', sentence: 'Ich ziehe ____ an. (sich anziehen — reflexivul e SINGURUL obiect → Akkusativ)', translation: 'MĂ îmbrac.', correct: 'mich', accept: ['mich'] },
    { id: 'j', sentence: 'Ich wasche ____ das Gesicht. (e un obiect: das Gesicht → DATIV)', translation: 'ÎMI spăl fața.', correct: 'mir', accept: ['mir'] }
];

function buildEx2() {
    const c = document.getElementById('ex2-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🌟 Verbe reflexive cu Dativ.</strong> Regula: dacă e DEJA un obiect direct (die Zähne, die Hände), reflexivul e <strong>Dativ</strong> (mir/dir/sich). Dacă reflexivul e SINGURUL obiect → <strong>Akkusativ</strong> (mich/dich).</div>';
    ex2Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex2-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex2-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx2() {
    let correct = 0; const total = ex2Data.length;
    ex2Data.forEach(it => {
        const inp = document.getElementById(`ex2-${it.id}`); const fb = document.getElementById(`ex2-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx2() { ex2Data.forEach(it => { const i = document.getElementById(`ex2-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex2-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 3: Audio dictat
const ex3Data = [
    { id: 'a', audio: 'audio/dictat-01.wav', correct: 'die Zahnbürste', accept: ['die zahnbürste', 'die zahnbuerste', 'zahnbürste', 'zahnbuerste'] },
    { id: 'b', audio: 'audio/dictat-02.wav', correct: 'die Zahnpasta', accept: ['die zahnpasta', 'zahnpasta'] },
    { id: 'c', audio: 'audio/dictat-03.wav', correct: 'die Zahnprothese', accept: ['die zahnprothese', 'zahnprothese'] },
    { id: 'd', audio: 'audio/dictat-04.wav', correct: 'das Zahnfleisch', accept: ['das zahnfleisch', 'zahnfleisch'] },
    { id: 'e', audio: 'audio/dictat-05.wav', correct: 'putzen', accept: ['putzen'] },
    { id: 'f', audio: 'audio/dictat-06.wav', correct: 'ausspülen', accept: ['ausspülen', 'ausspuelen'] },
    { id: 'g', audio: 'audio/dictat-07.wav', correct: 'der Soor', accept: ['der soor', 'soor'] },
    { id: 'h', audio: 'audio/dictat-08.wav', correct: 'die Reinigungstablette', accept: ['die reinigungstablette', 'reinigungstablette'] },
    { id: 'i', audio: 'audio/dictat-09.wav', correct: 'Ich putze mir die Zähne', accept: ['ich putze mir die zähne', 'ich putze mir die zaehne'] },
    { id: 'j', audio: 'audio/dictat-10.wav', correct: 'Putzen Sie sich die Zähne', accept: ['putzen sie sich die zähne', 'putzen sie sich die zaehne'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🎙️ Audio dictat — Mundpflege + reflexive Dativ.</strong></div>';
    ex3Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><div class="audio-dictat-row"><button class="audio-btn-mini" id="btn-${it.audio}" onclick="toggleAudio(event, 'audio-dictat-${it.id}')">▶</button><audio id="audio-dictat-${it.id}" preload="none"><source src="${it.audio}" type="audio/wav"></audio><span style="color:#6b7280; font-size:0.9rem;">Ascultă și scrie:</span></div><input type="text" id="ex3-${it.id}" placeholder="Scrie ce auzi..."></div><div class="feedback" id="ex3-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx3() {
    let correct = 0; const total = ex3Data.length;
    ex3Data.forEach(it => {
        const inp = document.getElementById(`ex3-${it.id}`); const fb = document.getElementById(`ex3-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx3() { ex3Data.forEach(it => { const i = document.getElementById(`ex3-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex3-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 4: Prothese + Mundprobleme
const ex4Data = [
    { id: 'a', sentence: 'Dinții se spală de cel puțin ____ pe zi (de 2 ori)', translation: 'ZWEIMAL (de două ori).', correct: 'zweimal', accept: ['zweimal', 'zwei mal', '2 mal', '2x'] },
    { id: 'b', sentence: 'Periuța de dinți trebuie să fie ____ (moale)', translation: 'WEICH (moale).', correct: 'weich', accept: ['weich'] },
    { id: 'c', sentence: 'Seara, proteza se ____ (a scoate din gură)', translation: 'HERAUSNEHMEN (a scoate).', correct: 'herausnehmen', accept: ['herausnehmen', 'herausgenommen', 'rausnehmen'] },
    { id: 'd', sentence: 'Noaptea, proteza se păstrează într-un pahar cu ____ (rece)', translation: 'WASSER (apă).', correct: 'Wasser', accept: ['wasser', 'kaltem wasser', 'kaltes wasser'] },
    { id: 'e', sentence: '🚨 NICIODATĂ proteza în apă ____ (fierbinte — se deformează!)', translation: 'HEISS (fierbinte).', correct: 'heiß', accept: ['heiß', 'heiss', 'heißes', 'heisses', 'heißem'] },
    { id: 'f', sentence: 'Strat alb pe limbă care NU se șterge ușor = ____', translation: 'SOOR (candidoza).', correct: 'Soor', accept: ['soor', 'der soor', 'mundsoor'] },
    { id: 'g', sentence: 'Gura uscată (în germană): der ____ Mund', translation: 'TROCKENE (uscat).', correct: 'trockene', accept: ['trockene', 'trocken'] },
    { id: 'h', sentence: 'Rană roșie de la proteză = ____', translation: 'DRUCKSTELLE (punct de presiune).', correct: 'Druckstelle', accept: ['druckstelle', 'die druckstelle', 'druckstellen'] },
    { id: 'i', sentence: 'Pentru dureri de dinți sau proteză care nu se potrivește → chemi ____', translation: 'ZAHNARZT (dentistul).', correct: 'Zahnarzt', accept: ['zahnarzt', 'den zahnarzt', 'der zahnarzt', 'dentist'] },
    { id: 'j', sentence: 'La pacient imobilizat folosești ____ umede (tampoane), NU multă apă', translation: 'TUPFER (tampoane).', correct: 'Tupfer', accept: ['tupfer', 'die tupfer'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🦷 Prothese + Mundprobleme.</strong> De 2 ori/zi · periuță weich · proteza herausnehmen + Glas mit Wasser (🚨 NU heiß!) · Soor → Hausarzt · Druckstelle/Zahnschmerzen → Zahnarzt · imobilizat = Tupfer.</div>';
    ex4Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex4-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex4-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx4() {
    let correct = 0; const total = ex4Data.length;
    ex4Data.forEach(it => {
        const inp = document.getElementById(`ex4-${it.id}`); const fb = document.getElementById(`ex4-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx4() { ex4Data.forEach(it => { const i = document.getElementById(`ex4-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex4-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 5: Dialog Gap-Fill (Dialog 2 — Die Zahnprothese)
const ex5Data = [
    { id: 'a', sentence: 'Andreea: „...kümmern wir uns um die ____." (PROTEZA)', translation: 'ne ocupăm de PROTEZĂ.', correct: 'Prothese', accept: ['prothese', 'zahnprothese'] },
    { id: 'b', sentence: 'Frau Müller: „Muss ich sie ____?" (A SCOATE)', translation: 'Trebuie să o SCOT?', correct: 'herausnehmen', accept: ['herausnehmen'] },
    { id: 'c', sentence: 'Andreea: „Nachts kommt die Prothese ____." (AFARĂ)', translation: 'Noaptea proteza se scoate (iese AFARĂ).', correct: 'heraus', accept: ['heraus'] },
    { id: 'd', sentence: 'Andreea: „Ich reinige sie mit der ____." (PERIUȚA DE PROTEZĂ)', translation: 'O curăț cu PERIUȚA DE PROTEZĂ.', correct: 'Prothesenbürste', accept: ['prothesenbürste', 'prothesenbuerste'] },
    { id: 'e', sentence: 'Andreea: „In das ____ mit Wasser." (PAHAR)', translation: 'În PAHARUL cu apă.', correct: 'Glas', accept: ['glas'] },
    { id: 'f', sentence: 'Andreea: „Niemals in ____ Wasser!" (FIERBINTE)', translation: 'Niciodată în apă FIERBINTE!', correct: 'heißes', accept: ['heißes', 'heisses', 'heiß', 'heiss'] },
    { id: 'g', sentence: 'Andreea: „Jetzt spülen Sie ____ den Mund aus." (reflexiv DATIV — Sie)', translation: 'Acum clătiți-VĂ gura.', correct: 'sich', accept: ['sich'] },
    { id: 'h', sentence: 'Andreea: „...den Mund ____." (particula verbului ausspülen)', translation: 'a CLĂTI gura (aus...).', correct: 'aus', accept: ['aus'] },
    { id: 'i', sentence: 'Andreea: „Tut etwas ____?" (DOARE)', translation: 'Vă DOARE ceva?', correct: 'weh', accept: ['weh'] },
    { id: 'j', sentence: 'Frau Müller: „Nein, alles ____." (BINE)', translation: 'Nu, totul e BINE.', correct: 'gut', accept: ['gut'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🦷 Dialog gap-fill — Die Zahnprothese (Dialog 2).</strong> Îngrijirea protezei seara + reflexiv Dativ.</div>';
    ex5Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex5-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex5-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx5() {
    let correct = 0; const total = ex5Data.length;
    ex5Data.forEach(it => {
        const inp = document.getElementById(`ex5-${it.id}`); const fb = document.getElementById(`ex5-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx5() { ex5Data.forEach(it => { const i = document.getElementById(`ex5-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex5-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 6: Traducere RO → DE (PROPOZIȚII — punctul final NU contează; reflexive Dativ)
const ex6Data = [
    { id: 'a', ro: 'Îmi spăl dinții.', correct: 'Ich putze mir die Zähne.', accept: ['ich putze mir die zähne', 'ich putze mir die zaehne'] },
    { id: 'b', ro: 'Spălați-vă pe dinți, vă rog.', correct: 'Putzen Sie sich bitte die Zähne.', accept: ['putzen sie sich bitte die zähne', 'putzen sie sich bitte die zaehne', 'putzen sie sich die zähne', 'putzen sie sich die zaehne'] },
    { id: 'c', ro: 'Îmi spăl mâinile.', correct: 'Ich wasche mir die Hände.', accept: ['ich wasche mir die hände', 'ich wasche mir die haende'] },
    { id: 'd', ro: 'Mă spăl.', correct: 'Ich wasche mich.', accept: ['ich wasche mich'] },
    { id: 'e', ro: 'Periuța trebuie să fie moale.', correct: 'Die Zahnbürste muss weich sein.', accept: ['die zahnbürste muss weich sein', 'die zahnbuerste muss weich sein'] },
    { id: 'f', ro: 'Scot proteza.', correct: 'Ich nehme die Prothese heraus.', accept: ['ich nehme die prothese heraus'] },
    { id: 'g', ro: 'Niciodată în apă fierbinte!', correct: 'Niemals in heißes Wasser!', accept: ['niemals in heißes wasser', 'niemals in heisses wasser'] },
    { id: 'h', ro: 'Îmi clătesc gura.', correct: 'Ich spüle mir den Mund aus.', accept: ['ich spüle mir den mund aus', 'ich spuele mir den mund aus'] },
    { id: 'i', ro: 'Am o gură uscată.', correct: 'Ich habe einen trockenen Mund.', accept: ['ich habe einen trockenen mund'] },
    { id: 'j', ro: 'Proteza e în paharul cu apă.', correct: 'Die Prothese ist im Glas mit Wasser.', accept: ['die prothese ist im glas mit wasser'] }
];

function buildEx6() {
    const c = document.getElementById('ex6-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🌍 Traducere RO → DE.</strong> 💡 Punctul de la final e <strong>opțional</strong>. Atenție la reflexivele cu Dativ (mir/sich + obiect) vs Akkusativ (mich).</div>';
    ex6Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>🇷🇴 ${it.ro}</label><input type="text" id="ex6-${it.id}" placeholder="Scrie în germană..."></div><div class="feedback" id="ex6-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx6() {
    let correct = 0; const total = ex6Data.length;
    ex6Data.forEach(it => {
        const inp = document.getElementById(`ex6-${it.id}`); const fb = document.getElementById(`ex6-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx6() { ex6Data.forEach(it => { const i = document.getElementById(`ex6-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex6-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 7: Schreiben — Raport îngrijire gură pentru Petra
function buildEx7() {
    const c = document.getElementById('ex7-container'); if (!c) return;
    c.innerHTML = `
        <div class="schreiben-wrapper">
            <div class="schreiben-prompt">
                <h4>✍️ Tema ta de scriere — Raport îngrijire gură pentru Petra</h4>
                <p>Scrie-i Petrei (fiica) un raport scurt despre cum îi îngrijești gura și proteza mamei.</p>
                <p><strong>Scrie un raport (5-8 propoziții)</strong>: că o ajuți la spălatul dinților (folosind <strong>reflexiv cu Dativ</strong>: „Ich putze ihr die Zähne" / „Sie putzt sich die Zähne"), cum îngrijești proteza (seara, pahar cu apă, NU fierbinte), dacă ai observat probleme (Druckstellen, gură uscată, Soor), liniștește-o.</p>

                <div class="schreiben-hints">
                    <h5>💡 Structuri utile</h5>
                    <p>Liebe Petra · ich helfe Ihrer Mutter bei der Zahnpflege · morgens und abends putzt sie sich die Zähne · ich putze ihr die Zähne, wenn die Hände zittern · abends nehme ich die Prothese heraus · die Prothese kommt in ein Glas mit Wasser, niemals in heißes Wasser · keine Druckstellen, kein Soor · der Mund ist sauber und gesund · machen Sie sich keine Sorgen · Liebe Grüße, Andreea.</p>
                </div>
            </div>

            <textarea id="ex7-text" class="schreiben-textarea" placeholder="Schreib hier den Bericht auf Deutsch...
Beispiel:
Liebe Petra, ich möchte Ihnen kurz..."></textarea>

            <details class="schreiben-model">
                <summary>📝 Vezi un model de răspuns</summary>
                <div class="model-text">
                    <p><em>Beispiel-Antwort:</em></p>
                    <p>Liebe Petra, ich möchte Ihnen kurz über die Mundpflege Ihrer Mutter berichten. Morgens und abends putzt sie sich die Zähne. Wenn ihre Hände zittern, putze ich ihr die Zähne ganz vorsichtig. Danach spült sie sich den Mund aus. Abends nehme ich die Prothese heraus und reinige sie. Die Prothese kommt in ein Glas mit Wasser — niemals in heißes Wasser. Ich habe keine Druckstellen und keinen Soor gesehen. Der Mund ist sauber und gesund. Machen Sie sich keine Sorgen. Liebe Grüße, Andreea.</p>
                    <p class="model-translation"><em>Traducere:</em> Dragă Petra, vreau să vă raportez pe scurt despre îngrijirea gurii mamei dvs. Dimineața și seara își spală dinții. Când îi tremură mâinile, îi spăl eu dinții cu mare grijă. Apoi își clătește gura. Seara scot proteza și o curăț. Proteza se pune într-un pahar cu apă — niciodată în apă fierbinte. Nu am văzut puncte de presiune și nici candidoză. Gura e curată și sănătoasă. Nu vă faceți griji. Cu drag, Andreea.</p>
                </div>
            </details>

            <div class="schreiben-cta">
                <a href="https://forms.gle/2NDhZ8UUZxppyaDX6" target="_blank" class="btn-google-form-big">
                    ✍️ Vrei feedback PERSONAL de la Annette? Trimite raportul aici
                </a>
                <p class="schreiben-promise">📩 Răspunde Annette personal în 24-48 ore — corectare + sfaturi.</p>
            </div>
        </div>
    `;
}

function checkExercise(n) {
    const checkers = { 1: checkEx1, 2: checkEx2, 3: checkEx3, 4: checkEx4, 5: checkEx5, 6: checkEx6 };
    if (!checkers[n]) return;
    const result = checkers[n]();
    const scoreEl = document.getElementById(`score-${n}`);
    if (!scoreEl) return;
    const pct = Math.round((result.correct / result.total) * 100);
    let emoji = '💪', msg = 'Mai exersează!';
    if (pct === 100) { emoji = '🏆'; msg = 'Perfect!'; }
    else if (pct >= 80) { emoji = '⭐'; msg = 'Foarte bine!'; }
    else if (pct >= 60) { emoji = '👍'; msg = 'Bine!'; }
    else if (pct >= 40) { emoji = '📚'; msg = 'Continuă!'; }
    scoreEl.className = 'score show';
    scoreEl.innerHTML = `<div class="score-value">${emoji} ${result.correct}/${result.total} (${pct}%)</div><div class="score-message">${msg}</div>`;
}

function resetExercise(n) {
    const resetters = { 1: resetEx1, 2: resetEx2, 3: resetEx3, 4: resetEx4, 5: resetEx5, 6: resetEx6 };
    if (resetters[n]) resetters[n]();
    const scoreEl = document.getElementById(`score-${n}`);
    if (scoreEl) { scoreEl.className = 'score'; scoreEl.innerHTML = ''; }
}

function toggleAudio(event, audioId) {
    event.stopPropagation();
    const audio = document.getElementById(audioId);
    const btn = event.currentTarget;
    if (!audio || !btn) return;
    if (audio.paused) {
        audio.play().then(() => { btn.textContent = '⏸'; }).catch(() => {});
        audio.onended = () => { btn.textContent = '▶'; };
    } else {
        audio.pause(); btn.textContent = '▶';
    }
}

buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5(); buildEx6(); buildEx7();
