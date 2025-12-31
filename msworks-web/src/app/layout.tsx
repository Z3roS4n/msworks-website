import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const montserrat = Montserrat_Alternates({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const siteUrl = 'https://www.msworks.it'; 

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "M's Works | Web Agency Palermo - Sviluppo Siti & Graphic Design",
    template: "%s | M's Works Palermo"
  },
  description: "Diamo vita al tuo progetto digitale a Palermo. Specializzati in Sviluppo Web Next.js, Graphic Design, SEO e Ads. Team locale, qualità globale. Contattaci!",
  
  // Le keywords sono meno rilevanti per Google oggi, ma utili per altri motori
  keywords: [
    "Web Agency Palermo",
    "Sviluppo siti web Palermo",
    "Realizzazione siti internet Sicilia",
    "Graphic Design Palermo",
    "Consulenza SEO Palermo",
    "Next.js Developer Italia",
    "Gestione Ads Palermo",
    "GDPR Compliance siti web",
    "Antonio Murabito",
    "M's Works"
  ],
  
  authors: [{ name: "Antonio Murabito" }, { name: "M's Works Team" }],
  creator: "M's Works",
  publisher: "M's Works",
  
  // Configurazione per i Social Media (Open Graph)
  openGraph: {
    title: "M's Works | Sviluppo Web e Design a Palermo",
    description: "Nessun compromesso tra forma e funzione. Siamo il tuo partner digitale a Palermo per siti web moderni e brand identity memorabili.",
    url: siteUrl,
    siteName: "M's Works",
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Assicurati di creare questa immagine (1200x630px)
        width: 1200,
        height: 630,
        alt: "M's Works Team Palermo - Web Development",
      },
    ],
  },
  
  // Configurazione per Twitter/X
  twitter: {
    card: 'summary_large_image',
    title: "M's Works | Web Agency Palermo",
    description: "Sviluppo Web Next.js e Graphic Design nel cuore di Palermo. Trasformiamo la tua idea in un capolavoro digitale.",
    images: ['/og-image.jpg'], // Stessa immagine dell'Open Graph
  },

  // Importante per la SEO locale e l'indicizzazione
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Canonical URL (evita contenuti duplicati)
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService", // o "LocalBusiness"
    "name": "M's Works",
    "image": "https://www.msworks.it/brand-msworks.png", // Metti il link al tuo logo
    "@id": "https://www.msworks.it",
    "url": "https://www.msworks.it",
    "telephone": "+393758509144",
    "email": "business@murabito.eu",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Palermo",
      "addressRegion": "PA",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.1157, // Coordinate generiche di Palermo (meglio se metti quelle precise dell'ufficio se c'è)
      "longitude": 13.3615
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "10:00",
      "closes": "19:00"
    },
    "founder": {
      "@type": "Person",
      "name": "Antonio Murabito"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Palermo"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Sicilia"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/msworks.it", // Aggiungi i vostri social
      "https://www.linkedin.com/in/z3ros4n"
    ]
  };

  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
