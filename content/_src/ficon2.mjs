import { topic, V } from "./dsl.mjs";

const SRC = "FiCon LF11 (Unterricht, Prüfungsstil)";
const T = (k) => topic(k, { part: 3, src: SRC });

/* ---------- Gehalt ---------- */
const ge = T("ficon-gehalt")
  .summary("Gehaltsabrechnung", `
**Brutto → Netto**: Bruttogehalt (+ geldwerter Vorteil) = **steuerpflichtiges Brutto** → − **Lohnsteuer** (Steuerklasse!) − **Solidaritätszuschlag** (5,5 % der LSt, nur Besserverdiener) − **Kirchensteuer** (9 %, BY/BW 8 % der LSt) − **Sozialversicherungsbeiträge AN** = **Nettogehalt** (− **VL-Eigenanteil**) = **Auszahlungsbetrag**.
**Beiträge 2026** (AN / AG): KV 7,3 % + ½ Zusatzbeitrag · PV 1,8 % (+0,6 % Kinderlosenzuschlag ab 23, nur AN) · RV 9,3 % / 9,3 % · AV 1,3 % / 1,3 % · Unfallversicherung nur AG.
**Beitragsbemessungsgrenzen (mtl.)**: KV/PV **5.812,50 €**, RV/AV **8.450 €**; Versicherungspflichtgrenze KV 77.400 €/Jahr.
**Steuerklassen**: I ledig · II alleinerziehend · III verheiratet (Partner V) · IV verheiratet gleich · V verheiratet (Partner III) · VI Zweitjob.
**VL (vermögenswirksame Leistungen)**: AG zahlt 6,65–40 € nach Tarif; Voraussetzung VL-Vertrag. **Geldwerter Vorteil**: Sachleistung (Firmenwagen, Kantine) – steuer-/sv-pflichtig.
**Arbeitgeberkosten** = Brutto + AG-Anteile SV.
`)
  .cards([
    ["Wie wird vom Brutto zum Netto gerechnet?", "Brutto − Lohnsteuer − Soli − Kirchensteuer − SV-Arbeitnehmeranteile = Netto."],
    ["Was ist ein geldwerter Vorteil?", "Sachleistung des Arbeitgebers (Firmenwagen, Kantine), die steuer- und sozialversicherungspflichtig ist."],
    ["Was sind vermögenswirksame Leistungen?", "Zahlungen für Sparverträge, die der Arbeitgeber (6,65–40 €) direkt überweist; staatlich förderbar."],
    ["Wovon hängt die Lohnsteuer ab?", "Von Verdienst, Steuerklasse und Freibeträgen."],
    ["Höhe der Kirchensteuer?", "9 % der Lohnsteuer (Bayern und Baden-Württemberg 8 %)."],
    ["Höhe des Solidaritätszuschlags?", "5,5 % der Lohnsteuer – seit 2021 nur noch Besserverdiener."],
    ["Steuerklasse I?", "Ledige, Geschiedene, Verwitwete."],
    ["Steuerklasse II?", "Alleinerziehende."],
    ["Steuerklasse III/V?", "Verheiratete – einer III (günstig), der andere V."],
    ["Steuerklasse IV?", "Verheiratete ohne Antrag auf III/V."],
    ["Steuerklasse VI?", "Zweites/weiteres Dienstverhältnis."],
    ["AN-Anteil Rentenversicherung 2026?", "9,3 %."],
    ["AN-Anteil Arbeitslosenversicherung 2026?", "1,3 %."],
    ["AN-Anteil Pflegeversicherung 2026?", "1,8 % (kinderlose ab 23: 2,4 %)."],
    ["Krankenversicherung AN-Anteil?", "7,3 % + halber Zusatzbeitrag."],
    ["Wer trägt die Unfallversicherung?", "Allein der Arbeitgeber."],
    ["Beitragsbemessungsgrenze KV/PV (mtl. 2026)?", "5.812,50 €."],
    ["Beitragsbemessungsgrenze RV/AV (mtl. 2026)?", "8.450 €."],
    ["Was passiert oberhalb der Beitragsbemessungsgrenze?", "Es werden keine weiteren Beiträge erhoben."],
    ["Was ist die Versicherungspflichtgrenze?", "77.400 €/Jahr – wer mehr verdient, kann in die PKV wechseln."],
    ["Was zahlt die Agentur zusätzlich zum Bruttogehalt?", "Arbeitgeberanteile zur Sozialversicherung (Arbeitgeberkosten)."],
    ["Träger der Rentenversicherung?", "Deutsche Rentenversicherung."],
    ["Träger der Arbeitslosenversicherung?", "Bundesagentur für Arbeit."],
    ["Träger der Unfallversicherung?", "Berufsgenossenschaften."],
  ])
  .gls([
    ["Bruttoentgelt", "Gehalt vor Abzügen."],
    ["Nettoentgelt", "Gehalt nach Steuern und Sozialabgaben."],
    ["Geldwerter Vorteil", "Sachleistung des Arbeitgebers mit Entgeltcharakter."],
    ["VL", "Vermögenswirksame Leistungen."],
    ["Beitragsbemessungsgrenze", "Obergrenze des beitragspflichtigen Einkommens."],
  ])
  .mc("Welche Aussage zur Unfallversicherung ist richtig?", "Die Beiträge zahlt allein der Arbeitgeber.", ["Beide zahlen je 50 %.", "Sie wird nur vom Arbeitnehmer gezahlt.", "Sie ist freiwillig.", "Sie gehört nicht zur Sozialversicherung."])
  .mc("Welche Steuerklasse gilt für Alleinerziehende?", "II", ["I", "III", "V", "VI"])
  .mc("Welche Steuerklasse gilt für ein zweites Dienstverhältnis (Nebenjob)?", "VI", ["I", "II", "IV", "V"])
  .mc("Was ist ein geldwerter Vorteil?", "Ein vom Arbeitgeber gestellter Firmenwagen zur Privatnutzung", ["Das Weihnachtsgeld in bar", "Der Nettolohn", "Die Lohnsteuer", "Die Krankenversicherung"])
  .mc("Die Kirchensteuer beträgt (außer BY/BW)…", "9 % der Lohnsteuer", ["8 % des Bruttos", "9 % des Bruttos", "5,5 % der Lohnsteuer", "14 % des Nettos"])
  .mc("Welche Leistung gehört zur Arbeitslosenversicherung?", "Kurzarbeitergeld", ["Altersrente", "Pflegegeld", "Verletztengeld", "Krankengeld"])
  .match("Ordnen Sie jedem Sozialversicherungszweig den Träger zu.", [
    ["Rentenversicherung", "Deutsche Rentenversicherung"],
    ["Arbeitslosenversicherung", "Agentur für Arbeit"],
    ["Unfallversicherung", "Berufsgenossenschaft"],
    ["Krankenversicherung", "Krankenkasse"],
  ])
  .match("Ordnen Sie jede Steuerklasse zu.", [
    ["I", "Ledige"],
    ["II", "Alleinerziehende"],
    ["III", "Verheiratete (Partner in V)"],
    ["VI", "Zweites Dienstverhältnis"],
  ])
  .tcalc(
    "Bruttogehalt {b|eur}. Sozialversicherung (AN-Anteil): Rente 9,3 %, Arbeitslosen 1,3 %, Kranken 8,1 % (7,3 % + halber Zusatzbeitrag 0,8 %), Pflege 1,8 %. Berechnen Sie die Summe der Sozialversicherungsbeiträge des Arbeitnehmers.",
    "b*(0.093+0.013+0.081+0.018)",
    { b: V.int(2400, 5200, 100) },
    { unit: "€", steps: ["9,3 % + 1,3 % + 8,1 % + 1,8 % = 20,5 %", "{b|eur} · 20,5 % = {result|eur}"] },
  )
  .tcalc(
    "Die Lohnsteuer beträgt {l|eur}. Berechnen Sie Kirchensteuer (9 %) und Solidaritätszuschlag (5,5 %) zusammen.",
    "l*(0.09+0.055)",
    { l: V.int(200, 900, 50) },
    { unit: "€", steps: ["Kirchensteuer = {l|eur} · 9 %", "Soli = {l|eur} · 5,5 %", "Summe = {result|eur}"] },
  )
  .tcalc(
    "Bruttogehalt {b|eur}, Abzüge: Lohnsteuer {l|eur}, Sozialversicherung {sv|eur}, Kirchensteuer {k|eur}. Der Arbeitgeber zahlt {vl|eur} VL, die direkt an den Sparvertrag überwiesen werden. Wie hoch ist das Nettogehalt (b − Abzüge)?",
    "b-l-sv-k",
    { b: V.int(2800, 4500, 100), l: V.int(300, 600, 50), sv: V.int(500, 900, 50), k: V.int(20, 50, 5), vl: V.pick([6.65, 20, 40]) },
    { unit: "€", steps: ["Netto = {b|eur} − {l|eur} − {sv|eur} − {k|eur} = {result|eur}"] },
  )
  .tf("Die Beiträge zur Unfallversicherung teilen sich Arbeitgeber und Arbeitnehmer.", false)
  .tf("Oberhalb der Beitragsbemessungsgrenze steigen die Beiträge nicht weiter.", true)
  .cloze("Der Soli beträgt [[5,5]] % der Lohnsteuer, die Kirchensteuer [[9]] %.")
  .done();

