import { topic } from "./dsl.mjs";

const SRC = "Prüfungsstil Teil 1 (eigene Fallsituationen, Serie C)";
const t = topic("mako-pf-teil1c", { part: 1, src: SRC });
const c = (sit, tasks) => t.caseq(sit, tasks);
const q = (text, p, sample, chk) => [text, p, sample, chk];

c("Die Süßwarenmarke „Naschwerk“ (Gummibärchen, Marktanteil 4 %) will wissen, wie Jugendliche (12–17) ihre Produkte wahrnehmen. Budget für Marktforschung 60.000 €. Rechtliche Besonderheit: Befragungen Minderjähriger.",
 [q("Empfehlen Sie eine qualitative und eine quantitative Methode und begründen Sie jeweils.", 8, "Qualitativ: Gruppendiskussion/Fokusgruppe für Motive und Wahrnehmung. Quantitativ: Online-Befragung einer repräsentativen Stichprobe für Bekanntheit, Image und Kaufabsicht.", ["zwei Methoden", "Begründung", "Zielbezug"]),
  q("Nennen Sie zwei rechtliche Anforderungen bei der Befragung Minderjähriger.", 4, "Einwilligung der Erziehungsberechtigten, Datenschutz/DSGVO (Datensparsamkeit), altersgerechte Information.", ["zwei Anforderungen"]),
  q("Erklären Sie den Begriff Repräsentativität.", 4, "Die Stichprobe bildet die Grundgesamtheit verkleinert und strukturgleich ab.", ["Definition", "Bezug"]),
  q("Nennen Sie zwei Gütekriterien einer Befragung.", 4, "Validität, Reliabilität, Objektivität.", ["zwei Kriterien"])]);

c("Der Schuhhersteller „Trittfest“ plant die Einführung einer veganen Sneaker-Linie. Vor dem Roll-out soll ein Testmarkt durchgeführt werden. Budget 280.000 €. Zielgruppe: 20–35, urban.",
 [q("Beschreiben Sie, was ein Testmarkt ist und welche Vor- und Nachteile er hat.", 6, "Räumlich begrenztes Gebiet, in dem Produkt unter realen Bedingungen getestet wird; Vorteil: realistische Daten, geringes Risiko; Nachteil: Kosten, Zeit, Konkurrenz erfährt früh.", ["Definition", "Vorteil", "Nachteil"]),
  q("Wählen Sie Kriterien für die Auswahl der Testregion.", 5, "Repräsentative Bevölkerungsstruktur, Handelsstruktur wie Gesamtmarkt, Mediensituation, begrenzte Streuung.", ["zwei Kriterien", "Begründung"]),
  q("Nennen Sie drei Kennzahlen zur Auswertung.", 6, "Abverkauf, Wiederkaufrate, Bekanntheit, Preisakzeptanz.", ["drei Kennzahlen"]),
  q("Formulieren Sie einen SMART-Zielwert für den Testmarkt.", 3, "20 % Wiederkaufrate innerhalb von drei Monaten in der Testregion.", ["SMART"])]);

c("Das Mobilfunkunternehmen „Funkwerk“ (4 Mio. Kunden) will mit einem neuen Tarif (14,99 € mtl.) junge Kunden gewinnen. Wettbewerber senken Preise. Budget 1,4 Mio. €.",
 [q("Wählen Sie die Preisstrategie und begründen Sie.", 5, "Penetrationsstrategie oder Konkurrenzpreis; Preisführerschaft ist riskant wegen Preiskampfs.", ["Strategie", "Begründung"]),
  q("Entwickeln Sie eine Copy-Strategie.", 6, "Benefit: günstig und flexibel telefonieren. Reason Why: monatlich kündbar, 20 GB. Tonality: direkt, jugendlich.", ["drei Bestandteile"]),
  q("Beurteilen Sie die Preisangabe „ab 9,99 €“ (tatsächlich ab dem 7. Monat 14,99 €).", 5, "Irreführung möglich (PAngV/UWG): Gesamtpreis und Bedingungen müssen klar erkennbar sein.", ["Beurteilung", "Rechtsbezug"]),
  q("Nennen Sie zwei Kanäle.", 4, "Social Ads, Influencer, Streaming-Werbung, Shop-POS.", ["zwei Kanäle"])]);

