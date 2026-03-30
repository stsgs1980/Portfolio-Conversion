'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface PageTransitionsProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function PageTransitions({
  children,
  className = '',
  delay = 0
}: PageTransitionsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 50 }
      }
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  )
}

// Slide from left variant
export function SlideFromLeft({
  children,
  className = '',
  delay = 0
}: PageTransitionsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: -100 }}
      animate={
        isInView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: -100 }
      }
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  )
}

// Slide from right variant
export function SlideFromRight({
  children,
  className = '',
  delay = 0
}: PageTransitionsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: 100 }}
      animate={
        isInView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: 100 }
      }
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  )
}

// Scale in variant
export function ScaleIn({
  children,
  className = '',
  delay = 0
}: PageTransitionsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={
        isInView
          ? { opacity: 1, scale: 1 }
          : { opacity: 0, scale: 0.8 }
      }
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  )
}
