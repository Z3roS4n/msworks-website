import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"

const montserrat = Montserrat_Alternates({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const siteUrl = 'https://www.msworks.it'; 

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "M's Works | Sviluppo Siti Web & Web App Custom a Palermo",
    template: "%s | M's Works - Soluzioni Digitali"
  },
  description: "Dalla visibilità locale all'automazione aziendale. Realizziamo Siti Web per PMI e Web App complesse (Next.js) per aziende strutturate. Il tuo partner tecnologico a Palermo e in Italia.",
  
  // Keyword strategiche: Mix Locale (Palermo) + Tecnico (Software/App)
  keywords: [
    // Target 1: Locale & PMI
    "Web Agency Palermo",
    "Realizzazione siti web Palermo",
    "Agenzia SEO Sicilia",
    "Gestione Ads Meta Google",
    
    // Target 2: Aziende & Tech
    "Sviluppo Web App Custom",
    "Software House Italia",
    "Next.js Developer",
    "Digitalizzazione processi aziendali",
    "Sviluppo Gestionali Web",
    
    // Brand
    "Antonio Murabito",
    "M's Works"
  ],
  
  authors: [{ name: "Antonio Murabito" }, { name: "M's Works Team" }],
  creator: "M's Works",
  publisher: "M's Works",
  
  // Open Graph: Per quando il link viene condiviso su LinkedIn/WhatsApp
  openGraph: {
    title: "M's Works | Siti Web Performanti & Software Custom",
    description: "Sviluppiamo ecosistemi digitali: siti che portano clienti alle PMI e Web App scalabili per le aziende. Scopri come uniamo design e ingegneria.",
    url: siteUrl,
    siteName: "M's Works",
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Assicurati che questa immagine sia professionale (es. mockup sito + codice)
        width: 1200,
        height: 630,
        alt: "M's Works - Sviluppo Web e Software",
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "M's Works | Sviluppo Web & Software Solutions",
    description: "Siti web veloci per crescere e Web App complesse per scalare. Il tuo partner tecnico a Palermo.",
    images: ['/og-image.jpg'],
  },

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
  
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // JSON-LD Aggiornato per riflettere la natura ibrida (Locale + Nazionale)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService", // Manteniamo questo per coprire sia Agency che Dev
    "name": "M's Works",
    "image": "https://www.msworks.it/brand-msworks.png",
    "@id": "https://www.msworks.it",
    "url": "https://www.msworks.it",
    "telephone": "+393758509144",
    "email": "business@murabito.eu",
    "priceRange": "$$", // $$ indica fascia media (accessibile ma pro), $$$ spaventerebbe le PMI
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Palermo",
      "addressRegion": "PA",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.1157, 
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
      "name": "Antonio Murabito",
      "jobTitle": "Lead Full Stack Developer" // Più autorevole di "Owner"
    },
    // Qui dichiariamo che operi sia a Palermo che in tutta Italia
    "areaServed": [
      {
        "@type": "City",
        "name": "Palermo"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Sicilia"
      },
      {
        "@type": "Country",
        "name": "Italia" // Fondamentale per il Target 2 (Software)
      }
    ],
    // Dichiariamo esplicitamente i servizi per Google
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servizi Digitali",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sviluppo Siti Web"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sviluppo Web App Custom (SaaS & Gestionali)"
            }
          },
          {
             "@type": "Offer",
             "itemOffered": {
               "@type": "Service",
               "name": "Consulenza SEO & Ads"
             }
          }
        ]
    },
    "sameAs": [
      "https://www.instagram.com/msworks.it",
      "https://www.linkedin.com/in/z3ros4n" 
      // Aggiungi GitHub se hai repo pubblici interessanti per le aziende
    ]
  };

  return (
    <html lang="it"> {/* Importante: lang="it" per la SEO italiana */}
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <Analytics></Analytics>
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