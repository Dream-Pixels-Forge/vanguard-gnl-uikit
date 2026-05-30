import { cn } from '../../lib/utils'
import { getLiquidSurface, getAnimation } from '../../lib/tailwind-utils'
import { File, FileText, Code, Download } from 'lucide-react'
import * as React from 'react'

export interface FileCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  size: string
  type?: string
  onDownload?: () => void
}

function getFileIcon(type?: string): React.ElementType {
  if (!type) return File
  if (type.includes('pdf') || type.includes('doc') || type.includes('txt')) return FileText
  if (type.includes('js') || type.includes('ts') || type.includes('json') || type.includes('html') || type.includes('css')) return Code
  return File
}

export const FileCard = React.forwardRef<HTMLDivElement, FileCardProps>(
  function FileCard({ name, size, type, onDownload, className, ...props }, ref) {
    const Icon = getFileIcon(type)

    return (
      <div
        ref={ref}
        className={cn(
          'group flex items-center gap-4 p-4 rounded-2xl',
          getLiquidSurface(),
          getAnimation('fast'),
          'hover:shadow-[0_0_20px_rgba(59,130,246,0.08)]',
          className,
        )}
        {...props}
      >
        <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-blue-400">
          <Icon size={20} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white truncate">{name}</p>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-[10px] text-white/30">{size}</span>
            {type && <span className="text-[10px] text-white/20 uppercase">{type}</span>}
          </div>
        </div>
        {onDownload && (
          <button
            onClick={onDownload}
            className="p-2 rounded-xl text-white/30 hover:text-blue-400 hover:bg-white/5 transition-colors"
          >
            <Download size={16} />
          </button>
        )}
      </div>
    )
  },
)
FileCard.displayName = 'FileCard'
