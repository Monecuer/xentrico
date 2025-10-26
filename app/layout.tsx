import './globals.css'
import { ReactNode } from 'react'
import { Inter, Montserrat } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
const mont = Montserrat({ subsets: ['latin'], weight: ['700','900'] })

export const metadata = {
  title: 'Xentrico — Official',
  description: 'Music artist website for Xentrico — listen, watch, book, and shop.',
  openGraph: {
    title: 'Xentrico — Official',
    description: 'Music artist website for Xentrico — listen, watch, book, and shop.',
    type: 'website'
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000')
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className={`text-2xl font-black gradient-text ${mont.className}`}>XENTRICO</Link>
            <div className="flex gap-4 text-sm">
              <Link href="/music">Music</Link>
              <Link href="/videos">Videos</Link>
              <Link href="/events">Events</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/news">News</Link>
              <Link href="/store">Store</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <footer className="mt-16 border-t border-white/10 py-10 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Xentrico. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
