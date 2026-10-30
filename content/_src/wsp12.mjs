import { topic, V } from "./dsl.mjs";

const SRC = "WSP LF12 VWL (Unterricht)";
const T = (k) => topic(k, { part: 2, src: SRC });

/* ---------- Wirtschaftsordnungen ---------- */
const ordnung = T("wsp-lf12-ordnung")
  .summary("Wirtschaftsordnungen", `
**Grundproblem**: Knappheit der Güter bei unbegrenzten Bedürfnissen → wirtschaften (Bedürfnis → Bedarf → Nachfrage).
**Freie Marktwirtschaft**: Privateigentum, Preis steuert über Angebot/Nachfrage, Staat nur Rahmen (Nachtwächterstaat). + Effizienz, Freiheit · − soziale Ungleichheit, Monopolbildung.
**Zentralverwaltungswirtschaft**: zentrale Planbehörde, Kollektiveigentum, Preise festgelegt. + soziale Sicherheit · − Ineffizienz, kaum Anreize, Mangel.
**Soziale Marktwirtschaft** (Deutschland; Müller-Armack, Erhard): Marktwirtschaft + sozialer Ausgleich: Sozialversicherung, Kartellrecht, Tarifautonomie, Mitbestimmung, Umwelt-/Verbraucherschutz.
**Wirtschaftssektoren**: primär (Landwirtschaft), sekundär (Industrie, Handwerk), tertiär (Dienstleistungen – Werbeagentur!).
**Wirtschaftssubjekte**: private Haushalte, Unternehmen, Staat, Ausland.
`)
  .cards([
    ["Was bedeutet Knappheit?", "Die Güter reichen nicht aus, um alle Bedürfnisse zu befriedigen."],
    ["Bedürfnis, Bedarf, Nachfrage?", "Bedürfnis = Wunsch; Bedarf = mit Kaufkraft unterlegtes Bedürfnis; Nachfrage = am Markt geäußerter Bedarf."],
    ["Merkmale der freien Marktwirtschaft?", "Privateigentum, Wettbewerb, Preisbildung durch Angebot und Nachfrage, Staat nur Ordnungsrahmen."],
    ["Merkmale der Zentralverwaltungswirtschaft?", "Planbehörde bestimmt Produktion und Preise; Kollektiveigentum."],
    ["Nachteil der Zentralverwaltungswirtschaft?", "Wenig Leistungsanreiz, Fehlallokation, Mangel, kaum Konsumentenfreiheit."],
    ["Nachteil der freien Marktwirtschaft?", "Soziale Ungleichheit, Konzentration/Monopole, Externe Effekte ohne Eingriff."],
    ["Was ist die soziale Marktwirtschaft?", "Marktwirtschaft mit sozialem Ausgleich durch den Staat."],
    ["Beispiele sozialer Ausgleich?", "Sozialversicherung, Kündigungsschutz, Kartellrecht, Mindestlohn, Wohngeld, Verbraucherschutz."],
    ["Wer prägte die soziale Marktwirtschaft?", "Alfred Müller-Armack und Ludwig Erhard."],
    ["Was ist der primäre Sektor?", "Urproduktion: Land-/Forstwirtschaft, Fischerei, Bergbau."],
    ["Was ist der sekundäre Sektor?", "Industrie und Handwerk – Weiterverarbeitung."],
    ["Was ist der tertiäre Sektor?", "Dienstleistungen (Handel, Banken, Werbeagenturen)."],
    ["Nenne die Wirtschaftssubjekte.", "Private Haushalte, Unternehmen, Staat, Ausland."],
    ["Was ist ein Wirtschaftsgut?", "Knappes Gut, das einen Preis hat (im Gegensatz zu freien Gütern wie Luft)."],
    ["Konsumgüter vs. Produktionsgüter?", "Konsumgüter befriedigen direkt Bedürfnisse, Produktionsgüter dienen der Herstellung anderer Güter."],
  ])
  .gls([
    ["Knappheit", "Missverhältnis zwischen Bedürfnissen und verfügbaren Gütern."],
    ["Soziale Marktwirtschaft", "Wirtschaftsordnung Deutschlands: Markt plus sozialer Ausgleich."],
    ["Dienstleistung", "Immaterielles Gut, das nicht lagerfähig ist."],
  ])
  .mc("Welche Wirtschaftsordnung gilt in Deutschland?", "Soziale Marktwirtschaft", ["Zentralverwaltungswirtschaft", "Freie Marktwirtschaft", "Planwirtschaft mit Mischformen", "Subsistenzwirtschaft"])
  .mc("Welches Merkmal passt zur Zentralverwaltungswirtschaft?", "Eine staatliche Planbehörde legt Preise und Produktion fest.", ["Preise entstehen am Markt.", "Privateigentum an Produktionsmitteln", "Gewinnstreben als Antrieb", "Wettbewerb unter den Unternehmen"])
  .mc("Ein Landwirt gehört zu welchem Wirtschaftssektor?", "Primärer Sektor", ["Sekundärer Sektor", "Tertiärer Sektor", "Quartärer Sektor", "Kein Sektor"])
  .mc("Eine Werbeagentur gehört zu welchem Sektor?", "Tertiärer Sektor", ["Primärer Sektor", "Sekundärer Sektor", "Gar keinem", "Zum Staat"])
  .mc("Welche Maßnahme gehört zur sozialen Komponente der sozialen Marktwirtschaft?", "Gesetzliche Sozialversicherung", ["Preisfestsetzung durch eine Planbehörde", "Verbot von Privateigentum", "Abschaffung des Wettbewerbs", "Verstaatlichung aller Betriebe"])
  .match("Ordnen Sie jedes Merkmal der Wirtschaftsordnung zu.", [
    ["Preise werden zentral festgelegt", "Zentralverwaltungswirtschaft"],
    ["Preis entsteht durch Angebot und Nachfrage", "Marktwirtschaft"],
    ["Marktwirtschaft mit sozialem Ausgleich", "Soziale Marktwirtschaft"],
    ["Staat beschränkt sich auf Rahmenbedingungen", "Freie Marktwirtschaft"],
  ])
  .match("Ordnen Sie jedes Unternehmen dem Sektor zu.", [
    ["Bauernhof", "primär"],
    ["Autohersteller", "sekundär"],
    ["Werbeagentur", "tertiär"],
    ["Bank", "tertiär"],
  ])
  .tf("In der sozialen Marktwirtschaft greift der Staat nie ein.", false)
  .tf("Knappheit bedeutet, dass nicht alle Bedürfnisse befriedigt werden können.", true)
  .cloze("Die Wirtschaftsordnung Deutschlands heißt [[soziale Marktwirtschaft]].")
  .done();

