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


/* ---- Teil 1 im Prüfungsstil (Rahmensituation Zweitschatz, abgewandelt) ---- */
const RS = "Die Fortune Agentur für Marketingkommunikation GmbH (FAMK, Berlin, 50 Mitarbeiter, Full-Service) betreut den Kunden Zweitschatz Deutschland GmbH, eine Secondhand-Plattform (App und Website) für Mode, Kinderartikel und zunehmend gebrauchte Elektronik. Umsatz Deutschland: 2023 1,2 Mio. €, 2024 4,6 Mio. €, 2025 6,8 Mio. €. Gestützte Markenbekanntheit in der Zielgruppe 82 %, ungestützte 22 %. Marketingziel: +20 % Umsatz pro Jahr. Marketingbudget 2026: 1,8 Mio. €. Marktinformation: Secondhand hat am deutschen Modemarkt einen Anteil von rund 2 %; rund 70 % der Verbraucher wollen künftig Secondhand kaufen. Wettbewerber: eBay Kleinanzeigen, Momox, Zalando Pre-owned, Rebuy (Elektronik). ";

mk(
  RS + "Situation: Sie bereiten die strategische Ausrichtung vor und sollen Empfehlungen zum weiteren Ausbau des Geschäftsmodells geben.",
  [
    ["Erstellen Sie eine SWOT-Matrix für Zweitschatz und beantworten Sie dabei zwei der vier Fragen: Welche Stärken nutzen vorhandene Chancen? Welche Stärken bewältigen Risiken? Welche Chancen verpassen wir wegen Schwächen? Welchen Risiken sind wir wegen Schwächen ausgesetzt?", 10, "Beispiele: SO: hohe gestützte Bekanntheit (82 %) und App-Reichweite nutzen den wachsenden Secondhand-Markt (Chance: 70 % kaufbereit). ST: starke Marke und schnelles Umsatzwachstum schützen gegen Konkurrenz durch Zalando/Momox. WO: geringe ungestützte Bekanntheit (22 %) lässt die Chance verstreichen, ein Top-of-Mind-Anbieter zu werden. WT: Abhängigkeit von Provisionsumsatz und Fake-Profil-Risiko setzen die Plattform dem Vertrauensverlust und Wettbewerbern aus.", ["zwei Fragen beantwortet", "Stärken/Schwächen intern korrekt", "Chancen/Risiken extern korrekt", "Bezug zu Daten der Rahmensituation", "Schlussfolgerung/Strategieansatz"]],
    ["Skizzieren Sie das Modell der Wachstumsstrategien nach Ansoff als Schaubild (4 P.) und nennen Sie für drei der vier Marktfeldstrategien je eine Marketingmaßnahme (6 P.).", 10, "Matrix: Achsen Produkte (bestehend/neu) × Märkte (bestehend/neu): Marktdurchdringung, Marktentwicklung, Produktentwicklung, Diversifikation. Maßnahmen: Marktdurchdringung – Aktion „Verkaufe 3 Teile, gewinne Gutschein“ (mehr Nutzung bestehender Nutzer); Marktentwicklung – Start in Österreich oder Ansprache älterer Zielgruppen; Produktentwicklung – Premium-Authentifizierungsservice für Designerartikel; Diversifikation – eigener Reparatur-/Upcycling-Service.", ["Schaubild vollständig und korrekt beschriftet", "drei Strategien richtig zugeordnet", "Maßnahmen konkret und plausibel", "Bezug zum Kunden"]],
  ],
);

