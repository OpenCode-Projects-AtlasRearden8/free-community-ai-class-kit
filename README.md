# Free Community AI Class Kit

A free, print-ready kit for hosting a **two-hour beginner AI class** at a library,
community center, senior center, school, or anywhere else people gather.

Everything explains AI **like a friend would**: plain English, step by step,
never condescending. No signups, no accounts, no ads, no tracking. It runs
entirely on your own computer.

Built and maintained by **Asdale Dynamics, LLC** — the company behind Dylan
Asdale's book *The Massive AI Manual* (see <https://dylanasdale.github.io>).

## What's in the kit

Every item below is a **print-ready HTML sheet** that the build script generates
into `dist/`:

| Printable | What it is |
| --- | --- |
| `slide-deck-outline.html` | A timed, slide-by-slide outline for the full two-hour class |
| `facilitator-script.html` | A friendly, word-for-word facilitator script with stage directions |
| `handout-ai-basics.html` | Participant handout: what AI is (and isn't), five prompt recipes, plain-English glossary |
| `handout-safety.html` | Participant handout: privacy basics, scam-spotting checklist, "pause and verify" habits |
| `activities.html` | Laptop and **no-laptop** alternates for every activity, so nobody is left out |
| `sign-in-sheet.html` | A simple sign-in grid for the front desk |
| `feedback-form.html` | A one-page feedback form for the end of class |

## Requirements

- Node.js 18 or newer (tested on Node 20). That's it — no npm packages, no
  internet connection needed.

## Build it

```sh
npm run build        # or: node build.mjs
```

This regenerates the seven printables in `dist/`. Each file is a standalone
HTML page styled for standard **US Letter / A4** paper with system fonts only —
no web fonts, no external assets, nothing fetched from the network.

Open any file in a browser and use your browser's **Print** (Ctrl/Cmd+P) to
print or save as PDF.

## Test it

```sh
npm test             # or: node --test test/
```

The test suite runs the build from a clean `dist/` and verifies that **every
printable** is produced, well-formed, and contains the content it promises
(headings, timing blocks, key safety wording, print CSS, and so on).

## Hosting a class, in brief

1. Print `handout-ai-basics.html` and `handout-safety.html` (one per attendee),
   plus `sign-in-sheet.html` and `feedback-form.html` for the desk.
2. Read `facilitator-script.html` once beforehand — you don't need to memorize
   it; it's written to be read-aloud friendly.
3. Follow the timings in `slide-deck-outline.html`. Activities have laptop and
   no-laptop versions, so use whichever fits your room.
4. Collect feedback, improve the class, repeat.

## Educator and facilitator notes

- Adapt freely: the kit is MIT-licensed for exactly this reason.
- **Education only, never medical, legal, or financial advice.** The safety
  handout stresses pausing and verifying with real, official sources.
- No personal data is required by anything here; the sign-in sheet marks email
  as optional and leaves retention rules to your host organization.

## License

MIT — see `LICENSE`. Copyright (c) 2026 Asdale Dynamics, LLC.
