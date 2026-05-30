import { cn } from '../../lib/utils'
import { getLiquidSurface } from '../../lib/tailwind-utils'
import * as React from 'react'

export interface ColorPickerProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'value'> {
  value?: string
  onChange?: (value: string) => void
}

export const ColorPicker = React.forwardRef<HTMLInputElement, ColorPickerProps>(
  function ColorPicker({ value = '#3b82f6', onChange, className, ...props }, ref) {
    return (
      <div
        className={cn(
          'flex items-center gap-3 p-3',
          getLiquidSurface(),
          'rounded-2xl',
          className,
        )}
      >
        <input
          ref={ref}
          type="color"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className={cn(
            'w-8 h-8 rounded-lg bg-transparent border-none cursor-pointer',
            '[&::-webkit-color-swatch-wrapper]:p-0',
            '[&::-webkit-color-swatch]:rounded-lg [&::-webkit-color-swatch]:border-none',
          )}
          {...props}
        />
        <span className="text-xs font-bold text-white/60 uppercase">{value}</span>
      </div>
    )
  },
)
ColorPicker.displayName = 'ColorPicker'
