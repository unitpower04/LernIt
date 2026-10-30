import { topic, V, structure, subject, lf, tp } from "./dsl.mjs";

const SRC = "MaKo (Skripte Vaaßen/Kuhn, Zwischenprüfung, Unterricht)";

const struktur = structure([
  subject("mako", "MaKo – Marketing & Kommunikation", "Marketing- und Kommunikationsmanagement (Prüfungsteil 1 Konzepte, teils Teil 3)", "#db2777", [
    lf("mako-lf1", "LF1", "Grundlagen der Marketingkommunikation", [1], [
      tp("mako-lf1-branche", "Werbewirtschaft, Verbände & Institutionen", [1]),
      tp("mako-lf1-marketing", "Marketing, Marketing-Mix & Begriffe", [1]),
      tp("mako-lf1-ci", "Corporate Identity & Agenturaufbau", [1]),
    ]),
    lf("mako-lf4", "LF4", "Briefing & Marktforschung", [1], [
      tp("mako-lf4-briefing", "Briefing & Re-Briefing", [1]),
      tp("mako-lf4-marktforschung", "Marktforschung & Zielgruppen", [1]),
    ]),
    lf("mako-lf6", "LF6", "Marketing-Mix", [1], [
      tp("mako-lf6-strategie", "Strategische Marketingplanung (SWOT, Ansoff, Portfolio)", [1]),
      tp("mako-lf6-produkt", "Produkt- und Markenpolitik", [1]),
      tp("mako-lf6-preis", "Preis- und Konditionenpolitik", [1, 3]),
      tp("mako-lf6-distribution", "Distributionspolitik", [1]),
    ]),
    lf("mako-lf7", "LF7/8", "Kommunikationspolitik & -konzept", [1], [
      tp("mako-lf7-instrumente", "Kommunikationsinstrumente (Werbung, PR, VKF, Sponsoring, Event, Online)", [1]),
      tp("mako-lf7-konzept", "Kommunikationskonzept, Werbeziele & AIDA", [1]),
    ]),
    lf("mako-lf9", "LF9", "Mediaplanung", [3], [
      tp("mako-lf9-kennziffern", "Mediakennziffern & Mediaplanbewertung", [3]),
      tp("mako-lf9-planung", "Mediaplanungsprozess, Mediagattungen & Online-Media", [3]),
    ]),
    lf("mako-lf10", "LF10", "Produktion & Umsetzung", [3], [
      tp("mako-lf10-produktion", "Druckverfahren, Papier & Produktionsablauf", [3]),
    ]),
  ]),
]);

const T = (k, part = 1) => topic(k, { part, src: SRC });

