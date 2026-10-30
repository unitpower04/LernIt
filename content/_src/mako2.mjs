import { topic, V } from "./dsl.mjs";

const SRC = "MaKo (Skripte Vaaßen/Kuhn, Unterricht, Prüfungsstil)";
const T = (k, part = 1) => topic(k, { part, src: SRC });

/* ---------- LF6: Strategie ---------- */
const st = T("mako-lf6-strategie")
  .summary("Strategische Marketingplanung: SWOT, Ansoff, Portfolio", `
**Marketingprozess**: Analyse (Markt, Wettbewerb, Unternehmen) → Ziele → Strategie → Marketing-Mix → Umsetzung → Kontrolle.
**SWOT-Analyse**: intern **S**trengths (Stärken) / **W**eaknesses (Schwächen) · extern **O**pportunities (Chancen) / **T**hreats (Risiken). Daraus Strategien: SO (Stärken nutzen für Chancen), WO (Schwächen abbauen), ST (Risiken mit Stärken abwehren), WT (Rückzug/Vermeiden).
**Ansoff-Matrix** (Produkt × Markt): *Marktdurchdringung* (bestehende Produkte/Märkte) · *Marktentwicklung* (bestehendes Produkt, neuer Markt) · *Produktentwicklung* (neues Produkt, bestehender Markt) · *Diversifikation* (neu/neu: horizontal, vertikal, lateral).
**BCG-Portfolio** (Marktwachstum × relativer Marktanteil): **Stars** (hoch/hoch → investieren) · **Cash Cows** (niedrig/hoch → melken) · **Question Marks/Fragezeichen** (hoch/niedrig → selektiv investieren) · **Poor Dogs** (niedrig/niedrig → desinvestieren).
**Produktlebenszyklus**: Einführung → Wachstum → Reife → Sättigung → Rückgang.
**Marktsegmentierung**, **Positionierung**, **Wettbewerbsstrategien** (Kostenführerschaft, Differenzierung, Nische – Porter).
`)
  .cards([
    ["Was ist eine SWOT-Analyse?", "Bewertung von Stärken, Schwächen (intern), Chancen und Risiken (extern)."],
    ["Intern vs. extern in der SWOT?", "Stärken/Schwächen sind intern, Chancen/Risiken extern."],
    ["Was ist eine SO-Strategie?", "Mit Stärken Chancen nutzen (Wachstumsstrategie)."],
    ["Was ist eine WO-Strategie?", "Schwächen abbauen, um Chancen zu nutzen."],
    ["Was ist eine ST-Strategie?", "Mit Stärken Risiken abwehren."],
    ["Was ist eine WT-Strategie?", "Schwächen und Risiken minimieren (Rückzug, Defensive)."],
    ["Was ist die Ansoff-Matrix?", "Wachstumsmatrix aus Produkten und Märkten (neu/bestehend)."],
    ["Marktdurchdringung?", "Bestehende Produkte in bestehenden Märkten stärker verkaufen."],
    ["Marktentwicklung?", "Bestehende Produkte in neuen Märkten anbieten."],
    ["Produktentwicklung?", "Neue Produkte für bestehende Märkte."],
    ["Diversifikation?", "Neue Produkte in neuen Märkten."],
    ["Was ist ein Star im BCG-Portfolio?", "Hohes Marktwachstum, hoher Marktanteil – investieren."],
    ["Was ist eine Cash Cow?", "Niedriges Wachstum, hoher Marktanteil – liefert Gewinne zur Finanzierung."],
    ["Was ist ein Question Mark?", "Hohes Wachstum, niedriger Marktanteil – selektiv investieren oder aufgeben."],
    ["Was ist ein Poor Dog?", "Niedriges Wachstum, niedriger Marktanteil – desinvestieren."],
    ["Phasen des Produktlebenszyklus?", "Einführung, Wachstum, Reife, Sättigung, Rückgang."],
    ["Was ist Positionierung?", "Platzierung einer Marke im Bewusstsein der Zielgruppe gegenüber Wettbewerbern."],
    ["Was ist Marktsegmentierung?", "Aufteilung des Marktes in homogene Käufergruppen."],
    ["Porters Wettbewerbsstrategien?", "Kostenführerschaft, Differenzierung, Konzentration auf Nischen."],
  ])
  .gls([
    ["SWOT", "Strengths, Weaknesses, Opportunities, Threats."],
    ["Ansoff-Matrix", "Matrix der Wachstumsstrategien nach Produkt und Markt."],
    ["Portfolio", "Zusammenstellung der Produkte nach Marktwachstum und Marktanteil."],
    ["Diversifikation", "Eintritt mit neuen Produkten in neue Märkte."],
    ["Positionierung", "Platzierung im Kopf der Zielgruppe."],
  ])
  .mc("Eine Agentur hat ein hervorragendes Kreativteam (intern) und beobachtet einen wachsenden Markt für Podcasts (extern). Welche SWOT-Kategorien?", "Stärke und Chance", ["Schwäche und Risiko", "Stärke und Risiko", "Schwäche und Chance", "Chance und Risiko"])
  .mc("Ein Bio-Eisanbieter verkauft sein bestehendes Eis nun auch in Österreich. Welche Ansoff-Strategie?", "Marktentwicklung", ["Marktdurchdringung", "Produktentwicklung", "Diversifikation", "Rückzug"])
  .mc("Ein Getränkehersteller bringt eine neue Sorte im bestehenden Markt heraus. Welche Ansoff-Strategie?", "Produktentwicklung", ["Marktdurchdringung", "Marktentwicklung", "Diversifikation", "Kooperation"])
  .mc("Ein Produkt mit hohem Marktanteil in einem stagnierenden Markt ist im BCG-Portfolio eine…", "Cash Cow", ["Star", "Question Mark", "Poor Dog", "Newcomer"])
  .mc("Welche Phase des Produktlebenszyklus ist typischerweise mit hohen Werbeausgaben für Bekanntheit verbunden?", "Einführungsphase", ["Rückgangsphase", "Sättigungsphase", "Reifephase", "Niemals"])
  .mc("Welche Aussage zur SWOT-Analyse ist richtig?", "Chancen und Risiken stammen aus dem Umfeld.", ["Chancen sind interne Faktoren.", "Stärken sind externe Faktoren.", "Schwächen sind Marktchancen.", "Die SWOT betrachtet nur die Konkurrenz."])
  .match("Ordnen Sie jede Ansoff-Strategie der Beschreibung zu.", [
    ["Marktdurchdringung", "bestehende Produkte, bestehende Märkte"],
    ["Marktentwicklung", "bestehende Produkte, neue Märkte"],
    ["Produktentwicklung", "neue Produkte, bestehende Märkte"],
    ["Diversifikation", "neue Produkte, neue Märkte"],
  ])
  .match("Ordnen Sie jede BCG-Kategorie der Normstrategie zu.", [
    ["Star", "Investieren"],
    ["Cash Cow", "Gewinne abschöpfen"],
    ["Question Mark", "selektiv investieren"],
    ["Poor Dog", "Desinvestieren"],
  ])
  .match("Ordnen Sie jeden Faktor der SWOT-Kategorie zu.", [
    ["Starke Marke", "Stärke"],
    ["Veraltete IT", "Schwäche"],
    ["Neuer Trend in der Zielgruppe", "Chance"],
    ["Neuer Wettbewerber mit Preisdumping", "Risiko"],
  ])
  .tf("Chancen und Risiken sind interne Faktoren der SWOT-Analyse.", false)
  .tf("Diversifikation bedeutet neue Produkte in neuen Märkten.", true)
  .cloze("Die SWOT-Analyse unterscheidet interne [[Stärken]] und [[Schwächen]] von externen [[Chancen]] und [[Risiken]].")
  .done();

