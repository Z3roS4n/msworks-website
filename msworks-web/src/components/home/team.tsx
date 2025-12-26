import { Button } from "@/components/ui/button";
import { DribbbleIcon, TwitchIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Antonio Murabito",
    title: "Founder & CEO",
    bio: "Antonio è il fondatore e CEO, Lead Developer di MSWorks. Con una forte passione per il Web Development e una visione innovativa, Antonio guida il team verso il successo, assicurando che ogni progetto rifletta i più alti standard di qualità e creatività.",
    imageUrl:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Gabriele Iannazzo",
    title: "Developer & Security Expert",
    bio: "Gabriele è un esperto sviluppatore con una passione per la sicurezza informatica. Con anni di esperienza nel settore, Gabriele si dedica a creare soluzioni innovative e sicure per i nostri clienti.",
    imageUrl:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Cesare Tinaglia",
    title: "Communication Expert",
    bio: "Cesare è un esperto di comunicazione con una vasta esperienza nel settore. La sua capacità di creare strategie di comunicazione efficaci aiuta a trasmettere il messaggio del nostro brand in modo chiaro e coinvolgente.",
    imageUrl:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Team = () => {
  return (
    <div className="flex flex-col justify-center py-8 sm:py-12 px-6 lg:px-8 max-w-(--breakpoint-xl) mx-auto gap-16">
      <div className="text-center max-w-2xl mx-auto">
        <b className="text-center text-muted-foreground text-sm font-semibold uppercase">
          We&apos;re hiring!
        </b>
        <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tighter">
          Meet Our Team
        </h2>
        <p className="mt-6 text-base sm:text-lg text-muted-foreground">
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture that empowers you to do you best work.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row-reverse sm:justify-center gap-3">
          <Button size="lg">Open Positions</Button>
          <Button size="lg" variant="outline">
            About Us
          </Button>
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
              <Button
                className="bg-accent hover:bg-accent text-muted-foreground shadow-none"
                size="icon"
                asChild
              >
                <Link href="#" target="_blank">
                  <TwitterIcon className="stroke-muted-foreground" />
                </Link>
              </Button>
              <Button
                className="bg-muted hover:bg-muted text-muted-foreground shadow-none"
                size="icon"
                asChild
              >
                <Link href="#" target="_blank">
                  <DribbbleIcon className="stroke-muted-foreground" />
                </Link>
              </Button>
              <Button
                className="bg-muted hover:bg-muted text-muted-foreground shadow-none"
                size="icon"
                asChild
              >
                <Link href="#" target="_blank">
                  <TwitchIcon className="stroke-muted-foreground" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
