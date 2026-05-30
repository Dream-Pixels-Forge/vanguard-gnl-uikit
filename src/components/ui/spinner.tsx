import { cn } from '../../lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

export const spinnerVariants = cva('animate-spin rounded-full border-t-transparent', {
  variants: {
    variant: {
      blue: 'border-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.4)]',
      white: 'border-white/60',
    },
    size: {
      sm: 'w-4 h-4 border-2',
      md: 'w-8 h-8 border-2',
      lg: 'w-12 h-12 border-[3px]',
      xl: 'w-16 h-16 border-4',
    },
  },
  defaultVariants: {
    variant: 'blue',
    size: 'md',
  },
})

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {}

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  function Spinner({ className, variant, size, ...props }, ref) {
    return (
      <div ref={ref} className={cn('inline-flex items-center justify-center', className)} {...props}>
        <div className={cn(spinnerVariants({ variant, size }))} />
      </div>
    )
  },
)
Spinner.displayName = 'Spinner'
