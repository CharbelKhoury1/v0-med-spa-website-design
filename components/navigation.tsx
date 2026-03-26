"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Magnetic } from "@/components/nano-banana/magnetic"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/treatments", label: "Treatments", id: "treatments" },
  { href: "/#results", label: "Results", id: "results" },
  { href: "/#providers", label: "Our Team", id: "providers" },
  { href: "/#testimonials", label: "Reviews", id: "testimonials" },
  { href: "/#location", label: "Location", id: "location" },
]

interface NavigationProps {
  onBookClick: () => void
}

export function Navigation({ onBookClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)

    // Intersection Observer for scroll-spy
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0% -40% 0%",
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections that have IDs matching our navLinks
    navLinks.forEach((link) => {
      if (link.href.startsWith("/#")) {
        const id = link.href.split("#")[1]
        const element = document.getElementById(id)
        if (element) observer.observe(element)
      }
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [pathname])

  const isLinkActive = (href: string, id: string) => {
    if (href === "/treatments" && pathname === "/treatments") return true
    if (href.startsWith("/#") && pathname === "/" && activeSection === id) return true
    return false
  }

  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-7xl",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-2xl py-3 rounded-full border border-primary/20"
          : "bg-background/40 backdrop-blur-md py-4 rounded-full border border-white/10"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex flex-col group -space-y-1">
          <span className="font-serif text-xl md:text-2xl font-extrabold tracking-tight text-foreground transition-transform group-hover:scale-105">
            Verdun Clinic
          </span>
          <span className="font-serif text-sm md:text-base font-light text-primary italic transition-all group-hover:text-accent">
            by Dr. Maya Adhami
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href, link.id)
            return (
              <Magnetic key={link.href} strength={0.2}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-bold uppercase tracking-widest transition-all duration-300 relative group",
                    active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                  <span className={cn(
                    "absolute -bottom-1.5 left-0 h-0.5 bg-primary transition-all duration-500",
                    active ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </Link>
              </Magnetic>
            )
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+96171230515"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-semibold"
          >
            <Phone className="h-4 w-4" />
            +961 71 230 515
          </a>
          <Magnetic strength={0.4}>
            <Button
              onClick={onBookClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 rounded-full"
              suppressHydrationWarning
            >
              Book Now
            </Button>
          </Magnetic>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-screen opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href, link.id)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-lg font-medium py-3 border-b border-border transition-colors",
                  active ? "text-primary pl-2 border-primary/30" : "text-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          })}
          <Button
            onClick={() => {
              setIsMobileMenuOpen(false)
              onBookClick()
            }}
            className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4 rounded-full"
          >
            Book Now
          </Button>
        </nav>
      </div>
    </header>
  )
}
