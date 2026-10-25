import { page } from "./template.mjs";

const body = `
<h1>Feedback Form</h1>
<p class="deck">About 4 minutes &mdash; anonymous, one line per answer is plenty.
Your voice keeps this class free, friendly, and useful for the next group.
Circle or check, write a word or two, done.</p>

<h2 style="margin-top:8px">Class: Beginner AI for Everyday Life</h2>
<table>
<tbody>
<tr><th style="width:25%">Date</th><td></td></tr>
</tbody>
</table>

<h3>1. How clear was the class overall?</h3>
<p class="rate">Weird &mdash; 1 &nbsp; 2 &nbsp; 3 &nbsp; 4 &nbsp; 5 &nbsp; Crystal</p>

<h3>2. How was the pace? (One circle.)</h3>
<p class="checkboxes">Too slow &nbsp;&nbsp;&nbsp; About right &nbsp;&nbsp;&nbsp; Too fast &nbsp;&nbsp;&nbsp; Mixed feelings</p>

<h3>3. Did the scam-spotting segment make you feel more ready to protect yourself?</h3>
<p class="rate">Not at all &mdash; 1 &nbsp; 2 &nbsp; 3 &nbsp; 4 &nbsp; 5 &nbsp; Very much</p>

<h3>4. Was having laptop and no-laptop versions of the activities useful?</h3>
<p class="checkboxes">Yes &nbsp;&nbsp;&nbsp; Somewhat &nbsp;&nbsp;&nbsp; No &nbsp;&nbsp;&nbsp; Not sure</p>

<h3>5. Which part was the most useful? Why?</h3>
<div class="box"></div>

<h3>6. Which part could disappear next time without anyone missing it?</h3>
<div class="box"></div>

<h3>7. What one thing do you hope to try on your own this week?</h3>
<div class="box"></div>

<h3>8. What should we teach next time?</h3>
<div class="box"></div>

<h3>9. Anything else you want us to know?</h3>
<div class="box"></div>

<div class="callout"><strong>Thank you.</strong> Anonymous forms like this one have noble ancestors: they are why community classes everywhere get gently, kindly better. There is no wrong answer here either.</div>
`;

export default function feedbackForm() {
  return page({
    title: "Feedback Form \u2014 Beginner AI Class",
    slug: "feedback-form",
    body,
  });
}
