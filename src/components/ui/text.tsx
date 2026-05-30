import { cn } from '../../lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

export const textVariants = cva('font-medium leading-relaxed', {
  variants: {
    size: {
      xs: 'text-[9px]',
      sm: 'text-[10px]',
      md: 'text-xs',
      lg: 'text-sm',
      xl: 'text-base',
    },
    variant: {
      default: 'text-white/60',
      muted: 'text-white/40',
      subtle: 'text-white/20',
      primary: 'text-blue-300',
      success: 'text-white/70',
      danger: 'text-white/70',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
})

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  function Text({ className, size, variant, children, ...props }, ref) {
    return (
      <p ref={ref} className={cn(textVariants({ size, variant }), className)} {...props}>
        {children}
      </p>
    )
  },
)
Text.displayName = 'Text'
