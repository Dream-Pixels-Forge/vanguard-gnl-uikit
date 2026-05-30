import { cn } from '../../lib/utils'
import * as React from 'react'

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4
  uppercase?: boolean
  italic?: boolean
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  function Heading({ className, level = 1, uppercase = false, italic = false, children, ...props }, ref) {
    const sizes: Record<number, string> = {
      1: 'text-4xl md:text-5xl',
      2: 'text-3xl md:text-4xl',
      3: 'text-2xl md:text-3xl',
      4: 'text-xl md:text-2xl',
    }

    const Component = `h${level}` as const

    return (
      <Component
        ref={ref}
        className={cn(
          'font-black tracking-tighter',
          uppercase && 'uppercase',
          italic && 'italic',
          sizes[level],
          'bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent',
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    )
  },
)
Heading.displayName = 'Heading'