/* ---------- Markt ---------- */
const markt = T("wsp-lf12-markt")
  .summary("Wettbewerb, Marktformen, Kooperation & Konzentration", `
**Preisbildung**: Nachfrage sinkt bei steigendem Preis, Angebot steigt. **Gleichgewichtspreis** = Schnittpunkt; **Angebotsüberhang** → Preis sinkt; **Nachfrageüberhang** → Preis steigt.
**Marktformen** (Anbieter × Nachfrager): Polypol (viele/viele, vollkommener Markt) · Oligopol (wenige Anbieter) · Monopol (ein Anbieter) · Monopson (ein Nachfrager).
**Kooperation** (selbstständig bleiben): Arbeitsgemeinschaft (ARGE), Kartell (verboten, Absprachen), Interessengemeinschaft, Konsortium, Gemeinschaftsunternehmen (Joint Venture).
**Konzentration** (wirtschaftliche Selbstständigkeit verloren): Konzern, Fusion (Verschmelzung), Trust. Horizontal (gleiche Stufe) · vertikal (vor-/nachgelagert) · diagonal (Branchen).
**Staat**: **GWB**/Bundeskartellamt: Kartellverbot, Fusionskontrolle, Missbrauchsaufsicht gegen marktbeherrschende Unternehmen.
`)
  .cards([
    ["Was ist der Gleichgewichtspreis?", "Preis, bei dem Angebots- und Nachfragemenge gleich sind."],
    ["Was passiert bei einem Angebotsüberhang?", "Der Preis sinkt, bis der Markt geräumt ist."],
    ["Was passiert bei einem Nachfrageüberhang?", "Der Preis steigt."],
    ["Wie reagiert die Nachfrage auf Preiserhöhung?", "Die nachgefragte Menge sinkt (normales Gut)."],
    ["Wie reagiert das Angebot auf Preiserhöhung?", "Die angebotene Menge steigt."],
    ["Was ist ein Polypol?", "Viele Anbieter und viele Nachfrager – vollständige Konkurrenz."],
    ["Was ist ein Oligopol?", "Wenige Anbieter, viele Nachfrager."],
    ["Was ist ein Monopol?", "Ein Anbieter, viele Nachfrager."],
    ["Was ist ein Monopson?", "Ein Nachfrager, viele Anbieter."],
    ["Was ist ein Kartell?", "Absprache selbstständiger Unternehmen zur Beschränkung des Wettbewerbs – grundsätzlich verboten."],
    ["Was ist eine Arbeitsgemeinschaft (ARGE)?", "Zeitlich begrenzte Kooperation für ein Projekt, z. B. Großauftrag."],
    ["Was ist ein Konzern?", "Zusammenschluss rechtlich selbstständiger Unternehmen unter einheitlicher Leitung."],
    ["Was ist eine Fusion?", "Zusammenschluss zweier Unternehmen; ein Unternehmen verliert seine Selbstständigkeit."],
    ["Horizontal, vertikal, diagonal?", "Horizontal: gleiche Stufe. Vertikal: vor-/nachgelagerte Stufe. Diagonal: verschiedene Branchen."],
    ["Aufgabe des Bundeskartellamts?", "Kartellverbot durchsetzen, Fusionen prüfen, Missbrauch von Marktmacht verhindern."],
    ["Kooperation vs. Konzentration?", "Kooperation: Selbstständigkeit bleibt. Konzentration: Selbstständigkeit geht verloren."],
    ["Vorteile einer Kooperation?", "Kosten- und Risikoteilung, Wissen bündeln, Marktmacht."],
  ])
  .gls([
    ["Gleichgewichtspreis", "Preis, bei dem sich Angebot und Nachfrage ausgleichen."],
    ["Kartell", "Wettbewerbsbeschränkende Absprache von Unternehmen."],
    ["Fusion", "Verschmelzung von Unternehmen."],
    ["Oligopol", "Marktform mit wenigen Anbietern."],
    ["Konzern", "Unternehmen unter einheitlicher Leitung."],
  ])
  .mc("Was geschieht bei einem Angebotsüberhang?", "Der Preis sinkt.", ["Der Preis steigt.", "Der Preis bleibt gleich.", "Die Nachfrage sinkt auf null.", "Der Staat setzt den Preis fest."])
  .mc("Es gibt nur einen Anbieter für eine Leistung. Wie heißt die Marktform?", "Monopol", ["Polypol", "Oligopol", "Monopson", "Kartell"])
  .mc("Drei große Telekommunikationsunternehmen teilen sich den Markt. Welche Marktform?", "Oligopol", ["Monopol", "Polypol", "Monopson", "Duopol mit Preisbindung"])
  .mc("Welche Aussage zum Kartell ist richtig?", "Kartelle sind grundsätzlich verboten.", ["Kartelle sind immer erlaubt.", "Sie dienen dem Wettbewerb.", "Sie sind Konzentrationsformen.", "Sie entstehen durch Fusion."])
  .mc("Zwei Agenturen schließen sich für ein Großprojekt zeitlich befristet zusammen und bleiben selbstständig. Was ist das?", "Kooperation (Arbeitsgemeinschaft)", ["Fusion", "Konzern", "Trust", "Monopol"])
  .mc("Ein Konzern kauft einen Zulieferer. Welche Art der Konzentration?", "Vertikal", ["Horizontal", "Diagonal", "Kooperativ", "Keine"])
  .match("Ordnen Sie jede Marktform zu.", [
    ["Viele Anbieter, viele Nachfrager", "Polypol"],
    ["Wenige Anbieter", "Oligopol"],
    ["Ein Anbieter", "Monopol"],
    ["Ein Nachfrager", "Monopson"],
  ])
  .match("Ordnen Sie jedem Fall die Wirkung zu.", [
    ["Preis über dem Gleichgewicht", "Angebotsüberhang"],
    ["Preis unter dem Gleichgewicht", "Nachfrageüberhang"],
    ["Preis im Schnittpunkt", "Marktgleichgewicht"],
  ])
  .tf("Bei einem Nachfrageüberhang sinkt der Preis.", false)
  .tf("Das Bundeskartellamt prüft Unternehmenszusammenschlüsse.", true)
  .cloze("Bei Konzentration verlieren Unternehmen ihre wirtschaftliche [[Selbstständigkeit]].")
  .done();

