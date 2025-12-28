# Tool / Agent Extension Guardrails

## Guardrails
- Tools don’t replace governance: they move data, they don’t decide truth.
- RAG helps recall, not consistency: still need canonical sources + change control.
- Agents amplify drift: require step gates, explicit stop conditions, and logging.
- Any automated action must be reversible and audited (who/what/when/why).

## Tool extension checklist

Tool Extension Checklist
- Canonical source defined (file / database / sheet)
- Read-before-write enforced
- Step gates + “Next” approvals
- Audit log enabled
- Rollback plan exists

