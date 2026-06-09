// ============================================
// THEORY.JS — Pflege 26: Mundpflege & Zahnpflege
// Warum Mundpflege + Zähne putzen + Zahnprothese + Mundprobleme + reflexive Verben mit Dativ (STAR) + Mundpflege bei Schwerkranken
// Claudia Toth · Annettes Deutschkurs · A2.1
// ============================================

const theoryHTML = `
<div class="theory-intro">
  <h4>🦷 Mundpflege & Zahnpflege — gură curată, sănătate bună</h4>
  <p>Îngrijirea gurii pare un lucru mic — dar e una dintre cele mai importante sarcini zilnice. O gură curată înseamnă pacient care mănâncă cu plăcere, vorbește bine, nu are dureri — și, foarte important, <strong>nu face pneumonie</strong>. La vârstnici, bacteriile din gură pot ajunge în plămâni și pot provoca o infecție gravă.</p>
  <p>Și mai e ceva specific bătrânilor: <strong>proteza dentară</strong> (die Zahnprothese). Trebuie să știi cum o scoți, o cureți și o păstrezi.</p>
  <p>Gramatică nouă: <strong>verbe reflexive cu Dativ</strong> — <em>„Ich putze <strong>mir</strong> die Zähne."</em> (Îmi spăl dinții). Când în propoziție e deja un obiect (die Zähne), pronumele reflexiv trece la Dativ: mir, dir, sich.</p>
</div>

<div class="theory-pillars">
  <h4>🏛️ Cei 6 piloni</h4>
  <div class="pillars-grid">
    <div class="pillar-card">
      <div class="pillar-icon">❤️</div>
      <div class="pillar-title">Warum wichtig</div>
      <div class="pillar-text">Mâncat · vorbit · pneumonie.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🪥</div>
      <div class="pillar-title">Zähne putzen</div>
      <div class="pillar-text">Periuța · pasta · de 2 ori/zi.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🦷</div>
      <div class="pillar-title">Zahnprothese</div>
      <div class="pillar-text">Scoatere · curățare · noaptea.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🔴</div>
      <div class="pillar-title">Mundprobleme</div>
      <div class="pillar-text">Gură uscată · Soor · afte.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🗣️</div>
      <div class="pillar-title">reflexiv Dativ</div>
      <div class="pillar-text">„Ich putze mir die Zähne."</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🛏️</div>
      <div class="pillar-title">Schwerkranke</div>
      <div class="pillar-text">Tampoane · buze · medic.</div>
    </div>
  </div>
</div>

<!-- ============================================
     SUB 1 — Warum Mundpflege wichtig ist
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(0)">
    <h4>1️⃣ Warum Mundpflege wichtig ist — de ce contează</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-0">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-1" onclick="toggleAudio(event, 'audio-1')">▶</button>
        <audio id="audio-1" preload="none"><source src="audio/01-warum.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Îngrijirea gurii nu e doar despre un zâmbet frumos. E despre sănătate și demnitate.</p>

    <h5 style="color:#065f46; margin-top:18px;">🦷 Vocabular de bază</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Germană</th><th>Română</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>die Mundpflege</strong></td><td>îngrijirea gurii</td></tr>
          <tr><td><strong>die Zahnpflege</strong></td><td>îngrijirea dinților</td></tr>
          <tr><td><strong>der Mund</strong></td><td>gura</td></tr>
          <tr><td><strong>die Zähne</strong> (sg. der Zahn)</td><td>dinții (sg. dintele)</td></tr>
          <tr><td><strong>das Zahnfleisch</strong></td><td>gingia</td></tr>
          <tr><td><strong>die Zunge</strong></td><td>limba</td></tr>
          <tr><td><strong>die Lippen</strong></td><td>buzele</td></tr>
        </tbody>
      </table>
    </div>

    <div class="capcana-box">
      <h5>🚨 De ce e atât de importantă — pneumonia</h5>
      <p>La un pacient vârstnic sau imobilizat, bacteriile dintr-o gură murdară pot ajunge în plămâni (mai ales dacă înghite greșit — Aspiration) și pot provoca o <strong>pneumonie</strong> (die Lungenentzündung) — o boală care poate fi mortală la bătrâni. De aceea Mundpflege NU e opțională. Pe lângă asta: o gură sănătoasă înseamnă că pacientul <strong>mănâncă fără durere</strong>, <strong>vorbește clar</strong> și <strong>simte gustul</strong> mâncării. E sănătate și demnitate în același timp.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 2 — Zähne putzen
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(1)">
    <h4>2️⃣ Zähne putzen — spălatul dinților</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-1">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-2" onclick="toggleAudio(event, 'audio-2')">▶</button>
        <audio id="audio-2" preload="none"><source src="audio/02-putzen.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Dinții se spală <strong>cel puțin de două ori pe zi</strong> — dimineața și seara. Dacă pacientul nu poate singur, îl ajuți blând.</p>

    <h5 style="color:#065f46; margin-top:18px;">🪥 Materiale + acțiuni</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Germană</th><th>Română</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>die Zahnbürste</strong> (weich)</td><td>periuța de dinți (moale)</td></tr>
          <tr><td><strong>die Zahnpasta</strong></td><td>pasta de dinți</td></tr>
          <tr><td><strong>der Zahnputzbecher</strong></td><td>paharul pentru spălat pe dinți</td></tr>
          <tr><td><strong>die Zahnseide</strong></td><td>ața dentară</td></tr>
          <tr><td><strong>putzen</strong></td><td>a spăla (periа) dinții</td></tr>
          <tr><td><strong>(den Mund) ausspülen</strong></td><td>a clăti (gura)</td></tr>
          <tr><td><strong>die Zunge reinigen</strong></td><td>a curăța limba</td></tr>
        </tbody>
      </table>
    </div>

    <div class="grammar-tip">
      <h5>💡 Cum ajuți + gramatica de azi</h5>
      <p>📌 Periuță <strong>moale</strong> (weich), mișcări blânde, și de la gingie spre dinte. 📌 Dacă pacientul poate ține periuța, îl lași și îl ghidezi — păstrează autonomia. 📌 La final, clătește gura. <br>
      🌟 Și fii atentă la propoziția: „<strong>Ich putze mir die Zähne</strong>." Îmi spăl dinții. Sau către pacient: „<strong>Putzen Sie sich die Zähne</strong>." Spălați-vă pe dinți. Vezi <strong>mir</strong> și <strong>sich</strong>? Asta e gramatica vedetă — verbe reflexive cu Dativ.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 3 — Die Zahnprothese
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(2)">
    <h4>3️⃣ Die Zahnprothese — proteza dentară</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-2">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-3" onclick="toggleAudio(event, 'audio-3')">▶</button>
        <audio id="audio-3" preload="none"><source src="audio/03-prothese.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Mulți vârstnici au o proteză (die Zahnprothese / das Gebiss). Și ea trebuie curățată în fiecare zi — la fel ca dinții naturali.</p>

    <h5 style="color:#065f46; margin-top:18px;">🦷 Vocabular proteză</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Germană</th><th>Română</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>die Zahnprothese · das Gebiss</strong></td><td>proteza dentară · dantura (mobilă)</td></tr>
          <tr><td><strong>die Teilprothese · die Vollprothese</strong></td><td>proteza parțială · totală</td></tr>
          <tr><td><strong>herausnehmen</strong></td><td>a scoate (din gură)</td></tr>
          <tr><td><strong>die Prothesenbürste</strong></td><td>periuța pentru proteză</td></tr>
          <tr><td><strong>die Reinigungstablette</strong></td><td>tableta de curățare (efervescentă)</td></tr>
          <tr><td><strong>die Haftcreme</strong></td><td>crema adezivă (fixează proteza)</td></tr>
          <tr><td><strong>die Druckstelle</strong></td><td>punctul de presiune (rană de la proteză)</td></tr>
        </tbody>
      </table>
    </div>

    <div class="capcana-box">
      <h5>🚨 Reguli pentru proteză</h5>
      <p>📌 <strong>Seara</strong>, proteza se scoate (herausnehmen), se curăță cu periuță și se pune <strong>peste noapte într-un pahar cu apă rece</strong> (sau cu o Reinigungstablette). 🚫 NICIODATĂ în apă fierbinte — se deformează! 📌 Curăță și gura goală (gingia, limba) cât proteza e scoasă. 📌 Verifică dacă apar <strong>Druckstellen</strong> (răni roșii de la proteză) — dacă da, anunți; proteza trebuie ajustată de dentist. 📌 Dimineața, clătești proteza și o pui la loc (eventual cu Haftcreme).</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 4 — Mundprobleme
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(3)">
    <h4>4️⃣ Mundprobleme — problemele gurii</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-3">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-4" onclick="toggleAudio(event, 'audio-4')">▶</button>
        <audio id="audio-4" preload="none"><source src="audio/04-probleme.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">La fiecare îngrijire, te uiți în gură. Multe probleme se văd ușor — iar tu le prinzi din timp.</p>

    <h5 style="color:#065f46; margin-top:18px;">🔴 Probleme frecvente</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Germană</th><th>Română</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>der trockene Mund</strong></td><td>gura uscată (frecvent la vârstnici/medicație)</td></tr>
          <tr><td><strong>der Mundgeruch</strong></td><td>respirația urât mirositoare (halena)</td></tr>
          <tr><td><strong>die wunde Stelle · die Aphte</strong></td><td>rana în gură · afta</td></tr>
          <tr><td><strong>der Soor (Mundsoor)</strong></td><td>🚨 candidoza bucală (strat alb care NU se șterge)</td></tr>
          <tr><td><strong>das Zahnfleischbluten</strong></td><td>sângerarea gingiei</td></tr>
          <tr><td><strong>die Zahnschmerzen</strong></td><td>durerea de dinți</td></tr>
        </tbody>
      </table>
    </div>

    <div class="capcana-box">
      <h5>🚨🚨 Soor — strat alb pe limbă</h5>
      <p>Dacă vezi un <strong>strat alb</strong> pe limbă sau pe mucoasă care <strong>NU se șterge ușor</strong> (și sub el e roșu/dureros), poate fi <strong>Soor</strong> — o infecție cu ciuperci (candidoza), frecventă la vârstnici, după antibiotice sau la sistem imunitar slab. 🚫 NU încerci să-l freci forțat. → <strong>Anunți Hausarzt-ul</strong>; are nevoie de tratament antifungic. Pentru gura uscată: pacientul să bea apă des, gura să fie umezită. La dureri de dinți sau proteză care nu se potrivește → <strong>Zahnarzt</strong> (dentistul).</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 5 — GRAMATICA STAR: reflexive Verben mit Dativ
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(4)">
    <h4>5️⃣ 🌟 Gramatică — verbe reflexive cu Dativ („Ich putze mir die Zähne")</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-4">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-5" onclick="toggleAudio(event, 'audio-5')">▶</button>
        <audio id="audio-5" preload="none"><source src="audio/05-grammatik.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Știi deja reflexivul simplu: „Ich wasche <strong>mich</strong>." (Mă spăl.) Aici <strong>mich</strong> e Akkusativ — pronumele reflexiv e obiectul direct. Dar la igienă apare o variantă nouă: <strong>Dativ</strong>.</p>

    <div class="grammar-highlight" style="background:#ecfdf5; border:2px solid #047857; border-radius:10px; padding:14px 18px; margin:14px 0;">
      <p style="margin:0; font-size:1.02rem; color:#065f46; text-align:center;">Dacă e <strong>deja un obiect direct</strong> (die Zähne), reflexivul devine <strong>Dativ</strong>.</p>
      <p style="margin:6px 0 0; text-align:center; color:#047857;"><em>Ich putze <strong>mir</strong> die Zähne. · Ich wasche <strong>mir</strong> die Hände.</em></p>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">📐 Regula simplă</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Situație</th><th>Caz reflexiv</th><th>Exemplu</th></tr>
        </thead>
        <tbody>
          <tr><td>Reflexivul e SINGURUL obiect</td><td><strong>Akkusativ</strong> (mich)</td><td>Ich wasche <strong>mich</strong>.</td></tr>
          <tr><td>E deja un obiect direct (Akk)</td><td><strong>Dativ</strong> (mir)</td><td>Ich wasche <strong>mir</strong> die Hände.</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">📋 Pronumele reflexive Dativ</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Persoana</th><th>Dativ reflexiv</th><th>Exemplu</th></tr>
        </thead>
        <tbody>
          <tr><td>ich</td><td><strong>mir</strong></td><td>Ich putze <strong>mir</strong> die Zähne.</td></tr>
          <tr><td>du</td><td><strong>dir</strong></td><td>Putz <strong>dir</strong> die Zähne!</td></tr>
          <tr><td>Sie (politicos)</td><td><strong>sich</strong></td><td>Putzen Sie <strong>sich</strong> die Zähne.</td></tr>
          <tr><td>er / sie</td><td><strong>sich</strong></td><td>Sie putzt <strong>sich</strong> die Zähne.</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">🎯 Exemple din îngrijire</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Germană</th><th>Română</th></tr>
        </thead>
        <tbody>
          <tr><td>Ich putze <strong>mir</strong> die Zähne.</td><td>Îmi spăl dinții.</td></tr>
          <tr><td>Ich wasche <strong>mir</strong> die Hände.</td><td>Îmi spăl mâinile.</td></tr>
          <tr><td>Ich spüle <strong>mir</strong> den Mund aus.</td><td>Îmi clătesc gura.</td></tr>
          <tr><td>Putzen Sie <strong>sich</strong> bitte die Zähne.</td><td>Spălați-vă pe dinți, vă rog.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="capcana-box">
      <h5>🚨 Capcana — mir vs mich</h5>
      <p>Greșit: „Ich putze <strong>mich</strong> die Zähne." <br>
      Corect: „Ich putze <strong>mir</strong> die Zähne." <br>
      Trucul: întreabă-te „spăl CE?" → die Zähne (= obiectul direct, Akkusativ). Atunci „mie" (reflexivul) trece în <strong>Dativ</strong>: mir. Fără obiect direct → Akkusativ: „Ich wasche mich."</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 6 — Mundpflege bei Schwerkranken + Box
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(5)">
    <h4>6️⃣ Mundpflege bei Schwerkranken — la pacienți imobilizați</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-5">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-6" onclick="toggleAudio(event, 'audio-6')">▶</button>
        <audio id="audio-6" preload="none"><source src="audio/06-schwerkranke.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">La un pacient care nu poate scuipa, nu poate clăti sau e foarte slăbit, îngrijirea gurii se face altfel — cu mare grijă la înghițire.</p>

    <h5 style="color:#065f46; margin-top:18px;">🛏️ Cum procedezi</h5>
    <ul style="margin: 6px 0 0 22px;">
      <li>folosești <strong>tampoane umede</strong> (Tupfer) sau bețișoare moi, NU multă apă (pericol de aspirație)</li>
      <li>ștergi blând <strong>dinții, limba, mucoasa</strong>, gingia</li>
      <li>umezești <strong>buzele</strong> (Lippen) cu o cremă/balsam — buzele uscate crapă</li>
      <li>poziție corectă: capul ușor ridicat / pe o parte (recap L20), ca să nu se înece</li>
      <li>la pacientul inconștient: NU pui apă în gură; doar umezești cu tamponul</li>
    </ul>

    <div class="capcana-box">
      <h5>🦷 Box de siguranță — când chemi specialistul</h5>
      <p>Igiena simplă a gurii e treaba ta zilnică. Dar: <strong>Soor</strong> (strat alb) → Hausarzt · <strong>Druckstellen</strong> / proteză care nu se potrivește → Zahnarzt · <strong>Zahnschmerzen</strong>, dinte rupt, gingie umflată/sângerândă → Zahnarzt. Tu observi, documentezi, anunți. Nu tratezi tu infecțiile sau proteza.</p>
    </div>

    <div class="final-note-box">
      <h5>🌟 Cuvântul final — o gură curată e mai mult decât pare</h5>
      <p>Câteva minute de îngrijire a gurii dimineața și seara pot preveni o pneumonie, dureri și rușine. Pentru pacient, o gură curată și o proteză care stă bine înseamnă să mănânce cu plăcere, să zâmbească, să se simtă om. <em>„Ich putze mir die Zähne"</em> — un gest mic pe care, când pacientul nu mai poate, îl faci tu cu grijă. Asta e îngrijirea care se vede în fiecare zâmbet. 💚</p>
    </div>

  </div>
</div>
`;

function buildTheory() {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
}

buildTheory();
