import { cn } from '../../lib/utils'
import { getLiquidSurface, getAnimation } from '../../lib/tailwind-utils'
import * as React from 'react'
import { Upload } from 'lucide-react'

export interface FileUploadProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  accept?: string
  multiple?: boolean
  description?: string
  hint?: string
}

export const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  function FileUpload(
    {
      onChange,
      accept,
      multiple,
      description = 'Drop files here or click to upload',
      hint = 'PNG, JPG, GIF up to 10MB',
      className,
      ...props
    },
    ref,
  ) {
    return (
      <label
        className={cn(
          'flex flex-col items-center justify-center gap-3 p-8',
          getLiquidSurface(),
          'rounded-2xl',
          'cursor-pointer',
          'hover:bg-gradient-to-br hover:from-white/[0.08] hover:via-white/[0.04] hover:to-white/[0.02]',
          getAnimation('fast'),
          className,
        )}
      >
        <Upload size={32} className="text-white/30" />
        <div className="text-center">
          <p className="text-sm font-bold text-white/70">{description}</p>
          {hint && <p className="text-xs text-white/40 mt-1">{hint}</p>}
        </div>
        <input
          ref={ref}
          type="file"
          className="hidden"
          accept={accept}
          multiple={multiple}
          onChange={onChange}
          {...props}
        />
      </label>
    )
  },
)
FileUpload.displayName = 'FileUpload'
