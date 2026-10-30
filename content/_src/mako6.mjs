import { topic, V } from "./dsl.mjs";

const SRC = "Abgewandelt nach Zwischenprüfung MaKo (Joseph-DuMont-Berufskolleg) und eigene Grundlagenaufgaben";
const z = topic("mako-zp-aufgaben", { part: 1, src: SRC });
const mcs = (rows) => { for (const [q, r, w, e] of rows) { z.mc(q, r, w, e ? { e } : {}); if (typeof r === "string" && q.length < 220) z.card(q, r); } };

mcs([
  ["Ein Kunde der Agentur ist Einzelhändler und möchte seine Strategie mit Marktforschung unterstützen. Bei der Konkurrenzanalyse empfehlen Sie ihm NICHT, …", "schriftlich bei den Konkurrenten nach deren Umsätzen zu fragen.", ["das Werbeaufkommen zu messen.", "Testkäufe am POS durchzuführen.", "Geschäftsberichte zu analysieren.", "Verbraucher über ein Marktforschungsunternehmen zu befragen."]],
  ["Welche Definition gehört zur Panel-Befragung?", "Dauerhafte, wiederkehrende Befragung derselben Zielpersonen", ["Befragung zufällig ausgewählter Personen im Bus", "Befragung mithilfe bildlicher Darstellung (Comics)", "Kombinierte Befragung im Auftrag mehrerer Unternehmen"]],
  ["Welche Definition gehört zur Omnibus-Befragung?", "Kombinierte Befragung von Personen im Auftrag mehrerer Unternehmen", ["Dauerhafte Befragung derselben Personen", "Befragung während der Fahrt", "Befragung mit Bildmaterial"]],
  ["Ein Unternehmen möchte kurzfristig den Umsatz steigern. Zu welcher Aktion raten Sie?", "Consumer Promotion", ["Public Relations", "Sponsoring", "Eventmarketing"]],
  ["Eine Teilerhebung ist repräsentativ, wenn …", "die Stichprobe ein verkleinertes, strukturgleiches Abbild der Grundgesamtheit darstellt.", ["die Stichprobe mindestens 1.000 Personen umfasst.", "mindestens 3 % der Grundgesamtheit befragt werden.", "der Anteil von Männern und Frauen gleich ist.", "die Grundgesamtheit ein Abbild der Stichprobe ist."]],
  ["Ein Interviewer erhält den Auftrag, eine bestimmte Anzahl Personen mit vorgegebenen Merkmalen zu befragen, ist in der Auswahl aber frei. Welches Verfahren?", "Quotenauswahl", ["Zufallsauswahl", "Klumpenauswahl", "Random-Route-Verfahren", "Listenverfahren"]],
  ["Ein Unternehmen bringt neben seiner Marke „Super Crema“ (Süßwaren) auch Joghurt unter der Marke „Fruitimio“ auf den Markt. Welche Markenstrategie?", "Mehrmarkenstrategie", ["Familienmarkenstrategie", "Dachmarkenstrategie", "Einzelmarkenstrategie ohne weitere Marke", "Handelsmarkenstrategie"], "Mehrere eigenständige Marken desselben Unternehmens (Zwischenprüfungs-Lösungslogik)."],
  ["Welches Merkmal ist ein Vorteil offener Interviews gegenüber standardisierten?", "Hohe Flexibilität", ["Feste Fragebogenabfolge", "Multiple-Choice-Antwortvorgaben", "Geringer Auswertungsaufwand", "Leichte Vergleichbarkeit"]],
  ["Welche Definition kennzeichnet einen Testmarkt?", "Geografisch begrenztes Gebiet, in dem ein Produkt vor der Einführung getestet wird", ["Unbegrenzte Zahl von Marktteilnehmern", "Experiment der Sekundärforschung", "Nicht repräsentative Kaufkraft", "Reiner Onlinemarkt"]],
  ["Welche Maßnahme gehört zur Sekundärforschung?", "Internetrecherche", ["Gruppendiskussion", "Einzelinterview", "Face-to-Face-Befragung", "Onlinebefragung"]],
  ["Was beschreibt der Begriff „Insight“?", "Bedürfnisse und Motive von Menschen", ["Geplante Käufe von Zielgruppen", "Werbeausgaben der Konkurrenz", "Geheime Marketingstrategien der Konkurrenz", "Neuronale Vorgänge bei Produkttests"]],
  ["Welches Merkmal beschreibt die Soziodemografie?", "Lebensalter", ["Lebensstil", "Einkaufsstättenwahl", "Qualitätsbewusstsein", "Markentreue"]],
  ["Welche Aussage zu Validität ist richtig?", "Validität bedeutet die Gültigkeit einer Messung.", ["Validität beschreibt die Zuverlässigkeit bei Wiederholung.", "Validität beschreibt die Stichprobengröße.", "Validität bedeutet Repräsentativität."]],
  ["Was bedeutet Signifikanz?", "Das Ergebnis liegt über der Zufallswahrscheinlichkeit.", ["Das Ergebnis ist valide.", "Das Ergebnis ist repräsentativ.", "Das Ergebnis ist unveränderlich."]],
  ["Was ist eine Grundgesamtheit?", "Alle Elemente, über die eine Aussage getroffen werden soll", ["Die befragten Personen", "Die Hälfte aller Personen", "Die Stichprobe nach Zufallsauswahl"]],
  ["Welche Aussage zu qualitativer Marktforschung stimmt?", "Sie untersucht Motive und Meinungen in kleinen Gruppen.", ["Sie arbeitet mit sehr großen Stichproben.", "Sie liefert ausschließlich Zahlen.", "Sie ersetzt immer die quantitative Forschung."]],
  ["Welche Methode ist typisch für die Beobachtung?", "Mystery Shopping bzw. Testkauf", ["Telefonbefragung", "Desk Research", "Auswertung des Handelsregisters"]],
  ["Welche Methode gehört zur Primärforschung?", "Gruppendiskussion", ["Auswertung von Statistischen Jahrbüchern", "Analyse von Geschäftsberichten", "Internetrecherche"]],
  ["Welche Aufgabe haben die Werbeverbände ZAW und GWA?", "Interessenvertretung der Werbewirtschaft bzw. der Kommunikationsagenturen", ["Auflagenkontrolle", "Reichweitenmessung", "Verleihung von Kreativpreisen"]],
  ["Wer führt die Selbstkontrolle der Werbewirtschaft durch?", "Der Deutsche Werberat", ["Der ZAW-Bundestag", "Das Bundeskartellamt", "Die Landesmedienanstalt"]],
  ["Wer ermittelt die verbreiteten Auflagen der Printmedien?", "IVW", ["AGOF", "GWA", "ADC"]],
  ["Welche Berufsbezeichnung beschreibt die Person, die in der Agentur Termine überwacht?", "Trafficer", ["Texter", "Mediaplaner", "Art Director"]],
  ["Welche Berufsbezeichnung beschreibt die Kundenbetreuung in der Agentur?", "Kontakter bzw. Kundenberater", ["Trafficer", "Controller", "Creative Director"]],
  ["Welche Abteilung einer Agentur plant die Auswahl der Werbeträger?", "Media", ["Kreation", "Produktion", "Verwaltung"]],
  ["Welche Aussage zur Corporate Identity ist richtig?", "Sie ist das Selbstbild und die einheitliche Selbstdarstellung eines Unternehmens.", ["Sie ist das Fremdbild.", "Sie beschreibt nur das Logo.", "Sie entsteht ausschließlich durch Werbung."]],
  ["Das Image eines Unternehmens ist …", "das Fremdbild, das Außenstehende vom Unternehmen haben.", ["das Selbstbild.", "das Logo.", "die Rechtsform."]],
  ["Welche Aussage zum Marketing-Mix ist richtig?", "Die Instrumente Produkt, Preis, Distribution und Kommunikation müssen aufeinander abgestimmt sein.", ["Jedes Instrument wird unabhängig geplant.", "Es besteht nur aus Werbung.", "Die Distribution ist nicht Teil des Marketing-Mix."]],
  ["Welcher Begriff beschreibt die Entwicklung vom Verkäufer- zum Käufermarkt?", "Das Angebot übersteigt die Nachfrage; der Kunde rückt in den Mittelpunkt.", ["Die Nachfrage übersteigt das Angebot.", "Der Staat steuert die Märkte.", "Marketing wird abgeschafft."]],
  ["Wofür steht die Abkürzung GWA?", "Gesamtverband Kommunikationsagenturen", ["Gesellschaft für Werbeanalyse", "Gewerbeverband Werbung und Absatz", "Gesamtverband der Werbeartikelhersteller"]],
  ["Wofür steht die Abkürzung DPRG?", "Deutsche Public Relations Gesellschaft", ["Deutsche Plakat-Reklame-Gesellschaft", "Digitale Planungs- und Reichweitengemeinschaft", "Deutscher Produktions- und Rechtsverband"]],
  ["Welche Stelle vergibt in Deutschland Kreativpreise und vertritt Kreative?", "ADC (Art Directors Club)", ["IVW", "AGOF", "DPRG"]],
  ["Welche Information gehört zum Kundenbriefing?", "Zielgruppe, Ziele, Budget, Zeitrahmen", ["Interne Gehälter der Agentur", "Mitarbeiterbewertung", "Rechtsform der Druckerei"]],
  ["Welche Funktion hat das Re-Briefing?", "Das Auftragsverständnis wird schriftlich zusammengefasst und vom Kunden bestätigt.", ["Der Kunde zahlt eine Anzahlung.", "Die Agentur kündigt den Auftrag.", "Die Agentur beginnt mit der Produktion."]],
  ["Was versteht man unter einem Pitch?", "Wettbewerbspräsentation mehrerer Agenturen um einen Auftrag", ["Eine Produktpräsentation im Handel", "Ein Preisnachlass", "Eine Beschwerde"]],
  ["Welche Aussage zu Zielgruppen ist richtig?", "Zielgruppen werden anhand soziodemografischer, psychografischer und verhaltensbezogener Merkmale beschrieben.", ["Zielgruppen sind immer alle Einwohner.", "Zielgruppen werden nur über das Alter definiert.", "Zielgruppen sind für die Mediaplanung unwichtig."]],
  ["Welches Merkmal ist ein verhaltensbezogenes Zielgruppenmerkmal?", "Markentreue", ["Alter", "Wohnort", "Berufsabschluss"]],
  ["Welches Merkmal ist ein psychografisches Zielgruppenmerkmal?", "Wertehaltung und Lebensstil", ["Einkommen", "Geschlecht", "Haushaltsgröße"]],
  ["Welches Merkmal ist ein geografisches Zielgruppenmerkmal?", "Postleitzahlgebiet", ["Lebensstil", "Markentreue", "Mediennutzung"]],
  ["Was ist eine Persona?", "Eine fiktive, typische Vertreterin einer Zielgruppe mit Bedürfnissen und Verhalten", ["Eine reale Kundin im Kundenstamm", "Ein Markenlogo", "Ein Konkurrenzprodukt"]],
  ["Welche Aussage zum Deutschen Werberat ist richtig?", "Er spricht Rügen aus, kann aber keine Bußgelder verhängen.", ["Er verhängt Bußgelder bis 100.000 €.", "Er ist eine staatliche Behörde.", "Er prüft nur Fernsehwerbung."]],
  ["Welche Aussage zur Werbewirtschaft in Deutschland trifft zu?", "Die Werbewirtschaft trägt mit rund 1 % zum BIP bei und beschäftigt rund 900.000 Menschen.", ["Die Werbewirtschaft ist volkswirtschaftlich unbedeutend.", "Die meisten Beschäftigten arbeiten in Behörden.", "Der Werbemarkt schrumpft seit Jahrzehnten."]],
]);
z.tf("Eine Omnibus-Befragung wird im Auftrag mehrerer Unternehmen durchgeführt.", true)
 .tf("Die Panel-Befragung befragt jedes Mal neue Personen.", false)
 .tf("Eine Quotenstichprobe wird nach Zufall gezogen.", false)
 .tf("Die ungestützte Bekanntheit ist in der Regel niedriger als die gestützte.", true)
 .tf("Die Konkurrenzanalyse ist Teil der Marktforschung.", true)
 .match("Ordnen Sie dem Fachbegriff die Erklärung zu.", [
   ["Panel-Befragung", "Wiederholtes Befragen derselben Personen"],
   ["Omnibus-Befragung", "Mehrthemenbefragung"],
   ["Validität", "Gültigkeit nachweisbar"],
   ["Signifikanz", "Ergebnis über der Zufallswahrscheinlichkeit"],
 ])
 .match("Ordnen Sie jeden Verband der Aufgabe zu.", [
   ["ZAW", "Dachverband der Werbewirtschaft"],
   ["GWA", "Verband der Kommunikationsagenturen"],
   ["ADC", "Kreativverband mit Wettbewerben"],
   ["IVW", "Auflagenkontrolle"],
 ])
 .match("Ordnen Sie jedem Zielgruppenmerkmal die Kategorie zu.", [
   ["Haushaltseinkommen", "soziodemografisch"],
   ["Umweltbewusstsein", "psychografisch"],
   ["Einkaufsstättenwahl", "verhaltensbezogen"],
   ["Wohnort", "geografisch"],
 ])
 .order("Bringen Sie den Ablauf einer Marktforschung in die richtige Reihenfolge.", ["Problemdefinition und Zielsetzung", "Auswahl der Methode und Stichprobe", "Datenerhebung", "Auswertung und Interpretation", "Präsentation der Ergebnisse"], { d: 2 })
 .cloze("Bei der [[Primärforschung]] werden neue Daten erhoben, bei der [[Sekundärforschung]] vorhandene ausgewertet.")
 .cloze("Eine Stichprobe ist [[repräsentativ]], wenn sie ein [[verkleinertes]] Abbild der Grundgesamtheit darstellt.")
 .error("Welche Aussagen zur Marktforschung sind fehlerhaft?", [
   ["Qualitative Forschung arbeitet mit großen Stichproben und Zahlen.", true, "Das ist quantitative Forschung."],
   ["Ein Testmarkt ist ein geografisch begrenztes Gebiet.", false],
   ["Sekundärforschung erhebt grundsätzlich neue Daten.", true, "Sie wertet vorhandene Daten aus."],
   ["Panel-Befragungen befragen dieselben Personen wiederholt.", false],
 ])
 .tcalc(
  "Bei einer Umfrage unter {n} zufällig ausgewählten Personen kennen {k} die Marke ungestützt. Berechnen Sie die ungestützte Bekanntheit in Prozent.",
  "k/n*100",
  { n: V.pick([500, 800, 1000, 1200]), p: V.pick([0.15, 0.2, 0.25, 0.3]), k: V.expr("n*p", 0) },
  { unit: "%", steps: ["{k} : {n} · 100 = {result} %"] },
 )
 .tcalc(
  "Eine Marke hat eine gestützte Bekanntheit von {g} % in einer Zielgruppe von {zg|int} Personen. Wie viele Personen kennen die Marke gestützt?",
  "zg*g/100",
  { g: V.pick([40, 55, 65, 80, 85]), zg: V.int(100000, 2000000, 100000) },
  { unit: "Personen", dec: 0, steps: ["{zg|int} · {g} % = {result}"] },
 );

export default [{ file: "mako/zp-aufgaben.json", bundle: { items: [z.done()] } }];
