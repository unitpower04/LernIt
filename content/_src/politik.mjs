import { topic, V, structure, subject, lf, tp } from "./dsl.mjs";

const SRC = "Politik/Tarifrecht (Unterricht, Prüfungsstil)";

const struktur = structure([
  subject("politik", "Politik & Arbeitswelt", "Tarifrecht, Mitbestimmung und Sozialversicherung (Prüfungsteil 2 WiSo)", "#7c3aed", [
    lf("politik-tarif", "TR", "Tarifrecht & Arbeitskampf", [2], [
      tp("politik-tarifvertrag", "Tarifvertrag & Tarifautonomie", [2]),
      tp("politik-arbeitskampf", "Tarifverhandlung & Arbeitskampf", [2]),
    ]),
    lf("politik-betrieb", "BV", "Mitbestimmung & Sozialversicherung", [2], [
      tp("politik-betriebsrat", "Betriebsrat & Mitbestimmung", [2]),
      tp("politik-sozialvers", "Sozialversicherung & Künstlersozialkasse", [2]),
    ]),
  ]),
]);

const T = (k) => topic(k, { part: 2, src: SRC });

const tv = T("politik-tarifvertrag")
  .summary("Tarifvertrag & Tarifautonomie", `
**Tarifautonomie** (Art. 9 Abs. 3 GG): Gewerkschaften und Arbeitgeber(verbände) handeln Arbeitsbedingungen **ohne staatliche Einmischung** aus. Der Staat darf Löhne nicht per Gesetz festlegen.
**Tarifparteien/Sozialpartner**: Gewerkschaften (z. B. ver.di, IG Metall, NGG, DGB-Mitglieder) und Arbeitgeberverbände (oder einzelne Arbeitgeber → Firmentarifvertrag).
**Arten**: *Lohn-/Gehaltstarifvertrag* (Entgelthöhe, kurze Laufzeit ~1–2 Jahre) · *Manteltarifvertrag* (Arbeitszeit, Urlaub, Kündigungsfristen, Zuschläge; lange Laufzeit) · *Rahmentarifvertrag* (Eingruppierung) · *Firmentarifvertrag* (ein Unternehmen) · *Flächentarifvertrag* (Branche/Region).
**Geltung**: unmittelbar und zwingend für **Tarifgebundene** (Gewerkschaftsmitglied + Mitglied im Arbeitgeberverband). Nicht-Mitglieder: nur wenn arbeitsvertraglich vereinbart oder **Allgemeinverbindlicherklärung** (BMAS).
**Günstigkeitsprinzip**: Einzelarbeitsvertrag darf vom Tarifvertrag/Gesetz nur **zugunsten des Arbeitnehmers** abweichen. Rangfolge: Gesetz > Tarifvertrag > Betriebsvereinbarung > Arbeitsvertrag (Abweichung nur günstiger).
**Friedenspflicht**: während der Laufzeit kein Streik. **Tarifvertrag** endet mit Ablauf der Laufzeit oder Kündigung (Nachwirkung).
`)
  .cards([
    ["Was ist Tarifautonomie?", "Das Recht der Tarifparteien, Arbeitsbedingungen ohne staatliche Eingriffe auszuhandeln (Art. 9 Abs. 3 GG)."],
    ["Wer sind die Tarifparteien?", "Gewerkschaften und Arbeitgeberverbände (oder einzelne Arbeitgeber)."],
    ["Was ist ein Manteltarifvertrag?", "Regelt allgemeine Arbeitsbedingungen wie Arbeitszeit, Urlaub, Zuschläge, Kündigungsfristen – lange Laufzeit."],
    ["Was ist ein Lohn- und Gehaltstarifvertrag?", "Regelt Entgelthöhe – kürzere Laufzeit (ca. 1–2 Jahre)."],
    ["Was ist ein Rahmentarifvertrag?", "Regelt Eingruppierung in Lohn-/Gehaltsgruppen."],
    ["Was ist ein Firmentarifvertrag?", "Tarifvertrag zwischen Gewerkschaft und einem einzelnen Unternehmen."],
    ["Was ist ein Flächentarifvertrag?", "Gilt für eine ganze Branche in einer Region (Tarifbezirk)."],
    ["Für wen gilt der Tarifvertrag unmittelbar?", "Für Mitglieder der Tarifparteien (Gewerkschaftsmitglied + Mitglied im Arbeitgeberverband)."],
    ["Wann gilt ein Tarifvertrag für Nichtmitglieder?", "Bei Allgemeinverbindlicherklärung oder wenn der Arbeitsvertrag darauf verweist."],
    ["Was besagt das Günstigkeitsprinzip?", "Abweichungen im Arbeitsvertrag vom Tarifvertrag/Gesetz sind nur erlaubt, wenn sie für den Arbeitnehmer günstiger sind."],
    ["Rangfolge der Rechtsquellen im Arbeitsrecht?", "Gesetz > Tarifvertrag > Betriebsvereinbarung > Arbeitsvertrag (nur günstiger)."],
    ["Was ist Friedenspflicht?", "Während der Laufzeit des Tarifvertrags dürfen keine Arbeitskämpfe geführt werden."],
    ["Was ist eine Allgemeinverbindlicherklärung?", "Das Arbeitsministerium erklärt einen Tarifvertrag für eine ganze Branche verbindlich."],
    ["Was ist Tarifgebundenheit?", "Beide Parteien sind Mitglied der Tarifparteien – der Tarifvertrag gilt unmittelbar und zwingend."],
    ["Sind Gewerkschaftsbeitritt und Tarifgeltung automatisch verknüpft?", "Nein – Tarifgeltung setzt Mitgliedschaft (oder AVE/Verweisung) voraus."],
    ["Wie lange dauert die Laufzeit typischerweise?", "Manteltarifverträge mehrere Jahre; Entgelttarifverträge meist 12–24 Monate."],
    ["Was ist Nachwirkung?", "Nach Ablauf gelten die Tarifnormen weiter, bis sie durch eine andere Abmachung ersetzt werden."],
  ])
  .gls([
    ["Tarifautonomie", "Recht der Tarifparteien, Arbeitsbedingungen eigenständig zu regeln."],
    ["Günstigkeitsprinzip", "Abweichungen nur zugunsten des Arbeitnehmers."],
    ["Friedenspflicht", "Verbot von Arbeitskämpfen während der Laufzeit."],
    ["Allgemeinverbindlicherklärung", "Ausdehnung eines Tarifvertrags auf alle Arbeitgeber/Arbeitnehmer der Branche."],
  ])
  .mc("Ein Mitarbeiter wechselt zu einem tarifgebundenen Kunden. Der Einzelarbeitsvertrag soll von Tarif und Gesetz abweichen. Welche Vereinbarung gilt?", "Abweichungen sind nur wirksam, wenn sie für den Arbeitnehmer günstiger sind.", ["Abweichungen gelten immer unabhängig von Tarif und Gesetz.", "Abweichungen gelten, wenn sie ungünstiger als der Tarifvertrag, aber nicht ungünstiger als das Gesetz sind.", "Abweichungen sind nie erlaubt.", "Abweichungen gelten bei Einwilligung des Betriebsrats."], { e: "Günstigkeitsprinzip: Gesetz > Tarifvertrag > Arbeitsvertrag (nur günstiger)." })
  .mc("Ein Kontakter fordert, dass alle Löhne im Personentransport per Gesetz vom Ministerium festgelegt werden. Gegen welches Prinzip würde das verstoßen?", "Gegen die Tarifautonomie", ["Gegen die Preisbindung der zweiten Hand", "Gegen das UWG", "Gegen die Föderalismusgrundsätze", "Gegen die Drittelparität"])
  .mc("Welche Aussage zu Tarifverträgen ist richtig?", "Das Recht, Tarifverträge abzuschließen, heißt Tarifautonomie und ist im Grundgesetz verankert.", ["Tarifverträge gelten immer mindestens vier Jahre.", "Ein Arbeitnehmer muss bei Einstellung Gewerkschaftsmitglied werden, damit der Tarifvertrag gilt.", "Rahmen- und Manteltarifvertrag haben immer dieselbe Laufzeit.", "Ein Unternehmen ist nur tarifgebunden, wenn es einen Betriebsrat hat."])
  .mc("Wann ist ein Unternehmen tarifgebunden?", "Wenn es Mitglied im tarifschließenden Arbeitgeberverband ist oder einen Firmentarifvertrag abgeschlossen hat.", ["Wenn es einen Betriebsrat hat", "Wenn mehr als 20 Mitarbeiter beschäftigt sind", "Immer", "Wenn es in der IHK ist"])
  .mc("Welcher Tarifvertrag regelt Wochenarbeitszeit, Urlaub und Kündigungsfristen?", "Manteltarifvertrag", ["Lohn- und Gehaltstarifvertrag", "Firmentarifvertrag", "Betriebsvereinbarung", "Allgemeinverbindlicherklärung"])
  .mc("Wo ist die Tarifautonomie geregelt?", "Art. 9 Abs. 3 Grundgesetz", ["Art. 1 GG", "BGB § 611", "Betriebsverfassungsgesetz", "Jugendarbeitsschutzgesetz"])
  .match("Ordnen Sie jedem Sachverhalt den Tarifvertrag zu.", [
    ["Vertragspartner sind die Gewerkschaft NGG und ein großer Lebensmittelkonzern", "Firmentarifvertrag"],
    ["Die Wochenarbeitszeit beträgt 37,5 Stunden für alle Beschäftigten im Tarifbezirk", "Manteltarifvertrag"],
    ["Die Gehälter steigen um 4 % ab 1. Januar", "Lohn- und Gehaltstarifvertrag"],
    ["Eingruppierung in Entgeltgruppen nach Tätigkeitsmerkmalen", "Rahmentarifvertrag"],
  ])
  .match("Ordnen Sie die Rechtsquelle der Rangfolge zu.", [
    ["höchster Rang", "Gesetz"],
    ["zweiter Rang", "Tarifvertrag"],
    ["dritter Rang", "Betriebsvereinbarung"],
    ["niedrigster Rang", "Arbeitsvertrag"],
  ])
  .tf("Nur Gewerkschaftsmitglieder können vom Tarifvertrag profitieren – ohne AVE oder Verweis.", true)
  .tf("Der Staat legt in Deutschland die Tariflöhne fest.", false)
  .tf("Während der Laufzeit eines Tarifvertrags gilt die Friedenspflicht.", true)
  .cloze("Nach dem [[Günstigkeitsprinzip]] dürfen Arbeitsverträge nur [[zugunsten]] des Arbeitnehmers abweichen.")
  .error("Welche Aussagen zum Tarifrecht sind fehlerhaft?", [
    ["Die Tarifautonomie ist im Grundgesetz verankert.", false],
    ["Tarifverträge haben stets eine Laufzeit von mindestens vier Jahren.", true, "Die Laufzeit wird vereinbart (Entgelt meist 1–2 Jahre)."],
    ["Der Manteltarifvertrag regelt u. a. Urlaub und Arbeitszeit.", false],
    ["Betriebsvereinbarungen stehen über Gesetzen.", true, "Gesetze haben Vorrang."],
  ])
  .done();

