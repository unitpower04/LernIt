import { topic, V, structure, subject, lf, tp } from "./dsl.mjs";

const SRC = "FiCon (Themenübersicht KMK, Unterricht)";

const struktur = structure([
  subject("ficon", "FiCon – Finanzen & Controlling", "Rechnungswesen und Kostenrechnung (Prüfungsteil 3 Umsetzung & Steuerung)", "#ea580c", [
    lf("ficon-lf2", "LF2", "Gesetzliche Grundlagen & Finanzbuchhaltung", [3], [
      tp("ficon-jahresabschluss", "Inventur, Inventar, Bilanz & GuV", [3]),
      tp("ficon-buchen", "Buchen auf Bestands- und Erfolgskonten", [3]),
      tp("ficon-ust", "Umsatzsteuer & Vorsteuer", [3]),
      tp("ficon-abschreibung", "Abschreibungen auf Sachanlagen", [3]),
      tp("ficon-kennzahlen", "Bilanzkennzahlen", [3]),
    ]),
    lf("ficon-pr", "PR", "Prüfungsnahe Aufgaben Rechnungswesen (Teil 3)", [3], [
      tp("ficon-pr-aufgaben", "Prüfungsnahe Rechen- und Belegaufgaben", [3]),
    ]),
    lf("ficon-lf11", "LF11", "Gehaltsabrechnung & Kosten- und Leistungsrechnung", [3], [
      tp("ficon-gehalt", "Gehaltsabrechnung", [3]),
      tp("ficon-kostenarten", "Kostenartenrechnung", [3]),
      tp("ficon-bab", "Kostenstellenrechnung & BAB", [3]),
      tp("ficon-stundensatz", "Agenturstundensatz", [3]),
      tp("ficon-kalkulation", "Kostenträgerrechnung: Projektkalkulation", [3]),
      tp("ficon-db", "Deckungsbeitragsrechnung & Break-Even", [3]),
    ]),
  ]),
]);

const T = (k) => topic(k, { part: 3, src: SRC });

