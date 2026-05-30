import { cn } from '../../lib/utils'
import { getLiquidSurface, getAnimation } from '../../lib/tailwind-utils'
import { User } from 'lucide-react'
import * as React from 'react'

export interface UserCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  role?: string
  avatar?: string
  stats?: { label: string; value: string | number }[]
}

export const UserCard = React.forwardRef<HTMLDivElement, UserCardProps>(
  function UserCard({ name, role, avatar, stats, className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          getLiquidSurface(),
          getAnimation('slow'),
          'rounded-3xl p-6 text-center group hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]',
          className,
        )}
        {...props}
      >
        <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-tr from-blue-500 to-blue-400 p-[2px]">
          <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
            {avatar ? (
              <img src={avatar} alt={name} className="w-full h-full object-cover" />
            ) : (
              <User size={24} className="text-white/50" />
            )}
          </div>
        </div>
        <h3 className="text-base font-bold bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
          {name}
        </h3>
        {role && <p className="text-xs text-white/40 mt-1">{role}</p>}
        {stats && stats.length > 0 && (
          <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-white/5">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-sm font-bold text-white">{s.value}</div>
                <div className="text-[9px] uppercase tracking-widest text-white/30">{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  },
)
UserCard.displayName = 'UserCard'