/* ---------- Kostenarten ---------- */
const ka = T("ficon-kostenarten")
  .summary("Kostenartenrechnung (Ergebnistabelle)", `
**Ergebnistabelle**: Abgrenzung der **Finanzbuchhaltung** (Aufwand/Ertrag) von der **KLR** (Kosten/Leistungen).
- **neutrale Aufwendungen** (nicht betriebsbedingt, betriebsfremd, periodenfremd, außerordentlich: Spenden, Verluste aus Anlageverkauf, Steuernachzahlungen) → nicht in KLR
- **Zweckaufwand = Grundkosten**: gleicher Betrag in FiBu und KLR (z. B. Gehälter, Miete)
- **Anderskosten**: andere Beträge, z. B. **kalkulatorische Abschreibung** (Wiederbeschaffungswert) statt bilanzielle AfA; kalkulatorische Wagnisse
- **Zusatzkosten**: nur in der KLR, kein Aufwand: **kalk. Unternehmerlohn** (Einzelunternehmer/Gesellschafter), **kalk. Eigenkapitalzinsen**, **kalk. Miete**
- **Kosten** = Grundkosten + Anderskosten + Zusatzkosten
- **Kalk. Abschreibung** = Wiederbeschaffungswert : Nutzungsdauer · **Kalk. Zinsen** = ½ (Anschaffung+Restwert) · Zinssatz / (betriebsnotwendiges Kapital · Zins) · **Kalk. Unternehmerlohn** = Gehalt vergleichbarer Angestellter.
**Einzelkosten** (direkt zurechenbar: Fremdleistungen, Fertigungslohn) vs. **Gemeinkosten** (indirekt: Miete, Verwaltung). **Fixe** und **variable** Kosten.
`)
  .cards([
    ["Wozu dient die Ergebnistabelle?", "Abgrenzung von Aufwendungen/Erträgen der FiBu zu Kosten/Leistungen der KLR."],
    ["Was sind neutrale Aufwendungen?", "Betriebsfremde, periodenfremde oder außerordentliche Aufwendungen – nicht in der KLR."],
    ["Was sind Grundkosten?", "Aufwendungen, die in FiBu und KLR in gleicher Höhe anfallen (Zweckaufwand)."],
    ["Was sind Anderskosten?", "Kosten, die in der KLR mit anderem Wert angesetzt werden als in der FiBu (z. B. kalkulatorische Abschreibung)."],
    ["Was sind Zusatzkosten?", "Kosten ohne Aufwand in der FiBu, z. B. kalkulatorischer Unternehmerlohn, Eigenkapitalzinsen."],
    ["Warum kalkulatorischer Unternehmerlohn?", "Einzelunternehmer/Gesellschafter erhalten kein Gehalt, ihre Arbeit muss aber kalkuliert werden."],
    ["Warum kalkulatorische Zinsen?", "Auch Eigenkapital hat Opportunitätskosten – Zins auf das betriebsnotwendige Kapital."],
    ["Warum kalkulatorische Abschreibung?", "Sie orientiert sich am Wiederbeschaffungswert und der tatsächlichen Nutzung."],
    ["Wie berechnet man die kalkulatorische Abschreibung?", "Wiederbeschaffungswert : Nutzungsdauer."],
    ["Einzelkosten vs. Gemeinkosten?", "Einzelkosten direkt einem Auftrag zuordenbar, Gemeinkosten nur über BAB/Schlüssel."],
    ["Beispiele Einzelkosten in einer Agentur?", "Fremdleistungen (Fotograf, Druck), direkte Personalkosten (Stunden)."],
    ["Beispiele Gemeinkosten in einer Agentur?", "Miete, Strom, Verwaltung, Versicherung, Abschreibungen."],
    ["Fixe vs. variable Kosten?", "Fixe fallen unabhängig von der Menge an, variable ändern sich mit der Menge."],
    ["Beispiel neutraler Aufwand?", "Spende, Verlust aus Anlagenverkauf, Steuernachzahlung für Vorjahre."],
    ["Was sind kalkulatorische Wagnisse?", "Einkalkulierte Risiken (z. B. Forderungsausfälle) als Anderskosten."],
  ])
  .gls([
    ["Grundkosten", "Kosten mit gleichem Aufwand in der FiBu."],
    ["Anderskosten", "Kosten, die in der KLR anders bewertet werden als in der FiBu."],
    ["Zusatzkosten", "Kosten ohne korrespondierenden Aufwand."],
    ["Einzelkosten", "Direkt einem Kostenträger zurechenbare Kosten."],
    ["Gemeinkosten", "Nicht direkt zurechenbare Kosten."],
  ])
  .mc("Der Geschäftsführer-Gesellschafter erhält kein Gehalt, in der Kalkulation wird aber ein Betrag angesetzt. Wie nennt man das?", "Kalkulatorischer Unternehmerlohn (Zusatzkosten)", ["Neutraler Aufwand", "Grundkosten", "Anderskosten", "Zweckaufwand"])
  .mc("Die Agentur spendet 1.000 € an ein Tierheim. Wie wird das in der KLR behandelt?", "Als neutraler Aufwand – nicht in der KLR", ["Als Grundkosten", "Als Zusatzkosten", "Als Anderskosten", "Als Einzelkosten"])
  .mc("Welche Aussage zu den Anderskosten ist richtig?", "Sie unterscheiden sich in der Höhe von den Aufwendungen der FiBu.", ["Sie sind betriebsfremd.", "Sie fallen nur in der KLR an.", "Sie sind immer gleich dem Aufwand.", "Sie sind neutrale Erträge."])
  .mc("Welche Kosten sind Gemeinkosten?", "Büromiete", ["Fremdleistung Fotograf (einem Auftrag zuordenbar)", "Direkte Stunden eines Projekts", "Druckkosten eines bestimmten Flyers", "Material für ein Kundenprojekt"])
  .match("Ordnen Sie jede Position der Kostenart zu.", [
    ["Gehälter in FiBu und KLR gleich", "Grundkosten"],
    ["Kalkulatorische Abschreibung zum Wiederbeschaffungswert", "Anderskosten"],
    ["Kalkulatorischer Unternehmerlohn", "Zusatzkosten"],
    ["Spende an Verein", "neutraler Aufwand"],
  ])
  .tcalc(
    "Ein Kamerasystem (Wiederbeschaffungswert {w|eur}) wird kalkulatorisch über {n} Jahre abgeschrieben. Wie hoch ist die kalkulatorische Abschreibung pro Jahr?",
    "w/n",
    { w: V.int(9000, 30000, 1500), n: V.pick([3, 4, 5, 6]) },
    { unit: "€", steps: ["{w|eur} : {n} = {result|eur}"] },
  )
  .tcalc(
    "Das betriebsnotwendige Eigenkapital beträgt {k|eur}. Kalkulatorischer Zinssatz {z} %. Berechnen Sie die kalkulatorischen Zinsen pro Jahr.",
    "k*z/100",
    { k: V.int(60000, 300000, 20000), z: V.pick([3, 4, 5, 6]) },
    { unit: "€", steps: ["{k|eur} · {z} % = {result|eur}"] },
  )
  .tf("Zusatzkosten haben in der Finanzbuchhaltung keinen Aufwand als Gegenstück.", true)
  .cloze("Kosten setzen sich zusammen aus [[Grundkosten]], [[Anderskosten]] und [[Zusatzkosten]].")
  .done();

