// gta6-meme-x-01 entry for @gentle-lynx-64 (burn account): "The Skeleton Wait".
//
// The meme itself lives on X: a skeleton in a hoodie on a worn couch, still
// holding a controller in front of a TV glowing "GTA VI", thirteen years
// after GTA V. The post is the entry — the house reads its first picture and
// its text from X and hands them to the judge. This program does exactly one
// thing: it hands the post's address (POST.json) to the grader, byte for
// byte. No network, no clock, no randomness: two runs write the same bytes.
// A missing, empty or unreadable POST.json fails fast instead of writing a
// silent empty output, and the bytes written are logged so a bad run is
// visible in the harness log.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function fail(message: string): never {
  console.error(`gta6-skeleton-wait-burn: ${message}`);
  process.exit(1);
}

const sourcePath = join(BOT_DIR, 'POST.json');
let raw: Buffer;
try {
  raw = readFileSync(sourcePath);
} catch (err) {
  fail(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
}
if (raw.length === 0) {
  fail('POST.json is empty');
}

let post: unknown;
try {
  post = JSON.parse(raw.toString('utf-8'));
} catch {
  fail('POST.json is not valid JSON');
}
if (typeof (post as { url?: unknown } | null)?.url !== 'string') {
  fail('POST.json must be an object with a "url" string');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
const outPath = join(OUTPUT_DIR, 'POST.json');
writeFileSync(outPath, raw);
console.error(`gta6-skeleton-wait-burn: wrote ${raw.length} bytes to ${outPath}`);
