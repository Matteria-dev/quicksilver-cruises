import Footer from '@/components/footer'
import { InfoHero } from '@/components/info-hero'
import Pricing from '@/components/pricing'

export default function OuterReef() {
    return (
      <div className="overflow-hidden">
        <InfoHero
          eyebrow="Experience of a Lifetime"
          title="Fares & Pricing"
          description="Pricing valid: 1 April 2024 - 31 March 2025"
          imageSrc="/activities/heli-tour.webp"
          imageAlt="Image description"
          showNavbar={false} // optional, defaults to true
        />
        <main>
        <Pricing />
        </main>
        <Footer />
      </div>
    )
  }
  