c("Die Stadtverwaltung Aurelia will Fahrgäste für den ÖPNV gewinnen (+10 % Nutzer). Stadtbevölkerung 380.000, aktuell 62.000 tägliche Nutzer. Budget 400.000 €.",
 [q("Berechnen Sie die Zielnutzerzahl.", 3, "62.000 · 1,10 = 68.200.", ["Rechnung"]),
  q("Nennen Sie zwei Barrieren der Autofahrer.", 4, "Komfort, Zeit/Taktung, Kosten, Gewohnheit.", ["zwei Barrieren"]),
  q("Entwickeln Sie zwei Maßnahmen (Produkt/Preis/Kommunikation).", 7, "Probe-Monatskarte, Park-and-Ride-Aktion, Kampagne ‚Dein Weg‘, Plakate/Radio.", ["zwei Maßnahmen", "Mix"]),
  q("Wie messen Sie den Erfolg?", 6, "Fahrgastzahlen, Befragung, App-Nutzung, Ticketverkäufe.", ["KPIs", "Erhebung"])]);

c("Der Veranstalter „Klangwelt“ organisiert ein Open-Air-Festival (15.000 Besucher, Ticket 79 €). Sponsoren werden gesucht. Zielgruppe: 18–35. Budget Marketing 120.000 €.",
 [q("Erklären Sie, was Sponsoring ist und welche Gegenleistung der Sponsor erhält.", 5, "Förderung mit Geld oder Sachleistungen; Gegenleistung: Kommunikationsrechte (Logo, Namensnennung, Aktivierung).", ["Definition", "Gegenleistung"]),
  q("Nennen Sie drei Aktivierungsmöglichkeiten für einen Getränke-Sponsor.", 6, "Verkostungsstand, Branding von Bühnen, Social-Content, Gewinnspiele.", ["drei Möglichkeiten"]),
  q("Berechnen Sie den Ticketumsatz.", 3, "15.000 · 79 € = 1.185.000 €.", ["Rechnung"]),
  q("Erläutern Sie Ambush-Marketing und ein Risiko.", 6, "Trittbrettfahren ohne Sponsorenrechte; Risiko: Rechtsverstoß, Image.", ["Definition", "Risiko"])]);

c("Das Pflegeunternehmen „Heimatpflege“ sucht Pflegekräfte (Employer Branding), Ziel 120 Bewerbungen in 6 Monaten. Budget 160.000 €. Zielgruppe: Pflegefachkräfte 25–45.",
 [q("Beschreiben Sie die Zielgruppe (sechs Merkmale).", 6, "25–45, Pflegeausbildung, Schichtarbeit; sinnorientiert, überlastet; nutzt Jobportale, Instagram, Empfehlungen.", ["sechs Merkmale"]),
  q("Nennen Sie drei Employer-Branding-Maßnahmen.", 6, "Karriereseite, Mitarbeiter-Testimonials auf Social Media, Mitarbeiter-werben-Mitarbeiter, Praktikumsangebote.", ["drei Maßnahmen"]),
  q("Berechnen Sie die Cost per Application.", 3, "160.000 : 120 = 1.333,33 €.", ["Rechnung"]),
  q("Formulieren Sie einen Claim.", 5, "„Pflege mit Herz – und Zeit für dich.“", ["Claim", "Begründung"])]);

c("Der Schokoladenhersteller „Goldkakao“ will den Marktanteil im Premiumsegment von 8 % auf 11 % erhöhen. Marktvolumen Premium 480 Mio. €. Budget 900.000 €.",
 [q("Berechnen Sie den Umsatz bei 8 % und bei 11 %.", 4, "8 %: 38,4 Mio. €; 11 %: 52,8 Mio. €.", ["beide Rechnungen"]),
  q("Berechnen Sie den Umsatzzuwachs.", 3, "52,8 − 38,4 = 14,4 Mio. €.", ["Rechnung"]),
  q("Empfehlen Sie eine Strategie nach Ansoff.", 5, "Marktdurchdringung (bestehende Produkte im bestehenden Markt).", ["Strategie", "Begründung"]),
  q("Nennen Sie drei Maßnahmen.", 8, "Verkostungsaktionen, Zweitplatzierung, Anzeigen in Genussmagazinen, Gewinnspiel mit Coupon.", ["drei Maßnahmen"])]);

