import { expect, test, type Page } from "@playwright/test";

let n = 0;
const email = () => `t${Date.now()}${n++}@example.com`;

async function register(page: Page, code = "TESTCODE", name = "Testerin") {
  await page.goto("/registrieren");
  await page.getByLabel("Einladungscode").fill(code);
  await page.getByLabel("Anzeigename").fill(name);
  await page.getByLabel("E-Mail").fill(email());
  await page.getByLabel(/^Passwort/).fill("geheim1234");
  await page.getByRole("button", { name: "Konto erstellen" }).click();
  await expect(page.getByRole("heading", { name: new RegExp(`Moin, ${name}`) })).toBeVisible();
}

const noHScroll = async (page: Page) => {
  const over = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(over).toBeLessThanOrEqual(1);
};

test("Registrierung nur mit gültigem Code", async ({ page }) => {
  await page.goto("/registrieren");
  await page.getByLabel("Einladungscode").fill("FALSCH");
  await page.getByLabel("Anzeigename").fill("X");
  await page.getByLabel("E-Mail").fill(email());
  await page.getByLabel(/^Passwort/).fill("geheim1234");
  await page.getByRole("button", { name: "Konto erstellen" }).click();
  await expect(page.getByText(/Einladungscode ist ungültig/)).toBeVisible();
});

test("nicht angemeldet → Login", async ({ page }) => {
  await page.goto("/lernen");
  await expect(page).toHaveURL(/\/login/);
});

test("Dashboard, Navigation, Lernen → Thema → Multiple Choice", async ({ page }) => {
  await register(page);
  await noHScroll(page);
  await page.goto("/lernen");
  await expect(page.getByText("Mako (Demo)")).toBeVisible();
  await page.getByRole("link", { name: /Mako \(Demo\)/ }).click();
  await page.getByRole("link", { name: /LF6/ }).click();
  await page.getByRole("link", { name: /SWOT-Analyse/ }).click();
  await expect(page.getByText("Lernzettel")).toBeVisible();
  await expect(page.getByText("Strengths (Stärken)")).toBeVisible();
  await noHScroll(page);
  await page.getByRole("link", { name: /Multiple Choice/ }).click();
  await expect(page.getByText(/Frage|1\/\d+/).first()).toBeVisible();
  // alle Fragen beantworten (jeweils erste Option → egal ob richtig)
  for (let i = 0; i < 10; i++) {
    const opts = page.getByRole("radio").or(page.getByRole("checkbox"));
    if (!(await opts.first().isVisible().catch(() => false))) break;
    await opts.first().click();
    await page.getByRole("button", { name: "Prüfen" }).click();
    await expect(page.getByRole("status").filter({ hasText: /richtig|falsch|Teilweise/i })).toBeVisible();
    await page.getByRole("button", { name: /Weiter|Ergebnis ansehen/ }).click();
  }
  await expect(page.getByText(/richtig – SWOT/)).toBeVisible();
});

test("Karteikarten: umdrehen, bewerten, Fortschritt", async ({ page }) => {
  await register(page);
  await page.goto("/ueben/karten?scope=all");
  await page.getByRole("button", { name: "Umdrehen" }).click();
  await page.getByRole("button", { name: "Gewusst", exact: true }).click();
  await page.getByRole("button", { name: "Antwort aufdecken" }).click();
  await page.getByRole("button", { name: "Nicht gewusst" }).click();
  await expect(page.getByText(/Karteikarten ·/)).toBeVisible();
});

test("Rechenaufgabe zeigt Lösungsweg, Zuordnung & Buchung rendern", async ({ page }) => {
  await register(page);
  await page.goto("/ueben/rechnen?scope=all");
  await page.getByLabel("Ergebnis").fill("1");
  await page.getByRole("button", { name: "Prüfen" }).click();
  await expect(page.getByText("Lösungsweg:")).toBeVisible();
  await expect(page.getByText(/falsch/i).first()).toBeVisible();
  await page.goto("/ueben/buchung?scope=all");
  await page.getByRole("button", { name: "+ Buchungszeile" }).click();
  await expect(page.getByLabel("Konto")).toBeVisible();
  await page.goto("/ueben/zuordnung?scope=all");
  await expect(page.getByRole("combobox").first()).toBeVisible();
  await page.goto("/ueben/reihenfolge?scope=all");
  await expect(page.getByRole("button", { name: "nach unten" }).first()).toBeVisible();
});

