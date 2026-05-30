import { cn } from '../../lib/utils'
import { getGlassBackground } from '../../lib/tailwind-utils'
import * as React from 'react'

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical'
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  function Divider({ className, orientation = 'horizontal', ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          orientation === 'horizontal' ? 'h-px w-full' : 'w-px h-full',
          getGlassBackground(),
          className,
        )}
        {...props}
      />
    )
  },
)
Divider.displayName = 'Divider'
