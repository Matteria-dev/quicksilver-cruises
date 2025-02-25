'use client'

import { InfoMenu } from '@/components/info-menu'
import { Container } from '@/components/container'
import Footer from '@/components/footer'
import { InfoHero } from '@/components/info-hero'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

function StatCard({ number, label }: { number: number; label: string }) {
  return (
    <div className="flex flex-col items-center rounded-xl bg-grey-200 dark:bg-dark-300 p-6 shadow-xs">
      <div className="mb-2 text-3xl font-bold text-blue-300 dark:text-blue-200">
        {number.toLocaleString()}
      </div>
      <div className="text-center text-sm text-blue-500 dark:text-grey-200">{label}</div>
    </div>
  )
}

// Content section component for consistent styling
function ContentSection({
  title,
  children,
  image,
  imagePosition = 'right',
}: {
  title?: string
  children: React.ReactNode
  image?: string
  imagePosition?: 'left' | 'right'
}) {
  

  return (
    <div className={`py-16 `}>
      <Container>
        {title && <h2 className="mb-8 text-3xl font-bold">{title}</h2>}
        <div
          className={`grid items-center gap-12 md:grid-cols-2 ${
            imagePosition === 'left' ? 'md:grid-flow-dense' : ''
          }`}
        >
          <div className={imagePosition === 'left' ? 'md:col-start-2' : ''}>
            {children}
          </div>
          {image && (
            <div
              className={`relative overflow-hidden rounded-xl ${
                imagePosition === 'left' ? 'md:col-start-1' : ''
              }`}
            >
                          <Image src={image} alt="" className="h-auto w-full object-cover" 
                          width={800}
                              height={600}
                          />
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}

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
          <div className="py-8">
              <Container>
                <h2 className="mb-8 text-3xl font-bold text-blue-400 dark:text-blue-200">
                  At a Glance
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <StatCard number={348000} label="Square Kilometers" />
                  <StatCard number={2900} label="Individual Reefs" />
                  <StatCard number={1500} label="Species of Fish" />
                  <StatCard number={400} label="Different Corals" />
                </div>
              </Container>
            </div>
            <ContentSection image="/activities/snorkel.webp">
              
              <div>
                <p className="mb-6 text-blue-500 dark:text-grey-200">
                  The Great Barrier Reef is undisputed as one of the world's
                  most important natural assets. It is the largest natural
                  feature on earth stretching more than 2,300km along the
                  northeast coast of Queensland, Australia.
                </p>
                                  <p className="text-blue-500 dark:text-grey-200">
                  To put it in perspective, it covers an area about the same
                  size as the United Kingdom, half the size of the state of
                  Texas or the length of the entire Japanese island chain. It is
                  the only natural structure that can be seen from outer space.
                </p>
              </div>
              <div>
                                  <p className="mb-6 text-blue-500 dark:text-grey-200">
                  The Great Barrier Reef Marine Park (GBRMP) is a series of over
                  2,900 individual reefs, stretching from the tip of Cape York
                  in the north to Lady Elliott Island in the south. Covering
                  over 348,000 km², it comprises fringing and barrier reefs,
                  continental islands, coral cays and 70 different bio-regions,
                  making it the most ecologically diverse system in the world.
                </p>
                                  <p className="text-blue-500 dark:text-grey-200">
                  Although coral reefs have been around for over 500 million
                  years, the Great Barrier Reef is relatively young at 500,000
                  years, and this most modern form is only 8,000 years old,
                  having developed after the last ice age.
                </p>
              </div>
            </ContentSection>
            <Container>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="relative p-8">
                  <div className="mb-8 mt-10 flex items-center gap-6">
                    <Image
                                              src="/logo/Reefbiosearch-logo.webp"
                                              alt="Reef Biosearch Logo"
                                              className="h-12 w-auto"
                                              height={100}
                                              width={100}
                    />
                                          <h2 className="text-3xl font-bold text-blue-400  dark:text-grey-200">
                      Reef Biology Information
                    </h2>
                  </div>
                  <div className="max-w-3xl">
                                          <p className="mb-6 text-grey-500 dark:text-grey-100">
                      Reef Biosearch is a Great Barrier Reef Research initiative
                      which began operations in 1986. For more information on
                      the biology of flora and fauna that make up the Great
                      Barrier Reef visit here.
                    </p>
                    <button className="hover:bg-blue-500 rounded-2xl w-full bg-blue-400 dark:bg-blue-300 px-3 py-1.5 text-grey-200 transition-colors">
                      Learn More
                    </button>
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-linear-to-r from-blue-400 to-teal-300 opacity-20" />
                </div>

                <div className="rounded-xl bg-grey-200 dark:bg-dark-300 p-6 shadow-xs">
                  <div className="relative rounded-xl p-6">
                                          <h4 className="mb-4 text-xl font-bold text-blue-300 dark:text-blue-200">
                      Biodiversity Highlights
                    </h4>
                    <ul className="space-y-3 text-blue-500 dark:text-grey-200">
                      <li className="flex items-center space-x-3">
                        <span className="h-2 w-2 rounded-full bg-blue-400 dark:bg-blue-200" />
                        <span>1,500+ species of fish</span>
                      </li>
                      <li className="flex items-center space-x-3">
                                                  <span className="h-2 w-2 rounded-full bg-blue-400 dark:bg-blue-200" />
                        <span>400+ different corals</span>
                      </li>
                      <li className="flex items-center space-x-3">
                                                  <span className="h-2 w-2 rounded-full bg-blue-400 dark:bg-blue-200" />
                        <span>4,000+ species of molluscs</span>
                      </li>
                      <li className="flex items-center space-x-3">
                                                  <span className="h-2 w-2 rounded-full bg-blue-400 dark:bg-blue-200" />
                        <span>10,000+ species of sponges</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-blue-500 dark:text-grey-200">
                    This World Heritage listed marine park supports the greatest
                    concentration of life on the planet with over 1,500 species
                    of fish, 400 different corals, 4,000 species of molluscs and
                    10,000 species of sponges. Six of the world's 7 species of
                    sea turtles are found here. Whales are often encountered in
                    these waters from May to September.
                  </p>
                </div>
              </div>
            </Container>
            </div>
            <InfoMenu activeSection={activeSection} />
          </div>
        </div>
      </Container>
      <div className="bg-white py-8" />

      <Footer />
    </div>
  )
}
