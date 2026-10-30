import { topic } from "./dsl.mjs";

const SRC = "Prüfungsstil (eigene Fallsituationen, angelehnt an IHK-Aufbau)";

/* ======================= Teil 1: Fallsituationen (je 20 Punkte) ======================= */
const t1 = topic("mako-pf-teil1", { part: 1, src: SRC });

t1.caseq(
  "Die Agentur Kreativkontor GmbH betreut den Neukunden „Rheinbrot“, eine regionale Bäckereikette mit 40 Filialen zwischen Köln und Düsseldorf. Rheinbrot möchte jüngere Kundschaft (18–29 Jahre) gewinnen, da die Stammkundschaft überwiegend über 55 ist. Das Budget beträgt 120.000 €, die Kampagne soll im Frühjahr starten. Die Marke ist regional bekannt (gestützte Bekanntheit 62 %), das Image gilt als „solide, aber altmodisch“. Wettbewerber sind Discounter-Backstationen und Ketten wie Backwerk.",
  [
    ["Entwickeln Sie anhand von vier Kriterien eine SWOT-Analyse für Rheinbrot (je ein Beispiel pro Feld).", 5, "Stärken: hohe regionale Bekanntheit (62 %), dichtes Filialnetz. Schwächen: veraltetes Image, überalterte Stammkundschaft. Chancen: wachsender Trend zu regionalen/handwerklichen Produkten, junge Zielgruppe offen für Social Media. Risiken: Discounter-Backstationen mit niedrigen Preisen, steigende Rohstoff-/Energiekosten.", ["je ein Beispiel Stärke/Schwäche intern", "je ein Beispiel Chance/Risiko extern", "Zuordnung intern/extern korrekt", "Bezug zum Fall"]],
    ["Formulieren Sie ein SMART-Kommunikationsziel für die Kampagne.", 4, "Die gestützte Bekanntheit bei 18–29-Jährigen im Verbreitungsgebiet soll bis Ende des zweiten Quartals von 40 % auf 55 % steigen (gemessen per Online-Befragung).", ["spezifisch (Zielgruppe/Größe)", "messbar (Kennzahl)", "terminiert", "realistisch/außerökonomisch"]],
    ["Schlagen Sie drei geeignete Kommunikationsinstrumente für die junge Zielgruppe vor und begründen Sie Ihre Auswahl.", 6, "Social-Media-Kampagne (Instagram/TikTok mit Influencern) – hohe Reichweite, günstige Zielgruppenansprache; Verkaufsförderung (Coupon/App-Rabatt für die erste Bestellung) – Kaufanreiz, messbar; Eventmarketing/Sampling vor Hochschulen – direkter Produktkontakt, emotionale Bindung. Alternativ: Out-of-Home-Plakate an Haltestellen.", ["drei Instrumente genannt", "je Begründung mit Zielgruppenbezug", "Passung zum Budget", "Mix aufeinander abgestimmt"]],
    ["Nennen Sie zwei Kennzahlen, mit denen Sie den Erfolg der Social-Media-Aktivitäten messen.", 5, "Reichweite/Impressions, Engagement Rate (Likes, Kommentare, Shares), Klickrate (CTR) auf den Coupon, Einlösequote der Coupons, Follower-Zuwachs.", ["zwei Kennzahlen korrekt", "Bezug zum Ziel", "kurze Erläuterung"]],
  ],
);

