"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Star, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { bettingSites } from "@/data/casino-sites"

interface TopOffersModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TopOffersModal({ isOpen, onClose }: TopOffersModalProps) {
  const [topSite] = useState(bettingSites[0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderStars = (rating: number) => {
    const stars = []
    const starRating = rating / 2
    const fullStars = Math.floor(starRating)
    const partialFill = starRating - fullStars

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="w-4 h-4 fill-primary text-primary" strokeWidth={0} />)
      } else if (i === fullStars && partialFill > 0) {
        stars.push(
          <div key={i} className="relative w-4 h-4">
            <Star className="absolute w-4 h-4 text-primary/30" strokeWidth={1.5} fill="none" />
            <div className="absolute overflow-hidden" style={{ width: `${partialFill * 100}%` }}>
              <Star className="w-4 h-4 fill-primary text-primary" strokeWidth={0} />
            </div>
          </div>,
        )
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-primary/30" strokeWidth={1.5} fill="none" />)
      }
    }
    return stars
  }

  if (!isOpen || !mounted) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/70 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 z-30 p-2 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl transition-colors"
          aria-label="Fechar modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="rounded-2xl overflow-hidden bg-card border border-border shadow-2xl">
          {/* Header */}
          <div className="relative bg-primary p-4 md:p-5 text-center">
            <div className="relative">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="text-sm font-bold text-primary-foreground/80 uppercase tracking-wider">Oferta em Destaque</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-primary-foreground">SELECAO N.1 EM PORTUGAL</h3>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 md:p-6">
            <Link href={topSite.url} target="_blank" rel="noopener noreferrer" className="block">
              {/* Logo */}
              <div className="flex justify-center mb-5">
                <div className="relative w-44 bg-black h-20 rounded-xl p-3 border border-border">
                  <Image
                    src={topSite.logo || "/placeholder.svg"}
                    alt={topSite.name}
                    fill
                    className="object-contain p-2"
                  />
                  <div className="absolute -top-2 -right-2 px-2 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold">
                    APROVADO
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="flex gap-0.5">{renderStars(topSite.rating)}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-primary">{topSite.rating.toFixed(1)}</span>
                  <span className="text-muted-foreground">/10</span>
                </div>
              </div>

              {/* Bonus */}
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/25 mb-5">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Oferta de Registo
                  </span>
                </div>
                <p className="text-xl md:text-2xl font-black text-primary text-center leading-tight">{topSite.bonus}</p>
              </div>

              {/* CTA Button */}
              <Button
                className="w-full bg-primary text-primary-foreground font-bold py-5 text-base shadow-lg hover:bg-primary/90 transition-all group"
                asChild
              >
                <span>
                  VISITAR PLATAFORMA
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              {/* Disclaimer */}
              <p className="text-[10px] md:text-xs text-center text-muted-foreground mt-4 leading-relaxed">
                +18 | Aplicam-se Termos & Condicoes | Aposte com Responsabilidade
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