/* ---------- Kreislauf ---------- */
const kreislauf = T("wsp-lf12-kreislauf")
  .summary("Wirtschaftskreislauf", `
**Einfacher Kreislauf**: Haushalte ↔ Unternehmen. Haushalte stellen **Produktionsfaktoren** (Arbeit, Boden, Kapital) bereit → erhalten **Einkommen** (Lohn, Zins, Miete/Pacht, Gewinn) → kaufen Konsumgüter → Unternehmen erhalten Umsatz.
**Erweiterter Kreislauf**: + Staat (Steuern, Subventionen, Transfers, Staatsausgaben) + Banken (Sparen/Investieren) + Ausland (Export/Import).
**Geldstrom** gegenläufig zum **Güterstrom**.
**Gleichgewicht**: Ersparnisse = Investitionen (S = I); Export = Import.
**Sparen** entzieht Geld aus dem Kreislauf, **Investieren** bringt es zurück.
`)
  .cards([
    ["Nenne die Produktionsfaktoren.", "Arbeit, Boden, Kapital (betriebswirtschaftlich auch Information/Wissen)."],
    ["Was erhalten Haushalte für den Einsatz der Produktionsfaktoren?", "Einkommen: Lohn (Arbeit), Pacht/Miete (Boden), Zins (Kapital), Gewinn."],
    ["Geldstrom vs. Güterstrom?", "Gegenläufig: Güter von Unternehmen zu Haushalten, Geld in umgekehrter Richtung."],
    ["Was ist eine Subvention?", "Staatliche Zahlung an Unternehmen ohne direkte Gegenleistung."],
    ["Was ist eine Transferzahlung?", "Staatliche Leistung an Haushalte ohne Gegenleistung (Kindergeld, Bürgergeld)."],
    ["Was entsteht durch Sparen im Kreislauf?", "Ein Geldabfluss – die Banken stellen es als Kredit für Investitionen wieder bereit."],
    ["Gleichgewichtsbedingung im Kreislauf?", "Ersparnis = Investition; Export = Import."],
    ["Was tut der Staat im erweiterten Kreislauf?", "Erhebt Steuern, zahlt Subventionen und Transfers, kauft Güter und Dienstleistungen."],
    ["Was zeigt der Außenbeitrag?", "Exporte minus Importe."],
    ["Was ist Investition?", "Kauf von Maschinen, Gebäuden und Anlagen zur Produktion (Bruttoinvestition) – erhöht Produktionskapazität."],
  ])
  .gls([
    ["Produktionsfaktoren", "Arbeit, Boden, Kapital."],
    ["Transferzahlung", "Staatliche Zahlung ohne Gegenleistung."],
    ["Subvention", "Finanzielle Unterstützung des Staates für Unternehmen."],
  ])
  .mc("Welches Einkommen erhalten Haushalte für den Faktor Kapital?", "Zins", ["Lohn", "Pacht", "Gewinn", "Miete"])
  .mc("Welches Einkommen erhalten Haushalte für den Faktor Arbeit?", "Lohn", ["Zins", "Pacht", "Gewinn", "Dividende"])
  .mc("Was ist eine Transferzahlung?", "Kindergeld", ["Gehalt eines Lehrers", "Kaufpreis eines Fahrzeugs", "Steuerzahlung", "Dividende"])
  .mc("Welche Aussage zum Wirtschaftskreislauf ist richtig?", "Der Geldstrom verläuft entgegengesetzt zum Güterstrom.", ["Geld- und Güterstrom laufen gleichgerichtet.", "Der Staat ist nicht Teil des Kreislaufs.", "Sparen erhöht immer den Konsum.", "Haushalte produzieren Güter für Haushalte."])
  .match("Ordnen Sie jedem Faktor das Einkommen zu.", [
    ["Arbeit", "Lohn/Gehalt"],
    ["Boden", "Pacht/Miete"],
    ["Kapital", "Zins"],
    ["Unternehmerleistung", "Gewinn"],
  ])
  .tf("Subventionen sind Zahlungen des Staates an Haushalte.", false, { e: "Sie gehen an Unternehmen; an Haushalte gehen Transfers." })
  .cloze("Im Gleichgewicht entsprechen die [[Ersparnisse]] den [[Investitionen]].")
  .done();

/* ---------- Ziele ---------- */
const ziele = T("wsp-lf12-ziele")
  .summary("Stabilitätsgesetz & magisches Vier-/Sechseck", `
**StabG (1967)** verpflichtet Bund und Länder zu gesamtwirtschaftlichem Gleichgewicht: **magisches Viereck**
1. **Preisniveaustabilität** (Inflationsrate ≈ 2 %)
2. **Hoher Beschäftigungsstand** (Arbeitslosenquote ≤ 2 %)
3. **Außenwirtschaftliches Gleichgewicht** (Außenbeitrag 1,5 % BIP)
4. **Stetiges, angemessenes Wirtschaftswachstum** (≈ 3–4 %)
Erweitert zum **magischen Sechseck**: + **gerechte Einkommens- und Vermögensverteilung**, + **Umweltschutz/Nachhaltigkeit**.
**Zielkonflikte**: z. B. Beschäftigung ↔ Preisstabilität (Phillips-Kurve), Wachstum ↔ Umwelt, Beschäftigung ↔ Verteilung. **Zielharmonie**: z. B. Wachstum ↔ Beschäftigung. **Zielneutralität**.
`)
  .cards([
    ["Wofür steht StabG?", "Stabilitäts- und Wachstumsgesetz von 1967."],
    ["Nenne die vier Ziele des magischen Vierecks.", "Preisniveaustabilität, hoher Beschäftigungsstand, außenwirtschaftliches Gleichgewicht, stetiges angemessenes Wachstum."],
    ["Welche zwei Ziele ergänzen das Sechseck?", "Gerechte Einkommens-/Vermögensverteilung und Umweltschutz."],
    ["Warum „magisch“?", "Weil sich die Ziele gleichzeitig kaum erreichen lassen."],
    ["Zielwert Preisniveaustabilität?", "Inflationsrate rund 2 %."],
    ["Zielwert Beschäftigung?", "Arbeitslosenquote unter 2 % (Vollbeschäftigung)."],
    ["Zielwert Wachstum?", "Etwa 3–4 % reales BIP-Wachstum."],
    ["Beispiel Zielkonflikt?", "Hohes Wachstum belastet die Umwelt; niedrige Arbeitslosigkeit kann Inflation fördern."],
    ["Beispiel Zielharmonie?", "Wirtschaftswachstum fördert Beschäftigung."],
    ["Was beschreibt die Phillips-Kurve?", "Zielkonflikt: niedrigere Arbeitslosigkeit geht oft mit höherer Inflation einher."],
  ])
  .gls([
    ["Magisches Viereck", "Vier gesamtwirtschaftliche Ziele des StabG."],
    ["Zielkonflikt", "Das Erreichen eines Ziels beeinträchtigt ein anderes."],
    ["Zielharmonie", "Das Erreichen eines Ziels fördert ein anderes."],
  ])
  .mc("Welches Ziel gehört nicht zum magischen Viereck?", "Umweltschutz", ["Preisniveaustabilität", "Hoher Beschäftigungsstand", "Außenwirtschaftliches Gleichgewicht", "Stetiges Wachstum"])
  .mc("Welche Aussage über den Zielwert der Inflation ist richtig?", "Etwa 2 % pro Jahr", ["0 %", "10 %", "−5 %", "20 %"])
  .mc("Hohes Wirtschaftswachstum erhöht Umweltbelastungen. Welche Beziehung?", "Zielkonflikt", ["Zielharmonie", "Zielneutralität", "Kein Bezug", "Gleichgewicht"])
  .mc("Sinkende Arbeitslosigkeit durch steigende Produktion. Welche Beziehung?", "Zielharmonie", ["Zielkonflikt", "Zielneutralität", "Inflation", "Deflation"])
  .match("Ordnen Sie jedem Ziel den Indikator zu.", [
    ["Preisniveaustabilität", "Inflationsrate"],
    ["Hoher Beschäftigungsstand", "Arbeitslosenquote"],
    ["Wachstum", "Veränderung des realen BIP"],
    ["Außenwirtschaftliches Gleichgewicht", "Außenbeitrag"],
  ])
  .tf("Das magische Sechseck enthält auch Umweltschutz.", true)
  .tf("Alle Ziele des magischen Vierecks lassen sich leicht gleichzeitig erreichen.", false)
  .cloze("Das [[magische Viereck]] wird durch Umweltschutz und gerechte Verteilung zum [[Sechseck]] erweitert.")
  .done();

