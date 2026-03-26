"use client"

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Verdun Clinic by Dr. Maya Adhami",
    "image": "https://verdunclinic.com/hero-image.png", // Use clinic URL if available
    "@id": "https://verdunclinic.com",
    "url": "https://verdunclinic.com",
    "telephone": "+96171230515",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rue 26, Tallet El Khayyat, Verdun",
      "addressLocality": "Beirut",
      "addressCountry": "LB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.8869,
      "longitude": 35.4851
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "department": [
      { "@type": "MedicalSpecialty", "name": "Facial Esthetics" },
      { "@type": "MedicalSpecialty", "name": "Facial Plastic Surgery" },
      { "@type": "MedicalSpecialty", "name": "Dermatology" },
      { "@type": "MedicalSpecialty", "name": "ENT" },
      { "@type": "MedicalSpecialty", "name": "Cardiology" }
    ],
    "employee": {
      "@type": "Physician",
      "name": "Dr. Maya Adhami",
      "medicalSpecialty": "Otolaryngology, Facial Plastic Surgery",
      "alumniOf": [
        "American University of Beirut",
        "University of Balamand",
        "University of Paris Descartes"
      ],
      "memberOf": "European Academy of Facial Plastic Surgery"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
