import { cn } from '../../lib/utils'
import { getAnimation } from '../../lib/tailwind-utils'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const avatarVariants = cva(
  cn(
    'relative inline-flex items-center justify-center overflow-hidden',
    'bg-gradient-to-tr from-blue-500 to-blue-400 p-[2px]',
    'cursor-pointer hover:rotate-6',
    getAnimation('liquid'),
    'shadow-[0_4px_16px_rgba(59,130,246,0.3)]',
  ),
  {
    variants: {
      size: {
        sm: 'h-8 w-8 text-[10px]',
        md: 'h-10 w-10 text-xs',
        lg: 'h-14 w-14 text-sm',
        xl: 'h-20 w-20 text-base',
      },
      radius: {
        full: 'rounded-full',
        lg: 'rounded-2xl',
        xl: 'rounded-3xl',
      },
    },
    defaultVariants: {
      size: 'md',
      radius: 'full',
    },
  },
)

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string
  alt?: string
  fallback?: string
}

function getInitials(fallback: string): string {
  return fallback
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  function Avatar({ src, alt = '', fallback = '', size, radius, className, ...props }, ref) {
    const initials = getInitials(fallback)

    return (
      <div
        ref={ref}
        className={cn(avatarVariants({ size, radius }), className)}
        {...props}
      >
        <div
          className={cn(
            'w-full h-full bg-black flex items-center justify-center overflow-hidden',
            radius === 'lg' ? 'rounded-2xl' : radius === 'xl' ? 'rounded-3xl' : 'rounded-full',
          )}
        >
          {src ? (
            <img src={src} alt={alt || fallback} className="w-full h-full object-cover" />
          ) : (
            <span className="text-white/70 font-bold">{initials || '?'}</span>
          )}
        </div>
      </div>
    )
  },
)
Avatar.displayName = 'Avatar'
