import { topic, V } from "./dsl.mjs";

const SRC = "WSP LF5 Werberecht (Unterricht)";

const sr = topic("wsp-lf5-schutzrechte", { part: 3, src: SRC })
  .summary("Schutzrechte: Marke, Patent, Design & Urheberrecht", `
| Recht | Schützt | Dauer | Register/Entstehung |
|---|---|---|---|
| **Marke** (MarkenG) | Zeichen, die Waren/Dienste unterscheiden (Wort, Bild, Klang, Farbe …) | **10 Jahre, beliebig verlängerbar** | Eintragung **DPMA** (EU: EUIPO); auch durch Benutzung/Verkehrsgeltung |
| **Patent** | technische Erfindung (neu, erfinderisch, gewerblich anwendbar) | **20 Jahre** | Anmeldung DPMA |
| **Gebrauchsmuster** | „kleines Patent“, technische Neuerung | **10 Jahre** | Eintragung, keine Prüfung auf Neuheit im Detail |
| **Design** (DesignG) | Aussehen eines Erzeugnisses (Form, Farbe) | **bis 25 Jahre** (5-Jahres-Perioden) | Eintragung DPMA |
| **Urheberrecht** (UrhG) | persönliche geistige Schöpfungen (Text, Foto, Musik, Film, Werbeslogan nur bei Schöpfungshöhe) | **70 Jahre nach Tod** des Urhebers | **entsteht mit Schaffung**, keine Anmeldung |

**Urheberrecht**: Urheber ist immer der **Schöpfer (natürliche Person)**, nicht übertragbar; übertragbar sind **Nutzungsrechte** (einfach/ausschließlich; zeitlich, räumlich, inhaltlich beschränkbar). **Urheberpersönlichkeitsrecht**: Namensnennung, Schutz vor Entstellung. Zitatrecht, Panoramafreiheit, Schranken (private Kopie).
**Markenschutz-Hindernisse**: fehlende Unterscheidungskraft, Freihaltebedürfnis, Täuschungsgefahr.
**Rechtsfolgen** bei Verletzung: Unterlassung, Beseitigung, Schadensersatz, Abmahnung.
`)
  .cards([
    ["Was schützt eine Marke?", "Zeichen (Wort, Bild, Klang, Farbe), die Waren oder Dienstleistungen eines Unternehmens von anderen unterscheiden."],
    ["Schutzdauer einer Marke?", "10 Jahre ab Anmeldung, beliebig oft um je 10 Jahre verlängerbar."],
    ["Wo wird eine Marke in Deutschland angemeldet?", "Beim Deutschen Patent- und Markenamt (DPMA); EU-weit beim EUIPO."],
    ["Was ist Verkehrsgeltung?", "Ein Zeichen wird durch Benutzung im Markt als Hinweis auf ein Unternehmen bekannt – Schutz ohne Eintragung."],
    ["Wann kann eine Marke nicht eingetragen werden?", "Bei fehlender Unterscheidungskraft, Freihaltebedürfnis (beschreibende Angaben) oder Täuschungsgefahr."],
    ["Was schützt ein Patent?", "Technische Erfindungen, die neu, erfinderisch und gewerblich anwendbar sind."],
    ["Schutzdauer Patent?", "20 Jahre ab Anmeldung."],
    ["Was ist ein Gebrauchsmuster?", "Ein „kleines Patent“ für technische Neuerungen, Schutzdauer max. 10 Jahre, Eintragung ohne volle Prüfung."],
    ["Was schützt ein eingetragenes Design?", "Die Gestaltung (Form, Farbe, Oberfläche) eines Erzeugnisses; max. 25 Jahre."],
    ["Was ist ein Werk im Sinne des Urheberrechts?", "Eine persönliche geistige Schöpfung mit individueller Prägung (Schöpfungshöhe)."],
    ["Wann entsteht das Urheberrecht?", "Automatisch mit der Schaffung des Werkes – ohne Anmeldung oder Eintragung."],
    ["Schutzdauer Urheberrecht?", "70 Jahre nach dem Tod des Urhebers."],
    ["Wer kann Urheber sein?", "Nur der Schöpfer als natürliche Person – das Urheberrecht ist nicht übertragbar."],
    ["Was kann der Urheber übertragen?", "Nutzungsrechte (einfach oder ausschließlich, zeitlich/räumlich/inhaltlich beschränkbar)."],
    ["Einfaches vs. ausschließliches Nutzungsrecht?", "Einfach: mehrere Nutzer möglich. Ausschließlich: nur der Inhaber darf nutzen (auch der Urheber nicht)."],
    ["Was ist das Urheberpersönlichkeitsrecht?", "Recht auf Namensnennung, Veröffentlichung und Schutz vor Entstellung des Werkes."],
    ["Was bedeutet Urheberbenennung?", "Der Urheber muss genannt werden (z. B. Bildnachweis)."],
    ["Was ist das Zitatrecht?", "Kleine Teile eines Werkes dürfen mit Quellenangabe zu einem Zitatzweck verwendet werden."],
    ["Ist ein Werbeslogan urheberrechtlich geschützt?", "Nur, wenn er die nötige Schöpfungshöhe erreicht – kurze Slogans oft nicht (besser als Marke eintragen)."],
    ["Welche Rechtsfolgen drohen bei Schutzrechtsverletzung?", "Abmahnung, Unterlassung, Beseitigung, Schadensersatz."],
    ["Was ist eine Abmahnung?", "Aufforderung, ein rechtswidriges Verhalten zu unterlassen, meist mit strafbewehrter Unterlassungserklärung."],
    ["Was ist die Lizenz?", "Erlaubnis zur Nutzung eines Schutzrechts gegen Entgelt."],
    ["Was ist die Panoramafreiheit?", "Bauwerke und Kunstwerke im öffentlichen Raum dürfen von außen fotografiert und veröffentlicht werden."],
  ])
  .gls([
    ["Urheber", "Schöpfer eines Werks; immer eine natürliche Person."],
    ["Nutzungsrecht", "Erlaubnis des Urhebers, sein Werk zu nutzen."],
    ["DPMA", "Deutsches Patent- und Markenamt."],
    ["Schöpfungshöhe", "Grad an Individualität, der ein Werk urheberrechtlich schutzfähig macht."],
    ["Lizenz", "Erlaubnis zur Nutzung eines Schutzrechts."],
    ["Abmahnung", "Aufforderung zur Unterlassung einer Rechtsverletzung."],
  ])
  .mc("Wie lange dauert der Urheberrechtsschutz?", "70 Jahre nach dem Tod des Urhebers", ["10 Jahre nach Veröffentlichung", "20 Jahre nach der Schöpfung", "25 Jahre nach der Anmeldung", "Unbegrenzt"])
  .mc("Wie lange gilt der Markenschutz (verlängerbar)?", "10 Jahre", ["5 Jahre", "20 Jahre", "50 Jahre", "70 Jahre"])
  .mc("Wann entsteht das Urheberrecht an einem Foto?", "Mit der Schaffung – ohne Anmeldung", ["Mit der Eintragung beim DPMA", "Mit der Veröffentlichung", "Mit der Zahlung einer Gebühr", "Mit der Einwilligung des Auftraggebers"])
  .mc("Die FAMK beauftragt eine Fotografin. Wer ist Urheber der Fotos?", "Die Fotografin – nur Nutzungsrechte können übertragen werden.", ["Die FAMK, weil sie bezahlt", "Der Kunde der FAMK", "Beide gemeinsam", "Niemand"])
  .mc("Welche Aussage zu Nutzungsrechten ist richtig?", "Ein ausschließliches Nutzungsrecht erlaubt nur dem Inhaber die Nutzung.", ["Nutzungsrechte sind immer unbegrenzt.", "Das Urheberrecht selbst ist übertragbar.", "Einfache Nutzungsrechte schließen andere Nutzer aus.", "Nutzungsrechte entstehen nur durch Eintragung."])
  .mc("Welches Schutzrecht eignet sich für das Logo einer neuen Agentur?", "Marke", ["Patent", "Gebrauchsmuster", "Urheberrecht allein", "Haftungsbeschränkung"])
  .mc("Welches Schutzrecht schützt eine technische Erfindung?", "Patent", ["Marke", "Design", "Urheberrecht", "Geschmacksmuster"])
  .mc("Welches Schutzrecht schützt die äußere Gestalt einer neuen Flaschenform?", "Design", ["Patent", "Gebrauchsmuster", "Marke ausschließlich", "Urheberpersönlichkeitsrecht"])
  .match("Ordnen Sie das Schutzrecht dem Schutzgegenstand zu.", [
    ["Marke", "Zeichen zur Unterscheidung von Waren"],
    ["Patent", "Technische Erfindung"],
    ["Design", "Gestaltung eines Erzeugnisses"],
    ["Urheberrecht", "Persönliche geistige Schöpfung"],
  ])
  .match("Ordnen Sie die Schutzdauer zu.", [
    ["Patent", "20 Jahre"],
    ["Gebrauchsmuster", "10 Jahre"],
    ["Urheberrecht", "70 Jahre nach dem Tod"],
    ["Design (max.)", "25 Jahre"],
  ], ["5 Jahre"])
  .tf("Das Urheberrecht kann auf eine andere Person übertragen werden.", false, { e: "Nur Nutzungsrechte sind übertragbar." })
  .tf("Marken müssen beim DPMA eingetragen werden, um Schutz zu genießen – abgesehen von Verkehrsgeltung.", true)
  .tf("Eine Fotografin muss nach Bezahlung nie mehr genannt werden.", false)
  .cloze("Das [[Urheberrecht]] entsteht ohne Anmeldung, die [[Marke]] wird in der Regel durch Eintragung geschützt.")
  .error("Welche Aussagen zu Schutzrechten sind fehlerhaft?", [
    ["Ein Patent schützt technische Erfindungen für 20 Jahre.", false],
    ["Das Urheberrecht wird beim DPMA eingetragen.", true, "Es entsteht automatisch mit der Schaffung."],
    ["Nutzungsrechte sind übertragbar.", false],
    ["Eine Marke schützt nur Technik.", true, "Sie schützt unterscheidende Zeichen."],
  ])
  .done();

