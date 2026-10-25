import { page, FOOTER_BOOK } from "./template.mjs";

const body = `
<h1>Activities &mdash; Laptop and No-Laptop Tracks</h1>
<p class="deck">Every activity in the class runs in two versions so nobody feels
left out: one for people with a laptop in front of them, and one that needs
nothing but a table, a partner, and these sheets. Merge the tracks at will &mdash;
mixed tables often work best.</p>

<h2>Activity 1 &middot; 15 minutes &middot; &ldquo;Try it&rdquo;</h2>

<h3>Laptop track: Your first real prompt</h3>
<ol>
<li>Open a chat tool from the class demo (mix in tools a neighbor already trusts).</li>
<li>Pick something real from your week: meal plan, trip idea, hard email, overdue chore.</li>
<li>Write it using the recipe: <strong>role &rarr; context &rarr; ask</strong>. Example shape: &ldquo;You are a friendly local guide. Planning a rainy afternoon with my 10-year-old niece who loves animals. Suggest 3 low-cost stops near downtown, plus one good indoor backup.&rdquo;</li>
<li>Read the reply as an editor: Is it right? Is it too long? Is it condescending? Would you say that?</li>
<li>Change one thing and ask again &mdash; notice how small changes bend the answer.</li>
</ol>

<h3>No-laptop track: &ldquo;Fix this prompt&rdquo; pairs</h3>
<ol>
<li>Partner up, take one card each (below), read the weak prompt aloud together.</li>
<li>Fix it out loud in the recipe shape: role, context, clear ask.</li>
<li>Make it good enough that either of you could paste it straight into a chat tool tonight.</li>
<li>Swap cards and repeat. Two fixes each.</li>
<li>Optional hard mode: keep the fix under 40 words.</li>
</ol>

<div class="callout"><strong>Weak-prompt cards (cut apart before class):</strong>
<ul style="margin-top:4px">
<li>&ldquo;write me something about dogs&rdquo;</li>
<li>&ldquo;make my business better&rdquo;</li>
<li>&ldquo;what should I cook&rdquo;</li>
<li>&ldquo;help me learn Spanish&rdquo;</li>
<li>&ldquo;fix my resume&rdquo;</li>
<li>&ldquo;plan my day somehow&rdquo;</li>
</ul></div>

<h2>Activity 2 &middot; 10 minutes &middot; &ldquo;Real or fake?&rdquo;</h2>
<h3>Both tracks together (works great even mixed)</h3>
<ol>
<li>Groups of 2&ndash;3 get three messages (cards below, cut apart).</li>
<li>Decide for each: <strong>real or fake?</strong></li>
<li>Then name the red flag that gave it away. Urgency? Odd payment? Self-proving link? Too-perfect story? Secrecy?</li>
<li>Vote out loud per table. The disagreement is the lesson.</li>
</ol>

<h3>Laptop add-on: one-minute verification drill</h3>
<p>After voting, the laptop half practices verifying <em>separately</em>: search the
company&rsquo;s name plus &ldquo;customer service official site&rdquo; in a fresh browser tab, and
find the phone number the company itself publishes. Compare it to the one inside
the message. Never click to verify &mdash; always swim upstream to shore.</p>

<h3>Scam-message cards (cut apart; answer key on the last card)</h3>
<div class="callout"><strong>Card A (&ldquo;The Countdown&rdquo;):</strong> &ldquo;URGENT: Your email account will be closed in 24 hours. Click now to keep your files: bit-link.example/close-now&rdquo;</div>
<div class="callout"><strong>Card B (&ldquo;The Prize&rdquo;):</strong> &ldquo;Congratulations! You&rsquo;ve won a $500 grocery gift card. Send a $1.50 processing fee and your card number, and we&rsquo;ll ship it today!&rdquo;</div>
<div class="callout"><strong>Card C (&ldquo;The Visit&rdquo;):</strong> &ldquo;Hi, this is Maria from the county clerk&rsquo;s office. We need to confirm your Medicare number for a paperwork renewal. Please call back at 555-0100 when you get a chance.&rdquo;</div>
<div class="callout"><strong>Answer key:</strong> A = fake (urgency + self-proving link). B = fake (prize + odd payment + asks for card number). C = the tricky one: polite and unhurried &mdash; but government offices and Medicare never initiate calls like this, so treat it as fake until verified through the number on the official site. Every card has the same cure: pause, verify separately.</div>
`;

export default function activities() {
  return page({
    title: "Activities \u2014 Laptop and No-Laptop Tracks",
    slug: "activities",
    body,
    footerNote: FOOTER_BOOK,
  });
}
