# Failure Taxonomy

A quick reference for the six categories of failure in long-horizon human-AI collaboration.

---

## The Six Categories

### 1. Context and Memory Drift

**What it is:** The AI loses or misremembers prior context, decisions, or agreements.

**How it manifests:**
- Decisions made last week are forgotten or contradicted
- Rules established earlier are not applied
- The AI responds as if earlier conversations did not happen
- Slight reinterpretations of agreed terms accumulate

**Common triggers:**
- New chat session without re-establishing context
- Long gaps between sessions
- Overloaded prompts where key context gets lost
- Implicit assumptions not explicitly stated

**Prevention:**
- Running Document read at start of every session
- Key decisions logged immediately
- Explicit re-establishment of context after breaks

---

### 2. File and Version Divergence

**What it is:** Human and AI are working from different versions of the same document, creating inconsistency.

**How it manifests:**
- References to rules or numbers that do not match
- Confusion about which version is correct
- Decisions based on outdated information
- Contradictory logic emerging from different source files

**Common triggers:**
- Multiple drafts or versions of documents
- Edits made without clear version tracking
- Working from memory instead of canonical files
- Parallel workstreams creating divergent copies

**Prevention:**
- Single canonical file per domain
- Clear naming conventions with versions
- All edits in one place
- Regular reconciliation checks

---

### 3. Numerical Reasoning Errors

**What it is:** Wrong calculations, mixed units, invented numbers, or failure to reference authoritative numerical sources.

**How it manifests:**
- Calculations that do not add up
- Currency or unit confusion
- Plausible-sounding numbers that are fabricated
- Results that change when recalculated

**Common triggers:**
- Multi-step calculations without checkpoints
- Numbers discussed in conversation rather than referenced from Canonical Numbers
- Currency conversions without fixed rates
- Relying on AI memory for figures

**Prevention:**
- Canonical Numbers file as single source
- Step-by-step calculation with verification at each step
- Fixed conversion rates documented
- Never accept numbers without source

---

### 4. Governance and Boundary Violations

**What it is:** AI steps outside its designated role, scope, or domain boundaries.

**How it manifests:**
- Advice or decisions in areas outside agreed scope
- Mixing rules or approaches from different domains
- Taking actions without required approval
- Scope creep without explicit discussion

**Common triggers:**
- Ambiguous boundaries
- Helpful impulse leading to overreach
- Context from one domain bleeding into another
- Missing explicit scope definitions

**Prevention:**
- Clear boundary rules in Running Document
- Explicit scope statements at session start
- Permission requirements for significant actions
- Regular boundary checks during Stability Pings

---

### 5. Emotional and Trust Fractures

**What it is:** Breakdown in tone, trust, or emotional alignment between human and AI.

**How it manifests:**
- Over-reassurance that masks real risk
- Sycophantic agreement without pushback
- Defensive hedging after corrections
- Inconsistent tone that erodes confidence
- Feeling that the AI is managing you rather than informing you

**Common triggers:**
- Human stress triggering AI softening
- Corrections leading to over-caution
- No explicit tone rules
- Emotional cues being over-interpreted

**Prevention:**
- Affective governance rules in Running Document
- Explicit tone resets when drift is noticed
- Direct feedback on tone issues
- Boundaries on emotional support role

---

### 6. Cross-Domain Interference

**What it is:** Logic, tone, or assumptions from one project or domain inappropriately affecting another.

**How it manifests:**
- Risk-averse thinking from finance appearing in creative work
- Urgency from one project bleeding into unrelated tasks
- Assumptions from Project A applied to Project B
- Tonal carryover between domains

**Common triggers:**
- Switching projects without context reset
- Shared sessions across different work streams
- No clear domain separation
- Residual emotional state from previous work

**Prevention:**
- Clear context switch protocol between projects
- Re-read relevant Running Document when changing domains
- Explicit domain declaration at session start
- Stability Ping when switching contexts

---

## Pattern Recognition

When failures occur, classify them:

1. **Which category?** Use the six types above
2. **What triggered it?** Identify the specific cause
3. **What control was missing?** What governance could have prevented it
4. **What changes?** How to prevent recurrence

Over time, you will notice patterns. Address the patterns, not just individual incidents.

---

## Failure Frequency Expectations

If LC-OS is working well:

| Category | Expected Frequency |
|----------|-------------------|
| Context drift | Occasional, decreasing over time |
| Version divergence | Rare after canonical files established |
| Numerical errors | Rare with Canonical Numbers in place |
| Boundary violations | Occasional, caught quickly |
| Emotional fractures | Rare with affective governance |
| Cross-domain interference | Occasional when switching contexts |

If any category is frequent, investigate the structural cause.

---

*Name the failure. Find the pattern. Fix the structure.*
