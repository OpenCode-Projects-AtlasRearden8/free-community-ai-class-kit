const PRINT_CSS = `
  :root {
    --ink: #111;
    --muted: #555;
    --rule: #999;
    --accent: #1a4f8a;
  }
  * { box-sizing: border-box; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body {
    font-family: Georgia, "Times New Roman", serif;
    color: var(--ink);
    margin: 0;
    font-size: 11.5pt;
    line-height: 1.45;
  }
  .sheet { padding: 0.55in; }
  .brand {
    display: flex; justify-content: space-between; align-items: baseline;
    border-bottom: 2px solid var(--ink);
    padding-bottom: 6px; margin-bottom: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .brand .kit { font-weight: bold; font-size: 10.5pt; }
  .brand .host { font-size: 9pt; color: var(--muted); }
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 19pt; margin: 0 0 4px 0; line-height: 1.2;
  }
  h1 + .deck { font-size: 10.5pt; color: var(--muted); margin: 0 0 14px 0; }
  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13pt; margin: 18px 0 6px 0; color: var(--accent);
    border-bottom: 1px solid var(--rule); padding-bottom: 2px;
  }
  h3 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 11pt; margin: 12px 0 4px 0;
  }
  ul, ol { margin: 6px 0 10px 0; padding-left: 22px; }
  li { margin-bottom: 4px; }
  p { margin: 6px 0; }
  table { width: 100%; border-collapse: collapse; margin: 8px 0; }
  th, td {
    border: 1px solid var(--rule);
    padding: 5px 7px; text-align: left; vertical-align: top;
    font-size: 10.5pt;
  }
  th { font-family: Arial, Helvetica, sans-serif; background: #eee; }
  .say {
    font-size: 11.5pt; margin: 8px 0 8px 0; padding: 0 0 0 0;
  }
  .say::before { content: "\\201C\\A0"; }
  .say::after { content: "\\A0\\201D"; }
  .stage {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 9.5pt; color: var(--muted); font-style: italic;
    margin: 2px 0 8px 0;
  }
  .callout {
    border: 1.5px solid var(--ink); padding: 8px 10px; margin: 10px 0;
    font-size: 10.5pt;
  }
  .callout strong { font-family: Arial, Helvetica, sans-serif; }
  .time {
    font-family: Arial, Helvetica, sans-serif; font-weight: bold;
    font-size: 9pt; letter-spacing: 0.5px; text-transform: uppercase;
    color: var(--accent); white-space: nowrap;
  }
  .signrow {
    border-bottom: 1px solid var(--rule); height: 1.05in;
    display: flex; justify-content: space-between;
    font-size: 9pt; color: var(--muted); padding: 4px 6px 0 6px;
  }
  .checkboxes { font-family: Arial, Helvetica, sans-serif; font-size: 10pt; }
  .rate {
    font-family: Arial, Helvetica, sans-serif; font-size: 10pt;
    letter-spacing: 6px;
  }
  .box {
    border: 1px solid var(--rule); border-radius: 2px;
    height: 1.1in; margin: 6px 0 10px 0;
  }
  .footer {
    border-top: 1px solid var(--rule); margin-top: 16px; padding-top: 6px;
    font-family: Arial, Helvetica, sans-serif; font-size: 8.5pt; color: var(--muted);
    display: flex; justify-content: space-between; gap: 12px;
  }
  @page { size: letter; margin: 0; }
  @media print {
    body { margin: 0; }
    .sheet { padding: 0.55in; }
    h2 { break-after: avoid; }
    tr, .callout, .box { break-inside: avoid; }
  }
`;

export function page({ title, slug, body, footerNote }) {
  const footer = footerNote
    ? `<div class="footer"><span>${footerNote}</span><span>Free Community AI Class Kit &middot; Asdale Dynamics, LLC</span></div>`
    : `<div class="footer"><span></span><span>Asdale Dynamics, LLC</span></div>`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<style>${PRINT_CSS}</style>
</head>
<body>
<div class="sheet">
<div class="brand"><span class="kit">Free Community AI Class Kit</span><span class="host">from Asdale Dynamics, LLC &middot; dylanasdale.github.io</span></div>
${body}
${footer}
</div>
</body>
</html>
`;
}

export const FOOTER_BOOK = 'More plain-English AI help in Dylan Asdale\u2019s book \u201cThe Massive AI Manual\u201d';
