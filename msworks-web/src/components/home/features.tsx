import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    category: "Web Development",
    title: "Siti web moderni e reattivi",
    details: "Costruisci siti web moderni e reattivi che catturano l'attenzione del tuo pubblico. Utilizziamo le ultime tecnologie per garantire prestazioni ottimali e un'esperienza utente eccezionale.",
    tutorialLink: "#contact",
    image: "/feature-1.png",
  },
  {
    category: "Graphic Design",
    title: "Design visivi sorprendenti",
    details: "Crea design grafici accattivanti e professionali che comunicano efficacemente il tuo messaggio. Utilizziamo strumenti avanzati per garantire risultati di alta qualità.",
    tutorialLink: "#contact",
    image: "/feature-2.png",
  },
  {
    category: "Ads Management",
    title: "Ottimizza le tue campagne pubblicitarie",
    details:
      "Massimizza il rendimento delle tue campagne pubblicitarie con strategie di gestione degli annunci mirate. Analizziamo i dati per ottimizzare le performance e aumentare il ROI.",
    tutorialLink: "#contact",
    image: "/feature-3.png",
  },
  {
    category: "GDPR Compliance",
    title: "Proteggi la privacy dei tuoi utenti",
    details:
      "Proteggi i dati dei tuoi utenti e rispetta le normative GDPR. Implementa le migliori pratiche per la gestione dei dati e la privacy per costruire fiducia con il tuo pubblico.",
    tutorialLink: "#contact",
    image: "/feature-5.png",
  },
  {
    category: "SEO/GEO Optimization",
    title: "Migliora il posizionamento sui motori di ricerca",
    details: "Migliora la visibilità del tuo sito web sui motori di ricerca con tecniche SEO e GEO avanzate. Ottimizza i contenuti e la struttura del sito per attirare più traffico organico.",
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
