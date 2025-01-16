'use client'
import { ActivityMenu } from '@/components/activity-menu'
import { Container } from '@/components/container'
import { DiveTours } from '@/components/dive-tours'
import Footer from '@/components/footer'
import Gallery from '@/components/gallery'
import { InfoHero } from '@/components/info-hero'
import { useEffect, useState } from 'react'

export default function Snorkelling() {
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
        eyebrow="Optional"
        title="Scuba Diving"
        description="Description"
        imageSrc="/activities/heli-tour.webp"
        imageAlt="Aerial view of the Great Barrier Reef"
      />

      <Container>
        <div className="relative mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:gap-8">
            <div className="lg:flex-auto">
              <section id="overview" className="pb-16">
                <h2 className="dark:blue-200 text-3xl font-bold tracking-tight text-blue-300">
                  Diving the Great Barrier Reef with Quicksilver
                </h2>
                <p className="mt-6 text-lg leading-8 text-blue-500 dark:text-grey-200">
                  For the most experienced diver or the complete novice, scuba
                  diving is a close encounter of the most unique kind, and
                  Australia’s Great Barrier Reef presents a dazzling rainbow
                  world of coral and sea-life unlike anywhere else on earth.
                </p>
                <h3 className="dark:blue-200 mt-10 text-2xl font-bold tracking-tight text-blue-300">
                  Discover the wonder of the reef
                </h3>
                <p className="text-blue-500 dark:text-grey-200">
                  With Quicksilver, you can choose to add an amazing and truly
                  memorable dimension to your reef experience with the
                  underwater magic of scuba diving at the renowned Agincourt
                  Reef. At Agincourt Reef on the very edge of Australia’s
                  continental shelf, diving is quite simply spectacular!
                  <br></br>
                  <br></br>
                  To capture the memory (or make friends and neighbours slightly
                  envious), underwater digital cameras are available for hire,
                  along with underwater videos shot by professional
                  photographers.
                </p>
              </section>
              <Gallery />
              <DiveTours />
            </div>
            <ActivityMenu activeSection={activeSection} />
          </div>
        </div>
      </Container>
      <section id="overview" className="pb-16" />
      <Footer />
    </div>
  )
}