/* ---------- Jahresabschluss ---------- */
const ja = T("ficon-jahresabschluss")
  .summary("Inventur, Inventar, Bilanz & GuV", `
**Inventur** = Bestandsaufnahme aller Vermögensteile und Schulden (**körperlich**, **buchmäßig**; Stichtags-, ausgeweitete, permanente, Stichprobeninventur). **Inventar** = ausführliches Bestandsverzeichnis: **A Vermögen** (Anlage-/Umlaufvermögen) − **B Schulden** = **C Reinvermögen (Eigenkapital)**.
**Bilanz** = Kurzform des Inventars in **T-Form**: *Aktiva* (Mittelverwendung: Anlagevermögen, Umlaufvermögen) = *Passiva* (Mittelherkunft: Eigenkapital, Fremdkapital). Immer **Bilanzsumme links = rechts**.
**Anlagevermögen**: Gebäude, Fuhrpark, BGA (Betriebs- und Geschäftsausstattung), Maschinen · **Umlaufvermögen**: Vorräte, Forderungen, Bank, Kasse · **Fremdkapital**: Darlehen, Verbindlichkeiten aLuL.
**GuV** (Gewinn- und Verlustrechnung): Erträge − Aufwendungen = **Gewinn/Verlust**; Gewinn erhöht das Eigenkapital.
**Pflichten**: § 238–242 HGB: Inventur/Inventar zu Beginn und jährlich, Bilanz und GuV; Aufbewahrung **10 Jahre** (Bücher, Bilanzen), **6 Jahre** Geschäftsbriefe.
`)
  .cards([
    ["Was ist Inventur?", "Die Bestandsaufnahme aller Vermögensteile und Schulden zu einem Stichtag nach Art, Menge und Wert."],
    ["Was ist ein Inventar?", "Das ausführliche Bestandsverzeichnis: Vermögen − Schulden = Reinvermögen."],
    ["Wie berechnet sich das Reinvermögen?", "Vermögen − Schulden."],
    ["Was ist die Bilanz?", "Kurzgefasste Gegenüberstellung von Vermögen (Aktiva) und Kapital (Passiva) in T-Form."],
    ["Was zeigt die Aktivseite?", "Die Mittelverwendung: Anlage- und Umlaufvermögen."],
    ["Was zeigt die Passivseite?", "Die Mittelherkunft: Eigenkapital und Fremdkapital."],
    ["Nenne Beispiele für Anlagevermögen.", "Gebäude, Fuhrpark, Maschinen, BGA, Software."],
    ["Nenne Beispiele für Umlaufvermögen.", "Vorräte, Forderungen aLuL, Bankguthaben, Kasse."],
    ["Nenne Beispiele für Fremdkapital.", "Darlehen, Verbindlichkeiten aLuL, Rückstellungen."],
    ["Was ist die GuV?", "Gegenüberstellung von Erträgen und Aufwendungen eines Jahres; Saldo = Gewinn/Verlust."],
    ["Wie verändert ein Gewinn das Eigenkapital?", "Gewinn erhöht, Verlust mindert das Eigenkapital."],
    ["Aufbewahrungsfrist Bilanzen und Bücher?", "10 Jahre."],
    ["Aufbewahrungsfrist Handels-/Geschäftsbriefe?", "6 Jahre."],
    ["Nenne Inventurarten.", "Stichtagsinventur, ausgeweitete, vor-/nachverlegte, permanente Inventur, Stichprobeninventur."],
    ["Körperliche vs. buchmäßige Inventur?", "Körperlich: zählen, messen, wiegen. Buchmäßig: Forderungen und Schulden per Belege/Saldenlisten."],
    ["Was bedeutet Bilanzsumme?", "Summe der Aktiva = Summe der Passiva."],
    ["Was ist ein Bilanzgewinn?", "Gewinn, der in der Bilanz als Eigenkapitalmehrung ausgewiesen wird."],
    ["Was bedeutet Mittelherkunft?", "Woher das Kapital stammt (Eigen-/Fremdkapital)."],
    ["Was bedeutet Mittelverwendung?", "Wofür das Kapital eingesetzt wurde (Vermögen)."],
  ])
  .gls([
    ["Inventur", "Bestandsaufnahme von Vermögen und Schulden."],
    ["Inventar", "Verzeichnis aller Vermögensteile und Schulden."],
    ["Bilanz", "T-förmige Gegenüberstellung von Vermögen und Kapital."],
    ["GuV", "Gewinn- und Verlustrechnung."],
    ["Aktiva", "Aktivseite der Bilanz – Mittelverwendung."],
    ["Passiva", "Passivseite der Bilanz – Mittelherkunft."],
    ["Reinvermögen", "Eigenkapital: Vermögen minus Schulden."],
  ])
  .mc("Auf welcher Bilanzseite stehen die Verbindlichkeiten aus Lieferungen und Leistungen?", "Passivseite", ["Aktivseite", "Auf keiner", "Auf der Aktivseite unter Umlaufvermögen", "In der GuV"])
  .mc("Welche Aussage zur Bilanz ist richtig?", "Aktiva und Passiva sind immer gleich hoch.", ["Aktiva sind immer höher als Passiva.", "Passiva sind immer höher.", "Die Bilanz enthält Umsatz und Kosten.", "Sie besteht nur aus Fremdkapital."])
  .mc("Wie berechnet man das Eigenkapital im Inventar?", "Vermögen − Schulden", ["Vermögen + Schulden", "Schulden − Vermögen", "Umlaufvermögen − Anlagevermögen", "Erträge − Aufwendungen"])
  .mc("Welche Position gehört zum Anlagevermögen?", "Fuhrpark", ["Bankguthaben", "Forderungen aLuL", "Kasse", "Verbindlichkeiten"])
  .mc("Wie lange müssen Jahresabschlüsse aufbewahrt werden?", "10 Jahre", ["2 Jahre", "5 Jahre", "6 Jahre", "30 Jahre"])
  .mc("Welche Bilanzposition gehört zum Umlaufvermögen?", "Forderungen aus Lieferungen und Leistungen", ["Gebäude", "Maschinen", "Darlehen", "Fuhrpark"])
  .match("Ordnen Sie jede Position der Bilanzseite/Gruppe zu.", [
    ["Fuhrpark", "Anlagevermögen"],
    ["Forderungen aLuL", "Umlaufvermögen"],
    ["Bankdarlehen", "Fremdkapital"],
    ["Eigenkapital", "Passiva (Eigenkapital)"],
  ])
  .match("Ordnen Sie die Begriffe zu.", [
    ["Inventur", "Tätigkeit der Bestandsaufnahme"],
    ["Inventar", "Ergebnis der Bestandsaufnahme (Verzeichnis)"],
    ["Bilanz", "Kurzform in T-Form"],
    ["GuV", "Erträge − Aufwendungen"],
  ])
  .tf("Die Bilanz ist eine Gegenüberstellung von Erträgen und Aufwendungen.", false, { e: "Das ist die GuV." })
  .tf("Ein Gewinn erhöht das Eigenkapital.", true)
  .cloze("Die [[Aktivseite]] zeigt die Mittelverwendung, die [[Passivseite]] die Mittelherkunft.")
  .tcalc(
    "Eine Agentur hat Fuhrpark {fp|eur}, BGA {bga|eur}, Forderungen {fo|eur}, Bank {ba|eur}, Kasse {ka|eur} und Verbindlichkeiten aLuL {vb|eur} sowie ein Darlehen {da|eur}. Berechnen Sie das Eigenkapital.",
    "fp+bga+fo+ba+ka-vb-da",
    { fp: V.int(25000, 40000, 5000), bga: V.int(15000, 30000, 2000), fo: V.int(15000, 40000, 2000), ba: V.int(5000, 30000, 1000), ka: V.int(300, 2000, 100), vb: V.int(5000, 15000, 1000), da: V.int(5000, 20000, 5000) },
    { unit: "€", steps: ["Vermögen = Fuhrpark + BGA + Forderungen + Bank + Kasse", "Schulden = Verbindlichkeiten + Darlehen", "Eigenkapital = Vermögen − Schulden = {result|eur}"] },
  )
  .tcalc(
    "Die Erträge einer Agentur betragen {e|eur}, die Aufwendungen {a|eur}. Wie hoch ist der Jahresgewinn (Verlust negativ)?",
    "e-a",
    { e: V.int(200000, 600000, 10000), a: V.int(150000, 580000, 10000) },
    { unit: "€", steps: ["Gewinn = Erträge − Aufwendungen", "= {e|eur} − {a|eur} = {result|eur}"] },
  )
  .done();

