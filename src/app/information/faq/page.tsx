'use client'

import { Container } from '@/components/container'
import Footer from '@/components/footer'
import { InfoHero } from '@/components/info-hero'
import { InfoMenu } from '@/components/info-menu'
import { useEffect, useState } from 'react'
import TabbedFAQ from '@/components/faq'

export default function GreatBarrierReefContent() {
  const [activeSection, setActiveSection] = useState('overview')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative">
      <InfoHero
        eyebrow="World Heritage Site"
        title="The Great Barrier Reef"
        description="The largest natural feature on Earth, stretching over 2,300km along Australia's northeast coast"
        imageSrc="/activities/heli-tour.webp"
        imageAlt="Aerial view of the Great Barrier Reef"
      />

      <Container>
        <div className="relative mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:gap-8">
            <div className="lg:flex-auto">
              <TabbedFAQ />
            </div>
            <InfoMenu activeSection={activeSection} />
          </div>
        </div>
      </Container>

      {/* Reef Biosearch Section */}
      <div className="bg-white py-8" />

      <Footer />
    </div>
  )
}