/* ---------- LF6: Produkt ---------- */
const pr = T("mako-lf6-produkt")
  .summary("Produkt- und Markenpolitik", `
**Produktpolitik**: Produktinnovation, -variation, -differenzierung, -elimination · Sortiment (Breite = Zahl der Produktlinien, Tiefe = Varianten je Linie) · Qualität, Design, Verpackung (Schutz-, Verkaufs-, Informations-, Transportfunktion), Service/Garantie.
**Marke**: Name, Logo, Zeichen, die Produkte kennzeichnen; Funktionen: Orientierung, Vertrauen, Differenzierung, Wertsteigerung.
**Markenstrategien**: **Einzelmarke** (jedes Produkt eigene Marke) · **Familienmarke** (mehrere Produkte, eine Marke) · **Dachmarke** (Unternehmen als Marke über allem) · **Mehrmarkenstrategie** (mehrere Marken für gleiche Produktgruppe) · **Markentransfer/Line Extension/Brand Extension** · **Handelsmarke (Eigenmarke)** · Gattungsmarke/No-Name.
**Markenwert**: Bekanntheit, Image, Loyalität. **Markenpersönlichkeit**, **Markenkern**.
**Produktlebenszyklus** (Einführung, Wachstum, Reife, Sättigung, Rückgang) – Maßnahmen je Phase.
**Zusatznutzen**: Grundnutzen (Funktion) vs. Zusatznutzen (Prestige, Design, Service).
`)
  .cards([
    ["Was ist Produktinnovation?", "Einführung eines völlig neuen Produkts."],
    ["Was ist Produktvariation?", "Veränderung eines bestehenden Produkts (Design, Qualität, Verpackung)."],
    ["Was ist Produktdifferenzierung?", "Ergänzung des Produkts um Varianten (Größen, Sorten)."],
    ["Was ist Produktelimination?", "Herausnahme erfolgloser Produkte aus dem Sortiment."],
    ["Was beschreibt die Sortimentsbreite?", "Anzahl der verschiedenen Produktlinien."],
    ["Was beschreibt die Sortimentstiefe?", "Anzahl der Varianten innerhalb einer Produktlinie."],
    ["Funktionen der Verpackung?", "Schutz-, Lager-/Transport-, Verkaufs-, Informations- und Werbefunktion."],
    ["Was ist eine Marke?", "Kennzeichen, das Produkte unterscheidbar macht (Name, Logo, Klang, Farbe)."],
    ["Was ist eine Einzelmarkenstrategie?", "Jedes Produkt hat eine eigene Marke."],
    ["Was ist eine Familienmarkenstrategie?", "Mehrere Produkte tragen dieselbe Marke."],
    ["Was ist eine Dachmarkenstrategie?", "Alle Produkte werden unter dem Unternehmensnamen vermarktet."],
    ["Was ist eine Mehrmarkenstrategie?", "Ein Unternehmen führt mehrere Marken im selben Produktsegment."],
    ["Was ist eine Handelsmarke?", "Marke des Händlers (Eigenmarke) statt des Herstellers."],
    ["Was ist Markentransfer?", "Übertragung einer erfolgreichen Marke auf neue Produkte."],
    ["Grundnutzen vs. Zusatznutzen?", "Grundnutzen: Funktion. Zusatznutzen: Prestige, Design, Service, Emotion."],
    ["Was ist der Markenkern?", "Zentrale Werte und Versprechen der Marke."],
    ["Nenne Maßnahmen in der Einführungsphase.", "Hohe Werbung, Bekanntheit aufbauen, Distribution aufbauen."],
    ["Nenne Maßnahmen in der Rückgangsphase.", "Produktelimination oder Relaunch prüfen, Kosten senken."],
  ])
  .gls([
    ["Produktinnovation", "Entwicklung eines neuen Produkts."],
    ["Dachmarke", "Eine Marke für das gesamte Sortiment."],
    ["Mehrmarkenstrategie", "Mehrere Marken für ähnliche Produkte eines Anbieters."],
    ["Handelsmarke", "Marke eines Handelsunternehmens."],
    ["Relaunch", "Überarbeitung eines bestehenden Produkts bzw. einer Marke."],
  ])
  .mc("Die Schüller GmbH führt neben der Marke „Super Crema“ im Süßwarensegment einen Joghurt der Marke „Fruitimio“ ein. Welche Markenstrategie?", "Mehrmarkenstrategie", ["Dachmarkenstrategie", "Familienmarkenstrategie", "Handelsmarkenstrategie", "Einzelmarkenstrategie ohne weitere Marke"], { e: "Mehrere eigenständige Marken desselben Unternehmens." })
  .mc("Ein Unternehmen vermarktet alle Produkte unter dem Firmennamen. Welche Strategie?", "Dachmarkenstrategie", ["Einzelmarkenstrategie", "Mehrmarkenstrategie", "Handelsmarkenstrategie", "Nischenstrategie"])
  .mc("Ein Supermarkt verkauft Nudeln unter seinem eigenen Namen. Wie heißt das?", "Handelsmarke", ["Herstellermarke", "Dachmarke", "Familienmarke", "Premiummarke"])
  .mc("Ein bestehendes Produkt erhält eine neue Verpackung und ein neues Design. Welche Maßnahme?", "Produktvariation", ["Produktinnovation", "Produktelimination", "Diversifikation", "Markentransfer"])
  .mc("Welche Aussage zur Marke ist richtig?", "Eine Marke schafft Vertrauen und Orientierung.", ["Marken sind nur für Luxusprodukte relevant.", "Eine Marke ist ein Gesetz.", "Marken dürfen nie erweitert werden.", "Marken ersetzen die Qualität."])
  .match("Ordnen Sie jede Verpackungsfunktion dem Beispiel zu.", [
    ["Schutzfunktion", "Karton verhindert Bruch"],
    ["Informationsfunktion", "Inhaltsstoffe und Haltbarkeitsdatum"],
    ["Verkaufsfunktion", "Auffälliges Design im Regal"],
    ["Transportfunktion", "Stapelbare Kisten"],
  ])
  .match("Ordnen Sie jede Produktpolitik-Maßnahme zu.", [
    ["Neues Produkt auf den Markt bringen", "Produktinnovation"],
    ["Weitere Geschmacksrichtungen", "Produktdifferenzierung"],
    ["Alte Linie auslaufen lassen", "Produktelimination"],
    ["Relaunch mit neuem Design", "Produktvariation"],
  ])
  .tf("Die Sortimentstiefe beschreibt die Zahl der Produktlinien.", false, { e: "Das ist die Sortimentsbreite." })
  .cloze("Bei der [[Dachmarkenstrategie]] werden alle Produkte unter dem Unternehmensnamen vermarktet.")
  .done();

/* ---------- LF6: Preis ---------- */
const pp = topic("mako-lf6-preis", { part: 1, src: SRC })
  .summary("Preis- und Konditionenpolitik", `
**Preisstrategien**: **Skimming** (Abschöpfung: hoher Einführungspreis, später senken – Innovationen) · **Penetration** (niedriger Einstiegspreis zur schnellen Marktdurchdringung) · Premium · Niedrigpreis · **Preisdifferenzierung** (zeitlich, räumlich, personell, mengenmäßig) · Preisbündelung · Psychologische Preise (9,99 €).
**Preisermittlung**: kostenorientiert (Selbstkosten + Gewinn), nachfrageorientiert (Zahlungsbereitschaft), konkurrenzorientiert (Marktpreis).
**Konditionenpolitik**: **Rabatte** (Mengen-, Treue-, Wiederverkäufer-, Sonder-, Frühbucherrabatt), **Bonus** (nachträglich), **Skonto** (Zahlung innerhalb Frist), Lieferungs- und Zahlungsbedingungen, Kredite.
**Preiselastizität**: Reaktion der Nachfrage auf Preisänderungen (elastisch/unelastisch).
**Rechnen**: Rabatt vom Listenpreis; Skonto vom Zielpreis; Brutto = Netto · 1,19.
`)
  .cards([
    ["Was ist Skimming?", "Hoher Einführungspreis, der später gesenkt wird (Abschöpfung)."],
    ["Was ist Penetrationspreisstrategie?", "Niedriger Einstiegspreis, um schnell Marktanteile zu gewinnen."],
    ["Was ist Preisdifferenzierung?", "Gleiches Produkt zu unterschiedlichen Preisen (zeitlich, räumlich, personell, mengenmäßig)."],
    ["Beispiel zeitliche Preisdifferenzierung?", "Happy Hour, Frühbucherpreise, Saisonpreise."],
    ["Beispiel personelle Preisdifferenzierung?", "Studentenrabatt, Seniorenrabatt."],
    ["Was ist ein Mengenrabatt?", "Nachlass bei Abnahme größerer Mengen."],
    ["Was ist ein Bonus?", "Nachträglicher Preisnachlass (z. B. am Jahresende bei Erreichen eines Umsatzes)."],
    ["Was ist Skonto?", "Preisnachlass bei Zahlung innerhalb einer kurzen Frist."],
    ["Was ist ein psychologischer Preis?", "Preis wie 9,99 €, der günstiger wirkt."],
    ["Was ist Preiselastizität?", "Maß für die Reaktion der Nachfrage auf Preisänderungen."],
    ["Was ist Preisbündelung?", "Mehrere Leistungen werden zu einem Gesamtpreis angeboten."],
    ["Konkurrenzorientierte Preisbildung?", "Der Preis orientiert sich am Marktpreis der Wettbewerber."],
  ])
  .gls([
    ["Skimming", "Abschöpfungsstrategie mit hohem Einführungspreis."],
    ["Penetration", "Niedrigpreisstrategie zur Marktdurchdringung."],
    ["Bonus", "Nachträglicher Preisnachlass."],
    ["Skonto", "Preisnachlass für schnelle Zahlung."],
  ])
  .mc("Ein neues Smartphone wird zu einem sehr hohen Preis eingeführt, der später sinkt. Welche Strategie?", "Skimming", ["Penetration", "Preisbündelung", "Konkurrenzpreis", "Preisbindung"])
  .mc("Eine Streamingplattform startet mit extrem günstigem Einstiegspreis, um schnell viele Nutzer zu gewinnen. Welche Strategie?", "Penetrationsstrategie", ["Skimming", "Premiumstrategie", "Preisdifferenzierung", "Preisbindung"])
  .mc("Studierende zahlen im Museum weniger. Welche Form der Preisdifferenzierung?", "Personelle Preisdifferenzierung", ["Zeitliche", "Räumliche", "Mengenmäßige", "Keine"])
  .mc("Ein Kunde erhält am Jahresende einen Preisnachlass, weil er seinen Jahresumsatz erreicht hat. Wie nennt man das?", "Bonus", ["Skonto", "Sofortrabatt", "Mengenrabatt", "Aufpreis"])
  .match("Ordnen Sie jedem Nachlass die Bedingung zu.", [
    ["Skonto", "Zahlung innerhalb kurzer Frist"],
    ["Mengenrabatt", "Abnahme großer Mengen"],
    ["Bonus", "Nachträgliche Vergütung bei Umsatzziel"],
    ["Frühbucherrabatt", "Buchung lange vor dem Termin"],
  ])
  .tcalc(
    "Ein Werbemittel kostet {p|eur} netto je Stück. Der Händler erhält {r} % Wiederverkäuferrabatt und zahlt innerhalb der Frist mit {s} % Skonto (auf den Zielpreis). Wie viel zahlt er je Stück?",
    "p*(1-r/100)*(1-s/100)",
    { p: V.int(10, 80, 2), r: V.pick([10, 15, 20, 25]), s: V.pick([2, 3]) },
    { unit: "€", steps: ["Zielpreis = {p|eur} · (1 − {r} %)", "Barpreis = Zielpreis · (1 − {s} %) = {result|eur}"] },
  )
  .tf("Skimming bedeutet niedrige Einstiegspreise.", false)
  .cloze("Beim [[Skimming]] wird ein hoher Einführungspreis gewählt, bei der [[Penetration]] ein niedriger.")
  .done();

