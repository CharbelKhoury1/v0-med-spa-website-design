"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "96171230515"
  const message = encodeURIComponent("Hello! I'd like to book a consultation at Verdun Clinic with Dr. Maya Adhami.")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      className="fixed bottom-28 md:bottom-6 right-4 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-2xl transition-colors group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
      
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/30" />
      
      {/* Tooltip */}
      <span className="absolute right-20 bg-foreground text-background text-sm font-medium px-4 py-2 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
        Chat with us on WhatsApp
      </span>
    </motion.a>
  )
}
