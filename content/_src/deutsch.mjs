import { topic, structure, subject, lf, tp } from "./dsl.mjs";

const SRC = "Deutsch – Anzeigenanalyse (Kannliste, Unterricht)";

const struktur = structure([
  subject("deutsch", "Deutsch – Anzeigenanalyse", "Anzeigenbestandteile, Copy Strategy, Positionierung und Gestaltung (Prüfungsteil 1)", "#0891b2", [
    lf("deutsch-aa", "AA", "Anzeigenanalyse", [1], [
      tp("deutsch-aa-bestandteile", "Anzeigenbestandteile & Copy Strategy", [1]),
      tp("deutsch-aa-positionierung", "USP/UAP, Positionierung & Benefit Ladder", [1]),
      tp("deutsch-aa-gestaltung", "Aktivierung, Prägnanz & Gestaltgesetze", [1]),
    ]),
  ]),
]);

const T = (k) => topic(k, { part: 1, src: SRC });

const be = T("deutsch-aa-bestandteile")
  .summary("Anzeigenbestandteile & Copy Strategy", `
**Bestandteile einer Anzeige**: **Headline** (Schlagzeile – Aufmerksamkeit, Neugier) · **Subline/Unterzeile** · **Bodycopy** (Fließtext – Argumente) · **Visual/Key Visual** (Bild – Aufmerksamkeit, Emotion) · **Claim/Slogan** (Markenversprechen) · **Logo/Absender** · **Call to Action** (Handlungsaufforderung) · **Packshot** (Produktabbildung) · **Coupon/Response-Element**.
**Copy Strategy** (Textstrategie, vor der Gestaltung = Soll): **Consumer Benefit** (Nutzenversprechen) · **Reason Why** (Begründung/Beweis) · **Tonality** (Ton: z. B. humorvoll, seriös, emotional, sachlich, ironisch).
**Copy Analyse** (nach der Gestaltung = Ist): Wie wird die Copy Strategy tatsächlich in der Anzeige umgesetzt? Analyse von Benefit, Reason Why, Tonality an einer fertigen Anzeige.
**Tonality** = Stil- und Tonlage, Wortwahl, Satzbau, Bildsprache.
`)
  .cards([
    ["Nenne die Bestandteile einer Anzeige.", "Headline, Subline, Bodycopy, Visual/Key Visual, Claim/Slogan, Logo, Call to Action, Packshot."],
    ["Aufgabe der Headline?", "Aufmerksamkeit wecken und zum Weiterlesen anregen."],
    ["Was ist die Subline?", "Ergänzende Zeile unter der Headline, die die Aussage präzisiert."],
    ["Was ist die Bodycopy?", "Der Fließtext mit Argumenten und Informationen."],
    ["Was ist ein Visual/Key Visual?", "Das zentrale Bild der Anzeige, das Aufmerksamkeit und Emotion erzeugt."],
    ["Was ist ein Claim?", "Kurzer Markenspruch, der das Markenversprechen zusammenfasst."],
    ["Was ist ein Call to Action?", "Aufforderung zu einer konkreten Handlung (z. B. „Jetzt testen“)."],
    ["Was ist ein Packshot?", "Abbildung des Produkts in der Verpackung."],
    ["Was ist die Copy Strategy?", "Textstrategie mit Consumer Benefit, Reason Why und Tonality – legt fest, was und wie kommuniziert wird."],
    ["Was ist der Consumer Benefit?", "Das Nutzenversprechen an den Konsumenten."],
    ["Was ist der Reason Why?", "Begründung oder Beweis, warum das Nutzenversprechen glaubwürdig ist."],
    ["Was ist die Tonality?", "Die Tonlage der Kommunikation (z. B. witzig, seriös, emotional)."],
    ["Copy Strategy vs. Copy Analyse?", "Strategie: Soll-Vorgabe vor der Gestaltung. Analyse: Untersuchung der fertigen Anzeige (Ist)."],
    ["Beispiele für Tonalities?", "humorvoll, ironisch, emotional, sachlich-informativ, jugendlich, exklusiv."],
    ["Wofür wird ein Coupon/Response-Element genutzt?", "Zur Messung der Reaktion und für Direktantworten."],
  ])
  .gls([
    ["Headline", "Schlagzeile einer Anzeige."],
    ["Bodycopy", "Fließtext einer Anzeige."],
    ["Claim", "Markenversprechen in einem Satz."],
    ["Copy Strategy", "Textstrategie aus Consumer Benefit, Reason Why und Tonality."],
    ["Tonality", "Tonlage der Kommunikation."],
    ["Consumer Benefit", "Nutzenversprechen für den Konsumenten."],
  ])
  .mc("Welches Element einer Anzeige dient vor allem der Aufmerksamkeit und dem Weiterlesen?", "Headline", ["Bodycopy", "Logo", "Coupon", "Impressum"])
  .mc("Was beschreibt der Reason Why?", "Die Begründung, warum das Nutzenversprechen glaubwürdig ist", ["Den Ton der Anzeige", "Das Nutzenversprechen selbst", "Die Zielgruppe", "Den Slogan"])
  .mc("Welche Bestandteile hat die Copy Strategy?", "Consumer Benefit, Reason Why, Tonality", ["Headline, Subline, Bodycopy", "USP, UAP, Claim", "Benefit, Ladder, Logo", "Image, Logo, Preis"])
  .mc("Welche Aussage zur Copy Analyse ist richtig?", "Sie untersucht, wie die Copy Strategy in einer fertigen Anzeige umgesetzt ist.", ["Sie legt die Strategie vor der Gestaltung fest.", "Sie ist identisch mit der Mediaplanung.", "Sie bewertet nur den Preis.", "Sie ersetzt das Briefing."])
  .ad("Analysieren Sie die Anzeige.", "Headline: „Dein Rücken sagt Danke.“ Subline: „Der Bürostuhl, der mitdenkt.“ Bodycopy: „Der ErgoPro passt sich automatisch deiner Haltung an – getestet an der Sporthochschule Köln. 10 Jahre Garantie.“ Claim: „ErgoPro – Sitzen mit Köpfchen.“ Call to Action: „Jetzt 30 Tage kostenlos testen.“", [
    { prompt: "Welche Aussage ist der Consumer Benefit?", options: [{ text: "Entlastung des Rückens durch automatische Haltungsanpassung", correct: true }, { text: "Zehn Jahre Garantie", correct: false }, { text: "Getestet an der Sporthochschule", correct: false }, { text: "30 Tage kostenlos testen", correct: false }] },
    { prompt: "Welche Aussage ist der Reason Why?", options: [{ text: "Getestet an der Sporthochschule Köln", correct: true }, { text: "Dein Rücken sagt Danke", correct: false }, { text: "Sitzen mit Köpfchen", correct: false }, { text: "Jetzt testen", correct: false }] },
    { prompt: "Welche Tonality liegt vor?", options: [{ text: "Locker, persönlich (Du-Ansprache) mit sachlichem Beleg", correct: true }, { text: "Streng förmlich", correct: false }, { text: "Aggressiv-vergleichend", correct: false }, { text: "Düster-dramatisch", correct: false }] },
  ], { d: 2 })
  .match("Ordnen Sie dem Anzeigenelement die Funktion zu.", [
    ["Headline", "Aufmerksamkeit wecken"],
    ["Bodycopy", "Argumente und Informationen liefern"],
    ["Claim", "Markenversprechen verankern"],
    ["Call to Action", "Handlung auslösen"],
    ["Packshot", "Produkt zeigen"],
  ])
  .match("Ordnen Sie den Begriff der Erklärung zu.", [
    ["Consumer Benefit", "Nutzenversprechen"],
    ["Reason Why", "Begründung/Beweis"],
    ["Tonality", "Tonlage"],
    ["Copy Analyse", "Untersuchung der fertigen Anzeige"],
  ])
  .tf("Die Copy Strategy wird erst nach der Gestaltung der Anzeige erstellt.", false)
  .tf("Der Reason Why liefert den Beleg für das Nutzenversprechen.", true)
  .cloze("Die Copy Strategy besteht aus [[Consumer Benefit]], [[Reason Why]] und [[Tonality]].")
  .done();

