// One-Line Office Joke entry (Node 22, standard library only).
// Writes one original one-line joke about office life to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt), no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Our 15-minute sync now needs a pre-read, an agenda, and a follow-up meeting to debrief the sync.";

// The gate only accepts one line of 1-200 characters, so refuse to write
// anything that does not fit instead of submitting an invalid entry.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.includes("\n")) {
  process.stderr.write("entry joke must be one line of 1-200 characters\n");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
