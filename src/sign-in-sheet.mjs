import { page } from "./template.mjs";

const rows = Array.from({ length: 18 }, (_, i) => {
  const n = i + 1;
  const two = n % 2 === 0;
  return `<div class="signrow"><span>${n}</span><span style="align-self:flex-end">Name (and best way to reach you, optional)</span><span style="align-self:flex-end">Laptop? Yes / No</span><span style="align-self:flex-end">${two ? "Email or phone (optional)" : ""}</span></div>`;
}).join("\n");

const body = `
<h1>Sign-In Sheet</h1>
<p class="deck">Please print clearly. Email or phone is optional &mdash; leave it blank
if you&rsquo;d rather not share. This sheet goes back into the host organization&rsquo;s
front-desk folder; nothing is typed into any computer today.</p>

<h2 style="margin-top:6px">Class: Beginner AI for Everyday Life</h2>
<table>
<tbody>
<tr><th style="width:25%">Date</th><td style="border-top:none"></td><th style="width:20%">Facilitator</th><td style="border-top:none"></td><th style="width:25%">Location</th><td style="border-top:none"></td></tr>
</tbody>
</table>
${rows}
<div class="callout" style="margin-top:14px"><strong>Privacy note:</strong> Contact info is optional and used only to share news of future free classes. Ask the front desk for the host organization&rsquo;s retention and privacy policy &mdash; this kit ships with none of anyone&rsquo;s personal data.</div>
`;

export default function signInSheet() {
  return page({
    title: "Sign-In Sheet \u2014 Beginner AI Class",
    slug: "sign-in-sheet",
    body,
  });
}