/* ---------- Buchen ---------- */
const bu = T("ficon-buchen")
  .summary("Buchen auf Bestands- und Erfolgskonten", `
**Buchungssatz**: *Soll an Haben* (Soll-Betrag = Haben-Betrag). Bestandskonten: **Aktivkonten** (Anfangsbestand im Soll, Zugang Soll, Abgang Haben) und **Passivkonten** (Anfangsbestand Haben, Zugang Haben, Abgang Soll).
**Erfolgskonten**: **Aufwandskonten** (Soll: Aufwand mindert Eigenkapital) · **Ertragskonten** (Haben: Ertrag mehrt Eigenkapital); Abschluss über **GuV-Konto** → **Eigenkapital**.
**Typische Buchungen**
- Eingangsrechnung Büromaterial 119 € brutto: *Büromaterial 100 + Vorsteuer 19 an Verbindlichkeiten aLuL 119*
- Ausgangsrechnung Werbedienstleistung 11.900 € brutto: *Forderungen aLuL 11.900 an Umsatzerlöse 10.000 + Umsatzsteuer 1.900*
- Banküberweisung Miete: *Mietaufwand an Bank*
- Kundenzahlung: *Bank an Forderungen aLuL*
- Lieferantenzahlung: *Verbindlichkeiten aLuL an Bank*
- Gehalt: *Gehälter an Bank*
**Konten**: Kasse, Bank, Forderungen aLuL, Verbindlichkeiten aLuL, Vorsteuer, Umsatzsteuer, Umsatzerlöse, Mietaufwand, Fremdleistungen (Fremdarbeiten), Büromaterial.
`)
  .cards([
    ["Buchungssatz-Regel?", "Soll an Haben – Summe der Sollbuchungen gleich Summe der Habenbuchungen."],
    ["Wo steht der Anfangsbestand bei Aktivkonten?", "Im Soll."],
    ["Wo steht der Anfangsbestand bei Passivkonten?", "Im Haben."],
    ["Zugänge bei Aktivkonten?", "Im Soll."],
    ["Abgänge bei Aktivkonten?", "Im Haben."],
    ["Zugänge bei Passivkonten?", "Im Haben."],
    ["Abgänge bei Passivkonten?", "Im Soll."],
    ["Wo werden Aufwendungen gebucht?", "Im Soll der Aufwandskonten."],
    ["Wo werden Erträge gebucht?", "Im Haben der Ertragskonten."],
    ["Was ist ein Aktivtausch?", "Tausch innerhalb der Aktiva – Bilanzsumme unverändert (z. B. Bank an Kasse)."],
    ["Was ist ein Passivtausch?", "Tausch innerhalb der Passiva (z. B. Verbindlichkeit in Darlehen umwandeln)."],
    ["Was ist eine Aktiv-Passiv-Mehrung?", "Aktiva und Passiva steigen (z. B. Wareneinkauf auf Ziel)."],
    ["Was ist eine Aktiv-Passiv-Minderung?", "Aktiva und Passiva sinken (z. B. Verbindlichkeit per Bank begleichen)."],
    ["Buchung Eingangsrechnung Büromaterial 100 € netto + 19 % USt?", "Büromaterial 100, Vorsteuer 19 an Verbindlichkeiten aLuL 119."],
    ["Buchung Ausgangsrechnung 1.000 € netto + 19 % USt?", "Forderungen aLuL 1.190 an Umsatzerlöse 1.000 und Umsatzsteuer 190."],
    ["Buchung Kundenzahlung?", "Bank an Forderungen aLuL."],
    ["Buchung Zahlung an Lieferanten?", "Verbindlichkeiten aLuL an Bank."],
    ["Wie wird der Gewinn auf dem Konto übernommen?", "GuV-Konto wird über Eigenkapital abgeschlossen."],
    ["Was sind Fremdleistungen?", "Aufwand für bezogene Leistungen Dritter (z. B. Druck, Mediabuchung)."],
  ])
  .gls([
    ["Buchungssatz", "Soll an Haben mit gleichen Beträgen."],
    ["Aktivkonto", "Bestandskonto für Vermögen."],
    ["Passivkonto", "Bestandskonto für Kapital/Schulden."],
    ["Aufwandskonto", "Erfolgskonto, auf dem Wertverzehr im Soll gebucht wird."],
    ["Ertragskonto", "Erfolgskonto, auf dem Wertzuwachs im Haben gebucht wird."],
  ])
  .mc("Welche Buchung ist bei Banküberweisung einer Eingangsrechnung für Büromaterial richtig?", "Verbindlichkeiten aLuL an Bank", ["Bank an Verbindlichkeiten aLuL", "Büromaterial an Bank", "Forderungen aLuL an Bank", "Bank an Büromaterial"])
  .mc("Eine Kundin zahlt eine Rechnung per Überweisung. Welche Buchung?", "Bank an Forderungen aLuL", ["Forderungen aLuL an Bank", "Bank an Umsatzerlöse", "Kasse an Forderungen", "Umsatzerlöse an Bank"])
  .mc("Ein Aktivkonto: Wo wird der Zugang gebucht?", "Im Soll", ["Im Haben", "Gar nicht", "In der GuV", "Auf der Passivseite"])
  .mc("Welcher Geschäftsfall ist ein Aktivtausch?", "Barabhebung vom Bankkonto in die Kasse", ["Zahlung einer Miete", "Wareneinkauf auf Ziel", "Aufnahme eines Darlehens", "Gehaltszahlung"])
  .mc("Welcher Geschäftsfall ist ein Passivtausch?", "Eine Verbindlichkeit wird in ein Darlehen umgewandelt.", ["Banküberweisung an Lieferanten", "Kundenzahlung", "Kauf auf Ziel", "Barkauf"])
  .match("Ordnen Sie jeden Geschäftsfall der Bilanzveränderung zu.", [
    ["Kauf Büromöbel auf Ziel", "Aktiv-Passiv-Mehrung"],
    ["Bezahlen Lieferantenrechnung per Bank", "Aktiv-Passiv-Minderung"],
    ["Bar einzahlen aufs Bankkonto", "Aktivtausch"],
    ["Umwandlung Verbindlichkeit in Darlehen", "Passivtausch"],
  ])
  .booking("Buchen Sie den Eingang einer Rechnung über Fremdleistungen (netto 1.000 €, 19 % USt = 190 €).", ["Fremdleistungen", "Vorsteuer", "Verbindlichkeiten aLuL", "Bank", "Umsatzerlöse"], [
    ["Fremdleistungen", "S", 1000],
    ["Vorsteuer", "S", 190],
    ["Verbindlichkeiten aLuL", "H", 1190],
  ])
  .tbooking(
    "Eingangsrechnung für {ctx.art}: netto {n|eur}, Umsatzsteuer 19 %. Buchen Sie die Rechnung.",
    ["{ctx.konto}", "Vorsteuer", "Verbindlichkeiten aLuL", "Bank", "Umsatzerlöse"],
    [["{ctx.konto}", "S", "n"], ["Vorsteuer", "S", "n*0.19"], ["Verbindlichkeiten aLuL", "H", "n*1.19"]],
    { ctx: V.pick([{ art: "Büromaterial", konto: "Büromaterial" }, { art: "Druckleistungen", konto: "Fremdleistungen" }, { art: "die Büromiete", konto: "Mietaufwand" }]), n: V.int(200, 4000, 100) },
  )
  .tbooking(
    "Ausgangsrechnung: Werbedienstleistung netto {n|eur}, Umsatzsteuer 19 %. Buchen Sie die Rechnung.",
    ["Forderungen aLuL", "Umsatzerlöse", "Umsatzsteuer", "Bank", "Vorsteuer"],
    [["Forderungen aLuL", "S", "n*1.19"], ["Umsatzerlöse", "H", "n"], ["Umsatzsteuer", "H", "n*0.19"]],
    { n: V.int(1000, 12000, 500) },
  )
  .tbooking(
    "Ein Kunde überweist {b|eur} für eine offene Rechnung. Buchen Sie den Zahlungseingang.",
    ["Bank", "Forderungen aLuL", "Umsatzerlöse", "Kasse"],
    [["Bank", "S", "b"], ["Forderungen aLuL", "H", "b"]],
    { b: V.int(500, 15000, 100) },
  )
  .tf("Auf Passivkonten steht der Anfangsbestand im Soll.", false)
  .tf("Aufwendungen werden im Soll gebucht.", true)
  .cloze("Der Buchungssatz lautet immer [[Soll]] an [[Haben]].", { d: 1 })
  .done();

