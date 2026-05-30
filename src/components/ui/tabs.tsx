import { cn } from '../../lib/utils'
import { getLiquidSurface, getAnimation } from '../../lib/tailwind-utils'
import * as React from 'react'

export interface TabItem {
  id: string
  label: string
  icon?: React.ElementType
}

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: TabItem[]
  activeTab?: string
  onTabChange?: (id: string) => void
  variant?: 'default' | 'pills' | 'underline'
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  function Tabs({ tabs, activeTab, onTabChange, variant = 'default', className, ...props }, ref) {
    const [internalActive, setInternalActive] = React.useState(tabs[0]?.id || '')
    const currentActive = activeTab ?? internalActive

    const handleTabChange = (id: string) => {
      if (!activeTab) setInternalActive(id)
      onTabChange?.(id)
    }

    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center gap-1',
          variant === 'default' && cn(getLiquidSurface(), 'rounded-2xl p-1'),
          variant === 'underline' && 'border-b border-white/10',
          className,
        )}
        {...props}
      >
        {tabs.map(tab => {
          const Icon = tab.icon
          const isActive = tab.id === currentActive
          return (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={cn(
                'flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all',
                variant === 'default' && [
                  'px-4 py-2.5 rounded-xl',
                  isActive
                    ? 'bg-gradient-to-br from-white/10 to-white/5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'
                    : 'text-white/40 hover:text-white',
                ],
                variant === 'pills' && [
                  'px-4 py-2 rounded-full',
                  isActive
                    ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-[0_4px_12px_rgba(59,130,246,0.4)]'
                    : 'text-white/40 hover:text-white hover:bg-white/5',
                ],
                variant === 'underline' && [
                  'px-4 py-3 border-b-2 -mb-px',
                  isActive
                    ? 'border-blue-500 text-white'
                    : 'border-transparent text-white/40 hover:text-white',
                ],
                getAnimation('fast'),
              )}
            >
              {Icon && <Icon size={14} />}
              {tab.label}
            </button>
          )
        })}
      </div>
    )
  },
)
Tabs.displayName = 'Tabs'

export interface TabContentProps extends React.HTMLAttributes<HTMLDivElement> {
  tabId: string
  activeTab?: string
}

export const TabContent = React.forwardRef<HTMLDivElement, TabContentProps>(
  function TabContent({ tabId, activeTab, className, children, ...props }, ref) {
    if (tabId !== activeTab) return null
    return (
      <div ref={ref} className={cn('animate-in fade-in duration-300', className)} {...props}>
        {children}
      </div>
    )
  },
)
TabContent.displayName = 'TabContent'
