'use client'

import { useState } from 'react'
import { CursorEffect } from '@/components/CursorEffect'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { PageLoader } from '@/components/PageLoader'
import { Statistics } from '@/components/Statistics'
import { Projects } from '@/components/Projects'
import { HowIWork } from '@/components/HowIWork'
import { Experience } from '@/components/Experience'
import { Testimonials } from '@/components/Testimonials'
import { Skills } from '@/components/Skills'
import { SkillsRadar } from '@/components/SkillsRadar'
import { GitHubActivityGraph } from '@/components/GitHubActivityGraph'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { BackToTop } from '@/components/BackToTop'
import { PresentationMode } from '@/components/PresentationMode'
import { ScrollProgressIndicator } from '@/components/ScrollProgressIndicator'
import { AnimatedBackgroundPattern } from '@/components/AnimatedBackgroundPattern'
import { ParticleSystem } from '@/components/ParticleSystem'
import { NoiseTexture } from '@/components/NoiseTexture'
import { ToastProvider } from '@/components/ToastNotifications'
import { KeyboardShortcutsTooltip } from '@/components/KeyboardShortcutsTooltip'

export default function Home() {
  const [isPresentationMode, setIsPresentationMode] = useState(false)

  const shortcuts = [
    { key: '?', description: 'Show keyboard shortcuts', category: 'General' },
    { key: 'Arrow Down / J', description: 'Scroll down', category: 'Navigation' },
    { key: 'Arrow Up / K', description: 'Scroll up', category: 'Navigation' },
    { key: 'Home', description: 'Go to top', category: 'Navigation' },
    { key: 'Space', description: 'Toggle presentation', category: 'Presentation' },
    { key: 'F', description: 'Toggle fullscreen', category: 'Presentation' },
    { key: 'Esc', description: 'Close modal / Exit', category: 'General' }
  ]

  return (
    <ToastProvider>
      <div className="min-h-screen flex flex-col bg-neutral-950 text-white">
        <PageLoader />
        <CursorEffect />
        <ScrollProgressIndicator />
        <AnimatedBackgroundPattern intensity="medium" />
        <ParticleSystem count={40} />
        <NoiseTexture opacity={0.02} />
        <Navigation onPresentationModeToggle={() => setIsPresentationMode(true)} />

        <main className="flex-1">
          <Hero />
          <Statistics />
          <HowIWork />
          <Projects />
          <Experience />
          <Testimonials />
          <SkillsRadar />
          <Skills />
          <GitHubActivityGraph />
          <Contact />
        </main>

        <Footer />
        <BackToTop />
        <KeyboardShortcutsTooltip shortcuts={shortcuts} />

        {/* Presentation Mode Overlay */}
        {isPresentationMode && (
          <PresentationMode onExit={() => setIsPresentationMode(false)} />
        )}
      </div>
    </ToastProvider>
  )
}