/* ---------- BIP ---------- */
const bip = T("wsp-lf12-bip")
  .summary("BIP, Wachstum & Konjunktur", `
**BIP** = Wert aller in einem Jahr im Inland hergestellten Güter und Dienstleistungen (Entstehung, Verwendung, Verteilung). **nominal** (aktuelle Preise) vs. **real** (preisbereinigt, Wachstum).
**Verwendung**: BIP = Konsum + Investitionen + Staatsausgaben + (Export − Import).
**Wachstumsrate** = (BIP_neu − BIP_alt) / BIP_alt · 100.
**BIP pro Kopf** = BIP : Einwohner. Grenzen: Schwarzarbeit, Hausarbeit, Umweltschäden, Verteilung.
**Konjunkturzyklus**: **Aufschwung (Expansion)** → **Hochkonjunktur (Boom)** → **Abschwung (Rezession)** → **Tiefstand (Depression)**. **Konjunkturindikatoren**: Frühindikatoren (ifo-Geschäftsklima, Auftragseingang), Präsenz-, Spätindikatoren (Arbeitslosigkeit). Wachstum (langfristig) ≠ Konjunktur (kurzfristig).
`)
  .cards([
    ["Was misst das BIP?", "Den Wert aller im Inland in einem Jahr hergestellten Güter und Dienstleistungen."],
    ["Nominales vs. reales BIP?", "Nominal: zu aktuellen Preisen. Real: preisbereinigt, zeigt echtes Wachstum."],
    ["Verwendungsrechnung des BIP?", "Konsum + Investitionen + Staatsausgaben + Außenbeitrag (Export − Import)."],
    ["Wachstumsrate berechnen?", "(BIP neu − BIP alt) : BIP alt · 100."],
    ["BIP pro Kopf?", "BIP geteilt durch Einwohnerzahl – grober Wohlstandsindikator."],
    ["Grenzen des BIP als Wohlstandsmaß?", "Schwarzarbeit, Hausarbeit, Umweltschäden und Verteilung werden nicht erfasst."],
    ["Nenne die Konjunkturphasen.", "Aufschwung, Boom (Hochkonjunktur), Abschwung (Rezession), Tiefstand (Depression)."],
    ["Merkmale des Booms?", "Hohe Auslastung, Vollbeschäftigung, steigende Preise und Löhne."],
    ["Merkmale der Rezession?", "Sinkende Produktion, steigende Arbeitslosigkeit, sinkende Investitionen."],
    ["Beispiel Frühindikator?", "ifo-Geschäftsklimaindex, Auftragseingänge."],
    ["Beispiel Spätindikator?", "Arbeitslosenquote."],
    ["Wachstum vs. Konjunktur?", "Wachstum: langfristige BIP-Entwicklung. Konjunktur: kurzfristige Schwankungen um den Trend."],
    ["Technische Rezession?", "Zwei Quartale in Folge sinkendes BIP."],
  ])
  .gls([
    ["BIP", "Bruttoinlandsprodukt: Wert der im Inland erzeugten Güter und Dienstleistungen."],
    ["Konjunktur", "Kurzfristige Schwankungen der wirtschaftlichen Aktivität."],
    ["Rezession", "Phase sinkenden Wachstums."],
  ])
  .mc("Welche Komponente gehört zur Verwendungsrechnung des BIP?", "Investitionen", ["Löhne", "Gewinne", "Pachteinnahmen", "Zinseinnahmen"])
  .mc("Welche Phase folgt auf den Boom?", "Abschwung (Rezession)", ["Aufschwung", "Tiefstand", "Wachstum", "Inflation"])
  .mc("Welcher Indikator ist ein Spätindikator?", "Arbeitslosenquote", ["ifo-Geschäftsklima", "Auftragseingang", "Aktienkurse", "Baugenehmigungen"])
  .mc("Welche Wirkung hat Inflation auf das nominale BIP?", "Es steigt auch ohne reales Wachstum.", ["Es sinkt immer.", "Es bleibt konstant.", "Es entspricht dem realen BIP.", "Es wird nicht gemessen."])
  .mc("Was ist ein Merkmal der Rezession?", "Steigende Arbeitslosigkeit", ["Rekordbeschäftigung", "Steigende Investitionen", "Steigende Löhne", "Überlastete Produktion"])
  .match("Ordnen Sie jede Konjunkturphase dem Merkmal zu.", [
    ["Aufschwung", "Produktion und Beschäftigung steigen"],
    ["Boom", "Höchste Auslastung, Preisanstieg"],
    ["Rezession", "Produktion sinkt"],
    ["Depression", "Tiefpunkt mit hoher Arbeitslosigkeit"],
  ])
  .tcalc(
    "Das reale BIP einer Volkswirtschaft betrug im Vorjahr {a|int} Mrd. €, im laufenden Jahr {b|int} Mrd. €. Wie hoch ist das reale Wachstum in Prozent?",
    "(b-a)/a*100",
    { a: V.int(2800, 3600, 100), g: V.pick([-2, -1, 0.5, 1, 1.5, 2, 3]), b: V.expr("a*(1+g/100)", 0, "int") },
    { unit: "%", steps: ["Wachstum = ({b|int} − {a|int}) : {a|int} · 100", "= {result} %"] },
  )
  .tcalc(
    "Konsum {c|int} Mrd. €, Investitionen {i|int} Mrd. €, Staatsausgaben {g|int} Mrd. €, Exporte {x|int} Mrd. €, Importe {m|int} Mrd. €. Berechnen Sie das BIP (Mrd. €).",
    "c+i+g+x-m",
    { c: V.int(1500, 2000, 50), i: V.int(500, 800, 50), g: V.int(600, 900, 50), x: V.int(1400, 1800, 50), m: V.int(1200, 1700, 50) },
    { unit: "Mrd. €", dec: 0, steps: ["BIP = C + I + G + (X − M)", "= {result|int} Mrd. €"] },
  )
  .tf("Das BIP zählt Schwarzarbeit mit.", false)
  .cloze("Auf den Aufschwung folgt der [[Boom]], danach die [[Rezession]].")
  .done();

