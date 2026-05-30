import { useEffect, useRef, useState, type RefObject } from 'react'

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {},
): [RefObject<HTMLDivElement | null>, boolean] {
  const { freezeOnceVisible = false, ...observerOptions } = options
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      const isElementVisible = entry.isIntersecting
      setIsVisible(isElementVisible)

      if (freezeOnceVisible && isElementVisible) {
        observer.unobserve(element)
      }
    }, observerOptions)

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [freezeOnceVisible, observerOptions.threshold, observerOptions.root, observerOptions.rootMargin])

  return [ref, isVisible]
}
