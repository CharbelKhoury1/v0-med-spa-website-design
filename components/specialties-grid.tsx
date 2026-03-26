"use client"

import { motion } from "framer-motion"
import { Sparkles, Scissors, Syringe, Stethoscope, HeartPulse } from "lucide-react"

const specialties = [
  {
    title: "Facial Esthetics",
    description: "Expert injectables, fillers, and advanced skin rejuvenation.",
    icon: Syringe,
    color: "bg-pink-500/10 text-pink-500",
  },
  {
    title: "Facial Plastic Surgery",
    description: "Surgical precision for rhinoplasty and facial reconstruction.",
    icon: Scissors,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Dermatology",
    description: "Comprehensive medical and cosmetic skin care solutions.",
    icon: Sparkles,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "ENT",
    description: "Specialized Ear, Nose, and Throat medical services.",
    icon: Stethoscope,
    color: "bg-green-500/10 text-green-500",
  },
  {
    title: "Cardiology",
    description: "General cardiovascular consultations and heart health.",
    icon: HeartPulse,
    color: "bg-red-500/10 text-red-500",
  },
]

export function SpecialtiesGrid() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Our Clinical Departments</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive multi-disciplinary care led by Dr. Maya Adhami and our specialized medical team in Beirut.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {specialties.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-all text-center group"
            >
              <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
