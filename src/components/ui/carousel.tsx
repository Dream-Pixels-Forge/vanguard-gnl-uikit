import { cn } from '../../lib/utils'
import { getLiquidGlass, getAnimation } from '../../lib/tailwind-utils'
import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  showDots?: boolean
  autoPlay?: boolean
  interval?: number
}

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  function Carousel({ children, showDots = true, autoPlay = false, interval = 5000, className, ...props }, ref) {
    const [activeIndex, setActiveIndex] = React.useState(0)
    const items = React.Children.toArray(children)
    const totalItems = items.length

    const goTo = React.useCallback((index: number) => {
      setActiveIndex(index)
    }, [])

    const next = React.useCallback(() => {
      setActiveIndex(prev => (prev + 1) % totalItems)
    }, [totalItems])

    const prev = React.useCallback(() => {
      setActiveIndex(prev => (prev - 1 + totalItems) % totalItems)
    }, [totalItems])

    React.useEffect(() => {
      if (!autoPlay) return
      const timer = setInterval(next, interval)
      return () => clearInterval(timer)
    }, [autoPlay, interval, next])

    return (
      <div ref={ref} className={cn('relative', className)} {...props}>
        <div className={cn('overflow-hidden rounded-2xl', getLiquidGlass())}>
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {items.map((child, idx) => (
              <div key={idx} className="flex-shrink-0 w-full">
                {child}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className={cn(
            'absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full',
            'bg-black/50 backdrop-blur-xl border border-white/10 text-white/70',
            'hover:text-white hover:bg-black/70',
            getAnimation('fast'),
            'flex items-center justify-center',
          )}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className={cn(
            'absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full',
            'bg-black/50 backdrop-blur-xl border border-white/10 text-white/70',
            'hover:text-white hover:bg-black/70',
            getAnimation('fast'),
            'flex items-center justify-center',
          )}
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots */}
        {showDots && (
          <div className="flex items-center justify-center gap-2 mt-4">
            {Array.from({ length: totalItems }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={cn(
                  'w-2 h-2 rounded-full transition-all',
                  idx === activeIndex
                    ? 'bg-blue-500 w-6'
                    : 'bg-white/20 hover:bg-white/40',
                )}
              />
            ))}
          </div>
        )}
      </div>
    )
  },
)
Carousel.displayName = 'Carousel'

export interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(
  function CarouselItem({ className, children, ...props }, ref) {
    return (
      <div ref={ref} className={cn('w-full', className)} {...props}>
        {children}
      </div>
    )
  },
)
CarouselItem.displayName = 'CarouselItem'
