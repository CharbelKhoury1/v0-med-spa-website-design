"use client"

import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { ResultsSection } from "@/components/before-after-slider"
import { Footer } from "@/components/footer"

export default function ResultsPage() {
  const router = useRouter()
  const handleBookClick = () => {
    router.push("/book")
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation onBookClick={handleBookClick} />
      <div className="pt-20">
        <ResultsSection />
      </div>
      <Footer onBookClick={handleBookClick} />
    </main>
  )
}
