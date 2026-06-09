# Generare WAV-uri Hedda pentru Pflege L26 - Mundpflege & Zahnpflege
# 10 dictat + 48 flashcards = 58 fisiere

$lessonPath = $PSScriptRoot
$audioDir = "$lessonPath\audio"
$lettersDir = "$audioDir\letters"

if (-not (Test-Path $audioDir)) { New-Item -ItemType Directory -Force -Path $audioDir | Out-Null }
if (-not (Test-Path $lettersDir)) { New-Item -ItemType Directory -Force -Path $lettersDir | Out-Null }

Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$synth.SelectVoice('Microsoft Hedda Desktop')
$synth.Rate = -1

# DICTAT (10)
$dictat = @(
    @{ file='dictat-01.wav'; text='die Zahnburste.' },
    @{ file='dictat-02.wav'; text='die Zahnpasta.' },
    @{ file='dictat-03.wav'; text='die Zahnprothese.' },
    @{ file='dictat-04.wav'; text='das Zahnfleisch.' },
    @{ file='dictat-05.wav'; text='putzen.' },
    @{ file='dictat-06.wav'; text='ausspulen.' },
    @{ file='dictat-07.wav'; text='der Soor.' },
    @{ file='dictat-08.wav'; text='die Reinigungstablette.' },
    @{ file='dictat-09.wav'; text='Ich putze mir die Zahne.' },
    @{ file='dictat-10.wav'; text='Putzen Sie sich die Zahne.' }
)

# FLASHCARDS (48)
$flashcards = @(
    # 1. Mund Grundlagen (8)
    @{ file='mundpflege.wav';           text='die Mundpflege.' },
    @{ file='zahnpflege.wav';           text='die Zahnpflege.' },
    @{ file='mund.wav';                 text='der Mund.' },
    @{ file='zaehne.wav';               text='die Zahne.' },
    @{ file='zahnfleisch.wav';          text='das Zahnfleisch.' },
    @{ file='zunge.wav';                text='die Zunge.' },
    @{ file='lippen.wav';               text='die Lippen.' },
    @{ file='speichel.wav';             text='der Speichel.' },

    # 2. Zähne putzen (8)
    @{ file='zahnbuerste.wav';          text='die Zahnburste.' },
    @{ file='zahnpasta.wav';            text='die Zahnpasta.' },
    @{ file='zahnputzbecher.wav';       text='der Zahnputzbecher.' },
    @{ file='zahnseide.wav';            text='die Zahnseide.' },
    @{ file='putzen.wav';               text='putzen.' },
    @{ file='ausspuelen.wav';           text='ausspulen.' },
    @{ file='weich.wav';                text='weich.' },
    @{ file='zweimal-taeglich.wav';     text='zweimal taglich.' },

    # 3. Zahnprothese (8)
    @{ file='zahnprothese.wav';         text='die Zahnprothese.' },
    @{ file='gebiss.wav';               text='das Gebiss.' },
    @{ file='herausnehmen.wav';         text='herausnehmen.' },
    @{ file='prothesenbuerste.wav';     text='die Prothesenburste.' },
    @{ file='reinigungstablette.wav';   text='die Reinigungstablette.' },
    @{ file='haftcreme.wav';            text='die Haftcreme.' },
    @{ file='druckstelle.wav';          text='die Druckstelle.' },
    @{ file='glas-mit-wasser.wav';      text='das Glas mit Wasser.' },

    # 4. Mundprobleme (8)
    @{ file='trockener-mund.wav';       text='der trockene Mund.' },
    @{ file='mundgeruch.wav';           text='der Mundgeruch.' },
    @{ file='aphte.wav';                text='die Aphte.' },
    @{ file='soor.wav';                 text='der Soor.' },
    @{ file='zahnfleischbluten.wav';    text='das Zahnfleischbluten.' },
    @{ file='zahnschmerzen.wav';        text='die Zahnschmerzen.' },
    @{ file='zahnarzt.wav';             text='der Zahnarzt.' },
    @{ file='wunde-stelle.wav';         text='die wunde Stelle.' },

    # 5. reflexive Dativ (8)
    @{ file='putze-mir-zaehne.wav';     text='Ich putze mir die Zahne.' },
    @{ file='wasche-mir-haende.wav';    text='Ich wasche mir die Hande.' },
    @{ file='spuele-mir-mund.wav';      text='Ich spule mir den Mund aus.' },
    @{ file='putzen-sie-sich.wav';      text='Putzen Sie sich die Zahne.' },
    @{ file='mir.wav';                  text='mir.' },
    @{ file='dir.wav';                  text='dir.' },
    @{ file='sich.wav';                 text='sich.' },
    @{ file='wasche-mich.wav';          text='Ich wasche mich.' },

    # 6. Sätze (8)
    @{ file='zeit-zahnpflege.wav';      text='Zeit fur die Zahnpflege.' },
    @{ file='zahnbuerste-weich.wav';    text='Die Zahnburste ist weich.' },
    @{ file='niemals-heiss.wav';        text='Niemals heisses Wasser!' },
    @{ file='tut-weh.wav';              text='Tut etwas weh?' },
    @{ file='fuehlt-frisch.wav';        text='Das fuhlt sich frisch an.' },
    @{ file='prothese-glas.wav';        text='Die Prothese kommt ins Glas.' },
    @{ file='bitte-ausspuelen.wav';     text='Bitte ausspulen.' },
    @{ file='alles-gut.wav';            text='Alles gut.' }
)

$total = $dictat.Count + $flashcards.Count
$ok = 0; $fail = 0; $idx = 0

Write-Host "=== DICTAT ($($dictat.Count)) ===" -ForegroundColor Cyan
foreach ($w in $dictat) {
    $idx++; $wavPath = Join-Path $audioDir $w.file
    try {
        $synth.SetOutputToWaveFile($wavPath); $synth.Speak($w.text); $synth.SetOutputToNull()
        $ok++; Write-Host "  [$idx/$total] OK: $($w.file)" -ForegroundColor Green
    } catch { $fail++; Write-Host "  [$idx/$total] FAIL: $($w.file)" -ForegroundColor Red }
}

Write-Host "=== FLASHCARDS ($($flashcards.Count)) ===" -ForegroundColor Cyan
foreach ($w in $flashcards) {
    $idx++; $wavPath = Join-Path $lettersDir $w.file
    try {
        $synth.SetOutputToWaveFile($wavPath); $synth.Speak($w.text); $synth.SetOutputToNull()
        $ok++; Write-Host "  [$idx/$total] OK: letters/$($w.file)" -ForegroundColor Green
    } catch { $fail++; Write-Host "  [$idx/$total] FAIL: letters/$($w.file)" -ForegroundColor Red }
}

$synth.Dispose()
Write-Host ""
Write-Host "TOTAL: $ok OK, $fail FAIL din $total" -ForegroundColor $(if ($fail -eq 0) { 'Green' } else { 'Yellow' })
