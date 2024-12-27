'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/utils/utils/cn'

interface ToastProps {
  message: string
  duration?: number
  onClose?: () => void
  className?: string
}

export function Toast({
  message,
  duration = 5000,
  onClose,
  className,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onClose?.()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  if (!isVisible) return null

  return (
    <div
      className={cn(
        'fixed top-4 right-4 z-[9999] animate-fade-in',
        'rounded-md bg-gray-50 dark:border-neutral-700 dark:bg-neutral-800',
        'px-2 py-1 text-xs font-medium',
        'text-gray-600 dark:text-white',
        'ring-1 ring-inset ring-gray-500/10',
        'transition-all duration-300 hover:scale-105',
        className
      )}
      onClick={() => {
        setIsVisible(false)
        onClose?.()
      }}
    >
      {message}
    </div>
  )
} 