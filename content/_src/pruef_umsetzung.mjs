import { topic, V } from "./dsl.mjs";

const SRC = "Abgewandelt nach IHK-Abschlussprüfungen (Umsetzung & Steuerung, Teil 3) – FAMK / Kunde Zweitschatz";

/* ============================ MaKo Teil 3 ============================ */
const m = topic("mako-pu-aufgaben", { part: 3, src: SRC, pts: 4 });

m.mc("Ihr Kunde Zweitschatz plant ein komplettes Redesign seiner App und möchte ein Update des Ein- und Verkaufserlebnisses. Die FAMK hat dafür kein Know-how. Welche Maßnahme ist am sinnvollsten?", "Sie buchen über eine Plattform für digitale Dienstleistungen einen freien Mitarbeiter für UI-/UX-Design, die Abrechnung erfolgt per ordnungsgemäßer Rechnung über die Plattform.", ["Sie bitten einen befreundeten Webdesigner, die App zu überarbeiten – wegen der privaten Bekanntschaft ohne Rechnung.", "Sie lassen einen Kollegen aus der IT-Abteilung der FAMK die App gegen einen kleinen Barbetrag ohne Beleg umbauen.", "Sie schlagen einer Webagentur ein Tauschgeschäft (App-Gestaltung gegen Werbefläche) vor, um die Umsatzsteuer zu sparen.", "Sie empfehlen dem Kunden, nur die mobile Website anzupassen, weil eine App ohnehin nur ein Rahmen sei."], { d: 3 })
 .mc("Sie sollen für Zweitschatz einen Dienstleister mit Schaltung und Betreuung von Social-Media-Anzeigen beauftragen. Worauf müssen Sie besonders achten, bevor Sie ihn verbindlich beauftragen?", "Der Dienstleister legt ein detailliertes Angebot mit Leistungsbeschreibung, Laufzeit und Abrechnungsmodalitäten vor.", ["Der Dienstleister hat Zugriff auf die privaten Social-Media-Konten der Mitarbeiter.", "Der Dienstleister verspricht, selbst besonders viele Likes zu generieren.", "Der Dienstleister bedient möglichst viele Plattformen gleichzeitig.", "Der Dienstleister versichert, wahrscheinlich mit niedrigen Kosten arbeiten zu können."])
 .mc("Kundinnen und Kunden beschweren sich, dass Pakete in deutlich schlechterem Zustand ankommen als angeboten; teils wird Geld eingezogen, aber nur Lumpen geliefert. Welche Vorgehensweise empfehlen Sie Zweitschatz?", "Zweitschatz weist die verkaufenden Nutzer auf die AGB hin, fordert Nachbesserung und sperrt andernfalls diese Verkäufer für weitere Transaktionen.", ["Zweitschatz bittet betroffene Käufer, den Verkäufern eine Nachlieferung abzuverlangen.", "Zweitschatz mahnt beschwerdeführende Käufer mit AGB-Auszug und droht mit Ausschluss.", "Zweitschatz bietet Käufern 25 € Gutschein an, wenn sie die negative Bewertung in eine positive ändern.", "Zweitschatz empfiehlt Käufern, zur Polizei zu gehen, da man nur Vermittler sei und selbst nichts tun könne."], { d: 3 })
 .match("Welche Zuständigkeiten haben die Kolleginnen und Kollegen in der FAMK?", [
   ["Selin Aksoy, Produktionerin", "Druckabnahme"],
   ["Ivo Petric, Grafikdesigner", "Erstellung Mood für Anzeigengestaltung"],
   ["Dana Fricke, Texterin", "Formulierung Mailing"],
   ["Stefan Maler, Kundenberater", "Erstellung Kreationsbriefing"],
   ["Dirk Goldmann, Buchhalter", "Rechnungsabwicklung"],
 ], [], { d: 2 })
 .match("Ordnen Sie die Druckverfahren den Beschreibungen zu.", [
   ["Flexodruck", "Druckende Teile sind erhaben und seitenverkehrt, für kleine bis mittlere Auflagen, z. B. Verpackungen"],
   ["Tiefdruck", "Druckende Teile liegen tiefer, für sehr hohe Auflagen, z. B. Zeitschriften und Kataloge"],
   ["Offsetdruck", "Indirekter Druck über ein Gummituch, für mittlere bis hohe Auflagen, z. B. Flyer"],
   ["Siebdruck", "Belichtung von Sieben aus Polyester, Nylon oder Metall, für kleine Auflagen, z. B. Trinkflaschen"],
   ["Digitaldruck", "Am PC erstellte Dateien werden direkt zum Drucker übertragen, für kleine Auflagen, z. B. personalisierte Mailings"],
 ], [], { d: 2 })
 .mc("Sie besprechen mit einem Drucker die Andrucke für Fotos in einer Broschüre. Welchen Farbraum finden Sie beim Offsetdruck?", "CMYK", ["PAL", "RGB", "NTSC", "RAL"], { d: 1 })
 .mc("Zweitschatz beauftragt die FAMK mit einem hochwertigen 45-Sekunden-Werbevideo. Welche Aussage zur Organisation der Videoproduktion ist zutreffend?", "Zur Post-Production gehören Videoschnitt, Farbkorrektur und Tonbearbeitung.", ["Die Pre-Production umfasst unter anderem Casting und die Durchführung der Dreharbeiten.", "Die Post-Production beginnt meist noch vor dem Dreh, parallel zur Pre-Production.", "Die Kosten eines Werbevideos lassen sich standardisiert berechnen, individuelle Wünsche spielen keine Rolle.", "Eine Videoproduktion besteht meist nur aus dem Dreh; Pre- und Post-Production sind optional."])
 .order("Beschreiben Sie, in welchen Schritten Sie vorgehen, um ein geeignetes Model für den Dreh zu beauftragen.", ["Modelbriefing mit Anforderungen erstellen und an Modelagenturen senden", "Selektion der angebotenen Model-Alternativen", "Überprüfung der Verfügbarkeit der ausgewählten Models", "Präsentation der Modelauswahl vor dem Kunden und Kundenfreigabe", "Kundenfreigabe des Kostenvoranschlags und Auftragsvergabe an die Modelagentur"], { d: 2 })
 .mc("Die FAMK plant Anzeigen in ausgewählten Tageszeitungen. Welche Formel wenden Sie zur Ermittlung des Anzeigenpreises (Agentur-Netto) an?", "Millimeter-Anzeigenhöhe × Spaltenzahl × Millimeterpreis − AE-Provision", ["Seitenpreis : Spaltenzahl × Millimeter-Kombi-Preis + AE-Provision", "Anzeigenhöhe × Anzeigenbreite × Millimeterpreis", "Millimeter-Spaltenbreite × Anzeigenhöhe × Millimeterpreis − AE-Provision", "Auflagenhöhe × Spaltenzahl × Millimeterpreis + AE-Provision"], { d: 3, e: "Anzeigenhöhe in mm × Spalten × mm-Preis ergibt den Bruttopreis; die AE-Provision wird abgezogen (Agentur-Netto)." })
 .mc("Sie haben Online-Displays erstellt und senden sie an den Vermarkter. Welche Information muss enthalten sein bzw. mitgeteilt werden, damit ein Klick auf das Banner auf die gewünschte Landingpage führt?", "Die Ziel-URL des Click-Tags", ["Die IP der Website des Kunden", "Das gültige SSL-Zertifikat der Website", "Die IP des DNS-Eintrags der Website", "Die FTPS-Zugangsdaten der Website"])
 .mc("Welche zwei Aussagen lassen sich aus den YouTube-Mediadaten ableiten (TrueView In-Stream: 0,05 € je View, zählt ab 30 Sek. oder Klick; Bumper Ads: 6 € CPM, 6 Sek., nicht überspringbar; Discovery Ads: 0,30 € CPC, müssen aktiv angeklickt werden)?", ["TrueView In-Stream Ads zählen nur als View, wenn der Nutzer mindestens 30 Sekunden zusieht oder klickt.", "Bei Discovery Ads zahlt man nur, wenn ein Nutzer aktiv auf die Anzeige klickt."], ["Bumper Ads werden nach 6 Sekunden automatisch übersprungen.", "Discovery Ads laufen automatisch vor Videos.", "TrueView In-Stream Ads kosten 0,05 € pro Klick.", "TrueView In-Stream Ads erscheinen nur in den Suchergebnissen."], { d: 3 })
 .mc("Für das Werbevideo sollen Szenen in einer belebten Innenstadt gedreht werden. Welche zwei Aussagen sind rechtlich zutreffend?", ["Auch bei öffentlichen Drehs müssen klar erkennbare Personen im Bild vorab um Zustimmung gebeten werden.", "Für umfangreiche Dreharbeiten im öffentlichen Raum einer belebten Innenstadt muss vorher eine behördliche Drehgenehmigung eingeholt werden."], ["Dreharbeiten im öffentlichen Raum sind immer genehmigungsfrei.", "Drohnenaufnahmen sind in Innenstädten ohne Genehmigung erlaubt, solange die Drohne unter 100 m bleibt.", "Öffentliche Gebäude als Kulisse müssen immer gesondert lizenziert werden.", "Personen im öffentlichen Raum dürfen ohne Einschränkung gezeigt werden, weil der Aufenthalt als Zustimmung gilt."], { d: 3 })
 .mc("Ein Berliner Secondhand-Laden verwendet ein dem beim DPMA geschützten Logo von Zweitschatz sehr ähnliches Logo. Gegen welche zwei Rechtsbereiche könnte das verstoßen und zu einer Abmahnung führen?", ["Markenrecht (MarkenG)", "Designschutz (DesignG)"], ["Gebrauchsmusterschutz (GebrMG)", "Patentrecht (PatG)", "Datenschutz-Grundverordnung (DSGVO)", "Urheberrecht für technische Erfindungen"], { d: 3 })
 .mc("Die Anzahl von Fake-Profilen auf der Zweitschatz-App steigt. Wie verhalten Sie sich richtig, um sie einzudämmen?", "Eine Zwei-Faktor-Authentifizierung mit einem Bestätigungscode über einen zweiten Kanal (E-Mail oder Handynummer) einführen.", ["Registrierung nur auf Empfehlung eines bestehenden Accounts erlauben.", "Per Post eine eidesstattliche Erklärung zur Freischaltung verlangen.", "Mitarbeiter eines Callcenters stichprobenartig anrufen und nach Bankverbindungen fragen lassen.", "Verlangen, dass Nutzer denselben Account-Namen wie bei TikTok verwenden."])
 .mc("Bei einem Hackerangriff auf Zweitschatz wurden Kundendaten (Name, Adresse, Geburtsdatum, Bankverbindung) teilweise kopiert. Wie verhalten Sie sich nach der DSGVO richtig?", "Unverzüglich die Datenschutz-Aufsichtsbehörde und die Betroffenen informieren, die Art der Datenpanne darlegen und Empfehlungen zur Minderung nachteiliger Folgen geben.", ["Alle Betroffenen in einem Newsletter kurz und ohne Details informieren, ansonsten besteht kein Handlungsbedarf.", "Nur interne Maßnahmen ergreifen; es besteht keine Informationspflicht.", "Nur betroffene Kunden informieren und raten, die Bankverbindung zu ändern.", "Alle gestohlenen Daten veröffentlichen, damit die Aufsicht die Bankdaten sperren kann."], { d: 3 });

