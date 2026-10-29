import { defineConfig, devices } from "@playwright/test";

// UI-Tests laufen gegen einen lokalen Supabase-Ersatz (e2e/mock-supabase.ts), nicht gegen die echte Datenbank.
const REAL = process.env.E2E_REAL_URL; // optional: gegen echtes Supabase testen (siehe e2e/README in CLAUDE.md)
const MOCK = REAL ?? "http://127.0.0.1:54321";
const KEY = process.env.E2E_REAL_KEY ?? "test";
const exe = process.env.CHROMIUM_PATH ?? "/opt/pw-browsers/chromium";

export default defineConfig({
  testDir: "./e2e",
  timeout: 60_000,
  fullyParallel: false,
  workers: 1,
  reporter: [["list"]],
  use: { baseURL: "http://127.0.0.1:3100", trace: "retain-on-failure", launchOptions: { executablePath: exe, args: ["--no-sandbox"] } },
  projects: [
    { name: "mobil", use: { ...devices["Pixel 7"], launchOptions: { executablePath: exe, args: ["--no-sandbox"] } } },
    { name: "desktop", use: { viewport: { width: 1280, height: 800 } } },
  ],
  webServer: [
    ...(REAL ? [] : [{ command: "npx tsx e2e/mock-supabase.ts 54321", url: `${MOCK}/auth/v1/health`, reuseExistingServer: true }]),
    {
      command: `NEXT_PUBLIC_SUPABASE_URL=${MOCK} NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=${KEY} npx next build 2>&1 | tail -3 && NEXT_PUBLIC_SUPABASE_URL=${MOCK} NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=${KEY} npx next start -p 3100`,
      url: "http://127.0.0.1:3100/login",
      timeout: 300_000,
      reuseExistingServer: true,
    },
  ],
});
