#!/usr/bin/env node
/**
 * LC-OS Project Initializer
 *
 * Creates a new LC-OS project folder with templates pre-filled for your project.
 * Run from the LC-OS-Project repo root:
 *
 *   node scripts/init-project.js
 *
 * No dependencies — uses only Node.js built-in modules.
 * Requires Node.js 14+. Download at https://nodejs.org
 */

const fs   = require('fs');
const path = require('path');
const rl   = require('readline').createInterface({
  input:  process.stdin,
  output: process.stdout,
});

function ask(q) {
  return new Promise(resolve => rl.question(q, a => resolve(a.trim())));
}
function today() {
  return new Date().toISOString().split('T')[0];
}
function slugify(s) {
  return s.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-') || 'my-project';
}
function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}
function copyFilled(src, dest, vars) {
  let text = fs.readFileSync(src, 'utf8');
  for (const [k, v] of Object.entries(vars)) text = text.split(k).join(v);
  fs.writeFileSync(dest, text, 'utf8');
}
function write(dest, text) {
  fs.writeFileSync(dest, text, 'utf8');
}

async function main() {
  console.log('');
  console.log('╔══════════════════════════════════════════╗');
  console.log('║       LC-OS  Project  Initializer        ║');
  console.log('╚══════════════════════════════════════════╝');
  console.log('');
  console.log('Creates a new project folder with LC-OS templates ready to use.');
  console.log('Answer a few questions and you\'re set up in under a minute.');
  console.log('');

  const projectName = await ask('1. Project name  (e.g. "Q3 Marketing Campaign"): ');
  if (!projectName) { console.log('\nProject name is required. Run the script again.'); rl.close(); return; }

  const ownerName = await ask('2. Your name     (goes into the templates): ');
  const goal      = await ask('3. One sentence — what are you trying to accomplish? ');

  console.log('');
  console.log('Choose your starting tier:');
  console.log('');
  console.log('  1  Minimal  — 3 files, up and running in 30 minutes');
  console.log('               Recommended if you\'re trying LC-OS for the first time.');
  console.log('');
  console.log('  2  Full     — Complete toolkit: strategy master, all protocols,');
  console.log('               organised folder structure, repair and challenge guides.');
  console.log('               Recommended for complex or high-stakes work.');
  console.log('');
  const tierChoice = await ask('Tier (1 or 2, default 1): ');
  rl.close();

  const tier      = tierChoice === '2' ? 'full' : 'minimal';
  const slug      = slugify(projectName);
  const date      = today();
  const repoRoot  = path.resolve(__dirname, '..');
  const outputDir = path.join(process.cwd(), slug);

  if (fs.existsSync(outputDir)) {
    console.log(`\n⚠  Folder "${slug}" already exists.`);
    console.log('   Rename or delete it, then run the script again.\n');
    return;
  }

  const vars = {
    '[What are you working on?]':          projectName,
    '[When did this collaboration begin?]': date,
    '[DATE]':                               date,
    '[Your name]':                          ownerName || 'Your Name',
    '[What does success look like?]':       goal || '[What does success look like?]',
  };

  console.log('');
  console.log(`Creating: ./${slug}/`);
  console.log('');

  // ── MINIMAL ──────────────────────────────────────────────────────────────
  if (tier === 'minimal') {
    ensureDir(outputDir);
    const src = path.join(repoRoot, 'minimal');
    copyFilled(path.join(src, 'running-document-template.md'),  path.join(outputDir, 'running-document.md'),  vars);
    copyFilled(path.join(src, 'canonical-numbers-template.md'), path.join(outputDir, 'canonical-numbers.md'), vars);
    copyFilled(path.join(src, 'failure-log-template.md'),       path.join(outputDir, 'failure-log.md'),       vars);
    write(path.join(outputDir, 'README.md'), makeReadme(projectName, ownerName, goal, date, 'minimal'));

    console.log('  ✓  running-document.md    — your session memory');
    console.log('  ✓  canonical-numbers.md   — single source for all numbers');
    console.log('  ✓  failure-log.md         — log failures when they happen');
    console.log('  ✓  README.md              — quick reference for this project');
  }

  // ── FULL ─────────────────────────────────────────────────────────────────
  if (tier === 'full') {
    const gov     = path.join(outputDir, '00-governance');
    const scratch = path.join(outputDir, '02-working', 'scratch');
    const drafts  = path.join(outputDir, '03-outputs', 'drafts');
    const final   = path.join(outputDir, '03-outputs', 'final');
    const archive = path.join(outputDir, '04-archive');

    for (const d of [gov, path.join(outputDir,'01-inputs'), path.join(outputDir,'02-working'),
                     scratch, path.join(outputDir,'03-outputs'), drafts, final, archive]) {
      ensureDir(d);
      write(path.join(d, '.gitkeep'), '');
    }

    const srcFull = path.join(repoRoot, 'full');
    copyFilled(path.join(srcFull, 'running-document-template.md'),  path.join(gov, 'running-document.md'),  vars);
    copyFilled(path.join(srcFull, 'canonical-numbers-template.md'), path.join(gov, 'canonical-numbers.md'), vars);
    copyFilled(path.join(srcFull, 'STRATEGY-MASTER-TEMPLATE.md'),   path.join(gov, 'strategy-master.md'),   vars);
    copyFilled(path.join(srcFull, 'failure-log-template.md'),       path.join(outputDir, 'failure-log.md'), vars);

    for (const f of ['repair-protocol.md','stability-ping-template.md','challenge-protocol.md','affective-governance.md']) {
      fs.copyFileSync(path.join(srcFull, f), path.join(gov, f));
    }
    write(path.join(outputDir, 'README.md'), makeReadme(projectName, ownerName, goal, date, 'full'));

    console.log('  ✓  00-governance/running-document.md');
    console.log('  ✓  00-governance/canonical-numbers.md');
    console.log('  ✓  00-governance/strategy-master.md');
    console.log('  ✓  00-governance/repair-protocol.md');
    console.log('  ✓  00-governance/challenge-protocol.md');
    console.log('  ✓  00-governance/stability-ping-template.md');
    console.log('  ✓  00-governance/affective-governance.md');
    console.log('  ✓  failure-log.md');
    console.log('  ✓  01-inputs/  02-working/  03-outputs/  04-archive/');
    console.log('  ✓  README.md');
  }

  const govFile = tier === 'full' ? `${slug}/00-governance/running-document.md` : `${slug}/running-document.md`;
  console.log('');
  console.log('──────────────────────────────────────────────');
  console.log('Done. Your LC-OS project is ready.');
  console.log('');
  console.log('NEXT STEPS:');
  console.log('');
  console.log(`  1. Open ${govFile}`);
  console.log('     Fill in the sections marked with [...]');
  console.log('');
  console.log('  2. Start every AI session with this prompt:');
  console.log('');
  console.log('     "Read running-document.md before we begin.');
  console.log('      Confirm you\'ve loaded it and tell me what\'s');
  console.log('      most important to hold from it."');
  console.log('');
  console.log('  3. When something breaks:');
  console.log('     Stop → Diagnose → Rollback → Note');
  console.log('──────────────────────────────────────────────');
  console.log('');
}