const ds = topic("wsp-lf5-datenschutz", { part: 3, src: SRC })
  .summary("Datenschutz (DSGVO) & Recht am eigenen Bild", `
**DSGVO/BDSG – Grundsätze** (Art. 5): Rechtmäßigkeit, Transparenz, **Zweckbindung**, **Datenminimierung**, Richtigkeit, **Speicherbegrenzung**, Integrität und Vertraulichkeit, Rechenschaftspflicht.
**Rechtmäßig** nur mit Rechtsgrundlage: **Einwilligung** (freiwillig, informiert, widerrufbar), Vertrag, rechtliche Pflicht, lebenswichtige Interessen, öffentliche Aufgabe, berechtigtes Interesse.
**Betroffenenrechte**: Auskunft, Berichtigung, **Löschung** („Recht auf Vergessenwerden“), Einschränkung, Datenübertragbarkeit, **Widerspruch**, Beschwerde bei Aufsichtsbehörde.
**Pflichten**: Verzeichnis von Verarbeitungstätigkeiten, **Datenschutzbeauftragter** (ab 20 Personen, die ständig Daten automatisiert verarbeiten), Meldung von Datenpannen binnen **72 Stunden**, Datenschutzerklärung (Website), Cookie-Einwilligung.
**Bußgeld**: bis **20 Mio. € oder 4 % des weltweiten Jahresumsatzes**.

**Recht am eigenen Bild** (§§ 22, 23 KUG): Bilder dürfen nur mit **Einwilligung** der abgebildeten Person verbreitet werden. Ausnahmen: Personen der Zeitgeschichte, Beiwerk, Versammlungen, Kunst/Bildung. Bei **Minderjährigen** Einwilligung der Eltern (und ggf. des Kindes); Widerruf möglich. Models: **Model Release**.
`)
  .cards([
    ["Wofür steht DSGVO?", "Datenschutz-Grundverordnung – EU-weite Regeln zum Schutz personenbezogener Daten."],
    ["Was sind personenbezogene Daten?", "Alle Informationen, die sich auf eine identifizierte oder identifizierbare Person beziehen (Name, E-Mail, IP-Adresse, Foto)."],
    ["Besonders sensible Daten?", "Gesundheit, Religion, politische Meinung, Gewerkschaft, biometrische/genetische Daten, Sexualleben."],
    ["Was bedeutet Zweckbindung?", "Daten dürfen nur für den Zweck genutzt werden, für den sie erhoben wurden."],
    ["Was bedeutet Datenminimierung?", "Es dürfen nur so viele Daten erhoben werden, wie für den Zweck nötig sind."],
    ["Was ist eine wirksame Einwilligung?", "Freiwillig, informiert, eindeutig und jederzeit widerrufbar."],
    ["Nenne Rechtsgrundlagen der Datenverarbeitung.", "Einwilligung, Vertrag, rechtliche Verpflichtung, lebenswichtige Interessen, öffentliche Aufgabe, berechtigtes Interesse."],
    ["Nenne Betroffenenrechte.", "Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch."],
    ["Was ist das Recht auf Vergessenwerden?", "Recht auf Löschung personenbezogener Daten, wenn kein Grund zur Speicherung mehr besteht."],
    ["Wann ist ein Datenschutzbeauftragter nötig?", "Wenn mindestens 20 Personen ständig mit automatisierter Datenverarbeitung beschäftigt sind (oder besondere Datenarten)."],
    ["Frist zur Meldung einer Datenpanne?", "Binnen 72 Stunden an die Aufsichtsbehörde."],
    ["Wie hoch ist das maximale Bußgeld nach DSGVO?", "Bis 20 Mio. € oder 4 % des weltweiten Jahresumsatzes (der höhere Betrag)."],
    ["Wann braucht man eine Cookie-Einwilligung?", "Für nicht notwendige Cookies (Tracking/Marketing) – aktives Opt-in."],
    ["Was muss eine Datenschutzerklärung enthalten?", "Verantwortlicher, Zwecke, Rechtsgrundlagen, Empfänger, Speicherdauer, Betroffenenrechte."],
    ["Was regelt das Recht am eigenen Bild?", "Wer abgebildet ist, entscheidet, ob sein Bild verbreitet werden darf (§ 22 KUG)."],
    ["Ausnahmen vom Recht am eigenen Bild?", "Personen der Zeitgeschichte, Beiwerk, Versammlungen, höheres Interesse der Kunst."],
    ["Was ist ein Model Release?", "Schriftliche Einwilligung des Models in Verwendung und Veröffentlichung der Bilder."],
    ["Fotos mit Minderjährigen – was gilt?", "Einwilligung der Erziehungsberechtigten erforderlich (je nach Alter auch des Kindes)."],
    ["Kann eine Einwilligung zurückgenommen werden?", "Ja – jederzeit mit Wirkung für die Zukunft."],
    ["Was ist Auftragsverarbeitung?", "Ein Dienstleister verarbeitet Daten im Auftrag – Vertrag (AVV) nötig."],
  ])
  .gls([
    ["DSGVO", "EU-Datenschutz-Grundverordnung."],
    ["Personenbezogene Daten", "Informationen über identifizierbare Personen."],
    ["Einwilligung", "Freiwillige, informierte Zustimmung zur Datenverarbeitung."],
    ["Model Release", "Einverständniserklärung eines Models zur Bildverwendung."],
    ["Datenpanne", "Verletzung des Schutzes personenbezogener Daten."],
  ])
  .mc("Welcher Grundsatz besagt, dass Daten nur für den ursprünglichen Zweck verwendet werden dürfen?", "Zweckbindung", ["Datenminimierung", "Speicherbegrenzung", "Richtigkeit", "Transparenz"])
  .mc("Die FAMK will Kundendaten für einen Newsletter nutzen. Was ist die sicherste Rechtsgrundlage?", "Ausdrückliche Einwilligung (Double-Opt-in)", ["Stillschweigen der Kunden", "Das Einverständnis der Geschäftsführung", "Die Visitenkarte reicht immer", "Keine, weil Marketing erlaubt ist"])
  .mc("Wie hoch kann das Bußgeld bei schweren DSGVO-Verstößen maximal sein?", "20 Mio. € oder 4 % des weltweiten Jahresumsatzes", ["500 €", "10.000 €", "1 Mio. €", "100 % des Umsatzes"])
  .mc("Innerhalb welcher Frist ist eine Datenpanne der Aufsichtsbehörde zu melden?", "72 Stunden", ["24 Stunden", "7 Tage", "30 Tage", "Gar nicht"])
  .mc("Eine Agentur nutzt für eine Plakatkampagne das Foto einer Passantin ohne Einwilligung. Was gilt?", "Das verletzt das Recht am eigenen Bild – eine Einwilligung ist nötig.", ["Es ist erlaubt, wenn die Passantin im öffentlichen Raum fotografiert wurde.", "Es ist erlaubt, weil die Kampagne Werbung ist.", "Nur Kinder müssen einwilligen.", "Eine Einwilligung ist nur bei Prominenten nötig."])
  .mc("Welche Person kann ohne Einwilligung abgebildet werden (§ 23 KUG)?", "Eine Person als Beiwerk neben einer Landschaft", ["Ein Model in einer Werbekampagne", "Eine Kundin im Geschäft", "Ein Kind beim Spielplatzfoto für Werbung", "Ein Mitarbeiter im Prospekt"])
  .mc("Welches Recht umfasst die Möglichkeit, die Daten löschen zu lassen?", "Recht auf Löschung (Recht auf Vergessenwerden)", ["Recht auf Auskunft", "Recht auf Datenübertragbarkeit", "Recht auf Zweckbindung", "Recht auf Widerspruch gegen Werbung"])
  .match("Ordnen Sie jedes Recht der Beschreibung zu.", [
    ["Auskunftsrecht", "Betroffene erfahren, welche Daten gespeichert sind"],
    ["Berichtigungsrecht", "Falsche Daten werden korrigiert"],
    ["Löschungsrecht", "Daten werden entfernt, wenn kein Speichergrund besteht"],
    ["Recht auf Datenübertragbarkeit", "Daten in gängigem Format zum Wechsel zu anderem Anbieter"],
  ])
  .match("Ordnen Sie den Grundsatz zu.", [
    ["Zweckbindung", "Nutzung nur für den erhobenen Zweck"],
    ["Datenminimierung", "Nur notwendige Daten erheben"],
    ["Speicherbegrenzung", "Daten nicht länger als nötig aufbewahren"],
    ["Transparenz", "Betroffene werden verständlich informiert"],
  ])
  .tf("Eine einmal erteilte Einwilligung kann nicht widerrufen werden.", false)
  .tf("Für Fotos von Minderjährigen ist eine Einwilligung der Erziehungsberechtigten erforderlich.", true)
  .tf("Die DSGVO gilt nur für große Unternehmen.", false, { e: "Sie gilt für alle Verantwortlichen." })
  .cloze("Die Einwilligung muss freiwillig, [[informiert]] und jederzeit [[widerrufbar]] sein.")
  .done();

