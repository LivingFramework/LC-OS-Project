# Minimal LC-OS

**The default starting point for modern AI workspaces.**

---

## What this is

Minimal LC-OS is the lightweight version of the toolkit.

Use it when your work spans more than one session and you want important context, decisions, and numbers to stay stable without adopting the full governance system.

Modern AI tools may already offer project spaces, memory, uploaded files, and connectors. Minimal LC-OS does not replace those features. It gives them a clearer human-visible structure.

---

## When to use Minimal

Use Minimal when:

- the project will continue over multiple sessions
- you need decisions to persist
- there are important numbers, dates, or assumptions
- you want a simple way to recover from mistakes
- the full toolkit would be too heavy

Skip Minimal when:

- the task is short and low-risk
- your AI workspace already handles the context well enough
- there are no stable decisions or numbers to preserve

---

## The three templates

### 1. Running Document

**Status:** Core

This is the current state of the project.

It records:

- what the project is
- what has been decided
- what constraints apply
- what changed recently
- what the AI should not forget

It can live inside an AI project, shared document, local folder, GitHub repo, or knowledge base.

→ [running-document-template.md](./running-document-template.md)

---

### 2. Canonical Numbers

**Status:** Core when numbers matter

This is the source of truth for numerical claims.

Use it for:

- budgets
- deadlines
- prices
- rates
- metrics
- assumptions
- calculated outputs

If numbers do not matter, skip this at first. If numbers matter, do not rely on model memory.

→ [canonical-numbers-template.md](./canonical-numbers-template.md)

---

### 3. Failure Log

**Status:** Conditional

Use this when something meaningful breaks.

Not every tiny mistake needs logging. Use the Failure Log when:

- the same issue repeats
- the failure causes rework
- trust is damaged
- the cause matters for future prevention
- the project is high-stakes enough to require traceability

→ [failure-log-template.md](./failure-log-template.md)

---

## How to use Minimal

### First setup

1. Create or upload the Running Document in your chosen workspace
2. Add Canonical Numbers only if numbers matter
3. Keep the Failure Log available, but do not force yourself to use it immediately
4. Tell the AI which artefacts are authoritative

Example instruction:

```text
We are using Minimal LC-OS.
The Running Document is the authoritative project state.
If numbers matter, Canonical Numbers is the only authoritative source for numerical claims.
If something breaks, we will use Stop → Diagnose → Rollback → Note.
```

---

### Every session

You do **not** always need to paste the full Running Document.

Instead, make sure the AI has access to the current authoritative state. Depending on the tool, that may mean:

- the document is already inside the AI project
- the document is attached to the chat
- the relevant section is pasted into the session
- the AI is connected to the folder where the file lives

Then work normally.

Update the Running Document only when something important changes.

---

### When things break

Use the lightweight repair habit:

```text
Stop → Diagnose → Rollback → Note
```

If the failure is meaningful, add it to the Failure Log.

If the failure is small and already fixed, a short correction in the Running Document may be enough.

---

## What you should notice

After a few sessions:

- less re-explaining of context
- fewer contradictions about prior decisions
- more stable numbers and assumptions
- faster recovery when something goes wrong
- clearer separation between AI convenience and project authority

---

## When to upgrade to Full

Move to the [Full toolkit](../full/) only when Minimal is no longer enough.

Upgrade if:

- the project spans multiple domains or pillars
- boundaries and long-term principles matter
- you need structured challenge or verification
- failures are frequent or costly
- tone, trust, or emotional dynamics matter
- auditability becomes important

Do not upgrade out of enthusiasm. Upgrade when the work asks for it.

---

## Related guidance

- [ADOPTION_LEVELS.md](../ADOPTION_LEVELS.md) — choose Level 0–4
- [TEMPLATE_STATUS.md](../TEMPLATE_STATUS.md) — current relevance of each template
- [MODERN_AI_NOTE.md](../MODERN_AI_NOTE.md) — how LC-OS adapts to modern AI tools

---

*Start simple. Add structure only when it protects the work.*
