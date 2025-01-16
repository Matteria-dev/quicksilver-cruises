'use client'
import { Container } from '@/components/container'
import { InfoHero } from '@/components/info-hero'
import { ActivityMenu } from '@/components/activity-menu'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Footer from '@/components/footer'

const features = [
  {
    title: 'Undercover tables and seating',
    description: 'Our state-of-the-art platform accommodates all your needs',
    icon: () => (
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
        <svg
          className="text-blue-600 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      </div>
    ),
  },
  {
    title: 'Expert Guides',
    description: 'Professional marine biologists and diving instructors',
    icon: () => (
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
        <svg
          className="text-blue-600 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </div>
    ),
  },
  {
    title: 'Snorkelling platforms',
    description: 'Top-tier safety equipment and procedures',
    icon: () => (
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
        <svg
          className="text-blue-600 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      </div>
    ),
  },
  {
    title: 'Semi-submersibles',
    description: 'Cruise as often as you like!',
    icon: () => (
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
        <svg
          className="text-blue-600 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      </div>
    ),
  },
  {
    title: 'Underwater observatory',
    description: 'Professional marine biologists and diving instructors',
    icon: () => (
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
        <svg
          className="text-blue-600 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </div>
    ),
  },
  {
    title: 'Dive area',
    description: 'Introductory dive & snorkel pools',
    icon: () => (
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
        <svg
          className="text-blue-600 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      </div>
    ),
  },
  {
    title: 'Showers',
    description: 'Fresh water',
    icon: () => (
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
        <svg
          className="text-blue-600 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      </div>
    ),
  },
  {
    title: 'Change rooms',
    description: 'Professional marine biologists and diving instructors',
    icon: () => (
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
        <svg
          className="text-blue-600 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </div>
    ),
  },
  {
    title: 'Toilets',
    description: 'Onboard vessel',
    icon: () => (
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
        <svg
          className="text-blue-600 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      </div>
    ),
  },
  {
    title: 'Post Office Box',
    description: 'Most remote!',
    icon: () => (
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
        <svg
          className="text-blue-600 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      </div>
    ),
  },
  {
    title: 'Sundeck',
    description: 'Professional marine biologists and diving instructors',
    icon: () => (
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
        <svg
          className="text-blue-600 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </div>
    ),
  },
  {
    title: 'Licensed',
    description: 'Onboard vessel',
    icon: () => (
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
        <svg
          className="text-blue-600 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      </div>
    ),
  },
]

export default function Platform() {
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
        eyebrow="Discover the Great Barrier Reef"
        title="Agincourt Reef Platform"
        description="Description"
        imageSrc="/activities/heli-tour.webp"
        imageAlt="Aerial view of the Great Barrier Reef"
      />

      <Container>
        <div className="relative mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:gap-8">
            

            {/* Main Content */}
            <div className="lg:flex-auto">
              <section id="overview" className="pb-16">
                <h2 className="dark:blue-200 text-3xl font-bold tracking-tight text-blue-300">
                  Spacious Floating Platforms
                </h2>
                <p className="mt-6 text-lg leading-8 text-blue-500 dark:text-grey-200">
                  Floating like an island in a Coral Sea, our spacious and
                  modern, dual level platform provides the ultimate in
                  facilities for reef viewing and relaxation in all weather and
                  wind conditions.
                  <br></br>
                  <br></br>Situated on the very edge of the Great Barrier Reef,
                  Agincourt Reef provides a sheltered anchorage for the
                  Quicksilver vessel and the perfect spot for passengers to
                  snorkel, dive, and view the spectacular coral formations and
                  exotic marine life from the semi-submersible vessels.
                </p>
              </section>

              <section id="experience" className="pb-16">
                <h2 className="dark:blue-200 text-3xl font-bold tracking-tight text-blue-300">
                  Your personal reef discovery
                </h2>
                <div className="relative mt-6">
                  <Image
                    src="/activities/platform.jpg"
                    alt="Snorkeling adventure"
                                      className="aspect-video w-full rounded-xl object-cover"
                                      width={1920}
                                      height={1080}
                  />
                </div>
                <p className="mt-6 text-lg leading-8 text-blue-500 dark:text-grey-200">
                  You can also see the corals and watch the fish feeding from
                  Quicksilver’s unique viewing platform and underwater
                  observatory located directly in front of the platform. From
                  here, you can also view “first time” divers taking part in
                  introductory dives. On the spacious decks, enjoy lunch in the
                  undercover seating or in the air-conditioned comfort of the
                  vessel.
                </p>
              </section>

              <section id="features" className="pb-16">
                <h2 className="dark:blue-200 text-3xl font-bold tracking-tight text-blue-300">
                  Premium Facilities
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {features.map((feature) => (
                    <div key={feature.title} className="relative">
                      <dl>
                      <dt className="flex items-center gap-x-3">
                        <feature.icon />
                        <h3 className="dark:blue-200 text-lg font-semibold leading-7 text-blue-300">
                          {feature.title}
                        </h3>
                      </dt>
                      <dd className="mt-4 text-base leading-7 text-blue-500 dark:text-grey-200">
                        {feature.description}
                      </dd>
                      </dl>
                    </div>
                  ))}
                </div>
              </section>

              <section id="gallery" className="pb-16">
                <h2 className="dark:blue-200 text-3xl font-bold tracking-tight text-blue-300">
                Disability Access to the Great Barrier Reef
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <Image
                    src="/activities/heli-tour.webp"
                    alt="Coral reef"
                                      className="aspect-video w-full rounded-xl object-cover"
                                      width={1920}
                                      height={1080} 

                  />
                  <Image
                    src="/activities/snorkel.webp"
                    alt="Marine life"
                                      className="aspect-video w-full rounded-xl object-cover"
                                      width={1920}
                                      height={1080}
                  />
                </div>
                <p className="mt-6 text-lg leading-8 text-blue-500 dark:text-grey-200">
                For guests confined to a wheelchair, our specially designed water powered lift allows for easy access into the snorkel pool where they can swim directly off the lift’s chair into the weightless environment of the reef to snorkel and explore at their own pace. You can read more about disability access here.

<br></br><br></br>For a special souvenir, you can even send a postcard postmarked with the world’s only Great Barrier Reef stamp, from the only official Australia Post box on the Great Barrier Reef!
                </p>
              </section>
            </div>
            {/* Sticky Sidebar */}
            <ActivityMenu activeSection={activeSection} />
          </div>
        </div>
          </Container>
          <section id="overview" className="pb-16" />
          <Footer />  
      </div>
  )
}
