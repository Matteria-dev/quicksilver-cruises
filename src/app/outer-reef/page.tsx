import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import Footer from '@/components/footer'
import { Heading } from '@/components/text'
import { Timeline } from '@/components/timeline'
import Gallery from '@/components/gallery'
import { InfoHero } from '@/components/info-hero'
import { TextWithIncluded } from '@/components/text-with-included'
import { Location } from '@/components/location'
import { TextWithGallery } from '@/components/text-with-gallery'

function BentoSection() {
  return (
    <div className="space-y-32">
      <Container>
        <Heading
          as="h3"
          className="mt-2 max-w-3xl text-teal-500 dark:text-teal-100"
        >
          Included Activities
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            eyebrow="Included"
            title="Snorkelling"
            description="Snorkelling is one of the many activities included in your day and is one of the best ways to view the incredible underwater world of the Great Barrier Reef."
            graphic={
              <div className="h-80 bg-[url(/activities/snorkel.webp)] bg-cover bg-center bg-no-repeat" />
            }
            className="max-lg:rounded-t-4xl lg:col-span-6 lg:rounded-tl-4xl lg:rounded-tr-4xl"
          />
          <BentoCard
            eyebrow="Included"
            title="Underwater Observatory"
            description="Even without entering the water, you can stay dry and explore the stunning reef from the comfort of a Quicksilver sub."
            graphic={
              <div className="h-80 bg-[url(/activities/semi-sub.jpg)] bg-cover bg-center bg-no-repeat" />
            }
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />

          <BentoCard
            eyebrow="Included"
            title="Semi Submersible"
            description="Oceanwalker or 'helmet diving' is a unique and fun way to experience the underwater world of the reef up close and personal."
            graphic={
              <div className="h-80 bg-[url(/activities/ocean-walker.webp)] bg-cover bg-center bg-no-repeat" />
            }
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>

      <Container>
        <Heading
          as="h3"
          className="mt-2 max-w-3xl text-blue-500 dark:text-blue-300"
        >
          Optional Activities
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
        <Button
          variant="primary"
          href="#"
          className="mt-8 w-full border-0 bg-teal-400/10 px-4 text-blue-500 dark:bg-dark-100 dark:text-blue-200"
        >
          Pricing Information
        </Button>
      </Container>
    </div>
  )
}

const images = [
  {
    src: "/activities/heli-tour.webp",
    alt: "Beautiful coral reef view"
  },
  {
    src: "/activities/ocean-walker.webp", 
    alt: "Tropical fish swimming through coral"
  },
  {
    src: "/activities/snorkel.webp",
    alt: "Underwater scenery"
  }
]

export default function OuterReef() {
  return (
    <div className="overflow-hidden">
      <InfoHero
        eyebrow="Experience of a Lifetime"
        title="Cruise the Great Barrier Reef with Australia's Most Awarded Tour"
        description="Your description"
        imageSrc="/activities/heli-tour.webp"
        imageAlt="Image description"
        showNavbar={false} // optional, defaults to true
      />
      <main>
      <TextWithIncluded
      mainTitle="Experience nature's finest with Australia's best"
      mainDescription="For your experience of a lifetime, Quicksilver's wavepiercing catamaran and friendly crew will take you to a reef at the very edge of Australia's Continental Shelf, to an underwater world that is dazzling kaleidoscope of colour and brilliance."
      
      secondaryTitle="Agincourt Reef - Discover the Outer Barrier Reef"
      secondaryDescription="Quicksilver takes you to Agincourt Reef, at the very outer edge of the Barrier Reef. Here, special reefs known as 'ribbons' run parallel to the Continental Shelf. Adjacent to the Coral Sea trench, these ribbon reefs are recognised as the most pristine eco-systems in the reef's environment."
    >
                  <Gallery />
    </TextWithIncluded>
        <div className="py-24">
          <BentoSection />
          <TextWithGallery
      mainTitle="Comfort and Space – Too much of a good thing is wonderful"
      mainDescription={
        <>
          Your journey is as important as your destination. It's a modern voyage, travelling in safety and air-conditioned comfort with state-of-the-art vessels that glide across the water to spacious platforms floating at the reef's edge.
          
          <br /><br />
          
          Walk into the underwater observatory, or cruise just above the corals in a semi-submersible. Your questions answered, your needs anticipated, your care assured, you're free to enjoy the moment and savour the discoveries. From coaches, to cruises, to crew, it's a day that's all about you.
        </>
      }
     images={images}
     
    >
      <Container>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 max-w-2xl">
    <Button
      variant="primary"
      href="#"
      className="border-0 bg-teal-400/10 px-4 text-blue-500 dark:bg-dark-100 dark:text-blue-200"
    >
      Activity Platform
    </Button>
    <Button
      variant="primary"
      href="#"
      className="border-0 bg-teal-400/10 px-4 text-blue-500 dark:bg-dark-100 dark:text-blue-200"
    >
      Vessel Information
    </Button>
    <Button
      variant="primary"
      href="#"
      className="border-0 bg-teal-400/10 px-4 text-blue-500 dark:bg-dark-100 dark:text-blue-200"
    >
      Activities for non-swimmers
    </Button>
    <Button
      variant="primary"
      href="#"
      className="border-0 bg-teal-400/10 px-4 text-blue-500 dark:bg-dark-100 dark:text-blue-200"
    >
      Information for Families
    </Button>
  </div>
</Container>
    </TextWithGallery>
    
          <Timeline />
          <Location />
        </div>
      </main>
      <Footer />
    </div>
  )
}
