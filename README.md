# 🏆 Olympiad Practice — Grade 6

A free, fully offline Olympiad practice app for Grade 6, designed for the iPad.
Subjects: **Math · Science · English · General Knowledge · हिंदी · Computers · Logical Reasoning**.

- 311 hand-written questions with explanations, plus unlimited auto-generated Math & Reasoning questions
- Practice, timed Mock Exam with certificate, Weak-area drill, Fix my mistakes
- **Weak Areas report** for each subject: topic accuracy, *Needs work / Improving / Strong*, coaching tips, printable
- Several child profiles, history (CSV), resume unfinished tests, backup & restore, read-aloud (English and Hindi)
- No internet, accounts, ads or tracking; progress stays on the device

## Use it
- **Single file:** copy [`Olympiad-Practice.html`](Olympiad-Practice.html) to the iPad and open it in an HTML viewer app.
- **Home Screen app:** open the GitHub Pages site in Safari → Share → **Add to Home Screen** (works offline after the first visit).

See [HOW-TO-USE-ON-IPAD.md](HOW-TO-USE-ON-IPAD.md) for step-by-step instructions.

## Edit / add questions
Questions live in `questions-grade6.js` (`[topic, question, [CORRECT, wrong, wrong, wrong], explanation]`).
The app source is `app.html`. After editing, run:

```bash
node build.js
```

This rebuilds `Olympiad-Practice.html` (single file) and `index.html` + offline files for GitHub Pages.
