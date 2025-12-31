export default async function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen w-full px-6 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-foreground/60">
            Ultimo aggiornamento: 31 Dicembre 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-8">
          <div className="text-foreground/80 leading-relaxed">
            <p>
              Questa Informativa sulla Privacy descrive le modalit&agrave; di gestione del sito web msworks.it in riferimento al trattamento dei dati personali degli utenti che lo consultano. Si tratta di un&apos;informativa resa anche ai sensi dell&apos;art. 13 del Regolamento UE 2016/679 (GDPR).
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              1. Titolare del Trattamento
            </h2>
            <div className="text-foreground/80 leading-relaxed space-y-2">
              <p>Il Titolare del trattamento dei dati &egrave;:</p>
              <div className="pl-4 border-l-2 border-border">
                <p>Antonio Cirino Murabito</p>
                <p>antonio.murabito@pec.it</p>
                <p>MRBNNC06A05L407Y | P.Iva 07344720821</p>
              </div>
              <p className="mt-4">
                <strong>Email di contatto del Titolare:</strong>{" "}
                <a
                  href="mailto:business@murabito.eu"
                  className="text-primary hover:underline"
                >
                  business@murabito.eu
                </a>
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              2. Tipologie di Dati Raccolti
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">
                  A. Dati forniti volontariamente dall&apos;utente
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  L&apos;invio facoltativo, esplicito e volontario di posta elettronica agli indirizzi indicati su questo sito o la compilazione di moduli per l&apos;iscrizione alla Newsletter comporta la successiva acquisizione dell&apos;indirizzo email del mittente, necessario per rispondere alle richieste o erogare il servizio di newsletter, nonch&eacute; degli eventuali altri dati personali inseriti nella missiva.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">
                  B. Dati di navigazione e Statistiche (Vercel Analytics)
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  I sistemi informatici e le procedure software preposte al funzionamento di questo sito acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione &egrave; implicita nell&apos;uso dei protocolli di comunicazione di Internet. Questo sito utilizza Vercel Analytics, un servizio di analisi web fornito da Vercel Inc. Questo strumento permette di raccogliere dati statistici aggregati sull&apos;utilizzo del sito (es. pagine visitate, tempo di permanenza, provenienza geografica approssimativa, tipo di dispositivo) per migliorare le prestazioni e l&apos;esperienza utente.
                </p>
                <p className="text-foreground/80 leading-relaxed mt-2">
                  <strong>Nota:</strong> Vercel Analytics &egrave; configurato per rispettare la privacy e minimizzare la raccolta di dati identificativi.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">
                  C. Cookie
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Il sito utilizza esclusivamente Cookie Tecnici ed Essenziali. Non vengono utilizzati cookie di profilazione o tracciamento pubblicitario di terze parti. Per maggiori dettagli, consultare la sezione &quot;Cookie Policy&quot; in calce.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              3. Finalità del Trattamento e Base Giuridica
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              I dati personali sono trattati per le seguenti finalit&agrave;:
            </p>
            <ul className="space-y-3 pl-6 text-foreground/80 leading-relaxed">
              <li>
                <strong>Funzionamento del sito:</strong> Per garantire la corretta navigazione e fruizione dei servizi (Base giuridica: Esecuzione di un contratto o misure precontrattuali).
              </li>
              <li>
                <strong>Invio Newsletter:</strong> Per inviare periodicamente email informative, aggiornamenti o materiale promozionale relativo a M&apos;s Works, previo esplicito consenso dell&apos;utente (Base giuridica: Consenso).
              </li>
              <li>
                <strong>Statistica e Ottimizzazione:</strong> Per analizzare in forma aggregata il traffico del sito tramite Vercel Analytics al fine di migliorarne le prestazioni (Base giuridica: Legittimo interesse del Titolare).
              </li>
              <li>
                <strong>Sicurezza e Difesa:</strong> Per prevenire o scoprire attività fraudolente o abusi dannosi per il sito (Base giuridica: Legittimo interesse).
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              4. Modalità del Trattamento e Destinatari dei Dati
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Il trattamento &egrave; svolto con strumenti informatici e/o telematici, con modalit&agrave; organizzative strettamente correlate alle finalit&agrave; indicate. Oltre al Titolare, in alcuni casi, potrebbero avere accesso ai dati altri soggetti coinvolti nell&apos;organizzazione di questo Sito Web (personale amministrativo, commerciale, marketing, legali, amministratori di sistema) ovvero soggetti esterni nominati, se necessario, Responsabili del Trattamento da parte del Titolare.
            </p>
            <p className="text-foreground/80 leading-relaxed mt-4">
              In particolare, i dati potrebbero essere condivisi con:
            </p>
            <ul className="space-y-2 pl-6 text-foreground/80 leading-relaxed">
              <li>
                <strong>Vercel Inc.:</strong> Provider dell&apos;infrastruttura di hosting e del servizio di Analytics (Server situati prevalentemente in UE/USA - Vercel aderisce al Data Privacy Framework).
              </li>
              <li>
                <strong>Mailant:</strong> Piattaforma utilizzata per la gestione e l&apos;invio della newsletter.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              5. Trasferimento dei Dati all&apos;Estero
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              I dati trattati potrebbero essere trasferiti verso paesi extra-UE (es. Stati Uniti per servizi come Vercel o provider di email marketing). Tale trasferimento avviene sulla base di decisioni di adeguatezza della Commissione Europea (es. Data Privacy Framework) o sulla base di Clausole Contrattuali Standard (SCC).
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              6. Periodo di Conservazione
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              I dati sono trattati e conservati per il tempo richiesto dalle finalit&agrave; per le quali sono stati raccolti.
            </p>
            <ul className="space-y-2 pl-6 text-foreground/80 leading-relaxed">
              <li>
                <strong>Dati per la Newsletter:</strong> Conservati fino alla revoca del consenso (disiscrizione) da parte dell&apos;utente.
              </li>
              <li>
                <strong>Dati di Navigazione:</strong> Conservati per il tempo tecnico necessario all&apos;analisi statistica e poi cancellati o anonimizzati.
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              7. Diritti dell&apos;Interessato
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              In qualit&agrave; di interessato, l&apos;utente ha i diritti previsti dagli artt. 15-22 del GDPR, tra cui:
            </p>
            <ul className="space-y-2 pl-6 text-foreground/80 leading-relaxed">
              <li>Chiedere l&apos;accesso ai propri dati personali.</li>
              <li>Chiedere la rettifica o la cancellazione degli stessi.</li>
              <li>Chiedere la limitazione del trattamento.</li>
              <li>Opporsi al trattamento (in particolare per la newsletter).</li>
              <li>Revocare il consenso in qualsiasi momento.</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              Per esercitare i propri diritti, l&apos;utente pu&ograve; rivolgere una richiesta agli estremi di contatto del Titolare indicati in questo documento (
              <a
                href="mailto:business@murabito.eu"
                className="text-primary hover:underline"
              >
                business@murabito.eu
              </a>
              ).
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}