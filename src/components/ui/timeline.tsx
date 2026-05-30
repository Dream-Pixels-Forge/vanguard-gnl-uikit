import { cn } from '../../lib/utils'
import { getLiquidSurface } from '../../lib/tailwind-utils'
import * as React from 'react'

export interface TimelineItem {
  title: string
  description?: string
  completed?: boolean
  date?: string
}

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  items: TimelineItem[]
}

export const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  function Timeline({ items, className, ...props }, ref) {
    return (
      <div ref={ref} className={cn('space-y-6', className)} {...props}>
        {items.map((item, idx) => (
          <div key={idx} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  'w-3 h-3 rounded-full',
                  item.completed
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_0_12px_rgba(59,130,246,0.5)]'
                    : 'bg-white/10',
                )}
              />
              {idx < items.length - 1 && <div className="flex-1 w-px bg-white/5 my-2" />}
            </div>
            <div className="pb-6">
              <p
                className={cn(
                  'text-xs font-bold uppercase tracking-wider',
                  item.completed ? 'text-white' : 'text-white/60',
                )}
              >
                {item.title}
              </p>
              {item.description && (
                <p className="text-[10px] text-white/40 mt-1">{item.description}</p>
              )}
              {item.date && <p className="text-[9px] text-white/20 mt-2">{item.date}</p>}
            </div>
          </div>
        ))}
      </div>
    )
  },
)
Timeline.displayName = 'Timeline'
