# Phase 1 — Add forwardRef + displayName to Interactive Components

## Goal
Add `React.forwardRef` and explicit `displayName` to all interactive components in the vanguard-uikit library. This improves DX for consumers who need ref access and makes components show proper names in React DevTools.

## Requirements

### 1. Interactive Components That Need forwardRef + displayName

These are the primary interactive components (receive user input or focus):

**buttons/**
- `VanguardButton` — button element
- `IconButton` — button element

**form/** (all in `Input.jsx`)
- `Input` — input element
- `SearchInput` — input element
- `Textarea` — textarea element
- `Select` — select element
- `Toggle` — button element
- `Switch` — button element
- `Checkbox` — input element
- `Slider` — input element

**overlays/**
- `Modal` — div (less critical for ref)
- `Dropdown` — div
- `DropdownItem` — button element

**navigation/**
- `Tabs` — button elements inside
- `Accordion` — button elements inside

**And similar pattern for all theme variant components:**
- `wooden/` components
- `black/` components
- `brown/` components
- `honeycomb/` components

### 2. Pattern to Follow

For each component, change from:
```jsx
export const ComponentName = ({ children, ...props }) => (
  <button className={...}>{children}</button>
);
```

To:
```jsx
export const ComponentName = React.forwardRef(function ComponentName({ children, ...props }, ref) {
  return <button ref={ref} className={...}>{children}</button>;
});
ComponentName.displayName = 'ComponentName';
```

### 3. Only Touch Interactive Components
- Skip purely presentational components (Heading, Text, Label, Divider, etc.)
- Skip layout components that don't take refs
- Focus on form controls, buttons, and clickable elements

### 4. Verify
- Each component exports `displayName`
- Each component uses `React.forwardRef`
- The `ref` is properly forwarded to the underlying DOM element

## Context
- Components are in `/home/dimona/Dev/uiKits/vanguard-gnl-uikit/src/components/`
- All are .jsx files
- Import `React` from 'react' is already present in most files

## Output
- Modified component files with forwardRef + displayName added
- No functional changes — just ref forwarding and displayNames
