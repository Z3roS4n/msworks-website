import {
  BadgeDollarSign,
  Network,
  Route,
  ShieldCheck,
  Undo2,
  UserRoundCheck,
} from "lucide-react";

const faq = [
  {
    icon: Undo2,
    question: "Qual è la vostra politica di reso?",
    answer: "I servizi digitali non sono rimborsabili una volta consegnati. Tuttavia, se non sei soddisfatto del risultato finale, contatta il nostro team di supporto entro 14 giorni per discutere le opzioni disponibili.",
  },
  {
    icon: Route,
    question: "Che tempo ci vuole per la consegna del progetto?",
    answer:
      "Il tempo di consegna del progetto varia in base alla complessità e alle specifiche richieste. Ti forniremo una stima dettagliata durante la fase di preventivo.",
  },
  {
    icon: Network,
    question: "Che tecnologie utilizzate per lo sviluppo web?",
    answer:
      "Utilizziamo una vasta gamma di tecnologie moderne come React, Next.js, Node.js, e altre per garantire soluzioni web performanti e scalabili.",
  },
  {
    icon: BadgeDollarSign,
    question: "Quali sono le modalità di pagamento?",
    answer:
      "Accettiamo solamente pagamenti tramite bonifico bancario, PayPal e carte di credito. I dettagli del pagamento saranno forniti nella fattura.",
  },
  {
    icon: ShieldCheck,
    question: "Come proteggete i dati dei clienti?",
    answer:
      "Adottiamo rigorose misure di sicurezza per proteggere i dati dei nostri clienti, inclusa la crittografia, l'accesso limitato e la conformità alle normative sulla privacy.",
  },
  {
    icon: UserRoundCheck,
    question: "Dove posso ottenere assistenza per ulteriori domande?",
    answer:
      "Contattaci via email all'indirizzo business@murabito.eu o chiamaci al numero +39 375 850 9144 per assistenza su qualsiasi richiesta (anche su WhatsApp).",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-(--breakpoint-lg)">
        <h2 className="text-4xl md:text-5xl leading-[1.15]! font-semibold tracking-[-0.035em] text-center">
          Domande Frequenti
        </h2>
        <p className="mt-3 text-xl text-center text-muted-foreground">
          Trova le risposte alle domande più comuni sui nostri servizi e processi.
        </p>

        <div className="mt-12 grid md:grid-cols-2 rounded-xl gap-4">
          {faq.map(({ question, answer, icon: Icon }) => (
            <div key={question} className="border p-6 rounded-xl">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-accent">
                <Icon />
              </div>
              <div className="mt-5 mb-2 flex items-start gap-2 text-[1.35rem] font-semibold tracking-[-0.02em]">
                <span>{question}</span>
              </div>
              <p className="text-foreground/70">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
