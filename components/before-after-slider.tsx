"use client"

import { useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
      const percent = Math.max(5, Math.min(95, (x / rect.width) * 100))
      setSliderPosition(percent)
    },
    []
  )

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return
      handleMove(e.clientX)
    },
    [isDragging, handleMove]
  )

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return
      handleMove(e.touches[0].clientX)
    },
    [isDragging, handleMove]
  )

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/5] sm:aspect-[4/5] rounded-2xl overflow-hidden cursor-ew-resize select-none touch-manipulation"
      onMouseMove={handleMouseMove}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
    >
      {/* After image (background) */}
      <img
        src={afterImage}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        {/* Handle - larger for touch */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-white shadow-xl flex items-center justify-center touch-manipulation">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 sm:w-3 sm:h-3 text-foreground rotate-180" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <svg className="w-4 h-4 sm:w-3 sm:h-3 text-foreground" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-foreground/80 text-background text-xs font-medium backdrop-blur-sm">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium backdrop-blur-sm">
        {afterLabel}
      </div>
    </div>
  )
}

const results = [
  {
    id: 1,
    treatment: "HydraFacial Series",
    beforeImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&h=625&fit=crop&sat=-100",
    afterImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&h=625&fit=crop",
    description: "4-treatment series for improved texture and radiance",
  },
  {
    id: 2,
    treatment: "Botox & Filler Combo",
    beforeImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=625&fit=crop&sat=-100",
    afterImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=625&fit=crop",
    description: "Natural rejuvenation with strategic placement",
  },
  {
    id: 3,
    treatment: "Laser Skin Resurfacing",
    beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=625&fit=crop&sat=-100",
    afterImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=625&fit=crop",
    description: "Dramatic improvement in skin texture and tone",
  },
]

export function ResultsSection() {
  const [activeResult, setActiveResult] = useState(0)

  return (
    <section id="results" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-widest text-sm">
            Real Results
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-4">
            See the Transformation
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Drag the slider to reveal the remarkable results our clients have achieved 
            with our personalized treatment plans.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto lg:mx-0"
          >
            <BeforeAfterSlider
              beforeImage={results[activeResult].beforeImage}
              afterImage={results[activeResult].afterImage}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
              {results[activeResult].treatment}
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              {results[activeResult].description}
            </p>

            <div className="space-y-3 sm:space-y-4">
              {results.map((result, index) => (
                <button
                  key={result.id}
                  onClick={() => setActiveResult(index)}
                  className={cn(
                    "w-full text-left p-3 sm:p-4 rounded-xl transition-all duration-300 border-2 touch-manipulation active:scale-[0.98]",
                    activeResult === index
                      ? "bg-primary/5 border-primary"
                      : "bg-card border-transparent hover:border-border"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={result.afterImage}
                        alt={result.treatment}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{result.treatment}</h4>
                      <p className="text-sm text-muted-foreground">{result.description}</p>
                    </div>
                    <div
                      className={cn(
                        "w-6 h-6 rounded-full border-2 flex-shrink-0 ml-auto transition-colors",
                        activeResult === index
                          ? "bg-primary border-primary"
                          : "border-muted-foreground"
                      )}
                    >
                      {activeResult === index && (
                        <svg className="w-full h-full text-primary-foreground p-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <p className="text-xs text-muted-foreground mt-6 italic">
              * Individual results may vary. Photos are of actual patients who have consented 
              to the display of their before and after photographs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
