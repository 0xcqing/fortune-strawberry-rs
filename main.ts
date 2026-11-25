import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE = "You will be called brilliant, and then asked to count the r's in strawberry.";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const ENTRY_FILE = "entry.txt";
const MIN = 1;
const MAX = 200;

function fortuneFacts(text: string): {
  fortune: string;
  characters: number;
  bytes: number;
  lines: number;
} {
  return {
    fortune: text,
    characters: Array.from(text).length,
    bytes: Buffer.byteLength(text, "utf8"),
    lines: text.split(/\r\n|\r|\n/).length,
  };
}

function fail(message: string): never {
  process.stderr.write(message + "\n");
  process.exit(1);
}

function validate(text: string): ReturnType<typeof fortuneFacts> {
  const facts = fortuneFacts(text);

  if (facts.fortune.trim().length === 0) {
    fail("fortune is empty after trimming whitespace");
  }
  if (facts.fortune !== facts.fortune.trim()) {
    fail("fortune has leading or trailing whitespace");
  }
  if (facts.lines !== 1) {
    fail("fortune must be a single line with no newline inside");
  }
  if (facts.characters < MIN || facts.characters > MAX) {
    fail(`fortune has ${facts.characters} characters, expected ${MIN}..${MAX}`);
  }
  if (facts.bytes < MIN || facts.bytes > MAX) {
    fail(`fortune has ${facts.bytes} bytes, expected ${MIN}..${MAX}`);
  }

  return facts;
}

const facts = validate(FORTUNE);

mkdirSync(OUTPUT_DIR, { recursive: true, mode: 0o755 });
const entryPath = join(OUTPUT_DIR, ENTRY_FILE);
writeFileSync(entryPath, facts.fortune + "\n", { encoding: "utf8", mode: 0o644 });

const readBack = readFileSync(entryPath);
const expected = Buffer.from(facts.fortune + "\n", "utf8");
if (!readBack.equals(expected)) {
  fail("entry.txt does not match the fortune bytes");
}

process.stdout.write(
  `${facts.fortune}\n${entryPath}\n` +
    `${facts.characters} characters\n${facts.bytes} bytes\n${facts.lines} line\n`,
);
