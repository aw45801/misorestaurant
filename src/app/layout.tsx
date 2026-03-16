import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MISO Ramen House',
  description: 'Authentic Japanese ramen and donburi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
