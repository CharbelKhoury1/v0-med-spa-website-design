"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Jennifer M.",
    treatment: "HydraFacial & Botox",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    text: "I've been coming to Serene Aesthetics for over two years now, and I couldn't be happier with my results. Dr. Mitchell really listens to what I want and always delivers natural-looking results. My friends keep asking what my secret is!",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Michael T.",
    treatment: "Laser Skin Resurfacing",
    image: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    text: "As a guy, I was a bit nervous about my first visit, but the team made me feel completely comfortable. The laser treatment has completely transformed my skin. Worth every penny!",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Sarah L.",
    treatment: "Dermal Fillers",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    text: "Emma is absolutely amazing! She took the time to explain everything and the results are so subtle and natural. I finally have the lip volume I've always wanted without looking overdone.",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "Rebecca K.",
    treatment: "Chemical Peel Series",
    image: "https://i.pravatar.cc/150?img=9",
    rating: 5,
    text: "After struggling with acne scars for years, I finally found a solution. The chemical peel series has made such a difference in my skin texture. I feel confident going out without makeup now!",
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
    <section id="testimonials" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-widest text-sm">
            Client Stories
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real stories from real people who have experienced the transformative 
            care at Serene Aesthetics.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Quote icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Quote className="w-8 h-8 text-primary" />
            </div>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-12 pt-14 shadow-lg relative overflow-hidden">
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

                <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60"
        >
          {["Google", "Yelp", "RealSelf", "Facebook"].map((platform) => (
            <div key={platform} className="text-center">
              <p className="font-semibold text-foreground">{platform}</p>
              <p className="text-sm text-muted-foreground">5.0 Rating</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
