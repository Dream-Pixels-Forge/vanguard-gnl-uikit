import { cn } from '../../lib/utils'
import * as React from 'react'

export interface BackgroundDecorProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'radial' | 'mesh'
}

export const BackgroundDecor = React.forwardRef<HTMLDivElement, BackgroundDecorProps>(
  function BackgroundDecor({ variant = 'default', className, ...props }, ref) {
    return (
      <div ref={ref} className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)} {...props}>
        {variant === 'default' && (
          <>
            <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-500/20 via-blue-500/10 to-transparent blur-3xl animate-pulse" />
            <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-blue-500/15 via-blue-500/10 to-transparent blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-blue-500/10 to-white/10 blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
          </>
        )}
        {variant === 'radial' && (
          <>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] bg-gradient-to-b from-blue-500/15 via-blue-500/5 to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-gradient-to-t from-white/10 to-transparent blur-2xl" />
          </>
        )}
        {variant === 'mesh' && (
          <>
            <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]" />
            <div className="absolute top-20 right-0 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[100px]" />
            <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-white/10 blur-[100px]" />
            <div className="absolute bottom-20 right-1/4 h-[250px] w-[250px] rounded-full bg-white/8 blur-[100px]" />
          </>
        )}
      </div>
    )
  },
)
BackgroundDecor.displayName = 'BackgroundDecor'
