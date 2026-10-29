# LernIt

Prüfungs-Lern-App (Kaufleute für Marketingkommunikation). Siehe `CLAUDE.md` für Architektur und Befehle, `PROGRESS.md` für den Stand.

## Lokal starten
```bash
npm install
cp .env.example .env.local   # Supabase-URL und Publishable Key eintragen
npm run dev
```

## Deployment (Vercel)
Repo in Vercel importieren, Environment Variables `NEXT_PUBLIC_SUPABASE_URL` und `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` setzen. Jeder Push deployt automatisch.
