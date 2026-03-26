"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Gift, Clock, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SpecialOffersProps {
  onBookClick: () => void
}

const offers = [
  {
    id: 1,
    title: "New Patient Special",
    description: "First-time consultation with Dr. Maya Adhami at a reduced rate",
    discount: "FREE CONSULT",
    code: "VERDUN2026",
    validUntil: "Limited Time",
    bgClass: "bg-gradient-to-br from-primary/20 via-primary/10 to-transparent",
    featured: true,
  },
  {
    id: 2,
    title: "Sculptra Package",
    description: "Book 3 Sculptra sessions and receive the 4th complimentary",
    discount: "BUY 3 GET 1",
    validUntil: "Ongoing",
    bgClass: "bg-gradient-to-br from-accent/20 via-accent/10 to-transparent",
    featured: false,
  },
  {
    id: 3,
    title: "Referral Reward",
    description: "Refer a friend and both receive 15% off your next treatment",
    discount: "15% OFF",
    validUntil: "Ongoing",
    bgClass: "bg-gradient-to-br from-secondary via-secondary/50 to-transparent",
    featured: false,
  },
]

export function SpecialOffersSection({ onBookClick }: SpecialOffersProps) {
  return (
    <section className="py-14 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-widest text-sm">
            Limited Time
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-3 mb-4">
            Special Offers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Take advantage of our exclusive promotions and start your aesthetic 
            journey at special savings.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative p-6 sm:p-8 rounded-2xl border-2 overflow-hidden group",
                offer.featured 
                  ? "border-primary bg-card" 
                  : "border-transparent bg-card"
              )}
            >
              {/* Background decoration */}
              <div className={cn("absolute inset-0", offer.bgClass)} />
              
              {offer.featured && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Gift className="w-7 h-7 text-primary" />
                </div>

                <div className="inline-block px-4 py-1.5 bg-foreground text-background text-sm font-semibold rounded-full mb-4">
                  {offer.discount}
                </div>

                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  {offer.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {offer.description}
                </p>

                {offer.code && (
                  <div className="bg-secondary/80 border border-dashed border-primary/30 px-4 py-2 rounded-lg mb-6 inline-flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Code:</span>
                    <span className="font-mono font-semibold text-foreground">{offer.code}</span>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {offer.validUntil}
                  </div>
                  <Button
                    onClick={onBookClick}
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary/80 hover:bg-primary/5 group/btn"
                  >
                    Claim Offer
                    <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Floating promo banner component
export function PromoBanner({ onBookClick }: SpecialOffersProps) {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      const timer = setTimeout(() => {
        if (!isDismissed) {
          setIsVisible(true)
        }
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isDismissed, mounted])

  if (!mounted || isDismissed || !isVisible) return null

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[55] pointer-events-none"
    >
      <div className="bg-foreground text-background p-4 md:p-6 rounded-2xl shadow-2xl flex items-center gap-4 pointer-events-auto">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
          <Gift className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-background">New Client Special</p>
          <p className="text-sm text-background/70">20% off your first treatment</p>
        </div>
        <Button
          onClick={onBookClick}
          size="sm"
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full flex-shrink-0"
        >
          Book Now
        </Button>
        <button
          onClick={() => setIsDismissed(true)}
          className="text-background/50 hover:text-background p-1"
          aria-label="Dismiss"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  )
}
