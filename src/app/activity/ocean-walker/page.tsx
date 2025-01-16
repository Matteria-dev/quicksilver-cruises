'use client'
import { Container } from '@/components/container'
import { InfoHero } from '@/components/info-hero'
import { ActivityMenu } from '@/components/activity-menu'
import { useEffect, useState } from 'react'
import Footer from '@/components/footer'
import { SnorkelTours } from '@/components/snorkel-tours'
import Gallery from '@/components/gallery'



export default function OceanWalker() {
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
        title="Ocean Walker"
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
                Snorkelling at Agincourt Reef
                </h2>
                <p className="mt-6 text-lg leading-8 text-blue-500 dark:text-grey-200">
                Snorkelling is one of the many activities included in your day and is one of the best ways to view the incredible underwater world of the Great Barrier Reef. Our friendly crew are on hand to show you how. On your journey out to Agincourt Reef, you can view an instructional video on how to snorkel to teach you the right techniques.
                  <br></br>
                  <br></br>Upon reaching the outer reef, you can obtain your snorkelling equipment from the storage containers on the platform. Easy access to the water is available from submerged platforms. Our friendly snorkelling safety officers can assist you with your snorkelling gear and give you a few tips so that you can fully enjoy your experience.
                </p>
                
              </section>
              <Gallery />
              <SnorkelTours />
              

              
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