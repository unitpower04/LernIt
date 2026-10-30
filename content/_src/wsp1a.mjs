import { topic, V, structure, subject, lf, tp } from "./dsl.mjs";

const SRC = "WSP LF1 (Unterricht)";

/* ---------- Struktur Fach WSP ---------- */
const struktur = structure([
  subject("wsp", "WSP – Wirtschafts- und Sozialprozesse", "Recht, Arbeitswelt, Finanzierung und VWL (Prüfungsteil 2 WiSo, teils Teil 3)", "#0d9488", [
    lf("wsp-lf1", "LF1", "Grundlagen: Betrieb, Recht & Arbeitswelt", [2], [
      tp("wsp-lf1-ziele", "Ökonomisches Prinzip & Zielbeziehungen", [2]),
      tp("wsp-lf1-rechtsformen", "Unternehmensformen", [2]),
      tp("wsp-lf1-firma-hr", "Firma, Kaufmann & Handelsregister", [2]),
      tp("wsp-lf1-vollmachten", "Prokura & Handlungsvollmacht", [2]),
      tp("wsp-lf1-ausbildung", "Ausbildungsvertrag, BBiG & JArbSchG", [2]),
      tp("wsp-lf1-arbeitsrecht", "Arbeitsrecht & Arbeitnehmerschutz", [2]),
      tp("wsp-lf1-orga", "Aufbau- & Ablauforganisation, Agenturtypen", [2, 3]),
      tp("wsp-lf1-gesundheit", "Gesundheits- & Umweltschutz im Betrieb", [2]),
    ]),
    lf("wsp-lf3", "LF3", "Rechtsgeschäfte, Kaufvertrag & Finanzierung", [2, 3], [
      tp("wsp-lf3-recht", "Rechtsordnung, Rechtssubjekte & Rechtsobjekte", [2]),
      tp("wsp-lf3-rechtsgeschaefte", "Rechtsgeschäfte, Form & Nichtigkeit/Anfechtung", [2]),
      tp("wsp-lf3-kaufvertrag", "Kaufvertrag, Angebot & AGB", [2]),
      tp("wsp-lf3-vertragsarten", "Vertragsarten (Miete, Leasing, Werk- & Dienstvertrag)", [2, 3]),
      tp("wsp-lf3-stoerungen", "Kaufvertragsstörungen, Mahnverfahren & Verjährung", [2]),
      tp("wsp-lf3-finanzierung", "Finanzierung, Kredit & Leasing", [3]),
    ]),
    lf("wsp-pr", "PR", "Prüfungsnahe WiSo-Aufgaben (Teil 2)", [2], [
      tp("wsp-pr-aufgaben", "Prüfungsnahe Aufgaben im IHK-Stil", [2]),
    ]),
    lf("wsp-lf5", "LF5", "Werberecht", [3], [
      tp("wsp-lf5-schutzrechte", "Schutzrechte: Marke, Patent, Design & Urheberrecht", [3]),
      tp("wsp-lf5-datenschutz", "Datenschutz (DSGVO) & Recht am eigenen Bild", [3]),
      tp("wsp-lf5-uwg", "Wettbewerbsrecht (UWG) & Werberat", [3]),
    ]),
    lf("wsp-lf12", "LF12", "Volkswirtschaft (Gesamtwirtschaftliche Einflüsse)", [2], [
      tp("wsp-lf12-ordnung", "Wirtschaftsordnungen", [2]),
      tp("wsp-lf12-markt", "Wettbewerb, Marktformen, Kooperation & Konzentration", [2]),
      tp("wsp-lf12-kreislauf", "Wirtschaftskreislauf", [2]),
      tp("wsp-lf12-ziele", "Stabilitätsgesetz & magisches Vier-/Sechseck", [2]),
      tp("wsp-lf12-bip", "BIP, Wachstum & Konjunktur", [2]),
      tp("wsp-lf12-preise", "Preisniveaustabilität: Inflation & Deflation", [2]),
      tp("wsp-lf12-arbeit", "Beschäftigung & Arbeitslosigkeit", [2]),
      tp("wsp-lf12-aussen", "Außenwirtschaftliches Gleichgewicht", [2]),
      tp("wsp-lf12-fiskal", "Fiskalpolitik", [2]),
      tp("wsp-lf12-geld", "Geldpolitik der EZB", [2]),
    ]),
  ]),
]);

/* =========================================================
   Ökonomisches Prinzip & Zielbeziehungen
   ========================================================= */
