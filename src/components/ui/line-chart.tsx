import { cn } from '../../lib/utils'
import * as React from 'react'

export interface LineChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: number[]
  labels?: string[]
  color?: string
  height?: number
}

export const LineChart = React.forwardRef<HTMLDivElement, LineChartProps>(
  function LineChart({ data, labels, color = '#3b82f6', height = 120, className, ...props }, ref) {
    const max = Math.max(...data, 1)
    const min = Math.min(...data, 0)
    const range = max - min || 1
    const w = 300
    const h = height
    const padding = 4

    const points = data.map((v, i) => ({
      x: padding + (i / Math.max(data.length - 1, 1)) * (w - 2 * padding),
      y: h - padding - ((v - min) / range) * (h - 2 * padding),
    }))

    const pathD = points
      .map((p, i) => (i === 0 ? `M ${p.x},${p.y}` : `L ${p.x},${p.y}`))
      .join(' ')

    const areaD = `${pathD} L ${points[points.length - 1].x},${h} L ${points[0].x},${h} Z`

    return (
      <div ref={ref} className={cn('w-full', className)} {...props}>
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full" style={{ height }}>
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.3" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={areaD} fill="url(#lineGradient)" />
          <path
            d={pathD}
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {points.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="3" fill={color} className="opacity-0 hover:opacity-100 transition-opacity" />
          ))}
        </svg>
        {labels && labels.length > 0 && (
          <div className="flex justify-between mt-2 px-1">
            {labels.map((l, i) => (
              <span key={i} className="text-[9px] text-white/30 font-medium">{l}</span>
            ))}
          </div>
        )}
      </div>
    )
  },
)
LineChart.displayName = 'LineChart'