mk(
  RS + "Situation: Zweitschatz will das Elektronik-Segment stärker ausbauen. Dazu sollen die Portfolio-Analyse (BCG-Matrix) und eine Marktforschung genutzt werden. Bisherige Einordnung: Mode = Cash Cow, Designer-Artikel = Star, Spielzeug = Poor Dog.",
  [
    ["Ordnen Sie das neue Segment „gebrauchte Elektronik“ (hohes Marktwachstum, derzeit kleiner relativer Marktanteil gegenüber Rebuy/Refurbed) in die BCG-Matrix ein und begründen Sie mit zwei Argumenten.", 5, "Question Mark: hohes Marktwachstum (starke Nachfrage nach Gebrauchtelektronik) bei niedrigem relativem Marktanteil gegenüber etablierten Wettbewerbern.", ["Feld korrekt", "Argument Wachstum", "Argument Marktanteil"]],
    ["Geben Sie eine begründete Strategieempfehlung für künftige Investitionen in dem Segment.", 3, "Selektiv investieren/Offensivstrategie: gezielt Marktanteil aufbauen, um zum Star zu werden; Gewinne der Cash Cow Mode zur Finanzierung nutzen; bei ausbleibendem Erfolg Rückzug prüfen.", ["Strategie benannt", "Begründung", "Bezug zu Cash Cow/Budget"]],
    ["Erläutern Sie zwei konkrete Zielsetzungen einer Marktforschung zum Ausbau des Elektronik-Sortiments.", 4, "(1) Bedarf und Preisbereitschaft der Zielgruppe ermitteln (welche Geräte, welcher Preis). (2) Image und Vertrauen in Gebrauchtelektronik/Garantie erfragen; Konkurrenzanalyse zu Rebuy/Refurbed.", ["zwei Ziele", "konkret", "Bezug zum Segment"]],
    ["Empfehlen Sie für jedes der beiden Ziele eine Marktforschungsmethode und begründen Sie, warum sie im Fall sinnvoll ist.", 8, "Ziel 1: quantitative Online-Befragung (repräsentative Stichprobe) – schnell, große Zahl, Preisbereitschaft messbar (z. B. Conjoint). Ziel 2: qualitative Gruppendiskussion/Tiefeninterviews – Motive und Bedenken zu Vertrauen, Garantie. Sekundärforschung zur Konkurrenz (Marktberichte, Websites).", ["je Ziel eine Methode", "Begründung", "quantitativ/qualitativ treffend", "Bezug zum Kunden"]],
  ],
);

mk(
  RS + "Situation: Sie definieren die wichtigste Zielgruppe und entwickeln eine Copy-Strategie. Zielgruppen laut Tabelle: (A) Gen Z, 16–25, markenbewusst, nutzt TikTok; (B) Young Parents, 28–40, preisbewusst, kauft Kinderartikel; (C) Best Ager, 55–70, qualitätsbewusst, wenig digital; (D) Luxus-Sammler, 30–50, Designerartikel.",
  [
    ["Wählen Sie die wichtigste Zielgruppe aus und begründen Sie mit zwei Argumenten (4 P.). Beschreiben Sie diese Zielgruppe anhand von sechs Merkmalen aus Soziodemografie, Psychografie und Verhalten (6 P.).", 10, "Auswahl z. B. Gen Z: wachstumsstark im Secondhand-Konsum, hohe Social-Media-Nutzung/App-Affinität. Merkmale: soziodemografisch – 16–25 Jahre, Schüler/Studierende, geringes Einkommen; psychografisch – statusbewusst, nachhaltigkeitsorientiert, trendaffin; verhaltensbezogen – kauft mobil, nutzt Social Media täglich, Preisvergleich.", ["Zielgruppe gewählt", "zwei Argumente", "sechs Merkmale", "alle drei Kategorien", "Bezug zum Fall"]],
    ["Nehmen Sie eine Copy-Analyse einer Online-Anzeige des Wettbewerbers Momox Fashion vor (Headline „Verkaufe, was du nicht mehr trägst – in 3 Minuten bei uns“; Visual: lachende Frau mit Paketen; Reason Why: „Kostenlose Abholung, sofort Geld“; Tonalität freundlich-locker) (5 P.) und formulieren Sie danach eine differenzierende, glaubwürdige Copy-Strategie für Zweitschatz (5 P.).", 10, "Copy-Analyse: Consumer Benefit: schnell und bequem Geld für Gebrauchtes; Reason Why: kostenlose Abholung, Sofortauszahlung; Tonality: freundlich-locker, Alltag. Copy-Strategie Zweitschatz: Benefit: „Dein Style bekommt ein zweites Leben – und du verdienst gebührenfrei.“ Reason Why: 0 % Verkaufsgebühr, Käuferschutz, geprüfte Profile. Tonality: selbstbewusst, humorvoll, Community-nah.", ["Benefit erkannt", "Reason Why erkannt", "Tonalität", "Strategie differenzierend", "glaubwürdig begründet"]],
  ],
);

