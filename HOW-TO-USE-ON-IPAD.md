# Olympiad Practice — putting it on the iPad (free, no App Store)

The whole app is **one file: `Olympiad-Practice.html`** (~116 KB). It contains every
question, works with no internet, has no ads or accounts, and saves progress on the iPad.

There are two free ways to get it onto the iPad. Try **Option A** first.

---

## Option A — Copy the file straight from the laptop (fully offline)

**Why you need a helper app:** iPad Safari will not open an `.html` file stored in the
Files app, so the file is opened in a free app that has a built-in browser and can open
files from Files. *Documents by Readdle* (free on the App Store) is one example;
any free "HTML viewer" app that runs JavaScript also works.
You don't pay anything and you don't need an Apple developer account.

### 1. Copy the file from the laptop to the iPad (pick one)
| Method | Steps |
|---|---|
| **USB cable** | Connect the iPad → open the **Apple Devices** app (or iTunes) on Windows → select the iPad → **Files** → drag `Olympiad-Practice.html` onto the viewer app. |
| **Cloud drive** | Put the file in iCloud Drive / OneDrive / Google Drive on the laptop → on the iPad open the **Files** app → find the file. |
| **Email to yourself** | Attach the file → on the iPad, open the email, tap the attachment → **Share → Save to Files**. |

### 2. Open it
In the viewer app, open (or import) `Olympiad-Practice.html`. Tap the **🏆 Olympiad Practice**
screen once to make sure it works.

### 3. Check that progress is saved (do this once)
Answer 2–3 questions → close the viewer app completely → open the file again.
Your answers should appear under **History**. If they don't, that viewer app doesn't keep
saved data, so try another viewer app or use Option B.

> **Tip:** Turn the iPad sideways for a 2-column answer layout. Use the 🔊 button to have
> questions read aloud (English and Hindi).

---

## Option B — Free website + "Add to Home Screen" (like a real app icon)

Use this if you'd rather have an app icon and full-screen mode. It's also free: you
use GitHub Pages, which you already planned for the Abacus app. You need internet
**once** to install; after that it runs offline.

1. The app is already on GitHub Pages. Open the site address (see the repository's **About** box) in **Safari** on the iPad.
2. Tap **Share → Add to Home Screen**.
3. Open it once from the new icon.
4. Done. It now opens from the Home Screen with no internet.

To update later: run `node build.js`, push to GitHub, change `CACHE` in `sw.js` to a new version (e.g. `olympiad-v2`), then open the app once while online.

---

## Keep your child's progress safe
Progress is stored only on that iPad, inside the app you opened it with.
- **Settings → 💾 Download backup** (or **Copy backup text** and paste it into Notes).
- Make a backup before replacing the file with a new version, then **Restore** from it.

## What's inside
- **7 subjects:** Math, Science, English, General Knowledge, हिंदी, Computers, Logical Reasoning
- **311 hand-written Grade 6 questions** with explanations, plus **unlimited auto-generated**
  Math and Reasoning questions
- **Practice** (instant answer + explanation) · **Mock Exam** (timed, pass/distinction, certificate)
  · **Weak-area drill** · **Fix my mistakes**
- **🎯 Weak Areas report** for each subject: topic-by-topic accuracy (last 20 answers),
  *Needs work / Improving / Strong*, a "How to coach" tip for every weak topic, recent
  mistakes, a one-tap drill, and a printable report
- Several children (profiles), history with CSV export, resume an unfinished test,
  adjustable timer/question count/pass marks, read-aloud

## Next year: Grade 7 (on the laptop)
1. Copy `questions-grade6.js` → `questions-grade7.js`, change `QB[6]` to `QB[7]`, and write the new questions
   (format: `[topic, question, [CORRECT, wrong, wrong, wrong], explanation]`; the correct answer always goes first).
2. In `app.html`, add `<script src="questions-grade7.js"></script>` under the Grade 6 line, and change
   `const GRADES = [6];` to `[6, 7]`.
3. Run `node build.js`, then copy the new `Olympiad-Practice.html` to the iPad (backup first!).
   In **Settings**, switch the child's grade to 7. Grade 6 progress stays saved.
