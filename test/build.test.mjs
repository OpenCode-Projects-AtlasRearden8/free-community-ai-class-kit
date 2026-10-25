import test from "node:test";
import assert from "node:assert/strict";
import { rmSync, readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { build, printableNames } from "../build.mjs";
import slideDeckOutline from "../src/slide-deck-outline.mjs";
import facilitatorScript from "../src/facilitator-script.mjs";
import handoutAiBasics from "../src/handout-ai-basics.mjs";
import handoutSafety from "../src/handout-safety.mjs";
import activities from "../src/activities.mjs";
import signInSheet from "../src/sign-in-sheet.mjs";
import feedbackForm from "../src/feedback-form.mjs";

const ROOT = dirname(fileURLToPath(import.meta.url));
const DIST = join(ROOT, "..", "dist");

const EXPECTED_NAMES = [
  "slide-deck-outline.html",
  "facilitator-script.html",
  "handout-ai-basics.html",
  "handout-safety.html",
  "activities.html",
  "sign-in-sheet.html",
  "feedback-form.html",
];

test("build produces every printable from a clean dist/", () => {
  rmSync(DIST, { recursive: true, force: true });
  assert.equal(existsSync(DIST), false);
  const written = build(DIST);
  assert.deepEqual([...written].sort(), [...EXPECTED_NAMES].sort());
  for (const name of printableNames()) {
    assert.ok(existsSync(join(DIST, name)), `${name} was built`);
  }
});

test("build is idempotent (running again overwrites cleanly)", () => {
  const first = build(DIST);
  const second = build(DIST);
  assert.deepEqual(first, second);
});

test("printableNames matches the documented set", () => {
  assert.deepEqual([...printableNames()].sort(), [...EXPECTED_NAMES].sort());
});

// ---- shared structural checks, applied to every rendered printable ----

const RENDERED = {
  "slide-deck-outline.html": slideDeckOutline(),
  "facilitator-script.html": facilitatorScript(),
  "handout-ai-basics.html": handoutAiBasics(),
  "handout-safety.html": handoutSafety(),
  "activities.html": activities(),
  "sign-in-sheet.html": signInSheet(),
  "feedback-form.html": feedbackForm(),
};

for (const [name, html] of Object.entries(RENDERED)) {
  test(`${name}: complete standalone HTML document with print CSS`, () => {
    assert.match(html, /^<!DOCTYPE html>\n<html lang="en">/);
    assert.ok(html.includes("<meta charset=\"utf-8\">"), "charset declared");
    assert.ok(html.includes("<title>") && html.includes("</title>"), "title present");
    assert.ok(html.includes("@page { size: letter; margin: 0; }"), "print page rules");
    assert.ok(html.includes("@media print {"), "print stylesheet present");
    assert.ok(html.includes("</div>\n</body>\n</html>\n"), "document closes cleanly");
  });

  test(`${name}: no external assets, fonts, or tracked requests`, () => {
    for (const bad of ["http://", "https://", "//cdn", "<script", "fetch(", "src=", "href=", "import("]) {
      assert.ok(!html.includes(bad), `printable must not reference ${bad}`);
    }
    assert.ok(!html.includes("font-face"), "no @font-face rows pulling web fonts");
  });

  test(`${name}: no broken entities, stray markup, or mojibake`, () => {
    assert.ok(!html.includes("&amp;amp;"), "double-escaped ampersands");
    assert.ok(!html.includes(":**"), "stray markdown bold leftovers");
    assert.ok(!html.includes("&ldquo;:"), "entity typo");
    assert.ok(!html.includes("\u2014 ?\u201d"), "stray space before closing quote");
    // stray CJK or Cyrillic characters would indicate corrupted text
    assert.ok(!/[\u3400-\u9fff\u0400-\u04ff]/.test(html), "no mojibake characters");
    assert.ok(!/[\uFFFD\u2028\u2029]/.test(html), "no replacement or separator characters");
    // every open tag class we rely on must be balanced enough to close
    assert.equal(
      html.split("<div").length - 1,
      html.split("</div>").length - 1,
      "all <div> tags closed"
    );
    assert.ok(html.split("<p").length - 1 === html.split("</p>").length - 1, "all <p> tags closed");
    assert.ok(!/<li/.test(html) || (html.match(/<li[> ]/g) || []).length === (html.match(/<\/li>/g) || []).length, "all <li> closed");
    assert.ok((html.match(/<h[1-3][> ]/g) || []).length === (html.match(/<\/h[1-3]>/g) || []).length, "all headings closed");
  });
}

// ---- per-printable content checks: the sheet actually says what it promises ----

test("slide deck outline: covers the full two-hour plan", () => {
  const html = RENDERED["slide-deck-outline.html"];
  for (const piece of [
    "Two-Hour Beginner AI Class",
    "Slide-Deck Outline",
    "Scam-spotting segment",
    "Activity 1",
    "Activity 2",
    "Q&amp;A + feedback",
    "16",
  ]) {
    assert.ok(html.includes(piece), `slide outline mentions ${piece}`);
  }
  assert.ok((html.match(/\d+ min/g) || []).length >= 14, "each slide has a length");
  assert.ok((html.match(/<td class="time">/g) || []).length >= 14, "timings marked up");
});

test("facilitator script: friendly script with all sixteen segments", () => {
  const html = RENDERED["facilitator-script.html"];
  for (const piece of [
    "Facilitator Script",
    "plain English",
    "next word",
    "three things",
    "first answer is a draft",
    "postcard",
    "Scam",
    "secret family code word",
  ]) {
    assert.ok(html.includes(piece), `script mentions ${piece}`);
  }
  assert.ok((html.match(/class="say"/g) || []).length >= 20, "read-aloud lines");
  assert.ok((html.match(/class="stage"/g) || []).length >= 8, "stage directions");
});

test("AI basics handout: recipes and glossary for absolute beginners", () => {
  const html = RENDERED["handout-ai-basics.html"];
  for (const piece of [
    "guessers of the next word",
    "role",
    "context",
    "ask",
    "prompt recipes",
    "Plain-English glossary",
    "not a doctor",
  ]) {
    assert.ok(html.includes(piece), `basics handout mentions ${piece}`);
  }
  assert.ok((html.match(/<li><strong>The/g) || []).length >= 5, "five named recipes");
});

test("safety handout: postcard rule, five red flags, pause and verify", () => {
  const html = RENDERED["handout-safety.html"];
  for (const piece of [
    "postcard, not a diary",
    "five scam red flags",
    "Urgency",
    "Odd ways to pay",
    "Secrecy",
    "pause, verify",
    "family code word",
    "Passwords",
  ]) {
    assert.ok(html.includes(piece), `safety handout mentions ${piece}`);
  }
});

test("activities sheet: laptop and no-laptop alternates for both activities", () => {
  const html = RENDERED["activities.html"];
  for (const piece of [
    "Laptop track",
    "No-laptop track",
    "Fix this prompt",
    "Real or fake",
    "Weak-prompt cards",
    "Scam-message cards",
    "Answer key",
  ]) {
    assert.ok(html.includes(piece), `activities mentions ${piece}`);
  }
  assert.ok((html.match(/<div class="callout">/g) || []).length >= 5, "cut-apart cards present");
});

test("sign-in sheet: grid with optional contact and privacy note", () => {
  const html = RENDERED["sign-in-sheet.html"];
  assert.ok(html.includes("Sign-In Sheet"));
  assert.ok(html.includes("optional"));
  assert.ok(html.includes("Privacy note"));
  assert.ok((html.match(/class="signrow"/g) || []).length >= 15, "enough sign-in rows");
  assert.ok(html.includes("Laptop? Yes / No"), "laptop column printed");
});

test("feedback form: rating scales and open questions", () => {
  const html = RENDERED["feedback-form.html"];
  for (const piece of [
    "Feedback Form",
    "anonymous",
    "pace",
    "scam-spotting",
    "most useful",
    "next time",
  ]) {
    assert.ok(html.includes(piece), `feedback form mentions ${piece}`);
  }
  assert.ok((html.match(/class="box"/g) || []).length >= 5, "open-answer boxes");
});

// ---- on-disk checks: files actually built on disk carry the same content ----

test("built files on disk match rendered output", () => {
  build(DIST);
  for (const name of EXPECTED_NAMES) {
    const onDisk = readFileSync(join(DIST, name), "utf8");
    assert.equal(onDisk, RENDERED[name], `${name} on disk is up to date`);
  }
});

test("no secrets or personal data in any output", () => {
  for (const html of Object.values(RENDERED)) {
    for (const [cause, rx] of [
      ["API key-ish strings", /(?:api|key|token|secret|password)\s*[:=]\s*['"`][A-Za-z0-9/+_-]{8,}/i],
      ["email addresses", /[\w.+-]+@[\w-]+\.[\w.]+/],
    ]) {
      assert.doesNotMatch(html, rx, cause);
    }
    const phones = html.match(/\d{3}-\d{4}\b/g) || [];
    const fakesOnly = phones.every((p) => p === "555-0100");
    assert.ok(fakesOnly, "only the deliberately fake 555-0100 phone number appears");
  }
});
