import { cn } from '../../lib/utils'
import { getLiquidSurface, getAnimation } from '../../lib/tailwind-utils'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'
import * as React from 'react'

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  value: string | number
  change?: number
  icon?: React.ElementType
}

export const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  function StatCard({ label, value, change, icon: Icon, className, ...props }, ref) {
    const isPositive = change !== undefined ? change >= 0 : undefined

    return (
      <div
        ref={ref}
        className={cn(
          getLiquidSurface(),
          getAnimation('slow'),
          'rounded-3xl p-6 group hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]',
          className,
        )}
        {...props}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/40">{label}</span>
          {Icon && (
            <div className="p-2 rounded-xl bg-white/[0.05] border border-white/10 text-white/50 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors">
              <Icon size={16} />
            </div>
          )}
        </div>
        <div className="text-2xl font-black tracking-tight bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent mb-1">
          {value}
        </div>
        {change !== undefined && (
          <div className={cn('flex items-center gap-1 text-xs font-medium', isPositive ? 'text-blue-400' : 'text-white/70')}>
            {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
            <span>{Math.abs(change)}%</span>
          </div>
        )}
      </div>
    )
  },
)
StatCard.displayName = 'StatCard'