const ak = T("politik-arbeitskampf")
  .summary("Tarifverhandlung & Arbeitskampf", `
**Ablauf eines Tarifkonflikts**
1. Kündigung des Tarifvertrags (Ablauf der Friedenspflicht)
2. **Aufnahme von Tarifverhandlungen** (Forderungen, Angebot)
3. Verhandlungen scheitern → **Erklärung des Scheiterns** durch eine Partei
4. **Schlichtungsverfahren** (neutrale Schlichter, freiwillig, wenn vereinbart)
5. Scheitert Schlichtung → **Urabstimmung** der Gewerkschaftsmitglieder (**75 % Zustimmung** für Streik üblich)
6. **Streik** (Arbeitgeber evtl. **Aussperrung**), währenddessen neue Verhandlungen möglich
7. Einigung → **Urabstimmung** über das Ergebnis (**25 % Zustimmung** zum Ergebnis reichen i. d. R. für Annahme) → **neuer Tarifvertrag** → Ende des Streiks

**Streikarten**: *Warnstreik* (kurz, befristet, schon während der Verhandlung, ohne Urabstimmung) · *Schwerpunktstreik* (bestimmte Betriebe/Bereiche) · *Flächenstreik* (ganzes Tarifgebiet) · *Wilder Streik* (nicht von der Gewerkschaft organisiert, rechtswidrig) · *Sympathiestreik* · *Generalstreik* (politisch, in D unzulässig) · *Bummelstreik*.
**Aussperrung**: Gegenmittel der Arbeitgeber (nur suspendierende, verhältnismäßig).
**Rechtlich**: Streikrecht aus Art. 9 Abs. 3 GG; Streikgeld der Gewerkschaft für Mitglieder; Streikende erhalten kein Arbeitsentgelt.
`)
  .cards([
    ["Typischer Ablauf eines Tarifkonflikts?", "Kündigung → Verhandlungen → Scheitern → (Schlichtung) → Urabstimmung → Streik → Einigung → Urabstimmung über Ergebnis → neuer Tarifvertrag."],
    ["Was ist eine Urabstimmung?", "Abstimmung der Gewerkschaftsmitglieder über Streik (75 %) oder Annahme des Ergebnisses (25 % Zustimmung genügen)."],
    ["Was ist ein Schlichtungsverfahren?", "Neutrale Schlichter vermitteln, wenn Verhandlungen gescheitert sind."],
    ["Was ist ein Warnstreik?", "Zeitlich begrenzter Streik während der Verhandlungen – ohne Urabstimmung."],
    ["Was ist ein Schwerpunktstreik?", "Nur bestimmte Betriebe oder Bereiche eines Wirtschaftszweigs streiken."],
    ["Was ist ein Flächenstreik?", "Das ganze Tarifgebiet streikt."],
    ["Was ist ein wilder Streik?", "Ein nicht von der Gewerkschaft organisierter, rechtswidriger Streik."],
    ["Was ist ein Generalstreik?", "Allgemeiner, meist politischer Streik – in Deutschland unzulässig."],
    ["Was ist ein Sympathiestreik?", "Streik zur Unterstützung eines anderen Arbeitskampfes."],
    ["Was ist Aussperrung?", "Arbeitgeber schließen Arbeitnehmer von der Arbeit und Lohnzahlung aus – Gegenmittel zum Streik."],
    ["Was erhält ein streikendes Mitglied?", "Kein Arbeitsentgelt, aber Streikgeld der Gewerkschaft."],
    ["Wann beginnt die Friedenspflicht zu enden?", "Mit Ablauf bzw. Kündigung des Tarifvertrags."],
    ["Was heißt „Scheitern der Verhandlungen“?", "Eine Tarifpartei erklärt schriftlich, dass keine Einigung möglich ist."],
    ["Rechtsgrundlage Streikrecht?", "Art. 9 Abs. 3 GG (Koalitionsfreiheit)."],
  ])
  .gls([
    ["Urabstimmung", "Mitgliederabstimmung der Gewerkschaft über Streik oder Verhandlungsergebnis."],
    ["Warnstreik", "Kurzer, befristeter Streik während laufender Verhandlungen."],
    ["Aussperrung", "Arbeitgeberseitiges Kampfmittel gegen Streik."],
    ["Schlichtung", "Vermittlung durch neutrale Dritte."],
  ])
  .order("Bringen Sie die Schritte zum neuen Tarifvertrag in die richtige Reihenfolge.", ["Aufnahme von Tarifverhandlungen durch die Tarifpartner", "Erklärung des Scheiterns der Tarifverhandlungen durch eine Partei", "Urabstimmung über den Arbeitskampf mit nachfolgendem Streik", "Neue Verhandlungen während des Streiks", "Urabstimmung über das Ergebnis der Tarifrunde und Ende des Streiks"], { d: 2, e: "Typischer Ablauf nach Kündigung des Tarifvertrags." })
  .order("Bringen Sie den Ablauf einer Tarifauseinandersetzung in die richtige zeitliche Reihenfolge.", ["Beginn der Tarifverhandlungen zwischen Gewerkschaft und Arbeitgeber(-verband)", "Erklärung des Scheiterns der Tarifverhandlungen", "Urabstimmung der Gewerkschaftsmitglieder führt zum Streik", "Wiederaufnahme der Verhandlungen", "Urabstimmung über das Verhandlungsergebnis"], { d: 2 })
  .match("Ordnen Sie jede Streikart der Erklärung zu.", [
    ["Warnstreik", "Zeitlich begrenzt"],
    ["Schwerpunktstreik", "Nur bestimmte Bereiche eines Wirtschaftszweigs streiken"],
    ["Wilder Streik", "Nicht von der Gewerkschaft organisiert"],
    ["Flächenstreik", "Ein ganzes Tarifgebiet streikt"],
  ])
  .mc("Ein Streik ist nicht von der Gewerkschaft organisiert. Welche Streikart?", "Wilder Streik", ["Warnstreik", "Schwerpunktstreik", "Flächenstreik", "Generalstreik"])
  .mc("Fluglotsen legen während der laufenden Verhandlungen für zwei Stunden die Arbeit nieder. Welche Streikart?", "Warnstreik", ["Wilder Streik", "Flächenstreik", "Generalstreik", "Sympathiestreik"])
  .mc("Welche Mehrheit ist für einen Streik in der Urabstimmung üblich?", "75 % der Mitglieder", ["50 %", "25 %", "10 %", "100 %"])
  .mc("Wie viel Zustimmung genügt üblicherweise in der Urabstimmung für die Annahme eines Verhandlungsergebnisses?", "25 %", ["75 %", "50 %", "100 %", "10 %"])
  .mc("Welches Mittel haben Arbeitgeber im Arbeitskampf?", "Aussperrung", ["Warnstreik", "Urabstimmung", "Betriebsrat", "Kündigungsschutz"])
  .tf("Der Generalstreik ist in Deutschland ein zulässiges Mittel im Tarifkampf.", false)
  .tf("Ein Warnstreik setzt eine Urabstimmung voraus.", false)
  .cloze("Vor einem regulären Streik führt die Gewerkschaft eine [[Urabstimmung]] durch; üblich sind [[75]] % Zustimmung.")
  .done();

