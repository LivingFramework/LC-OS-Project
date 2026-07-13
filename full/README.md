# Full LC-OS Toolkit

**Advanced governance for complex, high-stakes, or long-running human–AI collaboration.**

---

## What this is

The Full toolkit is no longer the default starting point.

It is the advanced LC-OS path for work where lightweight project memory is not enough.

Use it when the collaboration is complex, long-running, multi-domain, high-stakes, emotionally sensitive, or needs clear auditability.

If you are new to LC-OS, start with [Minimal](../minimal/) and upgrade only when the work requires it.

---

## What changed in the modern AI context

Modern AI tools increasingly support project spaces, uploaded files, saved memory, custom instructions, connectors, longer context windows, and agentic workflows.

That means some users no longer need to manually recreate context every session.

But advanced workflows still need explicit governance when:

- the AI can act across files or tools
- multiple domains or projects interact
- strategic decisions must remain stable
- numerical claims must be authoritative
- disagreements need structured resolution
- trust, tone, or emotional dynamics affect the work
- failures must be reconstructed later

The Full toolkit exists for those situations.

---

## Use this tier if

- you are working across multiple domains or pillars
- the project spans weeks or months
- accuracy, auditability, or recovery matter
- previous AI errors have caused rework or trust damage
- you need the AI to challenge assumptions, not just comply
- you need stable principles and boundaries across sessions
- the work involves sensitive personal, strategic, financial, research, or client material

Do not use this tier if Minimal already protects the work.

---

## Contents

### Core authoritative files

| File | Status | Purpose |
|---|---|---|
| [STRATEGY-MASTER-TEMPLATE.md](./STRATEGY-MASTER-TEMPLATE.md) | Advanced | Long-term principles, boundaries, policies, and strategic logic |
| [canonical-numbers-template.md](./canonical-numbers-template.md) | Core when numbers matter | Numeric truth — budgets, targets, metrics, assumptions, calculations |
| [running-document-template.md](./running-document-template.md) | Core | Active project state, decisions, corrections, and current context |

These files separate different kinds of truth:

```text
STRATEGY MASTER
  Stable principles, boundaries, policies
        ↓ informs
CANONICAL NUMBERS
  Authoritative numeric truth
        ↓ referenced by
RUNNING DOCUMENT
  Current project/session state
```

In a modern AI workspace, these may live as uploaded project files, connected documents, GitHub files, shared docs, or local files. The location is flexible. The authority relationship is not.

---

### Failure tracking

| File | Status | Purpose |
|---|---|---|
| [failure-log-template.md](./failure-log-template.md) | Conditional | Track meaningful failures and repairs |

Use the Failure Log when failures are repeated, costly, or worth learning from.

---

### Worked examples

| File | Shows |
|---|---|
| [running-document-worked-example.md](./running-document-worked-example.md) | Filled-in Running Document |
| [canonical-numbers-worked-example.md](./canonical-numbers-worked-example.md) | Filled-in Canonical Numbers file |
| [failure-log-worked-example.md](./failure-log-worked-example.md) | Failure Log with pattern analysis |

Examples are patterns to adapt, not forms to copy rigidly.

---

### Protocols and guides

| File | Status | Purpose |
|---|---|---|
| [repair-protocol.md](./repair-protocol.md) | Core concept / conditional document | Stop → Diagnose → Rollback → Note |
| [stability-ping-template.md](./stability-ping-template.md) | Conditional | Alignment checks after milestones, gaps, or drift signals |
| [challenge-protocol.md](./challenge-protocol.md) | Advanced / high-value | Structured disagreement, verification, and assumption-testing |
| [affective-governance.md](./affective-governance.md) | Advanced / optional | Tone, trust, and emotional stability rules |

---

### Research / audit grade

| File | Status | Purpose |
|---|---|---|
| [tracespec-schema.md](./tracespec-schema.md) | Research / audit | Detailed failure schema for traceable analysis |

TraceSpec is not for ordinary onboarding. Use it when the collaboration itself needs to be inspected, studied, or audited.

---

## How to adopt Full

### If coming from Minimal

You already have the Running Document and perhaps Canonical Numbers or a Failure Log.

Upgrade in this order:

1. Add a Strategy Master if long-term principles or boundaries are being re-debated
2. Formalise the Repair Protocol if failures are costly
3. Add Stability Pings after milestones or long gaps
4. Use the Challenge Protocol when verification and disagreement matter
5. Add Affective Governance only if tone, trust, or emotional load affects the work
6. Use TraceSpec only if you need audit-grade failure analysis

---

### If starting fresh

Do not start with everything unless the project is clearly high-stakes.

Recommended fresh-start path:

1. Create a Running Document
2. Add Canonical Numbers if numbers matter
3. Add Strategy Master only if durable principles and boundaries matter
4. Add Repair Protocol before the first major failure, not after repeated damage
5. Keep the rest optional until the work asks for it

---

## The modern LC-OS stack

```text
NATIVE AI WORKSPACE
  Project files, memory, connectors, chats, tools
        ↓ supported by
LC-OS AUTHORITATIVE ARTEFACTS
  Running Document, Canonical Numbers, Strategy Master
        ↓ corrected by
REPAIR AND REVIEW
  Stop → Diagnose → Rollback → Note; Stability Ping
        ↓ strengthened by
CHALLENGE AND GOVERNANCE
  Challenge Protocol, Affective Governance, TraceSpec when needed
```

Native AI features make collaboration smoother.

LC-OS artefacts make it governable.

---

## Principles to remember

1. **Use the lightest effective structure** — do not over-govern simple work
2. **Native memory is not canonical truth** — keep important state human-visible
3. **Numbers need a home** — if numbers matter, use Canonical Numbers
4. **Repair is normal** — mistakes should be visible and recoverable
5. **Challenge improves trust** — structured disagreement is safer than passive agreement
6. **Tone can be load-bearing** — affective governance matters when emotional dynamics affect work
7. **Full LC-OS is advanced** — use it when justified by complexity, risk, or duration

---

## When to simplify

Simplify if:

- you spend more time maintaining documents than doing the work
- protocols feel performative rather than protective
- failures are rare and low-cost
- the AI workspace already handles the context well
- users avoid the system because it feels too heavy

LC-OS should fade into the background when it works.

If it constantly demands attention, reduce the level.

---

## Related guidance

- [ADOPTION_LEVELS.md](../ADOPTION_LEVELS.md)
- [TEMPLATE_STATUS.md](../TEMPLATE_STATUS.md)
- [MODERN_AI_NOTE.md](../MODERN_AI_NOTE.md)
- [2026_RELEVANCE_AUDIT.md](../2026_RELEVANCE_AUDIT.md)

---

*Full LC-OS is not the starting point. It is the protective layer for work that has outgrown Minimal.*
