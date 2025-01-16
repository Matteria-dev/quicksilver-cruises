'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { Subheading } from './text'

export function BentoCard({
  dark = false,
  className = '',
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
}: {
  dark?: boolean
  className?: string
  eyebrow: React.ReactNode
  title: React.ReactNode
  description: React.ReactNode
  graphic: React.ReactNode
  fade?: ('top' | 'bottom')[]
}) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      data-dark={dark ? 'true' : undefined}
      className={clsx(
        className,
        'group relative flex flex-col overflow-hidden rounded-lg',
        'bg-blue-100/10 dark:bg-dark-100 shadow-sm ring-1 ring-grey-500/0',
        'data-[dark]:bg-gray-800 data-[dark]:ring-grey-100/15',
      )}
    >
      <div className="relative h-80 shrink-0">
        {graphic}
        {fade.includes('top') && (
          <div className="absolute inset-0 bg-gradient-to-b from-grey-200 to-50% group-data-[dark]:from-gray-800 group-data-[dark]:from-[-25%]" />
        )}
        {fade.includes('bottom') && (
          <div className="absolute inset-0 bg-gradient-to-t from-grey-200 to-50% dark:from-dark-400 group-data-[dark]:from-[-25%]" />
        )}
      </div>
      <div className="relative p-10">
        <Subheading className="text-blue-200" as="h3" dark={dark}>
          {eyebrow}
        </Subheading>
        <p className="mt-1 text-2xl/8 font-medium tracking-tight text-blue-400 dark:text-blue-300">
          {title}
        </p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-blue-500 dark:text-grey-200">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
