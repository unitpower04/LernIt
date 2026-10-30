import { topic, V } from "./dsl.mjs";

const SRC = "WSP LF3 (Unterricht)";

/* =========================================================
   Rechtsordnung, Rechtssubjekte & Rechtsobjekte
   ========================================================= */
const recht = topic("wsp-lf3-recht", { part: 2, src: SRC })
  .summary("Rechtsordnung, Rechtssubjekte & Rechtsobjekte", `
**Rechtsordnung**
- **Öffentliches Recht**: Über-/Unterordnung (Staat ↔ Bürger): Verfassungs-, Verwaltungs-, Steuer-, Straf-, Prozess-, Völkerrecht
- **Privatrecht**: Gleichordnung der Bürger: BGB, HGB, Familien-, Erbrecht, Arbeitsrecht, Handelsrecht
- **Rechtsquellen**: Gesetze, Verordnungen, Verwaltungsvorschriften, Satzungen, **Gewohnheitsrecht**, **Handelsbrauch** · Maßstab ist das Grundgesetz
- **objektives Recht** = Gesamtheit der Rechtsnormen · **subjektives Recht** = Befugnis einer Person, die sich daraus ergibt (z. B. „Ich habe das Recht auf Erbschaft“)

**Rechtssubjekte**: *natürliche Personen* (alle Menschen) und *juristische Personen* (des privaten Rechts: GmbH, AG, e. V.; des öffentlichen Rechts: Land, Universität, Stadtsparkasse).
- **Rechtsfähigkeit** = Träger von Rechten und Pflichten sein: natürliche Person **ab Vollendung der Geburt bis zum Tod**; GmbH/AG mit Eintragung ins Handelsregister; e. V. mit Eintragung ins Vereinsregister.
- **Geschäftsfähigkeit** = Rechtsgeschäfte selbst wirksam abschließen: **unter 7 Jahren geschäftsunfähig** · **7–17 Jahre beschränkt geschäftsfähig** (Einwilligung/Genehmigung der Eltern; Taschengeldparagraph; rechtlich nur vorteilhaftes wie Schenkung wirksam) · **ab 18 voll geschäftsfähig**.
- *Einwilligung* = vorherige Zustimmung · *Genehmigung* = nachträgliche Zustimmung (bis dahin schwebend unwirksam)

**Rechtsobjekte**: *Sachen* (beweglich/unbeweglich, vertretbar/nicht vertretbar) und *Rechte* (absolut/relativ).
- **Eigentum** = rechtliche Herrschaft über eine Sache · **Besitz** = tatsächliche Herrschaft (Beispiel Miete: Vermieter Eigentümer, Mieter Besitzer)
- Übertragung beweglicher Sachen: **Einigung + Übergabe**; Grundstücke: **notarielle Beurkundung + Grundbucheintrag**
- **Eigentumsvorbehalt**: Ware bleibt bis zur vollständigen Bezahlung Eigentum des Verkäufers (einfach · verlängert [Weiterverkauf] · erweitert [alle Forderungen])
`)
  .cards([
    ["Unterschied öffentliches Recht und Privatrecht?", "Öffentliches Recht: Über-/Unterordnung (Staat ↔ Bürger). Privatrecht: Gleichordnung der Bürger (z. B. BGB)."],
    ["Beispiele für öffentliches Recht?", "Steuerrecht, Verwaltungsrecht, Strafrecht, Prozessrecht, Völkerrecht."],
    ["Beispiele für Privatrecht?", "Familienrecht, Erbrecht, Handelsrecht, Unternehmensrecht, BGB."],
    ["Nenne Rechtsquellen des Gesetzesrechts.", "Gesetze, Verordnungen, Verwaltungsvorschriften, Satzungen."],
    ["Was ist Gewohnheitsrecht?", "Ungeschriebenes Recht, das durch langjährige, gleichmäßige Übung entsteht und von allen als verbindlich angesehen wird."],
    ["Was ist ein Handelsbrauch?", "Verkehrssitte unter Kaufleuten (z. B. Handschlag im Viehhandel), die im Handelsverkehr beachtet wird."],
    ["Objektives vs. subjektives Recht?", "Objektiv: Summe aller Rechtsnormen. Subjektiv: Befugnis einer konkreten Person aus diesen Normen."],
    ["Was sind natürliche Personen?", "Alle Menschen – unabhängig von Alter und Fähigkeiten."],
    ["Was sind juristische Personen?", "Rechtlich verselbstständigte Organisationen (GmbH, AG, e. V., Stadt, Universität)."],
    ["Wann beginnt die Rechtsfähigkeit eines Menschen?", "Mit Vollendung der Geburt (§ 1 BGB); sie endet mit dem Tod."],
    ["Wann beginnt die Rechtsfähigkeit der GmbH?", "Mit der Eintragung ins Handelsregister."],
    ["Wann beginnt die Rechtsfähigkeit eines e. V.?", "Mit der Eintragung ins Vereinsregister."],
    ["Was ist Geschäftsfähigkeit?", "Die Fähigkeit, Rechtsgeschäfte selbstständig durch rechtsgültige Willenserklärungen abzuschließen."],
    ["Stufen der Geschäftsfähigkeit?", "Unter 7: geschäftsunfähig · 7 bis 17: beschränkt geschäftsfähig · ab 18: voll geschäftsfähig."],
    ["Was gilt für Verträge Geschäftsunfähiger?", "Ihre Willenserklärungen sind nichtig."],
    ["Was gilt für Verträge beschränkt Geschäftsfähiger?", "Schwebend unwirksam – wirksam mit Einwilligung oder Genehmigung der Eltern (Ausnahmen: rechtlich lediglich Vorteilhaftes, Taschengeldparagraph)."],
    ["Einwilligung vs. Genehmigung?", "Einwilligung = vorherige Zustimmung. Genehmigung = nachträgliche Zustimmung."],
    ["Was ist der Taschengeldparagraph (§ 110 BGB)?", "Ein Minderjähriger kann Geschäfte wirksam abschließen, wenn er sie mit eigenen (überlassenen) Mitteln sofort bezahlt."],
    ["Nenne Sachen und Rechte als Rechtsobjekte.", "Sachen (körperliche Gegenstände) und Rechte (z. B. Forderungen, Urheberrechte)."],
    ["Eigentum vs. Besitz?", "Eigentum = rechtliche Herrschaft, Besitz = tatsächliche Herrschaft."],
    ["Wie wird Eigentum an beweglichen Sachen übertragen?", "Durch Einigung und Übergabe."],
    ["Wie wird Eigentum an Grundstücken übertragen?", "Durch Einigung (Auflassung, notariell) und Eintragung ins Grundbuch."],
    ["Was ist ein einfacher Eigentumsvorbehalt?", "Der Verkäufer bleibt bis zur vollständigen Zahlung Eigentümer der gelieferten Ware."],
    ["Was ist ein verlängerter Eigentumsvorbehalt?", "Der Käufer darf die Ware weiterverkaufen; die daraus entstehende Forderung geht auf den Verkäufer über."],
    ["Was ist ein erweiterter Eigentumsvorbehalt?", "Das Eigentum bleibt beim Verkäufer, bis alle (auch frühere) Forderungen gegen den Käufer bezahlt sind."],
  ])
  .gls([
    ["Rechtsfähigkeit", "Fähigkeit, Träger von Rechten und Pflichten zu sein."],
    ["Geschäftsfähigkeit", "Fähigkeit, Rechtsgeschäfte selbstständig wirksam abzuschließen."],
    ["Rechtssubjekt", "Träger von Rechten und Pflichten (natürliche oder juristische Person)."],
    ["Rechtsobjekt", "Gegenstand von Rechtsgeschäften: Sachen und Rechte."],
    ["Eigentumsvorbehalt", "Vereinbarung, dass das Eigentum erst mit vollständiger Bezahlung übergeht."],
    ["Gewohnheitsrecht", "Durch dauernde Übung entstandenes, ungeschriebenes Recht."],
  ])
  .mc("In welchem Alter ist ein Mensch beschränkt geschäftsfähig?", "7 bis 17 Jahre", ["0 bis 6 Jahre", "14 bis 17 Jahre", "18 bis 21 Jahre", "ab 16 Jahren unbeschränkt"])
  .mc("Ein 16-Jähriger bestellt ohne Wissen der Eltern ein Smartphone für 600 €. Er hat kein Erspartes. Wie ist die Rechtslage?", "Der Kaufvertrag ist schwebend unwirksam und wird erst mit Genehmigung der Eltern wirksam.", ["Der Vertrag ist sofort voll wirksam.", "Der Vertrag ist von Anfang an nichtig.", "Der Vertrag ist wirksam, weil er 16 ist.", "Der Händler muss das Gerät kostenlos liefern."])
  .mc("Eine 14-Jährige kauft von ihrem Taschengeld ein Top für 9,50 € und zahlt sofort. Wie ist die Rechtslage?", "Der Kauf ist wirksam (Taschengeldparagraph).", ["Der Kauf ist nichtig.", "Der Kauf braucht die schriftliche Genehmigung der Eltern.", "Der Kauf ist anfechtbar.", "Der Kauf ist nur wirksam, wenn sie 16 ist."])
  .mc("Wann endet die Rechtsfähigkeit einer natürlichen Person?", "Mit dem Tod", ["Mit der Volljährigkeit", "Mit der Pensionierung", "Mit der Löschung im Melderegister", "Mit dem Eintritt in den Ruhestand"])
  .mc("Welcher der folgenden Fälle beschreibt ein subjektives Recht?", "Eine Person beruft sich auf ihr Erbrecht und beansprucht das Haus.", ["Das BGB regelt das Erbrecht.", "Das Grundgesetz enthält die Grundrechte.", "Der Gesetzgeber erlässt eine Verordnung.", "Das Handelsrecht ist Teil des Privatrechts."])
  .mc("Welche Aussage zum Eigentumsvorbehalt ist richtig?", "Der Verkäufer bleibt bis zur vollständigen Bezahlung Eigentümer.", ["Der Käufer wird mit der Lieferung sofort Eigentümer.", "Er gehört zu den Personalkrediten.", "Er schützt den Käufer vor Zahlungsverzug.", "Er gilt nur für Grundstücke."])
  .mc("Welche Aussage zu Eigentum und Besitz ist richtig?", "Der Mieter einer Wohnung ist Besitzer, der Vermieter Eigentümer.", ["Eigentum und Besitz bedeuten immer dasselbe.", "Der Besitzer darf die Sache immer verkaufen.", "Der Mieter wird nach 5 Jahren Eigentümer.", "Besitz ist die rechtliche Herrschaft über die Sache."])
  .mc("Welche Eigentumsübertragung ist bei einem Grundstück erforderlich?", "Notarieller Vertrag und Eintragung ins Grundbuch", ["Einigung und Übergabe der Schlüssel", "Mündliche Einigung", "Eintragung ins Handelsregister", "Schriftlicher Vertrag ohne Notar"])
  .match("Ordnen Sie jedes Rechtssubjekt der Personengruppe zu.", [
    ["Land Nordrhein-Westfalen", "juristische Person des öffentlichen Rechts"],
    ["RTL Deutschland GmbH", "juristische Person des privaten Rechts"],
    ["Angela Mustermann", "natürliche Person"],
    ["Technische Hochschule Köln", "juristische Person des öffentlichen Rechts"],
  ], ["Rechtsobjekt"])
  .match("Ordnen Sie jedes Rechtsgebiet dem Privatrecht oder dem öffentlichen Recht zu.", [
    ["Steuerrecht", "öffentliches Recht"],
    ["Erbrecht", "Privatrecht"],
    ["Verwaltungsrecht", "öffentliches Recht"],
    ["Handelsrecht", "Privatrecht"],
    ["Völkerrecht", "öffentliches Recht"],
    ["Familienrecht", "Privatrecht"],
  ])
  .match("Ordnen Sie das Alter der Geschäftsfähigkeit zu.", [
    ["5 Jahre", "geschäftsunfähig"],
    ["12 Jahre", "beschränkt geschäftsfähig"],
    ["17 Jahre", "beschränkt geschäftsfähig"],
    ["18 Jahre", "voll geschäftsfähig"],
  ])
  .tf("Eine GmbH erlangt ihre Rechtsfähigkeit mit dem Abschluss des Gesellschaftsvertrags.", false, { e: "Erst mit der Eintragung ins Handelsregister." })
  .tf("Ein 5-jähriges Kind kann wirksam einen Kaufvertrag abschließen.", false, { e: "Kinder unter 7 sind geschäftsunfähig." })
  .tf("Eine Genehmigung ist die nachträgliche Zustimmung zu einem Rechtsgeschäft.", true)
  .cloze("Die Rechtsfähigkeit eines Menschen beginnt mit der Vollendung der [[Geburt]] und endet mit dem [[Tod]].", { d: 1 })
  .cloze("Beschränkt Geschäftsfähige brauchen für Verträge die [[Einwilligung]] oder nachträglich die [[Genehmigung]] ihrer Eltern.")
  .order("Bringen Sie die Übertragung des Eigentums an einem Grundstück in die richtige Reihenfolge.", ["Einigung der Parteien beim Notar (Auflassung)", "Notarielle Beurkundung des Kaufvertrags", "Antrag auf Eintragung ins Grundbuch", "Eintragung im Grundbuch – Käufer wird Eigentümer"], { d: 3 })
  .done();

