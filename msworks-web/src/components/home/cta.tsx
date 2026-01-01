import { Button } from "../ui/button";

const CTA = () => {
  return (
    <section className="bg-primary mt-30 mb-30 p-8 md:p-12 lg:p-16 text-center">
      <h2 className="text-3xl md:text-4xl text-secondary font-semibold mb-4">
        Sei pronto a trasformare la tua presenza digitale?
      </h2> 
      <p className="text-lg md:text-xl text-muted/70 mb-8">
        Contattaci oggi per discutere del tuo progetto e scoprire come possiamo aiutarti a realizzare la tua visione.
      </p>
      <div className="flex flex-col sm:flex-row max-w-3xl justify-center gap-4 mx-auto">
        <Button size="lg" variant={"secondary"} className="rounded-full">
          Contattaci adesso
        </Button>
        <Button size="lg" variant={"outline"} className="rounded-full">
          Sentiamoci su WhatsApp
        </Button>
      </div>
    </section>
  );
}

export default CTA;