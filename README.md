# Lo Sgobbone Da Pippo

Sito vetrina per la trattoria con home e pagina menu separata, realizzato con Next.js 16 App Router, React 19, TypeScript e Tailwind CSS 4.

Lo scorrimento fluido desktop usa Lenis; GSAP/ScrollTrigger gestisce i reveal e i movimenti leggeri. Il componente React Bits Magnet è applicato alle CTA. Le animazioni vengono ridotte o disattivate con `prefers-reduced-motion`; Lenis resta disattivato sui dispositivi touch.

## Avvio in locale

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000). Prima di pubblicare, verifica il progetto con:

```bash
npm run lint
npm run build
```

## Dove aggiornare i contenuti

- `src/data/content.ts`: nome, indirizzo, telefono, testi, CTA, orari e metadati. Sostituisci i segnaposto tra parentesi quadre con le informazioni confermate.
- `src/data/menu.ts`: categorie, foto di categoria e piatti del menu. Piatti e prezzi attuali sono esempi da sostituire con quelli confermati.
- `src/data/gallery.ts`: percorsi, didascalie e testi alternativi delle immagini di apertura, presentazione e galleria.
- `public/images/`: immagini del sito. Sostituisci i file e aggiorna i relativi percorsi in `src/data/gallery.ts`.

Anche i campi SEO e i dati strutturati del ristorante usano le informazioni in `src/data/content.ts`.

La home propone la prenotazione telefonica e una sezione recensioni da completare con contenuti reali. Nella pagina `/menu` mancano le foto per le categorie Dolci e Bevande.

## Prova locale

Avvia `npm run dev`, poi prova:

- l'ingresso del titolo e della foto nell'hero e il parallax durante lo scorrimento;
- la prenotazione telefonica nella home e il reveal delle categorie/piatti nella pagina menu;
- l'header compatto e il menu mobile;
- l'effetto Magnet delle CTA e lo zoom delle foto al passaggio del puntatore;
- la galleria con mouse o tastiera (Tab, Escape e frecce nel lightbox).

Per verificare le dimensioni, usa gli strumenti responsive del browser a 375, 768 e 1280 px. Prova anche `prefers-reduced-motion: reduce`: non devono rimanere parallax o transizioni di movimento.

## Pubblicazione

Il progetto usa le impostazioni standard di Next.js: non richiede configurazioni speciali per Vercel o Netlify.

- **Vercel:** importa il repository dalla dashboard Vercel e lascia le impostazioni Next.js rilevate automaticamente.
- **Netlify:** importa il repository dalla dashboard Netlify e lascia attiva l'integrazione Next.js per il framework.

In entrambi i casi il comando di build è `npm run build`. Non impostare la directory `public` come output di pubblicazione: l'applicazione usa le funzionalità Next.js per le immagini e il rendering delle pagine.
