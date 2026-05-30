/**
 * Get glassmorphism background + border classes.
 */
export function getGlassBackground(): string {
  return 'bg-white/5 backdrop-blur-xl border border-white/10'
}

/**
 * Get liquid glass effect classes.
 * Higher blur + gradient + inset highlight for a premium glass feel.
 */
export function getLiquidGlass(): string {
  return 'bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02] backdrop-blur-2xl border border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]'
}

/**
 * Get neuromorphic effect classes.
 * Dual shadows (dark + light) for an embossed/pressed look.
 */
export function getNeuromorphic(): string {
  return 'bg-[#0a0a0b] shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.03)] border border-white/5'
}

/**
 * Get liquid surface classes.
 * Combined glass + gradient + shadow for premium surfaces.
 */
export function getLiquidSurface(): string {
  return 'bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]'
}

/**
 * Get blue glow shadow.
 */
export function getGlow(size: 'sm' | 'md' | 'lg' = 'md'): string {
  const blur = { sm: '12px', md: '20px', lg: '32px' }[size]
  return `shadow-[0_0_${blur}_hsl(217_91%_60%/_0.5)]`
}

/**
 * Get accent button shadow with hover lift.
 */
export function withAccentShadow(): string {
  return 'shadow-vgn-accent hover:translate-y-[-2px]'
}

/**
 * Get animation utility classes.
 */
export function getAnimation(type: 'fast' | 'slow' | 'liquid' | 'bounce' | 'elastic'): string {
  const map = {
    fast: 'transition-all duration-300 ease-out',
    slow: 'transition-all duration-500 cubic-bezier(0.23, 1, 0.32, 1)',
    liquid: 'transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1)',
    bounce: 'transition-transform duration-300 cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    elastic: 'transition-all duration-500 cubic-bezier(0.68, -0.6, 0.32, 1.6)',
  }
  return map[type]
}

/**
 * Get inner highlight class for liquid glass inset glow.
 */
export function getInnerHighlight(): string {
  return 'shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'
}

/**
 * Get dark gradient background variants.
 */
export function getDarkGradient(
  variant: 'subtle' | 'medium' | 'strong' | 'primary' = 'subtle',
): string {
  const variants = {
    subtle: 'bg-gradient-to-br from-white/5 to-transparent',
    medium: 'bg-gradient-to-br from-white/10 to-white/5',
    strong: 'bg-gradient-to-br from-white/20 to-white/10',
    primary: 'bg-gradient-to-br from-blue-600/20 to-blue-600/5',
  }
  return variants[variant]
}
