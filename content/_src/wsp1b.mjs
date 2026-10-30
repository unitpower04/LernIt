import { topic, V } from "./dsl.mjs";

const SRC = "WSP LF1 (Unterricht)";

/* =========================================================
   Ausbildungsvertrag, BBiG, JArbSchG
   ========================================================= */
const ausb = topic("wsp-lf1-ausbildung", { part: 2, src: SRC })
  .summary("Ausbildungsvertrag, BBiG & JArbSchG", `
**Rechtsgrundlagen der dualen Ausbildung**: Berufsbildungsgesetz (**BBiG**), **Ausbildungsordnung** (Verordnung über die Berufsausbildung: Dauer, Berufsbild, Ausbildungsrahmenplan, Prüfungsanforderungen), Jugendarbeitsschutzgesetz (**JArbSchG**), Rahmenlehrplan der Berufsschule (Ländersache). *Zuständige Stelle* für Kaufleute für Marketingkommunikation: **IHK**.

**Ausbildungsvertrag** (schriftlich, wirksam auch ohne IHK-Eintragung – die Eintragung ins Verzeichnis ist aber Voraussetzung für die Prüfungszulassung). Inhalt u. a.: Art, sachliche/zeitliche Gliederung, Beginn und Dauer, Ausbildungsstätte, tägliche Arbeitszeit, **Probezeit (1–4 Monate)**, Vergütung (jährlich steigend), Urlaub, Kündigungsvoraussetzungen.

**Kündigung**
- *Probezeit*: jederzeit **ohne Frist und ohne Grund**
- *danach*: Ausbildender nur **aus wichtigem Grund** (fristlos); Azubi mit **4 Wochen Frist**, wenn er die Ausbildung aufgibt oder wechselt
- *Nichtbestehen der Prüfung*: Verlängerung auf Verlangen bis zur Wiederholungsprüfung (max. 1 Jahr)

**Rechte des Azubis**: Ausbildungsvergütung, kostenlose Ausbildungsmittel, Freistellung (Berufsschule, Prüfungen), Urlaub, Zeugnis, nur ausbildungsgemäße Aufgaben.
**Pflichten des Azubis**: Lernpflicht, Weisungen befolgen, Ordnung beachten, Sorgfalt, Schweigepflicht, Berufsschule besuchen, Ausbildungsnachweis (Berichtsheft) führen, an Prüfungen teilnehmen.

**Jugendarbeitsschutz (15–17 Jahre)**
| Regel | Wert |
|---|---|
| Arbeitszeit | max. **8 h/Tag**, **40 h/Woche**, 5-Tage-Woche |
| Ruhepausen | **30 min** bei > 4,5 bis 6 h, **60 min** bei > 6 h (Pause mind. 15 min) |
| Ruhezeit | mind. **12 Stunden** zwischen Arbeitsende und -beginn |
| Nachtruhe | keine Arbeit **20–6 Uhr** |
| Urlaub | 30 / 27 / 25 Werktage (unter 16 / 17 / 18 Jahren) |
| Berufsschule | Freistellung; Schultag mit mind. 5 Unterrichtsstunden (à 45 Min) → danach keine Beschäftigung im Betrieb |
`)
  .cards([
    ["Welches Gesetz regelt die duale Berufsausbildung?", "Das Berufsbildungsgesetz (BBiG)."],
    ["Was ist die „zuständige Stelle“ für Kaufleute für Marketingkommunikation?", "Die Industrie- und Handelskammer (IHK)."],
    ["Was enthält die Ausbildungsordnung?", "Ausbildungsdauer, Berufsbild, Ausbildungsrahmenplan, Prüfungsanforderungen."],
    ["Wo stehen die Lerninhalte der Berufsschule?", "Im Rahmenlehrplan (Länderebene), nicht in der Ausbildungsordnung."],
    ["Wie lang ist die Probezeit im Ausbildungsverhältnis?", "Mindestens 1, höchstens 4 Monate."],
    ["Wie kann in der Probezeit gekündigt werden?", "Jederzeit ohne Frist und ohne Angabe von Gründen (schriftlich)."],
    ["Wie kann nach der Probezeit gekündigt werden?", "Ausbildender nur aus wichtigem Grund (fristlos). Azubi mit 4 Wochen Frist bei Berufsaufgabe/-wechsel."],
    ["Muss der Ausbildungsvertrag schriftlich sein?", "Ja. Er ist wirksam, auch wenn die IHK-Eintragung noch fehlt."],
    ["Nenne vier Rechte eines Auszubildenden.", "Vergütung, kostenlose Ausbildungsmittel, Freistellung für Berufsschule/Prüfungen, Zeugnis, Urlaub."],
    ["Nenne vier Pflichten eines Auszubildenden.", "Lernpflicht, Weisungsgebundenheit, Schweigepflicht, Berufsschulbesuch, Berichtsheft führen."],
    ["Darf ein Azubi zum Putzen der Büros eingeteilt werden?", "Nein – nur Aufgaben, die dem Ausbildungszweck dienen."],
    ["Wann endet das Ausbildungsverhältnis?", "Mit Ablauf der Ausbildungszeit – bei früherem Bestehen der Abschlussprüfung mit deren Bestehen."],
    ["Was gilt, wenn der Azubi die Abschlussprüfung nicht besteht?", "Auf Verlangen verlängert sich das Ausbildungsverhältnis bis zur Wiederholungsprüfung (max. 1 Jahr)."],
    ["Wer ist Jugendlicher nach dem JArbSchG?", "15 bis unter 18 Jahre. Unter 15 = Kind."],
    ["Maximale tägliche und wöchentliche Arbeitszeit Jugendlicher?", "8 Stunden pro Tag, 40 Stunden pro Woche (5-Tage-Woche)."],
    ["Ruhepausen nach JArbSchG?", "30 Minuten bei mehr als 4,5 bis 6 Stunden, 60 Minuten bei mehr als 6 Stunden. Eine Pause dauert mind. 15 Minuten."],
    ["Mindestruhezeit nach Arbeitsende (Jugendliche)?", "12 Stunden."],
    ["Nachtarbeitsverbot für Jugendliche?", "Keine Beschäftigung zwischen 20 und 6 Uhr (Ausnahmen in bestimmten Branchen)."],
    ["Urlaub nach JArbSchG?", "30 Werktage (unter 16), 27 Werktage (unter 17), 25 Werktage (unter 18)."],
    ["Berufsschule und Jugendliche: Was gilt am Schultag?", "Bei mindestens 5 Unterrichtsstunden (à 45 Min) dürfen Jugendliche danach nicht mehr im Betrieb beschäftigt werden."],
    ["Wer trägt die Kosten für Ausbildungsmittel (Werkzeug, Fachliteratur für Prüfungen)?", "Der Ausbildende – kostenlos für den Azubi."],
    ["Voraussetzungen der Zulassung zur Abschlussprüfung?", "Ausbildungszeit zurückgelegt, Teilnahme an der Zwischenprüfung, Ausbildungsnachweis geführt, Eintrag im Verzeichnis der Berufsausbildungsverhältnisse."],
    ["Spielt der Leistungsstand im Betrieb eine Rolle für die Zulassung zur Abschlussprüfung?", "Nein."],
    ["Muss ein Jugendlicher ärztlich untersucht werden?", "Ja – Erstuntersuchung vor Beginn, Nachuntersuchung nach einem Jahr."],
  ])
  .gls([
    ["Ausbildungsordnung", "Verordnung, die Dauer, Berufsbild, Ausbildungsrahmenplan und Prüfung eines Ausbildungsberufs regelt."],
    ["Probezeit", "Erste Zeit des Ausbildungsverhältnisses (1–4 Monate), in der jederzeit ohne Frist gekündigt werden kann."],
    ["Ausbildungsnachweis", "Berichtsheft: Dokumentation der Ausbildungsinhalte; Voraussetzung für die Prüfungszulassung."],
    ["Jugendlicher (JArbSchG)", "Person von 15 bis unter 18 Jahren."],
    ["Zuständige Stelle", "Stelle, die Ausbildung überwacht und Prüfungen abnimmt – hier die IHK."],
  ])
  .mc("Welche Aussage zur Probezeit im Berufsausbildungsvertrag entspricht der gesetzlichen Bestimmung?", "Die Probezeit muss mindestens einen und darf höchstens vier Monate betragen.", ["Die Probezeit beträgt ausnahmslos vier Monate.", "Die Probezeit kann bis zu sechs Monate betragen.", "Die Probezeit beträgt 28 Tage.", "Die Probezeit ist freiwillig und kann entfallen."])
  .mc("Welche Aussage zum Berufsausbildungsvertrag trifft zu?", "Dauer der Probezeit und Art/Umfang des Berufsschulunterrichts sind Bestandteil des Vertrags.", ["Der Vertrag ist erst rechtskräftig, wenn er bei der IHK eingetragen ist.", "Der Vertrag muss eine Probezeit von sechs Monaten ausweisen.", "Der Auszubildende stellt dem Ausbilder am Ende ein Zeugnis aus.", "Der Vertrag regelt auch alle Rechtsverhältnisse nach der Arbeitszeit."])
  .mc("Welche Regelung ist in der Ausbildungsordnung nicht zu finden?", "Der Rahmenlehrplan der Berufsschule", ["Die Ausbildungsdauer", "Das Ausbildungsberufsbild", "Der Ausbildungsrahmenplan", "Die Prüfungsanforderungen"], { e: "Der Rahmenlehrplan der Schule ist Ländersache." })
  .mc("Welche Institution ist die „zuständige Stelle“ im Sinne des BBiG für Kaufleute für Marketingkommunikation?", "Die Industrie- und Handelskammer", ["Die Berufsgenossenschaft", "Die Agentur für Arbeit", "Die Berufsschule", "Der Betriebsrat"])
  .mc("In welchem Fall wird einem Auszubildenden die Zulassung zur Abschlussprüfung nicht gewährt?", "Er hat nicht an der Zwischenprüfung teilgenommen.", ["Die Leistungen im Betrieb sind unterdurchschnittlich.", "Die Berufsschulnoten im Rechnungswesen sind mangelhaft.", "Er war vier Wochen vor der Prüfung krank.", "Die Zwischenprüfung wurde nach 24 Monaten abgelegt."])
  .mc("Maja Müller beginnt am 1. August eine Ausbildung. Der Vertrag sieht die kürzestmögliche gesetzliche Probezeit vor. Wann endet sie?", "Am 31. August (Ablauf des ersten Monats)", ["Am 30. November", "Am 14. August", "Am 31. Dezember", "Am 31. Januar des Folgejahres"], { e: "Mindestprobezeit = 1 Monat." })
  .mc("Eine 17-jährige Auszubildende wird 12 Stunden täglich auf einer Messe eingesetzt. Welche Aussage ist richtig?", "Das ist unzulässig: Jugendliche dürfen höchstens 8 Stunden täglich beschäftigt werden.", ["Das ist zulässig, wenn der Betrieb es anordnet.", "Das ist zulässig bis 10 Stunden mit Ausgleich in 6 Monaten.", "Das ist zulässig, wenn die Berufsschule zustimmt.", "Das ist zulässig bei Messen immer."], { e: "Für Jugendliche gelten 8 h/Tag und 40 h/Woche." })
  .mc("Ein 17-jähriger Azubi hat Berufsschule mit 7 Unterrichtsstunden. Darf er danach in den Betrieb gerufen werden?", "Nein – nach mindestens 5 Unterrichtsstunden darf er nicht mehr im Betrieb beschäftigt werden.", ["Ja, der Betrieb darf ihn noch 4 Stunden einsetzen.", "Ja, wenn er zustimmt.", "Ja, bis 22 Uhr.", "Nur an Samstagen nachzuholen."])
  .mc("Welche der folgenden Handlungen gehört nicht zu den Pflichten des Auszubildenden?", "Die Ausbildungsmittel für die Prüfungen selbst zu bezahlen", ["Aufgetragene Aufgaben sorgfältig auszuführen", "Weisungen des Ausbilders zu befolgen", "Die Betriebsordnung zu beachten", "Über Betriebsgeheimnisse zu schweigen"])
  .mc("Eine Auszubildende bemängelt, dass sie 14 Tage am Empfang eingesetzt wird. Welche Aussage ist richtig?", "Der Einsatz ist zulässig, wenn er dem Ausbildungszweck dient (Kennenlernen des Betriebs).", ["Der Einsatz ist unzulässig, weil Empfang nicht zum Beruf gehört.", "Der Einsatz ist nur mit Zustimmung der IHK zulässig.", "Der Einsatz ist nur bei Volljährigen erlaubt.", "Der Einsatz muss unbezahlt bleiben."])
  .match("Ordnen Sie jede Regelung der zutreffenden Altersgruppe/Regel zu.", [
    ["Maximale Tagesarbeitszeit", "8 Stunden"],
    ["Pause bei mehr als 6 Stunden Arbeit", "60 Minuten"],
    ["Mindestruhezeit nach Arbeitsende", "12 Stunden"],
    ["Probezeit im Ausbildungsverhältnis", "1 bis 4 Monate"],
  ], ["30 Minuten", "10 Stunden", "6 Monate"])
  .match("Ordnen Sie jedem Jugendlichen den Urlaubsanspruch (Werktage) zu.", [
    ["15 Jahre alt", "30 Werktage"],
    ["16 Jahre alt", "27 Werktage"],
    ["17 Jahre alt", "25 Werktage"],
  ], ["24 Werktage"])
  .match("Ordnen Sie Ereignis und Kündigungsregel zu.", [
    ["Kündigung in der Probezeit", "jederzeit ohne Frist und Grund"],
    ["Azubi will Beruf wechseln (nach der Probezeit)", "4 Wochen Frist"],
    ["Ausbildender kündigt nach der Probezeit", "nur aus wichtigem Grund"],
  ])
  .tf("Ein Ausbildungsvertrag ist erst wirksam, wenn er bei der IHK eingetragen wurde.", false, { e: "Er ist ab Unterschrift wirksam; die Eintragung ist für die Prüfungszulassung nötig." })
  .tf("Der Ausbildende darf in der Probezeit ohne Einhaltung einer Frist kündigen.", true)
  .tf("Jugendliche dürfen grundsätzlich von 20 bis 6 Uhr nicht beschäftigt werden.", true)
  .tf("Nach dem Nichtbestehen der Abschlussprüfung endet das Ausbildungsverhältnis sofort.", false, { e: "Auf Verlangen verlängert es sich bis zur Wiederholungsprüfung (max. 1 Jahr)." })
  .cloze("Die Probezeit beträgt mindestens [[1]] und höchstens [[4]] Monate.", { d: 1 })
  .cloze("Jugendliche dürfen höchstens [[8]] Stunden täglich und [[40]] Stunden wöchentlich arbeiten.", { d: 1 })
  .cloze("Bei einer Arbeitszeit von mehr als 6 Stunden müssen Jugendlichen mindestens [[60]] Minuten Pause gewährt werden.")
  .error("Welche Aussagen zum Ausbildungsverhältnis sind fehlerhaft?", [
    ["Die Probezeit beträgt mindestens einen Monat.", false],
    ["Auszubildende müssen ihre Ausbildungsmittel selbst bezahlen.", true, "Der Ausbildende stellt sie kostenlos zur Verfügung."],
    ["Der Ausbildungsvertrag muss schriftlich abgeschlossen werden.", false],
    ["Auszubildende dürfen als billige Arbeitskräfte für Reinigungsarbeiten eingesetzt werden.", true, "Nur ausbildungsdienliche Tätigkeiten sind erlaubt."],
  ])
  .order("Bringen Sie den Ablauf eines Ausbildungsverhältnisses in die richtige Reihenfolge.", ["Abschluss des Ausbildungsvertrags", "Probezeit", "Zwischenprüfung", "Zulassung zur Abschlussprüfung", "Abschlussprüfung und Ende der Ausbildung"], { d: 1 })
  .tcalc(
    "In der {firma} gilt eine {tage}-Tage-Woche. Im Ausbildungsvertrag von {name} ({alter} Jahre) soll vereinbart werden, dass {name} {pct} % mehr Urlaub als den gesetzlichen Mindesturlaub (Bundesurlaubsgesetz: 24 Werktage bei 6-Tage-Woche) erhält. Wie viele Urlaubstage pro Jahr erhält {name}?",
    "(24/6*tage)*(1+pct/100)",
    {
      firma: V.pick(["FAMK", "Kreativ-Kontor", "Mediahaus Rhein", "Pixelwerk GmbH"]),
      tage: V.int(5, 5),
      name: V.pick(["Frau Edel", "Herr Yilmaz", "Frau Rademacher", "Herr Sander"]),
      alter: V.int(18, 25),
      pct: V.pick([10, 20, 25, 30, 40, 50]),
    },
    { unit: "Urlaubstage", dec: 1, steps: ["Gesetzlicher Mindesturlaub bei {tage}-Tage-Woche: 24 ÷ 6 × {tage} = 20 Tage", "Aufschlag {pct} % auf 20 Tage", "Urlaubsanspruch = {result} Tage"] },
  )
  .tcalc(
    "Eine Auszubildende ({alter} Jahre) arbeitet laut Plan von {von} bis {bis} Uhr. Wie viele Stunden Nettoarbeitszeit entstehen, wenn die nach dem Jugendarbeitsschutzgesetz mindestens vorgeschriebene Ruhepause abgezogen wird? (Keine zusätzlichen Pausen.)",
    "(bis-von)-pause/60",
    {
      alter: V.int(16, 17),
      von: V.int(8, 9),
      bis: V.int(14, 16),
      pause: V.expr("30+30*floor((bis-von)/6.01)"),
    },
    { unit: "Stunden", steps: ["Arbeitszeit von {von} bis {bis} Uhr = {bis}-{von} Stunden", "Mindestpause nach JArbSchG: > 6 h → 60 min, > 4,5 bis 6 h → 30 min", "Nettoarbeitszeit = {result} Stunden"] },
  )
  .done();

