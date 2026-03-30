'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, Loader2 } from 'lucide-react'

interface ContactFormAnimationsProps {
  className?: string
}

export function ContactFormAnimations({ className = '' }: ContactFormAnimationsProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const inputVariants = {
    focused: {
      scale: 1.02,
      borderColor: 'rgb(99, 102, 241)',
      boxShadow: '0 0 0 3px rgba(99, 102, 241, 0.2)'
    },
    blur: {
      scale: 1,
      borderColor: 'rgb(64, 64, 64)',
      boxShadow: 'none'
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      {/* Name field */}
      <motion.div className="relative">
        <motion.input
          type="text"
          id="name"
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
          onFocus={() => setFocusedField('name')}
          onBlur={() => setFocusedField(null)}
          className="w-full px-4 py-3 bg-neutral-900 border-2 border-neutral-800 rounded-lg text-white placeholder-transparent focus:outline-none transition-all"
          placeholder="Name"
          variants={inputVariants}
          animate={focusedField === 'name' ? 'focused' : 'blur'}
        />
        <label
          htmlFor="name"
          className={`absolute left-4 transition-all pointer-events-none ${
            formData.name || focusedField === 'name'
              ? '-top-2.5 text-xs bg-neutral-900 px-1 text-indigo-400'
              : 'top-3 text-base text-neutral-500'
          }`}
        >
          Name
        </label>
      </motion.div>

      {/* Email field */}
      <motion.div className="relative">
        <motion.input
          type="email"
          id="email"
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          onFocus={() => setFocusedField('email')}
          onBlur={() => setFocusedField(null)}
          className="w-full px-4 py-3 bg-neutral-900 border-2 border-neutral-800 rounded-lg text-white placeholder-transparent focus:outline-none transition-all"
          placeholder="Email"
          variants={inputVariants}
          animate={focusedField === 'email' ? 'focused' : 'blur'}
        />
        <label
          htmlFor="email"
          className={`absolute left-4 transition-all pointer-events-none ${
            formData.email || focusedField === 'email'
              ? '-top-2.5 text-xs bg-neutral-900 px-1 text-indigo-400'
              : 'top-3 text-base text-neutral-500'
          }`}
        >
          Email
        </label>
      </motion.div>

      {/* Message field */}
      <motion.div className="relative">
        <motion.textarea
          id="message"
          value={formData.message}
          onChange={e => setFormData({ ...formData, message: e.target.value })}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField(null)}
          rows={5}
          className="w-full px-4 py-3 bg-neutral-900 border-2 border-neutral-800 rounded-lg text-white placeholder-transparent focus:outline-none transition-all resize-none"
          placeholder="Message"
          variants={inputVariants}
          animate={focusedField === 'message' ? 'focused' : 'blur'}
        />
        <label
          htmlFor="message"
          className={`absolute left-4 transition-all pointer-events-none ${
            formData.message || focusedField === 'message'
              ? '-top-2.5 text-xs bg-neutral-900 px-1 text-indigo-400'
              : 'top-3 text-base text-neutral-500'
          }`}
        >
          Message
        </label>
      </motion.div>

      {/* Submit button */}
      <motion.button
        type="submit"
        disabled={isSubmitting || isSubmitted}
        className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-neutral-800 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
        whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
      >
        <AnimatePresence mode="wait">
          {isSubmitting ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Loader2 className="w-5 h-5 animate-spin" />
            </motion.div>
          ) : isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <CheckCircle className="w-5 h-5 text-green-400" />
            </motion.div>
          ) : (
            <motion.div
              key="send"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <Send size={20} />
              <span>Send Message</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </form>
  )
}
