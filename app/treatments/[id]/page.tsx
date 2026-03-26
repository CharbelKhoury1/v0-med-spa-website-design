"use client"

import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Check, ArrowLeft } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import Link from "next/link"

const treatmentData: Record<string, any> = {
  "rhinoplasty": {
    name: "Rhinoplasty",
    tagline: "Natural results, expert care",
    description:
      "Dr. Maya Adhami combines her expert medical training with an eye for beauty. Every nose surgery is carefully planned to give you a natural look that fits your face perfectly and helps you breathe better.",
    price: "Consultation Required",
    duration: "1-3 hours",
    benefits: [
      "Natural-looking results",
      "Expert surgical care",
      "Customized for your face",
      "Better breathing",
      "Personalized follow-up care",
    ],
    process: [
      {
        step: "Consultation & 3D Imaging",
        detail:
          "Dr. Maya looks at your facial structure and uses 3D images to show you how your results will look.",
      },
      {
        step: "The Procedure",
        detail:
          "A precise surgery focused on both how your nose looks and how it functions.",
      },
      {
        step: "Recovery & Check-ups",
        detail:
          "We stick by you throughout your healing with regular check-ins to ensure the best results.",
      },
    ],
    expectedResults:
      "You'll start seeing results in 2-3 weeks as swelling goes down. The final, natural look will fully emerge over several months. Our patients love how balanced and refined they look.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&h=600&fit=crop",
    results: {
      beforeImage: "/results/rhino-before.png",
      afterImage: "/results/rhino-after.png",
      beforeLabel: "Before",
      afterLabel: "After",
    },
  },
  "botox-dysport": {
    name: "Botox & Dysport",
    tagline: "Refreshed and natural-looking skin",
    description:
      "Botox and Dysport are safe, quick treatments that help soften wrinkles by relaxing facial muscles. We focus on giving you a refreshed, younger look while keeping your natural expressions.",
    price: "From $250",
    duration: "30 minutes",
    benefits: [
      "Softens fine lines and wrinkles",
      "Helps prevent new lines",
      "Quick with no downtime",
      "Naturally refreshed look",
      "Safe and FDA-approved",
    ],
    process: [
      {
        step: "Consultation",
        detail: "We discuss your goals and look at your skin to create a plan.",
      },
      {
        step: "Mapping",
        detail:
          "We mark the exact spots to treat for the most natural-looking results.",
      },
      {
        step: "Quick Treatment",
        detail: "Small, gentle injections that only take a few minutes.",
      },
    ],
    expectedResults:
      "You'll start to see your skin smoothing out in 3-5 days, with full results in about 2 weeks. The effect usually lasts 3-4 months.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&h=600&fit=crop",
  },
  "sculptra-collagen": {
    name: "Sculptra & Fillers",
    tagline: "Restore your skin's youthful glow",
    description:
      "Sculptra is a long-lasting collagen stimulator that works deep within the skin. It gradually replaces lost collagen for a natural, youthful look that can last up to two years.",
    price: "From $350",
    duration: "45 minutes",
    benefits: [
      "Naturally restores lost volume",
      "Stimulates your body's collagen",
      "Long-lasting, gradual results",
      "Improves skin texture",
      "Subtle and natural-looking",
    ],
    process: [
      {
        step: "Personal Assessment",
        detail:
          "We evaluate your facial structure to determine the target areas.",
      },
      {
        step: "Treatment Plan",
        detail:
          "A series of injections planned over several weeks for gradual improvement.",
      },
      {
        step: "Application",
        detail: "Precise injections focused on deep hydration and volume.",
      },
    ],
    expectedResults:
      "Results appear gradually over several weeks. Your skin will feel firmer and more voluminous as your own collagen builds back up. Results can last up to 24 months.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&h=600&fit=crop",
    results: {
      beforeImage: "/results/fillers-before.png",
      afterImage: "/results/fillers-after.png",
      beforeLabel: "Before",
      afterLabel: "After",
    },
  },
  "light-eyes-ultra": {
    name: "Light Eyes Ultra",
    tagline: "Brighten and refresh your eyes",
    description:
      "A specialized cocktail of antioxidants, vitamins, and minerals designed to treat the delicate skin around the eyes. Perfect for dark circles, puffiness, and fine wrinkles.",
    price: "From $200",
    duration: "30 minutes",
    benefits: [
      "Reduces dark circles",
      "Minimizes eye puffiness",
      "Softens fine lines",
      "Brightens the orbital area",
      "Gentle and non-invasive",
    ],
    process: [
      {
        step: "Analysis",
        detail: "We check for the cause of dark circles or puffiness.",
      },
      {
        step: "Treatment",
        detail: "Tiny, gentle mesotherapy injections around the eyes.",
      },
      { step: "Glow", detail: "Apply a soothing cream and sun protection." },
    ],
    expectedResults:
      "You will notice a brighter, more 'awake' look in just a few days. For best results, a series of 3-4 sessions is often recommended.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=600&fit=crop",
  },
  "ent-consultation": {
    name: "ENT Medical Services",
    tagline: "Expert care for your health",
    description:
      "Comprehensive medical services for ear, nose, and throat conditions. Led by Dr. Maya Adhami, we focus on accurate diagnosis and personalized treatment plans for your health.",
    price: "Consultation Required",
    duration: "30 minutes",
    benefits: [
      "Board-certified expertise",
      "Advanced diagnostic tools",
      "Personalized medical plans",
      "Focus on long-term health",
      "Comfortable medical environment",
    ],
    process: [
      {
        step: "Initial Check-up",
        detail:
          "A thorough examination of your ear, nose, or throat health.",
      },
      {
        step: "Diagnostics",
        detail:
          "If needed, advanced tests to identify the root cause of symptoms.",
      },
      {
        step: "Care Plan",
        detail:
          "A detailed discussion on the best path forward for your health.",
      },
    ],
    expectedResults:
      "We aim for long-term health and clear communication about your condition and the next steps in your care.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=600&fit=crop",
  },
  "dermal-fillers": {
    name: "Dermal Fillers",
    tagline: "Refine your features naturally",
    description:
      "Add soft, natural volume to your lips, cheeks, or jawline. We use only the highest quality hyaluronic acid fillers to ensure natural results that move with your face.",
    price: "From $400",
    duration: "45 minutes",
    benefits: [
      "Natural-looking volume",
      "Safe and dissolvable",
      "Immediate results",
      "Enhances natural features",
      "Minimal downtime",
    ],
    process: [
      {
        step: "Goal Setting",
        detail: "Discussing exactly where you want to add volume or shape.",
      },
      {
        step: "Precision Injection",
        detail: "Carefully placing filler to achieve harmony and balance.",
      },
      {
        step: "Aftercare",
        detail: "Ice and cooling pads to minimize swelling.",
      },
    ],
    expectedResults:
      "Results are immediate. Any slight swelling usually goes down within 48-72 hours, leaving you with a refined, natural look.",
    image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=1200&h=600&fit=crop",
    results: {
      beforeImage: "/results/jawline-before.png",
      afterImage: "/results/jawline-after.png",
      beforeLabel: "Before",
      afterLabel: "After",
    },
  },
}