/* ---------- Preise ---------- */
const preise = T("wsp-lf12-preise")
  .summary("Preisniveaustabilität: Inflation & Deflation", `
**Inflation** = anhaltender Anstieg des Preisniveaus (Geldwert sinkt) · **Deflation** = anhaltendes Sinken · **Disinflation** = geringere Inflationsrate.
Messung: **Verbraucherpreisindex (VPI)** auf Basis eines **Warenkorbs**; Inflationsrate = (VPI_neu − VPI_alt) : VPI_alt · 100.
**Ursachen**: *Nachfrageinflation* (Nachfrage > Angebot) · *Angebotsinflation/Kostendruckinflation* (Löhne, Rohstoffe, Energie) · *importierte Inflation* · *Geldmengeninflation*.
**Folgen**: Kaufkraftverlust, Sparer/Gläubiger verlieren, Sachwerte gewinnen, Lohn-Preis-Spirale; **Deflation**: Konsum wird aufgeschoben, Abwärtsspirale.
**Kaufkraft** = 1 / Preisniveau; reale Löhne = nominale Löhne bereinigt um Inflation.
**EZB-Ziel**: Inflation mittelfristig **2 %**.
`)
  .cards([
    ["Was ist Inflation?", "Anhaltender Anstieg des allgemeinen Preisniveaus; der Geldwert sinkt."],
    ["Was ist Deflation?", "Anhaltendes Sinken des Preisniveaus."],
    ["Womit wird Inflation gemessen?", "Verbraucherpreisindex (VPI) auf Basis eines Warenkorbs."],
    ["Inflationsrate berechnen?", "(VPI neu − VPI alt) : VPI alt · 100."],
    ["Ursachen der Nachfrageinflation?", "Gesamtnachfrage übersteigt das Angebot."],
    ["Ursachen der Kostendruckinflation?", "Gestiegene Kosten (Löhne, Energie, Rohstoffe) werden auf Preise überwälzt."],
    ["Was ist importierte Inflation?", "Preissteigerungen im Ausland (Rohstoffe, Energie) werden importiert."],
    ["Wer gewinnt bei Inflation?", "Schuldner und Sachwertbesitzer."],
    ["Wer verliert bei Inflation?", "Sparer, Gläubiger, Bezieher fester Einkommen."],
    ["Gefahr der Deflation?", "Konsum und Investitionen werden aufgeschoben – Abwärtsspirale."],
    ["Was ist die Lohn-Preis-Spirale?", "Höhere Löhne führen zu höheren Preisen, die wieder höhere Lohnforderungen auslösen."],
    ["Inflationsziel der EZB?", "Mittelfristig 2 %."],
    ["Was ist ein Warenkorb?", "Typische Güter und Dienstleistungen eines Haushalts zur Messung der Preisentwicklung."],
    ["Nominallohn vs. Reallohn?", "Nominal: Geldbetrag. Real: Kaufkraft, bereinigt um Inflation."],
  ])
  .gls([
    ["Inflation", "Anhaltender Preisniveauanstieg."],
    ["Deflation", "Anhaltender Preisniveauverfall."],
    ["VPI", "Verbraucherpreisindex."],
    ["Warenkorb", "Gewichtete Auswahl typischer Verbrauchsgüter."],
  ])
  .mc("Was ist ein Beispiel für importierte Inflation?", "Die Erdölpreise steigen weltweit und verteuern Energie.", ["Der Staat erhöht die Mehrwertsteuer.", "Die Nachfrage sinkt.", "Der Staat erhöht den Mindestlohn.", "Die Löhne sinken."])
  .mc("Wer verliert bei Inflation?", "Sparer mit festverzinsten Guthaben", ["Schuldner", "Sachwertbesitzer", "Immobilieneigentümer", "Kreditnehmer mit Festzins"])
  .mc("Welche Folge hat Deflation?", "Konsum wird aufgeschoben – Abwärtsspirale", ["Kaufkraft sinkt", "Löhne steigen stark", "Schuldner profitieren", "Geld verliert an Wert"])
  .mc("Welche Aussage zum Verbraucherpreisindex trifft zu?", "Er misst die Preisentwicklung eines Warenkorbs.", ["Er misst das BIP.", "Er zeigt die Arbeitslosigkeit.", "Er misst die Geldmenge.", "Er wird von der EZB direkt festgelegt."])
  .mc("Was passiert bei Nachfrageinflation?", "Die Nachfrage übersteigt das Angebot und die Preise steigen.", ["Die Kosten steigen, die Nachfrage sinkt.", "Die Preise sinken.", "Das Angebot übersteigt die Nachfrage.", "Die Importe sinken."])
  .match("Ordnen Sie jede Ursache der Inflationsart zu.", [
    ["Nachfrage übersteigt Angebot", "Nachfrageinflation"],
    ["Löhne und Energie verteuern Produktion", "Kostendruckinflation"],
    ["Rohstoffpreise steigen im Ausland", "importierte Inflation"],
    ["Zu viel Geld im Umlauf", "Geldmengeninflation"],
  ])
  .tcalc(
    "Der Preisindex stieg von {a} auf {b} Punkte. Berechnen Sie die Inflationsrate in Prozent.",
    "(b-a)/a*100",
    { a: V.pick([100, 102, 104, 105, 108, 110]), b: V.pick([112, 114, 115, 118, 120, 125]) },
    { unit: "%", steps: ["Inflationsrate = ({b} − {a}) : {a} · 100", "= {result} %"] },
  )
  .tcalc(
    "Ein Unternehmen verlangt für ein Paket {p|eur}. Bei einer Inflation von {i} % im Jahr: Wie viel würde das Paket im nächsten Jahr kosten (bei gleicher Preisentwicklung)?",
    "p*(1+i/100)",
    { p: V.int(100, 900, 50), i: V.pick([2, 3, 4, 5, 8]) },
    { unit: "€", steps: ["{p|eur} · (1 + {i} %) = {result|eur}"] },
  )
  .tf("Bei Deflation sinkt das Preisniveau.", true)
  .cloze("Der [[Verbraucherpreisindex]] misst die Preisentwicklung eines [[Warenkorbs]].")
  .done();