t1.caseq(
  "Das Start-up „FitBox“ vertreibt Fitness-Trainingsboxen im Abo (monatlich 39,90 € inkl. USt). Die Agentur Pixelwerk soll ein Kommunikationskonzept für den Markteintritt in Deutschland entwickeln. Zielgruppe: Berufstätige zwischen 25 und 40, urban, gesundheitsbewusst, wenig Zeit. Das Produkt ist neu; die Marke ist unbekannt. Das Budget für die ersten sechs Monate beträgt 250.000 €.",
  [
    ["Stellen Sie die Zielgruppe durch je zwei soziodemografische und zwei psychografische Merkmale dar.", 4, "Soziodemografisch: Alter 25–40, berufstätig, städtisches Wohnumfeld, mittleres bis höheres Einkommen. Psychografisch: gesundheitsbewusst, zeitbewusst/effizienzorientiert, technikaffin, Wunsch nach Selbstoptimierung.", ["zwei soziodemografische", "zwei psychografische", "Abgrenzung korrekt"]],
    ["Erläutern Sie, in welcher Phase des Produktlebenszyklus sich FitBox befindet, und leiten Sie zwei kommunikative Konsequenzen ab.", 5, "Einführungsphase: Bekanntheit ist gering. Konsequenzen: hohe Werbeintensität zum Aufbau von Bekanntheit, Probierangebote (Testbox, Rabatt für Neukunden), Aufbau von Vertrauen durch Testimonials/Bewertungen.", ["Phase korrekt", "zwei Konsequenzen", "Bezug zum Fall"]],
    ["Skizzieren Sie einen Kommunikationsmix für den Markteintritt (mindestens drei Instrumente) mit Zielen je Instrument.", 7, "Online-Marketing (SEA/Social Ads) – Reichweite und Leads; Influencer-Marketing – Glaubwürdigkeit und Bekanntheit; Public Relations (Fitness-/Lifestyle-Medien) – Vertrauen; Sampling/Testbox – Kaufanreiz. Integriert: gleiche Botschaft und Optik (Key Visual, Claim).", ["mindestens drei Instrumente", "je Ziel", "Abstimmung/integriert", "Budgetbezug"]],
    ["Formulieren Sie einen Claim und begründen Sie ihn in zwei Sätzen.", 4, "Claim z. B.: „FitBox – 20 Minuten. Überall. Fit.“ Begründung: Spricht Zeitknappheit der Zielgruppe an (Nutzenversprechen) und ist kurz, einprägsam und markenfähig.", ["Claim vorhanden", "Zielgruppenbezug", "Nutzenversprechen erkennbar"]],
  ],
);

t1.caseq(
  "Die Agentur Mediahaus Rhein erhält von der Stadtwerke Aurelia AG den Auftrag, eine Informationskampagne zum neuen Ökostromtarif „AureliaGrün“ zu planen. Das Budget beträgt 90.000 €. Die Kampagne soll in der Region Aurelia (ca. 400.000 Einwohner) laufen. Ziel ist die Gewinnung von 5.000 Neukunden in sechs Monaten. Im Briefing fehlen Angaben zu Wettbewerb, Alleinstellungsmerkmal und zur Zielgruppe.",
  [
    ["Nennen Sie vier Fragen, die Sie dem Kunden im Rahmen des Re-Briefings stellen müssen.", 4, "Wer ist die Zielgruppe (Haushalte, Alter, Einkommen)? Was unterscheidet den Tarif von Wettbewerbern (USP/Preis)? Welche Wettbewerber/Tarife existieren? Welche Medien/Maßnahmen wurden bisher eingesetzt? Gibt es CI-Vorgaben/rechtliche Auflagen? Wie wird der Erfolg gemessen?", ["vier sinnvolle Fragen", "Bezug zu fehlenden Informationen", "Briefingbezug"]],
    ["Übersetzen Sie das Ziel in eine Kennzahl: Welche Conversion-Quote muss die Kampagne erreichen, wenn 250.000 Personen erreicht werden?", 4, "5.000 Neukunden : 250.000 erreichte Personen = 2 % (Conversion von Kontakt zu Neukunde).", ["korrekte Rechnung", "Ergebnis 2 %", "Bezeichnung als Quote"]],
    ["Ordnen Sie zwei Medien zu und begründen Sie die Eignung für die regionale Kampagne.", 6, "Regionalzeitung/Anzeigen – regionale Streuung, glaubwürdig; regionales Radio – günstig, hohe Frequenz; Plakat/ÖPNV-Werbung – lokale Präsenz; Social Ads mit Geotargeting – zielgenau und messbar.", ["zwei Medien", "Begründung regional", "Bezug Budget", "Zielgruppenpassung"]],
    ["Erläutern Sie, wie Sie die Wirkung der Kampagne messen (zwei Methoden).", 6, "Befragung vor und nach der Kampagne (Bekanntheit, Image); Auswertung der Tarifabschlüsse mit Aktionscode/Landingpage; Web-Analytics (Besuche, Conversions); Coupon-Einlösungen.", ["zwei Methoden", "Bezug zum Ziel", "Pre-/Post-Vergleich"]],
  ],
);

