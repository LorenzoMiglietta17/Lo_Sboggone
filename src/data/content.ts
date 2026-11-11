const address = {
  streetAddress: "Via Podesti 8",
  postalCode: "00196",
  locality: "Roma",
  addressCountry: "IT",
};
const restaurantName = "Lo Sgobbone Da Pippo";

export const content = {
  restaurant: {
    name: restaurantName,
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
    { label: "Il menu", href: "#menu" },
    { label: "Galleria", href: "#galleria" },
    { label: "Dove siamo", href: "#contatti" },
  ],
  header: {
    call: "Chiama",
    callWithNumber: "Chiama",
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
    imageAlt: `Immagine segnaposto per la trattoria ${restaurantName}`,
    imageNote: "[FOTO DELLA TRATTORIA DA INSERIRE]",
  },
  menu: {
    eyebrow: "Dalla cucina",
    title: "Il menu",
    description:
      "I piatti qui sotto sono segnaposto: il menu reale va inserito prima della pubblicazione.",
    note: "[MENU DA CONFERMARE E INSERIRE]",
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
    hoursPlaceholder: "[ORARI DA INSERIRE]",
    directions: "Indicazioni",
    mapTitle: `Mappa per ${restaurantName}, Via Podesti 8, Roma`,
    mapNote: "La mappa indica l’indirizzo fornito.",
  },
  footer: {
    creditPrefix: "Sito realizzato da",
    creditName: "Miglio Web",
    creditHref: "",
    backToTop: "Torna su",
  },
  metadata: {
    title: `${restaurantName} | Cucina romana a Roma`,
    description:
      `${restaurantName}, ristorante di cucina tradizionale romana in Via Podesti 8, 00196 Roma. Contattaci al 06 323 2994.`,
  },
  sections: {
    skipToContent: "Salta al contenuto",
  },
} as const;
