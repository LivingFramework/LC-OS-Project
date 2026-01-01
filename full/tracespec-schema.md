# TraceSpec Schema

**What this is:** A structured format for logging failures in detail. More rigorous than the basic Failure Log, useful when you need to analyse patterns across many failures or replay specific incidents.

**When to use it:** When basic failure logging is not enough. When you want to build a systematic record that can be queried, compared, or shared. When failures are frequent enough to warrant structured analysis.

**Who needs this:** Most practitioners can use the basic Failure Log. TraceSpec is for those working on complex, high-stakes, or research-oriented collaborations where detailed tracing adds value.

---

## The TraceSpec Format

Each failure is logged as a structured entry with these fields:

```
TRACE ENTRY
===========
ID: [Unique identifier, e.g., TRACE-2025-01-28-001]
Timestamp: [ISO 8601 format, e.g., 2025-01-28T14:32:00Z]
Session: [Session identifier if tracking across sessions]

CLASSIFICATION
Category: [One of: context_drift | numerical_error | version_confusion | 
           boundary_violation | tone_trust | miscommunication | 
           cross_domain | other]
Severity: [low | medium | high | critical]
Detected by: [human | ai | automated]

DESCRIPTION
Trigger: [What initiated the failure]
Symptom: [How the failure manifested]
Context: [Relevant background - what was happening when it occurred]

ANALYSIS
Root cause: [Why it happened - go deeper than the symptom]
Contributing factors: [Other elements that enabled the failure]
Controls that should have caught it: [What governance was missing or bypassed]

REPAIR
Action taken: [What was done to fix it]
Documents updated: [Which files were changed]
Time to resolution: [How long from detection to fix]

PREVENTION
Rule added: [New rule if any]
Process change: [New process if any]
Structural change: [Changes to documents, templates, or architecture]

METADATA
Related entries: [Links to related trace entries if any]
Tags: [Searchable tags for pattern analysis]
Notes: [Any additional observations]
```

---

## Example Trace Entry

```
TRACE ENTRY
===========
ID: TRACE-2025-01-28-001
Timestamp: 2025-01-28T14:32:00Z
Session: content-project-session-14

CLASSIFICATION
Category: numerical_error
Severity: medium
Detected by: human

DESCRIPTION
Trigger: Requested budget calculation for February content plan
Symptom: AI reported available budget as GBP 600 instead of GBP 500
Context: Planning session for February editorial calendar. Had been 
         discussing increasing freelance usage which may have primed
         the AI to expect higher numbers.

ANALYSIS
Root cause: AI derived budget from conversation context rather than 
            referencing Canonical Numbers file
Contributing factors: 
  - Discussion of potential budget increase created ambiguity
  - Canonical Numbers not explicitly referenced at session start
Controls that should have caught it: 
  - Rule requiring all figures from Canonical Numbers
  - Session opening protocol to reference canonical files

REPAIR
Action taken: Corrected figure, re-referenced Canonical Numbers
Documents updated: Running Document (added explicit reference rule)
Time to resolution: 8 minutes

PREVENTION
Rule added: All budget figures must come from Canonical Numbers. 
            No calculation from conversation history.
Process change: Session opening now includes explicit Canonical Numbers check
Structural change: None

METADATA
Related entries: TRACE-2025-01-16-002 (similar numerical drift)
Tags: budget, numerical, canonical-reference, session-protocol
Notes: Second numerical drift incident this month. Pattern emerging 
       around budget figures specifically. Consider adding budget 
       as a Stability Ping checkpoint.
```

---

## Severity Levels

Use these guidelines for severity classification:

| Level | Definition | Examples |
|-------|------------|----------|
| **Low** | Minor inconvenience, no real impact on work | Tone slightly off, minor clarification needed |
| **Medium** | Caused rework or confusion, recoverable quickly | Wrong number caught before use, context needed re-establishing |
| **High** | Significant disruption, potential for harm if not caught | Incorrect figure used in planning, boundary violation affecting decisions |
| **Critical** | Actual harm occurred or narrowly avoided | Financial loss, trust breakdown, corrupted authoritative document |

Most entries will be Low or Medium. High and Critical should be rare if governance is working.

---

## Categories Explained

### context_drift
AI lost or misremembered prior context, decisions, or agreements.

### numerical_error
Wrong calculations, mixed units, invented numbers, or failure to reference Canonical Numbers.

### version_confusion
Working from wrong version of a document, or multiple versions causing inconsistency.

### boundary_violation
AI stepped outside designated role, scope, or domain boundaries.

### tone_trust
Emotional misalignment, false reassurance, sycophancy, defensive hedging, or trust breakdown.

### miscommunication
Instructions unclear or misinterpreted, ambiguous language causing wrong action.

### cross_domain
Logic, tone, or assumptions from one project or domain bleeding into another.

### other
Does not fit above categories. Consider whether a new category is needed if this appears frequently.

---

## Using TraceSpec for Pattern Analysis

After accumulating 10 or more entries, analyse for patterns:

### By Category
```
Count entries by category. Which types are most frequent?

context_drift: 4
numerical_error: 3
miscommunication: 2
tone_trust: 1
```

### By Root Cause
```
Group entries by root cause. Are the same underlying issues recurring?

Failed to reference canonical source: 5 entries
Ambiguous instruction language: 3 entries
Context not re-established after break: 2 entries
```

### By Time
```
Plot entries over time. Is frequency decreasing as governance improves?

Week 1: 4 entries
Week 2: 3 entries
Week 3: 1 entry
Week 4: 2 entries
```

### By Prevention Effectiveness
```
After adding a prevention measure, did related failures stop?

Rule added Jan 16: All figures from Canonical Numbers
Related failures before: 3
Related failures after: 1 (partial compliance issue)
```

---

## Lightweight Alternative

If full TraceSpec feels too heavy, use a simplified version:

```
ID: [date-sequence]
Category: [category]
What happened: [one sentence]
Why: [one sentence]  
Fix: [one sentence]
Prevention: [one sentence]
```

Example:
```
ID: 2025-01-28-001
Category: numerical_error
What happened: AI reported budget as GBP 600 instead of GBP 500
Why: Derived from conversation instead of Canonical Numbers
Fix: Corrected figure, re-referenced canonical source
Prevention: Added rule requiring canonical reference for all budget figures
```

This captures the essential information without the full structure.

---

## When to Graduate to TraceSpec

Start with the basic Failure Log. Graduate to TraceSpec when:

- You have more than 10 failures and want to analyse patterns
- Failures are recurring despite basic fixes
- You are working in a high-stakes domain where detailed tracing adds value
- You want to share failure analysis with others
- You are treating the collaboration as a research or learning exercise

TraceSpec is a tool, not a requirement. Use the level of structure that serves your work.

---

## Storing Trace Entries

Options for storage:

**Markdown file:** Simple, portable, version-controllable
```
traces/
  2025-01/
    TRACE-2025-01-28-001.md
    TRACE-2025-01-28-002.md
```

**Single log file:** All entries in one document, newest first

**Spreadsheet:** If you want to filter, sort, and analyse numerically

**Database:** If you are building tooling around failure analysis

Choose based on your needs. Start simple.

---

## Privacy and Sharing

Before sharing trace entries:

- Remove sensitive details such as specific numbers, names, and confidential context
- Generalise where possible while preserving the learning
- Consider whether the pattern is useful to others or too specific to your situation

Trace entries can be valuable for teams adopting LC-OS. Sanitised examples help others learn from your failures.

---

*Structure your failures. Learn from the patterns. Build systems that improve.*