t1.caseq(
  "Die Manufaktur „Steinbock Outdoor“ verkauft handgefertigte Rucksäcke (Preis ca. 189 €) bisher über den eigenen Onlineshop und zwei Fachgeschäfte. Die Agentur Kreativkontor soll eine Strategie für den Ausbau der Distribution und eine Preisstrategie für die Einführung einer günstigeren Produktlinie (ca. 99 €) entwickeln. Die Marke gilt als hochwertig und nachhaltig.",
  [
    ["Beurteilen Sie anhand der Ansoff-Matrix die Einführung der günstigeren Linie (Strategietyp und Risiko).", 5, "Produktentwicklung (neues Produkt im bestehenden Markt). Risiko: Imageverwässerung der Premiummarke, Kannibalisierung der teureren Rucksäcke, Qualitätsanspruch.", ["Strategie korrekt", "Risiko benannt", "Bezug zur Marke"]],
    ["Empfehlen Sie eine Markenstrategie für die neue Linie und begründen Sie sie.", 5, "Eigene Zweitmarke (Mehrmarkenstrategie) schützt das Premium-Image; alternativ Markentransfer mit klarer Abgrenzung (Sublabel). Begründung: unterschiedliche Preislage und Zielgruppe.", ["Strategie benannt", "Begründung", "Abgrenzung Premium"]],
    ["Nennen Sie drei Absatzwege, die für den Ausbau der Distribution in Frage kommen, und je einen Vorteil.", 6, "Marktplätze/Amazon (hohe Reichweite), Outdoor-Fachhandel (Beratung/Image), eigene Pop-up-Stores/Events (Markenerlebnis), Handelsvertreter für Händlerakquise.", ["drei Absatzwege", "je Vorteil", "Bezug zum Produkt"]],
    ["Welche Preisstrategie empfehlen Sie für die neue Linie? Begründen Sie in zwei Sätzen.", 4, "Penetrationspreisstrategie (günstiger Einstieg, um schnell Marktanteile in der preissensiblen Zielgruppe zu gewinnen) – alternativ psychologischer Preis 99 €. Begründung: neue Zielgruppe, Wettbewerbsdruck.", ["Strategie benannt", "Begründung", "Konsistenz mit Marke"]],
  ],
);

t1.caseq(
  "Der Bio-Joghurt-Hersteller „Weidemilch“ möchte für sein neues Produkt „Wiesen-Skyr“ eine Verkaufsförderung im Handel durchführen. Die Agentur Pixelwerk berät. Zielgruppe: Familien mit Kindern. Ziel: kurzfristige Umsatzsteigerung von 15 % in vier Wochen. Das Produkt wird im Lebensmitteleinzelhandel verkauft; Händler sind Kunden der Agentur-Kunden. Rechtlich ist zu beachten, dass Werbeversprechen („Fördert die Abwehrkräfte“) belegbar sein müssen.",
  [
    ["Unterscheiden Sie Consumer Promotion und Trade Promotion anhand jeweils eines Beispiels für dieses Projekt.", 4, "Consumer Promotion: Gewinnspiel/Probierpackungen/Coupons für Endverbraucher. Trade Promotion: Zweitplatzierung/Displays, Händlerprämien oder Naturalrabatt für Einzelhändler.", ["zwei Begriffe richtig", "je Beispiel", "Zuordnung Kunde/Händler"]],
    ["Berechnen Sie: Der Umsatz beträgt aktuell 80.000 € pro Monat. Welcher Umsatz soll im Aktionsmonat erreicht werden?", 3, "80.000 € · 1,15 = 92.000 €.", ["Formel", "korrektes Ergebnis"]],
    ["Beurteilen Sie die Werbeaussage „Fördert die Abwehrkräfte“ rechtlich und schlagen Sie eine Alternative vor.", 5, "Gesundheitsbezogene Angaben sind nach der Health-Claims-Verordnung nur zulässig, wenn sie zugelassen und belegbar sind; sonst irreführend (UWG § 5). Alternative: „Mit lebenden Kulturen und viel Eiweiß“ oder genaue, belegbare Nährwertangaben.", ["Rechtsgrundlage (UWG/Health-Claims)", "Beurteilung", "Alternative formuliert"]],
    ["Entwerfen Sie eine integrierte Maßnahme aus drei Elementen (Handel, Online, Medien) und begründen Sie die Abstimmung.", 8, "Zweitplatzierung im Handel mit Display und Coupon; Online-Gewinnspiel mit Teilnahme per Coupon-Code; Regionaler Radiospot/Social Ads mit gleichem Key Visual und Claim. Abstimmung: einheitliche Botschaft, zeitgleicher Start, Gutschein als Verbindungsglied.", ["drei Elemente", "inhaltliche und zeitliche Abstimmung", "Kopplung (Code/Coupon)", "Zielbezug Umsatz"]],
  ],
);


