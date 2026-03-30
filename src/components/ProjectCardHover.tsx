'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react'

interface ProjectCardHoverProps {
  title: string
  description: string
  technologies: string[]
  demoUrl?: string
  repoUrl?: string
  className?: string
}

export function ProjectCardHover({
  title,
  description,
  technologies,
  demoUrl,
  repoUrl,
  className = ''
}: ProjectCardHoverProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 400 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    x.set(distanceX / 8)
    y.set(distanceY / 8)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      className={`relative group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden ${className}`}
      style={{
        rotateX: springY * 0.1,
        rotateY: springX * 0.1,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity"
        animate={isHovered ? {
          backgroundPosition: ['0% 0%', '100% 100%'],
          backgroundSize: ['200% 200%', '200% 200%']
        } : {}}
        transition={{ duration: 0.5 }}
      />

      {/* Content */}
      <div className="relative p-6 transform-gpu">
        <h3 className="font-mono text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-neutral-400 text-sm mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              className="px-2 py-1 text-xs font-mono text-indigo-400 bg-indigo-500/10 rounded"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isHovered ? 1 : 0.7,
                scale: isHovered ? 1 : 0.8
              }}
              transition={{ delay: index * 0.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          {demoUrl && (
            <motion.a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-mono rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={16} />
              <span>Demo</span>
            </motion.a>
          )}
          {repoUrl && (
            <motion.a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-mono rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={16} />
              <span>Repo</span>
            </motion.a>
          )}
        </div>
      </div>

      {/* Animated border */}
      <motion.div
        className="absolute inset-0 border-2 border-indigo-500/0 rounded-xl pointer-events-none"
        animate={{
          borderColor: isHovered ? 'rgba(99, 102, 241, 0.5)' : 'rgba(99, 102, 241, 0)'
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}
