# Failure Log — Kenji Watanabe Personal Life System

**Purpose:** Record errors and near-misses in my AI-assisted personal planning.  
**Owner:** Kenji Watanabe  
**Note:** In personal planning, "failures" are often softer than in professional work —
but they still cost time, money, or wellbeing if not caught.

---

## Failure Log

### F-001 — AI gave a tax estimate without my real numbers
- **Date caught:** 2025-08-20
- **Category:** F3 — Numerical Error
- **What happened:** I asked AI to help me think about whether to increase RRSP
  contributions. AI said "based on a typical salary around $90K you'd save about
  $1,200–1,500 in taxes." This was not based on my actual numbers. AI invented a
  plausible range.
- **Impact:** I almost made a contribution decision based on the estimate.
  When I checked with my accountant, my marginal rate and situation were
  different enough that the figure was meaningfully wrong.
- **Root cause:** I hadn't set up canonical-numbers.md yet. No constraint on AI
  making estimates.
- **Fix:** Got real numbers from accountant. Added rule: AI does not produce any
  financial estimate unless based on canonical numbers.
- **System change:** Created canonical-numbers.md. Added rule to running document.
- **Status:** ✅ Resolved

---

### F-002 — Pillar bleed: relocation logistics ate a career-focused session
- **Date caught:** 2026-01-15
- **Category:** F1 — Context Drift / Pillar Interference
- **What happened:** Session was supposed to be focused on career: preparing
  for Fenwick interview process. AI was helpful at the start, then I mentioned
  "oh and I'm also dealing with the move" — AI pivoted to logistics. The last
  30 minutes of a 60-minute session was about Toronto neighbourhood research.
- **Impact:** Career prep was incomplete. Had to do another session the next day.
- **Root cause:** I opened the door by mentioning the move. AI responded helpfully
  to what I said, not to the original session goal. No explicit pillar focus rule
  was active.
- **Fix:** None for that session. For next career session, focused it successfully.
- **System change:** Added to running document rules: "One pillar per session
  unless I explicitly open cross-pillar. If I mention another pillar in passing,
  AI acknowledges and returns to focus."
- **Status:** ✅ Resolved

---

### F-003 — AI recommended a course of action on career decision
- **Date caught:** 2026-02-28
- **Category:** F4 — Boundary Violation (AI overstepping)
- **What happened:** When discussing my 90-day plan at Fenwick, AI said
  "you should push for a promotion path conversation early — managers respect
  ambition shown in the first 90 days." This is career advice framed as a
  directive. My career boundary says AI offers options, not directives.
- **Impact:** No concrete harm — I noticed and flagged it. But if I'd been
  less aware, I might have taken advice that wasn't right for my specific
  manager and culture.
- **Root cause:** No explicit prompt constraint in that session. AI defaulted
  to helpful advice-giving mode.
- **Fix:** AI used ARGUMENT FLAG correctly when prompted to ("I am suggesting X —
  this is a recommendation, do you want to accept it?"). I declined.
- **System change:** Added explicit constraint to session prompts: "You may offer
  options but not recommend what I should do on personal career, health, or
  financial decisions."
- **Status:** ✅ Resolved

---

## Near-Misses

| Date | What was caught | Who caught it | Action |
|------|-----------------|---------------|--------|
| 2025-09-10 | AI suggested a specific investment fund by name | Kenji flagged immediately | Replaced with category discussion; reminded AI of investment boundary |
| 2026-01-30 | AI described knee pain management advice as if providing medical guidance | Kenji flagged | Redirected to "here's what physiotherapists typically suggest" framing |
| 2026-02-15 | AI included a "compare yourself to peers your age" savings benchmark without being asked | Kenji flagged | Reminded AI: track against own baseline only (Principle 4) |

---

## Summary

| Category | Count | Resolved |
|----------|-------|----------|
| F3 — Numerical errors | 1 | 1 |
| F1 — Context/pillar drift | 1 | 1 |
| F4 — Boundary violations | 1 | 1 |
| Near-misses | 3 | 3 |
| **Total** | **6** | **6** |