const mk = (sit, tasks) => t1.caseq(sit, tasks);

mk(
  "Die Agentur Pixelwerk soll für die Hochschulbibliothek der Stadt Aurelia („BiblioPlus“) eine Kampagne entwickeln, um die Zahl der Erstsemester-Nutzerinnen und -Nutzer um 20 % zu steigern. Das Budget beträgt 35.000 €. Die Bibliothek hat ein altmodisches Image, bietet aber neue Services (24/7-Zugang, Lernräume, E-Books). Die Zielgruppe nutzt vor allem Instagram, TikTok und Messenger.",
  [
    ["Formulieren Sie ein SMART-Ziel für die Kampagne.", 4, "Die Zahl der registrierten Erstsemester-Nutzer soll von 1.500 auf 1.800 (+20 %) bis zum Ende des Wintersemesters steigen.", ["spezifisch", "messbar", "terminiert", "realistisch"]],
    ["Begründen Sie zwei geeignete Kommunikationskanäle für die Zielgruppe.", 6, "Instagram/TikTok: hohe Nutzung der Studierenden, kurze Videos, Influencer-Kooperationen mit Studierenden. Campus-Events/Erstsemesterwoche: direkter Kontakt, Führungen, Gewinnspiel. Alternative: Plakate in Mensa/Uni, Newsletter der Hochschule.", ["zwei Kanäle", "Zielgruppenbezug", "Budgetbezug"]],
    ["Nennen Sie drei Botschaften (Consumer Benefits) für die Kampagne.", 5, "Immer verfügbar (24/7-Zugang), ruhige Lernräume, kostenloser Zugriff auf Fachliteratur und E-Books, Spaß/Community.", ["drei Benefits", "Zielgruppenbezug", "Nutzenformulierung"]],
    ["Welche Kennzahl nutzen Sie, um den Erfolg zu kontrollieren? Begründen Sie.", 5, "Zahl der neuen Registrierungen im Vergleich zum Vorjahr (Conversion), ergänzt um Reichweite/Engagement der Social-Posts und Event-Teilnahmen.", ["Kennzahl benannt", "Bezug zum Ziel", "Zeitraum/Vergleich"]],
  ],
);

mk(
  "Die FAMK GmbH berät den E-Bike-Hersteller „Pedaltreter“, der eine Imagekampagne für seine neue Citybike-Serie (Preis ab 2.490 €) plant. Zielgruppe: umweltbewusste Berufspendler (30–50 Jahre) in Großstädten. Ziel: Markenbekanntheit in der Zielgruppe von 15 % auf 30 % innerhalb von neun Monaten. Budget 180.000 €. Wettbewerber: etablierte Fahrradmarken und Direktanbieter online.",
  [
    ["Führen Sie eine Positionierung durch: Beschreiben Sie Ist- und Soll-Positionierung.", 5, "Ist: unbekannter Newcomer mit mittlerem Preis, hohe Qualität nicht bekannt. Soll: moderne, nachhaltige und alltagstaugliche E-Bike-Marke für Pendler mit Premium-Anspruch.", ["Ist", "Soll", "Abgrenzung zum Wettbewerb"]],
    ["Schlagen Sie einen Kommunikationsmix aus mindestens drei Instrumenten vor.", 7, "Out-of-Home-Plakate an Bahnhöfen/Haltestellen (Pendlerkontakt); Social Ads/Influencer (Reichweite, Bekanntheit); Event/Probefahrtaktion am Bahnhof (Produkterlebnis); PR in Mobilitätsmedien (Glaubwürdigkeit).", ["drei Instrumente", "Begründung", "Abstimmung"]],
    ["Welche Rolle spielt die Distribution (Marketing-Mix) bei dieser Kampagne?", 4, "Probefahrten und Kauf müssen zeitnah möglich sein: Fachhandel, Flagship-Store, Online-Bestellung; Verfügbarkeit stärkt Glaubwürdigkeit.", ["Distribution erwähnt", "Bezug zum Fall"]],
    ["Berechnen Sie, welche absolute Reichweite nötig ist, wenn die Zielgruppe 800.000 Personen umfasst und 30 % Bekanntheit erreicht werden sollen.", 4, "800.000 · 0,30 = 240.000 Personen müssen die Marke kennen.", ["Rechnung", "Ergebnis 240.000"]],
  ],
);

