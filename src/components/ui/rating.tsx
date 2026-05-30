import { cn } from '../../lib/utils'
import { getAnimation } from '../../lib/tailwind-utils'
import { Star } from 'lucide-react'
import * as React from 'react'

export interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  size?: number
  interactive?: boolean
  onChange?: (value: number) => void
}

export const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  function Rating({ value, max = 5, size = 16, interactive = false, onChange, className, ...props }, ref) {
    const [hovered, setHovered] = React.useState<number | null>(null)
    const display = hovered ?? value

    return (
      <div ref={ref} className={cn('flex gap-0.5', className)} {...props}>
        {Array.from({ length: max }).map((_, i) => {
          const filled = i < display
          return (
            <button
              key={i}
              type="button"
              disabled={!interactive}
              onMouseEnter={() => interactive && setHovered(i + 1)}
              onMouseLeave={() => interactive && setHovered(null)}
              onClick={() => onChange?.(i + 1)}
              className={cn(
                interactive && 'cursor-pointer hover:scale-125',
                getAnimation('fast'),
                !interactive && 'cursor-default',
              )}
            >
              <Star
                size={size}
                className={cn(
                  filled ? 'text-white fill-white' : 'text-white/10',
                )}
              />
            </button>
          )
        })}
      </div>
    )
  },
)
Rating.displayName = 'Rating'
