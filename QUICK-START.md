# Quick Start Guide

**Get LC-OS running in 30 minutes.**

---

## Fastest Path: Automated Setup

If you have Node.js (v18+) installed:

```bash
node scripts/init-project.js
```

The script asks 3 questions and creates your project folder, pre-filled with your
project name and date. Choose Minimal (3 files) or Full (complete toolkit).

→ [See full instructions](./scripts/README.md)

If you don't have Node.js, continue with the manual steps below.

---

## What You Need (Manual Path)

- An AI assistant (ChatGPT, Claude, Gemini, or similar)
- A place to store files (local folder, cloud drive, or GitHub)
- A project that will span multiple sessions

---

## Step 1: Create Your Running Document (10 minutes)

Copy the template from `minimal/running-document-template.md`

Fill in:
- Project name
- What you are trying to accomplish
- Any constraints or rules that apply
- Key decisions already made

This is your shared memory. Everything important goes here.

**See a fully filled-in example:** `examples/marketing-campaign/running-document.md`

---

## Step 2: Create Your Canonical Numbers File (5 minutes)

Copy the template from `minimal/canonical-numbers-template.md`

Add any numbers that matter:
- Budgets
- Deadlines  
- Targets
- Rates or prices

If a number is not in this file, it is not authoritative.

**See a fully filled-in example:** `examples/research-paper/canonical-numbers.md`

---

## Step 3: Start Your First Session (5 minutes)

Begin your AI session with:

```
Here is our Running Document for this project. Please read it before we begin.

[Paste or attach your Running Document]

Key rules:
- Reference this document for context and decisions
- All numbers come from the Canonical Numbers file only
- If something is unclear, ask one clarifying question then proceed
```

---

## Step 4: Work Normally

Do your work as usual. The difference:

- When you make a decision, note it in the Running Document
- When you confirm a number, add it to Canonical Numbers
- When the AI forgets context, point it back to the Running Document

---

## Step 5: When Something Goes Wrong

Do not push through. Use this sequence:

1. **Stop** — Pause the current task
2. **Diagnose** — What went wrong and why?
3. **Rollback** — Return to the last correct state
4. **Note** — Log the failure and update documents

Then continue from the stable state.

**See real examples of this in action:** `examples/research-paper/failure-log.md`

---

## Step 6: End of Session

Before closing:

- Update the Running Document with any new decisions
- Add any new numbers to Canonical Numbers
- Note any failures in your Failure Log

This takes 2–3 minutes and saves significant time in future sessions.

**For a structured version of this ritual:** See `Weekly-Review-Checklist.md`

---

## What You Will Notice

After a few sessions:

- Less time re-explaining context
- Fewer numerical inconsistencies  
- Clearer sense of what has been decided
- Faster recovery when things go wrong

These gains compound over time.

---

## Next Steps

**If minimal is working:** Continue with minimal. Do not add complexity you do not need.

**If you want more structure:** Explore the `full/` folder for:
- Repair Protocol (structured recovery)
- Stability Pings (alignment checks)
- Challenge Protocol (productive disagreement)
- Affective Governance (tone management)

**If failures are frequent:** Start using the Failure Log template to track patterns.
See the example failure logs in `examples/` for what good failure documentation looks like.

**If you want to see how other people use this:** Read the examples:
- Business: `examples/marketing-campaign/`
- Research: `examples/research-paper/`
- Client work: `examples/client-onboarding/`
- Personal: `examples/personal-productivity/`

**If you want to understand how files evolve:** `examples/history-evolution/`

---

## Common Questions

**Which AI does this work with?**
Any conversational AI: ChatGPT, Claude, Gemini, and others. The principles are model-agnostic.

**Do I need to share the full Running Document every session?**
Yes, at the start of each new session. The AI does not remember between sessions by default.

**What if my project is simple?**
You might not need LC-OS. It is designed for work that spans multiple sessions where consistency matters.

**Can I modify the templates?**
Yes. Adapt them to your needs. The structure is a starting point, not a rigid requirement.

**How do I keep the system from decaying?**
Run the weekly review (`Weekly-Review-Checklist.md`) once a week. Read the
`Consistency-Guide.md` for the most common failure modes and how to prevent them.

---

## One-Page Summary

```
FASTEST START
  node scripts/init-project.js

BEFORE EACH SESSION
  Share Running Document with AI

DURING SESSION  
  Reference documents for context
  Note decisions as they are made
  Numbers only from Canonical Numbers

WHEN THINGS BREAK
  Stop → Diagnose → Rollback → Note

END OF SESSION
  Update Running Document
  Log any failures

ONCE A WEEK
  Run Weekly-Review-Checklist.md (15 min)
```

That is LC-OS at its simplest.

---

*Start here. Add structure only when you need it.*
