# Failure Log — Research Paper: "Adaptive Governance in Coastal Communities"

**Purpose:** Capture errors in the AI-assisted research and writing process.  
**Owner:** Dr. Amara Diallo  
**Rule:** Log it when you catch it, not at the end of the week.

---

## Failure Log

### F-001 — AI fabricated a citation
- **Date caught:** 2025-11-15
- **Category:** F3 — Numerical/Citation Error (hallucination)
- **What happened:** During literature review drafting, AI wrote: "As Chen et al.
  (2021) found in their analysis of Southeast Asian coastal governance..."
  with a specific journal and volume number. The paper does not exist. Amara
  searched two databases — no results.
- **Impact:** Would have been an academic integrity violation if published.
- **Root cause:** AI was asked to "find supporting literature" without being
  explicitly constrained to verified sources only. AI filled the gap confidently.
- **Fix:** Citation removed. Searched for a real equivalent source (found
  Huitema et al., 2009 — now REF-007).
- **System change:** Added rule to Running Document: "AI may not add any
  citation without it first being verified manually and added to canonical-numbers.md."
  Added "UNVERIFIED" staging row to canonical file.
- **Status:** ✅ Resolved

---

### F-002 — Terminology drift: "resilience" used as synonym for "adaptive capacity"
- **Date caught:** 2026-01-10
- **Category:** F1 — Context Drift / Conceptual drift
- **What happened:** In Chapter 2 draft, AI used "resilience" and "adaptive
  capacity" interchangeably across 4 paragraphs. In the IAD framework and this
  paper's argument, these are distinct concepts with different implications.
  Using them as synonyms undermined the theoretical framework.
- **Impact:** Three paragraphs had to be rewritten. One argument was ambiguous
  in a way that a reviewer could flag.
- **Root cause:** Terminology was defined in Amara's notes but not in a shared
  document the AI could access at session start. AI defaulted to common academic
  usage where the terms often are conflated.
- **Fix:** Rewrote affected paragraphs with precise terminology.
- **System change:** Added Terminology Lock section (§4.3) to strategy-master.md.
  Now shared at start of all writing sessions.
- **Status:** ✅ Resolved

---

### F-003 — AI drifted into national policy analysis (out of scope)
- **Date caught:** 2026-02-08
- **Category:** F4 — Boundary Violation
- **What happened:** In Section 4.1 draft, AI wrote two paragraphs analyzing
  Indonesia's national coastal management policy — explicitly out of scope per
  strategy-master.md §1. The writing was good and plausible, which made it
  easy to miss. Amara caught it on re-read.
- **Impact:** 400 words had to be cut and rewritten at municipal level.
- **Root cause:** Prompt was "analyze governance mechanisms in the Semarang case."
  AI interpreted "governance" broadly to include national context. Scope
  boundaries were in strategy-master.md but not explicitly in the prompt.
- **Fix:** Cut national policy paragraphs. Replaced with municipal-level analysis
  linking to city planning documents (REF-009).
- **System change:** Added to session rules: "Include this in every writing prompt:
  'This paper focuses on municipal-level governance only. Do not analyze national
  or federal policy.'" Updated running-document.md.
- **Status:** ✅ Resolved

---

### F-004 — AI suggested changing core argument without flagging it
- **Date caught:** 2026-03-01
- **Category:** F4 — Boundary Violation (argument architecture)
- **What happened:** In Section 4.2 draft, AI framed institutional bricolage as
  "evidence of formal institutional failure" — a framing that changes the paper's
  main interpretive claim. The original argument (strategy-master.md §5) frames
  bricolage as "creative use of informal resources" — a capacity, not a deficit.
- **Impact:** Caught before Amara accepted the draft. No published impact.
- **Note:** AI did use the ARGUMENT FLAG system from the Rules section — this
  worked as designed. Amara reviewed the flag and rejected the reframe.
- **Root cause:** AI was doing its job — finding an alternative framing. The
  failure was near-miss only because the ARGUMENT FLAG rule was in place.
- **Fix:** Reframed section as per original argument.
- **System change:** None needed — system worked. Noted as confirmation that
  ARGUMENT FLAG rule is earning its value.
- **Status:** ✅ Resolved (near-miss — system worked)

---

## Near-Misses

| Date | What was caught | Who caught it | Action |
|------|-----------------|---------------|--------|
| 2025-10-20 | AI suggested citing a Wikipedia article | Amara in review | Replaced with peer-reviewed source |
| 2026-01-25 | AI "rounded" IPCC SLR range to "up to 1 meter" (dropping the 0.3m lower bound) | Amara checking canonical numbers | Corrected to full range from canonical file |
| 2026-02-15 | AI draft included phrase "as widely recognized in the literature" without citation | Amara in review | Replaced with specific citation or removed |

---

## Summary

| Category | Count | Resolved |
|----------|-------|----------|
| F3 — Hallucination/citation error | 1 | 1 |
| F1 — Terminology/conceptual drift | 1 | 1 |
| F4 — Scope/argument boundary | 2 | 2 |
| Near-misses | 3 | 3 |
| **Total** | **7** | **7** |
