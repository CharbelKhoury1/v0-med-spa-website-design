"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export function AboutHero() {
  const router = useRouter()
  const handleBookClick = () => {
    router.push("/book")
  }

  return (
    <>
      <Navigation onBookClick={handleBookClick} />
      <div className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium uppercase tracking-[0.2em] text-xs mb-4 block">
              Our Legacy
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-6">
              Precision Meets <span className="text-primary italic">Artistry</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Based in the heart of Beirut, Verdun Clinic is dedicated to the philosophy of Natural Refinement—where medical excellence and aesthetic vision come together.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  )
}
