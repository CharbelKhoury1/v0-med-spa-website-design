"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LocationSectionProps {
  onBookClick: () => void
}

export function LocationSection({ onBookClick }: LocationSectionProps) {
  return (
    <section id="location" className="py-14 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-widest text-sm">
            Visit Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-3 mb-4">
            Our Location
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Located in the prestigious Verdun district of Beirut, our clinic 
            offers a tranquil environment for your aesthetic and medical journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-xl mb-2">Our Location</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Rue 26, Tallet El Khayyat,<br />
                    Verdun, Beirut, Lebanon
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-xl mb-2">Contact Info</h3>
                  <p className="text-muted-foreground">+961 71 230 515</p>
                  <p className="text-muted-foreground">verdunclinic@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-xl mb-2">Operating Hours</h3>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                    <p className="text-muted-foreground">Mon - Fri</p>
                    <p className="text-foreground font-medium">9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday</p>
                    <p className="text-foreground font-medium">10:00 AM - 2:00 PM</p>
                    <p className="text-muted-foreground">Sunday</p>
                    <p className="text-foreground font-medium">Closed</p>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => window.open('https://maps.google.com?q=Rue+26+Tallet+El+Khayyat+Verdun+Beirut', '_blank')}
                className="w-full sm:w-auto px-8 py-6 rounded-full text-lg font-bold"
              >
                Get Directions
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square sm:aspect-video lg:aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-black/5"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13248.81423719047!2d35.4839845!3d33.88243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f16e1e6e8e8e8%3A0x1e8e8e8e8e8e8e8!2sVerdun%2C%20Beirut%2C%20Lebanon!5e0!3m2!1sen!2slb!4v1709844723456!5m2!1sen!2slb"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