mk(
  RS + "Situation: Für Zweitschatz soll ab dem Sommer eine Mediakampagne ältere Secondhand-Käufer erschließen. Marketingziel: Neukunden. Kommunikationsziele: Aufmerksamkeit, Bekanntheit, Vertrauen, App-Downloads. Mediabudget 0,9 Mio. €: Zeitschriften 300.000 €, Online 250.000 €, weiteres Offlinemedium max. 350.000 €. Rangreihe Zeitschriften (Nettoreichweite in der Mediazielgruppe, Affinitätsindex, TKP): Brigitte (NR 18 %, AI 125, TKP 31 €), Stern (NR 22 %, AI 98, TKP 24 €), Landlust (NR 9 %, AI 150, TKP 38 €), TV Spielfilm (NR 20 %, AI 105, TKP 19 €), Bunte (NR 14 %, AI 130, TKP 28 €).",
  [
    ["Empfehlen Sie dem Kunden drei Titel und begründen Sie die Auswahl anhand von Erreichbarkeit des Mediaziels (Priorität Reichweite), Affinität, Wirtschaftlichkeit und Kontaktqualität.", 9, "Empfehlung z. B. TV Spielfilm (hohe NR 20 %, niedrigster TKP 19 €, AI 105), Brigitte (NR 18 %, AI 125, passende Kontaktqualität für Frauen 45+) und Bunte (AI 130, 14 % NR, Image- und Vertrauensumfeld); Stern wegen hoher Reichweite (22 %) und gutem TKP als Alternative, aber AI < 100 (Streuverluste). Landlust: hohe Affinität, aber kleine Reichweite und hoher TKP.", ["drei Titel", "vier Kriterien berücksichtigt", "Kennziffern genutzt", "Ablehnung begründet"]],
    ["Geben Sie eine begründete Empfehlung für zwei Onlinemarketing-Instrumente (Budget 250.000 €), mit denen die App-Downloads effektiv erhöht werden (6 P.), und für ein Offlinemedium, das die Online-Kampagne unterstützt (5 P.).", 11, "Online: App-Install-Ads (Social/Search) – zielgenau, direkte Downloads messbar (CPI); Suchmaschinenwerbung (SEA) für „Secondhand App“, Kleidung gebraucht kaufen – Nachfrage abschöpfen. Offline: Radio (regional/bundesweit, Reichweite bei Älteren, Aufmerksamkeit durch Audio) oder Out-of-Home an Bahnhöfen – Reichweite im Budgetrahmen, QR-Code zur App.", ["zwei Instrumente begründet", "Bezug Downloads", "ein Offlinemedium begründet", "Budgetbezug"]],
  ],
);

