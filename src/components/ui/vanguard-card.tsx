import * as React from 'react'
import { cn } from '../../lib/utils'

export interface VanguardCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  icon?: React.ComponentType<{ size?: number; className?: string }>
  tag?: string
  hoverable?: boolean
  glass?: boolean
  delay?: string | number
}

const VanguardCard = React.forwardRef<HTMLDivElement, VanguardCardProps>(
  ({ children, title, description, icon: Icon, tag, hoverable = true, glass = true, className, delay = '0', style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'group relative p-[px] rounded-[2.5rem] overflow-hidden',
          hoverable && 'animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-both',
          className
        )}
        style={{ animationDelay: `${delay}ms`, ...style }}
        {...props}
      >
        {/* Gradient border effect on hover */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500/30 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div
          className={cn(
            'relative z-10 h-full w-full bg-[#0a0a0b] p-8 md:p-10 rounded-[2.5rem]',
            'flex flex-col justify-between',
            glass
              ? 'bg-gradient-to-br from-white/[0.1] via-white/[0.05] to-white/[0.02] backdrop-blur-2xl border border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]'
              : 'bg-[#0a0a0b] shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.03)] border border-white/5'
          )}
        >
          {(title || Icon || tag) && (
            <div>
              <div className="flex justify-between items-start mb-8">
                {Icon && (
                  <div className={cn(
                    'p-4 rounded-2xl text-blue-400',
                    'bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent backdrop-blur-xl border border-white/10',
                    'shadow-[0_4px_16px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]',
                    'group-hover:scale-110 group-hover:rotate-3 transition-all duration-700'
                  )}>
                    <Icon size={24} />
                  </div>
                )}
                {tag && (
                  <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-400/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md">
                    {tag}
                  </span>
                )}
              </div>
              {title && (
                <h3 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4 bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
                  {title}
                </h3>
              )}
              {description && (
                <p className="text-white/40 leading-relaxed text-sm font-medium">{description}</p>
              )}
            </div>
          )}
          {children}
        </div>
      </div>
    )
  }
)
VanguardCard.displayName = 'VanguardCard'

export { VanguardCard }
