import { cn } from '../../lib/utils'
import { getLiquidSurface, getAnimation } from '../../lib/tailwind-utils'
import * as React from 'react'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  rows?: number
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ placeholder, rows = 3, className, ...props }, ref) {
    return (
      <div
        className={cn(
          getLiquidSurface(),
          'rounded-2xl p-4',
          'focus-within:border-blue-400/50',
          'focus-within:shadow-[0_0_20px_rgba(59,130,246,0.2)]',
          getAnimation('slow'),
          className,
        )}
      >
        <textarea
          ref={ref}
          placeholder={placeholder}
          rows={rows}
          className={cn(
            'w-full bg-transparent border-none outline-none',
            'text-xs font-bold',
            'placeholder:text-white/20',
            'resize-none',
          )}
          {...props}
        />
      </div>
    )
  },
)
Textarea.displayName = 'Textarea'
