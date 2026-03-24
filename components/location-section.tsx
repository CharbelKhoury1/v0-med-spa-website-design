"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Navigation, Car } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LocationSectionProps {
  onBookClick: () => void
}

export function LocationSection({ onBookClick }: LocationSectionProps) {
  return (
    <section id="location" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-widest text-sm">
            Visit Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-4">
            Our Location
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conveniently located in the heart of Beverly Hills, with complimentary 
            valet parking for all appointments.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.180614844847!2d-118.40015392407765!3d34.06735817315039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1709844723456!5m2!1sen!2sus"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Serene Aesthetics location map"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm p-4 rounded-xl shadow-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">123 Wellness Boulevard</p>
                  <p className="text-xs text-muted-foreground">Beverly Hills, CA 90210</p>
                </div>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Beverly+Hills+CA+90210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Directions
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="bg-card p-6 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Hours of Operation</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p className="flex justify-between"><span>Monday - Friday</span><span>9:00 AM - 6:00 PM</span></p>
                    <p className="flex justify-between"><span>Saturday</span><span>10:00 AM - 4:00 PM</span></p>
                    <p className="flex justify-between"><span>Sunday</span><span>Closed</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Contact</h3>
                  <div className="space-y-2 text-sm">
                    <a 
                      href="tel:+15551234567" 
                      className="block text-muted-foreground hover:text-primary transition-colors"
                    >
                      (555) 123-4567
                    </a>
                    <a 
                      href="mailto:hello@sereneaesthetics.com" 
                      className="block text-muted-foreground hover:text-primary transition-colors"
                    >
                      hello@sereneaesthetics.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Car className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Parking</h3>
                  <p className="text-sm text-muted-foreground">
                    Complimentary valet parking available for all appointments. 
                    Street parking also available on nearby streets.
                  </p>
                </div>
              </div>
            </div>

            <Button
              onClick={onBookClick}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 rounded-full text-lg"
            >
              Book Your Appointment
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
