import { cn } from '../../lib/utils'
import { getAnimation } from '../../lib/tailwind-utils'
import { ExternalLink } from 'lucide-react'
import * as React from 'react'

export interface ProjectRowProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  description?: string
  icon?: React.ElementType
  status?: 'active' | 'paused' | 'completed'
  meta?: string
  href?: string
}

const statusStyles: Record<string, string> = {
  active: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  paused: 'bg-white/20 text-white/70 border-white/30',
  completed: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
}

export const ProjectRow = React.forwardRef<HTMLDivElement, ProjectRowProps>(
  function ProjectRow({ name, description, icon: Icon, status, meta, href, className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          'group flex items-center gap-4 p-4 rounded-2xl',
          'bg-gradient-to-br from-white/[0.04] to-transparent',
          'border border-white/5 hover:border-white/10',
          getAnimation('fast'),
          'hover:bg-white/[0.06] cursor-pointer',
          className,
        )}
        {...props}
      >
        {Icon && (
          <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-white/50 group-hover:text-blue-400 transition-colors">
            <Icon size={18} />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-white truncate">{name}</span>
            {status && (
              <span className={cn('text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border', statusStyles[status])}>
                {status}
              </span>
            )}
          </div>
          {description && <p className="text-xs text-white/30 truncate mt-0.5">{description}</p>}
        </div>
        {meta && <span className="text-[10px] text-white/30 font-medium hidden sm:block">{meta}</span>}
        {href && (
          <ExternalLink size={14} className="text-white/20 group-hover:text-white/50 transition-colors" />
        )}
      </div>
    )
  },
)
ProjectRow.displayName = 'ProjectRow'
