# LC-OS Project

**A practical toolkit for long-horizon human–AI collaboration.**

---

## The Problem

AI collaboration breaks over time. Not dramatically — quietly.

- Context drifts between sessions
- Numbers change when recalculated
- Decisions get reinterpreted
- Files multiply into conflicting versions
- Trust erodes without a clear reason

These failures aren't about bad prompts or weak models. They're structural. And better prompting doesn't fix structural problems.

---

## The Solution

LC-OS (Lean Collaboration Operating System) is a lightweight governance framework that makes long-horizon AI collaboration stable, traceable, and repairable.

It works by:

1. **Externalising memory** — What matters lives in documents, not in the AI's context
2. **Separating truth types** — Text logic and numerical facts are kept in different places
3. **Making failure visible** — When things break, you see it and can fix it
4. **Structuring repair** — Recovery follows a predictable pattern: Stop → Diagnose → Rollback → Note

LC-OS is model-agnostic. It works with ChatGPT, Claude, Gemini, or any conversational AI.

---

## What's Here

### 📁 minimal/
**Start here.** Three templates that give you 80% of the benefit:
- Running Document — your shared memory
- Canonical Numbers — single source of numerical truth
- Failure Log — track what breaks and how it's fixed

### 📁 full/
**The complete system.** Everything in minimal, plus:
- Repair Protocol — structured recovery process
- Stability Ping — regular alignment checks
- Challenge Protocol — productive disagreement
- Affective Governance — tone and emotional stability rules
- TraceSpec — detailed failure logging schema

### 📁 references/
**Background reading.** Paper summaries, failure taxonomy, and conceptual foundations.

---

## Quick Start

1. Download the `minimal/` folder
2. Copy the Running Document template
3. Fill in your project details
4. Share it with your AI at the start of each session
5. Update it as decisions are made

That's it. You now have persistent memory across sessions.

Add more structure only when you feel the need.

---

## Who This Is For

LC-OS is for people who:
- Work on projects spanning weeks or months
- Need reliability, not just impressive outputs
- Are willing to write things down
- Accept that repair is part of serious work

LC-OS is **not** for:
- One-off questions
- Quick content generation
- People who want AI to "just handle it"

---

## License

CC BY 4.0 — Use freely with attribution.

---

*Stability is not the absence of failure; it is the capacity for visible, structured repair.*

## Relationship to LC-OS Research Repository

This repository contains the **practitioner-facing LC-OS Project**:
templates, examples, field manual, and adoption materials.

The underlying research papers and The Mahdi Ledger are published separately here:
https://github.com/LivingFramework/LC-OS

Readers should consult the research repository for theory and evidence,
and this repository for implementation and practice.
