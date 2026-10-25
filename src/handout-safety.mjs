import { page, FOOTER_BOOK } from "./template.mjs";

const body = `
<h1>Handout: Staying Safe &mdash; Privacy &amp; Scam-Spotting</h1>
<p class="deck">This is the take-home page people actually keep. Print it,
put a copy where the whole house can see it, and share the family code word
idea before tonight&rsquo;s news does the job for you.</p>

<h2>The postcard rule</h2>
<p>Treat what you type into a chat tool like a <strong>postcard, not a diary</strong>.
Would you mail it to the neighborhood? Then it&rsquo;s fine. Would you rather it live in
a locked drawer? Then it does not go in a chat box &mdash; not to any tool, not for any
reason.</p>

<h2>Keep out of any chat box</h2>
<ul>
<li><strong>Passwords</strong> &mdash; yours, anyone&rsquo;s, partial or full. Always.</li>
<li><strong>ID and member numbers</strong> &mdash; Social Security, insurance, library card, bank.</li>
<li><strong>Other people&rsquo;s info</strong> &mdash; even family&rsquo;s. You can make this choice only for yourself.</li>
<li><strong>Medical records or account screenshots</strong> &mdash; describe a question in your own words instead.</li>
<li><strong>Anything you&rsquo;d be mortified to see pinned to the fridge by tomorrow.</strong></li>
</ul>

<h2>Why this matters</h2>
<p>What you type can be stored by the company running the tool, and (depending on
settings and the tool) may be reviewed by human staff, used for training, or
disclosed in legal situations. That stack of maybes is exactly why the postcard
rule works: you never need to learn each company&rsquo;s policy to stay safe at home.</p>

<h2>The five scam red flags</h2>
<ol>
<li><strong>Urgency.</strong> &ldquo;Your account closes in 24 hours.&rdquo; Real companies don&rsquo;t set off countdowns in your inbox. If a message is hurrying you, the message itself is the danger.</li>
<li><strong>Odd ways to pay.</strong> Gift cards, wires to strangers, crypto. Real companies bill you in boring, documented ways.</li>
<li><strong>The link that is its own proof.</strong> If the only way to check the story is the button in the message itself, the message is the trap. Open a browser YOU know and type the address YOURSELF.</li>
<li><strong>Too well-tailored.</strong> &ldquo;Long-lost relative&rdquo; + &ldquo;inheritance&rdquo; in one message. Real life brings paperwork; scams bring exactly what you hoped for, perfectly worded, right on time.</li>
<li><strong>Secrecy.</strong> &ldquo;Don&rsquo;t tell anyone yet.&rdquo; &ldquo;Say nothing, they may be listening.&rdquo; Secrecy exists to keep you away from the people who would ask good questions.</li>
</ol>

<div class="callout"><strong>The family code word:</strong> Agree with your people on one word a caller must know before you take a sudden-money or sudden-trouble call seriously. It takes five minutes to set up, and it defeats even a cloned voice &mdash; because a stranger will never know it.</div>

<h2>Voice and video fakes</h2>
<ul>
<li><strong>Cloned voices are out there.</strong> A &ldquo;grandchild calling from the road&rdquo; may sound right. Ask something only they know. Then call back on the number you already have.</li>
<li><strong>Hanging up is allowed.</strong> You are not being rude; you are being careful. Real people understand exactly once.</li>
<li><strong>Video can&rsquo;t be trusted by looks alone.</strong> The code word and call-back rule cover video calls too.</li>
</ul>

<h2>The two-minute habit that beats everything: pause, verify</h2>
<ol>
<li><strong>Stop.</strong> Hands off the keys. Stand up if you need to. Urgency expires in minutes; regret doesn&rsquo;t.</li>
<li><strong>Use a trusted path.</strong> Number from your wallet, the website you always use, the branch you&rsquo;ve walked into.</li>
<li><strong>Tell exactly one person</strong> before you act. A friend or family member will spot the wiggle in the story in seconds.</li>
</ol>

<h2>If it does happen</h2>
<ul>
<li>Call the real company or agency immediately &mdash; faster reports freeze more damage.</li>
<li>Change the password from a clean device, and check whether it was reused anywhere else.</li>
<li>In the U.S.: reportfraud.ftc.gov (FTC), and your local police non-emergency line can help for identity theft involving real documents.</li>
<li>Tell somebody. Being scammed happens to sharp people precisely because scams are engineered for sharp people. Shame is the scam&rsquo;s favorite sidekick.</li>
</ul>

<div class="callout"><strong>One-line summary to carry out the door:</strong> Pause. Verify through a path you already trust. And never keep a &ldquo;secret&rdquo; with a stranger.</div>
`;

export default function handoutSafety() {
  return page({
    title: "Staying Safe \u2014 Privacy & Scam-Spotting \u2014 Handout",
    slug: "handout-safety",
    body,
    footerNote: FOOTER_BOOK,
  });
}
