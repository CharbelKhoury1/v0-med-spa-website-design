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
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    rating: 5,
    text: "Dr. Maya is a true artist. My rhinoplasty results are so natural that people can't tell I had surgery. Her precision and attention to detail are unmatched. I traveled from Dubai specifically for her and it was absolutely worth it.",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Rami H.",
    treatment: "Sculptra & Fillers",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 5,
    text: "I was nervous about fillers, but Dr. Adhami made me feel completely at ease. The Sculptra treatment gave me a refreshed, youthful look without anyone guessing I had anything done. Highly recommend Verdun Clinic.",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Sarah M.",
    treatment: "Light Eyes Ultra",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    rating: 5,
    text: "I struggled with dark circles for years. The Light Eyes Ultra mesotherapy at Verdun Clinic made a remarkable difference after just two sessions. My under-eye area looks brighter and smoother than ever.",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "Layla A.",
    treatment: "Botox & Anti-Aging",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&h=400&fit=crop",
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
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
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

  return (
    <section id="testimonials" className="py-12 md:py-24 bg-secondary/10 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <span className="text-primary font-medium uppercase tracking-widest text-sm mb-4 block">
            Client Success Stories
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Trusted by Our Patients
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="relative bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-primary/5 text-center overflow-hidden">
             {/* Decorative quote icon */}
             <div className="absolute -top-4 -right-4 opacity-[0.03]">
               <Quote className="w-48 h-48 rotate-12" />
             </div>

            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <div className="flex items-center justify-center gap-1 mb-8">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <blockquote className="font-serif text-xl sm:text-2xl md:text-2xl text-foreground leading-[1.6] mb-12 italic text-balance">
                  &ldquo;{testimonials[activeIndex].text}&rdquo;
                </blockquote>
                
                <div className="flex flex-col items-center">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 ring-4 ring-primary/10 shadow-lg">
                    <Image
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-lg text-foreground">{testimonials[activeIndex].name}</span>
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-tighter">Verified</span>
                  </div>
                  <p className="text-primary font-medium text-sm">{testimonials[activeIndex].treatment}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary/50 hover:bg-primary hover:text-white flex items-center justify-center transition-all md:-left-5 md:bg-white md:shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary/50 hover:bg-primary hover:text-white flex items-center justify-center transition-all md:-right-5 md:bg-white md:shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1)
                  setActiveIndex(index)
                }}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-primary w-8" : "bg-primary/20 w-3 hover:bg-primary/40"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Simplified Trust Footer */}
        <div className="mt-20 pt-16 border-t border-primary/5">
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center">
            {[
              { label: "Google", score: "5.0", reviews: "500+" },
              { label: "Instagram", score: "15k", reviews: "Followers" },
              { label: "Facebook", score: "4.9", reviews: "Rating" }
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                <p className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{stat.score}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label} {stat.reviews}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
