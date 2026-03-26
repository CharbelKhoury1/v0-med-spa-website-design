"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useRouter } from "next/navigation"

export default function TermsOfServicePage() {
  const router = useRouter()
  const handleBookClick = () => {
    router.push("/book")
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation onBookClick={handleBookClick} />
      
      <div className="pt-32 pb-20 container mx-auto px-4 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-foreground">Terms of Service</h1>
        <div className="prose prose-slate max-w-none space-y-8">
          <p className="text-muted-foreground italic">Effective Date: March 2026</p>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              By using the Verdun Clinic website and services, you agree to the following terms and conditions. These terms govern your access to and use of our website, booking system, and clinical services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Medical Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              The information on this website is for informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Appointment and Cancellation Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We highly value our time and yours. If you need to cancel or reschedule your appointment, please provide at least 24 hours' notice. Failure to do so may result in a cancellation fee.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Accuracy of Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              While we strive for accuracy, Verdun Clinic does not guarantee that medical descriptions, pricing, or other content on this website is error-free, complete, or current. We reserve the right to change information at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms are governed by the laws of Lebanon, and any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts of Beirut.
            </p>
          </section>
        </div>
      </div>

      <Footer onBookClick={handleBookClick} />
    </main>
  )
}
