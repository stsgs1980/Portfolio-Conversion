'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

interface Testimonial {
  name: string
  position: string
  company: string
  text: string
  rating: number
  avatar?: string
}

interface TestimonialsAutoScrollProps {
  testimonials: Testimonial[]
  interval?: number
  className?: string
}

export function TestimonialsAutoScroll({
  testimonials,
  interval = 5000,
  className = ''
}: TestimonialsAutoScrollProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length)
    }, interval)

    return () => clearInterval(timer)
  }, [interval, isPaused, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div
      className={`relative max-w-4xl mx-auto ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Testimonial card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 md:p-12"
        >
          <div className="flex items-start gap-6">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-indigo-600/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-indigo-400">
                  {currentTestimonial.name.charAt(0)}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* Quote icon */}
              <Quote className="text-indigo-500/30 mb-4" size={48} />

              {/* Text */}
              <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                {currentTestimonial.text}
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`${
                      i < currentTestimonial.rating
                        ? 'text-yellow-500 fill-yellow-500'
                        : 'text-neutral-600'
                    }`}
                    size={18}
                  />
                ))}
              </div>

              {/* Author */}
              <div>
                <h4 className="font-mono text-white font-semibold">
                  {currentTestimonial.name}
                </h4>
                <p className="text-sm text-neutral-400">
                  {currentTestimonial.position} at {currentTestimonial.company}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <motion.button
          onClick={prevTestimonial}
          className="p-3 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-full transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>

        {/* Indicators */}
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-indigo-500 w-6' : 'bg-neutral-600 hover:bg-neutral-500'
              }`}
            />
          ))}
        </div>

        <motion.button
          onClick={nextTestimonial}
          className="p-3 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-full transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </div>

      {/* Progress bar */}
      <div className="mt-6 h-1 bg-neutral-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-indigo-600"
          initial={{ width: '0%' }}
          animate={{
            width: '100%'
          }}
          transition={{
            duration: interval / 1000,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop'
          }}
          key={currentIndex}
        />
      </div>
    </div>
  )
}
