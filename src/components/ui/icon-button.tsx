import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const iconButtonVariants = cva(
  cn(
    'inline-flex items-center justify-center',
    'transition-all duration-700 ease-out',
    'overflow-hidden relative group',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50',
    'disabled:pointer-events-none disabled:opacity-50'
  ),
  {
    variants: {
      variant: {
        glass: cn(
          'bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02]',
          'backdrop-blur-xl border border-white/15',
          'shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]',
          'hover:from-white/15 hover:via-white/8 hover:to-white/[0.03]',
          'hover:shadow-[0_8px_24px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15)]'
        ),
        primary: cn(
          'bg-gradient-to-br from-blue-600 to-blue-700 text-white',
          'shadow-[0_4px_12px_rgba(59,130,246,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)]',
          'hover:shadow-[0_8px_20px_rgba(59,130,246,0.5)]'
        ),
        ghost: cn(
          'bg-transparent text-white/60',
          'hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent',
          'hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]',
          'hover:text-white'
        ),
      },
      size: {
        sm: 'w-8 h-8 rounded-lg',
        md: 'w-10 h-10 rounded-xl',
        lg: 'w-12 h-12 rounded-2xl',
      },
    },
    defaultVariants: {
      variant: 'glass',
      size: 'md',
    },
  }
)

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  icon: React.ComponentType<{ size?: number; className?: string }>
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, icon: Icon, ...props }, ref) => {
    return (
      <button
        className={cn(iconButtonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        <div className="absolute inset-0 rounded-[inherit] border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <Icon size={18} className="relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
      </button>
    )
  }
)
IconButton.displayName = 'IconButton'

export { IconButton, iconButtonVariants }
