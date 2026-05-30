import * as React from 'react'
import { cn } from '../../lib/utils'

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string
  position?: 'top' | 'bottom' | 'left' | 'right'
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ content, position = 'top', children, className, ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false)
    const positions = {
      top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
      bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
      left: 'right-full top-1/2 -translate-y-1/2 mr-2',
      right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    }
    return (
      <div
        ref={ref}
        className="relative inline-block"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        {...props}
      >
        {children}
        {isVisible && (
          <div className={cn(
            'absolute z-[300] px-3 py-1.5 rounded-xl whitespace-nowrap',
            'bg-[#0a0a0b] border border-white/10 text-[10px] font-bold text-white/80',
            'shadow-[0_8px_24px_rgba(0,0,0,0.4)]',
            'animate-in fade-in duration-200',
            positions[position],
            className
          )}>
            {content}
          </div>
        )}
      </div>
    )
  }
)
Tooltip.displayName = 'Tooltip'
export { Tooltip }
