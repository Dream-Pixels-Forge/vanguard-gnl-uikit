import { cn } from '../../lib/utils'
import * as React from 'react'
import { X } from 'lucide-react'

export interface SheetProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  onClose: () => void
  title?: string
  position?: 'left' | 'right' | 'top' | 'bottom'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export const Sheet = React.forwardRef<HTMLDivElement, SheetProps>(
  function Sheet({ isOpen, onClose, title, position = 'right', size = 'md', children, className, ...props }, ref) {
    if (!isOpen) return null

    const positions = {
      left: {
        sm: 'w-80', md: 'w-96', lg: 'w-[32rem]', xl: 'w-[40rem]',
        container: 'left-0 top-0 h-full',
        anim: 'slide-in-from-left',
      },
      right: {
        sm: 'w-80', md: 'w-96', lg: 'w-[32rem]', xl: 'w-[40rem]',
        container: 'right-0 top-0 h-full',
        anim: 'slide-in-from-right',
      },
      top: {
        sm: 'h-80', md: 'h-96', lg: 'h-[32rem]', xl: 'h-[40rem]',
        container: 'top-0 left-0 w-full',
        anim: 'slide-in-from-top',
      },
      bottom: {
        sm: 'h-80', md: 'h-96', lg: 'h-[32rem]', xl: 'h-[40rem]',
        container: 'bottom-0 left-0 w-full',
        anim: 'slide-in-from-bottom',
      },
    }

    const pos = positions[position]

    return (
      <div className="fixed inset-0 z-[200]">
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={onClose}
        />
        <div
          ref={ref}
          className={cn(
            'fixed',
            pos.container,
            pos[size as keyof typeof pos],
            'bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent backdrop-blur-2xl',
            'border-l border-white/10',
            'shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]',
            'animate-in',
            pos.anim as string,
            'duration-300',
            'flex flex-col',
            className,
          )}
          {...props}
        >
          {title && (
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h3 className="text-lg font-bold bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
                {title}
              </h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-xl transition-colors"
              >
                <X size={20} className="text-white/60" />
              </button>
            </div>
          )}
          <div className="flex-1 overflow-auto p-6">{children}</div>
        </div>
      </div>
    )
  },
)
Sheet.displayName = 'Sheet'
