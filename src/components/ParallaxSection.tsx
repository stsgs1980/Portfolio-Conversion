'use client'

import { useRef, useLayoutEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxSectionProps {
  children: React.ReactNode
  speed?: number
  className?: string
  offset?: [string, string]
}

export function ParallaxSection({
  children,
  speed = 0.5,
  className = '',
  offset = ['start end', 'end start']
}: ParallaxSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)

  const { scrollY } = useScroll()

  useLayoutEffect(() => {
    const element = ref.current
    if (!element) return

    const updatePosition = () => {
      setElementTop(element.getBoundingClientRect().top + window.scrollY)
      setClientHeight(window.innerHeight)
    }

    updatePosition()
    window.addEventListener('resize', updatePosition)
    return () => window.removeEventListener('resize', updatePosition)
  }, [ref])

  const y = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + clientHeight],
    [(-speed * 100) / 2, (speed * 100) / 2]
  )

  return (
    <motion.section ref={ref} style={{ y }} className={className}>
      {children}
    </motion.section>
  )
}
