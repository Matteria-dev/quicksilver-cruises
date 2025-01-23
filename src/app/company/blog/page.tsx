import Footer from '@/components/footer'
import { InfoHero } from '@/components/info-hero'
import PostsGrid from '@/components/post-grid' 
import type { Metadata } from 'next'

export function generateMetadata(): Metadata {
  return {
    title: 'Blog - Quicksilver Group',
    description: 'Read our latest updates and articles',
  }
}

export default function Blog() {
  return (
    <div className="overflow-hidden">
      <InfoHero
        eyebrow="Latest Updates"
        title="Blog Posts"
        description="Stay up to date with our latest news and articles"
        imageSrc="/activities/heli-tour.webp"
        imageAlt="Blog header image"
        showNavbar={false}
      />
      <main>
        <div className="container mx-auto px-4">
          <div className="py-24">
            <PostsGrid />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}