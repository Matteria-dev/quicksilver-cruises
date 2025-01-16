/* eslint-disable react/no-unescaped-entities */
'use client'
import { CheckIcon } from '@heroicons/react/20/solid'
import { clsx } from 'clsx'
import { Card } from './card'
import { Tab } from '@headlessui/react'

interface Feature {
  name: string
  tiers?: Record<string, string | boolean>
  description?: string
}

interface Section {
  name: string
  description?: string
  features: Feature[]
}

const includedFeatures = [
  'Return Trip',
  'Snorkelling',
  'Underwater Observatory',
  'Semi Submersible',
]

const tiers = [
  {
    name: 'Child',
    description: '4 - 14 years',
    price: '$164',
  },
  {
    name: 'Adult',
    description: 'Standard fare',
    price: '$312',
    featured: true,
  },
  {
    name: 'Family',
    description: 'Maximum 2 adults and 2 children',
    price: '$796',
  },
]

const sections: Section[] = [
    {
        name: 'Coach Transfers',
        description:
          'Return Coach Transfers',
        features: [
          { name: 'Port Douglas', tiers: { Child: '$12', Adult: '$24', Family: '$60' } },
          { name: 'Carins & Northern Beaches', tiers: { Child: '$23', Adult: '$41', Family: '$105' } },
        ],
      },
  {
    name: 'Guided Snorkel Tour',
    features: [
      {
        name: 'Introductory',
        tiers: { Child: '$45', Adult: '$80', Family: '$205' },
      },
      { name: 'Advanced', tiers: { Child: '$50', Adult: '$100' } },
    ],
  },
  {
    name: 'Diving',
    description: 'Minimum age is 12 years',
    features: [
      {
        name: 'Introductory Dive - Full Gear (1 Dive)',
        tiers: { Child: '$198', Adult: '$198' },
      },
      {
        name: 'Certified Dive - Full Gear (1 Dive)',
        tiers: { Child: '$150', Adult: '$150' },
      },
      {
        name: 'Certified Dive - Full Gear (2 Dives)',
        tiers: { Child: '$225', Adult: '$225' },
      },
    ],
  },
  {
    name: 'Ocean Walker',
    features: [
      { name: 'Helmet Dive', tiers: { Child: '$198', Adult: '$198' } },
    ],
  },
  {
    name: 'Scenic Heli Flight',
    description:
      'Availability to be confirmed. Infants over 3 charged at full rate',
    features: [
      { name: '10 minute flight', tiers: { Child: '$199', Adult: '$199' } },
    ],
  },
  
]