/* =========================================================
   Rechtsgeschäfte, Form, Nichtigkeit, Anfechtung
   ========================================================= */
const rg = topic("wsp-lf3-rechtsgeschaefte", { part: 2, src: SRC })
  .summary("Rechtsgeschäfte, Form, Nichtigkeit & Anfechtung", `
**Rechtsgeschäft** = mindestens eine Willenserklärung, die eine Rechtswirkung herbeiführen soll.
- **Einseitig**: *empfangsbedürftig* (Kündigung, Anfechtung, Mahnung) · *nicht empfangsbedürftig* (Testament)
- **Zweiseitig** (Vertrag): zwei übereinstimmende Willenserklärungen (Antrag + Annahme) – *zweiseitig verpflichtend* (Kauf, Miete, Werk) oder *einseitig verpflichtend* (Schenkung, Leihe)

**Form**: Grundsatz der **Formfreiheit** (mündlich, schriftlich, schlüssiges = konkludentes Verhalten). Vorgeschrieben ist Form z. B. bei: **gesetzliche Schriftform** (Darlehensvertrag, Bürgschaft*, Kündigung Arbeitsvertrag) · **öffentliche Beglaubigung** (Unterschrift vom Notar bestätigt: Anmeldung zum Handelsregister, Erbausschlagung) · **notarielle Beurkundung** (Grundstückskauf, GmbH-Gründung).
Weitere Freiheiten: Abschluss- und Inhaltsfreiheit.

**Nichtig** (von Anfang an unwirksam): Formmangel (§ 125) · Geschäftsunfähigkeit (§ 105) · Verstoß gegen ein gesetzliches Verbot (§ 134) · Sittenwidrigkeit/Wucher (§ 138) · Scheingeschäft (§ 117) · Scherzgeschäft (§ 118).

**Anfechtbar** (zunächst wirksam, kann rückwirkend vernichtet werden):
- **Irrtum** (§ 119): Inhalts-, Erklärungs-, Übermittlungs-, Eigenschaftsirrtum – Anfechtung **unverzüglich** nach Kenntnis
- **arglistige Täuschung / widerrechtliche Drohung** (§ 123) – Anfechtung **binnen 1 Jahr**
- Anfechtung ist ausgeschlossen nach **10 Jahren**.
`)
  .cards([
    ["Was ist ein Rechtsgeschäft?", "Ein Tatbestand aus mindestens einer Willenserklärung, der eine Rechtsfolge herbeiführen soll."],
    ["Was ist ein einseitiges Rechtsgeschäft?", "Es kommt durch die Willenserklärung nur einer Person zustande (z. B. Kündigung, Testament)."],
    ["Was ist ein zweiseitiges Rechtsgeschäft?", "Es kommt durch zwei übereinstimmende Willenserklärungen (Antrag und Annahme) zustande – der Vertrag."],
    ["Beispiel empfangsbedürftige Willenserklärung?", "Kündigung, Mahnung, Anfechtung – sie muss dem Empfänger zugehen."],
    ["Beispiel nicht empfangsbedürftige Willenserklärung?", "Das Testament."],
    ["Beispiel einseitig verpflichtender Vertrag?", "Schenkung, Leihe (nur eine Seite hat Pflichten)."],
    ["Beispiel zweiseitig verpflichtender Vertrag?", "Kaufvertrag, Mietvertrag, Werkvertrag (beide haben Pflichten)."],
    ["Was besagt der Grundsatz der Formfreiheit?", "Rechtsgeschäfte sind grundsätzlich an keine Form gebunden (mündlich, schriftlich, konkludent)."],
    ["Was ist konkludentes Verhalten?", "Eine Willenserklärung durch schlüssiges Verhalten, z. B. Einsteigen in den Bus oder Ware aufs Band legen."],
    ["Was bedeutet Abschlussfreiheit?", "Jeder darf frei entscheiden, ob und mit wem er einen Vertrag schließt."],
    ["Was bedeutet Inhaltsfreiheit?", "Verträge dürfen im Rahmen der Gesetze frei gestaltet werden."],
    ["Beispiel gesetzliche Schriftform?", "Darlehensvertrag, Kündigung des Arbeitsvertrags, Ausbildungsvertrag."],
    ["Was ist eine öffentliche Beglaubigung?", "Ein Notar bestätigt die Echtheit der Unterschrift (z. B. Handelsregisteranmeldung, Erbausschlagung)."],
    ["Was ist eine notarielle Beurkundung?", "Strengste Form: Der Notar beurkundet den gesamten Inhalt (z. B. Grundstückskauf, GmbH-Gründung)."],
    ["Was bedeutet Nichtigkeit?", "Das Rechtsgeschäft ist von Anfang an unwirksam."],
    ["Nenne Nichtigkeitsgründe.", "Formmangel (§ 125), Geschäftsunfähigkeit (§ 105), gesetzliches Verbot (§ 134), Sittenwidrigkeit/Wucher (§ 138), Scheingeschäft (§ 117), Scherzgeschäft (§ 118)."],
    ["Beispiel Nichtigkeit wegen Formmangels?", "Ein Grundstückskauf ohne notarielle Beurkundung."],
    ["Beispiel Verstoß gegen ein gesetzliches Verbot (§ 134)?", "Kauf von Betäubungsmitteln."],
    ["Beispiel Wucher (§ 138)?", "Ausnutzen einer Zwangslage zu einem auffälligen Missverhältnis von Leistung und Gegenleistung."],
    ["Was bedeutet Anfechtbarkeit?", "Das Geschäft ist zunächst wirksam, kann aber rückwirkend durch Anfechtung vernichtet werden."],
    ["Anfechtungsgründe?", "Irrtum (§ 119) sowie arglistige Täuschung oder widerrechtliche Drohung (§ 123)."],
    ["Nenne die Arten des Irrtums.", "Inhaltsirrtum, Erklärungsirrtum, Übermittlungsirrtum, Eigenschaftsirrtum."],
    ["Beispiel Erklärungsirrtum?", "Versehentlich 121,30 € statt 12,31 € im Angebot geschrieben."],
    ["Beispiel Eigenschaftsirrtum?", "Ein Kunstinteressierter hält eine Kopie für ein Original."],
    ["Beispiel Übermittlungsirrtum?", "Ein Bote richtet eine Erklärung falsch aus."],
    ["Frist für die Anfechtung wegen Irrtums?", "Unverzüglich (ohne schuldhaftes Zögern) nach Kenntnis des Irrtums."],
    ["Frist für die Anfechtung wegen Täuschung oder Drohung?", "Binnen 1 Jahr nach Entdeckung der Täuschung bzw. Ende der Zwangslage."],
    ["Wann ist eine Anfechtung endgültig ausgeschlossen?", "Zehn Jahre nach Abgabe der Willenserklärung."],
    ["Nichtigkeit vs. Anfechtbarkeit?", "Nichtig: von Anfang an unwirksam. Anfechtbar: wirksam, bis angefochten – dann rückwirkend nichtig."],
  ])
  .gls([
    ["Willenserklärung", "Äußerung eines Rechtsfolgewillens (z. B. Angebot, Annahme)."],
    ["Konkludentes Verhalten", "Willenserklärung durch schlüssiges Handeln, ohne Worte."],
    ["Nichtigkeit", "Von Anfang an bestehende Unwirksamkeit eines Rechtsgeschäfts."],
    ["Anfechtung", "Erklärung, mit der ein wirksames Rechtsgeschäft rückwirkend vernichtet wird."],
    ["Notarielle Beurkundung", "Form, bei der ein Notar den Inhalt eines Vertrags beurkundet."],
  ])
  .mc("Welches Rechtsgeschäft bedarf zu seiner Wirksamkeit der notariellen Beurkundung?", "Kauf eines Grundstücks", ["Kauf einer Kaffeemaschine", "Mietvertrag über ein Büro für 6 Monate", "Ausbildungsvertrag", "Bestellung von Büromaterial"])
  .mc("Wie ist ein Grundstückskaufvertrag ohne notarielle Beurkundung zu beurteilen?", "Er ist wegen Formmangels nichtig.", ["Er ist anfechtbar.", "Er ist voll wirksam.", "Er ist schwebend unwirksam.", "Er ist nur gegenüber Minderjährigen nichtig."])
  .mc("Eine Sekretärin schreibt versehentlich 121,30 € statt 12,31 € in ein Angebot. Welcher Irrtum liegt vor?", "Erklärungsirrtum", ["Inhaltsirrtum", "Übermittlungsirrtum", "Eigenschaftsirrtum", "Motivirrtum (unbeachtlich)"])
  .mc("Ein Bote übermittelt eine Bestellung falsch. Welche Irrtumsart liegt vor?", "Übermittlungsirrtum", ["Erklärungsirrtum", "Inhaltsirrtum", "Eigenschaftsirrtum", "Kein Irrtum"])
  .mc("Ein Kunde kauft ein „Originalgemälde“ und erhält eine Kopie. Welche Anfechtung ist möglich?", "Anfechtung wegen Eigenschaftsirrtums", ["Anfechtung wegen Drohung", "Nichtigkeit wegen Formmangels", "Nichtigkeit wegen Scheingeschäfts", "Keine Anfechtung möglich"])
  .mc("Innerhalb welcher Frist muss eine Anfechtung wegen arglistiger Täuschung erfolgen?", "Innerhalb eines Jahres nach Entdeckung", ["Unverzüglich", "Innerhalb von 2 Wochen", "Innerhalb von 3 Jahren", "Innerhalb von 6 Monaten"])
  .mc("Welche Aussage zu Willenserklärungen ist richtig?", "Willenserklärungen sind grundsätzlich formfrei und können auch durch schlüssiges Verhalten abgegeben werden.", ["Jede Willenserklärung muss schriftlich erfolgen.", "Nur mündliche Erklärungen sind gültig.", "Schweigen ist immer eine Zustimmung.", "Willenserklärungen sind immer notariell zu beurkunden."])
  .mc("Wie wird eine Gestaltung bezeichnet, die zu einem auffälligen Missverhältnis von Leistung und Gegenleistung unter Ausnutzung einer Zwangslage führt?", "Wucher – das Geschäft ist sittenwidrig und nichtig (§ 138 BGB).", ["Scheingeschäft", "Irrtum", "Anfechtung", "Genehmigung"])
  .match("Ordnen Sie den Beispielen die Art des Rechtsgeschäfts zu.", [
    ["Kündigung eines Mietvertrags", "einseitige empfangsbedürftige Willenserklärung"],
    ["Testament", "einseitige nicht empfangsbedürftige Willenserklärung"],
    ["Kaufvertrag über ein Notebook", "zweiseitig verpflichtender Vertrag"],
    ["Schenkung von 10.000 € ohne Gegenleistung", "einseitig verpflichtender Vertrag"],
  ])
  .match("Ordnen Sie jede Formvorschrift dem passenden Beispiel zu.", [
    ["gesetzliche Schriftform", "Darlehensvertrag"],
    ["öffentliche Beglaubigung", "Anmeldung zum Handelsregister"],
    ["notarielle Beurkundung", "Grundstückskaufvertrag"],
    ["Formfreiheit", "Kauf eines Kaffees"],
  ])
  .match("Ordnen Sie jeder Rechtsfolge den Grund zu.", [
    ["nichtig wegen Formmangels", "Wohnungskauf ohne Notar"],
    ["nichtig wegen Geschäftsunfähigkeit", "Vertragsabschluss durch ein 5-jähriges Kind"],
    ["anfechtbar wegen Täuschung", "Gebrauchtwagen mit verschwiegenem Unfallschaden"],
    ["anfechtbar wegen Irrtums", "Preisangabe versehentlich um eine Stelle verrutscht"],
  ])
  .tf("Ein anfechtbares Rechtsgeschäft ist von Anfang an unwirksam.", false, { e: "Es ist wirksam, bis es angefochten wird." })
  .tf("Für den Abschluss eines Kaufvertrags über Büromaterial ist keine Form vorgeschrieben.", true)
  .tf("Die Anfechtung wegen Irrtums muss unverzüglich nach Kenntnis erfolgen.", true)
  .cloze("Die [[Nichtigkeit]] eines Rechtsgeschäfts besteht von Anfang an; eine [[Anfechtung]] wirkt rückwirkend.")
  .cloze("Die strengste Form eines Rechtsgeschäfts ist die [[notarielle Beurkundung]].")
  .error("Welche Aussagen zu Rechtsgeschäften sind fehlerhaft?", [
    ["Ein Darlehensvertrag bedarf der gesetzlichen Schriftform.", false],
    ["Ein Scheingeschäft ist anfechtbar.", true, "Es ist nichtig (§ 117 BGB)."],
    ["Die Kündigung ist eine einseitige, empfangsbedürftige Willenserklärung.", false],
    ["Verträge dürfen grundsätzlich nicht von den Gesetzen abweichen.", true, "Es gilt Inhaltsfreiheit im Rahmen der Gesetze."],
  ])
  .done();

