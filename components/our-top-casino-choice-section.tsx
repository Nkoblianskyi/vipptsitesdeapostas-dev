"use client"

import { useState } from "react"
import { bettingSites } from "@/data/casino-sites"
import { Star, ExternalLink, Gift, Shield, CheckCircle, Trophy, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function OurTopCasinoChoiceSection() {
  const [topSite] = useState(bettingSites[0])

  if (!topSite) {
    return null
  }

  const renderStars = (rating: number) => {
    const stars = []
    const starRating = rating / 2
    const fullStars = Math.floor(starRating)
    const partialFill = starRating - fullStars

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star
            key={i}
            className="w-5 h-5"
            style={{ fill: "oklch(0.72 0.18 75)", color: "oklch(0.72 0.18 75)" }}
            strokeWidth={0}
          />
        )
      } else if (i === fullStars && partialFill > 0) {
        stars.push(
          <div key={i} className="relative w-5 h-5">
            <Star
              className="absolute w-5 h-5"
              style={{ color: "oklch(0.72 0.18 75)", opacity: 0.3 }}
              strokeWidth={1.5}
              fill="none"
            />
            <div className="absolute overflow-hidden" style={{ width: `${partialFill * 100}%` }}>
              <Star
                className="w-5 h-5"
                style={{ fill: "oklch(0.72 0.18 75)", color: "oklch(0.72 0.18 75)" }}
                strokeWidth={0}
              />
            </div>
          </div>,
        )
      } else {
        stars.push(
          <Star
            key={i}
            className="w-5 h-5"
            style={{ color: "oklch(0.72 0.18 75)", opacity: 0.3 }}
            strokeWidth={1.5}
            fill="none"
          />
        )
      }
    }
    return stars
  }

  return (
    <section className="py-16 md:py-24 bg-white border-y border-border">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/8 border border-primary/20 mb-4">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Selecao VIP #1 em Portugal</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 font-serif">
            A Nossa <span className="text-gradient-gold">Escolha de Destaque</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Apos avaliar exaustivamente cada operador, este e o site que mais se distingue para os apostadores portugueses.
          </p>
        </div>

        {/* Featured Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden bg-white border-2 border-primary shadow-lg">
            {/* Badge */}
            <div className="absolute top-0 left-0 flex items-center">
              <div className="px-4 py-2 bg-primary text-white font-black text-sm flex items-center gap-2">
                <Zap className="w-4 h-4" />
                #1 SELECAO DESTAQUE
              </div>
            </div>

            <Link href={topSite.url} target="_blank" rel="noopener noreferrer sponsored" className="block">
              <div className="relative p-6 md:p-10 pt-14 md:pt-16">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left - Logo & Info */}
                  <div className="text-center md:text-left">
                    <div className="inline-flex items-center justify-center w-40 h-24 md:w-52 md:h-28 bg-secondary border border-border p-4 mb-6">
                      <Image
                        src={topSite.logo || "/placeholder.svg"}
                        alt={topSite.name}
                        width={180}
                        height={80}
                        className="max-h-full w-auto object-contain"
                      />
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-1 mb-3">
                      {renderStars(topSite.stars)}
                      <span className="ml-2 text-sm text-muted-foreground">
                        ({topSite.reviews.toLocaleString()} avaliacoes)
                      </span>
                    </div>

                    <div className="flex items-baseline justify-center md:justify-start gap-2 mb-4">
                      <span className="text-5xl md:text-6xl font-black text-primary">{topSite.rating.toFixed(1)}</span>
                      <span className="text-xl text-muted-foreground">/10</span>
                    </div>

                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Shield className="w-4 h-4 text-primary" />
                        <span>Licenca SRIJ</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Aprovado</span>
                      </div>
                    </div>
                  </div>

                  {/* Right - Bonus & CTA */}
                  <div className="text-center">
                    <div className="p-6 bg-secondary border border-border mb-6">
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <Gift className="w-5 h-5 text-primary" />
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                          Oferta de Registo
                        </span>
                      </div>
                      <p className="text-2xl md:text-3xl font-black text-primary leading-tight">{topSite.bonus}</p>
                    </div>

                    <Button
                      size="lg"
                      className="w-full bg-primary text-white font-bold text-base py-6 shadow-sm hover:bg-primary/90 transition-all group"
                    >
                      Visitar Site de Apostas
                      <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <p className="text-xs text-muted-foreground mt-4">
                      +18 | Aplicam-se T&C | Aposte com responsabilidade
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
