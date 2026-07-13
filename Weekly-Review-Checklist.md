# Review Checklist

**Purpose:** Keep LC-OS artefacts and AI workspace context aligned.

**When to run:** weekly, at major milestones, before important deliverables, or after a long gap.

**Time required:** 10–20 minutes depending on project size.

---

## Before you start

Open the artefacts you actually use:

- [ ] Running Document
- [ ] Canonical Numbers, if numbers matter
- [ ] Strategy Master, if you use one
- [ ] Failure Log, if failures are being tracked
- [ ] AI project/workspace files or instructions, if applicable

Do not review files you do not use. LC-OS should stay proportional to the project.

---

## Step 1 — Numbers audit

If you use Canonical Numbers, check:

- [ ] Are all current numbers still accurate?
- [ ] Did any number change since the last review?
- [ ] Did the AI use a number in output that is not in Canonical Numbers?
- [ ] Are any rows marked TBD, unverified, or needs follow-up?
- [ ] Are old values clearly superseded rather than silently deleted?

**Red flag:** A number appeared in a deliverable or decision but is not in Canonical Numbers.

---

## Step 2 — Running Document update

Check:

- [ ] Is the current objective still accurate?
- [ ] Is the current phase/status correct?
- [ ] Are durable decisions logged?
- [ ] Are resolved questions removed or marked resolved?
- [ ] Are new open questions captured?
- [ ] Are corrections or changed assumptions recorded?
- [ ] Is the “last updated” date current?

**Red flag:** Important decisions exist only in chat history or AI memory.

---

## Step 3 — AI workspace alignment

If you use an AI project, uploaded files, memory, or connectors, check:

- [ ] Is the latest Running Document available to the AI?
- [ ] Are stale uploaded files removed or replaced?
- [ ] Do project instructions still match the current workflow?
- [ ] Are there old memories, summaries, or assumptions that may conflict with the artefacts?
- [ ] Have you made clear that the authoritative artefact wins over prior chat or memory?

Suggested instruction:

```text
Use the current Running Document and Canonical Numbers as authoritative.
If your memory, prior chat, or older uploaded material conflicts with them, these files win.
```

---

## Step 4 — Strategy check

If you use a Strategy Master, check:

- [ ] Is the scope still accurate?
- [ ] Are the principles still correct?
- [ ] Are boundaries still valid?
- [ ] Did anything happen that challenges the strategy?
- [ ] Should any draft section be promoted to active, or active section moved back to draft?

**Red flag:** Strategy changes every week. That means it may still be discovery work, not stable governance.

---

## Step 5 — Failure and repair review

If you use a Failure Log, check:

- [ ] Did anything meaningful go wrong since the last review?
- [ ] Were there near-misses worth learning from?
- [ ] Are open failures resolved or still active?
- [ ] Did the same failure repeat?
- [ ] Did the repair update the relevant artefact?

**Reminder:** Near-misses can be as useful as failures. They show where the system caught something before it caused harm.

---

## Step 6 — Decide whether to simplify or upgrade

Ask:

- [ ] Is the current LC-OS level protecting the work?
- [ ] Is any document unused or burdensome?
- [ ] Has the project become risky enough to need more structure?
- [ ] Should we move down a level, stay where we are, or move up?

Use [ADOPTION_LEVELS.md](./ADOPTION_LEVELS.md) if unsure.

---

## Optional AI-assisted review

For complex projects, you can run the review with your AI.

Prompt:

```text
Help me run an LC-OS review.
Check for inconsistencies between the Running Document, Canonical Numbers, open questions, decisions, and project instructions.
Flag possible drift, but do not change anything without my approval.
```

The AI may suggest updates. The human decides what becomes authoritative.

---

## Signs the review is working

- Sessions start quickly because current state is available
- Numbers are stable and traceable
- Decisions are easy to reconstruct
- Stale project files get replaced before they cause drift
- Failures become less mysterious
- The system feels lighter, not heavier

---

## Signs the review has slipped

- The AI uses old numbers or assumptions
- You cannot tell whether chat, memory, or document is current
- The Running Document is stale
- Project instructions conflict with current practice
- You explain the same context repeatedly
- Failure repairs happen in conversation but not in the system

---

*Review only what matters. Keep the authority layer current.*
