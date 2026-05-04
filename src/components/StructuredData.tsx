import { PRICING, SITE } from "@/lib/constants";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    description:
      "Software de citas para barberías y salones de belleza en México. Reserva online 24/7, comisiones automáticas y reportes claros. Pago único, licencia de por vida.",
    url: SITE.url,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "AppointmentScheduling",
    operatingSystem: "Web (cualquier navegador)",
    inLanguage: "es-MX",
    offers: {
      "@type": "Offer",
      price: String(PRICING.amount),
      priceCurrency: PRICING.currency,
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
      seller: {
        "@type": "Organization",
        name: "Grupo H37",
        email: SITE.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Querétaro",
          addressRegion: "QRO",
          addressCountry: "MX",
        },
      },
    },
    creator: {
      "@type": "Organization",
      name: "Grupo H37",
      url: SITE.url,
    },
    softwareVersion: "1.0",
    featureList: PRICING.includes.join(", "),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "1",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
