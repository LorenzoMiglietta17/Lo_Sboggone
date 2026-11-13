const address = {
  streetAddress: "Via Podesti 8",
  postalCode: "00196",
  locality: "Roma",
  addressCountry: "IT",
};

export const content = {
  restaurant: {
    name: "Lo Sgobbone Da Pippo",
    cuisine: "Cucina romana",
    ...address,
    address: `${address.streetAddress}, ${address.postalCode} ${address.locality}`,
    phone: "06 323 2994",
    phoneLink: "+39063232994",
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Via+Podesti+8%2C+00196+Roma",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Via%20Podesti%208%2C%2000196%20Roma&output=embed",
  },
  navigation: [
    { label: "La trattoria", href: "#trattoria" },
    { label: "Il menu", href: "/menu" },
    { label: "Galleria", href: "#galleria" },
    { label: "Dove siamo", href: "#contatti" },
  ],
  header: {
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
    primaryNavigation: "Navigazione principale",
    mobileNavigation: "Navigazione mobile",
    brandLabel: "Torna all'inizio",
  },
  hero: {
    eyebrow: "Una tavola romana",
    subtitle: "Cucina romana",
    callToAction: "Chiama per prenotare",
    menuCallToAction: "Scopri il menu",
    imageNote: "[FOTO DEL RISTORANTE DA INSERIRE]",
  },
  about: {
    eyebrow: "Piacere, siamo qui",
    title: "La trattoria, come piace a noi.",
    paragraphs: [
      "[TESTO DI PRESENTAZIONE DEL LOCALE DA INSERIRE]",
      "[RACCONTO DELLA TRATTORIA DA INSERIRE]",
    ],
    imageAlt: "Immagine segnaposto per la trattoria Lo Sgobbone Da Pippo",
    imageNote: "[FOTO DELLA TRATTORIA DA INSERIRE]",
  },
  menu: {
    eyebrow: "Dalla cucina",
    title: "Il menu",
    description: "Qualche esempio di cucina romana, in attesa del menu della trattoria.",
    note: "ESEMPI INDICATIVI · PIATTI, FOTO E PREZZI NON SONO LA CARTA UFFICIALE E VANNO CONFERMATI",
  },
  reservation: {
    eyebrow: "Un posto a tavola",
    title: "Prenota il tuo tavolo",
    description: "Chiamaci per informazioni e prenotazioni.",
  },
  gallery: {
    eyebrow: "Uno sguardo in trattoria",
    title: "La nostra galleria",
    description: "Immagini segnaposto, pronte a lasciare spazio alle tue fotografie.",
    imagePlaceholder: "[FOTO DA SOSTITUIRE]",
    openImage: "Apri immagine",
    close: "Chiudi galleria",
    previous: "Foto precedente",
    next: "Foto successiva",
    imageCount: "Foto",
  },
  contact: {
    eyebrow: "Ti aspettiamo",
    title: "Vieni a trovarci",
    addressLabel: "Indirizzo",
    phoneLabel: "Telefono",
    hoursLabel: "Orari",
    hours: [
      {
        days: "Lunedì",
        periods: [{ label: "Cena", time: "20:00–23:00" }],
      },
      {
        days: "Martedì–sabato",
        periods: [
          { label: "Pranzo", time: "13:00–15:00" },
          { label: "Cena", time: "20:00–23:00" },
        ],
      },
      {
        days: "Domenica",
        periods: [{ label: "", time: "Chiuso" }],
      },
    ],
    directions: "Indicazioni",
    mapTitle: "Mappa per Lo Sgobbone Da Pippo, Via Podesti 8, Roma",
    mapNote: "La mappa indica l’indirizzo fornito.",
    reviewsTitle: "Le vostre recensioni",
    reviewsPlaceholder: "[RECENSIONI DA INSERIRE]",
  },
  footer: {
    creditPrefix: "Sito realizzato da",
    creditName: "Miglio Web",
    creditHref: "",
    backToTop: "Torna su",
  },
  metadata: {
    title: "Lo Sgobbone Da Pippo | Cucina romana a Roma",
    description:
      "Lo Sgobbone Da Pippo, ristorante di cucina tradizionale romana in Via Podesti 8, 00196 Roma. Contattaci al 06 323 2994.",
  },
  sections: {
    skipToContent: "Salta al contenuto",
  },
} as const;
