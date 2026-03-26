"use client"

import { Navigation } from "@/components/navigation"
import { TreatmentsSection } from "@/components/treatments-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function TreatmentsPage() {
  const handleBookClick = () => {
    const phoneNumber = "96171230515"
    const message = encodeURIComponent("Hello! I'd like to book a consultation at Verdun Clinic with Dr. Maya Adhami.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation onBookClick={handleBookClick} />
      <div className="pt-20">
        <TreatmentsSection onBookClick={handleBookClick} isFull={true} />
      </div>
      <Footer onBookClick={handleBookClick} />
      <ScrollToTop />
    </main>
  )
}
