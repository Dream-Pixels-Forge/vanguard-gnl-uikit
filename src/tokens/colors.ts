/**
 * Vanguard GNL — Color tokens
 * Focused palette: blue accent + white/glass for a cohesive dark theme.
 * CSS variables in globals.css are the source of truth for rendering.
 */

export const colors = {
  background: {
    primary: '0 0% 4%',
    surface: '0 0% 6%',
    elevated: '0 0% 8%',
    overlay: '0 0% 0% / 0.8',
  },
  accent: {
    blue: '217 91% 60%',
  },
  text: {
    primary: '0 0% 100%',
    secondary: '0 0% 100% / 0.7',
    muted: '0 0% 100% / 0.4',
    subtle: '0 0% 100% / 0.2',
  },
  border: {
    subtle: '0 0% 100% / 0.05',
    light: '0 0% 100% / 0.1',
    medium: '0 0% 100% / 0.15',
    strong: '0 0% 100% / 0.2',
  },
  glass: {
    bg: '0 0% 100% / 0.05',
    border: '0 0% 100% / 0.1',
    highlight: '0 0% 100% / 0.15',
    shadow: '0 0% 0% / 0.3',
  },
  neuro: {
    light: '0 0% 100% / 0.03',
    shadow: '0 0% 0% / 0.4',
  },
} as const

export type AccentColor = keyof typeof colors.accent