const uw = topic("wsp-lf5-uwg", { part: 3, src: SRC })
  .summary("Wettbewerbsrecht (UWG) & Werberat", `
**UWG** schützt Mitbewerber, Verbraucher, sonstige Marktteilnehmer und das Allgemeininteresse vor **unlauterem Wettbewerb**.
- **Generalklausel** (§ 3): unlautere geschäftliche Handlungen sind unzulässig
- **Irreführende Werbung** (§ 5): falsche Angaben (Preis, Herkunft, Eigenschaften), Lockangebote, „Mondpreise“, Alleinstellungsbehauptungen (Spitzenstellung nur belegbar)
- **Aggressive** Handlungen (§ 4a): Nötigung, Belästigung
- **Unzumutbare Belästigung** (§ 7): Telefonwerbung ohne Einwilligung, E-Mail/SMS-Werbung ohne Einwilligung (Opt-in, Ausnahme Bestandskunden)
- **Vergleichende Werbung** (§ 6): zulässig, wenn sachlich, objektiv, nachprüfbar, nicht herabsetzend
- **Schleichwerbung/Influencer**: Werbung muss **gekennzeichnet** werden (#Werbung/#Anzeige)
- **Preisangabenverordnung**: Endpreise inkl. USt gegenüber Verbrauchern

**Rechtsfolgen**: Abmahnung → Unterlassungserklärung (strafbewehrt) → einstweilige Verfügung/Klage; Anspruch auf Beseitigung, Schadensersatz, Gewinnabschöpfung. Klagebefugt: Mitbewerber, Verbände, Kammern, Verbraucherschutzverbände.
**Deutscher Werberat**: Selbstkontrolle der Werbewirtschaft; behandelt Beschwerden (z. B. Diskriminierung, Sexismus), spricht Rügen aus – keine Bußgelder.
`)
  .cards([
    ["Wozu dient das UWG?", "Es schützt Mitbewerber, Verbraucher und Allgemeinheit vor unlauterem Wettbewerb."],
    ["Was ist irreführende Werbung?", "Werbung mit unwahren oder täuschenden Angaben, die Kaufentscheidungen beeinflussen kann (§ 5 UWG)."],
    ["Beispiel für ein Lockangebot?", "Beworbene Ware ist nicht in angemessener Menge vorrätig."],
    ["Was ist ein Mondpreis?", "Durchgestrichener, nie verlangter Preis als Vergleichspreis."],
    ["Dürfen Alleinstellungsbehauptungen verwendet werden?", "Nur wenn belegbar (z. B. „größte Agentur der Region“ mit Nachweis)."],
    ["Wann ist Telefonwerbung erlaubt?", "Bei Verbrauchern nur mit vorheriger ausdrücklicher Einwilligung, bei Unternehmen mit zumindest mutmaßlicher Einwilligung."],
    ["Wann ist E-Mail-Werbung erlaubt?", "Mit vorheriger Einwilligung (Opt-in); Ausnahme: Eigenwerbung an Bestandskunden mit Widerspruchsmöglichkeit."],
    ["Wann ist vergleichende Werbung zulässig?", "Wenn sie sachlich, objektiv nachprüfbar und nicht herabsetzend ist."],
    ["Was ist Schleichwerbung?", "Werbung, die nicht als solche erkennbar ist – verboten."],
    ["Wie müssen Influencer Werbung kennzeichnen?", "Deutlich erkennbar, z. B. #Werbung oder #Anzeige zu Beginn."],
    ["Was ist eine Abmahnung im Wettbewerbsrecht?", "Aufforderung, eine unlautere Handlung zu unterlassen und eine strafbewehrte Unterlassungserklärung abzugeben."],
    ["Wer darf bei Wettbewerbsverstößen abmahnen?", "Mitbewerber, Wettbewerbs- und Verbraucherverbände, Kammern."],
    ["Nenne Rechtsfolgen unlauterer Werbung.", "Unterlassung, Beseitigung, Schadensersatz, Gewinnabschöpfung."],
    ["Was ist der Deutsche Werberat?", "Selbstkontrollorgan der Werbewirtschaft; behandelt Beschwerden und spricht Rügen aus."],
    ["Kann der Werberat Bußgelder verhängen?", "Nein – nur öffentliche Rügen und Empfehlungen."],
    ["Was regelt die Preisangabenverordnung?", "Gegenüber Verbrauchern sind Endpreise inklusive Umsatzsteuer anzugeben."],
    ["Was ist eine unzumutbare Belästigung?", "Werbung, die der Empfänger erkennbar nicht wünscht (Spam, Cold Call)."],
    ["Was ist Double-Opt-in?", "Zwei Bestätigungsschritte (Anmeldung + Bestätigungslink) als Nachweis der Einwilligung."],
  ])
  .gls([
    ["UWG", "Gesetz gegen den unlauteren Wettbewerb."],
    ["Schleichwerbung", "Nicht erkennbare Werbung."],
    ["Mondpreis", "Fiktiver, durchgestrichener Vergleichspreis."],
    ["Werberat", "Selbstkontrolle der deutschen Werbewirtschaft."],
    ["Abmahnung", "Aufforderung zur Unterlassung einer Rechtsverletzung."],
  ])
  .mc("Ein Möbelhaus wirbt: „Sofa jetzt 499 € statt 999 €“, hat es aber nie für 999 € verkauft. Was liegt vor?", "Irreführende Werbung (Mondpreis)", ["Zulässige vergleichende Werbung", "Zulässige Preisaktion", "Schleichwerbung", "Telefonwerbung"])
  .mc("Eine Agentur ruft Privatpersonen ohne Einwilligung an, um Werbemittel zu bewerben. Welche Rechtsfolge ist möglich?", "Abmahnung wegen unzumutbarer Belästigung und Bußgeld", ["Keine – Werbung ist immer erlaubt", "Nur eine Belobigung", "Nur Zahlung von Skonto", "Steuernachzahlung"])
  .mc("Welche Werbung ist unzulässig?", "Ein Influencer bewirbt ein bezahltes Produkt ohne Kennzeichnung.", ["Ein Hersteller vergleicht sachlich nachprüfbare Produktdaten.", "Ein Händler bewirbt mit Endpreisen inkl. USt.", "Eine Agentur wirbt mit belegbarem Alleinstellungsmerkmal.", "Ein Unternehmen verschickt Newsletter an Opt-in-Kunden."])
  .mc("Wer kann den Werberat anrufen?", "Jede Person kann eine Beschwerde einreichen.", ["Nur Rechtsanwälte", "Nur Unternehmen", "Nur das Gericht", "Nur Mitbewerber"])
  .mc("Welche Folge hat eine Rüge des Werberats?", "Öffentliche Rüge ohne Bußgeld", ["Bußgeld bis 20 Mio. €", "Haftstrafe", "Gewerbeverbot", "Pfändung"])
  .mc("Wann ist E-Mail-Werbung unproblematisch zulässig?", "Bei vorheriger Einwilligung des Empfängers", ["Immer", "Wenn die Adresse im Internet steht", "Nur in der Nacht", "Wenn sie nicht länger als eine Seite ist"])
  .match("Ordnen Sie jeden Fall dem Verstoß zu.", [
    ["Preisangabe ohne Umsatzsteuer gegenüber Verbrauchern", "Verstoß gegen Preisangabenverordnung"],
    ["Beitrag eines Influencers ohne #Werbung", "Schleichwerbung"],
    ["Lockangebot ohne Lagerbestand", "Irreführende Werbung"],
    ["Cold Call bei Privatpersonen", "Unzumutbare Belästigung"],
  ])
  .tf("Der Deutsche Werberat kann Bußgelder verhängen.", false)
  .tf("Vergleichende Werbung ist unter bestimmten Bedingungen zulässig.", true)
  .tf("Alleinstellungsbehauptungen müssen nachweisbar sein.", true)
  .cloze("Wer eine Wettbewerbsverletzung begeht, kann [[abgemahnt]] werden und muss eine [[Unterlassungserklärung]] abgeben.")
  .done();

export default [
  { file: "wsp/lf5-schutzrechte.json", bundle: { items: [sr] } },
  { file: "wsp/lf5-datenschutz.json", bundle: { items: [ds] } },
  { file: "wsp/lf5-uwg.json", bundle: { items: [uw] } },
];
