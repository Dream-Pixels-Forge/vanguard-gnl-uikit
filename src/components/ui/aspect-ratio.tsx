import { cn } from '../../lib/utils'
import * as React from 'react'

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: number
}

export const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  function AspectRatio({ className, ratio = 16 / 9, style, children, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn('relative w-full', className)}
        style={{ paddingBottom: `${(1 / ratio) * 100}%`, ...style }}
        {...props}
      >
        <div className="absolute inset-0">{children}</div>
      </div>
    )
  },
)
AspectRatio.displayName = 'AspectRatio'
