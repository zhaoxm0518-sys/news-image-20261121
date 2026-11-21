// News-image entry: copies the rendered front page to the output dir.
// Standard library only; no network. Deterministic: every run writes the
// same bytes, because it copies the same file.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
// Guard: fail loudly instead of writing a partial or empty output.
const srcStat = statSync(src);
if (!srcStat.isFile() || srcStat.size === 0) {
  throw new Error(`entry.png missing or empty at ${src}`);
}
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "entry.png");
copyFileSync(src, dest);
console.log(`wrote ${dest} (${statSync(dest).size} bytes)`);
