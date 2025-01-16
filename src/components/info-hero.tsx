// src/components/Hero.tsx
import { Container } from './container'
import Navbar from './navbar'
import Image from 'next/image'
export interface HeroProps {
  eyebrow: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  showNavbar?: boolean
}

export function InfoHero({ 
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  showNavbar = true 
}: HeroProps) {
  return (
    <div>
      <div className="relative">
        <Container className="relative">
          {showNavbar && <Navbar />}
          {/* Main image container */}
          <div className="inset-0 h-[calc(30vh-5rem)] md:h-[calc(50vh-5rem)] lg:h-[calc(75vh-5rem)] w-full lg:w-[calc(100%-2rem)] max-w-[1920px] mx-auto overflow-hidden">
            <Image
                          alt={imageAlt}
                          src={imageSrc}
                          className="absolute inset-0 h-[calc(30vh-5rem)] md:h-[calc(50vh-5rem)] lg:h-[calc(75vh-5rem)] w-[calc(100%-1rem)] lg:w-[calc(100%-1rem)] ml-2 mt-3 overflow-hidden rounded-2xl md:rounded-2xl lg:rounded-3xl object-cover ring-1 ring-inset ring-grey-100 dark:ring-dark-400"
                          width={1920}
                          height={1080}
                      />
            {/* Glass overlay - hidden on mobile, visible on tablet+ */}
            <div className="hidden md:block absolute bottom-2 left-7 max-w-xl lg:max-w-2xl rounded-2xl bg-grey-200/70 dark:bg-dark-400/70 p-8 backdrop-blur-md">
              <h2 className="font-mono text-sm font-semibold uppercase tracking-wide text-blue-400 dark:text-blue-100">
                {eyebrow}
              </h2>
              <p className="mt-4 text-3xl lg:text-4xl font-medium tracking-tight text-blue-300 dark:text-blue-200">
                {title}
              </p>
              <p className="mt-4 text-base lg:text-lg text-blue-500 dark:text-grey-200">
                {description}
              </p>
            </div>
          </div>

          {/* Mobile text content - visible only on mobile */}
          <div className="md:hidden mt-6 px-4">
            <h2 className="font-mono text-sm font-semibold uppercase tracking-wide text-blue-400 dark:text-blue-100">
              {eyebrow}
            </h2>
            <p className="mt-4 text-3xl font-medium tracking-tight text-blue-300 dark:text-blue-200">
              {title}
            </p>
            <p className="mt-4 text-base text-blue-500 dark:text-grey-200">
              {description}
            </p>
          </div>
        </Container>
      </div>
    </div>
  )
}