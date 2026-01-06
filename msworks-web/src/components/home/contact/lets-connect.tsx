import ContactForm from "./form";

const LetsConnect = () => {
  return (
    <>
      <div id="contact-form" className="min-h-screen flex items-center justify-center pt-12 md:pt-2 pb-16">
        <div className="w-full max-w-(--breakpoint-xl) mx-auto px-6 xl:px-0">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tighter">
              Hai un progetto in mente? Parliamone!
            </h2>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground">
              Compila il modulo sottostante o contattaci direttamente tramite email o WhatsApp. Siamo entusiasti di collaborare con te per trasformare le tue idee in realtà digitali.
            </p>
          </div>
          <ContactForm></ContactForm>
        </div>
      </div>
    </>
  )
};


export default LetsConnect;