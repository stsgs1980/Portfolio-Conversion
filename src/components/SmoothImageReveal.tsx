'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SmoothImageRevealProps {
  src: string
  alt: string
  className?: string
  duration?: number
}

export function SmoothImageReveal({
  src,
  alt,
  className = '',
  duration = 0.6
}: SmoothImageRevealProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder/skeleton */}
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <motion.div
            className="absolute inset-0 bg-neutral-800"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: duration / 2, ease: 'easeInOut' }
            }}
          />
        )}
      </AnimatePresence>

      {/* Image */}
      <motion.img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${isLoaded ? '' : 'opacity-0'}`}
        initial={{ scale: 1.2, filter: 'blur(10px)' }}
        animate={
          isLoaded
            ? {
                scale: 1,
                filter: 'blur(0px)',
                opacity: 1
              }
            : {}
        }
        transition={{
          duration,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        onLoad={() => setIsLoaded(true)}
      />

      {/* Reveal overlay */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{
              y: '-100%',
              transition: { duration, ease: 'easeInOut' }
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
