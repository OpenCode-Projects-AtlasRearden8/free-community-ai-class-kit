import { page, FOOTER_BOOK } from "./template.mjs";

const rows = [
  ["1", "0:00", "5 min", "Welcome! What this is (and isn\u2019t)", "Meet your facilitator; promise of plain English; roadmap: what AI is, trying it, staying safe."],
  ["2", "0:05", "5 min", "Why learn about AI now?", "AI is already in phones, banks, and email. Knowing how it works is like knowing how to drive, not like being a mechanic."],
  ["3", "0:10", "10 min", "What AI actually is", "\u201cSmart autocomplete\u201d trained on tons of text. It predicts likely next words \u2014 not magic, not a person, not always right."],
  ["4", "0:20", "5 min", "Meet the friendly tools", "Overview of free public chat assistants and what each is good at; where they live; no-cost basics."],
  ["5", "0:25", "5 min", "Your first prompt \u2014 live demo", "Facilitator types one prompt on screen: plan a library visit / draft a birthday email. Show the answer appearing."],
  ["6", "0:30", "15 min", "Activity 1: Try it (laptop / no-laptop)", "Laptop track: write a first prompt and read the reply. No-laptop track: \u201cfix this prompt\u201d card sort + pairs practice."],
  ["7", "0:45", "10 min", "Prompting like a friend", "The 3 Cs: role, context, and what to do. Give it a job title, the details that matter, and a clear ask."],
  ["8", "0:55", "5 min", "When the answer is off", "Try again, add detail, and \u201cregenerate\u201d. Never accept the first answer blindly \u2014 you\u2019re the editor."],
  ["9", "1:00", "5 min", "Good everyday uses", "Writing help, meal and trip planning, learning a topic, simplifying forms, brainstorming. Note: never medical/legal/financial decisions."],
  ["10", "1:05", "5 min", "Break", "Stretch, water, laptop-free moment. Hand out the safety sheet as people settle back in."],
  ["11", "1:10", "5 min", "How AI messes up: \u201cmaking things up\u201d", "It can sound confident and be wrong. Example: a plausible-but-fake fact. Rule: big claims \u2192 double-check."],
  ["12", "1:15", "5 min", "Privacy basics", "Treat a chat as postcard, not a diary: names of others, account numbers, passwords \u2014 don\u2019t type them."],
  ["13", "1:20", "15 min", "Scam-spotting segment", "The five red flags: urgency, odd pay requests, \u201cact now\u201d links, too-perfect stories, and pressure to keep it secret."],
  ["14", "1:35", "10 min", "Activity 2: Spot the scam (laptop / no-laptop)", "Read three messages; vote real or fake; discuss why. Laptop track can also search-verify one thing."],
  ["15", "1:45", "5 min", "Where to go next", "Take-home handouts, library resources, and where to find more plain-English help."],
  ["16", "1:50", "10 min", "Q&amp;A + feedback", "Open floor, one takeaway from each table, fill out feedback forms, thank-you."],
];

const body = `
<h1>Two-Hour Beginner AI Class &mdash; Slide-Deck Outline</h1>
<p class="deck">A timed walk-through of the whole session, ready to turn into slides.
Each row is one slide. Times are cumulative (start time plus how long the slide runs).
Room for \u201clive demo\u201d slides: open a free chat assistant in your browser ahead of time.</p>

<h2>The deck at a glance</h2>
<table>
<thead><tr><th style="width:4em">Slide</th><th style="width:5em">Clock</th><th style="width:5em">Length</th><th style="width:22%">Title</th><th>Key points</th></tr></thead>
<tbody>
${rows.map((r) => `<tr><td>${r[0]}</td><td>${r[1]}</td><td class="time">${r[2]}</td><td><strong>${r[3]}</strong></td><td>${r[4]}</td></tr>`).join("\n")}
</tbody>
</table>

<h2>Setup checklist (before doors open)</h2>
<ul>
<li>Sign-in sheet on a clipboard by the door (print <em>sign-in-sheet.html</em>).</li>
<li>Handouts stacked: <em>handout-ai-basics.html</em> and <em>handout-safety.html</em>, one each per person.</li>
<li>Feedback forms at every seat (print <em>feedback-form.html</em>).</li>
<li>Projector working; a demo chat already open and named something ordinary, like \u201cplan a monthly grocery list.\u201d</li>
<li>Print <em>activities.html</em> for yourself; cut the scam cards if using the printer-safe card version.</li>
<li>Water for your voice. Two hours of friendly talking is real exercise.</li>
</ul>

<div class="callout"><strong>Timing tip:</strong> Activities 1 and 2 are the shock absorbers. If the session runs long, trim them down before you trim the scam-spotting segment \u2014 that part is the one attendees remember and use.</div>
`;

export default function slideDeckOutline() {
  return page({
    title: "Two-Hour Beginner AI Class \u2014 Slide-Deck Outline",
    slug: "slide-deck-outline",
    body,
    footerNote: FOOTER_BOOK,
  });
}
