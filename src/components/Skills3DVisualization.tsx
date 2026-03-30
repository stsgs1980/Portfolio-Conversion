'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface Skill {
  name: string
  level: number
  color: string
}

interface Skills3DVisualizationProps {
  skills: Skill[]
  className?: string
}

export function Skills3DVisualization({ skills, className = '' }: Skills3DVisualizationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], [15, -15])
  const rotateY = useTransform(x, [-100, 100], [-15, 15])

  const springConfig = { damping: 20, stiffness: 300 }
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div
      ref={ref}
      className={`perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative w-80 h-80 transform-gpu"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: 'preserve-3d'
        }}
      >
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * Math.PI * 2
          const radius = 120
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius
          const z = Math.sin(angle * 2) * 30

          return (
            <motion.div
              key={skill.name}
              className="absolute w-20 h-20 flex items-center justify-center rounded-xl cursor-pointer"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px)`
              }}
              whileHover={{ scale: 1.2 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <div
                className={`w-full h-full rounded-xl bg-gradient-to-br ${skill.color} shadow-lg`}
                style={{
                  transform: `rotateX(${x / 5}deg) rotateY(${y / 5}deg)`
                }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center text-white p-2">
                  <span className="text-xs font-bold">{skill.name}</span>
                  <span className="text-lg font-mono">{skill.level}%</span>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Skill details */}
      {hoveredSkill && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-center"
        >
          <span className="text-indigo-400 font-mono text-sm">{hoveredSkill}</span>
        </motion.div>
      )}
    </div>
  )
}
