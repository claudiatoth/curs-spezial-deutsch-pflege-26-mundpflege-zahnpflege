// ============================================
// FLASHCARDS — Pflege 26: Mundpflege & Zahnpflege
// 48 carduri în 6 categorii (8 fiecare)
// Claudia Toth · Annettes Deutschkurs · A2.1
// ============================================

const flashcardsData = [
    // === 1. MUND GRUNDLAGEN (8) ===
    { de: "die Mundpflege", ro: "🦷 îngrijirea gurii", audio: "audio/letters/mundpflege.wav" },
    { de: "die Zahnpflege", ro: "🪥 îngrijirea dinților", audio: "audio/letters/zahnpflege.wav" },
    { de: "der Mund", ro: "👄 gura", audio: "audio/letters/mund.wav" },
    { de: "die Zähne", ro: "🦷 dinții (sg. der Zahn)", audio: "audio/letters/zaehne.wav" },
    { de: "das Zahnfleisch", ro: "🩷 gingia", audio: "audio/letters/zahnfleisch.wav" },
    { de: "die Zunge", ro: "👅 limba", audio: "audio/letters/zunge.wav" },
    { de: "die Lippen", ro: "👄 buzele", audio: "audio/letters/lippen.wav" },
    { de: "der Speichel", ro: "💧 saliva", audio: "audio/letters/speichel.wav" },

    // === 2. ZÄHNE PUTZEN (8) ===
    { de: "die Zahnbürste", ro: "🪥 periuța de dinți", audio: "audio/letters/zahnbuerste.wav" },
    { de: "die Zahnpasta", ro: "🧴 pasta de dinți", audio: "audio/letters/zahnpasta.wav" },
    { de: "der Zahnputzbecher", ro: "🥛 paharul pentru spălat pe dinți", audio: "audio/letters/zahnputzbecher.wav" },
    { de: "die Zahnseide", ro: "🧵 ața dentară", audio: "audio/letters/zahnseide.wav" },
    { de: "putzen", ro: "🪥 a spăla (peria) dinții", audio: "audio/letters/putzen.wav" },
    { de: "ausspülen", ro: "💦 a clăti (gura)", audio: "audio/letters/ausspuelen.wav" },
    { de: "weich", ro: "🪶 moale (periuța)", audio: "audio/letters/weich.wav" },
    { de: "zweimal täglich", ro: "2️⃣ de două ori pe zi", audio: "audio/letters/zweimal-taeglich.wav" },

    // === 3. ZAHNPROTHESE (8) ===
    { de: "die Zahnprothese", ro: "🦷 proteza dentară", audio: "audio/letters/zahnprothese.wav" },
    { de: "das Gebiss", ro: "🦷 dantura (mobilă)", audio: "audio/letters/gebiss.wav" },
    { de: "herausnehmen", ro: "✋ a scoate (din gură)", audio: "audio/letters/herausnehmen.wav" },
    { de: "die Prothesenbürste", ro: "🪥 periuța pentru proteză", audio: "audio/letters/prothesenbuerste.wav" },
    { de: "die Reinigungstablette", ro: "💊 tableta de curățare (efervescentă)", audio: "audio/letters/reinigungstablette.wav" },
    { de: "die Haftcreme", ro: "🧴 crema adezivă (fixează proteza)", audio: "audio/letters/haftcreme.wav" },
    { de: "die Druckstelle", ro: "🔴 punctul de presiune (rană de la proteză)", audio: "audio/letters/druckstelle.wav" },
    { de: "das Glas mit Wasser", ro: "🥛 paharul cu apă (NU fierbinte!)", audio: "audio/letters/glas-mit-wasser.wav" },

    // === 4. MUNDPROBLEME (8) ===
    { de: "der trockene Mund", ro: "🏜️ gura uscată", audio: "audio/letters/trockener-mund.wav" },
    { de: "der Mundgeruch", ro: "👃 halena (respirație urât mirositoare)", audio: "audio/letters/mundgeruch.wav" },
    { de: "die Aphte", ro: "⚪ afta (rană mică în gură)", audio: "audio/letters/aphte.wav" },
    { de: "der Soor", ro: "🚨 candidoza (strat alb care nu se șterge → medic)", audio: "audio/letters/soor.wav" },
    { de: "das Zahnfleischbluten", ro: "🩸 sângerarea gingiei", audio: "audio/letters/zahnfleischbluten.wav" },
    { de: "die Zahnschmerzen", ro: "😣 durerea de dinți", audio: "audio/letters/zahnschmerzen.wav" },
    { de: "der Zahnarzt", ro: "🦷 dentistul", audio: "audio/letters/zahnarzt.wav" },
    { de: "die wunde Stelle", ro: "🔴 rana (locul dureros)", audio: "audio/letters/wunde-stelle.wav" },

    // === 5. REFLEXIVE DATIV (8) ===
    { de: "Ich putze mir die Zähne.", ro: "🪥 Îmi spăl dinții. (mir = Dativ)", audio: "audio/letters/putze-mir-zaehne.wav" },
    { de: "Ich wasche mir die Hände.", ro: "🧼 Îmi spăl mâinile. (mir = Dativ)", audio: "audio/letters/wasche-mir-haende.wav" },
    { de: "Ich spüle mir den Mund aus.", ro: "💦 Îmi clătesc gura. (mir = Dativ)", audio: "audio/letters/spuele-mir-mund.wav" },
    { de: "Putzen Sie sich die Zähne.", ro: "🪥 Spălați-vă pe dinți. (sich = Dativ)", audio: "audio/letters/putzen-sie-sich.wav" },
    { de: "mir", ro: "➡️ mie (Dativ reflexiv: ich)", audio: "audio/letters/mir.wav" },
    { de: "dir", ro: "➡️ ție (Dativ reflexiv: du)", audio: "audio/letters/dir.wav" },
    { de: "sich", ro: "➡️ -și (Dativ reflexiv: Sie/er/sie)", audio: "audio/letters/sich.wav" },
    { de: "Ich wasche mich.", ro: "🧼 Mă spăl. (mich = Akkusativ, fără obiect)", audio: "audio/letters/wasche-mich.wav" },

    // === 6. SÄTZE (8) ===
    { de: "Zeit für die Zahnpflege.", ro: "⏰ E timpul pentru îngrijirea dinților.", audio: "audio/letters/zeit-zahnpflege.wav" },
    { de: "Die Zahnbürste ist weich.", ro: "🪥 Periuța e moale.", audio: "audio/letters/zahnbuerste-weich.wav" },
    { de: "Niemals heißes Wasser!", ro: "🚫 Niciodată apă fierbinte!", audio: "audio/letters/niemals-heiss.wav" },
    { de: "Tut etwas weh?", ro: "❓ Vă doare ceva?", audio: "audio/letters/tut-weh.wav" },
    { de: "Das fühlt sich frisch an.", ro: "🌿 Mă simt proaspătă.", audio: "audio/letters/fuehlt-frisch.wav" },
    { de: "Die Prothese kommt ins Glas.", ro: "🥛 Proteza se pune în pahar.", audio: "audio/letters/prothese-glas.wav" },
    { de: "Bitte ausspülen.", ro: "💦 Clătiți, vă rog.", audio: "audio/letters/bitte-ausspuelen.wav" },
    { de: "Alles gut.", ro: "✅ Totul e bine.", audio: "audio/letters/alles-gut.wav" }
];

