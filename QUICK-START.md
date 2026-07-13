# Quick Start Guide

**Start with the lightest LC-OS structure that protects your work.**

---

## First: choose your level

Modern AI tools may already give you project spaces, uploaded files, memory, custom instructions, connectors, and longer context windows.

So do not assume you need the full LC-OS toolkit.

Choose your level:

| Level | Good for | Start with |
|---|---|---|
| **Level 0** | Short, low-risk tasks | Native AI project/chat only |
| **Level 1** | Multi-session work | Running Document |
| **Level 2** | Work with numbers, citations, or repeat errors | Running Document + Canonical Numbers + light repair |
| **Level 3** | Long-running or high-stakes projects | Full toolkit |
| **Level 4** | Research/audit workflows | Full toolkit + TraceSpec |

For details, see [ADOPTION_LEVELS.md](./ADOPTION_LEVELS.md).

---

## Fastest path: automated setup

If you have Node.js v18+ installed:

```bash
node scripts/init-project.js
```

The script asks three questions and creates either a Minimal or Full project folder.

→ [See script instructions](./scripts/README.md)

If you do not use Node.js, follow the manual path below.

---

## Manual path: recommended modern start

### Step 1 — Decide where project memory lives

Choose one place where the AI and human will look for project state:

- an AI project/workspace
- a shared document
- a local folder
- Google Drive, Notion, Obsidian, GitHub, or another knowledge base

The location matters less than the rule:

> There must be one visible, current, authoritative place for project state.

---

### Step 2 — Create a Running Document

Copy:

```text
minimal/running-document-template.md
```

Fill in:

- project name
- goal
- current state
- key decisions
- constraints
- open questions
- important corrections

This is your shared project state.

If your AI tool supports project files, upload or pin it there. If not, paste or attach it when needed.

---

### Step 3 — Add Canonical Numbers only if numbers matter

Copy:

```text
minimal/canonical-numbers-template.md
```

Use it for:

- budgets
- deadlines
- targets
- prices
- rates
- metrics
- assumptions
- source-backed calculations

If numbers do not matter in your project, skip this file at first.

---

### Step 4 — Start your first session

Use a short instruction like this:

```text
We are using a lightweight LC-OS setup for this project.

The Running Document is the authoritative project state.
Use it for current context, decisions, constraints, and corrections.

If numbers matter, use Canonical Numbers as the only authoritative source for numerical claims.
If something is unclear, ask briefly before proceeding.
```

Then work normally.

---

### Step 5 — Update only what changed

During or after the session:

- add new decisions to the Running Document
- add confirmed numbers to Canonical Numbers
- note corrections that should not be forgotten
- keep the files short enough to be usable

You do not need to write a diary of everything. Capture what future-you and future-AI need.

---

### Step 6 — When something goes wrong

Use the lightweight repair sequence:

```text
Stop → Diagnose → Rollback → Note
```

Meaning:

1. **Stop** — pause the current path
2. **Diagnose** — identify what drifted, broke, or was misunderstood
3. **Rollback** — return to the last reliable state
4. **Note** — update the Running Document or Failure Log so it does not recur

Use a formal Failure Log only when failures are repeated, costly, or worth learning from.

---

## Do I need to share the Running Document every session?

Not always.

If your AI tool has a project space or persistent file context, make sure the Running Document is available there and current.

If your AI tool does not reliably carry project state across sessions, paste or attach the Running Document at the start.

The rule is:

> The AI must have access to the current authoritative project state before doing important work.

How you provide that state depends on the tool.

---

## Next steps

**If Level 1 is enough:** stay with Minimal.

**If numbers, citations, or decisions keep drifting:** add Canonical Numbers and lightweight repair.

**If failures repeat:** add a Failure Log.

**If the project becomes long-running or multi-domain:** move to the [Full toolkit](./full/).

**If you need auditability:** read [TEMPLATE_STATUS.md](./TEMPLATE_STATUS.md) and consider TraceSpec.

---

## Common questions

### Which AI does this work with?

Any conversational AI or AI workspace: ChatGPT, Claude, Gemini, local models, agentic tools, or team AI systems.

### Is LC-OS still relevant if my AI has memory?

Yes, but use it differently.

Native memory is convenient. LC-OS artefacts are authoritative. Use native memory for flow; use documents for decisions, numbers, boundaries, and repair.

### What if my project is simple?

Use Level 0 or Level 1. You may not need LC-OS at all.

### Can I modify the templates?

Yes. Adapt them. The templates are starting points, not rules to obey blindly.

### How do I keep the system from becoming bureaucracy?

Use [ADOPTION_LEVELS.md](./ADOPTION_LEVELS.md). If a document is not protecting the work, simplify it or remove it.

---

## One-page summary

```text
CHOOSE LEVEL
  Start low. Add structure only when needed.

PROJECT STATE
  Keep one visible Running Document for important context and decisions.

NUMBERS
  If numbers matter, use Canonical Numbers as the authority.

WORKFLOW
  Use native AI project/memory features for convenience.
  Use LC-OS artefacts for authority.

WHEN THINGS BREAK
  Stop → Diagnose → Rollback → Note.

MAINTENANCE
  Review weekly, at milestones, or when drift appears.
```

That is modern LC-OS at its simplest.

---

*Start simple. Add structure only when it protects the work.*
