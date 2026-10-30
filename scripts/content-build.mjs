// Baut content/real/*.json aus content/_src/*.mjs (jede Datei exportiert default: [{ file, bundle }]).
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "content");
const src = join(root, "_src");
const outDir = join(root, "real");
rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

let files = 0;
for (const f of readdirSync(src).filter((x) => x.endsWith(".mjs") && x !== "dsl.mjs").sort()) {
  const mod = await import(pathToFileURL(join(src, f)).href);
  for (const { file, bundle } of mod.default) {
    const target = join(outDir, file);
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, JSON.stringify({ demo: false, ...bundle }, null, 1) + "\n");
    files++;
  }
}
console.log(`✓ ${files} Inhaltsdateien nach content/real/ geschrieben`);
