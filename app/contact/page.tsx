"use client"

import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { FAQSection } from "@/components/faq-section"
import { LocationSection } from "@/components/location-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  const router = useRouter()
  const handleBookClick = () => {
    router.push("/book")
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation onBookClick={handleBookClick} />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <div className="lg:sticky lg:top-32 pt-8">
              <span className="text-primary font-medium uppercase tracking-[0.2em] text-xs mb-4 block">
                Connect With Us
              </span>
              <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-6">
                Let&apos;s Start Your <br />
                <span className="text-primary italic">Journey</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed mb-8 max-w-lg">
                Whether you have a medical inquiry or want to explore our aesthetic treatments, 
                our team is here to provide exceptional care and clear answers.
              </p>
              
              {/* Trust Indicators */}
              <div className="bg-secondary/30 p-8 rounded-3xl border border-primary/5">
                <p className="text-sm font-bold uppercase tracking-widest text-foreground mb-4 opacity-80">Trusted by over 10,000+ Patients</p>
                <div className="flex flex-wrap gap-8 items-center">
                  <div className="text-center sm:text-left">
                    <p className="text-3xl font-serif font-bold text-primary mb-1">92%</p>
                    <p className="text-[10px] font-bold uppercase tracking-tighter text-muted-foreground">Recommendation Rate</p>
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-3xl font-serif font-bold text-primary mb-1">5.0</p>
                    <p className="text-[10px] font-bold uppercase tracking-tighter text-muted-foreground">Google Review Score</p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>

        <LocationSection onBookClick={handleBookClick} />
        <FAQSection onBookClick={handleBookClick} />
        <NewsletterSection />
      </div>
      <Footer onBookClick={handleBookClick} />
    </main>
  )
}