/* ---------- Umsatzsteuer ---------- */
const us = T("ficon-ust")
  .summary("Umsatzsteuer & Vorsteuer", `
**Umsatzsteuer (USt)**: Verbrauchsteuer, trägt der **Endverbraucher**; Unternehmen führen sie als **durchlaufender Posten** ab. Regelsatz **19 %**, ermäßigt **7 %** (Lebensmittel, Bücher …).
**Vorsteuer** = USt aus **Eingangsrechnungen** (Forderung gegen Finanzamt) · **Umsatzsteuer** = USt aus **Ausgangsrechnungen** (Verbindlichkeit).
**Zahllast** = Umsatzsteuer − Vorsteuer > 0 → Zahlung ans Finanzamt (bis 10. des Folgemonats, Voranmeldung). **Vorsteuerüberhang** = Vorsteuer > Umsatzsteuer → Erstattung.
**Rechnen**: Netto + 19 % = Brutto · Brutto : 1,19 = Netto · USt = Netto × 0,19 = Brutto × 19/119.
**Buchung Abschluss**: *Umsatzsteuer an Vorsteuer*; Rest *Umsatzsteuer an Bank* (Zahllast).
`)
  .cards([
    ["Wer trägt die Umsatzsteuer wirtschaftlich?", "Der Endverbraucher – für Unternehmen ist sie ein durchlaufender Posten."],
    ["Regelsteuersatz der USt?", "19 %."],
    ["Ermäßigter Steuersatz?", "7 % (z. B. Lebensmittel, Bücher, Zeitungen)."],
    ["Was ist Vorsteuer?", "Die in Eingangsrechnungen gezahlte Umsatzsteuer – Forderung gegen das Finanzamt."],
    ["Was ist Umsatzsteuer (auf dem Konto)?", "Die in Ausgangsrechnungen berechnete USt – Verbindlichkeit gegenüber dem Finanzamt."],
    ["Zahllast?", "Umsatzsteuer größer als Vorsteuer: Differenz wird ans Finanzamt gezahlt."],
    ["Vorsteuerüberhang?", "Vorsteuer größer als Umsatzsteuer: das Finanzamt erstattet die Differenz."],
    ["Wie rechnet man vom Netto- auf den Bruttobetrag?", "Netto × 1,19."],
    ["Wie rechnet man vom Brutto- auf den Nettobetrag?", "Brutto : 1,19."],
    ["Wie berechnet man die USt aus dem Bruttobetrag?", "Brutto × 19/119."],
    ["Bis wann erfolgt die USt-Voranmeldung?", "Bis zum 10. des Folgemonats (ggf. mit Dauerfristverlängerung)."],
    ["Wie wird die Zahllast gebucht?", "Umsatzsteuer an Vorsteuer, Rest Umsatzsteuer an Bank."],
    ["Was ist eine Kleinunternehmerregelung?", "Bis zur Umsatzgrenze (25.000 € im Vorjahr, 100.000 € lfd. Jahr ab 2025) keine USt auf Rechnungen."],
  ])
  .gls([
    ["Vorsteuer", "USt aus Eingangsrechnungen – Anspruch gegenüber dem Finanzamt."],
    ["Umsatzsteuer", "Steuer auf Ausgangsrechnungen – Schuld gegenüber dem Finanzamt."],
    ["Zahllast", "Von Unternehmen an das Finanzamt zu zahlende Differenz."],
    ["Vorsteuerüberhang", "Erstattungsanspruch gegen das Finanzamt."],
  ])
  .mc("Wie wird die Umsatzsteuerzahllast ermittelt?", "Umsatzsteuer − Vorsteuer", ["Vorsteuer − Umsatzsteuer", "Umsatzsteuer + Vorsteuer", "Netto × 19 %", "Brutto : 1,19"])
  .mc("Die Vorsteuer übersteigt die Umsatzsteuer. Wie nennt man das?", "Vorsteuerüberhang", ["Zahllast", "Umsatzüberhang", "Gewinn", "Rückstellung"])
  .mc("Wo erscheint die Vorsteuer in der Bilanz?", "Als Forderung gegenüber dem Finanzamt (Aktiva)", ["Als Verbindlichkeit", "Als Eigenkapital", "In der GuV", "Gar nicht"])
  .mc("Wer trägt die Umsatzsteuer am Ende wirtschaftlich?", "Der Endverbraucher", ["Der Hersteller", "Das Finanzamt", "Die Agentur", "Der Großhändler"])
  .match("Ordnen Sie zu.", [
    ["Rechnung eines Lieferanten (Eingang)", "Vorsteuer"],
    ["Rechnung an einen Kunden (Ausgang)", "Umsatzsteuer"],
    ["Umsatzsteuer größer als Vorsteuer", "Zahllast"],
    ["Vorsteuer größer als Umsatzsteuer", "Vorsteuerüberhang"],
  ])
  .tcalc(
    "Eine Agentur stellt netto {n|eur} in Rechnung. Wie hoch ist der Bruttobetrag bei 19 % Umsatzsteuer?",
    "n*1.19",
    { n: V.int(500, 20000, 100) },
    { unit: "€", steps: ["Brutto = Netto · 1,19 = {result|eur}"] },
  )
  .tcalc(
    "Die Eingangsrechnung beträgt brutto {b|eur} (19 % USt). Wie hoch ist die Vorsteuer?",
    "b*19/119",
    { b: V.int(595, 11900, 595) },
    { unit: "€", steps: ["Vorsteuer = Brutto · 19/119 = {result|eur}"] },
  )
  .tcalc(
    "Im Monat entstehen Umsatzsteuer {u|eur} und Vorsteuer {v|eur}. Wie hoch ist die Zahllast an das Finanzamt (negativ = Erstattung)?",
    "u-v",
    { u: V.int(4000, 12000, 500), v: V.int(1000, 9000, 500) },
    { unit: "€", steps: ["Zahllast = Umsatzsteuer − Vorsteuer = {result|eur}"] },
  )
  .tf("Die Umsatzsteuer ist für Unternehmen ein durchlaufender Posten.", true)
  .tf("Der ermäßigte Steuersatz beträgt 19 %.", false)
  .cloze("Bei einer [[Zahllast]] zahlt das Unternehmen an das Finanzamt, bei einem [[Vorsteuerüberhang]] erhält es Erstattung.")
  .done();

