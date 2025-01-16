import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import Footer from '@/components/footer'
import { Gradient } from '@/components/gradient'
import Navbar from '@/components/navbar'
import { Heading } from '@/components/text'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
    description:
        'Explore the Great Barrier Reef with Quicksilver Cruises.',
}

function Hero()
{
    return (
        <div className="relative">
            <Gradient className="h-[calc(40vh-1rem)] md:h-[calc(95vh-5rem)] absolute inset-2 rounded-3xl ring-1 ring-inset ring-grey-100 dark:ring-dark-300 " />
            <Container className="relative  overflow-hidden">
                <Navbar />
                <div className="h-[40vh] md:h-[calc(100vh-5rem)] w-[calc(100%-1rem)] overflow-hidden">
                    {/* Mobile Hero Image */}
                    <Image
                        src="/Hero.png"
                        alt="Hero background"
                        className="absolute inset-2 md:hidden h-[calc(100%-1rem)] w-[calc(100%-1rem)]  rounded-3xl object-cover"
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
                        <source src="/Hero.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Dark overlay */}
                    <div className="bg-black/50 absolute inset-2 rounded-3xl" />

                    {/* Badge */}
                    <Image
                        src="/badge.png"
                        alt="Logo"
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[300px] h-auto "
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
                                Tour the Great Barrier Reef with Quicksilver Cruises.
                            </h1>
                        </div>

                        {/* Right column */}
                        <div className="grid grid-rows-[auto_1fr] gap-8">
                            <p className=" text-xl/7 font-medium text-blue-500 dark:text-grey-300 sm:text-2xl/8 lg:self-center">
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Quicksilver Cruises' friendly crew will take you to the renowned
                                Agincourt Reef, a jewel-like ribbon reef on the very edge of the
                                Great Barrier Reef, for an experience of a lifetime. Explore an
                                underwater world filled with a dazzling kaleidoscope of colour
                                and brilliance from the spacious Quicksilver activity platform.
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                An essential part of every 'things to do' list for a visit to
                                Australia.
                            </p>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}

function BentoSection()
{
    return (
        <Container>
            <Heading as="h3" className=" mt-2 max-w-3xl text-blue-500 dark:text-blue-300">
                Activities
            </Heading>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                <BentoCard
                    eyebrow="Included"
                    title="Snorkelling"
                    description="Snorkelling is one of the many activities included in your day and is one of the best ways to view the incredible underwater world of the Great Barrier Reef."
                    graphic={
                        <div className="h-80 bg-[url(/activities/snorkel.webp)] bg-cover bg-center bg-no-repeat" />
                    }
                    className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
                />
                <BentoCard
                    eyebrow="Optional"
                    title="Scuba Diving"
                    description="Offering Intro and Certified Diver experiences, there's something for everyone."
                    graphic={
                        <div className="h-80 bg-[url(/activities/intro-dive.jpg)] bg-cover bg-center bg-no-repeat" />
                    }
                    className="lg:col-span-3 lg:rounded-tr-4xl"
                />
                <BentoCard
                    eyebrow="Included"
                    title="Semi Submersible"
                    description="Even without entering the water, you can stay dry and explore the stunning reef from the comfort of a Quicksilver sub."
                    graphic={
                        <div className="h-80 bg-[url(/activities/semi-sub.jpg)] bg-cover bg-center bg-no-repeat" />
                    }
                    className="lg:col-span-2 lg:rounded-bl-4xl"
                />
                <BentoCard
                    eyebrow="Optional"
                    title="Scenic Helicopter Flight"
                    description="See the expanse of the Great Barrier Reef from the air with a Nautilus Aviation Helicopter scenic flight."
                    graphic={
                        <div className="h-80 bg-[url(/activities/heli-tour.webp)] bg-cover bg-center bg-no-repeat" />
                    }
                    className="lg:col-span-2"
                />
                <BentoCard
                    eyebrow="Optional"
                    title="Ocean Walker"
                    description="Oceanwalker or “helmet diving” is a unique and fun way to experience the underwater world of the reef up close and personal."
                    graphic={
                        <div className="h-80 bg-[url(/activities/ocean-walker.webp)] bg-cover bg-center bg-no-repeat" />
                    }
                    className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
                />
            </div>
        </Container>
    )
}
function GBR()
{
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <div className="max-w-4xl">
                    <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-blue-500 dark:text-blue-300 sm:text-5xl">
                        The Great Barrier Reef
                    </h1>

                </div>
                <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
                    <div className="lg:pr-8">
                        <p className="mt-6 text-base/7 text-blue-500 dark:text-grey-200">
                            Entering the dramatic beauty of the Great Barrier Reef is an extraordinary experience. It’s a day that engages all your senses, lifts your spirit and takes you into another realm.
                            Dive, snorkel or stay dry and explore the stunning reef from the underwater viewing platform and semi-sub – it’s your personal reef discovery.
                        </p>
                        <p className="mt-8 text-base/7 text-blue-500 dark:text-grey-200">
                            Whichever way you choose, you’ll bring home a lifetime of memories from this living natural wonder of the world.
                        </p>
                        <Button variant="secondary" href="#" className="px-4 mt-4">
                            Find Out More
                        </Button>
                    </div>
                    <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
                        <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                                <Image
                                    alt=""
                                    src="/misc/Quicksilver-OBR_Snorkellers-platform-LR.webp"
                                    className="block size-full object-cover"
                                    loading="lazy"
                                    width={400}
                                    height={400}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                                <Image
                                    alt=""
                                    src="/misc/AG_turtle_hawksbill-scaled.webp"
                                    className="block size-full object-cover"
                                    loading="lazy"
                                    width={400}
                                    height={400}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                                <Image
                                    alt=""
                                    src="/misc/Quicksilver-Copyright_Clownfish-scaled.webp"
                                    className="block size-full object-cover"
                                    loading="lazy"
                                    width={400}
                                    height={400}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                                <Image
                                    alt=""
                                    src="/misc/AG_turtle_hawksbill-scaled.webp"
                                    className="block size-full object-cover"
                                    loading="lazy"
                                    width={400}
                                    height={400}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                        </div>

                    </div>

                    <div className="max-lg:mt-16 lg:col-span-1">


                    </div>
                </section>
            </div>
        </div>
    )
}

export default function Home()
{
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
