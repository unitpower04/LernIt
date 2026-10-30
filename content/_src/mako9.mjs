import { topic } from "./dsl.mjs";

const SRC = "Prüfungsstil Teil 1 (eigene Fallsituationen, Serie D – Media, PR, Marke)";
const t = topic("mako-pf-teil1d", { part: 1, src: SRC });
const c = (sit, tasks) => t.caseq(sit, tasks);
const q = (text, p, sample, chk) => [text, p, sample, chk];

c("Die FAMK plant für den Saftanbieter „Fruchtwerk“ eine Zeitschriftenkampagne. Zielgruppe: 30–49-jährige Eltern, 2,4 Mio. Personen. Budget 200.000 €. Rangreihe (Nettoreichweite in der ZG / Seitenpreis / Affinitätsindex): Eltern (NRW 480.000, 38.000 €, AI 160), Brigitte (NRW 600.000, 52.000 €, AI 118), Stern (NRW 720.000, 61.000 €, AI 95), Focus (NRW 450.000, 49.000 €, AI 105).",
 [q("Berechnen Sie die Nettoreichweite in Prozent der Zielgruppe für „Eltern“ und „Stern“.", 4, "Eltern: 480.000 : 2.400.000 = 20 %; Stern: 720.000 : 2.400.000 = 30 %.", ["zwei Rechnungen"]),
  q("Berechnen Sie den Tausender-Nutzer-Preis (TNP) für „Eltern“ und „Brigitte“.", 6, "Eltern: 38.000 · 1.000 : 480.000 = 79,17 €; Brigitte: 52.000 · 1.000 : 600.000 = 86,67 €.", ["zwei Rechnungen"]),
  q("Wählen Sie zwei Titel für das Budget und begründen Sie.", 7, "Eltern (AI 160, niedrigster TNP) und Brigitte (hohe NRW, AI 118, Budget 90.000 € passt); Stern teuer und AI < 100 (Streuverluste).", ["zwei Titel", "Kennziffern", "Budget"]),
  q("Erläutern Sie den Unterschied zwischen Brutto- und Nettoreichweite.", 3, "Brutto zählt Mehrfachkontakte mit, netto nur einmal erreichte Personen.", ["Definition"])]);

c("Die Brauerei „Rheinhopfen“ hat einen TV-Spot (30 Sek.) geplant. Budget 500.000 €. Zielgruppe: Männer 25–49, 6,0 Mio. Personen. Ein Spot erreicht 1,2 Mio. Zielpersonen (netto) bei 1,5 Kontakten pro Person bei einer Schaltung. TKP 18 €.",
 [q("Berechnen Sie die Reichweite in Prozent.", 3, "1,2 : 6,0 = 20 %.", ["Rechnung"]),
  q("Berechnen Sie die Kosten pro Schaltung auf Basis des TKP und der Bruttokontakte (1,2 Mio. · 1,5).", 5, "Bruttokontakte: 1,8 Mio.; 1,8 Mio. : 1.000 · 18 € = 32.400 €.", ["Rechnung"]),
  q("Wie viele Schaltungen sind mit dem Budget möglich (abrunden)?", 4, "500.000 : 32.400 = 15,4 → 15 Schaltungen.", ["Rechnung"]),
  q("Beschreiben Sie zwei Vor- und zwei Nachteile von TV.", 8, "Vorteile: hohe Reichweite, audiovisuelle Wirkung. Nachteile: hohe Kosten, Streuverluste, flüchtige Wahrnehmung.", ["zwei Vorteile", "zwei Nachteile"])]);

