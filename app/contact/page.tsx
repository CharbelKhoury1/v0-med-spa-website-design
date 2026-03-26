"use client"

import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { FAQSection } from "@/components/faq-section"
import { LocationSection } from "@/components/location-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const router = useRouter()
  const handleBookClick = () => {
    router.push("/book")
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation onBookClick={handleBookClick} />
      <div className="pt-20">
        <LocationSection onBookClick={handleBookClick} />
        <FAQSection onBookClick={handleBookClick} />
        <NewsletterSection />
      </div>
      <Footer onBookClick={handleBookClick} />
    </main>
  )
}
