import { cn } from '../../lib/utils'
import { getLiquidSurface, getAnimation } from '../../lib/tailwind-utils'
import * as React from 'react'
import { ChevronDown } from 'lucide-react'

export interface CollapsibleProps extends React.HTMLAttributes<HTMLDivElement> {
  trigger: React.ReactNode
  defaultOpen?: boolean
}

export const Collapsible = React.forwardRef<HTMLDivElement, CollapsibleProps>(
  function Collapsible({ trigger, defaultOpen = false, children, className, ...props }, ref) {
    const [isOpen, setIsOpen] = React.useState(defaultOpen)

    return (
      <div ref={ref} className={cn('rounded-2xl overflow-hidden', getLiquidSurface(), className)} {...props}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 text-left"
        >
          <span className="text-[11px] font-black uppercase tracking-widest text-white/70">
            {trigger}
          </span>
          <ChevronDown
            size={16}
            className={cn(
              'text-white/40 transition-transform duration-300',
              isOpen && 'rotate-180',
            )}
          />
        </button>
        <div
          className={cn(
            'overflow-hidden transition-all duration-500',
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
          )}
        >
          <div className="px-4 pb-4">{children}</div>
        </div>
      </div>
    )
  },
)
Collapsible.displayName = 'Collapsible'
