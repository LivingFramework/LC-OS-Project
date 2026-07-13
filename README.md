# LC-OS Project

**Risk-calibrated governance templates for modern human–AI collaboration**

> 🌐 **[Full documentation and assessment tool → livingframework.github.io](https://livingframework.github.io/)**

---

## Start Here

LC-OS Project is the practical toolkit for applying the LC-OS research programme.

It is **not** a software platform and it is **not** a rigid template system. It is a set of lightweight governance artefacts that help humans and AI systems keep long-horizon work coherent, traceable, and repairable.

Modern AI tools now often include project spaces, memory, uploaded files, longer context windows, connectors, and agentic workflows. That changes how LC-OS should be used.

The updated rule is simple:

> Use native AI workspace features for convenience. Use LC-OS artefacts for authority, continuity, repair, and auditability.

---

## What changed since the original toolkit?

The original LC-OS toolkit was built when most AI collaboration happened in short-lived chat sessions. At that time, users often had to manually re-share context at the start of every session.

That is no longer universally true.

Many users now work inside AI project spaces or tools with persistent files, memory, custom instructions, and connectors. These features reduce friction, but they do not solve every governance problem.

AI can now remember more.

But serious work still needs clarity about:

- which source is authoritative
- where numbers come from
- what decisions have been made
- what changed since last time
- what to do when something goes wrong
- how to recover trust after drift or error

See: [MODERN_AI_NOTE.md](./MODERN_AI_NOTE.md)

---

## Choose the right LC-OS level

Do not adopt the full toolkit by default. Choose the lightest level that protects the work.

| Level | Use when | Recommended structure |
|---|---|---|
| **Level 0 — Native AI Workspace Only** | Short, low-risk work | AI project/chat/files only |
| **Level 1 — Light LC-OS** | Multi-session work where decisions need to persist | Running Document; optional Canonical Numbers |
| **Level 2 — Governed LC-OS** | Accuracy, numbers, citations, or repeat failures matter | Running Document, Canonical Numbers, Failure Log, Repair Protocol |
| **Level 3 — Full LC-OS** | Long-running, multi-domain, high-stakes work | Full toolkit including Strategy Master and protocols |
| **Level 4 — Research / Audit Mode** | Work must be reconstructable or studied | Full stack plus TraceSpec and explicit review history |

See: [ADOPTION_LEVELS.md](./ADOPTION_LEVELS.md)

---

## Recommended path for most users

Most users should start here:

1. Read [QUICK-START.md](./QUICK-START.md)
2. Choose an adoption level from [ADOPTION_LEVELS.md](./ADOPTION_LEVELS.md)
3. Start with [minimal/](./minimal/) unless your project is complex or high-stakes
4. Add templates only when the need appears
5. Use [TEMPLATE_STATUS.md](./TEMPLATE_STATUS.md) to decide what is core, optional, advanced, or research-grade

The old mistake would be: “Adopt everything because governance is good.”

The modern LC-OS rule is: **add structure only when it protects the work more than it burdens the user.**

---

## What LC-OS is for

LC-OS is for work where at least one of these matters:

- the project spans multiple sessions
- decisions need to persist
- numbers must remain stable
- sources or citations must be traceable
- work crosses multiple domains or tools
- mistakes are costly
- the AI may act across files, repositories, calendars, or documents
- failures need to be visible and repairable

If none of these apply, you may not need LC-OS. Use your AI tool’s native project features and keep moving.

---

## Core concepts in modern form

### Running Document

A human-visible record of current project state: objective, decisions, constraints, open questions, and corrections.

It can live inside an AI project, a shared document, GitHub, Notion, Obsidian, Google Drive, or a local folder.

The important thing is not where it lives. The important thing is that it is current, findable, and authoritative.

### Canonical Numbers

One source of truth for important numbers: budgets, dates, rates, assumptions, metrics, targets, calculations, and thresholds.

Model improvements do not eliminate numeric drift. If numbers matter, Canonical Numbers remains one of the strongest LC-OS practices.

### Failure Log

A record of meaningful failures and repairs.

This is no longer required for every casual project. Use it when failures recur, work is high-stakes, or you want the collaboration to learn from breakdowns.

### Repair Protocol

A simple recovery habit:

```text
Stop → Diagnose → Rollback → Note
```

Still useful. It can be informal for normal work and formal for high-stakes work.

### Strategy Master

A stable document for long-term principles, boundaries, policies, and strategic logic.

Use it for multi-domain or long-running projects. Skip it for simple work.

---

## Fastest start

If you have Node.js:

```bash
node scripts/init-project.js
```

The script creates either a Minimal or Full project structure.

If you do not use Node.js, follow [QUICK-START.md](./QUICK-START.md).

---

## Toolkit paths

### Minimal — recommended default

Three templates. Low friction. Best for ordinary multi-session projects.

→ [Go to Minimal](./minimal/)

### Full — advanced / high-stakes

Complete governance toolkit with Strategy Master, repair, challenge, stability, affective governance, and TraceSpec.

Use this when the project is complex enough to justify the overhead.

→ [Go to Full](./full/)

---

## Template status

The templates are now classified by current relevance:

| Template / guide | Current status |
|---|---|
| Running Document | Core |
| Canonical Numbers | Core when numbers matter |
| Failure Log | Conditional |
| Repair Protocol | Core concept / conditional document |
| Stability Ping | Conditional |
| Strategy Master | Advanced |
| Challenge Protocol | Advanced / high-value |
| Affective Governance | Advanced / optional |
| TraceSpec | Research / audit |
| Weekly Review | Conditional |
| Consistency Guide | Maintenance |

See: [TEMPLATE_STATUS.md](./TEMPLATE_STATUS.md)

---

## See it in action

The `examples/` folder contains filled-in governance files across domains:

| Example | What it shows |
|---|---|
| [Marketing Campaign](./examples/marketing-campaign/) | Numbers governance, ICP enforcement, paid channel failure |
| [Research Paper](./examples/research-paper/) | Citation discipline, hallucination prevention, terminology lock |
| [Client Onboarding](./examples/client-onboarding/) | Scope control, commitment tracking, confidentiality |
| [Personal Productivity](./examples/personal-productivity/) | Pillar separation, personal boundaries, life system drift |
| [History & Evolution](./examples/history-evolution/) | How files change over time |

Treat examples as patterns to adapt, not rigid forms to copy.

---

## Maintaining the system

Once started, these files help keep the system from decaying:

- [Weekly Review Checklist](./Weekly-Review-Checklist.md) — review ritual; can be weekly or milestone-based
- [Consistency & Discipline Guide](./Consistency-Guide.md) — common decay patterns and repairs

---

## What LC-OS does not do

- It does not make the AI inherently correct
- It does not replace human judgment
- It does not remove the need to check important outputs
- It does not require every template for every project
- It should not become bureaucracy

What it does: create conditions where important context, numbers, decisions, and failures are visible, contained, and repairable.

---

## Background reading

The toolkit is based on the LC-OS research corpus:

→ [LC-OS Research Papers](https://github.com/LivingFramework/LC-OS)

The Practitioners Guide is also available as Markdown:

→ [Practitioners Guide](./references/Practitioners_Guide.md)

The 2026 repo modernization audit is here:

→ [2026_RELEVANCE_AUDIT.md](./2026_RELEVANCE_AUDIT.md)

---

## What is in this repo

```text
LC-OS-Project/
├── MODERN_AI_NOTE.md          ← How LC-OS adapts to modern AI memory/project features
├── ADOPTION_LEVELS.md         ← Choose Level 0–4
├── TEMPLATE_STATUS.md         ← Current relevance of each template
├── 2026_RELEVANCE_AUDIT.md    ← Modernization audit
├── scripts/                   ← Automated project setup
├── minimal/                   ← Default lightweight templates
├── full/                      ← Advanced/high-stakes toolkit
├── examples/                  ← Filled-in examples by domain
├── references/                ← Practitioner guide and background material
├── Weekly-Review-Checklist.md
├── Consistency-Guide.md
├── QUICK-START.md
└── README.md
```

---

## The Living Framework Ecosystem

| | Resource | What it contains |
|--|---|---|
| 🌐 | [Website](https://livingframework.github.io/) | Full documentation, AI readiness assessment, quick-start guide |
| 📚 | [LC-OS Research](https://github.com/LivingFramework/LC-OS) | Research corpus, papers, Mahdi Ledger, research architecture |
| 🛠️ | [LC-OS Project](https://github.com/LivingFramework/LC-OS-Project) | Practical templates, examples, and adoption paths |
| ⚙️ | [Cowork Templates](https://github.com/LivingFramework/LivingFramework.github.io) | Governance templates optimised for Claude Cowork |

---

## License

CC BY 4.0 — Use freely, adapt as needed, attribution appreciated.

---

*Stability is not the absence of failure; it is the capacity for visible, structured repair.*
