'use client'

import { useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  duration?: number
  staggerDelay?: number
}

export function TextReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  staggerDelay = 0.02
}: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  const words = children.split(' ')

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay
      }
    }
  }

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  if (isInView) {
    controls.start('visible')
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={`inline-block ${className}`}
      style={{ perspective: 500 }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

// Character-level reveal component
interface CharRevealProps {
  children: string
  className?: string
  delay?: number
  duration?: number
}

export function CharReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.05
}: CharRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const chars = children.split('')

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`inline-block ${className}`}
    >
      {chars.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: {
              opacity: 0,
              y: 50,
              scale: 0.5
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                delay: delay + index * 0.03,
                duration,
                ease: 'easeOut'
              }
            }
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}
