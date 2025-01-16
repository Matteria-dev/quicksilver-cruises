import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: {
    template: '%s - Quicksilver Cruises',
    default: 'Quicksilver Cruises - Tour the Great Barrier Reef',
  },
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <link
            rel="stylesheet"
            href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link
            rel="alternate"
            type="application/rss+xml"
            title="The Quicksilver Blog"
            href="/blog/feed.xml"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
        <SpeedInsights />
      </head>
      <body className="flex min-h-screen flex-col text-gray-950 antialiased bg-grey-100 dark:bg-dark-400">
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      </body>
      </html>
  )
}
