'use client'

import { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

interface GlitchEffectProps {
  text: string
  className?: string
  hover?: boolean
}

export function GlitchEffect({ text, className = '', hover = false }: GlitchEffectProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  const triggerGlitch = () => {
    setIsGlitching(true)
    setTimeout(() => setIsGlitching(false), 500)
  }

  const glitchVariants = {
    normal: {
      x: 0,
      opacity: 1,
      skewX: 0
    },
    glitch: {
      x: [-5, 5, -5, 5, 0],
      opacity: [1, 0.8, 1, 0.8, 1],
      skewX: [-10, 10, -10, 10, 0],
      transition: {
        duration: 0.3,
        ease: 'linear'
      }
    }
  }

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => hover && triggerGlitch()}
    >
      {/* Main text */}
      <motion.span
        className="relative z-10"
        animate={isGlitching ? 'glitch' : 'normal'}
        variants={glitchVariants}
      >
        {text}
      </motion.span>

      {/* Red channel glitch */}
      {isGlitching && (
        <>
          <motion.span
            className="absolute top-0 left-0 z-0 text-red-500 opacity-70"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 35%, 0 35%)'
            }}
            animate={{
              x: [0, -5, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 0.2,
              repeat: 2
            }}
          >
            {text}
          </motion.span>
          <motion.span
            className="absolute top-0 left-0 z-0 text-cyan-500 opacity-70"
            style={{
              clipPath: 'polygon(0 35%, 100% 35%, 100% 100%, 0 100%)'
            }}
            animate={{
              x: [0, 5, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 0.2,
              repeat: 2
            }}
          >
            {text}
          </motion.span>
        </>
      )}
    </div>
  )
}

// Auto-glitch variant that glitches periodically
export function AutoGlitch({ text, className = '', interval = 3000 }: GlitchEffectProps & { interval?: number }) {
  const [isGlitching, setIsGlitching] = useState(false)

  useState(() => {
    const timer = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 300)
    }, interval)

    return () => clearInterval(timer)
  })

  return <GlitchEffect text={text} className={className} />
}
