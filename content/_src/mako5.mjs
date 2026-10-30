import { topic, V } from "./dsl.mjs";

const SRC = "MaKo Prüfungstraining (eigene Aufgaben im IHK-Niveau, Rahmen: FAMK/Zweitschatz u. a.)";
const T = (k, part) => topic(k, { part, src: SRC });
const mcs = (t, rows, o) => { for (const [q, r, w, e] of rows) { t.mc(q, r, w, { ...(o ?? {}), ...(e ? { e } : {}) }); if (typeof r === "string" && q.length < 220) t.card(q.replace(/\?$/, "?"), r); } return t; };

/* ================= Marketing & Strategie ================= */
const ms = T("mako-ex-marketing", 1);
mcs(ms, [
  ["Ein Unternehmen verkauft ein bewährtes Produkt jetzt auch in Österreich. Welche Marktfeldstrategie nach Ansoff liegt vor?", "Marktentwicklung", ["Marktdurchdringung", "Produktentwicklung", "Diversifikation"]],
  ["Ein Hersteller von Zahnbürsten bringt erstmals Mundspülungen heraus (neues Produkt, neuer Markt). Welche Strategie?", "Diversifikation", ["Marktdurchdringung", "Marktentwicklung", "Produktentwicklung"]],
  ["Ein Café erhöht durch Stempelkarten die Besuchshäufigkeit seiner Bestandskunden. Welche Strategie?", "Marktdurchdringung", ["Marktentwicklung", "Produktentwicklung", "Diversifikation"]],
  ["Ein Produktbereich mit niedrigem Marktwachstum und hohem relativem Marktanteil ist in der BCG-Matrix …", "eine Cash Cow – Gewinne abschöpfen.", ["ein Star – investieren.", "ein Question Mark – selektiv investieren.", "ein Poor Dog – desinvestieren."]],
  ["Ein Produktbereich mit hohem Marktwachstum und niedrigem relativem Marktanteil ist …", "ein Question Mark.", ["eine Cash Cow.", "ein Poor Dog.", "ein Star."]],
  ["Welche Normstrategie empfiehlt die BCG-Matrix für Poor Dogs?", "Desinvestition bzw. Rückzug", ["Hohe Investitionen", "Gewinne abschöpfen und weiter ausbauen", "Preissenkung bei gleicher Qualität"]],
  ["Welche Phase des Produktlebenszyklus ist durch stark steigende Umsätze und beginnende Gewinne gekennzeichnet?", "Wachstumsphase", ["Einführungsphase", "Sättigungsphase", "Rückgangsphase"]],
  ["In der Sättigungsphase sinken die Umsatzzuwächse. Welche Maßnahme ist sinnvoll?", "Relaunch bzw. Produktvariation und Preispflege", ["Aufbau der ersten Distribution", "Hohe Einführungswerbung", "Sofortige Produkteinführung in neuen Märkten ohne Marktforschung"]],
  ["Welche Strategie nach Porter setzt auf möglichst niedrige Kosten und Preise?", "Kostenführerschaft", ["Differenzierung", "Nischenstrategie", "Imitation"]],
  ["Ein Anbieter konzentriert sich auf ein sehr kleines Marktsegment mit speziellen Bedürfnissen. Welche Strategie?", "Nischenstrategie (Konzentration)", ["Kostenführerschaft", "Massenmarktstrategie", "Preisstrategie"]],
  ["Welche Aussage zur SWOT-Analyse ist zutreffend?", "Stärken und Schwächen betreffen das Unternehmen, Chancen und Risiken das Umfeld.", ["Chancen und Risiken betreffen das Unternehmen intern.", "Stärken sind externe Faktoren.", "Die SWOT betrachtet nur Wettbewerber."]],
  ["Eine Agentur nutzt ihre starke Kreativabteilung (Stärke), um von wachsender Nachfrage nach Videocontent (Chance) zu profitieren. Welche Strategieart?", "SO-Strategie (Stärken nutzen, Chancen ergreifen)", ["WT-Strategie", "WO-Strategie", "ST-Strategie"]],
  ["Welcher Begriff beschreibt die Aufteilung eines Marktes in möglichst homogene Käufergruppen?", "Marktsegmentierung", ["Diversifikation", "Positionierung", "Preisdifferenzierung"]],
  ["Was ist das Ziel der Positionierung einer Marke?", "Eine unverwechselbare Stellung im Vergleich zum Wettbewerb in den Köpfen der Zielgruppe aufbauen.", ["Möglichst viele Medien nutzen.", "Den Preis möglichst niedrig halten.", "Die Mitarbeiter motivieren."]],
  ["Welches Instrument gehört zur Produktpolitik?", "Verpackungsgestaltung", ["Mengenrabatt", "Lieferbedingungen", "Messeauftritt"]],
  ["Welches Instrument gehört zur Distributionspolitik?", "Wahl des Absatzkanals (z. B. eigener Onlineshop)", ["Skontogewährung", "Slogan-Entwicklung", "Produktgarantie"]],
  ["Welches Instrument gehört zur Kontrahierungspolitik?", "Preis- und Rabattgestaltung", ["Pressemitteilung", "Verpackungsdesign", "Lagerhaltung"]],
  ["Welches Instrument gehört zur Kommunikationspolitik?", "Sponsoring", ["Zahlungsziele", "Sortimentsbreite", "Logistik"]],
  ["Ein Kunde möchte Produkte nur über ausgewählte Fachhändler anbieten. Welche Distributionsintensität?", "Selektive Distribution", ["Intensive Distribution", "Exklusive Distribution", "Direktvertrieb"]],
  ["Ein Hersteller verkauft über seinen eigenen Onlineshop und über Amazon. Wie nennt man das?", "Multi-Channel-Vertrieb", ["Franchising", "Kommissionshandel", "Reiner Direktvertrieb"]],
  ["Welche Preisstrategie liegt vor: Ein neues Produkt wird zunächst sehr teuer angeboten und später günstiger?", "Skimming (Abschöpfung)", ["Penetration", "Bündelpreis", "Konkurrenzpreis"]],
  ["Ein Streaming-Anbieter startet mit einem sehr niedrigen Einstiegspreis, um schnell viele Kunden zu gewinnen. Welche Strategie?", "Penetrationsstrategie", ["Skimming", "Premiumstrategie", "Hochpreisstrategie"]],
  ["Ein Kino bietet Dienstags ermäßigte Preise. Welche Form der Preisdifferenzierung?", "Zeitliche Preisdifferenzierung", ["Räumliche Preisdifferenzierung", "Personelle Preisdifferenzierung", "Mengenrabatt"]],
  ["Welche Aussage zum Markenbegriff ist richtig?", "Eine Marke kennzeichnet Produkte und unterscheidet sie von denen anderer Anbieter.", ["Eine Marke ist immer ein Gütesiegel.", "Marken dürfen nur Textmarken sein.", "Marken gelten nur für Luxusprodukte."]],
  ["Ein Konzern vermarktet Joghurt, Müsli und Milch unter dem Firmennamen. Welche Markenstrategie?", "Dachmarkenstrategie", ["Einzelmarkenstrategie", "Mehrmarkenstrategie", "Handelsmarkenstrategie"]],
  ["Ein Hersteller führt für Shampoo drei eigenständige Marken mit unterschiedlichem Image. Welche Strategie?", "Mehrmarkenstrategie", ["Dachmarkenstrategie", "Familienmarkenstrategie", "Handelsmarkenstrategie"]],
  ["Was versteht man unter einem Markentransfer?", "Die Übertragung einer erfolgreichen Marke auf neue Produkte.", ["Den Verkauf der Marke an einen Handelskonzern.", "Die Umbenennung einer Marke.", "Den Verzicht auf eine Marke."]],
  ["Welches Merkmal kennzeichnet einen Verkäufermarkt?", "Die Nachfrage übersteigt das Angebot.", ["Das Angebot übersteigt die Nachfrage.", "Es herrscht Preiskampf.", "Der Kunde ist König."]],
  ["Welche Aussage zu 7-P im Dienstleistungsmarketing ist richtig?", "Zusätzlich zu den 4 P kommen People, Process und Physical Evidence hinzu.", ["Zusätzlich zu den 4 P kommen nur Personal und Price.", "Die 7 P gelten nur für Produkte.", "Die 7 P ersetzen den Marketing-Mix."]],
]);
ms.tf("Die Marktdurchdringung ist die riskanteste Marktfeldstrategie nach Ansoff.", false, { e: "Das ist die Diversifikation." })
  .tf("Ein Star der BCG-Matrix erfordert hohe Investitionen, um den Marktanteil zu halten.", true)
  .tf("Marketing ist ein Synonym für Werbung.", false)
  .tf("Der Produktlebenszyklus gilt nur für Dienstleistungen.", false)
  .tf("Die Handelsmarke gehört dem Handelsunternehmen.", true)
  .tf("Skimming-Strategien sind besonders bei Innovationen mit Alleinstellungsmerkmal verbreitet.", true)
  .match("Ordnen Sie jede BCG-Kategorie ihrer Merkmalskombination zu.", [
    ["Star", "hohes Marktwachstum, hoher relativer Marktanteil"],
    ["Cash Cow", "niedriges Marktwachstum, hoher relativer Marktanteil"],
    ["Question Mark", "hohes Marktwachstum, niedriger relativer Marktanteil"],
    ["Poor Dog", "niedriges Marktwachstum, niedriger relativer Marktanteil"],
  ])
  .match("Ordnen Sie jedes Beispiel der Marktfeldstrategie zu.", [
    ["Neue Sorte im bestehenden Markt", "Produktentwicklung"],
    ["Bestehendes Produkt in Spanien einführen", "Marktentwicklung"],
    ["Mehr Bestandskunden zu Wiederkäufen bewegen", "Marktdurchdringung"],
    ["Elektroautos statt Fahrrädern anbieten", "Diversifikation"],
  ])
  .order("Bringen Sie die Phasen des Produktlebenszyklus in die richtige Reihenfolge.", ["Einführung", "Wachstum", "Reife", "Sättigung", "Rückgang"], { d: 1 })
  .order("Bringen Sie den Marketingprozess in die richtige Reihenfolge.", ["Analyse (Markt, Wettbewerb, Unternehmen)", "Zielsetzung", "Strategieentwicklung", "Marketing-Mix festlegen", "Umsetzung und Kontrolle"], { d: 2 })
  .cloze("Beim [[Marktwachstum]] und dem relativen [[Marktanteil]] werden Produkte in der BCG-Matrix eingeordnet.")
  .cloze("Die Einführungsphase des Produktlebenszyklus ist durch hohe [[Werbeausgaben]] und noch geringe [[Gewinne]] geprägt.")
  .error("Welche Aussagen zum Marketing-Mix sind fehlerhaft?", [
    ["Zur Distributionspolitik gehört die Wahl der Absatzkanäle.", false],
    ["Zur Kontrahierungspolitik gehört die Verpackungsgestaltung.", true, "Die Verpackung gehört zur Produktpolitik."],
    ["Die Instrumente sollen aufeinander abgestimmt sein.", false],
    ["Die Kommunikationspolitik umfasst nur klassische Anzeigen.", true, "Sie umfasst alle Kommunikationsinstrumente."],
  ])
  .tcalc(
    "Ein Unternehmen setzt im Vorjahr {u0|eur} um. Das Marketingziel lautet +{g} % Umsatzwachstum. Welcher Umsatz soll im neuen Jahr erreicht werden?",
    "u0*(1+g/100)",
    { u0: V.int(1000000, 8000000, 100000), g: V.pick([10, 15, 20, 25]) },
    { unit: "€", steps: ["{u0|eur} · (1 + {g} %) = {result|eur}"] },
  )
  .tcalc(
    "Der Marktanteil eines Unternehmens beträgt {a} % bei einem Marktvolumen von {mv|eur} Mio. €. Wie hoch ist der Umsatz des Unternehmens (in Mio. €)?",
    "mv*a/100",
    { a: V.int(5, 30, 1), mv: V.int(100, 900, 50) },
    { unit: "Mio. €", steps: ["{mv|eur} · {a} % = {result} Mio. €"] },
  )
  .tcalc(
    "Der Umsatz eines Produkts stieg von {u1|eur} auf {u2|eur}. Berechnen Sie das Umsatzwachstum in Prozent.",
    "(u2-u1)/u1*100",
    { u1: V.int(400000, 900000, 50000), g: V.pick([8, 10, 12, 15, 20]), u2: V.expr("u1*(1+g/100)", 0) },
    { unit: "%", steps: ["({u2|eur} − {u1|eur}) : {u1|eur} · 100 = {result} %"] },
  )
  .tcalc(
    "Ein Händler kalkuliert den Bezugspreis {bp|eur} mit {hk} % Handlungskosten und {g} % Gewinn. Der Kunde erhält {r} % Rabatt auf den Listenpreis. Berechnen Sie den Barverkaufspreis (netto).",
    "bp*(1+hk/100)*(1+g/100)",
    { bp: V.int(20, 120, 5), hk: V.pick([20, 25, 30]), g: V.pick([10, 15, 20]), r: V.pick([5, 10]) },
    { unit: "€", steps: ["Selbstkosten = {bp|eur} · (1 + {hk} %)", "Barverkaufspreis = Selbstkosten · (1 + {g} %) = {result|eur}"] },
  )
  .done();

