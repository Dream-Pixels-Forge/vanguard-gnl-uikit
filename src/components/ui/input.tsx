import { cn } from '../../lib/utils'
import { getLiquidSurface, getAnimation } from '../../lib/tailwind-utils'
import * as React from 'react'
import { Command } from 'lucide-react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ElementType
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input({ icon: Icon, className, ...props }, ref) {
    return (
      <div
        className={cn(
          'flex items-center gap-3 px-5 py-3',
          getLiquidSurface(),
          'rounded-2xl',
          'focus-within:border-blue-400/50',
          'focus-within:shadow-[0_0_20px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]',
          getAnimation('slow'),
          className,
        )}
      >
        {Icon && <Icon size={16} className="text-white/30" />}
        <input
          ref={ref}
          type="text"
          className={cn(
            'bg-transparent border-none outline-none',
            'text-xs font-bold w-full',
            'placeholder:text-white/20',
          )}
          {...props}
        />
        <Command size={14} className="text-white/20" />
      </div>
    )
  },
)
Input.displayName = 'Input'