c("Das Möbelhaus „Heimat+“ wirbt mit „Bester Preis garantiert – sonst erstatten wir die Differenz“. Zielgruppe: Preisbewusste Haushalte. Budget 330.000 €. Die Werbung wird in Anzeigen und Online verbreitet.",
 [q("Beurteilen Sie die Werbung rechtlich (zwei Anforderungen).", 6, "Bedingungen der Garantie klar nennen (UWG), keine irreführende Alleinstellung; Preisangaben müssen korrekt sein.", ["zwei Anforderungen", "Rechtsbezug"]),
  q("Erläutern Sie vergleichende Werbung und ihre Zulässigkeit.", 5, "Zulässig, wenn sachlich, objektiv nachprüfbar, nicht herabsetzend (§ 6 UWG).", ["Definition", "Bedingungen"]),
  q("Nennen Sie zwei Folgen eines Wettbewerbsverstoßes.", 4, "Abmahnung, Unterlassungserklärung, Schadensersatz.", ["zwei Folgen"]),
  q("Nennen Sie zwei alternative Claim-Ideen ohne Rechtsrisiko.", 5, "„Faire Preise. Gute Möbel.“ / „Einrichten ohne Rechnen.“", ["zwei Claims"])]);

c("Die Sprachlern-App „Lingoo“ (500.000 Nutzer, 8 % zahlende) will die Zahl zahlender Nutzer erhöhen (+3 Prozentpunkte). Jahresabo 59,90 €. Budget 350.000 €.",
 [q("Berechnen Sie die zusätzlichen zahlenden Nutzer.", 3, "500.000 · 0,03 = 15.000.", ["Rechnung"]),
  q("Berechnen Sie den zusätzlichen Jahresumsatz.", 3, "15.000 · 59,90 € = 898.500 €.", ["Rechnung"]),
  q("Schlagen Sie zwei Maßnahmen zur Conversion vor.", 8, "Testphase mit Rabatt auf Jahresabo, In-App-Nachrichten, Streak-Erinnerungen, Empfehlungsprogramm.", ["zwei Maßnahmen"]),
  q("Nennen Sie zwei KPIs.", 6, "Conversion-Rate, Churn, CPA, Customer Lifetime Value.", ["zwei KPIs"])]);

c("Der Anbieter von Coworking-Räumen „Arbeitsraum“ eröffnet einen neuen Standort in Köln. Zielgruppe: Freelancer und Start-ups. Budget 90.000 €. Zielauslastung 70 % nach drei Monaten (120 Plätze).",
 [q("Berechnen Sie die Zielauslastung in Plätzen.", 3, "120 · 0,70 = 84 Plätze.", ["Rechnung"]),
  q("Beschreiben Sie zwei Maßnahmen für die Eröffnung.", 8, "Eröffnungsevent mit Netzwerk, Gratis-Schnupperwoche, Kooperation mit Gründerzentren.", ["zwei Maßnahmen", "Zielgruppenbezug"]),
  q("Wählen Sie zwei Medien.", 5, "LinkedIn/Instagram-Ads, Newsletter von Gründernetzwerken, Plakate in Uni-Nähe.", ["zwei Medien"]),
  q("Wie kontrollieren Sie den Erfolg?", 4, "Auslastung, Leads, Besichtigungen, Abschlüsse.", ["KPIs"])]);

