export const photos = {
  hero: {
    src: "/images/classica-cena-da-cicero.jpg",
    alt: "Tagliere di salumi e antipasti servito con vino",
    caption: "Una tavola imbandita",
  },
  about: {
    src: "/images/porcini-arrosto.jpg",
    alt: "Funghi porcini arrostiti con erbe",
    caption: "Funghi porcini arrosto",
  },
  gallery: [
    {
      src: "/images/amatriciana.jpg",
      alt: "Pasta all’amatriciana con sugo rosso e guanciale",
      caption: "Pasta all’amatriciana",
      shape: "gallery-card--landscape",
    },
    {
      src: "/images/tagliata-di-carne.jpg",
      alt: "Tagliata di carne servita su un tagliere",
      caption: "Tagliata di carne",
      shape: "gallery-card--portrait",
    },
    {
      src: "/images/pasta-al-formaggio.jpg",
      alt: "Piatto di pasta con formaggio grattugiato",
      caption: "Pasta con formaggio",
      shape: "gallery-card--portrait",
    },
    {
      src: "/images/porcini-arrosto.jpg",
      alt: "Funghi porcini arrostiti con erbe",
      caption: "Funghi porcini arrosto",
      shape: "gallery-card--landscape",
    },
    {
      src: "/images/tartare.jpg",
      alt: "Tartare di carne con pistacchi e salse",
      caption: "Tartare di carne",
      shape: "gallery-card--landscape",
    },
  ],
} as const;
