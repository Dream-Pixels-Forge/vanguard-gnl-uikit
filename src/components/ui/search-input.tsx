import { cn } from '../../lib/utils'
import { getLiquidSurface, getAnimation } from '../../lib/tailwind-utils'
import * as React from 'react'
import { Search, Command } from 'lucide-react'

export interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  placeholder?: string
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  function SearchInput({ placeholder = 'Search...', className, ...props }, ref) {
    return (
      <div
        className={cn(
          'flex items-center gap-3 px-5 py-3',
          getLiquidSurface(),
          'rounded-2xl',
          'focus-within:border-blue-400/50',
          'focus-within:shadow-[0_0_20px_rgba(59,130,246,0.2)]',
          getAnimation('slow'),
          className,
        )}
      >
        <Search size={16} className="text-white/30" />
        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          className={cn(
            'bg-transparent border-none outline-none',
            'text-xs font-bold w-full md:w-48',
            'placeholder:text-white/20',
          )}
          {...props}
        />
        <Command size={14} className="text-white/20" />
      </div>
    )
  },
)
SearchInput.displayName = 'SearchInput'
