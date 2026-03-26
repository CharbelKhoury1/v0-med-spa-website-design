"use client"

import { motion } from "framer-motion"

interface JellyProps {
  children: React.ReactNode
  scale?: number
  rotate?: number
}

export function Jelly({ children, scale = 1.05, rotate = 1.5 }: JellyProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.12, 
        rotate: [0, -3, 3, 0],
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ 
        type: "spring", 
        stiffness: 600, 
        damping: 8,
        mass: 0.5,
        rotate: {
          duration: 0.3,
          ease: "easeInOut"
        }
      }}
      className="inline-block"
    >
      {children}
    </motion.div>
  )
}