const ziele = topic("wsp-lf1-ziele", { part: 2, src: SRC })
  .summary("Ökonomisches Prinzip & Ziele", `
**Wirtschaften** heißt, knappe Güter zur Bedürfnisbefriedigung einzusetzen. Weil Mittel knapp sind, handeln Unternehmen nach dem **ökonomischen Prinzip**:

| Prinzip | Idee | Beispiel |
|---|---|---|
| **Minimalprinzip** (Sparprinzip) | gegebenes Ziel mit *möglichst wenig* Mitteln | Kampagne soll 500.000 Kontakte erreichen – zu minimalen Kosten |
| **Maximalprinzip** (Ergiebigkeitsprinzip) | gegebene Mittel für *möglichst großen* Erfolg | Mit 10.000 € Budget möglichst viele Kontakte |
| **Optimumprinzip** | günstigstes Verhältnis von Mitteln und Ergebnis | Mittel *und* Ziel sind variabel |

**Unternehmensziele**
- **ökonomisch**: Gewinn, Umsatz, Marktanteil, Wirtschaftlichkeit
- **sozial**: Arbeitsplätze, Mitarbeiterzufriedenheit, faire Bezahlung
- **ökologisch**: Ressourcenschonung, Emissionen senken, Recycling

**Zielbeziehungen**
- **Zielharmonie** (komplementär): Ziel A fördert Ziel B – z. B. mehr Umsatz → mehr Gewinn
- **Zielkonflikt** (konkurrierend): Ziel A behindert Ziel B – z. B. Gewinnmaximierung ↔ hohe Löhne / Umweltschutz
- **Zielneutralität** (indifferent): Ziele beeinflussen sich nicht
`)
  .cards([
    ["Was besagt das ökonomische Prinzip?", "Knappe Mittel möglichst wirtschaftlich einsetzen: Entweder ein Ziel mit möglichst wenig Mitteln (Minimalprinzip) oder mit gegebenen Mitteln den größten Erfolg (Maximalprinzip) erreichen."],
    ["Minimalprinzip – Merksatz?", "Gegebenes Ziel, möglichst geringer Mitteleinsatz.", "Auch Sparprinzip genannt"],
    ["Maximalprinzip – Merksatz?", "Gegebene Mittel, möglichst großer Erfolg.", "Auch Ergiebigkeitsprinzip genannt"],
    ["Beispiel Minimalprinzip in der Agentur?", "Ein Plakatmotiv soll in 3 Städten hängen – die Agentur holt Angebote ein und wählt das günstigste."],
    ["Beispiel Maximalprinzip in der Agentur?", "Mit 20.000 € Mediabudget sollen möglichst viele Personen der Zielgruppe erreicht werden."],
    ["Wann liegt eine Zielharmonie vor?", "Wenn die Erreichung eines Ziels die Erreichung eines anderen Ziels fördert (z. B. mehr Umsatz → mehr Gewinn)."],
    ["Wann liegt ein Zielkonflikt vor?", "Wenn die Erreichung eines Ziels die Erreichung eines anderen Ziels behindert (z. B. Kostensenkung ↔ Umweltschutz)."],
    ["Wann liegt Zielneutralität vor?", "Wenn sich zwei Ziele gegenseitig nicht beeinflussen."],
    ["Nenne die drei Zielarten eines Unternehmens.", "Ökonomische, soziale und ökologische Ziele."],
    ["Beispiele für ökonomische Unternehmensziele?", "Gewinnmaximierung, Umsatzsteigerung, Marktanteil, Rentabilität, Wirtschaftlichkeit."],
    ["Beispiele für soziale Unternehmensziele?", "Sichere Arbeitsplätze, faire Bezahlung, Gesundheitsschutz, Mitarbeiterzufriedenheit, Weiterbildung."],
    ["Beispiele für ökologische Unternehmensziele?", "Energie und Rohstoffe sparen, Abfall und Emissionen reduzieren, nachhaltige Materialien."],
    ["Was ist das Optimumprinzip?", "Das günstigste Verhältnis von Mitteleinsatz und Ergebnis – weder Mittel noch Ergebnis sind fest vorgegeben."],
    ["Warum muss gewirtschaftet werden?", "Weil die Bedürfnisse unbegrenzt, die Mittel (Güter, Zeit, Geld) aber knapp sind."],
  ])
  .gls([
    ["Ökonomisches Prinzip", "Grundsatz, knappe Mittel möglichst wirtschaftlich einzusetzen (Minimal-, Maximal- oder Optimumprinzip)."],
    ["Zielkonflikt", "Beziehung zwischen Zielen, bei der die Verwirklichung des einen Ziels die des anderen beeinträchtigt."],
    ["Zielharmonie", "Beziehung zwischen Zielen, bei der sich die Ziele gegenseitig fördern."],
    ["Nachhaltigkeit", "Wirtschaften so, dass ökonomische, soziale und ökologische Ziele langfristig im Gleichgewicht bleiben."],
  ])
  .mc("Eine Agentur soll eine Kampagne mit festgelegter Reichweite umsetzen und sucht dafür den günstigsten Medienmix. Welches Prinzip wendet sie an?", "Minimalprinzip", ["Maximalprinzip", "Optimumprinzip", "Subsidiaritätsprinzip", "Kostendeckungsprinzip"], { e: "Das Ziel (Reichweite) ist vorgegeben, die Mittel sollen minimiert werden." })
  .mc("Mit einem festen Budget von 15.000 € soll eine möglichst große Zahl an Kontakten erzielt werden. Welches Prinzip liegt vor?", "Maximalprinzip", ["Minimalprinzip", "Konzentrationsprinzip", "Personalprinzip", "Kongruenzprinzip"], { e: "Die Mittel sind fest, das Ergebnis soll maximiert werden." })
  .mc("Welche der folgenden Aussagen zum Zielkonflikt trifft zu?", "Eine Kostensenkung durch billigeres Verpackungsmaterial kann dem Umweltziel widersprechen.", ["Mehr Umsatz führt automatisch zu mehr Gewinn – das ist ein Zielkonflikt.", "Ein Zielkonflikt liegt vor, wenn sich zwei Ziele nicht beeinflussen.", "Zielkonflikte treten nur in Staatsbetrieben auf.", "Ein Zielkonflikt lässt sich durch Gesetze immer vermeiden."], { e: "Ökonomische und ökologische Ziele stehen häufig im Konflikt." })
  .mc("Welche der folgenden Aussagen beschreibt eine Zielharmonie?", "Höhere Mitarbeiterzufriedenheit führt zu weniger Krankheitstagen und senkt die Kosten.", ["Höhere Löhne senken den Gewinn.", "Umweltauflagen verteuern die Produktion.", "Die Farbe des Firmenlogos beeinflusst die Umsatzrendite nicht.", "Kürzere Lieferzeiten erhöhen die Lagerkosten."], { e: "Beide Ziele (Zufriedenheit, Kostensenkung) fördern sich gegenseitig." })
  .match("Ordnen Sie jedes Beispiel der Zielart zu.", [
    ["Gewinn um 8 % steigern", "ökonomisches Ziel"],
    ["Alle Mitarbeiter erhalten eine Gesundheitsprämie", "soziales Ziel"],
    ["Die Agentur stellt auf Ökostrom um", "ökologisches Ziel"],
  ], ["Zielneutralität"])
  .match("Ordnen Sie die Zielbeziehungen zu.", [
    ["Mehr Umsatz führt zu mehr Gewinn", "Zielharmonie"],
    ["Gewinnmaximierung führt zu Stellenabbau", "Zielkonflikt"],
    ["Ein neues Logo hat keinen Einfluss auf die Lieferzeit", "Zielneutralität"],
  ])
  .tf("Beim Maximalprinzip sind die Mittel gegeben und der Erfolg soll möglichst groß sein.", true)
  .tf("Beim Minimalprinzip soll mit gegebenen Mitteln ein möglichst hoher Ertrag erwirtschaftet werden.", false, { e: "Das beschreibt das Maximalprinzip. Beim Minimalprinzip ist das Ziel gegeben." })
  .tf("Ein Unternehmen verfolgt nur ökonomische Ziele.", false, { e: "Auch soziale und ökologische Ziele gehören zum Zielsystem." })
  .cloze("Beim [[Minimalprinzip]] ist das Ziel vorgegeben, beim [[Maximalprinzip]] sind die Mittel vorgegeben.", { d: 1 })
  .cloze("Fördern sich zwei Ziele gegenseitig, spricht man von [[Zielharmonie]]; behindern sie sich, von einem [[Zielkonflikt]].", { d: 1 })
  .order("Bringen Sie die Schritte des wirtschaftlichen Handelns in eine sinnvolle Reihenfolge.", ["Bedürfnisse erkennen", "Knappe Mittel feststellen", "Ökonomisches Prinzip wählen", "Mittel einsetzen und Ziel verfolgen", "Ergebnis überprüfen"], { d: 1 })
  .error("Welche Aussagen zu Unternehmenszielen sind fehlerhaft?", [
    ["Ökonomische Ziele sind z. B. Gewinn und Umsatz.", false],
    ["Zielkonflikte treten nie in Unternehmen auf.", true, "Zielkonflikte sind alltäglich, z. B. Kosten vs. Umweltschutz."],
    ["Ökologische Ziele betreffen den Umgang mit der Umwelt.", false],
    ["Soziale Ziele sind für den Unternehmenserfolg ohne Bedeutung.", true, "Mitarbeiterzufriedenheit beeinflusst Leistung und Bindung."],
  ])
  .tmc("Eine Agentur plant: {ctx.sit}. Welches ökonomische Prinzip wendet sie an?", "{ctx.p}", ["{ctx.w1}", "{ctx.w2}", "Optimumprinzip"], {
    ctx: V.pick([
      { sit: "Ein Radiospot soll 400.000 Hörer erreichen; verglichen werden die Preise dreier Sender", p: "Minimalprinzip", w1: "Maximalprinzip", w2: "Schwerpunktprinzip" },
      { sit: "Für eine Promotion stehen genau 8.000 € bereit; es sollen möglichst viele Kontakte entstehen", p: "Maximalprinzip", w1: "Minimalprinzip", w2: "Kostendeckungsprinzip" },
      { sit: "Ein Flyer muss bis Freitag gedruckt sein; die Druckerei mit dem geringsten Preis wird gesucht", p: "Minimalprinzip", w1: "Maximalprinzip", w2: "Verursachungsprinzip" },
      { sit: "Ein Etat von 25.000 € soll den größtmöglichen Bekanntheitszuwachs erzielen", p: "Maximalprinzip", w1: "Minimalprinzip", w2: "Äquivalenzprinzip" },
    ]),
  }, { d: 1 })
  .done();

