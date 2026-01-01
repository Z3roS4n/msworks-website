import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    category: "Web Development",
    title: "Siti Web Performanti & Web App Custom",
    details: "Non semplici pagine, ma strumenti di business. Realizziamo siti web ultra-veloci per la visibilità locale e Web App complesse (React, Next.js) per aziende che devono gestire dati, utenti e processi. Codice pulito, scalabile e sicuro.",
    tutorialLink: "#contact",
    image: "/feature-1.png",
  },
  {
    category: "Graphic Design",
    title: "Brand Identity & UI Design",
    details: "L'estetica è la prima forma di fiducia. Progettiamo interfacce utente (UI) intuitive per i tuoi software e identità visive forti per il tuo brand. Design strategico che comunica professionalità al primo sguardo.",
    tutorialLink: "#contact",
    image: "/feature-2.png",
  },
  {
    category: "Ads Management",
    title: "Campagne Pubblicitarie a Performance",
    details: "Smetti di sperare nel passaparola. Gestiamo campagne su Meta e Google focalizzate esclusivamente sul ROI. Portiamo lead qualificati alle attività locali e traffico profilato agli e-commerce, monitorando ogni conversione.",
    tutorialLink: "#contact",
    image: "/feature-3.png",
  },
  {
    category: "GDPR Compliance",
    title: "Sicurezza Dati & Compliance Legale",
    details: "La protezione dei dati è un asset aziendale. Blindiamo i tuoi progetti digitali integrando sicurezza informatica e conformità GDPR fin dalla prima riga di codice. Affidabilità totale per te e i tuoi utenti.",
    tutorialLink: "#contact",
    image: "/feature-5.png",
  },
  {
    category: "SEO/GEO Optimization",
    title: "Posizionamento Locale e Nazionale",
    details: "Fatti trovare da chi ti sta già cercando. Domina le ricerche locali a Palermo con la GEO-localizzazione avanzata o scala le classifiche nazionali con una SEO tecnica impeccabile. Più traffico organico, meno costi pubblicitari.",
    tutorialLink: "#contact",
    image: "/feature-6.png",
  },
];

const Features = () => {
  return (
    <div id="features" className="min-h-screen flex items-center justify-center">
      <div className="max-w-(--breakpoint-lg) w-full py-10 px-6">
        <h2 className="text-4xl md:text-[2.75rem] md:leading-[1.2] font-semibold tracking-[-0.03em] sm:max-w-xl text-pretty sm:mx-auto text-center">
          La tua soluzione completa per il successo digitale
        </h2>
        <p className="mt-2 text-muted-foreground text-lg sm:text-xl sm:text-center">

        </p>
        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
          {features.map((feature) => (
            <div
              key={feature.category}
              className="flex flex-col md:flex-row items-center gap-x-12 gap-y-6 md:even:flex-row-reverse"
            >
              <Image src={feature.image ?? "/default-image.png"} 
                width={200} height={750} 
                alt={feature.title} 
                className="w-full aspect-3/2 bg-muted rounded-xl border border-border/50 basis-1/2" 
              />
              <div className="basis-1/2 shrink-0">
                <span className="uppercase font-medium text-sm text-muted-foreground">
                  {feature.category}
                </span>
                <h4 className="my-3 text-3xl font-semibold tracking-[-0.02em]">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">{feature.details}</p>
                <Button asChild size="lg" className="mt-6 rounded-full gap-3">
                  <Link href={feature.tutorialLink}>
                    Scopri di più <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
