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
    icon: Undo2, // Ho mantenuto l'icona, ma cambiato il concetto da "Reso" a "Revisioni"
    question: "Cosa succede se non sono soddisfatto della bozza iniziale?",
    answer: "Il rischio è zero perché lavoriamo per step. Non andiamo in sviluppo finché non hai approvato il design. Procediamo per iterazioni: ti mostriamo le bozze, raccogliamo i feedback e perfezioniamo finché il risultato non rispecchia esattamente la tua visione.",
  },
  {
    icon: Route,
    question: "Quanto tempo serve per andare online?",
    answer:
      "Dipende dall'obiettivo. Un sito vetrina professionale per una PMI è pronto in media in 2-3 settimane. Per Web App complesse o Software gestionali, le tempistiche variano (4-12+ settimane) e vengono definite in una roadmap chiara durante la fase di analisi.",
  },
  {
    icon: Network,
    question: "Il software sarà scalabile quando la mia azienda crescerà?",
    answer:
      "Assolutamente sì. Non usiamo 'pacchetti chiusi'. Sviluppiamo con tecnologie moderne (Next.js, Node, Cloud Architecture) pensate per scalare da 100 a 1 milione di utenti senza dover riscrivere il codice da zero.",
  },
  {
    icon: BadgeDollarSign,
    question: "Come funzionano i pagamenti?",
    answer:
      "Lavoriamo con una struttura trasparente a milestone (obiettivi). Solitamente richiediamo un acconto all'avvio e il saldo alla consegna (o tranche intermedie per progetti grossi). Accettiamo Bonifico Bancario, PayPal e Carte di Credito.",
  },
  {
    icon: ShieldCheck,
    question: "La sicurezza e il codice saranno di mia proprietà?",
    answer:
      "Sì. A fine progetto e saldo avvenuto, la proprietà intellettuale del codice è tua al 100%. Inoltre, adottiamo approcci 'Security by Design' e conformità GDPR nativa per proteggere i dati dei tuoi utenti e il tuo business.",
  },
  {
    icon: UserRoundCheck,
    question: "Offrite assistenza dopo la messa online?",
    answer:
      "Non ti abbandoniamo. Dopo il lancio offriamo un periodo di garanzia sui bug e proponiamo pacchetti di manutenzione annuale per aggiornamenti, sicurezza e nuove funzionalità. Siamo il tuo partner tecnologico, non solo fornitori.",
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
