// ============================================
// FINAL TEST — Pflege 26: Mundpflege & Zahnpflege
// 25 întrebări × 5 categorii
// normalizeAnswerFT elimină . ! ? ; : + .trim() → la propoziții punctul final NU contează
// Claudia Toth · Annettes Deutschkurs · A2.1
// ============================================

function normalizeAnswerFT(str) {
    return (str || '')
        .toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim();
}

const finalTestData = [
    // === 1. GRUNDLAGEN (5) ===
    { id: 1, category: 'Grundlagen', type: 'fill', question: 'Îngrijirea gurii (cu articol): „die ____pflege"', correct: 'Mund', accept: ['mund', 'mundpflege'] },
    { id: 2, category: 'Grundlagen', type: 'mc', question: 'De ce e importantă Mundpflege?', options: ['Doar pentru un zâmbet frumos', 'Previne pneumonia (bacterii → plămâni) + pacientul mănâncă/vorbește fără durere + demnitate', 'Nu e importantă', 'Doar pentru proteză'], correctIndex: 1, correct: 'Previne pneumonia + mâncat/vorbit fără durere + demnitate' },
    { id: 3, category: 'Grundlagen', type: 'fill', question: 'Gingia (cu articol): „das ____"', correct: 'Zahnfleisch', accept: ['zahnfleisch'] },
    { id: 4, category: 'Grundlagen', type: 'mc', question: 'De câte ori se spală dinții?', options: ['O dată pe săptămână', 'Cel puțin de 2 ori pe zi — dimineața și seara', 'O dată pe zi', 'Doar când doare'], correctIndex: 1, correct: 'Cel puțin de 2 ori/zi (dimineața + seara)' },
    { id: 5, category: 'Grundlagen', type: 'fill', question: 'Limba (cu articol): „die ____"', correct: 'Zunge', accept: ['zunge'] },

    // === 2. ZÄHNE PUTZEN + PROTHESE (5) ===
    { id: 6, category: 'Zähne putzen + Prothese', type: 'mc', question: 'Cum trebuie să fie periuța de dinți?', options: ['Tare (hart)', 'Moale (weich)', 'Nu contează', 'Electrică obligatoriu'], correctIndex: 1, correct: 'weich (moale)' },
    { id: 7, category: 'Zähne putzen + Prothese', type: 'fill', question: 'A scoate proteza din gură (verb): ____', correct: 'herausnehmen', accept: ['herausnehmen', 'rausnehmen'] },
    { id: 8, category: 'Zähne putzen + Prothese', type: 'mc', question: 'Unde se păstrează proteza noaptea?', options: ['Pe noptieră, uscată', 'Într-un pahar cu apă rece (sau cu tabletă de curățare)', 'În apă fierbinte', 'În frigider'], correctIndex: 1, correct: 'Pahar cu apă rece (NU fierbinte)' },
    { id: 9, category: 'Zähne putzen + Prothese', type: 'mc', question: '🚨 De ce NICIODATĂ proteza în apă fierbinte?', options: ['E mai igienic', 'Apa fierbinte DEFORMEAZĂ proteza', 'Nu există motiv', 'Ca să se usuce'], correctIndex: 1, correct: 'Apa fierbinte deformează proteza' },
    { id: 10, category: 'Zähne putzen + Prothese', type: 'fill', question: 'Tableta efervescentă de curățare a protezei: „die ____stablette"', correct: 'Reinigung', accept: ['reinigung', 'reinigungstablette'] },

    // === 3. MUNDPROBLEME (5) ===
    { id: 11, category: 'Mundprobleme', type: 'mc', question: 'Strat alb pe limbă care NU se șterge ușor =', options: ['Normal', 'Soor (candidoza) → anunți Hausarzt-ul', 'Pastă de dinți', 'Mâncare'], correctIndex: 1, correct: 'Soor (candidoza) → Hausarzt' },
    { id: 12, category: 'Mundprobleme', type: 'fill', question: 'Gura uscată (în germană): „der ____ Mund"', correct: 'trockene', accept: ['trockene', 'trocken'] },
    { id: 13, category: 'Mundprobleme', type: 'mc', question: 'O rană roșie de la proteză (Druckstelle). Faci:', options: ['Ignori', 'Anunți — proteza trebuie ajustată de dentist (Zahnarzt)', 'Pui mai multă Haftcreme', 'Scoți proteza definitiv'], correctIndex: 1, correct: 'Anunți → Zahnarzt ajustează proteza' },
    { id: 14, category: 'Mundprobleme', type: 'mc', question: 'Pentru dureri de dinți / proteză care nu se potrivește, chemi:', options: ['Pompierii', 'Zahnarzt (dentistul)', 'Nimeni', 'Farmacistul'], correctIndex: 1, correct: 'Zahnarzt (dentistul)' },
    { id: 15, category: 'Mundprobleme', type: 'fill', question: 'Dentistul (cu articol): „der ____"', correct: 'Zahnarzt', accept: ['zahnarzt'] },

    // === 4. REFLEXIVE DATIV (5) ===
    { id: 16, category: 'reflexive Dativ', type: 'mc', question: 'În „Ich putze ___ die Zähne", reflexivul e la Dativ (mir). De ce?', options: ['Întotdeauna e Dativ', 'Pentru că e DEJA un obiect direct (die Zähne) → reflexivul trece la Dativ', 'Pentru că e plural', 'Fără motiv'], correctIndex: 1, correct: 'E deja un obiect direct (die Zähne) → reflexiv Dativ' },
    { id: 17, category: 'reflexive Dativ', type: 'fill', question: '„Ich putze ____ die Zähne." (reflexiv — e obiect die Zähne)', correct: 'mir', accept: ['mir'] },
    { id: 18, category: 'reflexive Dativ', type: 'fill', question: '„Ich wasche ____." (reflexivul e SINGURUL obiect → Akkusativ)', correct: 'mich', accept: ['mich'] },
    { id: 19, category: 'reflexive Dativ', type: 'mc', question: 'Când e Dativ (mir) și când Akkusativ (mich)?', options: ['Mereu Akkusativ', 'Dativ (mir) când e DEJA un obiect direct · Akkusativ (mich) când reflexivul e singurul obiect', 'Mereu Dativ', 'Nu contează'], correctIndex: 1, correct: 'Dativ cu obiect direct · Akkusativ fără' },
    { id: 20, category: 'reflexive Dativ', type: 'fill', question: '„Putzen Sie ____ die Zähne." (Sie-Form + obiect → reflexiv)', correct: 'sich', accept: ['sich'] },

    // === 5. TRADUCERE + SITUAȚII (5) ===
    { id: 21, category: 'Traducere + Situații', type: 'fill', question: '🇷🇴 „Îmi spăl dinții." → 🇩🇪 ? (reflexiv Dativ, punctul opțional)', correct: 'Ich putze mir die Zähne.', accept: ['ich putze mir die zähne', 'ich putze mir die zaehne'] },
    { id: 22, category: 'Traducere + Situații', type: 'fill', question: '🇷🇴 „Mă spăl." → 🇩🇪 ? (reflexiv Akkusativ)', correct: 'Ich wasche mich.', accept: ['ich wasche mich'] },
    { id: 23, category: 'Traducere + Situații', type: 'mc', question: '🪥 Frau Müller are mâinile tremurânde și nu poate spăla dinții. Faci:', options: ['O lași fără spălat', 'O ajuți blând, cu periuța moale: „Ich putze Ihnen die Zähne vorsichtig"', 'Folosești o periuță tare', 'Aștepți până mâine'], correctIndex: 1, correct: 'O ajuți blând, periuță moale' },
    { id: 24, category: 'Traducere + Situații', type: 'fill', question: '🇷🇴 „Niciodată în apă fierbinte!" → 🇩🇪 ?', correct: 'Niemals in heißes Wasser!', accept: ['niemals in heißes wasser', 'niemals in heisses wasser'] },
    { id: 25, category: 'Traducere + Situații', type: 'mc', question: '🚨 Vezi un strat alb pe limbă, iar dedesubt e roșu și dureros. Înseamnă:', options: ['E normal', 'Posibil Soor (candidoza) → anunți Hausarzt-ul, NU freci forțat', 'E pastă de dinți', 'Trebuie doar mai multă apă'], correctIndex: 1, correct: 'Posibil Soor → anunți Hausarzt-ul' }
];

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    let html = `
        <div class="final-test-intro">
            <h4>🎯 Test Final — 25 întrebări</h4>
            <p>5 categorii × 5 întrebări: <strong>Grundlagen · Zähne putzen+Prothese · Mundprobleme · reflexive Dativ · Traducere+Situații</strong></p>
        </div>
        <div id="ft-questions">`;
    finalTestData.forEach((q, i) => {
        html += `<div class="ft-question" data-q-id="${q.id}">
            <div class="ft-q-header">
                <span class="ft-q-num">Întrebarea ${i + 1} / 25</span>
                <span class="ft-q-category">${q.category}</span>
            </div>
            <div class="ft-q-text">${q.question}</div>`;
        if (q.type === 'mc') {
            q.options.forEach((opt, idx) => {
                html += `<label class="ft-option"><input type="radio" name="ft-${q.id}" value="${idx}"> <span>${opt}</span></label>`;
            });
        } else if (q.type === 'fill') {
            html += `<input type="text" class="ft-input" id="ft-input-${q.id}" placeholder="Scrie răspunsul...">`;
        }
        html += `<div class="ft-feedback" id="ft-fb-${q.id}"></div></div>`;
    });
    html += `</div>
        <div class="ft-controls">
            <button class="btn btn-check" onclick="checkFinalTest()">🎯 Verifică TOT testul</button>
            <button class="btn btn-reset" onclick="resetFinalTest()">↻ Reia testul</button>
        </div>
        <div class="ft-score" id="ft-score"></div>`;
    container.innerHTML = html;
}

