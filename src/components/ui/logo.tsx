import { cn } from '../../lib/utils'
import { getLiquidGlass, getAnimation } from '../../lib/tailwind-utils'
import { Box } from 'lucide-react'
import * as React from 'react'

export interface LogoProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href?: string
  src?: string
  alt?: string
  showText?: boolean
  text?: string
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ElementType
}

export const Logo = React.forwardRef<HTMLAnchorElement, LogoProps>(
  function Logo(
    {
      href = '/',
      src,
      alt = 'Logo',
      showText = true,
      text = 'Vanguard',
      size = 'md',
      icon: Icon = Box,
      className,
      ...props
    },
    ref,
  ) {
    const sizeMap = {
      sm: { wrapper: 'p-1.5 rounded-lg', icon: 14, text: 'text-xs' },
      md: { wrapper: 'p-2 rounded-xl', icon: 18, text: 'text-sm' },
      lg: { wrapper: 'p-3 rounded-2xl', icon: 24, text: 'text-base' },
    }

    const s = sizeMap[size]

    return (
      <a
        ref={ref}
        href={href}
        className={cn('inline-flex items-center gap-2 group', className)}
        {...props}
      >
        {src ? (
          <img src={src} alt={alt} className="h-8 w-8 rounded-xl object-contain" />
        ) : (
          <div
            className={cn(
              s.wrapper,
              getLiquidGlass(),
              'text-blue-400 group-hover:text-blue-300',
              getAnimation('fast'),
              'group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]',
            )}
          >
            <Icon size={s.icon} />
          </div>
        )}
        {showText && (
          <span
            className={cn(
              s.text,
              'font-bold tracking-tight',
              'bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent',
            )}
          >
            {text}
          </span>
        )}
      </a>
    )
  },
)
Logo.displayName = 'Logo'
