import * as React from 'react'
import { cn } from '../../lib/utils'
import { Modal, type ModalProps } from './modal'

export interface DialogProps extends Omit<ModalProps, 'showClose'> {
  footer?: React.ReactNode
}

const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  ({ isOpen, onClose, title, children, footer, className, ...props }, ref) => (
    <Modal ref={ref} isOpen={isOpen} onClose={onClose} title={title} showClose={false} className={className} {...props}>
      <div className="space-y-4">
        {children}
        {footer && (
          <div className="flex justify-end gap-4 pt-4 border-t border-white/5">
            {footer}
          </div>
        )}
      </div>
    </Modal>
  )
)
Dialog.displayName = 'Dialog'
export { Dialog }
