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
  title: 'Verdun Clinic by Dr. Maya Adhami | ENT & Facial Plastic Surgery Beirut',
  description: 'Top-rated ENT and Facial Plastic Surgeon in Beirut. Expert rhinoplasty, facial surgery, Sculptra, fillers, and Light Eyes Ultra in the heart of Verdun. Book your consultation with Dr. Maya Adhami today.',
  keywords: 'Rhinoplasty Beirut, Dr. Maya Adhami, Verdun Clinic, Facial Plastic Surgery Lebanon, ENT Beirut, Aesthetic Surgery Verdun, Sculptra Beirut, Botox Lebanon, Fillers Verdun, Medical Spa Beirut',
  authors: [{ name: 'Dr. Maya Adhami' }],
  creator: 'Verdun Clinic',
  publisher: 'Verdun Clinic',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: 'Verdun Clinic by Dr. Maya Adhami | ENT & Facial Plastic Surgery',
    description: 'Expert medical and aesthetic care in Beirut. Specializing in natural-looking results through precise surgical and non-surgical treatments.',
    url: 'https://verdunclinic.com',
    siteName: 'Verdun Clinic',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Verdun Clinic by Dr. Maya Adhami - Natural Refinement in Beirut',
      },
    ],
    locale: 'en_LB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verdun Clinic by Dr. Maya Adhami',
    description: 'Expert ENT and Facial Plastic Surgery in Beirut, Lebanon.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
