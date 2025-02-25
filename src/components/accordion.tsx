import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

interface AccordionItem {
  question: string;
  answer: string | React.ReactNode;
}

interface AccordionProps {
  title: string;
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ title, items, className = '' }: AccordionProps) {
  return (
    <div className={`bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {title}
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {items.map((item) => (
              <Disclosure key={item.question} as="div" className="pt-6">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base/7 font-semibold">{item.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 [.group:not([data-open])_&]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  {typeof item.answer === 'string' ? (
                    <p className="text-base/7 text-gray-600">{item.answer}</p>
                  ) : (
                    item.answer
                  )}
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}