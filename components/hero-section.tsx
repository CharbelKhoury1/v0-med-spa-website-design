"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Magnetic } from "@/components/nano-banana/magnetic"
import { Jelly } from "@/components/nano-banana/jelly"
import { Counter } from "@/components/nano-banana/counter"

import { useRouter } from "next/navigation"
import Image from "next/image"

interface HeroSectionProps {
  onBookClick?: () => void
}

export function HeroSection({ onBookClick }: HeroSectionProps) {
  const router = useRouter()
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-32 pb-12 sm:pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest mb-6 mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Featured in FORBES Middle East
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-extrabold text-foreground leading-[1.1] mb-6 sm:mb-8">
              The Art of <br />
              <span className="text-primary italic font-light drop-shadow-sm">Natural Refinement</span>
            </h1>
            
            <p className="text-muted-foreground text-base sm:text-lg md:text-2xl max-w-xl mb-8 sm:mb-10 leading-relaxed font-medium mx-auto lg:mx-0">
              Expert care for your face and health. Led by Dr. Maya Adhami, we specialize in precise surgical and aesthetic treatments that help you look and feel your best.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
              <Magnetic strength={0.3}>
                <Button 
                  size="lg" 
                  onClick={onBookClick || (() => router.push("/book"))}
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
                onClick={() => {
                  const element = document.getElementById('specialties')
                  if (element) {
                    const offset = 80
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY
                    window.scrollTo({
                      top: elementPosition - offset,
                      behavior: "smooth"
                    })
                  }
                }}
              >
                View Specialties
              </Button>
            </div>

            <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-6 sm:gap-8 justify-center lg:justify-start">
               <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                    <Counter to={15} suffix="+" duration={2} />
                  </p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest font-bold">Years Experience</p>
               </div>
               <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                    <Counter to={92} suffix="%" duration={2} />
                  </p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest font-bold">Rec. Rate</p>
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
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-black/5 bg-secondary/20">
              <Image
                src="/dr-maya-adhami.png"
                alt="Dr. Maya Adhami - ENT & Facial Plastic Surgeon"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>

            {/* Floating Review Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 sm:-bottom-10 left-4 sm:-left-10 bg-white p-4 sm:p-6 rounded-2xl sm:rounded-[2.5rem] shadow-2xl border border-black/5 max-w-[200px] sm:max-w-[260px] z-20"
            >
              <div className="flex items-center gap-2 mb-3">
                 <div className="flex text-accent">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                 </div>
                 <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none">92% Rec. Rate</span>
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
