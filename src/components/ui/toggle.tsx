import { cn } from '../../lib/utils'
import { getNeuromorphic, getAnimation } from '../../lib/tailwind-utils'
import * as React from 'react'

export interface ToggleProps
  extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'onChange'> {
  checked?: boolean
  onChange?: (checked: boolean) => void
  label?: string
}

export const Toggle = React.forwardRef<HTMLLabelElement, ToggleProps>(
  function Toggle({ checked = false, onChange, label, className, ...props }, ref) {
    return (
      <label
        ref={ref}
        className={cn(
          'flex items-center justify-between cursor-pointer group',
          className,
        )}
        {...props}
      >
        {label && (
          <span className="text-xs font-bold text-white/70">{label}</span>
        )}
        <div
          className={cn(
            'relative w-12 h-6 rounded-full',
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
              'absolute top-1 left-1 w-4 h-4 rounded-full',
              'bg-white shadow-md',
              getAnimation('fast'),
              checked && 'translate-x-6',
            )}
          />
        </div>
      </label>
    )
  },
)
Toggle.displayName = 'Toggle'
