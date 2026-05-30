import { cn } from '../../lib/utils'
import * as React from 'react'

export interface SplitViewProps extends React.HTMLAttributes<HTMLDivElement> {
  left: React.ReactNode
  right: React.ReactNode
  split?: number
  direction?: 'horizontal' | 'vertical'
}

export const SplitView = React.forwardRef<HTMLDivElement, SplitViewProps>(
  function SplitView({ left, right, split = 50, direction = 'horizontal', className, ...props }, ref) {
    const isHorizontal = direction === 'horizontal'

    return (
      <div
        ref={ref}
        className={cn(
          'flex',
          isHorizontal ? 'flex-row' : 'flex-col',
          'rounded-3xl overflow-hidden border border-white/5',
          className,
        )}
        {...props}
      >
        <div
          className="overflow-auto"
          style={isHorizontal ? { width: `${split}%` } : { height: `${split}%` }}
        >
          {left}
        </div>
        <div className="w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent" />
        <div className="flex-1 overflow-auto">{right}</div>
      </div>
    )
  },
)
SplitView.displayName = 'SplitView'
