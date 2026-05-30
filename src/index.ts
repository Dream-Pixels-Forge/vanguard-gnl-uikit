// Vanguard GNL UIKit — Main Entry Point
// Glassmorphism / Neuromorphism / Liquid Glass Component Library

// Components
export * from './components/ui'

// Hooks
export { useToast, useToastState, ToastContext } from './hooks/use-toast'
export type { ToastData, ToastVariant } from './hooks/use-toast'

export { useIntersectionObserver } from './hooks/use-intersection-observer'
export { useAnimation } from './hooks/use-animation'
export { useKeyboardShortcut } from './hooks/use-keyboard-shortcut'
export type { KeyModifier } from './hooks/use-keyboard-shortcut'

// Providers
export { ThemeProvider, useTheme } from './providers/theme-provider'
export { ToastProvider, Toast } from './providers/toast-provider'

// Utilities
export { cn } from './lib/utils'
export {
  getGlassBackground,
  getLiquidGlass,
  getLiquidSurface,
  getNeuromorphic,
  getGlow,
  withAccentShadow,
  getAnimation,
  getInnerHighlight,
  getDarkGradient,
} from './lib/tailwind-utils'

// Tokens
export { colors } from './tokens/colors'
export type { AccentColor } from './tokens/colors'
export { shadows } from './tokens/shadows'
export type { ShadowType, ShadowSize } from './tokens/shadows'