mk(
  "Die Spielwarenkette „Kunterbunt“ (60 Filialen) plant vor Weihnachten eine Verkaufsförderungsaktion. Die Agentur Mediahaus Rhein schlägt einen „Adventskalender-Wettbewerb“ vor: Pro 20 € Einkauf gibt es ein Los, Hauptgewinn ist ein Familienurlaub. Ziel: Umsatzplus von 12 % im Dezember. Der Umsatz im Vorjahresdezember betrug 3,4 Mio. €. Im Briefing steht, dass das Gewinnspiel auch online beworben wird.",
  [
    ["Berechnen Sie den Ziel-Umsatz für Dezember.", 3, "3,4 Mio. € · 1,12 = 3,808 Mio. €.", ["Rechnung", "Ergebnis"]],
    ["Beurteilen Sie rechtlich zwei Punkte, die bei dem Gewinnspiel beachtet werden müssen.", 6, "Teilnahmebedingungen und Transparenz (UWG), Datenschutz (Einwilligung bei Datenerhebung, DSGVO), Kennzeichnung, Kopplung nicht unzulässig (Kopplung an Kauf ist erlaubt, muss aber klar sein), Gewinnerziehung nach Zufall, Minderjährige.", ["zwei Punkte", "rechtlich begründet"]],
    ["Ordnen Sie die Maßnahme einem Kommunikationsinstrument zu und begründen Sie, ob es für das Ziel passt.", 5, "Verkaufsförderung (Consumer Promotion), da kurzfristiger Umsatz das Ziel ist; Gewinnspiel setzt Kaufanreiz.", ["Zuordnung korrekt", "Begründung", "Zielbezug"]],
    ["Nennen Sie zwei Maßnahmen zur Erfolgskontrolle.", 6, "Umsatzvergleich Dezember vs. Vorjahr, Zahl ausgegebener/eingelöster Lose, Teilnehmerzahl, Online-Besucher auf der Aktionsseite, Befragung.", ["zwei Maßnahmen", "Bezug zum Ziel"]],
  ],
);

mk(
  "Das Fitnessstudio „FlexGym“ eröffnet einen neuen Standort in Aurelia. Die Agentur Kreativkontor plant die Eröffnungskommunikation. Ziel: 1.200 Mitglieder in den ersten drei Monaten. Das Budget beträgt 60.000 €. Zielgruppe: 18–35-Jährige im Umkreis von 5 km. Preisbewusste Konkurrenz (Discount-Studios) und Premium-Studios sind in der Nähe.",
  [
    ["Wählen Sie eine Preisstrategie für die Eröffnung und begründen Sie sie.", 5, "Penetrationsstrategie/Einführungsangebot (z. B. kostenlose Probemonate, Gebühr entfällt), um schnell Mitglieder zu gewinnen; später Preis anheben.", ["Strategie", "Begründung", "Wettbewerbsbezug"]],
    ["Welche lokalen Medien setzen Sie ein? Nennen Sie zwei und begründen Sie.", 6, "Plakate/Citylights im Umkreis, regionale Radiospots, Social Ads mit Geotargeting, Flyer/Verteilaktion, Kooperation mit Hochschulen.", ["zwei Medien", "regionaler Bezug"]],
    ["Berechnen Sie den Werbebudgetanteil je gewonnenem Mitglied (Kosten pro Neukunde).", 4, "60.000 € : 1.200 Mitglieder = 50 € pro Mitglied.", ["Rechnung", "Ergebnis"]],
    ["Skizzieren Sie ein Event zur Eröffnung (Ziel, Ablauf, Erfolgskennzahl).", 5, "Ziel: Bekanntheit und Probetrainings. Ablauf: Tag der offenen Tür mit Probekursen, Gewinnspiel, Social-Media-Aktion. Kennzahlen: Teilnehmerzahl, Probemitgliedschaften, Abschlussquote.", ["Ziel", "Ablauf", "Kennzahl"]],
  ],
);

