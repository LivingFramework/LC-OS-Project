# Failure Log — "Automate Your Intake" Campaign

**Purpose:** Record mistakes, near-misses, and unexpected problems so they
are fixed once and not repeated.  
**Owner:** Priya Sharma  
**Rule:** When something goes wrong, log it here before moving on.

---

## How to Use

- Log the failure when you catch it — don't wait until end of week
- Be honest about root cause (not just what happened, but why)
- "Fixed" means the immediate problem is resolved
- "Prevented" means the system change that stops recurrence

---

## Failure Log

### F-001 — AI invented a statistic in blog draft
- **Date caught:** 2026-02-03
- **Category:** F3 — Numerical Reasoning Error
- **What happened:** AI draft for blog #1 included "studies show 80% of
  operations teams waste more than 8 hours per week on manual intake." No source
  was cited. The 80% figure and 8-hour claim were not in canonical-numbers.md
  and did not exist in our data.
- **Impact:** Would have published false claim if not caught in review.
- **Root cause:** AI was given a general prompt ("write a compelling blog intro")
  without being explicitly told to reference canonical-numbers.md for any
  statistics. It filled gaps plausibly.
- **Fix:** Replaced with "6.5 hours/week (n=47, FlowDesk customer data)" from
  canonical file.
- **System change:** Added to Rules in Running Document: "Numbers used in
  content must come from canonical-numbers.md. AI must flag any statistic it
  cannot source before including it."
- **Status:** ✅ Resolved

---

### F-002 — LinkedIn ads reached non-ICP audience
- **Date caught:** 2026-02-14
- **Category:** F4 — Governance/Boundary Violation (ICP boundaries not enforced)
- **What happened:** First 10 days of LinkedIn ads had job title targeting set
  too broadly. Saw engagement from "student," "freelancer," and "small business
  owner" profiles — none in ICP.
- **Impact:** Wasted approximately $400 in ad spend. 8 trials signed up who were
  unlikely to convert.
- **Root cause:** Targeting spec was created quickly at launch without cross-
  referencing the ICP definition in strategy-master.md. AI helped write the ad
  copy but was not asked to review targeting alignment.
- **Fix:** Rebuilt audience — added company size filter (50–500), restricted to
  specific job titles from ICP definition.
- **System change:** Added to session rules: "Before launching any paid campaign,
  AI reviews targeting spec against ICP definition in strategy-master.md."
- **Status:** ✅ Resolved

---

### F-003 — Google Ads CPL exceeded threshold undetected for 2 days
- **Date caught:** 2026-02-28
- **Category:** F1 — Context Drift (monitoring gap)
- **What happened:** Google Ads CPL rose above $200 threshold on 2026-02-26.
  Policy 3 in strategy-master.md required immediate pause. Not caught until
  2026-02-28 Monday review — 2 days late.
- **Impact:** Approximately $380 additional spend above threshold before pause.
- **Root cause:** No daily monitoring in place. Relied on weekly Monday review,
  which was insufficient for a volatile channel.
- **Fix:** Paused Google Ads. Budget written off. Added to Monday review:
  "Check previous 7 days CPL for each active channel against Policy 3 threshold."
- **System change:** Weekly review checklist updated. Google Ads not reactivated
  this campaign cycle.
- **Status:** ✅ Resolved

---

### F-004 — Webinar Q&A ran over; attendees dropped off
- **Date caught:** 2026-02-19 (during webinar #1)
- **Category:** F5 — Operational execution failure
- **What happened:** Q&A segment was allocated 30 minutes. Ran 45 minutes.
  Attendance dropped from 112 to 76 in last 15 minutes as attendees left.
  Post-event survey: "felt too long" mentioned by 14 of 42 respondents.
- **Impact:** Lower engagement in final 15 minutes; some attendees missed the
  closing CTA. Estimated 3–5 fewer trial sign-ups than if session ended on time.
- **Root cause:** Q&A moderator (AI in chat + Priya on audio) didn't have a
  hard-stop signal or time-check built into the run-of-show.
- **Fix:** N/A for webinar #1 (already happened).
- **System change:** Webinar #2 run-of-show includes: hard stop at 45-min mark
  for Q&A regardless of queue; timer visible to host; close CTA moved earlier
  in session (minute 50 of 60, not minute 58).
- **Status:** ✅ Resolved — changes applied to webinar #2 plan

---

## Near-Misses (caught before impact)

| Date | What was caught | Who caught it | Action taken |
|------|-----------------|---------------|--------------|
| 2026-01-29 | Blog draft mentioned a competitor by name (violated brand boundary) | Priya in review | Removed before publish; reminded AI of brand boundary rule |
| 2026-02-10 | Blog #2 used customer's company name without written approval | AI flagged it proactively | Replaced with anonymous "a mid-size SaaS company" |
| 2026-03-01 | Notion co-promo email draft had two CTAs (violates one-CTA policy) | Priya in review | Removed secondary CTA before sending to Notion |

---

## Summary

| Category | Count | Resolved |
|----------|-------|----------|
| F3 — Numerical errors | 1 | 1 |
| F4 — Boundary violations | 1 | 1 |
| F1 — Context/monitoring drift | 1 | 1 |
| F5 — Operational | 1 | 1 |
| Near-misses | 3 | 3 |
| **Total** | **7** | **7** |