function checkFinalTest() {
    let correct = 0;
    finalTestData.forEach(q => {
        const fb = document.getElementById(`ft-fb-${q.id}`);
        if (!fb) return;
        let userOk = false;
        if (q.type === 'mc') {
            const checked = document.querySelector(`input[name="ft-${q.id}"]:checked`);
            if (checked && parseInt(checked.value) === q.correctIndex) userOk = true;
        } else if (q.type === 'fill') {
            const inp = document.getElementById(`ft-input-${q.id}`);
            if (inp && q.accept.some(a => normalizeAnswerFT(a) === normalizeAnswerFT(inp.value))) userOk = true;
        }
        fb.className = userOk ? 'ft-feedback correct' : 'ft-feedback incorrect';
        fb.innerHTML = userOk ? `✓ Corect!` : `✗ Răspuns corect: <strong>${q.correct}</strong>`;
        if (userOk) correct++;
    });
    const pct = Math.round((correct / finalTestData.length) * 100);
    const scoreEl = document.getElementById('ft-score');
    if (!scoreEl) return;
    let msg = '';
    if (pct === 100) msg = `🏆 ${correct}/25 (100%) — PERFECT! O gură curată, fără greș!`;
    else if (pct >= 80) msg = `🎉 ${correct}/25 (${pct}%) — Foarte bine!`;
    else if (pct >= 60) msg = `💪 ${correct}/25 (${pct}%) — Bine.`;
    else msg = `📚 ${correct}/25 (${pct}%) — Mai exersează.`;
    scoreEl.textContent = msg;
    scoreEl.className = 'ft-score ' + (pct >= 80 ? 'score-high' : pct >= 60 ? 'score-mid' : 'score-low');
}

function resetFinalTest() {
    finalTestData.forEach(q => {
        const fb = document.getElementById(`ft-fb-${q.id}`);
        if (fb) { fb.className = 'ft-feedback'; fb.innerHTML = ''; }
        if (q.type === 'mc') {
            document.querySelectorAll(`input[name="ft-${q.id}"]`).forEach(r => r.checked = false);
        } else {
            const inp = document.getElementById(`ft-input-${q.id}`);
            if (inp) inp.value = '';
        }
    });
    const scoreEl = document.getElementById('ft-score');
    if (scoreEl) { scoreEl.textContent = ''; scoreEl.className = 'ft-score'; }
}

buildFinalTest();