mk(
  "Die Hilfsorganisation „Wasser für alle e. V.“ (gemeinnützig) möchte mit einer Spendenkampagne 150.000 € sammeln. Die Agentur Pixelwerk entwickelt das Konzept. Zielgruppe: Menschen ab 40 mit mittlerem Einkommen, bisherige Spender sind überwiegend 60+. Es steht ein Budget von 25.000 € zur Verfügung. Es gelten Datenschutz- und Werbebeschränkungen für Spendenaufrufe.",
  [
    ["Erläutern Sie Unterschiede zwischen kommerzieller Werbung und Spendenkommunikation (zwei Punkte).", 4, "Ziel: Spende statt Kauf; Glaubwürdigkeit und Transparenz (Mittelverwendung) wichtig; emotionalere Ansprache, aber seriös; Vertrauenssiegel (DZI).", ["zwei Unterschiede", "Bezug zum Fall"]],
    ["Welche Kanäle eignen sich für die Zielgruppe? Nennen Sie zwei und begründen Sie.", 6, "Direktmailing/Spendenbrief (ältere Zielgruppe, hohe Rücklaufquoten), Zeitungsanzeigen/Beilagen, E-Mail-Newsletter mit Double-Opt-in, Facebook; PR in regionalen Medien.", ["zwei Kanäle", "Zielgruppenbezug"]],
    ["Berechnen Sie die Mindestanzahl Spender, wenn die durchschnittliche Spende 50 € beträgt.", 4, "150.000 € : 50 € = 3.000 Spender.", ["Rechnung", "Ergebnis"]],
    ["Welche Datenschutzanforderung ist beim Versand von E-Mail-Spendenaufrufen zu beachten?", 6, "Einwilligung der Empfänger (Opt-in, Double-Opt-in), Widerrufsmöglichkeit, Datenschutzerklärung, Speicherbegrenzung (DSGVO, UWG § 7).", ["Einwilligung", "Rechtsgrundlage", "Dokumentation"]],
  ],
);

mk(
  "Die Brauerei „Rheinhopfen“ bringt ein alkoholfreies Craft-Bier („Hopfen Null“) auf den Markt. Zielgruppe: sportliche 25–45-Jährige, die bewusst auf Alkohol verzichten. Die Agentur Mediahaus Rhein soll ein Konzept entwickeln. Es gelten die Verhaltensregeln des Deutschen Werberats zur Alkoholwerbung. Der Kunde wünscht den Claim „Gibt dir Energie für den Tag“.",
  [
    ["Beurteilen Sie den gewünschten Claim aus Sicht des Werberats bzw. des Wettbewerbsrechts.", 5, "Aussagen, die auf eine Verbesserung der Leistungsfähigkeit durch Konsum (alkoholhaltiger) Getränke abzielen, werden vom Werberat beanstandet; für ein alkoholfreies Bier prüfen, ob gesundheitsbezogene Angaben belegbar sind (Health-Claims-VO, UWG § 5). Alternative: „Voller Geschmack. Ohne Alkohol.“", ["Beurteilung", "Rechtsbezug", "Alternative"]],
    ["Entwickeln Sie eine Tonality und begründen Sie sie anhand der Zielgruppe.", 5, "Selbstbewusst, locker, sportlich-genussvoll – die Zielgruppe will keine Verzichtsrhetorik, sondern Genuss und Lifestyle.", ["Tonality", "Zielgruppenbezug"]],
    ["Nennen Sie zwei Maßnahmen der Verkaufsförderung für die Einführung im Handel.", 5, "Sampling/Verkostungen am POS, Zweitplatzierung/Display im Getränkemarkt, Coupons, Trade Promotion mit Staffelrabatt.", ["zwei Maßnahmen", "Handelsbezug"]],
    ["Ordnen Sie den Preis (im Premium-Segment, 2,20 € je Flasche) einer Preisstrategie zu und begründen Sie.", 5, "Premium-/Hochpreisstrategie (Skimming) – unterstreicht Hochwertigkeit der Craft-Marke und Positionierung.", ["Strategie", "Begründung"]],
  ],
);

