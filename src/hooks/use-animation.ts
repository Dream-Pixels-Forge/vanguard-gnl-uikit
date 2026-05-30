import { useState, useCallback, useRef } from 'react'

interface UseAnimationOptions {
  duration?: number
  onComplete?: () => void
}

export function useAnimation(options: UseAnimationOptions = {}) {
  const { duration = 300, onComplete } = options
  const [isAnimating, setIsAnimating] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const start = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsAnimating(true)
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false)
      onComplete?.()
    }, duration)
  }, [duration, onComplete])

  const stop = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsAnimating(false)
  }, [])

  return { isAnimating, start, stop }
}
