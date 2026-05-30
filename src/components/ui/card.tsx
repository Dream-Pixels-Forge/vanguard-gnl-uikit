import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const cardVariants = cva(
  cn(
    'rounded-[2rem] transition-all duration-500',
    'overflow-hidden relative'
  ),
  {
    variants: {
      variant: {
        glass: cn(
          'bg-gradient-to-br from-white/[0.1] via-white/[0.05] to-white/[0.02]',
          'backdrop-blur-2xl border border-white/15',
          'shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]'
        ),
        neuro: cn(
          'bg-[#0a0a0b]',
          'shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.03)]',
          'border border-white/5'
        ),
        liquid: cn(
          'bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent',
          'backdrop-blur-xl border border-white/10',
          'shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]'
        ),
      },
      hoverable: {
        true: 'hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] cursor-pointer',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'glass',
      hoverable: false,
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, hoverable, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, hoverable }), 'p-6', className)}
      {...props}
    />
  )
)
Card.displayName = 'Card'

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('pb-4 border-b border-white/5', className)} {...props} />
  )
)
CardHeader.displayName = 'CardHeader'

const CardBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('py-4', className)} {...props} />
  )
)
CardBody.displayName = 'CardBody'

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('pt-4 border-t border-white/5', className)} {...props} />
  )
)
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardBody, CardFooter, cardVariants }
