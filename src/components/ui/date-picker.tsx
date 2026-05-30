import { cn } from '../../lib/utils'
import { getLiquidSurface, getAnimation } from '../../lib/tailwind-utils'
import * as React from 'react'
import { Calendar } from 'lucide-react'

export interface DatePickerProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'value'> {
  value?: string
  onChange?: (value: string) => void
}

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  function DatePicker({ value, onChange, className, ...props }, ref) {
    return (
      <div
        className={cn(
          'flex items-center gap-3 px-5 py-3',
          getLiquidSurface(),
          'rounded-2xl',
          getAnimation('slow'),
          className,
        )}
      >
        <Calendar size={16} className="text-white/30" />
        <input
          ref={ref}
          type="date"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className={cn(
            'bg-transparent border-none outline-none',
            'text-xs font-bold text-white/70',
            'calendar-dark',
            '[&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-50',
            '[&::-webkit-calendar-picker-indicator]:cursor-pointer',
          )}
          {...props}
        />
      </div>
    )
  },
)
DatePicker.displayName = 'DatePicker'
