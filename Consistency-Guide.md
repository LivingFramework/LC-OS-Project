# Consistency & Discipline Guide

**What this is:** Practical guidance for maintaining LC-OS governance over time.
The hardest part of any system isn't starting — it's continuing when you're busy.

---

## The Decay Pattern (and How to Break It)

Every governance system follows the same decay pattern without active maintenance:

```
Week 1:  Files current. AI has perfect context. Work flows well.
Week 3:  Files slightly stale. AI uses outdated context. Minor drift.
Week 6:  Files significantly stale. AI makes decisions based on old assumptions.
Week 10: Files abandoned. Governance is theater. Problems multiply.
```

LC-OS breaks this pattern with one rule:

> **Update the files before you close the session — not after, not later, now.**

This is the single most important discipline in the system.

---

## The Three Maintenance Levels

### Level 1: Per-Session (2 minutes)

After every AI session that produced a decision, correction, or number change:

1. Open the running document
2. Add any decisions made (even small ones) to the Decisions Log
3. Add any corrections to the Corrections section
4. Update "Last updated" date
5. If any number changed — open canonical numbers and update it

**Total time:** 2 minutes if you do it now. 20 minutes if you wait a week.

### Level 2: Weekly Review (15 minutes)

Use the `Weekly-Review-Checklist.md` to run a structured audit.

**When:** Once per week, same time every week.  
**Minimum acceptable:** Once every 10 days.  
**Red line:** Never let files go more than 2 weeks without review.

### Level 3: Strategy Checkpoint (30 minutes)

Run this monthly or after any significant project change.

1. Read your strategy master from start to finish
2. Ask: "Is this still accurate? Are these still the right principles?"
3. Review your failure log for patterns — are the same types of failures recurring?
4. Check if your success criteria are still the right targets

---

## Common Consistency Failures (and Fixes)

### "I forget to update the files"

**Fix:** Make it a closing ritual, not an extra task. Before you close your laptop
after a work session, your rule is: "Running document updated? Canonical numbers updated?"
Two checkboxes. Not a project. A habit.

---

### "The AI doesn't seem to remember our rules"

**Fix:** The AI doesn't have memory between sessions. Rules only persist if you put
them in the running document and share it at session start. If the AI is forgetting
something — ask yourself: "Is this in my running document?" It probably isn't.

**Session start template (copy-paste this):**
```
Here is my running document and canonical numbers for this project.
Please read both before we begin.

[paste running-document.md]
[paste canonical-numbers.md]

Let's continue from where we left off.
```

---

### "My canonical numbers file is getting unwieldy"

**Fix:** Archive superseded values rather than deleting them.

Mark old rows as `[SUPERSEDED: replaced by X on DATE]` and move them to a
"History" section at the bottom. The working section stays clean; the history
is preserved.

Example:
```markdown
| Price | $9/month | Current |
| ~~Price~~ | ~~$12/month~~ | [SUPERSEDED: changed 2026-02-12, see above] |
```

---

### "I make decisions in sessions but don't log them"

**Fix:** At the end of every session, before closing, ask:
"What decisions were made in this session?"

If you worked with AI, you can ask the AI directly:
"Summarize the decisions we made in this session so I can log them."

Log them in the running document before closing.

---

### "The strategy master keeps changing — it's always in draft"

**Fix:** This is a signal that your strategy isn't settled yet. That's fine —
but you should treat unstable strategy explicitly:

1. Mark it DRAFT in the Document Control section
2. Don't share it with the AI as if it's authoritative — share it as context
   with the caveat "this is still being defined"
3. Once you've validated the core logic (usually after first real user/customer
   data), promote it to ACTIVE

An unstable strategy master is better than a false stable one.

---

### "The failure log feels punishing — I don't want to log failures"

**Fix:** Reframe what the failure log is for.

The failure log is not a record of your mistakes. It is a record of your system
working. Every entry shows: something went wrong, you caught it, you fixed it,
you made the system better. That is not failure — that is engineering.

The projects without failure logs don't have fewer failures. They have less
visibility into failures, and the same mistakes repeat.

---

## The Two-Minute Session Close Checklist

Print this and keep it at your desk.

```
Before closing any AI work session:

□ Open running-document.md
□ Add any decisions made → Decisions Log
□ Add any corrections → Corrections section  
□ Update "Last updated" date

□ If any number changed:
  Open canonical-numbers.md
  Update the row(s)
  Add to version history section

□ If something went wrong:
  Add entry to failure-log.md

Total: 2 minutes
```

---

## The "Is My AI Context Current?" Test

Before starting any new AI session, ask yourself:

1. If I share my running document right now, does it reflect what's actually true?
2. If I share my canonical numbers right now, are all the numbers current?
3. Are there any decisions made since the last update that my AI doesn't know about?

If yes to any of these — update before starting. Two minutes now saves twenty
minutes of correction later.

---

## What Good Governance Feels Like (When It's Working)

- Sessions start quickly because context loading is fast
- The AI rarely asks you to re-explain things it already "knows"
- When the AI makes a mistake, you catch it quickly because you have reference documents
- Decisions feel traceable — you can always answer "why did we do this?"
- Failures are caught early and fixed cleanly
- You trust the system, so you offload more to it, so you work faster

---

## What Good Governance Feels Like (When It's Not)

- Every session starts with 10–15 minutes of re-context-setting
- The AI uses numbers or facts you've already corrected
- You're not sure which version of a decision is current
- Failures recur because they were fixed in conversation but not in the system
- You start to distrust the AI, so you do more yourself, so you work slower

---

*The files are not the work. They are the infrastructure that makes the work reliable.*
