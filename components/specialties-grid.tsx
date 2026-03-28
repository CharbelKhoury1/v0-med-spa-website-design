"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Syringe, Scissors, Sparkles, Stethoscope, HeartPulse } from "lucide-react"

const specialties = [
  {
    title: "Facial Surgery",
    description: "Expert rhinoplasty and facial refinement for a natural, balanced look and improved function.",
    icon: Scissors,
    color: "from-primary/20 to-primary/5 text-primary",
  },
  {
    title: "Medical Aesthetics",
    description: "Look your best with fillers, neurotoxins, and regenerative treatments like Sculptra.",
    icon: Syringe,
    color: "from-accent/20 to-accent/5 text-accent",
  },
  {
    title: "Skin Rejuvenation",
    description: "Advanced mesotherapy and skincare treatments to restore your skin's youthful glow.",
    icon: Sparkles,
    color: "from-primary/20 to-primary/5 text-primary",
  },
  {
    title: "ENT Services",
    description: "Comprehensive care for your breathing, sinus and throat health with surgical precision.",
    icon: Stethoscope,
    color: "from-accent/20 to-accent/5 text-accent",
  },
  {
    title: "Natural Refinement",
    description: "Our signature philosophy combining Mediterranean aesthetics with French precision.",
    icon: HeartPulse,
    color: "from-primary/20 to-primary/5 text-primary",
  },
]

export function SpecialtiesGrid() {
  return (
    <section id="specialties" className="py-12 md:py-16 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Your Health & Beauty, Tailored</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our specialized care options, from quick skin treatments to expert medical consultations.
          </p>
        </div>

        <div className="flex overflow-x-auto sm:grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 pb-4 sm:pb-0 snap-x snap-mandatory scrollbar-hide">
          {specialties.map((item, index) => (
            <Link 
              key={item.title} 
              href="/treatments" 
              className="block outline-none flex-shrink-0 w-[280px] sm:w-auto snap-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-xl transition-all h-full text-center group relative overflow-hidden"
              >
                {/* Visual Icon Container */}
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} rotate-3 group-hover:rotate-6 transition-transform duration-500`} />
                  <div className="absolute inset-0 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/50 shadow-inner flex items-center justify-center -rotate-3 group-hover:-rotate-0 transition-transform duration-500">
                    <item.icon className="w-9 h-9 opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                
                <h3 className="text-base font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