/* ---------- BAB ---------- */
const bab = T("ficon-bab")
  .summary("Kostenstellenrechnung & BAB", `
**Kostenstellen** in der Agentur: Beratung/Kontakt, Konzeption, Kreation/Text, Media, PR, Produktion, Neue Medien (je nach Agentur) und Verwaltung.
**BAB (Betriebsabrechnungsbogen)**: Verteilung der **Gemeinkosten** auf Kostenstellen.
**Ablauf**: (1) Gemeinkostenarten in den BAB übernehmen · (2) Verteilung auf Kostenstellen (nach Verteilungsschlüssel, z. B. Miete nach m²) · (3) Summe Gemeinkosten je Kostenstelle · (4) **Zuschlagssatz** ermitteln.
**Gemeinkostenzuschlagssatz** = Gemeinkosten der Stelle : **direkte Personalkosten** × 100.
**Selbstkosten** der Stelle = direkte Personalkosten + Gemeinkosten.
**Interner Stundensatz** = Selbstkosten : abgerechnete Stunden (**Kosten**).
**Externer Stundensatz** = interner Stundensatz × (1 + Gewinnzuschlag) (**Preis**).
**Auftragskosten** intern: Stunden × (direkte Personalkosten je Stunde × (1 + Zuschlagssatz)).
`)
  .cards([
    ["Aufgabe der Kostenstellenrechnung?", "Gemeinkosten verursachungsgerecht auf Kostenstellen verteilen und Zuschlagssätze bilden."],
    ["Was ist der BAB?", "Betriebsabrechnungsbogen – Tabelle zur Verteilung der Gemeinkosten auf Kostenstellen."],
    ["Nenne Kostenstellen einer Agentur.", "Beratung/Kontakt, Konzeption, Kreation/Text, Media, PR, Produktion, Neue Medien."],
    ["Wie lautet der Gemeinkostenzuschlagssatz?", "Gemeinkosten der Stelle : direkte Personalkosten · 100."],
    ["Wie berechnet man die Selbstkosten einer Kostenstelle?", "Direkte Personalkosten + Gemeinkosten."],
    ["Wie berechnet man den internen Stundensatz?", "Selbstkosten : abgerechnete Stunden."],
    ["Wie berechnet man den externen Stundensatz?", "Interner Stundensatz + Gewinnaufschlag (z. B. ×1,20)."],
    ["Wie verteilt man Mietkosten auf Kostenstellen?", "Nach den genutzten Quadratmetern."],
    ["Verteilungsschlüssel Strom?", "Nach kWh oder Anzahl Geräte/Arbeitsplätze."],
    ["Reihenfolge der Kostenstellenrechnung?", "Gemeinkostenarten übernehmen → verteilen → Gesamtkosten der Stellen → Zuschlagssätze."],
    ["Was sind direkte Personalkosten?", "Lohn-/Gehaltskosten, die direkt einem Auftrag zurechenbar sind (Einzelkosten)."],
    ["Interner vs. externer Stundensatz?", "Intern = Kosten je Stunde; extern = Verkaufspreis je Stunde inkl. Gewinn."],
    ["Wofür braucht man den Zuschlagssatz?", "Um bei Kalkulationen Gemeinkosten auf die Einzelkosten aufzuschlagen."],
  ])
  .gls([
    ["BAB", "Betriebsabrechnungsbogen."],
    ["Kostenstelle", "Betrieblicher Bereich, in dem Kosten anfallen."],
    ["Gemeinkostenzuschlagssatz", "Anteil der Gemeinkosten an den direkten Personalkosten."],
    ["Interner Stundensatz", "Kosten je abgerechneter Stunde."],
    ["Externer Stundensatz", "Preis je Stunde für den Kunden."],
  ])
  .mc("Wie berechnet sich der Gemeinkostenzuschlagssatz?", "Gemeinkosten : direkte Personalkosten · 100", ["Selbstkosten : Gemeinkosten", "Gewinn : Umsatz", "Gemeinkosten : Stunden", "Direkte Personalkosten : Gemeinkosten"])
  .mc("Wie wird die Miete im BAB üblicherweise verteilt?", "Nach Quadratmetern", ["Nach Mitarbeiterzahl", "Nach Umsatz", "Gar nicht", "Nach Gewinn"])
  .mc("Bringen Sie in gedanklicher Ordnung: Was ist der erste Schritt der Kostenstellenrechnung?", "Übernahme der Gemeinkostenarten in den BAB", ["Ermittlung der Zuschlagssätze", "Gewinnaufschlag berechnen", "Angebotspreis festlegen", "Rabatt gewähren"])
  .mc("Wofür steht der interne Stundensatz?", "Kosten je abgerechneter Stunde", ["Verkaufspreis je Stunde", "Gewinn je Stunde", "Lohn je Stunde brutto", "Marktpreis"])
  .order("Wie erfolgt die Kostenstellenrechnung? Bringen Sie die Schritte in die richtige Reihenfolge.", ["Übernahme der Gemeinkostenarten in den BAB", "Verteilung der Gemeinkosten auf die einzelnen Kostenstellen", "Ermittlung der Gesamtkosten der Kostenstellen", "Ermittlung der Zuschlagssätze für die Kostenstellen"], { d: 2 })
  .match("Ordnen Sie die Formel zu.", [
    ["Gemeinkostenzuschlagssatz", "Gemeinkosten : direkte Personalkosten"],
    ["Selbstkosten Stelle", "direkte Personalkosten + Gemeinkosten"],
    ["interner Stundensatz", "Selbstkosten : Stunden"],
    ["externer Stundensatz", "interner Stundensatz + Gewinnaufschlag"],
  ])
  .tcalc(
    "Die Kostenstelle „{st}“ hat direkte Personalkosten von {dp|eur} und Gemeinkosten von {gk|eur}. Berechnen Sie den Gemeinkostenzuschlagssatz in Prozent.",
    "gk/dp*100",
    { st: V.pick(["Beratung/Kontakt", "Kreation/Text", "Neue Medien", "Produktion", "Media"]), dp: V.int(12000, 40000, 1000), gk: V.int(5000, 30000, 500) },
    { unit: "%", steps: ["{gk|eur} : {dp|eur} · 100 = {result} %"] },
  )
  .tcalc(
    "Die Kostenstelle hat direkte Personalkosten von {dp|eur}, Gemeinkosten von {gk|eur} und {h} abgerechnete Stunden. Wie hoch ist der interne Stundensatz?",
    "(dp+gk)/h",
    { dp: V.int(15000, 40000, 1000), gk: V.int(8000, 30000, 1000), h: V.int(400, 700, 20) },
    { unit: "€", steps: ["Selbstkosten = {dp|eur} + {gk|eur}", "Stundensatz = Selbstkosten : {h} Stunden = {result|eur}"] },
  )
  .tcalc(
    "Der interne Stundensatz beträgt {i|eur}. Die Agentur kalkuliert mit {g} % Gewinnaufschlag. Wie hoch ist der externe Stundensatz?",
    "i*(1+g/100)",
    { i: V.int(55, 95, 1), g: V.pick([10, 15, 20, 25]) },
    { unit: "€", steps: ["{i|eur} · (1 + {g} %) = {result|eur}"] },
  )
  .tcalc(
    "Für einen Auftrag fallen {h} Stunden in der Kostenstelle Layout an. Direkte Personalkosten je Stunde {p|eur}, Gemeinkostenzuschlagssatz {z} %. Berechnen Sie die Kosten dieser Stelle für den Auftrag.",
    "h*p*(1+z/100)",
    { h: V.int(6, 30, 1), p: V.int(35, 60, 1), z: V.pick([100, 105, 110, 120, 125]) },
    { unit: "€", steps: ["Stundenkosten = {p|eur} · (1 + {z} %)", "× {h} Stunden = {result|eur}"] },
  )
  .tcalc(
    "Die Mietkosten von {m|eur} werden nach Fläche auf drei Teams verteilt (Team 1 {a} m², Team 2 {b} m², Team 3 {c} m²). Wie viel entfällt auf Team 1?",
    "m*a/(a+b+c)",
    { m: V.int(4000, 8000, 400), a: V.int(60, 120, 10), b: V.int(100, 220, 10), c: V.int(80, 160, 10) },
    { unit: "€", steps: ["Gesamtfläche = {a} + {b} + {c} m²", "Anteil Team 1 = {m|eur} · {a} : Gesamtfläche = {result|eur}"] },
  )
  .tf("Der Gemeinkostenzuschlagssatz wird auf die Selbstkosten bezogen.", false, { e: "Er bezieht sich auf die direkten Personalkosten." })
  .cloze("Der [[BAB]] verteilt die [[Gemeinkosten]] auf die Kostenstellen.")
  .done();