c("Das Solarunternehmen „Sonnenwerk“ vertreibt Dachanlagen (durchschnittlich 14.500 €). Zielgruppe: Eigenheimbesitzer 40–60. Budget 520.000 €. Hindernis: Förderunsicherheit und lange Entscheidungszyklen.",
 [q("Beschreiben Sie den Kaufentscheidungsprozess in vier Phasen.", 6, "Bedarfserkennung, Informationssuche, Angebotsvergleich, Kauf/Nachkauf.", ["vier Phasen"]),
  q("Nennen Sie Kommunikationsinstrumente für die Phase Informationssuche.", 5, "Ratgeber-Content, SEO, Webinare, Messen, Kundenreferenzen.", ["zwei Instrumente"]),
  q("Berechnen Sie die Zahl der Verkäufe, die für 2 Mio. € Umsatz nötig sind.", 3, "2.000.000 : 14.500 ≈ 138 Anlagen.", ["Rechnung"]),
  q("Nennen Sie zwei Maßnahmen zur Vertrauensbildung.", 6, "Zertifizierungen, Referenzprojekte, Kundenbewertungen, Garantie.", ["zwei Maßnahmen"])]);

c("Das Gartencenter „Grünwelt“ will das Sommergeschäft (Pflanzen, Grillen) stärken. Umsatzziel +8 % auf 6,5 Mio. €. Budget 140.000 €. Einzugsgebiet 25 km.",
 [q("Berechnen Sie den Vorjahresumsatz.", 3, "6,5 : 1,08 ≈ 6,02 Mio. €.", ["Rechnung"]),
  q("Wählen Sie drei Instrumente (Mix) und begründen Sie.", 9, "Handzettel/Beilagen (regional), Event ‚Gartenfest‘ (Erlebnis), Social-Ads mit Geotargeting.", ["drei Instrumente", "Begründung"]),
  q("Nennen Sie zwei Erfolgskennzahlen.", 4, "Umsatz je Aktionswoche, Besucherzahl, Couponeinlösung.", ["zwei KPIs"]),
  q("Beschreiben Sie eine Verkaufsförderung am POS.", 4, "Sonderplatzierung, Pflanzberatung, Probierstand.", ["Maßnahme"])]);

c("Die Versicherung „Schutzbrief“ will Nachwuchskunden (25–35) für Haftpflicht und Hausrat gewinnen. Budget 600.000 €. Imageproblem: unverständliche Verträge.",
 [q("Formulieren Sie Ist- und Soll-Positionierung.", 5, "Ist: komplex, schwer verständlich. Soll: einfach, digital, fair.", ["Ist", "Soll"]),
  q("Entwickeln Sie eine Copy-Strategie.", 6, "Benefit: Schutz in 5 Minuten abgeschlossen. Reason Why: digitaler Abschluss, klare Bedingungen. Tonality: einfach, vertrauenswürdig.", ["drei Teile"]),
  q("Nennen Sie zwei Online-Maßnahmen.", 5, "Vergleichsportal-Präsenz, SEA, Social-Ads, Erklärvideos.", ["zwei Maßnahmen"]),
  q("Nennen Sie zwei rechtliche Anforderungen an Werbung für Versicherungen.", 4, "Transparente Preis-/Leistungsangaben, Pflichtinformationen, Datenschutz.", ["zwei Anforderungen"])]);

c("Der Anbieter von Kita-Software „KitaFlow“ (B2B) will 200 neue Kitas gewinnen. Preis 120 € pro Monat. Budget 280.000 €. Zielgruppe: Kita-Leitungen und Träger.",
 [q("Berechnen Sie den Jahresumsatz bei 200 Neukunden.", 3, "200 · 120 € · 12 = 288.000 €.", ["Rechnung"]),
  q("Nennen Sie drei B2B-Kommunikationsmaßnahmen.", 9, "Fachmessen, Fachzeitschriften, Webinare, Empfehlungsmarketing, Direktmarketing an Träger.", ["drei Maßnahmen"]),
  q("Erläutern Sie das Buying Center.", 4, "Mehrere Beteiligte (Leitung, Träger, IT, Eltern) entscheiden gemeinsam über Kauf.", ["Definition", "Bezug"]),
  q("Nennen Sie zwei KPIs.", 4, "Leads, Demo-Termine, Abschlussquote, CPA.", ["zwei KPIs"])]);

