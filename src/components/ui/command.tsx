import { cn } from '../../lib/utils'
import * as React from 'react'
import { Search, Command as CommandIcon } from 'lucide-react'

export interface CommandItem {
  id: string
  label: string
  shortcut?: string
  icon?: React.ElementType
  onSelect?: () => void
}

export interface CommandProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  onClose: () => void
  items: CommandItem[]
  placeholder?: string
}

export const Command = React.forwardRef<HTMLDivElement, CommandProps>(
  function Command({ isOpen, onClose, items, placeholder = 'Type a command...', className, ...props }, ref) {
    const [search, setSearch] = React.useState('')
    const [selectedIdx, setSelectedIdx] = React.useState(0)

    const filtered = items.filter(item =>
      item.label.toLowerCase().includes(search.toLowerCase()),
    )

    React.useEffect(() => {
      setSelectedIdx(0)
    }, [search])

    React.useEffect(() => {
      if (!isOpen) setSearch('')
    }, [isOpen])

    if (!isOpen) return null

    return (
      <div className="fixed inset-0 z-[300] flex items-start justify-center pt-[15vh]">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose} />
        <div
          ref={ref}
          className={cn(
            'relative w-full max-w-lg mx-4',
            'bg-gradient-to-br from-white/[0.1] via-white/[0.05] to-white/[0.02] backdrop-blur-2xl',
            'border border-white/15 rounded-2xl',
            'shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]',
            'animate-in zoom-in-95 fade-in duration-200',
            'overflow-hidden',
            className,
          )}
          {...props}
        >
          {/* Search input */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
            <Search size={16} className="text-white/30" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={placeholder}
              className="flex-1 bg-transparent border-none outline-none text-sm text-white placeholder:text-white/30"
              autoFocus
            />
            <kbd className="text-[9px] font-mono text-white/30 px-1.5 py-0.5 rounded border border-white/10 bg-white/5">
              ESC
            </kbd>
          </div>

          {/* Results */}
          <div className="max-h-64 overflow-auto py-2">
            {filtered.length === 0 ? (
              <div className="px-4 py-8 text-center text-white/30 text-sm">No results found.</div>
            ) : (
              filtered.map((item, idx) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => { item.onSelect?.(); onClose() }}
                    onMouseEnter={() => setSelectedIdx(idx)}
                    className={cn(
                      'w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors',
                      idx === selectedIdx ? 'bg-white/10' : 'hover:bg-white/5',
                    )}
                  >
                    {Icon && <Icon size={16} className="text-white/40" />}
                    <span className="flex-1 text-sm text-white/70">{item.label}</span>
                    {item.shortcut && (
                      <kbd className="text-[9px] font-mono text-white/30 px-1.5 py-0.5 rounded border border-white/10 bg-white/5">
                        {item.shortcut}
                      </kbd>
                    )}
                  </button>
                )
              })
            )}
          </div>
        </div>
      </div>
    )
  },
)
Command.displayName = 'Command'
