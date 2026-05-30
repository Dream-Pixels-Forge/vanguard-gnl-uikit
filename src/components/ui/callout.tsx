import { cn } from '../../lib/utils'
import { getAnimation } from '../../lib/tailwind-utils'
import * as React from 'react'

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  variant?: 'info' | 'warning' | 'error' | 'success' | 'tip'
  icon?: React.ElementType
}

const variantStyles: Record<string, { bg: string; border: string; text: string }> = {
  info: { bg: 'from-blue-500/10 to-transparent', border: 'border-blue-500/20', text: 'text-blue-300' },
  warning: { bg: 'from-white/10 to-transparent', border: 'border-white/20', text: 'text-white/70' },
  error: { bg: 'from-white/10 to-transparent', border: 'border-white/20', text: 'text-white/70' },
  success: { bg: 'from-blue-500/10 to-transparent', border: 'border-blue-500/20', text: 'text-blue-300' },
  tip: { bg: 'from-white/10 to-transparent', border: 'border-white/20', text: 'text-white/70' },
}

export const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(
  function Callout({ children, title, variant = 'info', icon: Icon, className, ...props }, ref) {
    const styles = variantStyles[variant]

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl p-4 border backdrop-blur-xl',
          `bg-gradient-to-r ${styles.bg}`,
          styles.border,
          getAnimation('fast'),
          className,
        )}
        {...props}
      >
        <div className="flex gap-3">
          {Icon && (
            <div className={cn('flex-shrink-0 mt-0.5', styles.text)}>
              <Icon size={16} />
            </div>
          )}
          <div>
            {title && <p className={cn('text-sm font-bold mb-1', styles.text)}>{title}</p>}
            <div className="text-xs text-white/50 leading-relaxed">{children}</div>
          </div>
        </div>
      </div>
    )
  },
)
Callout.displayName = 'Callout'