/* ================= Kommunikation & Konzept ================= */
const kk = T("mako-ex-kommunikation", 1);
mcs(kk, [
  ["Welche Maßnahme ist geeignet, wenn ein Unternehmen kurzfristig den Absatz steigern möchte?", "Consumer Promotion (z. B. Coupon-Aktion)", ["Corporate-Design-Relaunch", "Sponsoring eines Opernhauses", "Pressemitteilung zur Gründung"]],
  ["Ein Hersteller schult Verkäufer im Handel und stellt Displays bereit. Welches Instrument?", "Trade Promotion", ["Consumer Promotion", "Corporate Behaviour", "Sponsoring"]],
  ["Welches Ziel ist ein psychologisches (außerökonomisches) Kommunikationsziel?", "Die Markenbekanntheit in der Zielgruppe steigern", ["Den Umsatz um 12 % erhöhen", "Den Marktanteil auf 10 % erhöhen", "Die Gewinnmarge verbessern"]],
  ["Was beschreibt der Reason Why in der Copy-Strategie?", "Die Begründung bzw. den Beweis für das Nutzenversprechen", ["Den Ton der Anzeige", "Die Zielgruppe", "Das Mediabudget"]],
  ["Was beschreibt der Consumer Benefit?", "Das Nutzenversprechen aus Sicht des Konsumenten", ["Den Produktpreis", "Das Logo", "Die Mediaplanung"]],
  ["Was ist ein USP?", "Ein einzigartiges Verkaufsversprechen, das den Anbieter vom Wettbewerb abhebt.", ["Eine Zahlungsbedingung.", "Ein Medientyp.", "Ein Kundenbindungsprogramm."]],
  ["Ein Unternehmen sponsert den lokalen Fußballverein und erhält Bandenwerbung. Welches Instrument?", "Sponsoring", ["Public Relations", "Verkaufsförderung", "Direktmarketing"]],
  ["Ein Unternehmen lädt Journalisten zu einer Pressekonferenz ein. Welches Instrument?", "Public Relations", ["Sponsoring", "Product Placement", "Verkaufsförderung"]],
  ["Welche Eigenschaft ist typisch für Public Relations?", "Sie baut langfristig Vertrauen und Image auf.", ["Sie führt zu sofortigen Verkäufen.", "Sie ist für den Empfänger immer als Werbung erkennbar.", "Sie ist stets teurer als klassische Werbung."]],
  ["Welche Maßnahme ist Direktmarketing?", "Ein personalisiertes Mailing an ausgewählte Kunden", ["Eine Plakatwand", "Ein TV-Spot", "Ein Messestand"]],
  ["Ein Unternehmen platziert sein Produkt gegen Entgelt in einer Fernsehserie. Welches Instrument?", "Product Placement", ["Sponsoring", "Eventmarketing", "Direktmarketing"]],
  ["Welche Aussage zu Guerilla-Marketing ist richtig?", "Es nutzt überraschende, unkonventionelle Aktionen mit geringem Budget.", ["Es ist immer teurer als klassische Werbung.", "Es ist rechtlich stets unzulässig.", "Es setzt ausschließlich auf TV-Werbung."]],
  ["Welche Aussage zu Influencer-Marketing ist richtig?", "Werbliche Beiträge müssen als Werbung gekennzeichnet werden.", ["Kennzeichnung ist nur bei Nano-Influencern nötig.", "Eine Kennzeichnung schadet der Reichweite und ist verboten.", "Influencer unterliegen nicht dem UWG."]],
  ["Welche Aussage zur Suchmaschinenoptimierung (SEO) ist richtig?", "Sie verbessert die organische Platzierung in Suchergebnissen.", ["Sie ist eine bezahlte Anzeigenform.", "Sie ersetzt die Pressearbeit.", "Sie wird pro Klick abgerechnet."]],
  ["Welche Aussage zu SEA ist richtig?", "SEA umfasst bezahlte Anzeigen in Suchmaschinen, häufig mit Abrechnung pro Klick.", ["SEA verbessert die organische Platzierung.", "SEA ist ein Offlinemedium.", "SEA ist ausschließlich für B2C geeignet."]],
  ["Welche Stufe folgt im AIDA-Modell auf Interest?", "Desire", ["Action", "Attention", "Awareness"]],
  ["Welche Funktion hat die Headline einer Anzeige?", "Aufmerksamkeit wecken", ["Die Zahlungsbedingungen nennen", "Den Absender rechtlich ausweisen", "Das Mediabudget festlegen"]],
  ["Eine Kampagne soll auf allen Kanälen mit gleicher Botschaft und Optik erscheinen. Welches Prinzip?", "Integrierte Kommunikation", ["Differenzierte Werbung", "Guerilla-Marketing", "Preisdifferenzierung"]],
  ["Welche Form des Eventmarketings spricht ein breites Publikum an?", "Öffentliche (offene) Events", ["Interne Events", "Aufsichtsratssitzungen", "Betriebsversammlungen"]],
  ["Welche Messe richtet sich überwiegend an Fachbesucher?", "Fachmesse", ["Publikumsmesse", "Kirmes", "Flohmarkt"]],
  ["Welche Aussage zur Erfolgskontrolle von Kommunikation ist richtig?", "Sie sollte anhand vorher festgelegter Ziele und Kennzahlen (KPIs) erfolgen.", ["Sie ist nur nach der Kampagne sinnvoll.", "Sie ersetzt die Zieldefinition.", "Sie ist bei Online-Kampagnen nicht möglich."]],
  ["Was ist ein Pre-Test?", "Ein Test von Werbemitteln vor dem Einsatz", ["Ein Test nach der Kampagne", "Ein Test der Mediaplanung", "Ein Preis-Test im Handel"]],
  ["Was beschreibt der Begriff Recall?", "Ungestützte Erinnerung an Werbung oder Marke", ["Gestützte Wiedererkennung", "Reichweite eines Mediums", "Kaufabsicht"]],
  ["Welche Rolle hat die Tonality in der Copy-Strategie?", "Sie legt Tonlage und Stil der Kommunikation fest.", ["Sie bestimmt den Preis.", "Sie bestimmt die Mediagattung.", "Sie legt das Budget fest."]],
  ["Ein Claim soll …", "das Markenversprechen kurz und einprägsam ausdrücken.", ["die Produktionskosten beziffern.", "den rechtlichen Absender nennen.", "die Zielgruppe beschreiben."]],
  ["Welche Aussage beschreibt Corporate Behaviour?", "Das Verhalten eines Unternehmens und seiner Mitarbeiter gegenüber Kunden und Öffentlichkeit", ["Das visuelle Erscheinungsbild", "Die Pressearbeit", "Die Unternehmensfarbe"]],
  ["Welche Werbeaussage könnte irreführend sein?", "„Das beste Produkt der Welt – belegt durch nichts.“ (Alleinstellungsbehauptung ohne Beleg)", ["„Seit 1950 in Familienbesitz.“ (belegbar)", "„Jetzt 3 Monate Garantie.“ (Garantie existiert)", "„Preis ab 9,90 €.“ (Preis stimmt)"], "Alleinstellungsbehauptungen müssen belegbar sein (§ 5 UWG)."],
  ["Eine Zielgruppe wird nach Lebensstil und Werten beschrieben. Welche Merkmalsart?", "Psychografische Merkmale", ["Soziodemografische Merkmale", "Geografische Merkmale", "Verhaltensbezogene Merkmale"]],
  ["Welche Aussage zum Briefing ist richtig?", "Das Re-Briefing dient der schriftlichen Bestätigung des Auftragsverständnisses.", ["Das Re-Briefing ersetzt das Kundenbriefing.", "Das Re-Briefing erfolgt erst nach der Präsentation.", "Das Re-Briefing enthält nur das Budget."]],
]);
kk.tf("Verkaufsförderung wirkt vor allem langfristig auf das Image.", false)
  .tf("Public Relations richten sich an die Öffentlichkeit und Stakeholder.", true)
  .tf("Der Reason Why ist Teil der Copy-Strategie.", true)
  .tf("Eine SMART-Zielformulierung enthält einen Zeitbezug.", true)
  .tf("Eine Pressemitteilung ist kostenpflichtige Werbung.", false)
  .tf("Beim Sponsoring erhält der Sponsor Kommunikationsrechte als Gegenleistung.", true)
  .match("Ordnen Sie jedes Instrument seinem typischen Ziel zu.", [
    ["Verkaufsförderung", "kurzfristige Umsatzsteigerung"],
    ["Public Relations", "Vertrauen und Image"],
    ["Sponsoring", "Imagetransfer"],
    ["Direktmarketing", "individuelle Ansprache mit Response"],
    ["Eventmarketing", "emotionales Markenerlebnis"],
  ])
  .match("Ordnen Sie dem Instrument das Beispiel zu.", [
    ["Consumer Promotion", "Gutschein-Coupon im Supermarkt"],
    ["Trade Promotion", "Zweitplatzierung im Regal gegen Rabatt"],
    ["Staff Promotion", "Verkaufswettbewerb für den Außendienst"],
    ["Product Placement", "Marke im Spielfilm"],
  ])
  .match("Ordnen Sie jedem Medienbegriff die Beschreibung zu.", [
    ["Owned Media", "Eigene Kanäle wie Website und Newsletter"],
    ["Paid Media", "Bezahlte Werbeplätze wie Social Ads"],
    ["Earned Media", "Erwähnung durch Dritte ohne Bezahlung"],
    ["Shared Media", "Von Nutzern geteilte Inhalte in sozialen Netzwerken"],
  ])
  .order("Bringen Sie die Bestandteile eines Kommunikationskonzepts in die richtige Reihenfolge.", ["Situations- und Zielgruppenanalyse", "Kommunikationsziele", "Strategie und Botschaft", "Maßnahmen und Medien", "Budget, Zeitplan, Erfolgskontrolle"], { d: 2 })
  .order("Bringen Sie den Ablauf eines Agenturprojekts in die richtige Reihenfolge.", ["Kundenbriefing", "Re-Briefing", "Strategie und Konzept", "Kreation und Präsentation", "Produktion, Umsetzung und Controlling"], { d: 2 })
  .cloze("Der [[Reason Why]] liefert den Beweis für das Nutzenversprechen, die [[Tonality]] legt den Ton der Kommunikation fest.")
  .cloze("Die Abkürzung [[AIDA]] steht für Attention, Interest, [[Desire]] und Action.")
  .error("Welche Aussagen zu Kommunikationsinstrumenten sind fehlerhaft?", [
    ["Sponsoring ist eine Form der Verkaufsförderung für den Handel.", true, "Sponsoring ist ein eigenes Instrument."],
    ["Public Relations dienen dem Aufbau von Vertrauen.", false],
    ["Direktmarketing arbeitet mit anonymer Massenansprache ohne Response.", true, "Direktmarketing ist individuell und mit Response-Möglichkeit."],
    ["Verkaufsförderung kann sich an Konsumenten, Handel und eigene Mitarbeiter richten.", false],
  ])
  .tmc(
    "Für das Unternehmen {ctx.firma} soll {ctx.ziel}. Welches Instrument empfehlen Sie vorrangig?",
    "{ctx.richtig}",
    ["{ctx.w1}", "{ctx.w2}", "{ctx.w3}"],
    { ctx: V.pick([
      { firma: "eine Bio-Molkerei", ziel: "kurzfristig der Absatz im Handel steigen", richtig: "Consumer Promotion (Coupons, Probieraktion)", w1: "Corporate-Design-Relaunch", w2: "Sponsoring eines Opernhauses", w3: "Pressemitteilung zur Gründungsgeschichte" },
      { firma: "ein Maschinenbauer", ziel: "Kontakte zu Fachkunden angebahnt werden", richtig: "Auftritt auf einer Fachmesse", w1: "Plakatwerbung an Stadtbahnhaltestellen", w2: "Radiospot im Vorabendprogramm", w3: "Coupon-Aktion für Endverbraucher" },
      { firma: "ein Tierheim", ziel: "Vertrauen und Spenden gewonnen werden", richtig: "Public Relations und Direktmarketing (Spendenmailing)", w1: "Preisaktionen im Onlineshop", w2: "Verkaufsförderung im Handel", w3: "Guerilla-Marketing ohne Botschaft" },
      { firma: "ein Sportartikelhersteller", ziel: "das Markenimage als sportlich und erfolgreich aufgebaut werden", richtig: "Sponsoring von Vereinen und Athleten", w1: "Zahlungsbedingungen verbessern", w2: "Preisdifferenzierung", w3: "Kleinanzeigen in Lokalzeitungen" },
    ]) },
    { d: 2 },
  )
  .done();

