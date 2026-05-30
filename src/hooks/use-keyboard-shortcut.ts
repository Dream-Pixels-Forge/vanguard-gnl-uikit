import { useEffect, useCallback } from 'react'

export type KeyModifier = 'ctrl' | 'shift' | 'alt' | 'meta'

interface KeyboardShortcutOptions {
  modifiers?: KeyModifier[]
  preventDefault?: boolean
}

export function useKeyboardShortcut(
  key: string,
  callback: () => void,
  options: KeyboardShortcutOptions = {},
) {
  const { modifiers = [], preventDefault = true } = options

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const keyMatch = event.key.toLowerCase() === key.toLowerCase()
      const modifiersMatch = modifiers.every(mod => {
        switch (mod) {
          case 'ctrl': return event.ctrlKey
          case 'shift': return event.shiftKey
          case 'alt': return event.altKey
          case 'meta': return event.metaKey
          default: return false
        }
      })

      if (keyMatch && modifiersMatch) {
        if (preventDefault) {
          event.preventDefault()
        }
        callback()
      }
    },
    [key, callback, modifiers, preventDefault],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])
}