/* ======================= Teil 4: Fachgespräch (Praxisfälle) ======================= */
const t4 = topic("mako-pf-teil4", { part: 4, src: SRC });

t4.caseDef(
  "Fall 1: Reklamation eines Kunden zur Terminverzögerung",
  "Du betreust als Auszubildende/r den Kunden „Rheinbrot“. Die Plakatmotive sollten laut Zeitplan am Montag zum Druck gehen, der Kunde hat jedoch erst am Donnerstag das Motiv freigegeben. Der Druck verzögert sich um drei Tage. Der Kunde ruft verärgert an und verlangt Preisnachlass.",
  [
    ["Wie reagierst du im Gespräch mit dem verärgerten Kunden?", ["Ruhig bleiben, Gesprächspartner ausreden lassen, Verständnis zeigen (aktives Zuhören)", "Sachlich auf die Terminkette verweisen (Freigabe am Donnerstag laut Freigabeprotokoll)", "Lösungsorientiert: neuen Termin, Priorisierung beim Druck, Eskalation an Kundenberatung"]],
    ["Welche internen Dokumente/Prozesse helfen dir, die Ursache zu klären?", ["Zeitplan/Timing und Protokoll der Freigaben", "E-Mail-/Briefingverlauf, Statusberichte", "Rücksprache mit dem Trafficer"]],
    ["Wie vermeidest du solche Verzögerungen künftig?", ["Verbindliche Freigabefristen im Angebot und Zeitplan festlegen", "Frühzeitige Erinnerung an offene Freigaben", "Pufferzeiten einplanen, Agentur-Protokoll mit Terminbestätigung"]],
  ],
);

t4.caseDef(
  "Fall 2: Budgetüberschreitung bei einer Printproduktion",
  "Für den Kunden „Kreativ-Kontor“ wurde ein Katalog mit 5.000 Exemplaren kalkuliert (Angebot: 6.200 € netto). Bei der Abrechnung der Druckerei fallen 7.100 € netto an, weil der Kunde nachträglich Veredelung (UV-Lack) und 500 Exemplare mehr beauftragt hat – ohne schriftliche Bestätigung.",
  [
    ["Wie gehst du mit der Differenz zum Angebot um?", ["Ursache klären (Änderungen des Kunden), Mehrkosten dokumentieren", "Nachtragsangebot bzw. schriftliche Bestätigung der Zusatzleistung einholen", "Mit dem Kunden transparent kommunizieren und abstimmen, wer die Mehrkosten trägt"]],
    ["Welche rechtlichen Grundlagen sind relevant?", ["Werkvertrag: Änderungen führen zu Vergütungsanpassung; Beweislast beim Unternehmer", "Formfreiheit, aber Schriftform schafft Beweissicherheit", "AGB der Agentur regeln Änderungswünsche und Mehrkosten"]],
    ["Wie könnte man ähnliche Fälle künftig verhindern?", ["Change-Request-Prozess mit schriftlicher Freigabe", "Kalkulation mit Variantenpreisen und Hinweis auf Zusatzkosten", "Regelmäßige Statusabstimmung während der Produktion"]],
  ],
);

t4.caseDef(
  "Fall 3: Datenschutz bei einer Newsletter-Aktion",
  "Ein Kunde möchte 8.000 E-Mail-Adressen aus einer alten Kundendatei für einen Newsletter nutzen. Die Adressen stammen von einem Gewinnspiel vor vier Jahren. Eine ausdrückliche Einwilligung für Werbung liegt nicht vor.",
  [
    ["Darf die Agentur die Adressen verwenden? Begründe.", ["Nein, ohne Einwilligung (Opt-in) ist Werbung per E-Mail nach UWG § 7 und DSGVO nicht zulässig", "Zweckbindung: Daten wurden für das Gewinnspiel erhoben", "Ausnahme Bestandskundenwerbung greift nur bei eigenen Kunden mit Kauf"]],
    ["Wie kann man eine rechtssichere Newsletter-Liste aufbauen?", ["Double-Opt-in mit Bestätigungslink", "Transparente Datenschutzerklärung und Abmeldemöglichkeit", "Dokumentation der Einwilligungen"]],
    ["Welche Folgen drohen bei Verstößen?", ["Abmahnung durch Mitbewerber/Verbände, Unterlassungserklärung", "Bußgelder nach DSGVO bis 20 Mio. € oder 4 % des Umsatzes", "Imageschäden"]],
  ],
);

