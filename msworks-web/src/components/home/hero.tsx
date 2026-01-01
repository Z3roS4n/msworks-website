import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Binary, ChartNoAxesColumnIncreasing, CirclePlay } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-16 items-center justify-center px-6 py-16">
      <div className="text-center max-w-3xl">
        {/*<Badge
          variant="secondary"
          className="rounded-full py-1 border-border"
          asChild
        >
          <Link href="#">
            Nuovi progetti in Portfolio <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>*/}

        <h1 className="mt-6 text-5xl --font-montserrat sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
          Sviluppiamo <span className="font-bold">Ecosistemi Digitali</span> e <span className="font-bold">Siti web</span> su misura.
        </h1>
        <p className="mt-6 text-xl text-foreground/80">
          Da Palermo, portiamo le PMI locali ad avere più clienti e le Aziende italiane ad avere processi automatizzati.
        </p>
        <div className="mt-10 flex sm:flex-row flex-col justify-center gap-4">
          <Button size="lg" className="rounded-full text-base" asChild>
            <a href="#contact" className="flex flex-row items-center gap-2"><ChartNoAxesColumnIncreasing className="h-5! w-5!" />Aumenta le tue vendite</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
          >
            <a href="#contact" className="flex flex-row items-center gap-2"><Binary className="h-5! w-5!" /> Ho un processo da digitalizzare</a>
          </Button>
        </div>
      </div>
      <Image src={"/hero_image.png"} alt="Hero Mockup" width={1000} height={1000} className="w-full max-w-(--breakpoint-xl) mx-auto aspect-video object-fit rounded-4xl" />
    </div>
  );
}