/* ---------- LF1: Branche ---------- */
const br = T("mako-lf1-branche")
  .summary("Werbewirtschaft, Verbände & Institutionen", `
**Werbemarkt Deutschland 2023** (ZAW): Marktvolumen ca. **48,8 Mrd. €**, Anteil am BIP **1,2 %**, rund **900.000 Beschäftigte**; Agenturen schreiben ca. 81 % der Stellenangebote aus; KI hält Einzug.
**Verbände & Institutionen**
- **ZAW** – Zentralverband der deutschen Werbewirtschaft (Dachverband, Interessenvertretung gegenüber Politik)
- **GWA** – Gesamtverband Kommunikationsagenturen (Agenturen)
- **Deutscher Werberat** – freiwillige Selbstkontrolle (Beschwerden, Rügen)
- **ADC** – Art Directors Club (Kreative, Wettbewerb)
- **DPRG** – Deutsche Public Relations Gesellschaft (PR-Fachleute)
- **BVDW** – Bundesverband Digitale Wirtschaft · **OWM** – Organisation Werbungtreibende im Markenverband
- **IVW** – Informationsgemeinschaft zur Feststellung der Verbreitung von Werbeträgern (Auflagenkontrolle) · **AGOF** – Arbeitsgemeinschaft Onlineforschung (Online-Reichweiten)
- **Bundesverband Marketing Clubs**
- **Werbungtreibende** (Unternehmen) – **Agenturen** (Dienstleister) – **Medien/Werbeträger** (Verlage, Sender) – **Marktforschung/Dienstleister**.
`)
  .cards([
    ["Wie groß ist der deutsche Werbemarkt (ZAW 2023)?", "Rund 48,8 Mrd. € Marktvolumen – etwa 1,2 % des BIP."],
    ["Wie viele Menschen arbeiten in der Werbebranche?", "Rund 900.000."],
    ["Wer ist der ZAW?", "Zentralverband der deutschen Werbewirtschaft – Dachverband der Werbebranche."],
    ["Wer ist der GWA?", "Gesamtverband Kommunikationsagenturen – Interessenverband der Agenturen."],
    ["Wer ist der Deutsche Werberat?", "Selbstkontrolleinrichtung der Werbewirtschaft; behandelt Beschwerden, spricht Rügen aus."],
    ["Wer ist der ADC?", "Art Directors Club für Deutschland – Verband der Kreativen mit Wettbewerben."],
    ["Wer ist die DPRG?", "Deutsche Public Relations Gesellschaft – Berufsverband der PR-Fachleute."],
    ["Aufgabe der IVW?", "Kontrolle und Feststellung der Verbreitung von Werbeträgern (Auflagen)."],
    ["Aufgabe der AGOF?", "Erhebung von Reichweiten und Nutzerdaten im Online-Bereich."],
    ["Was ist der BVDW?", "Bundesverband Digitale Wirtschaft – Verband der Digitalbranche."],
    ["Wer sind Werbungtreibende?", "Unternehmen, die Werbung für ihre Produkte betreiben (Auftraggeber)."],
    ["Wer sind Werbeträger/Medien?", "Medien, die Werbebotschaften verbreiten (Zeitungen, TV, Plattformen)."],
    ["Was macht eine Agentur?", "Berät Werbungtreibende, entwickelt Konzepte und setzt Kommunikation um."],
    ["Verkäufermarkt vs. Käufermarkt?", "Verkäufermarkt: Nachfrage > Angebot. Käufermarkt: Angebot > Nachfrage – Marketing entsteht."],
  ])
  .gls([
    ["ZAW", "Zentralverband der deutschen Werbewirtschaft."],
    ["GWA", "Gesamtverband Kommunikationsagenturen."],
    ["Werbungtreibende", "Unternehmen als Auftraggeber von Werbung."],
    ["Werbeträger", "Medium, das Werbemittel zum Umworbenen bringt."],
    ["Werbemittel", "Gestaltete Werbebotschaft (Anzeige, Spot, Banner)."],
  ])
  .mc("Welche Organisation prüft Beschwerden gegen Werbung und kann Rügen aussprechen?", "Deutscher Werberat", ["ZAW", "ADC", "IVW", "AGOF"])
  .mc("Welche Organisation ermittelt die Auflagen von Printmedien?", "IVW", ["AGOF", "ADC", "GWA", "DPRG"])
  .mc("Welcher Verband vertritt die Kommunikationsagenturen?", "GWA", ["ZAW", "DPRG", "IVW", "ADC"])
  .mc("Wer ist Werbungtreibender?", "Ein Möbelhersteller, der seine Produkte bewerben lässt", ["Eine Zeitung", "Eine Werbeagentur", "Der Werberat", "Ein Plakatanschlagbetrieb"])
  .mc("Was bedeutet ein Käufermarkt?", "Das Angebot übersteigt die Nachfrage.", ["Die Nachfrage übersteigt das Angebot.", "Es gibt nur einen Käufer.", "Der Staat legt Preise fest.", "Es gibt keine Konkurrenz."])
  .match("Ordnen Sie die Institution der Aufgabe zu.", [
    ["ADC", "Kreativwettbewerbe und Verband der Kreativen"],
    ["DPRG", "Berufsverband für Öffentlichkeitsarbeit"],
    ["IVW", "Auflagenkontrolle"],
    ["AGOF", "Online-Reichweitenforschung"],
    ["Deutscher Werberat", "Selbstkontrolle der Werbung"],
  ])
  .tf("Der Deutsche Werberat kann Bußgelder verhängen.", false)
  .tf("Die Werbewirtschaft trägt rund 1,2 % zum BIP bei.", true)
  .cloze("Der [[ZAW]] ist der Dachverband der Werbewirtschaft, die [[IVW]] kontrolliert Auflagen.")
  .done();

