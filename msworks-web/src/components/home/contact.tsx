import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const Contact = () => (
  <div id="contact" className="min-h-screen flex items-center justify-center pt-12 md:pt-16 pb-2">
    <div className="w-full max-w-(--breakpoint-xl) mx-auto px-6 xl:px-0">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tighter">
          Teniamoci in contatto
        </h2>
        <p className="mt-6 text-base sm:text-lg text-muted-foreground">
          Siamo qui per rispondere a qualsiasi domanda tu possa avere. Che tu stia cercando di iniziare un nuovo progetto o semplicemente voglia saperne di più sui nostri servizi, non esitare a contattarci.
        </p>
      </div>
      <div className="mt-14 flex lg:flex-row flex-col justify-center gap-8">
        <div className="border border-dashed w-full lg:w-1/4 bg-muted/40 p-6 pb-8 rounded-xl">
          <div className="h-12 w-12 flex items-center justify-center bg-foreground/5 dark:bg-foreground/8 text-foreground rounded-full">
            <MailIcon />
          </div>
          <h3 className="mt-8 font-bold text-xl">Email</h3>
          <p className="mt-2.5 mb-4 text-muted-foreground">
            Rispondiamo entro 24 ore.
          </p>
          <a
            className="font-medium"
            href="mailto:business@murabito.eu"
          >
            business@murabito.eu
          </a>
        </div>
        <div className="border border-dashed w-full lg:w-1/4 bg-muted/40 p-6 pb-8 rounded-xl">
          <div className="h-12 w-12 flex items-center justify-center bg-foreground/5 dark:bg-foreground/8 text-foreground rounded-full">
            <MessageCircle />
          </div>
          <h3 className="mt-8 font-bold text-xl">WhatsApp</h3>
          <p className="mt-2.5 mb-4 text-muted-foreground">
            Chatta con noi per una risposta rapida.
          </p>
          <Button className="rounded-full" asChild>
            <Link href="https://wa.me/+393758509144" target="_blank" className="w-full justify-center">
              Inizia una chat con noi
            </Link>
          </Button>
        </div>
        <div className="border border-dashed w-full lg:w-1/4 bg-muted/40 p-6 pb-8 rounded-xl">
          <div className="h-12 w-12 flex items-center justify-center bg-foreground/5 dark:bg-foreground/8 text-foreground rounded-full">
            <PhoneIcon />
          </div>
          <h3 className="mt-8 font-bold text-xl">Phone</h3>
          <p className="mt-2.5 mb-4 text-muted-foreground">
            Dal lunedì al venerdì, 10:00 - 19:00.
          </p>
          <a className="font-medium" href="tel:+393758509144">
            +39 375 850 9144
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
