import { topic } from "./dsl.mjs";

const SRC = "Prüfungsstil Teil 1 (eigene Fallsituationen, Serie B)";
const t = topic("mako-pf-teil1b", { part: 1, src: SRC });
const c = (sit, tasks) => t.caseq(sit, tasks);
const q = (text, p, sample, chk) => [text, p, sample, chk];

c("Die FAMK betreut die E-Scooter-Sharing-Firma „Rollwerk“ (Berlin, 2.500 Scooter, 180.000 App-Nutzer). Gestützte Bekanntheit in Berlin 78 %, in Hamburg (Neustart) 12 %. Ziel: Markteintritt in Hamburg mit 40.000 Nutzern in sechs Monaten, Budget 600.000 €. Wettbewerber: zwei etablierte Anbieter; Risiko: Verbotsdebatten und Vandalismus.",
 [q("Erstellen Sie eine SWOT-Analyse mit je einem Punkt pro Feld (4 P.) und leiten Sie eine ST-Strategie ab (2 P.).", 6, "S: hohe Bekanntheit in Berlin, große Flotte. W: unbekannt in Hamburg. O: wachsende Akzeptanz von Mikromobilität. T: Verbotsdebatten, Vandalismus. ST: bewährtes Sicherheits- und Parkkonzept nutzen, um Regulierungsrisiken zu begegnen.", ["vier Felder", "intern/extern korrekt", "ST-Strategie"]),
  q("Nennen Sie das Wachstumsmodell nach Ansoff, das der Hamburg-Start abbildet, und begründen Sie.", 4, "Marktentwicklung: bestehendes Produkt in neuem regionalen Markt.", ["Strategie", "Begründung"]),
  q("Leiten Sie ein SMART-Kommunikationsziel ab.", 4, "Gestützte Bekanntheit in Hamburg von 12 % auf 35 % bis Ende des sechsten Monats (Befragung).", ["spezifisch", "messbar", "terminiert"]),
  q("Schlagen Sie drei Maßnahmen für den Start vor.", 6, "Außenwerbung an Bahnhöfen mit QR-Code, Social Ads mit Geotargeting und Gratisfahrt-Coupon, Sampling/Event an Hochschulen.", ["drei Maßnahmen", "Begründung", "Budgetbezug"])]);

c("Der Hafermilch-Hersteller „Haferglück“ (Marktanteil 6 % in Deutschland) will in den Kaffee-Out-of-Home-Markt. Zielgruppe: Baristas und Cafés (B2B) sowie Endkunden. Budget 350.000 €. Wettbewerber: Oatly, Alpro. Marktinfo: Pflanzliche Drinks wachsen 11 % p. a.",
 [q("Ordnen Sie das Produkt „Barista-Edition“ im BCG-Portfolio ein und begründen Sie mit zwei Argumenten.", 5, "Question Mark: hohes Marktwachstum, geringer relativer Marktanteil im Barista-Segment.", ["Einordnung", "zwei Argumente"]),
  q("Beschreiben Sie zwei Kommunikationsmaßnahmen für die B2B-Zielgruppe.", 6, "Fachmesse (Host Cologne) mit Verkostung, Barista-Workshops/Sampling-Pakete für Cafés, Fachmedien-PR.", ["zwei Maßnahmen", "B2B-Bezug", "Begründung"]),
  q("Nennen Sie zwei Unterschiede zwischen B2B- und B2C-Kommunikation.", 4, "B2B: rationale Argumente, persönliche Beziehungen, längere Entscheidungsprozesse, wenige Entscheider; B2C: emotionaler, Massenmedien.", ["zwei Unterschiede"]),
  q("Formulieren Sie einen Claim für die Marke und erläutern Sie ihn.", 5, "„Haferglück – macht Kaffee zum Moment.“ Verbindet Produktnutzen und Emotion.", ["Claim", "Begründung"])]);