c("Die FAMK bewertet einen Mediaplan für die Marke „Sportfreund“: Plan A: GRP 260, Reichweite 52 %; Plan B: GRP 180, Reichweite 60 %. Zielgruppe 3,0 Mio. Personen.",
 [q("Berechnen Sie die Kontakte pro erreichter Person für beide Pläne.", 6, "A: 260 : 52 = 5,0; B: 180 : 60 = 3,0.", ["zwei Rechnungen"]),
  q("Berechnen Sie die erreichte Zielpersonenzahl für beide Pläne.", 4, "A: 3,0 Mio. · 0,52 = 1,56 Mio.; B: 3,0 · 0,60 = 1,8 Mio.", ["zwei Rechnungen"]),
  q("Beurteilen Sie, welcher Plan bei Ziel „Aufbau von Reichweite“ besser ist.", 5, "Plan B (höhere Reichweite); A erzielt mehr Werbedruck (Frequenz).", ["Entscheidung", "Begründung"]),
  q("Welche Auswirkung hat ein hoher Werbedruck auf die Werbewirkung?", 5, "Mehr Wiederholung stärkt Erinnerung, kann aber Reaktanz/Abnutzung erzeugen (Wear-out).", ["Wirkung", "Gefahr"])]);

c("Das Unternehmen „Bürowerk“ (B2B, Bürostühle) will auf der Fachmesse „Office Aurelia“ ausstellen. Standkosten 24.000 €, Personal 6.000 €, Giveaways 3.000 €. Ziel: 150 qualifizierte Leads, durchschnittlicher Auftragswert 5.000 €, Abschlussquote 10 %.",
 [q("Berechnen Sie die Gesamtkosten der Messe.", 3, "24.000 + 6.000 + 3.000 = 33.000 €.", ["Rechnung"]),
  q("Berechnen Sie den erwarteten Umsatz aus den Leads.", 3, "150 · 10 % · 5.000 € = 75.000 €.", ["Rechnung"]),
  q("Berechnen Sie die Cost per Lead.", 3, "33.000 : 150 = 220 €.", ["Rechnung"]),
  q("Nennen Sie sechs Punkte einer Messecheckliste.", 6, "Ziele, Standplanung, Personal/Schulung, Einladungen/Terminvereinbarung, Lead-Erfassung, Nachfassen.", ["sechs Punkte"]),
  q("Nennen Sie zwei Vorteile von Messen im B2B.", 5, "Persönlicher Kontakt, Produktvorführung, Netzwerk, Marktüberblick.", ["zwei Vorteile"])]);

c("Ein Lebensmittelhersteller („Frischkost“) muss nach einem Rückruf wegen Verunreinigung kommunizieren. Es besteht Gesundheitsgefahr. Betroffen: 12.000 Packungen. Medien berichten bereits.",
 [q("Nennen Sie fünf Maßnahmen der Krisenkommunikation.", 8, "Krisenstab, Faktenlage klären, schnelle ehrliche Information (Rückruf, Warnung), Pressemitteilung/FAQ, Hotline, Monitoring Social Media.", ["fünf Maßnahmen"]),
  q("Welche rechtlichen Pflichten bestehen?", 6, "Behördenmeldung, öffentliche Warnung/Rückruf (LFGB), Produkthaftung beachten.", ["zwei Pflichten"]),
  q("Wie bauen Sie nach der Krise Vertrauen wieder auf?", 6, "Transparente Ursachenklärung, Qualitätsmaßnahmen kommunizieren, Zertifizierungen, Dialog mit Kunden.", ["zwei Maßnahmen"])]);

c("Die Kosmetikmarke „Hautnah“ plant eine Influencer-Kampagne (10 Creatorinnen, 120.000 € Budget). Reichweite insgesamt 2,5 Mio. Follower. Beiträge werden bezahlt.",
 [q("Berechnen Sie den TKP auf Basis der Follower.", 3, "120.000 : 2.500.000 · 1.000 = 48 €.", ["Rechnung"]),
  q("Nennen Sie drei Auswahlkriterien für Influencer.", 6, "Zielgruppenpassung, Glaubwürdigkeit/Engagement-Rate, Markenwerte, Fake-Follower-Prüfung.", ["drei Kriterien"]),
  q("Welche Kennzeichnungspflicht gilt?", 5, "Bezahlte Beiträge klar als Werbung/Anzeige kennzeichnen (UWG, Medienstaatsvertrag).", ["Pflicht", "Rechtsbezug"]),
  q("Nennen Sie zwei Risiken des Influencer-Marketings.", 6, "Imageschaden bei Fehlverhalten, fehlende Kontrolle, Fake-Follower, Rechtsverstöße.", ["zwei Risiken"])]);

