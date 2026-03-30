'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Keyboard } from 'lucide-react'

interface Shortcut {
  key: string
  description: string
  category?: string
}

interface KeyboardShortcutsTooltipProps {
  shortcuts: Shortcut[]
  triggerKey?: string
  className?: string
}

export function KeyboardShortcutsTooltip({
  shortcuts,
  triggerKey = '?',
  className = ''
}: KeyboardShortcutsTooltipProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === triggerKey && !e.shiftKey && !e.ctrlKey && !e.metaKey) {
        setIsOpen(prev => !prev)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [triggerKey])

  // Group shortcuts by category
  const groupedShortcuts = shortcuts.reduce((acc, shortcut) => {
    const category = shortcut.category || 'General'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(shortcut)
    return acc
  }, {} as Record<string, Shortcut[]>)

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 z-[2000] p-3 bg-neutral-800/80 backdrop-blur border border-neutral-700 rounded-full hover:bg-neutral-700 transition-all hover:scale-110 ${className}`}
        title={`Press ${triggerKey} for shortcuts`}
      >
        <Keyboard className="text-neutral-300" size={20} />
      </button>

      {/* Tooltip */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-20 right-4 z-[2000] w-80 max-h-[60vh] overflow-y-auto bg-neutral-900/95 backdrop-blur border border-neutral-800 rounded-xl shadow-2xl"
          >
            <div className="p-4 border-b border-neutral-800">
              <h3 className="font-mono text-white font-semibold flex items-center gap-2">
                <Keyboard size={16} />
                Keyboard Shortcuts
              </h3>
            </div>

            <div className="p-4 space-y-4">
              {Object.entries(groupedShortcuts).map(([category, categoryShortcuts]) => (
                <div key={category}>
                  <h4 className="text-xs font-mono text-indigo-500 uppercase tracking-wider mb-2">
                    {category}
                  </h4>
                  <div className="space-y-2">
                    {categoryShortcuts.map((shortcut, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-neutral-400">{shortcut.description}</span>
                        <kbd className="px-2 py-1 text-xs font-mono bg-neutral-800 border border-neutral-700 rounded text-neutral-300">
                          {shortcut.key}
                        </kbd>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-neutral-800 text-xs text-neutral-500 text-center">
              Press Escape to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