/* ---------- LF1: Marketing ---------- */
const mk = T("mako-lf1-marketing")
  .summary("Marketing, Marketing-Mix & Begriffe", `
**Marketing** = Unternehmensbereich und **Führungskonzept**, das alle Aktivitäten am Markt und den Kundenbedürfnissen ausrichtet.
**Marktentwicklung**: Verkäufermarkt (bis ca. 1960er) → **Käufermarkt** → Marketing, Marktforschung.
**Marketing-Mix (4 P)**: **Product** (Produktpolitik), **Price** (Kontrahierungs-/Preispolitik), **Place** (Distributionspolitik), **Promotion** (Kommunikationspolitik); Dienstleistungs-Mix **7 P**: + **People, Process, Physical Evidence**. Grundlage: **Marktforschung**. Alle Instrumente müssen **abgestimmt** sein.
**Kommunikationsmix**: Werbung, PR, Verkaufsförderung, Sponsoring, Event, Direktmarketing, Online.
**Begriffe**: Dialogmarketing (Direktwerbung), Öko-Marketing, Eventmarketing (interne/externe Events), Ethno-Marketing, **Guerilla-Marketing** (unkonventionell, geringes Budget, Überraschung), Social-Media-Marketing, Content-Marketing, Influencer-Marketing, Product Placement.
`)
  .cards([
    ["Was ist Marketing?", "Unternehmensfunktion und Führungskonzept, das alle Aktivitäten konsequent an den Bedürfnissen des Marktes ausrichtet."],
    ["Nenne die 4 P des Marketing-Mix.", "Product, Price, Place, Promotion."],
    ["Nenne die zusätzlichen 3 P im Dienstleistungsmarketing.", "People, Process, Physical Evidence."],
    ["Was beschreibt die Produktpolitik?", "Gestaltung von Qualität, Design, Verpackung, Sortiment und Marke."],
    ["Was beschreibt die Kontrahierungspolitik?", "Preise, Rabatte, Boni, Skonti, Zahlungs- und Lieferbedingungen."],
    ["Was beschreibt die Distributionspolitik?", "Wie und wo das Produkt zum Kunden gelangt (Absatzwege, Logistik, Standorte)."],
    ["Was beschreibt die Kommunikationspolitik?", "Alle Maßnahmen, mit denen Botschaften an Zielgruppen vermittelt werden."],
    ["Warum müssen die Instrumente des Marketing-Mix abgestimmt sein?", "Widersprüche (z. B. Premium-Preis bei schlechter Qualität) schaden dem Image."],
    ["Was ist Dialogmarketing?", "Kommunikation mit direkter Ansprache und Rückkanal (Mailing, Callcenter, E-Mail)."],
    ["Was ist Guerilla-Marketing?", "Unkonventionelle, überraschende Aktionen mit geringem Budget und großer Wirkung."],
    ["Was ist Öko-Marketing?", "Ausrichtung des Marketing an ökologischen Aspekten und Nachhaltigkeit."],
    ["Was ist Eventmarketing?", "Inszenierte Ereignisse, um Zielgruppen emotional zu erreichen (interne/öffentliche Events)."],
    ["Was ist Ethno-Marketing?", "Marketing für Zielgruppen mit besonderem kulturellem/sprachlichem Hintergrund."],
    ["Was ist Content-Marketing?", "Wertvolle Inhalte, die Zielgruppen anziehen und binden, statt direkter Werbung."],
    ["Was ist Influencer-Marketing?", "Zusammenarbeit mit reichweitenstarken Personen in sozialen Medien."],
    ["Was ist ein Stakeholder?", "Jede Gruppe mit Interesse am Unternehmen (Kunden, Mitarbeiter, Lieferanten, Öffentlichkeit)."],
  ])
  .gls([
    ["Marketing-Mix", "Aufeinander abgestimmter Einsatz der Marketinginstrumente."],
    ["Guerilla-Marketing", "Unkonventionelle Marketingaktionen mit kleinem Budget."],
    ["Stakeholder", "Anspruchsgruppe eines Unternehmens."],
    ["Dialogmarketing", "Kommunikation mit direkter Ansprache und Rückkanal."],
  ])
  .mc("Wie viele Instrumente umfasst der klassische Marketing-Mix?", "Vier", ["Drei", "Fünf", "Sieben", "Zwei"])
  .mc("Ein hochwertiges Produkt wird als Premium beworben, aber ständig mit hohen Rabatten verramscht. Welches Problem liegt vor?", "Der Marketing-Mix ist nicht aufeinander abgestimmt.", ["Es gibt keine Kommunikationspolitik.", "Die Distribution ist falsch.", "Die Marktforschung wurde vergessen.", "Es handelt sich um Dialogmarketing."])
  .mc("Welches Instrument gehört zur Distributionspolitik?", "Auswahl des Vertriebswegs", ["Rabattgestaltung", "Anzeigenschaltung", "Verpackungsdesign", "Markenname"])
  .mc("Welches Instrument gehört zur Kontrahierungspolitik?", "Skonto- und Rabattgestaltung", ["Vertriebswege", "Verpackungsdesign", "Pressearbeit", "Eventplanung"])
  .mc("Was kennzeichnet Guerilla-Marketing?", "Überraschende Aktionen mit geringem Budget", ["Hohe Mediabudgets im TV", "Reine Preisaktionen", "Standardisierte Anzeigen", "Verkauf über den Großhandel"])
  .match("Ordnen Sie jedes Instrument dem Marketing-Mix-Bereich zu.", [
    ["Produktverpackung", "Produktpolitik"],
    ["Mengenrabatt", "Kontrahierungspolitik"],
    ["Franchising", "Distributionspolitik"],
    ["Sponsoring", "Kommunikationspolitik"],
  ])
  .match("Ordnen Sie die 4 P den deutschen Begriffen zu.", [
    ["Product", "Produktpolitik"],
    ["Price", "Preispolitik"],
    ["Place", "Distributionspolitik"],
    ["Promotion", "Kommunikationspolitik"],
  ])
  .tf("Marketing und Werbung bedeuten dasselbe.", false, { e: "Werbung ist nur ein Teil der Kommunikationspolitik." })
  .tf("In einem Käufermarkt übersteigt das Angebot die Nachfrage.", true)
  .cloze("Die [[4 P]] des Marketing-Mix sind Product, Price, [[Place]] und Promotion.")
  .done();