c("Der Fahrradhersteller „Kettenreaktion“ bringt ein faltbares E-Bike (2.390 €) auf den Markt. Zielgruppe: Berufspendler 30–50 in Großstädten. Budget 400.000 €. Gestützte Bekanntheit der Marke 18 %. Vertrieb über Fachhandel und eigenen Onlineshop.",
 [q("Wählen Sie eine Preisstrategie und begründen Sie.", 5, "Premium-/Hochpreisstrategie mit Verweis auf Qualität; Skimming möglich bei Innovationsvorsprung.", ["Strategie", "Begründung"]),
  q("Vergleichen Sie zwei Absatzwege und empfehlen Sie einen Mix.", 6, "Fachhandel: Beratung, Probefahrt, aber Handelsmarge; Onlineshop: höhere Marge, Reichweite, aber keine Beratung. Mix: Online-Bestellung mit Abholung/Service im Fachhandel (Omni-Channel).", ["zwei Wege", "Vor-/Nachteile", "Empfehlung"]),
  q("Nennen Sie drei Kommunikationsinstrumente für Pendler.", 6, "Plakate/Digital-OOH an Bahnhöfen, Podcast-Werbung, Probefahrt-Events am Arbeitsplatz/Betrieb.", ["drei Instrumente", "Zielgruppenbezug"]),
  q("Wie messen Sie den Erfolg (zwei KPIs)?", 3, "Probefahrten und Abverkäufe, Bekanntheit laut Befragung, Website-Traffic.", ["zwei KPIs"])]);

c("Die Online-Apotheke „Gesundweg“ hat 400.000 Kunden. Ziel: Neukundengewinnung (+15 %) im Segment 50+. Werberechtliche Besonderheiten (Heilmittelwerbegesetz) sind zu beachten. Budget 500.000 €.",
 [q("Beschreiben Sie die Zielgruppe mit sechs Merkmalen (soziodemografisch, psychografisch, verhaltensbezogen).", 6, "50–70 Jahre, mittleres Einkommen, Ruhestand/Teilzeit; gesundheitsbewusst, sicherheitsorientiert; kauft regelmäßig Medikamente, nutzt Zeitschriften und zunehmend Smartphone.", ["sechs Merkmale", "drei Kategorien"]),
  q("Nennen Sie zwei rechtliche Vorgaben für die Werbung.", 4, "Heilmittelwerbegesetz (keine irreführenden Heilversprechen), Pflichtangaben, Datenschutz (Gesundheitsdaten besonders sensibel).", ["zwei Vorgaben"]),
  q("Empfehlen Sie zwei Medien und begründen Sie anhand von Affinität und Wirtschaftlichkeit.", 6, "Apothekenzeitschrift/Gesundheitsmagazine (hohe Affinität), regionale Zeitungsbeilagen oder Radio; Online-Suche (SEA).", ["zwei Medien", "Kriterien"]),
  q("Gestalten Sie eine Headline mit Consumer Benefit.", 4, "„Ihre Medikamente. Pünktlich. Direkt zu Ihnen nach Hause.“", ["Benefit erkennbar", "Zielgruppenansprache"])]);

c("Der Zoo „Tierpark Aurelia“ möchte die Besucherzahl um 15 % auf 460.000 steigern. Budget 220.000 €. Zielgruppen: Familien, Schulklassen, Touristen. Der Eintritt beträgt 22 €. Problem: Schlechtwetterwochen.",
 [q("Berechnen Sie die derzeitige Besucherzahl.", 3, "460.000 : 1,15 = 400.000 Besucher.", ["Rechnung", "Ergebnis"]),
  q("Entwickeln Sie zwei Verkaufsförderungsmaßnahmen.", 6, "Familienkarte/Jahreskarte mit Rabatt, Schlechtwetter-Garantie (Wiederbesuch kostenlos), Kombitickets mit ÖPNV.", ["zwei Maßnahmen", "Bezug zum Problem"]),
  q("Entwickeln Sie eine PR-Maßnahme für den Tierpark.", 5, "Nachwuchsgeburten: Pressemitteilung/Fototermin, Namenspatenschaft, Social-Media-Livecam.", ["PR erkannt", "konkret"]),
  q("Nennen Sie drei Medien für die Kampagne.", 6, "Regionalzeitung, Radio, Plakate im Einzugsgebiet, Social Ads mit Geotargeting.", ["drei Medien", "Begründung"])]);