/* =========================================================
   Unternehmensformen
   ========================================================= */
const rf = topic("wsp-lf1-rechtsformen", { part: 2, src: SRC })
  .summary("Unternehmensformen im Überblick", `
| Merkmal | e. K. | OHG | KG | GmbH | UG (haftungsb.) | AG |
|---|---|---|---|---|---|---|
| **Typ** | Einzelunternehmen | Personengesellschaft | Personengesellschaft | Kapitalgesellschaft | Kapitalgesellschaft | Kapitalgesellschaft |
| **Gründer** | 1 Person | mind. 2 | mind. 2 (Komplementär + Kommanditist) | 1 oder mehr | 1 oder mehr | 1 oder mehr |
| **Mindestkapital** | keins | keins | keins | 25.000 € Stammkapital | ab 1 € | 50.000 € Grundkapital |
| **Haftung** | unbeschränkt, mit Privat- und Geschäftsvermögen | alle Gesellschafter unbeschränkt, unmittelbar, solidarisch | Komplementäre unbeschränkt; Kommanditisten nur mit Einlage | nur Gesellschaftsvermögen | nur Gesellschaftsvermögen | nur Gesellschaftsvermögen |
| **Geschäftsführung/Vertretung** | Inhaber | jeder Gesellschafter einzeln | Komplementäre | Geschäftsführer | Geschäftsführer | Vorstand (Aufsichtsrat überwacht) |
| **Handelsregister** | Abt. A | Abt. A | Abt. A | Abt. B | Abt. B | Abt. B |
| **Firmenzusatz** | e. K. | OHG | KG | GmbH | UG (haftungsbeschränkt) | AG |

**Gewinnverteilung**
- **OHG/KG – seit 1.1.2024 (MoPeG)**: Gewinn und Verlust nach dem Verhältnis der Anteile (Einlagen), sofern der Gesellschaftsvertrag nichts anderes regelt
- **OHG/KG – frühere gesetzliche Regel** (steht noch in älteren IHK-Aufgaben): 4 % auf den Kapitalanteil vorab, Rest nach Köpfen (KG: „angemessenes Verhältnis“)
- **GmbH**: nach Geschäftsanteilen
- **AG**: Dividende je Aktie, beschlossen von der Hauptversammlung

⚠️ *In Aufgaben steht meist dabei, welche Regel gilt – genau lesen!*

**Entstehung**: Personengesellschaften sind rechtsfähig mit **Aufnahme der Geschäfte** (spätestens mit Eintragung); Kapitalgesellschaften erst mit **Eintragung ins Handelsregister**.

**Organe der AG**: *Vorstand* (leitet und vertritt), *Aufsichtsrat* (bestellt und kontrolliert den Vorstand), *Hauptversammlung* (Aktionäre; Dividende, Entlastung).

**Kapitalgesellschaften sind juristische Personen**: Rechtsfähigkeit mit Eintragung ins Handelsregister.
`)
  .cards([
    ["Haftung beim Einzelunternehmen (e. K.)?", "Unbeschränkt mit Privat- und Geschäftsvermögen. Der Inhaber vertritt das Unternehmen allein."],
    ["Mindestgesellschafter einer OHG?", "Zwei."],
    ["Haftung der OHG-Gesellschafter?", "Unbeschränkt, unmittelbar und solidarisch (jeder haftet für alle Schulden mit dem gesamten Vermögen)."],
    ["Vertretung in der OHG?", "Jeder Gesellschafter ist einzeln zur Vertretung berechtigt."],
    ["Gewinnverteilung bei der OHG – aktuelle gesetzliche Regel?", "Seit 1.1.2024 (MoPeG): nach dem Verhältnis der Anteile (Einlagen). Der Gesellschaftsvertrag kann abweichen."],
    ["Gewinnverteilung bei der OHG – frühere gesetzliche Regel?", "4 % auf den Kapitalanteil vorab, der Rest nach Köpfen (so noch in älteren IHK-Aufgaben).", "Achtung: Aufgabentext beachten!"],
    ["Wann erlangt eine OHG/KG Rechtsfähigkeit?", "Mit der Aufnahme der Geschäfte – spätestens mit der Eintragung ins Handelsregister."],
    ["Welche Gesellschafter hat eine KG?", "Komplementäre (Vollhafter) und Kommanditisten (Teilhafter)."],
    ["Haftung der Kommanditisten?", "Nur mit ihrer Kapitaleinlage."],
    ["Wer führt und vertritt die KG?", "Die Komplementäre. Kommanditisten sind von der Vertretung ausgeschlossen."],
    ["Was ist eine GmbH & Co. KG?", "Eine KG, bei der die GmbH Komplementär ist – dadurch ist die Haftung faktisch beschränkt. Es bleibt eine Personengesellschaft."],
    ["Stammkapital der GmbH?", "Mindestens 25.000 €, bei Gründung mindestens die Hälfte (12.500 €) einzuzahlen."],
    ["Wer vertritt die GmbH?", "Der Geschäftsführer."],
    ["Mindestkapital der UG (haftungsbeschränkt)?", "Ab 1 €. Dafür müssen 25 % des Jahresüberschusses in die gesetzliche Rücklage."],
    ["Grundkapital der AG?", "Mindestens 50.000 €, aufgeteilt in Aktien."],
    ["Nenne die drei Organe der AG.", "Vorstand, Aufsichtsrat, Hauptversammlung."],
    ["Aufgabe des Aufsichtsrats?", "Bestellt und überwacht den Vorstand."],
    ["Aufgabe des Vorstands?", "Leitet die AG in eigener Verantwortung und vertritt sie nach außen."],
    ["Was ist der Unterschied zwischen Personen- und Kapitalgesellschaft?", "Personengesellschaft: Gesellschafter haften persönlich (i. d. R.), Mitarbeit üblich. Kapitalgesellschaft: juristische Person, Haftung beschränkt auf das Gesellschaftsvermögen."],
    ["In welche Abteilung des Handelsregisters kommen GmbH und AG?", "Abteilung B."],
    ["In welche Abteilung kommen e. K., OHG, KG?", "Abteilung A."],
    ["Gewinnverteilung bei der GmbH?", "Nach dem Verhältnis der Geschäftsanteile."],
    ["Wann erlangt eine GmbH ihre Rechtsfähigkeit?", "Mit der Eintragung ins Handelsregister."],
    ["Welche Rechtsform kann ein Einzelunternehmer wählen, wenn eine zweite Person als Vollhafter einsteigt?", "Die OHG (zwei Vollhafter ohne weitere Gesellschafter)."],
  ])
  .gls([
    ["Komplementär", "Vollhafter einer KG; führt die Geschäfte und vertritt die Gesellschaft."],
    ["Kommanditist", "Teilhafter einer KG; haftet nur mit seiner Einlage und ist von der Geschäftsführung ausgeschlossen."],
    ["Juristische Person", "Rechtsgebilde (z. B. GmbH, AG), das selbst Träger von Rechten und Pflichten ist."],
    ["Stammkapital", "Summe der Stammeinlagen der Gesellschafter einer GmbH (mind. 25.000 €)."],
    ["Grundkapital", "In Aktien zerlegtes Eigenkapital einer AG (mind. 50.000 €)."],
    ["Solidarische Haftung", "Jeder Gesellschafter haftet für die gesamte Schuld; der Gläubiger kann sich einen aussuchen."],
  ])
  .mc("Welche Person hat bei einem Einzelunternehmen die Vertretungsbefugnis?", "Der Inhaber", ["Der Vorstand", "Der Aufsichtsrat", "Der Geschäftsführer", "Der Komplementär"])
  .mc("Wie haftet der Inhaber eines Einzelunternehmens?", "Mit seinem Privat- und Geschäftsvermögen", ["Nur mit dem Geschäftsvermögen", "Nur in Höhe der Stammeinlage", "Der Geschäftsführer haftet an seiner Stelle", "Gar nicht – das Unternehmen haftet"])
  .mc("Welche der folgenden Rechtsformen ist eine Kapitalgesellschaft?", "AG", ["OHG", "KG", "GbR", "Einzelunternehmen (e. K.)"])
  .mc("Wer hat bei der Kommanditgesellschaft (KG) die Vertretungsbefugnis?", "Jeder einzelne Komplementär", ["Jeder einzelne Kommanditist", "Alle Kommanditisten nur gemeinsam", "Der Gesellschafter mit der größten Einlage", "Der Aufsichtsrat"])
  .mc("Welche Aussage zur Haftung bei der KG ist richtig?", "Kommanditisten haften mit ihrer Einlage, Komplementäre mit Privat- und Geschäftsvermögen.", ["Alle Gesellschafter haften nur mit ihrer Einlage.", "Komplementäre haften nur mit der Einlage.", "Kommanditisten haften unbeschränkt und solidarisch.", "Die KG haftet nicht – nur die Gesellschafter persönlich."])
  .mc("Bei welcher Gesellschaftsform haften alle Gesellschafter solidarisch, unmittelbar und unbeschränkt?", "Offene Handelsgesellschaft (OHG)", ["Aktiengesellschaft (AG)", "GmbH", "UG (haftungsbeschränkt)", "Kommanditgesellschaft – Kommanditisten"])
  .mc("Welche Organe hat eine Aktiengesellschaft? Wählen Sie die zwei zutreffenden Organe.", ["Vorstand", "Aufsichtsrat"], ["Geschäftsführer", "Gesellschafterversammlung", "Genossenschaftsversammlung", "Betriebsversammlung"])
  .mc("Welche Aussage zur Gründung einer GmbH ist richtig?", "Der Gesellschaftsvertrag muss notariell beurkundet werden.", ["Eine GmbH entsteht schon mit dem Gesellschaftsvertrag ohne Eintragung.", "Mindestens drei Gründer sind erforderlich.", "Das Stammkapital beträgt mindestens 50.000 €.", "Die Gründung ist nur mit Sacheinlagen möglich."])
  .mc("Welche Aussage zur Aktiengesellschaft trifft zu?", "Die Eintragung erfolgt in Abteilung B des Handelsregisters.", ["Die AG ist eine Personengesellschaft.", "Das Grundkapital beträgt mindestens 20.000 €.", "Die Gründung ist ohne Satzung möglich.", "Die Aktionäre haften unbeschränkt."])
  .mc("Welchen Nachteil hat das Einzelunternehmen (e. K.)?", "Der Einzelunternehmer haftet allein und unbeschränkt.", ["Das Mindestkapital von 25.000 € muss eingezahlt werden.", "Ein Geschäftsführer muss bestellt werden.", "Die Gewinnverteilung ist kompliziert.", "Es muss jährlich eine Körperschaftsteuererklärung abgegeben werden."])
  .mc("Welche Aussage zur UG (haftungsbeschränkt) ist richtig?", "Sie kann bereits mit einem Stammkapital ab 1 € gegründet werden.", ["Sie benötigt 25.000 € Stammkapital.", "Sie ist eine Personengesellschaft.", "Ihre Gesellschafter haften unbeschränkt.", "Sie wird in Abteilung A des Handelsregisters eingetragen."])
  .mc("Ein Einzelunternehmer nimmt seine Ehefrau als weitere Vollhafterin auf; weitere Gesellschafter sind nicht geplant. In welche Rechtsform muss er zwangsläufig wechseln?", "OHG", ["KG", "GmbH", "AG", "eG"], { e: "Zwei Vollhafter ohne Teilhafter = OHG." })
  .match("Ordnen Sie jedem Merkmal die passende Rechtsform zu.", [
    ["Vorstand, Aufsichtsrat und Hauptversammlung", "AG"],
    ["Komplementäre und Kommanditisten", "KG"],
    ["Alle Gesellschafter haften unbeschränkt und vertreten einzeln", "OHG"],
    ["Stammkapital mindestens 25.000 €", "GmbH"],
    ["Alleiniger Inhaber, Zusatz e. K.", "Einzelunternehmen"],
  ], ["Genossenschaft", "Verein"], { d: 2 })
  .match("Ordnen Sie die Organe/Personen der richtigen Rechtsform zu.", [
    ["Geschäftsführer", "GmbH"],
    ["Vorstand", "AG"],
    ["Komplementär", "KG"],
    ["Inhaber", "e. K."],
  ])
  .tf("Kommanditisten sind von der Vertretung der KG ausgeschlossen.", true)
  .tf("Eine OHG kann von einer einzelnen Person gegründet werden.", false, { e: "Eine OHG braucht mindestens zwei Gesellschafter." })
  .tf("Die GmbH & Co. KG ist eine Kapitalgesellschaft.", false, { e: "Sie ist eine Personengesellschaft (KG) mit einer GmbH als Komplementär." })
  .tf("Die Rechtsfähigkeit einer GmbH beginnt mit der Eintragung ins Handelsregister.", true)
  .cloze("Die GmbH wird durch den [[Geschäftsführer]] vertreten, die AG durch den [[Vorstand]].")
  .cloze("Das Mindestgrundkapital einer AG beträgt [[50.000]] Euro; das Mindeststammkapital einer GmbH [[25.000]] Euro.", { d: 2 })
  .error("Welche Aussagen zu Rechtsformen sind fehlerhaft?", [
    ["Der Aufsichtsrat der AG kontrolliert den Vorstand.", false],
    ["Die Gesellschafter einer GmbH haften unbeschränkt mit ihrem Privatvermögen.", true, "Die Haftung ist auf das Gesellschaftsvermögen beschränkt."],
    ["Eine KG besteht aus Komplementären und Kommanditisten.", false],
    ["Die OHG wird in Abteilung B des Handelsregisters eingetragen.", true, "OHG und KG gehören in Abteilung A."],
  ])
  .tcalc(
    "Die {firma} OHG besteht aus {a}, {b} und {c}. Die Kapitaleinlagen betragen {ea|eur0} ({a}), {eb|eur0} ({b}) und {ec|eur0} ({c}). Im vergangenen Jahr wurde ein Gewinn von {g|eur0} erwirtschaftet. Ermitteln Sie nach der früheren gesetzlichen Regelung (4 % auf den Kapitalanteil vorab, Rest nach Köpfen) den Gewinnanteil von {c}.",
    "ec*0.04+(g-(ea+eb+ec)*0.04)/3",
    {
      firma: V.pick(["Müller", "Lindner", "Rieder & Fertig", "Kreativ-Kontor", "Neumann"]),
      a: V.pick(["Jule Rieder", "Anna Beck", "Sven Aydin"]),
      b: V.pick(["Jonas Rieder", "Tom Schulze", "Kai Demir"]),
      c: V.pick(["Tim Fertig", "Mia Kaya", "Lena Roth"]),
      ea: V.int(30000, 80000, 5000),
      eb: V.int(20000, 60000, 5000),
      ec: V.int(20000, 60000, 5000),
      g: V.int(24000, 60000, 1000),
    },
    { unit: "€", d: 3, steps: ["Kapitaleinlagen: {ea|eur0} + {eb|eur0} + {ec|eur0}", "4 % Vorab-Verzinsung des Kapitalanteils von {c}: {ec|eur0} × 4 %", "Restgewinn = Gewinn − Summe der 4 %-Anteile; Rest geteilt durch 3 (nach Köpfen)", "Gewinnanteil = Vorab + Restgewinnanteil = {result|eur}"] },
  )
  .tcalc(
    "An der {firma} GmbH sind beteiligt: {a} mit {ea|eur0}, {b} mit {eb|eur0} und {c} mit {ec|eur0}. Der Jahresgewinn von {g|eur0} wird nach Geschäftsanteilen verteilt. Wie hoch ist der Gewinnanteil von {b}?",
    "g*eb/(ea+eb+ec)",
    {
      firma: V.pick(["Pixelwerk", "Klangbild", "Textkontor", "Mediahaus Rhein"]),
      a: V.pick(["Frau Wagner", "Frau Öztürk", "Herr Brandt"]),
      b: V.pick(["Herr Sommer", "Frau Lehmann", "Herr Petrov"]),
      c: V.pick(["Frau Keller", "Herr Nowak", "Frau Dietrich"]),
      ea: V.int(10000, 40000, 5000),
      eb: V.int(10000, 40000, 5000),
      ec: V.int(10000, 40000, 5000),
      g: V.int(20000, 90000, 1000),
    },
    { unit: "€", steps: ["Summe der Geschäftsanteile: {ea|eur0} + {eb|eur0} + {ec|eur0}", "Anteil von {b}: {eb|eur0} ÷ Gesamtkapital", "Gewinnanteil = {g|eur0} × Anteil = {result|eur}"] },
  )
  .tcalc(
    "An der {firma} OHG sind {a} mit {ea|eur0}, {b} mit {eb|eur0} und {c} mit {ec|eur0} beteiligt. Der Gesellschaftsvertrag enthält keine Gewinnregelung. Der Jahresgewinn beträgt {g|eur0}. Wie hoch ist der Gewinnanteil von {a} nach der aktuellen gesetzlichen Regelung (Verteilung nach Anteilen, seit 1.1.2024)?",
    "g*ea/(ea+eb+ec)",
    {
      firma: V.pick(["Fortune", "Nordwind", "Kreativkontor", "Blaupause"]),
      a: V.pick(["Katrin", "Mara", "Elif"]),
      b: V.pick(["Tobias", "Jonas", "Deniz"]),
      c: V.pick(["Fridolin", "Henrik", "Paul"]),
      ea: V.int(25000, 50000, 5000),
      eb: V.int(25000, 50000, 5000),
      ec: V.int(25000, 80000, 5000),
      g: V.int(60000, 240000, 10000),
    },
    { unit: "€", steps: ["Gesamteinlagen: {ea|eur0} + {eb|eur0} + {ec|eur0}", "Anteil von {a} = {ea|eur0} ÷ Gesamteinlagen", "Gewinnanteil = {g|eur0} × Anteil = {result|eur}"] },
  )
  .tmc(
    "Die {firma} plant eine Rechtsform für ihr neues Unternehmen. {ctx.anf} Welche Rechtsform erfüllt diese Anforderung?",
    "{ctx.r}",
    ["{ctx.w1}", "{ctx.w2}", "{ctx.w3}"],
    {
      firma: V.pick(["Zukunftswerk", "Nordlicht Media", "Kreativ-Kontor"]),
      ctx: V.pick([
        { anf: "Die Gründer wollen nur mit dem Gesellschaftsvermögen haften und 25.000 € Stammkapital einbringen.", r: "GmbH", w1: "OHG", w2: "e. K.", w3: "KG" },
        { anf: "Zwei Gründer wollen beide unbeschränkt haften und das Geschäft gleichberechtigt führen.", r: "OHG", w1: "GmbH", w2: "AG", w3: "UG (haftungsbeschränkt)" },
        { anf: "Das Unternehmen soll Aktien an der Börse ausgeben.", r: "AG", w1: "KG", w2: "GmbH", w3: "OHG" },
        { anf: "Ein Investor möchte nur mit seiner Einlage haften und nicht mitarbeiten.", r: "KG (als Kommanditist)", w1: "OHG", w2: "e. K.", w3: "GbR" },
      ]),
    },
    { d: 2 },
  )
  .done();