c("Der Podcast-Vermarkter „Hörzeit“ bietet Mid-Roll-Spots an: TKP 28 €. Die Marke „Kaffeekult“ will 1,5 Mio. Hörer erreichen (Bruttokontakte). Budget 60.000 €.",
 [q("Berechnen Sie die Kosten für 1,5 Mio. Kontakte.", 4, "1.500.000 : 1.000 · 28 = 42.000 €.", ["Rechnung"]),
  q("Wie viele Kontakte wären mit dem gesamten Budget möglich?", 4, "60.000 : 28 · 1.000 = 2.142.857 Kontakte.", ["Rechnung"]),
  q("Nennen Sie zwei Vor- und zwei Nachteile von Podcast-Werbung.", 8, "Vorteile: loyale Hörer, hohe Aufmerksamkeit, Nischenzielgruppen. Nachteile: begrenzte Messbarkeit, kein Bild.", ["Vorteile", "Nachteile"]),
  q("Nennen Sie eine Alternative im Audiobereich.", 4, "Radio-Spot, Streaming-Audio-Ads.", ["Alternative"])]);

c("Der Verlag „Aurelia Zeitung“ will digitale Abos steigern (aktuell 28.000, Ziel 35.000 in einem Jahr). Preis 11,99 € monatlich, Budget 400.000 €.",
 [q("Berechnen Sie den Zuwachs in Prozent.", 3, "7.000 : 28.000 = 25 %.", ["Rechnung"]),
  q("Berechnen Sie die Cost per Acquisition.", 3, "400.000 : 7.000 = 57,14 €.", ["Rechnung"]),
  q("Schlagen Sie drei Maßnahmen vor.", 8, "Probeabo 1 € für 3 Monate, Paywall-Optimierung, Newsletter-Funnel, Kooperation mit Hochschulen.", ["drei Maßnahmen"]),
  q("Berechnen Sie den Jahresumsatz bei 35.000 Abos.", 6, "35.000 · 11,99 € · 12 = 5.035.800 €.", ["Rechnung", "Ergebnis"])]);

c("Der Radiosender „Rheinwelle“ möchte Hörer im Alter 20–35 gewinnen (Reichweite derzeit 6 %, Ziel 9 %). Budget 180.000 €. Region: 1,8 Mio. Einwohner in der Altersgruppe 20–35: 500.000.",
 [q("Berechnen Sie die derzeit und künftig erreichten Hörer in der Zielgruppe.", 5, "Aktuell 500.000 · 6 % = 30.000; Ziel 45.000.", ["zwei Rechnungen"]),
  q("Berechnen Sie die Cost per zusätzlicher Hörer.", 4, "180.000 : 15.000 = 12 €.", ["Rechnung"]),
  q("Nennen Sie drei Maßnahmen.", 6, "Social-Video-Kampagne, Hochschulevents, Streaming-/Podcast-Angebote, Gewinnspiele.", ["drei Maßnahmen"]),
  q("Nennen Sie zwei Kennzahlen der Radiomessung.", 5, "Hörer pro Durchschnittsstunde, Reichweite, Marktanteil (ma Audio).", ["zwei Kennzahlen"])]);

