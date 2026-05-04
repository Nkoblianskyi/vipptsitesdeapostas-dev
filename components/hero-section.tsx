"use client"

import type { Dispatch, SetStateAction } from "react"
import { useEffect, useState } from "react"
import { Shield, TrendingUp, CheckCircle2 } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  setIsAgeModalOpen: Dispatch<SetStateAction<boolean>>
  setIsAdvertiserModalOpen: Dispatch<SetStateAction<boolean>>
  setIsTopOffersModalOpen?: Dispatch<SetStateAction<boolean>>
}

export function HeroSection({ setIsAgeModalOpen, setIsAdvertiserModalOpen }: HeroSectionProps) {
  const [lastUpdated, setLastUpdated] = useState("")
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const date = new Date()
    const month = date.toLocaleString("pt-PT", { month: "long" })
    const year = date.getFullYear()
    setLastUpdated(`${month} ${year}`)
  }, [])

  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Sports background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-sports.jpg"
          alt="Sports betting background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/65" />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/25">
              <span className="text-[11px] md:text-xs text-white font-semibold">Atualizado {lastUpdated}</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-balance text-white">
            Os Melhores{" "}
            <span className="text-gradient-gold">Sites de Apostas</span>
            <br />
            em Portugal {currentYear}
          </h1>
          <p className="hidden md:block mt-3 text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Comparamos e classificamos os melhores operadores de apostas desportivas licenciados pelo SRIJ.
            Rankings independentes, bonus verificados e analises aprofundadas para apostadores exigentes.
          </p>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/25">
            <Image src="/srij.svg" alt="SRIJ" width={24} height={24} className="mb-0.5" />
            <span className="text-xs font-bold text-white">SRIJ Licenciado</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/25">
            <Shield className="w-3.5 h-3.5 text-yellow-600 mb-0.5" />
            <span className="text-xs font-bold text-white">100% Seguro</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/25">
            <Image src="/flag.png" alt="Portugal" width={18} height={18} />
            <span className="text-xs font-bold text-white">Mercado Portugues</span>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary/20" />
    </section>
  )
}
