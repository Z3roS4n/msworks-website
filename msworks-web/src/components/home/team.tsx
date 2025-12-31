import { Button } from "@/components/ui/button";
import { url } from "inspector";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Antonio Murabito",
    title: "Founder & Web Developer",
    bio: "Antonio è il fondatore e CEO, Lead Developer di M's Works. Fiero palermitano, perito tecnico e studente di Ingegneria con una forte passione per il Web Development e una visione innovativa, Antonio guida il team verso il successo, assicurando che ogni progetto rifletta i più alti standard di qualità e creatività.",
    imageUrl:
      "/antonio.png",
    socials: [
      {
        url: "https://instagram.com/_antonio.jar",
        icon: <InstagramIcon></InstagramIcon>
      },
      {
        url: "https://linkedin.com/in/z3ros4n",
        icon: <LinkedinIcon></LinkedinIcon>
      },
      {
        url: "https://github.com/Z3roS4n",
        icon: <GithubIcon></GithubIcon>
      }
    ],
  },
  {
    name: "Gabriele Iannazzo",
    title: "Developer & Security Expert",
    bio: "Gabriele è un esperto sviluppatore con una passione per la sicurezza informatica. Anche lui di Palermo, attualmente studente di Informatica con anni di esperienza nel settore, Gabriele si dedica a creare soluzioni innovative e sicure per i nostri clienti.",
    imageUrl:
      "/ianni.png",
    socials: [
      {
        url: "https://instagram.com/i4nni",
        icon: <InstagramIcon></InstagramIcon>
      },
      {
        url: "https://github.com/anacletoTM",
        icon: <GithubIcon></GithubIcon>
      }
    ],
  },
  {
    name: "Cesare Tinaglia",
    title: "Communication Expert",
    bio: "Cesare è un esperto di comunicazione con una vasta esperienza nel settore. Anche lui di Palermo, attualmente studente di Comunicazione, la sua capacità di creare strategie di comunicazione efficaci aiuta a trasmettere il messaggio del nostro brand in modo chiaro e coinvolgente.",
    imageUrl:
      "/cesare.png",
    socials: [
      {
        url: "https://instagram.com/cesaretinaglia",
        icon: <InstagramIcon></InstagramIcon>
      },
    ],
  },
];

const Team = () => {
  return (
    <div id="team" className="flex flex-col justify-center py-8 sm:py-12 px-6 lg:px-8 max-w-(--breakpoint-xl) mx-auto gap-16">
      <div className="text-center max-w-2xl mx-auto">
        <b className="text-center text-muted-foreground text-sm font-semibold uppercase">
          Persone straordinarie creano esperienze straordinarie
        </b>
        <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tighter">
          Incontra il nostro team
        </h2>
        <p className="mt-6 text-base sm:text-lg text-muted-foreground">
          La nostra filosofia è semplice: essere un team di persone diverse e appassionate che lavorano insieme per creare soluzioni digitali eccezionali.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row-reverse sm:justify-center gap-3">
          <Button size="lg" className="rounded-full" asChild>
            <Link href="#contact">Prendiamoci un caffè insieme!</Link>
          </Button>
          {/*<Button size="lg" variant="default" className="rounded-full">
            Chi Siamo
          </Button>*/}
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-center gap-x-8 gap-y-12">
        {teamMembers.map((member) => (
          <div key={member.name} className="w-1/4 not-lg:w-full">
            <Image
              src={member.imageUrl}
              alt={member.name}
              className="w-full aspect-square rounded-lg object-cover bg-secondary"
              width={600}
              height={600}
            />
            <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
            <p className="text-muted-foreground text-sm">{member.title}</p>
            <p className="mt-3">{member.bio}</p>
            <div className="mt-4 flex items-center gap-2.5">
              { member.socials.length > 0 ? member.socials.map((social, index) => (
                  <Button                 
                    className="bg-accent hover:bg-accent text-muted-foreground shadow-none"
                    size="icon"
                    asChild key={index}
                  >
                    <Link href={social.url} target="_blank">
                      {social.icon}
                    </Link>
                  </Button>
                )) : <></>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