c("Die Stadt „Aurelia“ will eine Imagekampagne gegen das Bild der „grauen Industriestadt“. Zielgruppe: junge Fachkräfte und Touristen. Budget 800.000 €.",
 [q("Beschreiben Sie Ist- und Soll-Image.", 5, "Ist: grau, industriell. Soll: lebendig, kreativ, grün, zukunftsorientiert.", ["Ist", "Soll"]),
  q("Nennen Sie drei Maßnahmen und ordnen Sie Instrumente zu.", 9, "Eventreihe (Eventmarketing), Presse-/Influencer-Reisen (PR), Social-Kampagne #AureliaNeu, Plakatserie in Metropolen.", ["drei Maßnahmen", "Zuordnung"]),
  q("Wie messen Sie Imageveränderungen?", 6, "Befragungen vor/nach, Medienresonanzanalyse, Social-Listening, Besucherzahlen.", ["zwei Methoden"])]);

c("Das Start-up „Pfandpionier“ (Mehrweg-Kaffeebecher) sucht eine Markenpositionierung. Gründung vor 14 Monaten, 40 Partnercafés. Budget 70.000 €. Zielgruppe: umweltbewusste Café-Besucher.",
 [q("Entwickeln Sie einen Markenkern in drei Stichworten.", 4, "Nachhaltig, einfach, gemeinschaftlich.", ["drei Stichworte"]),
  q("Formulieren Sie einen Markennamen-Test: Nennen Sie drei Kriterien für einen guten Markennamen.", 6, "Einprägsam, unterscheidbar, schutzfähig/markenrechtlich frei, internationale Aussprache.", ["drei Kriterien"]),
  q("Nennen Sie zwei Maßnahmen mit geringem Budget.", 6, "Guerilla-Aktion in Cafés, Kooperation mit Cafés, Social-Media-Challenge, PR.", ["zwei Maßnahmen"]),
  q("Wie schützen Sie die Marke rechtlich?", 4, "Markenanmeldung beim DPMA/EUIPO, Recherche auf Verwechslungsgefahr.", ["Schutzrecht", "Behörde"])]);

c("Der Outdoor-Ausstatter „Gipfelstark“ plant eine Kooperation mit einem bekannten Bergsteiger als Markenbotschafter. Honorar 80.000 €, Laufzeit 12 Monate. Risiko: Reputation.",
 [q("Nennen Sie zwei Chancen und zwei Risiken von Testimonial-Werbung.", 8, "Chancen: Glaubwürdigkeit/Aufmerksamkeit; Risiken: Imageschaden bei Skandal, Abhängigkeit, Kosten.", ["Chancen", "Risiken"]),
  q("Nennen Sie drei Vertragsbestandteile.", 6, "Leistungen (Posts, Auftritte), Nutzungsrechte, Exklusivität, Moralklausel, Vergütung.", ["drei Bestandteile"]),
  q("Beurteilen Sie die Kennzeichnungspflicht bei der Zusammenarbeit.", 6, "Werbliche Zusammenarbeit muss erkennbar sein (#Werbung).", ["Pflicht", "Bezug"])]);

c("Das Kaffeehaus „Bohnenliebe“ möchte ein Treueprogramm einführen. Durchschnittlicher Bon 6,40 €, 3 Besuche pro Monat, Ziel +20 % Besuche. Budget 25.000 €.",
 [q("Berechnen Sie den Monatsumsatz je Kunde heute und nach Ziel.", 4, "Heute: 3 · 6,40 = 19,20 €; Ziel: 3,6 Besuche · 6,40 = 23,04 €.", ["zwei Rechnungen"]),
  q("Nennen Sie zwei Treueprogramm-Modelle.", 6, "Stempelkarte, Punktesystem/App, Gratis-Getränk nach 10 Käufen, Mitgliederstufen.", ["zwei Modelle"]),
  q("Nennen Sie zwei Vor- und Nachteile.", 6, "Vorteile: Bindung, Daten, höherer Umsatz. Nachteile: Kosten, Datenschutz, Rabattgewöhnung.", ["Vorteile", "Nachteile"]),
  q("Welche Datenschutzregel gilt für die App?", 4, "Einwilligung, Information, Zweckbindung (DSGVO).", ["Regel"])]);

