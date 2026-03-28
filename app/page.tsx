import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WhyChooseUsSection } from "@/components/why-choose-us"
import { TreatmentsSection } from "@/components/treatments-section"
import { Footer } from "@/components/footer"
import { SpecialtiesGrid } from "@/components/specialties-grid"
// import { WhatsAppButton } from "@/components/whatsapp-button"
import { TestimonialsSection } from "@/components/testimonials-section"
import { SmoothScroll } from "@/components/smooth-scroll"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <SmoothScroll />
      <Navigation />
      <HeroSection />
      <SpecialtiesGrid />
      <TreatmentsSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
