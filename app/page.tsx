"use client"

import { useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WhyChooseUsSection } from "@/components/why-choose-us"
import { TreatmentsSection } from "@/components/treatments-section"
import { SpecialOffersSection, PromoBanner } from "@/components/special-offers"
import { ResultsSection } from "@/components/before-after-slider"
import { ProvidersSection } from "@/components/providers-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { LocationSection } from "@/components/location-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { AboutDoctorSection } from "@/components/about-doctor"
import { SpecialtiesGrid } from "@/components/specialties-grid"
import { StickyCTA } from "@/components/sticky-cta"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  // Smooth scroll behavior
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')
      if (anchor) {
        e.preventDefault()
        const href = anchor.getAttribute("href")
        if (href && href !== "#") {
          const element = document.querySelector(href)
          if (element) {
            const offset = 80 // Account for fixed header
            const elementPosition = element.getBoundingClientRect().top + window.scrollY
            window.scrollTo({
              top: elementPosition - offset,
              behavior: "smooth"
            })
          }
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  const handleBookClick = () => {
    const phoneNumber = "96171230515"
    const message = encodeURIComponent("Hello! I'd like to book a consultation at Verdun Clinic with Dr. Maya Adhami.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <main className="min-h-screen scroll-smooth">
      <Navigation onBookClick={handleBookClick} />
      <HeroSection onBookClick={handleBookClick} />
      <AboutDoctorSection />
      <SpecialtiesGrid />
      <WhyChooseUsSection />
      <TreatmentsSection onBookClick={handleBookClick} />
      <SpecialOffersSection onBookClick={handleBookClick} />
      <ResultsSection />
      <ProvidersSection />
      <TestimonialsSection />
      <FAQSection onBookClick={handleBookClick} />
      <LocationSection onBookClick={handleBookClick} />
      <NewsletterSection />
      <Footer onBookClick={handleBookClick} />
      <PromoBanner onBookClick={handleBookClick} />
      <StickyCTA onBookClick={handleBookClick} />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  )
}
