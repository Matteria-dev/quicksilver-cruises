import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Card } from './card'

interface SideMenuLink {
  title: string
  href: string
}

const sidebarLinks: SideMenuLink[] = [
  {
    title: 'Great Barrier Reef',
    href: '/information/gbr',
  },
  {
    title: 'FAQ',
    href: '/information/faq',
  },
  {
    title: 'Port Douglas',
    href: '/information/port-douglas',
  },
  {
    title: 'Weather Forecast',
    href: '/information/weather-forecast',
  },
  {
    title: 'For Families',
    href: '/information/families',
  },
  {
    title: 'Vessels',
    href: '/information/vessels',
  },
  {
    title: 'Accessibility',
    href: '/information/accessibility',
  },
  {
    title: 'Reef Restoration Project',
    href: '/information/reef-restoration',
  },
  {
    title: 'Environmental Stewardship',
    href: '/information/environmental-stewardship',
  },
  {
    title: 'GBR Health',
    href: '/information/gbr-health',
  },
  {
    title: 'Ecotourism',
    href: '/information/ecotourism',
  },
  {
    title: 'Reef Biosearch',
    href: '/information/reef-biosearch',
  },
  {
    title: 'Climate Action',
    href: '/information/climate-action',
  },
  {
    title: 'Agincourt Reef',
    href: '/information/agincourt-reef',
  },
]

interface SideMenuProps {
  activeSection: string
  className?: string
}

export function InfoMenu({ activeSection, className }: SideMenuProps) {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  return (
    <div className="hidden lg:block lg:w-[20vw] lg:min-w-[256px] lg:max-w-[320px]">
      <Card className="sticky top-40 w-full">
        <div>
          <div className="mb-4">
            <h2 className="text-center text-xl font-bold text-blue-500 dark:text-blue-200">
              Information
            </h2>
            <div className="mt-1 h-1 w-full rounded-full bg-linear-to-r from-blue-300 to-teal-300" />
          </div>

          <nav className="space-y-1">
            {sidebarLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              const isHovered = hoveredLink === link.href

              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`group relative flex items-center rounded-lg p-2 transition-all duration-200 ${
                    isActive
                      ? 'from-blue-50 to-teal-50 bg-linear-to-r text-blue-500'
                      : 'text-blue-500 dark:text-blue-300 dark:text-grey-200'
                  }`}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="mr-2 grow truncate text-sm font-medium">
                    {link.title}
                  </span>
                  <ChevronRight
                    className={`h-4 w-4 shrink-0 transform transition-transform duration-200 ${
                      isHovered
                        ? 'translate-x-1 text-blue-400'
                        : 'text-grey-400'
                    }`}
                  />
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 h-full w-0.5 rounded-r bg-linear-to-b from-blue-400 to-teal-400"
                      initial={false}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.a>
              )
            })}
          </nav>
        </div>

        <div className="from-blue-50 to-teal-50 mt-2 bg-linear-to-br p-3">
                  <p className="text-blue-500 dark:text-grey-200 text-xs">
            Need help choosing an activity?
          </p>
          <button className="mt-2 w-full rounded-lg bg-linear-to-r from-blue-100 from-blue-300 to-blue-200 px-3 py-1.5 text-xs font-medium text-grey-200 transition-colors hover:bg-linear-to-r">
            Contact Us
          </button>
        </div>
      </Card>
    </div>
  )
}
