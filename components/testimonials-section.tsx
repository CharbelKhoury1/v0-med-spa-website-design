"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star, Instagram, Facebook, Globe } from "lucide-react"
import { cn } from "@/lib/utils"

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
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
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

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 6000)
    return () => clearInterval(timer)
  }, [activeIndex])

  return (
    <section id="testimonials" className="py-14 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-widest text-sm">
            Client Stories
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-3 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real stories from real people who have experienced the transformative 
            care at Verdun Clinic.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Quote icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Quote className="w-8 h-8 text-primary" />
            </div>
          </div>

          <div className="bg-card rounded-3xl p-6 sm:p-8 md:p-12 pt-12 sm:pt-14 shadow-lg relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={cn(
                        "w-6 h-6",
                        star <= testimonials[activeIndex].rating
                          ? "text-accent fill-accent"
                          : "text-muted fill-muted"
                      )}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="font-serif text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto">
                  &quot;{testimonials[activeIndex].text}&quot;
                </p>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 ring-4 ring-primary/20">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-semibold text-foreground">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-sm text-primary">
                    {testimonials[activeIndex].treatment}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {testimonials[activeIndex].date}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary hover:bg-muted flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary hover:bg-muted flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1)
                  setActiveIndex(index)
                }}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  index === activeIndex
                    ? "bg-primary w-8"
                    : "bg-muted hover:bg-muted-foreground/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 md:mt-24 border-t border-primary/10 pt-12 md:pt-16"
        >
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-24">
            {[
              { name: "Google", icon: Globe },
              { name: "Instagram", icon: Instagram },
              { name: "Facebook", icon: Facebook }
            ].map((platform) => (
              <motion.div 
                key={platform.name} 
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative flex flex-col items-center gap-2"
              >
                <div className="flex items-center gap-2 mb-1">
                  <platform.icon className="w-5 h-5 text-primary/40 group-hover:text-primary transition-colors" />
                  <div className="flex text-amber-400 group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)] transition-all">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="font-serif text-lg md:text-xl font-bold text-foreground/80 group-hover:text-primary transition-colors">
                  {platform.name}
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-black bg-primary/10 text-primary px-2 py-0.5 rounded-full uppercase tracking-tighter">
                    5.0
                  </span>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-extrabold">VERIFIED</span>
                </div>
                
                {/* Subtle glow on hover */}
                <div className="absolute -inset-4 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
