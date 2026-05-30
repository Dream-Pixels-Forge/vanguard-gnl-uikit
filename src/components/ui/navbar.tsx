import { cn } from '../../lib/utils'
import { getLiquidGlass, getLiquidSurface, getAnimation } from '../../lib/tailwind-utils'
import { Search, Bell, Menu, Settings, LogOut, ChevronDown, Box } from 'lucide-react'
import * as React from 'react'

export interface NavItem {
  label: string
  href?: string
  icon?: React.ElementType
  active?: boolean
  children?: NavItem[]
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  brand?: React.ReactNode
  items?: NavItem[]
  scrolled?: boolean
  search?: {
    placeholder?: string
    onSearch?: (value: string) => void
  }
  notificationCount?: number
  onNotificationClick?: () => void
  onSettingsClick?: () => void
  onLogout?: () => void
  avatar?: {
    src?: string
    name?: string
  }
  actions?: React.ReactNode
  onMenuToggle?: () => void
}

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  function Navbar(
    {
      brand,
      items = [],
      scrolled = false,
      search,
      notificationCount = 0,
      onNotificationClick,
      onSettingsClick,
      onLogout,
      avatar,
      actions,
      onMenuToggle,
      className,
      ...props
    },
    ref,
  ) {
    const [searchOpen, setSearchOpen] = React.useState(false)
    const [searchValue, setSearchValue] = React.useState('')

    return (
      <header
        ref={ref}
        className={cn(
          'sticky top-0 z-[100] w-full',
          'transition-all duration-500',
          scrolled
            ? cn(
                getLiquidSurface(),
                'shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)]',
              )
            : 'bg-transparent border-b border-white/5',
          className,
        )}
        {...props}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Left: Brand + Mobile Menu */}
            <div className="flex items-center gap-3">
              <button
                onClick={onMenuToggle}
                className={cn(
                  'lg:hidden p-2 rounded-xl',
                  'bg-white/5 hover:bg-white/10 border border-white/10',
                  'text-white/50 hover:text-white',
                  getAnimation('fast'),
                )}
                aria-label="Toggle menu"
              >
                <Menu size={18} />
              </button>

              {brand || (
                <a href="/" className="flex items-center gap-2">
                  <div
                    className={cn(
                      'p-2 rounded-xl',
                      getLiquidGlass(),
                      'text-blue-400',
                    )}
                  >
                    <Box size={20} />
                  </div>
                  <span className="font-bold text-sm tracking-tight bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">
                    Vanguard
                  </span>
                </a>
              )}
            </div>

            {/* Center: Nav Items */}
            {items.length > 0 && (
              <nav className="hidden lg:flex items-center gap-1">
                {items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={cn(
                      'flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium',
                      getAnimation('fast'),
                      item.active
                        ? 'bg-white/10 text-white border border-white/10'
                        : 'text-white/50 hover:text-white hover:bg-white/5',
                    )}
                  >
                    {item.icon && <item.icon size={14} />}
                    {item.label}
                    {item.children && item.children.length > 0 && (
                      <ChevronDown size={12} className="opacity-50" />
                    )}
                  </a>
                ))}
              </nav>
            )}

            {/* Right: Search, Notifications, Avatar, Actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              {search && (
                <div className="relative">
                  {searchOpen ? (
                    <div
                      className={cn(
                        'flex items-center gap-2 px-3 py-2 rounded-xl',
                        getLiquidGlass(),
                        'animate-in fade-in slide-in-from-right-2 duration-200',
                      )}
                    >
                      <Search size={14} className="text-white/40" />
                      <input
                        autoFocus
                        type="text"
                        placeholder={search.placeholder || 'Search...'}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') search.onSearch?.(searchValue)
                          if (e.key === 'Escape') setSearchOpen(false)
                        }}
                        className="bg-transparent text-sm text-white placeholder-white/30 outline-none w-40"
                      />
                    </div>
                  ) : (
                    <button
                      onClick={() => setSearchOpen(true)}
                      className={cn(
                        'p-2 rounded-xl',
                        'bg-white/5 hover:bg-white/10 border border-white/10',
                        'text-white/50 hover:text-white',
                        getAnimation('fast'),
                      )}
                      aria-label="Search"
                    >
                      <Search size={16} />
                    </button>
                  )}
                </div>
              )}

              {/* Notifications */}
              {onNotificationClick && (
                <button
                  onClick={onNotificationClick}
                  className={cn(
                    'relative p-2 rounded-xl',
                    'bg-white/5 hover:bg-white/10 border border-white/10',
                    'text-white/50 hover:text-white',
                    getAnimation('fast'),
                  )}
                  aria-label="Notifications"
                >
                  <Bell size={16} />
                  {notificationCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-white px-1 text-[9px] font-bold text-white">
                      {notificationCount > 99 ? '99+' : notificationCount}
                    </span>
                  )}
                </button>
              )}

              {/* Custom actions */}
              {actions}

              {/* Divider */}
              {(avatar || onSettingsClick || onLogout) && (
                <div className="h-6 w-px bg-white/10 mx-1" />
              )}

              {/* Settings */}
              {onSettingsClick && (
                <button
                  onClick={onSettingsClick}
                  className={cn(
                    'p-2 rounded-xl',
                    'bg-white/5 hover:bg-white/10 border border-white/10',
                    'text-white/50 hover:text-white',
                    getAnimation('fast'),
                  )}
                  aria-label="Settings"
                >
                  <Settings size={16} />
                </button>
              )}

              {/* Avatar */}
              {avatar && (
                <button
                  className={cn(
                    'flex items-center gap-2 px-2 py-1.5 rounded-xl',
                    'hover:bg-white/5',
                    getAnimation('fast'),
                  )}
                >
                  {avatar.src ? (
                    <img
                      src={avatar.src}
                      alt={avatar.name || 'Avatar'}
                      className="h-8 w-8 rounded-xl object-cover border border-white/10"
                    />
                  ) : (
                    <div
                      className={cn(
                        'h-8 w-8 rounded-xl',
                        getLiquidGlass(),
                        'flex items-center justify-center text-sm font-bold text-white/60',
                      )}
                    >
                      {avatar.name?.[0]?.toUpperCase() || 'U'}
                    </div>
                  )}
                </button>
              )}

              {/* Logout */}
              {onLogout && (
                <button
                  onClick={onLogout}
                  className={cn(
                    'p-2 rounded-xl',
                    'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20',
                    'text-white/50 hover:text-white',
                    getAnimation('fast'),
                  )}
                  aria-label="Logout"
                >
                  <LogOut size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </header>
    )
  },
)
Navbar.displayName = 'Navbar'
