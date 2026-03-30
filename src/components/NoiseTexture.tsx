'use client'

import { useEffect, useRef } from 'react'

interface NoiseTextureProps {
  className?: string
  opacity?: number
}

export function NoiseTexture({ className = '', opacity = 0.03 }: NoiseTextureProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const generateNoise = () => {
      const width = canvas.width
      const height = canvas.height
      const imageData = ctx.createImageData(width, height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255
        data[i] = value     // R
        data[i + 1] = value // G
        data[i + 2] = value // B
        data[i + 3] = 255  // A
      }

      ctx.putImageData(imageData, 0, 0)
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      generateNoise()
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Animate noise
    const animationInterval = setInterval(generateNoise, 50)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      clearInterval(animationInterval)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 -z-5 pointer-events-none ${className}`}
      style={{ opacity }}
    />
  )
}
