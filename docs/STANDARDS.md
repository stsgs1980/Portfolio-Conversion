# Project Standards

This document outlines the standards and guidelines followed in this project.

## No-Unicode Policy v2.0

### Purpose

Ensure visual consistency, professional appearance, and manageable design system by prohibiting Unicode graphics and emojis.

### Rules

**Forbidden:**
- Emojis in UI components
- Unicode icons and symbols
- Decorative Unicode characters

**Required:**
- All icons must be SVG (Lucide React)
- Use text labels instead of Unicode symbols
- Use design tokens for styling

### Examples

```typescript
// GOOD
<Mail size={20} />
<span>Email</span>

// BAD
<span>Email</span>  // No emoji
<span>Success</span>  // No checkmark
```

## Z.ai Reproducibility Standard v1.0

### Formula

```
git clone + bun install + bun run dev = working application
```

Always. Everywhere. On any machine. Without exceptions.

### Environment

- `.env.example` is mandatory for all environment variables
- Use relative paths only (no `http://localhost`, `/home`, `/Users`)
- Binary files (.db, .sqlite, uploads) are excluded from git

### Code Quality

- No `console.log` in production code (only `console.error` in catch blocks)
- No absolute paths in code
- Generic error messages for API errors
- Unused packages should be removed

### Before Commit Checklist

- [ ] `bun run lint` passes with 0 errors
- [ ] No absolute paths in code
- [ ] No `console.log` (except `console.error` in catch)
- [ ] No unused packages/files
- [ ] API error handling uses generic messages
- [ ] Binary files not in git

## Worklog System

### Purpose

Track work done by all agents on the project.

### Task ID System

| Pattern | Example | Usage |
|---------|--------|-------|
| N | 1, 2, 3 | Sequential tasks |
| N-x | 2-a, 2-b | Parallel tasks |
| N-x-y | 2-a-1 | Nested subtasks |

### Rules for Agents

1. BEFORE work - read worklog.md
2. AFTER work - add entry to the end (DO NOT overwrite)
3. Use the specified format

### Entry Format

```markdown
---
Task ID: <ID>
Agent: <agent name>
Task: <description>

Work Log:
- <action 1>
- <action 2>

Stage Summary:
- Files: <list of files>
- Status: completed
---
```

## Color Palette

- Default: stone, slate, neutral, green, emerald
- Accent: indigo (used in this project)
- All colors use CSS variables: `bg-primary`, `text-foreground`, `bg-muted`

## Code Style

### TypeScript

- Use strict TypeScript
- Provide proper types for all functions
- Avoid `any` type
- Use interfaces for object shapes

### React Components

- Use functional components with hooks
- Keep components small and focused
- Use `use client` or `use server` directives appropriately

### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Use semantic HTML
- Ensure accessibility (ARIA labels, keyboard navigation)

## Commit Messages

Follow Conventional Commits specification:

```
feat: add new feature
fix: fix bug
docs: update documentation
style: format code
refactor: refactor code
test: add tests
chore: update dependencies
```

## Footer Signature

Format: `Built with: Next.js 16 + TypeScript + Tailwind CSS + shadcn/ui`

- Allowed: Latin, Cyrillic, digits, + and : symbols
- Forbidden: Emojis, Unicode graphics

---

Version: 1.0
Last Updated: 2025-01-09
