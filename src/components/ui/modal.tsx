import * as React from 'react'
import { X } from 'lucide-react'
import { cn } from '../../lib/utils'

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  onClose: () => void
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  showClose?: boolean
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ isOpen, onClose, title, children, size = 'md', showClose = true, className, ...props }, ref) => {
    if (!isOpen) return null
    const sizes = { sm: 'max-w-md', md: 'max-w-lg', lg: 'max-w-2xl', xl: 'max-w-4xl', full: 'max-w-[90vw]' }
    return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300" onClick={onClose} />
        <div
          ref={ref}
          className={cn(
            'relative w-full mx-4 rounded-[2rem]',
            'bg-gradient-to-br from-white/[0.1] via-white/[0.05] to-white/[0.02] backdrop-blur-2xl',
            'border border-white/15',
            'shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]',
            'animate-in zoom-in-95 fade-in duration-300',
            sizes[size],
            className
          )}
          {...props}
        >
          {title && (
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h3 className="text-xl font-bold bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">{title}</h3>
              {showClose && (
                <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-xl transition-colors">
                  <X size={20} className="text-white/60" />
                </button>
              )}
            </div>
          )}
          <div className="p-6">{children}</div>
        </div>
      </div>
    )
  }
)
Modal.displayName = 'Modal'
export { Modal }
