# Lo Sgobbone Da Pippo

Sito vetrina one-page per la trattoria, realizzato con Next.js App Router, TypeScript e Tailwind CSS.

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
- `src/data/menu.ts`: categorie e piatti del menu. Non sono indicati prezzi finché non vengono forniti.
- `src/data/gallery.ts`: percorsi, didascalie e testi alternativi delle immagini di apertura, presentazione e galleria.
- `public/images/`: immagini del sito. Sostituisci i file e aggiorna i relativi percorsi in `src/data/gallery.ts`.

Anche i campi SEO e i dati strutturati del ristorante usano le informazioni in `src/data/content.ts`.

## Pubblicazione

Il progetto usa le impostazioni standard di Next.js: non richiede configurazioni speciali per Vercel o Netlify.

- **Vercel:** importa il repository dalla dashboard Vercel e lascia le impostazioni Next.js rilevate automaticamente.
- **Netlify:** importa il repository dalla dashboard Netlify e lascia attiva l'integrazione Next.js per il framework.

In entrambi i casi il comando di build è `npm run build`. Non impostare la directory `public` come output di pubblicazione: l'applicazione usa le funzionalità Next.js per le immagini e il rendering delle pagine.