/* ---------- Arbeit ---------- */
const arbeit = T("wsp-lf12-arbeit")
  .summary("Beschäftigung & Arbeitslosigkeit", `
**Arbeitslosenquote** = Arbeitslose : zivile Erwerbspersonen · 100. **Erwerbspersonen** = Erwerbstätige + Arbeitslose.
**Arten**: *konjunkturell* (Rezession) · *saisonal* (Bau, Gastro) · *strukturell* (Strukturwandel, Qualifikation passt nicht) · *friktionell/Such-* (Wechsel des Arbeitsplatzes) · *technologisch*.
**Maßnahmen**: **Nachfrageorientiert** (Konjunkturprogramme, Investitionen) · **Angebotsorientiert** (Steuersenkungen, flexiblere Arbeitszeiten) · **Arbeitsmarktpolitik** (Weiterbildung, Umschulung, Kurzarbeit, Lohnkostenzuschüsse).
**Folgen**: Steuerausfälle, Sozialausgaben ↑, soziale Spannungen, Kaufkraftverlust.
`)
  .cards([
    ["Arbeitslosenquote berechnen?", "Arbeitslose : zivile Erwerbspersonen · 100."],
    ["Wer zählt zu den Erwerbspersonen?", "Erwerbstätige und Arbeitslose."],
    ["Konjunkturelle Arbeitslosigkeit?", "Entsteht durch Rezession bei sinkender Nachfrage."],
    ["Saisonale Arbeitslosigkeit?", "Tritt jahreszeitlich bedingt auf (Bau, Tourismus)."],
    ["Strukturelle Arbeitslosigkeit?", "Qualifikationen oder Regionen passen nicht zu freien Stellen; Strukturwandel."],
    ["Friktionelle Arbeitslosigkeit?", "Kurzzeitig beim Wechsel des Arbeitsplatzes (Sucharbeitslosigkeit)."],
    ["Beispiel nachfrageorientierte Maßnahme?", "Staatliche Investitionsprogramme, Steuersenkung für Haushalte."],
    ["Beispiel angebotsorientierte Maßnahme?", "Steuer- und Bürokratieentlastung für Unternehmen."],
    ["Was ist Kurzarbeit?", "Vorübergehende Verkürzung der Arbeitszeit; Agentur für Arbeit zahlt Kurzarbeitergeld."],
    ["Folgen von Arbeitslosigkeit?", "Weniger Steuern/Beiträge, mehr Sozialausgaben, geringere Kaufkraft."],
    ["Was ist Vollbeschäftigung?", "Arbeitslosenquote unter 2–3 % (Sockel durch friktionelle Arbeitslosigkeit)."],
  ])
  .gls([
    ["Erwerbspersonen", "Erwerbstätige plus Arbeitslose."],
    ["Strukturelle Arbeitslosigkeit", "Folge von Strukturwandel."],
    ["Kurzarbeit", "Vorübergehende Verkürzung der Arbeitszeit."],
  ])
  .mc("Ein Bauarbeiter ist im Winter arbeitslos. Welche Art?", "Saisonale Arbeitslosigkeit", ["Konjunkturelle", "Strukturelle", "Friktionelle", "Technologische"])
  .mc("Ein Setzer verliert wegen Digitalisierung den Job. Welche Art?", "Strukturelle (technologische) Arbeitslosigkeit", ["Saisonal", "Friktionell", "Konjunkturell", "Keine"])
  .mc("Welche Maßnahme ist nachfrageorientiert?", "Staatliche Investitionsprogramme", ["Senkung der Unternehmenssteuer", "Bürokratieabbau", "Lockerung des Kündigungsschutzes", "Senkung der Lohnnebenkosten"])
  .mc("Wer gehört zu den Erwerbspersonen?", "Erwerbstätige und Arbeitslose", ["Nur Beschäftigte", "Schüler", "Rentner", "Hausfrauen"])
  .match("Ordnen Sie jedem Fall die Arbeitslosigkeitsart zu.", [
    ["Eine Marketingfachkraft wechselt den Job und sucht 3 Wochen", "friktionell"],
    ["Wirtschaftskrise, weniger Aufträge", "konjunkturell"],
    ["Strukturwandel im Ruhrgebiet", "strukturell"],
    ["Saisonkräfte im Tourismus im Winter", "saisonal"],
  ])
  .tcalc(
    "In einer Region gibt es {e|int} Erwerbstätige und {a|int} Arbeitslose. Berechnen Sie die Arbeitslosenquote in Prozent (bezogen auf alle Erwerbspersonen).",
    "a/(e+a)*100",
    { e: V.int(40000, 90000, 5000), a: V.int(2000, 9000, 500) },
    { unit: "%", steps: ["Erwerbspersonen = {e|int} + {a|int}", "Quote = {a|int} : Erwerbspersonen · 100 = {result} %"] },
  )
  .tf("Friktionelle Arbeitslosigkeit tritt beim Arbeitsplatzwechsel auf.", true)
  .cloze("Die Arbeitslosenquote misst Arbeitslose im Verhältnis zu den [[Erwerbspersonen]].")
  .done();

/* ---------- Außenwirtschaft ---------- */
const aussen = T("wsp-lf12-aussen")
  .summary("Außenwirtschaftliches Gleichgewicht", `
**Außenhandel**: Export (Ausfuhr) − Import (Einfuhr) = **Außenbeitrag**. **Handelsbilanz** (Waren) ⊂ **Leistungsbilanz** ⊂ **Zahlungsbilanz**.
Gleichgewicht: Außenbeitrag ≈ +1,5 % BIP (Exportüberschuss moderat); dauerhaft hohe Überschüsse → Spannungen.
**Wechselkurs**: Preis einer Währung in einer anderen. **Aufwertung** (Euro stärker): Exporte teurer, Importe billiger. **Abwertung**: Exporte billiger, Importe teurer.
**Freihandel vs. Protektionismus** (Zölle, Quoten, Subventionen). **WTO** fördert Freihandel. **EU-Binnenmarkt**: 4 Grundfreiheiten (Waren, Dienstleistungen, Kapital, Personen).
**Vorteile Außenhandel**: Arbeitsteilung, Wohlstand, Vielfalt, Preise ↓.
`)
  .cards([
    ["Was ist der Außenbeitrag?", "Exporte minus Importe."],
    ["Handelsbilanz?", "Saldo aus Waren-Exporten und -Importen."],
    ["Leistungsbilanz?", "Handelsbilanz + Dienstleistungen + Erwerbs- und Vermögenseinkommen + laufende Übertragungen."],
    ["Wechselkurs?", "Preis einer Währung in einer anderen Währung."],
    ["Folgen einer Aufwertung des Euro?", "Exporte werden für das Ausland teurer, Importe billiger."],
    ["Folgen einer Abwertung des Euro?", "Exporte werden billiger (Wettbewerbsvorteil), Importe teurer."],
    ["Was ist Protektionismus?", "Schutz der heimischen Wirtschaft durch Zölle, Quoten, Subventionen."],
    ["Was ist ein Zoll?", "Abgabe auf eingeführte Waren."],
    ["Was ist eine Importquote?", "Mengenmäßige Beschränkung der Einfuhr."],
    ["Aufgabe der WTO?", "Förderung des freien Welthandels, Streitschlichtung."],
    ["Die vier Grundfreiheiten des EU-Binnenmarkts?", "Freier Waren-, Dienstleistungs-, Kapital- und Personenverkehr."],
    ["Vorteile des Außenhandels?", "Arbeitsteilung, größere Auswahl, günstigere Preise, Wohlstand."],
    ["Nachteil eines zu hohen Exportüberschusses?", "Abhängigkeit vom Ausland, Spannungen mit Handelspartnern."],
  ])
  .gls([
    ["Außenbeitrag", "Exporte minus Importe."],
    ["Protektionismus", "Handelsschranken zum Schutz der Inlandswirtschaft."],
    ["Wechselkurs", "Preis einer Währung."],
  ])
  .mc("Der Euro wertet gegenüber dem Dollar auf. Was folgt?", "Exporte in die USA werden teurer.", ["Importe aus den USA werden teurer.", "Exporte werden billiger.", "Es gibt keine Auswirkung.", "Importe sinken."])
  .mc("Wie wird der Außenbeitrag berechnet?", "Exporte − Importe", ["Exporte + Importe", "Importe − Exporte", "Exporte : Importe", "BIP − Exporte"])
  .mc("Welches Instrument ist protektionistisch?", "Einfuhrzoll", ["Abbau von Handelshemmnissen", "Freihandelsabkommen", "WTO-Mitgliedschaft", "Binnenmarkt"])
  .mc("Welche ist keine Grundfreiheit des EU-Binnenmarkts?", "Freier Zollverkehr nach Belieben", ["Freier Warenverkehr", "Freier Kapitalverkehr", "Freizügigkeit der Personen", "Freier Dienstleistungsverkehr"])
  .match("Ordnen Sie den Instrumenten die Wirkung zu.", [
    ["Zoll", "Verteuert Importe"],
    ["Importquote", "Begrenzt Einfuhrmenge"],
    ["Aufwertung", "Importe billiger"],
    ["Abwertung", "Exporte billiger"],
  ])
  .tcalc(
    "Exporte: {x|int} Mrd. €, Importe: {m|int} Mrd. €. Berechnen Sie den Außenbeitrag (Mrd. €).",
    "x-m",
    { x: V.int(1200, 1700, 50), m: V.int(1000, 1500, 50) },
    { unit: "Mrd. €", dec: 0, steps: ["{x|int} − {m|int} = {result|int}"] },
  )
  .tf("Bei einer Abwertung der eigenen Währung werden Exporte tendenziell billiger.", true)
  .cloze("Die [[WTO]] fördert den freien Welthandel, [[Zölle]] sind ein Instrument des Protektionismus.")
  .done();

