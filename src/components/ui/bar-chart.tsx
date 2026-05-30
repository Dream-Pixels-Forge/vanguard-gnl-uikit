import { cn } from '../../lib/utils'
import { getAnimation } from '../../lib/tailwind-utils'
import * as React from 'react'

export interface BarChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: { label: string; value: number }[]
  max?: number
  color?: string
}

export const BarChart = React.forwardRef<HTMLDivElement, BarChartProps>(
  function BarChart({ data, max, color = 'from-blue-500 to-blue-400', className, ...props }, ref) {
    const computedMax = max ?? Math.max(...data.map((d) => d.value), 1)

    return (
      <div ref={ref} className={cn('w-full', className)} {...props}>
        <div className="flex items-end gap-2 h-32">
          {data.map((item, i) => {
            const height = (item.value / computedMax) * 100
            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                <div className="w-full relative flex-1 flex items-end">
                  <div
                    className={cn(
                      'w-full rounded-t-xl bg-gradient-to-t',
                      color,
                      getAnimation('slow'),
                      'hover:opacity-80 cursor-pointer',
                      'shadow-[0_0_12px_rgba(59,130,246,0.2)]',
                    )}
                    style={{ height: `${height}%`, minHeight: '4px' }}
                  />
                </div>
                <span className="text-[9px] text-white/30 font-medium truncate w-full text-center">
                  {item.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    )
  },
)
BarChart.displayName = 'BarChart'
