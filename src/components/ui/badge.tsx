import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const badgeVariants = cva(
  cn(
    'inline-flex items-center font-black uppercase tracking-widest rounded-full border backdrop-blur-md'
  ),
  {
    variants: {
      variant: {
        default: 'bg-white/5 text-white/60 border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]',
        blue: 'bg-gradient-to-br from-blue-500/20 to-blue-500/10 text-blue-300 border-blue-400/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]',
      },
      size: {
        sm: 'px-2 py-0.5 text-[8px]',
        md: 'px-3 py-1 text-[9px]',
        lg: 'px-4 py-1.5 text-[10px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => (
    <span ref={ref} className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
)
Badge.displayName = 'Badge'

export { Badge, badgeVariants }