/* ---------- LF6: Distribution ---------- */
const di = T("mako-lf6-distribution")
  .summary("Distributionspolitik", `
**Distribution** = Wege und Logistik, die das Produkt zum Kunden bringen.
**Absatzwege**: **direkt** (Hersteller → Endkunde: Onlineshop, eigener Laden, Außendienst, Direktvertrieb) · **indirekt** (über Handel: Großhandel/Einzelhandel, Handelsvertreter, Kommissionär, Makler) · **Multi-Channel/Omni-Channel**.
**Absatzmittler**: **Handelsvertreter** (selbstständig, vermittelt im fremden Namen auf fremde Rechnung, Provision) · **Kommissionär** (eigener Name, fremde Rechnung) · **Makler** (nur Vermittlung) · **Reisender/Handlungsreisender** (angestellt, Gehalt) · **Franchising** (Franchisegeber stellt Konzept, Franchisenehmer selbstständig, Gebühr) · Eigenhändler.
**Logistik**: Lagerhaltung, Transport, Verpackung, Lieferservice, Just-in-Time.
**Intensität**: intensive (überall), selektive (ausgewählte Händler), exklusive (nur ein Händler pro Gebiet) Distribution.
**Marketing 7P-Dienstleistung**: People, Process, Physical Evidence.
`)
  .cards([
    ["Direkter vs. indirekter Absatz?", "Direkt: Hersteller verkauft selbst an Endkunden. Indirekt: über Handelsstufen."],
    ["Beispiele direkter Absatzwege?", "Eigener Onlineshop, Fabrikverkauf, Außendienst, Direktvertrieb."],
    ["Beispiele indirekter Absatzwege?", "Großhandel, Einzelhandel, Handelsvertreter, Kommissionär."],
    ["Was ist ein Handelsvertreter?", "Selbstständiger Vermittler im fremden Namen und auf fremde Rechnung; erhält Provision."],
    ["Was ist ein Kommissionär?", "Verkauft im eigenen Namen für fremde Rechnung."],
    ["Was ist ein Makler?", "Vermittelt Geschäftsabschlüsse, ohne ständig beauftragt zu sein."],
    ["Was ist ein Reisender (Handlungsreisender)?", "Angestellter Außendienstmitarbeiter mit Gehalt (ggf. plus Provision)."],
    ["Was ist Franchising?", "Franchisegeber überlässt gegen Gebühr Konzept, Marke und Know-how an selbstständige Franchisenehmer."],
    ["Was ist intensive Distribution?", "Das Produkt ist an möglichst vielen Verkaufsstellen erhältlich."],
    ["Was ist selektive Distribution?", "Nur ausgewählte Händler führen das Produkt."],
    ["Was ist exklusive Distribution?", "Nur ein Händler pro Gebiet führt das Produkt (Luxusgüter)."],
    ["Was bedeutet Multi-Channel?", "Verkauf über mehrere Kanäle (stationär, online, App)."],
    ["Was ist Omni-Channel?", "Nahtlose Verknüpfung aller Kanäle für ein einheitliches Kundenerlebnis."],
    ["Was ist Just-in-Time?", "Lieferung genau zum Bedarfszeitpunkt – geringe Lagerhaltung."],
  ])
  .gls([
    ["Distribution", "Alle Maßnahmen, die das Produkt zum Kunden bringen."],
    ["Handelsvertreter", "Selbstständiger Absatzmittler auf Provisionsbasis."],
    ["Franchising", "Vertriebssystem mit Konzept- und Markennutzung gegen Gebühr."],
    ["Omni-Channel", "Verknüpfung aller Vertriebskanäle."],
  ])
  .mc("Wer vermittelt im fremden Namen und auf fremde Rechnung und erhält Provision?", "Handelsvertreter", ["Kommissionär", "Reisender", "Eigenhändler", "Großhändler"])
  .mc("Ein Unternehmen verkauft ausschließlich über seinen Onlineshop. Welcher Absatzweg?", "Direkter Absatzweg", ["Indirekter Absatzweg", "Franchising", "Kommissionsgeschäft", "Großhandel"])
  .mc("Eine Luxusuhr ist nur bei einem Konzessionär pro Stadt erhältlich. Welche Distributionsintensität?", "Exklusive Distribution", ["Intensive Distribution", "Selektive Distribution", "Kein System", "Multi-Channel"])
  .mc("Ein Systemgastronom überlässt selbstständigen Partnern gegen Gebühr Marke und Konzept. Welche Form?", "Franchising", ["Kommissionsgeschäft", "Handelsvertretung", "Maklergeschäft", "Eigenhandel"])
  .match("Ordnen Sie jeden Absatzmittler der Beschreibung zu.", [
    ["Handelsvertreter", "fremder Name, fremde Rechnung, Provision"],
    ["Kommissionär", "eigener Name, fremde Rechnung"],
    ["Reisender", "angestellter Außendienst"],
    ["Franchisenehmer", "selbstständig mit Marken- und Konzeptnutzung"],
  ])
  .tf("Ein Kommissionär handelt im fremden Namen.", false, { e: "Im eigenen Namen, aber auf fremde Rechnung." })
  .cloze("Beim [[Franchising]] zahlt der Franchisenehmer eine Gebühr an den [[Franchisegeber]].")
  .done();

