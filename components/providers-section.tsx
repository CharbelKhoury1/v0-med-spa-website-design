"use client"

import { motion } from "framer-motion"
import { Award, GraduationCap, Heart } from "lucide-react"

const providers = [
  {
    id: 1,
    name: "Dr. Maya Adhami",
    title: "ENT & Facial Plastic Surgeon",
    specialty: "Rhinoplasty & Facial Medical Aesthetics",
    image: "/dr-maya-adhami.png",
    credentials: [
      "ENT & Head and Neck Surgery (Saint George)",
      "Fellowship: Rhinology & Facial Plastic Surgery (Paris)",
      "Member of European Academy of Facial Plastic Surgery",
      "Featured in FORBES Middle East Healthcare"
    ],
    bio: "Dr. Maya Adhami is a pioneering specialist in Beirut, combining ENT surgical precision with an artistic mastery of facial aesthetics. Educated at AUB and the University of Balamand, with advanced fellowships in Paris, she was recognized by FORBES Middle East as a healthcare pioneer in 2018.",
  },
]

export function ProvidersSection() {
  return (
    <section id="providers" className="py-14 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-widest text-sm">
            Expert Care
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-3 mb-4">
            Meet Our Providers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our team of board-certified physicians and experienced aesthetic specialists 
            are dedicated to delivering exceptional results with the highest standards of care.
          </p>
        </motion.div>

        <div className="grid gap-8 max-w-md mx-auto">
          {providers.map((provider, index) => (
            <motion.div
              key={provider.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={provider.image}
                    alt={provider.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-background/90 text-sm leading-relaxed">
                      {provider.bio}
                    </p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {provider.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-2">
                    {provider.title}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {provider.specialty}
                  </p>
                  
                  <div className="space-y-2">
                    {provider.credentials.map((credential, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        {i === 0 && <GraduationCap className="h-4 w-4 text-primary" />}
                        {i === 1 && <Award className="h-4 w-4 text-primary" />}
                        {i === 2 && <Heart className="h-4 w-4 text-primary" />}
                        {credential}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 md:mt-16 bg-card rounded-2xl p-6 sm:p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { label: "Combined Years of Experience", value: "50+" },
              { label: "Procedures Performed", value: "25,000+" },
              { label: "Professional Certifications", value: "15+" },
              { label: "Continuing Education Hours/Year", value: "200+" },
            ].map((stat, index) => (
              <div key={index}>
                <p className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