c("Das Ladenetz „VoltAurelia“ erweitert sein Netz um 400 Ladepunkte. Zielgruppe: E-Auto-Fahrer. Budget 380.000 €. Wettbewerber: große Energiekonzerne.",
 [q("Beschreiben Sie zwei Nutzenargumente (Consumer Benefit, Reason Why).", 6, "Benefit: schnell und überall laden; Reason Why: 400 neue Ladepunkte, 150 kW, App-Zahlung.", ["Benefit", "Reason Why"]),
  q("Nennen Sie drei Medien für die Kampagne.", 6, "Navigations-/Lade-App-Werbung, Radio im Berufsverkehr, Out-of-Home an Autobahnen/Raststätten.", ["drei Medien"]),
  q("Entwickeln Sie eine PR-Maßnahme zur Eröffnung.", 4, "Pressetermin mit Oberbürgermeister, Pressemitteilung, Social-Livestream.", ["Maßnahme"]),
  q("Nennen Sie zwei Kennzahlen zur Wirkung.", 4, "App-Downloads, Ladevorgänge, Auslastung, Bekanntheit.", ["zwei Kennzahlen"])]);

c("Der Hersteller von veganem Käse „PflanzGenuss“ möchte vom Nischen- in den Massenmarkt. Preis 3,49 € (Wettbewerber Milchkäse 2,19 €). Budget 1,1 Mio. €.",
 [q("Analysieren Sie Chancen und Risiken (je zwei).", 6, "Chancen: wachsende Nachfrage nach veganer Ernährung, Flexitarier. Risiken: Preisabstand, Geschmacksakzeptanz.", ["zwei Chancen", "zwei Risiken"]),
  q("Empfehlen Sie eine Preisstrategie.", 5, "Einführungspreis/Promotion (Penetration) mit späterer Anpassung oder Premium mit Qualitätsargument.", ["Strategie", "Begründung"]),
  q("Wählen Sie zwei VKF-Maßnahmen.", 5, "Sampling im Handel, Coupons, Zweitplatzierung.", ["zwei Maßnahmen"]),
  q("Nennen Sie zwei Instrumente für Reichweite.", 4, "TV-Spot, Social Video, Plakate.", ["zwei Instrumente"])]);

c("Das Theater „Schauwerk“ hat eine Auslastung von 58 % (400 Plätze) und will 70 % erreichen. Durchschnittlicher Preis 34 €. 180 Vorstellungen pro Jahr. Budget 100.000 €.",
 [q("Berechnen Sie die zusätzlichen Zuschauer pro Vorstellung.", 3, "400 · 0,12 = 48.", ["Rechnung"]),
  q("Berechnen Sie den Mehrumsatz pro Jahr.", 4, "48 · 180 · 34 = 293.760 €.", ["Rechnung"]),
  q("Beschreiben Sie zwei Maßnahmen für junge Zielgruppen.", 7, "Schülerabo, Last-Minute-Tickets, TikTok-Trailer, Kooperation mit Schulen.", ["zwei Maßnahmen"]),
  q("Formulieren Sie einen Claim.", 6, "„Schauwerk – Dein Abend. Dein Applaus.“", ["Claim", "Begründung"])]);

c("Das Mineralwasser „Quellrein“ will den Markenaufbau in der Gastronomie vorantreiben. 8.000 Gastronomiebetriebe sollen gelistet werden. Budget 700.000 €. Wettbewerber: Marktführer mit Dauerrabatten.",
 [q("Nennen Sie drei Trade-Promotion-Maßnahmen für die Gastronomie.", 9, "Gläser/Karten mit Branding, Staffelrabatt, Schulungen, kostenlose Kühlschränke.", ["drei Maßnahmen"]),
  q("Berechnen Sie die Kosten pro gelistetem Betrieb.", 3, "700.000 : 8.000 = 87,50 €.", ["Rechnung"]),
  q("Wie positionieren Sie die Marke gegenüber dem Marktführer?", 4, "Regional, nachhaltig, Premium, Glasflasche.", ["Positionierung"]),
  q("Nennen Sie zwei Kennzahlen.", 4, "Listungsquote, Absatz je Betrieb, Marktanteil Gastronomie.", ["zwei Kennzahlen"])]);

export default [{ file: "mako/pf-teil1c.json", bundle: { items: [t.done()] } }];
