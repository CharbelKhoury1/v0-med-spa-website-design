"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useRouter } from "next/navigation"

export default function PrivacyPolicyPage() {
  const router = useRouter()
  const handleBookClick = () => {
    router.push("/book")
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation onBookClick={handleBookClick} />
      
      <div className="pt-32 pb-20 container mx-auto px-4 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-6">
          <p className="text-muted-foreground italic">Last Updated: March 2026</p>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We collect information you provide directly to us when you book an appointment, contact us, or sign up for our newsletter. This may include your name, email address, phone number, and any health-related information you choose to share for treatment purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
              <li>To schedule and manage your appointments.</li>
              <li>To provide you with personalized medical and aesthetic care.</li>
              <li>To communicate with you regarding your treatments.</li>
              <li>To improve our website and patient services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Data Protection</h2>
            <p className="text-muted-foreground leading-relaxed">
              Verdun Clinic takes patient confidentiality seriously. We implement industry-standard security measures to protect your personal and medical information. We do not sell or share your data with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to access, update, or request the deletion of your personal information. If you have any questions or concerns about your data, please contact us at verdunclinic@gmail.com.
            </p>
          </section>
        </div>
      </div>

      <Footer onBookClick={handleBookClick} />
    </main>
  )
}
