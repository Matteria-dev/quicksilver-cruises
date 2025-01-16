import { Container } from '@/components/container'
import { Card } from '@/components/card'
import { Ship, Users, Fish, Compass, CalendarDays, Clock, Sunrise } from 'lucide-react'

// Hardcoded items
const INCLUDED_ITEMS = [
  { icon: Ship, text: 'Scenic Return Journey' },
  { icon: Users, text: 'Qualified lifeguard supervision' },
  { icon: Fish, text: 'Marine Biologist Presentation' },
  { icon: Compass, text: 'Reef Orientation' },
  { icon: CalendarDays, text: 'Fish Feeding (Conducted by crew)' },
  { icon: Clock, text: 'Morning/Afternoon tea' },
  { icon: Sunrise, text: 'Hot & Cold smorgasbord lunch' },
  { icon: Ship, text: 'All Snorkelling equipment included' },
  { icon: Users, text: 'Underwater observatory fish & coral viewing' },
  { icon: Sunrise, text: 'Stinger / Lycra suits & Buoyancy aids provided' },
]

const OPTIONAL_ITEMS = [
  { icon: Fish, text: 'Towels & Swimwear' },
  { icon: Ship, text: 'Hat, sunscreen & shirt' },
  { icon: Compass, text: 'Cash for drinks at the bar' },
  { icon: Fish, text: 'Credit card for shopping and optional tours' },
  { icon: Ship, text: 'Underwater digital camera (hire available onboard in limited numbers)' },
  { icon: Compass, text: 'Professional photo service available onboard' },
]

export interface TextWithIncludedProps {
  mainTitle: string
  mainDescription: string
  secondaryTitle: string
  secondaryDescription: string
  children?: React.ReactNode
}

export function TextWithIncluded({
  mainTitle,
  mainDescription,
  secondaryTitle,
  secondaryDescription,
  children
}: TextWithIncludedProps) {
  return (
    <Container>
      <div className="px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-1 lg:grid-cols-3">
          {/* Main Content */}
          <div className="pr-8 lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-blue-300 sm:text-4xl">
              {mainTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-500 dark:text-grey-200">
              {mainDescription}
            </p>
            
            <h2 className="mt-12 text-3xl font-bold tracking-tight text-blue-300 sm:text-4xl">
              {secondaryTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-500 dark:text-grey-200">
              {secondaryDescription}
            </p>

            {children}
          </div>

          {/* Sticky Card */}
          <div className="lg:sticky lg:top-8 lg:h-fit border-0">
            <Card>
              <div className="space-y-8">
                <div>
                  <h3 className="mb-4 text-center text-xl font-semibold text-blue-200">
                    Included in Your Day
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {INCLUDED_ITEMS.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <item.icon className="h-5 w-5 text-blue-400" />
                        <span className="text-blue-500 dark:text-grey-200">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-center text-xl font-semibold text-teal-200">
                    Optional Extras
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {OPTIONAL_ITEMS.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <item.icon className="h-5 w-5 text-teal-500" />
                        <span className="text-blue-500 dark:text-grey-200">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  )
}