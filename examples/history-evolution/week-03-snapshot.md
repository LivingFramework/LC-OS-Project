# Week 3 Snapshot — FreelanceScheduler Project

*Three weeks in. First user interviews done. First architecture decision made.
One error caught and logged.*

---

## Strategy Master (Week 3) — Changes from Week 1

**What changed:** Added user research findings. Updated success criteria. Added
explicit "not building" list based on user feedback scope creep risk.

```markdown
# Strategy Master — FreelanceScheduler

**Created:** 2026-01-06  
**Version:** v1.1  
**Last Updated:** 2026-01-20  
**Status:** ACTIVE (promoted from DRAFT after 5 user interviews)

## 1. What I'm Building

A scheduling tool for freelancers that lets clients book time slots,
sends automated reminders, and syncs to Google Calendar.

**Validated need (from 5 interviews, Jan 2026):**
All 5 interviewees confirmed: "Back-and-forth email to schedule a client meeting
is my #1 time waster." This is the problem. The product solves it.

## 2. Core Principles

- Build for myself first (I am the target user)
- One validated pain per release cycle
- No funding — build to sustainable revenue
- Ship something usable in 6 weeks, not something perfect

## 3. Boundaries

- Scope: scheduling only. Explicitly NOT:
  - Invoicing (3 users asked — not building, Stripe/Wave exist)
  - Project management (1 user asked — not building, too broad)
  - Team/group booking (0 users asked — defer indefinitely)
- Tech: Next.js + Supabase + Clerk (auth decision made Week 2)
- Revenue model: subscription only. $12/month.

## 4. Success Criteria (Updated)

| Metric | Target | Timeframe |
|--------|--------|-----------|
| Personal use (daily) | Yes — I'm using it | Ongoing |
| Beta users | 10 | By Week 8 |
| Paying subscribers | 50 | By Month 6 |
| MRR | $600 | By Month 6 |

## 5. NOT Building (explicit list to prevent scope creep)

- Invoicing
- Project management  
- Video conferencing integration (use Zoom/Meets links — enough)
- Mobile app (responsive web only for v1)
- White-label (for agencies) — defer to v2 if demand proven
```

---

## Running Document (Week 3) — Changes from Week 1

**What changed:** Decisions log has grown. Open questions resolved or advanced.
First correction logged. Session notes section now active.

```markdown
# Running Document — FreelanceScheduler

**Last updated:** 2026-01-20  
**Phase:** Build — Week 3, core scheduling flow in progress

## Current Focus

- Building booking page UI (client-facing)
- Integrating Clerk auth (backend 80% done)
- Calendly research: compare UX patterns (not copying — understanding)

## Open Questions

- ~~Auth approach?~~ → Resolved: Clerk
- Timezone handling: using date-fns-tz. May revisit if edge cases emerge.
- Reminder email: SendGrid or Resend? → TBD by end of Week 3

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-01-06 | Next.js + Supabase | Familiar stack, good enough for this scale |
| 2026-01-13 | Clerk for auth | Don't build auth from scratch. Clerk handles edge cases. |
| 2026-01-15 | No group booking | 0 of 5 users mentioned it. Not building. |
| 2026-01-18 | No invoicing | 3 users mentioned it but other tools exist. Out of scope. |
| 2026-01-20 | date-fns-tz for timezone | Simpler than moment.js; well-maintained |

## Corrections

| Date | Error | Fix |
|------|-------|-----|
| 2026-01-17 | AI generated Supabase schema with user_id as VARCHAR — should be UUID | Fixed schema. Added rule: always specify UUID for ID fields in prompts. |

## Session Notes

**2026-01-20:**
- Booking page UI draft from AI — clean but used a date picker library (react-datepicker)
  that doesn't support timezone-aware rendering. Caught before integrating.
- Replaced with a custom simple implementation using date-fns-tz.
- Lesson: always test library assumptions before integrating.
```

---

## Canonical Numbers (Week 3) — Changes from Week 1

**What changed:** Interview data added. Cost actuals starting to appear.
Supabase real pricing looked up and entered.

```markdown
# Canonical Numbers — FreelanceScheduler

**Last updated:** 2026-01-20

## User Research

| Item | Value | Source |
|------|-------|--------|
| Interviews conducted | 5 | Jan 11–14, 2026 |
| All 5 confirmed core pain | Yes | Back-and-forth scheduling |
| Asked for invoicing | 3 of 5 | Not building |
| Asked for group booking | 0 of 5 | Not building |

## Revenue Targets

| Item | Value |
|------|-------|
| Price | $12/month USD |
| Beta users (target) | 10 by Week 8 |
| Paying subscribers (target) | 50 by Month 6 |
| Target MRR (Month 6) | $600 |

## Infrastructure Cost

| Item | Value | Notes |
|------|-------|-------|
| Supabase free tier | $0/month | Up to 500MB DB, 2GB bandwidth |
| Supabase Pro (when needed) | $25/month | Trigger at ~800 active users |
| Clerk free tier | $0/month | Up to 10,000 MAUs |
| Vercel free tier | $0/month | Sufficient for initial launch |
| SendGrid free tier | $0/month | Up to 100 emails/day — enough for MVP |
| Monthly infra cost (current) | $0 | All on free tiers |
| Budget before upgrade needed | ~800 users | Estimated |
```

---

## What changed between Week 1 and Week 3

1. **Strategy Master** promoted from DRAFT to ACTIVE — user interviews gave it real grounding
2. **Not-building list** added — scope requests came in fast; needed to log them explicitly
3. **First real decisions** filled the log — auth, timezone, libraries
4. **First failure** logged — schema type error, minor but caught
5. **Numbers became real** — infrastructure costs looked up, interview data entered
