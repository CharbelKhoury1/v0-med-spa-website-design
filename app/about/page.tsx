"use client"

import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { AboutDoctorSection } from "@/components/about-doctor"
import { ProvidersSection } from "@/components/providers-section"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const router = useRouter()
  const handleBookClick = () => {
    router.push("/book")
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation onBookClick={handleBookClick} />
      <div className="pt-20">
        <AboutDoctorSection />
        <ProvidersSection />
      </div>
      <Footer onBookClick={handleBookClick} />
    </main>
  )
}
