import { useState, useCallback, createContext, useContext } from 'react'

export type ToastVariant = 'success' | 'error' | 'warning' | 'info'

export interface ToastData {
  id: number
  title: string
  message?: string
  variant: ToastVariant
  duration?: number
}

interface ToastContextValue {
  toasts: ToastData[]
  addToast: (toast: Omit<ToastData, 'id'>) => void
  removeToast: (id: number) => void
}

export const ToastContext = createContext<ToastContextValue | null>(null)

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

export function useToastState() {
  const [toasts, setToasts] = useState<ToastData[]>([])

  const addToast = useCallback(({ title, message, variant = 'info', duration = 4000 }: Omit<ToastData, 'id'>) => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, title, message, variant, duration }])
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, duration)
  }, [])

  const removeToast = useCallback((id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  return { toasts, addToast, removeToast }
}