t4.caseDef(
  "Fall 4: Mediaplanentscheidung",
  "Für eine neue Eis-Marke stehen 60.000 € zur Verfügung. Zielgruppe: Familien in der Region. Die Mediaplanerin schlägt vor, das gesamte Budget für eine zweiwöchige TV-Schaltung zu verwenden. Der Kunde zweifelt.",
  [
    ["Welche Argumente sprechen für und gegen die TV-Schaltung?", ["Pro: hohe Reichweite, emotionale Wirkung, Bewegtbild", "Contra: hohe Produktions- und Schaltkosten, Streuverluste bei regionaler Zielgruppe, kaum Wiederholung bei kurzer Laufzeit", "Budget reicht evtl. nicht für wirksame Kontaktzahl (Effektivfrequenz)"]],
    ["Welche Alternativen empfiehlst du?", ["Regionale Medien: Radio, Plakat, Social Ads mit Geotargeting", "Kombination mit Verkaufsförderung (Sampling im Handel)", "Flight-Plan für Sommerwochen statt Dauerschaltung"]],
    ["Wie würdest du die Wirksamkeit der Planung bewerten?", ["Kennziffern: Reichweite, GRP, TKP/TNP, Affinität", "Vergleich der Pläne intermedial", "Post-Test: Bekanntheit/Abverkauf"]],
  ],
);

t4.caseDef(
  "Fall 5: Urheberrecht und Bildnutzung",
  "Ein Kunde schickt ein Foto aus dem Internet und bittet darum, es für die Titelseite einer Broschüre zu nutzen. Ein Urheber ist nicht bekannt. Die Auflage beträgt 10.000 Stück.",
  [
    ["Wie reagierst du auf die Bitte?", ["Rechte klären: Urheber ermitteln, Lizenz einholen, sonst nicht verwenden", "Hinweis: Fotos im Internet sind urheberrechtlich geschützt (UrhG)", "Alternative: lizenzfreie/lizenzierte Bilder (Stockfotos, Creative Commons mit Quellenangabe) oder Neuproduktion"]],
    ["Welche Folgen hätte eine unerlaubte Nutzung?", ["Abmahnung, Unterlassungserklärung", "Schadensersatz (üblich in Höhe der Lizenzgebühr, teils mit Aufschlag)", "Vernichtung/Rückruf der Broschüren und Imageschaden"]],
    ["Wie dokumentierst du die Rechteklärung?", ["Lizenzvertrag/Nutzungsrechte (Umfang, Dauer, Medium, Gebiet) schriftlich ablegen", "Bildnachweis und ggf. Urhebernennung", "Aufbewahrung in der Projektakte"]],
  ],
);

t4.caseDef(
  "Fall 6: Konflikt im Team – Terminstress in der Agentur",
  "Du bist in der Agentur für die Terminplanung (Traffic) eingesetzt. Zwei Kolleginnen aus Kreation und Beratung beschuldigen sich gegenseitig, Verzögerungen zu verursachen. Ein wichtiger Pitch steht in fünf Tagen an.",
  [
    ["Wie gehst du als Auszubildende/r mit dem Konflikt um?", ["Neutral bleiben, beide anhören, Sachebene vor Beziehungsebene", "Gemeinsames Gespräch anregen, Verantwortlichkeiten klären", "Vorgesetzten (Teamleitung) informieren, wenn keine Lösung gefunden wird"]],
    ["Wie sicherst du die Einhaltung des Pitch-Termins?", ["Rückwärtsterminierung mit Meilensteinen und Verantwortlichen", "Tägliches kurzes Statusmeeting, Aufgabenpriorisierung", "Pufferzeiten und Eskalationsweg festlegen"]],
    ["Welche Tools/Methoden der Ablaufplanung kennst du?", ["Zeitplan/Gantt-Diagramm, Kanban-Board, Projektmanagement-Software", "Checklisten und Briefing-Protokolle", "Ampelstatus für Aufgaben"]],
  ],
);

export default [
  { file: "mako/pf-teil1.json", bundle: { items: [t1.done()] } },
  { file: "mako/pf-teil4.json", bundle: { items: [t4.done()] } },
];
