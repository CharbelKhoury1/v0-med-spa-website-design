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
        question: "What should I expect during my first visit?",
        answer: "Your first visit begins with a comprehensive consultation where we discuss your aesthetic goals, medical history, and concerns. Our provider will perform an assessment and create a personalized treatment plan. There's no obligation to proceed with treatment on the same day - we want you to feel completely comfortable with your decision.",
      },
      {
        question: "How do I know which treatment is right for me?",
        answer: "During your consultation, our expert providers will evaluate your skin, discuss your goals, and recommend the most suitable treatments. We believe in a customized approach - what works for one person may not be ideal for another. We'll explain all options, expected outcomes, and help you make an informed decision.",
      },
      {
        question: "Are your treatments safe?",
        answer: "Absolutely. We only use FDA-approved products and devices, and all treatments are performed by licensed, experienced professionals. Our medical director oversees all procedures, ensuring the highest safety standards are maintained. We also conduct thorough consultations to identify any contraindications.",
      },
    ],
  },
  {
    category: "Treatments",
    questions: [
      {
        question: "How long do Botox results last?",
        answer: "Botox results typically last 3-4 months for most patients. However, with regular treatments, you may notice that results begin to last longer over time as the muscles become trained. We recommend scheduling your follow-up appointment before your results fully wear off to maintain optimal results.",
      },
      {
        question: "Is there any downtime after treatments?",
        answer: "Downtime varies by treatment. Non-invasive treatments like Light Eyes Ultra mesotherapy have no downtime - you can return to normal activities immediately. Injectables may cause mild swelling or bruising for 1-3 days. Surgical procedures like rhinoplasty require 7-14 days of recovery. We'll provide detailed aftercare instructions for your specific treatment.",
      },
      {
        question: "Do treatments hurt?",
        answer: "We prioritize your comfort during all procedures. Most treatments involve minimal discomfort. For injectables, we use ultra-fine needles and can apply topical numbing cream. Many of our laser devices have built-in cooling systems. Our patients often describe treatments as feeling like a slight pinch or warm sensation.",
      },
    ],
  },
  {
    category: "Booking & Pricing",
    questions: [
      {
        question: "Do you offer financing options?",
        answer: "Yes! We partner with CareCredit and Cherry to offer flexible financing options with 0% interest plans available for qualified applicants. We believe everyone should have access to the treatments they desire, and we're happy to discuss payment plans during your consultation.",
      },
      {
        question: "What is your cancellation policy?",
        answer: "We understand that schedules change. We request at least 24 hours notice for cancellations or rescheduling. Cancellations with less than 24 hours notice may be subject to a $50 fee. For our courtesy and to accommodate other patients who may be waiting, we appreciate your understanding.",
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
