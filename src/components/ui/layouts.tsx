import { cn } from '../../lib/utils'
import * as React from 'react'

export interface GridLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number
  gap?: number
}

export const GridLayout = React.forwardRef<HTMLDivElement, GridLayoutProps>(
  function GridLayout({ className, columns = 2, gap = 4, children, style, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn('grid', className)}
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: `${gap * 0.25}rem`, ...style }}
        {...props}
      >
        {children}
      </div>
    )
  },
)
GridLayout.displayName = 'GridLayout'

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'col'
  gap?: number
  align?: 'start' | 'center' | 'end' | 'stretch'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  wrap?: boolean
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  function Stack({ className, direction = 'col', gap = 4, align, justify, wrap = false, ...props }, ref) {
    const alignMap = { start: 'items-start', center: 'items-center', end: 'items-end', stretch: 'items-stretch' }
    const justifyMap = { start: 'justify-start', center: 'justify-center', end: 'justify-end', between: 'justify-between', around: 'justify-around', evenly: 'justify-evenly' }

    return (
      <div
        ref={ref}
        className={cn(
          direction === 'row' ? 'flex-row' : 'flex-col',
          'flex',
          wrap && 'flex-wrap',
          align && alignMap[align],
          justify && justifyMap[justify],
          className,
        )}
        style={{ gap: `${gap * 0.25}rem` }}
        {...props}
      />
    )
  },
)
Stack.displayName = 'Stack'

export const HStack = React.forwardRef<HTMLDivElement, Omit<StackProps, 'direction'>>(
  function HStack(props, ref) {
    return <Stack ref={ref} direction="row" {...props} />
  },
)
HStack.displayName = 'HStack'

export const VStack = React.forwardRef<HTMLDivElement, Omit<StackProps, 'direction'>>(
  function VStack(props, ref) {
    return <Stack ref={ref} direction="col" {...props} />
  },
)
VStack.displayName = 'VStack'

export const Center = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function Center({ className, ...props }, ref) {
    return <div ref={ref} className={cn('flex items-center justify-center', className)} {...props} />
  },
)
Center.displayName = 'Center'

export const Spacer = () => <div className="flex-1" />
Spacer.displayName = 'Spacer'
