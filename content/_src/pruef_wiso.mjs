import { topic, V } from "./dsl.mjs";

const SRC = "Abgewandelt nach IHK-Abschlussprüfungen (WiSo, Teil 2) – Fortune Agentur (FAMK) / Kunde Zweitschatz";

const w = topic("wsp-pr-aufgaben", { part: 2, src: SRC, pts: 4 });

/* ---- Situation: Einzelunternehmen / Rechtsformen ---- */
w.mc("Die FAMK schlägt ihrem Kunden Zweitschatz vor, Sitzkissen aus alten Fahrradschläuchen herstellen zu lassen. Sie stoßen auf das Einzelunternehmen Reifenwerk Brandt e. K. und recherchieren die Vertretungsbefugnis. Die Vertretungsbefugnis hat bei einer Einzelunternehmung der …", "Inhaber.", ["Vorstand.", "Aufsichtsrat.", "Geschäftsführer.", "Komplementär."])
 .mc("Welches der folgenden Kriterien wird bei der Entscheidung über die Eintragungspflicht eines Einzelunternehmens ins Handelsregister NICHT herangezogen? Das Kriterium betrifft Informationen über …", "den Ort der Firmengründung.", ["den Jahresumsatz.", "die Art und Anzahl der Geschäftsvorgänge.", "die Anzahl der Beschäftigten.", "die Notwendigkeit einer kaufmännischen Buchführung."])
 .mc("Welche Aussage entspricht der Haftungsregelung bei einem Einzelunternehmen? Bei einem Einzelunternehmen haftet der …", "Einzelunternehmer mit seinem Privat- und Geschäftsvermögen.", ["Einzelunternehmer nur mit seinem Geschäftsvermögen.", "Kapitalgeber mit der höchsten Kapitaleinlage.", "Bankangestellte, der den Unternehmenskredit gewährt hat.", "Arbeitnehmer, der den Auftrag weitergegeben hat."])
 .mc("Die FAMK lässt bei Reifenwerk Brandt e. K. den Schriftzug „Sitzen für Zweitschatz“ in die Kissenbezüge prägen. Beim ersten Einsatz auf einem Event löst sich bei mehreren Kissen die Prägung ab. Welches Recht steht der FAMK gegenüber dem Reifenwerk vorrangig zu? Der FAMK steht vorrangig …", "die Beseitigung des Mangels zu.", ["kein Recht zu, da der offene Mangel sofort nach Lieferung hätte gerügt werden müssen.", "der Rücktritt vom Kaufvertrag sowie Schadensersatz neben der Leistung zu.", "der Rücktritt vom Kaufvertrag sowie Schadensersatz statt der Leistung zu.", "die Minderung des Kaufpreises zu."], { e: "Vorrang hat die Nacherfüllung (Nachbesserung/Ersatzlieferung)." })
 .mc("Neben den Kissen werden von der Gleitschirm-Manufaktur Nordwind GmbH Windsäcke mit dem Slogan „Weht für Zweitschatz“ gefertigt. Welche Aussage beschreibt die gesetzliche Regelung zur Gewinnverteilung bei einer GmbH?", "Der Gewinn wird nach dem Verhältnis der Geschäftsanteile auf die Gesellschafter verteilt.", ["Alle Gesellschafter erhalten den gleichen Gewinnanteil.", "Der Geschäftsführer erhält vorab 4 % auf sein Jahresgehalt, der Rest wird nach Köpfen verteilt.", "Jeder Gesellschafter erhält vorab 4 % auf seinen Kapitalanteil, der Restgewinn wird nach Köpfen verteilt.", "Jeder Gesellschafter erhält vorab 4 % auf seinen erwirtschafteten Umsatzanteil, der Rest wird nach Kapitalanteilen verteilt."], { e: "§ 29 GmbHG: Verteilung nach dem Verhältnis der Geschäftsanteile." });

