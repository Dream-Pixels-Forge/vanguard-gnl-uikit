import { cn } from '../../lib/utils'
import { getAnimation } from '../../lib/tailwind-utils'
import { ChevronRight } from 'lucide-react'
import * as React from 'react'

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[]
  separator?: React.ReactNode
}

export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  function Breadcrumb(
    { items, separator, className, ...props },
    ref,
  ) {
    return (
      <nav ref={ref} aria-label="Breadcrumb" className={cn('', className)} {...props}>
        <ol className="flex items-center gap-1">
          {items.map((item, index) => {
            const isLast = index === items.length - 1

            return (
              <li key={item.label} className="flex items-center gap-1">
                {item.href && !isLast ? (
                  <a
                    href={item.href}
                    className={cn(
                      'text-sm text-white/40 hover:text-white/70',
                      getAnimation('fast'),
                    )}
                  >
                    {item.label}
                  </a>
                ) : (
                  <span
                    className={cn(
                      'text-sm font-medium',
                      isLast
                        ? 'bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent'
                        : 'text-white/40',
                    )}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                )}

                {!isLast && (
                  <span className="text-white/20">
                    {separator || <ChevronRight size={12} />}
                  </span>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    )
  },
)
Breadcrumb.displayName = 'Breadcrumb'