/* ---------- Abschreibung ---------- */
const ab = T("ficon-abschreibung")
  .summary("Abschreibungen auf Sachanlagen", `
**Abschreibung (AfA)** = planmäßige Verteilung der **Anschaffungskosten** auf die **Nutzungsdauer** (Wertminderung durch Nutzung/Alter). Mindert Gewinn (Aufwand), aber **keine Auszahlung** → Innenfinanzierung.
**Anschaffungskosten** = Anschaffungspreis (netto) + Anschaffungsnebenkosten (Fracht, Montage) − Preisnachlässe (Rabatt, Skonto). **Vorsteuer** gehört nicht dazu.
**Linear**: AfA/Jahr = Anschaffungskosten : Nutzungsdauer; Abschreibungssatz = 100 % : ND.
**Anteilig im Anschaffungsjahr** (monatsgenau): × Monate/12.
**Restbuchwert** = AK − bisherige AfA. **Erinnerungswert 1 €** bei voller Abschreibung noch genutzter Anlagen.
**GWG**: Wirtschaftsgüter bis **800 € netto**: Sofortabschreibung; **Sammelposten** 250–1.000 € (5 Jahre).
**Buchung**: *Abschreibungen auf Sachanlagen an Fuhrpark/BGA*.
`)
  .cards([
    ["Was ist Abschreibung?", "Verteilung der Anschaffungskosten auf die Nutzungsdauer – Erfassung der Wertminderung."],
    ["Aus welchen Bestandteilen bestehen die Anschaffungskosten?", "Anschaffungspreis (netto) + Nebenkosten − Preisnachlässe."],
    ["Gehört die Vorsteuer zu den Anschaffungskosten?", "Nein – sie wird als Forderung gebucht."],
    ["Wie berechnet sich die lineare Abschreibung?", "Anschaffungskosten : Nutzungsdauer."],
    ["Abschreibungssatz linear?", "100 % : Nutzungsdauer in Jahren."],
    ["Was bedeutet anteilige Abschreibung im Anschaffungsjahr?", "Abschreibung monatsgenau ab Anschaffung: Jahresbetrag × Monate : 12."],
    ["Was ist der Restbuchwert?", "Anschaffungskosten abzüglich der bisher vorgenommenen Abschreibungen."],
    ["Was ist der Erinnerungswert?", "1 € – bleibt für voll abgeschriebene, noch genutzte Anlagegüter in der Bilanz."],
    ["Was sind GWG?", "Geringwertige Wirtschaftsgüter bis 800 € netto – sofort abschreibbar."],
    ["Wie wirkt die Abschreibung auf den Gewinn?", "Sie ist Aufwand und mindert den Gewinn."],
    ["Warum ist Abschreibung Innenfinanzierung?", "Sie ist Aufwand ohne Auszahlung – Mittel fließen über Umsatzerlöse zurück."],
    ["Buchung der Abschreibung?", "Abschreibungen auf Sachanlagen an Anlagekonto (z. B. Fuhrpark)."],
    ["Nenne Abschreibungsgründe.", "Nutzung (Verschleiß), Zeit, technischer Fortschritt, wirtschaftliche Entwertung."],
  ])
  .gls([
    ["AfA", "Absetzung für Abnutzung."],
    ["Anschaffungskosten", "Kaufpreis netto plus Nebenkosten minus Nachlässe."],
    ["Restbuchwert", "Anschaffungskosten minus kumulierte Abschreibung."],
    ["GWG", "Geringwertiges Wirtschaftsgut."],
  ])
  .mc("Welche Position gehört zu den Anschaffungskosten?", "Montagekosten", ["Vorsteuer", "Umsatzsteuer", "Verkaufspreis", "Gewinnaufschlag"])
  .mc("Wie wirkt sich die Abschreibung auf den Gewinn aus?", "Sie mindert den Gewinn.", ["Sie erhöht den Gewinn.", "Sie wirkt nicht.", "Sie erhöht das Eigenkapital.", "Sie erhöht die Liquidität sofort."])
  .mc("Wie hoch ist der lineare Abschreibungssatz bei 8 Jahren Nutzungsdauer?", "12,5 %", ["8 %", "10 %", "12 %", "15 %"])
  .mc("Welcher Wert bleibt für ein voll abgeschriebenes, noch genutztes Gut in der Bilanz?", "Erinnerungswert von 1 €", ["0 €", "10 €", "Anschaffungskosten", "Marktwert"])
  .mc("Wie wird die Abschreibung gebucht?", "Abschreibungen auf Sachanlagen an Anlagekonto", ["Anlagekonto an Abschreibungen", "Bank an Abschreibungen", "Abschreibungen an Bank", "Eigenkapital an Abschreibung"])
  .match("Ordnen Sie zu.", [
    ["Anschaffungspreis netto + Nebenkosten − Nachlässe", "Anschaffungskosten"],
    ["Anschaffungskosten − bisherige AfA", "Restbuchwert"],
    ["Wert 1 €", "Erinnerungswert"],
    ["bis 800 € netto", "GWG"],
  ])
  .tcalc(
    "Eine Agentur kauft einen {obj} für {p|eur} netto. Die Montage kostet {m|eur}, ein Rabatt von {r|eur} wird gewährt. Nutzungsdauer {n} Jahre, lineare Abschreibung. Wie hoch ist die jährliche Abschreibung?",
    "(p+m-r)/n",
    { obj: V.pick(["Server", "Kamerasystem", "Großformatdrucker", "Dienstwagen"]), p: V.int(6000, 30000, 1000), m: V.int(200, 1000, 100), r: V.int(100, 800, 100), n: V.pick([3, 4, 5, 6, 8]) },
    { unit: "€", steps: ["Anschaffungskosten = {p|eur} + {m|eur} − {r|eur}", "AfA = Anschaffungskosten : {n} = {result|eur}"] },
  )
  .tcalc(
    "Ein Gerät mit Anschaffungskosten von {ak|eur} und einer Nutzungsdauer von {n} Jahren wird zum {mo}. (Monat Nr.) des Jahres angeschafft (Anschaffung am Monatsanfang). Wie hoch ist die anteilige Abschreibung im Anschaffungsjahr?",
    "ak/n*(13-mo)/12",
    { ak: V.int(6000, 24000, 1200), n: V.pick([3, 4, 5, 6]), mo: V.int(2, 11, 1, "raw") },
    { unit: "€", steps: ["Jahres-AfA = {ak|eur} : {n}", "anteilig = Jahres-AfA · (13 − {mo}) : 12 = {result|eur}"] },
  )
  .tcalc(
    "Ein Fahrzeug (Anschaffungskosten {ak|eur}) wird {n} Jahre linear abgeschrieben. Wie hoch ist der Restbuchwert nach {j} Jahren?",
    "ak-ak/n*j",
    { ak: V.int(10000, 40000, 2000), n: V.pick([5, 6, 8]), j: V.int(1, 4, 1, "raw") },
    { unit: "€", steps: ["AfA/Jahr = {ak|eur} : {n}", "Restbuchwert = {ak|eur} − {j} · AfA = {result|eur}"] },
  )
  .tf("Die Vorsteuer erhöht die Anschaffungskosten.", false)
  .tf("Abschreibungen sind Aufwand ohne Auszahlung.", true)
  .cloze("Bei voller Abschreibung verbleibt ein [[Erinnerungswert]] von [[1]] €.")
  .done();

