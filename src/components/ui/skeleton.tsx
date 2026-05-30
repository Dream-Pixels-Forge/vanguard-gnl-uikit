import { cn } from '../../lib/utils'
import * as React from 'react'

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass'
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  function Skeleton({ className, variant = 'default', ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          'animate-pulse rounded-xl',
          variant === 'glass'
            ? 'bg-white/5 backdrop-blur-xl'
            : 'bg-white/10',
          className,
        )}
        {...props}
      />
    )
  },
)
Skeleton.displayName = 'Skeleton'

export interface SkeletonTextProps extends React.HTMLAttributes<HTMLDivElement> {
  lines?: number
}

export const SkeletonText = React.forwardRef<HTMLDivElement, SkeletonTextProps>(
  function SkeletonText({ className, lines = 3, ...props }, ref) {
    return (
      <div ref={ref} className={cn('space-y-2', className)} {...props}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(
              'h-3 rounded-lg animate-pulse',
              i === lines - 1 ? 'w-3/4' : 'w-full',
              'bg-white/10',
            )}
          />
        ))}
      </div>
    )
  },
)
SkeletonText.displayName = 'SkeletonText'

export const SkeletonCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function SkeletonCard({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl p-6 animate-pulse',
          'bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent',
          'border border-white/10',
          className,
        )}
        {...props}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 rounded-xl bg-white/10" />
          <div className="flex-1 space-y-2">
            <div className="h-3 w-1/2 rounded-lg bg-white/10" />
            <div className="h-2 w-1/3 rounded-lg bg-white/5" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-3 rounded-lg bg-white/10" />
          <div className="h-3 rounded-lg bg-white/10" />
          <div className="h-3 w-3/4 rounded-lg bg-white/10" />
        </div>
      </div>
    )
  },
)
SkeletonCard.displayName = 'SkeletonCard'