/* =========================================================
   Arbeitsrecht & Arbeitnehmerschutz
   ========================================================= */
const ar = topic("wsp-lf1-arbeitsrecht", { part: 2, src: SRC })
  .summary("Arbeitsrecht & Arbeitnehmerschutz", `
**Arbeitsvertrag** – Pflichten
- *Arbeitnehmer*: Arbeitspflicht, **Treuepflicht**, **Schweigepflicht**, Weisungsbefolgung, Wettbewerbsverbot
- *Arbeitgeber*: **Entgeltzahlung**, **Fürsorgepflicht**, Beschäftigungspflicht, **Urlaubsgewährung**, **Zeugnispflicht**
- Zeugnis: *einfach* (Art und Dauer der Tätigkeit) oder *qualifiziert* (zusätzlich Leistung und Verhalten – wohlwollend, aber wahr)

**Arbeitszeitgesetz (ArbZG)**: 8 h/Tag, 48 h/Woche (bis 10 h/Tag, wenn im Schnitt in 6 Monaten 8 h erreicht werden); Pausen **30 min bei > 6 h, 45 min bei > 9 h**; Ruhezeit **11 h**; Sonn-/Feiertagsruhe.

**Bundesurlaubsgesetz (BUrlG)**: mind. **24 Werktage** (6-Tage-Woche) = **20 Arbeitstage** (5-Tage-Woche); voller Anspruch nach 6 Monaten; ärztlich bescheinigte Krankheit im Urlaub wird nicht angerechnet.

**Kündigungsschutzgesetz (KSchG)** – gilt im Betrieb mit mehr als 10 Arbeitnehmern und nach 6 Monaten Beschäftigung: Kündigung nur **sozial gerechtfertigt** (*personen-*, *verhaltens-* [meist nach Abmahnung], *betriebsbedingt* [mit Sozialauswahl]). **Klage binnen 3 Wochen** nach Zugang.
Kündigungsfristen (Kündigung durch den Arbeitgeber): Grundfrist **4 Wochen zum 15. oder Monatsende**; nach 2 Jahren 1 Monat, 5 J. 2 Monate, 8 J. 3, 10 J. 4, 12 J. 5, 15 J. 6, 20 J. **7 Monate** (jeweils zum Monatsende).
**Fristlose Kündigung** nur aus wichtigem Grund (z. B. Diebstahl, Arbeitsverweigerung).
**Besonderer Kündigungsschutz**: Schwangere/Mütter, Eltern in Elternzeit, Schwerbehinderte, Betriebsratsmitglieder, Auszubildende nach der Probezeit.

**Mutterschutzgesetz (MuSchG)**: **6 Wochen vor** bis **8 Wochen nach** der Geburt (12 Wochen bei Früh-/Mehrlingsgeburt); Mutterschaftsgeld; Kündigungsverbot bis 4 Monate nach der Entbindung; kein Nachtarbeit/Mehrarbeit; Elternzeit bis 3 Jahre, Elterngeld 12 (+2) Monate.

**AGG**: verbietet Benachteiligung wegen Rasse/ethnischer Herkunft, Geschlecht, Religion/Weltanschauung, Behinderung, Alter, sexueller Identität.

**Schwerbehinderung (SGB IX)**: GdB ≥ 50; **5 Tage Zusatzurlaub**; Kündigung nur mit **Zustimmung des Integrationsamts**; Betriebe ab 20 Arbeitsplätzen: **5 % Quote** oder Ausgleichsabgabe.
`)
  .cards([
    ["Nenne zwei Pflichten des Arbeitnehmers.", "Arbeitspflicht und Treue-/Schweigepflicht (außerdem Weisungsbefolgung)."],
    ["Nenne zwei Pflichten des Arbeitgebers.", "Entgeltzahlungspflicht, Fürsorgepflicht, Beschäftigungs-, Urlaubsgewährungs- und Zeugnispflicht."],
    ["Unterschied einfaches und qualifiziertes Zeugnis?", "Einfach: Art und Dauer der Tätigkeit. Qualifiziert: zusätzlich Leistung und Verhalten."],
    ["ArbZG – maximale Arbeitszeit?", "8 Stunden pro Tag (bis 10 Stunden mit Ausgleich in 6 Monaten), 48 Stunden pro Woche."],
    ["ArbZG – Ruhepausen?", "30 Minuten bei mehr als 6 Stunden, 45 Minuten bei mehr als 9 Stunden."],
    ["ArbZG – Ruhezeit zwischen zwei Arbeitstagen?", "Mindestens 11 Stunden."],
    ["BUrlG – gesetzlicher Mindesturlaub?", "24 Werktage bei 6-Tage-Woche = 20 Arbeitstage bei 5-Tage-Woche."],
    ["Ab wann besteht der volle Urlaubsanspruch?", "Nach 6 Monaten Beschäftigung."],
    ["Werden Krankheitstage im Urlaub angerechnet?", "Nein – bei ärztlichem Attest werden sie nicht auf den Urlaub angerechnet."],
    ["Wann gilt das Kündigungsschutzgesetz?", "In Betrieben mit mehr als 10 Arbeitnehmern und nach 6 Monaten Beschäftigung."],
    ["Nenne die drei Kündigungsgründe nach KSchG.", "Personenbedingt, verhaltensbedingt, betriebsbedingt."],
    ["Beispiel verhaltensbedingte Kündigung?", "Spesenbetrug, Arbeitsverweigerung, wiederholtes Zuspätkommen (meist nach vorheriger Abmahnung)."],
    ["Beispiel personenbedingte Kündigung?", "Dauerhafte Krankheit, fehlende Eignung."],
    ["Beispiel betriebsbedingte Kündigung?", "Betriebsschließung, Personalabbau – mit Sozialauswahl."],
    ["Kriterien der Sozialauswahl?", "Dauer der Betriebszugehörigkeit, Lebensalter, Unterhaltspflichten, Schwerbehinderung."],
    ["Frist für die Kündigungsschutzklage?", "3 Wochen nach Zugang der Kündigung beim Arbeitsgericht."],
    ["Grundkündigungsfrist?", "4 Wochen zum 15. oder zum Ende eines Kalendermonats."],
    ["Verlängerte Kündigungsfristen des Arbeitgebers?", "2 J.: 1 Monat; 5 J.: 2; 8 J.: 3; 10 J.: 4; 12 J.: 5; 15 J.: 6; 20 J.: 7 Monate – jeweils zum Monatsende."],
    ["Wann ist eine fristlose Kündigung möglich?", "Nur aus wichtigem Grund (z. B. Diebstahl, schwere Beleidigung)."],
    ["Wer genießt besonderen Kündigungsschutz?", "Schwangere/Mütter, Eltern in Elternzeit, Schwerbehinderte, Betriebsratsmitglieder, Auszubildende nach der Probezeit."],
    ["Mutterschutzfrist?", "6 Wochen vor bis 8 Wochen nach der Entbindung (12 Wochen bei Früh-/Mehrlingsgeburt)."],
    ["Absolutes Beschäftigungsverbot nach der Geburt?", "8 Wochen (bzw. 12 Wochen bei Früh-/Mehrlingsgeburt)."],
    ["Wie lange besteht Kündigungsschutz nach der Entbindung?", "Bis 4 Monate nach der Geburt (und in der Elternzeit)."],
    ["Wer zahlt das Mutterschaftsgeld?", "Die Krankenkasse (plus Zuschuss des Arbeitgebers zum Nettogehalt)."],
    ["Elterngeld – Bezugsdauer?", "In der Regel 12 bis 14 Monate (oder doppelte Dauer mit halbem Betrag)."],
    ["Ziel des AGG?", "Diskriminierung im Arbeitsleben verhindern (Rasse/Herkunft, Geschlecht, Religion/Weltanschauung, Behinderung, Alter, sexuelle Identität)."],
    ["Ab welchem Grad der Behinderung gilt man als schwerbehindert?", "Ab einem GdB von 50."],
    ["Zusatzurlaub für Schwerbehinderte?", "5 Arbeitstage pro Jahr."],
    ["Wer muss einer Kündigung eines Schwerbehinderten zustimmen?", "Das Integrationsamt."],
    ["Beschäftigungspflicht für Schwerbehinderte?", "Betriebe ab 20 Arbeitsplätzen: 5 % – sonst Ausgleichsabgabe."],
  ])
  .gls([
    ["Abmahnung", "Rüge eines Pflichtverstoßes mit Warnung; Voraussetzung vieler verhaltensbedingter Kündigungen."],
    ["Sozialauswahl", "Auswahl des am wenigsten schutzbedürftigen Mitarbeiters bei betriebsbedingter Kündigung."],
    ["Aufhebungsvertrag", "Einvernehmliche Beendigung des Arbeitsverhältnisses."],
    ["Elternzeit", "Unbezahlte Freistellung zur Kinderbetreuung bis zu 3 Jahre je Elternteil."],
    ["Integrationsamt", "Behörde, die Kündigungen Schwerbehinderter zustimmen muss."],
  ])
  .mc("Bei welchem der folgenden Vertragsinhalte handelt es sich um Pflichten des Arbeitnehmers? Wählen Sie die 2 zutreffenden Pflichten.", ["Schweigepflicht", "Treuepflicht"], ["Entgeltpflicht", "Fürsorgepflicht", "Urlaubsgewährungspflicht", "Zeugnispflicht"])
  .mc("Wie viele Urlaubstage hat ein Vollzeitbeschäftigter in einer 5-Tage-Woche nach dem Bundesurlaubsgesetz mindestens?", "20 Urlaubstage", ["24 Urlaubstage", "25 Urlaubstage", "28 Urlaubstage", "30 Urlaubstage"])
  .mc("Welche Aussage zum Mutterschutzgesetz ist richtig?", "Es gilt ein absolutes Beschäftigungsverbot von sechs Wochen vor bis acht Wochen nach der Geburt (mit Ausnahmen vor der Geburt).", ["Überstunden für vollzeitbeschäftigte Schwangere sind erlaubt.", "Nach der Entbindung gibt es nur ein relatives Beschäftigungsverbot.", "Das Gesetz gilt auch für werdende Väter.", "Schwangeren darf trotz Mutterschutz gekündigt werden."])
  .mc("Für welche Personengruppe gilt ein besonderer Kündigungsschutz?", "Für Mitglieder des Betriebsrats", ["Für Mitarbeiter in der Probezeit", "Für alle Mitarbeiter mit mehr als 2 Jahren Betriebszugehörigkeit", "Für Praktikanten", "Für Aushilfen"])
  .mc("Wann darf einem Arbeitnehmer fristlos gekündigt werden?", "Bei einem wichtigen Grund, z. B. Diebstahl", ["Bei jeder Verspätung", "Wenn der Chef es für richtig hält", "Nur in der Probezeit mit Begründung", "Nach einer krankheitsbedingten Fehlzeit von 2 Tagen"])
  .mc("Wie lang ist die Kündigungsfrist des Arbeitgebers bei einer Betriebszugehörigkeit von 8 Jahren?", "3 Monate zum Ende eines Kalendermonats", ["4 Wochen zum 15.", "2 Monate zum Monatsende", "4 Monate zum Monatsende", "7 Monate zum Monatsende"])
  .mc("Wie lange hat ein Arbeitnehmer Zeit, gegen eine Kündigung Klage beim Arbeitsgericht zu erheben?", "3 Wochen nach Zugang", ["2 Wochen nach Zugang", "4 Wochen nach Zugang", "6 Monate nach Zugang", "1 Jahr nach Zugang"])
  .mc("Welche Pause muss bei einer Arbeitszeit von mehr als 9 Stunden mindestens gewährt werden (ArbZG)?", "45 Minuten", ["15 Minuten", "30 Minuten", "60 Minuten", "90 Minuten"])
  .mc("Welche Aussage zur Rentenversicherung und Personalkosten ist richtig?", "Da der Arbeitgeber die Hälfte der Beiträge trägt, erhöhen steigende Beiträge in der Regel die Personalkosten.", ["Die Erhöhung betrifft nur den Arbeitnehmeranteil.", "Mit steigenden Beiträgen sinkt die Beitragsbemessungsgrenze automatisch.", "Beiträge sind an die Nettolohnentwicklung gekoppelt.", "Die Beitragsbemessungsgrenze steigt immer im gleichen Umfang."])
  .mc("Welche Eigenschaft ist nach dem AGG ein verbotenes Differenzierungsmerkmal?", "Das Alter", ["Die Schuhgröße", "Die Berufserfahrung", "Die Examensnote", "Die Sprachkenntnisse (wenn für die Stelle nötig)"])
  .mc("Welche Aussage zu Schwerbehinderten im Betrieb ist richtig?", "Die Kündigung bedarf der Zustimmung des Integrationsamts.", ["Sie haben keinen Anspruch auf Zusatzurlaub.", "Die Beschäftigungsquote beträgt 1 %.", "Sie dürfen nicht gekündigt werden – nie.", "Zuständig ist das Gewerbeaufsichtsamt."])
  .mc("Eine Mitarbeiterin ist seit 3 Jahren in einem Betrieb mit 40 Arbeitnehmern beschäftigt. Auf welcher Grundlage kann sie sich gegen eine ungerechtfertigte Kündigung wehren?", "Kündigungsschutzgesetz", ["Mutterschutzgesetz", "Jugendarbeitsschutzgesetz", "Arbeitszeitgesetz", "Gewerbeordnung"])
  .match("Ordnen Sie jedem Kündigungsgrund das passende Beispiel zu.", [
    ["personenbedingt", "dauerhafte Krankheit macht die Arbeit unmöglich"],
    ["verhaltensbedingt", "wiederholter Spesenbetrug trotz Abmahnung"],
    ["betriebsbedingt", "Schließung einer Abteilung"],
  ])
  .match("Ordnen Sie Gesetz und Regelung zu.", [
    ["ArbZG", "Pause von 30 Minuten bei mehr als 6 Stunden Arbeit"],
    ["BUrlG", "Mindestens 24 Werktage Urlaub"],
    ["MuSchG", "6 Wochen vor bis 8 Wochen nach der Geburt"],
    ["KSchG", "Kündigung nur bei sozialer Rechtfertigung"],
  ], ["AGG", "JArbSchG"])
  .match("Ordnen Sie die Betriebszugehörigkeit der Kündigungsfrist des Arbeitgebers zu.", [
    ["unter 2 Jahre", "4 Wochen zum 15. oder Monatsende"],
    ["5 Jahre", "2 Monate zum Monatsende"],
    ["10 Jahre", "4 Monate zum Monatsende"],
    ["20 Jahre", "7 Monate zum Monatsende"],
  ], ["1 Monat zum Monatsende", "6 Monate zum Monatsende"])
  .tf("Eine fristlose Kündigung ohne Angabe von Gründen ist nur in der Probezeit möglich.", true)
  .tf("Das Kündigungsschutzgesetz gilt in jedem Betrieb ab dem ersten Arbeitstag.", false, { e: "Es gilt in Betrieben mit mehr als 10 Arbeitnehmern und nach 6 Monaten Beschäftigung." })
  .tf("Krankheitstage im Urlaub mit ärztlichem Attest werden auf den Urlaub angerechnet.", false)
  .tf("Die Zustimmung des Integrationsamtes ist für die Kündigung eines Schwerbehinderten nötig.", true)
  .cloze("Nach dem Mutterschutzgesetz dauert die Schutzfrist [[6]] Wochen vor und [[8]] Wochen nach der Geburt.", { d: 1 })
  .cloze("Gegen eine Kündigung kann innerhalb von [[3]] Wochen Kündigungsschutzklage erhoben werden.")
  .error("Welche Aussagen zum Arbeitsrecht sind fehlerhaft?", [
    ["Bei betriebsbedingten Kündigungen muss eine Sozialauswahl erfolgen.", false],
    ["Eine Schwangere darf jederzeit ohne Gründe gekündigt werden.", true, "Es besteht ein besonderer Kündigungsschutz bis 4 Monate nach der Geburt."],
    ["Der Arbeitgeber ist zur Erteilung eines Zeugnisses verpflichtet.", false],
    ["Die gesetzliche Höchstarbeitszeit beträgt 12 Stunden täglich.", true, "Regelmäßig 8, ausnahmsweise 10 Stunden."],
  ])
  .tmc(
    "Ein Arbeitnehmer der {firma} hat eine Betriebszugehörigkeit von {ctx.jahre} Jahren. Die {firma} kündigt betriebsbedingt. Welche Kündigungsfrist gilt für den Arbeitgeber nach § 622 BGB?",
    "{ctx.frist}",
    ["{ctx.w1}", "{ctx.w2}", "{ctx.w3}"],
    {
      firma: V.pick(["FAMK", "Mediahaus Rhein", "Kreativ-Kontor", "Textkontor GmbH"]),
      ctx: V.pick([
        { jahre: "1", frist: "4 Wochen zum 15. oder zum Ende eines Kalendermonats", w1: "1 Monat zum Ende eines Kalendermonats", w2: "2 Monate zum Ende eines Kalendermonats", w3: "3 Monate zum Ende eines Kalendermonats" },
        { jahre: "5", frist: "2 Monate zum Ende eines Kalendermonats", w1: "1 Monat zum Ende eines Kalendermonats", w2: "3 Monate zum Ende eines Kalendermonats", w3: "4 Wochen zum 15. des Monats" },
        { jahre: "8", frist: "3 Monate zum Ende eines Kalendermonats", w1: "2 Monate zum Ende eines Kalendermonats", w2: "4 Monate zum Ende eines Kalendermonats", w3: "1 Monat zum Ende eines Kalendermonats" },
        { jahre: "10", frist: "4 Monate zum Ende eines Kalendermonats", w1: "3 Monate zum Ende eines Kalendermonats", w2: "5 Monate zum Ende eines Kalendermonats", w3: "2 Monate zum Ende eines Kalendermonats" },
        { jahre: "12", frist: "5 Monate zum Ende eines Kalendermonats", w1: "4 Monate zum Ende eines Kalendermonats", w2: "6 Monate zum Ende eines Kalendermonats", w3: "3 Monate zum Ende eines Kalendermonats" },
        { jahre: "15", frist: "6 Monate zum Ende eines Kalendermonats", w1: "5 Monate zum Ende eines Kalendermonats", w2: "7 Monate zum Ende eines Kalendermonats", w3: "4 Monate zum Ende eines Kalendermonats" },
        { jahre: "20", frist: "7 Monate zum Ende eines Kalendermonats", w1: "6 Monate zum Ende eines Kalendermonats", w2: "5 Monate zum Ende eines Kalendermonats", w3: "4 Wochen zum 15. des Monats" },
      ]),
    },
    { d: 2 },
  )
  .tcalc(
    "{name} arbeitet in Teilzeit an {tage} Tagen pro Woche. Wie viele Urlaubstage stehen {name} nach dem Bundesurlaubsgesetz mindestens zu? (Gesetzlicher Mindesturlaub: 4 Wochen.)",
    "4*tage",
    { name: V.pick(["Frau Hoffmann", "Herr Berger", "Frau Çelik", "Herr Neumann"]), tage: V.int(2, 5) },
    { unit: "Urlaubstage", dec: 0, steps: ["Mindesturlaub = 4 Wochen", "4 Wochen × {tage} Arbeitstage = {result} Urlaubstage"] },
  )
  .done();

