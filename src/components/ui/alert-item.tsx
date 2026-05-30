import { cn } from '../../lib/utils'
import { getAnimation } from '../../lib/tailwind-utils'
import { X } from 'lucide-react'
import * as React from 'react'

export interface AlertItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  variant?: 'info' | 'warning' | 'error' | 'success'
  onDismiss?: () => void
}

const variantStyles: Record<string, { border: string; icon: string; dot: string }> = {
  info: { border: 'border-blue-500/20', icon: 'text-blue-400', dot: 'bg-blue-500' },
  warning: { border: 'border-white/20', icon: 'text-white/70', dot: 'bg-white' },
  error: { border: 'border-white/20', icon: 'text-white/70', dot: 'bg-white' },
  success: { border: 'border-blue-500/20', icon: 'text-blue-400', dot: 'bg-blue-500' },
}

export const AlertItem = React.forwardRef<HTMLDivElement, AlertItemProps>(
  function AlertItem({ title, description, variant = 'info', onDismiss, className, ...props }, ref) {
    const styles = variantStyles[variant]

    return (
      <div
        ref={ref}
        className={cn(
          'flex items-start gap-3 p-4 rounded-2xl',
          'bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-xl border',
          styles.border,
          getAnimation('fast'),
          className,
        )}
        {...props}
      >
        <div className={cn('mt-0.5 h-2 w-2 rounded-full flex-shrink-0', styles.dot)} />
        <div className="flex-1 min-w-0">
          <p className={cn('text-sm font-semibold', styles.icon)}>{title}</p>
          {description && <p className="text-xs text-white/40 mt-1 leading-relaxed">{description}</p>}
        </div>
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="p-1 rounded-lg text-white/20 hover:text-white/50 hover:bg-white/5 transition-colors"
          >
            <X size={14} />
          </button>
        )}
      </div>
    )
  },
)
AlertItem.displayName = 'AlertItem'
