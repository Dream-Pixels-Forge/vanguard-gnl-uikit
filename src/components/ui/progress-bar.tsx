import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const progressVariants = cva(
  'h-full rounded-full transition-all duration-700',
  {
    variants: {
      variant: {
        blue: 'bg-gradient-to-r from-blue-500 to-blue-600 shadow-[0_2px_12px_rgba(59,130,246,0.4)]',
        gradient: 'bg-gradient-to-r from-blue-500 to-blue-400 shadow-[0_2px_12px_rgba(59,130,246,0.4)]',
      },
    },
    defaultVariants: {
      variant: 'blue',
    },
  }
)

export interface ProgressBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressVariants> {
  value: number
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
}

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ value, variant, size = 'md', showLabel = false, className, ...props }, ref) => {
    const sizes = { sm: 'h-1', md: 'h-2', lg: 'h-3' }

    return (
      <div ref={ref} className={className} {...props}>
        {showLabel && (
          <div className="flex justify-between mb-2">
            <span className="text-[9px] font-bold text-white/60">Progress</span>
            <span className="text-[9px] font-bold text-white/40">{value}%</span>
          </div>
        )}
        <div className={cn(
          'w-full rounded-full overflow-hidden',
          'bg-[#0a0a0b] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.4),inset_-4px_-4px_8px_rgba(255,255,255,0.03)]'
        )}>
          <div
            className={cn(progressVariants({ variant }), sizes[size])}
            style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
          />
        </div>
      </div>
    )
  }
)
ProgressBar.displayName = 'ProgressBar'

export { ProgressBar, progressVariants }
