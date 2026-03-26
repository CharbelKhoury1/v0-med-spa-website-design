"use client"

import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Clock, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "All Services" },
  { id: "surgery", label: "Surgery" },
  { id: "aesthetics", label: "Aesthetics" },
  { id: "ent", label: "ENT Medical" },
]

const treatments = [
  {
    id: 1,
    slug: "rhinoplasty",
    name: "Rhinoplasty",
    category: "surgery",
    description: "Expert nose surgery to improve your breathing and give your face a natural, balanced look.",
    duration: "2-4 hours",
    price: "Consultation required",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80",
    popular: true,
    hasRealResults: true,
  },
  {
    id: 2,
    slug: "sculptra-collagen",
    name: "Sculptra & Fillers",
    category: "aesthetics",
    description: "Restore your skin's natural volume and glow with advanced collagen-boosting treatments.",
    duration: "45 min",
    price: "From $350",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
    popular: true,
    hasRealResults: true,
  },
  {
    id: 3,
    slug: "light-eyes-ultra",
    name: "Light Eyes Ultra",
    category: "aesthetics",
    description: "Refresh your eyes. Our treatment targets dark circles, puffiness, and fine lines for a brighter look.",
    duration: "30 min",
    price: "From $200",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    popular: true,
    hasRealResults: false,
  },
  {
    id: 4,
    slug: "ent-consultation",
    name: "ENT Medical Services",
    category: "ent",
    description: "Professional medical care for your ear, nose, and throat health, led by Dr. Maya Adhami.",
    duration: "30 min",
    price: "Consultation required",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    popular: false,
    hasRealResults: false,
  },
  {
    id: 5,
    slug: "botox-dysport",
    name: "Botox & Dysport",
    category: "aesthetics",
    description: "Softens wrinkles and lifts your brows for a naturally refreshed and younger look.",
    duration: "30 min",
    price: "From $250",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
    popular: true,
    hasRealResults: false,
  },
  {
    id: 6,
    slug: "dermal-fillers",
    name: "Dermal Fillers",
    category: "aesthetics",
    description: "Gently add volume and shape to your lips, cheeks, or jawline for a natural, refined finish.",
    duration: "45 min",
    price: "From $400",
    image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&q=80",
    popular: true,
    hasRealResults: true,
  },
]

interface TreatmentsSectionProps {
  onBookClick: () => void
  isFull?: boolean
}

export function TreatmentsSection({ onBookClick, isFull = false }: TreatmentsSectionProps) {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredTreatments = treatments.filter(
    (t) => activeCategory === "all" || t.category === activeCategory
  )

  const displayedTreatments = isFull ? filteredTreatments : treatments.slice(0, 3)

  return (
    <section id="treatments" className={cn("py-14 md:py-24 bg-secondary/30", !isFull && "border-b")}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
            Our Expertise
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-6">
             Our <span className="text-accent italic">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {isFull 
              ? "Discover our complete range of treatments, each tailored to reveal your most radiant, healthy self."
              : "A glimpse into our curated selection of aesthetic and medical treatments."
            }
          </p>
        </motion.div>

        {/* Category Filter - Only show on full page */}
        {isFull && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 md:mb-12"
          >
            <div className="flex overflow-x-auto gap-3 pb-2 md:flex-wrap md:justify-center md:overflow-visible scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "flex-shrink-0 px-5 py-2.5 sm:px-8 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300",
                    activeCategory === cat.id
                      ? "bg-foreground text-background shadow-xl scale-105"
                      : "bg-background text-muted-foreground hover:bg-muted"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Treatments Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence mode="popLayout">
            {displayedTreatments.map((treatment, index) => (
              <motion.div
                key={treatment.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-base hover:shadow-2xl transition-all duration-500 border border-black/5 flex flex-col h-full"
              >
                {/* Main clickable area */}
                <Link href={`/treatments/${treatment.slug}`} className="absolute inset-0 z-0" aria-label={`View ${treatment.name} details`} />
                
                <div className="relative aspect-[3/2] overflow-hidden z-10 pointer-events-none">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {treatment.popular && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium flex items-center gap-1">
                      <Sparkles className="h-3 w-3" />
                      Popular
                    </div>
                  )}
                  {treatment.hasRealResults && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-foreground/85 text-background text-xs font-semibold tracking-wide backdrop-blur-sm">
                      Real Results
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-1 z-10">
                  <div className="flex items-center justify-between mb-3 pointer-events-none">
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {treatment.name}
                    </h3>
                    <span className="text-lg font-semibold text-primary">
                      {treatment.price}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-2 pointer-events-none">
                    {treatment.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="text-sm font-medium text-primary hover:underline flex items-center gap-1 group/learn pointer-events-none">
                      Learn More
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/learn:translate-x-0.5" />
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onBookClick();
                      }}
                      className="relative z-20 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-4 h-9"
                    >
                      Book
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {!isFull && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center mt-12"
          >
            <Link href="/treatments">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-12 h-14 font-bold text-lg"
              >
                Check Full Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
