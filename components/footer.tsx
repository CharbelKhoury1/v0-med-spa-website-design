"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FooterProps {
  onBookClick: () => void
}

export function Footer({ onBookClick }: FooterProps) {
  return (
    <footer id="contact" className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="bg-primary">
        <div className="container mx-auto px-6 py-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
            Ready to Begin Your Transformation?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Schedule a complimentary consultation with one of our expert providers 
            and discover your personalized treatment plan.
          </p>
          <Button
            onClick={onBookClick}
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 px-10 py-6 text-lg rounded-full"
          >
            Book Your Free Consultation
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-2xl font-semibold text-background">
                Serene
              </span>
              <span className="font-serif text-2xl font-light text-primary-foreground/60 ml-2">
                Aesthetics
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Where science meets artistry. We are dedicated to helping you 
              look and feel your best through personalized aesthetic treatments 
              delivered by experienced professionals.
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
                { href: "#", label: "Gift Cards" },
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
                "HydraFacial",
                "Botox & Dysport",
                "Dermal Fillers",
                "Laser Treatments",
                "Chemical Peels",
                "Body Contouring",
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
                <MapPin className="w-5 h-5 text-primary-foreground/60 flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  123 Wellness Boulevard<br />
                  Suite 400<br />
                  Los Angeles, CA 90210
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-foreground/60" />
                <a
                  href="tel:+15551234567"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-foreground/60" />
                <a
                  href="mailto:hello@sereneaesthetics.com"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  hello@sereneaesthetics.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-foreground/60 flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Mon - Fri: 9am - 6pm<br />
                  Saturday: 10am - 4pm<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            &copy; {new Date().getFullYear()} Serene Aesthetics. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-background/50 hover:text-background text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/50 hover:text-background text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-background/50 hover:text-background text-sm transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