/* ---- Situation: Event Straßenfest mit Ukulele-Gruppe ---- */
w.mc("Die FAMK beauftragt die Saitenwerk Hamburg e. K. mit Produktion und Branding von 24 Ukulelen mit dem Schriftzug „Zupfen für Zweitschatz“ zu einem Festpreis. Um welche Vertragsart handelt es sich? Es handelt sich um einen …", "Werkvertrag.", ["Dienstleistungsvertrag.", "Mietvertrag.", "Leasingvertrag.", "Honorarvertrag."], { e: "Geschuldet ist ein Erfolg (Herstellung eines bestimmten Werks)." })
 .mc("Die FAMK hat für die Ukulele-Gruppe eine freiberufliche Musikerin als Lehrerin engagiert. An welche Institution müssen wegen der Beauftragung der Musikerin Zahlungen geleistet werden?", "Künstlersozialkasse.", ["Rentenversicherung.", "Krankenkasse.", "Arbeitslosenversicherung.", "Berufsunfähigkeitsversicherung."])
 .mc("Das Saitenwerk sollte die Ukulelen laut Vertrag am 12.02. um 9:00 Uhr fix frei Haus an die FAMK liefern, liefert aber an die Adresse der Musikerin, wo niemand angetroffen wird. Die Instrumente werden im Fahrradschuppen abgestellt. Das Saitenwerk befindet sich ab 12.02., 9:00 Uhr …", "im Lieferungsverzug.", ["durch die Lieferung an die Musikerin nicht mehr in einer Lieferverpflichtung.", "im Annahmeverzug.", "im Zahlungsverzug.", "in keinem Verzug."], { e: "Fixgeschäft: Verzug ohne Mahnung, da am falschen Ort geleistet wurde." })
 .mc("Das geplante Auftakttreffen muss abgesagt werden, da die Instrumente fehlen. Zu Hause stellt die Musikerin fest, dass eine Ukulele aus dem Schuppen entwendet wurde. Welches Recht hat die FAMK gegenüber dem Saitenwerk?", "Das Recht auf Schadensersatz für die Cateringkosten sowie die Nachlieferung der fehlenden Ukulele.", ["Das Recht auf Nachlieferung. Das Catering kann von den Mitarbeitern gegessen werden.", "Das Recht auf Übernahme der Cateringkosten – die Lieferung erfolgte an einen trockenen, einwandfreien Ort.", "Das Recht auf eine Gutschrift über 50 % der Kosten, denn beide Seiten tragen Schuld.", "Keine Rechte, denn das Saitenwerk hat sich korrekt verhalten."])
 .mc("Am 05.03.2026 erhält die Zweitschatz GmbH die Rechnung der FAMK mit dem Zahlungsziel „zahlbar bis zum 20.03.2026“. Zu welchem Zeitpunkt gerät sie in Zahlungsverzug?", "Nach Ablauf des 20.03.2026.", ["30 Tage nach Zugang und Fälligkeit der Rechnung.", "Nach Zugang der Rechnung.", "Nach Zugang einer Mahnung und Ablauf der Nachfrist.", "Nach Zugang eines Mahnbescheides."], { e: "Kalendermäßig bestimmter Zahlungstermin → Verzug ohne Mahnung." })
 .mc("Ein Auszubildender der FAMK fotografiert beim Straßenfest auch Porträts Jugendlicher, ohne um Erlaubnis zu fragen. Die FAMK verkauft das Material an Zweitschatz. Da keine Einwilligung eingeholt wurde, liegt eine …", "mangelhafte Lieferung (Rechtsmangel) vor.", ["Annahmeverzug vor.", "Hemmung vor.", "Stundung vor.", "Zahlungsverzug vor."], { d: 3 });

/* ---- Siegel / Sicherheitszeichen / Recht ---- */
w.match("Welche Sicherheitszeichen sind den Farb-/Formvarianten zuzuordnen?", [
  ["Gelb und dreieckig", "Warnzeichen: Stolpergefahr"],
  ["Grün und viereckig", "Rettungszeichen: Erste Hilfe"],
  ["Rot und viereckig", "Brandschutzzeichen: Löschschlauch"],
  ["Rot und rund", "Verbotszeichen: Rauchen verboten"],
], [], { d: 1 })
 .mc("Für die T-Shirts beim Straßenfest soll die Nachhaltigkeit der Kleidung über ein Siegel belegt werden. Welches Umweltsiegel kennzeichnet umweltschonend produzierte Textilien?", "GOTS (Global Organic Textile Standard)", ["Bioland", "demeter", "EU-Bio-Logo für Lebensmittel", "Grüner Punkt"], { d: 2 })
 .mc("Der Veranstalter schreibt für alkoholfreie Getränke Pfandflaschen vor. Durch welches Zeichen wird ein Getränkepfandsystem gekennzeichnet?", "Das DPG-Pfandlogo (Einwegpfand)", ["Grüner Punkt", "Recyclingdreieck", "Blauer Engel", "FSC-Logo"], { d: 2 });