/* ---------- Stundensatz ---------- */
const ss = T("ficon-stundensatz")
  .summary("Agenturstundensatz", `
**Interner Stundensatz** = (Personalkosten + anteilige Gemeinkosten) : produktive Stunden → **reiner Kostensatz**.
**Externer Stundensatz** = interner Satz **+ Gewinnzuschlag** → **Preis** für den Kunden.
Produktive (abrechenbare) Stunden: Jahresstunden − Urlaub, Feiertage, Krankheit, interne Projekte, Fortbildung (Auslastungsgrad ca. 60–80 %).
**Rechenwege**
1. Jahresarbeitsstunden = Wochenstunden × Wochen (z. B. 40 × 52 = 2.080 h)
2. − Abwesenheit (Urlaub 30 Tage × 8 h, Feiertage, Krankheit)
3. = Anwesenheitsstunden × Auslastung = produktive Stunden
4. Jahreskosten der Stelle : produktive Stunden = interner Stundensatz
5. + Gewinn → externer Stundensatz.
**Mischkalkulation** mit Honorarsätzen verschiedener Level (Junior, Senior).
`)
  .cards([
    ["Interner Stundensatz – was ist das?", "Kosten je produktiver Stunde (Personal + Gemeinkosten)."],
    ["Externer Stundensatz?", "Preis für den Kunden: interner Satz plus Gewinnzuschlag."],
    ["Warum sind nicht alle Stunden abrechenbar?", "Urlaub, Krankheit, Feiertage, Weiterbildung, interne Projekte, Akquise."],
    ["Was ist der Auslastungsgrad?", "Anteil der produktiven Stunden an den Anwesenheitsstunden."],
    ["Wie berechnet man produktive Stunden?", "Anwesenheitsstunden · Auslastungsgrad."],
    ["Wie berechnet man Anwesenheitsstunden?", "Jahresstunden − Urlaub, Feiertage, Krankheit."],
    ["Interner Stundensatz berechnen?", "Jahreskosten der Stelle : produktive Stunden."],
    ["Warum ist ein Gewinnzuschlag nötig?", "Um Rücklagen, Risiko und Eigenkapitalverzinsung abzudecken."],
    ["Was passiert, wenn die Auslastung sinkt?", "Der interne Stundensatz steigt, weil die Fixkosten auf weniger Stunden verteilt werden."],
    ["Wofür braucht man Stundensätze?", "Für Angebots- und Projektkalkulationen."],
  ])
  .gls([
    ["Auslastungsgrad", "Anteil der produktiven an den verfügbaren Stunden."],
    ["Produktive Stunden", "Für Kunden abrechenbare Stunden."],
  ])
  .mc("Der interne Stundensatz beträgt 70 €. Mit 25 % Gewinnzuschlag ergibt sich der externe Satz von…", "87,50 €", ["70,00 €", "75,25 €", "95,00 €", "52,50 €"])
  .mc("Wie wirkt sich eine sinkende Auslastung auf den internen Stundensatz aus?", "Er steigt.", ["Er sinkt.", "Er bleibt gleich.", "Er wird null.", "Er entspricht dem Marktpreis."])
  .mc("Welche Stunden zählen nicht zu den produktiven Stunden?", "Urlaub und interne Weiterbildung", ["Kundenberatung", "Textarbeit für Kunden", "Layout für Kunden", "Kundenpräsentation"])
  .tcalc(
    "Eine Mitarbeiterin verursacht Jahreskosten (Personal + Gemeinkosten) von {k|eur}. Sie ist {a} Stunden anwesend, davon sind {p} % produktiv. Berechnen Sie den internen Stundensatz.",
    "k/(a*p/100)",
    { k: V.int(60000, 110000, 5000), a: V.int(1650, 1800, 50), p: V.pick([65, 70, 75, 80]) },
    { unit: "€", steps: ["Produktive Stunden = {a} · {p} %", "Interner Satz = {k|eur} : produktive Stunden = {result|eur}"] },
  )
  .tcalc(
    "Wochenarbeitszeit {w} Stunden, 52 Wochen. Abwesend: Urlaub {u} Tage, Feiertage {f} Tage, Krankheit {kr} Tage (je Tag {w2} Stunden, Tagesarbeitszeit = Wochenstunden : 5). Wie viele Anwesenheitsstunden verbleiben?",
    "w*52-(u+f+kr)*w/5",
    { w: V.pick([38, 39, 40]), w2: V.expr("w/5", 1, "d1"), u: V.pick([28, 30]), f: V.pick([9, 10]), kr: V.pick([5, 8, 10]) },
    { unit: "h", dec: 0, steps: ["Jahresstunden = {w} · 52", "Abwesenheit = ({u} + {f} + {kr}) · Tagesstunden", "Anwesenheit = {result} h"] },
  )
  .tf("Bei sinkender Auslastung steigt der interne Stundensatz.", true)
  .cloze("Der [[externe]] Stundensatz enthält im Gegensatz zum [[internen]] den Gewinnzuschlag.")
  .done();

