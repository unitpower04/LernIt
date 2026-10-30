# LernIt – Projektregeln

Prüfungs-Lern-App für Kaufleute für Marketingkommunikation (IHK-Abschlussprüfung). Next.js 16 (App Router) + TypeScript + Tailwind v4, Supabase (Auth, Postgres, RLS), PWA. Sprache der UI und Doku: Deutsch.

> Next.js 16: `middleware` heißt `proxy` (`src/proxy.ts`). Vor API-Änderungen in `node_modules/next/dist/docs/` nachlesen.

## Befehle
| Befehl | Zweck |
|---|---|
| `npm run dev` | Dev-Server |
| `npm run build` / `npm run lint` / `npm run typecheck` | Qualität |
| `npm run content:build` | Inhalts-Quellen `content/_src/*.mjs` (DSL, `dsl.mjs`) → `content/real/*.json` |
| `npm run content:validate` | Inhalte in `content/` prüfen (Schema + Selbsttest: Musterlösung muss als richtig gewertet werden, Vorlagen werden 40× instanziiert) |
| `npm run content:import` | Inhalte nach Supabase schreiben (braucht `SUPABASE_SERVICE_ROLE_KEY` in `.env.local`) |
| `npm run content:emit` | Wie import, gibt aber `select import_bundle(...)`-SQL aus (SQL-Editor / MCP) |
| `npm run content:reset-demo` | Alle Demo-Daten entfernen |
| `npm run test:e2e` | Playwright gegen lokalen Supabase-Ersatz (`e2e/mock-supabase.ts`). Gegen echtes Supabase: `E2E_REAL_URL`, `E2E_REAL_KEY`, `E2E_CODE`, `E2E_ADMIN_CODE` setzen (temporäre Einladungscodes anlegen, danach Testnutzer `t%@example.com` löschen); in der Sandbox zusätzlich `NODE_USE_ENV_PROXY=1 NODE_EXTRA_CA_CERTS=/root/.ccr/ca-bundle.crt` |

## Architektur
- `src/app/(auth)` Login/Registrierung (nur mit Einladungscode)/Passwort. `src/app/(app)` geschützter Bereich (Dashboard, `lernen`, `ueben/[mode]`, `pruefung`, `freunde`, `duell`, `glossar`, `admin`, `einstellungen`).
- `src/proxy.ts` leitet nicht Angemeldete auf `/login`. Daten werden clientseitig über `supabase()` mit RLS geladen.
- `src/lib/content/schema.ts` – **Inhaltsformat** (Zod), einzige Quelle für Import, Admin-UI und App.
- `src/lib/engine/` – `instantiate` (Vorlage + Seed → konkrete Aufgabe), `grade` (Bewertung je Typ), `solve` (Musterantwort für Tests).
- `src/lib/exam/` – Blueprint (Zeiten, Gewichte, IHK-Note), `compose` (Prüfungssatz), `attempts` (Bewertung/Speichern).
- `src/lib/progress.ts` – Beherrschungsgrad + Empfehlungen, `src/lib/srs.ts` – Spaced Repetition.
- Übungs-Sessions: `components/PracticeSession`, `FlashcardSession`, `SprintSession`; Aufgaben-UI: `components/questions/QuestionView`.

## Datenbank (`supabase/migrations`)
- Inhalte: `subjects → learning_fields → topics → flashcards/questions/question_templates/summaries/glossary/exam_cases`. Jede Zeile hat stabilen `key` (Upsert), `active`, `is_demo`.
- Nutzerdaten: `profiles`, `answers`, `card_states`, `exam_attempts`, `duels`, `duel_results`. RLS überall; Inhalte schreibt nur Admin (`profiles.is_admin`, nicht vom Client änderbar).
- Registrierung: DB-Trigger `before_user_insert` prüft/verbraucht Einladungscode und bestätigt die E-Mail automatisch; `after_user_insert` legt das Profil an (Admin-Code → Admin).
- RPCs: `import_bundle(jsonb)`, `reset_demo()`, `check_invite_code`, `create_invite`, `leaderboard`, `my_streak`, Freunde: `my_friend_code`, `send_friend_request`, `respond_friend_request`, `remove_friendship`, `friends_list`, `leaderboard_friends` (Tabelle `friendships`, `profiles.friend_code`).
- Migrationen liegen im Repo und wurden mit dem Supabase-MCP eingespielt. Neue Migration: Datei anlegen + anwenden.

