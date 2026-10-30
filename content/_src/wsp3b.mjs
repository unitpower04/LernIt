import { topic, V } from "./dsl.mjs";

const fin = topic("wsp-lf3-finanzierung", { part: 3, src: "WSP LF3 Finanzierung (Unterricht)" })
  .summary("Finanzierung, Kredit & Leasing", `
**Finanzierungsarten**
- nach Herkunft: **Außenfinanzierung** (Einlagen, Kredite, Beteiligung) · **Innenfinanzierung** (Gewinnthesaurierung, Abschreibungsrückflüsse, Rückstellungen, Vermögensumschichtung)
- nach Rechtsstellung: **Eigenfinanzierung** (Eigenkapital, haftet, Mitspracherecht) · **Fremdfinanzierung** (Fremdkapital, Zinsen, Rückzahlung)

**Kredite**: *Kontokorrentkredit* (flexibel, teuer, kurzfristig) · *Darlehen* (festes Volumen, Zins, Tilgung: Annuität oder Ratentilgung) · *Lieferantenkredit* (Zahlungsziel, **Skontoverzicht ist teuer**) · *Leasing* · *Factoring* (Forderungsverkauf).

**Skonto vs. Kontokorrent (Finanzierungsvorteil)**
Jahreszinssatz des Lieferantenkredits = Skonto % · 360 / (Zahlungsziel − Skontofrist)
Skonto lohnt sich, wenn dieser Zinssatz **höher als der Kontokorrentzins** ist.

**Kreditsicherheiten**: *Personalsicherheit* (Bürgschaft) · *Realsicherheit* (Grundschuld/Hypothek, Sicherungsübereignung, Pfandrecht, Eigentumsvorbehalt).

**Leasing**: Leasinggeber bleibt Eigentümer; Leasingnehmer zahlt Raten. + Liquidität, keine Kapitalbindung, Aktualität · − insgesamt oft teurer, kein Eigentum.

**Factoring**: Verkauf von Forderungen an Factor (Sofortliquidität, Ausfallschutz, Service); Kosten: Gebühr + Zinsen.
`)
  .cards([
    ["Außen- vs. Innenfinanzierung?", "Außen: Kapital kommt von außerhalb (Einlagen, Kredite). Innen: aus dem Umsatzprozess (Gewinne, Abschreibungen, Rückstellungen)."],
    ["Eigen- vs. Fremdfinanzierung?", "Eigen: Eigenkapital ohne Rückzahlungspflicht, haftet. Fremd: Kredit mit Zins und Tilgung."],
    ["Beispiel Selbstfinanzierung?", "Gewinne werden nicht ausgeschüttet, sondern im Unternehmen belassen (Gewinnthesaurierung)."],
    ["Was ist Beteiligungsfinanzierung?", "Neue/zusätzliche Einlagen der Gesellschafter oder Aktienausgabe."],
    ["Nenne Formen der Innenfinanzierung.", "Selbstfinanzierung, Abschreibungsrückflüsse, Rückstellungen, Vermögensumschichtung."],
    ["Was ist ein Kontokorrentkredit?", "Kurzfristiger Überziehungskredit auf dem Girokonto – flexibel, aber teuer."],
    ["Was ist ein Darlehen?", "Zeitlich begrenzte Geldüberlassung mit festem Zins und Tilgung."],
    ["Annuitätendarlehen?", "Gleichbleibende Rate (Zins + Tilgung); Zinsanteil sinkt, Tilgungsanteil steigt."],
    ["Ratentilgung?", "Gleichbleibender Tilgungsbetrag; Gesamtrate sinkt, weil die Zinsen sinken."],
    ["Was ist ein Lieferantenkredit?", "Das Zahlungsziel des Lieferanten – Verzicht auf Skonto ist wirtschaftlich ein teurer Kredit."],
    ["Wie berechnet man den Jahreszins beim Skontoverzicht?", "Skonto % · 360 : (Zahlungsziel − Skontofrist in Tagen)."],
    ["Wann lohnt sich die Skontonutzung?", "Wenn der Skontozinssatz höher ist als der Zinssatz des Kontokorrentkredits."],
    ["Was ist Leasing?", "Gebrauchsüberlassung gegen Leasingraten; der Leasinggeber bleibt Eigentümer."],
    ["Vorteile des Leasings?", "Kein hoher Kapitaleinsatz, Liquidität, planbare Raten, Aktualität der Ausstattung."],
    ["Nachteile des Leasings?", "Oft insgesamt teurer, kein Eigentum, langfristige Bindung."],
    ["Was ist Factoring?", "Verkauf von Forderungen an einen Factor gegen sofortige Zahlung abzüglich Gebühren."],
    ["Vorteile des Factorings?", "Sofortige Liquidität, Ausfallschutz (echtes Factoring), Entlastung bei Debitorenbuchhaltung."],
    ["Was ist eine Bürgschaft?", "Personalsicherheit: Der Bürge haftet für die Schuld eines anderen (Schriftform!)."],
    ["Was ist eine Grundschuld?", "Realsicherheit: Pfandrecht an einem Grundstück zur Sicherung eines Kredits (Grundbuch)."],
    ["Was ist eine Sicherungsübereignung?", "Der Kreditgeber wird Eigentümer der Sache, der Kreditnehmer behält den Besitz."],
    ["Personal- vs. Realsicherheit?", "Personal: Person haftet (Bürgschaft). Real: Sache haftet (Grundschuld, Pfand)."],
    ["Was ist ein Kreditvertrag-Effektivzins?", "Gesamtkosten des Kredits pro Jahr inkl. Gebühren (Preisangabenverordnung)."],
    ["Was ist Tilgung?", "Rückzahlung des geliehenen Betrags (ohne Zinsen)."],
    ["Was ist Liquidität?", "Fähigkeit, Zahlungsverpflichtungen jederzeit termingerecht zu erfüllen."],
    ["Was ist Kapitalbindung?", "Geld, das in Anlagen/Vorräten festliegt und nicht frei verfügbar ist."],
  ])
  .gls([
    ["Annuität", "Gleichbleibende jährliche Zahlung aus Zins und Tilgung."],
    ["Tilgung", "Rückzahlung des Kreditbetrags."],
    ["Factoring", "Forderungsverkauf an eine Factoringgesellschaft."],
    ["Leasing", "Vermietung von Anlagegütern gegen Leasingraten."],
    ["Skonto", "Preisnachlass bei Zahlung innerhalb einer kurzen Frist."],
    ["Bürgschaft", "Personalsicherheit, bei der ein Dritter für die Schuld haftet."],
    ["Grundschuld", "Grundpfandrecht zur Kreditsicherung."],
  ])
  .mc("Wodurch unterscheiden sich Außen- und Innenfinanzierung?", "Bei der Innenfinanzierung stammt das Kapital aus dem Umsatzprozess des Unternehmens.", ["Bei der Außenfinanzierung wird kein Kapital zugeführt.", "Innenfinanzierung ist immer Fremdkapital.", "Außenfinanzierung betrifft nur Gewinne.", "Es gibt keinen Unterschied."])
  .mc("Welche Maßnahme ist Beteiligungsfinanzierung (Eigenfinanzierung von außen)?", "Ein neuer Gesellschafter bringt 50.000 € in die GmbH ein.", ["Die Bank gewährt ein Darlehen.", "Der Gewinn wird einbehalten.", "Die Agentur nimmt einen Kontokorrentkredit.", "Die Agentur least ein Fahrzeug."])
  .mc("Welche Finanzierung ist Selbstfinanzierung?", "Der Gewinn wird nicht ausgeschüttet und im Betrieb belassen.", ["Aufnahme eines Bankkredits", "Ausgabe neuer Aktien", "Verkauf von Forderungen an einen Factor", "Lieferantenkredit"])
  .mc("Welche Aussage zum Factoring ist richtig?", "Der Factor kauft Forderungen an und zahlt sofort, wodurch die Liquidität steigt.", ["Der Factor liefert Waren auf Kredit.", "Factoring ist eine Realsicherheit.", "Der Kunde zahlt an den Lieferanten, nicht an den Factor.", "Factoring verursacht keine Kosten."])
  .mc("Welche Aussage zu Leasing ist richtig?", "Der Leasinggeber bleibt Eigentümer des Leasingguts.", ["Der Leasingnehmer wird sofort Eigentümer.", "Leasing ist immer günstiger als Kauf.", "Leasingraten sind keine Betriebsausgaben.", "Leasing erhöht die Kapitalbindung."])
  .mc("Was ist ein Beispiel für eine Personalsicherheit?", "Bürgschaft", ["Grundschuld", "Sicherungsübereignung", "Eigentumsvorbehalt", "Pfandrecht an Wertpapieren"])
  .mc("Was ist ein Beispiel für eine Realsicherheit?", "Grundschuld", ["Bürgschaft", "Schuldbeitritt", "Garantie ohne Pfand", "Mündliches Versprechen"])
  .mc("Welcher Kredit ist für kurzfristige Liquiditätsengpässe geeignet?", "Kontokorrentkredit", ["Hypothekendarlehen", "Anleihe", "Langfristiges Annuitätendarlehen", "Aktienemission"])
  .match("Ordnen Sie jede Finanzierungsmaßnahme der richtigen Finanzierungsart zu.", [
    ["Gewinneinbehaltung", "Selbstfinanzierung"],
    ["Aufnahme eines Bankdarlehens", "Fremdfinanzierung"],
    ["Einlage eines neuen Gesellschafters", "Beteiligungsfinanzierung"],
    ["Verkauf alter Maschinen", "Vermögensumschichtung"],
  ])
  .match("Ordnen Sie jede Kreditsicherheit der Art zu.", [
    ["Bürgschaft", "Personalsicherheit"],
    ["Grundschuld", "Realsicherheit"],
    ["Sicherungsübereignung", "Realsicherheit"],
    ["Selbstschuldnerische Bürgschaft des Gesellschafters", "Personalsicherheit"],
  ])
  .tf("Beim Leasing wird der Leasingnehmer Eigentümer der Sache.", false)
  .tf("Ein Skontoverzicht entspricht wirtschaftlich der Inanspruchnahme eines Kredits.", true)
  .tf("Beim Annuitätendarlehen bleibt die Tilgung in jeder Periode gleich.", false, { e: "Gleich bleibt die Annuität (Rate); die Tilgung steigt." })
  .cloze("Beim Annuitätendarlehen sinkt der [[Zinsanteil]], während der [[Tilgungsanteil]] steigt.")
  .tcalc(
    "Eine Rechnung über {b|eur} ist innerhalb von {sf} Tagen mit {s} % Skonto oder innerhalb von {z} Tagen netto zahlbar. Berechnen Sie den Jahreszinssatz (360 Tage) bei Verzicht auf Skonto in Prozent (vereinfachte Formel).",
    "s*360/(z-sf)",
    { b: V.int(2000, 12000, 500), sf: V.pick([10, 14]), z: V.pick([30, 40, 45]), s: V.pick([2, 3]) },
    { unit: "%", steps: ["Zinssatz = Skonto · 360 : (Zahlungsziel − Skontofrist)", "= {s} · 360 : ({z} − {sf})", "= {result} %"] },
  )
  .tcalc(
    "Ein Darlehen über {k|eur} wird mit {z} % Jahreszins und {t} % jährlicher Tilgung bei Annuitätendarlehen (Rate im 1. Jahr = Zins + Tilgung vom Anfangsbetrag) vereinbart. Wie hoch ist die Zinszahlung im 1. Jahr?",
    "k*z/100",
    { k: V.int(20000, 200000, 10000), z: V.pick([2.5, 3, 3.5, 4, 5]), t: V.pick([1, 2, 3]) },
    { unit: "€", steps: ["Zinsen 1. Jahr = {k|eur} · {z} %", "= {result|eur}"] },
  )
  .tcalc(
    "Eine Agentur finanziert eine Kameraausrüstung. Kauf: Kaufpreis {k|eur}, Restwert nach {n} Jahren {rw|eur}. Leasing: {r|eur} Rate monatlich über {n} Jahre. Wie viel kostet Leasing insgesamt mehr (+) oder weniger (−) als der Wertverlust beim Kauf?",
    "r*12*n-(k-rw)",
    { k: V.int(8000, 20000, 1000), rw: V.int(1000, 4000, 500), n: V.pick([3, 4, 5]), r: V.int(180, 380, 20) },
    { unit: "€", steps: ["Leasingkosten = {r|eur} · 12 · {n}", "Wertverlust Kauf = {k|eur} − {rw|eur}", "Differenz = {result|eur}"] },
  )
  .done();

export default [{ file: "wsp/lf3-finanzierung.json", bundle: { items: [fin] } }];
