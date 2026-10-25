# STATUS

**Project:** Free Community AI Class Kit
**Maintained by:** Asdale Dynamics, LLC
**Last updated:** 2026-10-25

## What was built

A complete, zero-dependency kit for hosting a two-hour beginner AI class at a
library, community center, senior center, or similar space. Seven print-ready
HTML sheets, generated from source by a Node build script, all matching the
plain-English, never-condescending voice of *The Massive AI Manual*:

| Printable | Purpose |
|---|---|
| `dist/slide-deck-outline.html` | Timed slide-by-slide outline covering the full two hours (16 slides, cumulative clock) |
| `dist/facilitator-script.html` | Full read-aloud facilitator script in a friendly voice, with [stage directions] and a per-slide time table |
| `dist/handout-ai-basics.html` | Participant handout: what AI is/isn't, the role-context-ask prompt recipe, five prompt recipes, plain-English glossary |
| `dist/handout-safety.html` | Participant handout: privacy basics ("postcard rule"), five scam red flags, cloned-voice notes, family code word, "pause and verify" drill |
| `dist/activities.html` | Every activity in laptop and no-laptop versions, plus cut-apart weak-prompt and "Real or Fake?" scam cards with an answer key |
| `dist/sign-in-sheet.html` | Printable front-desk sign-in grid with optional contact info and a privacy note |
| `dist/feedback-form.html` | One-page anonymous feedback form (rating scales plus open questions) |

Supporting files: `build.mjs` (build script), `src/*.mjs` (content modules +
shared print stylesheet), `test/build.test.mjs` (test suite), `README.md`,
`LICENSE` (MIT, copyright (c) 2026 Asdale Dynamics, LLC), `package.json`.

## Design choices

- **Local-first, no dependencies:** no npm packages, no CDN assets, no web
  fonts, no network access at build or view time. Each printable is a
  standalone styled HTML document (US Letter / A4 friendly, `@page` rules,
  break-inside guards, system fonts).
- **No brand dependencies:** the class is deliberately taught tool-generically;
  no endorsements, no signups, no accounts.
- **No secrets or personal data:** the sign-in sheet marks contact info as
  optional; nothing in the repo or output contains API keys or personal data.
  Tests assert this.

## How to run it

```sh
npm run build    # regenerates all seven printables into dist/
npm test         # runs 33 tests verifying every printable builds and carries its content
```

Requirements: Node.js 18+ (tested on Node 20.19). To print: open any
`dist/*.html` in a browser and print (Ctrl/Cmd+P) or save as PDF.

## Verification results

- `npm test`: **33/33 tests pass, 0 failures.**
- `npm run build`: **7 printables built cleanly, repeat runs idempotent.**
- Tests verify: clean-room build produces exactly the seven documented files;
  each printable is a complete standalone HTML document with print CSS; no
  external assets/scripts/fonts/network references; no unbalanced tags; no
  mojibake or stray markup; per-printable content (timings, red flags, prompt
  recipes, laptop/no-laptop tracks, sign-in rows, feedback boxes); built files
  on disk match source; no secrets, email addresses, or real phone numbers
  (only a deliberate fake 555-0100 in a scam-spotting card).

## Known gaps

- Slide outline is text (timed outline), not a deck of slide files; mapping to
  a specific presenter app is left to the facilitator (intentionally
  tool-agnostic).
- Sign-in sheet prints 18 rows per page; longer events need extra pages.
- No server-side PDF generation: PDFs come from each browser's own print
  dialog, so page-break fidelity may vary slightly between browsers.
- Scam examples are US-centric (FTC, Medicare, gift cards) and could be
  localized.
- Only unit/regression checks via Node's built-in test runner; no visual
  snapshot testing.
