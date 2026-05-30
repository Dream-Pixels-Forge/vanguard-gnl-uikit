# Vanguard UIKit — Library Review

## Overview
The library is a React dark-themed UI component library with glassmorphism, neuromorphism, and liquid glass aesthetics. It has 4 theme variants and ~50+ components.

## Current State

### Strengths
1. Rich component set: Buttons, Cards, Badges, Forms, Navigation, Layout, Shell, Progress, Feedback, Overlays
2. 4 visually distinct themes: Default (glass/neuromorphic), Wooden (stone/amber), Black (zinc/sleek), Honeycomb (yellow/amber)
3. Consistent dark aesthetic across all themes
4. Beautiful glassmorphism and neuromorphic effects via Tailwind CSS
5. Co-located exports via barrel index files per component group
6. Toast context provider pattern

### Critical Issues

#### 1. No Build Pipeline
- Uses a custom `build.js` that just copies source files to `dist/` — no bundling, no tree-shaking, no minification
- No Vite/Rollup/Webpack build configuration
- `package.json` has `"main": "src/index.js"` pointing to source, not dist
- No ES module or CJS bundle generation
- No CSS extraction or bundling

#### 2. No TypeScript
- All components are `.jsx` — no type safety
- Type definitions are a manually written `index.d.ts` that's already out of sync with the actual components
- Several components declared in types don't exist as actual components (e.g., SkeletonText, SkeletonCard, PricingCard, FeatureCard, Grid, Stack, Center, etc.)
- Props interfaces in .d.ts don't match actual component implementations

#### 3. No Testing
- Zero tests — no unit tests, component tests, or visual regression tests
- No test runner configured
- No testing library dependency

#### 4. Massive Theme Duplication
- `src/theme/index.js` (180+ lines), `src/theme/wooden.js` (220 lines), `src/theme/woodenBlack.js` (177 lines), `src/theme/woodenBrown.js` — all contain nearly identical structure with different color values
- Theme objects are frozen Tailwind class strings that can't be customized by consumers
- The theme system is JS-only, not CSS-based — consumers can't override via CSS variables

#### 5. Component Duplication Across Themes
- Separate component files for each theme: `VanguardButton` + `WoodenButton` + `BlackButton` + `HoneycombButton` 
- All do the same thing with different class strings
- Leads to massive code duplication (~4x per component)
- Adding a new theme requires rewriting every component

#### 6. No Proper Package Exports
- `package.json` has no `exports` field
- `"files": ["dist"]` but build output doesn't include proper package structure
- Peer deps listed but no proper dependency management

#### 7. Build Script Issues
- `build.js` doesn't process JSX — it copies raw `.jsx` files
- Consumers would need their own JSX compilation pipeline
- No CSS output at all — Tailwind classes are hardcoded in JS strings
- No `size-limit` or bundle analysis

#### 8. Import Inconsistencies
- Mix of `import` and `require()` in same files (e.g., shell/index.js uses both)
- Some files import `React` but don't use it directly
- Hardcoded Lucide icon imports scattered across components
- `import { Upload } from 'lucide-react'` appears in middle of file (Input.jsx line 133)

#### 9. No CI/CD
- No GitHub Actions for linting, testing, building
- No automated publishing pipeline
- No PR checks

#### 10. Missing Component Patterns
- No `forwardRef` on interactive components
- No `displayName` on components
- No proper `className` merging utility (no `cn()` or `clsx` + `tailwind-merge`)
- No `asChild` polymorphic pattern
- No accessibility attributes
- No keyboard navigation support
- No focus management on modals/dropdowns