/* ---------- Kalkulation ---------- */
const kk = T("ficon-kalkulation")
  .summary("Kostenträgerrechnung: Projektkalkulation", `
**Angebotskalkulation (Agentur)**
Agenturleistung: Stunden × interner Stundensatz = **Kosten Agenturleistung**
+ **Fremdleistungen** (netto, durchgereicht: Foto, Druck, Media)
= **Selbstkosten**
+ **Gewinnzuschlag** auf Agenturleistung (z. B. 20 %) + **Handling Fee** auf Fremdleistungen (z. B. 10 %)
= **Netto-Angebotspreis vor Rabatt**
**Kundenrabatt**: Angebot soll nach Rabatt X € ergeben → Preis vorher = Ziel : (1 − Rabatt).
+ 19 % USt = **Brutto**.
**Differenzkalkulation**: Auftrag profitabel? → Erlös − Selbstkosten = Gewinn.
**Handelskalkulation**: Bezugspreis + Handlungskosten = Selbstkosten + Gewinn = Barverkaufspreis + Skonto + Provision = Zielverkaufspreis + Rabatt = Listenverkaufspreis (netto) + USt.
`)
  .cards([
    ["Aufbau Angebotskalkulation Agentur?", "Agenturleistung (Std × Satz) + Fremdleistungen → Selbstkosten → + Gewinn/Handling Fee → Angebotspreis netto."],
    ["Was ist eine Handling Fee?", "Aufschlag auf Fremdleistungen für Beschaffung/Abwicklung (z. B. 10 %)."],
    ["Was sind Fremdleistungen?", "Leistungen Dritter (Foto, Druck, Mediabuchung), die die Agentur einkauft und weiterberechnet."],
    ["Wie wird ein Rabatt einkalkuliert?", "Preis vor Rabatt = gewünschter Preis : (1 − Rabatt %)."],
    ["Was sind Selbstkosten?", "Alle für den Auftrag entstehenden Kosten ohne Gewinn."],
    ["Wie wird der Angebotspreis brutto berechnet?", "Netto-Angebotspreis · 1,19."],
    ["Was ist die Differenzkalkulation?", "Vergleich Erlös − Selbstkosten, um den tatsächlichen Gewinn eines Auftrags zu prüfen."],
    ["Was kennzeichnet die Handelskalkulation?", "Vom Einkaufspreis über Handlungskosten und Gewinn bis zum Listenverkaufspreis."],
    ["Barverkaufspreis → Zielverkaufspreis?", "+ Kundenskonto (vom Hundert, im Zielverkaufspreis = 100 %)."],
    ["Zielverkaufspreis → Listenverkaufspreis?", "+ Kundenrabatt (im Listenpreis = 100 %)."],
    ["Warum Gewinn nur auf Agenturleistung?", "Fremdleistungen werden mit eigener Marge (Handling Fee) belegt."],
  ])
  .gls([
    ["Selbstkosten", "Gesamte Kosten eines Auftrags vor Gewinn."],
    ["Handling Fee", "Bearbeitungsaufschlag auf Fremdleistungen."],
    ["Fremdleistungen", "Eingekaufte Leistungen Dritter."],
  ])
  .mc("Wie hoch ist der Angebotspreis brutto, wenn netto 10.000 € angeboten werden (19 % USt)?", "11.900 €", ["10.190 €", "11.000 €", "12.100 €", "10.900 €"])
  .mc("Wie wird ein Kundenrabatt von 10 % korrekt einkalkuliert, wenn der Agentur 9.000 € nach Rabatt bleiben sollen?", "Vorher: 9.000 € : 0,9 = 10.000 €", ["9.000 € · 1,1", "9.000 € + 10 %", "9.000 € − 10 %", "9.000 € · 0,9"])
  .tcalc(
    "Kalkulieren Sie den Netto-Angebotspreis: {h1} Stunden Kontakt zu {s1|eur}, {h2} Stunden Text/Kreation zu {s2|eur} (interne Stundensätze). Fremdleistung {f|eur} netto. Aufschlag {g} % auf Agenturleistungen, {hf} % Handling Fee auf Fremdleistungen, kein Rabatt.",
    "(h1*s1+h2*s2)*(1+g/100)+f*(1+hf/100)",
    { h1: V.int(3, 10, 1), s1: V.int(60, 85, 1), h2: V.int(20, 50, 2), s2: V.int(70, 95, 1), f: V.int(1500, 4500, 100), g: V.pick([15, 20, 25]), hf: V.pick([8, 10, 15]) },
    { unit: "€", steps: ["Agenturleistungen = {h1}·{s1|eur} + {h2}·{s2|eur}", "+ {g} % Gewinn", "+ Fremdleistungen {f|eur} + {hf} % Handling Fee", "= {result|eur}"] },
  )
  .tcalc(
    "Die Selbstkosten eines Auftrags betragen {sk|eur}. Die Agentur möchte einen Gewinnaufschlag von {g} % und gewährt anschließend {r} % Kundenrabatt auf den Angebotspreis. Auf welchen Betrag muss der Preis vor Rabatt lauten, damit nach Rabatt Selbstkosten plus Gewinn erzielt werden?",
    "sk*(1+g/100)/(1-r/100)",
    { sk: V.int(4000, 15000, 500), g: V.pick([15, 20, 25]), r: V.pick([5, 8, 10]) },
    { unit: "€", steps: ["Ziel nach Rabatt = {sk|eur} · (1 + {g} %)", "Preis vor Rabatt = Ziel : (1 − {r} %) = {result|eur}"] },
  )
  .tcalc(
    "Ein Auftrag erzielt einen Erlös von {e|eur} netto. Die intern angefallenen Kosten betragen {k|eur}. Wie hoch ist der Gewinn?",
    "e-k",
    { e: V.int(4000, 12000, 500), k: V.int(2500, 9500, 500) },
    { unit: "€", steps: ["Gewinn = Erlös − Kosten = {result|eur}"] },
  )
  .tcalc(
    "Handelskalkulation: Bezugspreis {bp|eur}, Handlungskostenzuschlag {hk} %, Gewinnzuschlag {g} %. Berechnen Sie den Barverkaufspreis (netto).",
    "bp*(1+hk/100)*(1+g/100)",
    { bp: V.int(20, 120, 5), hk: V.pick([20, 25, 30]), g: V.pick([10, 15, 20]) },
    { unit: "€", steps: ["Selbstkosten = {bp|eur} · (1 + {hk} %)", "Barverkaufspreis = Selbstkosten · (1 + {g} %) = {result|eur}"] },
  )
  .tf("Fremdleistungen werden meist mit einer Handling Fee belegt.", true)
  .cloze("Die [[Selbstkosten]] zuzüglich Gewinn ergeben den [[Angebotspreis]].")
  .done();