/* =========================================================
   Aufbau- & Ablauforganisation, Agenturtypen
   ========================================================= */
const orga = topic("wsp-lf1-orga", { part: 2, src: "WSP LF1 / Mako LF1 (Unterricht)" })
  .summary("Aufbau- & Ablauforganisation, Agenturtypen", `
**Aufbauorganisation** beantwortet *„Wer macht was?“*: Stellen, Abteilungen, Hierarchie, Weisungsrechte (→ **Organigramm**).
**Ablauforganisation** beantwortet *„Wie, wann, wo und in welcher Reihenfolge?“*: Arbeitsprozesse (→ Workflow, Projektablauf).

| Leitungssystem | Merkmal | Vorteil | Nachteil |
|---|---|---|---|
| **Einliniensystem** | jede Stelle hat genau *einen* Vorgesetzten (Instanzenweg) | klare Verantwortung | lange Dienstwege |
| **Mehrliniensystem** | Spezialisten-Weisungsrecht, *mehrere* Vorgesetzte | kurze Wege, Fachkompetenz | Kompetenzkonflikte |
| **Stabliniensystem** | Einliniensystem + **Stabsstelle** (berät, ohne Weisungsbefugnis) | Entlastung der Leitung | Konflikte Stab ↔ Linie |
| **Matrixorganisation** | zwei Dimensionen (z. B. Funktion × Projekt/Kunde) | flexibel, fachübergreifend | doppelte Unterstellung |

**Agenturtypen**: *Full-Service-Agentur* (Beratung, Strategie, Kreation, Media, Produktion aus einer Hand) · *Spezialagentur* (z. B. Digital-, PR-, Dialog-, Event-, Promotion-, Social-Media-Agentur) · *Mediaagentur* (Planung/Einkauf von Werbeflächen) · *Kreativagentur/Boutique*.

**Typische Berufe/Abteilungen**: Kundenberatung/Kontakt (Briefing, Ansprechpartner) · Strategische Planung · Kreation (Texter, Art Director, Grafik) · Media · Produktion (Druckabnahme, Dienstleister) · Traffic-Management (Terminsteuerung) · Marktforschung · Presse/PR · Verwaltung.
`)
  .cards([
    ["Was beschreibt die Aufbauorganisation?", "Die Struktur eines Unternehmens: Stellen, Abteilungen, Hierarchien und Weisungswege – dargestellt im Organigramm."],
    ["Was beschreibt die Ablauforganisation?", "Die zeitliche und räumliche Abfolge der Arbeitsprozesse: wer macht wann was in welcher Reihenfolge."],
    ["Was ist ein Organigramm?", "Grafische Darstellung der Aufbauorganisation (Stellen, Abteilungen, Über-/Unterordnung)."],
    ["Merkmal des Einliniensystems?", "Jeder Mitarbeiter hat genau einen Vorgesetzten; Anweisungen laufen über den Instanzenweg."],
    ["Nachteil des Einliniensystems?", "Lange Dienstwege, Überlastung der Leitung, geringe Flexibilität."],
    ["Merkmal des Mehrliniensystems?", "Mitarbeiter erhalten Weisungen von mehreren spezialisierten Vorgesetzten."],
    ["Nachteil des Mehrliniensystems?", "Kompetenzkonflikte, widersprüchliche Anweisungen."],
    ["Was ist eine Stabsstelle?", "Eine beratende Stelle ohne Weisungsbefugnis, die die Leitung unterstützt."],
    ["Was ist das Stabliniensystem?", "Einliniensystem, ergänzt durch Stabsstellen, die beraten, aber nicht anweisen."],
    ["Was kennzeichnet die Matrixorganisation?", "Zwei Gliederungsdimensionen (z. B. Funktion und Projekt/Kunde) – Mitarbeiter haben zwei Vorgesetzte."],
    ["Was ist eine Full-Service-Agentur?", "Eine Agentur, die alle Leistungen von Beratung über Konzeption und Kreation bis Media und Produktion anbietet."],
    ["Was ist eine Spezialagentur?", "Eine Agentur, die sich auf einen Bereich konzentriert (z. B. Digital, PR, Event, Dialogmarketing)."],
    ["Was macht eine Mediaagentur?", "Plant, kauft und kontrolliert Werbeplätze (Mediaplanung/-einkauf)."],
    ["Aufgabe der Kundenberatung (Kontakt)?", "Hauptansprechpartner des Kunden: Briefing aufnehmen, Kreationsbriefing erstellen, Projekt steuern, Präsentationen."],
    ["Aufgabe des Produktioners?", "Setzt Entwürfe technisch um: Dienstleister beauftragen, Druckabnahme, Qualitätssicherung."],
    ["Aufgabe des Texters?", "Texte und Konzepte formulieren (z. B. Mailings, Claims, Anzeigentexte)."],
    ["Aufgabe des Grafikers/Art Directors?", "Visuelle Gestaltung: Layout, Moodboards, Anzeigengestaltung."],
    ["Aufgabe des Traffic-Managers?", "Terminplanung und Steuerung der Projektabläufe (Ressourcen, Fristen)."],
    ["Aufgabe des Mediaplaners?", "Auswahl und Planung der Werbeträger, Budgetverteilung, Mediaeinkauf."],
    ["Aufgabe der Strategischen Planung (Planner)?", "Markt-, Zielgruppen- und Markenanalyse; Entwicklung der Kommunikationsstrategie."],
    ["Aufgabe des Buchhalters in der Agentur?", "Rechnungsabwicklung, Buchführung, Zahlungsverkehr."],
  ])
  .gls([
    ["Stabsstelle", "Beratende Stelle ohne Weisungsbefugnis."],
    ["Instanz", "Stelle mit Weisungsbefugnis (Leitungsstelle)."],
    ["Full-Service-Agentur", "Agentur mit allen Leistungen von Strategie bis Produktion."],
    ["Kontakter", "Kundenberater in der Agentur; Schnittstelle zwischen Kunde und Agentur."],
    ["Traffic", "Terminierung, Ressourcen- und Ablaufsteuerung von Projekten in der Agentur."],
  ])
  .mc("Welche Aussage beschreibt das Einliniensystem?", "Jeder Mitarbeiter hat nur einen direkten Vorgesetzten.", ["Mitarbeiter bekommen Weisungen von mehreren Spezialisten.", "Es gibt keine Hierarchie.", "Alle Entscheidungen treffen Stabsstellen.", "Mitarbeiter sind Projekten und Funktionen gleichzeitig unterstellt."])
  .mc("Welche Aufgabe hat eine Stabsstelle?", "Sie berät die Leitung, hat aber keine Weisungsbefugnis.", ["Sie erteilt Weisungen an alle Abteilungen.", "Sie vertritt das Unternehmen nach außen.", "Sie führt Betriebsratswahlen durch.", "Sie ist nur für die Buchhaltung zuständig."])
  .mc("Welche Organisationsform hat zwei Dimensionen und doppelte Unterstellung?", "Matrixorganisation", ["Einliniensystem", "Stabliniensystem", "Mehrliniensystem", "Spartenorganisation ohne Querschnitt"])
  .mc("Was beschreibt die Ablauforganisation?", "Die zeitliche und räumliche Folge von Arbeitsprozessen", ["Die Hierarchie der Stellen", "Das Organigramm", "Die Rechtsform", "Die Gewinnverteilung"])
  .mc("Welche Abteilung einer Agentur erstellt typischerweise das Kreationsbriefing?", "Kundenberatung", ["Produktion", "Buchhaltung", "Media", "Marktforschung"])
  .mc("Wer ist in der Agentur für die Druckabnahme zuständig?", "Der Produktioner", ["Der Buchhalter", "Die Texterin", "Der Kundenberater", "Die Grafikerin"])
  .mc("Eine Agentur bietet Konzeption, Kreation, Mediaplanung und Produktion aus einer Hand an. Um welchen Agenturtyp handelt es sich?", "Full-Service-Agentur", ["Mediaagentur", "Spezialagentur für PR", "Eventagentur", "Freelancer-Pool"])
  .match("Ordnen Sie die Aufgabe dem Kollegen/der Kollegin zu.", [
    ["Rechnungsabwicklung", "Buchhalter"],
    ["Erstellung Kreationsbriefing", "Kundenberater"],
    ["Druckabnahme", "Produktioner"],
    ["Erstellung Mood für die Anzeigengestaltung", "Grafikdesignerin"],
    ["Formulierung Mailing", "Texterin"],
  ])
  .match("Ordnen Sie Leitungssystem und Merkmal zu.", [
    ["Einliniensystem", "ein Vorgesetzter je Stelle"],
    ["Mehrliniensystem", "mehrere fachliche Vorgesetzte"],
    ["Stabliniensystem", "beratende Stabsstellen ohne Weisungsrecht"],
    ["Matrixorganisation", "Unterstellung unter Funktion und Projekt"],
  ])
  .tf("Eine Stabsstelle darf der Linie verbindliche Weisungen erteilen.", false)
  .tf("Das Organigramm stellt die Ablauforganisation dar.", false, { e: "Es zeigt die Aufbauorganisation." })
  .cloze("Die [[Aufbauorganisation]] gliedert das Unternehmen in Stellen und Abteilungen; die [[Ablauforganisation]] regelt die Arbeitsprozesse.")
  .order("Bringen Sie den Weg einer Kundenanfrage in der Agentur in eine sinnvolle Reihenfolge.", ["Kundenberatung nimmt das Briefing auf", "Strategie/Planung analysiert und entwickelt die Strategie", "Kreation entwickelt Konzept und Entwürfe", "Produktion setzt um", "Kundenberatung präsentiert und rechnet ab"], { d: 2 })
  .done();

