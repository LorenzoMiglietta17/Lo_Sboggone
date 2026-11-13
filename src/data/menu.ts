type MenuItem = {
  name: string;
  description: string;
  price: string;
};

type MenuSection = {
  category: string;
  image: { src: string; alt: string };
  items: MenuItem[];
};

export const menu: MenuSection[] = [
  {
    category: "Antipasti",
    image: {
      src: "/images/menu-antipasti.webp",
      alt: "Supplì al telefono e fiori di zucca fritti",
    },
    items: [
      {
        name: "Supplì al telefono",
        description: "Riso al pomodoro con cuore filante di mozzarella, impanato e fritto.",
        price: "€ 3,50",
      },
      {
        name: "Fiori di zucca",
        description: "Fiori di zucca ripieni di mozzarella e alici, in pastella croccante.",
        price: "€ 4,50",
      },
      {
        name: "Tartare di manzo",
        description: "Tartare di manzo con pistacchi e salse.",
        price: "€ 13,00",
      },
    ],
  },
  {
    category: "Primi",
    image: { src: "/images/menu-primi.webp", alt: "Bucatini all’amatriciana" },
    items: [
      {
        name: "Spaghetti alla carbonara",
        description: "Uova, guanciale, pecorino romano e pepe nero.",
        price: "€ 13,50",
      },
      {
        name: "Bucatini all’amatriciana",
        description: "Guanciale, pomodoro, pecorino romano e un tocco di peperoncino.",
        price: "€ 13,00",
      },
      {
        name: "Tonnarelli cacio e pepe",
        description: "Pasta fresca con pecorino romano e pepe nero.",
        price: "€ 13,00",
      },
    ],
  },
  {
    category: "Secondi",
    image: { src: "/images/menu-secondi.webp", alt: "Saltimbocca alla romana con salvia" },
    items: [
      {
        name: "Saltimbocca alla romana",
        description: "Fettine di vitello con prosciutto crudo e salvia, sfumate al vino.",
        price: "€ 16,00",
      },
      {
        name: "Abbacchio al forno",
        description: "Agnello al forno con patate, aglio e rosmarino.",
        price: "€ 18,00",
      },
      {
        name: "Tagliata di manzo",
        description: "Tagliata di manzo servita su un tagliere.",
        price: "€ 19,00",
      },
    ],
  },
  {
    category: "Contorni",
    image: {
      src: "/images/menu-contorni.webp",
      alt: "Carciofi alla romana e cicoria ripassata",
    },
    items: [
      {
        name: "Cicoria ripassata",
        description: "Cicoria saltata in padella con aglio, olio e peperoncino.",
        price: "€ 6,00",
      },
      {
        name: "Carciofi alla romana",
        description: "Carciofi stufati con mentuccia, aglio e olio extravergine.",
        price: "€ 7,00",
      },
      {
        name: "Porcini arrosto",
        description: "Funghi porcini arrostiti con erbe.",
        price: "€ 9,00",
      },
    ],
  },
  {
    category: "Dolci",
    image: { src: "/images/menu-dolci.webp", alt: "Crostata di ricotta e visciole" },
    items: [
      {
        name: "Crostata ricotta e visciole",
        description: "Pasta frolla con ricotta e confettura di visciole.",
        price: "€ 7,00",
      },
      {
        name: "Tiramisù della casa",
        description: "Crema al mascarpone, savoiardi, caffè e cacao.",
        price: "€ 7,00",
      },
    ],
  },
  {
    category: "Bevande",
    image: { src: "/images/menu-bevande.webp", alt: "Vino rosso della casa e acqua frizzante" },
    items: [
      {
        name: "Vino della casa",
        description: "Disponibile al calice o in caraffa.",
        price: "da € 5,00",
      },
      {
        name: "Acqua",
        description: "Naturale o frizzante.",
        price: "€ 2,50",
      },
    ],
  },
];
