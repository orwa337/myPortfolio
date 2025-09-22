
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Orwa Houry - Software Engineer Portfolio',
  description: 'Professional portfolio showcasing software engineering projects and skills',
  icons: {
      icon: [
          { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
          { url: '/favicon.svg', type: 'image/svg+xml' },
      ],
      shortcut: '/favicon.ico',
  },
    other: {
        'Content-Security-Policy': process.env.NODE_ENV === 'development'
            ? "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline' data:; img-src 'self' data: https: blob:; font-src 'self' https: data:; connect-src 'self' ws: wss: https:;"
            : "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https:; connect-src 'self';"
    },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