const po = T("deutsch-aa-positionierung")
  .summary("USP/UAP, Positionierung & Benefit Ladder", `
**USP** (Unique Selling Proposition) = **einzigartiges Verkaufsversprechen** (Produkt bietet etwas, was kein Wettbewerber bietet – sachlich-funktional). **UAP** (Unique Advertising Proposition) = **einzigartiges Werbeversprechen** (Produkte austauschbar → Einzigartigkeit entsteht durch die Kommunikation, z. B. emotionale Ansprache).
**Positionierung**: **Ist-Positionierung** (wie die Marke heute wahrgenommen wird) vs. **Soll-Positionierung** (angestrebte Position). Positionierungsmodelle: Wahrnehmungsraum (Preis × Qualität).
**Zusatznutzen**: **objektiv/funktional** (messbar, sachlich: Haltbarkeit, Leistung) vs. **subjektiv/emotional** (Gefühl, Prestige, Zugehörigkeit). Grundnutzen (Funktion) + Zusatznutzen.
**Brand Benefit Ladder** (Nutzenleiter): Produkteigenschaft (Merkmal) → **funktionaler Nutzen** → **emotionaler Nutzen** → **Markenwerte/Persönlichkeit**. Von „Was ist es?" über „Was habe ich davon?" zu „Wie fühle ich mich?"
`)
  .cards([
    ["Was ist ein USP?", "Einzigartiges Verkaufsversprechen – ein Alleinstellungsmerkmal des Produkts, das Wettbewerber nicht bieten."],
    ["Was ist ein UAP?", "Einzigartiges Werbeversprechen – bei austauschbaren Produkten entsteht Einzigartigkeit durch die Kommunikation."],
    ["USP vs. UAP?", "USP: Einzigartigkeit im Produkt. UAP: Einzigartigkeit in der Werbung."],
    ["Ist-Positionierung?", "Die aktuelle Wahrnehmung der Marke bei der Zielgruppe."],
    ["Soll-Positionierung?", "Die angestrebte Wahrnehmung der Marke."],
    ["Was ist ein Wahrnehmungsraum?", "Grafik, die Marken nach Kriterien (z. B. Preis/Qualität) in der Wahrnehmung der Zielgruppe verortet."],
    ["Was ist ein objektiver/funktionaler Zusatznutzen?", "Messbarer, sachlicher Mehrwert wie Haltbarkeit, Leistung oder Sicherheit."],
    ["Was ist ein subjektiver/emotionaler Zusatznutzen?", "Gefühlsbezogener Mehrwert wie Prestige, Zugehörigkeit oder Genuss."],
    ["Was ist die Brand Benefit Ladder?", "Nutzenleiter vom Produktmerkmal über funktionalen und emotionalen Nutzen zu den Markenwerten."],
    ["Stufen der Benefit Ladder?", "Merkmal → funktionaler Nutzen → emotionaler Nutzen → Markenwerte."],
    ["Beispiel funktionaler Nutzen?", "Das Waschmittel entfernt Flecken schon bei 30 Grad."],
    ["Beispiel emotionaler Nutzen?", "Man fühlt sich als gute Gastgeberin, wenn die Wäsche strahlt."],
    ["Warum ist ein UAP bei Bier üblich?", "Produkte sind austauschbar; Differenzierung erfolgt über Image und Emotion."],
    ["Wofür ist die Positionierung wichtig?", "Sie schafft Unterscheidbarkeit und bestimmt Botschaft und Mix."],
  ])
  .gls([
    ["USP", "Unique Selling Proposition – einzigartiges Verkaufsversprechen."],
    ["UAP", "Unique Advertising Proposition – einzigartiges Werbeversprechen."],
    ["Positionierung", "Gewünschter Platz einer Marke im Kopf der Zielgruppe."],
    ["Brand Benefit Ladder", "Stufenmodell der Markennutzen."],
  ])
  .mc("Ein Bier ist qualitativ kaum von anderen unterscheidbar; die Marke grenzt sich durch Lebensgefühl in der Werbung ab. Was liegt vor?", "UAP", ["USP", "Reason Why", "Packshot", "Call to Action"])
  .mc("Ein Zahnpasta-Hersteller wirbt mit einem einzigartigen, patentierten Wirkstoff. Was liegt vor?", "USP", ["UAP", "Tonality", "Claim ohne Nutzen", "Image"])
  .mc("Welche Aussage beschreibt einen emotionalen Zusatznutzen?", "Der Kunde fühlt sich mit der Marke als Teil einer Community.", ["Das Gerät hält 10 Jahre.", "Der Akku lädt in 20 Minuten.", "Der Stoff ist wasserdicht.", "Der Preis ist 20 % niedriger."])
  .mc("Welcher Begriff beschreibt die angestrebte Wahrnehmung einer Marke?", "Soll-Positionierung", ["Ist-Positionierung", "Copy Analyse", "Reichweite", "Zielgruppe"])
  .order("Bringen Sie die Stufen der Brand Benefit Ladder (von unten nach oben) in die richtige Reihenfolge.", ["Produktmerkmal", "Funktionaler Nutzen", "Emotionaler Nutzen", "Markenwerte/Persönlichkeit"], { d: 2 })
  .match("Ordnen Sie jede Aussage der Nutzenart zu.", [
    ["Der Sitz ist TÜV-geprüft", "objektiver/funktionaler Nutzen"],
    ["Ich fühle mich sicher und souverän", "subjektiver/emotionaler Nutzen"],
    ["Die Batterie hält 12 Stunden", "objektiver/funktionaler Nutzen"],
    ["Ich gehöre zu den Trendsettern", "subjektiver/emotionaler Nutzen"],
  ])
  .tf("USP und UAP bedeuten dasselbe.", false)
  .tf("Die Brand Benefit Ladder führt vom Produktmerkmal zu Markenwerten.", true)
  .cloze("Beim [[USP]] liegt die Einzigartigkeit im Produkt, beim [[UAP]] in der Werbung.")
  .done();