c("Die Möbelmarke „Wohnwerk“ will ihre Marke jünger positionieren. Ist-Positionierung: solide, teuer, traditionell. Zielgruppe: 25–35, erste eigene Wohnung. Budget 700.000 €. Die Möbel sind modular, nachhaltig produziert, mit Lieferung in 5 Tagen.",
 [q("Formulieren Sie Ist- und Soll-Positionierung.", 5, "Ist: traditionell/teuer. Soll: modern, flexibel, nachhaltig, erschwinglich für Starter.", ["Ist", "Soll"]),
  q("Nennen Sie einen USP und einen UAP für Wohnwerk.", 4, "USP: modulare Möbel, mitwachsend. UAP: emotional, z. B. Lebensgefühl ‚Dein erstes Zuhause‘.", ["USP", "UAP"]),
  q("Entwickeln Sie eine Copy-Strategie (Benefit, Reason Why, Tonality).", 6, "Benefit: Möbel, die mit deinem Leben wachsen. Reason Why: modulares System, nachhaltige Materialien. Tonality: locker, optimistisch.", ["drei Bestandteile"]),
  q("Beschreiben Sie zwei Online-Maßnahmen.", 5, "Instagram/Pinterest Inspirationskampagne mit Creatorn, SEA für Suchbegriffe, AR-Funktion ‚Möbel in meine Wohnung‘.", ["zwei Maßnahmen", "Passung"])]);

c("Die Streaming-Plattform „Seriengeist“ (2,1 Mio. Abonnenten, Monatspreis 8,99 €) plant eine Kampagne gegen Abwanderung (Churn 6 % pro Monat). Budget 300.000 €.",
 [q("Berechnen Sie die monatlich abwandernden Abonnenten.", 3, "2.100.000 · 0,06 = 126.000.", ["Rechnung"]),
  q("Berechnen Sie den entgangenen Monatsumsatz durch Abwanderung.", 3, "126.000 · 8,99 € = 1.132.740 €.", ["Rechnung", "Ergebnis"]),
  q("Nennen Sie zwei Maßnahmen der Kundenbindung.", 7, "Treuebonus/Jahresabo mit Rabatt, personalisierte Empfehlungen, exklusive Inhalte, Kündigungsgrund-Befragung mit Win-back-Angebot.", ["zwei Maßnahmen", "Begründung"]),
  q("Wählen Sie Branding oder Performance für diese Kampagne und begründen Sie.", 7, "Performance/CRM (Newsletter, In-App-Messages), da bestehende Kunden gezielt erreicht werden, hohe Messbarkeit; Branding ergänzend.", ["Strategie", "Begründung"])]);

c("Die Regionalbank „Rheintalbank“ lädt zu einer Veranstaltung zum Thema Altersvorsorge ein (Zielgruppe 45–60, 300 Teilnehmer, Budget 40.000 €). Ziel: 120 Beratungstermine.",
 [q("Nennen Sie sechs Punkte einer Checkliste für die Eventvorbereitung.", 6, "Ziele/Budget, Location/Termin, Einladungsmanagement, Referenten und Programm, Technik/Catering/Sicherheit, Nachbereitung/Leads.", ["sechs Punkte"]),
  q("Berechnen Sie die erforderliche Quote Teilnehmer → Beratungstermin.", 3, "120 : 300 = 40 %.", ["Rechnung"]),
  q("Beschreiben Sie zwei Einladungskanäle.", 5, "Persönliches Mailing an Kunden (Opt-in beachten), Anzeige in Regionalzeitung, Website/Social.", ["zwei Kanäle"]),
  q("Wie dokumentieren Sie den Erfolg?", 6, "Teilnehmerliste, Terminvereinbarungen, Feedbackbogen, Abschlüsse nach 3 Monaten.", ["KPIs", "Erhebung"])]);

