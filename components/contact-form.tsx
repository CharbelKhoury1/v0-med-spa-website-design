"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Check, Loader2, User, Mail, MessageSquare, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setStatus("success")
  }

  return (
    <div className="bg-card rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-primary/5">
      <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8">
        Send Us a Message
      </h3>

      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-primary" />
          </div>
          <h4 className="text-2xl font-serif font-semibold text-foreground mb-4">Message Sent!</h4>
          <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
            Thank you for reaching out. Our team will get back to you within 24 hours.
          </p>
          <Button 
            onClick={() => setStatus("idle")}
            variant="outline"
            className="rounded-full px-8"
          >
            Send Another Message
          </Button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-4">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Jean Doe"
                  className="w-full bg-secondary/30 border-none rounded-2xl py-4 pl-12 pr-6 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-4">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="jean@example.com"
                  className="w-full bg-secondary/30 border-none rounded-2xl py-4 pl-12 pr-6 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-4">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  id="phone"
                  type="tel"
                  placeholder="+961 -- --- ---"
                  className="w-full bg-secondary/30 border-none rounded-2xl py-4 pl-12 pr-6 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="treatment" className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-4">
                Interested In
              </label>
              <select
                id="treatment"
                className="w-full bg-secondary/30 border-none rounded-2xl py-4 px-6 text-foreground focus:ring-2 focus:ring-primary/20 transition-all appearance-none"
              >
                <option value="rhinoplasty">Rhinoplasty</option>
                <option value="aesthetics">Medical Aesthetics</option>
                <option value="sculptra">Sculptra</option>
                <option value="ent">ENT Consultation</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-4">
              Your Message
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
              <textarea
                id="message"
                required
                rows={4}
                placeholder="How can we help you?"
                className="w-full bg-secondary/30 border-none rounded-3xl py-4 pl-12 pr-6 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              ></textarea>
            </div>
          </div>

          <Button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-8 text-lg font-bold rounded-2xl shadow-xl shadow-primary/20"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-6 h-6 mr-2 animate-spin" />
                Sensing...
              </>
            ) : (
              <>
                Send Inquiry
                <Send className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>
          
          <p className="text-center text-xs text-muted-foreground mt-4">
            By sending this message, you agree to our privacy policy and terms of service.
          </p>
        </form>
      )}
    </div>
  )
}
