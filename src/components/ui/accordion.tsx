import { cn } from '../../lib/utils'
import { getLiquidSurface, getAnimation } from '../../lib/tailwind-utils'
import * as React from 'react'
import { ChevronDown } from 'lucide-react'

export interface AccordionItemData {
  id: string
  title: string
  content: React.ReactNode
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItemData[]
  allowMultiple?: boolean
  defaultOpen?: string[]
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  function Accordion({ items, allowMultiple = false, defaultOpen = [], className, ...props }, ref) {
    const [openItems, setOpenItems] = React.useState<string[]>(defaultOpen)

    const toggle = (id: string) => {
      if (allowMultiple) {
        setOpenItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
      } else {
        setOpenItems(prev => prev.includes(id) ? [] : [id])
      }
    }

    return (
      <div ref={ref} className={cn('space-y-2', className)} {...props}>
        {items.map(item => {
          const isOpen = openItems.includes(item.id)
          return (
            <div
              key={item.id}
              className={cn(
                'rounded-2xl overflow-hidden',
                getLiquidSurface(),
                'transition-all duration-500',
              )}
            >
              <button
                onClick={() => toggle(item.id)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-[11px] font-black uppercase tracking-widest text-white/70">
                  {item.title}
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
                <div className="px-5 pb-5 text-sm text-white/50 leading-relaxed">
                  {item.content}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  },
)
Accordion.displayName = 'Accordion'
