"use client"

import { Star, ExternalLink, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { CasinoSite } from "@/data/casino-sites"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface CasinoCardProps {
  site: CasinoSite
  rank: number
}

export function CasinoCard({ site, rank }: CasinoCardProps) {
  const formatReviews = (reviews: number) => {
    return reviews.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  const getRankLabel = (rank: number) => {
    switch (rank) {
      case 1:
        return "MELHOR ESCOLHA"
      case 2:
        return "RECOMENDADO"
      case 3:
        return "POPULAR"
      default:
        return "VERIFICADO"
    }
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
            className="w-4 h-4"
            style={{ fill: "oklch(0.72 0.18 75)", color: "oklch(0.72 0.18 75)" }}
            strokeWidth={0}
          />
        )
      } else if (i === fullStars && partialFill > 0) {
        stars.push(
          <div key={i} className="relative w-4 h-4">
            <Star
              className="absolute w-4 h-4"
              style={{ color: "oklch(0.72 0.18 75)", opacity: 0.3 }}
              strokeWidth={1.5}
              fill="none"
            />
            <div className="absolute overflow-hidden" style={{ width: `${partialFill * 100}%` }}>
              <Star
                className="w-4 h-4"
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
            className="w-4 h-4"
            style={{ color: "oklch(0.72 0.18 75)", opacity: 0.3 }}
            strokeWidth={1.5}
            fill="none"
          />
        )
      }
    }
    return stars
  }

  const isTopRank = rank <= 3

  return (
    <div className="group transition-all duration-300">
      {/* Rank Badge — sits above the card, outside overflow-hidden */}
      <div className="flex items-center">
        <div
          className={cn(
            "px-4 py-2 font-black text-sm",
            rank === 1
              ? "bg-primary text-white"
              : rank <= 3
                ? "bg-foreground text-white"
                : "bg-muted text-foreground",
          )}
        >
          #{rank}
        </div>
        {isTopRank && (
          <div
            className={cn(
              "px-3 py-2 text-xs font-bold uppercase tracking-wider",
              rank === 1 ? "bg-primary/10 text-primary" : "bg-muted text-foreground",
            )}
          >
            {getRankLabel(rank)}
          </div>
        )}
      </div>

      {/* Card body */}
      <div
        className={cn(
          "relative overflow-hidden hover:shadow-lg",
          rank === 1
            ? "bg-white border-2 border-primary shadow-md"
            : "bg-white border border-border hover:border-primary/40 shadow-sm",
        )}
      >
      <Link href={site.url} target="_blank" rel="noopener noreferrer sponsored" className="block">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-4 p-5 items-center">
          {/* Logo */}
          <div className="col-span-3 flex justify-center">
            <div className="w-full max-w-[200px] h-32 flex items-center justify-center p-3 bg-black">
              <Image
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                width={200}
                height={96}
                className="max-h-full w-auto object-contain"
              />
            </div>
          </div>

          {/* Bonus */}
          <div className="col-span-4 text-center px-4 border-l border-r border-border">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Bonus de Boas-Vindas
              </span>
            </div>
            <p className={cn("text-2xl font-black leading-tight", rank === 1 ? "text-primary" : "text-foreground")}>
              {site.bonus}
            </p>
          </div>

          {/* Rating */}
          <div className="col-span-3 text-center px-4 border-r border-border">
            <div className="flex justify-center gap-0.5 mb-2">{renderStars(site.rating)}</div>
            <div className="flex items-baseline justify-center gap-1">
              <span className={cn("text-3xl font-black", rank === 1 ? "text-primary" : "text-foreground")}>
                {site.rating.toFixed(1)}
              </span>
              <span className="text-sm text-muted-foreground">/10</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">({formatReviews(site.reviews)} avaliacoes)</p>
          </div>

          {/* CTA */}
          <div className="col-span-2 flex flex-col items-center gap-2">
            <Button
              className={cn(
                "w-full font-bold shadow-sm transition-all group-hover:scale-105",
                rank === 1
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "bg-foreground text-white hover:bg-foreground/80",
              )}
            >
              Obter Bonus
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <CheckCircle className="w-3 h-3 text-primary" />
              <span>SRIJ Verificado</span>
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden p-4">
          <div className="grid grid-cols-3 gap-4 items-center mb-4">
            <div className="flex justify-center">
              <div className="w-full max-w-[160px] h-24 flex items-center justify-center p-2 bg-black">
                <Image
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  width={160}
                  height={80}
                  className="max-h-full w-auto object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center text-center border-l border-r border-border px-2">
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                Bonus de Boas-Vindas
              </span>
              <p className={cn("text-lg font-black leading-tight", rank === 1 ? "text-primary" : "text-foreground")}>
                {site.bonus}
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex gap-0.5 mb-1">{renderStars(site.rating)}</div>
              <div className="flex items-baseline justify-center gap-1">
                <span className={cn("text-2xl font-black", rank === 1 ? "text-primary" : "text-foreground")}>
                  {site.rating.toFixed(1)}
                </span>
                <span className="text-xs text-muted-foreground">/10</span>
              </div>
              <p className="text-[10px] text-muted-foreground mt-0.5">({formatReviews(site.reviews)} avaliacoes)</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button
              className={cn(
                "flex-1 max-w-xs font-bold shadow-sm",
                rank === 1 ? "bg-primary text-white" : "bg-foreground text-white",
              )}
            >
              Obter Bonus
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <CheckCircle className="w-3 h-3 text-primary" />
              <span>SRIJ Verificado</span>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden p-4">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-32 h-24 shrink-0 flex items-center justify-center p-2 bg-black">
              <Image
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                width={200}
                height={96}
                className="max-h-full w-auto object-contain"
              />
            </div>

            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="flex items-center gap-1 mb-1">
                <span className="text-[10px] font-semibold text-muted-foreground uppercase">Bonus</span>
              </div>
              <p className={cn("text-xl font-black leading-tight", rank === 1 ? "text-primary" : "text-foreground")}>
                {site.bonus}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center justify-center">
              <span className={cn("text-2xl font-black", rank === 1 ? "text-primary" : "text-foreground")}>
                {site.rating.toFixed(1)}
              </span>
              <span className="text-xs text-muted-foreground">/10</span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="flex gap-0.5 mb-0.5">{renderStars(site.rating)}</div>
              <p className="text-[9px] text-muted-foreground">{formatReviews(site.reviews)} avaliacoes</p>
            </div>

            <Button
              size="sm"
              className={cn(
                "font-bold shadow-sm text-xs px-4",
                rank === 1 ? "bg-primary text-white" : "bg-foreground text-white",
              )}
            >
              Obter
              <ExternalLink className="ml-1 w-3 h-3" />
            </Button>
          </div>
        </div>
      </Link>

      {/* Footer Disclaimer */}
      <div className="px-4 md:px-5 py-2 border-t border-border bg-secondary">
        <p className="text-[10px] md:text-xs text-center text-muted-foreground">
          +18 | Jogo Responsavel |{" "}
          <a
            href="https://jogoresponsavel.pt/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-primary hover:underline"
          >
            jogoresponsavel.pt
          </a>
        </p>
      </div>
      </div>{/* end card body */}
    </div>
  )
}