/* ---------- Fiskal ---------- */
const fiskal = T("wsp-lf12-fiskal")
  .summary("Fiskalpolitik", `
**Fiskalpolitik** = Steuer- und Ausgabenpolitik des Staates zur Steuerung der Konjunktur (Keynes: **nachfrageorientiert**).
**Antizyklisch**: in der **Rezession** → Ausgaben ↑, Steuern ↓ (Defizit, **Konjunkturprogramm**); im **Boom** → Ausgaben ↓, Steuern ↑, Schulden tilgen/Rücklage (*Konjunkturausgleichsrücklage*).
**Gegenteil: prozyklisch** verstärkt Schwankungen.
**Staatseinnahmen**: Steuern (Einkommen-, Umsatz-, Körperschaft-, Gewerbesteuer), Gebühren, Beiträge, Kredite. **Staatsausgaben**: Soziales, Bildung, Infrastruktur, Zinsen.
**Schuldenbremse** (Art. 109 GG): Strukturelles Defizit des Bundes max. 0,35 % BIP; **Maastricht**: Defizit ≤ 3 % BIP, Schuldenstand ≤ 60 % BIP.
**Probleme**: Time-Lag, Crowding-out, Verschuldung, Inflationsgefahr.
`)
  .cards([
    ["Was ist Fiskalpolitik?", "Steuerung der Wirtschaft durch Staatseinnahmen und -ausgaben."],
    ["Was bedeutet antizyklisch?", "Gegen die Konjunktur steuern: in der Rezession mehr ausgeben, im Boom sparen."],
    ["Was tut der Staat in der Rezession?", "Erhöht Ausgaben (Investitionen), senkt Steuern, nimmt notfalls Kredite auf."],
    ["Was tut der Staat im Boom?", "Senkt Ausgaben, erhöht Steuern, bildet Rücklagen/tilgt Schulden."],
    ["Was ist eine prozyklische Politik?", "Sie verstärkt die Konjunkturschwankungen."],
    ["Was ist ein Konjunkturprogramm?", "Zusätzliche Staatsausgaben, um die Nachfrage zu beleben."],
    ["Nenne wichtige Steuern.", "Einkommensteuer, Umsatzsteuer, Körperschaftsteuer, Gewerbesteuer, Energiesteuer."],
    ["Was besagt die Schuldenbremse?", "Der Bund darf strukturell nur 0,35 % des BIP an neuen Schulden machen."],
    ["Maastricht-Kriterien zu Defizit und Schulden?", "Defizit höchstens 3 % und Schuldenstand höchstens 60 % des BIP."],
    ["Problem Time-Lag?", "Zeitverzögerung zwischen Erkennen, Beschluss und Wirkung der Maßnahmen."],
    ["Was ist Crowding-out?", "Staatliche Kreditaufnahme verdrängt private Investitionen (Zinsanstieg)."],
    ["Wer verfolgt Fiskalpolitik?", "Bund, Länder und Gemeinden (Regierung/Parlament)."],
  ])
  .gls([
    ["Fiskalpolitik", "Steuer- und Ausgabenpolitik des Staates."],
    ["Antizyklisch", "Gegen den Konjunkturverlauf gerichtet."],
    ["Schuldenbremse", "Verfassungsregel zur Begrenzung der Staatsverschuldung."],
  ])
  .mc("Welche Maßnahme ist antizyklische Fiskalpolitik in der Rezession?", "Erhöhung der Staatsausgaben für Infrastruktur", ["Steuererhöhung", "Kürzung der Investitionen", "Zinserhöhung durch die EZB", "Abbau von Staatsschulden"])
  .mc("Welche Maßnahme ist im Boom antizyklisch?", "Steuern erhöhen, Ausgaben senken", ["Mehr Konjunkturprogramme", "Steuersenkung", "Mehr Kredite aufnehmen", "Zinsen senken"])
  .mc("Wer betreibt Geldpolitik, wer Fiskalpolitik?", "Geldpolitik: EZB. Fiskalpolitik: Staat.", ["Beide: EZB", "Fiskalpolitik: EZB, Geldpolitik: Staat", "Beide: Bundestag", "Beide: Banken"])
  .mc("Welche Grenze gilt nach Maastricht für das jährliche Staatsdefizit?", "3 % des BIP", ["0 %", "1 %", "10 %", "60 %"])
  .match("Ordnen Sie jede Maßnahme der Konjunkturphase zu.", [
    ["Konjunkturprogramm", "Rezession"],
    ["Steuererhöhung zur Dämpfung der Nachfrage", "Boom"],
    ["Staatliche Investition in Breitband", "Rezession"],
    ["Bildung einer Konjunkturausgleichsrücklage", "Boom"],
  ])
  .tf("Fiskalpolitik wird von der EZB betrieben.", false)
  .cloze("Antizyklische Fiskalpolitik erhöht in der [[Rezession]] die Staatsausgaben und senkt im [[Boom]] die Nachfrage.")
  .done();

