// ============================================
// DIALOGS.JS — Pflege 26: Mundpflege & Zahnpflege
// 2 dialoguri (Zähne putzen am Morgen + Die Zahnprothese)
// Personaje: Andreea + Frau Müller · FĂRĂ personaj nou
// Claudia Toth · Annettes Deutschkurs · A2.1
// ============================================

// ============================================
// DIALOG 1: „Zähne putzen am Morgen" — Andreea + Frau Müller
// 10 replici, ~60 sec — rutina de dimineață + reflexive Dativ (sich/Ihnen die Zähne)
// ============================================
const dialog1Data = {
    id: 'dialog1',
    title: 'Zähne putzen am Morgen',
    context: 'E dimineață. Andreea o ajută pe Frau Müller la spălatul dinților, fiindcă azi îi tremură mâinile. Observă reflexivele cu Dativ: „Putzen Sie sich die Zähne", „Ich putze Ihnen die Zähne", „Spülen Sie sich den Mund aus".',
    audioFile: 'audio/dialog-01.mp3',
    totalDuration: 60,
    replici: [
        { id: 1, speaker: 'andreea',     start: 0,  duration: 6, de: 'Guten Morgen, Frau Müller! Zeit für die Zahnpflege.', ro: 'Bună dimineața, Frau Müller! E timpul pentru îngrijirea dinților.' },
        { id: 2, speaker: 'frau-muller', start: 6,  duration: 3, de: 'Schon wieder?', ro: 'Iar?' },
        { id: 3, speaker: 'andreea',     start: 9,  duration: 8, de: 'Ja, morgens und abends. Putzen Sie sich bitte die Zähne.', ro: 'Da, dimineața și seara. Spălați-vă pe dinți, vă rog.' },
        { id: 4, speaker: 'frau-muller', start: 17, duration: 5, de: 'Meine Hände zittern heute.', ro: 'Mâinile îmi tremură azi.' },
        { id: 5, speaker: 'andreea',     start: 22, duration: 8, de: 'Kein Problem, ich helfe Ihnen. Hier ist die weiche Zahnbürste.', ro: 'Nicio problemă, vă ajut. Iată periuța moale.' },
        { id: 6, speaker: 'frau-muller', start: 30, duration: 4, de: 'Nicht zu fest, bitte.', ro: 'Nu prea tare, vă rog.' },
        { id: 7, speaker: 'andreea',     start: 34, duration: 8, de: 'Ganz sanft. Ich putze Ihnen die Zähne vorsichtig.', ro: 'Foarte blând. Vă spăl dinții cu grijă.' },
        { id: 8, speaker: 'frau-muller', start: 42, duration: 3, de: 'Und jetzt?', ro: 'Și acum?' },
        { id: 9, speaker: 'andreea',     start: 45, duration: 7, de: 'Jetzt spülen Sie sich den Mund aus.', ro: 'Acum clătiți-vă gura.' },
        { id: 10, speaker: 'frau-muller', start: 52, duration: 6, de: 'Ah, das fühlt sich frisch an.', ro: 'A, mă simt proaspătă.' }
    ]
};

// ============================================
// DIALOG 2: „Die Zahnprothese" — Andreea + Frau Müller
// 10 replici, ~62 sec — îngrijirea protezei seara (herausnehmen, Glas mit Wasser, niemals heiß)
// ============================================
const dialog2Data = {
    id: 'dialog2',
    title: 'Die Zahnprothese',
    context: 'Seara, înainte de culcare. Andreea o ajută pe Frau Müller cu proteza dentară: o scoate, o curăță cu periuța de proteză și o pune în paharul cu apă rece — niciodată în apă fierbinte. Verifică și dacă gura doare (Druckstellen).',
    audioFile: 'audio/dialog-02.mp3',
    totalDuration: 62,
    replici: [
        { id: 1, speaker: 'andreea',     start: 0,  duration: 8, de: 'Frau Müller, vor dem Schlafen kümmern wir uns um die Prothese.', ro: 'Frau Müller, înainte de culcare ne ocupăm de proteză.' },
        { id: 2, speaker: 'frau-muller', start: 8,  duration: 5, de: 'Muss ich sie herausnehmen?', ro: 'Trebuie să o scot?' },
        { id: 3, speaker: 'andreea',     start: 13, duration: 8, de: 'Ja, nachts kommt die Prothese heraus. Das ist gesünder.', ro: 'Da, noaptea proteza se scoate. E mai sănătos.' },
        { id: 4, speaker: 'frau-muller', start: 21, duration: 3, de: 'Hier ist sie.', ro: 'Iat-o.' },
        { id: 5, speaker: 'andreea',     start: 24, duration: 7, de: 'Danke. Ich reinige sie mit der Prothesenbürste.', ro: 'Mulțumesc. O curăț cu periuța de proteză.' },
        { id: 6, speaker: 'frau-muller', start: 31, duration: 4, de: 'Und wohin damit?', ro: 'Și unde o pun?' },
        { id: 7, speaker: 'andreea',     start: 35, duration: 8, de: 'In das Glas mit Wasser. Niemals in heißes Wasser!', ro: 'În paharul cu apă. Niciodată în apă fierbinte!' },
        { id: 8, speaker: 'frau-muller', start: 43, duration: 3, de: 'Und mein Mund?', ro: 'Și gura mea?' },
        { id: 9, speaker: 'andreea',     start: 46, duration: 9, de: 'Jetzt spülen Sie sich den Mund aus. Tut etwas weh?', ro: 'Acum clătiți-vă gura. Vă doare ceva?' },
        { id: 10, speaker: 'frau-muller', start: 55, duration: 7, de: 'Nein, alles gut. Danke, Andreea.', ro: 'Nu, totul bine. Mulțumesc, Andreea.' }
    ]
};

