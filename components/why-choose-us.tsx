"use client"

import { motion } from "framer-motion"
import { Shield, Award, Heart, Sparkles, Users, Clock } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Paris-Trained Surgeon",
    description: "Dr. Maya Adhami holds fellowships from the University of Paris Descartes in Rhinology & Facial Plastic Surgery.",
  },
  {
    icon: Award,
    title: "Forbes-Recognized Pioneer",
    description: "Featured in FORBES Middle East Healthcare as a pioneer in facial medical aesthetics in the region.",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Every treatment plan is tailored to your unique facial anatomy, goals, and lifestyle for naturally beautiful results.",
  },
  {
    icon: Sparkles,
    title: "Premium Products Only",
    description: "We use top-tier brands including Restylane, Juvederm, Sculptra, and Filorga for optimal, lasting outcomes.",
  },
  {
    icon: Users,
    title: "92% Recommendation Rate",
    description: "Our patients consistently recommend Verdun Clinic for its expertise, care, and transformative results.",
  },
  {
    icon: Clock,
    title: "Convenient Beirut Location",
    description: "Located in the prestigious Verdun district with easy access and flexible scheduling including Saturday consultations.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-14 md:py-24 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium uppercase tracking-widest text-sm">
              Why Verdun Clinic
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-3 mb-5 md:mb-6">
              The Difference is in the Details
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At Verdun Clinic, we believe that true beauty lies in surgical precision and natural harmony. 
              Our commitment to excellence, combined with our warm and welcoming 
              environment, sets us apart as the premier destination for aesthetic care.
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap gap-3 sm:gap-6">
              <div className="flex items-center gap-3 bg-secondary/50 px-4 py-3 rounded-xl flex-1 min-w-[140px]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-serif text-base sm:text-lg font-semibold">A+</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">BBB Rating</p>
                  <p className="text-xs text-muted-foreground">Accredited Business</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-secondary/50 px-4 py-3 rounded-xl flex-1 min-w-[140px]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-serif text-base sm:text-lg font-semibold">5.0</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Google Rating</p>
                  <p className="text-xs text-muted-foreground">500+ Reviews</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