c("Der Hotelbetrieb „Seeblick“ will die Auslastung in der Nebensaison (Oktober–März) von 48 % auf 60 % erhöhen. Zimmerzahl 120, Durchschnittspreis 95 €. Budget 150.000 €.",
 [q("Berechnen Sie die zusätzlichen Übernachtungen in 182 Nebensaison-Tagen.", 4, "120 · 182 · 0,12 = 2.620,8 ≈ 2.621 Übernachtungen.", ["Rechnung"]),
  q("Berechnen Sie den zusätzlichen Zimmerumsatz (ohne Aufschläge).", 3, "2.621 · 95 € ≈ 248.995 €.", ["Rechnung"]),
  q("Wählen Sie eine Preisstrategie für die Nebensaison.", 6, "Zeitliche Preisdifferenzierung (Frühbucher-/Nebensaisonpreise), Pakete (Wellness).", ["Strategie", "Begründung"]),
  q("Nennen Sie drei Kommunikationsmaßnahmen.", 7, "Newsletter an Stammgäste, SEA/Metasearch, Kooperation mit Regionalmarketing, Social-Ads auf Wellness.", ["drei Maßnahmen"])]);

c("Die Technische Hochschule Aurelia will mehr internationale Studierende gewinnen (+200). Zielgruppe: Bachelor-Interessierte in Indien und Brasilien. Budget 250.000 €.",
 [q("Beschreiben Sie die Zielgruppe mit vier Merkmalen.", 4, "Alter 18–22, Abitur/Schulabschluss, englischsprachig, karriereorientiert, Social-Media-affin.", ["vier Merkmale"]),
  q("Nennen Sie zwei Marktforschungsmethoden für die Länder.", 6, "Online-Befragung (quantitativ), Interviews mit Studienberatern/Studierenden (qualitativ), Sekundärforschung (DAAD-Statistiken).", ["zwei Methoden", "Begründung"]),
  q("Empfehlen Sie zwei Kanäle.", 6, "Instagram/YouTube, Messen/Agenturen vor Ort, Kooperationen mit Schulen.", ["zwei Kanäle"]),
  q("Formulieren Sie einen interkulturell geeigneten Claim.", 4, "„Study. Build. Belong.“", ["Claim", "Begründung"])]);

c("Das Autohaus „Rheinmobil“ plant die Einführung eines E-Auto-Abos. Zielgruppe: Pendler und Selbstständige 35–55. Budget 280.000 €. Hindernisse: Reichweitenangst, Ladeinfrastruktur.",
 [q("Nennen Sie zwei Barrieren der Zielgruppe und je eine Kommunikationslösung.", 6, "Reichweitenangst – Reichweitenrechner/Probefahrt; Ladeinfrastruktur – Kooperation mit Ladenetz, Ladekarte inklusive.", ["zwei Barrieren", "Lösungen"]),
  q("Wählen Sie die Marktfeldstrategie nach Ansoff.", 4, "Produktentwicklung (neues Angebot im bestehenden Markt).", ["Strategie"]),
  q("Schlagen Sie drei Medien vor.", 6, "Regionalzeitung/Wirtschaftsmedien, Radio im Berufsverkehr, SEA und LinkedIn für Selbstständige.", ["drei Medien", "Begründung"]),
  q("Nennen Sie zwei Erfolgskennzahlen.", 4, "Anzahl Abo-Abschlüsse, Probefahrten, Leads, Cost per Lead.", ["zwei KPIs"])]);

c("Die Krankenkasse „GesundPlus“ (1,2 Mio. Versicherte) will junge Mitglieder (18–27) gewinnen. Image: bürokratisch. Budget 900.000 €. Rechtliche Vorgabe: Keine unzulässigen Gesundheitsversprechen.",
 [q("Führen Sie eine Positionierung durch (Ist/Soll).", 5, "Ist: bürokratisch, traditionell. Soll: digital, unkompliziert, nah an Lebenswelt junger Menschen.", ["Ist", "Soll"]),
  q("Beschreiben Sie die Zielgruppe mit sechs Merkmalen.", 6, "18–27, Studierende/Azubis, geringes Einkommen; digital, preissensibel, gesundheitsinteressiert; nutzen Social Media/Apps, vergleichen online.", ["sechs Merkmale"]),
  q("Entwickeln Sie eine Kampagnenidee mit Medien.", 5, "App/Gesundheitskonto-Challenge, TikTok/Instagram-Videos, Hochschulevents; Bonusprogramm.", ["Idee", "Medien"]),
  q("Nennen Sie zwei rechtliche Risiken.", 4, "Irreführende Gesundheitsaussagen (UWG/HWG), Datenschutz Gesundheitsdaten, Gewinnspielbedingungen.", ["zwei Risiken"])]);

