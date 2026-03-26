"use client"

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Maya Adhami",
    "medicalSpecialty": "ENT, Facial Plastic Surgery",
    "image": "https://verdunclinic.com/dr-maya-adhami.png",
    "@id": "https://verdunclinic.com",
    "url": "https://verdunclinic.com",
    "telephone": "+96171230515",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rue 26, Tallet El Khayyat, Verdun",
      "addressLocality": "Beirut",
      "addressRegion": "Beirut Governorate",
      "postalCode": "1103",
      "addressCountry": "LB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.883537,
      "longitude": 35.482084
    },
    "parentOrganization": {
      "@type": "MedicalBusiness",
      "name": "Verdun Clinic",
      "url": "https://verdunclinic.com"
    },
    "knowsAbout": [
      "Rhinoplasty",
      "Facial Plastic Surgery",
      "ENT Medical Services",
      "Botox",
      "Dermal Fillers",
      "Sculptra",
      "Light Eyes Ultra"
    ],
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
        "opens": "10:00",
        "closes": "14:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/drmayaadhami/",
      "https://www.facebook.com/drmayaadhami"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
