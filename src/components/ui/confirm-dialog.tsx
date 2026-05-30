import * as React from 'react'
import { cn } from '../../lib/utils'
import { Dialog, type DialogProps } from './dialog'
import { Button } from './button'

export interface ConfirmDialogProps extends Omit<DialogProps, 'footer'> {
  onConfirm: () => void
  confirmText?: string
  cancelText?: string
  variant?: 'danger' | 'primary'
}

const ConfirmDialog = React.forwardRef<HTMLDivElement, ConfirmDialogProps>(
  ({ onConfirm, onClose, confirmText = 'Confirm', cancelText = 'Cancel', variant = 'danger', ...props }, ref) => (
    <Dialog
      ref={ref}
      onClose={onClose}
      footer={
        <>
          <Button variant="ghost" size="sm" onClick={onClose}>{cancelText}</Button>
          <Button variant={variant} size="sm" onClick={onConfirm}>{confirmText}</Button>
        </>
      }
      {...props}
    />
  )
)
ConfirmDialog.displayName = 'ConfirmDialog'
export { ConfirmDialog }