mk(
  RS + "Situation: Für die Zielgruppe Gen Z entwickeln Sie Kommunikationsmaßnahmen. Es stehen zwei Ansätze zur Diskussion: Performance-Strategie (Abverkauf) oder Branding-Strategie (Markenaufbau). Während der Fußball-WM plant der Kunde eine Aktion mit Secondhand-Nationaltrikots. Im Sommer findet zudem eine Modewoche in Berlin statt, auf der Zweitschatz einen Upcycling-Wettbewerb veranstalten möchte.",
  [
    ["Empfehlen Sie eine der beiden Strategien (Performance/Branding) und begründen Sie mit zwei Argumenten.", 6, "Branding: Die ungestützte Bekanntheit ist nur 22 %, Gen Z kauft Marken, die Status und Haltung zeigen; Markenaufbau schafft langfristig Präferenz und senkt Abhängigkeit von Performance-Kosten; kombiniert mit Performance für Downloads. (Alternative: Performance – bei kurzfristigem Wachstumsziel, Messbarkeit.)", ["Strategie gewählt", "zwei Argumente", "Bezug zur Zielgruppe"]],
    ["Empfehlen Sie zwei Social-Media-Plattformen mit je einer passenden Werbeform.", 4, "TikTok – In-Feed-Video-Ads/Creator-Kooperationen (Spark Ads); Instagram – Reels-Ads oder Stories mit Shopping-Tag.", ["zwei Plattformen", "je Werbeform"]],
    ["Nennen Sie für die Trikot-Aktion je ein Beispiel für Owned-, Paid-, Earned- und Shared-Media.", 4, "Owned: Aktionsseite/Newsletter/App-Banner; Paid: Social-Ads/Display zu „Retro-Trikots“; Earned: Presseberichte, Erwähnungen durch Medien/Influencer; Shared: User teilen Trikot-Fotos mit Hashtag.", ["vier Kategorien", "je plausibel", "Bezug zur WM-Aktion"]],
    ["Erstellen Sie eine Checkliste für die Vorbereitung des Upcycling-Wettbewerbs-Events mit sechs Punkten.", 6, "Ziele/Budget; Location, Termin und Genehmigungen; Jury, Preisgeld und Teilnahmebedingungen; Bewerbung/Ausschreibung (Hochschulen, Social Media); Technik/Catering/Sicherheit; Pressearbeit, Dokumentation (Foto/Video, Einwilligungen), Nachbereitung.", ["sechs Punkte", "vollständig/sinnvoll", "Bezug zum Event"]],
  ],
);

mk(
  "Die Fortune Agentur (FAMK) betreut die Lebensmittelmarke „Fresh & Fair“ (Bio-Snackriegel, 1,79 €). Neukundenziel: +25 % Absatz in 12 Monaten. Budget 1,2 Mio. €. Der Kunde plant Einführung einer Veggie-Linie. Marktinfos: Bio-Snacks wachsen 8 % p. a.; wichtigste Wettbewerber sind Märkte der Handelsmarken; die Zielgruppe (20–35, urban, gesundheitsbewusst) nutzt Instagram, Podcasts und kauft im Supermarkt.",
  [
    ["Entwickeln Sie ein SMART-Ziel für die Einführungskampagne und leiten Sie daraus zwei Mediaziele ab.", 5, "Ziel: Bekanntheit in der Zielgruppe von 30 auf 45 % bis Jahresende. Mediaziele: Reichweite 60 % der Zielgruppe mit mindestens 3 Kontakten; GRP 250 im Einführungsmonat.", ["SMART", "Mediaziele", "Bezug Zielgruppe"]],
    ["Wählen Sie die Marktfeldstrategie nach Ansoff für die Veggie-Linie und begründen Sie.", 4, "Produktentwicklung (neues Produkt, bestehender Markt der Bio-Snacks) – nutzt vorhandene Marke und Distribution.", ["Strategie", "Begründung"]],
    ["Empfehlen Sie drei Kommunikationsinstrumente und beschreiben Sie je eine konkrete Maßnahme.", 7, "Social/Influencer (Reels mit Foodcreatorn), Verkaufsförderung am POS (Probierstände, Zweitplatzierung), Podcast-Sponsoring (Audioreichweite), PR (Pressemitteilung zu Nachhaltigkeit).", ["drei Instrumente", "konkrete Maßnahmen", "Passung Zielgruppe"]],
    ["Nennen Sie vier KPIs zur Erfolgskontrolle.", 4, "Markenbekanntheit (gestützt/ungestützt), Abverkauf/Marktanteil, Reichweite/Engagement, Gutscheineinlösequote, Share of Voice.", ["vier KPIs", "passend zu Zielen"]],
  ],
);

