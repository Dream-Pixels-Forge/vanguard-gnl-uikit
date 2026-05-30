import * as React from 'react'
import { cn } from '../../lib/utils'

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  trigger: React.ReactNode
  align?: 'left' | 'right'
}

const DropdownContext = React.createContext<{ close: () => void }>({ close: () => {} })

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  ({ trigger, align = 'left', children, className, ...props }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const close = React.useCallback(() => setIsOpen(false), [])
    return (
      <div ref={ref} className={cn('relative inline-block', className)} {...props}>
        <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <DropdownContext.Provider value={{ close }}>
              <div className={cn(
                'absolute z-50 mt-2 min-w-[200px] py-2 rounded-2xl',
                'bg-gradient-to-br from-white/[0.1] via-white/[0.05] to-white/[0.02] backdrop-blur-2xl',
                'border border-white/15',
                'shadow-[0_12px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]',
                'animate-in fade-in slide-in-from-top-2 duration-200',
                align === 'left' ? 'left-0' : 'right-0'
              )}>
                {children}
              </div>
            </DropdownContext.Provider>
          </>
        )}
      </div>
    )
  }
)
Dropdown.displayName = 'Dropdown'

export interface DropdownItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<{ size?: number; className?: string }>
}

const DropdownItem = React.forwardRef<HTMLButtonElement, DropdownItemProps>(
  ({ className, icon: Icon, children, onClick, ...props }, ref) => {
    const { close } = React.useContext(DropdownContext)
    return (
      <button
        ref={ref}
        onClick={e => { onClick?.(e); close() }}
        className={cn(
          'flex items-center gap-3 w-full px-4 py-2.5 text-xs font-bold text-white/60',
          'hover:bg-white/5 hover:text-white transition-all',
          className
        )}
        {...props}
      >
        {Icon && <Icon size={16} />}
        {children}
      </button>
    )
  }
)
DropdownItem.displayName = 'DropdownItem'

const DropdownDivider = () => <div className="my-2 h-px bg-white/5" />

export { Dropdown, DropdownItem, DropdownDivider }
