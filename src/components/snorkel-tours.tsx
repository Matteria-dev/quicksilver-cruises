import { Button } from './button'
import { Container } from './container'
import { clsx } from 'clsx'
import { Heading } from './text'
import { AlertCircle } from 'lucide-react'
import Image from 'next/image'
interface TourCardProps {
  title: string
  subtitle: string
  duration: string
  features: string[]
  image?: string
  variant?: 'default' | 'highlighted'
}

function SafetyInfoBox() {
    const safetyTips = [
      "Always swim in buddy pairs – it's a much safer option, and you have someone to share your amazing experiences with!",
      "Never look directly down when snorkelling, or your snorkel may turn into a drinking straw!",
      "Keep your face looking forward, and ensure your snorkel is slightly angled backwards – this should keep your snorkel dry."
    ];
  
    return (
      <div className="mt-8 rounded-2xl overflow-hidden shadow-xs bg-blue-100/20 dark:bg-blue-200">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="h-6 w-6 text-blue-300 dark:text-blue-400" />
            <h3 className="text-2xl font-medium tracking-tight text-blue-400">
              Helpful Safety Information
            </h3>
          </div>
  
          <ul className="space-y-4">
            {safetyTips.map((tip, index) => (
              <li key={index} className="flex gap-x-3 text-blue-500">
                <svg 
                  className="mt-1 h-5 w-5 flex-none text-blue-200" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
  
          <div className="mt-6 p-4 rounded-xl bg-yellow-100/50 text-blue-500">
            <p>
              Certain medial conditions, medications and height restrictions may preclude some people from participating in optional in-water activities. For advice, contact our office. Snorkelling can be a strenuous activity. Please use caution and inform our crew of any medical conditions.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default SafetyInfoBox;

  function TourCard({ image, title, subtitle, duration, features, variant = 'default' }: TourCardProps) {
    return (
      <div className={clsx(
        'relative rounded-2xl overflow-hidden flex flex-col',
        'ring-1 ring-grey-200/5 dark:ring-grey-500/5 shadow-xs',
        variant === 'highlighted' ? 'bg-blue-300/20 dark:bg-blue-500' : 'bg-grey-200 dark:bg-dark-300',
      )}>
        {image && (
          <div className="relative h-48 w-full">
            <Image
              src={image}
              alt={title}
                        className="absolute inset-0 h-full w-full object-cover"
                        width={800}
                        height={800}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-black/0" />
          </div>
        )}
        <div className="p-8 flex flex-col flex-1">
          <div className="flex-1">
            <div>
                        <h3 className={clsx(
                            "text-2xl font-medium tracking-tight text-grey-500 dark:text-blue-100",
                            variant === 'highlighted' ? 'dark:text-blue-100' : 'dark:text-blue-300')}>
                {title}
                        </h3>
                        
              <p className="mt-2 inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-500">
                {duration}
                        </p>
                        <p className={clsx(
                            "mt-2 text-base text-grey-400",
                            variant === 'highlighted' ? 'dark:text-blue-200' : 'dark:text-blue-400')}>
                {subtitle}
              </p>
            </div>
            
            <ul className="mt-8 space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex gap-x-3 text-grey-400 dark:text-grey-200">
                  <svg 
                    className="mt-1 h-5 w-5 flex-none text-blue-300" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-8 pt-8 border-t border-grey-500/10 dark:border-grey-200/10">
                    <Button variant="primary" href="#pricing" className={clsx(
                        "w-full dark:hover:bg-dark-400",
                        variant === 'highlighted' ? 'dark:text-blue-200' : 'dark:text-blue-400')}>
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    )
  }

export function SnorkelTours() {
  const introTour = {
    image: "/activities/snorkel.webp",
    title: "Introductory Snorkel Tour",
    subtitle: "Designed for the novice or beginner snorkeller",
    duration: "30-40 minutes",
    features: [
      "Perfect for first-time snorkellers",
      "Introduction to marine environment",
      "Ideal for families and educational experience",
      "Tours from protected snorkelling platform",
      "Safety float and whistle provided",
      "Children under 12 must be accompanied by adult"
    ]
  }

  const advancedTour = {
    image: "/activities/heli-tour.webp",
    title: "Advanced Snorkel Tour",
    subtitle: "For adventurous snorkellers with some experience",
    duration: "45-60+ minutes",
    features: [
      "Explore further with experienced guides",
      "Learn duck diving techniques",
      "Cover distances up to several hundred metres",
      "Drift snorkelling opportunities available",
      "Must swim unassisted without flotation",
      "Children under 12 must be accompanied by adult"
    ]
  }

  return (
    <section>
      <Container className='px-0 lg:px-0'>
          <div className="flex items-center gap-3 mb-4">
            <Button variant="secondary" className="bg-teal-100 data-hover:bg-teal-100 data-hover:text-blue-500 text-teal-700 border-teal-200">
              Optional Activity
            </Button>
          </div>
          
          <div className="relative">
            <div className="flex justify-between items-start gap-6 mb-6">
              <h2 className="dark:blue-200 text-4xl font-bold tracking-tight text-blue-300">
                Marine Biologist Guided Snorkelling Adventures
              </h2>
              
              <div className="relative shrink-0 h-20 p-4">
                <Image 
                  src="/logo/Reefbiosearch-logo.webp" 
                  alt="Reef Biosearch Logo"
                              className="w-full h-full object-contain" 
                              width={200}
                              height={200}  
                />
              </div>
            </div>
            
            <p className="text-lg leading-8 text-blue-500 dark:text-grey-200">
              If you would like to learn more about the Great Barrier Reef whilst snorkelling, you may like to try one of our optional guided snorkelling tours. Our Reef Biosearch team of University qualified marine biologists will introduce you to a new and exciting world. You will be part of a small group, guided by our experienced marine biologists who can reveal so much more about the magnificent marine life of this fragile eco-system.
              <br /><br />
              We offer two different snorkel tours designed to enable all groups of passengers, regardless of their snorkelling skill level, to enjoy an amazing in-water experience on the reef.
            </p>
          </div>
          
        <div className="mx-auto mt-16 max-w-5xl grid gap-8 lg:grid-cols-2">
          <TourCard {...introTour} />
          <TourCard {...advancedTour} variant="highlighted" />
        </div>
        <SafetyInfoBox />
      </Container>
    </section>
  )
}