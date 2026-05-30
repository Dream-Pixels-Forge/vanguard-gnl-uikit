import * as React from 'react'
import { cn } from '../../lib/utils'

const variantColors = {
  blue: { color: '#3b82f6', glow: 'rgba(59,130,246,0.5)' },
}

export interface StatusBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof variantColors
}

const StatusBadge = React.forwardRef<HTMLDivElement, StatusBadgeProps>(
  ({ children, variant = 'blue', className, ...props }, ref) => {
    const colors = variantColors[variant]

    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center gap-2 px-4 py-2 rounded-full',
          'bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent',
          'backdrop-blur-xl border border-white/10',
          'shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]',
          className,
        )}
        {...props}
      >
        <div
          className="w-1.5 h-1.5 rounded-full animate-pulse"
          style={{
            backgroundColor: colors.color,
            boxShadow: `0 0 12px ${colors.glow}, 0 0 24px ${colors.glow}40`,
          }}
        />
        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/70">
          {children}
        </span>
      </div>
    )
  },
)
StatusBadge.displayName = 'StatusBadge'

export { StatusBadge }
