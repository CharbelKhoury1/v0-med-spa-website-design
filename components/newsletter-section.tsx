"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes("@")) {
      setStatus("error")
      setErrorMessage("Please enter a valid email address")
      return
    }

    setStatus("loading")
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setStatus("success")
    setEmail("")
  }

  return (
    <section className="py-12 md:py-20 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Stay Beautiful, Stay Informed
          </h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to receive exclusive offers, skincare tips, and be the first 
            to know about new treatments and special events.
          </p>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-primary/10 rounded-2xl p-8 flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">
                Welcome to the Family!
              </h3>
              <p className="text-muted-foreground">
                Check your inbox for a special welcome offer.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="relative">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (status === "error") setStatus("idle")
                    }}
                    placeholder="Enter your email address"
                    className={cn(
                      "w-full px-6 py-4 rounded-full bg-card border-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 transition-colors",
                      status === "error" 
                        ? "border-destructive focus:border-destructive" 
                        : "border-border focus:border-primary"
                    )}
                    disabled={status === "loading"}
                  />
                  {status === "error" && (
                    <p className="absolute -bottom-6 left-6 text-sm text-destructive">
                      {errorMessage}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 h-auto rounded-full"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-6">
                By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