/* =========================================================
   Kaufvertrag, Angebot & AGB
   ========================================================= */
const kv = topic("wsp-lf3-kaufvertrag", { part: 2, src: SRC })
  .summary("Kaufvertrag, Angebot & AGB", `
**Zustandekommen**: Anfrage (unverbindlich) → **Angebot = Antrag** (rechtlich bindend) → **Annahme** → Kaufvertrag. Änderung des Angebots = neuer Antrag. *Schweigen*: bei Nichtkaufleuten Ablehnung; unter Kaufleuten mit laufender Geschäftsbeziehung kann es als Annahme gelten.

**Inhalt des Angebots**: Art, Güte und Beschaffenheit · Menge · Preis · Lieferbedingungen · Zahlungsbedingungen · Erfüllungsort und Gerichtsstand.

**Lieferbedingungen**: *frei Haus* (Verkäufer trägt alle Kosten) · *frachtfrei/frei dort* (Verkäufer trägt Fracht bis Bestimmungsort, nicht Entladung) · *unfrei/ab hier* (Käufer trägt Fracht) · *ab Lager/ab Werk* (Käufer trägt alle Kosten ab Lager).

**Kaufvertragsarten**: Gattungskauf · Stückkauf · Ramschkauf · Kauf auf Probe · Kauf nach Probe · Kauf zur Probe · Fixkauf (Termin ist wesentlich).

**Pflichten**: *Verkäufer* – mangelfrei liefern und Eigentum verschaffen · *Käufer* – Ware annehmen und bezahlen.

**Angebotsvergleich (quantitativ)**
Listeneinkaufspreis − Rabatt = **Zieleinkaufspreis** − Skonto = **Bareinkaufspreis** + Bezugskosten = **Einstandspreis**
*Qualitativ (Nutzwertanalyse/Scoring)*: Qualität, Umweltverträglichkeit, Lieferbedingungen, Zahlungsbedingungen, Service – gewichtet und bewertet.

**AGB** (§§ 305 ff. BGB): vorformulierte Vertragsbedingungen für viele Verträge. *Individuelle Absprachen haben Vorrang*; überraschende/mehrdeutige Klauseln sind unwirksam; bei einer unwirksamen Klausel bleibt der Vertrag im Übrigen gültig.
`)
  .cards([
    ["Was ist der Unterschied zwischen Anfrage und Angebot?", "Die Anfrage ist unverbindlich. Das Angebot ist rechtlich ein Antrag und bindet den Anbieter."],
    ["Wie kommt ein Kaufvertrag zustande?", "Durch zwei übereinstimmende Willenserklärungen: Antrag (Angebot) und Annahme."],
    ["Was gilt bei einer Änderung des Angebots?", "Sie ist eine Ablehnung und zugleich ein neuer Antrag."],
    ["Nenne sechs Inhalte eines Angebots.", "Art/Güte/Beschaffenheit, Menge, Preis, Lieferbedingungen, Zahlungsbedingungen, Erfüllungsort/Gerichtsstand."],
    ["Was bedeutet „frei Haus“?", "Der Verkäufer trägt alle Kosten der Lieferung bis zum Käufer."],
    ["Was bedeutet „frachtfrei“?", "Der Verkäufer trägt die Fracht bis zum Bestimmungsort; Entladung/Zufuhr trägt der Käufer."],
    ["Was bedeutet „unfrei“ / „ab hier“?", "Der Käufer trägt die Frachtkosten."],
    ["Was bedeutet „ab Lager“?", "Der Käufer holt ab und trägt alle Kosten ab Lager des Verkäufers."],
    ["Was ist ein Fixkauf?", "Ein Kauf mit genau bestimmtem Liefertermin, bei dem die Pünktlichkeit wesentlich ist."],
    ["Was ist ein Kauf auf Probe?", "Der Käufer darf die Ware innerhalb einer Frist prüfen und dann annehmen oder zurückgeben."],
    ["Was ist ein Kauf nach Probe?", "Die Ware muss einer vorher gezeigten Probe entsprechen."],
    ["Was ist ein Gattungskauf?", "Die Ware wird nur der Art nach bestimmt (z. B. 1.000 Flyer A5)."],
    ["Was ist ein Stückkauf?", "Ein ganz bestimmtes Einzelstück wird gekauft (z. B. ein gebrauchtes Auto)."],
    ["Nenne zwei Pflichten des Verkäufers.", "Mangelfreie Lieferung und Verschaffung des Eigentums."],
    ["Nenne zwei Pflichten des Käufers.", "Annahme der Ware und Zahlung des Kaufpreises."],
    ["Wo muss der Schuldner die Leistung erbringen?", "Am Erfüllungsort (Leistungsort); dort geht auch die Gefahr über."],
    ["Was legt der Gerichtsstand fest?", "Bei welchem Gericht geklagt werden muss."],
    ["Wie berechnet sich der Einstandspreis (Bezugskalkulation)?", "Listenpreis − Rabatt = Zieleinkaufspreis; − Skonto = Bareinkaufspreis; + Bezugskosten = Einstandspreis."],
    ["Was ist ein quantitativer Angebotsvergleich?", "Vergleich in Geldeinheiten (Preis, Rabatt, Skonto, Bezugskosten)."],
    ["Was ist ein qualitativer Angebotsvergleich?", "Vergleich nach nicht in Geld messbaren Kriterien (Qualität, Service, Lieferzeit) – z. B. Nutzwertanalyse."],
    ["Vorteil der Nutzwertanalyse (Scoring)?", "Quantitative und qualitative Kriterien werden transparent gewichtet und bewertet."],
    ["Was sind AGB?", "Vorformulierte Vertragsbedingungen, die eine Partei der anderen bei Vertragsschluss stellt."],
    ["Wo sind AGB geregelt?", "In den §§ 305 ff. BGB."],
    ["Welche AGB-Klauseln sind unwirksam?", "Überraschende, mehrdeutige oder unangemessen benachteiligende Klauseln."],
    ["Was gilt bei Widerspruch zwischen AGB und individueller Absprache?", "Die individuelle Absprache hat Vorrang."],
    ["Wirkt sich eine unwirksame AGB-Klausel auf den ganzen Vertrag aus?", "Nein – der Vertrag bleibt im Übrigen gültig."],
  ])
  .gls([
    ["Antrag", "Verbindliches Angebot, das mit Annahme zum Vertrag wird."],
    ["Zieleinkaufspreis", "Listenpreis abzüglich Rabatt."],
    ["Bareinkaufspreis", "Zieleinkaufspreis abzüglich Skonto."],
    ["Einstandspreis", "Bareinkaufspreis zuzüglich Bezugskosten – der tatsächliche Preis der Ware."],
    ["AGB", "Allgemeine Geschäftsbedingungen: vorformulierte, standardisierte Vertragsklauseln."],
    ["Erfüllungsort", "Ort, an dem der Schuldner seine Leistung zu erbringen hat."],
  ])
  .mc("Was liegt vor, wenn eine Agentur auf einen Kundenanruf antwortet: „Wir liefern Ihnen 500 Flyer zum Preis von 120 € bis Freitag“?", "Ein Antrag (Angebot)", ["Eine Anfrage", "Eine Annahme", "Eine Anfechtung", "Nichts Rechtliches"])
  .mc("Ein Kunde bestellt auf ein Angebot, ändert aber den Preis ab. Welche Folge hat das?", "Das ist ein neuer Antrag; der Verkäufer muss ihn erst annehmen.", ["Der Vertrag ist zum geänderten Preis zustande gekommen.", "Der Vertrag ist nichtig.", "Der Verkäufer ist ans Ursprungsangebot gebunden.", "Der Vertrag ist anfechtbar."])
  .mc("Ein Werbemittelhersteller schickt an 10.000 Firmen ein Sonderangebot. Eine Agentur, mit der er regelmäßig Geschäfte macht, schweigt. Was gilt?", "Das Schweigen zählt hier als Annahme, wenn sie als Kaufmann regelmäßig Kontakt hat – Vorsicht!", ["Schweigen ist nie eine Annahme.", "Der Vertrag ist nichtig.", "Der Hersteller muss ein neues Angebot schicken.", "Der Vertrag ist anfechtbar."], { d: 3, e: "Kaufleute: Schweigen auf ein Angebot im Rahmen einer bestehenden Geschäftsbeziehung kann als Annahme gelten; Nichtkaufleute: Ablehnung." })
  .mc("Wer trägt bei „frei Haus“ die Frachtkosten?", "Der Verkäufer", ["Der Käufer", "Beide je zur Hälfte", "Der Spediteur", "Die Versicherung"])
  .mc("Wer trägt bei „unfrei“ die Frachtkosten?", "Der Käufer", ["Der Verkäufer", "Beide je zur Hälfte", "Der Hersteller", "Der Lagerhalter"])
  .mc("Welche Aussage zum quantitativen Angebotsvergleich trifft zu? Wählen Sie die zwei zutreffenden Aussagen.", ["Es wird der Bezugspreis ermittelt und der günstigste Anbieter festgestellt.", "Quantitative Faktoren werden in Geldeinheiten bewertet."], ["Es werden auch Dauer der Geschäftsbeziehung und Liefertreue berücksichtigt.", "Rabatt, Skonto und Transportkosten bleiben unberücksichtigt.", "Es erfolgt eine subjektive Gewichtung der Kriterien.", "Es gewinnt der Anbieter mit den meisten Übereinstimmungen bei Kriterien."])
  .mc("Welchen Vorteil bietet ein qualitativer Angebotsvergleich mit Scoring-Modell?", "Quantitative und qualitative Kriterien werden transparent berücksichtigt.", ["Er ist ohne Aufwand durchführbar.", "Der günstigste Lieferant wird automatisch erkannt.", "Die Gewichtung der Kriterien ist völlig objektiv.", "Nur monetäre Kriterien zählen."])
  .mc("Welche Aussage zu AGB ist richtig?", "Individuelle Vereinbarungen haben Vorrang vor AGB.", ["AGB gelten immer, auch wenn sie überraschend sind.", "Ist eine Klausel unwirksam, ist der ganze Vertrag nichtig.", "AGB müssen notariell beurkundet werden.", "AGB gelten nur im Ausland."])
  .match("Ordnen Sie den Lieferbedingungen die Kostenverteilung zu.", [
    ["frei Haus", "Verkäufer trägt alle Kosten bis zum Käufer"],
    ["frachtfrei", "Verkäufer trägt die Fracht, Käufer die Entladung"],
    ["unfrei / ab hier", "Käufer trägt die Frachtkosten"],
    ["ab Lager", "Käufer trägt alle Kosten ab Lager"],
  ])
  .match("Ordnen Sie jede Kaufvertragsart ihrer Beschreibung zu.", [
    ["Kauf auf Probe", "Ware darf innerhalb einer Frist geprüft und zurückgegeben werden"],
    ["Fixkauf", "Lieferung zu einem genau bestimmten Termin"],
    ["Gattungskauf", "Ware wird nur der Art nach bestimmt"],
    ["Stückkauf", "Ein bestimmtes Einzelstück wird gekauft"],
  ])
  .order("Bringen Sie die Schritte der Preisberechnung beim Bezugspreis in die richtige Reihenfolge.", ["Listeneinkaufspreis", "− Rabatt = Zieleinkaufspreis", "− Skonto = Bareinkaufspreis", "+ Bezugskosten", "= Einstandspreis"], { d: 2 })
  .tf("Eine Anfrage ist rechtlich bindend.", false)
  .tf("Der Verkäufer ist verpflichtet, mangelfrei zu liefern.", true)
  .tf("Eine unwirksame AGB-Klausel macht den gesamten Vertrag unwirksam.", false)
  .cloze("Der [[Einstandspreis]] ergibt sich aus dem Bareinkaufspreis zuzüglich [[Bezugskosten]].")
  .tcalc(
    "Die {firma} bestellt {m} Stück {artikel}. Listenpreis {p|eur} je Stück, Lieferantenrabatt {r} %, Skonto {s} %, Bezugskosten insgesamt {b|eur}. Berechnen Sie den Einstandspreis für die gesamte Bestellung.",
    "m*p*(1-r/100)*(1-s/100)+b",
    {
      firma: V.pick(["FAMK", "Mediahaus Rhein", "Kreativ-Kontor", "Pixelwerk GmbH"]),
      artikel: V.pick(["bedruckte Tassen", "Kugelschreiber mit Logo", "Stoffbeutel", "Notizbücher", "USB-Sticks"]),
      m: V.int(200, 1500, 100),
      p: V.dec(2, 9, 2),
      r: V.pick([5, 8, 10, 12, 15]),
      s: V.pick([2, 3]),
      b: V.int(40, 220, 10),
    },
    { unit: "€", steps: ["Listeneinkaufspreis = {m} × {p|eur}", "− {r} % Rabatt = Zieleinkaufspreis", "− {s} % Skonto = Bareinkaufspreis", "+ Bezugskosten {b|eur} = Einstandspreis = {result|eur}"] },
  )
  .tcalc(
    "Zwei Druckereien bieten {m} Flyer an. Druckerei A: Listenpreis {pa|eur}, {ra} % Rabatt, keine Bezugskosten. Druckerei B: Listenpreis {pb|eur}, {rb} % Rabatt, Lieferkosten {bb|eur}. Skonto jeweils nicht beachten. Um wie viel Euro unterscheiden sich die Einstandspreise (Betrag der Differenz)?",
    "abs(pa*(1-ra/100) - (pb*(1-rb/100)+bb))",
    {
      m: V.pick([5000, 10000, 20000]),
      pa: V.int(400, 900, 50),
      ra: V.pick([5, 10, 12, 15]),
      pb: V.int(380, 850, 50),
      rb: V.pick([0, 5, 8, 10]),
      bb: V.int(20, 120, 10),
    },
    { unit: "€", steps: ["Einstandspreis A = {pa|eur} − {ra} % Rabatt", "Einstandspreis B = {pb|eur} − {rb} % Rabatt + {bb|eur} Lieferkosten", "Differenz = {result|eur}"] },
  )
  .done();

