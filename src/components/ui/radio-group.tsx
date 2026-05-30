import { cn } from '../../lib/utils'
import { getNeuromorphic, getAnimation } from '../../lib/tailwind-utils'
import * as React from 'react'

export interface RadioOption {
  label: string
  value: string
}

export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: RadioOption[]
  value?: string
  onChange?: (value: string) => void
  name?: string
}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  function RadioGroup({ options, value, onChange, name = 'radio', className, ...props }, ref) {
    return (
      <div ref={ref} className={cn('space-y-3', className)} {...props}>
        {options.map((opt) => (
          <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
            <div
              className={cn(
                'relative w-4 h-4 rounded-full',
                'flex items-center justify-center',
                value === opt.value
                  ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_2px_8px_rgba(59,130,246,0.4)]'
                  : getNeuromorphic(),
                getAnimation('fast'),
              )}
            >
              <input
                type="radio"
                className="sr-only"
                name={name}
                value={opt.value}
                checked={value === opt.value}
                onChange={(e) => onChange?.(e.target.value)}
              />
              {value === opt.value && (
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              )}
            </div>
            <span className="text-xs font-bold text-white/70">{opt.label}</span>
          </label>
        ))}
      </div>
    )
  },
)
RadioGroup.displayName = 'RadioGroup'
