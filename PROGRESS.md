# Fortschritt

## Erledigt (Version 1)
- Next.js/Tailwind/PWA-Grundgerüst, Dark Mode, Manifest, Service Worker, Icons
- Supabase-Projekt `lernit` (eu-central-1): Schema, RLS, Einladungscodes, Import-/Reset-Funktionen, Admin-RPCs
- Auth: Login, Registrierung nur mit Code, Passwort vergessen/neu, Profil/Einstellungen
- Inhaltsformat (Zod), Import-Skript, Demo-Datensatz (2 Fächer, 4 Themen, 26 Karten, 21 Aufgaben, 9 Vorlagen, 2 Praxisfälle)
- Lernmodi: Karteikarten (SM-2), MC, R/F, Zuordnung, Reihenfolge, Lückentext, Rechnen (Zufallszahlen), Buchungssätze, Fallstudien, Begriffs-Sprint, Fehler finden, Anzeigenanalyse, Fehlerkiste, Tagesquiz, Glossar, Lernzettel
- Dashboard: Countdown, Streak, Beherrschung, Empfehlungen (rot/gelb/grün), Aktivität
- Prüfungsmodus: Teil 1–3 + Mini, Timer, Pause/Fortsetzen, Auswertung (IHK-Note), Selbstbewertung offener Aufgaben, Verlauf + Bestehens-Rechner, Teil 4 light
- Freunde: Rangliste (freiwillig), Duell, Streak; Admin-Seite (Inhalte, Import, Einladungen)
- E2E-Tests (Playwright, Mobil + Desktop) gegen lokalen Supabase-Ersatz

## Wunsch des Nutzers für den Import
- Aufgaben nicht nur übernehmen, sondern stark erweitern: Vorlagen mit Zufallszahlen, wechselnden Kontexten, anderen Antwortoptionen/Reihenfolgen, zusätzliche Aufgaben je Thema (siehe CLAUDE.md, Schritt 5)

## Als Nächstes
- Vercel-Deployment mit GitHub-Repo verbinden (Env-Variablen siehe `.env.example`), danach Supabase Auth → URL Configuration: Site URL + Redirect `https://<domain>/passwort-neu`
- Auth-Einstellung „Confirm email“ ausschalten (Trigger bestätigt ohnehin automatisch)
- Auf „Inhalte importieren“ warten (Anleitung in `CLAUDE.md`)

## Offene Fragen / Hinweise
- KI-Bewertung offener Aufgaben (Claude-API) ist nur vorbereitet, nicht aktiv (API-Key fehlt)
- E2E-Tests laufen grün (20/20) sowohl gegen den lokalen Ersatz als auch gegen das echte Supabase (Test-Codes/-Nutzer danach gelöscht)
- Gefundener+behobener Fehler: jsonb behält die Reihenfolge der Vorlagen-Variablen nicht → `rollVars` löst abgeleitete Variablen jetzt abhängigkeitsbasiert auf

## 30.10.2026 – Echte Inhalte
- 5 Fächer, ~1.040 Karten, ~660 Aufgaben, 71 Vorlagen, 6 Fachgesprächsfälle, 11 Teil-1-Fallsituationen importiert; Demo entfernt; fachliche Gegenprüfung durchgeführt und Korrekturen eingearbeitet.
- Migration `reset_demo_fix` (WHERE-Klausel).

## 30.10.2026 – Prüfungsnahe Aufgaben & MaKo-Ausbau
- Aufgaben der IHK Sommer 2026 (WiSo, Umsetzung, Teil 1) und älterer Prüfungen abgewandelt nachgebaut (Kunde „Zweitschatz“, andere Zahlen/Szenarien).
- 18 Teil-1-Fallsituationen, 14 Teil-4-Fälle, MaKo-Transferaufgaben, Zwischenprüfungs-Aufgaben.
- Stand Supabase: MaKo 394 Aufgaben/410 Karten, WSP 368/516, FiCon 91/164, Politik 42/61, Deutsch 30/45.

- Teil 1: 75 Fallsituationen (15 Prüfungen à 5 ohne Wiederholung); Prüfungsstart bevorzugt noch nicht geprüfte feste Aufgaben.
