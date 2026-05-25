# LC-OS Scripts

Automation tools for setting up and maintaining LC-OS projects.

---

## init-project.js — Project Initializer

Creates a new LC-OS project folder in one command, with templates pre-filled for your project.

### What it does

- Asks you four questions (project name, your name, your goal, which tier)
- Creates a properly structured project folder
- Fills in your name, project name, and date in every template
- Prints your first session prompt so you can start immediately

### Requirements

You need **Node.js** installed. Check if you have it:

```
node --version
```

If that prints a version number (e.g. `v20.11.0`), you're ready. If you get an error, install Node.js from [nodejs.org](https://nodejs.org) — download the **LTS** version, run the installer, restart your terminal.

### How to run it

Open a terminal, navigate to this repo, and run:

```
node scripts/init-project.js
```

The script will ask you a few questions and create your project folder in the current directory.

**Example session:**

```
╔══════════════════════════════════════════╗
║       LC-OS  Project  Initializer        ║
╚══════════════════════════════════════════╝

1. Project name  (e.g. "Q3 Marketing Campaign"): My Research Project
2. Your name     (goes into the templates): Rishi Sood
3. One sentence — what are you trying to accomplish? Write a literature review on AI governance

Choose your starting tier:

  1  Minimal  — 3 files, up and running in 30 minutes
  2  Full     — Complete toolkit with all protocols

Tier (1 or 2, default 1): 1

Creating: ./my-research-project/

  ✓  running-document.md
  ✓  canonical-numbers.md
  ✓  failure-log.md
  ✓  README.md

Done. Your LC-OS project is ready.
```

### Which tier should I choose?

**Minimal** if:
- This is your first LC-OS project
- The work is relatively straightforward
- You want to try the system before committing to the full setup

**Full** if:
- You're working across multiple domains or workstreams
- The project will run for several months
- Accuracy and governance matter a lot (finance, research, legal, strategy)
- You've used the minimal tier before and want more structure

You can always start minimal and switch to full later — just copy your existing documents into the full folder structure.

### No Node.js? Use the Python alternative

If you'd rather not install Node.js, you can set up manually:

1. Copy the templates from `minimal/` or `full/` into a new folder
2. Find and replace `[DATE]` with today's date
3. Find and replace `[Your name]` with your name
4. Find and replace `[What are you working on?]` with your project name

It takes about 5 minutes. The script just saves those 5 minutes for you.

---

*Part of [LC-OS-Project](https://github.com/LivingFramework/LC-OS-Project)*
