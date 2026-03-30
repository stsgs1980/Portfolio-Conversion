'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface TextScrambleProps {
  text: string
  className?: string
  chars?: string
  speed?: number
}

export function TextScrambleEffect({
  text,
  className = '',
  chars = '!<>-_\\/[]{}—=+*^?#________',
  speed = 50
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState('')
  const [isAnimating, setIsAnimating] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const frameRef = useRef(0)

  const animate = () => {
    let frame = 0
    const totalFrames = 30

    intervalRef.current = setInterval(() => {
      frame++
      frameRef.current = frame

      const progress = frame / totalFrames
      const scrambledText = text
        .split('')
        .map((char, index) => {
          if (index / text.length < progress) {
            return char
          }
          return chars[Math.floor(Math.random() * chars.length)]
        })
        .join('')

      setDisplayText(scrambledText)

      if (frame >= totalFrames) {
        setDisplayText(text)
        setIsAnimating(false)
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
        }
      }
    }, speed)
  }

  useEffect(() => {
    if (text !== displayText && !isAnimating) {
      setIsAnimating(true)
      animate()
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [text])

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayText}
    </motion.span>
  )
}