/* ---------- LF7/8: Instrumente ---------- */
const ki = T("mako-lf7-instrumente")
  .summary("Kommunikationsinstrumente", `
**Kommunikationsmix**
- **Klassische Werbung** (ATL): Anzeigen, TV/Radio-Spots, Plakat, Kino, Online-Display – Reichweite, Imageaufbau
- **Verkaufsförderung (Sales Promotion)** (kurzfristig Umsatz): **Consumer Promotion** (Gewinnspiel, Gutschein, Probierpackung, Coupon, Rabattaktion) · **Trade Promotion** (Händlerschulung, Displays, Naturalrabatte) · **Staff Promotion**
- **Public Relations (PR)**: Pressearbeit, Pressemitteilung, Pressekonferenz, Krisenkommunikation, Corporate PR – Vertrauen, Image; Zielgruppe Öffentlichkeit
- **Sponsoring**: Geld/Sachleistungen gegen Kommunikationsrechte (Sport, Kultur, Soziales, Umwelt, Medien) – Image-Transfer
- **Eventmarketing**: inszenierte Erlebnisse (Messen, Roadshows, Produktpräsentation)
- **Messen/Ausstellungen** (B2B-Kontakte)
- **Direktmarketing/Dialogmarketing**: Mailing, E-Mail, Telefonmarketing
- **Online-Marketing**: SEO, SEA, Social Media, Influencer, Newsletter, Affiliate, Content
- **Product Placement**, **Guerilla**, **Ambient**, **Mobile**, **Ambush-Marketing**.
**Above-the-line (ATL)** = klassische Mediawerbung; **Below-the-line (BTL)** = VKF, Direkt, Event; **Through-the-line (TTL)** = integriert.
`)
  .cards([
    ["Was ist ATL, BTL, TTL?", "ATL: klassische Mediawerbung. BTL: Verkaufsförderung, Direktmarketing, Events. TTL: integrierte Kombination."],
    ["Ziel der Verkaufsförderung?", "Kurzfristige Umsatzsteigerung durch Kaufanreize."],
    ["Was ist Consumer Promotion?", "VKF-Maßnahme für Endverbraucher (Gutschein, Gewinnspiel, Probierpackung)."],
    ["Was ist Trade Promotion?", "VKF-Maßnahme für Handelspartner (Schulung, Displays, Naturalrabatt)."],
    ["Was ist Staff Promotion?", "VKF-Maßnahme für eigene Mitarbeiter/Außendienst (Prämien, Wettbewerbe)."],
    ["Ziel der Public Relations?", "Vertrauen und positives Image in der Öffentlichkeit aufbauen."],
    ["Nenne PR-Maßnahmen.", "Pressemitteilung, Pressekonferenz, Tag der offenen Tür, Geschäftsbericht, Krisenkommunikation."],
    ["Was ist Sponsoring?", "Förderung von Personen/Organisationen mit Geld oder Sachleistungen gegen Kommunikationsleistungen."],
    ["Sponsoringarten?", "Sport-, Kultur-, Sozio-, Umwelt-, Mediensponsoring."],
    ["Was ist Eventmarketing?", "Inszenierung von Erlebnissen, um Zielgruppen emotional zu binden."],
    ["Was sind Messen?", "Branchenveranstaltungen zur Präsentation und Kontaktanbahnung (v. a. B2B)."],
    ["Was ist Direktmarketing?", "Direkte, individuelle Ansprache einzelner Zielpersonen mit Reaktionsmöglichkeit."],
    ["Was ist SEO?", "Suchmaschinenoptimierung – bessere organische Platzierung."],
    ["Was ist SEA?", "Suchmaschinenwerbung – bezahlte Anzeigen in Suchergebnissen."],
    ["Was ist Product Placement?", "Gezielte Platzierung von Marken/Produkten in Film, Serie, Video."],
    ["Was ist Ambush-Marketing?", "Trittbrettfahren: Nutzung eines Events ohne offizielle Sponsorenrechte."],
    ["Welche Maßnahme empfiehlt sich bei Ziel kurzfristiger Umsatzsteigerung?", "Consumer Promotion (Verkaufsförderung)."],
    ["Was ist Influencer-Marketing?", "Werbung durch reichweitenstarke Social-Media-Persönlichkeiten."],
    ["Was ist Affiliate-Marketing?", "Provisionsbasierte Partnerwerbung (Pay per Sale/Click)."],
    ["Was ist Content Marketing?", "Nützliche Inhalte statt direkter Werbung, um Zielgruppen zu binden."],
  ])
  .gls([
    ["Consumer Promotion", "Verkaufsförderung für Endverbraucher."],
    ["Trade Promotion", "Verkaufsförderung für den Handel."],
    ["Sponsoring", "Förderung gegen Kommunikationsrechte."],
    ["PR", "Public Relations – Öffentlichkeitsarbeit."],
    ["SEO", "Suchmaschinenoptimierung."],
    ["SEA", "Suchmaschinenwerbung."],
  ])
  .mc("Ein Unternehmen möchte kurzfristig den Umsatz steigern. Welche Maßnahme ist am besten geeignet?", "Consumer Promotion", ["Public Relations", "Sponsoring", "Eventmarketing", "Corporate Design"])
  .mc("Ein Getränkehersteller verteilt Probierpackungen und Coupons an Passanten. Welches Instrument?", "Verkaufsförderung (Consumer Promotion)", ["Public Relations", "Sponsoring", "Klassische Werbung", "Direktmarketing"])
  .mc("Ein Sportartikelhersteller stattet einen Bundesligaverein aus und erhält Trikotwerbung. Welches Instrument?", "Sponsoring", ["Verkaufsförderung", "Public Relations", "Direktmarketing", "Product Placement"])
  .mc("Eine Agentur versendet eine Pressemitteilung zur Neueröffnung. Welches Instrument?", "Public Relations", ["Sponsoring", "Verkaufsförderung", "Direktmarketing", "Eventmarketing"])
  .mc("Welche Maßnahme zählt zu Trade Promotion?", "Display und Händlerschulung", ["Gewinnspiel für Endkunden", "Gutschein für Konsumenten", "Pressekonferenz", "Plakatwerbung"])
  .mc("Was beschreibt SEA?", "Bezahlte Anzeigen in Suchmaschinen", ["Optimierung der organischen Platzierung", "Newsletter-Versand", "Social-Media-Beiträge", "Pressearbeit"])
  .match("Ordnen Sie jedes Beispiel dem Kommunikationsinstrument zu.", [
    ["Pressekonferenz", "Public Relations"],
    ["Gewinnspiel für Konsumenten", "Verkaufsförderung"],
    ["Namensrecht an einem Stadion", "Sponsoring"],
    ["Roadshow mit Produktpräsentation", "Eventmarketing"],
    ["Personalisiertes Mailing", "Direktmarketing"],
  ])
  .match("Ordnen Sie ATL, BTL und TTL zu.", [
    ["TV-Spot", "ATL"],
    ["Sampling am POS", "BTL"],
    ["Kampagne aus Spot, Event und Online", "TTL"],
  ])
  .tf("Public Relations dient vor allem der kurzfristigen Umsatzsteigerung.", false)
  .tf("Ambush-Marketing nutzt ein Event ohne offizielle Sponsorenrechte.", true)
  .cloze("[[Sponsoring]] bedeutet Förderung gegen [[Kommunikationsrechte]].")
  .done();

/* ---------- LF7/8: Konzept ---------- */
const kz = T("mako-lf7-konzept")
  .summary("Kommunikationskonzept, Werbeziele & AIDA", `
**Konzeptaufbau (Kommunikationskonzept)**: 1 Ausgangslage/Situationsanalyse (SWOT, Markt, Zielgruppe) → 2 Kommunikationsziele → 3 Zielgruppe → 4 Kommunikationsstrategie (Positionierung, Botschaft/Kernbotschaft, Tonalität, Leitidee/Claim) → 5 Instrumente und Maßnahmen (Kommunikationsmix, Medien) → 6 Budget/Zeitplan → 7 Erfolgskontrolle (KPIs).
**Ziele**: *ökonomische* (Umsatz, Marktanteil, Gewinn) vs. *psychologische/außerökonomische* (Bekanntheit, Image, Einstellung, Kaufabsicht). **SMART**.
**AIDA-Modell**: **A**ttention (Aufmerksamkeit) → **I**nterest (Interesse) → **D**esire (Verlangen) → **A**ction (Kauf/Handlung). Weitere: AIDCA, DAGMAR.
**Werbewirkung**: Bekanntheit, Erinnerung (Recall/Recognition), Image, Einstellung, Kaufabsicht, Kaufhandlung.
**Gestaltung**: **Claim/Slogan** (Markenversprechen) · **Key Visual** · **Tonalität** · **Copy Strategy** (Consumer Benefit, Reason Why, Tonality) · **Storytelling** · **Emotionale vs. rationale Ansprache** · **Reiz-Reaktions**: Schlüsselreize (Kindchenschema, Erotik, Humor).
**Erfolgskontrolle**: vorher (Pre-Test), laufend, nachher (Post-Test): Recall, Image, Umsatz, Klickrate.
**Integrierte Kommunikation**: Abstimmung aller Instrumente (formal, inhaltlich, zeitlich).
`)
  .cards([
    ["Aufbau eines Kommunikationskonzepts?", "Ausgangslage, Ziele, Zielgruppe, Strategie/Botschaft, Instrumente/Maßnahmen, Budget/Zeitplan, Erfolgskontrolle."],
    ["Ökonomische vs. außerökonomische Ziele?", "Ökonomisch: Umsatz, Marktanteil, Gewinn. Außerökonomisch: Bekanntheit, Image, Einstellung."],
    ["Was ist ein psychologisches Kommunikationsziel?", "Z. B. Bekanntheit steigern, Image verbessern, Kaufabsicht fördern."],
    ["Was bedeutet AIDA?", "Attention, Interest, Desire, Action."],
    ["Was ist die Kernbotschaft?", "Die zentrale Aussage, die die Zielgruppe verstehen und behalten soll."],
    ["Was ist ein Claim?", "Kurzer Markenspruch, der das Versprechen der Marke zusammenfasst."],
    ["Was ist ein Key Visual?", "Zentrales Leitbild einer Kampagne mit hohem Wiedererkennungswert."],
    ["Was beinhaltet die Copy Strategy?", "Consumer Benefit, Reason Why, Tonality."],
    ["Was ist der Consumer Benefit?", "Der Nutzen, den die Zielgruppe vom Produkt hat."],
    ["Was ist Reason Why?", "Die Begründung/Beweis für das Nutzenversprechen."],
    ["Was ist Tonalität?", "Der Ton der Kommunikation (humorvoll, seriös, jugendlich)."],
    ["Was ist Storytelling?", "Vermittlung der Botschaft in einer erzählenden Geschichte."],
    ["Nenne Schlüsselreize.", "Kindchenschema, Erotik, Humor, Überraschung."],
    ["Was ist integrierte Kommunikation?", "Alle Instrumente werden formal, inhaltlich und zeitlich aufeinander abgestimmt."],
    ["Wie misst man Werbewirkung?", "Recall/Recognition, Image-Tests, Klickraten, Umsatz."],
    ["Was ist Recall?", "Ungestützte Erinnerung an Werbung/Marke."],
    ["Was ist Recognition?", "Gestützte Wiedererkennung."],
    ["Was ist ein Pre-Test?", "Test von Werbemitteln vor dem Einsatz."],
    ["Was ist ein KPI?", "Key Performance Indicator – Kennzahl zur Erfolgsmessung."],
  ])
  .gls([
    ["AIDA", "Aufmerksamkeit, Interesse, Verlangen, Aktion."],
    ["Claim", "Markenversprechen in einem Satz."],
    ["Key Visual", "Zentrales Bild einer Kampagne."],
    ["KPI", "Leistungskennzahl."],
    ["Copy Strategy", "Strategie aus Benefit, Reason Why und Tonalität."],
  ])
  .mc("Welches Ziel ist ein außerökonomisches (psychologisches) Kommunikationsziel?", "Steigerung der Markenbekanntheit von 20 auf 30 %", ["Umsatzsteigerung um 10 %", "Steigerung des Marktanteils", "Gewinnerhöhung", "Senkung der Kosten"])
  .mc("Was bedeutet das „D“ in AIDA?", "Desire (Verlangen)", ["Decision", "Design", "Distribution", "Dialog"])
  .mc("Welche Reihenfolge entspricht AIDA?", "Aufmerksamkeit – Interesse – Verlangen – Handlung", ["Interesse – Aufmerksamkeit – Handlung – Verlangen", "Verlangen – Aufmerksamkeit – Interesse – Handlung", "Handlung – Interesse – Aufmerksamkeit – Verlangen", "Aufmerksamkeit – Handlung – Interesse – Verlangen"])
  .mc("Ein Claim soll…", "das Markenversprechen auf den Punkt bringen", ["das Budget festlegen", "die Mediaplanung ersetzen", "die Zielgruppe definieren", "den Druck bestimmen"])
  .mc("Wie nennt man die ungestützte Erinnerung an eine Marke?", "Recall", ["Recognition", "Reichweite", "Affinität", "Insight"])
  .order("Bringen Sie die Bestandteile eines Kommunikationskonzepts in sinnvolle Reihenfolge.", ["Situationsanalyse", "Kommunikationsziele", "Zielgruppe und Strategie", "Maßnahmen und Medien", "Erfolgskontrolle"], { d: 2 })
  .order("Bringen Sie die AIDA-Stufen in die richtige Reihenfolge.", ["Attention", "Interest", "Desire", "Action"], { d: 1 })
  .match("Ordnen Sie jede Zielart zu.", [
    ["Marktanteil erhöhen", "ökonomisch"],
    ["Bekanntheit steigern", "psychologisch"],
    ["Image verbessern", "psychologisch"],
    ["Umsatz steigern", "ökonomisch"],
  ])
  .tf("Ein Pre-Test prüft Werbemittel nach der Kampagne.", false, { e: "Ein Pre-Test erfolgt vor dem Einsatz." })
  .cloze("Das AIDA-Modell beschreibt die Stufen der [[Werbewirkung]]: Attention, Interest, [[Desire]], Action.")
  .done();

