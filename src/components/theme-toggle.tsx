'use client'

import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  // Start with a default value that matches what we set in the script
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  // Add mounted state to prevent hydration mismatch
  const [mounted, setMounted] = useState(false)

  // Update the theme only after component is mounted
  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      localStorage.theme = theme
    }
  }, [theme, mounted])

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() =>
    {
        const handleScroll = () =>
        {
            const scrolled = window.scrollY > 0
            const timerId = setTimeout(() =>
            {
                setIsScrolled(scrolled)
            }, 100)

            return () => clearTimeout(timerId)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

  function toggleTheme() {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  // Prevent flash during hydration
  if (!mounted) {
    return (
      <div className="w-10 h-10" /> // Placeholder with same dimensions
    )
  }

  return (
    <button
      onClick={toggleTheme}
          className={`rounded-lg p-2 ${isScrolled
              ? 'text-blue-500 hover:text-blue-400 dark:text-blue-500 dark:hover:text-blue-400'
              : 'text-blue-500 hover:text-blue-200 dark:text-grey-300 dark:hover:text-blue-100'
              }`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  )
}