'use client'

import { CursorEffect } from '@/components/CursorEffect'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-white">
      <CursorEffect />
      <Navigation />

      <main className="flex-1">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
