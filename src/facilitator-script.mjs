import { page, FOOTER_BOOK } from "./template.mjs";

const body = `
<h1>Facilitator Script &mdash; Beginner AI Class</h1>
<p class="deck">Written to be read aloud, in order, with slide numbers matching
<em>slide-deck-outline.html</em>. Quote marks are plain talking words; italic
[stage directions] tell you what to do. You do not need to memorize anything &mdash;
this is a friend-to-friend script, so a peek at the page is fine.</p>

<h2><span class="time">0:00 &middot; Slide 1</span> Welcome</h2>
<div class="stage">[ Smile. Wait for the room to find seats. Don&rsquo;t start until the shushing happens on its own. ]</div>
<p class="say">Hi, everybody. My name is [your name], and for the next two hours we&rsquo;re going to talk about AI &mdash; what it is, how to use it for everyday stuff, and how to spot when something&rsquo;s trying to trick you. Two promises before we start: first, I will explain everything in plain English. No jargon, no showing off. Second, there are no dumb questions. If you have a question, somebody else in this room is wondering the exact same thing and is just relieved you asked first.</p>
<p class="say">There are handouts on the tables &mdash; one on what AI is, one on staying safe. Both are yours to take home, mark up, fold, whatever helps. At the end there&rsquo;s a short feedback form; please fill it out even if the answer is &ldquo;this was great&rdquo; &mdash; it helps keep classes like this free.</p>

<h2><span class="time">0:05 &middot; Slide 2</span> Why learn about this now?</h2>
<p class="say">Here&rsquo;s the thing: AI is already part of your week whether you invited it or not. It&rsquo;s the thing that suggests the next word when you text, the thing that sorts your email, the voice in the checkout computer that never quite hears you right. So you already use AI. Today we just want to make you the one in charge of it.</p>
<p class="say">And learning this is not like becoming a mechanic just to drive a car. It&rsquo;s more like learning where the gas pedal is, where the mirrors are, and how to spot a warning light that isn&rsquo;t real. That&rsquo;s the whole workshop.</p>

<h2><span class="time">0:10 &middot; Slide 3</span> What AI actually is</h2>
<div class="stage">[ Slow down here. This is the slide people remember most, so give it room. ]</div>
<p class="say">Here&rsquo;s the least-mysterious explanation I know. The chat tools everyone is talking about are, at their core, very good guessers of the next word. They were trained on an enormous amount of text &mdash; books, articles, letters, how-to guides &mdash; and they learned what kinds of words tend to follow what kinds of words. So when you ask one to write a birthday email to your brother who loves fishing, it has seen ten thousand birthday emails and it knows what they sound like. That&rsquo;s all. It&rsquo;s a prediction machine, not a personality.</p>
<p class="say">Why does that matter? Two reasons. One: it sounds confident even when it&rsquo;s wrong, because confident is just how predicted text tends to read. Two: it has no feelings, and no stake in being right. You are the person in charge. We&rsquo;ll come back to that a few times today.</p>
<p class="say">A quick story. I once heard about a man who asked a chat tool about someone who discovered a new medicine &mdash; and it cheerfully invented a name, a year, and a hospital. Sounded exactly like a fact. It was exactly made up. That&rsquo;s the tricky part: the wrong answer doesn&rsquo;t look wrong. It looks like a very calm librarian who misplaced their glasses.</p>

<h2><span class="time">0:20 &middot; Slide 4</span> Meet the friendly tools</h2>
<div class="stage">[ Keep this tool-generic and short. Name what&rsquo;s free and common in your area; don&rsquo;t endorse one brand. If people ask, &ldquo;the big ones are all free to try&rdquo; is a fine answer. ]</div>
<p class="say">There are a bunch of these chat assistants &mdash; you&rsquo;ve probably heard a few names just from the news. They mostly do the same job: you type what you want help with, and help comes back. For this class I&rsquo;m not going to tell you which one to marry. The point is the skill, not the tool &mdash; this is a writing class, not a pencil class. If you brought a laptop today we&rsquo;ll use a free web version in a minute, and if you didn&rsquo;t, that&rsquo;s completely fine &mdash; we have a plan for you, as you&rsquo;ll see.</p>
<p class="say">One rule while we&rsquo;re here: the legitimate versions of these tools never ask you to pay mid-conversation to unlock some secret, and they never give you a &ldquo;prize&rdquo; for using them. If anything like that ever happens in your later exploring, close that browser. That was not a real anything. We&rsquo;ll talk more about that after the break.</p>

<h2><span class="time">0:25 &middot; Slide 5</span> Your first prompt &mdash; live demo</h2>
<div class="stage">[ Type in front of them, slowly, and say what you type. Watching someone piece a prompt together out loud is better than any slide. ]</div>
<p class="say">Let&rsquo;s do this live. I&rsquo;m going to ask for something perfectly ordinary. Watch what I type: &ldquo;Plan a simple one-week grocery list for two people cooking at home on a budget, sticking to basic pantry staples.&rdquo;</p>
<div class="stage">[ Type it, press enter, let the words appear. Read a line or two of the reply aloud. ]</div>
<p class="say">Notice I didn&rsquo;t say &ldquo;AI, help me.&rdquo; I said who&rsquo;s eating, what my situation is, and what I want back. Give it a job, give it the details, be clear about what you want &mdash; think of it like giving directions to a very eager, very literal helper. Two minutes from now you&rsquo;ll write one of your own, and it will feel a bit like magic. It&rsquo;s not magic. It&rsquo;s just friendly, well-organized asking.</p>

<h2><span class="time">0:30 &ndash; 0:45 &middot; Slide 6</span> Activity 1: Try it</h2>
<div class="stage">[ Split the room by the sign-in sheet&rsquo;s laptop column. Read the track that applies. ]</div>
<p class="say">If you have a laptop: open the free chat tool we just demoed, and write one prompt about YOUR week. Something real to you: getting ready for a phone call with a cousin you haven&rsquo;t seen in a while, simplifying a chore you&rsquo;ve been putting off, planning meals. The recipe is the one I used: role, context, and a clear ask. Take your time &mdash; this is the fun part, and I&rsquo;m floating around to help.</p>
<p class="say">If you&rsquo;re on the no-laptop track &mdash; equally important: partner up. You&rsquo;re going to do &ldquo;Fix this prompt&rdquo; out loud. There&rsquo;s a set of weak prompts on your table. Take one &mdash; say, &ldquo;write me something about dogs&rdquo; &mdash; and together, fix it. Give it a role, some context, and a clear ask. Make it good enough that you could hand it to a chat tool tonight and get something useful back. There&rsquo;s no wrong answer here, only vague ones.</p>
<div class="stage">[ Circulate. If laptops outnumber people, pair two people per laptop &mdash; it almost always makes for better conversation anyway. ]</div>

<h2><span class="time">0:45 &middot; Slide 7</span> Prompting like a friend</h2>
<p class="say">Okay. Here&rsquo;s how I want you to remember prompts forever: three things. Give it a role, give it context, make a clear ask. That&rsquo;s it. There&rsquo;s no magic phrase to memorize, and nothing you do &ldquo;wrong&rdquo; breaks the internet &mdash; you just ask again.</p>
<p class="say">Role is a job title: &ldquo;You are a patient librarian&rdquo; or &ldquo;You are a neighbor who&rsquo;s good with simple cooking.&rdquo; Context is the details that matter &mdash; who it&rsquo;s for, what you already know, what you want avoided. Ask is what you want back, in what shape &mdash; a list, a short paragraph, a chart. Handout one has five ready-made recipes in exactly that shape.</p>
<p class="say">And here&rsquo;s the permission-slip part: you are allowed to talk to it like a person. Full sentences. Plain requests. If it doesn&rsquo;t get it, tell it what missed and ask again a different way. That&rsquo;s not you failing &mdash; that&rsquo;s you doing your half of the conversation.</p>

<h2><span class="time">0:55 &middot; Slide 8</span> When the answer is off</h2>
<p class="say">At some point you&rsquo;ll type something and get back something that&rsquo;s&hellip; not quite right. Too long-winded. Too vague. Missing the point entirely. The fix list is short: say what was off, and ask again &mdash; shorter, longer, or &ldquo;explain it simpler, like I&rsquo;m brand new to this.&rdquo; And many tools have a &ldquo;try again&rdquo; button; sometimes a second roll of the dice is all you need.</p>
<div class="callout"><strong>Rule to say out loud:</strong> The first answer is a draft. You are the editor. Never let a machine have the last word on anything you&rsquo;d sign, pay for, or take to a doctor.</div>

<h2><span class="time">1:00 &middot; Slide 9</span> Good everyday uses</h2>
<p class="say">So where does this actually earn its keep? Honest list: drafting and shortening things &mdash; emails, notes, thank-yous. Planning &mdash; meals, trips, routines, party lists. Learning &mdash; &ldquo;explain how so-and-so works, simply&rdquo; is a genuinely great use, as long as you treat it as a starting point, not a final expert. Jargon &mdash; when a letter is full of terms, you can ask &ldquo;what do words like this usually mean?&rdquo; without posting your private info anywhere. And ideas &mdash; brainstorming is where it&rsquo;s the most fun.</p>
<p class="say">Where it should never be the decider: your medications, your money, your legal paperwork. Those are questions for trained humans. AI can help you get ready for those conversations &mdash; it cannot have them for you.</p>

<h2><span class="time">1:05 &ndash; 1:10 &middot; Slide 10</span> Break</h2>
<div class="stage">[ Five real minutes. Stretch. Sip water. While people are up, place the safety handouts on tables if you haven&rsquo;t already. ]</div>

<h2><span class="time">1:10 &middot; Slide 11</span> How AI messes up: making things up</h2>
<p class="say">Alright. Here&rsquo;s the big weakness. Remember &mdash; it&rsquo;s a next-word predictor, and sometimes the likely next word is not the true one. It will hand you a very smooth-sounding address that doesn&rsquo;t exist, a very confident name attached to the wrong person, a very plausible date. Then it will do it again with total sincerity when you ask a second time.</p>
<p class="say">The habit that protects you: treat facts like hot food from a stranger&rsquo;s kitchen &mdash; set it down and poke it before you eat. Numbers, names, dates, anything official-looking: check the real source. Your library&rsquo;s database, the government website you already know, the phone number printed on the bill &mdash; not the one printed in the message asking you to call back.</p>

<h2><span class="time">1:15 &middot; Slide 12</span> Privacy basics</h2>
<div class="stage">[ This is the &ldquo;warm mom voice&rdquo; part of the class. Slow, calm, not scary. ]</div>
<p class="say">Here&rsquo;s my rule, and it fits on a magnet: treat what you type into a chat like a postcard, not a diary. Writing trip plans, a recipe, a question on a postcard? Fine, nobody thinks twice. Writing your Social Security number on a postcard? Of course not. A password? No. Same rule for a chat box.</p>
<p class="say">Three things that stay out of chat tools: other people&rsquo;s personal info &mdash; even your own family&rsquo;s, even if you trust the tool. Account numbers, ID numbers, insurance numbers. And passwords, always, always. If it&rsquo;s the kind of thing that lives in a locked drawer, it doesn&rsquo;t go in the chat box. That&rsquo;s the whole privacy seminar, and it&rsquo;s written out on your safety handout, so you don&rsquo;t have to trust your memory today.</p>

<h2><span class="time">1:20 &ndash; 1:35 &middot; Slide 13</span> Scam-spotting segment</h2>
<div class="stage">[ Read this like a fireside chat. It is the part people came for. Let silences land after each red flag. ]</div>
<p class="say">Now, real talk. AI didn&rsquo;t invent scams &mdash; it just made the fakes faster, prettier, and better at spelling. The clumsy scam emails you could spot by the missing comma now arrive in perfect English, sounding like your bank, or &mdash; and this is the new one &mdash; in a voice that sounds like family.</p>
<p class="say">So I&rsquo;m giving you five red flags. If you see one, slow all the way down. If you see two, treat the message as a fakery until proven otherwise.</p>
<p class="say">Red flag one: urgency. &ldquo;Your account will be closed in 24 hours.&rdquo; Real institutions do not do countdowns at you. Urgency is the tool of the trade because it stops you from thinking. If a message is hurrying you, the message is the problem, not the deadline.</p>
<p class="say">Red flag two: odd ways of paying. Gift cards. Wire transfers to strangers. Crypto. No real company asks for your money in the form of a gift card bought yesterday. Real companies bill you in boring ways through boring channels.</p>
<p class="say">Red flag three: a link that wants to be your only map. If the only way to check the story is the button in the message itself, that isn&rsquo;t checking, that&rsquo;s the trap holding the door. You know your bank&rsquo;s website. You&rsquo;ve typed it before. Type it again, yourself, separately.</p>
<p class="say">Red flag four: a story tailored a little too well to you. &ldquo;I saw your profile and I think we&rsquo;re related, and there&rsquo;s an inheritance.&rdquo; Real life arrives with paperwork and awkward silences. Scams arrive exactly on time, perfectly phrased, holding the one thing you hoped for.</p>
<p class="say">Red flag five, and this one is for telling everyone you love: secrecy. &ldquo;Don&rsquo;t tell anyone yet.&rdquo; &ldquo;Just between us.&rdquo; &ldquo;This call is being monitored, so say nothing.&rdquo; Secrecy exists to keep you from the people who would say &ldquo;wait, that&rsquo;s odd.&rdquo; Real business can handle being checked.</p>
<div class="callout"><strong>The family cure:</strong> agree on a secret family code word with your people. A fake &ldquo;grandchild in trouble&rdquo; call always folds when the caller doesn&rsquo;t know the word. It costs nothing and it works.</div>
<p class="say">And here&rsquo;s the two-minute drill for whenever you&rsquo;re unsure: stop. Breathe. Contact the real source by a path you already trust &mdash; the phone number on the card in your wallet, the branch you&rsquo;ve walked into, the desk you&rsquo;re sitting in front of. Two minutes of checking has never once cost anyone as much as the wire transfer it prevents.</p>

<h2><span class="time">1:35 &ndash; 1:45 &middot; Slide 14</span> Activity 2: Spot the scam</h2>
<div class="stage">[ Hand out the three &ldquo;Real or Fake?&rdquo; messages from activities.html, printed and cut. Small tables. Read, discuss, vote. ]</div>
<p class="say">Alright, groups of two or three. Three messages on each card. One&rsquo;s innocent, one&rsquo;s awkward and fake, and one is polished-but-poisonous. Two minutes: decide real or fake for each, and &mdash; more importantly &mdash; say out loud which red flag gave it away. Don&rsquo;t peek at the tiny answer key on your sheet until you&rsquo;ve voted.</p>
<div class="stage">[ Debrief by calling for votes per message. Expect disagreement on the polished one &mdash; that&rsquo;s the teaching moment. ]</div>
<p class="say">Notice something? Every one of these is beatable with the same single move: pause, and verify separately. If you take just one habit home from today, take that one. Pause, and verify. It&rsquo;s also printed on your safety handout with the full red-flag list, right where the fridge can see it.</p>

<h2><span class="time">1:45 &middot; Slide 15</span> Where to go next</h2>
<p class="say">So &mdash; you now know what this stuff is, how to talk to it, where it stumbles, and how not to get taken in by it. That is a genuinely huge amount of practical literacy for two hours, and it&rsquo;s yours now.</p>
<p class="say">Take your handouts home; the safety sheet is fridge-worthy. Everything we used today is free, and your library card opens even more doors &mdash; just ask at the desk. If you&rsquo;d like more in this plain-English style, Dylan Asdale wrote a book called <em>The Massive AI Manual</em> &mdash; it&rsquo;s this class at full length, explained like a friend would. And be kind to yourself as you practice: every one of us was a beginner at typing once, too.</p>

<h2><span class="time">1:50 &ndash; 2:00 &middot; Slide 16</span> Q&amp;A + feedback</h2>
<div class="stage">[ Take questions first while they&rsquo;re warm. Then direct attention to the feedback forms. ]</div>
<p class="say">Question time. Genuinely anything &mdash; &ldquo;does it know me?&rdquo; &mdash; &ldquo;is it listening?&rdquo; &mdash; &ldquo;why does my phone suddenly have a different button?&rdquo; I&rsquo;d rather clear up a small worry here than leave it in the parking lot tonight.</p>
<div class="stage">[ Wait through silences; count to seven before rescuing. The first hand almost always asks the best question. ]</div>
<p class="say">Last thing: the feedback form. It&rsquo;s anonymous, it takes four minutes, and it keeps this class free for the next group. One line per answer is plenty &mdash; what to keep, what to cut, what you&rsquo;ll try this week. Thank you all for showing up on a [weekday] evening to learn something brand-new. That instinct &mdash; curiosity, without embarrassment &mdash; is exactly the right kind of confidence, and I hope you leave with it.</p>
`;

export default function facilitatorScript() {
  return page({
    title: "Facilitator Script \u2014 Beginner AI Class",
    slug: "facilitator-script",
    body,
    footerNote: FOOTER_BOOK,
  });
}
