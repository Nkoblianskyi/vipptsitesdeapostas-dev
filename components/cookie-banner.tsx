"use client"

import { useCookieConsent } from "@/context/cookie-consent-context"
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"
import Link from "next/link"

export function CookieBanner() {
  const { showBanner, acceptAll, declineAll } = useCookieConsent()

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="container mx-auto">
        <div className="relative bg-white border border-border shadow-xl p-5 md:p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-base font-bold text-foreground">Utilizacao de Cookies</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                O VIPPTSitesDeApostas utiliza cookies para melhorar a sua experiencia de navegacao, personalizar conteudos
                e analisar o desempenho da plataforma. Ao selecionar &ldquo;Aceitar&rdquo;, concorda com a nossa{" "}
                <Link href="/cookie-policy" className="text-primary hover:underline font-medium">
                  Politica de Cookies
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button
                variant="outline"
                className="border-border bg-secondary text-foreground hover:bg-muted font-semibold"
                onClick={declineAll}
              >
                Rejeitar
              </Button>
              <Button
                className="bg-primary text-white font-bold hover:bg-primary/90 transition-opacity"
                onClick={acceptAll}
              >
                <Shield className="mr-2 w-4 h-4" />
                Aceitar Todos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
