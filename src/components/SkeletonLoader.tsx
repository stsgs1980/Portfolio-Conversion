'use client'

import { motion } from 'framer-motion'

interface SkeletonLoaderProps {
  className?: string
  variant?: 'text' | 'rectangular' | 'circular'
  width?: string | number
  height?: string | number
  lines?: number
}

export function SkeletonLoader({
  className = '',
  variant = 'rectangular',
  width,
  height,
  lines = 3
}: SkeletonLoaderProps) {
  if (variant === 'text') {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, i) => (
          <motion.div
            key={i}
            className="h-4 bg-neutral-800 rounded"
            style={{
              width: i === lines - 1 ? '60%' : '100%'
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.1
            }}
          />
        ))}
      </div>
    )
  }

  if (variant === 'circular') {
    return (
      <motion.div
        className={`rounded-full bg-neutral-800 ${className}`}
        style={{ width: width || 40, height: height || 40 }}
        animate={{
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    )
  }

  return (
    <motion.div
      className={`bg-neutral-800 rounded ${className}`}
      style={{ width, height }}
      animate={{
        opacity: [0.3, 0.6, 0.3]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    />
  )
}
