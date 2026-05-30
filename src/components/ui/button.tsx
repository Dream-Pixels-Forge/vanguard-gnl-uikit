import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
  cn(
    'inline-flex items-center justify-center gap-3',
    'rounded-2xl font-black uppercase tracking-[0.2em]',
    'transition-all duration-500 ease-out',
    'active:scale-95',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50',
    'disabled:pointer-events-none disabled:opacity-50',
    'overflow-hidden relative group'
  ),
  {
    variants: {
      variant: {
        primary: cn(
          'bg-gradient-to-br from-white via-white/90 to-white/80 text-black',
          'border border-white/30',
          'hover:shadow-[0_0_50px_rgba(255,255,255,0.3),inset_0_1px_2px_rgba(255,255,255,0.5)]'
        ),
        accent: cn(
          'bg-gradient-to-br from-blue-600 to-blue-700 text-white',
          'shadow-[0_8px_24px_rgba(59,130,246,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)]',
          'hover:shadow-[0_12px_32px_rgba(59,130,246,0.5),inset_0_1px_1px_rgba(255,255,255,0.3)]',
          'hover:-translate-y-0.5'
        ),
        glass: cn(
          'bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02]',
          'backdrop-blur-xl border border-white/15',
          'shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]',
          'hover:from-white/15 hover:via-white/8 hover:to-white/[0.03]',
          'hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15)]',
          'text-white'
        ),
        ghost: cn(
          'bg-transparent text-white/60',
          'hover:text-white hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent',
          'hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'
        ),
        danger: cn(
          'bg-gradient-to-br from-white/10 to-white/5 text-white/70 border border-white/10',
          'hover:from-white/15 hover:to-white/10 hover:text-white',
          'hover:-translate-y-0.5'
        ),
      },
      size: {
        sm: 'px-4 py-2 text-[9px]',
        md: 'px-6 py-3.5 text-[10px]',
        lg: 'px-8 py-4 text-xs',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  icon?: React.ComponentType<{ size?: number; className?: string }>
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading, icon: Icon, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        <span className="relative z-10 flex items-center gap-3">
          {loading && (
            <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          )}
          {children}
          {Icon && <Icon size={14} className="group-hover:translate-x-1 group-hover:rotate-12 transition-all duration-300" />}
        </span>
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
