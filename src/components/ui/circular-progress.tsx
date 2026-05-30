import * as React from 'react'
import { cn } from '../../lib/utils'

const variantColors = {
  blue: { text: 'text-blue-500', glow: 'rgba(59,130,246,0.4)' },
}

export interface CircularProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  variant?: keyof typeof variantColors
  size?: number
}

const CircularProgress = React.forwardRef<HTMLDivElement, CircularProgressProps>(
  ({ value, variant = 'blue', size = 64, className, ...props }, ref) => {
    const strokeWidth = 4
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (Math.min(100, Math.max(0, value)) / 100) * circumference
    const colors = variantColors[variant]

    return (
      <div
        ref={ref}
        className={cn('relative inline-flex items-center justify-center', className)}
        style={{ width: size, height: size }}
        {...props}
      >
        <svg className="transform -rotate-90" width={size} height={size}>
          <circle
            className="text-white/5"
            strokeWidth={strokeWidth}
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          <circle
            className={cn(colors.text, 'transition-all duration-700')}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
            style={{ filter: `drop-shadow(0 2px 8px ${colors.glow})` }}
          />
        </svg>
        <span className="absolute text-[9px] font-bold text-white/70">{value}%</span>
      </div>
    )
  }
)
CircularProgress.displayName = 'CircularProgress'

export { CircularProgress }
