import { cn } from '../../lib/utils'
import { getAnimation } from '../../lib/tailwind-utils'
import * as React from 'react'

export interface UpgradeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  cta?: string
  onAction?: () => void
}

export const UpgradeCard = React.forwardRef<HTMLDivElement, UpgradeCardProps>(
  function UpgradeCard({ title, description, cta = 'Upgrade', onAction, className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          'relative rounded-3xl p-[1px] overflow-hidden',
          'bg-gradient-to-br from-blue-500/30 to-blue-500/10',
          className,
        )}
        {...props}
      >
        <div className="relative rounded-[calc(1.5rem-1px)] bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent backdrop-blur-xl p-6">
          <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/10 blur-2xl" />
          <div className="relative z-10">
            <h3 className="text-lg font-black tracking-tight bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent mb-2">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-white/40 mb-4 leading-relaxed">{description}</p>
            )}
            <button
              onClick={onAction}
              className={cn(
                'inline-flex items-center px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em]',
                'bg-gradient-to-br from-blue-600 to-blue-700 text-white',
                'shadow-[0_8px_24px_rgba(59,130,246,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)]',
                getAnimation('liquid'),
                'hover:shadow-[0_12px_32px_rgba(59,130,246,0.5)] hover:translate-y-[-2px]',
                'active:scale-95',
              )}
            >
              {cta}
            </button>
          </div>
        </div>
      </div>
    )
  },
)
UpgradeCard.displayName = 'UpgradeCard'
