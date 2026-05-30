# Phase 1 — cn() Utility + clsx + tailwind-merge

## Goal
Add a production-grade className merging utility for the vanguard-uikit library. This is the foundational utility that every component will use for safe className merging.

## Requirements

### 1. Create `src/lib/utils.js`
A utility file that exports a `cn()` function using `clsx` + `tailwind-merge`.

```js
// src/lib/utils.js
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
```

### 2. Install Packages
Add these as dependencies (not devDependencies since consumers need them at runtime):
- `clsx` (latest)
- `tailwind-merge` (latest)

### 3. Verify
- `cn()` should merge Tailwind classes correctly (e.g., `cn('px-4', 'px-6')` → `'px-6'`)
- `cn()` should handle conditional classes (e.g., `cn('base', false && 'hidden')` → `'base'`)
- `cn()` should handle arrays and objects

## Context
- Current library has no className merging utility — components use raw string concatenation with backticks and `${className}`
- This is the first step before refactoring components
- File should be CommonJS/ESM compatible

## Output
- `src/lib/utils.js` created with the `cn()` function
- `package.json` updated with `clsx` and `tailwind-merge` dependencies
- packages installed via pnpm
