import { cn } from '../../lib/utils'
import * as React from 'react'

interface AnimationProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number
  duration?: number
}

export const FadeIn = React.forwardRef<HTMLDivElement, AnimationProps>(
  function FadeIn({ className, delay = 0, duration = 700, style, children, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn('animate-in fade-in', className)}
        style={{ animationDuration: `${duration}ms`, animationDelay: `${delay}ms`, ...style }}
        {...props}
      >
        {children}
      </div>
    )
  },
)
FadeIn.displayName = 'FadeIn'

export const FadeOut = React.forwardRef<HTMLDivElement, AnimationProps>(
  function FadeOut({ className, delay = 0, duration = 700, style, children, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn('animate-in fade-out', className)}
        style={{ animationDuration: `${duration}ms`, animationDelay: `${delay}ms`, ...style }}
        {...props}
      >
        {children}
      </div>
    )
  },
)
FadeOut.displayName = 'FadeOut'

interface SlideProps extends AnimationProps {
  direction?: 'up' | 'down' | 'left' | 'right'
}

export const SlideIn = React.forwardRef<HTMLDivElement, SlideProps>(
  function SlideIn({ className, direction = 'up', delay = 0, duration = 700, style, children, ...props }, ref) {
    const directions: Record<string, string> = {
      up: 'slide-in-from-bottom-10',
      down: 'slide-in-from-top-10',
      left: 'slide-in-from-left-10',
      right: 'slide-in-from-right-10',
    }
    return (
      <div
        ref={ref}
        className={cn('animate-in fade-in', directions[direction], className)}
        style={{ animationDuration: `${duration}ms`, animationDelay: `${delay}ms`, ...style }}
        {...props}
      >
        {children}
      </div>
    )
  },
)
SlideIn.displayName = 'SlideIn'

export const ScaleIn = React.forwardRef<HTMLDivElement, AnimationProps>(
  function ScaleIn({ className, delay = 0, duration = 700, style, children, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn('animate-in zoom-in-95 fade-in', className)}
        style={{ animationDuration: `${duration}ms`, animationDelay: `${delay}ms`, ...style }}
        {...props}
      >
        {children}
      </div>
    )
  },
)
ScaleIn.displayName = 'ScaleIn'

export const Spin = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function Spin({ className, children, ...props }, ref) {
    return (
      <div ref={ref} className={cn('animate-spin', className)} {...props}>
        {children}
      </div>
    )
  },
)
Spin.displayName = 'Spin'

export const Pulse = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function Pulse({ className, children, ...props }, ref) {
    return (
      <div ref={ref} className={cn('animate-pulse', className)} {...props}>
        {children}
      </div>
    )
  },
)
Pulse.displayName = 'Pulse'

export const Bounce = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function Bounce({ className, children, ...props }, ref) {
    return (
      <div ref={ref} className={cn('animate-bounce', className)} {...props}>
        {children}
      </div>
    )
  },
)
Bounce.displayName = 'Bounce'
