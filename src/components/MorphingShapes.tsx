'use client'

import { motion } from 'framer-motion'

interface MorphingShapesProps {
  className?: string
  count?: number
}

export function MorphingShapes({ className = '', count = 3 }: MorphingShapesProps) {
  const shapes = [
    'rounded-full',
    'rounded-lg',
    'rounded-none',
    'rounded-tr-full',
    'rounded-bl-full'
  ]

  const colors = [
    'bg-indigo-500/20',
    'bg-purple-500/20',
    'bg-blue-500/20',
    'bg-pink-500/20'
  ]

  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden pointer-events-none ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute blur-3xl ${colors[i % colors.length]}`}
          style={{
            width: Math.random() * 400 + 200,
            height: Math.random() * 400 + 200,
            left: `${Math.random() * 80}%`,
            top: `${Math.random() * 80}%`
          }}
          initial={{
            scale: 1,
            rotate: 0,
            borderRadius: '20%'
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            borderRadius: [
              shapes[0],
              shapes[1],
              shapes[2],
              shapes[3],
              shapes[4],
              shapes[0]
            ]
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  )
}