/* =========================================================
   Vertragsarten
   ========================================================= */
const va = topic("wsp-lf3-vertragsarten", { part: 2, src: SRC })
  .summary("Vertragsarten im Überblick", `
| Vertrag | Kern | Merkmal |
|---|---|---|
| **Kaufvertrag** | Eigentum gegen Kaufpreis | Verkäufer: Ware + Eigentum, Käufer: Zahlung + Annahme |
| **Mietvertrag** | Gebrauchsüberlassung **gegen Entgelt** | Eigentum bleibt beim Vermieter |
| **Leihvertrag** | Gebrauchsüberlassung **unentgeltlich** | Rückgabe derselben Sache |
| **Pachtvertrag** | Gebrauch **und Fruchtziehung** gegen Entgelt | z. B. Gaststätte, Acker |
| **Darlehensvertrag** | Geld/vertretbare Sachen **auf Zeit**, Rückgabe gleicher Art, i. d. R. mit Zins | Schriftform bei Verbraucherdarlehen |
| **Leasingvertrag** | Miete + Kaufoption, Grundmietzeit, Restwert | mietrechtlich behandelt |
| **Dienstvertrag** | geschuldet ist die **Tätigkeit** (kein Erfolg) | z. B. Beratung, freiberufliche Honorarkraft |
| **Werkvertrag** | geschuldet ist ein **Erfolg/Werk** (Abnahme) | z. B. Flyerproduktion, Film, Website |
| **Arbeitsvertrag** | abhängige, **weisungsgebundene** Arbeit gegen Lohn | Sonderform des Dienstvertrags |

**Agenturvertrag**: gemischter Vertrag – Beratung/Betreuung = **Dienstvertrag**, Konzeption/Produktion eines konkreten Ergebnisses = **Werkvertrag**.
`)
  .cards([
    ["Merkmal des Mietvertrags?", "Entgeltliche Überlassung zum Gebrauch auf Zeit – das Eigentum bleibt beim Vermieter."],
    ["Merkmal des Leihvertrags?", "Unentgeltliche Überlassung einer Sache zum Gebrauch; dieselbe Sache wird zurückgegeben."],
    ["Merkmal des Pachtvertrags?", "Überlassung zum Gebrauch und zur Fruchtziehung gegen Entgelt."],
    ["Merkmal des Darlehensvertrags?", "Überlassung von Geld (oder vertretbaren Sachen); zurückzugeben ist Gleichartiges, meist mit Zinsen."],
    ["Merkmal des Leasingvertrags?", "Langfristige Gebrauchsüberlassung gegen Leasingraten; wird wie Miete behandelt, oft mit Kaufoption zum Restwert."],
    ["Merkmal des Dienstvertrags?", "Geschuldet wird eine Tätigkeit, nicht ein Erfolg (z. B. Beratung)."],
    ["Merkmal des Werkvertrags?", "Geschuldet wird ein bestimmter Erfolg (Werk), der abgenommen wird (z. B. Druck von 20 Steel Pans)."],
    ["Merkmal des Arbeitsvertrags?", "Weisungsgebundene Arbeit in persönlicher Abhängigkeit gegen Arbeitsentgelt."],
    ["Dienstvertrag vs. Werkvertrag?", "Dienstvertrag: Tätigkeit geschuldet. Werkvertrag: Erfolg geschuldet."],
    ["Dienstvertrag vs. Arbeitsvertrag?", "Der Arbeitnehmer ist weisungsgebunden und persönlich abhängig; der freie Dienstnehmer arbeitet selbstständig."],
    ["Was ist ein Agenturvertrag rechtlich?", "Meist ein gemischter Vertrag: Beratung = Dienstvertrag, Konzeption/Produktion = Werkvertrag."],
    ["Was ist ein Honorarvertrag?", "Vertrag mit einem freien Mitarbeiter (meist Dienstvertrag) – kein Arbeitsverhältnis."],
    ["Beispiel Werkvertrag in einer Agentur?", "Produktion und Branding von Werbetrommeln zu einem Festpreis; Druck von Plakaten."],
    ["Beispiel Dienstvertrag in einer Agentur?", "Ein freischaffender Musiker unterrichtet gegen Honorar."],
    ["Was ist eine Werklieferung?", "Der Unternehmer stellt ein Werk aus eigenem Material her (z. B. gebrandete Produkte) – Mischform mit Kaufrecht."],
  ])
  .gls([
    ["Werkvertrag", "Vertrag, bei dem der Unternehmer zur Herstellung eines Werks (Erfolg) und der Besteller zur Vergütung verpflichtet ist."],
    ["Dienstvertrag", "Vertrag über die Leistung von Diensten (Tätigkeit) gegen Vergütung."],
    ["Mietvertrag", "Entgeltliche Gebrauchsüberlassung einer Sache auf Zeit."],
    ["Leasing", "Langfristige Gebrauchsüberlassung gegen Leasingraten, oft mit Kaufoption."],
    ["Honorar", "Vergütung freiberuflicher Tätigkeit."],
  ])
  .mc("Die FAMK beauftragt einen Hersteller, 20 Steel Pans mit dem Slogan „Trommeln für Vintage“ zu einem Festpreis zu produzieren und zu branden. Um welche Vertragsart handelt es sich?", "Werkvertrag", ["Mietvertrag", "Dienstvertrag", "Leasingvertrag", "Arbeitsvertrag"])
  .mc("Die FAMK bucht einen freischaffenden Musiker auf Honorarbasis, der Studenten ausbildet. Welche Vertragsart liegt vor?", "Dienstvertrag", ["Werkvertrag", "Arbeitsvertrag", "Mietvertrag", "Kaufvertrag"])
  .mc("An wen müssen bei der Beauftragung eines selbstständigen Künstlers/Musikers für Verwertung seiner Leistungen u. U. Abgaben gezahlt werden?", "An die Künstlersozialkasse", ["An die Krankenkasse", "An die Arbeitslosenversicherung", "An die Berufsunfähigkeitsversicherung", "An die Rentenversicherung als Arbeitgeberanteil"], { e: "Für die Beauftragung selbstständiger Künstler und Publizisten zahlen Verwerter (z. B. Agenturen) die Künstlersozialabgabe." })
  .mc("Welche Aussage zum Leihvertrag ist richtig?", "Er ist unentgeltlich.", ["Er ist entgeltlich.", "Der Entleiher wird Eigentümer.", "Er muss notariell beurkundet werden.", "Er ist nur zwischen Kaufleuten möglich."])
  .mc("Wodurch unterscheidet sich ein Werkvertrag vom Dienstvertrag?", "Beim Werkvertrag wird ein Erfolg geschuldet, beim Dienstvertrag die Tätigkeit.", ["Beim Werkvertrag wird nur die Tätigkeit geschuldet.", "Der Werkvertrag ist immer unentgeltlich.", "Der Dienstvertrag verlangt eine Abnahme.", "Es gibt keinen Unterschied."])
  .match("Ordnen Sie jedem Fall die Vertragsart zu.", [
    ["Eine Agentur lässt 5.000 Flyer drucken", "Werkvertrag"],
    ["Ein Berater analysiert gegen Stundenhonorar die Markenstrategie", "Dienstvertrag"],
    ["Die Agentur nutzt gegen monatliche Raten über 4 Jahre ein Kamerasystem und kann es am Ende kaufen", "Leasingvertrag"],
    ["Ein Freund überlässt der Agentur unentgeltlich eine Kamera", "Leihvertrag"],
    ["Die Agentur überlässt Büroräume gegen monatliche Zahlung", "Mietvertrag"],
  ])
  .match("Ordnen Sie jeder Vertragsart den Kern der Leistung zu.", [
    ["Kaufvertrag", "Eigentumsübertragung gegen Kaufpreis"],
    ["Darlehensvertrag", "Überlassung von Geld auf Zeit mit Rückzahlung"],
    ["Arbeitsvertrag", "weisungsgebundene Arbeit gegen Entgelt"],
    ["Pachtvertrag", "Gebrauch und Fruchtziehung gegen Entgelt"],
  ])
  .tf("Beim Werkvertrag ist ein bestimmter Erfolg geschuldet.", true)
  .tf("Bei einem Mietvertrag wird der Mieter Eigentümer der Sache.", false)
  .tf("Ein Agenturvertrag kann Dienst- und Werkvertragsanteile enthalten.", true)
  .cloze("Beim [[Dienstvertrag]] schuldet man die Tätigkeit, beim [[Werkvertrag]] den Erfolg.", { d: 1 })
  .done();