/* ---------- LF9: Kennziffern ---------- */
const mkz = T("mako-lf9-kennziffern", 3)
  .summary("Mediakennziffern & Mediaplanbewertung", `
**Auflagen**: *Druckauflage* → *tatsächlich verbreitete Auflage* (ohne Restexemplare/Archiv/Beleg/Remittenden, mit Freiexemplaren) → *verkaufte Auflage* (nur gegen Entgelt: Abo + Einzelverkauf).
**Leser**: **LpN** (Leser pro Nummer), **LpA** (Leser pro Ausgabe, statistisch), **LpE** (Leser pro Exemplar).
**Reichweiten**: *Reichweite* (Zielpersonen mit ≥ 1 Kontakt, in % der Zielgruppe) · **Bruttoreichweite (BRW)** (alle Kontakte inkl. Mehrfachkontakte) · **Nettoreichweite (NRW)** (Personen ohne Mehrfachkontakte; NRW = BRW − Mehrfachkontakte) · **kumulierte** Reichweite · **wirksame** Reichweite.
**Kontakte pro Nutzer** = BRW : NRW. **GRP** (Gross Rating Points) = Summe der Bruttoreichweiten in % der Zielgruppe = Reichweite % × Kontakte pro Nutzer (Werbedruck).
**Affinität** = Anteil der Zielgruppe an der Mediennutzerschaft. **Affinitätsindex** = (Anteil ZG in Medium : Anteil ZG in Grundgesamtheit) × 100 (> 100 überproportional).
**Überschneidung**: *interne* (verschiedene Ausgaben desselben Mediums), *externe* (verschiedene Medien).
**Preise**: **1000er-Seitenpreis** = Seitenpreis × 1.000 : verbreitete Auflage · **1000er-Kontaktpreis (TKP)** = Preis × 1.000 : BRW · **1000er-Nutzerpreis (TNP)** = Preis × 1.000 : NRW · 1000er-mm-Preis = mm-Preis × 1.000 : Auflage.
**Intermedialer Vergleich** = verschiedene Mediengattungen; **intramedialer Vergleich** = Werbeträger innerhalb einer Gattung.
**Online**: **Visits/Unique Visitors** (Brutto-/Nettokontakte), **Page Impression**, **Ad Impression**, **Ad Click**, **CTR** = Clicks : Impressions × 100 (Display typ. unter 1 %, Suchanzeigen höher), Geo-/Behavioural-/Predictive-Behavioural-Targeting, Retargeting; **TKP** online = Kosten × 1.000 : Ad Impressions.
**Paid / Owned / Earned Media**.
`)
  .cards([
    ["Druckauflage?", "Gesamtzahl der gedruckten Exemplare ohne Fehldrucke."],
    ["Tatsächlich verbreitete Auflage?", "Druckauflage abzüglich Restexemplare, Archiv- und Belegexemplare, Remittenden – inkl. Freiexemplare."],
    ["Verkaufte Auflage?", "Nur gegen Entgelt verbreitete Exemplare (Abo und Einzelverkauf)."],
    ["Leser pro Nummer (LpN)?", "Personen, die eine durchschnittliche Ausgabe gelesen oder durchgeblättert haben."],
    ["Leser pro Exemplar (LpE)?", "Wie viele Personen durchschnittlich dasselbe Exemplar lesen."],
    ["Reichweite?", "Anteil/Zahl der Zielpersonen mit mindestens einem Kontakt."],
    ["Bruttoreichweite?", "Summe aller Kontakte inkl. Mehrfachkontakte."],
    ["Nettoreichweite?", "Erreichte Personen ohne Mehrfachzählung."],
    ["Kumulierte Reichweite?", "Wachsende Reichweite über mehrere Schaltungen/Wochen."],
    ["Wirksame Reichweite?", "Reichweite von Personen mit der zur Wirkung nötigen Kontaktzahl."],
    ["Kontakte pro Nutzer?", "BRW : NRW – durchschnittliche Zahl der Kontakte je erreichter Person."],
    ["Was sind GRP?", "Gross Rating Points: durchschnittliche Kontakte pro 100 Zielpersonen – Maß für Werbedruck."],
    ["GRP berechnen?", "Reichweite in % × durchschnittliche Kontakte (oder Summe der Brutto-Reichweiten in %)."],
    ["Was ist Affinität?", "Anteil der Zielgruppe an der Nutzerschaft eines Mediums – Streugenauigkeit."],
    ["Affinitätsindex berechnen?", "(Anteil ZG im Medium : Anteil ZG in der Grundgesamtheit) × 100."],
    ["Was bedeutet Affinitätsindex 150?", "Die Zielgruppe ist im Medium 50 % stärker vertreten als in der Bevölkerung."],
    ["Interne Überschneidung?", "Mehrfacherreichung derselben Personen durch mehrere Schaltungen im selben Medium."],
    ["Externe Überschneidung?", "Mehrfacherreichung derselben Personen durch verschiedene Medien."],
    ["Formel 1000er-Seitenpreis?", "Seitenpreis × 1.000 : (verbreitete) Auflage."],
    ["Formel 1000er-Kontaktpreis?", "Preis × 1.000 : Bruttoreichweite."],
    ["Formel 1000er-Nutzerpreis?", "Preis × 1.000 : Nettoreichweite."],
    ["Intermedial vs. intramedial?", "Inter: zwischen Gattungen (TV vs. Print). Intra: innerhalb einer Gattung (Spiegel vs. Stern)."],
    ["Was ist ein Unique Visitor?", "Nettoreichweite online: einzelner Nutzer, einmal gezählt."],
    ["Was ist eine Page Impression?", "Abruf einer Seite mit potenzieller Werbung."],
    ["Was ist eine Ad Impression?", "Tatsächliche Einblendung eines Werbemittels."],
    ["Was ist die CTR?", "Click-Through-Rate: Klicks geteilt durch Impressions mal 100."],
    ["Was ist Retargeting?", "Erneute Ansprache von Website-Besuchern auf anderen Seiten."],
    ["Was ist Behavioural Targeting?", "Auswahl der Werbung nach dem Nutzerverhalten (Cookies)."],
    ["Was ist Geotargeting?", "Ausspielung nach geografischem Standort (IP/GPS)."],
    ["Paid, Owned, Earned Media?", "Bezahlte Kanäle; eigene Kanäle; durch Nutzer verdiente Reichweite."],
  ])
  .gls([
    ["Bruttoreichweite", "Gesamtzahl aller Kontakte inklusive Mehrfachkontakte."],
    ["Nettoreichweite", "Zahl der erreichten Personen ohne Mehrfachkontakte."],
    ["GRP", "Gross Rating Points – Werbedruck."],
    ["Affinitätsindex", "Verhältnis des Zielgruppenanteils im Medium zum Anteil in der Bevölkerung."],
    ["TKP", "Tausenderkontaktpreis."],
    ["CTR", "Click-Through-Rate."],
    ["Impression", "Einblendung eines Werbemittels."],
  ])
  .mc("Welche Kennziffer zeigt die Zahl der erreichten Personen ohne Mehrfachzählung?", "Nettoreichweite", ["Bruttoreichweite", "GRP", "Affinität", "Auflage"])
  .mc("Wie berechnet sich der Tausender-Kontakt-Preis?", "Preis · 1.000 : Bruttoreichweite", ["Preis · 1.000 : Nettoreichweite", "Preis : Auflage", "Reichweite : Preis", "Preis · Reichweite"])
  .mc("Der Affinitätsindex eines Magazins beträgt 130. Was bedeutet das?", "Die Zielgruppe ist im Medium überproportional vertreten.", ["Die Zielgruppe ist unterproportional vertreten.", "Das Magazin hat 130 Leser.", "Die Reichweite liegt bei 130 %.", "Die Zielgruppe entspricht exakt der Bevölkerung."])
  .mc("Eine Zielperson liest Ausgabe 1 und Ausgabe 2 derselben Zeitschrift. Was entsteht?", "Interne Überschneidung (Mehrfachkontakt)", ["Externe Überschneidung", "Kumulierte Streuung", "Affinität", "Marktanteil"])
  .mc("Die Anzeige läuft im Kölner Stadt-Anzeiger und im Express; einige lesen beide. Was entsteht?", "Externe Überschneidung", ["Interne Überschneidung", "GRP", "Marktforschung", "Fehlstreuung"])
  .mc("Was beschreibt den Werbedruck?", "GRP", ["Affinität", "LpN", "Druckauflage", "TNP"])
  .mc("Wie berechnet sich die CTR?", "Klicks : Impressions · 100", ["Impressions : Klicks", "Klicks · Impressions", "Budget : Klicks", "Reichweite : Klicks"])
  .mc("Welche Kennziffer ist der Online-Bruttokontakt?", "Visits", ["Unique Visitors", "Nettoreichweite", "Reichweite", "Affinität"])
  .mc("Welcher Vergleich liegt vor, wenn Spiegel und Stern verglichen werden?", "Intramedialer Vergleich", ["Intermedialer Vergleich", "Intermodaler Vergleich", "Kein Vergleich", "Cross-Media"])
  .mc("Welche Auflagenart ist stets mindestens so hoch wie die verkaufte Auflage, aber nie höher als die Druckauflage?", "Die tatsächlich verbreitete Auflage", ["Die Leser pro Nummer", "Die Reichweite", "Die Affinität", "Der Tausenderpreis"])
  .match("Ordnen Sie jede Kennziffer der Beschreibung zu.", [
    ["Bruttoreichweite", "Kontakte inkl. Mehrfachkontakte"],
    ["Nettoreichweite", "Personen ohne Mehrfachkontakte"],
    ["Affinität", "Anteil der Zielgruppe in der Nutzerschaft"],
    ["GRP", "Werbedruck pro 100 Zielpersonen"],
  ])
  .match("Ordnen Sie jede Online-Kennziffer der Erklärung zu.", [
    ["Visit", "Bruttokontakt auf der Website"],
    ["Unique Visitor", "Nettoreichweite online"],
    ["Ad Impression", "Einblendung eines Banners"],
    ["Ad Click", "Weiterleitung auf die Werbetreibenden-Website"],
  ])
  .match("Ordnen Sie das Mediabegriff dem Typ zu.", [
    ["Unternehmenswebsite", "Owned Media"],
    ["Bannerwerbung", "Paid Media"],
    ["Nutzer teilen den Markenpost", "Earned Media"],
    ["Instagram-Anzeige", "Paid Media"],
  ])
  .tf("Die Bruttoreichweite ist stets kleiner als die Nettoreichweite.", false, { e: "BRW ≥ NRW, da Mehrfachkontakte mitgezählt werden." })
  .tf("Ein Affinitätsindex über 100 bedeutet überproportionale Zielgruppenstärke.", true)
  .cloze("Der Tausender-Kontaktpreis wird auf die [[Bruttoreichweite]] bezogen, der Tausender-Nutzerpreis auf die [[Nettoreichweite]].")
  .tcalc(
    "Eine 1/1-seitige Farbanzeige im Magazin „{m}“ kostet netto {p|eur}. Verbreitete Auflage {a} Mio. Stück. Berechnen Sie den 1000er-Seitenpreis.",
    "p*1000/(a*1000000)",
    { m: V.pick(["Spiegel", "Stern", "Focus", "Brigitte", "Bunte"]), p: V.int(20000, 80000, 1000), a: V.dec(0.4, 1.6, 1) },
    { unit: "€", steps: ["1000er-Seitenpreis = Seitenpreis · 1.000 : Auflage", "= {p|eur} · 1.000 : ({a} Mio.) = {result|eur}"] },
  )
  .tcalc(
    "Eine Anzeige kostet {p|eur}. Das Medium erreicht {brw} Mio. Kontakte (Bruttoreichweite). Berechnen Sie den Tausender-Kontaktpreis.",
    "p*1000/(brw*1000000)",
    { p: V.int(20000, 80000, 1000), brw: V.dec(3, 8, 2) },
    { unit: "€", steps: ["TKP = Preis · 1.000 : BRW = {result|eur}"] },
  )
  .tcalc(
    "Eine Anzeige kostet {p|eur}. Bruttoreichweite {brw} Mio., davon {mk} Mio. Mehrfachkontakte. Berechnen Sie den Tausender-Nutzerpreis (bezogen auf die Nettoreichweite).",
    "p*1000/((brw-mk)*1000000)",
    { p: V.int(20000, 80000, 1000), brw: V.dec(5, 8, 2), mk: V.dec(0.5, 1.5, 2) },
    { unit: "€", steps: ["Nettoreichweite = BRW − Mehrfachkontakte", "TNP = Preis · 1.000 : NRW = {result|eur}"] },
  )
  .tcalc(
    "Die Zielgruppe umfasst {zg|int} Personen. Ein Plan erreicht {n|int} Personen netto mit durchschnittlich {k} Kontakten. Berechnen Sie die GRP (Kontakte je 100 Zielpersonen).",
    "n/zg*100*k",
    { zg: V.int(1000000, 5000000, 500000), n: V.int(200000, 900000, 50000), k: V.dec(1.5, 4, 1) },
    { unit: "GRP", steps: ["Reichweite in % = {n|int} : {zg|int} · 100", "GRP = Reichweite % · {k} Kontakte = {result}"] },
  )
  .tcalc(
    "Im Medium sind {a} % der Nutzer Zielgruppenangehörige, in der Grundgesamtheit {b} %. Berechnen Sie den Affinitätsindex.",
    "a/b*100",
    { a: V.int(20, 60, 2), b: V.int(10, 30, 2) },
    { unit: "", dec: 0, steps: ["Affinitätsindex = {a} : {b} · 100 = {result}"] },
  )
  .tcalc(
    "Eine Online-Kampagne erzielt {i|int} Ad Impressions und {c|int} Klicks. Berechnen Sie die Click-Through-Rate in Prozent.",
    "c/i*100",
    { i: V.int(200000, 2000000, 100000), ctr: V.pick([0.2, 0.4, 0.5, 0.8, 1.5, 2.5]), c: V.expr("i*ctr/100", 0, "int") },
    { unit: "%", steps: ["CTR = Klicks : Impressions · 100 = {result} %"] },
  )
  .tcalc(
    "Online-Kampagnenkosten {k|eur}, Ad Impressions {i|int}. Berechnen Sie den TKP (Kosten je 1.000 Impressions).",
    "k/i*1000",
    { k: V.int(2000, 20000, 1000), i: V.int(200000, 2000000, 100000) },
    { unit: "€", steps: ["TKP = Kosten : Impressions · 1.000 = {result|eur}"] },
  )
  .done();

