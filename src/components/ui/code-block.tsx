import { cn } from '../../lib/utils'
import { getLiquidSurface, getAnimation } from '../../lib/tailwind-utils'
import { Copy, Check } from 'lucide-react'
import * as React from 'react'

export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string
  language?: string
}

export const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
  function CodeBlock({ code, language, className, ...props }, ref) {
    const [copied, setCopied] = React.useState(false)

    const handleCopy = () => {
      navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }

    return (
      <div
        ref={ref}
        className={cn(
          'group rounded-2xl overflow-hidden',
          getLiquidSurface(),
          className,
        )}
        {...props}
      >
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
          {language ? (
            <span className="text-[9px] font-bold uppercase tracking-widest text-white/30">{language}</span>
          ) : <span />}
          <button
            onClick={handleCopy}
            className={cn(
              'p-1.5 rounded-lg transition-colors',
              copied ? 'text-blue-400' : 'text-white/30 hover:text-white/60',
            )}
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto">
          <code className="text-xs text-white/60 font-mono leading-relaxed">{code}</code>
        </pre>
      </div>
    )
  },
)
CodeBlock.displayName = 'CodeBlock'
