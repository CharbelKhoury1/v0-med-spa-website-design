import { Metadata } from "next"
import { notFound } from "next/navigation"
import { TreatmentClientContent } from "./treatment-client"

const treatmentData: Record<string, any> = {
  "rhinoplasty": {
    name: "Rhinoplasty",
    tagline: "Natural results, expert care",
    description:
      "Dr. Maya Adhami combines her expert medical training with an eye for beauty. Every nose surgery is carefully planned to give you a natural look that fits your face perfectly and helps you breathe better.",
    price: "Consultation Required",
    duration: "1-3 hours",
    benefits: [
      "Natural-looking results",
      "Expert surgical care",
      "Customized for your face",
      "Better breathing",
      "Personalized follow-up care",
    ],
    process: [
      {
        step: "Consultation & 3D Imaging",
        detail:
          "Dr. Maya looks at your facial structure and uses 3D images to show you how your results will look.",
      },
      {
        step: "The Procedure",
        detail:
          "A precise surgery focused on both how your nose looks and how it functions.",
      },
      {
        step: "Recovery & Check-ups",
        detail:
          "We stick by you throughout your healing with regular check-ins to ensure the best results.",
      },
    ],
    expectedResults:
      "You'll start seeing results in 2-3 weeks as swelling goes down. The final, natural look will fully emerge over several months. Our patients love how balanced and refined they look.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&h=600&fit=crop",
    results: {
      beforeImage: "/results/rhino-before.png",
      afterImage: "/results/rhino-after.png",
      beforeLabel: "Before",
      afterLabel: "After",
    },
  },
  "botox-dysport": {
    name: "Botox & Dysport",
    tagline: "Refreshed and natural-looking skin",
    description:
      "Botox and Dysport are safe, quick treatments that help soften wrinkles by relaxing facial muscles. We focus on giving you a refreshed, younger look while keeping your natural expressions.",
    price: "From $250",
    duration: "30 minutes",
    benefits: [
      "Softens fine lines and wrinkles",
      "Helps prevent new lines",
      "Quick with no downtime",
      "Naturally refreshed look",
      "Safe and FDA-approved",
    ],
    process: [
      {
        step: "Consultation",
        detail: "We discuss your goals and look at your skin to create a plan.",
      },
      {
        step: "Mapping",
        detail:
          "We mark the exact spots to treat for the most natural-looking results.",
      },
      {
        step: "Quick Treatment",
        detail: "Small, gentle injections that only take a few minutes.",
      },
    ],
    expectedResults:
      "You'll start to see your skin smoothing out in 3-5 days, with full results in about 2 weeks. The effect usually lasts 3-4 months.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&h=600&fit=crop",
  },
  "sculptra-collagen": {
    name: "Sculptra & Fillers",
    tagline: "Restore your skin's youthful glow",
    description:
      "Sculptra is a long-lasting collagen stimulator that works deep within the skin. It gradually replaces lost collagen for a natural, youthful look that can last up to two years.",
    price: "From $350",
    duration: "45 minutes",
    benefits: [
      "Naturally restores lost volume",
      "Stimulates your body's collagen",
      "Long-lasting, gradual results",
      "Improves skin texture",
      "Subtle and natural-looking",
    ],
    process: [
      {
        step: "Personal Assessment",
        detail:
          "We evaluate your facial structure to determine the target areas.",
      },
      {
        step: "Treatment Plan",
        detail:
          "A series of injections planned over several weeks for gradual improvement.",
      },
      {
        step: "Application",
        detail: "Precise injections focused on deep hydration and volume.",
      },
    ],
    expectedResults:
      "Results appear gradually over several weeks. Your skin will feel firmer and more voluminous as your own collagen builds back up. Results can last up to 24 months.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&h=600&fit=crop",
    results: {
      beforeImage: "/results/fillers-before.png",
      afterImage: "/results/fillers-after.png",
      beforeLabel: "Before",
      afterLabel: "After",
    },
  },
  "light-eyes-ultra": {
    name: "Light Eyes Ultra",
    tagline: "Brighten and refresh your eyes",
    description:
      "A specialized cocktail of antioxidants, vitamins, and minerals designed to treat the delicate skin around the eyes. Perfect for dark circles, puffiness, and fine wrinkles.",
    price: "From $200",
    duration: "30 minutes",
    benefits: [
      "Reduces dark circles",
      "Minimizes eye puffiness",
      "Softens fine lines",
      "Brightens the orbital area",
      "Gentle and non-invasive",
    ],
    process: [
      {
        step: "Analysis",
        detail: "We check for the cause of dark circles or puffiness.",
      },
      {
        step: "Treatment",
        detail: "Tiny, gentle mesotherapy injections around the eyes.",
      },
      { step: "Glow", detail: "Apply a soothing cream and sun protection." },
    ],
    expectedResults:
      "You will notice a brighter, more 'awake' look in just a few days. For best results, a series of 3-4 sessions is often recommended.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=600&fit=crop",
  },
  "ent-consultation": {
    name: "ENT Medical Services",
    tagline: "Expert care for your health",
    description:
      "Comprehensive medical services for ear, nose, and throat conditions. Led by Dr. Maya Adhami, we focus on accurate diagnosis and personalized treatment plans for your health.",
    price: "Consultation Required",
    duration: "30 minutes",
    benefits: [
      "Board-certified expertise",
      "Advanced diagnostic tools",
      "Personalized medical plans",
      "Focus on long-term health",
      "Comfortable medical environment",
    ],
    process: [
      {
        step: "Initial Check-up",
        detail:
          "A thorough examination of your ear, nose, or throat health.",
      },
      {
        step: "Diagnostics",
        detail:
          "If needed, advanced tests to identify the root cause of symptoms.",
      },
      {
        step: "Care Plan",
        detail:
          "A detailed discussion on the best path forward for your health.",
      },
    ],
    expectedResults:
      "We aim for long-term health and clear communication about your condition and the next steps in your care.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=600&fit=crop",
  },
  "dermal-fillers": {
    name: "Dermal Fillers",
    tagline: "Refine your features naturally",
    description:
      "Add soft, natural volume to your lips, cheeks, or jawline. We use only the highest quality hyaluronic acid fillers to ensure natural results that move with your face.",
    price: "From $400",
    duration: "45 minutes",
    benefits: [
      "Natural-looking volume",
      "Safe and dissolvable",
      "Immediate results",
      "Enhances natural features",
      "Minimal downtime",
    ],
    process: [
      {
        step: "Goal Setting",
        detail: "Discussing exactly where you want to add volume or shape.",
      },
      {
        step: "Precision Injection",
        detail: "Carefully placing filler to achieve harmony and balance.",
      },
      {
        step: "Aftercare",
        detail: "Ice and cooling pads to minimize swelling.",
      },
    ],
    expectedResults:
      "Results are immediate. Any slight swelling usually goes down within 48-72 hours, leaving you with a refined, natural look.",
    image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=1200&h=600&fit=crop",
    results: {
      beforeImage: "/results/jawline-before.png",
      afterImage: "/results/jawline-after.png",
      beforeLabel: "Before",
      afterLabel: "After",
    },
  },
}

export async function generateStaticParams() {
  return Object.keys(treatmentData).map((id) => ({
    id: id,
  }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const treatment = treatmentData[params.id]
  if (!treatment) return { title: "Treatment Not Found" }

  return {
    title: `${treatment.name} | Verdun Clinic by Dr. Maya Adhami`,
    description: treatment.description,
  }
}

export default function TreatmentDetailsPage({ params }: { params: { id: string } }) {
  const treatment = treatmentData[params.id]

  if (!treatment) {
    notFound()
  }

  // Server Components don't support hooks like useRouter, so we don't pass handleBookClick here.
  // The client component treatment-client will handle its own routing if needed.
  
  return (
    <TreatmentClientContent 
      treatment={treatment} 
    />
  )
}