c("Die Marke „Kinderglück“ (Kinderkleidung) will die Zielgruppe „Neugeborene-Eltern“ erschließen. Kontakt über Geburtskliniken geplant, Wellpack mit Gutschein. Budget 250.000 €.",
 [q("Beschreiben Sie Chancen und rechtliche Probleme dieser Direktansprache.", 6, "Chance: hochrelevanter Zeitpunkt. Probleme: Datenschutz/Einwilligung, Hausrecht der Kliniken, Gesundheitsdaten.", ["Chance", "Rechtsproblem"]),
  q("Nennen Sie zwei Alternativen ohne Datenschutzrisiko.", 6, "Elternzeitschriften/Hebammenkooperationen, Social Ads mit Interessentargeting, Babymessen.", ["zwei Alternativen"]),
  q("Berechnen Sie die Kosten je Gutscheineinlösung bei 5 % Einlösequote von 20.000 verteilten Gutscheinen und 40.000 € Gutscheinbudget.", 4, "Einlösungen: 1.000; 40.000 : 1.000 = 40 €.", ["Rechnung"]),
  q("Formulieren Sie einen Slogan.", 4, "„Von Anfang an gut angezogen.“", ["Slogan"])]);

c("Das Kreuzfahrtunternehmen „Meerblick“ will junge Gäste (25–40) gewinnen (Image: Rentnerurlaub). Budget 1,5 Mio. €. Preis ab 899 € pro Woche.",
 [q("Beschreiben Sie das Imageproblem und die Soll-Positionierung.", 5, "Ist: Rentnerurlaub; Soll: Erlebnis, Abenteuer, flexibel und nachhaltig.", ["Ist", "Soll"]),
  q("Wählen Sie zwei Medien und begründen Sie.", 6, "YouTube/Instagram (Reise-Content, junge Zielgruppe), Podcasts/Reisemagazine.", ["zwei Medien"]),
  q("Nennen Sie zwei Maßnahmen zur Produktanpassung.", 5, "Themenreisen (Sport, Musik), flexible Kabinenkonzepte, Co-Working an Bord.", ["zwei Maßnahmen"]),
  q("Nennen Sie zwei Risiken in der Kommunikation.", 4, "Umweltkritik (Greenwashing), unglaubwürdiger Imagebruch.", ["zwei Risiken"])]);

c("Der Haushaltsgerätehersteller „Kochwerk“ will mit einem Saugroboter (399 €) in den Markt. Wettbewerber mit Marken wie Roborock. Zielgruppe: Berufstätige Paare 30–50. Budget 650.000 €.",
 [q("Ordnen Sie den Saugroboter im Produktlebenszyklus des Marktes ein.", 4, "Wachstumsphase des Marktes für Saugroboter (steigende Nachfrage, viele Anbieter).", ["Phase", "Begründung"]),
  q("Wählen Sie Preisstrategie und Kommunikationsfokus.", 6, "Konkurrenzorientierter Preis/Penetration; Fokus auf Zeitersparnis und Zuverlässigkeit.", ["Strategie", "Fokus"]),
  q("Nennen Sie drei Kanäle.", 6, "Vergleichsportale/SEA, YouTube-Tests, Handels-Displays.", ["drei Kanäle"]),
  q("Nennen Sie zwei Testverfahren vor der Markteinführung.", 4, "Produkttest mit Probanden, Testmarkt, Online-Beta.", ["zwei Verfahren"])]);

c("Der Mobilitätsanbieter „Fahrweg“ (Carsharing) will in Aurelia den Marktanteil von 12 % auf 18 % erhöhen. Marktvolumen 18.000 Nutzer. Budget 300.000 €.",
 [q("Berechnen Sie die Nutzer heute und im Ziel.", 4, "Heute: 2.160; Ziel: 3.240.", ["zwei Rechnungen"]),
  q("Berechnen Sie den Zuwachs und die Cost per Neukunde.", 5, "1.080 neue Nutzer; 300.000 : 1.080 = 277,78 €.", ["zwei Rechnungen"]),
  q("Nennen Sie drei Maßnahmen.", 6, "Gratis-Anmeldung, Aktion ‚Freunde werben‘, Außenwerbung an Bahnhöfen.", ["drei Maßnahmen"]),
  q("Nennen Sie zwei Risiken des Preisvergleichs mit dem Marktführer.", 5, "Preiskampf, Imageschaden, geringere Marge.", ["zwei Risiken"])]);