/* ---- Templates (Mako Teil 3) ---- */
m.tcalc(
  "Für Zweitschatz soll eine nicht überspringbare Bumper Ad (6 Sek.) auf YouTube geschaltet werden. Ziel: {i|int} Ad-Impressions. Abrechnung nach CPM (Kosten je 1.000 Impressions): {cpm|eur}. Ermitteln Sie das voraussichtliche Kunden-Netto.",
  "i/1000*cpm",
  { i: V.int(300000, 1200000, 50000), cpm: V.pick([4, 5, 6, 7, 8]) },
  { unit: "€", steps: ["Kosten = Impressions : 1.000 · CPM", "= {i|int} : 1.000 · {cpm|eur} = {result|eur}"] },
)
 .tcalc(
  "Eine Discovery-Ad-Kampagne wird nach CPC abgerechnet ({cpc|eur} je Klick). Für das Budget von {b|eur} sollen so viele Klicks wie möglich gekauft werden. Wie viele Klicks sind es?",
  "b/cpc",
  { cpc: V.pick([0.2, 0.25, 0.3, 0.4, 0.5]), x: V.int(2000, 10000, 500), b: V.expr("x*cpc", 2) },
  { unit: "Klicks", dec: 0, steps: ["Klicks = Budget : CPC = {b|eur} : {cpc|eur} = {result}"] },
)
 .tcalc(
  "Eine TrueView-In-Stream-Kampagne kostet {cpv|eur} je View. Es sollen {v|int} Views erzielt werden. Wie hoch ist das Kunden-Netto?",
  "v*cpv",
  { cpv: V.pick([0.03, 0.04, 0.05, 0.06]), v: V.int(100000, 600000, 50000) },
  { unit: "€", steps: ["{v|int} · {cpv|eur} = {result|eur}"] },
)
 .tcalc(
  "Anzeige in einer Tageszeitung: Höhe {h} mm, {sp} Spalten, Millimeterpreis {mm|eur} (Grundpreis je mm-Spalte), AE-Provision {ae} % der Brutto-Schaltkosten. Berechnen Sie das Agentur-Netto.",
  "h*sp*mm*(1-ae/100)",
  { h: V.int(50, 200, 10), sp: V.int(2, 5, 1), mm: V.dec(3, 9, 2), ae: V.pick([10, 15]) },
  { unit: "€", steps: ["Brutto = {h} mm · {sp} Spalten · {mm|eur}", "− {ae} % AE-Provision = {result|eur}"] },
)
 .tmc(
  "Für den Offsetdruck von {a|int} Flyern kalkuliert die Druckerei Rüstkosten und Druckkosten. Welches Verfahren ist bei {ctx.auflage} und {ctx.wunsch} am besten geeignet?",
  "{ctx.richtig}",
  ["{ctx.w1}", "{ctx.w2}", "{ctx.w3}"],
  { a: V.int(1000, 5000, 500), ctx: V.pick([
    { auflage: "einer Auflage von 30 Stück", wunsch: "individuellen Namen auf jedem Exemplar", richtig: "Digitaldruck", w1: "Tiefdruck", w2: "Offsetdruck", w3: "Siebdruck" },
    { auflage: "einer Auflage von 500.000 Katalogen", wunsch: "gleichbleibender Bildqualität zu minimalen Stückkosten", richtig: "Tiefdruck", w1: "Digitaldruck", w2: "Tampondruck", w3: "Siebdruck" },
    { auflage: "bedruckten Trinkflaschen", wunsch: "hoher Farbdeckung auf rundem Material in kleiner Auflage", richtig: "Siebdruck", w1: "Offsetdruck", w2: "Tiefdruck", w3: "Digitaldruck auf Rollenmaterial" },
    { auflage: "20.000 Flyern", wunsch: "guter Qualität und mittlerem Preis je Stück", richtig: "Offsetdruck", w1: "Digitaldruck", w2: "Siebdruck", w3: "Tampondruck" },
  ]) },
  { d: 2 },
);

