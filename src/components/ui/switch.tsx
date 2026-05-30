import { cn } from '../../lib/utils'
import { getNeuromorphic, getAnimation } from '../../lib/tailwind-utils'
import * as React from 'react'

export interface SwitchProps
  extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'onChange'> {
  checked?: boolean
  onChange?: (checked: boolean) => void
  label?: string
}

export const Switch = React.forwardRef<HTMLLabelElement, SwitchProps>(
  function Switch({ checked = false, onChange, label, className, ...props }, ref) {
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
            'relative w-10 h-5 rounded-full',
            checked
              ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_2px_12px_rgba(59,130,246,0.4)]'
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
          <div
            className={cn(
              'absolute top-0.5 left-0.5 w-4 h-4 rounded-full',
              'bg-gradient-to-br from-white to-white/90 shadow-lg',
              getAnimation('fast'),
              checked && 'translate-x-5',
            )}
          />
        </div>
        {label && (
          <span className="text-xs font-bold text-white/70">{label}</span>
        )}
      </label>
    )
  },
)
Switch.displayName = 'Switch'
