"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, Clock, User, ChevronRight, Check, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const services = [
  { id: "hydrafacial", name: "HydraFacial Signature", duration: "60 min", price: "$199" },
  { id: "botox", name: "Botox & Dysport", duration: "30 min", price: "$14/unit" },
  { id: "filler", name: "Dermal Fillers", duration: "45 min", price: "$650" },
  { id: "laser", name: "Laser Skin Resurfacing", duration: "45 min", price: "$450" },
  { id: "peel", name: "Chemical Peel", duration: "30 min", price: "$175" },
  { id: "body", name: "Body Contouring", duration: "60 min", price: "$800" },
]

const providers = [
  { id: "dr-mitchell", name: "Dr. Sarah Mitchell", title: "Medical Director" },
  { id: "dr-chen", name: "Dr. James Chen", title: "Cosmetic Dermatologist" },
  { id: "emma", name: "Emma Rodriguez, RN", title: "Lead Aesthetic Nurse" },
]

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM"
]

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  })

  const handleReset = () => {
    setStep(1)
    setSelectedService(null)
    setSelectedProvider(null)
    setSelectedDate(null)
    setSelectedTime(null)
    setFormData({ firstName: "", lastName: "", email: "", phone: "", notes: "" })
  }

  const handleClose = () => {
    onClose()
    setTimeout(handleReset, 300)
  }

  const handleSubmit = () => {
    // Simulate booking submission
    setStep(5)
  }

  // Generate dates for next 14 days
  const getDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      // Skip Sundays
      if (date.getDay() !== 0) {
        dates.push(date)
      }
    }
    return dates
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
  }

  const steps = [
    { number: 1, label: "Service" },
    { number: 2, label: "Provider" },
    { number: 3, label: "Date & Time" },
    { number: 4, label: "Details" },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl md:max-h-[90vh] bg-card rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-border flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                {step > 1 && step < 5 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="p-1.5 rounded-full hover:bg-muted transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                )}
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  {step === 5 ? "Booking Confirmed!" : "Book Your Appointment"}
                </h2>
              </div>
              <button
                onClick={handleClose}
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Progress Steps */}
            {step < 5 && (
              <div className="px-6 py-4 border-b border-border flex-shrink-0">
                <div className="flex items-center justify-between">
                  {steps.map((s, i) => (
                    <div key={s.number} className="flex items-center">
                      <div className="flex items-center">
                        <div
                          className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                            step >= s.number
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          )}
                        >
                          {step > s.number ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            s.number
                          )}
                        </div>
                        <span
                          className={cn(
                            "ml-2 text-sm hidden sm:inline",
                            step >= s.number ? "text-foreground" : "text-muted-foreground"
                          )}
                        >
                          {s.label}
                        </span>
                      </div>
                      {i < steps.length - 1 && (
                        <div
                          className={cn(
                            "w-8 md:w-16 h-0.5 mx-2",
                            step > s.number ? "bg-primary" : "bg-muted"
                          )}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <AnimatePresence mode="wait">
                {/* Step 1: Select Service */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-3"
                  >
                    <p className="text-muted-foreground mb-4">
                      Select the treatment you&apos;d like to book:
                    </p>
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setSelectedService(service.id)}
                        className={cn(
                          "w-full p-4 rounded-xl border-2 text-left transition-all flex items-center justify-between",
                          selectedService === service.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        )}
                      >
                        <div>
                          <p className="font-semibold text-foreground">{service.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {service.duration} | {service.price}
                          </p>
                        </div>
                        <ChevronRight
                          className={cn(
                            "w-5 h-5 transition-colors",
                            selectedService === service.id ? "text-primary" : "text-muted-foreground"
                          )}
                        />
                      </button>
                    ))}
                  </motion.div>
                )}

                {/* Step 2: Select Provider */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-3"
                  >
                    <p className="text-muted-foreground mb-4">
                      Choose your preferred provider:
                    </p>
                    <button
                      onClick={() => setSelectedProvider("any")}
                      className={cn(
                        "w-full p-4 rounded-xl border-2 text-left transition-all flex items-center justify-between",
                        selectedProvider === "any"
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                          <User className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">No Preference</p>
                          <p className="text-sm text-muted-foreground">First available provider</p>
                        </div>
                      </div>
                      <ChevronRight className={cn("w-5 h-5", selectedProvider === "any" ? "text-primary" : "text-muted-foreground")} />
                    </button>
                    {providers.map((provider) => (
                      <button
                        key={provider.id}
                        onClick={() => setSelectedProvider(provider.id)}
                        className={cn(
                          "w-full p-4 rounded-xl border-2 text-left transition-all flex items-center justify-between",
                          selectedProvider === provider.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        )}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="font-semibold text-primary">
                              {provider.name.split(" ").map((n) => n[0]).join("")}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{provider.name}</p>
                            <p className="text-sm text-muted-foreground">{provider.title}</p>
                          </div>
                        </div>
                        <ChevronRight className={cn("w-5 h-5", selectedProvider === provider.id ? "text-primary" : "text-muted-foreground")} />
                      </button>
                    ))}
                  </motion.div>
                )}

                {/* Step 3: Select Date & Time */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <p className="font-semibold text-foreground">Select a Date</p>
                      </div>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {getDates().map((date) => (
                          <button
                            key={date.toISOString()}
                            onClick={() => setSelectedDate(date)}
                            className={cn(
                              "p-3 rounded-lg text-center transition-all",
                              selectedDate?.toDateString() === date.toDateString()
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted hover:bg-muted/80 text-foreground"
                            )}
                          >
                            <p className="text-xs opacity-70">
                              {date.toLocaleDateString("en-US", { weekday: "short" })}
                            </p>
                            <p className="font-semibold">
                              {date.getDate()}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>

                    {selectedDate && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <Clock className="w-5 h-5 text-primary" />
                          <p className="font-semibold text-foreground">Select a Time</p>
                        </div>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={cn(
                                "p-3 rounded-lg text-sm font-medium transition-all",
                                selectedTime === time
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted hover:bg-muted/80 text-foreground"
                              )}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* Step 4: Contact Details */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <p className="text-muted-foreground mb-4">
                      Please provide your contact information:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          First Name *
                        </label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="Jane"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="jane@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Special Requests or Notes
                      </label>
                      <textarea
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        rows={3}
                        className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                        placeholder="Any concerns or special requests..."
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 5: Confirmation */}
                {step === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Check className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                      You&apos;re All Set!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      We&apos;ve sent a confirmation email to {formData.email || "your email"}.
                    </p>
                    <div className="bg-muted rounded-xl p-6 text-left max-w-sm mx-auto">
                      <p className="text-sm text-muted-foreground mb-1">Appointment Details:</p>
                      <p className="font-semibold text-foreground">
                        {services.find((s) => s.id === selectedService)?.name}
                      </p>
                      <p className="text-sm text-foreground">
                        {selectedDate?.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })} at {selectedTime}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {selectedProvider === "any"
                          ? "First available provider"
                          : providers.find((p) => p.id === selectedProvider)?.name}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            {step < 5 && (
              <div className="p-6 border-t border-border flex-shrink-0">
                <Button
                  onClick={() => {
                    if (step === 4) {
                      handleSubmit()
                    } else {
                      setStep(step + 1)
                    }
                  }}
                  disabled={
                    (step === 1 && !selectedService) ||
                    (step === 2 && !selectedProvider) ||
                    (step === 3 && (!selectedDate || !selectedTime)) ||
                    (step === 4 && (!formData.firstName || !formData.lastName || !formData.email || !formData.phone))
                  }
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 rounded-full text-lg"
                >
                  {step === 4 ? "Confirm Booking" : "Continue"}
                </Button>
              </div>
            )}

            {step === 5 && (
              <div className="p-6 border-t border-border flex-shrink-0">
                <Button
                  onClick={handleClose}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 rounded-full text-lg"
                >
                  Done
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
