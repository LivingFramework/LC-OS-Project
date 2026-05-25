# Evolution Commentary — What Changed and Why

*Read this alongside the three snapshots to understand the patterns.*

---

## Week 1 → Week 3: Grounding the draft in reality

### Strategy Master
The strategy master started as a DRAFT with intentions. By Week 3 it became ACTIVE
because 5 user interviews gave it an empirical foundation. The key additions:
- Validated need (from interview data, not assumption)
- Explicit "not building" list — because requests came in immediately
- Updated success criteria with beta user milestone

**Pattern:** The strategy master doesn't change often, but when it does, it's because
real information arrived that either confirmed or challenged the original logic.

### Running Document
The running document went from 6 decisions to a more active log within 3 weeks.
Most importantly, the first **correction** appeared — a schema type error.

**Pattern:** The running document is the most active file. It changes every session.
The decisions log is often the most valuable part in retrospect.

### Canonical Numbers
The numbers file started with targets only. By Week 3 it had:
- Interview data (real observations, not estimates)
- Infrastructure costs (looked up, not guessed)

**Pattern:** Early canonical numbers are all targets. Real data fills in over time.
Never invent actuals — leave the row blank and add TBD until you have the real number.

---

## Week 3 → Week 6: A pivot, two failures, and a price change

### Strategy Master
The most significant update was the PIVOT NOTE — a deliberate scope reduction.

**Important distinction this demonstrates:**
- Scope creep (bad): adding Calendar sync because it sounds good
- Scope reduction (good): removing Calendar sync because users don't need it and
  it's taking 6 hours

The strategy master captured this distinction explicitly so it doesn't look like
"we didn't finish" — it reads as "we made an informed decision."

### Running Document  
Three corrections by Week 6 (vs one at Week 3). Two new ones:
1. Double-booking bug — logic error in database query
2. Timezone display bug — classic edge case AI didn't catch

**Pattern:** Corrections accelerate as you build. This is normal. The failure log
and running document corrections section are distinct:
- Running Document corrections: quick, day-to-day fixes
- Failure Log: deeper analysis of significant failures with root cause and system change

### Canonical Numbers
Two important updates:
1. Pricing change — old price crossed out, new price entered, reason recorded
2. Beta user data — real observations from 4 real users

**Pattern:** When a number changes, record the old value, the new value, the date,
and the reason. Never just overwrite. The history in the numbers file tells a story.

---

## Recurring Patterns to Notice

### 1. Files start sparse — this is correct
Week 1 files are short. That's not a failure of preparation — it's appropriate
calibration to what you actually know at Week 1. Adding invented detail to look
"complete" creates false confidence and eventual drift.

### 2. AI flags often lead to the best decisions
Two of the most important decisions in this project were prompted by AI flags:
- "This date picker doesn't support timezone-aware rendering" (Week 3)
- "This sub-feature is taking longer than its priority warrants" (Week 5)

Both flags led to good decisions. This is the value of an AI that has permission
to flag rather than just execute.

### 3. The failure log has only 3 entries in 6 weeks — that's fine
Failure logs are not supposed to be long. They're supposed to be honest. Three
real, documented, resolved failures is better than twenty vague entries that
don't lead to system changes.

### 4. The strategy master anchored decisions when it mattered
When the Calendar sync decision was being made, the strategy master principle
"ship something usable in 6 weeks, not something perfect" was visible context.
Without it, Daniel might have kept pushing on Calendar sync out of stubbornness.
With it, the principle provided permission to make the pragmatic call.

---

## What This Example Is Not Showing

- Large team coordination (this is a solo project)
- Financial complexity (revenue not yet flowing)
- Cross-pillar interference (single project, no other life pillars active)

For those patterns, see the other examples (marketing-campaign, research-paper,
client-onboarding, personal-productivity).

---

*"The running document is not a burden. It is the memory the AI needs to serve you well."*
