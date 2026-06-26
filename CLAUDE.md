# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## What this repository is

This is the special GitHub profile repository (`LeoFalco/LeoFalco`). Its
`README.md` renders on Leo's GitHub profile page at
<https://github.com/LeoFalco>. There is no application code — the repository
contains the profile README, image assets under `assets/icons/`, and
Markdown/formatting tooling.

## Commands

```bash
npm run lint      # prettier --check + markdownlint over *.md (run before push)
npm run lint-fix  # prettier --write to auto-format
npm test          # runs lint via pretest, then a no-op (no real tests)
```

A Husky `pre-push` hook runs `npm test` (which runs lint). The GitHub Actions
`Lint` workflow (`.github/workflows/lint.yml`) runs `github/super-linter` on
every push against `master`.

## Notes

- Default branch is `master`.
- Editing the profile means editing `README.md`; the commented-out icon block
  at the bottom references files in `assets/icons/`.
