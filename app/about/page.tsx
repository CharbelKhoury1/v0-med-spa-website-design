import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { AboutDoctorSection } from "@/components/about-doctor"
import { ProvidersSection } from "@/components/providers-section"
import { Footer } from "@/components/footer"
import { AboutHero } from "./about-hero"

export const metadata: Metadata = {
  title: "About Dr. Maya Adhami | ENT & Facial Plastic Surgeon Beirut",
  description: "Learn about Dr. Maya Adhami's background, her French medical training in Paris, and the philosophy of Natural Refinement at Verdun Clinic.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <AboutHero />
      <div className="pt-0">
        <AboutDoctorSection />
        <ProvidersSection />
      </div>
      <Footer />
    </main>
  )
}