export function TermsAccordion() {
    const tabs = [
      {

        name: 'Terms & Conditions',
        content: (
          <div className="space-y-4 text-blue-500 ">
            <p className="font-semibold">All taxes are included in the total price</p>
            
            <div>
              <span className="font-semibold">EMC:</span> A Government Environmental Management 
              Charge (EMC) of $8 per person applies to all adults and children 4 years and over 
              entering the Great Barrier Reef World Heritage area. This fee is included in the 
              fare price.
            </div>
            
            <div>
              <span className="font-semibold">Surcharge:</span> Due to potential significant 
              volatility in supply and operational costs, a surcharge may be applied due to 
              unforeseen circumstances. In such cases any charge will be collected on departure. 
              Credit card surcharge may apply.
            </div>
            
            <div>
              <p className="font-semibold mb-2">Conditions</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Children 4-14 years.</li>
                <li>Children under 3 years free of charge.</li>
                <li>Family fare – maximum of 2 adults and 2 children of the same family. Normal 
                fare applies for additional children. Not applicable with any other discount.</li>
              </ul>
            </div>
            
            <div>
              <p className="font-semibold mb-2">General Conditions</p>
              <p>All schedules, activities and prices may be varied without notice. Listed 
              fares in Australian dollars include Goods and Services Tax. Prices valid from 
              1 April 2024 – 31 March 2025</p>
            </div>
          </div>
        )
      },
      {
        name: 'Why Book Direct?',
        content: (
          <div className="space-y-4 text-blue-500">
            <p className="font-semibold">Why book directly with Quicksilver Cruises?</p>
            <ul className="space-y-3">
              <li className="flex gap-x-3">
                <span className="font-semibold min-w-48">Live availability & Instant Confirmation:</span>
                <span>Secure your booking immediately</span>
              </li>
              <li className="flex gap-x-3">
                <span className="font-semibold min-w-48">Best rate:</span>
                <span>We own and operate all boats to our reef destinations – you won't find a better price online.</span>
              </li>
              <li className="flex gap-x-3">
                <span className="font-semibold min-w-48">Flexibility:</span>
                <span>If weather or some other unforseen factor makes travelling on the day difficult, you can change it to a more suitable day for no extra cost.</span>
              </li>
              <li className="flex gap-x-3">
                <span className="font-semibold min-w-48">Secure and Safe transaction:</span>
                <span>We use industry best standard, your details are safe with us.</span>
              </li>
              <li className="flex gap-x-3">
                <span className="font-semibold min-w-48">We are the Great Barrier Reef holiday experts:</span>
                <span>We don't sell hundreds of other destinations and know the Reef better than anyone.</span>
              </li>
            </ul>
          </div>
        )
      }
    ]
  
    return (
      <Card>
        <Tab.Group>
          <Tab.List className="flex border-b border-grey-200 dark:border-dark-400">
            {tabs.map((tab) => (
              <Tab
                key={tab.name}
                className={({ selected }) =>
                  clsx(
                    'px-6 py-4 text-sm font-medium focus:outline-none',
                    selected
                      ? 'text-blue-400 border-b-2 border-blue-400 -mb-px dark:text-blue-200'
                      : 'text-blue-500 hover:text-blue-400 dark:text-grey-200'
                  )
                }
              >
                {tab.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {tabs.map((tab) => (
              <Tab.Panel
                key={tab.name}
                className="p-6 focus:outline-none text-xs dark:text-grey-200"
              >
                {tab.content}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Card>
    )
  }




export default function Pricing() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Card>
          {/* Base Package - Side by side layout */}
          <div className="mx-auto rounded-2xl ring-0 lg:flex lg:max-w-none">
            <div className="p-6 sm:p-8 lg:flex-auto">
              <h3 className="text-2xl font-semibold tracking-tight text-blue-300 dark:text-blue-200">
                Cruise Fare
              </h3>
              <div className="mt-6 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold text-blue-400  dark:text-blue-200">
                  What's included
                </h4>
                <div className="bg-grey-100 dark:bg-dark-400 h-px flex-auto" />
              </div>
              <ul className="mt-4 grid grid-cols-1 gap-3 text-sm text-blue-500  dark:text-grey-200 sm:grid-cols-2">
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-5 w-5 flex-none text-blue-300  dark:text-blue-200" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing Cards */}
            <div className="mt-2 p-0 lg:mt-0 lg:w-full lg:max-w-xl lg:flex-shrink-0">
             
                <div>
                  <div className="grid grid-cols-3 gap-4 px-4">
                    {tiers.map((tier) => (
                      <Card className='bg-grey-200 p-0 shadow-sm  dark:bg-dark-200'>
                      <div
                        key={tier.name}
                        className={clsx(
                          'flex flex-col rounded-xl px-4 py-3 text-center',
                          tier.featured ? 'bg-blue-100/20' : '',
                        )}
                      >
                        <div className="flex min-h-[40px] flex-1 flex-col justify-center">
                          <p className="text-lg font-semibold text-blue-400  dark:text-blue-200">
                            {tier.name}
                          </p>
                        </div>
                        <div className="flex min-h-[40px] flex-1 flex-col justify-center">
                          <p className="text-xs text-blue-500  dark:text-grey-200">
                            {tier.description}
                          </p>
                        </div>
                        <div className="flex min-h-[48px] flex-1 flex-col justify-center">
                          <p className="flex items-baseline justify-center gap-x-1">
                            <span className="text-2xl font-semibold text-blue-300  dark:text-blue-200">
                              {tier.price}
                            </span>
                            <span className="text-sm text-blue-400  dark:text-blue-300">AUD</span>
                          </p>
                        </div>
                      </div>
                      </Card>
                    ))}
                  </div>

                  <button className="text-grey-200 mt-6 w-full rounded-lg bg-blue-400 px-3 py-2 text-sm font-semibold hover:bg-blue-300 shadow-sm">
                    Book Now
                  </button>
                </div>
              </div>
            
          </div>
          </Card>
          {/* Additional Services */}
          <div className="mt-8 space-y-8">
  {/* Render multi-feature sections normally */}
  {sections
    .filter(section => section.features.length > 1)
    .map((section) => (
      <Card key={section.name}>
        {/* Existing card content */}
        <div className="overflow-hidden rounded-lg">
          <div className="mb-4 px-6 pt-6">
            <h3 className="text-lg font-semibold text-blue-400  dark:text-blue-200">
              {section.name}
            </h3>
            {section.description && (
              <p className="mt-1 text-sm text-blue-500  dark:text-grey-200">
                {section.description}
              </p>
            )}
          </div>

          <div className="overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-grey-300 border-b dark:border-dark-400">
                  <th className="py-3 pl-6 text-left text-sm font-semibold text-blue-400  dark:text-blue-200">
                  </th>
                  {tiers.map((tier) => (
                    <th
                      key={tier.name}
                      className={clsx(
                        'w-[180px] px-4 py-3 text-center text-sm font-semibold',
                        tier.featured ? 'text-blue-400 dark:text-blue-200' : 'text-blue-500 dark:text-blue-300',
                      )}
                    >
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-grey-300 dark:divide-dark-400 divide-y">
                {section.features.map((feature) => (
                  <tr key={feature.name}>
                    <td className="py-3 pl-6 text-sm text-blue-500 dark:text-grey-200">
                      {feature.name}
                    </td>
                    {tiers.map((tier) => (
                      <td
                        key={tier.name}
                        className={clsx(
                          'w-[180px] px-4 py-3 text-center',
                          tier.featured ? 'bg-blue-100/20' : '',
                        )}
                      >
                        {feature.tiers?.[tier.name] ? (
                          <span
                            className={clsx(
                              'text-sm',
                              tier.featured
                                ? 'font-semibold text-blue-400 dark:text-grey-200'
                                : 'text-blue-500 dark:text-grey-200',
                            )}
                          >
                            {feature.tiers[tier.name]}
                          </span>
                        ) : (
                          <span className="text-gray-400  dark:text-grey-200">-</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    ))}

  {/* Render single-feature sections in a grid */}
  <div className="grid grid-cols-2 gap-8">
  {sections
    .filter(section => section.features.length === 1)
    .map((section) => (
      <Card key={section.name}>
        <div className="flex flex-col h-full overflow-hidden rounded-lg">
          <div className="mb-4 px-6 pt-6 flex-1">
            <h3 className="text-lg font-semibold text-blue-400 dark:text-blue-200">
              {section.name}
            </h3>
            {section.description && (
              <p className="mt-1 text-sm text-blue-500 dark:text-grey-200">
                {section.description}
              </p>
            )}
          </div>

          <div className="overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-grey-300 border-b">
                  <th className="py-3 pl-6 text-left text-sm font-semibold text-blue-400 dark:text-blue-200">
                  </th>
                  {tiers.map((tier) => (
                    <th
                      key={tier.name}
                      className={clsx(
                        'px-4 py-3 text-center text-sm font-semibold',
                        tier.featured 
                          ? 'text-blue-400 dark:text-blue-200' 
                          : 'text-blue-500 dark:text-blue-300',
                      )}
                    >
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.features.map((feature) => (
                  <tr key={feature.name}>
                    <td className="py-3 pl-6 text-sm text-blue-500 dark:text-grey-200">
                      {feature.name}
                    </td>
                    {tiers.map((tier) => (
                      <td
                        key={tier.name}
                        className={clsx(
                          'px-4 py-3 text-center',
                          tier.featured ? 'bg-blue-100/20' : '',
                        )}
                      >
                        {feature.tiers?.[tier.name] ? (
                          <span
                            className={clsx(
                              'text-sm',
                              tier.featured
                                ? 'font-semibold text-blue-400 dark:text-grey-200'
                                : 'text-blue-500 dark:text-grey-200',
                            )}
                          >
                            {feature.tiers[tier.name]}
                          </span>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    ))}
</div>
</div>
<div className="mt-8"></div>
       <TermsAccordion /> 
      </div>
    </div>
  )
}
