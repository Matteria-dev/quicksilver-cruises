'use client'
import { useState, useEffect, useCallback } from 'react'
import { Container } from './container'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './button'
import Image from 'next/image'
type TextWithGalleryProps = {
  mainTitle: string
  mainDescription: React.ReactNode
  images: Array<{
    src: string
    alt: string
  }>
  children?: React.ReactNode
} & (
  | {
      secondaryTitle: string
      secondaryDescription: React.ReactNode
    }
  | {
      secondaryTitle?: never
      secondaryDescription?: never
    }
)

function Gallery({ images }: { images: TextWithGalleryProps['images'] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  
    const nextImage = useCallback(() =>
    {
        setCurrentIndex((current) => (current + 1) % images.length)
    }, [images.length])

  const previousImage = () => {
    setCurrentIndex((current) => (current - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage()
    }, 5000)
  
    return () => clearInterval(timer)
  }, [nextImage])

  return (
    <div className="relative h-full w-full">
      {/* Main Image */}
      <div className="relative aspect-3/4 w-full overflow-hidden rounded-2xl">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
                  className="h-full w-full object-cover transition-all duration-500"
                  width={500}
                  height={500}  
        />
        
        {/* Navigation Buttons */}
        <div className="absolute ring-transparent-100 inset-0 flex items-center justify-between px-2">
          <Button
          variant='plain'
            onClick={previousImage}
            className="text-grey-100/80 hover:text-white transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
          variant='plain'
            onClick={nextImage}
            className="text-grey-100/80 hover:text-white transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Thumbnail Preview */}
      <div className="mt-4 grid grid-flow-col auto-cols-max gap-4">
        {images.map((image, index) => (
          <Button
          variant='plain'
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-opacity ${
              index === currentIndex ? 'opacity-100' : 'opacity-50 hover:opacity-75'
            }`}
          >
            <Image
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
                    className="h-16 w-16 rounded-lg object-cover"
                    width={100}
                    height={100}    
            />
          </Button>
        ))}
      </div>
    </div>
  )
}

export function TextWithGallery({
  mainTitle,
  mainDescription,
  secondaryTitle,
  secondaryDescription,
  images,
  children
}: TextWithGalleryProps) {
  return (
    <Container>
      <div className="px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="pr-8 lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-blue-300 sm:text-4xl">
              {mainTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-500 dark:text-grey-200">
              {mainDescription}
            </p>
            
            {secondaryTitle && secondaryDescription && (
              <>
                <h2 className="mt-12 text-3xl font-bold tracking-tight text-blue-300 sm:text-4xl">
                  {secondaryTitle}
                </h2>
                <p className="mt-6 text-lg leading-8 text-blue-500 dark:text-grey-200">
                  {secondaryDescription}
                </p>
              </>
            )}

            {children}
          </div>

          {/* Gallery Section */}
          <div className="lg:sticky lg:top-8">
            <Gallery images={images} />
          </div>
        </div>
      </div>
    </Container>
  )
}