import { cn } from '../../lib/utils'
import { getNeuromorphic, getAnimation } from '../../lib/tailwind-utils'
import * as React from 'react'
import { Check } from 'lucide-react'

export interface CheckboxProps
  extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'onChange'> {
  checked?: boolean
  onChange?: (checked: boolean) => void
  label?: string
}

export const Checkbox = React.forwardRef<HTMLLabelElement, CheckboxProps>(
  function Checkbox({ checked = false, onChange, label, className, ...props }, ref) {
    return (
      <label
        ref={ref}
        className={cn(
          'flex items-center gap-3 cursor-pointer group',
          className,
        )}
        {...props}
      >
        <div
          className={cn(
            'relative w-5 h-5 rounded-lg',
            'flex items-center justify-center',
            checked
              ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_2px_8px_rgba(59,130,246,0.4)]'
              : getNeuromorphic(),
            getAnimation('fast'),
          )}
        >
          <input
            type="checkbox"
            className="sr-only"
            checked={checked}
            onChange={(e) => onChange?.(e.target.checked)}
          />
          {checked && <Check size={12} className="text-white" />}
        </div>
        {label && (
          <span className="text-xs font-bold text-white/70">{label}</span>
        )}
      </label>
    )
  },
)
Checkbox.displayName = 'Checkbox'