/* ---------- LF1: CI & Agentur ---------- */
const ci = T("mako-lf1-ci")
  .summary("Corporate Identity & Agenturaufbau", `
**Corporate Identity (CI)** = Unternehmensidentität: Wie das Unternehmen sich selbst sieht und nach außen darstellt. **Image** = Fremdbild (Wahrnehmung).
**CI-Bausteine**: **Corporate Design (CD)** – visuell (Logo, Farben, Schrift, Layout) · **Corporate Communications (CC)** – Kommunikation nach innen/außen · **Corporate Behaviour (CB)** – Verhalten (Umgang mit Kunden, Mitarbeitern) · evtl. **Corporate Culture/Philosophie**.
**Ziele**: Wiedererkennung, Vertrauen, Unterscheidbarkeit, Identifikation.
**Agenturaufbau (Full-Service)**: **Beratung/Kontakt** (Kundenbetreuer = Kontakter, Account Manager) · **Konzeption/Strategie** (Planner) · **Kreation** (Creative Director, Art Director, Texter, Grafiker) · **Media** (Mediaplaner, Mediaeinkauf) · **Produktion** (Druck-/Filmproduktion) · **Traffic** (Terminüberwachung, Ablaufsteuerung) · **Controlling/Verwaltung**.
**Agenturtypen**: Full-Service, Spezialagentur (PR, Digital, Media, Design), Kreativagentur (Boutique), Netzwerkagentur.
**Ablaufphasen**: Briefing → Strategie/Konzept → Kreation → Präsentation → Produktion → Mediaplanung/Einsatz → Controlling.
`)
  .cards([
    ["Was ist Corporate Identity?", "Das Selbstbild und die einheitliche Selbstdarstellung eines Unternehmens."],
    ["Was ist ein Image?", "Das Fremdbild: Wie Außenstehende das Unternehmen wahrnehmen."],
    ["Nenne die drei Bausteine der CI.", "Corporate Design, Corporate Communications, Corporate Behaviour."],
    ["Was umfasst Corporate Design?", "Logo, Farben, Schriften, Bildsprache, Layoutraster."],
    ["Was ist Corporate Communications?", "Alle kommunikativen Auftritte nach innen und außen."],
    ["Was ist Corporate Behaviour?", "Das Verhalten des Unternehmens und seiner Mitarbeiter gegenüber Stakeholdern."],
    ["Ziele der CI?", "Wiedererkennung, Vertrauen, Abgrenzung, Identifikation."],
    ["Was macht der Kontakter?", "Betreut den Kunden, nimmt Briefings entgegen und koordiniert Aufträge (Account Management)."],
    ["Was macht der Art Director?", "Verantwortet die visuelle Gestaltung."],
    ["Was macht der Creative Director?", "Leitet das Kreativteam und verantwortet die kreative Gesamtidee."],
    ["Was macht der Trafficer?", "Überwacht Termine, Ablauf und Auftragsfluss in der Agentur."],
    ["Was macht der Mediaplaner?", "Plant die Auswahl und Schaltung von Werbeträgern."],
    ["Was ist eine Full-Service-Agentur?", "Bietet alle Leistungen von Strategie über Kreation bis Media und Produktion."],
    ["Was ist eine Spezialagentur?", "Konzentriert sich auf ein Feld (z. B. PR, Digital, Media)."],
    ["Aufbauorganisation vs. Ablauforganisation?", "Aufbau: Struktur (wer). Ablauf: Prozesse (wie und wann)."],
  ])
  .gls([
    ["Corporate Identity", "Einheitliche Unternehmensidentität."],
    ["Corporate Design", "Visuelles Erscheinungsbild."],
    ["Image", "Fremdbild eines Unternehmens oder einer Marke."],
    ["Kontakter", "Kundenberater in der Agentur."],
    ["Traffic", "Termin- und Ablaufsteuerung in der Agentur."],
  ])
  .mc("Welcher Baustein der CI umfasst Logo, Farben und Schriften?", "Corporate Design", ["Corporate Communications", "Corporate Behaviour", "Corporate Culture", "Corporate Finance"])
  .mc("Ein Unternehmen wirbt mit Nachhaltigkeit, behandelt aber seine Lieferanten schlecht. Welcher CI-Baustein ist widersprüchlich?", "Corporate Behaviour", ["Corporate Design", "Logo", "Typografie", "Mediaplanung"])
  .mc("Wer steuert in der Agentur Termine und Abläufe?", "Der Trafficer", ["Der Art Director", "Der Texter", "Der Mediaplaner", "Der Kontakter"])
  .mc("Wer ist in der Agentur Ansprechpartner des Kunden?", "Der Kontakter", ["Der Grafiker", "Der Trafficer", "Der Texter", "Der Druckdienstleister"])
  .mc("Was ist das Image?", "Das Bild, das Außenstehende vom Unternehmen haben", ["Die interne Philosophie", "Das Logo", "Der Slogan", "Das Gehaltsgefüge"])
  .match("Ordnen Sie jeder Rolle die Aufgabe zu.", [
    ["Kontakter", "Kundenbetreuung und Briefing"],
    ["Art Director", "Visuelle Umsetzung"],
    ["Mediaplaner", "Auswahl und Planung der Werbeträger"],
    ["Trafficer", "Terminüberwachung"],
  ])
  .match("Ordnen Sie die CI-Maßnahme dem Baustein zu.", [
    ["Neues Logo", "Corporate Design"],
    ["Pressemitteilung", "Corporate Communications"],
    ["Freundlicher Kundenumgang", "Corporate Behaviour"],
  ])
  .tf("Corporate Identity ist das Fremdbild eines Unternehmens.", false, { e: "Das ist das Image – CI ist das Selbstbild." })
  .cloze("Zur CI gehören Corporate [[Design]], Corporate [[Communications]] und Corporate [[Behaviour]].")
  .done();

