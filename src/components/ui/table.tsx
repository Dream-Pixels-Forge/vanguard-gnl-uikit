import { cn } from '../../lib/utils'
import { getLiquidSurface, getAnimation } from '../../lib/tailwind-utils'
import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export interface TableColumn<T = any> {
  header: string
  accessor: string
  render?: (value: any, row: T) => React.ReactNode
}

export interface TableProps<T = any> extends React.HTMLAttributes<HTMLDivElement> {
  columns: TableColumn<T>[]
  data: T[]
  emptyMessage?: string
}

export function Table<T = any>({ columns, data, emptyMessage = 'No data', className, ...props }: TableProps<T>) {
  return (
    <div className={cn('overflow-hidden rounded-2xl', getLiquidSurface(), className)} {...props}>
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/5">
            {columns.map((col, idx) => (
              <th key={idx} className="text-left py-4 px-4 text-[9px] font-black uppercase tracking-widest text-white/40">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="py-8 text-center text-white/40 text-sm">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row: any, rowIdx: number) => (
              <tr key={rowIdx} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                {columns.map((col, colIdx) => (
                  <td key={colIdx} className="py-4 px-4 text-sm text-white/70">
                    {col.render ? col.render(row[col.accessor], row) : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  function Pagination({ currentPage, totalPages, onPageChange, className, ...props }, ref) {
    return (
      <div ref={ref} className={cn('flex items-center justify-center gap-2', className)} {...props}>
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={cn(
            'p-2 rounded-xl transition-all',
            currentPage === 1 ? 'text-white/20 cursor-not-allowed' : 'text-white/60 hover:bg-white/5',
          )}
        >
          <ChevronLeft size={16} />
        </button>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => onPageChange(i + 1)}
            className={cn(
              'w-8 h-8 rounded-xl text-[10px] font-bold transition-all',
              currentPage === i + 1
                ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-[0_4px_12px_rgba(59,130,246,0.4)]'
                : 'text-white/40 hover:bg-white/5 hover:text-white',
            )}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className={cn(
            'p-2 rounded-xl transition-all',
            currentPage === totalPages ? 'text-white/20 cursor-not-allowed' : 'text-white/60 hover:bg-white/5',
          )}
        >
          <ChevronRight size={16} />
        </button>
      </div>
    )
  },
)
Pagination.displayName = 'Pagination'