const br = T("politik-betriebsrat")
  .summary("Betriebsrat & Mitbestimmung", `
**Betriebsverfassungsgesetz (BetrVG)**: Betriebsrat in Betrieben mit **mind. 5 wahlberechtigten Arbeitnehmern** (Wahl alle **4 Jahre**, Wahlberechtigt ab 16, wählbar ab 18 und 6 Monate Betriebszugehörigkeit). Gewählt durch die Belegschaft; Größe nach Betriebsgröße.
**Beteiligungsrechte (Stufen)**: *Information* → *Anhörung* → *Beratung* → *Mitbestimmung* (Zustimmung nötig)
- **Mitbestimmung** (§ 87): Arbeitszeit, Urlaubsgrundsätze, Lohnformen, Überwachung, Ordnung im Betrieb, Sozialeinrichtungen
- **Mitwirkung**: Personalplanung, Stellenausschreibung, Kündigung (**Anhörung vor jeder Kündigung – sonst unwirksam**), Einstellung/Versetzung (Zustimmungsverweigerung möglich)
- **Jugend- und Auszubildendenvertretung (JAV)**: ab 5 Beschäftigten unter 18 bzw. Azubis bis 25; Wahl alle 2 Jahre
- **Betriebsvereinbarung**: Vertrag zwischen Arbeitgeber und Betriebsrat, gilt unmittelbar und zwingend für alle
- **Unternehmensmitbestimmung**: **Drittelbeteiligung** (500–2000 Beschäftigte: 1/3 Arbeitnehmer im Aufsichtsrat), **Mitbestimmungsgesetz** (> 2000: paritätisch 50/50), Montan-Mitbestimmung.
- **Betriebsversammlung**: mind. 1× pro Quartal
`)
  .cards([
    ["Ab wann kann ein Betriebsrat gewählt werden?", "In Betrieben mit mindestens 5 ständigen wahlberechtigten Arbeitnehmern (drei davon wählbar)."],
    ["Wie lange ist die Amtszeit des Betriebsrats?", "4 Jahre."],
    ["Wer ist wahlberechtigt zum Betriebsrat?", "Alle Arbeitnehmer ab 16 Jahren (inkl. Azubis)."],
    ["Wer ist wählbar zum Betriebsrat?", "Wahlberechtigte ab 18 Jahren mit 6 Monaten Betriebszugehörigkeit."],
    ["Welche Rechte hat der Betriebsrat bei Kündigungen?", "Er muss vor jeder Kündigung angehört werden – sonst ist sie unwirksam."],
    ["Beispiele für Mitbestimmung (§ 87 BetrVG)?", "Arbeitszeit, Urlaubsplan, Überwachung durch Technik, Lohngestaltung, Ordnungsregeln."],
    ["Was ist eine Betriebsvereinbarung?", "Vereinbarung zwischen Arbeitgeber und Betriebsrat, gilt für alle Beschäftigten unmittelbar."],
    ["Was ist die JAV?", "Jugend- und Auszubildendenvertretung – vertritt Beschäftigte unter 18 und Azubis bis 25."],
    ["Wann gibt es eine JAV?", "Bei mindestens 5 Jugendlichen/Azubis; Wahl alle 2 Jahre."],
    ["Was ist Drittelparität?", "Im Aufsichtsrat bei 500–2000 Beschäftigten stellen Arbeitnehmer ein Drittel der Sitze."],
    ["Was gilt bei über 2000 Beschäftigten?", "Mitbestimmungsgesetz: Aufsichtsrat paritätisch besetzt."],
    ["Was ist die Betriebsversammlung?", "Versammlung aller Arbeitnehmer; mindestens einmal pro Quartal."],
    ["Mitbestimmung vs. Mitwirkung?", "Mitbestimmung: Zustimmung nötig. Mitwirkung: Information, Anhörung, Beratung."],
    ["Was ist der Wirtschaftsausschuss?", "Informationsgremium ab 100 Beschäftigten zu wirtschaftlichen Angelegenheiten."],
    ["Wer kann den Betriebsrat abwählen oder wählt ihn?", "Die Belegschaft wählt ihn in geheimer Wahl."],
  ])
  .gls([
    ["Betriebsrat", "Gewählte Interessenvertretung der Arbeitnehmer im Betrieb."],
    ["Betriebsvereinbarung", "Vertrag zwischen Arbeitgeber und Betriebsrat."],
    ["JAV", "Jugend- und Auszubildendenvertretung."],
    ["Drittelparität", "Ein Drittel der Aufsichtsratssitze gehört den Arbeitnehmern."],
  ])
  .mc("Ab wie vielen ständigen wahlberechtigten Arbeitnehmern kann ein Betriebsrat gewählt werden?", "5", ["3", "10", "20", "50"])
  .mc("Wie lange dauert die Amtszeit eines Betriebsrats?", "4 Jahre", ["1 Jahr", "2 Jahre", "5 Jahre", "6 Jahre"])
  .mc("Der Arbeitgeber kündigt, ohne den Betriebsrat zu hören. Was gilt?", "Die Kündigung ist unwirksam.", ["Die Kündigung ist wirksam.", "Die Kündigung ist anfechtbar.", "Die Kündigung ist nur bei Azubis unwirksam.", "Sie ist wirksam, wenn der Arbeitnehmer zustimmt."])
  .mc("Bei welchem Thema hat der Betriebsrat ein Mitbestimmungsrecht?", "Beginn und Ende der täglichen Arbeitszeit", ["Auswahl der Werbekunden", "Höhe der Werbepreise", "Standortwahl der Kunden", "Rechtsform des Unternehmens"])
  .mc("Wer wählt die Jugend- und Auszubildendenvertretung?", "Jugendliche unter 18 und Auszubildende bis 25", ["Alle Arbeitnehmer", "Der Betriebsrat", "Die Geschäftsführung", "Die Gewerkschaft"])
  .mc("Wann besteht im Aufsichtsrat die Drittelparität?", "Bei Kapitalgesellschaften mit 500 bis 2000 Beschäftigten", ["Bei allen Unternehmen", "Bei unter 5 Beschäftigten", "Nur in der Montanindustrie", "Bei Personengesellschaften"])
  .match("Ordnen Sie das Recht der Beteiligungsstufe zu.", [
    ["Arbeitszeitregelung", "Mitbestimmung"],
    ["Anhörung vor Kündigung", "Mitwirkung"],
    ["Information über Personalplanung", "Informationsrecht"],
    ["Betriebsvereinbarung", "Gemeinsame Regelung mit Zustimmung beider Seiten"],
  ])
  .tf("Azubis dürfen den Betriebsrat mitwählen.", true)
  .tf("Eine Betriebsvereinbarung steht über dem Tarifvertrag.", false)
  .cloze("Der Betriebsrat wird alle [[4]] Jahre gewählt, die JAV alle [[2]] Jahre.")
  .done();

