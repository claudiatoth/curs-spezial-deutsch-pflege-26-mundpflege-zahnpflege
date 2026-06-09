// ============================================
// PDF BUILDER — Pflege L26: Mundpflege & Zahnpflege
// Claudia Toth · Annettes Deutschkurs · A2.1
// ============================================
(function () {
    if (typeof document === 'undefined') return;
    try { buildPDF(); } catch (e) {
        const r = document.getElementById('pdf-content');
        if (r) r.innerHTML = '<pre style="color:red">ERROR: ' + e.message + '\n' + e.stack + '</pre>';
    }

    function buildPDF() {
        const root = document.getElementById('pdf-content');
        if (!root) return;
        root.innerHTML = buildPflegeWarn() + buildCast() + buildTheory() + buildDialogs() + buildExercises() + buildFlashcards();
    }

    function buildPflegeWarn() {
        return `<div class="pflege-warn">
            <h4>⚠️ Notă de siguranță — citește înainte</h4>
            <p>Această lecție te pregătește <strong>LINGVISTIC</strong> pentru îngrijirea zilnică a gurii (spălatul dinților, proteza, observarea problemelor). <strong>NU înlocuiește</strong> formarea practică. 🦷 Igiena simplă e treaba ta; problemele sunt ale specialistului: <strong>Soor</strong> (strat alb) → Hausarzt · proteză care nu se potrivește / Druckstellen / dureri de dinți → <strong>Zahnarzt</strong>. 🚨 La proteză: NICIODATĂ apă fierbinte (se deformează). La pacienții imobilizați: foarte puțină apă (pericol de aspirație). Tu observi, documentezi, anunți.</p>
        </div>`;
    }

    function buildCast() {
        return `<div class="cast-banner">
            <h4>👋 Cast „Annettes Deutschkurs" · Andreea o ajută pe Frau Müller la spălatul dinților și la îngrijirea protezei</h4>
            <div class="cast-grid">
                <div class="cast-card"><img src="images/andreea.png" alt="Andreea"><div class="name">Andreea 🇷🇴</div><div class="detail">Pflegerin · ajută</div></div>
                <div class="cast-card"><div class="frau-mueller-pdf-avatar">👵</div><div class="name">Frau Müller</div><div class="detail">Pacientă · proteză</div></div>
                <div class="cast-card"><img src="images/annette.png" alt="Annette"><div class="name">Annette</div><div class="detail">Profesoara · Berlin</div></div>
                <div class="cast-card"><img src="images/mihai.png" alt="Mihai"><div class="name">Mihai</div><div class="detail">Bucătar · Potsdam</div></div>
                <div class="cast-card"><img src="images/florian.png" alt="Florian"><div class="name">Florian</div><div class="detail">Doctor · Berlin</div></div>
                <div class="cast-card"><img src="images/carolina.png" alt="Carolina"><div class="name">Carolina</div><div class="detail">Fotografă · Berlin</div></div>
            </div>
        </div>`;
    }

    function buildTheory() {
        if (typeof theoryHTML !== 'string') return '';
        let t = theoryHTML;
        t = t.replace(/<div class="lesson-audio">[\s\S]*?<\/span>\s*<\/div>/g, '');
        t = t.replace(/<button[^>]*onclick="[^"]*"[^>]*>[^<]*<\/button>/g, '');
        t = t.replace(/<audio[^>]*>[\s\S]*?<\/audio>/g, '');
        t = t.replace(/<div class="subsection-header"[^>]*>\s*<h4>([^<]+)<\/h4>\s*<span class="sub-arrow">[^<]*<\/span>\s*<\/div>/g, '<h2 class="sub-chapter">$1</h2>');
        t = t.replace(/<div class="subsection">/g, '<div class="theory-box">');
        t = t.replace(/<div class="sub-section-content"[^>]*>/g, '<div>');
        t = t.replace(/<div class="capcana-box">/g, '<div class="theory-box warn-box">');
        t = t.replace(/<div class="grammar-tip">/g, '<div class="theory-box info-box">');
        t = t.replace(/<div class="final-note-box">/g, '<div class="theory-box warn-box">');
        return `<h1 class="chapter new-section">📘 1. Teorie — Mundpflege + Zähne putzen + Zahnprothese + Mundprobleme + reflexive Verben mit Dativ + Schwerkranke</h1>` + t;
    }

    function buildDialogs() {
        let html = `<h1 class="chapter new-section">🎬 2. Dialoguri — Zähne putzen am Morgen + Die Zahnprothese</h1>`;
        [dialog1Data, dialog2Data].forEach((d, idx) => {
            if (!d) return;
            html += `<div class="ex-block">
                <h3>${idx === 0 ? 'Dialog 1' : 'Dialog 2'}: „${d.title}"</h3>
                <div class="instruction">${d.context}</div>
                <div class="dialog-pdf-card">`;
            d.replici.forEach((r, ri) => {
                let spkrName;
                if (r.speaker === 'andreea') spkrName = '🧑‍⚕️ Andreea';
                else if (r.speaker === 'frau-muller') spkrName = '👵 Frau Müller';
                html += `<div class="reply"><span class="spkr">${ri + 1}. ${spkrName}:</span> <span class="de"> ${r.de}</span><br><span class="ro">🇷🇴 ${r.ro}</span></div>`;
            });
            html += `</div></div>`;
        });
        return html;
    }

    function buildExercises() {
        let html = `<h1 class="chapter new-section">📝 3. Exerciții — cu rezolvări complete</h1>`;

        if (typeof ex1Data !== 'undefined') {
            html += `<div class="ex-block"><h3>Übung 1: Match — Mund + Zähne + Prothese</h3>
                <div class="instruction">Pentru fiecare cuvânt, scrii traducerea în RO.</div>
                <div class="rezolvare-banner">✓ Rezolvare</div>
                <table><thead><tr><th style="width:42%">🇩🇪 Germană</th><th>🇷🇴 Română</th></tr></thead><tbody>`;
            ex1Data.forEach((it, i) => {
                html += `<tr><td class="verb">${i + 1}. ${it.de}</td><td class="ro-text">${it.correct}</td></tr>`;
            });
            html += `</tbody></table></div>`;
        }

        if (typeof ex2Data !== 'undefined') html += fillInBlock('Übung 2: 🌟 reflexive Verben mit Dativ (mir/sich)', 'Dacă e DEJA un obiect direct (die Zähne, die Hände) → reflexivul e Dativ (mir/dir/sich). Dacă reflexivul e SINGURUL obiect → Akkusativ (mich/dich).', ex2Data);
        if (typeof ex4Data !== 'undefined') html += fillInBlock('Übung 4: Prothese + Mundprobleme', 'De 2 ori/zi · periuță weich · proteza herausnehmen + Glas mit Wasser (🚨 NU heiß!) · Soor → Hausarzt · Druckstelle → Zahnarzt · imobilizat = Tupfer.', ex4Data);
        if (typeof ex5Data !== 'undefined') html += fillInBlock('Übung 5: Dialog Gap-Fill — Die Zahnprothese (Dialog 2)', 'Completează replicile lipsă din Dialog 2 (îngrijirea protezei + reflexiv Dativ).', ex5Data);

        if (typeof ex3Data !== 'undefined') {
            html += `<div class="ex-block"><h3>Übung 3: Audio Dictat — Mundpflege</h3>
                <div class="instruction">Ascultă și scrie ce auzi. (Audio disponibil online.)</div>
                <div class="rezolvare-banner">✓ Rezolvare</div>`;
            ex3Data.forEach((it, i) => {
                html += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-a">${it.correct}</div></div></div>`;
            });
            html += `</div>`;
        }

        if (typeof ex6Data !== 'undefined') {
            html += `<div class="ex-block"><h3>Übung 6: Traducere RO → DE</h3>
                <div class="instruction">Scrie propozițiile în germană. Atenție la reflexivele cu Dativ (mir/sich) vs Akkusativ (mich). Punctul final e opțional.</div>
                <div class="rezolvare-banner">✓ Rezolvare</div>
                <table><thead><tr><th style="width:42%">🇷🇴 Română</th><th>🇩🇪 Germană</th></tr></thead><tbody>`;
            ex6Data.forEach((it, i) => {
                html += `<tr><td class="ro-text">${i + 1}. ${it.ro}</td><td class="verb">${it.correct}</td></tr>`;
            });
            html += `</tbody></table></div>`;
        }

        html += `<div class="ex-block"><h3>✍️ Übung 7: Schreiben — Raport îngrijire gură pentru Petra</h3>
            <div class="instruction">Scrie-i Petrei un raport (5-8 propoziții): cum o ajuți la spălatul dinților (reflexiv Dativ), cum îngrijești proteza (seara, pahar cu apă, NU fierbinte), dacă ai observat probleme (Druckstellen, Soor), liniștește-o.</div>
            <div class="rezolvare-banner">📝 Model de răspuns</div>
            <p><em>Liebe Petra, ich möchte Ihnen kurz über die Mundpflege Ihrer Mutter berichten. Morgens und abends putzt sie sich die Zähne. Wenn ihre Hände zittern, putze ich ihr die Zähne ganz vorsichtig. Danach spült sie sich den Mund aus. Abends nehme ich die Prothese heraus und reinige sie. Die Prothese kommt in ein Glas mit Wasser — niemals in heißes Wasser. Ich habe keine Druckstellen und keinen Soor gesehen. Der Mund ist sauber und gesund. Machen Sie sich keine Sorgen. Liebe Grüße, Andreea.</em></p>
            <p class="ro-translation">🇷🇴 Dragă Petra, vreau să vă raportez pe scurt despre îngrijirea gurii mamei dvs. Dimineața și seara își spală dinții. Când îi tremură mâinile, îi spăl eu dinții cu mare grijă. Apoi își clătește gura. Seara scot proteza și o curăț. Proteza se pune într-un pahar cu apă — niciodată în apă fierbinte. Nu am văzut puncte de presiune și nici candidoză. Gura e curată și sănătoasă. Nu vă faceți griji. Cu drag, Andreea.</p>
            </div>`;

        return html;
    }

    function fillInBlock(title, instruction, data) {
        let h = `<div class="ex-block"><h3>${title}</h3><div class="instruction">${instruction}</div><div class="rezolvare-banner">✓ Rezolvare</div>`;
        data.forEach((it, i) => {
            const filled = it.sentence.replace(/_{2,}/g, `<strong style="color:#047857">${it.correct}</strong>`);
            h += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-q">${filled}</div>${it.translation ? `<div class="ex-explanation">🇷🇴 ${it.translation}</div>` : ''}</div></div>`;
        });
        return h + `</div>`;
    }

    function buildFlashcards() {
        const count = (typeof flashcardsData !== 'undefined') ? flashcardsData.length : 0;
        let html = `<h1 class="chapter new-section">📇 4. Vocabular complet (Flashcards)</h1>
            <p style="margin-bottom:10px">Cele <strong>${count} carduri</strong> grupate pe 6 categorii: Mund Grundlagen · Zähne putzen · Zahnprothese · Mundprobleme · reflexive Dativ · Sätze.</p>
            <div class="flashcards-grid">`;
        if (typeof flashcardsData !== 'undefined') {
            flashcardsData.forEach(card => {
                html += `<div class="fc-row"><span class="de">${card.de}</span><span class="ro">— ${card.ro}</span></div>`;
            });
        }
        html += `</div>`;
        return html;
    }
})();
