import * as React from 'react'
import { X } from 'lucide-react'
import { cn } from '../../lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

export const tagVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full border backdrop-blur-md transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'bg-white/5 border-white/10 text-white/60',
        blue: 'bg-blue-500/15 border-blue-500/30 text-blue-300',
      },
      size: {
        sm: 'px-2 py-0.5 text-[9px]',
        md: 'px-3 py-1 text-[10px]',
        lg: 'px-4 py-1.5 text-xs',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {
  onRemove?: () => void
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, variant, size, onRemove, children, ...props }, ref) => (
    <span ref={ref} className={cn(tagVariants({ variant, size }), className)} {...props}>
      <span className="font-bold uppercase tracking-wider">{children}</span>
      {onRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onRemove()
          }}
          className="ml-0.5 hover:opacity-70 transition-opacity"
        >
          <X size={10} />
        </button>
      )}
    </span>
  ),
)
Tag.displayName = 'Tag'

export { Tag }
