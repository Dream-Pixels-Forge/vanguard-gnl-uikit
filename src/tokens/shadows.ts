/**
 * Vanguard GNL — Shadow tokens
 * Shadow definitions for glass, neuromorphism, and glow effects.
 * CSS variables in globals.css are the source of truth for rendering.
 */

export type ShadowType = 'glass' | 'neuro' | 'glow' | 'accent'
export type ShadowSize = 'sm' | 'md' | 'lg'

export const shadows = {
  glass: {
    sm: '0 4px 16px hsl(0 0% 0% / 0.3), inset 0 1px 0 hsl(0 0% 100% / 0.1)',
    md: '0 8px 32px hsl(0 0% 0% / 0.3), inset 0 1px 0 hsl(0 0% 100% / 0.1)',
    lg: '0 12px 40px hsl(0 0% 0% / 0.4), inset 0 1px 0 hsl(0 0% 100% / 0.15)',
  },
  neuro: {
    sm: '4px 4px 8px hsl(0 0% 0% / 0.4), -4px -4px 8px hsl(0 0% 100% / 0.03)',
    md: '8px 8px 16px hsl(0 0% 0% / 0.4), -8px -8px 16px hsl(0 0% 100% / 0.03)',
    lg: '12px 12px 24px hsl(0 0% 0% / 0.4), -12px -12px 24px hsl(0 0% 100% / 0.03)',
  },
  glow: {
    blue: '0 0 20px hsl(217 91% 60% / 0.5)',
  },
  accent: {
    blue: '0 8px 24px hsl(217 91% 60% / 0.4), inset 0 1px 1px hsl(0 0% 100% / 0.2)',
  },
} as const
