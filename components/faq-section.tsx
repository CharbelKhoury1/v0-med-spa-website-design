"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "Why choose Dr. Maya Adhami for your treatment?",
        answer: "Dr. Maya Adhami is a board-certified ENT and Facial Plastic Surgeon with specialized training from Paris, France. She combines European precision with a deep understanding of Mediterranean aesthetics, ensuring results that look natural and authentic to your heritage.",
      },
      {
        question: "Is the clinic easy to reach in Verdun?",
        answer: "Yes, we are conveniently located in Tallet El Khayyat, Verdun—the heart of Beirut. We offer ample parking nearby, making your visit stress-free even during busy hours.",
      },
      {
        question: "Do you welcome international patients?",
        answer: "Absolutely. We frequently welcome the Lebanese diaspora and international patients. We can assist with virtual consultations prior to your visit to Beirut and help coordinate your treatment timeline.",
      },
    ],
  },
  {
    category: "Treatments",
    questions: [
      {
        question: "What is 'Natural Refinement' in Rhinoplasty?",
        answer: "In Lebanon, we value character and elegance. Dr. Maya's approach to Rhinoplasty focuses on 'Natural Refinement'—correcting breathing and structural issues while enhancing your natural features without that 'operated' look.",
      },
      {
        question: "Are the products used FDA or CE approved?",
        answer: "We prioritize your safety above all else. Every product used at Verdun Clinic, from Botox to Sculptra, is 100% authentic and FDA or CE approved, sourced from the highest-quality global brands.",
      },
      {
        question: "What is the downtime after Sculptra or Fillers?",
        answer: "Most of our aesthetic treatments have minimal 'downtime'. You can typically return to your social life in Beirut within 24-48 hours. Any minor swelling or bruising can be easily managed with our detailed post-care protocols.",
      },
    ],
  },
  {
    category: "Payment & Booking",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept payments in Fresh USD, as well as international and local credit/debit cards. Our team will provide a clear breakdown of costs during your consultation so there are no surprises.",
      },
      {
        question: "How far in advance should I book my surgery?",
        answer: "For surgical procedures like Rhinoplasty, we recommend booking 2-4 weeks in advance, especially during the summer and holiday seasons when demand is high from both local and visiting patients.",
      },
    ],
  },
]

function FAQItem({ 
  question, 
  answer, 
  isOpen, 
  onClick 
}: { 
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left group"
        aria-expanded={isOpen}
      >
        <span className={cn(
          "font-medium text-foreground pr-8 transition-colors",
          isOpen && "text-primary"
        )}>
          {question}
        </span>
        <ChevronDown 
          className={cn(
            "w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0",
            isOpen && "rotate-180 text-primary"
          )} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-muted-foreground leading-relaxed pr-12">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface FAQSectionProps {
  onBookClick: () => void
}

export function FAQSection({ onBookClick }: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())
  const [activeCategory, setActiveCategory] = useState("General")

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  const currentFaqs = faqs.find(f => f.category === activeCategory)?.questions || []

  return (
    <section className="py-14 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-widest text-sm">
            Have Questions?
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about our treatments, booking process, 
            and what to expect during your visit.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Category tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {faqs.map((category) => (
              <button
                key={category.category}
                onClick={() => setActiveCategory(category.category)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category.category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-secondary text-muted-foreground hover:bg-muted"
                )}
              >
                {category.category}
              </button>
            ))}
          </motion.div>

          {/* FAQ items */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-card rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm"
          >
            {currentFaqs.map((faq, index) => (
              <FAQItem
                key={`${activeCategory}-${index}`}
                question={faq.question}
                answer={faq.answer}
                isOpen={openItems.has(`${activeCategory}-${index}`)}
                onClick={() => toggleItem(`${activeCategory}-${index}`)}
              />
            ))}
          </motion.div>

          {/* Still have questions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-12 bg-secondary/50 rounded-2xl p-6 sm:p-8 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Schedule a complimentary consultation 
              and get personalized answers.
            </p>
            <Button
              onClick={onBookClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 rounded-full"
            >
              Book a Consultation
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
