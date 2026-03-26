"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FooterProps {
  onBookClick: () => void
}

export function Footer({ onBookClick }: FooterProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer id="contact" className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
            Ready to Begin Your Transformation?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Schedule a consultation with Dr. Maya Adhami and discover your 
            personalized surgical or aesthetic treatment plan.
          </p>
          <Button
            onClick={onBookClick}
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 px-10 py-6 text-lg rounded-full"
            suppressHydrationWarning
          >
            Book Your Free Consultation
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 py-10 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          <div className="max-w-sm">
            <Link href="/" className="flex flex-col group -space-y-1 mb-6">
              <span className="font-serif text-2xl font-extrabold tracking-tight text-background transition-transform group-hover:scale-105">
                Verdun Clinic
              </span>
              <span className="font-serif text-base font-light text-primary italic transition-all group-hover:text-accent">
                by Dr. Maya Adhami
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Elite ENT and Facial Plastic Surgery clinic in the heart of Beirut. 
              Combining surgical precision with an artistic touch for results that 
              look and feel authentically you.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-background mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "#treatments", label: "Treatments" },
                { href: "#results", label: "Before & After" },
                { href: "#providers", label: "Our Team" },
                { href: "#testimonials", label: "Reviews" },
                { href: "#", label: "Specials & Offers" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="font-semibold text-background mb-6">Popular Treatments</h3>
            <ul className="space-y-3">
              {[
                "Rhinoplasty",
                "Sculptra Rejuvenation",
                "Light Eyes Ultra",
                "Dermal Fillers",
                "Botox & Dysport",
                "ENT Medical",
              ].map((treatment) => (
                <li key={treatment}>
                  <a
                    href="#treatments"
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {treatment}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-background mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Rue 26, Tallet El Khayyat<br />
                  Verdun, Beirut<br />
                  Lebanon
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+96171230515"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  +961 71 230 515
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:verdunclinic@gmail.com"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  verdunclinic@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Mon - Fri: 9am - 6pm<br />
                  Saturday: 10am - 2pm<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            &copy; {mounted ? new Date().getFullYear() : "2026"} Verdun Clinic by Dr. Maya Adhami. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-background/50 hover:text-background text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/50 hover:text-background text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
