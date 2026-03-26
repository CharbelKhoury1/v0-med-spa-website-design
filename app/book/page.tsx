"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, Clock, User, ChevronRight, Check, ArrowLeft, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const services = [
  { id: "rhinoplasty", name: "Rhinoplasty Consultation", duration: "60 min", price: "Consultation" },
  { id: "sculptra", name: "Sculptra & Fillers", duration: "45 min", price: "From $400" },
  { id: "light-eyes", name: "Light Eyes Ultra", duration: "30 min", price: "From $250" },
  { id: "botox", name: "Botox & Dysport", duration: "30 min", price: "From $250" },
  { id: "fillers", name: "Dermal Fillers", duration: "45 min", price: "From $400" },
  { id: "ent", name: "ENT Consultation", duration: "45 min", price: "Consultation" },
]

const providers = [
  { id: "dr-maya", name: "Dr. Maya Adhami", title: "ENT & Facial Plastic Surgeon" },
]

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM"
]

export default function BookingPage() {
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
  const [mounted, setMounted] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setMounted(true)
    window.scrollTo(0, 0)
  }, [])

  const buildDemoRequest = () => {
    const service = services.find((s) => s.id === selectedService)?.name ?? "Not selected"
    const provider =
      selectedProvider === "any"
        ? "First Available"
        : providers.find((p) => p.id === selectedProvider)?.name ?? "Not selected"

    return {
      prototype: true,
      createdAt: new Date().toISOString(),
      serviceId: selectedService,
      serviceName: service,
      providerId: selectedProvider,
      providerName: provider,
      dateISO: selectedDate ? selectedDate.toISOString() : null,
      dateDisplay: selectedDate
        ? selectedDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
        : null,
      time: selectedTime,
      patient: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
      },
      notes: formData.notes,
    }
  }

  const handleSubmit = () => {
    // Prototype-only: no network calls, no real booking created.
    try {
      const payload = buildDemoRequest()
      sessionStorage.setItem("verdunclinic_prototype_booking_request", JSON.stringify(payload))
    } catch {
      // ignore storage failures in prototype
    }
    setStep(5)
    window.scrollTo(0, 0)
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

  const steps = [
    { number: 1, label: "Service" },
    { number: 2, label: "Provider" },
    { number: 3, label: "Date & Time" },
    { number: 4, label: "Details" },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation onBookClick={() => {}} />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
              >
                <Heart className="w-8 h-8 text-primary" />
              </motion.div>
              <div className="flex items-center justify-center mb-4">
                <span className="inline-flex items-center rounded-full bg-accent/15 text-accent px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] border border-accent/20">
                  Prototype Preview
                </span>
              </div>
              <h1 className="font-serif text-4xl font-semibold text-foreground mb-4">
                {step === 5 ? "Booking Confirmed" : "Book Your Appointment"}
              </h1>
              <p className="text-muted-foreground text-lg">
                {step === 5 
                  ? "Request received in demo mode. No real appointment has been created."
                  : "Experience a realistic booking flow — demo only (front-end prototype)."}
              </p>
            </div>

            {/* Progress Wrapper */}
            {step < 5 && (
              <div className="mb-10">
                <div className="flex items-center justify-between">
                  {steps.map((s, i) => (
                    <div key={s.number} className="flex items-center flex-1 last:flex-none">
                      <div className="flex flex-col items-center group relative">
                        <div
                          className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-500 z-10",
                            step >= s.number
                              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                              : "bg-muted text-muted-foreground"
                          )}
                        >
                          {step > s.number ? <Check className="w-5 h-5" /> : s.number}
                        </div>
                        <span
                          className={cn(
                            "mt-2 text-xs font-medium absolute -bottom-6 w-max transition-colors duration-500",
                            step >= s.number ? "text-foreground" : "text-muted-foreground"
                          )}
                        >
                          {s.label}
                        </span>
                      </div>
                      {i < steps.length - 1 && (
                        <div className="flex-1 h-0.5 mx-4 bg-muted relative">
                          <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: step > s.number ? "100%" : "0%" }}
                            className="absolute inset-0 bg-primary transition-all duration-500"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Main Content Area */}
            <div className="flex flex-col lg:flex-row gap-8 mt-12">
              {/* Form Section */}
              <div className="flex-1">
                <div className="bg-card rounded-3xl p-6 sm:p-10 shadow-xl shadow-foreground/5 border border-border min-h-[500px]">
                  <AnimatePresence mode="wait">
                    {/* Step 1: Select Service */}
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h2 className="text-xl font-semibold text-foreground">Select a Service</h2>
                          <span className="text-sm text-muted-foreground font-medium">Step 1 of 4</span>
                        </div>
                        <div className="grid gap-3">
                          {services.map((service) => (
                            <button
                              key={service.id}
                              onClick={() => {
                                setSelectedService(service.id)
                                setStep(2)
                              }}
                              className={cn(
                                "w-full p-5 rounded-2xl border-2 text-left transition-all flex items-center justify-between group",
                                selectedService === service.id
                                  ? "border-primary bg-primary/5"
                                  : "border-border hover:border-primary/50 bg-background"
                              )}
                            >
                              <div>
                                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                  {service.name}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {service.duration} | {service.price}
                                </p>
                              </div>
                              <ChevronRight
                                className={cn(
                                  "w-5 h-5 transition-all group-hover:translate-x-1",
                                  selectedService === service.id ? "text-primary" : "text-muted-foreground"
                                )}
                              />
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Select Provider */}
                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center gap-4 mb-2">
                           <button onClick={() => setStep(1)} className="p-2 -ml-2 rounded-full hover:bg-muted transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                          </button>
                          <h2 className="text-xl font-semibold text-foreground">Select a Provider</h2>
                        </div>
                        <div className="grid gap-3">
                          <button
                            onClick={() => { setSelectedProvider("any"); setStep(3); }}
                            className={cn(
                              "w-full p-5 rounded-2xl border-2 text-left transition-all flex items-center justify-between group",
                              selectedProvider === "any" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 bg-background"
                            )}
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center">
                                <User className="w-7 h-7 text-muted-foreground" />
                              </div>
                              <div>
                                <p className="font-semibold text-foreground">First Available</p>
                                <p className="text-sm text-muted-foreground">Expert provider matching your time</p>
                              </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-all" />
                          </button>
                          {providers.map((provider) => (
                            <button
                              key={provider.id}
                              onClick={() => { setSelectedProvider(provider.id); setStep(3); }}
                              className={cn(
                                "w-full p-5 rounded-2xl border-2 text-left transition-all flex items-center justify-between group",
                                selectedProvider === provider.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 bg-background"
                              )}
                            >
                              <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                                  <span className="font-semibold text-primary text-lg">
                                    {provider.name.split(" ").map((n) => n[0]).join("")}
                                  </span>
                                </div>
                                <div>
                                  <p className="font-semibold text-foreground">{provider.name}</p>
                                  <p className="text-sm text-muted-foreground">{provider.title}</p>
                                </div>
                              </div>
                              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-all" />
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Date & Time */}
                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-8"
                      >
                        <div className="flex items-center gap-4 mb-2">
                           <button onClick={() => setStep(2)} className="p-2 -ml-2 rounded-full hover:bg-muted transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                          </button>
                          <h2 className="text-xl font-semibold text-foreground">Choose Date & Time</h2>
                        </div>
                        
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <Calendar className="w-5 h-5 text-primary" />
                            <h3 className="font-medium">Select a Date</h3>
                          </div>
                          <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                            {getDates().map((date) => (
                              <button
                                key={date.toISOString()}
                                onClick={() => setSelectedDate(date)}
                                className={cn(
                                  "p-3 rounded-xl text-center transition-all",
                                  selectedDate?.toDateString() === date.toDateString()
                                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                                    : "bg-muted hover:bg-muted/80 text-foreground"
                                )}
                              >
                                <p className="text-[10px] uppercase font-bold tracking-tighter opacity-70">
                                  {date.toLocaleDateString("en-US", { weekday: "short" })}
                                </p>
                                <p className="text-lg font-semibold leading-none mt-1">
                                  {date.getDate()}
                                </p>
                              </button>
                            ))}
                          </div>
                        </div>

                        {selectedDate && (
                          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
                            <div className="flex items-center gap-2 mb-4">
                              <Clock className="w-5 h-5 text-primary" />
                              <h3 className="font-medium">Available Times</h3>
                            </div>
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                              {timeSlots.map((time) => (
                                <button
                                  key={time}
                                  onClick={() => setSelectedTime(time)}
                                  className={cn(
                                    "p-3 rounded-xl text-sm font-medium transition-all",
                                    selectedTime === time
                                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                                      : "bg-muted hover:bg-muted/80 text-foreground"
                                  )}
                                >
                                  {time}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}

                        <Button
                          disabled={!selectedDate || !selectedTime}
                          onClick={() => setStep(4)}
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 rounded-2xl text-lg mt-8 shadow-lg shadow-primary/20"
                        >
                          Continue to Details
                        </Button>
                      </motion.div>
                    )}

                    {/* Step 4: Details */}
                    {step === 4 && (
                      <motion.div
                        key="step4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-6"
                       >
                        <div className="flex items-center gap-4 mb-2">
                           <button onClick={() => setStep(3)} className="p-2 -ml-2 rounded-full hover:bg-muted transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                          </button>
                          <h2 className="text-xl font-semibold text-foreground">Your Information</h2>
                        </div>

                        <div className="rounded-2xl border border-border bg-muted/40 px-5 py-4">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            This is a <span className="font-semibold text-foreground">front-end prototype</span>. Submitting will
                            show a confirmation screen for review — it will <span className="font-semibold text-foreground">not</span>{" "}
                            contact the clinic or create a real appointment.
                          </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-sm font-medium text-foreground ml-1">First Name</label>
                            <input
                              type="text"
                              value={formData.firstName}
                              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                              className="w-full p-4 rounded-2xl bg-background border border-border focus:border-primary outline-none transition-all"
                              placeholder="Jane"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-sm font-medium text-foreground ml-1">Last Name</label>
                            <input
                              type="text"
                              value={formData.lastName}
                              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                              className="w-full p-4 rounded-2xl bg-background border border-border focus:border-primary outline-none transition-all"
                              placeholder="Doe"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-sm font-medium text-foreground ml-1">Email Address</label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full p-4 rounded-2xl bg-background border border-border focus:border-primary outline-none transition-all"
                            placeholder="jane@example.com"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-sm font-medium text-foreground ml-1">Phone Number</label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full p-4 rounded-2xl bg-background border border-border focus:border-primary outline-none transition-all"
                            placeholder="(555) 123-4567"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-sm font-medium text-foreground ml-1">Notes (Optional)</label>
                          <textarea
                            value={formData.notes}
                            onChange={(e) => setFormData({...formData, notes: e.target.value})}
                            rows={3}
                            className="w-full p-4 rounded-2xl bg-background border border-border focus:border-primary outline-none transition-all resize-none"
                            placeholder="Tell us about any specific concerns..."
                           />
                        </div>

                        <Button
                          disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                          onClick={handleSubmit}
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 rounded-2xl text-lg mt-4 shadow-lg shadow-primary/20"
                        >
                          Submit Request (Demo)
                        </Button>
                      </motion.div>
                    )}

                    {/* Step 5: Success (Full Width) */}
                    {step === 5 && (
                      <motion.div
                        key="step5"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-10"
                      >
                        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
                          <Check className="w-12 h-12 text-primary" />
                        </div>
                        <h2 className="font-serif text-3xl font-semibold mb-3">Request Received (Prototype)</h2>
                        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                          This is a demo confirmation screen for the clinic to review the experience.
                          No email, SMS, or calendar booking was sent.
                        </p>
                        
                        <div className="bg-muted/50 rounded-3xl p-8 text-left border border-border mb-10">
                          <div className="grid gap-4">
                            <div>
                              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Treatment</p>
                              <p className="font-semibold text-lg">{services.find(s => s.id === selectedService)?.name}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Date</p>
                                <p className="font-semibold">{selectedDate?.toLocaleDateString("en-US", { month: "short", day: "numeric" })}</p>
                              </div>
                              <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Time</p>
                                <p className="font-semibold">{selectedTime}</p>
                              </div>
                            </div>
                            <div>
                              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Provider</p>
                              <p className="font-semibold">{selectedProvider === "any" ? "First Available" : providers.find(p => p.id === selectedProvider)?.name}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
                          <Button
                            variant="outline"
                            className="rounded-full px-8 h-12"
                            onClick={async () => {
                              try {
                                const payload = JSON.stringify(buildDemoRequest(), null, 2)
                                await navigator.clipboard.writeText(payload)
                                setCopied(true)
                                window.setTimeout(() => setCopied(false), 1500)
                              } catch {
                                // ignore clipboard failures in prototype
                              }
                            }}
                          >
                            {copied ? "Copied!" : "Copy Request Summary"}
                          </Button>
                          <Button
                            variant="outline"
                            className="rounded-full px-8 h-12"
                            onClick={() => {
                              try {
                                const payload = JSON.stringify(buildDemoRequest(), null, 2)
                                const blob = new Blob([payload], { type: "application/json" })
                                const url = URL.createObjectURL(blob)
                                const a = document.createElement("a")
                                a.href = url
                                a.download = "verdun-clinic-prototype-request.json"
                                a.click()
                                URL.revokeObjectURL(url)
                              } catch {
                                // ignore download failures in prototype
                              }
                            }}
                          >
                            Download JSON
                          </Button>
                        </div>

                        <Link href="/">
                          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 rounded-full text-lg shadow-lg shadow-primary/20 transition-all active:scale-95">
                            Back to Homepage
                          </Button>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Sidebar Summary (Desktop Only) */}
              {step < 5 && (
                <div className="hidden lg:block w-80">
                  <div className="bg-card rounded-3xl p-8 shadow-xl shadow-foreground/5 border border-border sticky top-32">
                    <h3 className="font-serif text-xl font-semibold mb-6">Appointment Summary</h3>
                    
                    <div className="space-y-6">
                      <div className="pb-4 border-b border-border">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Treatment</p>
                        {selectedService ? (
                          <p className="font-medium text-foreground">{services.find(s => s.id === selectedService)?.name}</p>
                        ) : (
                          <p className="text-sm text-muted-foreground italic">Not selected</p>
                        )}
                      </div>

                      <div className="pb-4 border-b border-border">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Provider</p>
                        {selectedProvider ? (
                          <p className="font-medium text-foreground">
                            {selectedProvider === "any" ? "First Available" : providers.find(p => p.id === selectedProvider)?.name}
                          </p>
                        ) : (
                          <p className="text-sm text-muted-foreground italic">Not selected</p>
                        )}
                      </div>

                      <div className="pb-4 border-b border-border">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Time & Date</p>
                        {selectedDate && selectedTime ? (
                          <div className="space-y-1">
                            <p className="font-medium text-foreground">{selectedDate.toLocaleDateString("en-US", { month: "long", day: "numeric" })}</p>
                            <p className="text-sm text-primary font-semibold">{selectedTime}</p>
                          </div>
                        ) : (
                          <p className="text-sm text-muted-foreground italic">Not selected</p>
                        )}
                      </div>

                      <div className="pt-2">
                        <p className="text-xs text-muted-foreground leading-relaxed italic">
                          Demo only — no real booking will be created. Price and duration will be confirmed during consultation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer onBookClick={() => {}} />
    </div>
  )
}
