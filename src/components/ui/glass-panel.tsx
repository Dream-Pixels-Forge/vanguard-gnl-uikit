import { cn } from '../../lib/utils'
import { getLiquidSurface, getAnimation } from '../../lib/tailwind-utils'
import * as React from 'react'

export interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean
}

export const GlassPanel = React.forwardRef<HTMLDivElement, GlassPanelProps>(
  function GlassPanel({ children, glow = false, className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          getLiquidSurface(),
          getAnimation('slow'),
          'rounded-3xl p-6',
          glow && 'shadow-[0_0_40px_rgba(59,130,246,0.15)]',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)
GlassPanel.displayName = 'GlassPanel'
