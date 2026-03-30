'use client'

import { motion } from 'framer-motion'

interface AnimatedBackgroundPatternProps {
  className?: string
  intensity?: 'low' | 'medium' | 'high'
}

export function AnimatedBackgroundPattern({
  className = '',
  intensity = 'medium'
}: AnimatedBackgroundPatternProps) {
  const intensityConfig = {
    low: { opacity: 0.1, scale: 1.2, duration: 20 },
    medium: { opacity: 0.15, scale: 1.5, duration: 15 },
    high: { opacity: 0.2, scale: 1.8, duration: 10 }
  }

  const config = intensityConfig[intensity]

  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden pointer-events-none ${className}`}>
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 bg-neutral-950" />

      {/* Orb 1 */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"
        animate={{
          x: [0, 400, 0],
          y: [0, 300, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: config.duration,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{ opacity: config.opacity }}
      />

      {/* Orb 2 */}
      <motion.div
        className="absolute top-1/4 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"
        animate={{
          x: [0, -300, 0],
          y: [0, 200, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: config.duration * 1.2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{ opacity: config.opacity }}
      />

      {/* Orb 3 */}
      <motion.div
        className="absolute bottom-0 left-1/3 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"
        animate={{
          x: [0, 200, 0],
          y: [0, -250, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: config.duration * 0.8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{ opacity: config.opacity }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  )
}