/* ---------- Kennzahlen ---------- */
const kz = T("ficon-kennzahlen")
  .summary("Bilanzkennzahlen", `
| Kennzahl | Formel |
|---|---|
| **Umsatzrentabilität** | Gewinn : Umsatzerlöse × 100 |
| **Eigenkapitalrentabilität** | Gewinn : Eigenkapital × 100 |
| **Gesamtkapitalrentabilität** | (Gewinn + FK-Zinsen) : Gesamtkapital × 100 |
| **Eigenkapitalquote** | Eigenkapital : Gesamtkapital × 100 |
| **Fremdkapitalquote** | Fremdkapital : Gesamtkapital × 100 |
| **Anlagendeckungsgrad I** | Eigenkapital : Anlagevermögen × 100 (goldene Bilanzregel: ≥ 100 %) |
| **Anlagendeckungsgrad II** | (Eigenkapital + langfr. FK) : Anlagevermögen × 100 (≥ 100 %) |
| **Liquidität 1/2/3** | Zahlungsmittel / (+ Forderungen) / (+ Vorräte) : kurzfr. Verbindlichkeiten |

Eigenkapitalquote hoch → finanziell stabil; Fremdkapitalquote = 100 % − EK-Quote. **Leverage-Effekt**: Gesamtkapitalrentabilität > FK-Zins → Fremdkapital erhöht EK-Rentabilität.
`)
  .cards([
    ["Umsatzrentabilität?", "Gewinn : Umsatzerlöse · 100 – wie viel Gewinn pro 100 € Umsatz."],
    ["Eigenkapitalrentabilität?", "Gewinn : Eigenkapital · 100 – Verzinsung des Eigenkapitals."],
    ["Gesamtkapitalrentabilität?", "(Gewinn + Fremdkapitalzinsen) : Gesamtkapital · 100."],
    ["Eigenkapitalquote?", "Eigenkapital : Gesamtkapital · 100."],
    ["Fremdkapitalquote?", "Fremdkapital : Gesamtkapital · 100 (= 100 % − EK-Quote)."],
    ["Anlagendeckungsgrad I?", "Eigenkapital : Anlagevermögen · 100."],
    ["Anlagendeckungsgrad II?", "(Eigenkapital + langfristiges Fremdkapital) : Anlagevermögen · 100."],
    ["Goldene Bilanzregel?", "Langfristig gebundenes Vermögen sollte durch langfristiges Kapital gedeckt sein (Deckungsgrad ≥ 100 %)."],
    ["Was zeigt eine hohe Eigenkapitalquote?", "Finanzielle Stabilität und Unabhängigkeit von Gläubigern."],
    ["Was ist der Leverage-Effekt?", "Wenn die Gesamtkapitalrentabilität über dem Fremdkapitalzins liegt, steigt die EK-Rentabilität durch mehr Fremdkapital."],
    ["Liquidität 1. Grades?", "Zahlungsmittel : kurzfristige Verbindlichkeiten · 100."],
    ["Wofür dienen Kennzahlen?", "Zur Beurteilung von Rentabilität, Finanzierung, Liquidität und für Vergleiche."],
  ])
  .gls([
    ["Rentabilität", "Verhältnis von Gewinn zu eingesetztem Kapital oder Umsatz."],
    ["Eigenkapitalquote", "Anteil des Eigenkapitals am Gesamtkapital."],
    ["Anlagendeckung", "Verhältnis von Eigenkapital (bzw. langfristigem Kapital) zum Anlagevermögen."],
    ["Leverage-Effekt", "Hebelwirkung des Fremdkapitals auf die Eigenkapitalrentabilität."],
  ])
  .mc("Welche Kennzahl setzt den Gewinn ins Verhältnis zum Umsatz?", "Umsatzrentabilität", ["Eigenkapitalrentabilität", "Gesamtkapitalrentabilität", "Eigenkapitalquote", "Anlagendeckungsgrad"])
  .mc("Wie berechnet sich die Eigenkapitalquote?", "Eigenkapital : Gesamtkapital × 100", ["Fremdkapital : Eigenkapital", "Gewinn : Eigenkapital", "Eigenkapital : Anlagevermögen", "Gewinn : Umsatz"])
  .mc("Der Anlagendeckungsgrad I beträgt 80 %. Was bedeutet das?", "Das Anlagevermögen ist nur zu 80 % durch Eigenkapital gedeckt.", ["Das Anlagevermögen ist doppelt gedeckt.", "Das Unternehmen ist überschuldet.", "Die Liquidität ist gesichert.", "Der Gewinn beträgt 80 %."])
  .mc("Wann lohnt sich zusätzliches Fremdkapital (Leverage)?", "Wenn die Gesamtkapitalrentabilität über dem Fremdkapitalzins liegt", ["Wenn der Zins über der Rentabilität liegt", "Immer", "Nie", "Wenn das Eigenkapital negativ ist"])
  .match("Ordnen Sie jede Kennzahl der Formel zu.", [
    ["Umsatzrentabilität", "Gewinn : Umsatz"],
    ["Eigenkapitalrentabilität", "Gewinn : Eigenkapital"],
    ["Eigenkapitalquote", "Eigenkapital : Gesamtkapital"],
    ["Anlagendeckungsgrad I", "Eigenkapital : Anlagevermögen"],
  ])
  .tcalc(
    "Eine Agentur erzielt einen Umsatz von {u|eur} und einen Gewinn von {g|eur}. Berechnen Sie die Umsatzrentabilität in Prozent.",
    "g/u*100",
    { u: V.int(400000, 900000, 50000), g: V.int(20000, 90000, 5000) },
    { unit: "%", steps: ["Gewinn : Umsatz · 100 = {g|eur} : {u|eur} · 100", "= {result} %"] },
  )
  .tcalc(
    "Eigenkapital {ek|eur}, Fremdkapital {fk|eur}. Berechnen Sie die Eigenkapitalquote in Prozent.",
    "ek/(ek+fk)*100",
    { ek: V.int(100000, 400000, 20000), fk: V.int(100000, 500000, 20000) },
    { unit: "%", steps: ["Gesamtkapital = {ek|eur} + {fk|eur}", "Quote = EK : Gesamtkapital · 100 = {result} %"] },
  )
  .tcalc(
    "Gewinn {g|eur}, Eigenkapital {ek|eur}. Berechnen Sie die Eigenkapitalrentabilität in Prozent.",
    "g/ek*100",
    { g: V.int(20000, 80000, 5000), ek: V.int(150000, 400000, 25000) },
    { unit: "%", steps: ["Gewinn : Eigenkapital · 100 = {result} %"] },
  )
  .tcalc(
    "Eigenkapital {ek|eur}, Anlagevermögen {av|eur}. Berechnen Sie den Anlagendeckungsgrad I in Prozent.",
    "ek/av*100",
    { ek: V.int(100000, 300000, 20000), av: V.int(120000, 350000, 20000) },
    { unit: "%", steps: ["Eigenkapital : Anlagevermögen · 100 = {result} %"] },
  )
  .tf("Eine hohe Fremdkapitalquote bedeutet immer hohe Stabilität.", false)
  .cloze("Die [[Eigenkapitalquote]] und die [[Fremdkapitalquote]] ergeben zusammen 100 %.")
  .done();

export default [
  { file: "ficon/struktur.json", bundle: struktur },
  { file: "ficon/lf2-jahresabschluss.json", bundle: { items: [ja] } },
  { file: "ficon/lf2-buchen.json", bundle: { items: [bu] } },
  { file: "ficon/lf2-ust.json", bundle: { items: [us] } },
  { file: "ficon/lf2-abschreibung.json", bundle: { items: [ab] } },
  { file: "ficon/lf2-kennzahlen.json", bundle: { items: [kz] } },
];
