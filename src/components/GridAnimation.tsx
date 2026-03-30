'use client'

import { motion } from 'framer-motion'

interface GridAnimationProps {
  className?: string
  cellSize?: number
  animationDuration?: number
}

export function GridAnimation({
  className = '',
  cellSize = 50,
  animationDuration = 3
}: GridAnimationProps) {
  const columns = Math.ceil(window.innerWidth / cellSize)
  const rows = Math.ceil(window.innerHeight / cellSize)

  const cells = Array.from({ length: rows * columns }, (_, i) => ({
    id: i,
    row: Math.floor(i / columns),
    col: i % columns
  }))

  return (
    <div
      className={`fixed inset-0 -z-10 pointer-events-none ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`
      }}
    >
      {cells.map((cell) => (
        <motion.div
          key={cell.id}
          className="border border-indigo-500/10"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [
              0,
              0.1,
              0
            ]
          }}
          transition={{
            duration: animationDuration,
            delay: (cell.row + cell.col) * 0.05,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  )
}
