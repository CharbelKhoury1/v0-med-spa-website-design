"use client"

import { motion } from "framer-motion"
import { Check, ArrowLeft, Heart } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import Link from "next/link"
import Image from "next/image"

import { useRouter } from "next/navigation"

export function TreatmentClientContent({ treatment }: { treatment: any }) {
  const router = useRouter()
  
  const handleBookClick = () => {
    router.push("/book")
  }
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation onBookClick={handleBookClick} />

      <main className="pt-24">
        <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <Image
            src={treatment.image}
            alt={treatment.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
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
              <div className="max-w-xl mx-auto rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-lg">
                <div className="text-center">
                  <Heart className="w-10 h-10 text-primary/20 mx-auto mb-4" />
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                    Patient Results Gallery
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                    To respect our patients&apos; privacy and confidentiality, detailed before & after photo galleries are shared during your initial consultation with Dr. Maya Adhami.
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
