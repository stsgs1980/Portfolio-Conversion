# Contributing to Portfolio

Thank you for your interest in contributing! This document provides guidelines for contributing to the portfolio project.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other contributors

## Getting Started

### Prerequisites

- Node.js 20+ or Bun 1.3+
- Git
- Familiarity with Next.js, TypeScript, and Tailwind CSS

### Setting Up

1. Fork the repository
2. Clone your fork:

```bash
git clone https://github.com/Sts8987/Portfolio-Conversion.git
cd Portfolio-Conversion
```

3. Install dependencies:

```bash
bun install
```

4. Create a new branch:

```bash
git checkout -b feature/your-feature-name
```

5. Make your changes

6. Run linter:

```bash
bun run lint
```

7. Commit and push:

```bash
git add .
git commit -m "feat: add your feature"
git push origin feature/your-feature-name
```

8. Create a Pull Request

## Development Standards

### No-Unicode Policy v2.0

This project strictly follows the No-Unicode Policy:

**Forbidden:**
- Emojis in UI components
- Unicode icons and symbols
- Decorative Unicode characters

**Required:**
- All icons must be SVG (Lucide React)
- Use text labels instead of Unicode symbols
- Use design tokens for styling

**Examples:**

```typescript
// GOOD
<Icon name="mail" />
<span>Email</span>

// BAD
<span>Email</span>  // No emoji
<span>Success</span>  // No checkmark
```

### Z.ai Reproducibility Standard

**Before committing:**

- [ ] `bun run lint` passes with 0 errors
- [ ] No absolute paths in code
- [ ] No `console.log` (only `console.error` in catch blocks)
- [ ] No unused packages or files
- [ ] API error handling uses generic messages
- [ ] Binary files not in git

**Paths:**
- Use relative paths only
- No `http://localhost:` in code
- Use `/api/endpoint` for API calls

**Example:**

```typescript
// GOOD
fetch('/api/documents')

// BAD
fetch('http://localhost:3000/api/documents')
```

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
feat: add new feature
fix: fix bug
docs: update documentation
style: format code
refactor: refactor code
test: add tests
chore: update dependencies
```

## Pull Request Process

1. Ensure your PR passes all checks
2. Update documentation if needed
3. Add tests if applicable
4. Keep PR focused and concise
5. Respond to review comments

## Coding Standards

### TypeScript

- Use strict TypeScript
- Provide proper types for all functions
- Avoid `any` type
- Use interfaces for object shapes

### React Components

- Use functional components with hooks
- Keep components small and focused
- Use `use client` or `use server` directives appropriately
- Follow React best practices

### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Use semantic HTML
- Ensure accessibility (ARIA labels, keyboard navigation)

### File Structure

- Components in `src/components/`
- UI components in `src/components/ui/`
- Hooks in `src/hooks/`
- Utilities in `src/lib/`

## Testing

- Add tests for new features
- Ensure all tests pass before submitting
- Test on multiple browsers and screen sizes

## Questions?

Feel free to open an issue or start a discussion.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
