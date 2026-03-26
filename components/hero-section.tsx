"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Magnetic } from "@/components/nano-banana/magnetic"
import { Jelly } from "@/components/nano-banana/jelly"
import { Counter } from "@/components/nano-banana/counter"

interface HeroSectionProps {
  onBookClick: () => void
}

export function HeroSection({ onBookClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Featured in FORBES Middle East
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl font-extrabold text-foreground leading-[1.1] mb-8">
              Verdun Clinic <br />
              <span className="text-primary italic font-light drop-shadow-sm">by Dr. Maya Adhami</span>
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-2xl max-w-xl mb-10 leading-relaxed font-medium">
              Expert ENT and Facial Plastic Surgeon. Specializing in high-end facial medical aesthetics, surgical precision, and restorative beauty in Beirut.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Magnetic strength={0.3}>
                <Button 
                  size="lg" 
                  onClick={onBookClick}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 h-16 rounded-full shadow-2xl transition-all duration-300 font-bold group"
                  suppressHydrationWarning
                >
                  Book Your Consultation
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1" />
                </Button>
              </Magnetic>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary/20 hover:border-primary text-foreground text-lg px-10 h-16 rounded-full font-bold group"
              >
                View Specialties
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-8">
               <div className="text-center">
                  <p className="text-3xl font-bold text-foreground mb-1">
                    <Counter to={15} suffix="+" duration={2} />
                  </p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Years Experience</p>
               </div>
               <div className="w-px h-10 bg-border hidden sm:block opacity-50" />
               <div className="text-center">
                  <p className="text-3xl font-bold text-foreground mb-1">
                    <Counter to={92} suffix="%" duration={2} />
                  </p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Recommendation</p>
               </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-black/5">
              <img
                src="/hero_radiant_beauty_1774474166576.png"
                alt="Dr. Maya Adhami - Radiant Beauty"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>

            {/* Floating Review Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-[2.5rem] shadow-2xl border border-black/5 max-w-[260px] z-20"
            >
              <div className="flex items-center gap-2 mb-3">
                 <div className="flex text-accent">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                 </div>
                 <span className="text-xs font-bold text-muted-foreground">92% RECOMMENDATION</span>
              </div>
              <p className="text-sm text-foreground font-medium italic leading-relaxed">
                &quot;The precision of Dr. Maya&apos;s work is unmatched. A true artist of facial aesthetics.&quot;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