const sv = T("politik-sozialvers")
  .summary("Sozialversicherung & Künstlersozialkasse", `
**5 Säulen**: **Kranken-** (14,6 % + Zusatzbeitrag), **Renten-** (18,6 %), **Arbeitslosen-** (2,6 %), **Pflege-** (3,6 % + Zuschlag Kinderlose), **Unfallversicherung** (nur Arbeitgeber, Berufsgenossenschaft).
**Paritätisch** (je 50 %): Kranken-, Renten-, Arbeitslosen-, Pflegeversicherung; Unfall: 100 % Arbeitgeber.
**Sozialversicherungspflicht** für Arbeitnehmer; **Beitragsbemessungsgrenzen** (bis dahin Beitragspflicht); **Versicherungspflichtgrenze** KV; Minijob (≤ 603 € [2026]) pauschal.
**Prinzipien**: Solidarprinzip, Umlageverfahren (Rente: Generationenvertrag), Äquivalenzprinzip, Versicherungspflicht.
**Künstlersozialkasse (KSK)**: Selbstständige Künstler/Publizisten (Grafiker, Texter, Fotografen) zahlen **50 % Beiträge**, 50 % **Bund (20 %) und Verwerter/Künstlersozialabgabe (30 %)**. **Verwerter** (Agenturen, Verlage, Werbefirmen, die Künstleraufträge vergeben) zahlen **Künstlersozialabgabe** auf **Honorare** an selbstständige Künstler (Satz jährlich, z. B. 5 %). Nicht auf Honorare an juristische Personen (GmbH).
`)
  .cards([
    ["Nenne die fünf Zweige der Sozialversicherung.", "Kranken-, Renten-, Arbeitslosen-, Pflege- und Unfallversicherung."],
    ["Wer trägt die Beiträge zur Unfallversicherung?", "Allein der Arbeitgeber (Berufsgenossenschaft)."],
    ["Beitragsaufteilung bei Kranken-, Renten-, Arbeitslosen-, Pflegeversicherung?", "Paritätisch, je zur Hälfte Arbeitgeber und Arbeitnehmer."],
    ["Was ist das Solidarprinzip?", "Gesunde zahlen für Kranke, Junge für Alte – Beitrag nach Einkommen, Leistung nach Bedarf."],
    ["Was ist das Umlageverfahren?", "Die laufenden Beiträge der Erwerbstätigen finanzieren die aktuellen Renten (Generationenvertrag)."],
    ["Was ist die Beitragsbemessungsgrenze?", "Bis zu diesem Einkommen werden Beiträge erhoben; darüber hinaus nicht."],
    ["Wer meldet Arbeitnehmer zur Sozialversicherung an?", "Der Arbeitgeber."],
    ["Was ist ein Minijob?", "Geringfügige Beschäftigung bis zur Verdienstgrenze (603 € mtl. in 2026); pauschale Abgaben des Arbeitgebers."],
    ["Was ist die KSK?", "Künstlersozialkasse – Sozialversicherung für selbstständige Künstler und Publizisten."],
    ["Wer zahlt die Beiträge zur KSK?", "50 % der Versicherte, 50 % Verwerter (Künstlersozialabgabe) und Bund."],
    ["Wer ist Verwerter im Sinne der KSK?", "Unternehmen, die Aufträge an selbstständige Künstler vergeben (Agenturen, Verlage, Werbetreibende)."],
    ["Worauf wird die Künstlersozialabgabe erhoben?", "Auf die Honorare an selbstständige Künstler und Publizisten."],
    ["Gilt die Künstlersozialabgabe bei Aufträgen an eine GmbH?", "Nein – sie fällt nur bei Zahlungen an natürliche selbstständige Künstler an (Ausnahme Dienstleister-Konstrukte)."],
    ["Wer ist KSK-versichert?", "Selbstständige Künstler/Publizisten (z. B. Grafiker, Texter, Fotografen)."],
    ["Beitragssatz Rentenversicherung?", "18,6 % (je 9,3 % Arbeitgeber/Arbeitnehmer)."],
  ])
  .gls([
    ["Sozialversicherung", "Gesetzliche Pflichtversicherung für Arbeitnehmer."],
    ["KSK", "Künstlersozialkasse."],
    ["Verwerter", "Unternehmen, die Künstlerleistungen nutzen und dafür Abgaben zahlen."],
    ["Beitragsbemessungsgrenze", "Einkommensgrenze, bis zu der Beiträge zu zahlen sind."],
  ])
  .mc("Wer trägt die Beiträge zur gesetzlichen Unfallversicherung?", "Der Arbeitgeber allein", ["Arbeitnehmer allein", "Je zur Hälfte", "Der Staat", "Die Krankenkasse"])
  .mc("Eine Agentur beauftragt eine selbstständige Illustratorin. Welche Abgabe fällt für die Agentur an?", "Künstlersozialabgabe", ["Arbeitgeberanteil Rentenversicherung", "Gewerbesteuer", "Umlage U1", "Keine Abgabe"])
  .mc("Wie funktioniert die gesetzliche Rentenversicherung?", "Umlageverfahren (Generationenvertrag)", ["Kapitaldeckungsverfahren", "Staatlich garantiertes Sparkonto", "Beitrag nur durch den Arbeitgeber", "Freiwillig"])
  .mc("Welche Versicherung gehört nicht zur gesetzlichen Sozialversicherung?", "Haftpflichtversicherung", ["Krankenversicherung", "Pflegeversicherung", "Arbeitslosenversicherung", "Unfallversicherung"])
  .match("Ordnen Sie jedem Zweig die Aufgabe zu.", [
    ["Krankenversicherung", "Behandlung und Krankengeld"],
    ["Rentenversicherung", "Alters- und Erwerbsminderungsrente"],
    ["Arbeitslosenversicherung", "Arbeitslosengeld I"],
    ["Unfallversicherung", "Absicherung bei Arbeitsunfall und Berufskrankheit"],
  ])
  .tcalc(
    "Ein Arbeitnehmer verdient {b|eur} brutto im Monat. Der Arbeitnehmeranteil zur gesetzlichen Rentenversicherung beträgt 9,3 %. Wie hoch ist der Beitrag des Arbeitnehmers in Euro?",
    "b*0.093",
    { b: V.int(2200, 4800, 100) },
    { unit: "€", steps: ["{b|eur} · 9,3 %", "= {result|eur}"] },
  )
  .tcalc(
    "Eine Agentur zahlt im Jahr {h|eur0} € Honorare an selbstständige Künstler (keine GmbHs). Die Künstlersozialabgabe beträgt {s} %. Wie hoch ist die Abgabe?",
    "h*s/100",
    { h: V.int(10000, 80000, 5000), s: V.pick([4.2, 5, 5.2]) },
    { unit: "€", steps: ["{h|eur0} · {s} %", "= {result|eur}"] },
  )
  .tf("Der Arbeitgeber trägt die Unfallversicherung allein.", true)
  .tf("Die Künstlersozialabgabe wird auf Honorare an GmbHs erhoben.", false)
  .cloze("Die gesetzliche Rentenversicherung funktioniert nach dem [[Umlageverfahren]].")
  .done();

export default [
  { file: "politik/struktur.json", bundle: struktur },
  { file: "politik/tarifvertrag.json", bundle: { items: [tv] } },
  { file: "politik/arbeitskampf.json", bundle: { items: [ak] } },
  { file: "politik/betriebsrat.json", bundle: { items: [br] } },
  { file: "politik/sozialvers.json", bundle: { items: [sv] } },
];
