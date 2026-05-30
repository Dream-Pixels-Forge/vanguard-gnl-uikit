import { cn } from '../../lib/utils'
import { getLiquidSurface } from '../../lib/tailwind-utils'
import * as React from 'react'
import { ChevronDown } from 'lucide-react'

export interface SelectOption {
  label: string
  value: string
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  options: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    { options, value, onChange, placeholder = 'Select...', className, ...props },
    ref,
  ) {
    return (
      <div className={cn('relative', getLiquidSurface(), 'rounded-2xl', className)}>
        <select
          ref={ref}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className={cn(
            'w-full appearance-none bg-transparent border-none outline-none',
            'px-5 py-3 text-xs font-bold text-white cursor-pointer',
            !value && 'text-white/20',
          )}
          {...props}
        >
          <option value="" className="bg-[#0a0a0b]">
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-[#0a0a0b]">
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none"
        />
      </div>
    )
  },
)
Select.displayName = 'Select'