/* ---------- Geld ---------- */
const geld = T("wsp-lf12-geld")
  .summary("Geldpolitik der EZB", `
**EZB/Eurosystem**: oberstes Ziel **Preisstabilität** (mittelfristig 2 % Inflation), unabhängig von Regierungen. Sitz Frankfurt.
**Instrumente**: **Leitzinsen** (Hauptrefinanzierungssatz, Einlagefazilität, Spitzenrefinanzierung) · **Mindestreserve** (Pflichtguthaben der Banken; derzeit 1 %) · **Offenmarktgeschäfte** (Wertpapierkauf/-verkauf, QE) · *ständige Fazilitäten*.
**Expansiv** (Konjunktur ankurbeln): Zins ↓ → Kredite billiger → Investition/Konsum ↑ → Inflation ↑. **Restriktiv** (Inflation bremsen): Zins ↑ → Kredite teurer.
**Geldmenge M1** (Bargeld + täglich fällige Einlagen), M2, M3. **Geldschöpfung**: Banken schaffen durch Kredite Giralgeld (Buchgeld). **Quantitätsgleichung**: M · V = P · Y.
**Grenzen**: Zinsfalle, Time-Lag, Euroraum mit 21 Ländern.
`)
  .cards([
    ["Oberstes Ziel der EZB?", "Preisstabilität (mittelfristig 2 % Inflation)."],
    ["Wo sitzt die EZB?", "Frankfurt am Main."],
    ["Nenne Instrumente der EZB.", "Leitzinsen, Mindestreserve, Offenmarktgeschäfte, ständige Fazilitäten."],
    ["Was ist der Hauptrefinanzierungssatz?", "Zinssatz, zu dem sich Banken bei der EZB Geld leihen."],
    ["Was ist die Einlagefazilität?", "Banken können überschüssiges Geld über Nacht bei der EZB anlegen."],
    ["Was ist die Mindestreserve?", "Pflichtguthaben der Banken bei der Zentralbank (1 % der Einlagen)."],
    ["Was sind Offenmarktgeschäfte?", "Kauf/Verkauf von Wertpapieren durch die EZB zur Steuerung der Geldmenge."],
    ["Was bewirkt eine Leitzinssenkung?", "Kredite werden billiger → mehr Investition/Konsum → Konjunktur ↑, Inflation ↑ (expansiv)."],
    ["Was bewirkt eine Leitzinserhöhung?", "Kredite werden teurer → Nachfrage ↓ → Inflation ↓ (restriktiv)."],
    ["Expansive Geldpolitik?", "Geldmenge erhöhen, Zinsen senken – Konjunktur ankurbeln."],
    ["Restriktive Geldpolitik?", "Geldmenge verknappen, Zinsen erhöhen – Inflation bekämpfen."],
    ["Was ist Giralgeld?", "Buchgeld auf Konten; entsteht durch Kreditvergabe der Banken."],
    ["Was umfasst die Geldmenge M1?", "Bargeld und täglich fällige Einlagen."],
    ["Was beschreibt die Quantitätsgleichung?", "M · V = P · Y – Geldmenge mal Umlaufgeschwindigkeit = Preisniveau mal reales BIP."],
    ["Was ist Quantitative Easing?", "Massenhafter Ankauf von Anleihen durch die EZB, um Geld bereitzustellen und Zinsen zu senken."],
    ["Ist die EZB weisungsgebunden?", "Nein – sie ist unabhängig von nationalen Regierungen."],
  ])
  .gls([
    ["Leitzins", "Zinssatz der Zentralbank, zu dem Banken Geld leihen."],
    ["Mindestreserve", "Pflichtguthaben der Banken bei der Zentralbank."],
    ["Offenmarktgeschäft", "Wertpapiergeschäft der Zentralbank zur Steuerung der Liquidität."],
    ["Giralgeld", "Buchgeld auf Konten."],
  ])
  .mc("Die EZB senkt den Leitzins. Welche Wirkung ist zu erwarten?", "Kredite werden billiger, Investitionen und Nachfrage steigen.", ["Kredite werden teurer.", "Sparen wird attraktiver, Konsum sinkt.", "Die Inflation sinkt sofort.", "Der Euro wird immer stärker."])
  .mc("Die Inflation im Euroraum liegt deutlich über 2 %. Welche Maßnahme der EZB ist passend?", "Leitzinsen erhöhen", ["Leitzinsen senken", "Mindestreserve auf null setzen", "Anleihen aufkaufen", "Geldmenge erhöhen"])
  .mc("Was ist das oberste Ziel der EZB?", "Preisstabilität", ["Hohe Beschäftigung", "Wirtschaftswachstum", "Außenhandelsüberschuss", "Umweltschutz"])
  .mc("Welches Instrument gehört nicht zur Geldpolitik?", "Steuersenkung", ["Leitzinsänderung", "Mindestreserve", "Offenmarktgeschäft", "Einlagefazilität"])
  .mc("Wie entsteht Giralgeld?", "Durch Kreditvergabe der Banken", ["Durch Gelddrucken des Staates", "Durch Steuern", "Durch Exporte", "Durch Mindestreserve"])
  .match("Ordnen Sie jede Maßnahme der Geldpolitik zu.", [
    ["Leitzins senken", "expansiv"],
    ["Leitzins erhöhen", "restriktiv"],
    ["Anleihekäufe (QE)", "expansiv"],
    ["Mindestreservesatz erhöhen", "restriktiv"],
  ])
  .tf("Die EZB ist an Weisungen der Bundesregierung gebunden.", false)
  .tf("Eine Zinssenkung soll Kredite verbilligen.", true)
  .cloze("Zur Bekämpfung von Inflation erhöht die EZB den [[Leitzins]]; das ist eine [[restriktive]] Geldpolitik.")
  .done();

export default [
  { file: "wsp/lf12-ordnung.json", bundle: { items: [ordnung] } },
  { file: "wsp/lf12-markt.json", bundle: { items: [markt] } },
  { file: "wsp/lf12-kreislauf.json", bundle: { items: [kreislauf] } },
  { file: "wsp/lf12-ziele.json", bundle: { items: [ziele] } },
  { file: "wsp/lf12-bip.json", bundle: { items: [bip] } },
  { file: "wsp/lf12-preise.json", bundle: { items: [preise] } },
  { file: "wsp/lf12-arbeit.json", bundle: { items: [arbeit] } },
  { file: "wsp/lf12-aussen.json", bundle: { items: [aussen] } },
  { file: "wsp/lf12-fiskal.json", bundle: { items: [fiskal] } },
  { file: "wsp/lf12-geld.json", bundle: { items: [geld] } },
];
