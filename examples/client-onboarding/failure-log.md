# Failure Log — Meridian Financial Engagement

**Purpose:** Capture errors and near-misses in this client engagement.  
**Owner:** Sofia Reyes  
**Rule:** Log before the end of the week it happened.

---

## Failure Log

### F-001 — AI included specific vendor name in client deliverable
- **Date caught:** 2026-02-15
- **Category:** F4 — Boundary Violation
- **What happened:** In the Discovery Report draft, AI wrote: "The team recommended
  migrating to Salesforce to resolve the CRM integration gap." Using a specific
  vendor name in a client deliverable implies a recommendation that could expose
  Sofia to liability and violates firm policy.
- **Impact:** Caught in Sofia's review before delivery. No client impact.
- **Root cause:** AI was asked to "describe the technology gap" without explicit
  instruction about vendor naming. AI defaulted to helpful specificity.
- **Fix:** Replaced "Salesforce" with "a modern CRM platform with workflow
  automation capabilities." No other vendor names in the document.
- **System change:** Added to Running Document rules: "If AI produces language
  naming a specific vendor, flag it." Added to session prompts.
- **Status:** ✅ Resolved

---

### F-002 — AI used statistic from wrong industry segment
- **Date caught:** 2026-02-25
- **Category:** F3 — Numerical Error
- **What happened:** In Gap Analysis draft, AI wrote "industry average onboarding
  time is 21 days." This figure was from a retail banking benchmark. Meridian is
  a wealth management firm — a different segment with a 28–34 day benchmark.
  Using the wrong benchmark would have made Meridian's performance look worse
  than it is and invalidated the gap analysis.
- **Impact:** Caught by Sofia before delivery. If published, would have
  undermined the credibility of the analysis.
- **Root cause:** AI pulled a plausible-sounding number from training data
  without a source. Benchmark was not yet in canonical-numbers.md.
- **Fix:** Researched and sourced correct benchmark (McKinsey 2024). Added to
  canonical file with note about citeability. Updated Gap Analysis draft.
- **System change:** Added to rules: "All numbers in deliverables must come from
  canonical-numbers.md. AI must flag when it is about to use a number it cannot
  source." Added benchmark row to canonical file.
- **Status:** ✅ Resolved

---

### F-003 — Near-scope-creep: client competitor benchmarking request
- **Date caught:** 2026-03-01
- **Category:** F4 — Scope Boundary (near-miss — caught before any work done)
- **What happened:** Client asked in email: "Can you add a section on what
  competitors are doing?" In the AI session to prepare response, AI started
  drafting a competitive analysis section before Sofia had confirmed whether
  this was in scope.
- **Impact:** No deliverable impact. AI work-in-progress stopped before
  producing substantial output.
- **Root cause:** AI was responding to the immediate request without checking
  it against engagement scope in strategy-master.md. If Sofia had not caught
  the draft early, a competitive analysis section might have been included
  in a deliverable — creating an expectation for content outside the SOW.
- **Fix:** Stopped the AI draft. Sofia confirmed out-of-scope. Response to
  client drafted: acknowledge interest, offer as potential add-on.
- **System change:** Added to session rules: "Before beginning any new section
  of a deliverable, AI must confirm it maps to a deliverable in the SOW."
- **Status:** ✅ Resolved

---

## Near-Misses

| Date | What was caught | Who caught it | Action |
|------|-----------------|---------------|--------|
| 2026-02-21 | Interview quote potentially identifiable even though anonymized | Client flagged on delivery call | Generalized the quote; added second-review step to anonymization process |
| 2026-02-28 | AI suggested a timeline commitment in an email draft ("we'll have this to you by Friday") not in canonical commitments | Sofia in review | Removed commitment; replaced with "we'll be in touch this week" |

---

## Summary

| Category | Count | Resolved |
|----------|-------|----------|
| F4 — Boundary violations | 2 | 2 |
| F3 — Numerical errors | 1 | 1 |
| Near-misses | 2 | 2 |
| **Total** | **5** | **5** |