c("Der Kosmetikhersteller „Naturlicht“ (Naturkosmetik, 60 Produkte) will die Gesichtspflege-Linie neu positionieren. Zielgruppe: Frauen 30–50. Budget 650.000 €. Wettbewerber: Drogerie-Eigenmarken, Dr. Hauschka.",
 [q("Entwickeln Sie eine Copy-Strategie.", 6, "Benefit: sichtbar gesunde Haut ohne Kompromiss bei Natur. Reason Why: zertifizierte Inhaltsstoffe, dermatologisch getestet. Tonality: warm, kompetent.", ["Benefit", "Reason Why", "Tonality"]),
  q("Erläutern Sie die Brand Benefit Ladder für ein Produkt.", 6, "Merkmal: Aloe-Extrakt; funktionaler Nutzen: Feuchtigkeit; emotionaler Nutzen: Wohlgefühl; Marke: Natürlichkeit und Verantwortung.", ["vier Stufen"]),
  q("Beurteilen Sie den Werbespruch „Wirkt wie ein Facelifting“.", 4, "Irreführend/unbelegt (UWG, Kosmetik-VO); Belege nötig.", ["Beurteilung", "Rechtsbezug"]),
  q("Nennen Sie zwei Medien.", 4, "Frauenzeitschriften, Influencer/YouTube, Drogerie-POS.", ["zwei Medien"])]);

c("Der Spielwarenhersteller „Bauklotz“ will ein neues Holzspielzeug-Set (39,90 €) zu Weihnachten einführen. Zielgruppe: Eltern und Großeltern von Kindern 2–6. Budget 500.000 €. 70 % des Absatzes im Q4.",
 [q("Nennen Sie zwei Besonderheiten der Zielgruppe (Käufer vs. Nutzer).", 4, "Käufer sind Eltern/Großeltern, Nutzer sind Kinder; Entscheidungsmix aus Pädagogik/Sicherheit und Emotion.", ["zwei Besonderheiten"]),
  q("Empfehlen Sie einen Streuplan (Timing).", 6, "Aufbau ab Oktober, Hauptwelle November (Flight), Pulsing im Dezember; Plakate/Prospekte/Online.", ["Timing", "Begründung"]),
  q("Entwickeln Sie eine Trade-Promotion-Maßnahme.", 5, "Zweitplatzierung/Display im Handel, Händlerrabatt, Verkaufsförderungsmaterial.", ["Maßnahme", "Handelsbezug"]),
  q("Nennen Sie zwei gesetzliche Aspekte in der Kinderwerbung.", 5, "Keine unmittelbare Kaufaufforderung an Kinder, Kennzeichnung, Sicherheit/CE, Datenschutz bei Kindern.", ["zwei Aspekte"])]);

c("Das Reisebüro „Weitblick“ will online buchbare Wanderreisen bewerben. Zielgruppe: Best Ager 55–70. Budget 320.000 €. Wettbewerb: große Reiseportale.",
 [q("Beschreiben Sie die Zielgruppe mit sechs Merkmalen.", 6, "55–70, Ruhestand, mittleres bis höheres Einkommen; naturverbunden, sicherheitsbewusst; Printmedien und zunehmend E-Mail/Smartphone.", ["sechs Merkmale"]),
  q("Wählen Sie drei Medien anhand der Kriterien Reichweite, Affinität und Kontaktqualität.", 8, "Reisemagazine, regionale Tageszeitungen, Newsletter/SEA – Affinität zu Outdoor/Reisen.", ["drei Medien", "Kriterien"]),
  q("Formulieren Sie eine Headline.", 3, "„Wandern Sie in Ihr nächstes Abenteuer – sicher begleitet.“", ["Headline"]),
  q("Nennen Sie eine Maßnahme der Kundenbindung.", 3, "Treuebonus, Newsletter, Reisetreffen.", ["Maßnahme"])]);

