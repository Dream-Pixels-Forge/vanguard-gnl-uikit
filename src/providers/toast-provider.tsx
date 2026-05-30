import React, { useState, useCallback } from 'react'
import { X, CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react'
import { ToastContext } from '../hooks/use-toast'
import { cn } from '../lib/utils'

interface ToastProviderProps {
  children: React.ReactNode
}

interface ToastData {
  id: number
  title: string
  message?: string
  variant: 'success' | 'error' | 'warning' | 'info'
  duration?: number
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastData[]>([])

  const addToast = useCallback(({ title, message, variant = 'info', duration = 4000 }: Omit<ToastData, 'id'>) => {
    const id = Date.now()
    setToasts((prev) => [...prev, { id, title, message, variant }])
    if (duration > 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
      }, duration)
    }
  }, [])

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast, toasts }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[300] space-y-4">
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onClose={() => removeToast(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

interface ToastProps extends ToastData {
  onClose: () => void
  className?: string
}

export function Toast({ title, message, variant = 'info', onClose, className }: ToastProps) {
  const variants = {
    success: 'border-blue-400/30 shadow-[0_8px_24px_rgba(59,130,246,0.2)]',
    error: 'border-white/20 shadow-[0_8px_24px_rgba(255,255,255,0.05)]',
    warning: 'border-white/20 shadow-[0_8px_24px_rgba(255,255,255,0.05)]',
    info: 'border-blue-400/30 shadow-[0_8px_24px_rgba(59,130,246,0.2)]',
  }

  const icons = { success: CheckCircle, error: XCircle, warning: AlertTriangle, info: Info }
  const Icon = icons[variant]
  const iconColors = {
    success: 'text-blue-400',
    error: 'text-white/60',
    warning: 'text-white/60',
    info: 'text-blue-400',
  }

  return (
    <div
      className={cn(
        'liquid-glass-surface rounded-2xl border p-4 min-w-[300px]',
        'animate-in slide-in-from-right duration-300',
        variants[variant],
        className
      )}
    >
      <div className="flex items-start gap-3">
        <Icon size={20} className={iconColors[variant]} />
        <div className="flex-1">
          <p className="text-sm font-bold text-white">{title}</p>
          <p className="text-xs text-white/60 mt-1">{message}</p>
        </div>
        <button onClick={onClose} className="p-1 hover:bg-white/5 rounded-lg transition-colors">
          <X size={16} />
        </button>
      </div>
    </div>
  )
}
