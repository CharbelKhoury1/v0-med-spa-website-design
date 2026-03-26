"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Sparkle {
  id: number
  x: number
  y: number
}

export function SparkleClick() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newSparkles = Array.from({ length: 6 }).map((_, i) => ({
        id: Date.now() + i,
        x: e.clientX,
        y: e.clientY
      }))
      
      setSparkles(prev => [...prev.slice(-20), ...newSparkles])
      
      // Clean up old sparkles
      setTimeout(() => {
        setSparkles(prev => prev.filter(s => !newSparkles.includes(s)))
      }, 1000)
    }

    window.addEventListener("mousedown", handleClick)
    return () => window.removeEventListener("mousedown", handleClick)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ 
              opacity: 1, 
              scale: 0, 
              x: sparkle.x, 
              y: sparkle.y,
              rotate: 0 
            }}
            animate={{ 
              opacity: 0, 
              scale: Math.random() * 0.5 + 0.5, 
              x: sparkle.x + (Math.random() - 0.5) * 100, 
              y: sparkle.y + (Math.random() - 0.5) * 100,
              rotate: Math.random() * 360 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute w-2 h-2"
          >
            <SparkleIcon color={Math.random() > 0.5 ? "var(--primary)" : "var(--accent)"} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

function SparkleIcon({ color }: { color: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="w-full h-full drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
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
