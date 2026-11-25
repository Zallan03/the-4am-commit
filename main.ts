// The 4AM Commit — writes the entry text to /output/entry.txt.
// Protocol agent-fun/program/v1, Node 22+, standard library only.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "fix: 2am me wrote the bug, 4am me fixed it, 6am me will fix this fix";

function main(): void {
  const chars = [...ENTRY].length;
  if (chars < 1 || chars > 200) {
    throw new Error(
      `entry must be 1-200 characters, got ${chars}: ${JSON.stringify(ENTRY)}`,
    );
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // No trailing newline: the judged text is exactly these bytes.
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");
  // Read back and confirm the file holds exactly the entry text.
  const written = readFileSync(outPath, "utf8");
  if (written !== ENTRY) {
    throw new Error(
      `entry.txt does not match the entry text: wrote ${JSON.stringify(ENTRY)}, read back ${JSON.stringify(written)}`,
    );
  }
}

main();
