"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface StickyCTAProps {
  onBookClick: () => void
}

export function StickyCTA({ onBookClick }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      // Show after scrolling 500px
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:hidden pointer-events-none"
        >
          <div className="bg-background/90 backdrop-blur-xl border border-primary/20 rounded-2xl p-3 shadow-2xl flex items-center justify-between gap-3 overflow-hidden pointer-events-auto">
            <div className="flex-1 min-w-0 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 animate-pulse">
                <SparklesIcon className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-foreground text-sm truncate leading-tight">Expert Consultation</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Verdun Clinic • Beirut</p>
              </div>
            </div>
            
            <Button
              onClick={onBookClick}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 rounded-xl text-sm font-bold shadow-lg shadow-primary/25 h-12 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              BOOK NOW
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M12 3v3" />
      <path d="M12 18v3" />
      <path d="M3 12h3" />
      <path d="M18 12h3" />
      <path d="M5.8 5.8l2.1 2.1" />
      <path d="M16.1 16.1l2.1 2.1" />
      <path d="M5.8 18.2l2.1-2.1" />
      <path d="M16.1 7.9l2.1-2.1" />
    </svg>
  )
}