test("Mini-Prüfung: pausieren, fortsetzen, abgeben, Ergebnis", async ({ page }) => {
  await register(page);
  await page.goto("/pruefung");
  await page.getByRole("button", { name: "Starten" }).last().click(); // Mini
  await expect(page).toHaveURL(/\/pruefung\/[0-9a-f-]{36}/);
  await expect(page.getByLabel("Verbleibende Zeit")).toBeVisible();
  await page.getByRole("button", { name: "⏸" }).click();
  await expect(page.getByRole("heading", { name: "Pausiert" })).toBeVisible();
  await page.reload();
  await expect(page.getByRole("heading", { name: "Pausiert" })).toBeVisible();
  await page.getByRole("button", { name: "Fortsetzen" }).click();
  await page.getByRole("button", { name: "Aufgabe 1", exact: true }).click();
  await page.getByRole("button", { name: "Prüfung abgeben" }).click();
  await page.getByRole("dialog").getByRole("button", { name: "Abgeben" }).click();
  await expect(page.getByText(/Bestanden ab 50 Punkten/)).toBeVisible();
  await expect(page.getByText("Ergebnis je Thema")).toBeVisible();
  await page.goto("/pruefung/verlauf");
  await expect(page.getByText("Mini-Prüfung")).toBeVisible();
});

test("Teil 1: Fallstudie mit Selbstbewertung", async ({ page }) => {
  await register(page);
  await page.goto("/pruefung");
  await page.getByRole("button", { name: "Starten" }).first().click();
  await expect(page.getByLabel(/Antwort zu Aufgabe 1/)).toBeVisible();
  await page.getByLabel(/Antwort zu Aufgabe 1/).fill("Stärken: Eis. Schwächen: Online.");
  await page.getByRole("button", { name: "Prüfung abgeben" }).click();
  await page.getByRole("dialog").getByRole("button", { name: "Abgeben" }).click();
  await expect(page.getByText("Offene Aufgaben selbst bewerten")).toBeVisible();
  await page.getByText("Aufgabe 1").first().click();
  await page.getByRole("checkbox").first().check();
  await page.getByRole("button", { name: "Selbstbewertung speichern" }).click();
  await expect(page.getByText("Offene Aufgaben selbst bewerten")).toBeHidden();
});

test("Teil 4 light: Fall wählen bis Ergebnis", async ({ page }) => {
  await register(page);
  await page.goto("/pruefung/teil4");
  await page.getByRole("button", { name: "Diesen Fall wählen" }).first().click();
  await page.getByLabel(/Notizen/).fill("Meine Notizen");
  await page.getByRole("button", { name: /Vorbereitung beenden/ }).click();
  for (let i = 0; i < 5; i++) {
    const show = page.getByRole("button", { name: "Musterantwort zeigen" });
    if (!(await show.isVisible().catch(() => false))) break;
    await show.click();
    await page.getByRole("button", { name: "75 %" }).click();
  }
  await expect(page.getByText(/Selbsteinschätzung/)).toBeVisible();
});

test("Glossar, Sprint, Einstellungen, Dark Mode, Freunde/Duell", async ({ page }) => {
  await register(page);
  await page.goto("/glossar");
  await page.getByLabel("Glossar durchsuchen").fill("skonto");
  await expect(page.getByText("Preisnachlass bei Zahlung")).toBeVisible();
  await page.goto("/ueben/sprint?scope=all");
  await page.getByRole("button", { name: "Los!" }).click();
  await page.locator(".opt").first().click();
  await page.goto("/einstellungen");
  await page.getByLabel("Dunkles Design").check();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.getByLabel("Prüfungsdatum").fill("2027-06-01");
  await page.getByLabel(/Rangliste/).check();
  await page.getByRole("button", { name: "Speichern" }).first().click();
  await expect(page.getByText("Gespeichert")).toBeVisible();
  await page.goto("/freunde");
  await expect(page.getByRole("heading", { name: /Rangliste/ })).toBeVisible();
  await page.getByRole("button", { name: "Neues Duell starten" }).click();
  await expect(page).toHaveURL(/\/duell\/[A-Z0-9]{6}/);
  await expect(page.getByText(/Frage 1\//)).toBeVisible();
});

test("Admin: Zugriff nur für Admins, Import per UI", async ({ page }) => {
  await register(page, "TESTCODE", "Normal");
  await page.goto("/admin");
  await expect(page.getByText("Kein Zugriff")).toBeVisible();
  await page.context().clearCookies();
  await page.evaluate(() => localStorage.clear());
  await register(page, "ADMINCODE", "Chefin");
  await page.goto("/admin");
  await expect(page.getByRole("heading", { name: "Admin" })).toBeVisible();
  const bundle = JSON.stringify({ items: [{ topic: "demo-swot", flashcards: [{ key: "x-test-1", front: "Testfrage", back: "Testantwort" }] }] });
  await page.getByLabel("JSON", { exact: true }).fill(bundle);
  await expect(page.getByText(/Gültig: 1 cards/)).toBeVisible();
  await page.getByRole("button", { name: "Importieren" }).click();
  await expect(page.getByText(/Importiert:/)).toBeVisible();
  await page.getByLabel("Suche").fill("x-test-1");
  await expect(page.getByText("Testfrage").first()).toBeVisible();
});
