import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import slideDeckOutline from "./src/slide-deck-outline.mjs";
import facilitatorScript from "./src/facilitator-script.mjs";
import handoutAiBasics from "./src/handout-ai-basics.mjs";
import handoutSafety from "./src/handout-safety.mjs";
import activities from "./src/activities.mjs";
import signInSheet from "./src/sign-in-sheet.mjs";
import feedbackForm from "./src/feedback-form.mjs";

const ROOT = dirname(fileURLToPath(import.meta.url));
const DIST = join(ROOT, "dist");

const PRINTABLES = [
  ["slide-deck-outline.html", slideDeckOutline],
  ["facilitator-script.html", facilitatorScript],
  ["handout-ai-basics.html", handoutAiBasics],
  ["handout-safety.html", handoutSafety],
  ["activities.html", activities],
  ["sign-in-sheet.html", signInSheet],
  ["feedback-form.html", feedbackForm],
];

export function build(distDir = DIST) {
  rmSync(distDir, { recursive: true, force: true });
  mkdirSync(distDir, { recursive: true });
  const written = [];
  for (const [filename, render] of PRINTABLES) {
    const html = render();
    if (!html.startsWith("<!DOCTYPE html>")) {
      throw new Error(`printable ${filename} is not a complete HTML document`);
    }
    writeFileSync(join(distDir, filename), html, "utf8");
    written.push(filename);
  }
  return written;
}

export const printableNames = () => PRINTABLES.map(([f]) => f);

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const files = build();
  console.log(`Built ${files.length} printables into dist/:`);
  for (const f of files) console.log(`  - dist/${f}`);
}