let currentFlashcardIndex = 0;
let isFlipped = false;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="flashcard-intro">
            <p>🎯 <strong>48 flashcards în 6 categorii</strong> — Mund Grundlagen · Zähne putzen · Zahnprothese · Mundprobleme · reflexive Dativ · Sätze.</p>
        </div>
        <div class="flashcard-wrapper">
            <div class="flashcard" id="flashcard" onclick="flipFlashcard()">
                <button class="flashcard-audio-btn" id="flashcard-audio-btn" onclick="event.stopPropagation(); playFlashcardAudio()" aria-label="Asculta pronunția">🔊</button>
                <div class="flashcard-content">
                    <div class="de" id="flashcard-de"></div>
                    <div class="ro" id="flashcard-ro"></div>
                </div>
                <div class="flashcard-hint">👆 Apasă cardul pentru traducere · 🔊 pentru pronunție</div>
                <audio id="flashcard-audio" preload="none"></audio>
            </div>
            <div class="flashcard-controls">
                <button class="flashcard-btn" onclick="prevFlashcard()">← Înapoi</button>
                <span class="flashcard-counter" id="flashcard-counter">1 / 48</span>
                <button class="flashcard-btn" onclick="nextFlashcard()">Înainte →</button>
            </div>
            <div class="flashcard-progress">
                <div class="flashcard-progress-fill" id="flashcard-progress-fill"></div>
            </div>
        </div>
    `;
    showFlashcard(0);
}

function showFlashcard(index) {
    const card = flashcardsData[index];
    if (!card) return;
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const progress = document.getElementById('flashcard-progress-fill');
    const audio = document.getElementById('flashcard-audio');
    if (de) de.textContent = card.de;
    if (ro) ro.textContent = card.ro;
    if (audio && card.audio) { audio.pause(); audio.src = card.audio; audio.load(); }
    if (counter) counter.textContent = `${index + 1} / ${flashcardsData.length}`;
    if (progress) progress.style.width = ((index + 1) / flashcardsData.length * 100) + '%';
    isFlipped = false;
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.remove('flipped');
}

function playFlashcardAudio() {
    const audio = document.getElementById('flashcard-audio');
    if (!audio || !audio.src) return;
    audio.currentTime = 0;
    audio.play().catch(() => {});
}

function flipFlashcard() {
    isFlipped = !isFlipped;
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.toggle('flipped');
}

function nextFlashcard() {
    currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcardsData.length;
    showFlashcard(currentFlashcardIndex);
}

function prevFlashcard() {
    currentFlashcardIndex = (currentFlashcardIndex - 1 + flashcardsData.length) % flashcardsData.length;
    showFlashcard(currentFlashcardIndex);
}

buildFlashcards();
