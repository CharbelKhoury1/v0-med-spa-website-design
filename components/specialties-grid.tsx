"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Syringe, Scissors, Sparkles, Stethoscope, HeartPulse } from "lucide-react"

const specialties = [
  {
    title: "Face & Skin Aesthetics",
    description: "Look your best with fillers, botox, and glow treatments.",
    icon: Syringe,
    color: "from-pink-500/20 to-pink-500/5 text-pink-500",
  },
  {
    title: "Facial Surgery",
    description: "Expert nose and face surgery for a natural, refined look.",
    icon: Scissors,
    color: "from-blue-500/20 to-blue-500/5 text-blue-500",
  },
  {
    title: "Skin Care",
    description: "Keep your skin healthy and clear with medical and cosmetic care.",
    icon: Sparkles,
    color: "from-purple-500/20 to-purple-500/5 text-purple-500",
  },
  {
    title: "Ear, Nose & Throat",
    description: "Professional care for your breathing, hearing, and throat health.",
    icon: Stethoscope,
    color: "from-green-500/20 to-green-500/5 text-green-500",
  },
  {
    title: "Heart Health",
    description: "Expert check-ups to keep your heart strong.",
    icon: HeartPulse,
    color: "from-red-500/20 to-red-500/5 text-red-500",
  },
]

export function SpecialtiesGrid() {
  return (
    <section id="specialties" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Your Health & Beauty, Tailored</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our specialized care options, from quick skin treatments to expert medical consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {specialties.map((item, index) => (
            <Link key={item.title} href="/treatments" className="block outline-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
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
