"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TreatmentsSection } from "@/components/treatments-section"
import { ResultsSection } from "@/components/before-after-slider"
import { ProvidersSection } from "@/components/providers-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BookingModal } from "@/components/booking-modal"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const handleBookClick = () => {
    setIsBookingOpen(true)
  }

  return (
    <main className="min-h-screen">
      <Navigation onBookClick={handleBookClick} />
      <HeroSection onBookClick={handleBookClick} />
      <TreatmentsSection onBookClick={handleBookClick} />
      <ResultsSection />
      <ProvidersSection />
      <TestimonialsSection />
      <Footer onBookClick={handleBookClick} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  )
}
