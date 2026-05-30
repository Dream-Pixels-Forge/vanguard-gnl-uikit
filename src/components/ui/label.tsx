import { cn } from '../../lib/utils'
import * as React from 'react'

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  function Label({ className, children, ...props }, ref) {
    return (
      <label
        ref={ref}
        className={cn(
          'block text-[10px] font-black uppercase tracking-widest text-white/60 mb-2',
          className,
        )}
        {...props}
      >
        {children}
      </label>
    )
  },
)
Label.displayName = 'Label'
