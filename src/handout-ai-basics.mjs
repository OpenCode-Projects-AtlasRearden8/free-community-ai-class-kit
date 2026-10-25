import { page, FOOTER_BOOK } from "./template.mjs";

const body = `
<h1>Handout: AI Basics for Absolute Beginners</h1>
<p class="deck">Take this home. It has everything from the first half of class &mdash;
no jargon, no homework, nothing to sign up for.</p>

<h2>The one-paragraph version</h2>
<p>AI chat tools are very good <em>guessers of the next word</em>. They learned from a huge pile of reading what answers usually look like. That makes them great for drafts, plans, and explanations &mdash; and it means they can sound confident while being wrong. You stay in charge: you review what it says, and you double-check anything important.</p>

<h2>What AI chat tools are good at</h2>
<ul>
<li><strong>Drafting</strong> &mdash; emails, thank-you notes, social posts, short letters.</li>
<li><strong>Planning</strong> &mdash; meals, trips, routines, gift lists, party checklists.</li>
<li><strong>Explaining</strong> &mdash; a plain-English summary of a topic you&rsquo;re curious about.</li>
<li><strong>Simplifying</strong> &mdash; rewriting something stuffy in everyday words.</li>
<li><strong>Ideas</strong> &mdash; brainstorming when your own well is temporarily dry.</li>
</ul>

<h2>What they are NOT for</h2>
<ul>
<li><strong>Medical decisions</strong> &mdash; they are not a doctor. Take questions to a real clinician.</li>
<li><strong>Legal or money decisions</strong> &mdash; they are not a lawyer or your bank. Not even close.</li>
<li><strong>Anything requiring your private info</strong> &mdash; more on that in the safety handout.</li>
<li><strong>Emotional crises</strong> &mdash; no chat can replace a person who loves you, or 988.</li>
</ul>

<h2>The 3-step prompt recipe</h2>
<p>Think: <strong>role &rarr; context &rarr; ask.</strong></p>
<ol>
<li><strong>Role</strong> &mdash; give it a job title. <em>&ldquo;You are a patient librarian.&rdquo;</em></li>
<li><strong>Context</strong> &mdash; the details that matter. <em>&ldquo;Cooking for two, mild spice.&rdquo;</em></li>
<li><strong>Ask</strong> &mdash; say exactly what you want back. <em>&ldquo;Give me a 5-dinner plan as a list.&rdquo;</em></li>
</ol>

<h2>Five ready-made prompt recipes</h2>
<ol>
<li><strong>The planner:</strong> &ldquo;You are a friendly local guide. Plan one relaxed afternoon exploring a mid-size U.S. downtown on a budget, for someone who walks slowly and likes local history. Give me 3 stops and a rough time for each.&rdquo;</li>
<li><strong>The writer:</strong> &ldquo;You are my polite editor. Draft a friendly 100-word thank-you note to the volunteers who helped at the library book sale. Keep it warm, not sappy.&rdquo;</li>
<li><strong>The simplifier:</strong> &ldquo;You are a patient explainer for a total beginner. Describe what a &lsquo;cloud backup&rsquo; is using a household analogy I&rsquo;d remember. Two paragraphs, no jargon.&rdquo;</li>
<li><strong>The nudge:</strong> &ldquo;You are a gentle coach. I keep postponing a 30-minute weekly tidy-up of my files plus one errand I&rsquo;ve been avoiding. Build me a 3-step plan for this city weekend that starts so small I&rsquo;d laugh at it.&rdquo;</li>
<li><strong>The checker:</strong> &ldquo;You are a helpful neighbor. Here&rsquo;s a phrase I want to say at my neighborhood association meeting: [text]. Tell me in 3 bullet points how it could sound clearer without changing the meaning.&rdquo;</li>
</ol>

<h2>Ground rules you&rsquo;ll love</h2>
<ul>
<li><strong>No magic words needed.</strong> Talk to it like a nice new coworker.</li>
<li><strong>The first answer is a draft.</strong> Say what&rsquo;s off and ask again; use its &ldquo;try again&rdquo; button without guilt.</li>
<li><strong>It doesn&rsquo;t judge.</strong> Ask the question you&rsquo;ve been embarrassed to ask a person.</li>
<li><strong>It doesn&rsquo;t remember who you are</strong> across separate chats <em>in the same way a friend might</em> &mdash; brand-new chat, clean slate. Some tools remember within a conversation; that&rsquo;s the whole memory you get.</li>
<li><strong>If a fact really matters</strong> &mdash; a name, a number, a date, an address &mdash; peek at an official source, not just the chat&rsquo;s word for it.</li>
</ul>

<h2>Plain-English glossary</h2>
<table>
<thead><tr><th style="width:22%">Word</th><th>What it actually means</th></tr></thead>
<tbody>
<tr><td><strong>AI (artificial intelligence)</strong></td><td>A family of computer techniques where software performs tasks that used to require human judgments &mdash; like understanding text or recognizing a photo. Today&rsquo;s everyday AI is pattern-matching on steroids, not a thinking mind.</td></tr>
<tr><td><strong>Chatbot</strong></td><td>A tool where you type to it and it types back. Like texting, except it never needs dinner.</td></tr>
<tr><td><strong>Prompt</strong></td><td>The thing you type to it. Your half of the conversation. Better prompts = better results, guaranteed.</td></tr>
<tr><td><strong>Large language model (LLM)</strong></td><td>The pattern-matching engine inside modern chatbots. It predicts the next word from the pattern of everything it has read.</td></tr>
<tr><td><strong>Hallucination</strong></td><td>Tech people&rsquo;s word for &ldquo;made something up.&rdquo; The chat writes a confident answer that simply isn&rsquo;t true. Best defense: check important facts at the source.</td></tr>
<tr><td><strong>Regenerate</strong></td><td>The &ldquo;roll the dice again&rdquo; button. A fresh answer without changing your prompt.</td></tr>
</tbody>
</table>
`;

export default function handoutAiBasics() {
  return page({
    title: "AI Basics for Absolute Beginners \u2014 Handout",
    slug: "handout-ai-basics",
    body,
    footerNote: FOOTER_BOOK,
  });
}
