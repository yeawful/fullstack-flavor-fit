import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'

import { SITE_NAME } from '@/shared/constants/seo.constants'

import './globals.css'
import { Provider } from './providers/Provider'

const monoFont = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: {
    absolute: SITE_NAME,
    template: `%s • ${SITE_NAME}`
  },
  description: 'A web app for managing your health and nutrition.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${monoFont.variable} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
