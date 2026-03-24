"use client"

import { motion } from "framer-motion"
import { Shield, Award, Heart, Sparkles, Users, Clock } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Board-Certified Experts",
    description: "Every treatment is performed or supervised by board-certified physicians with years of specialized training.",
  },
  {
    icon: Award,
    title: "Award-Winning Care",
    description: "Recognized as a top medical spa in Los Angeles for our exceptional patient outcomes and service.",
  },
  {
    icon: Heart,
    title: "Personalized Approach",
    description: "We create customized treatment plans tailored to your unique goals, lifestyle, and aesthetic preferences.",
  },
  {
    icon: Sparkles,
    title: "Premium Products",
    description: "We exclusively use FDA-approved, medical-grade products from trusted brands like Allergan and Galderma.",
  },
  {
    icon: Users,
    title: "10,000+ Happy Clients",
    description: "Join thousands of satisfied clients who have trusted us with their aesthetic journey.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Convenient appointment times including evenings and weekends to fit your busy lifestyle.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium uppercase tracking-widest text-sm">
              Why Serene Aesthetics
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-6">
              The Difference is in the Details
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At Serene Aesthetics, we believe that true beauty lies in the details. 
              Our commitment to excellence, combined with our warm and welcoming 
              environment, sets us apart as the premier destination for aesthetic care.
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3 bg-secondary/50 px-4 py-3 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-serif text-lg font-semibold">A+</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">BBB Rating</p>
                  <p className="text-xs text-muted-foreground">Accredited Business</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-secondary/50 px-4 py-3 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-serif text-lg font-semibold">5.0</span>
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
