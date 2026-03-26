"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star, Instagram, Facebook, Globe, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Nadia K.",
    treatment: "Rhinoplasty",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    text: "Dr. Maya is a true artist. My rhinoplasty results are so natural that people can't tell I had surgery. Her precision and attention to detail are unmatched. I traveled from Dubai specifically for her and it was absolutely worth it.",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Rami H.",
    treatment: "Sculptra & Fillers",
    image: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    text: "I was nervous about fillers, but Dr. Adhami made me feel completely at ease. The Sculptra treatment gave me a refreshed, youthful look without anyone guessing I had anything done. Highly recommend Verdun Clinic.",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Sarah M.",
    treatment: "Light Eyes Ultra",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    text: "I struggled with dark circles for years. The Light Eyes Ultra mesotherapy at Verdun Clinic made a remarkable difference after just two sessions. My under-eye area looks brighter and smoother than ever.",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "Layla A.",
    treatment: "Botox & Anti-Aging",
    image: "https://i.pravatar.cc/150?img=9",
    rating: 5,
    text: "The clinic is beautiful and the staff are incredibly professional. Dr. Maya's Botox technique is so precise — I look refreshed, never frozen. I drive from Jounieh every time because no one else compares.",
    date: "1 month ago",
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setActiveIndex((prev) => {
      let next = prev + newDirection
      if (next < 0) next = testimonials.length - 1
      if (next >= testimonials.length) next = 0
      return next
    })
  }

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 8000)
    return () => clearInterval(timer)
  }, [activeIndex])

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary/20 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Star className="w-3 h-3 fill-current" />
            Excellence in Care
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-6">
            Trusted by <span className="text-primary italic">Thousand Patients</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Real experiences from patients who entrusted their health and beauty
            to Dr. Maya Adhami and the Verdun Clinic team.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 }
                }}
                className="grid md:grid-cols-[1fr_1.5fr] gap-0 md:gap-12 bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/5 border border-primary/10"
              >
                <div className="relative h-[300px] md:h-full min-h-[400px]">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/10" />
                  <div className="absolute bottom-8 left-8 text-white md:hidden">
                    <p className="font-bold text-xl">{testimonials[activeIndex].name}</p>
                    <p className="text-sm opacity-80">{testimonials[activeIndex].treatment}</p>
                  </div>
                </div>

                <div className="p-8 sm:p-12 md:p-16 flex flex-col justify-center relative">
                  <div className="hidden md:block absolute top-12 right-16">
                    <Quote className="w-20 h-20 text-primary/5 rotate-180" />
                  </div>

                  <div className="flex items-center gap-1 mb-8">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                    <span className="ml-3 text-sm font-bold text-primary uppercase tracking-widest">5.0 RATING</span>
                  </div>

                  <blockquote className="relative">
                    <p className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground leading-[1.4] mb-10 italic">
                      &ldquo;{testimonials[activeIndex].text}&rdquo;
                    </p>

                    <footer className="flex items-center justify-between border-t border-secondary pt-8">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-bold text-lg md:text-xl text-foreground">
                            {testimonials[activeIndex].name}
                          </p>
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full uppercase">Verified Patient</span>
                        </div>
                        <p className="text-primary font-medium">{testimonials[activeIndex].treatment}</p>
                        <p className="text-xs text-muted-foreground mt-1 uppercase tracking-widest font-bold opacity-50">{testimonials[activeIndex].date}</p>
                      </div>

                      <div className="hidden sm:flex items-center gap-2">
                        <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center font-serif italic text-primary font-bold">
                          VA
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center md:justify-start gap-4 mt-12 px-6">
              <button
                onClick={() => paginate(-1)}
                className="w-14 h-14 rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white flex items-center justify-center transition-all group"
                aria-label="Previous story"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > activeIndex ? 1 : -1)
                      setActiveIndex(index)
                    }}
                    className={cn(
                      "transition-all duration-500 h-1.5 rounded-full",
                      index === activeIndex ? "bg-primary w-12" : "bg-primary/20 w-3 hover:bg-primary/40"
                    )}
                    aria-label={`Go to patient story ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => paginate(1)}
                className="w-14 h-14 rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white flex items-center justify-center transition-all group"
                aria-label="Next story"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-20 border-t border-primary/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center items-center">
            <div className="flex flex-col items-center">
              <div className="flex text-amber-500 mb-2">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-3xl font-bold text-foreground">5.0</p>
              <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1">Google Reviews</p>
            </div>
            <div className="flex flex-col items-center">
              <Instagram className="w-8 h-8 text-primary/40 mb-3" />
              <p className="text-3xl font-bold text-foreground">15k+</p>
              <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1">Instagram Followers</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle2 className="w-8 h-8 text-primary/40 mb-3" />
              <p className="text-3xl font-bold text-foreground">100%</p>
              <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1">Patient Safety Record</p>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="w-8 h-8 text-primary/40 mb-3" />
              <p className="text-3xl font-bold text-foreground">40+</p>
              <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1">Countries Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
