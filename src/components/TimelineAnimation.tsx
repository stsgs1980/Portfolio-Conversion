'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface TimelineItem {
  year: string
  title: string
  company: string
  description: string
}

interface TimelineAnimationProps {
  items: TimelineItem[]
  className?: string
}

export function TimelineAnimation({ items, className = '' }: TimelineAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <div ref={ref} className={className}>
      {/* Timeline line */}
      <motion.div
        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-indigo-500/30"
        initial={{ height: 0 }}
        animate={isInView ? { height: '100%' } : { height: 0 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />

      {/* Timeline items */}
      <motion.div
        className="relative space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row gap-4 md:gap-8 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
            variants={itemVariants}
          >
            {/* Timeline dot */}
            <div className="relative flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-full border-4 border-neutral-900 z-10 mx-auto md:mx-0">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>

            {/* Content */}
            <div className="flex-1 bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <span className="font-mono text-xs text-indigo-500 uppercase tracking-wider">
                {item.year}
              </span>
              <h3 className="font-mono text-lg font-bold text-white mt-2">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-400 mt-1">{item.company}</p>
              <p className="text-neutral-400 mt-3">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