export default function TreatmentDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.id as string

  const treatment = treatmentData[slug] || {
    name: "Advanced Treatment",
    tagline: "Science-backed beauty solutions",
    description:
      "Experience the latest in medical aesthetics with our precision-engineered treatments.",
    price: "Consultation required",
    duration: "Varies",
    benefits: ["Professional care", "Customized plans", "Latest technology"],
    process: [{ step: "Consultation", detail: "Personalized assessment of your needs." }],
    expectedResults: "Results vary by individual and treatment type.",
    image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=1200&h=600&fit=crop",
  }

  const handleBookClick = () => {
    router.push("/book")
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation onBookClick={handleBookClick} />

      <main className="pt-24">
        <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img
            src={treatment.image}
            alt={treatment.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end container mx-auto px-4 pb-12 sm:pb-20">
            <Link
              href="/#treatments"
              className="flex items-center gap-2 text-primary font-medium mb-6 hover:translate-x-1 transition-transform inline-flex"
            >
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

        <div className="bg-primary/5 border-y border-primary/10 py-6">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                Price
              </p>
              <p className="font-semibold text-primary">{treatment.price}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                Time
              </p>
              <p className="font-semibold">{treatment.duration}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                Downtime
              </p>
              <p className="font-semibold">Minimal to None</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                Safety
              </p>
              <p className="font-semibold">FDA Approved</p>
            </div>
          </div>
        </div>

        <section className="py-20">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                About the Procedure
              </h2>
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

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                What to Expect
              </h2>
              <p className="text-muted-foreground text-lg italic">
                {treatment.expectedResults}
              </p>
            </div>

            {treatment.results ? (
              <div className="max-w-md mx-auto">
                <BeforeAfterSlider
                  beforeImage={treatment.results.beforeImage}
                  afterImage={treatment.results.afterImage}
                  beforeLabel={treatment.results.beforeLabel ?? "Before"}
                  afterLabel={treatment.results.afterLabel ?? "After"}
                  className="aspect-[16/11] sm:aspect-[4/3] rounded-3xl shadow-2xl"
                />
                <p className="text-center text-xs text-muted-foreground mt-3">
                  Drag to compare before & after.
                </p>
              </div>
            ) : (
              <div className="max-w-xl mx-auto rounded-3xl border border-border bg-card p-8 sm:p-10">
                <div className="text-center">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
                    Results Module (Prototype)
                  </p>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                    Real before & after photos will be provided by the clinic
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                    For this prototype, we only display real patient result sets once they’re shared with consent.
                    This section shows exactly where those results will live on the final website.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer onBookClick={handleBookClick} />
    </div>
  )
}

