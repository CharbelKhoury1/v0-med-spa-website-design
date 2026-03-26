"use client"

import { useEffect, useState, useRef } from "react"
import { useMotionValue, useSpring, useTransform, motion, animate, useInView } from "framer-motion"

interface CounterProps {
  from?: number
  to: number
  duration?: number
  delay?: number
  suffix?: string
  decimals?: number
}

export function Counter({ from = 0, to, duration = 2, delay = 0, suffix = "", decimals = 0 }: CounterProps) {
  const [displayValue, setDisplayValue] = useState(from.toFixed(decimals))
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px" })

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration,
        delay,
        ease: "easeOut",
        onUpdate(value) {
          setDisplayValue(value.toFixed(decimals))
        },
      })
      return () => controls.stop()
    }
  }, [isInView, from, to, duration, delay, decimals])

  return (
    <motion.span ref={ref} className="inline-block">
      {displayValue}
      {suffix}
    </motion.span>
  )
}
