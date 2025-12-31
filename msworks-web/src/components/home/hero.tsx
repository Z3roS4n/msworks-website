import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
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
        <h1 className="mt-6 text-4xl --font-montserrat sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
          La tua <span className="font-bold">idea</span> è il nostro prossimo <span className=" font-bold">capolavoro</span>.
        </h1>
        <p className="mt-6 md:text-lg text-foreground/80">
          Web Development e Graphic Design uniti per creare prodotti digitali memorabili.<br/>Nessun compromesso tra forma e funzione.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg" className="rounded-full text-base" asChild>
              <Link href="#contact">Dai vita al tuo progetto! <ArrowUpRight className="h-5! w-5!" /></Link>
            </Button>
          {/*<Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
          >
            <CirclePlay className="h-5! w-5!" /> Progetti
          </Button>*/}
        </div>
      </div>
      <Image src={"/hero_image.png"} alt="Hero Mockup" width={1000} height={1000} className="w-full max-w-(--breakpoint-xl) mx-auto aspect-video object-fit rounded-4xl" />
    </div>
  );
}
