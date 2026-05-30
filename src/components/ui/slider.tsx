import { cn } from '../../lib/utils'
import { getNeuromorphic } from '../../lib/tailwind-utils'
import * as React from 'react'

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  value?: number
  onChange?: (value: number) => void
  min?: number
  max?: number
}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  function Slider({ value = 0, onChange, min = 0, max = 100, className, ...props }, ref) {
    const percentage = ((value - min) / (max - min)) * 100

    return (
      <div className={cn('relative w-full', className)}>
        <div className="flex justify-between mb-2">
          <span className="text-[9px] font-bold text-white/40">{min}</span>
          <span className="text-[9px] font-bold text-white/70">{value}</span>
          <span className="text-[9px] font-bold text-white/40">{max}</span>
        </div>
        <div
          className={cn(
            'relative w-full h-2 rounded-full',
            getNeuromorphic(),
          )}
        >
          <div
            className="absolute h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-[0_2px_12px_rgba(59,130,246,0.4)]"
            style={{ width: `${percentage}%` }}
          />
          <input
            ref={ref}
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={(e) => onChange?.(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            {...props}
          />
          <div
            className={cn(
              'absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full',
              'bg-gradient-to-br from-white to-white/90 shadow-lg',
              'pointer-events-none transition-all duration-100',
            )}
            style={{ left: `calc(${percentage}% - 10px)` }}
          />
        </div>
      </div>
    )
  },
)
Slider.displayName = 'Slider'
