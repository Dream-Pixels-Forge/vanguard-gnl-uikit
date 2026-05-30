# Phase 1 — Replace build.js with Vite Library Mode

## Goal
Replace the manual `build.js` file-copy script with a proper Vite library mode build. The current build just copies raw .jsx files to dist/ — consumers would need their own JSX compilation.

## Requirements

### 1. Create `vite.config.js`
Use Vite library mode (CommonJS for now since source is .jsx, not TypeScript):
- Entry: `src/index.js`
- Name: `vanguard-uikit`
- Formats: ESM + CJS
- External: react, react-dom, lucide-react
- Rollup options to preserve file structure for CSS imports if any

### 2. Update `package.json`
- Add `vite` as devDependency
- Update `build` script: `"build": "vite build"`
- Update `files` field to include proper dist output
- Consider adding `"type": "module"` or keep as-is
- Update `main` / `module` / `exports` fields

### 3. Remove `build.js`
The old build script is no longer needed.

### 4. Verify
- `pnpm build` should produce `dist/` with ESM + CJS bundles
- The bundles should have .jsx compiled to .js
- External packages (react, react-dom, lucide-react) should NOT be bundled

## Important Notes
- Source files are .jsx (not .tsx), so Vite needs no TypeScript plugin
- Vite handles .jsx compilation natively
- The library currently has no CSS file output — that's fine for now
- The package should remain compatible with both ESM and CJS consumers

## Context Files
- `/home/dimona/Dev/uiKits/vanguard-gnl-uikit/package.json` — current package config
- `/home/dimona/Dev/uiKits/vanguard-gnl-uikit/build.js` — current build script (to remove)

## Output
- `vite.config.js` created
- `package.json` scripts and build config updated
- `build.js` removed
- `pnpm build` works and produces proper dist output