/* ---------- LF9: Planung ---------- */
const mp = T("mako-lf9-planung", 3)
  .summary("Mediaplanungsprozess, Mediagattungen & Online-Media", `
**Mediaplanungsprozess**: 1 Briefing/Analyse (Marketingziel, Zielgruppe, Budget) → 2 **Mediaziele** (Reichweite, Kontakte, GRP, Kontaktklasse, Zeitraum, Gebiet) → 3 **Mediastrategie** → 4 **Mediaselektion** (inter-/intramedial, Medienvergleich) → 5 **Streuplan/Mediaplan** (Timing: Dauerschaltung, Flights, Pulsing, Blockschaltung) → 6 Buchung/Einkauf → 7 Kontrolle (Post-Test).
**Werbeziel ↔ Mediaziel**: Werbeziel (psychologisch) wird in Mediaziele (Reichweite/Kontakte) übersetzt.
**Etatfindung (6 Methoden)**: Prozent vom Umsatz, Prozent vom Gewinn, Konkurrenzorientierung (Share of Voice), Rest-/Verfügbarkeitsmethode, Zielerreichungsmethode (Task-and-Objective), Marktanteil/Pro-Kopf-Methode.
**Gattungen** (Vor-/Nachteile): **Print** (Zeitung: aktuell, regional; Zeitschrift: Zielgruppennähe, Qualität) · **TV** (hohe Reichweite, audiovisuell, teuer) · **Radio** (günstig, regional, nur Ton) · **Plakat/OOH/DOOH** (Dauer, hohe Reichweite lokal) · **Kino** · **Online/Digital** (messbar, zielgenau) · **Direktwerbung**.
**Nielsen-Gebiete**: Einteilung Deutschlands in Werbemarktgebiete (I–VII) für die regionale Streuplanung.
**Marktstudien**: AWA, b4p (best for planning), ma (Media-Analyse), AGOF daily digital facts, Mediaplan-Software.
**Mediaäquivalente**: AE-Provision (Agenturvergütung 15 %), Mediarabatte (Mal-, Mengen-, Frequenz-, Malstaffel).
`)
  .cards([
    ["Phasen des Mediaplanungsprozesses?", "Analyse/Briefing, Mediaziele, Mediastrategie, Selektion, Streuplan, Buchung, Kontrolle."],
    ["Was sind Mediaziele?", "Quantitative Vorgaben wie Reichweite, Kontakte, GRP und Kontaktklasse."],
    ["Was ist Mediaselektion?", "Auswahl der Werbeträger (inter- und intramedial)."],
    ["Streuplan?", "Zeitliche und mengenmäßige Verteilung der Schaltungen."],
    ["Was ist ein Flight?", "Zeitlich begrenzte intensive Werbewelle mit Pausen."],
    ["Was ist Pulsing?", "Dauerhafte Grundschaltung mit zusätzlichen Werbewellen."],
    ["Was ist eine Dauerschaltung?", "Gleichmäßige Werbung über den gesamten Zeitraum."],
    ["Nenne Etatfindungsmethoden.", "Prozent vom Umsatz/Gewinn, Konkurrenzorientierung, Verfügbarkeit, Ziel-/Aufgabenmethode, Pro-Kopf."],
    ["Was ist Share of Voice?", "Anteil des eigenen Werbedrucks am Gesamtwerbedruck der Branche."],
    ["Vorteile von TV?", "Hohe Reichweite, Bewegtbild/Ton, emotionale Wirkung – aber hohe Kosten."],
    ["Vorteile von Radio?", "Günstig, regional, hohe Frequenz – aber nur auditiv."],
    ["Vorteile von Plakat?", "Hohe lokale Reichweite, Dauerpräsenz – Botschaft muss kurz sein."],
    ["Vorteile von Zeitschriften?", "Zielgruppennähe, Qualität, lange Nutzung."],
    ["Vorteile von Zeitungen?", "Aktualität, regionale Streuung."],
    ["Vorteile von Online-Werbung?", "Messbarkeit, Zielgenauigkeit, Interaktion, flexible Budgets."],
    ["Was sind Nielsen-Gebiete?", "Sieben Werbemarktgebiete zur regionalen Planung."],
    ["Was ist die b4p?", "Best for Planning – Markt-Media-Studie für die Zielgruppenplanung."],
    ["Was ist die AE-Provision?", "Vergütung der Agentur durch die Medien (traditionell 15 % der Schaltkosten)."],
    ["Was ist ein Malstaffelrabatt?", "Rabatt nach der Häufigkeit der Schaltungen."],
    ["Was ist ein Mengenrabatt in der Mediaplanung?", "Nachlass nach Schaltvolumen (z. B. mm oder Seiten)."],
    ["Was ist DOOH?", "Digital Out of Home – digitale Außenwerbung."],
    ["Was ist Programmatic Advertising?", "Automatisierter, datengestützter Einkauf digitaler Werbeplätze in Echtzeit."],
    ["Was ist ein Mediaplan?", "Detaillierte Übersicht von Medien, Terminen, Kosten und Kennziffern."],
  ])
  .gls([
    ["Mediaplan", "Plan der Schaltung von Werbemitteln in Medien."],
    ["Streuplan", "Zeitliche Verteilung der Werbung."],
    ["Share of Voice", "Anteil am Werbedruck einer Branche."],
    ["Flight", "Befristete intensive Werbewelle."],
    ["Programmatic Advertising", "Automatisierter Medieneinkauf."],
  ])
  .mc("Welche Phase folgt im Mediaplanungsprozess nach der Festlegung der Mediaziele?", "Mediastrategie bzw. Mediaselektion", ["Buchung", "Kontrolle", "Briefing", "Produktion"])
  .mc("Welches Medium bietet hohe Reichweite durch Bild und Ton, ist aber vergleichsweise teuer?", "Fernsehen", ["Zeitung", "Radio", "Plakat", "Mailing"])
  .mc("Welches Medium eignet sich besonders gut für regionale, kostengünstige Werbung mit hoher Frequenz?", "Radio", ["Fernsehen", "Zeitschrift", "Kino", "Fachmesse"])
  .mc("Was ist ein Flight?", "Intensive Werbewelle in einem begrenzten Zeitraum", ["Konstante Dauerschaltung", "Eine Medienkooperation", "Ein Messeauftritt", "Eine Konkurrenzanalyse"])
  .mc("Welche Etatfindungsmethode orientiert sich am Verhalten der Wettbewerber?", "Konkurrenzorientierte Methode (Share of Voice)", ["Prozent vom Umsatz", "Restmethode", "Zielmethode", "Pro-Kopf-Methode"])
  .mc("Welcher Vergleich liegt vor, wenn Fernsehen mit Zeitung verglichen wird?", "Intermedialer Vergleich", ["Intramedialer Vergleich", "Intrakultureller Vergleich", "Kein Vergleich", "Interner Vergleich"])
  .mc("Wofür steht die Abkürzung b4p?", "Best for Planning (Markt-Media-Studie)", ["Business for Print", "Brand for People", "Budget for Planning", "Best for Print"])
  .order("Bringen Sie den Mediaplanungsprozess in die richtige Reihenfolge.", ["Analyse und Briefing", "Festlegung der Mediaziele", "Mediastrategie und Selektion", "Erstellung des Streuplans", "Buchung und Kontrolle"], { d: 2 })
  .match("Ordnen Sie jedes Medium dem typischen Vorteil zu.", [
    ["Fernsehen", "Hohe Reichweite, Bewegtbild und Ton"],
    ["Radio", "Günstig und regional"],
    ["Zeitschrift", "Zielgruppennähe und Qualität"],
    ["Online", "Messbarkeit und Zielgenauigkeit"],
    ["Plakat", "Dauerpräsenz im öffentlichen Raum"],
  ])
  .match("Ordnen Sie das Timing-Muster zu.", [
    ["Dauerschaltung", "gleichmäßig über den gesamten Zeitraum"],
    ["Flight", "intensive Welle mit Pausen"],
    ["Pulsing", "Grundschaltung plus zusätzliche Wellen"],
  ])
  .tf("Die Mediastrategie legt fest, welche Medien die Zielgruppe am besten erreichen.", true)
  .tf("Der AE-Provision stehen Kunden zu.", false, { e: "Die Agentur erhält die Agenturprovision von den Medien." })
  .cloze("Im [[Mediaplan]] werden Medien, Termine und [[Kosten]] zusammengefasst.")
  .tcalc(
    "Ein Medium berechnet für eine Schaltung {p|eur}. Die Agentur erhält {ae} % Agenturprovision auf die Schaltkosten. Wie hoch ist die Provision der Agentur?",
    "p*ae/100",
    { p: V.int(5000, 40000, 1000), ae: V.pick([10, 15]) },
    { unit: "€", steps: ["Provision = {p|eur} · {ae} % = {result|eur}"] },
  )
  .tcalc(
    "Ein Spot kostet {p|eur} je Schaltung. Es werden {n} Schaltungen gebucht. Der Sender gewährt {r} % Malstaffelrabatt auf die Gesamtsumme. Wie hoch ist der zu zahlende Betrag?",
    "p*n*(1-r/100)",
    { p: V.int(800, 4000, 100), n: V.int(10, 40, 2), r: V.pick([5, 8, 10, 12]) },
    { unit: "€", steps: ["Gesamtpreis = {n} · {p|eur}", "Rabatt {r} % → {result|eur}"] },
  )
  .done();

