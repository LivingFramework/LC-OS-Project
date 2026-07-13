# Template Status Guide

**Purpose:** Classify each LC-OS template by its current relevance for modern AI tools.

**Last updated:** 2026-07-13

---

## Status labels

| Status | Meaning |
|---|---|
| **Core** | Still broadly useful for modern AI work. Recommended when the condition applies. |
| **Conditional** | Useful in some workflows, but not needed for every user. |
| **Advanced** | For complex, long-running, multi-domain, or high-stakes work. |
| **Research / Audit** | Mainly for traceability, evaluation, or research-grade use. |
| **Legacy wording** | Concept remains useful, but older wording may assume weaker AI memory than users now have. |

---

## Current template classification

| Template / guide | Status | Modern use |
|---|---|---|
| Running Document | **Core** | Shared project state. Can live inside an AI project, uploaded file area, shared doc, or local folder. |
| Canonical Numbers | **Core when numbers matter** | Authoritative source for budgets, targets, dates, assumptions, metrics, and calculations. |
| Failure Log | **Conditional** | Use when failures recur, work is high-stakes, or you need learning over time. Not required for every casual project. |
| Strategy Master | **Advanced** | Use for long-term principles, boundaries, multi-domain work, or decisions that should not be reopened each session. |
| Repair Protocol | **Core concept / Conditional document** | The Stop → Diagnose → Rollback → Note sequence remains useful. A formal document is only needed when failures are material. |
| Stability Ping | **Conditional** | Useful after milestones, long gaps, handoffs, or moments where drift is suspected. Not necessarily needed every session. |
| Challenge Protocol | **Advanced / High-value** | Useful when the AI must challenge assumptions, verify reasoning, or disagree productively. Consider using it as a verification protocol. |
| Affective Governance | **Advanced / Optional** | Useful when tone, trust, emotional load, or dependency dynamics matter. Not needed for purely mechanical tasks. |
| TraceSpec | **Research / Audit** | Use for detailed failure analysis, research, audit trails, or high-stakes workflows. Not for ordinary users by default. |
| Weekly Review Checklist | **Conditional** | Useful for active projects. Frequency can be weekly, milestone-based, or after major changes. |
| Consistency Guide | **Conditional / Maintenance** | Useful when the system starts decaying or becoming too heavy. |
| Worked Examples | **Core learning material** | Still valuable as examples, but users should adapt them rather than copy them rigidly. |

---

## What changed since the original LC-OS toolkit

The original toolkit assumed that most AI sessions were effectively stateless. That assumption is no longer always true.

Many users now work inside AI project spaces or tools with memory, uploaded files, custom instructions, connectors, and longer context windows. Because of that, LC-OS should be understood as a governance layer rather than a replacement for platform features.

The toolkit is still relevant, but the default should be lighter:

1. Use native AI workspace features first.
2. Add LC-OS artefacts where accuracy, continuity, or auditability matter.
3. Treat the full toolkit as advanced, not default.
4. Retain formal logs and protocols for work where failures are costly.

---

## Rule of thumb

If the AI workspace already keeps context well, you may not need to paste a Running Document every time.

But if the work contains stable decisions, numbers, citations, boundaries, or commitments, those should still live in a human-visible authoritative artefact.

Native memory is convenient.

Canonical documents are accountable.