const ge = T("deutsch-aa-gestaltung")
  .summary("Aktivierung, Prägnanz & Gestaltgesetze", `
**Aktivierung** (Aufmerksamkeit erzeugen): **emotional** (Gefühle: Kindchenschema, Erotik, Humor, Spannung) · **kognitiv** (Denken: Rätsel, Überraschung, Widerspruch, Neugier, Informationsgehalt) · **physisch** (körperliche Reize: Farbe, Größe, Kontrast, Lautstärke, Bewegung, Schlüsselreize).
**Blickverlauf** (Z-/F-Muster; Bild zuerst, dann Headline, dann Text, dann Logo); Lesefluss von oben links nach unten rechts; Blickfänger.
**Prägnanz** = klare, einfache, gut erfassbare Gestaltung. Unterpunkte: **Figur-Grund-Differenzierung** (Objekt hebt sich vom Hintergrund ab: Kontrast, Freiraum), **Einsatz von Farbe** (Signalwirkung, Corporate Colors, Kontrast), **Einsatz von Schrift** (Lesbarkeit, Größenhierarchie, Schriftart, Zeilenlänge).
**Gestaltgesetze**: **Nähe** (nahe Elemente = zusammengehörig) · **Ähnlichkeit** (gleiche Merkmale = Gruppe) · **Geschlossenheit** (Lücken werden ergänzt) · **Kontinuität/Fortsetzung** (Linien werden fortgesetzt) · **Prägnanz/gute Gestalt** · **Symmetrie** · **gemeinsames Schicksal** · **Figur-Grund**.
`)
  .cards([
    ["Wozu dient die Aktivierung?", "Aufmerksamkeit der Zielgruppe wecken."],
    ["Was ist emotionale Aktivierung?", "Ansprache über Gefühle (Humor, Erotik, Kindchenschema, Spannung)."],
    ["Was ist kognitive Aktivierung?", "Ansprache des Denkens (Rätsel, Überraschung, Widerspruch, Information)."],
    ["Was ist physische Aktivierung?", "Körperliche Reize wie Größe, Farbe, Kontrast, Lautstärke, Bewegung."],
    ["Was bedeutet Prägnanz?", "Klare, einfache, schnell erfassbare Gestaltung."],
    ["Was ist Figur-Grund-Differenzierung?", "Das Hauptelement hebt sich deutlich vom Hintergrund ab."],
    ["Worauf achtet man beim Einsatz von Farbe?", "Signalwirkung, Kontrast, Corporate Colors, Lesbarkeit."],
    ["Worauf achtet man beim Einsatz von Schrift?", "Lesbarkeit, Größenhierarchie, Schriftart, Zeilenlänge."],
    ["Was ist der Blickverlauf?", "Die Reihenfolge, in der das Auge die Elemente erfasst (meist Bild – Headline – Text – Logo)."],
    ["Gestaltgesetz der Nähe?", "Nahe beieinander liegende Elemente werden als zusammengehörig wahrgenommen."],
    ["Gestaltgesetz der Ähnlichkeit?", "Elemente mit gleichen Merkmalen werden gruppiert."],
    ["Gestaltgesetz der Geschlossenheit?", "Lücken in Formen werden gedanklich ergänzt."],
    ["Gestaltgesetz der Kontinuität?", "Linien und Bewegungen werden gedanklich fortgesetzt."],
    ["Gestaltgesetz der Symmetrie?", "Symmetrische Formen werden als zusammengehörige Einheit wahrgenommen."],
    ["Was ist ein Blickfänger?", "Element, das als erstes die Aufmerksamkeit auf sich zieht."],
    ["Was ist das Kindchenschema?", "Schlüsselreiz: kindliche Merkmale lösen positive Gefühle aus."],
  ])
  .gls([
    ["Prägnanz", "Klarheit und Einfachheit der Gestaltung."],
    ["Figur-Grund-Differenzierung", "Abhebung des Objekts vom Hintergrund."],
    ["Blickverlauf", "Weg des Auges durch die Anzeige."],
    ["Gestaltgesetze", "Regeln der Wahrnehmung von Formen und Gruppen."],
  ])
  .mc("Eine Anzeige zeigt ein niedliches Baby mit großem Kopf und großen Augen. Welche Aktivierung?", "Emotionale Aktivierung (Kindchenschema)", ["Kognitive Aktivierung", "Physische Aktivierung", "Keine Aktivierung", "Rationale Aktivierung"])
  .mc("Eine Anzeige präsentiert ein Rätsel, dessen Lösung erst im Text steht. Welche Aktivierung?", "Kognitive Aktivierung", ["Emotionale Aktivierung", "Physische Aktivierung", "Keine", "Vertrauensaktivierung"])
  .mc("Eine riesige Anzeige in Signalrot sticht durch Größe und Farbe ins Auge. Welche Aktivierung?", "Physische Aktivierung", ["Emotionale", "Kognitive", "Soziale", "Keine"])
  .mc("Welches Gestaltgesetz beschreibt, dass nahe beieinanderstehende Elemente zusammengehörig wirken?", "Gesetz der Nähe", ["Gesetz der Ähnlichkeit", "Gesetz der Geschlossenheit", "Gesetz der Kontinuität", "Gesetz der Symmetrie"])
  .mc("Welches Gestaltgesetz beschreibt, dass wir unvollständige Formen gedanklich ergänzen?", "Gesetz der Geschlossenheit", ["Gesetz der Nähe", "Gesetz der Ähnlichkeit", "Gesetz der Kontinuität", "Figur-Grund-Gesetz"])
  .mc("Was bedeutet Figur-Grund-Differenzierung?", "Das Hauptmotiv hebt sich klar vom Hintergrund ab.", ["Das Bild und der Text sind identisch.", "Die Figur ist immer im Hintergrund.", "Der Hintergrund bleibt leer.", "Schrift und Bild werden vertauscht."])
  .match("Ordnen Sie jedes Beispiel der Aktivierungsart zu.", [
    ["Humor", "emotional"],
    ["Rätsel/Überraschung", "kognitiv"],
    ["Grelle Farben und Größe", "physisch"],
    ["Kindchenschema", "emotional"],
  ])
  .match("Ordnen Sie jedem Gestaltgesetz das Beispiel zu.", [
    ["Nähe", "Drei dicht beieinanderstehende Produktbilder wirken wie eine Gruppe"],
    ["Ähnlichkeit", "Alle roten Elemente werden als Gruppe gesehen"],
    ["Geschlossenheit", "Ein unterbrochener Kreis wird als Kreis erkannt"],
    ["Kontinuität", "Eine gestrichelte Linie wird als durchgehende Linie wahrgenommen"],
  ])
  .tf("Prägnante Gestaltung bedeutet möglichst viele Elemente auf engem Raum.", false)
  .tf("Der Blickverlauf in Anzeigen beginnt häufig beim Bild.", true)
  .cloze("Die Gestaltgesetze der [[Nähe]] und [[Ähnlichkeit]] erklären, wie Gruppen wahrgenommen werden.")
  .done();

export default [
  { file: "deutsch/struktur.json", bundle: struktur },
  { file: "deutsch/aa-bestandteile.json", bundle: { items: [be] } },
  { file: "deutsch/aa-positionierung.json", bundle: { items: [po] } },
  { file: "deutsch/aa-gestaltung.json", bundle: { items: [ge] } },
];