/* ---- Arbeitsrecht ---- */
w.mc("Bei einem Kunden soll in den nächsten Jahren massiv Personal abgebaut werden. Für welche Personengruppe existiert nur der allgemeine Kündigungsschutz? Ein allgemeiner Kündigungsschutz existiert …", "in sozial ungerechtfertigten Fällen (nach dem KSchG).", ["für Mitglieder des Betriebsrates.", "für Personen mit Schwerbehinderung.", "für Eltern in Elternzeit.", "für Auszubildende nach Ablauf der Probezeit."])
 .mc("Welche Aussage zu Aufgaben, Rechten und Pflichten eines Betriebsrates ist zutreffend?", "Der Betriebsrat hat Mitbestimmungsrechte bei der Ausgestaltung der Betriebskantine.", ["Betriebsräte erhalten für ihre Tätigkeit eine Betriebsratszulage.", "Die Sitzungen eines Betriebsrates sind öffentlich.", "Der Betriebsrat organisiert bei gescheiterten Tarifverhandlungen die Urabstimmung und den Streik im Unternehmen.", "Bei der Terminplanung der Sitzungen sind betriebliche Belange nicht zu beachten."], { e: "Sozialeinrichtungen (§ 87 Abs. 1 Nr. 8 BetrVG) sind mitbestimmungspflichtig." })
 .mc("Eine schwangere Auszubildende im 2. Lehrjahr hat Fragen zum Mutterschutz. Welche Information zum Mutterschutzgesetz ist richtig?", "Es gilt ein absolutes Beschäftigungsverbot sechs Wochen vor bis acht Wochen nach der Geburt.", ["Schwangeren darf trotz Mutterschutzgesetz jederzeit gekündigt werden.", "Nach der Entbindung gibt es nur ein relatives Beschäftigungsverbot.", "Das Mutterschutzgesetz gilt im Rahmen der Gleichstellung auch für werdende Väter.", "Überstunden für vollzeitbeschäftigte Schwangere sind gesetzlich immer erlaubt."])
 .mc("Bei der FAMK können sich Mitarbeiter zu Ersthelfern ausbilden lassen. Wer ist für die Organisation der betrieblichen Ersthelfer-Ausbildung rechtlich verpflichtet?", "Der Arbeitgeber", ["Die IHK", "Die zuständige Berufsgenossenschaft", "Der Betriebsrat", "Die Ausbildungsleitung"]);

/* ---- Wirtschaftspolitik / Tarif / Sozialversicherung / Form ---- */
w.mc("Welche Aussage zur Tarifautonomie ist richtig?", "Die Tarifvertragsparteien handeln ohne staatliche Mitwirkung für ihre Mitglieder verbindliche Vereinbarungen über Löhne und Arbeitsbedingungen aus.", ["Der Betriebsrat ist in seiner Arbeit nicht an staatliche Weisungen gebunden.", "Kommt nach dem Auslaufen eines Tarifvertrags keine neue Vereinbarung zustande, muss die Regierung eine Zwangsschlichtung herbeiführen.", "Jeder Arbeitnehmer kann mit seinem Arbeitgeber einen Einzelarbeitsvertrag unabhängig von jeder Regelung vereinbaren.", "Tarifautonomie ist die staatliche Ermächtigung der Tarifparteien, die Mitbestimmung in allen Unternehmen zu regeln."])
 .mc("Welche Auswirkung hat eine Erhöhung der gesetzlichen Rentenversicherungsbeiträge auf die Personalkosten der FAMK?", "Da die Arbeitgeber die Hälfte der Beiträge tragen, erhöhen sich in der Regel die Personalkosten.", ["Keine, denn die Erhöhung betrifft nur den Arbeitnehmeranteil.", "Es werden automatisch die Beitragsbemessungsgrenzen vermindert, damit die Belastung gleich bleibt.", "Die Beiträge sind an die Nettolohnentwicklung gekoppelt und müssen durch höhere Löhne ausgeglichen werden.", "Die Beitragsbemessungsgrenze wird im selben Umfang erhöht."])
 .mc("Welches Rechtsgeschäft bedarf zu seiner Wirksamkeit der öffentlichen Beglaubigung?", "Die Anmeldung zur Eintragung ins Handelsregister", ["Die Bürgschaftserklärung eines Kaufmanns", "Die Ernennung einer Prokuristin", "Ein Mietvertrag über eine längere Dauer als ein Jahr", "Beschlüsse der Hauptversammlung einer AG"], { e: "Anmeldungen zum Handelsregister: öffentlich beglaubigte Form (§ 12 HGB)." })
 .mc("In welcher Antwort sind staatliche Unternehmenssubventionen richtig beschrieben?", "Geldstrom vom Staat in Richtung Unternehmen", ["Leistungsstrom vom Staat in Richtung Unternehmen", "Geldstrom von Banken in Richtung Unternehmen", "Güterstrom von den Unternehmen in Richtung Staat", "Leistungsstrom von den Banken in Richtung Unternehmen"]);

