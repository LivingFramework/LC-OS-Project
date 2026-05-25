# LC-OS Project

**A Lightweight Operating System for Long-Horizon Human–AI Collaboration**

> 🌐 **[Full documentation and assessment tool → livingframework.github.io](https://livingframework.github.io/)**

---

## The Problem

If you've worked with an AI assistant for more than a few days, you've probably noticed something:

- It forgets what you agreed on last week
- Numbers drift or get recalculated differently each time
- You end up re-explaining context every session
- Small misunderstandings compound into confusion
- What felt like a partnership starts feeling unreliable

This isn't a prompting problem. It's a **structural problem**.

AI systems don't retain memory across sessions by default. They optimise for fluent responses, not consistent ones. Without external structure, long-term collaboration quietly degrades — not through dramatic failure, but through slow drift.

---

## What LC-OS Is

LC-OS (Lean Collaboration Operating System) is a minimal set of practices and templates that stabilise long-horizon human–AI work.

It's not software. It's not a platform. It's a way of organising your collaboration so that:

- **Memory persists** — through documents you maintain, not model memory
- **Truth has a home** — one authoritative source for decisions and numbers
- **Failures become visible** — logged and traceable, not hidden
- **Repair is structured** — clear steps to recover when things break

The core insight: **reliability comes from governance, not capability**. A well-structured collaboration with a standard model outperforms an unstructured one with a frontier model.

---

## Who This Is For

LC-OS is for practitioners who:

- Work with AI assistants on projects spanning weeks or months
- Handle domains where accuracy matters (finance, research, planning, strategy)
- Have experienced drift, confusion, or trust breakdown in long collaborations
- Want a lightweight system, not heavy infrastructure

---

## Get Started in 3 Minutes (Automated)

The fastest way to start a new LC-OS project:

```bash
# Requires Node.js (v18+)
node scripts/init-project.js
```

The script asks 3 questions and creates a fully structured project folder — either
minimal (3 files) or full (complete toolkit with folder structure). No npm install needed.

→ [Full init script instructions](./scripts/README.md)

**No Node.js?** Use the manual path below.

---

## Two Manual Paths

### Minimal (Start Here)

Three templates. One page of guidance. Get running in 30 minutes.

Best if you want to test the approach before committing.

→ [Go to Minimal](./minimal/)

### Full

Complete toolkit with worked examples, repair protocols, failure logging, and governance rules.

Best if you're serious about sustained collaboration and want the full system.

→ [Go to Full](./full/)

---

## Core Concepts (60-Second Version)

**Running Document**  
A persistent file that captures decisions, rules, and corrections. Read by you and the AI at the start of each session. This *is* your shared memory.

**Canonical Numbers**  
One source of truth for all numerical data. The AI references it; it doesn't recalculate from memory. Eliminates a whole class of errors.

**Failure Logging**  
When something breaks, you log it: what happened, why, how it was fixed. Failures become learning, not embarrassment.

**Repair Protocol**  
A simple sequence when things go wrong: **Stop → Diagnose → Rollback → Note**. No drama. Just structured recovery.

**Stability Ping**  
A brief check-in after major milestones: Are we still aligned? Any drift? One improvement before continuing?

---

## See It In Action

The `examples/` folder contains fully filled-in governance files across four real domains:

| Example | What it shows |
|---------|---------------|
| [Marketing Campaign](./examples/marketing-campaign/) | Numbers governance, ICP enforcement, paid channel failure |
| [Research Paper](./examples/research-paper/) | Citation discipline, hallucination prevention, terminology lock |
| [Client Onboarding](./examples/client-onboarding/) | Scope control, commitment tracking, confidentiality |
| [Personal Productivity](./examples/personal-productivity/) | Pillar separation, personal boundaries, life system drift |
| [History & Evolution](./examples/history-evolution/) | How the files change over 6 weeks — the movie, not a snapshot |

→ [Browse all examples](./examples/)

---

## Maintaining the System

Once you've started, these two files help you sustain the practice:

- **[Weekly Review Checklist](./Weekly-Review-Checklist.md)** — 15-minute ritual to keep your files current
- **[Consistency & Discipline Guide](./Consistency-Guide.md)** — Common decay patterns and how to fix them

---

## What LC-OS Doesn't Do

- It won't make your AI smarter
- It won't prevent all errors
- It won't work if you don't maintain the documents
- It's not magic

What it *does* do: create conditions where errors are **visible**, **contained**, and **repairable** — so that long-horizon collaboration can actually sustain itself.

---

## Background Reading

This toolkit is based on a series of research papers documenting a year-long human–AI collaboration. Reading them is **not required** to use LC-OS, but if you want the theory behind the practice:

→ [LC-OS Research Papers](https://github.com/LivingFramework/LC-OS)

The Practitioners Guide is also available in this repo as a searchable Markdown reference:

→ [Practitioners Guide (Markdown)](./references/Practitioners_Guide.md)

---

## What's in This Repo

```
LC-OS-Project/
├── scripts/
│   ├── init-project.js      ← Automated project setup (Node.js)
│   └── README.md            ← Script usage instructions
├── minimal/                 ← 3 core templates — start here
├── full/                    ← Complete governance toolkit
├── examples/                ← Filled-in examples by domain
│   ├── marketing-campaign/
│   ├── research-paper/
│   ├── client-onboarding/
│   ├── personal-productivity/
│   └── history-evolution/   ← How files evolve over time
├── references/
│   └── Practitioners_Guide.md  ← PDF converted to searchable Markdown
├── Weekly-Review-Checklist.md  ← 15-min weekly maintenance ritual
├── Consistency-Guide.md        ← Common failure modes and fixes
├── QUICK-START.md              ← Guided first session
└── README.md                   ← This file
```

---

## The Living Framework Ecosystem

| | Resource | What it contains |
|--|----------|-----------------|
| 🌐 | [**Website**](https://livingframework.github.io/) | Full documentation, AI readiness assessment, quick-start guide |
| 📚 | [**LC-OS Research**](https://github.com/LivingFramework/LC-OS) | Eight published papers, Mahdi Ledger, empirical foundations |
| 🛠️ | [**LC-OS Project**](https://github.com/LivingFramework/LC-OS-Project) | Practitioner toolkit — templates, examples, automation scripts |
| ⚙️ | [**Cowork Templates**](https://github.com/LivingFramework/LivingFramework.github.io) | Governance templates optimised for Claude Cowork |

---

## License

CC BY 4.0 — Use freely, adapt as needed, attribution appreciated.

---

*Stability is not the absence of failure; it is the capacity for visible, structured repair.*
