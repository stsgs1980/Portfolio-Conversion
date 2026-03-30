'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface FloatingElements3DProps {
  children: React.ReactNode
  className?: string
  depth?: number
}

export function FloatingElements3D({
  children,
  className = '',
  depth = 100
}: FloatingElements3DProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -depth])
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 15])
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -15])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </motion.div>
  )
}

// Individual floating element
interface FloatingElementProps {
  children: React.ReactNode
  delay?: number
  amplitude?: number
  className?: string
}

export function FloatingElement({
  children,
  delay = 0,
  amplitude = 20,
  className = ''
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-amplitude, amplitude, -amplitude],
        rotate: [-5, 5, -5]
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      {children}
    </motion.div>
  )
}