/* =========================================================
   Gesundheits- & Umweltschutz
   ========================================================= */
const gu = topic("wsp-lf1-gesundheit", { part: 2, src: "WSP LF1 – Betriebe (Unterricht)" })
  .summary("Gesundheits- & Umweltschutz im Betrieb", `
**Sicherheitszeichen** (Farbe + Form)
| Art | Farbe/Form | Beispiel |
|---|---|---|
| **Verbot** | rot, **rund** | Durchfahrt verboten, Rauchen verboten |
| **Gebot** | blau, rund | Helm tragen |
| **Warnung** | gelb, **dreieckig** | Rutschgefahr |
| **Rettung** | grün, **viereckig** | Notausgang, Erste Hilfe |
| **Brandschutz** | rot, **viereckig** | Feuerlöscher |

**Erste Hilfe**: Der **Arbeitgeber** ist verpflichtet, Erste Hilfe zu organisieren (Ersthelfer, Material). Ersthelferanteil: 1 Ersthelfer bei 2–20 Anwesenden, darüber 5 % (Verwaltung) bzw. 10 %. Unfälle: Meldung an die **Berufsgenossenschaft** (gesetzliche Unfallversicherung).

**Siegel & Kennzeichen**
- **Blauer Engel**: umweltfreundliche Produkte
- **GOTS**: Bio-Textilien (Global Organic Textile Standard)
- **FSC / PEFC**: Holz und Papier aus nachhaltiger Forstwirtschaft
- **Grüner Punkt**: Beteiligung am dualen System (Verpackungsrecycling)
- **Pfandlogo (DPG)**: Einwegpfand
- **EU-Bio-Siegel**, **Fairtrade**, **EU-Energielabel**

**Abfall**: vermeiden → wiederverwenden → recyceln → verwerten → beseitigen. Sondermüll (Toner, Batterien, Leuchtstoffröhren) gehört an Sammelstellen.
`)
  .cards([
    ["Verbotszeichen – Farbe und Form?", "Rot und rund (z. B. Durchfahrt verboten)."],
    ["Warnzeichen – Farbe und Form?", "Gelb und dreieckig (z. B. Rutschgefahr)."],
    ["Gebotszeichen – Farbe und Form?", "Blau und rund (z. B. Gehörschutz tragen)."],
    ["Rettungszeichen – Farbe und Form?", "Grün und viereckig (z. B. Notausgang, Erste Hilfe)."],
    ["Brandschutzzeichen – Farbe und Form?", "Rot und viereckig (z. B. Feuerlöscher)."],
    ["Wer ist für die Organisation der Erste-Hilfe-Ausbildung im Betrieb verantwortlich?", "Der Arbeitgeber."],
    ["Wer ist Träger der gesetzlichen Unfallversicherung?", "Die Berufsgenossenschaft (bzw. Unfallkasse)."],
    ["Wofür steht das Siegel „Blauer Engel“?", "Umweltfreundliche Produkte und Dienstleistungen."],
    ["Wofür steht GOTS?", "Global Organic Textile Standard – Textilien aus Bio-Fasern, ökologisch und sozial produziert."],
    ["Wofür stehen FSC und PEFC?", "Holz- und Papierprodukte aus nachhaltig bewirtschafteten Wäldern."],
    ["Was bedeutet der Grüne Punkt?", "Der Hersteller beteiligt sich an einem dualen System zur Verpackungsentsorgung (kein Hinweis auf Recyclingmaterial)."],
    ["Woran erkennt man Einwegpfand-Flaschen?", "Am Pfandlogo (DPG-Zeichen)."],
    ["Was bedeutet das CE-Zeichen?", "Der Hersteller erklärt die Konformität mit EU-Vorschriften – kein Qualitäts- oder Umweltsiegel."],
    ["Wohin gehören Toner und Batterien?", "Zu Sammelstellen für Sonderabfall/Elektroaltgeräte, nicht in den Hausmüll."],
    ["Abfallhierarchie – Reihenfolge?", "Vermeiden, Wiederverwenden, Recyceln, sonstige Verwertung, Beseitigen."],
    ["Was ist eine Gefährdungsbeurteilung?", "Systematische Ermittlung der Gefahren am Arbeitsplatz und Festlegung von Schutzmaßnahmen (Pflicht des Arbeitgebers)."],
    ["Wer unterstützt den Arbeitgeber beim Arbeitsschutz?", "Betriebsarzt, Fachkraft für Arbeitssicherheit, Sicherheitsbeauftragte."],
  ])
  .gls([
    ["Berufsgenossenschaft", "Träger der gesetzlichen Unfallversicherung; zuständig für Arbeitsunfälle und Berufskrankheiten."],
    ["Gefährdungsbeurteilung", "Pflichtanalyse der Gefahren am Arbeitsplatz."],
    ["Ersthelfer", "Betriebsangehöriger mit Erste-Hilfe-Ausbildung."],
  ])
  .match("Ordnen Sie jedem Sicherheitszeichen die Farb-/Formvariante zu.", [
    ["Rettungszeichen: Notausgang", "grün und viereckig"],
    ["Verbotszeichen: Durchfahrt verboten", "rot und rund"],
    ["Brandschutzzeichen: Feuerlöscher", "rot und viereckig"],
    ["Warnzeichen: Rutschgefahr", "gelb und dreieckig"],
  ], ["blau und rund"])
  .match("Ordnen Sie jedem Siegel seine Bedeutung zu.", [
    ["Blauer Engel", "umweltfreundliches Produkt"],
    ["GOTS", "Bio-Textilien"],
    ["FSC", "Holz aus nachhaltiger Forstwirtschaft"],
    ["Pfandlogo", "Einwegpfandsystem für Getränkeverpackungen"],
  ], ["geprüfte Sicherheit (GS)"])
  .mc("Welches Siegel kennzeichnet umweltschonend produzierte Textilien?", "GOTS", ["Grüner Punkt", "Pfandlogo", "CE-Zeichen", "Energielabel"])
  .mc("Wer ist rechtlich verpflichtet, die betriebliche Ersthelfer-Ausbildung zu organisieren?", "Der Arbeitgeber", ["Die IHK", "Die Berufsgenossenschaft", "Die Personalabteilung", "Der Betriebsrat"])
  .mc("Eine Veranstaltung verkauft Getränke nur in Pfandflaschen. Wodurch wird ein Pfandsystem gekennzeichnet?", "Durch das Pfandlogo auf der Flasche", ["Durch den Grünen Punkt", "Durch das CE-Zeichen", "Durch das Recyclingdreieck", "Durch den Blauen Engel"])
  .tf("Der Grüne Punkt bedeutet, dass eine Verpackung aus Recyclingmaterial besteht.", false, { e: "Er zeigt die Beteiligung am dualen System – nicht das Material." })
  .tf("Warnzeichen sind gelb und dreieckig.", true)
  .cloze("Verbotszeichen sind [[rot]] und [[rund]], Rettungszeichen [[grün]] und viereckig.")
  .done();

export default [
  { file: "wsp/lf1-ausbildung.json", bundle: { items: [ausb] } },
  { file: "wsp/lf1-arbeitsrecht.json", bundle: { items: [ar] } },
  { file: "wsp/lf1-orga.json", bundle: { items: [orga] } },
  { file: "wsp/lf1-gesundheit.json", bundle: { items: [gu] } },
];