function makeReadme(name, owner, goal, date, tier) {
  const govPath = tier === 'full' ? '00-governance/' : '';
  const files = tier === 'minimal'
    ? `| \`running-document.md\` | Shared memory — read at every session start |
| \`canonical-numbers.md\` | All numbers live here — AI never guesses them |
| \`failure-log.md\` | Log failures when they happen |`
    : `| \`00-governance/running-document.md\` | Shared memory — read at every session start |
| \`00-governance/canonical-numbers.md\` | All numbers live here — AI never guesses them |
| \`00-governance/strategy-master.md\` | Long-term rules, principles, constraints |
| \`00-governance/repair-protocol.md\` | What to do when things break |
| \`00-governance/challenge-protocol.md\` | How to disagree productively |
| \`failure-log.md\` | Log failures when they happen |
| \`01-inputs/\` | Source material — read-only for AI |
| \`02-working/\` | Work in progress |
| \`03-outputs/\` | Finished work |
| \`04-archive/\` | Deprecated files — never delete, archive here |`;

  return `# ${name}
${owner ? `\n**Owner:** ${owner}  ` : ''}
**Created:** ${date}  
**Tier:** LC-OS ${tier === 'full' ? 'Full' : 'Minimal'}
${goal ? `\n> ${goal}\n` : ''}
---

## Start Every Session

Paste this to your AI before doing anything else:

\`\`\`
Read ${govPath}running-document.md before we begin.
Confirm you've loaded it and tell me what's most important to hold from it.
\`\`\`

---

## Your Files

| File | Purpose |
|------|---------|
${files}

---

## When Things Break

**Stop → Diagnose → Rollback → Note**

1. **Stop** — pause everything immediately
2. **Diagnose** — identify what broke (not who)
3. **Rollback** — return to last known-good state
4. **Note** — log it in \`failure-log.md\`
${tier === 'full' ? '\nSee `00-governance/repair-protocol.md` for the full sequence.\n' : ''}
---

*Built on [LC-OS](https://github.com/LivingFramework/LC-OS-Project) — Lean Collaboration Operating System*
`;
}

main().catch(err => {
  console.error('\nError:', err.message);
  process.exit(1);
});