/* =========================================================
   Firma, Kaufmann, Handelsregister
   ========================================================= */
const hr = topic("wsp-lf1-firma-hr", { part: 2, src: SRC })
  .summary("Firma, Kaufmann & Handelsregister", `
**Kaufmann (HGB)**
- **Ist-Kaufmann**: betreibt ein Handelsgewerbe (Gewerbebetrieb mit kaufmännisch eingerichtetem Geschäftsbetrieb nach Art und Umfang) – Kaufmann *kraft Gesetzes*
- **Kannkaufmann**: Kleingewerbe oder Land-/Forstwirtschaft – wird Kaufmann erst *durch Eintragung*
- **Formkaufmann**: Kapitalgesellschaften (GmbH, UG, AG) – Kaufmann durch ihre *Rechtsform*

**Firma** = der Name, unter dem der Kaufmann seine Geschäfte betreibt und unterschreibt. Arten: *Personenfirma*, *Sachfirma*, *Fantasiefirma*, *gemischte Firma* (jeweils mit Rechtsformzusatz).

**Firmengrundsätze**: Firmenwahrheit und -klarheit · Firmenausschließlichkeit/Unterscheidbarkeit · Firmenbeständigkeit · Firmenöffentlichkeit

**Handelsregister** (beim Amtsgericht, öffentlich einsehbar)
- **Abteilung A**: Einzelunternehmen, OHG, KG
- **Abteilung B**: Kapitalgesellschaften (GmbH, UG, AG)
- *deklaratorisch* (rechtsbekundend): Eintragung bestätigt nur eine bereits bestehende Tatsache (z. B. Ist-Kaufmann, Prokura)
- *konstitutiv* (rechtserzeugend): Eintragung begründet erst die Rechtslage (z. B. GmbH, AG, Kannkaufmann)

**Pflichten des Kaufmanns**: Firma führen, Handelsregister-Anmeldung, **Buchführung**, Inventar, Jahresabschluss, Aufbewahrung (Bücher/Jahresabschluss 10 Jahre, Handels- und Geschäftsbriefe 6 Jahre), Schriftverkehr mit Firmenbezeichnung.
`)
  .cards([
    ["Was ist ein Ist-Kaufmann?", "Wer ein Handelsgewerbe betreibt, das nach Art und Umfang einen kaufmännischen Geschäftsbetrieb erfordert – Kaufmann kraft Gesetzes."],
    ["Was ist ein Kannkaufmann?", "Kleingewerbetreibende oder Land-/Forstwirte, die sich freiwillig ins Handelsregister eintragen lassen und dadurch Kaufmann werden."],
    ["Was ist ein Formkaufmann?", "Kapitalgesellschaften (GmbH, UG, AG) – sie sind Kaufmann aufgrund ihrer Rechtsform."],
    ["Was ist die Firma im Sinne des HGB?", "Der Name, unter dem ein Kaufmann seine Geschäfte betreibt und unterschreibt."],
    ["Nenne die vier Firmenarten.", "Personenfirma, Sachfirma, Fantasiefirma, gemischte Firma."],
    ["Beispiel Personenfirma?", "„Peter Heyer e. K.“"],
    ["Beispiel Sachfirma?", "„Werbeagentur Süd GmbH“ (benennt den Gegenstand des Unternehmens)."],
    ["Beispiel Fantasiefirma?", "„Pixelwerk GmbH“ – frei erfundener Name."],
    ["Was besagt der Grundsatz der Firmenwahrheit?", "Die Firma darf nicht irreführen (z. B. nicht über Art, Größe oder Rechtsform täuschen)."],
    ["Was besagt der Grundsatz der Firmenausschließlichkeit?", "Jede Firma muss sich von anderen am selben Ort eingetragenen Firmen deutlich unterscheiden."],
    ["Was besagt der Grundsatz der Firmenbeständigkeit?", "Bei Inhaberwechsel oder Namensänderung darf die bisherige Firma beibehalten werden."],
    ["Was besagt die Firmenöffentlichkeit?", "Die Firma wird im Handelsregister eingetragen und ist öffentlich einsehbar."],
    ["Wer führt das Handelsregister?", "Das Amtsgericht (Registergericht)."],
    ["Was wird in Abteilung A des Handelsregisters eingetragen?", "Einzelunternehmen, Personengesellschaften (OHG, KG)."],
    ["Was wird in Abteilung B eingetragen?", "Kapitalgesellschaften (GmbH, UG, AG)."],
    ["Deklaratorische Eintragung – was heißt das?", "Rechtsbekundend: Die Eintragung gibt nur wieder, was schon gilt (z. B. Ist-Kaufmann, Prokura)."],
    ["Konstitutive Eintragung – was heißt das?", "Rechtserzeugend: Erst durch die Eintragung entsteht die Rechtslage (z. B. GmbH, AG, Kannkaufmann)."],
    ["Nenne eintragungspflichtige Tatsachen.", "Firma, Sitz, Inhaber/Gesellschafter, Rechtsform, Vertretungsbefugnis, Prokura, Insolvenz, Auflösung."],
    ["Wie lange müssen Handels- und Geschäftsbriefe aufbewahrt werden?", "6 Jahre (Bücher, Inventare und Jahresabschlüsse 10 Jahre)."],
    ["Welche Pflichten hat ein Kaufmann?", "Registerpflicht, Firmenführung, Geschäftsbriefpublizität (Mindestangaben auf Briefen), Rechnungslegung/Buchführung, Aufbewahrung, Kontrollpflicht für Waren."],
    ["Wer meldet ein Unternehmen zum Handelsregister an?", "Ein Notar (elektronisch, beglaubigt) beim Amtsgericht."],
    ["Was wird im Handelsregister veröffentlicht?", "Firma, Rechtsform, Sitz, Gegenstand des Unternehmens, Prokura, Vertretungsberechtigung, Stamm-/Grund-/Kommanditkapital, Geschäftsführung."],
    ["Werden Freiberufler ins Handelsregister eingetragen?", "Nein – Freie Berufe (z. B. selbstständige Fotografen, Texter) sind kein Handelsgewerbe."],
    ["Erlischt eine eingetragene Firma durch den Tod des Inhabers?", "Nein – sie muss aktiv gelöscht werden."],
    ["Was bedeutet „öffentlicher Glaube“ des Handelsregisters?", "Wer auf eine Eintragung vertraut, wird geschützt (Rechtssicherheit im Geschäftsverkehr)."],
    ["Wo wird ein Gewerbe angemeldet?", "Beim Gewerbeamt der Stadt; außerdem Finanzamt (Steuernummer), IHK (Mitgliedschaft), Berufsgenossenschaft (Unfallversicherung), Betriebsnummer bei der Bundesagentur für Arbeit (wenn Mitarbeiter)."],
    ["Wer ist bei Gründung einer Kapitalgesellschaft zuerst dran: Handelsregister oder Gewerbeamt?", "Zuerst Notar/Handelsregister, danach die Gewerbeanmeldung."],
    ["Welche Rechtsformzusätze sind Pflicht?", "e. K., OHG, KG, GmbH, UG (haftungsbeschränkt), AG – je nach Rechtsform."],
  ])
  .gls([
    ["Handelsregister", "Öffentliches Verzeichnis beim Amtsgericht über Kaufleute und ihre rechtlichen Verhältnisse (Abteilung A und B)."],
    ["Firma", "Name, unter dem ein Kaufmann seine Geschäfte betreibt."],
    ["Deklaratorisch", "Rechtsbekundend – die Eintragung gibt eine schon bestehende Rechtslage nur wieder."],
    ["Konstitutiv", "Rechtserzeugend – erst die Eintragung begründet die Rechtslage."],
    ["Kaufmann", "Wer ein Handelsgewerbe betreibt (Ist-, Kann- oder Formkaufmann)."],
  ])
  .mc("In welcher Abteilung des Handelsregisters wird eine GmbH eingetragen?", "Abteilung B", ["Abteilung A", "Abteilung C", "Vereinsregister", "Grundbuch"])
  .mc("In welcher Abteilung des Handelsregisters wird eine OHG eingetragen?", "Abteilung A", ["Abteilung B", "Genossenschaftsregister", "Abteilung C", "Das Gewerberegister"])
  .mc("Welcher der folgenden Kaufleute ist Kaufmann durch seine Rechtsform?", "Die Pixelwerk GmbH (Formkaufmann)", ["Der Kleingewerbetreibende ohne Eintragung", "Der Landwirt ohne Eintragung", "Der Freiberufler (Fotograf)", "Der Kleingärtner"])
  .mc("Welche Eintragung ins Handelsregister ist konstitutiv (rechtserzeugend)?", "Die Eintragung einer GmbH", ["Die Eintragung eines Ist-Kaufmanns", "Die Eintragung einer Prokura", "Die Eintragung einer Änderung der Geschäftsanschrift", "Die Eintragung des Inhaberwechsels einer OHG"], { e: "Die GmbH entsteht erst mit der Eintragung." })
  .mc("Welche Aussage zur deklaratorischen Wirkung der Eintragung ist richtig?", "Die Eintragung bestätigt nur, dass der Betreiber eines Handelsgewerbes bereits Kaufmann ist.", ["Sie begründet erst die Kaufmannseigenschaft.", "Sie ist bei einer AG verpflichtend deklaratorisch.", "Sie gilt nur für Kleingewerbetreibende.", "Sie hat keinerlei Wirkung."])
  .mc("Welches der folgenden Kriterien wird bei der Frage, ob ein Einzelunternehmen eingetragen werden muss, nicht herangezogen?", "Der Ort der Firmengründung", ["Der Jahresumsatz", "Art und Anzahl der Geschäftsvorgänge", "Die Anzahl der Beschäftigten", "Die Notwendigkeit einer kaufmännischen Buchführung"], { e: "Entscheidend sind Art und Umfang des Geschäftsbetriebs, nicht der Gründungsort." })
  .mc("Der Grundsatz der Firmenwahrheit besagt, dass …", "die Firma nicht irreführen darf.", ["die Firma immer den Namen des Inhabers enthalten muss.", "jede Firma einmalig in Deutschland sein muss.", "die Firma nie geändert werden darf.", "die Firma nicht eingetragen werden muss."])
  .match("Ordnen Sie jeder Firma die Firmenart zu.", [
    ["Johanna Lindner e. K.", "Personenfirma"],
    ["Süddeutsche Werbeagentur GmbH", "Sachfirma"],
    ["Zukunftswerk UG (haftungsbeschränkt)", "Fantasiefirma"],
    ["Lindner Media Service GmbH", "gemischte Firma"],
  ])
  .match("Ordnen Sie zu: konstitutiv oder deklaratorisch?", [
    ["Eintragung einer Aktiengesellschaft", "konstitutiv"],
    ["Eintragung eines Kleingewerbes (Kannkaufmann)", "konstitutiv"],
    ["Eintragung eines Ist-Kaufmanns", "deklaratorisch"],
    ["Eintragung der Erteilung einer Prokura", "deklaratorisch"],
  ], [], { d: 3 })
  .tf("Kleingewerbetreibende müssen sich ins Handelsregister eintragen lassen.", false, { e: "Sie dürfen (Kannkaufmann), müssen aber nicht." })
  .tf("Das Handelsregister wird beim Amtsgericht geführt und ist öffentlich.", true)
  .tf("Die Aufbewahrungsfrist für Handelsbriefe beträgt 6 Jahre.", true)
  .cloze("Die Firma einer GmbH muss den Zusatz [[GmbH]] enthalten; ein Einzelunternehmen führt den Zusatz [[e. K.]].")
  .cloze("Das Handelsregister wird vom [[Amtsgericht]] geführt. In Abteilung [[A]] stehen Einzelunternehmen und Personengesellschaften.", { d: 2 })
  .order("Bringen Sie die Schritte der Gründung einer GmbH in die richtige Reihenfolge.", ["Gesellschaftsvertrag notariell beurkunden", "Stammkapital einzahlen", "Geschäftsführer bestellen", "Anmeldung zum Handelsregister", "Eintragung – die GmbH entsteht"], { d: 2 })
  .done();

