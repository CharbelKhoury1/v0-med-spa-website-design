"use client"

import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Check, Clock, Shield, Sparkles, ArrowLeft, ArrowRight, Star, Info, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { StickyCTA } from "@/components/sticky-cta"
import Link from "next/link"

const treatmentData: Record<string, any> = {
  "rhinoplasty": {
    name: "Rhinoplasty",
    tagline: "Surgical precision meets artistic vision",
    description: "Dr. Maya Adhami's signature rhinoplasty combines her ENT surgical expertise with aesthetic mastery, trained at the University of Paris Descartes. Each procedure is meticulously planned to achieve natural harmony while respecting your unique facial structure.",
    price: "Consultation Required",
    duration: "1-3 hours",
    benefits: [
      "Natural-looking, harmonious results",
      "Combines functional and aesthetic correction",
      "Paris-trained surgical precision",
      "Customized to your facial anatomy",
      "Improved breathing where applicable"
    ],
    process: [
      { step: "Consultation & 3D Imaging", detail: "Dr. Maya performs a thorough facial analysis and uses digital imaging to visualize your ideal outcome." },
      { step: "Surgical Procedure", detail: "Performed under general anesthesia with meticulous attention to both form and function." },
      { step: "Recovery & Follow-Up", detail: "Dedicated post-operative care with regular follow-ups to ensure optimal healing and results." }
    ],
    expectedResults: "Initial results are visible after 2-3 weeks once swelling subsides, with the final refined result emerging over 6-12 months. Dr. Maya's patients consistently achieve natural, balanced outcomes.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&h=600&fit=crop"
  },
  "botox-dysport": {
    name: "Botox & Dysport",
    tagline: "Smooth fine lines with precision and artistry",
    description: "Neuromodulators like Botox and Dysport are FDA-approved treatments that temporarily reduce the appearance of facial wrinkles by relaxing the underlying muscles. Our expert providers focus on natural-looking results that preserve your unique expressions.",
    price: "Starting at $14/unit",
    duration: "30 minutes",
    benefits: [
      "Smooths forehead lines and crow's feet",
      "Prevents new wrinkles from forming",
      "Natural-looking rejuvenation",
      "Minimal discomfort, no downtime",
      "FDA-approved safety profile"
    ],
    process: [
      { step: "Consultation", detail: "We analyze your facial anatomy and discuss your aesthetic goals." },
      { step: "Precision Mapping", detail: "Identifying exact injection points for optimal, natural results." },
      { step: "Injection", detail: "Tiny injections that feel like a quick pinch, lasting only a few minutes." }
    ],
    expectedResults: "Results typically begin to appear within 3-5 days, with full effect at 14 days. Most treatments last 3-4 months depending on the area treated and individual metabolism.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&h=600&fit=crop"
  }
}

export default function TreatmentDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.id as string
  
  const treatment = treatmentData[slug] || {
    name: "Advanced Treatment",
    tagline: "Science-backed beauty solutions",
    description: "Experience the latest in medical aesthetics with our precision-engineered treatments.",
    price: "Consultation required",
    duration: "Varies",
    benefits: ["Professional care", "Customized plans", "Latest technology"],
    process: [{ step: "Consultation", detail: "Personalized assessment of your needs." }],
    expectedResults: "Results vary by individual and treatment type.",
    image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=1200&h=600&fit=crop"
  }

  const handleBookClick = () => {
    const phoneNumber = "96171230515"
    const message = encodeURIComponent("Hello! I'd like to book a consultation at Verdun Clinic with Dr. Maya Adhami.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation onBookClick={handleBookClick} />

      <main className="pt-24">
        {/* Treatment Hero */}
        <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img
            src={treatment.image}
            alt={treatment.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          
          <div className="absolute inset-0 flex flex-col justify-end container mx-auto px-4 pb-12 sm:pb-20">
            <Link href="/#treatments" className="flex items-center gap-2 text-primary font-medium mb-6 hover:translate-x-1 transition-transform inline-flex">
              <ArrowLeft className="h-4 w-4" />
              Back to Menu
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground mb-4">
                {treatment.name}
              </h1>
              <p className="text-muted-foreground text-xl md:text-2xl max-w-2xl italic font-serif opacity-80">
                &ldquo;{treatment.tagline}&rdquo;
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Info Bar */}
        <div className="bg-primary/5 border-y border-primary/10 py-6">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Price</p>
              <p className="font-semibold text-primary">{treatment.price}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Time</p>
              <p className="font-semibold">{treatment.duration}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Downtime</p>
              <p className="font-semibold">Minimal to None</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Safety</p>
              <p className="font-semibold">FDA Approved</p>
            </div>
          </div>
        </div>

        {/* Detailed Info */}
        <section className="py-20">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">About the Procedure</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {treatment.description}
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <ul className="space-y-4">
                {treatment.benefits.map((benefit: string, i: number) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 sm:p-12 shadow-xl border border-border"
            >
              <h2 className="font-serif text-3xl font-semibold mb-8">The Process</h2>
              <div className="space-y-10">
                {treatment.process.map((step: any, i: number) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {i + 1}
                      </div>
                      {i < treatment.process.length - 1 && (
                        <div className="w-0.5 flex-1 bg-border my-2" />
                      )}
                    </div>
                    <div className="pb-4">
                      <h4 className="font-semibold text-lg mb-2">{step.step}</h4>
                      <p className="text-muted-foreground">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Expected Results */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">What to Expect</h2>
              <p className="text-muted-foreground text-lg italic">
                {treatment.expectedResults}
              </p>
            </div>
            
            {/* Treatment Slider or Image */}
            <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
              <BeforeAfterSlider 
                beforeImage="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&fit=crop&sat=-100" 
                afterImage="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&fit=crop"
                beforeLabel="Before Treatment"
                afterLabel="After 4 Weeks"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-primary-foreground relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 bg-background/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                  Take the first step
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-6">
                  Ready to Restore Your Natural Glow?
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
                  Schedule your personalized consultation for {treatment.name} today. 
                  Our specialists are ready to help you achieve your beauty goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={handleBookClick}
                    size="lg"
                    className="bg-background text-foreground hover:bg-background/90 px-10 py-7 text-lg rounded-full"
                  >
                    Book Appointment Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-background text-background hover:bg-background/10 px-10 py-7 text-lg rounded-full"
                  >
                    Questions? Text Us
                    <MessageCircle className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onBookClick={handleBookClick} />
      <StickyCTA onBookClick={handleBookClick} />
    </div>
  )
}