mk(
  "Die FAMK betreut die Regionalbank „Rheinsparkasse Aurelia“ (Image: seriös, bieder). Ziel: junge Berufseinsteiger (22–30) als Neukunden für Girokonto und Altersvorsorge gewinnen. Budget 450.000 €. Gesetzliche Vorgaben zur Werbung für Finanzprodukte (Pflichtangaben, Preisangaben) sind einzuhalten. Die Bank wünscht eine Aktion „Konto wechseln – 100 € Prämie“.",
  [
    ["Analysieren Sie die Positionierung der Bank (Ist) und schlagen Sie eine Soll-Positionierung für die junge Zielgruppe vor.", 5, "Ist: traditionell, vertrauenswürdig, lokal. Soll: modern, transparent, ‚dein Finanzbegleiter fürs Berufsleben‘ – Vertrauen + digitale Services.", ["Ist", "Soll", "Zielgruppenbezug"]],
    ["Beurteilen Sie die geplante Aktion „Konto wechseln – 100 € Prämie“ hinsichtlich Zielerreichung und rechtlicher Aspekte (zwei Punkte).", 5, "Verkaufsförderung (Consumer Promotion) – kurzfristiger Neukundeneffekt; rechtlich: Transparenz der Teilnahmebedingungen (UWG), Preisangabenverordnung/Kontoführungsgebühren darstellen, Datenschutz bei Datenerhebung; ggf. Prämie steuerpflichtig.", ["Instrument benannt", "zwei rechtliche Aspekte", "Beurteilung"]],
    ["Skizzieren Sie einen integrierten Kommunikationsmix aus drei Elementen mit Medien und Timing.", 6, "Social Ads/Instagram + Hochschul-/Ausbildungsmessen (Event) + Radio-/Podcast-Spot; Timing: Start zu Ausbildungsbeginn im Spätsommer, Flights über 8 Wochen, einheitliche Botschaft und Key Visual.", ["drei Elemente", "Timing", "Abstimmung"]],
    ["Nennen Sie zwei Kennzahlen zur Erfolgskontrolle der Kampagne und erläutern Sie, wie Sie sie erheben.", 4, "Neu eröffnete Konten (aus Aktionscode/CRM), Cost per Acquisition (Kosten : Neukunden), Bekanntheit/Image per Befragung vor/nach.", ["zwei Kennzahlen", "Erhebung"]],
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


t4.caseDef("Fall 7: Kunde fordert kurzfristig drastische Änderung der Kampagne",
  "Drei Tage vor dem Druckstart der Plakate verlangt der Kunde „Rheinbrot“ eine komplett neue Headline und ein anderes Key Visual, weil die Geschäftsführung die erste Idee plötzlich nicht mehr mag. Die Freigabe war bereits schriftlich erteilt.",
  [
    ["Wie reagierst du gegenüber dem Kunden?", ["Verständnis zeigen, Anliegen aufnehmen, auf die erteilte Freigabe und den Zeitplan hinweisen", "Mehrkosten und Terminfolgen transparent machen und Lösungsvarianten anbieten", "Rücksprache mit Kundenberatung/Teamleitung vor Zusagen"]],
    ["Welche vertraglichen Aspekte spielen eine Rolle?", ["Werkvertrag: Änderungswünsche nach Abnahme/Freigabe sind zusätzliche Leistungen", "Angebotsbedingungen/AGB zu Änderungen und Freigaben", "Schriftliche Dokumentation (Freigabeprotokoll)"]],
    ["Wie könnte man das Risiko solcher Änderungen verringern?", ["Freigabeprozess mit klaren Stufen und Verantwortlichen", "Zwischenpräsentationen mit dem Entscheider", "Change-Request-Regelung im Angebot"]],
  ]);

t4.caseDef("Fall 8: Preisverhandlung und Rabatt",
  "Ein Neukunde möchte für ein Jahresprojekt (Social Media und Newsletter) 25 % Rabatt auf den Angebotspreis von 48.000 € netto. Die Agentur kalkuliert mit 20 % Gewinnaufschlag; die Selbstkosten betragen 40.000 €.",
  [
    ["Berechne den Preis nach 25 % Rabatt und beurteile die Wirtschaftlichkeit.", ["48.000 € · 0,75 = 36.000 €", "Das liegt unter den Selbstkosten von 40.000 € → Verlust von 4.000 €", "Rabatt in dieser Höhe ist nicht wirtschaftlich"]],
    ["Welche Alternativen schlägst du dem Kunden vor?", ["Leistungsumfang reduzieren oder in Phasen aufteilen", "Mengen-/Treuerabatt an Folgeaufträge koppeln", "Kleineren Rabatt (z. B. 5–8 %) oder Zahlungsziel/Skonto anbieten"]],
    ["Welche Rolle spielt die Preisuntergrenze?", ["Kurzfristig: variable Kosten, langfristig Selbstkosten + Gewinn", "Unterhalb der Selbstkosten nur in begründeten Ausnahmen (z. B. Referenzkunde)", "Entscheidung gehört in die Geschäftsleitung"]],
  ]);

t4.caseDef("Fall 9: Beschwerde über diskriminierende Werbung",
  "Nach Start einer Plakatkampagne für einen Getränkehersteller gehen beim Kunden und beim Deutschen Werberat Beschwerden ein: Das Motiv wirke herabwürdigend gegenüber Frauen.",
  [
    ["Wie gehst du mit der Situation um?", ["Beschwerde ernst nehmen, intern eskalieren, Fakten zum Motiv und zur Resonanz sammeln", "Stellungnahme gemeinsam mit dem Kunden vorbereiten", "Gegebenenfalls Motiv anpassen oder zurückziehen"]],
    ["Welche Rolle hat der Deutsche Werberat?", ["Selbstkontrolle der Werbewirtschaft", "Prüft Beschwerden und kann Rügen aussprechen – keine Bußgelder", "Verhaltensregeln (z. B. gegen Diskriminierung)"]],
    ["Wie lässt sich so etwas künftig vermeiden?", ["Vorab-Check von Motiven (Pre-Test, Compliance)", "Divers besetztes Team und Feedback von Zielgruppen", "Kenntnis der Verhaltensregeln des Werberats"]],
  ]);

t4.caseDef("Fall 10: Mediaplanung – Streuverluste",
  "Eine regionale Möbelkette (Einzugsgebiet 30 km) wollte in einer überregionalen Zeitschrift werben. Die Agentur rät davon ab und schlägt Regionalmedien vor.",
  [
    ["Begründe die Empfehlung der Agentur.", ["Streuverluste: Nur ein Bruchteil der Leser lebt im Einzugsgebiet", "Hohe Kosten je erreichter relevanter Person (TKP bezogen auf Zielgruppe)", "Regionale Medien erreichen genauer und günstiger"]],
    ["Welche Regionalmedien schlägst du vor?", ["Lokalzeitung/Anzeigenblatt, regionales Radio", "Plakat/City-Light im Einzugsgebiet, Kino lokal", "Social Ads mit Geotargeting und Newsletter"]],
    ["Wie misst du den Erfolg?", ["Besucherzahlen/Abverkauf mit Aktionscode", "Reichweite/Affinität laut Mediaplan, Klicks und Conversions", "Pre-/Post-Befragung zur Bekanntheit"]],
  ]);

t4.caseDef("Fall 11: Fehler im Druck – Reklamation",
  "Die Druckerei liefert 10.000 Flyer, bei denen das Logo des Kunden einen falschen Farbton hat (deutliche Abweichung vom Pantone-Wert). Der Kunde möchte sofort Neudruck auf Kosten der Agentur. Der Fehler wurde im Proof nicht bemerkt.",
  [
    ["Wie klärst du die Verantwortlichkeit?", ["Datenlage prüfen (Datei, Farbprofil, freigegebener Proof, Auftrag)", "Abweichung gegen Freigabe/Sollwert messen", "Kommunikation mit Druckerei über Reklamation und Nachbesserung"]],
    ["Welche Rechte bestehen gegenüber der Druckerei?", ["Werkvertragsrecht: Nacherfüllung (Neudruck) vorrangig", "Rüge unverzüglich; Frist zur Nacherfüllung setzen", "Bei Scheitern Minderung/Rücktritt/Schadensersatz"]],
    ["Wie kommunizierst du mit dem Kunden?", ["Offen über Ursache und Lösung informieren", "Termin- und Kostenfolgen darstellen", "Prozessverbesserung (Proof-Prüfung, Checkliste) zusagen"]],
  ]);

t4.caseDef("Fall 12: Nachhaltigkeit und Greenwashing",
  "Ein Kunde will eine Anzeige mit dem Claim „Zu 100 % klimaneutral“ schalten. Belege gibt es nur für die Verpackung, nicht für die Produktion.",
  [
    ["Beurteile den Claim rechtlich.", ["Irreführende Werbung (UWG § 5) – pauschale Umweltaussagen müssen belegbar sein", "Abmahnrisiko durch Wettbewerber/Verbände", "EU-Vorgaben gegen Greenwashing"]],
    ["Wie könnte der Claim korrekt lauten?", ["Konkrete, belegte Aussage: „Verpackung aus 100 % Recyclingmaterial“", "Quellenangabe/Siegel (z. B. Blauer Engel) nur bei Vorliegen", "Transparente Erläuterung der Maßnahmen"]],
    ["Wie reagierst du gegenüber dem Kunden?", ["Rechtliche Risiken sachlich erklären", "Alternative Formulierungen und Belege vorschlagen", "Dokumentation der Beratung"]],
  ]);

t4.caseDef("Fall 13: Social-Media-Shitstorm",
  "Ein Post der Agentur für einen Kunden wird missverstanden; innerhalb von zwei Stunden erscheinen hunderte negative Kommentare.",
  [
    ["Welche ersten Maßnahmen ergreifst du?", ["Krisenverantwortliche informieren, Kommentare beobachten, Post ggf. offline nehmen", "Nicht löschen/zensieren ohne Absprache, sachlich reagieren", "Einheitliche Sprachregelung abstimmen"]],
    ["Wie sieht eine gute Krisenkommunikation aus?", ["Schnell, ehrlich, empathisch, mit klarer Entschuldigung bzw. Klarstellung", "Einheitliche Ansprache auf allen Kanälen", "Dialog statt Rechtfertigung"]],
    ["Was lernst du für die Zukunft?", ["Krisenplan und Verantwortlichkeiten definieren", "Vorab-Check von Posts (Vier-Augen-Prinzip)", "Monitoring und Community-Management"]],
  ]);

t4.caseDef("Fall 14: Kalkulation eines Einzelprojekts",
  "Für einen Kunden sollen ein Flyer (A5, 4/4) und eine Landingpage erstellt werden. Zu kalkulieren sind: 6 Stunden Beratung (70 €/Std. intern), 18 Stunden Grafik (62 €/Std.), 12 Stunden Programmierung (75 €/Std.) und Fremdleistung Druck 1.150 € netto. Gewinnaufschlag 20 % auf Agenturleistung, Handling Fee 10 % auf Fremdleistung.",
  [
    ["Berechne die Agenturleistung und den Angebotspreis netto.", ["Agenturleistung: 6·70 + 18·62 + 12·75 = 420 + 1.116 + 900 = 2.436 €", "Mit 20 % Gewinn: 2.923,20 €; Fremdleistung 1.150 € · 1,10 = 1.265 €", "Angebotspreis netto: 4.188,20 €"]],
    ["Wie hoch ist der Bruttopreis?", ["4.188,20 € · 1,19 = 4.984,06 €"]],
    ["Wie reagierst du auf die Bitte des Kunden um 10 % Rabatt?", ["Rabatt und Preisuntergrenze prüfen, Leistungsumfang oder Zahlungsziel als Alternative", "Rückfrage bei Vorgesetzten, Angebot anpassen und dokumentieren"]],
  ]);

export default [
  { file: "mako/pf-teil1.json", bundle: { items: [t1.done()] } },
  { file: "mako/pf-teil4.json", bundle: { items: [t4.done()] } },
];
