export interface BettingSite {
  id: number
  name: string
  url: string
  logo: string
  bonus: string
  rating: number
  reviews: number
  featured: boolean
  description: string
  badges?: string[]
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
}

export const bettingSites: BettingSite[] = [
  {
    id: 1,
    name: "Solverde",
    url: "https://www.solverde.pt/",
    logo: "/solverde.svg",
    bonus: "300% até 30€ em Aposta Grátis",
    rating: 9.8,
    reviews: 4280,
    featured: true,
    description: "BÓNUS DE BOAS-VINDAS",
    badges: ["EM ALTA"],
    isTopLine: true,
    isTrending: true,
  },
  {
    id: 2,
    name: "Betclic",
    url: "https://www.betclic.pt/",
    logo: "/betclic.svg",
    bonus: "100% Até 20€",
    rating: 9.5,
    reviews: 4851,
    featured: false,
    description: "BÓNUS DE BOAS-VINDAS",
    badges: ["POPULAR"],
    isTopLine: true,
    isPopular: true,
  },
  {
    id: 3,
    name: "Luckia",
    url: "https://www.luckia.pt/",
    logo: "/luckia.svg",
    bonus: "Aposta Grátis Atualizada",
    rating: 9.4,
    reviews: 5137,
    featured: true,
    description: "BÓNUS DE BOAS-VINDAS",
    badges: ["MELHOR AVALIADO"],
    isTopRating: true,
    isTopLine: true,
    isPopular: true,
  },

  {
    id: 4,
    name: "Lebull",
    url: "https://www.lebull.pt/",
    logo: "/lebull.svg",
    bonus: "250% até 400€ + 50€ de Aposta Grátis",
    rating: 9.3,
    reviews: 4642,
    featured: false,
    description: "BÓNUS DE BOAS-VINDAS",
    badges: ["OFERTA EXCLUSIVA"],
  },
  {
    id: 5,
    name: "Casino Portugal",
    url: "https://www.casinoportugal.pt/",
    logo: "/brand-ccasino.svg",
    bonus: "Aposta Grátis de 2€ Atualmente",
    rating: 9.2,
    reviews: 4157,
    featured: false,
    description: "BÓNUS DE BOAS-VINDAS",
    badges: [],
  },
]

export const casinoSites = bettingSites
export type CasinoSite = BettingSite