c("Die Brettspielmarke „Würfelspaß“ hat einen Crowdfunding-Plan: Ziel 60.000 € in 30 Tagen, Budget Kommunikation 8.000 €. Zielgruppe: Spieler 25–45.",
 [q("Nennen Sie vier Elemente einer Crowdfunding-Kampagne.", 6, "Videopitch, Belohnungsstufen, Community-Aufbau vor dem Start, Updates, Social-Ads.", ["vier Elemente"]),
  q("Berechnen Sie den durchschnittlich nötigen Betrag pro Tag und bei 40 € Durchschnittsspende die Zahl der Unterstützer.", 6, "60.000 : 30 = 2.000 €/Tag; 60.000 : 40 = 1.500 Unterstützer.", ["zwei Rechnungen"]),
  q("Erläutern Sie zwei Chancen des Social Proof.", 4, "Bewertungen und Spenderzahlen erhöhen Vertrauen, soziale Bestätigung.", ["zwei Chancen"]),
  q("Nennen Sie zwei Kommunikationsmaßnahmen mit kleinem Budget.", 4, "Reddit/Foren, Influencer-Spieleabende.", ["zwei Maßnahmen"])]);

c("Die NGO „Meer ohne Müll“ plant eine Aktion zum Weltmeerestag. Ziel: 10.000 Unterschriften, 500 Freiwillige. Budget 55.000 €. Zielgruppe: junge Erwachsene.",
 [q("Berechnen Sie die Kosten je Unterschrift und je Freiwilligem bei jeweils 50 % Budgetanteil.", 4, "27.500 : 10.000 = 2,75 €; 27.500 : 500 = 55 €.", ["zwei Rechnungen"]),
  q("Nennen Sie drei Maßnahmen für die Aktion.", 8, "Strandreinigung mit Influencern, Petition online, Pressetermin, Social-Challenge #MeerOhneMüll.", ["drei Maßnahmen"]),
  q("Nennen Sie zwei rechtliche Aspekte.", 4, "Datenschutz bei Petition/Unterschriften, Gemeinnützigkeit/Spendenwerbung, Genehmigungen für Aktionen.", ["zwei Aspekte"]),
  q("Wie dokumentieren Sie die Wirkung?", 4, "Zahlen (Unterschriften, Freiwillige), Medienresonanz, Reichweite.", ["Kennzahlen"])]);

c("Die Konditorei „Zuckerwerk“ (3 Filialen) will ihre Online-Bestellungen für Torten verdoppeln (aktuell 400 pro Monat, Durchschnittsbon 38 €). Budget 30.000 € für sechs Monate.",
 [q("Berechnen Sie den zusätzlichen Monatsumsatz bei Zielerreichung.", 3, "400 · 38 € = 15.200 € zusätzlich.", ["Rechnung"]),
  q("Berechnen Sie die Cost per zusätzlicher Bestellung über sechs Monate (alle 400 zusätzlich pro Monat).", 3, "30.000 : (400 · 6) = 12,50 €.", ["Rechnung"]),
  q("Nennen Sie drei Online-Maßnahmen mit lokalem Fokus.", 8, "Google-Unternehmensprofil/Local SEO, Social-Ads mit Geotargeting, Newsletter/Coupon, Instagram-Content.", ["drei Maßnahmen"]),
  q("Formulieren Sie einen Claim.", 6, "„Zuckerwerk – dein süßer Moment, frei Haus.“", ["Claim", "Begründung"])]);

export default [{ file: "mako/pf-teil1d.json", bundle: { items: [t.done()] } }];