/* ============================ FiCon Teil 3 ============================ */
const f = topic("ficon-pr-aufgaben", { part: 3, src: SRC, pts: 4 });

f.tcalc(
  "Aus der Ergebnistabelle der FAMK: Aufwendungen laut GuV {a|eur}, Erträge laut GuV {e|eur}. Der neutrale Aufwand beträgt {na|eur}, der neutrale Ertrag {ne|eur}. Ermitteln Sie das neutrale Ergebnis (neutraler Ertrag − neutraler Aufwand; negativ = Verlust).",
  "ne-na",
  { a: V.int(1000000, 1500000, 20000), e: V.int(1100000, 1700000, 20000), na: V.int(20000, 90000, 5000), ne: V.int(10000, 120000, 5000) },
  { unit: "€", steps: ["Neutrales Ergebnis = {ne|eur} − {na|eur} = {result|eur}"] },
)
 .tcalc(
  "Aus der Ergebnistabelle der FAMK: Aufwendungen laut GuV {a|eur}, Erträge laut GuV {e|eur}, neutraler Aufwand {na|eur}, neutraler Ertrag {ne|eur}. Ermitteln Sie das Betriebsergebnis (Leistungen − Kosten).",
  "(e-ne)-(a-na)",
  { a: V.int(1000000, 1500000, 20000), e: V.int(1100000, 1700000, 20000), na: V.int(20000, 90000, 5000), ne: V.int(10000, 120000, 5000) },
  { unit: "€", steps: ["Kosten = Aufwendungen − neutraler Aufwand = {a|eur} − {na|eur}", "Leistungen = Erträge − neutraler Ertrag = {e|eur} − {ne|eur}", "Betriebsergebnis = Leistungen − Kosten = {result|eur}"] },
)
 .tcalc(
  "Die FAMK bietet einem Kunden {x} gebrandete Keramiktassen zu {p|eur} netto je Stück an. Anteilige monatliche Fixkosten {f|eur}, variable Stückkosten {kv|eur}. Berechnen Sie den gesamten Deckungsbeitrag dieses Auftrags.",
  "x*(p-kv)",
  { x: V.int(150, 600, 50), p: V.dec(5, 8, 2), kv: V.dec(1.8, 3.2, 2), f: V.int(800, 2200, 50) },
  { unit: "€", steps: ["db = {p|eur} − {kv|eur}", "Gesamt-DB = {x} · db = {result|eur}"] },
)
 .tcalc(
  "Die FAMK bietet gebrandete Keramiktassen zu {p|eur} netto je Stück an. Anteilige monatliche Fixkosten {f|eur}, variable Stückkosten {kv|eur}. Bei wie vielen Tassen ist die Gewinnschwelle erreicht (auf ganze Stück aufrunden)?",
  "ceil(f/(p-kv))",
  { p: V.pick([5.5, 6, 6.5, 7]), kv: V.pick([2, 2.5, 3]), f: V.int(900, 2000, 100) },
  { unit: "Stück", dec: 0, steps: ["db = {p|eur} − {kv|eur}", "Break-even = {f|eur} : db, aufgerundet = {result}"] },
)
 .tcalc(
  "Im BAB der FAMK sind Mietkosten von {m|eur} für {gesamt} m² Gesamtfläche nach Quadratmetern zu verteilen. Die Kostenstelle Strategie nutzt {qm} m². Berechnen Sie die Mietkosten der Kostenstelle Strategie.",
  "m/gesamt*qm",
  { gesamt: V.pick([400, 500, 600]), qm: V.pick([60, 80, 100, 120]), m: V.pick([8000, 10000, 12000]) },
  { unit: "€", steps: ["Miete je m² = {m|eur} : {gesamt}", "Anteil = {qm} m² · Miete je m² = {result|eur}"] },
)
 .tcalc(
  "Kostenstelle Kundenberatung: Einzelkosten (direkte Personal-, Einkaufs-, Reise- und Bewirtungskosten) {ek|eur}, Summe der Gemeinkosten {gk|eur}. Berechnen Sie den Gemeinkostenzuschlagssatz in Prozent (eine Nachkommastelle).",
  "gk/ek*100",
  { ek: V.int(40000, 90000, 5000), gk: V.int(25000, 70000, 5000) },
  { unit: "%", dec: 1, steps: ["{gk|eur} : {ek|eur} · 100 = {result} %"] },
)
 .mc("Die Praktikantin fragt nach der Gehaltsabrechnung bei den festen Mitarbeitern der FAMK. Welche zwei Aussagen sind richtig?", ["Die Sozialversicherungsbeiträge werden nur bis zur Beitragsbemessungsgrenze berechnet – darüberliegendes Einkommen bleibt beitragsfrei.", "In der gesetzlichen Sozialversicherung werden die Beiträge in der Regel jeweils hälftig von Arbeitgeber und Arbeitnehmer getragen."], ["Der Bruttolohn entspricht dem Betrag, den Arbeitnehmer tatsächlich auf ihr Konto überwiesen bekommen.", "Alle Arbeitnehmer zahlen unabhängig vom Einkommen denselben Lohnsteuersatz.", "Kirchensteuer muss in Deutschland von allen Arbeitnehmern gezahlt werden.", "Die Steuerklasse beeinflusst nur die Höhe der Kirchensteuer."], { d: 3 })
 .order("Bringen Sie die Schritte der Buchhaltung zum Jahresabschluss in die richtige Reihenfolge.", ["Erstellen der Eröffnungsbilanz", "Durchführen einer Inventur", "Erstellen eines Inventars", "Ermitteln des Erfolgs in der Gewinn- und Verlustrechnung", "Erstellen der Schlussbilanz"], { d: 2 })
 .tcalc(
  "Ermitteln Sie die Umsatzsteuerzahllast der FAMK. Eigene Ausgangsrechnung: Umsatzsteuer {u|eur}; der Kunde zahlt mit {s} % Skonto auf den Rechnungsbetrag (Umsatzsteuer entsprechend gekürzt). Eingangsrechnungen mit Vorsteuer {v1|eur} und {v2|eur} werden ohne Skonto bezahlt.",
  "u*(1-s/100)-v1-v2",
  { u: V.int(1200, 2400, 100), s: V.pick([2, 3]), v1: V.int(200, 450, 25), v2: V.int(200, 450, 25) },
  { unit: "€", steps: ["Umsatzsteuer nach Skonto = {u|eur} · (1 − {s} %)", "− Vorsteuer {v1|eur} − {v2|eur} = {result|eur}"] },
)
 .tcalc(
  "Bilanzauszug der Smart-Think GmbH: Bank {ba|eur}, Kasse {ka|eur}, Verbindlichkeiten aLuL {vb|eur} (alle kurzfristig). Berechnen Sie die Liquidität 1. Grades (Barliquidität) in Prozent.",
  "(ba+ka)/vb*100",
  { ba: V.int(8000, 25000, 1000), ka: V.int(2000, 5000, 500), vb: V.int(100000, 200000, 5000) },
  { unit: "%", steps: ["(Bank + Kasse) : kurzfristige Verbindlichkeiten · 100", "= {result} %"] },
)
 .tcalc(
  "Bilanzsumme der Smart-Think GmbH zum Jahresende {bs|eur}, davon Jahresüberschuss {g|eur} und Fremdkapital {fk|eur}. Der Gewinn wird vollständig ausgeschüttet. Berechnen Sie die Fremdkapitalquote zu Beginn des neuen Jahres in Prozent.",
  "fk/(bs-g)*100",
  { fk: V.int(400000, 600000, 25000), g: V.int(8000, 20000, 1000), ek: V.int(80000, 150000, 10000), bs: V.expr("fk+ek+g", 0) },
  { unit: "%", steps: ["Gesamtkapital nach Ausschüttung = {bs|eur} − {g|eur}", "FK-Quote = Fremdkapital : Gesamtkapital · 100 = {result} %"] },
)
 .mc("Welche Aussage trifft auf eine Bilanz zu, in der das Umlaufvermögen die kurzfristigen Verbindlichkeiten nicht einmal zur Hälfte abdeckt?", "Das Unternehmen hat deutliche Liquiditätsdefizite, weil der Wert des Umlaufvermögens die kurzfristigen Verbindlichkeiten nicht abdeckt.", ["Das Unternehmen hat eine ausreichende Liquidität, um kurzfristige Verbindlichkeiten problemlos zu begleichen.", "Durch hohe Werte des Anlagevermögens stehen kurzfristig Liquiditätsreserven zur Verfügung.", "Durch eine hohe Eigenkapitalrentabilität können Liquiditätsdefizite ausgeglichen werden.", "Die Kapitalstruktur zeigt zwingend ein ausgeglichenes Verhältnis zwischen Eigen- und Fremdkapital."], { d: 3 })
 .tcalc(
  "Der Kostenvoranschlag (KVA) für ein Model-Shooting enthielt: Koordination {h1} Std. à {s1|eur}, Kreativdirection {h2} Std. à {s2|eur} (die Stundensätze enthalten bereits den Gewinnaufschlag), Locationmiete {loc|eur} und Modelhonorar {mod|eur} (beide zzgl. {sf} % Service Fee), Fahrtkosten {fa|eur} (ohne Aufschlag). Nach Projektende fielen {h1n} Std. Koordination, {h2n} Std. Kreativdirection, Locationmiete {locn|eur}, Modelhonorar {modn|eur} und Fahrtkosten {fan|eur} an. Wie hoch ist die Differenz zum KVA (Neu − KVA; positiv = teurer)?",
  "(h1n*s1+h2n*s2+(locn+modn)*(1+sf/100)+fan)-(h1*s1+h2*s2+(loc+mod)*(1+sf/100)+fa)",
  { h1: V.int(10, 14, 1), s1: V.pick([90, 95, 100]), h2: V.int(8, 12, 1), s2: V.pick([110, 120, 130]), loc: V.int(700, 1000, 50), mod: V.int(1000, 1400, 50), sf: V.pick([10, 15, 20]), fa: V.int(200, 400, 20), h1n: V.int(11, 17, 1), h2n: V.int(9, 14, 1), locn: V.int(650, 1000, 50), modn: V.int(1100, 1500, 50), fan: V.int(100, 350, 10) },
  { unit: "€", steps: ["KVA = {h1}·{s1|eur} + {h2}·{s2|eur} + ({loc|eur}+{mod|eur})·(1+{sf} %) + {fa|eur}", "Neu = {h1n}·{s1|eur} + {h2n}·{s2|eur} + ({locn|eur}+{modn|eur})·(1+{sf} %) + {fan|eur}", "Differenz = {result|eur}"] },
);

export default [
  { file: "mako/pu-aufgaben.json", bundle: { items: [m.done()] } },
  { file: "ficon/pr-aufgaben.json", bundle: { items: [f.done()] } },
];
