"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Magnetic } from "@/components/nano-banana/magnetic"
import { usePathname, useRouter } from "next/navigation"

const navLinks = [
  { href: "/about", label: "About Dr. Maya", id: "about" },
  { href: "/treatments", label: "Treatments", id: "treatments" },
  { href: "/results", label: "Before & After", id: "results" },
  { href: "/contact", label: "Contact & FAQ", id: "contact" },
]

interface NavigationProps {
  onBookClick?: () => void
}

import { motion, AnimatePresence } from "framer-motion"

export function Navigation({ onBookClick }: NavigationProps) {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

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
              onClick={onBookClick || (() => router.push("/book"))}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 rounded-full"
              suppressHydrationWarning
            >
              Book Now
            </Button>
          </Magnetic>
        </div>

        <button
          className="lg:hidden p-2 text-foreground relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
             <motion.div
               key={isMobileMenuOpen ? "close" : "open"}
               initial={{ opacity: 0, rotate: -90 }}
               animate={{ opacity: 1, rotate: 0 }}
               exit={{ opacity: 0, rotate: 90 }}
               transition={{ duration: 0.2 }}
             >
               {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
             </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden absolute top-full left-2 right-2 mt-2 bg-background/98 backdrop-blur-xl shadow-2xl overflow-hidden rounded-2xl border border-primary/10"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const active = isLinkActive(link.href, link.id)
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "text-lg font-medium py-4 border-b border-border last:border-0 transition-colors flex items-center justify-between group",
                        active ? "text-primary border-primary/30" : "text-foreground"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                      <motion.div
                        animate={{ x: active ? 5 : 0 }}
                        className={cn(
                          "h-5 w-5 transition-transform",
                          active ? "text-primary" : "text-muted-foreground opacity-30 group-hover:opacity-100"
                        )}
                      >
                         <Menu className="h-4 w-4 rotate-[-90deg]" />
                      </motion.div>
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div 
                className="flex flex-col gap-4 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href="tel:+96171230515"
                  className="flex items-center justify-center gap-3 text-lg font-bold text-foreground bg-secondary/50 py-4 rounded-xl border border-primary/10 transition-colors active:bg-secondary"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  +961 71 230 515
                </a>
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    if (onBookClick) onBookClick()
                    else router.push("/book")
                  }}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground py-7 text-lg rounded-xl shadow-xl shadow-primary/20"
                >
                  Book Now
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
