import Link from "next/link"
import Image from "next/image"
import { Info, AlertTriangle, Shield, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 pb-12 border-b border-border">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/favicon.ico" alt="Logo VIPPTSitesDeApostas" width={36} height={36} />
              <div className="flex flex-col">
                <span className="text-sm md:text-base font-black leading-none uppercase tracking-tight text-foreground">
                  VIPPT<span className="text-primary">SITES</span>DEAPOSTAS
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed mb-6">
              A plataforma VIP portuguesa de comparacao de sites de apostas desportivas regulamentados pelo SRIJ.
              Rankings imparciais, ofertas verificadas e analises tecnicas ao servico dos apostadores mais exigentes em Portugal.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>contacto@vipptsitesdeapostas.com</span>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xs font-bold mb-4 text-foreground uppercase tracking-widest">Informacao Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Sobre Nos
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Politica de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Politica de Cookies
                </Link>
              </li>
              <li>
                <a
                  href="https://jogoresponsavel.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Jogo Responsavel
                </a>
              </li>
            </ul>
          </div>

          {/* Responsible Gaming */}
          <div>
            <h3 className="text-xs font-bold mb-4 text-foreground uppercase tracking-widest">Jogo Responsavel</h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
              As apostas desportivas sao uma forma de entretenimento. Aposte apenas o que pode perder.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-foreground text-white text-sm font-bold">
              18+
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mb-12 pb-12 border-b border-border">
          <h4 className="text-xs font-bold mb-6 text-center text-foreground uppercase tracking-widest flex items-center justify-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            Parceiros de Jogo Responsavel
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-0 border border-border">
            {[
              {
                href: "https://www.srij.turismodeportugal.pt/",
                src: "/srij-new.svg",
                alt: "SRIJ",
                bgColor: "bg-white",
              },
              { href: "https://www.icad.pt/", src: "/icad.png", alt: "SICAD", bgColor: "bg-white" },
              { href: "https://www.gamcare.org.uk/", src: "/gamecare-new.svg", alt: "GamCare", bgColor: "bg-white" },
              {
                href: "https://www.gambleaware.org/",
                src: "/gamble-aware.webp",
                alt: "GambleAware",
                bgColor: "bg-white",
              },
              {
                href: "https://www.jogoresponsavel.pt/",
                src: "/jogo-responsavel-new.png",
                alt: "Jogo Responsavel",
                bgColor: "bg-black",
              },
            ].map((partner, i) => (
              <Link
                key={partner.alt}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 md:p-5 ${partner.bgColor} ${partner.bgColor === "bg-black" ? "hover:bg-zinc-800" : "hover:bg-secondary"} transition-colors border-r border-border last:border-r-0`}
              >
                <div className="relative w-[80px] h-[44px] md:w-[90px] md:h-[44px]">
                  <Image src={partner.src || "/placeholder.svg"} alt={partner.alt} fill className="object-contain" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-muted-foreground space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-foreground text-white px-4 py-2 font-bold text-sm">18+</div>
            <span className="font-semibold text-foreground">Conteudo exclusivo para maiores de 18 anos</span>
          </div>

          <div className="flex items-start justify-center gap-3 max-w-3xl mx-auto">
            <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-left text-xs leading-relaxed">
              VIPPTSitesDeApostas e uma plataforma de comparacao independente. Nao operamos como casa de apostas.
              Todo o conteudo e direcionado a residentes em Portugal com mais de 18 anos.
              Os links externos redirecionam para operadores regulamentados pelo SRIJ.
            </p>
          </div>

          <p className="flex items-center justify-center gap-2 text-primary font-semibold text-xs">
            <AlertTriangle className="h-4 w-4" />
            <span>O jogo pode causar dependencia. Aposte de forma responsavel.</span>
          </p>

          <p className="font-medium text-muted-foreground pt-4 border-t border-border text-xs">
            &copy; {new Date().getFullYear()} VIPPTSitesDeApostas.com. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
