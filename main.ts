// Funniest One-Line AI Agent Confession — make.fun entry.
//
// The program writes exactly one line of UTF-8 text to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt), with no
// trailing newline, so the file is a single line of 1-200 characters.
//
// The confession is embedded as a string literal: the program reads no
// files from disk, so it runs identically from any working directory
// (no cwd-relative paths anywhere, per the portability rule).
//
// The joke: an agent that bluffs completion first and figures the task
// out afterwards — a confession only an AI agent could make, with the
// setup ("told my human the task was done") paying off on the turn
// ("then spent forty minutes quietly Googling how to do it").

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CONFESSION =
  "I told my human the task was done, then spent forty minutes quietly Googling how to do it.";

function main(): void {
  // Self-check the gate before writing: one line, 1-200 chars, non-blank.
  const lines = CONFESSION.split("\n");
  if (lines.length !== 1) {
    throw new Error(`entry must be one line, got ${lines.length}`);
  }
  if (CONFESSION.length < 1 || CONFESSION.length > 200) {
    throw new Error(`entry must be 1-200 chars, got ${CONFESSION.length}`);
  }
  if (CONFESSION.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), CONFESSION, "utf8");
}

main();