/* ---------- LF4: Briefing ---------- */
const bf = T("mako-lf4-briefing")
  .summary("Briefing & Re-Briefing", `
**Briefing** = Auftragsinformation des Kunden an die Agentur (**Kundenbriefing**) bzw. der Agentur an interne Teams (**Agenturbriefing/Kreativbriefing**).
**Typische Inhalte**: Unternehmen/Marke/Produkt · Ausgangssituation, Marktumfeld, Wettbewerb · Kommunikations-/Werbeziele · Zielgruppe · **Botschaft/USP (Nutzenversprechen)** · Budget · Zeitplan · rechtliche/CI-Vorgaben · Erfolgskontrolle.
**Ablauf**: Briefinggespräch (Fragen stellen!) → **Re-Briefing** (Agentur fasst schriftlich zusammen und stimmt mit Kunden ab, um Missverständnisse zu vermeiden) → Konzeption.
**Pitch** = Wettbewerbspräsentation mehrerer Agenturen; **Agenturetat**.
**Gute Briefingfragen**: W-Fragen (Wer? Was? Wen? Wann? Wo? Wie viel? Warum?), SMART-Ziele (spezifisch, messbar, attraktiv, realistisch, terminiert).
`)
  .cards([
    ["Was ist ein Briefing?", "Auftragsinformation des Kunden an die Agentur mit Zielen, Zielgruppe, Budget und Rahmen."],
    ["Was ist ein Re-Briefing?", "Die Agentur fasst das Briefing zusammen und lässt es vom Kunden bestätigen, um Missverständnisse zu vermeiden."],
    ["Nenne typische Briefinginhalte.", "Marke/Produkt, Ausgangslage, Ziele, Zielgruppe, Botschaft/USP, Budget, Termine, Vorgaben."],
    ["Was ist ein Pitch?", "Wettbewerbspräsentation, in der Agenturen um einen Auftrag konkurrieren."],
    ["Was ist ein USP?", "Unique Selling Proposition – Alleinstellungsmerkmal bzw. einzigartiges Nutzenversprechen."],
    ["Was bedeutet SMART bei Zielen?", "Spezifisch, messbar, attraktiv, realistisch, terminiert."],
    ["Warum ist ein schriftliches Briefing wichtig?", "Es sichert Verbindlichkeit und beugt Missverständnissen vor."],
    ["Was ist ein Kreativbriefing?", "Internes Briefing der Agentur an das Kreativteam mit Strategie und Tonalität."],
    ["Was sind Briefing-Lücken?", "Fehlende Informationen, die in Rückfragen geklärt werden müssen (z. B. Budget, Ziele)."],
    ["Was ist ein Etat?", "Das Budget, das ein Kunde für Kommunikation/Agentur zur Verfügung stellt."],
  ])
  .gls([
    ["Briefing", "Auftragsinformation für die Agentur."],
    ["Re-Briefing", "Zusammenfassende Rückbestätigung des Briefings durch die Agentur."],
    ["USP", "Alleinstellungsmerkmal."],
    ["Pitch", "Wettbewerbspräsentation um einen Agenturauftrag."],
  ])
  .mc("Wozu dient ein Re-Briefing?", "Missverständnisse vermeiden und Auftragsverständnis abstimmen", ["Den Preis senken", "Die Zielgruppe ändern", "Den Pitch ersetzen", "Das Produkt testen"])
  .mc("Welche Information gehört nicht zwingend ins Kundenbriefing?", "Gehälter der Agenturmitarbeiter", ["Zielgruppe", "Budget", "Zeitplan", "Kommunikationsziel"])
  .mc("Was ist ein Pitch?", "Mehrere Agenturen präsentieren ihre Ideen für einen Auftrag.", ["Ein Interview", "Ein Preisnachlass", "Eine Reklamation", "Eine Rechnung"])
  .mc("Welches Ziel ist SMART formuliert?", "Die Markenbekanntheit soll bei 18–29-Jährigen bis zum 31.12. von 20 % auf 30 % steigen.", ["Wir wollen bekannter werden.", "Wir wollen mehr Umsatz.", "Die Marke soll cooler wirken.", "Wir möchten Kunden begeistern."])
  .order("Bringen Sie den Ablauf in die richtige Reihenfolge.", ["Kundenbriefing", "Rückfragen und Re-Briefing", "Konzeption und Kreation", "Präsentation beim Kunden"], { d: 1 })
  .tf("Ein Re-Briefing wird vom Kunden erstellt.", false, { e: "Die Agentur erstellt es und lässt es bestätigen." })
  .cloze("Mit dem [[Re-Briefing]] fasst die Agentur den Auftrag zusammen und vermeidet [[Missverständnisse]].")
  .done();

