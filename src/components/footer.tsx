import { Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'
const navigation = {
  tour: [
    { name: 'Outer Reef Cruise', href: '#' },
    { name: 'Your Day', href: '#' },
    { name: 'Fares & Pricing', href: '#' },
    { name: 'Holiday Packages', href: '#' },
  ],
  activities: [
    { name: 'Snorkelling', href: '#' },
    { name: 'Semi - Submersible', href: '#' },
    { name: 'Underwater Observatory', href: '#' },
    { name: 'Scuba Diving', href: '#' },
    { name: 'Ocean Walker', href: '#' },
  ],
  information: [
    { name: 'GBR Information', href: '#' },
    { name: 'Port Douglas', href: '#' },
    { name: 'Weather', href: '#' },
    { name: 'FAQ', href: '#' },
  ],
  company: [
    { name: 'Quickilver group News', href: '#' },
    { name: 'Reef Biosearch', href: '#' },
    { name: 'Awards', href: '#' },
    { name: 'Ecotourism', href: '#' },
    { name: 'Quicksilver in the Community', href: '#' },
    { name: 'About Quicksilver Cruises', href: '#' },
  ],
  group: [
    { name: 'Gift Vouchers', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Conditions of Carriage', href: '#' },
  ],
}

export default function Footer() {
  return (
<footer className="ml-2 mb-2 w-[calc(100%-1rem)] inset-2 rounded-3xl ring-1 ring-inset ring-grey-100 dark:ring-transparent-100 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#1bb7ea] from-28% to-[#2ab0a9] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]">
  <div className="mx-auto px-6 pb-8 pt-16 sm:pt-20 lg:px-8 lg:pt-24">
    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
      <div className="flex flex-col">
        <Image
          alt="Quicksilver Cruises"
          src="/logo/quicksilver-cruises.webp"
                          className="h-16 w-auto object-contain object-left"
                          width={160}
                          height={40}
        />
        
        <div className="mt-8 flex flex-col space-y-6">
          <h3 className="text-sm/6 font-semibold text-grey-500">Part of the Quicksilver Group</h3>
          
          <div className="flex flex-col space-y-6">
            <div className="flex flex-wrap gap-y-4 gap-x-6">
              <a href="#" className="text-sm text-blue-500 hover:text-blue-400 whitespace-nowrap">Wavedancer Low Isles</a>
              <a href="#" className="text-sm text-blue-500 hover:text-blue-400 whitespace-nowrap">Great Adventures</a>
              <a href="#" className="text-sm text-blue-500 hover:text-blue-400 whitespace-nowrap">Silver Series</a>
              <a href="#" className="text-sm text-blue-500 hover:text-blue-400 whitespace-nowrap">Ocean Spirit Cruises</a>
              <a href="#" className="text-sm text-blue-500 hover:text-blue-400 whitespace-nowrap">Pro Dive Cairns</a>
              <a href="#" className="text-sm text-blue-500 hover:text-blue-400 whitespace-nowrap">Green Island Resort</a>
              <a href="#" className="text-sm text-blue-500 hover:text-blue-400 whitespace-nowrap">Poseidon Cruises</a>
            </div>
            
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                className="text-blue-500 hover:text-blue-400"
              >
                <Facebook className="size-5" />
              </a>
              <a
                href="https://instagram.com"
                className="text-blue-500 hover:text-blue-400"
              >
                <Instagram className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 xl:col-span-2 xl:mt-0">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-sm/6 font-semibold text-grey-500">Tour</h3>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.tour.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm/4 text-blue-500 hover:text-blue-400">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm/6 font-semibold text-grey-500">Activities</h3>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.activities.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm/4 text-blue-500 hover:text-blue-400">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm/6 font-semibold text-grey-500">Information</h3>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.information.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm/4 text-blue-500 hover:text-blue-400">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm/6 font-semibold text-grey-500">Company</h3>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm/4 text-blue-500 hover:text-blue-400">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm/6 font-semibold text-grey-500">Quicksilver Group</h3>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.group.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm/4 text-blue-500 hover:text-blue-400">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-8 border-t border-grey-500/10 pt-8 md:flex md:items-center md:justify-between">
    <p className="text-sm/6 text-blue-400">
  {new Date().getFullYear()} Quicksilver Cruises. All rights reserved.
</p>
    </div>
  </div>
</footer>
  )
}