c("Der Fitnessstudio-Anbieter „Muskelwerk“ (35 Studios) will Neukunden im Januar gewinnen. Budget 450.000 €. Ziel: 8.000 neue Mitglieder; Mitgliedsbeitrag 29,90 €/Monat, durchschnittliche Laufzeit 14 Monate.",
 [q("Berechnen Sie die Cost per Acquisition (CPA).", 3, "450.000 : 8.000 = 56,25 €.", ["Rechnung"]),
  q("Berechnen Sie den Kundenwert über die Laufzeit (Umsatz).", 3, "29,90 · 14 = 418,60 €.", ["Rechnung"]),
  q("Beurteilen Sie die Wirtschaftlichkeit.", 6, "CPA 56,25 € bei Umsatz 418,60 € je Kunde: positiv, bevor Betriebskosten.", ["Beurteilung", "Begründung"]),
  q("Nennen Sie drei Instrumente.", 8, "Social Ads mit Probetraining, Empfehlungsprogramm, Plakate/Radio regional, Coupon.", ["drei Instrumente"])]);

c("Der Energieversorger „StromAurelia“ will Ökostromkunden gewinnen (+25.000). Aktuell 190.000 Kunden. Budget 750.000 €. Preisaufschlag Ökostrom 2 ct/kWh. Zielgruppe: umweltbewusste Haushalte.",
 [q("Berechnen Sie die Zielkundenzahl.", 3, "190.000 + 25.000 = 215.000.", ["Rechnung"]),
  q("Berechnen Sie CPA.", 3, "750.000 : 25.000 = 30 €.", ["Rechnung"]),
  q("Welche Kommunikationsstrategie (Preis oder Werte) empfehlen Sie?", 7, "Werte-/Nutzenkommunikation mit Transparenz zu Herkunft, ergänzt durch Preisgarantie; Preisaufschlag erfordert Begründung.", ["Strategie", "Begründung"]),
  q("Nennen Sie rechtliche Vorgaben für Umweltwerbung.", 7, "Belegbarkeit (UWG § 5), keine pauschalen Aussagen, Siegel prüfen, Stromkennzeichnung.", ["zwei Vorgaben"])]);

c("Der Baumarkt „Hammerhart“ möchte im Frühjahr Gartenprodukte bewerben (Umsatzziel +10 % auf 12 Mio. €). Aktionen im Handel sind geplant. Budget 380.000 €.",
 [q("Berechnen Sie den aktuellen Umsatz.", 3, "12 : 1,10 ≈ 10,91 Mio. €.", ["Rechnung"]),
  q("Ordnen Sie drei Maßnahmen den Instrumenten Consumer Promotion, Trade Promotion und Werbung zu.", 6, "Gutscheinheft (Consumer), Displayplatzierung (Trade), Anzeigenbeilage (Werbung).", ["drei Zuordnungen"]),
  q("Nennen Sie zwei Medien und begründen Sie Regionalität.", 6, "Handzettel/Beilagen und Radio mit regionalem Bezug; Einzugsgebiet begrenzt, geringe Streuverluste.", ["zwei Medien", "Begründung"]),
  q("Nennen Sie zwei KPIs.", 5, "Umsatz je Aktionstag, Gutscheinrücklauf, Besucherfrequenz.", ["zwei KPIs"])]);

c("Der Tierfutterhersteller „Fellfreund“ will das Premiumsegment „Bio-Hundefutter“ ausbauen. Preis je 1,5-kg-Beutel 7,90 € (Wettbewerber 6,50 €). Zielgruppe: Hundehalter 30–55. Budget 420.000 €.",
 [q("Ordnen Sie die Preisstrategie ein und begründen Sie.", 5, "Premiumstrategie mit Qualitätsargument (Bio, Herkunft), Nutzenkommunikation.", ["Strategie", "Begründung"]),
  q("Nennen Sie drei Kommunikationsinstrumente.", 6, "Tierarzt-Empfehlungen/PR, Social Media mit Hundeinfluencern, Sampling im Fachhandel.", ["drei Instrumente"]),
  q("Beurteilen Sie die Werbeaussage „Macht Hunde gesünder“.", 4, "Gesundheitsversprechen müssen belegbar sein, sonst irreführend; Alternative: konkrete Inhaltsstoffe.", ["Beurteilung", "Alternative"]),
  q("Wie testen Sie das Produkt vor dem Roll-out?", 5, "Testmarkt in einer Region, Verkostungsaktion, Befragung der Halter.", ["Methode", "Begründung"])]);

export default [{ file: "mako/pf-teil1b.json", bundle: { items: [t.done()] } }];