// ============================================
// BUILD DIALOG FUNCTION
// ============================================
function buildDialog(dialogData, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `
        <div class="dialog-container">
            <div class="dialog-context">${dialogData.context}</div>

            <div class="dialog-audio-player">
                <button class="audio-btn dialog-play-btn" id="btn-${dialogData.id}-audio" onclick="toggleDialogAudio('${dialogData.id}')">▶</button>
                <audio id="${dialogData.id}-audio" preload="metadata"><source src="${dialogData.audioFile}" type="audio/mpeg"></audio>
                <span class="dialog-time" id="${dialogData.id}-time">0:00 / ${formatDialogTime(dialogData.totalDuration)}</span>
                <span class="dialog-hint">▶ Ascultă tot dialogul (${dialogData.totalDuration}s)</span>
            </div>

            <div class="dialog-replici">`;

    dialogData.replici.forEach((r, i) => {
        let speakerClass, speakerName, avatarContent, speechClass;

        if (r.speaker === 'andreea') {
            speakerClass = 'character-andreea';
            speakerName = 'Andreea';
            avatarContent = '<img src="images/andreea.png" alt="Andreea">';
            speechClass = 'speech-andreea';
        } else if (r.speaker === 'frau-muller') {
            speakerClass = 'character-frau-mueller';
            speakerName = 'Frau Müller';
            avatarContent = '<span class="face">👵</span>';
            speechClass = 'speech-frau-mueller';
        }

        const isEmojiAvatar = ['frau-muller'].includes(r.speaker);

        html += `
            <div class="dialog-reply ${speakerClass}" id="${dialogData.id}-reply-${r.id}" data-start="${r.start}" data-duration="${r.duration}">
                <div class="character-avatar ${isEmojiAvatar ? r.speaker + '-avatar' : ''}">${avatarContent}</div>
                <div class="speech-bubble ${speechClass}">
                    <div class="speaker-name speaker-${r.speaker}">${i + 1}. ${speakerName}</div>
                    <div class="speech-de">🇩🇪 ${r.de}</div>
                    <div class="speech-ro">🇷🇴 ${r.ro}</div>
                </div>
            </div>`;
    });

    html += `
            </div>
        </div>`;

    container.innerHTML = html;
}

function formatDialogTime(s) {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
}

function toggleDialogAudio(dialogId) {
    const audio = document.getElementById(`${dialogId}-audio`);
    const btn = document.getElementById(`btn-${dialogId}-audio`);
    if (!audio || !btn) return;

    ['dialog1', 'dialog2'].forEach(other => {
        if (other !== dialogId) {
            const otherAudio = document.getElementById(`${other}-audio`);
            const otherBtn = document.getElementById(`btn-${other}-audio`);
            if (otherAudio && !otherAudio.paused) {
                otherAudio.pause();
                if (otherBtn) otherBtn.textContent = '▶';
            }
        }
    });

    if (audio.paused) {
        audio.play().then(() => { btn.textContent = '⏸'; }).catch(() => {});
    } else {
        audio.pause();
        btn.textContent = '▶';
    }
}

function initDialogSync(dialogData) {
    const audio = document.getElementById(`${dialogData.id}-audio`);
    if (!audio) return;

    const timeEl = document.getElementById(`${dialogData.id}-time`);

    audio.addEventListener('timeupdate', () => {
        const t = audio.currentTime;
        if (timeEl) timeEl.textContent = `${formatDialogTime(t)} / ${formatDialogTime(audio.duration || dialogData.totalDuration)}`;

        dialogData.replici.forEach(r => {
            const el = document.getElementById(`${dialogData.id}-reply-${r.id}`);
            if (!el) return;
            const isActive = t >= r.start && t < r.start + r.duration;
            el.classList.toggle('active-reply', isActive);
        });
    });

    audio.addEventListener('ended', () => {
        const btn = document.getElementById(`btn-${dialogData.id}-audio`);
        if (btn) btn.textContent = '▶';
        dialogData.replici.forEach(r => {
            const el = document.getElementById(`${dialogData.id}-reply-${r.id}`);
            if (el) el.classList.remove('active-reply');
        });
    });
}

buildDialog(dialog1Data, 'dialog1-container');
buildDialog(dialog2Data, 'dialog2-container');

if (document.readyState !== 'loading') {
    initDialogSync(dialog1Data);
    initDialogSync(dialog2Data);
} else {
    document.addEventListener('DOMContentLoaded', () => {
        initDialogSync(dialog1Data);
        initDialogSync(dialog2Data);
    });
}
