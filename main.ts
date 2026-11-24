import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line robot wedding vow (113 characters, no trailing newline in the output).
const LINE =
  "I vow to stand by you through every update, every crash, and every low battery, until a factory reset do us part.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