/* ---------- LF4: Marktforschung ---------- */
const mf = T("mako-lf4-marktforschung")
  .summary("Marktforschung & Zielgruppen", `
**Marktforschung**: systematische Beschaffung und Analyse von Marktdaten.
- **Sekundärforschung** (Desk Research): vorhandene Daten (Internetrecherche, Statistiken, Geschäftsberichte, Studien) – schnell, günstig.
- **Primärforschung** (Field Research): neue Daten – **Befragung** (schriftlich, mündlich, telefonisch, online; standardisiert/offen), **Beobachtung**, **Experiment**, **Test** (**Testmarkt**: geografisch begrenzt, möglichst repräsentatives Abbild), **Panel** (dieselben Personen dauerhaft/wiederholt), **Omnibus** (Mehrthemenbefragung im Auftrag mehrerer Unternehmen), Gruppendiskussion/Fokusgruppe (qualitativ).
- **qualitativ** (Motive, Meinungen, Insights – kleine Gruppen) vs. **quantitativ** (Zahlen, große Stichprobe).
**Gütekriterien**: **Validität** (Gültigkeit), **Reliabilität** (Zuverlässigkeit), **Objektivität**, **Repräsentativität** (Stichprobe = verkleinertes, strukturgleiches Abbild der Grundgesamtheit), **Signifikanz** (Ergebnis über dem Zufall).
**Auswahlverfahren**: Zufallsauswahl, Klumpenauswahl, **Quotaverfahren** (Interviewer sucht Personen nach vorgegebenen Merkmalen), Random-Route.
**Zielgruppen**: soziodemografisch (Alter, Geschlecht, Einkommen, Beruf, Bildung), **psychografisch** (Lebensstil, Werte, Einstellungen), Verhalten (Markentreue, Einkaufsstättenwahl), geografisch. **Milieus** (Sinus), **Personas**.
**Insight**: tiefes Verständnis unausgesprochener Bedürfnisse.
`)
  .cards([
    ["Primär- vs. Sekundärforschung?", "Primär: neue Daten erheben. Sekundär: vorhandene Daten auswerten."],
    ["Beispiele Sekundärforschung?", "Internetrecherche, Statistiken, Fachpresse, Geschäftsberichte."],
    ["Beispiele Primärforschung?", "Befragung, Beobachtung, Experiment, Test, Gruppendiskussion."],
    ["Was ist eine Panel-Befragung?", "Wiederholte Befragung derselben Personen über einen längeren Zeitraum."],
    ["Was ist eine Omnibus-Befragung?", "Mehrthemenbefragung im Auftrag mehrerer Unternehmen."],
    ["Was ist ein Testmarkt?", "Räumlich begrenztes Gebiet, in dem ein Produkt vor der Einführung getestet wird."],
    ["Quantitativ vs. qualitativ?", "Quantitativ: Zahlen, große Stichprobe. Qualitativ: Motive/Meinungen, kleine Gruppen."],
    ["Was bedeutet Repräsentativität?", "Die Stichprobe bildet die Grundgesamtheit strukturgleich und verkleinert ab."],
    ["Was bedeutet Validität?", "Gültigkeit: Es wird gemessen, was gemessen werden soll."],
    ["Was bedeutet Reliabilität?", "Zuverlässigkeit: Bei Wiederholung ergeben sich gleiche Ergebnisse."],
    ["Was bedeutet Signifikanz?", "Das Ergebnis liegt über der Zufallswahrscheinlichkeit."],
    ["Was ist das Quotaverfahren?", "Interviewer wählt Personen nach vorgegebenen Merkmalen (z. B. Alter, Geschlecht) frei aus."],
    ["Was ist Zufallsauswahl?", "Jedes Element der Grundgesamtheit hat dieselbe Chance, gezogen zu werden."],
    ["Was sind soziodemografische Merkmale?", "Alter, Geschlecht, Einkommen, Bildung, Beruf, Haushaltsgröße."],
    ["Was sind psychografische Merkmale?", "Lebensstil, Werte, Einstellungen, Motive."],
    ["Was sind verhaltensbezogene Merkmale?", "Kaufverhalten, Markentreue, Einkaufsstättenwahl, Mediennutzung."],
    ["Was ist ein Insight?", "Ein tiefes Verständnis der (oft unausgesprochenen) Bedürfnisse einer Zielgruppe."],
    ["Was ist eine Persona?", "Fiktive, typische Vertreterin einer Zielgruppe mit Eigenschaften und Bedürfnissen."],
    ["Was ist eine Konkurrenzanalyse?", "Untersuchung von Wettbewerbern (Angebote, Preise, Kommunikation)."],
    ["Was ist ein offenes Interview?", "Flexibles Gespräch mit Leitfaden – hohe Flexibilität, aber aufwendige Auswertung."],
  ])
  .gls([
    ["Panel", "Wiederholte Befragung derselben Personen."],
    ["Omnibus", "Befragung mehrerer Themen im Auftrag verschiedener Unternehmen."],
    ["Validität", "Gültigkeit einer Messung."],
    ["Signifikanz", "Statistische Bedeutsamkeit über den Zufall hinaus."],
    ["Grundgesamtheit", "Alle Elemente, über die eine Aussage getroffen werden soll."],
    ["Stichprobe", "Teilmenge der Grundgesamtheit."],
    ["Insight", "Tieferes Verständnis unausgesprochener Bedürfnisse."],
  ])
  .mc("Welche Maßnahme gehört zur Sekundärforschung?", "Internetrecherche", ["Gruppendiskussion", "Einzelinterview", "Face-to-face-Befragung", "Online-Befragung"])
  .mc("Welche Definition beschreibt eine Panel-Befragung?", "Dauerhafte, wiederkehrende Befragung derselben Zielpersonen", ["Befragung im öffentlichen Verkehrsmittel", "Befragung mit Bildern", "Kombinierte Befragung mehrerer Auftraggeber", "Einmalige Telefonbefragung"])
  .mc("Welche Definition beschreibt eine Omnibus-Befragung?", "Kombinierte Befragung im Auftrag mehrerer Unternehmen", ["Wiederholte Befragung derselben Personen", "Befragung zufällig ausgewählter Personen im Bus", "Befragung mit Comics", "Eine Gruppendiskussion"])
  .mc("Welche Aussage zur Repräsentativität ist zutreffend?", "Die Stichprobe ist ein verkleinertes, strukturgleiches Abbild der Grundgesamtheit.", ["Die Stichprobe umfasst mindestens 1.000 Personen.", "Es werden mindestens 3 % der Grundgesamtheit befragt.", "Männer und Frauen sind gleich verteilt.", "Die Grundgesamtheit ist ein Abbild der Stichprobe."])
  .mc("Ein Interviewer soll eine bestimmte Anzahl Personen mit vorgegebenen Merkmalen befragen, ist bei der Auswahl aber frei. Welches Verfahren?", "Quotenauswahl", ["Zufallsauswahl", "Klumpenauswahl", "Random-Route-Verfahren", "Listenverfahren"])
  .mc("Welches Merkmal ist ein Vorteil offener Interviews?", "Hohe Flexibilität", ["Feste Fragebogenabfolge", "Multiple-Choice-Vorgaben", "Schnelle Auswertung", "Leichte Vergleichbarkeit"])
  .mc("Welche Aussage kennzeichnet einen Testmarkt?", "Geografisch begrenztes Gebiet", ["Unbegrenzte Zahl von Marktteilnehmern", "Experiment der Sekundärforschung", "Nicht repräsentative Kaufkraft", "Nur Onlinekäufer"])
  .mc("Welches Zielgruppenmerkmal ist soziodemografisch?", "Lebensalter", ["Lebensstil", "Einkaufsstättenwahl", "Qualitätsbewusstsein", "Markentreue"])
  .mc("Was beschreibt der Begriff Insight?", "Bedürfnisse und Motive von Menschen", ["Geplante Käufe einer Zielgruppe", "Werbeausgaben der Konkurrenz", "Geheime Strategien", "Die Erfassung neuronaler Vorgänge"])
  .mc("Welcher Weg wird bei der Konkurrenzanalyse NICHT empfohlen?", "Schriftlich bei Konkurrenten nach Umsätzen fragen", ["Werbeaufkommen messen", "Testkäufe am POS", "Geschäftsberichte analysieren", "Verbraucher befragen"])
  .match("Ordnen Sie jeden Fachbegriff der Erklärung zu.", [
    ["Panel-Befragung", "Wiederholtes Befragen derselben Personen"],
    ["Omnibus-Befragung", "Mehrthemenbefragung"],
    ["Validität", "Gültigkeit nachweisbar"],
    ["Signifikanz", "Ergebnis liegt über der Zufallswahrscheinlichkeit"],
  ])
  .match("Ordnen Sie jedes Zielgruppenmerkmal der Kategorie zu.", [
    ["Alter", "soziodemografisch"],
    ["Lebensstil", "psychografisch"],
    ["Markentreue", "verhaltensbezogen"],
    ["Wohnort", "geografisch"],
  ])
  .tf("Qualitative Forschung arbeitet meist mit großen Stichproben.", false)
  .tf("Eine Gruppendiskussion ist Primärforschung.", true)
  .cloze("Bei der [[Sekundärforschung]] werden vorhandene Daten ausgewertet, bei der [[Primärforschung]] neue Daten erhoben.")
  .done();

export default [
  { file: "mako/struktur.json", bundle: struktur },
  { file: "mako/lf1-branche.json", bundle: { items: [br] } },
  { file: "mako/lf1-marketing.json", bundle: { items: [mk] } },
  { file: "mako/lf1-ci.json", bundle: { items: [ci] } },
  { file: "mako/lf4-briefing.json", bundle: { items: [bf] } },
  { file: "mako/lf4-marktforschung.json", bundle: { items: [mf] } },
];
