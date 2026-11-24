// Real-Life Patch Notes: The Comedy Changelog
// make.fun bounty u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d
// Writes one patch-note line (at most 160 characters) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "v3.1.0: fixed a bug where the brain auto-played your most embarrassing moment from 2009 at 3 a.m. in full surround sound.";

// Gate guard: the sealed scorer only accepts 1-160 UTF-8 characters,
// not only whitespace, on a single line. Fail loudly instead of
// submitting an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 160) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-160`);
}
if (/\r|\n/.test(ENTRY) || ENTRY.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
