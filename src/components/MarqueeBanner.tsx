'use client'

import { motion } from 'framer-motion'

interface MarqueeBannerProps {
  children: React.ReactNode
  speed?: number
  direction?: 'left' | 'right'
  className?: string
}

export function MarqueeBanner({
  children,
  speed = 20,
  direction = 'left',
  className = ''
}: MarqueeBannerProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: direction === 'left' ? [0, '-50%'] : ['-50%', 0]
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        {/* Duplicate content for seamless loop */}
        {children}
        {children}
      </motion.div>
    </div>
  )
}

// Vertical marquee variant
interface VerticalMarqueeProps {
  children: React.ReactNode
  speed?: number
  direction?: 'up' | 'down'
  className?: string
}

export function VerticalMarquee({
  children,
  speed = 20,
  direction = 'up',
  className = ''
}: VerticalMarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex flex-col"
        animate={{
          y: direction === 'up' ? [0, '-50%'] : ['-50%', 0]
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        {/* Duplicate content for seamless loop */}
        {children}
        {children}
      </motion.div>
    </div>
  )
}
