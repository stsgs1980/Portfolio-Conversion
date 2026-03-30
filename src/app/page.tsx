'use client'

import { useState } from 'react'
import { CursorEffect } from '@/components/CursorEffect'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Experience } from '@/components/Experience'
import { Skills } from '@/components/Skills'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { PresentationMode } from '@/components/PresentationMode'

export default function Home() {
  const [isPresentationMode, setIsPresentationMode] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-white">
      <CursorEffect />
      <Navigation onPresentationModeToggle={() => setIsPresentationMode(true)} />

      <main className="flex-1">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <Footer />

      {/* Presentation Mode Overlay */}
      {isPresentationMode && (
        <PresentationMode onExit={() => setIsPresentationMode(false)} />
      )}
    </div>
  )
}