/* ---------- Deckungsbeitrag ---------- */
const db = T("ficon-db")
  .summary("Deckungsbeitragsrechnung & Break-Even", `
**Vollkostenrechnung**: alle Kosten (fix + variabel) werden auf Produkte verteilt – **Preisuntergrenze langfristig = Selbstkosten**.
**Teilkostenrechnung**: nur **variable Kosten** werden zugerechnet; Fixkosten als Block → **Deckungsbeitrag (DB)**.
**DB je Stück** = Verkaufspreis (netto) − variable Stückkosten (kv). **Gesamt-DB** = db · Menge. **Gewinn** = Gesamt-DB − Fixkosten.
**Break-Even-Point (Gewinnschwelle)**: Menge, bei der Erlöse = Gesamtkosten: **x = Kf : db**.
**Preisuntergrenze kurzfristig** = variable Stückkosten · **langfristig** = Vollkosten.
**Variable Stückkosten** aus zwei Perioden: **kv = (K₂ − K₁) : (x₂ − x₁)**; **Fixkosten** = K − kv·x.
**Annahme zusätzlicher Auftrag**: lohnt sich, wenn Preis > kv (DB positiv) und Kapazität frei.
`)
  .cards([
    ["Vollkosten- vs. Teilkostenrechnung?", "Voll: alle Kosten auf Produkte. Teil: nur variable Kosten, Fixkosten als Block."],
    ["Deckungsbeitrag je Stück?", "Verkaufspreis − variable Stückkosten."],
    ["Gesamtdeckungsbeitrag?", "DB je Stück · Absatzmenge."],
    ["Gewinn in der Teilkostenrechnung?", "Gesamtdeckungsbeitrag − Fixkosten."],
    ["Break-Even-Point?", "Menge, bei der Erlöse gleich Gesamtkosten sind (Gewinnschwelle)."],
    ["Formel Break-Even-Menge?", "Fixkosten : Deckungsbeitrag je Stück."],
    ["Kurzfristige Preisuntergrenze?", "Variable Stückkosten."],
    ["Langfristige Preisuntergrenze?", "Selbstkosten (Vollkosten)."],
    ["Wie ermittelt man variable Stückkosten aus zwei Perioden?", "(Gesamtkosten2 − Gesamtkosten1) : (Menge2 − Menge1)."],
    ["Wie ermittelt man danach die Fixkosten?", "Gesamtkosten − variable Stückkosten · Menge."],
    ["Wann lohnt ein Zusatzauftrag unter Vollkosten?", "Wenn der Preis über den variablen Stückkosten liegt und freie Kapazität besteht."],
    ["Was passiert bei Menge unter BEP?", "Verlust."],
    ["Was passiert bei Menge über BEP?", "Gewinn."],
    ["Fixe Kosten?", "Fallen unabhängig von der Menge an (Miete, Gehälter)."],
    ["Variable Kosten?", "Ändern sich mit der Menge (Material, Druckkosten pro Stück)."],
  ])
  .gls([
    ["Deckungsbeitrag", "Preis minus variable Stückkosten – deckt Fixkosten."],
    ["Break-Even-Point", "Gewinnschwelle."],
    ["Preisuntergrenze", "Mindestpreis, der noch Kosten deckt."],
    ["Teilkostenrechnung", "Kostenrechnung nur mit variablen Kosten."],
  ])
  .mc("Wie berechnet sich der Deckungsbeitrag pro Stück?", "Verkaufspreis − variable Stückkosten", ["Verkaufspreis − Gesamtkosten", "Fixkosten : Menge", "Gesamtkosten : Menge", "Verkaufspreis + Fixkosten"])
  .mc("Wie lautet die Formel für die Break-Even-Menge?", "Fixkosten : Deckungsbeitrag je Stück", ["Variable Kosten : Preis", "Gesamtkosten : Preis", "Preis : Fixkosten", "Deckungsbeitrag : Fixkosten"])
  .mc("Welche kurzfristige Preisuntergrenze gilt?", "Die variablen Stückkosten", ["Die Selbstkosten", "Der Marktpreis", "Die Fixkosten", "Null"])
  .mc("Die tatsächliche Absatzmenge liegt unter der Break-Even-Menge. Was folgt?", "Das Unternehmen macht Verlust.", ["Gewinn", "Gewinnschwelle erreicht", "Fixkosten sind gedeckt", "Es entsteht Eigenkapital"])
  .match("Ordnen Sie zu.", [
    ["Fixkosten", "Mietkosten des Büros"],
    ["Variable Kosten", "Druckkosten pro Stück"],
    ["Deckungsbeitrag", "Preis − variable Stückkosten"],
    ["Break-Even-Point", "Gewinn = 0"],
  ])
  .tcalc(
    "Fixkosten {f|eur}, variable Stückkosten pro Paar {kv|eur}, Verkaufspreis pro Paar netto {p|eur}. Berechnen Sie die Break-even-Menge (Paare, gerundet auf ganze Stück).",
    "f/(p-kv)",
    { f: V.int(100000, 700000, 50000), kv: V.dec(0.8, 2.5, 2), p: V.dec(6, 10, 2) },
    { unit: "Stück", dec: 0, steps: ["db = {p|eur} − {kv|eur}", "Break-even = {f|eur} : db = {result} Stück"] },
  )
  .tcalc(
    "Die FAMK verkauft Laptop-Taschen für {p|eur} netto. Variable Stückkosten {kv|eur}, fixe Gesamtkosten {f|eur}. Bei welcher Menge wird der Break-even-Point erreicht?",
    "f/(p-kv)",
    { p: V.int(70, 100, 5), kv: V.int(40, 65, 5), f: V.int(900, 3000, 100) },
    { unit: "Stück", dec: 0, steps: ["db = {p|eur} − {kv|eur}", "BEP = {f|eur} : db"] },
  )
  .tcalc(
    "Ein Produkt hat Verkaufspreis {p|eur}, variable Stückkosten {kv|eur}, fixe Kosten {f|eur}. Es werden {x} Stück abgesetzt. Wie hoch ist der Gewinn (Verlust negativ)?",
    "x*(p-kv)-f",
    { p: V.int(10, 25, 1), kv: V.int(2, 8, 1), f: V.int(1000, 4000, 500), x: V.int(300, 900, 50) },
    { unit: "€", steps: ["Gesamt-DB = {x} · ({p|eur} − {kv|eur})", "Gewinn = Gesamt-DB − {f|eur} = {result|eur}"] },
  )
  .tcalc(
    "Produktionsmenge Monat 1: {x1} Stück, Gesamtkosten {k1|eur}. Monat 2: {x2} Stück, Gesamtkosten {k2|eur}. Wie hoch sind die variablen Stückkosten?",
    "(k2-k1)/(x2-x1)",
    { x1: V.int(2000, 3500, 100), x2: V.int(3600, 5000, 100), kv: V.dec(3, 9, 1), fix: V.int(15000, 30000, 1000), k1: V.expr("fix+kv*x1", 2), k2: V.expr("fix+kv*x2", 2) },
    { unit: "€", steps: ["kv = ({k2|eur} − {k1|eur}) : ({x2} − {x1}) = {result|eur}"] },
  )
  .tf("Unterhalb der Break-even-Menge entsteht ein Verlust.", true)
  .tf("Die kurzfristige Preisuntergrenze liegt bei den Selbstkosten.", false, { e: "Kurzfristig genügt die Deckung der variablen Stückkosten." })
  .cloze("Der Break-even-Point ergibt sich aus [[Fixkosten]] geteilt durch den [[Deckungsbeitrag]] je Stück.")
  .done();

export default [
  { file: "ficon/lf11-gehalt.json", bundle: { items: [ge] } },
  { file: "ficon/lf11-kostenarten.json", bundle: { items: [ka] } },
  { file: "ficon/lf11-bab.json", bundle: { items: [bab] } },
  { file: "ficon/lf11-stundensatz.json", bundle: { items: [ss] } },
  { file: "ficon/lf11-kalkulation.json", bundle: { items: [kk] } },
  { file: "ficon/lf11-db.json", bundle: { items: [db] } },
];