/* ---- Abgewandelte Aufgaben aus älteren Prüfungen ---- */
w.mc("Ein Mitarbeiter der FAMK wechselt zu einem tarifgebundenen Unternehmen. Im Einzelarbeitsvertrag soll von tariflichen und gesetzlichen Bestimmungen abgewichen werden. Welche Vereinbarungen müssen beachtet werden, damit der Vertrag gilt? Die Vereinbarungen …", "müssen für den Arbeitnehmer günstiger sein als die tariflichen und gesetzlichen Regelungen (Günstigkeitsprinzip).", ["müssen günstiger als die tariflichen, aber nicht günstiger als die gesetzlichen Regelungen sein.", "gelten unabhängig von tariflichen und gesetzlichen Regelungen.", "dürfen ungünstiger als die tariflichen, aber nicht ungünstiger als die gesetzlichen Regelungen sein.", "dürfen ungünstiger als die tariflichen, aber nicht günstiger als die gesetzlichen Regelungen sein."])
 .order("Nachdem der bisherige Tarifvertrag fristgerecht gekündigt wurde: Bringen Sie die Schritte zum Zustandekommen eines neuen Tarifvertrags in die richtige Reihenfolge.", ["Aufnahme von Tarifverhandlungen durch die Tarifpartner", "Erklärung des Scheiterns der Verhandlungen durch eine Partei", "Urabstimmung über den Arbeitskampf mit nachfolgendem Streik", "Neue Verhandlungen während des Streiks", "Urabstimmung über das Ergebnis der neuen Tarifrunde und Ende des Streiks"], { d: 2 })
 .match("Ordnen Sie den Streikarten die Erklärungen zu.", [
  ["Warnstreik", "Dieser Streik ist zeitlich begrenzt."],
  ["Schwerpunktstreik", "Nur bestimmte Bereiche eines Wirtschaftszweiges streiken."],
  ["Wilder Streik", "Dieser Streik ist nicht von der Gewerkschaft organisiert."],
  ["Flächenstreik", "Ein ganzes Tarifgebiet streikt."],
], [], { d: 1 })
 .mc("Welche Aussage zu Tarifverträgen ist richtig?", "Das Recht, Tarifverträge abzuschließen, nennt sich Tarifautonomie und ist im Grundgesetz verankert.", ["Tarifverträge werden für eine Laufzeit von mindestens vier Jahren abgeschlossen.", "Rahmen- und Manteltarifvertrag werden immer für dieselbe Laufzeit abgeschlossen.", "Damit für einen Arbeitnehmer die Bestimmungen gelten, muss er bei Einstellung Mitglied der Gewerkschaft werden.", "Ein Unternehmen ist immer tarifgebunden, wenn es einen Betriebsrat hat."]);

/* ---- Rechenaufgaben/Templates (WiSo) ---- */
w.tcalc(
  "Das Reifenwerk Brandt e. K. liefert {m} Sitzkissen. Listenpreis {p|eur} je Stück, {r} % Rabatt, {s} % Skonto bei Zahlung innerhalb von 10 Tagen. Wie hoch ist der Überweisungsbetrag (netto), wenn die FAMK Skonto nutzt?",
  "m*p*(1-r/100)*(1-s/100)",
  { m: V.int(100, 400, 50), p: V.dec(6, 14, 2), r: V.pick([5, 8, 10]), s: V.pick([2, 3]) },
  { unit: "€", steps: ["Listenpreis gesamt = {m} · {p|eur}", "− {r} % Rabatt, − {s} % Skonto = {result|eur}"] },
)
 .tmc(
  "Welche Aussage zur gesetzlichen Gewinnverteilung bei einer {ctx.rf} ist richtig, wenn die Gesellschafter {ctx.verhaeltnis}?",
  "{ctx.richtig}",
  ["{ctx.w1}", "{ctx.w2}", "{ctx.w3}"],
  { ctx: V.pick([
    { rf: "GmbH", verhaeltnis: "Geschäftsanteile von 60.000 € und 20.000 € halten", richtig: "Der Gewinn wird im Verhältnis der Geschäftsanteile verteilt (3 : 1).", w1: "Der Gewinn wird zu gleichen Teilen verteilt.", w2: "Vorab 4 % auf die Kapitalanteile, Rest nach Köpfen.", w3: "Der Geschäftsführer erhält den Gewinn allein." },
    { rf: "OHG (ohne abweichende Vereinbarung, seit MoPeG)", verhaeltnis: "Beteiligungen im Verhältnis 2 : 1 haben", richtig: "Der Gewinn wird nach dem Verhältnis der Anteile verteilt.", w1: "Alle Gesellschafter erhalten den gleichen Anteil.", w2: "Vorab 4 % auf die Einlagen, Rest nach Köpfen.", w3: "Der Gewinn wird nach der Arbeitsleistung verteilt." },
  ]) },
  { d: 3 },
);

export default [{ file: "wsp/pr-aufgaben.json", bundle: { items: [w.done()] } }];