/* =========================================================
   Prokura & Handlungsvollmacht
   ========================================================= */
const vm = topic("wsp-lf1-vollmachten", { part: 2, src: SRC })
  .summary("Prokura & Handlungsvollmacht", `
| | **Prokura** (§§ 48 ff. HGB) | **Handlungsvollmacht** (§ 54 HGB) |
|---|---|---|
| **Erteilung** | nur durch Inhaber/gesetzl. Vertreter, ausdrücklich (mündlich/schriftlich) | durch Inhaber, Prokurist oder Handlungsbevollmächtigten, formlos (auch stillschweigend) |
| **Handelsregister** | wird eingetragen (deklaratorisch) | keine Eintragung |
| **Zeichnung** | *ppa.* (per procura) | *i. V.* (Generalhandlungsvollmacht) bzw. *i. A.* |
| **Umfang** | alle gerichtlichen und außergerichtlichen Geschäfte, die ein Handelsgewerbe gewöhnlich mit sich bringt | je nach Art: alle gewöhnlichen Geschäfte (Generalvollmacht), Geschäfte einer bestimmten Art (Arthandlungsvollmacht) oder ein einzelnes Geschäft (Einzelvollmacht) |
| **Arten** | Einzel-, Gesamt-, Filialprokura | General-, Art-, Einzelhandlungsvollmacht |

**Ein Prokurist darf nicht** (ohne besondere Befugnis): Grundstücke **veräußern oder belasten** · **Prokura erteilen** · Bilanz/Steuererklärung unterschreiben · Insolvenzantrag stellen · das Geschäft verkaufen · Gesellschafter aufnehmen · Privatgeschäfte des Inhabers tätigen.
*Grundstücke erwerben* darf er!

**Handlungsbevollmächtigte** benötigen besondere Befugnis für: Grundstücksgeschäfte, Darlehen aufnehmen, Prozesse führen, Wechsel ausstellen.

**Erlöschen der Prokura**: Widerruf (jederzeit), Beendigung des Arbeitsverhältnisses, Geschäftsaufgabe, Tod des Prokuristen. *Nicht* durch Tod des Inhabers oder Inhaberwechsel.
`)
  .cards([
    ["Wer kann Prokura erteilen?", "Nur der Inhaber oder sein gesetzlicher Vertreter (z. B. Geschäftsführer, Vorstand)."],
    ["Wie wird die Prokura erteilt?", "Ausdrücklich (mündlich oder schriftlich) und wird ins Handelsregister eingetragen (deklaratorisch)."],
    ["Mit welchem Zusatz zeichnet ein Prokurist?", "„ppa.“ (per procura)."],
    ["Mit welchem Zusatz zeichnet ein Handlungsbevollmächtigter?", "„i. V.“ (in Vertretung) bzw. „i. A.“ (im Auftrag)."],
    ["Nenne die drei Arten der Prokura.", "Einzelprokura, Gesamtprokura, Filialprokura."],
    ["Was ist eine Gesamtprokura?", "Mehrere Prokuristen dürfen nur gemeinsam handeln."],
    ["Nenne die drei Arten der Handlungsvollmacht.", "Generalhandlungsvollmacht, Arthandlungsvollmacht, Einzelhandlungsvollmacht."],
    ["Beispiel Arthandlungsvollmacht?", "Der Einkaufsleiter darf alle Einkäufe für das Unternehmen tätigen."],
    ["Beispiel Einzelhandlungsvollmacht?", "Ein Praktikant wird beauftragt, für ein Shooting Hotelzimmer zu buchen."],
    ["Beispiel Generalhandlungsvollmacht?", "Ein Abteilungsleiter darf alle gewöhnlichen Geschäfte seines Bereichs abschließen."],
    ["Was darf ein Prokurist nicht ohne besondere Befugnis?", "Grundstücke veräußern oder belasten, Prokura erteilen, Bilanz unterschreiben, Insolvenz anmelden, das Geschäft verkaufen."],
    ["Darf ein Prokurist ein Grundstück kaufen?", "Ja – der Erwerb ist von der Prokura gedeckt. Nur Veräußerung und Belastung brauchen eine besondere Befugnis."],
    ["Darf ein Prokurist Mitarbeiter einstellen?", "Ja – das gehört zum gewöhnlichen Geschäftsbetrieb."],
    ["Darf ein Prokurist einem anderen Prokura erteilen?", "Nein – das darf nur der Inhaber."],
    ["Wie erlischt die Prokura?", "Durch Widerruf, Ende des Arbeitsverhältnisses, Geschäftsaufgabe oder Tod des Prokuristen."],
    ["Erlischt die Prokura beim Tod des Inhabers?", "Nein."],
    ["Wird die Handlungsvollmacht ins Handelsregister eingetragen?", "Nein."],
    ["Wofür braucht ein Handlungsbevollmächtigter eine besondere Vollmacht?", "Grundstücksgeschäfte, Darlehensaufnahme, Prozessführung, Wechselverbindlichkeiten."],
  ])
  .gls([
    ["Prokura", "Umfassende handelsrechtliche Vollmacht, die ins Handelsregister eingetragen wird (§§ 48 ff. HGB)."],
    ["Handlungsvollmacht", "Vollmacht für Geschäfte, die ein Handelsgewerbe gewöhnlich mit sich bringt (§ 54 HGB)."],
    ["ppa.", "Zeichnungszusatz des Prokuristen (per procura)."],
    ["i. V.", "Zeichnungszusatz bei Handlungsvollmacht (in Vertretung)."],
  ])
  .mc("Welche Aussage zur Erteilung der Prokura ist richtig?", "Sie darf nur vom Inhaber oder seinem gesetzlichen Vertreter erteilt werden.", ["Jeder Abteilungsleiter darf Prokura erteilen.", "Ein Prokurist darf anderen Prokura erteilen.", "Sie erlischt mit dem Tod des Inhabers.", "Sie wird nicht ins Handelsregister eingetragen."])
  .mc("Welche der folgenden Handlungen darf ein Prokurist ohne besondere Befugnis vornehmen?", "Einen neuen Mitarbeiter einstellen", ["Ein Betriebsgrundstück verkaufen", "Einem Kollegen Prokura erteilen", "Den Jahresabschluss für den Inhaber unterschreiben", "Das gesamte Unternehmen verkaufen"])
  .mc("Welche Vollmacht ist notwendig, wenn ein Praktikant beauftragt wird, ein einziges Mal Hotels für das Fotoshooting zu buchen?", "Einzelvollmacht", ["Prokura", "Generalhandlungsvollmacht", "Gesamtprokura", "Keine Vollmacht"])
  .mc("Welche Vollmacht benötigt der Etat Director, der alle laufenden, gewöhnlichen Geschäfte abschließen darf?", "Generalhandlungsvollmacht", ["Einzelvollmacht", "Arthandlungsvollmacht", "Prokura", "Keine"], { e: "Alle gewöhnlichen Geschäfte = Generalhandlungsvollmacht." })
  .mc("Wie zeichnet ein Prokurist?", "ppa.", ["i. V.", "i. A.", "e. K.", "z. K."])
  .mc("Wodurch erlischt die Prokura nicht?", "Tod des Inhabers", ["Widerruf durch den Inhaber", "Beendigung des Arbeitsverhältnisses", "Aufgabe des Handelsgeschäfts", "Tod des Prokuristen"])
  .match("Ordnen Sie jedem Fall die notwendige Vollmacht zu.", [
    ["Der Einkaufsleiter bestellt regelmäßig Druckpapier", "Arthandlungsvollmacht"],
    ["Die Assistentin der Geschäftsführung stellt selbstständig Mitarbeiter ein und unterschreibt mit ppa.", "Prokura"],
    ["Ein Werkstudent soll einmalig ein Paket bei der Post aufgeben", "Einzelvollmacht"],
    ["Ein Abteilungsleiter schließt alle üblichen Geschäfte seines Bereichs ab", "Generalhandlungsvollmacht"],
  ], ["Gesamtprokura", "Filialprokura"])
  .match("Dürfen Prokurist/Handlungsbevollmächtigte das Geschäft vornehmen? (Prokura = ja/nein)", [
    ["Mitarbeiter einstellen", "Ja – Prokura reicht"],
    ["Ein Grundstück für die Agentur kaufen", "Ja – Prokura reicht"],
    ["Ein Betriebsgrundstück verkaufen", "Nein – besondere Befugnis nötig"],
    ["Einem Kollegen Prokura erteilen", "Nein – nur der Inhaber"],
  ], [], { d: 3 })
  .tf("Die Prokura wird ins Handelsregister eingetragen.", true)
  .tf("Die Handlungsvollmacht muss ins Handelsregister eingetragen werden.", false)
  .tf("Ein Prokurist darf ohne besondere Befugnis Grundstücke des Unternehmens veräußern.", false)
  .cloze("Die Prokura wird mit dem Zusatz [[ppa.]] gezeichnet, die Handlungsvollmacht mit [[i. V.]].")
  .error("Welche Aussagen zu Vollmachten sind fehlerhaft?", [
    ["Die Prokura wird ins Handelsregister eingetragen.", false],
    ["Eine Handlungsvollmacht darf nur schriftlich erteilt werden.", true, "Die Handlungsvollmacht ist formfrei und kann auch stillschweigend erteilt werden."],
    ["Ein Prokurist darf Grundstücke erwerben.", false],
    ["Ein Prokurist darf die Prokura auf einen Kollegen übertragen.", true, "Nur der Inhaber darf Prokura erteilen."],
  ])
  .done();

export default [
  { file: "wsp/struktur.json", bundle: struktur },
  { file: "wsp/lf1-ziele.json", bundle: { items: [ziele] } },
  { file: "wsp/lf1-rechtsformen.json", bundle: { items: [rf] } },
  { file: "wsp/lf1-firma-hr.json", bundle: { items: [hr] } },
  { file: "wsp/lf1-vollmachten.json", bundle: { items: [vm] } },
];
