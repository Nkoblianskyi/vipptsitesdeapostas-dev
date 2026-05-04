"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-black shadow-md">
      <div className="container mx-auto flex items-center justify-center h-14 md:h-16 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/favicon.ico" alt="Logo VIPPTSitesDeApostas" width={36} height={36} />
          <span className="text-base md:text-lg font-black tracking-tight text-white">
            VIPPT<span className="text-primary">SITES</span>DEAPOSTAS
          </span>
        </Link>
      </div>
    </header>
  )
}
