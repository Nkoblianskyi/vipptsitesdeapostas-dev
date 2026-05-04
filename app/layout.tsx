import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "VIPPTSitesDeApostas.com | Os Melhores Sites de Apostas Desportivas em Portugal 2026",
  description:
    "VIPPTSitesDeApostas.com - A plataforma VIP portuguesa de comparacao de sites de apostas desportivas regulamentados pelo SRIJ. Rankings imparciais, bonus exclusivos e analises detalhadas para apostadores exigentes.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "VIPPTSitesDeApostas.com | Top Sites de Apostas Regulamentados Portugal 2026",
    description: "Comparacao imparcial dos melhores sites de apostas regulamentados em Portugal. Bonus exclusivos, rankings detalhados e guias de apostas para apostadores VIP.",
    siteName: "VIPPTSitesDeApostas",
    locale: "pt_PT",
    type: "website",
    url: "https://vipptsitesdeapostas.com",
  },
}

export const viewport: Viewport = {
  themeColor: "#f5f5f3",
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT" className={`${inter.variable} ${playfair.variable} antialiased bg-background`}>
      <head>
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="author" content="VIPPTSitesDeApostas" />
        <meta property="og:site_name" content="VIPPTSitesDeApostas - Plataforma VIP de Comparacao de Apostas" />
        <meta name="classification" content="Comparison Website" />
        <meta name="category" content="Sports Betting Comparison" />
        <meta
          name="disclaimer"
          content="Plataforma de comparacao independente. Nao operamos como casa de apostas. Todos os links redirecionam para operadores licenciados pelo SRIJ."
        />
        <link rel="canonical" href="https://vipptsitesdeapostas.com" />
      </head>
      <body>{children}</body>
    </html>
  )
}
