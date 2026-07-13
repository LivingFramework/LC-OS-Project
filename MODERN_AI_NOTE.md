# Modern AI Note

**Purpose:** Explain how LC-OS applies now that AI tools increasingly include memory, project spaces, uploaded files, connectors, and agentic workflows.

**Last updated:** 2026-07-13

---

## What changed

LC-OS was originally developed in a period when most AI collaboration happened inside short-lived chat sessions. In that environment, users often had to paste or attach the same context repeatedly, and external documents were the only reliable way to preserve continuity.

The AI landscape has moved quickly. Many modern AI tools now include some combination of:

- project spaces or workspaces
- uploaded files and persistent project knowledge
- saved memories or user preferences
- custom instructions
- connectors to email, calendars, drives, code repositories, and other systems
- longer context windows
- agentic workflows that can act across files or tools

These features reduce friction. They do **not** remove the need for governance.

---

## What did not change

Even with better models and more persistent AI products, long-horizon work still needs explicit control over:

- **canonical truth** — which source is authoritative?
- **numerical accuracy** — where do numbers come from?
- **decision history** — what was decided, when, and why?
- **scope boundaries** — what is inside or outside the project?
- **repair** — what happens when the AI or human makes an error?
- **auditability** — can the work be reconstructed later?

Modern AI memory is useful, but it is not the same as a governed record. A model may remember, summarize, retrieve, or infer context in ways the user cannot fully inspect. LC-OS keeps the important parts visible, editable, and accountable.

---

## Updated LC-OS position

The modern version of LC-OS is not:

> “AI has no memory, so you must maintain heavy documents.”

It is:

> “AI tools now have more memory and workspace features, so use the lightest external governance that protects the work.”

This repo should therefore be used as a **risk-calibrated toolkit**:

- simple projects may need only native AI workspace features
- ordinary multi-session projects may need a Running Document
- numerical or research-heavy projects may need Canonical Numbers
- high-stakes or failure-prone projects may need repair logs and review rituals
- complex, multi-domain, or audit-sensitive work may need the full LC-OS stack

---

## Where should LC-OS documents live?

They do not have to live in a separate folder anymore.

A Running Document, Canonical Numbers file, or Failure Log can live in:

- a ChatGPT Project or similar AI workspace
- a Claude Project or equivalent project knowledge area
- Google Drive, Notion, Obsidian, GitHub, or a local folder
- a team knowledge base
- a project management tool

The important question is not where the file lives. The important question is whether it remains:

1. findable,
2. current,
3. authoritative,
4. visible to the human,
5. available to the AI when needed.

---

## Practical rule

Use native AI memory for convenience.

Use LC-OS artefacts for authority.

When the two disagree, the artefact wins.