## Aufgabentypen
`mc, tf, match, order, cloze, calc, booking, case, error, ad` (siehe Schema). **Vorlagen** (`question_templates`) haben `vars` (`int`, `dec`, `pick`, `expr`) und Platzhalter `{name}` / `{name|eur}` / `{obj.feld}`; `calc.answer` und `booking.lines[].amount` sind Formeln; im Lösungsweg steht `{result}`. Formate: `eur, eur0, pct, int, d1, d2, raw`.

## So werden neue Inhalte aus Google Drive eingepflegt
1. Dateien aus dem Drive holen (Connector oder Download-Ordner); Ordner-/Dateinamen geben Fach und Thema vor.
2. Text extrahieren (PDF/DOCX/PPTX, Bilder per OCR/ansehen; `.goodnotes` = ZIP → enthaltene PDFs/Bilder nutzen, sonst notieren).
3. Die mitgelieferte IHK-Prüfung analysieren (Teil per Inhalt zuordnen, Aufbau, Aufgabentypen, Belege, Punkte) → Stilvorlage.
4. Struktur in `content/<fach>/struktur.json` (Fächer → Lernfelder → Themen, `exam_parts`), Inhalte je Thema in `content/<fach>/<thema>.json` (`items[]`: summary, flashcards 15–40, glossary, questions, templates, cases). **Immer eigene `key`s vergeben** (z. B. `mako-lf7-plakat-q12`), `"demo": false`.
5. **Portfolio kräftig erweitern (Nutzerwunsch):** Nicht nur die Aufgaben aus dem Material abschreiben, sondern daraus *abgewandelte* Aufgaben erzeugen: Vorlagen mit Zufallszahlen und wechselnden Unternehmen/Branchen/Produkten/Medien, umformulierte Fragen, neue plausible Falschantworten (Antwortreihenfolge mischt die App selbst), zusätzliche Aufgabentypen pro Thema (MC, R/F, Zuordnung, Reihenfolge, Lücke, Rechnen, Fehler finden, Fälle). Ziel: pro Thema deutlich mehr Varianten als Originalfragen.
5b. Prüfungspool: viele Vorlagen (≥ 10 deutlich unterschiedliche Sätze je schriftlichem Teil), Praxisfälle für Teil 4 (`cases`).
6. Frei zugängliche, legale Ergänzungen in `content/quellen.md` dokumentieren; bei Widerspruch gilt das Unterrichtsmaterial.
7. Qualitätsprüfung (zweiter Durchgang/Subagent): fachlich korrekt, eindeutige Lösung, keine Dubletten.
8. `npm run content:validate` → `npm run content:import` (oder `content:emit` + SQL) → `npm run content:reset-demo` → Übersicht (Anzahl je Fach/Teil) an den Nutzer.

## Konventionen
- Keine Secrets committen (`.env*` ist ignoriert, `.env.example` dokumentiert). Service-Role-Key nie im Frontend.
- Nach Phasen: `PROGRESS.md` aktualisieren, committen, pushen.
- Mobile first, Dark Mode über CSS-Variablen (`globals.css`), Komponenten-Klassen `.card .btn .input .opt`.

## Stand Inhalte (30.10.2026)
- Echte Inhalte aus Google Drive (Fächer WSP, Politik, FiCon, MaKo, Deutsch) liegen als DSL-Quellen in `content/_src/` und generiert in `content/real/`; sie sind in Supabase importiert, Demo-Daten sind entfernt (Demo-Fixture nur noch für E2E: `e2e/fixtures/demo`).
- Prüfungsteile laut echter IHK-Prüfung: Teil 1 Konzepte, Teil 2 WiSo, Teil 3 Umsetzung & Steuerung, Teil 4 Fachgespräch.
- Änderungen an Inhalten: `_src` bearbeiten → `npm run content:build` → `content:validate` → Import (z. B. temporärer Admin-Account + `import_bundle`).
- `.goodnotes`-Dateien aus dem Drive sind nicht lesbar (ZIP-Format) und wurden nicht ausgewertet; PDF-Exporte nachreichen.
