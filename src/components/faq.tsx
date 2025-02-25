import { Disclosure, Tab } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { clsx } from 'clsx'

type FAQ = {
  question: string
  answer: string | React.ReactNode
}

type CategoryId = 'general' | 'weather' | 'onboard' | 'reef' | 'children'

type FAQCategories = {
  [K in CategoryId]: FAQ[]
}

export function TabbedFAQ() {
  const faqCategories: FAQCategories = {
    general: [
      {
        question: "What's included in the tour?",
        answer:
          'Our tour includes transportation, equipment, and professional guidance throughout your adventure.',
      },
      {
        question: 'What should I bring?',
        answer: 'We recommend bringing sunscreen, hat, swimwear, and a camera.',
      },
    ],
    weather: [
      {
        question: "What's the minimum age for diving?",
        answer: 'The minimum age for all diving activities is 12 years.',
      },
      {
        question: 'Do I need to be certified?',
        answer:
          'Evidence of dive certification and medical fitness to dive is required from all certified divers. Introductory divers are subject to medical questionnaire.',
      },
    ],
    onboard: [
      {
        question: 'Are there any medical restrictions?',
        answer:
          'Some medical conditions may prevent you from diving. If concerned, please consult your doctor.',
      },
      {
        question: 'How long should I wait before flying after diving?',
        answer:
          'For a single dive, wait 12 hours. For multiple dives, wait 24 hours before ascending to altitudes of 300 metres or greater.',
      },
    ],
    reef: [
      {
        question: "What's included in the tour?",
        answer:
          'Our tour includes transportation, equipment, and professional guidance throughout your adventure.',
      },
      {
        question: 'What should I bring?',
        answer: 'We recommend bringing sunscreen, hat, swimwear, and a camera.',
      },
    ],
    children: [
      {
        question: "What's included in the tour?",
        answer:
          'Our tour includes transportation, equipment, and professional guidance throughout your adventure.',
      },
      {
        question: 'What should I bring?',
        answer: 'We recommend bringing sunscreen, hat, swimwear, and a camera.',
      },
    ],
  }

  const categories: { id: CategoryId; name: string }[] = [
    { id: 'general', name: 'General Questions' },
    { id: 'weather', name: 'Weather' },
    { id: 'onboard', name: 'Onboard Quicksilver' },
    { id: 'reef', name: 'At the Reef' },
    { id: 'children', name: 'Travelling with Children' },
  ]

  return (
    <div className="w-full px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-100 p-1">
          {categories.map((category) => (
            <Tab
              key={category.id}
              className={({ selected }) =>
                clsx(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-hidden focus:ring-2',
                  selected
                    ? 'bg-white text-blue-400 shadow-sm'
                    : 'hover:bg-white/[0.12] text-blue-500 hover:text-blue-400',
                )
              }
            >
              {category.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {categories.map((category) => (
            <Tab.Panel
              key={category.id}
              className={clsx(
                'bg-white rounded-xl p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-hidden focus:ring-2',
              )}
            >
              <div className="space-y-2">
                {faqCategories[category.id].map((faq, index) => {
                  const itemId = `${category.id}-${index}`
                  return (
                    <Disclosure key={itemId} as="div">
                      {({ open }) => (
                        <div className="rounded-lg border border-grey-200">
                          <Disclosure.Button className="bg-white text-grey-900 hover:bg-grey-50 flex w-full justify-between rounded-lg px-4 py-4 text-left text-sm font-medium focus:outline-hidden focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                            <span className="text-base">{faq.question}</span>
                            <ChevronDownIcon
                              className={clsx(
                                'h-5 w-5 text-grey-500 transition-transform',
                                open ? 'rotate-180 transform' : '',
                              )}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pb-4 pt-1 text-sm text-grey-500">
                            {typeof faq.answer === 'string' ? (
                              <p>{faq.answer}</p>
                            ) : (
                              faq.answer
                            )}
                          </Disclosure.Panel>
                        </div>
                      )}
                    </Disclosure>
                  )
                })}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default TabbedFAQ
