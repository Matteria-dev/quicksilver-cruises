import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import Footer from '@/components/footer'
import { Gradient } from '@/components/gradient'
import Navbar from '@/components/navbar'
import { Heading } from '@/components/text'
import type { Metadata } from 'next'
import Image from 'next/image'
import { homeContent } from '@/content/home'

export const metadata: Metadata = {
    description: homeContent.metadata.description,
}
function Hero() {
    const { title, description, images, video } = homeContent.hero;

    return (
        <div className="relative">
            <Gradient className="h-[calc(40vh-1rem)] md:h-[calc(100vh-6rem)] absolute inset-2 rounded-3xl ring-1 ring-inset ring-grey-100 dark:ring-dark-300 " />
            <Container className="relative overflow-hidden">
                <Navbar />
                <div className="h-[40vh] md:h-[calc(100vh-5rem)] w-[calc(100%-1rem)] overflow-hidden">
                    {/* Mobile Hero Image */}
                    <Image
                        src={images.mobile}
                        alt="Hero background"
                        className="absolute inset-2 md:hidden h-[calc(100%-1rem)] w-[calc(100%-1rem)] rounded-3xl object-cover"
                        width={828}
                        height={466}
                        priority
                    />

                    {/* Desktop Video */}
                    <video
                        className="absolute inset-2 hidden md:block h-[calc(100%-1rem)] w-[calc(100%-1rem)] rounded-3xl object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                    >
                        <source src={video} type="video/webm" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Dark overlay */}
                    <div className="bg-black/50 absolute inset-2 rounded-3xl" />

                    {/* Badge */}
                    <Image
                        src={images.badge}
                        alt="Logo"
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[300px] h-auto"
                        width={300}
                        height={300}
                        priority
                    />
                </div>
            </Container>

            {/* Content section below video */}
            <Container>
                <div className="py-24">
                    <div className="grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-2">
                        {/* Left column - main heading */}
                        <div className="lg:self-center">
                            <h1 className="font-display text-balance text-5xl/[0.9] font-medium tracking-tight text-blue-200 sm:text-7xl/[0.8]">
                                {title}
                            </h1>
                        </div>

                        {/* Right column */}
                        <div className="grid grid-rows-[auto_1fr] gap-8">
                            <p className="text-xl/7 font-medium text-blue-500 dark:text-grey-300 sm:text-2xl/8 lg:self-center">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

function BentoSection() {
    const { title, cards } = homeContent.activities;

    // This function helps us apply the right positioning classes based on card index
    const getCardClassName = (index: number) => {
        switch(index) {
            case 0:
                return "max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl";
            case 1:
                return "lg:col-span-3 lg:rounded-tr-4xl";
            case 2:
                return "lg:col-span-2 lg:rounded-bl-4xl";
            case 3:
                return "lg:col-span-2";
            case 4:
                return "max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl";
            default:
                return "";
        }
    };

    return (
        <Container>
            <Heading as="h3" className="mt-2 max-w-3xl text-blue-500 dark:text-blue-300">
                {title}
            </Heading>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                {cards.map((card, index) => (
                    <BentoCard
                        key={`activity-${index}`}
                        eyebrow={card.eyebrow}
                        title={card.title}
                        description={card.description}
                        graphic={
                            <div className="h-80" style={{ backgroundImage: `url(${card.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
                        }
                        className={getCardClassName(index)}
                    />
                ))}
            </div>
        </Container>
    )
}

function GBR() {
    const { title, paragraphs, ctaText, ctaLink, images } = homeContent.gbrSection;

    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <div className="max-w-4xl">
                    <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-blue-500 dark:text-blue-300 sm:text-5xl">
                        {title}
                    </h1>
                </div>
                <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
                    <div className="lg:pr-8">
                        {paragraphs.map((paragraph, index) => (
                            <p
                                key={`gbr-p-${index}`}
                                className={`${index > 0 ? 'mt-8' : 'mt-6'} text-base/7 text-blue-500 dark:text-grey-200`}
                            >
                                {paragraph}
                            </p>
                        ))}
                        <Button variant="secondary" href={ctaLink} className="px-4 mt-4">
                            {ctaText}
                        </Button>
                    </div>
                    <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
                        <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                            {images.map((image, index) => (
                                <div
                                    key={`gbr-img-${index}`}
                                    className={`${index % 2 === 1 ? '-mt-8 lg:-mt-40' : ''} aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10`}
                                >
                                    <Image
                                        alt=""
                                        src={image}
                                        className="block size-full object-cover"
                                        loading="lazy"
                                        width={400}
                                        height={400}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="max-lg:mt-16 lg:col-span-1"></div>
                </section>
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <div className="overflow-hidden">
            <Hero />
            <main>
                <BentoSection />
                <GBR />
            </main>
            <Footer />
        </div>
    )
}