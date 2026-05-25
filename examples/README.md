# Examples

Fully worked examples of LC-OS governance applied to real domains.
Each example is completely filled in — not a blank template.

## Available Examples

| Folder | Domain | What it demonstrates |
|--------|--------|----------------------|
| `marketing-campaign/` | B2B SaaS product launch | Numbers governance, ICP boundaries, failure log in action |
| `research-paper/` | Academic research collaboration | Citation discipline, terminology lock, hallucination prevention |
| `client-onboarding/` | Professional services engagement | Scope control, commitment tracking, confidentiality |
| `personal-productivity/` | Life system with multiple pillars | Pillar separation, personal boundaries, cross-domain drift prevention |
| `history-evolution/` | Solo SaaS build over 6 weeks | How files evolve over time — the movie, not just a snapshot |

## How to Use These Examples

**If you're new to LC-OS:**
1. Start with `history-evolution/` — read the snapshots in order + the commentary
2. Then read one domain example closest to your use case

**If you have a specific use case:**
- Marketing / growth → `marketing-campaign/`
- Writing / research → `research-paper/`
- Client work / consulting → `client-onboarding/`
- Personal / life management → `personal-productivity/`

**If you're debugging your existing system:**
- Read the failure logs across examples — the failure patterns repeat across domains
- Read `history-evolution/evolution-commentary.md` for pattern identification

## What Every Example Includes

Each domain folder contains:

| File | Purpose |
|------|---------|
| `README.md` | What the example shows and how to adapt it |
| `strategy-master.md` | Scope, principles, and boundaries — the stable anchor |
| `running-document.md` | Live state, decisions log, session notes |
| `canonical-numbers.md` | All data, numbers, dates pinned and sourced |
| `failure-log.md` | Real errors caught and fixed, with system changes |

## The Most Important Lesson From These Examples

Every failure log across every domain example shows the same pattern:

> The AI did something reasonable given what it knew. The failure happened
> because what it knew was incomplete, outdated, or unconstrained.

The governance files — strategy master, running document, canonical numbers —
exist to close that gap. When they're current, AI collaboration works well.
When they drift, problems appear that feel like "AI errors" but are actually
context gaps.

---

*See root README for setup instructions. See `scripts/` for automation.*
