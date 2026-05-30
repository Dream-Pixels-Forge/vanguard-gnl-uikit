import { cn } from '../../lib/utils'
import { getLiquidSurface, getAnimation } from '../../lib/tailwind-utils'
import * as React from 'react'

export interface CalendarProps extends React.HTMLAttributes<HTMLDivElement> {
  month?: number
  year?: number
  selectedDate?: Date
  onSelectDate?: (date: Date) => void
}

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function getDaysInMonth(month: number, year: number): number {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(month: number, year: number): number {
  return new Date(year, month, 1).getDay()
}

export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  function Calendar({ month, year, selectedDate, onSelectDate, className, ...props }, ref) {
    const now = new Date()
    const currentMonth = month ?? now.getMonth()
    const currentYear = year ?? now.getFullYear()
    const daysInMonth = getDaysInMonth(currentMonth, currentYear)
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear)

    const isSelected = (day: number) => {
      if (!selectedDate) return false
      return (
        selectedDate.getDate() === day &&
        selectedDate.getMonth() === currentMonth &&
        selectedDate.getFullYear() === currentYear
      )
    }

    const isToday = (day: number) => {
      return now.getDate() === day && now.getMonth() === currentMonth && now.getFullYear() === currentYear
    }

    return (
      <div
        ref={ref}
        className={cn(getLiquidSurface(), 'rounded-3xl p-5', className)}
        {...props}
      >
        <div className="text-sm font-bold text-white mb-4">
          {MONTHS[currentMonth]} {currentYear}
        </div>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {DAYS.map((d) => (
            <div key={d} className="text-center text-[9px] font-bold uppercase tracking-widest text-white/30 py-1">
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1
            return (
              <button
                key={day}
                onClick={() => onSelectDate?.(new Date(currentYear, currentMonth, day))}
                className={cn(
                  'aspect-square flex items-center justify-center rounded-xl text-xs font-medium',
                  getAnimation('fast'),
                  isSelected(day)
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-[0_4px_12px_rgba(59,130,246,0.4)]'
                    : isToday(day)
                      ? 'bg-white/10 text-white border border-white/20'
                      : 'text-white/40 hover:bg-white/5 hover:text-white',
                )}
              >
                {day}
              </button>
            )
          })}
        </div>
      </div>
    )
  },
)
Calendar.displayName = 'Calendar'