/* ================= Mediaplanung ================= */
const me = T("mako-ex-media", 3);
mcs(me, [
  ["Welche Kennziffer zählt Mehrfachkontakte NICHT mit?", "Nettoreichweite", ["Bruttoreichweite", "Kontakte", "GRP"]],
  ["Eine Zielperson liest zwei Ausgaben derselben Zeitschrift. Wie viele Kontakte entstehen in der Bruttoreichweite, wie viele in der Nettoreichweite?", "2 Kontakte brutto, 1 Person netto", ["1 Kontakt brutto, 2 Personen netto", "2 Kontakte netto, 1 Person brutto", "Immer 1"]],
  ["Der Tausender-Kontaktpreis (TKP) …", "setzt die Kosten ins Verhältnis zu 1.000 Kontakten (Bruttoreichweite).", ["setzt die Kosten ins Verhältnis zur Auflage in Millionen.", "gibt die Reichweite in % an.", "misst die Affinität."]],
  ["Ein Medium A hat einen TKP von 20 €, Medium B von 28 €. Was ist richtig?", "A ist je 1.000 Kontakte günstiger.", ["B ist je 1.000 Kontakte günstiger.", "Beide sind gleich teuer.", "A erreicht automatisch mehr Zielpersonen."]],
  ["Der Affinitätsindex eines Magazins liegt bei 85. Was bedeutet das?", "Die Zielgruppe ist unterproportional vertreten.", ["Die Zielgruppe ist überproportional vertreten.", "Das Magazin erreicht 85 % der Zielgruppe.", "Die Zielgruppe entspricht exakt dem Bevölkerungsdurchschnitt."]],
  ["Welche Kennziffer misst die Streugenauigkeit eines Mediums?", "Affinität", ["Auflage", "Reichweite", "TKP"]],
  ["Der Werbedruck eines Mediaplans wird gemessen in …", "GRP (Gross Rating Points)", ["Prozent der Auflage", "Euro pro Kontakt", "Visits pro Tag"]],
  ["Ein Plan hat 120 GRP bei einer Reichweite von 40 %. Wie viele Kontakte pro Nutzer ergeben sich?", "3,0", ["0,3", "30", "4,8"]],
  ["Welche Abkürzung beschreibt in der Online-Werbung die Abrechnung pro 1.000 Einblendungen?", "CPM bzw. TKP", ["CPC", "CPV", "CPA"]],
  ["Welche Abrechnung erfolgt nur, wenn ein Nutzer auf die Anzeige klickt?", "CPC (Cost per Click)", ["CPM", "CPV", "TKP"]],
  ["Welche Abrechnung erfolgt nur bei einer abgeschlossenen Aktion (z. B. Kauf)?", "CPA (Cost per Action)", ["CPM", "CPC", "CPV"]],
  ["Was bedeutet CTR?", "Click-Through-Rate – Klicks im Verhältnis zu Impressionen", ["Cost-to-Revenue", "Content-Targeting-Rate", "Contact-Time-Ratio"]],
  ["Welche Kennzahl beschreibt die Zahl der tatsächlich erfolgten Werbemittel-Einblendungen online?", "Ad Impressions", ["Visits", "Page Impressions", "Unique User"]],
  ["Was versteht man unter Retargeting?", "Erneute Ansprache von Besuchern einer Website auf anderen Seiten", ["Das Löschen von Cookies", "Die Optimierung der Suchmaschinenplatzierung", "Das Messen der Reichweite einer Zeitung"]],
  ["Welche Aussage zu Programmatic Advertising ist richtig?", "Werbeplätze werden automatisiert und datengestützt in Echtzeit eingekauft.", ["Werbeplätze werden telefonisch verhandelt.", "Es betrifft nur Printmedien.", "Es ist eine Rabattform."]],
  ["Welches Medium bietet die höchste Reichweite in kurzer Zeit, ist aber kostenintensiv?", "Fernsehen", ["Fachzeitschrift", "Lokalzeitung", "Direktmailing"]],
  ["Welche Mediagattung eignet sich besonders für zeitlich flexible regionale Kampagnen mit niedrigem Budget?", "Hörfunk (Radio)", ["Kino", "Fachzeitschrift", "TV national"]],
  ["Welcher Vorteil gilt für Außenwerbung (OOH)?", "Hohe Präsenz im öffentlichen Raum, Dauerkontakt", ["Zielgenaue Einzelansprache", "Lange Textbotschaften", "Sehr niedrige Reichweite"]],
  ["Was ist ein Flight im Mediaplan?", "Eine zeitlich begrenzte, intensive Schaltungswelle", ["Eine Dauerschaltung", "Eine Rabattstaffel", "Eine Einkaufsprovision"]],
  ["Welche Phase gehört zur Mediaselektion?", "Auswahl der Werbeträger nach Kennziffern und Zielgruppe", ["Druckfreigabe", "Erstellen der Rechnung", "Beschriftung der Verpackung"]],
  ["Welches Instrument beschreibt Mediakennziffern wie Reichweite und Affinität für Printmedien in Deutschland?", "Die b4p (best for planning)", ["Der DAX", "Die GfK-Umfrage zur Konsumlaune", "Das Handelsregister"]],
  ["Welche Organisation prüft die Auflagen von Zeitschriften?", "IVW", ["AGOF", "GWA", "ADC"]],
  ["Welche Organisation erhebt Online-Reichweiten?", "AGOF", ["IVW", "ADC", "DPRG"]],
  ["Was versteht man unter dem intermedialen Vergleich?", "Den Vergleich verschiedener Mediengattungen", ["Den Vergleich von Titeln einer Gattung", "Den Vergleich von Preisen", "Den Vergleich von Zielgruppen"]],
  ["Was versteht man unter dem intramedialen Vergleich?", "Den Vergleich von Werbeträgern innerhalb einer Gattung", ["Den Vergleich von Gattungen", "Den Vergleich von Budgets", "Den Vergleich von Agenturen"]],
  ["Wofür steht AE-Provision?", "Provision der Agentur für die Vermittlung von Werbeaufträgen an Medien", ["Anzeigen-Entgelt-Prämie", "Aufschlag für Eilaufträge", "Auflagen-Erhöhung"]],
  ["Welche Wirkung hat ein Malstaffelrabatt?", "Der Preis sinkt mit der Zahl der Schaltungen.", ["Der Preis steigt mit jeder Schaltung.", "Es gibt nur Rabatt bei Sofortzahlung.", "Rabatt nur für Neukunden."]],
]);
me.tf("Die Bruttoreichweite kann größer sein als die Zielgruppe.", true)
  .tf("Der Affinitätsindex 100 bedeutet, dass die Zielgruppe im Medium durchschnittlich vertreten ist.", true)
  .tf("Der TKP wird immer auf die Nettoreichweite berechnet.", false, { e: "TKP bezieht sich auf Kontakte (Brutto); auf die Nettoreichweite bezieht sich der Tausender-Nutzer-Preis." })
  .tf("Earned Media sind bezahlte Werbeplätze.", false)
  .match("Ordnen Sie jede Abrechnungsform dem Maßstab zu.", [
    ["CPM", "pro 1.000 Einblendungen"],
    ["CPC", "pro Klick"],
    ["CPV", "pro Videoaufruf (View)"],
    ["CPA", "pro Aktion (z. B. Kauf)"],
  ])
  .match("Ordnen Sie jede Kennziffer der Formel zu.", [
    ["Kontakte pro Nutzer", "Bruttoreichweite : Nettoreichweite"],
    ["GRP", "Reichweite in % · Kontakte pro Nutzer"],
    ["Affinitätsindex", "Anteil ZG im Medium : Anteil ZG in Bevölkerung · 100"],
    ["CTR", "Klicks : Impressions · 100"],
  ])
  .order("Bringen Sie die Schritte der Mediaplanung in die richtige Reihenfolge.", ["Mediaziele festlegen", "Mediastrategie entwickeln", "Medien selektieren", "Streuplan erstellen", "Buchung und Kontrolle"], { d: 2 })
  .cloze("Der [[Tausender-Kontakt-Preis]] wird auf die Bruttoreichweite bezogen, der [[Tausender-Nutzer-Preis]] auf die Nettoreichweite.")
  .tcalc(
    "Eine Anzeige kostet {p|eur}. Die Bruttoreichweite beträgt {b|int} Kontakte. Berechnen Sie den TKP.",
    "p/b*1000",
    { p: V.int(10000, 60000, 2500), b: V.int(500000, 2500000, 100000) },
    { unit: "€", steps: ["TKP = Preis : Kontakte · 1.000 = {result|eur}"] },
  )
  .tcalc(
    "Kampagne: Reichweite {r} % der Zielgruppe, durchschnittlich {k} Kontakte pro erreichter Person. Berechnen Sie die GRP.",
    "r*k",
    { r: V.int(30, 80, 5), k: V.pick([2, 2.5, 3, 3.5, 4, 5]) },
    { unit: "GRP", dec: 0, steps: ["GRP = Reichweite % · Kontakte = {r} · {k} = {result}"] },
  )
  .tcalc(
    "Eine Zeitschrift hat in der Zielgruppe einen Nutzeranteil von {a} %, die Zielgruppe macht {b} % der Bevölkerung aus. Wie hoch ist der Affinitätsindex?",
    "a/b*100",
    { a: V.pick([12, 15, 18, 20, 24, 30]), b: V.pick([10, 12, 15, 20]) },
    { unit: "", dec: 0, steps: ["{a} : {b} · 100 = {result}"] },
  )
  .tcalc(
    "Ein Display-Banner erzielt {i|int} Impressions und {c|int} Klicks. Der Preis beträgt {p|eur} CPM. Berechnen Sie die Kosten der Schaltung.",
    "i/1000*p",
    { i: V.int(200000, 1500000, 50000), c: V.int(1000, 6000, 500), p: V.dec(3, 12, 2) },
    { unit: "€", steps: ["Kosten = Impressions : 1.000 · CPM = {result|eur}"] },
  )
  .tcalc(
    "Eine Kampagne kostet {k|eur} und erzielt {c|int} Klicks. Berechnen Sie den Preis pro Klick (CPC).",
    "k/c",
    { k: V.int(2000, 20000, 500), c: V.int(4000, 20000, 1000) },
    { unit: "€", steps: ["CPC = {k|eur} : {c|int} = {result|eur}"] },
  )
  .tcalc(
    "Eine Zeitung veröffentlicht eine Anzeige mit {h} mm Höhe und {sp} Spalten. Millimeterpreis {mm|eur}, AE-Provision {ae} %, Mal-Rabatt {r} % auf den Bruttopreis. Berechnen Sie den Preis nach AE-Provision und Rabatt (erst Rabatt, dann AE-Provision).",
    "h*sp*mm*(1-r/100)*(1-ae/100)",
    { h: V.int(60, 200, 10), sp: V.int(2, 4, 1), mm: V.dec(3, 8, 2), ae: V.pick([10, 15]), r: V.pick([5, 8, 10]) },
    { unit: "€", steps: ["Brutto = {h} · {sp} · {mm|eur}", "− {r} % Rabatt und − {ae} % AE = {result|eur}"] },
  )
  .done();

