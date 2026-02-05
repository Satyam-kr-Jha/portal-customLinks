'use client'
import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

// Toast Component
function PixelToast({ id, text, status, onDismiss }) {
  const [isExiting, setIsExiting] = useState(false)
  
  const getEmoji = () => {
    switch(status) {
      case 's': return 'ᕙ( •̀ ᗜ •́ )ᕗ'
      case 'w': return '(◣ _ ◢)'
      case 'i': return 'ฅ^>⩊<^ฅ'
      case 'e': return '(╥ᆺ╥；)'
      default: return 'ฅ^•ﻌ•^ฅ'
    }
  }

  const getColors = () => {
    switch(status) {
      case 's': return 'border-green-400 shadow-[3px_3px_0px_0px_rgba(74,222,128,0.3)]'
      case 'w': return 'border-yellow-400 shadow-[3px_3px_0px_0px_rgba(250,204,21,0.3)]'
      case 'i': return 'border-blue-400 shadow-[3px_3px_0px_0px_rgba(96,165,250,0.3)]'
      case 'e': return 'border-red-400 shadow-[3px_3px_0px_0px_rgba(248,113,113,0.3)]'
      default: return 'border-zinc-100 shadow-[3px_3px_0px_0px_rgba(237,237,237,0.3)]'
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true)
      setTimeout(() => onDismiss(id), 300)
    }, 3000)

    return () => clearTimeout(timer)
  }, [id, onDismiss])

  return (
    <div 
      className={`
        px-4 py-2 sm:px-5 sm:py-2.5 
        border-2 sm:border-3
        bg-zinc-800/95 text-white 
        font-mono text-xs sm:text-sm
        transition-all duration-300 mb-2
        max-w-[80vw] sm:max-w-md
        ${getColors()}
        ${isExiting 
          ? 'opacity-0 translate-x-full' 
          : 'opacity-100 translate-x-0'
        }
      `}
      style={{
        imageRendering: 'pixelated',
        fontFamily: '"Press Start 2P", "Courier New", monospace',
        wordBreak: 'break-word'
      }}
    >
      <span className="text-sm sm:text-base mr-2">{getEmoji()}</span>
      {text}
    </div>
  )
}

export function PixelToastContainer() {
  const [toasts, setToasts] = useState([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleToast = (event) => {
      const { text, status } = event.detail
      const id = Date.now() + Math.random()
      setToasts(prev => [...prev, { id, text, status }])
    }

    window.addEventListener('showPixelToast', handleToast)
    return () => window.removeEventListener('showPixelToast', handleToast)
  }, [])

  const dismissToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }

  // Don't render anything until mounted on client
  if (!mounted) return null

  return createPortal(
    <div className="fixed z-50 top-[10vh] right-3 sm:right-4 flex flex-col items-end pointer-events-none">
      {toasts.map(toast => (
        <PixelToast
          key={toast.id}
          {...toast}
          onDismiss={dismissToast}
        />
      ))}
    </div>,
    document.body
  )
}

export const pixelToast = {
  success: (text) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('showPixelToast', { 
        detail: { text, status: 's' } 
      }))
    }
  },
  warning: (text) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('showPixelToast', { 
        detail: { text, status: 'w' } 
      }))
    }
  },
  info: (text) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('showPixelToast', { 
        detail: { text, status: 'i' } 
      }))
    }
  },
  error: (text) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('showPixelToast', { 
        detail: { text, status: 'e' } 
      }))
    }
  }
}