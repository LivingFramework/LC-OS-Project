# LC-OS Project

**A Lightweight Operating System for Long-Horizon Human–AI Collaboration**
https://doi.org/10.5281/zenodo.18262090

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

It's not for:

- Single-session tasks or quick queries
- Fully automated pipelines with no human involvement
- Those seeking a plug-and-play software solution

---

## Two Paths

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

## Quick Start

1. **Choose your path** — [Minimal](./minimal/) or [Full](./full/)
2. **Copy the templates** — download or fork this repo
3. **Start a session** — share the Running Document with your AI at the start
4. **Work normally** — but log decisions and update the document as you go
5. **When things break** — use the repair protocol instead of pushing through

That's it. The system is lightweight by design.

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

---

## License

CC BY 4.0 — Use freely, adapt as needed, attribution appreciated.

---

## Contributing

This is a living project. If you adopt LC-OS and develop improvements, variations, or domain-specific templates, contributions are welcome.

---

*Stability is not the absence of failure; it is the capacity for visible, structured repair.*