/* ---------- LF10: Produktion ---------- */
const pd = T("mako-lf10-produktion", 3)
  .summary("Druckverfahren, Papier & Produktionsablauf", `
**Druckvorstufe**: Daten, Layout, Satz, **Farbmodelle** (**RGB** – Bildschirm, additiv; **CMYK** – Druck, subtraktiv; **Pantone/HKS** – Sonderfarben), **Auflösung** (300 dpi Druck, 72 dpi Web), Beschnitt (3 mm), Farbprofile, PDF/X, Proof, Freigabe (Druckfreigabe/Gut zum Druck).
**Druckverfahren**: **Offset** (Flachdruck; Auflagen ab ca. 500 Stück; hohe Qualität; Platte/Gummituch) · **Digitaldruck** (kleine Auflagen, Variabel, schnell, teurer je Stück bei hoher Auflage) · **Tiefdruck** (große Auflagen, Zeitschriften, Verpackung) · **Siebdruck** (Textilien, Schilder, Sonderfarben) · **Flexodruck** (Verpackung) · **Hochdruck** (Buchdruck, Prägung) · **Tampondruck** (Werbeartikel).
**Weiterverarbeitung**: Schneiden, Falzen (Wickel-, Leporello-, Zickzack-, Kreuzfalz), Heften, Klebebinden, Prägen, Lackieren (UV-Lack, Dispersionslack), Kaschieren, Stanzen, Veredelung.
**Papier**: **Grammatur** (g/m²), Volumen, Oberfläche (matt, glänzend, ungestrichen/gestrichen), **Formate**: **DIN A**-Reihe (A4 210×297 mm; halbieren → nächste Stufe), **DIN lang** (99×210 mm), **Bogenformate**, Laufrichtung, Weißgrad, Umweltzeichen (FSC, Blauer Engel).
**Produktionsablauf**: Auftrag/Angebot → Daten → Preflight → Proof → Freigabe → Druck → Weiterverarbeitung → Versand.
**Kosten**: Auflage, Papier, Farben (4/0, 4/4), Veredelung, Weiterverarbeitung, Versand.
`)
  .cards([
    ["Was bedeutet RGB?", "Rot-Grün-Blau – additives Farbmodell für Bildschirme."],
    ["Was bedeutet CMYK?", "Cyan, Magenta, Yellow, Key (Schwarz) – subtraktives Farbmodell für den Druck."],
    ["Was sind Sonderfarben?", "Gemischte Farben (Pantone, HKS), die nicht aus CMYK entstehen."],
    ["Welche Auflösung für Druck?", "300 dpi."],
    ["Welche Auflösung für Web?", "72 dpi (Bildschirm)."],
    ["Was ist Beschnitt?", "Überstand der Gestaltung (meist 3 mm) über das Endformat, um weiße Ränder zu vermeiden."],
    ["Was ist ein Proof?", "Farbverbindlicher Probedruck zur Freigabe."],
    ["Was ist Preflight?", "Technische Prüfung der Druckdaten vor dem Druck."],
    ["Was ist der Offsetdruck?", "Flachdruckverfahren für hohe Auflagen und Qualität."],
    ["Wann Digitaldruck?", "Bei kleinen Auflagen, schnell, variabel (personalisiert)."],
    ["Wann Siebdruck?", "Für Textilien, Schilder, Spezialfarben, besondere Oberflächen."],
    ["Wann Tiefdruck?", "Für sehr hohe Auflagen (Zeitschriften, Kataloge, Verpackung)."],
    ["Was ist Tampondruck?", "Druckverfahren für unebene Werbeartikel (Kugelschreiber, Tassen)."],
    ["Was ist Grammatur?", "Papiergewicht in g/m²."],
    ["Format DIN A4?", "210 × 297 mm."],
    ["Format DIN A5?", "148 × 210 mm."],
    ["Format DIN lang?", "99 × 210 mm."],
    ["Wie entstehen die DIN-A-Formate?", "Durch Halbieren der längeren Seite des vorherigen Formats."],
    ["Was ist UV-Lack?", "Hochglänzende, kratzfeste Veredelung."],
    ["Was ist Kaschieren?", "Aufbringen einer Folie auf das Druckerzeugnis."],
    ["Was bedeutet 4/4-farbig?", "Vorder- und Rückseite in vier Farben (CMYK)."],
    ["Was bedeutet 4/0-farbig?", "Vorderseite vierfarbig, Rückseite unbedruckt."],
    ["Was ist ein Leporello-Falz?", "Zickzackförmiger Falz."],
    ["Was ist FSC?", "Zertifikat für Papier aus nachhaltiger Forstwirtschaft."],
    ["Was ist Gut zum Druck?", "Schriftliche Druckfreigabe des Kunden."],
  ])
  .gls([
    ["CMYK", "Subtraktives Vierfarbmodell für den Druck."],
    ["RGB", "Additives Farbmodell für Bildschirme."],
    ["Beschnitt", "Zugabe über das Endformat hinaus."],
    ["Proof", "Farbverbindlicher Probedruck."],
    ["Grammatur", "Gewicht des Papiers pro Quadratmeter."],
    ["Offsetdruck", "Flachdruckverfahren für hohe Auflagen."],
  ])
  .mc("Welches Farbmodell wird für den Druck verwendet?", "CMYK", ["RGB", "HSB", "Lab-Bildschirm", "HEX"])
  .mc("Für 20 personalisierte Einladungen eignet sich am besten…", "Digitaldruck", ["Offsetdruck", "Tiefdruck", "Siebdruck", "Hochdruck"])
  .mc("Für eine Auflage von 100.000 Katalogen eignet sich meist…", "Offset- oder Tiefdruck", ["Digitaldruck", "Tampondruck", "Siebdruck", "Handschrift"])
  .mc("Welche Auflösung ist für Druckdaten üblich?", "300 dpi", ["72 dpi", "50 dpi", "10 dpi", "1 dpi"])
  .mc("Welches Verfahren eignet sich für das Bedrucken von Kugelschreibern?", "Tampondruck", ["Offsetdruck", "Tiefdruck", "Digitaldruck auf Rolle", "Fotosatz"])
  .mc("Wozu dient der Beschnitt?", "Er verhindert weiße Ränder durch Schnittungenauigkeiten.", ["Er erhöht die Auflösung.", "Er ersetzt die Druckfreigabe.", "Er reduziert die Farbmenge.", "Er verbessert die Papierqualität."])
  .mc("Was bedeutet ‚4/0‘ bei einem Flyer?", "Vorderseite vierfarbig, Rückseite unbedruckt", ["Beide Seiten vierfarbig", "Vierfarbig plus Sonderfarbe", "Vier Seiten, ohne Farbe", "Schwarzweiß"])
  .match("Ordnen Sie jedes Druckverfahren dem typischen Einsatz zu.", [
    ["Offsetdruck", "Hohe Auflagen, hohe Qualität"],
    ["Digitaldruck", "Kleine Auflagen, schnell, personalisiert"],
    ["Siebdruck", "Textilien und Schilder"],
    ["Tampondruck", "Unebene Werbeartikel"],
  ])
  .match("Ordnen Sie das Format den Maßen zu.", [
    ["DIN A4", "210 × 297 mm"],
    ["DIN A5", "148 × 210 mm"],
    ["DIN A6", "105 × 148 mm"],
    ["DIN lang", "99 × 210 mm"],
  ])
  .order("Bringen Sie den Produktionsablauf in die richtige Reihenfolge.", ["Datenerstellung", "Preflight und Proof", "Druckfreigabe durch den Kunden", "Druck", "Weiterverarbeitung und Versand"], { d: 2 })
  .tf("RGB ist das Farbmodell für den Druck.", false)
  .tf("Der Digitaldruck eignet sich besonders für kleine Auflagen.", true)
  .cloze("Der [[Beschnitt]] beträgt üblicherweise [[3]] mm.")
  .tcalc(
    "Ein Druckauftrag: {n|int} Flyer. Druckkosten {k1|eur} je 1.000 Stück, Papier {k2|eur} je 1.000 Stück, einmalige Rüstkosten {r|eur}. Berechnen Sie die Gesamtkosten.",
    "n/1000*(k1+k2)+r",
    { n: V.int(2000, 20000, 1000), k1: V.int(20, 60, 5), k2: V.int(10, 30, 2), r: V.int(80, 300, 20) },
    { unit: "€", steps: ["{n|int} : 1.000 · ({k1|eur} + {k2|eur}) + Rüstkosten {r|eur}", "= {result|eur}"] },
  )
  .tcalc(
    "Ein Plakat im Format DIN A1 (594 × 841 mm) wird {n} Mal gedruckt. Der Preis je m² Druckfläche beträgt {pr|eur}. Wie hoch sind die Druckkosten? (Fläche in m² auf drei Nachkommastellen genau berechnen: 0,594 × 0,841.)",
    "n*0.594*0.841*pr",
    { n: V.int(10, 100, 10), pr: V.int(8, 25, 1) },
    { unit: "€", steps: ["Fläche = 0,594 · 0,841 m²", "Kosten = {n} · Fläche · {pr|eur} = {result|eur}"] },
  )
  .done();

export default [
  { file: "mako/lf6-strategie.json", bundle: { items: [st] } },
  { file: "mako/lf6-produkt.json", bundle: { items: [pr] } },
  { file: "mako/lf6-preis.json", bundle: { items: [pp] } },
  { file: "mako/lf6-distribution.json", bundle: { items: [di] } },
  { file: "mako/lf7-instrumente.json", bundle: { items: [ki] } },
  { file: "mako/lf7-konzept.json", bundle: { items: [kz] } },
  { file: "mako/lf9-kennziffern.json", bundle: { items: [mkz] } },
  { file: "mako/lf9-planung.json", bundle: { items: [mp] } },
  { file: "mako/lf10-produktion.json", bundle: { items: [pd] } },
];
