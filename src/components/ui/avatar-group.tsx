import { cn } from '../../lib/utils'
import { getLiquidSurface, getAnimation } from '../../lib/tailwind-utils'
import * as React from 'react'

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number
  size?: 'sm' | 'md' | 'lg'
}

export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  function AvatarGroup({ children, max = 4, size = 'md', className, ...props }, ref) {
    const avatars = React.Children.toArray(children)
    const visible = avatars.slice(0, max)
    const excess = avatars.length - max

    const sizeMap = { sm: 'h-8 w-8 text-[10px]', md: 'h-10 w-10 text-xs', lg: 'h-14 w-14 text-sm' }

    return (
      <div ref={ref} className={cn('flex -space-x-3', className)} {...props}>
        {visible.map((child, i) => (
          <div key={i} className="relative" style={{ zIndex: visible.length - i }}>
            {child}
          </div>
        ))}
        {excess > 0 && (
          <div
            className={cn(
              'relative flex items-center justify-center rounded-full',
              getLiquidSurface(),
              getAnimation('fast'),
              'text-white/70 font-bold',
              sizeMap[size],
            )}
            style={{ zIndex: 0 }}
          >
            +{excess}
          </div>
        )}
      </div>
    )
  },
)
AvatarGroup.displayName = 'AvatarGroup'
