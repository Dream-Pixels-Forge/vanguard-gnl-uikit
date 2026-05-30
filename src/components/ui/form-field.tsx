import { cn } from '../../lib/utils'
import * as React from 'react'

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  error?: string
  required?: boolean
  description?: string
}

export const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  function FormField({ label, error, required, description, children, className, ...props }, ref) {
    return (
      <div ref={ref} className={cn('space-y-2', className)} {...props}>
        {label && (
          <label className="block text-[10px] font-black uppercase tracking-widest text-white/60">
            {label}
            {required && <span className="ml-1 text-white/70">*</span>}
          </label>
        )}
        {description && (
          <p className="text-[9px] text-white/40 -mt-1">{description}</p>
        )}
        {children}
        {error && (
          <p className="text-[9px] text-white/70">{error}</p>
        )}
      </div>
    )
  },
)
FormField.displayName = 'FormField'
