# Week 6 Snapshot — FreelanceScheduler Project

*Six weeks in. One significant pivot happened. Two failures caught. Scope contracted
based on learning. Product now in closed beta with 4 users.*

---

## Strategy Master (Week 6) — Changes from Week 3

**What changed:** Core pivot logged. Pricing changed. Mobile constraint relaxed.

```markdown
# Strategy Master — FreelanceScheduler

**Version:** v1.3  
**Last Updated:** 2026-02-17  
**Status:** ACTIVE

## 1. What I'm Building

A scheduling tool for freelancers that lets clients book time slots and sends
automated reminders. Google Calendar sync deferred to v1.1 (see pivot note).

**PIVOT NOTE (v1.2 → v1.3, 2026-02-10):**
Google Calendar sync was technically harder than estimated — OAuth flow, token
refresh, scope permissions. Beta users (4) confirmed they don't need it for
initial value. Decision: ship without Calendar sync in v1. Add in v1.1 when
core experience is validated. This was NOT scope creep — it was scope reduction
based on evidence.

## 2. Core Principles

*(unchanged from v1.1)*

## 3. Boundaries

*(unchanged except Calendar sync deferral)*

## 4. Success Criteria

| Metric | Target | Actual (Week 6) |
|--------|--------|-----------------|
| Personal use (daily) | Yes | ✅ Yes — using it daily |
| Beta users | 10 by Week 8 | 4 active (on track) |
| Paying subscribers | 50 by Month 6 | — |
| MRR | $600 by Month 6 | $0 (pre-revenue) |

**Pricing change (v1.3):**  
Changed from $12/month to $9/month based on beta user feedback.
Three of four beta users said "$12 feels like a lot for something I'm still
testing." $9/month targets faster conversion at launch. MRR target adjusted
(see canonical numbers).

## 5. NOT Building

*(same list, plus Calendar sync moved to v1.1)*
```

---

## Running Document (Week 6) — Changes from Week 3

**What changed:** Two major errors logged. Beta feedback integrated.
Pivot decision documented with full context.

```markdown
# Running Document — FreelanceScheduler

**Last updated:** 2026-02-17  
**Phase:** Closed beta — 4 users, v1 feature complete

## Current Focus

- Fixing booking confirmation email formatting (beta user feedback)
- Writing onboarding email sequence (3 emails)
- Preparing public launch (Week 8 target)

## Open Questions

- Should I offer an annual plan at launch? → Decide by Week 7
- Landing page copy: "for freelancers" vs "for independent professionals"? → Test both

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| ... (previous decisions) | ... | ... |
| 2026-02-10 | Defer Google Calendar sync to v1.1 | Technically harder than estimated; beta users don't need it for core value |
| 2026-02-12 | Change price from $12 to $9/month | Beta feedback: $12 feels high for early adopter; $9 lowers friction at launch |
| 2026-02-14 | Use Resend for email (not SendGrid) | Better DX, same free tier, cleaner API |
| 2026-02-17 | Onboarding: 3-email sequence | Beta users reported not knowing where to start; sequence addresses this |

## Corrections

| Date | Error | Fix |
|------|-------|-----|
| 2026-01-17 | Schema UUID type error | Fixed |
| 2026-02-03 | AI-generated booking flow allowed double-booking (no conflict check) | Added conflict check in Supabase query; added test case |
| 2026-02-14 | Confirmation email had wrong time zone displayed (UTC instead of user's TZ) | Fixed using stored user timezone from profile |

## Session Notes

**2026-02-17 (onboarding email):**
- AI drafted 3-email sequence — good structure
- Email 1 subject line: AI suggested "Welcome to FreelanceScheduler" → changed to
  "Your first booking link is one click away" — more action-oriented
- One SCOPE FLAG: AI suggested adding a feature highlight in Email 3 about a
  "team collaboration" feature we don't have. Removed.

**2026-02-10 (Calendar sync pivot decision):**
- Spent 2 sessions with AI working through Google OAuth flow
- AI correctly flagged: "This is taking longer than a feature of this priority
  should. Do you want to scope it out and revisit?"
- Made explicit decision to defer. Documented in Strategy Master.
- AI flag was valuable — I was about to keep pushing out of stubbornness.
```

---

## Canonical Numbers (Week 6) — Changes from Week 3

**What changed:** Beta user data. Pricing change. MRR target adjusted. Time actuals.

```markdown
# Canonical Numbers — FreelanceScheduler

**Last updated:** 2026-02-17

## Pricing (UPDATED)

| Item | Old Value | New Value | Changed | Reason |
|------|-----------|-----------|---------|--------|
| Monthly price | $12 | $9 | 2026-02-12 | Beta feedback |
| MRR target (Month 6) | $600 | $450 | 2026-02-12 | 50 x $9 |

## Beta Program

| Item | Value | As of |
|------|-------|-------|
| Beta users (active) | 4 | 2026-02-17 |
| Beta users (target by Week 8) | 10 | — |
| Beta user satisfaction (informal) | 3/4 "would use at launch" | 2026-02-15 |
| Calendar sync: needed for beta? | No (3/4 said no) | 2026-02-10 |

## Time Investment

| Item | Value | Notes |
|------|-------|-------|
| Hours per week (actual avg) | 14 | vs 15 planned — close |
| Total hours to date (6 weeks) | ~84 | Estimate |
| Estimated hours to launch | 20–30 | Weeks 7–8 |

## Infrastructure (unchanged)

*(All still on free tiers — no change)*
```

---

## The Pivot in Context

**What happened at Week 5:**  
Daniel spent two full sessions (6 hours) trying to implement Google Calendar OAuth.
The AI was helpful technically, but the scope kept expanding: token storage, refresh
logic, handling revoked access, error states. After session 2, the AI flagged:
"This sub-feature has taken 6 hours and has more edge cases pending. Given your
launch timeline, do you want to reassess its priority?"

**What the files show:**  
- Running Document: records the AI flag and the explicit decision
- Strategy Master: updated with PIVOT NOTE explaining the reduction and why
  it wasn't retreat — it was evidence-based scoping
- Canonical Numbers: beta user data (3/4 don't need it) cited as evidence

**Why this matters:**  
Without the governance files, the decision would be invisible. Six months later,
if someone asked "why doesn't it have Calendar sync?", the answer would be
"uh, we just didn't get to it." With the files, the answer is documented:
"This was an explicit decision on 2026-02-10, supported by specific user data."
