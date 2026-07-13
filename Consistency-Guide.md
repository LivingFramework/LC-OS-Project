# Consistency & Discipline Guide

**What this is:** Practical guidance for keeping LC-OS useful over time without turning it into bureaucracy.

The hardest part of any governance system is not starting. It is keeping the system current when the work gets busy.

---

## The modern decay pattern

Modern AI tools may keep project files, memories, chats, and instructions. That helps, but it does not automatically keep the project governed.

A typical decay pattern now looks like this:

```text
Week 1:  AI workspace and LC-OS artefacts are current. Work flows well.
Week 3:  Some decisions happen in chat but not in the authoritative documents.
Week 6:  AI memory/project context diverges from the Running Document.
Week 10: Nobody knows which source is current. Governance becomes theatre.
```

LC-OS breaks this pattern with one rule:

> **Important changes must be written into the authoritative artefact, not left only in chat or memory.**

Native AI memory is convenient.

Canonical LC-OS artefacts are accountable.

---

## The three maintenance levels

### Level 1 — Per-session or per-milestone update

After any AI session or milestone that produced a decision, correction, or number change:

1. Update the Running Document if project state changed
2. Update Canonical Numbers if any number changed
3. Add a correction if the AI or human got something materially wrong
4. Log a failure only if it is meaningful enough to learn from

**Total time:** usually 2–5 minutes.

Do not update documents just to prove diligence. Update them when future work depends on the change.

---

### Level 2 — Periodic review

Use `Weekly-Review-Checklist.md` as a review ritual.

**When:** weekly, milestone-based, or after a long gap.

**Minimum useful rule:** review before important output, handoff, or decision.

**Red line:** do not let important project state live only in chat history or AI memory.

---

### Level 3 — Strategy checkpoint

Run this monthly, after major project changes, or when the work feels strategically unstable.

1. Read the Strategy Master if you use one
2. Ask: “Is this still accurate?”
3. Review repeated failures or drift patterns
4. Check whether success criteria or boundaries changed
5. Decide whether to simplify or upgrade the LC-OS level

---

## Common consistency failures and fixes

### “I forget to update the files”

**Fix:** make it a closing ritual, not an extra task.

Before ending a meaningful session, ask:

```text
Did we make a decision?
Did a number change?
Did we correct an important mistake?
Does future work depend on anything from this session?
```

If yes, update the relevant artefact.

---

### “The AI remembers something, but I cannot tell where it came from”

**Fix:** do not treat native AI memory as an authority source.

If a remembered fact matters, move it into the Running Document, Canonical Numbers, or Strategy Master.

Ask:

```text
Is this an actual project decision, number, boundary, or preference?
If yes, where is the authoritative record?
```

If there is no record, create one.

---

### “The AI is using old context”

**Fix:** check the source chain.

The issue may be:

- the Running Document is stale
- the AI project has an old uploaded file
- the current chat does not have access to the right document
- a memory conflicts with the current artefact
- the user made a decision in chat but never updated the document

Repair sequence:

1. Identify the current authoritative version
2. Update or replace stale files in the AI workspace
3. Tell the AI which source wins
4. Add a correction note if the drift caused real rework

Session instruction:

```text
Use the current Running Document as authoritative project state.
If your memory or prior chat conflicts with this document, the document wins.
```

---

### “My Canonical Numbers file is getting unwieldy”

**Fix:** archive superseded values rather than deleting them.

Mark old rows as `[SUPERSEDED: replaced by X on DATE]` and move them to a History section. The working section stays clean; the history is preserved.

Example:

```markdown
| Price | $9/month | Current |
| ~~Price~~ | ~~$12/month~~ | [SUPERSEDED: changed 2026-02-12, see above] |
```

---

### “I make decisions in sessions but do not log them”

**Fix:** ask the AI for a decision summary before closing.

Prompt:

```text
Summarize only the decisions, changed assumptions, confirmed numbers, and open questions from this session. Do not summarize everything we discussed.
```

Then copy only the durable items into the Running Document or Canonical Numbers.

---

### “The Strategy Master keeps changing”

**Fix:** mark unstable strategy as draft.

If the strategic logic is not settled:

1. Mark it `DRAFT`
2. Do not treat it as authoritative
3. Use it as context until validated
4. Promote it to `ACTIVE` only when stable

An unstable Strategy Master is better than a false stable one.

---

### “The Failure Log feels punishing”

**Fix:** use it only for meaningful learning.

A Failure Log is not a shame file. It records where the system improved.

Do not log every tiny error. Log failures when they are repeated, costly, trust-damaging, or likely to recur.

---

## The modern session close checklist

```text
Before ending a meaningful AI work session:

□ Did we make a durable decision?
   → Add it to the Running Document.

□ Did any number, date, target, or assumption change?
   → Update Canonical Numbers.

□ Did the AI rely on stale, wrong, or conflicting context?
   → Correct the authoritative artefact and, if needed, replace stale project files.

□ Did something meaningful break?
   → Use Stop → Diagnose → Rollback → Note.
   → Add to Failure Log if useful.

□ Is the next session likely to start with the right context?
   → If not, update the project state now.
```

---

## The “Is my AI context current?” test

Before important work, ask:

1. Does the AI have access to the latest Running Document?
2. Are current numbers in Canonical Numbers?
3. Are there stale uploaded files or old project instructions?
4. Has anything important been decided only in chat?
5. If the AI’s memory conflicts with the artefact, have I told it which source wins?

If any answer is unclear, fix that before continuing.

---

## What good governance feels like

- The AI workspace is convenient, but not the only source of truth
- Sessions start quickly because current state is available
- Numbers are checked against Canonical Numbers
- Decisions are traceable
- Failures are caught and repaired without drama
- The system feels lighter over time, not heavier

---

## What bad governance feels like

- You cannot tell whether chat, memory, or document is current
- The AI confidently uses old numbers or outdated assumptions
- Decisions are remembered differently by different tools
- You maintain documents nobody uses
- The process feels like paperwork rather than protection

---

*The files are not the work. They are the visible authority layer that keeps the work reliable.*
