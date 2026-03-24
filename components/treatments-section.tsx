"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Clock, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "All Treatments" },
  { id: "facial", label: "Facial" },
  { id: "body", label: "Body" },
  { id: "injectables", label: "Injectables" },
  { id: "laser", label: "Laser" },
]

const treatments = [
  {
    id: 1,
    name: "HydraFacial Signature",
    category: "facial",
    description: "Deep cleansing, extraction, and hydration using patented technology for instantly glowing skin.",
    duration: "60 min",
    price: "$199",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop",
    popular: true,
  },
  {
    id: 2,
    name: "Botox & Dysport",
    category: "injectables",
    description: "Precision injections to smooth fine lines and wrinkles for a refreshed, natural appearance.",
    duration: "30 min",
    price: "$14/unit",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=400&fit=crop",
    popular: true,
  },
  {
    id: 3,
    name: "Laser Skin Resurfacing",
    category: "laser",
    description: "Advanced fractional laser treatment to improve texture, tone, and reduce signs of aging.",
    duration: "45 min",
    price: "$450",
    image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=600&h=400&fit=crop",
    popular: false,
  },
  {
    id: 4,
    name: "Dermal Fillers",
    category: "injectables",
    description: "Restore volume and contour to lips, cheeks, and jawline with premium hyaluronic acid fillers.",
    duration: "45 min",
    price: "$650",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
    popular: true,
  },
  {
    id: 5,
    name: "Body Contouring",
    category: "body",
    description: "Non-invasive fat reduction and skin tightening for a sculpted silhouette without surgery.",
    duration: "60 min",
    price: "$800",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop",
    popular: false,
  },
  {
    id: 6,
    name: "Chemical Peel",
    category: "facial",
    description: "Medical-grade peels to reveal brighter, smoother skin by removing damaged outer layers.",
    duration: "30 min",
    price: "$175",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop",
    popular: false,
  },
]

interface TreatmentsSectionProps {
  onBookClick: () => void
}

export function TreatmentsSection({ onBookClick }: TreatmentsSectionProps) {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredTreatments = treatments.filter(
    (t) => activeCategory === "all" || t.category === activeCategory
  )

  return (
    <section id="treatments" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-widest text-sm">
            Our Services
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-4">
            Treatment Menu
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our curated selection of advanced aesthetic treatments, 
            each tailored to help you achieve your beauty goals.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-card text-muted-foreground hover:bg-muted"
              )}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Treatments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredTreatments.map((treatment, index) => (
              <motion.div
                key={treatment.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
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
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {treatment.name}
                    </h3>
                    <span className="text-lg font-semibold text-primary">
                      {treatment.price}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {treatment.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {treatment.duration}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={onBookClick}
                      className="text-primary hover:text-primary/80 hover:bg-primary/5 group/btn"
                    >
                      Book Now
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8"
          >
            View Full Treatment Menu
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
