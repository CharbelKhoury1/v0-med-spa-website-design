import type { Metadata } from 'next'
import { Fraunces, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SparkleClick } from '@/components/nano-banana/sparkle-click'
import { Spotlight } from '@/components/nano-banana/spotlight'
import { StructuredData } from '@/components/structured-data'
import './globals.css'

const fraunces = Fraunces({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-serif"
});
const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'Verdun Clinic by Dr. Maya Adhami | ENT & Facial Plastic Surgery in Beirut',
  description: 'Expert ENT and Facial Plastic Surgeon in Beirut. Specializing in rhinoplasty, facial aesthetics, Sculptra, fillers, and Light Eyes Ultra mesotherapy.',
  generator: 'v0.app',
  openGraph: {
    title: 'Verdun Clinic by Dr. Maya Adhami',
    description: 'Expert ENT and Facial Plastic Surgery in Beirut, Lebanon.',
    url: 'https://verdunclinic.com',
    siteName: 'Verdun Clinic',
    images: [
      {
        url: 'https://verdunclinic.com/og-image.png', // Placeholder URL
        width: 1200,
        height: 630,
        alt: 'Verdun Clinic by Dr. Maya Adhami',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">
        <StructuredData />
        <Spotlight />
        {children}
        <Analytics />
        <SparkleClick />
      </body>
    </html>
  )
}