/* ================= Umsetzung, Produktion & Recht ================= */
const um = T("mako-ex-umsetzung", 3);
mcs(um, [
  ["Welche Datei ist für den Druck am besten geeignet?", "Ein PDF/X mit eingebetteten Schriften, CMYK, Beschnitt", ["Ein Word-Dokument mit Systemschriften", "Ein Bildschirmfoto", "Eine PowerPoint-Datei mit RGB-Bildern"]],
  ["Wozu dient ein Proof?", "Zur farbverbindlichen Freigabe vor dem Druck", ["Zur Berechnung der Auflage", "Zur Rechnungsstellung", "Zur Terminplanung"]],
  ["Welche Auflösung ist für Druckbilder üblich?", "300 dpi", ["72 dpi", "20 dpi", "10 dpi"]],
  ["Welches Farbmodell eignet sich für den Offsetdruck?", "CMYK", ["RGB", "Pantone Web", "HEX"]],
  ["Wie groß ist DIN A5?", "148 × 210 mm", ["210 × 297 mm", "105 × 148 mm", "99 × 210 mm"]],
  ["Wie groß ist DIN lang?", "99 × 210 mm", ["105 × 148 mm", "148 × 210 mm", "210 × 297 mm"]],
  ["Was bedeutet 4/4-farbig?", "Vorder- und Rückseite in CMYK bedruckt", ["Vorderseite vierfarbig, Rückseite unbedruckt", "Vier Seiten, ein Farbton", "Vier Sonderfarben"]],
  ["Was ist ein Beschnitt?", "Überstand über das Endformat, der Schnittungenauigkeiten ausgleicht", ["Ein Falz", "Ein Druckkontrollstreifen", "Eine Papiersorte"]],
  ["Welche Veredelung macht Oberflächen hochglänzend und kratzfest?", "UV-Lack", ["Prägung", "Perforation", "Heißfolie ohne Lack"]],
  ["Welches Druckverfahren ist für sehr hohe Zeitschriftenauflagen typisch?", "Tiefdruck", ["Digitaldruck", "Siebdruck", "Tampondruck"]],
  ["Welches Druckverfahren eignet sich für Kugelschreiber und Tassen?", "Tampondruck bzw. Siebdruck", ["Offsetdruck", "Tiefdruck", "Digitaldruck auf Rolle"]],
  ["Was bedeutet Grammatur?", "Das Papiergewicht in g/m²", ["Die Papierfarbe", "Die Papierstärke in mm", "Die Laufrichtung"]],
  ["Was kennzeichnet das FSC-Siegel?", "Papier aus nachhaltiger Forstwirtschaft", ["Recyclingpapier ausschließlich", "Hochweiße Papiere", "Säurefreies Papier"]],
  ["Was versteht man unter Preflight?", "Technische Prüfung der Druckdaten vor der Produktion", ["Ein Farbprofil", "Eine Rechnung", "Ein Verteilerplan"]],
  ["Was gehört zur Pre-Production eines Videos?", "Konzept, Drehbuch, Casting, Locationsuche", ["Schnitt und Farbkorrektur", "Tonmischung", "Ausspielung im Web"]],
  ["Was gehört zur Post-Production eines Videos?", "Schnitt, Farbkorrektur, Tonbearbeitung", ["Casting", "Drehbuch", "Locationsuche"]],
  ["Was bedeutet KVA?", "Kostenvoranschlag", ["Kreativverteilungsabsprache", "Kundenverwaltungsakte", "Kontrollvorlage für Auftrag"]],
  ["Der Kunde ändert nach Freigabe das Format. Was ist zu tun?", "Mehrkosten und Termine prüfen und eine Änderung schriftlich freigeben lassen", ["Änderung stillschweigend umsetzen", "Auftrag ohne Rückfrage kündigen", "Rechnung unverändert lassen"]],
  ["Welcher Vertrag liegt vor, wenn eine Agentur die Produktion eines Spots zum Festpreis übernimmt?", "Werkvertrag", ["Dienstvertrag", "Mietvertrag", "Leihvertrag"]],
  ["Wer ist Urheber eines Fotos?", "Der Fotograf als natürliche Person", ["Der Auftraggeber", "Die Agentur", "Das abgebildete Model"]],
  ["Welche Rechte erwirbt die Agentur für die Nutzung des Fotos?", "Nutzungsrechte nach Umfang, Dauer, Medium und Gebiet", ["Das Urheberrecht", "Das Eigentum an der Bildidee", "Keine Rechte"]],
  ["Ein Model ist erkennbar abgebildet. Was ist für die Veröffentlichung erforderlich?", "Eine Einwilligung (Model Release)", ["Keine Einwilligung", "Nur die Zustimmung der Agentur", "Nur eine Vergütung ohne Vertrag"]],
  ["Wer ist für Kinderfotos in Werbung einwilligungsbefugt?", "Die Erziehungsberechtigten (ggf. mit Einwilligung des Kindes)", ["Der Fotograf", "Die Agentur", "Der Auftraggeber"]],
  ["Welche Zeichen schützen die Marke?", "®/™ weisen auf Markenschutz hin; Wirkung folgt aus der Eintragung bzw. Benutzung.", ["© schützt die Marke", "Patentzeichen schützen die Marke", "Nur Farben sind schützbar"]],
  ["Welches Schutzrecht schützt ein Logo als Zeichen im Wettbewerb?", "Markenrecht", ["Patentrecht", "Gebrauchsmusterrecht", "Datenschutzrecht"]],
  ["Was ist eine strafbewehrte Unterlassungserklärung?", "Verpflichtung, ein Verhalten zu unterlassen, mit Vertragsstrafe bei Verstoß", ["Eine Rechnung", "Eine Genehmigung der Behörde", "Ein Vertrag über Nutzungsrechte"]],
  ["Wer haftet gegenüber dem Kunden, wenn die Agentur ein Foto ohne Lizenz nutzt?", "Die Agentur kann haftbar sein; der Kunde ggf. mit.", ["Nur der Fotograf", "Niemand", "Nur die Druckerei"]],
  ["Welche Pflicht besteht bei Newsletter-Versand per E-Mail?", "Vorherige Einwilligung (Opt-in) und Abmeldemöglichkeit", ["Keine besonderen Pflichten", "Nur Hinweis im Impressum", "Nur Genehmigung der Behörde"]],
  ["Wie muss ein Influencer entgeltliche Kooperation kennzeichnen?", "Deutlich erkennbar, z. B. #Werbung oder #Anzeige", ["Gar nicht", "Nur im Impressum", "Nur in der Bio"]],
]);
um.tf("Für Dreharbeiten mit erkennbaren Personen im öffentlichen Raum benötigt man in jedem Fall deren Einwilligung.", false, { e: "Es kommt auf den Einzelfall an (Zufallsaufnahmen, Beiwerk, Personen der Zeitgeschichte); bei gezielter Abbildung ist Einwilligung nötig." })
  .tf("Die Pre-Production umfasst Konzept, Casting und Planung.", true)
  .tf("Beim Offsetdruck wird indirekt über ein Gummituch gedruckt.", true)
  .tf("Grammatur und Format sind dasselbe.", false)
  .match("Ordnen Sie jede Produktionsphase der Tätigkeit zu.", [
    ["Pre-Production", "Konzeption und Casting"],
    ["Production", "Dreharbeiten"],
    ["Post-Production", "Schnitt und Vertonung"],
  ])
  .match("Ordnen Sie jedes Rechtsgebiet dem Schutzgegenstand zu.", [
    ["Markenrecht", "Zeichen zur Unterscheidung von Waren/Dienstleistungen"],
    ["Patentrecht", "Technische Erfindung"],
    ["Designrecht", "Gestaltung eines Erzeugnisses"],
    ["Urheberrecht", "Werk als persönliche geistige Schöpfung"],
  ])
  .match("Ordnen Sie jedem Format die Maße zu.", [
    ["DIN A3", "297 × 420 mm"],
    ["DIN A4", "210 × 297 mm"],
    ["DIN A5", "148 × 210 mm"],
    ["DIN A6", "105 × 148 mm"],
  ])
  .order("Bringen Sie die Schritte eines Druckauftrags in die richtige Reihenfolge.", ["Angebot und Auftrag", "Datenanlieferung und Preflight", "Proof und Druckfreigabe", "Druck", "Weiterverarbeitung und Versand"], { d: 2 })
  .order("Bringen Sie die Phasen einer Videoproduktion in die richtige Reihenfolge.", ["Konzept und Drehbuch", "Casting und Location", "Dreh", "Schnitt und Farbkorrektur", "Abnahme und Auslieferung"], { d: 2 })
  .cloze("Ein Foto ist urheberrechtlich geschützt; der Urheber überträgt der Agentur [[Nutzungsrechte]].")
  .cloze("Die [[Pre-Production]] ist die Planungsphase einer Filmproduktion, die [[Post-Production]] die Nachbearbeitung.")
  .tcalc(
    "Eine Agentur kalkuliert einen Auftrag: {h} Stunden Kreation zu {s|eur} extern, Fremdleistung Druck {f|eur} netto mit {sf} % Service Fee. Berechnen Sie den Netto-Angebotspreis.",
    "h*s+f*(1+sf/100)",
    { h: V.int(8, 40, 2), s: V.int(90, 130, 5), f: V.int(1500, 8000, 250), sf: V.pick([10, 15, 20]) },
    { unit: "€", steps: ["Kreation = {h} · {s|eur}", "Fremdleistung inkl. Service Fee = {f|eur} · (1 + {sf} %)", "Summe = {result|eur}"] },
  )
  .tcalc(
    "Eine Broschüre wird {a|int} Mal gedruckt: Druckkosten {k1|eur} je 1.000 Exemplare, Papier {k2|eur} je 1.000 Exemplare, Weiterverarbeitung (Falzen und Heften) {k3|eur} je 1.000, einmalige Plattenkosten {r|eur}. Berechnen Sie die Gesamtkosten.",
    "a/1000*(k1+k2+k3)+r",
    { a: V.int(2000, 20000, 1000), k1: V.int(40, 90, 5), k2: V.int(20, 50, 5), k3: V.int(10, 30, 2), r: V.int(100, 400, 20) },
    { unit: "€", steps: ["({k1|eur} + {k2|eur} + {k3|eur}) · {a|int} : 1.000 + {r|eur} = {result|eur}"] },
  )
  .tcalc(
    "Ein A4-Mailing (210 × 297 mm) mit {g} g/m² wird {a|int} Mal gedruckt. Wie viel Papier in kg wird benötigt (Fläche je Blatt 0,06237 m²; Gewicht = Fläche · Grammatur · Auflage)?",
    "0.06237*g*a/1000",
    { g: V.pick([80, 90, 100, 135, 170]), a: V.int(2000, 20000, 1000) },
    { unit: "kg", dec: 0, steps: ["0,06237 m² · {g} g/m² · {a|int} Blatt : 1.000 = {result} kg"] },
  )
  .tcalc(
    "Eine Plakatserie hat {a} Plakate im Format DIN A1 (0,594 × 0,841 m). Kosten je m² Druckfläche {p|eur}. Wie hoch sind die Druckkosten (Fläche = 0,4996 m²)?",
    "a*0.4996*p",
    { a: V.int(20, 200, 10), p: V.int(8, 24, 1) },
    { unit: "€", steps: ["{a} · 0,4996 m² · {p|eur} = {result|eur}"] },
  )
  .done();

export default [
  { file: "mako/ex-marketing.json", bundle: { items: [ms.done()] } },
  { file: "mako/ex-kommunikation.json", bundle: { items: [kk.done()] } },
  { file: "mako/ex-media.json", bundle: { items: [me.done()] } },
  { file: "mako/ex-umsetzung.json", bundle: { items: [um.done()] } },
];
