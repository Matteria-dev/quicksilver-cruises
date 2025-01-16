'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'
function Gallery() {
  const images = [
    '/activities/snorkel.webp',
    '/activities/heli-tour.webp',
    '/activities/snorkel.webp',
    '/activities/heli-tour.webp',
    '/activities/snorkel.webp',
    '/activities/heli-tour.webp',
    '/activities/snorkel.webp',
    '/activities/heli-tour.webp',
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="w-full overflow-hidden pb-12 mt-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Main showcase image */}
            <div className="lg:w-2/3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-grey-100 dark:bg-dark-200 shadow-lg">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIndex}
                    src={images[activeIndex]}
                    alt={`Showcase image ${activeIndex + 1}`}
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 via-blue-500/0 to-blue-500/20" />
              </div>
            </div>

            {/* Thumbnail grid */}
            <div className="lg:w-1/3">
              <div className="grid grid-cols-4 lg:grid-cols-2 lg:grid-rows-4 gap-2 pt-1 h-full">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                    className={`relative overflow-hidden rounded-lg transition-all duration-200 aspect-[4/3] lg:aspect-auto ${
                      activeIndex === index
                        ? 'ring-2 ring-blue-300 ring-offset-2'
                        : 'hover:ring-2 hover:ring-blue-500/50 hover:ring-offset-2'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ${
                        activeIndex === index ? 'opacity-100' : 'opacity-60'
                                }`}
                            width={200}
                            height={150}    
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;