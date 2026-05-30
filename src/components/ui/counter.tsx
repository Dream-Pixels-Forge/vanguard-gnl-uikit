import { cn } from '../../lib/utils'
import { getAnimation } from '../../lib/tailwind-utils'
import * as React from 'react'

export interface CounterProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
}

export const Counter = React.forwardRef<HTMLSpanElement, CounterProps>(
  function Counter({ value, duration = 1000, prefix = '', suffix = '', className, ...props }, ref) {
    const [displayed, setDisplayed] = React.useState(0)

    React.useEffect(() => {
      let start = 0
      const startTime = performance.now()

      function animate(currentTime: number) {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const current = Math.round(eased * value)
        setDisplayed(current)
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }, [value, duration])

    return (
      <span ref={ref} className={cn(getAnimation('slow'), 'font-black tabular-nums', className)} {...props}>
        {prefix}{displayed.toLocaleString()}{suffix}
      </span>
    )
  },
)
Counter.displayName = 'Counter'