/* =========================================================
   Kaufvertragsstörungen, Mahnverfahren & Verjährung
   ========================================================= */
const st = topic("wsp-lf3-stoerungen", { part: 2, src: SRC })
  .summary("Kaufvertragsstörungen, Mahnverfahren & Verjährung", `
| Störung | Voraussetzungen | Rechte |
|---|---|---|
| **Mangelhafte Lieferung** (Sach-/Rechtsmangel) | Mangel bei Übergabe; bei Handelskauf **unverzügliche Rüge** | zuerst **Nacherfüllung** (Nachbesserung/Ersatzlieferung), dann **Rücktritt**, **Minderung**, **Schadensersatz** |
| **Lieferungsverzug** | fällig + **Mahnung** (entfällt bei Fixgeschäft/Kalendertermin) + Verschulden | auf Lieferung bestehen · nach Nachfrist: Rücktritt und/oder Schadensersatz |
| **Annahmeverzug** | fällig + ordnungsgemäß angeboten + Käufer nimmt nicht an | Annahme verlangen · Lagerung auf Kosten des Käufers · **Selbsthilfeverkauf** · Rücktritt/Schadensersatz nach Nachfrist |
| **Zahlungsverzug** | fällig + **Mahnung** (entfällt bei kalendermäßig bestimmtem Zahlungstermin) oder **30 Tage nach Fälligkeit und Rechnungszugang** + Verschulden | Zahlung + Verzugszinsen · nach Nachfrist: Rücktritt/Schadensersatz |

**Verjährung**: Mängelansprüche **2 Jahre** (neue Sachen; **5 Jahre** Bauwerke); regelmäßige Verjährung **3 Jahre** (Beginn mit Ablauf des Entstehungsjahres, z. B. Forderung aus 2023 → 31.12.2026); **10 Jahre** Aufbewahrung; **30 Jahre** Titel (Urteile). **Hemmung** = Frist läuft für die Dauer des Hemmungsgrundes nicht (Verhandlungen, Klage, Mahnbescheid, höhere Gewalt).

**Mahnverfahren**
- *außergerichtlich*: Zahlungserinnerung → 1. Mahnung → 2. Mahnung → 3. Mahnung (mit Androhung rechtlicher Schritte)
- *gerichtlich*: Antrag auf **Mahnbescheid** (Amtsgericht) → Widerspruch (2 Wochen) → **Vollstreckungsbescheid** → **Zwangsvollstreckung** (Gerichtsvollzieher, Pfändung) → eidesstattliche Versicherung
`)
  .cards([
    ["Was sind die vier Kaufvertragsstörungen?", "Mangelhafte Lieferung (Schlechtleistung), Lieferungsverzug, Annahmeverzug, Zahlungsverzug."],
    ["Wann ist eine Sache mangelfrei?", "Wenn sie bei Übergabe die vereinbarte, vorausgesetzte oder übliche Beschaffenheit hat."],
    ["Nenne Mangelarten.", "Mangel in der Beschaffenheit, Montagemangel, Falschlieferung (Aliud), Mengenmangel (Zuwenig/Zuviel), Rechtsmangel."],
    ["Welche Rechte hat der Käufer bei Mängeln – in welcher Reihenfolge?", "Zuerst Nacherfüllung (Nachbesserung oder Ersatzlieferung), danach Rücktritt oder Minderung und ggf. Schadensersatz."],
    ["Was heißt Nacherfüllung?", "Der Verkäufer beseitigt den Mangel (Nachbesserung) oder liefert mangelfreie Ware (Ersatzlieferung)."],
    ["Was ist die Rügepflicht beim zweiseitigen Handelskauf?", "Offene Mängel müssen unverzüglich gerügt werden; versteckte Mängel unverzüglich nach Entdeckung."],
    ["Gilt die Rügepflicht bei Verbrauchern?", "Nein – nur beim Handelskauf unter Kaufleuten."],
    ["Verjährungsfrist für Mängelansprüche?", "2 Jahre bei neuen beweglichen Sachen, 5 Jahre bei Bauwerken; bei arglistig verschwiegenen Mängeln gilt die regelmäßige Frist (3 Jahre)."],
    ["Voraussetzungen des Lieferungsverzugs?", "Fälligkeit der Lieferung, Mahnung (außer bei Fixgeschäft/kalendermäßig bestimmtem Termin), Verschulden."],
    ["Rechte des Käufers im Lieferungsverzug?", "Lieferung verlangen; nach Nachfrist vom Vertrag zurücktreten und/oder Schadensersatz verlangen."],
    ["Voraussetzungen des Annahmeverzugs?", "Fällige Leistung, ordnungsgemäß angeboten (richtige Zeit/Ort/Ware), Käufer nimmt nicht an."],
    ["Rechte des Verkäufers im Annahmeverzug?", "Annahme und Zahlung verlangen, Ware auf Kosten des Käufers lagern, Selbsthilfeverkauf, ggf. Rücktritt/Schadensersatz."],
    ["Was ist ein Selbsthilfeverkauf?", "Der Verkäufer verkauft die nicht angenommene Ware öffentlich (Versteigerung) und rechnet mit dem Käufer ab."],
    ["Voraussetzungen des Zahlungsverzugs?", "Fälligkeit, Mahnung (außer bei kalendermäßig bestimmter Zahlungsfrist oder 30 Tage nach Fälligkeit und Rechnungszugang), Verschulden."],
    ["Wann gerät der Schuldner ohne Mahnung in Zahlungsverzug?", "Bei kalendermäßig bestimmtem Zahlungstermin („zahlbar bis 15.03.“) mit Ablauf des Termins; oder 30 Tage nach Fälligkeit und Zugang der Rechnung."],
    ["Rechte des Verkäufers im Zahlungsverzug?", "Zahlung plus Verzugszinsen und Mahnkosten; nach Nachfrist Rücktritt und/oder Schadensersatz."],
    ["Verzugszinsen (gesetzlich)?", "Verbraucher: 5 Prozentpunkte, Unternehmer: 9 Prozentpunkte über dem Basiszinssatz."],
    ["Stufen des außergerichtlichen Mahnverfahrens?", "Zahlungserinnerung, 1., 2. und 3. Mahnung (mit Androhung gerichtlicher Schritte)."],
    ["Stufen des gerichtlichen Mahnverfahrens?", "Antrag auf Mahnbescheid → Mahnbescheid → (Widerspruch) → Vollstreckungsbescheid → Zwangsvollstreckung."],
    ["Frist für den Widerspruch gegen den Mahnbescheid?", "2 Wochen."],
    ["Was prüft das Gericht beim Mahnbescheid?", "Nicht, ob die Forderung berechtigt ist – nur formale Voraussetzungen."],
    ["Wer führt die Zwangsvollstreckung durch?", "Der Gerichtsvollzieher (Pfändung)."],
    ["Was ist das Pfandsiegel („Kuckuck“)?", "Kennzeichnung gepfändeter Sachen, die vorerst beim Schuldner bleiben."],
    ["Regelmäßige Verjährungsfrist?", "3 Jahre; sie beginnt mit Ablauf des Jahres, in dem der Anspruch entstanden ist."],
    ["Verjährungsfrist Bauwerke?", "5 Jahre."],
    ["Was bedeutet Hemmung der Verjährung?", "Die Frist läuft für die Dauer des Hemmungsgrundes nicht weiter (z. B. Verhandlungen, Klage, höhere Gewalt)."],
    ["Frist für die Kündigungsschutzklage?", "3 Wochen."],
    ["Widerrufsrecht bei Fernabsatz/Verbraucherverträgen?", "14 Tage (verlängert sich bei fehlender Belehrung)."],
  ])
  .gls([
    ["Lieferungsverzug", "Verkäufer liefert trotz Fälligkeit und Mahnung nicht rechtzeitig."],
    ["Annahmeverzug", "Käufer nimmt die ordnungsgemäß angebotene Ware nicht an."],
    ["Zahlungsverzug", "Käufer zahlt trotz Fälligkeit und Mahnung nicht rechtzeitig."],
    ["Nacherfüllung", "Nachbesserung oder Ersatzlieferung bei mangelhafter Ware."],
    ["Mahnbescheid", "Gerichtlicher Zahlungsbefehl im Mahnverfahren."],
    ["Verjährung", "Der Schuldner darf nach Fristablauf die Leistung verweigern."],
    ["Hemmung", "Unterbrechung des Fristenlaufs der Verjährung."],
  ])
  .mc("Eine Agentur bestellt Bürolampen. Vier von zehn sind defekt. Welches Recht steht der Agentur vorrangig zu?", "Nacherfüllung (Nachbesserung oder Ersatzlieferung)", ["Sofortiger Rücktritt vom Vertrag", "Minderung des Kaufpreises", "Schadensersatz neben der Leistung", "Kein Recht, da der Mangel offen war"])
  .mc("Die FAMK lässt Schriftzüge aus Edelstahltrommeln lasern; einige Buchstaben verbiegen sich. Welches Recht steht ihr vorrangig zu?", "Die Beseitigung des Mangels (Nacherfüllung)", ["Der sofortige Rücktritt und Schadensersatz statt der Leistung", "Die Minderung des Kaufpreises", "Kein Recht, weil nicht gerügt wurde", "Schadensersatz neben der Leistung"])
  .mc("Wann gerät ein Schuldner in Zahlungsverzug, wenn die Rechnung „zahlbar bis 15.03.2026“ lautet?", "Nach Ablauf des 15.03.2026 – ohne weitere Mahnung", ["Erst nach Zugang einer Mahnung und Ablauf der Nachfrist", "30 Tage nach Rechnungszugang", "Sofort nach Zugang der Rechnung", "Erst nach Zugang eines Mahnbescheids"], { e: "Kalendermäßig bestimmter Zahlungstermin: Verzug mit Fristablauf." })
  .mc("Der Lieferer liefert fälschlich an die Adresse eines Dritten, der niemanden antrifft. Die Ware wird dort abgestellt und gestohlen. Wer trägt die Schuld an der fehlerhaften Lieferung?", "Der Verkäufer – er hat nicht am richtigen Ort geleistet.", ["Der Käufer", "Der Dritte", "Beide je zur Hälfte", "Niemand"], { d: 3 })
  .mc("Wer gerät in Annahmeverzug?", "Der Käufer, der ordnungsgemäß gelieferte Ware nicht annimmt", ["Der Verkäufer, der zu spät liefert", "Der Käufer, der nicht zahlt", "Der Verkäufer, der Mängel hat", "Der Spediteur"])
  .mc("Welche Aussage zum gerichtlichen Mahnverfahren ist richtig?", "Das Gericht prüft nicht, ob die Forderung zu Recht besteht.", ["Es können auch Warenschulden eingefordert werden.", "Der Gerichtsvollzieher erlässt den Mahnbescheid.", "Es ist teurer und langsamer als eine Klage.", "Es gilt nur für Verbraucher."])
  .mc("Welche Aussage zur Verjährung ist richtig?", "Die regelmäßige Verjährungsfrist beträgt 3 Jahre ab Ende des Entstehungsjahres.", ["Alle Ansprüche verjähren nach 30 Tagen.", "Die Frist beginnt am Tag des Vertragsschlusses.", "Eine Hemmung verlängert die Frist um 1 Jahr.", "Mängelansprüche verjähren immer nach 5 Jahren."])
  .mc("Welche Frist gilt für Mängelansprüche bei einem neu gekauften beweglichen Gegenstand?", "2 Jahre", ["6 Monate", "1 Jahr", "3 Jahre", "5 Jahre"])
  .mc("Welche Mängelrüge ist beim zweiseitigen Handelskauf vorgeschrieben?", "Unverzügliche Rüge offener Mängel", ["Rüge innerhalb von 6 Monaten", "Keine Rüge nötig", "Rüge innerhalb von 2 Jahren", "Rüge nur durch Anwalt"])
  .match("Ordnen Sie jeder Störung die richtige Beschreibung zu.", [
    ["Lieferungsverzug", "Verkäufer liefert nicht rechtzeitig"],
    ["Annahmeverzug", "Käufer nimmt Ware nicht an"],
    ["Zahlungsverzug", "Käufer zahlt nicht rechtzeitig"],
    ["Schlechtleistung", "Ware ist mangelhaft"],
  ])
  .match("Ordnen Sie die Rechtsfolge der Störung zu.", [
    ["Selbsthilfeverkauf", "Annahmeverzug"],
    ["Ersatzlieferung", "Mangelhafte Lieferung"],
    ["Verzugszinsen", "Zahlungsverzug"],
    ["Rücktritt nach Nachfrist wegen Nichtlieferung", "Lieferungsverzug"],
  ])
  .match("Ordnen Sie jedem Zeitraum den Sachverhalt zu.", [
    ["2 Wochen", "Einspruch gegen den Mahnbescheid"],
    ["3 Wochen", "Klage gegen eine sozial ungerechtfertigte Kündigung"],
    ["30 Tage", "Zahlungsverzug nach Fälligkeit und Rechnungszugang"],
    ["3 Jahre", "Regelmäßige Verjährungsfrist"],
  ], ["10 Tage"])
  .order("Bringen Sie die Stufen des gerichtlichen Mahnverfahrens in die richtige Reihenfolge.", ["Antrag auf Mahnbescheid beim Amtsgericht", "Erlass des Mahnbescheids", "Vollstreckungsbescheid", "Zwangsvollstreckung durch den Gerichtsvollzieher"], { d: 2 })
  .order("Bringen Sie die außergerichtlichen Mahnstufen in die richtige Reihenfolge.", ["Zahlungserinnerung", "1. Mahnung", "2. Mahnung", "3. Mahnung mit Androhung gerichtlicher Schritte"], { d: 1 })
  .tf("Der Käufer hat bei Mängeln vorrangig das Recht zum sofortigen Rücktritt.", false, { e: "Vorrangig ist die Nacherfüllung." })
  .tf("Das gerichtliche Mahnverfahren eignet sich nur für Geldforderungen.", true)
  .tf("Die Verjährung beginnt bei der regelmäßigen Frist mit dem Tag der Entstehung des Anspruchs.", false, { e: "Sie beginnt mit Ablauf des Jahres der Anspruchsentstehung." })
  .cloze("Bei Verbrauchsgüterkäufen verjähren Mängelansprüche nach [[2]] Jahren.", { d: 1 })
  .cloze("Das gerichtliche Mahnverfahren beginnt mit dem Antrag auf [[Mahnbescheid]] und endet ggf. mit der [[Zwangsvollstreckung]].")
  .error("Welche Aussagen zu Kaufvertragsstörungen sind fehlerhaft?", [
    ["Beim Lieferungsverzug muss in der Regel gemahnt werden.", false],
    ["Bei Annahmeverzug darf der Käufer Selbsthilfeverkauf durchführen.", true, "Der Verkäufer hat dieses Recht."],
    ["Verzugszinsen können bei Zahlungsverzug verlangt werden.", false],
    ["Mängelansprüche verjähren bei neuen Sachen nach 5 Jahren.", true, "Regelfall: 2 Jahre (5 Jahre nur bei Bauwerken)."],
  ])
  .tmc(
    "Ein Anspruch aus einem Kaufvertrag über Werbematerial entsteht im Jahr {y}. Wann verjährt er nach der regelmäßigen Verjährungsfrist, wenn keine Hemmung eintritt?",
    "Mit Ablauf des 31.12.{y3}",
    ["Mit Ablauf des 31.12.{y2}", "Mit Ablauf des 31.12.{y5}", "Mit Ablauf des Tages der Entstehung des Anspruchs im Jahr {y3}"],
    { y: V.int(2021, 2025, 1, "raw"), y2: V.expr("y+2", 0, "raw"), y3: V.expr("y+3", 0, "raw"), y5: V.expr("y+5", 0, "raw") },
    { e: "Regelverjährung: 3 Jahre ab Ende des Entstehungsjahres." },
  )
  .tmc(
    "Die {firma} erhält am {ctx.zugang} eine Rechnung über 4.800 EUR. Zahlungsbedingung: {ctx.zb}. Wann gerät sie in Zahlungsverzug?",
    "{ctx.richtig}",
    ["{ctx.w1}", "{ctx.w2}", "{ctx.w3}"],
    {
      firma: V.pick(["FAMK", "Kreativ-Kontor", "Mediahaus Rhein", "Pixelwerk GmbH"]),
      ctx: V.pick([
        { zugang: "01.03.2026", zb: "zahlbar bis 15.03.2026", richtig: "Mit Ablauf des 15.03.2026, ohne Mahnung", w1: "Erst nach Zugang einer Mahnung und fruchtlosem Ablauf der Nachfrist", w2: "30 Tage nach Zugang, also am 31.03.2026", w3: "Sofort mit Zugang der Rechnung" },
        { zugang: "10.04.2026", zb: "zahlbar bis 30.04.2026", richtig: "Mit Ablauf des 30.04.2026, ohne Mahnung", w1: "Nach der ersten Mahnung", w2: "30 Tage nach Zugang, also am 10.05.2026", w3: "Sofort mit Zugang der Rechnung" },
        { zugang: "05.05.2026", zb: "zahlbar innerhalb von 14 Tagen nach Rechnungszugang (kalendermäßig nicht bestimmt, kein Zahlungstermin genannt)", richtig: "30 Tage nach Fälligkeit und Zugang der Rechnung – bei Fälligkeit mit Zugang also am 04.06.2026 (Ablauf)", w1: "Mit Ablauf von 14 Tagen am 19.05.2026 automatisch", w2: "Sofort mit Zugang der Rechnung", w3: "Erst nach Zugang eines Mahnbescheids" },
      ]),
    },
    { d: 3 },
  )
  .done();

export default [
  { file: "wsp/lf3-recht.json", bundle: { items: [recht] } },
  { file: "wsp/lf3-rechtsgeschaefte.json", bundle: { items: [rg] } },
  { file: "wsp/lf3-kaufvertrag.json", bundle: { items: [kv] } },
  { file: "wsp/lf3-vertragsarten.json", bundle: { items: [va] } },
  { file: "wsp/lf3-stoerungen.json", bundle: { items: [st] } },
];
