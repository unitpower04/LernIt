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

## Als Nächstes
- Vercel-Deployment mit GitHub-Repo verbinden (Env-Variablen siehe `.env.example`), danach Supabase Auth → URL Configuration: Site URL + Redirect `https://<domain>/passwort-neu`
- Auth-Einstellung „Confirm email“ ausschalten (Trigger bestätigt ohnehin automatisch)
- Auf „Inhalte importieren“ warten (Anleitung in `CLAUDE.md`)

## Offene Fragen / Hinweise
- KI-Bewertung offener Aufgaben (Claude-API) ist nur vorbereitet, nicht aktiv (API-Key fehlt)
- E2E-Tests laufen grün (20/20) sowohl gegen den lokalen Ersatz als auch gegen das echte Supabase (Test-Codes/-Nutzer danach gelöscht)
- Gefundener+behobener Fehler: jsonb behält die Reihenfolge der Vorlagen-Variablen nicht → `rollVars` löst abgeleitete Variablen jetzt abhängigkeitsbasiert auf
