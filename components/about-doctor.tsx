"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, GraduationCap, MapPin, Star } from "lucide-react"

export function AboutDoctorSection() {
  const education = [
    { year: "AUB", detail: "Biology Degree (American University of Beirut)" },
    { year: "Balamand", detail: "Medical Degree (University of Balamand)" },
    { year: "Saint George", detail: "Residency: ENT & Head and Neck Surgery" },
    { year: "Paris", detail: "Fellowship: Rhinology & Facial Plastic Surgery (Paris Descartes & Paris 12)" },
  ]

  return (
    <section id="about" className="py-16 md:py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image & Badge */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/dr-maya-adhami.png"
                alt="Dr. Maya Adhami"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            {/* Forbes Badge Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-4 right-4 sm:-bottom-6 sm:-right-6 md:-right-10 bg-white p-4 sm:p-6 rounded-xl shadow-xl flex items-center gap-3 sm:gap-4 max-w-[200px] sm:max-w-[240px] border border-primary/10"
            >
              <div className="bg-primary/10 p-2 sm:p-3 rounded-full">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-primary">Featured in</p>
                <p className="text-lg font-serif italic text-foreground">FORBES Middle East</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-tight">Healthcare Pioneer • 2018</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Bio & Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Star className="w-3 h-3 fill-primary" />
              Meet the Doctor
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-4 sm:mb-6 leading-tight">
              Dr. Maya Adhami
              <span className="block text-xl md:text-2xl font-sans font-normal text-muted-foreground mt-2">
                ENT & Facial Plastic Surgeon
              </span>
            </h2>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                Dr. Maya Adhami is a pioneering medical professional in Beirut, uniquely combining the precision of ENT surgery with the artistic mastery of facial aesthetics.
              </p>
              <p>
                Her journey began at the prestigious <strong>American University of Beirut (AUB)</strong> and the <strong>University of Balamand</strong>, followed by rigorous surgical training and specialized <strong>French fellowships in Paris</strong>.
              </p>
              <p>
                As a member of the <strong>European Academy of Facial Plastic Surgery</strong>, she brings world-class standards and advanced techniques to the heart of Lebanon.
              </p>
            </div>

            {/* Timeline / Highlights */}
            <div className="mt-12 space-y-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-foreground flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education & Credentials
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    className="flex gap-4 border-l-2 border-primary/20 pl-4 py-1"
                  >
                    <div>
                      <p className="text-xs font-bold text-primary uppercase tracking-wider">{item.year}</p>
                      <p className="text-sm text-foreground font-medium">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Beirut, Lebanon
              </div>
              <div className="w-1 h-1 rounded-full bg-border" />
              <div className="text-sm font-medium text-foreground">
                European Academy Member
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
