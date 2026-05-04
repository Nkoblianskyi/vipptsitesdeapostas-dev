import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata = {
  title: "Sobre Nos | VIPPTSitesDeApostas",
  description: "Conhea a equipa e a missao do VIPPTSitesDeApostas — a plataforma de referencia para comparacao de sites de apostas desportivas em Portugal.",
}

export default function AboutPage() {
  const stats = [
    { value: "SRIJ", label: "Regulamentado" },
    { value: "50K+", label: "Utilizadores Mensais" },
    { value: "99%", label: "Taxa de Fiabilidade" },
    { value: "5+", label: "Anos Ativos" },
  ]

  const values = [
    {
      title: "Transparencia Total",
      description:
        "Comunicamos abertamente o nosso modelo de receitas e os criterios de todas as classificacoes publicadas. Cada parceria comercial e identificada de forma clara e sem ambiguidades.",
    },
    {
      title: "Independencia Editorial",
      description:
        "As nossas analises baseiam-se exclusivamente em testes praticos e criterios quantificaveis. Nenhuma parceria comercial influencia as nossas conclusoes ou posicionamentos no ranking.",
    },
    {
      title: "Compromisso Social",
      description:
        "Promovemos ativamente praticas de jogo responsavel e disponibilizamos recursos de apoio a quem necessita. O bem-estar dos apostadores e uma prioridade nao negociavel.",
    },
  ]

  const process = [
    "Verificamos a validade da licenca SRIJ e a legitimidade legal do operador em Portugal",
    "Realizamos testes praticos de registo, deposito e levantamento de fundos em condicoes reais",
    "Analisamos a variedade de mercados desportivos e a qualidade das cotacoes disponibilizadas",
    "Avaliamos as ofertas promocionais, os seus termos e os requisitos de apostas associados",
    "Testamos o apoio ao cliente em varios canais e a experiencia nas plataformas mobile e desktop",
    "Revemos e atualizamos periodicamente todas as classificacoes e analises para garantir relevancia",
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero — black banner */}
      <section className="bg-black py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Quem Somos</p>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight text-balance mb-6">
            A Referencia VIP Portuguesa<br />
            em <span className="text-gradient-gold">Apostas Desportivas</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
            O VIPPTSitesDeApostas e a plataforma de comparacao de operadores mais abrangente e fiavel de Portugal.
            O nosso proposito e orientar os apostadores para os melhores sites regulamentados pelo SRIJ.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 max-w-4xl pb-20">

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-x border-b border-border">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="py-8 px-6 text-center bg-white"
              style={{
                borderRight: i < stats.length - 1 ? "1px solid var(--border)" : undefined,
              }}
            >
              <p className="text-3xl font-black text-foreground mb-1">{stat.value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Mission */}
        <section className="py-16 border-b border-border">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-5">A Nossa Missao</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                No VIPPTSitesDeApostas acreditamos que cada apostador merece acesso a informacao transparente,
                imparcial e de elevada qualidade sobre os operadores disponiveis em Portugal.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A nossa equipa especializada testa e classifica cada plataforma de forma exaustiva,
                garantindo que apenas os operadores mais competentes sao recomendados.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Trabalhamos continuamente para manter as nossas analises relevantes, atuais e uteis
                para a comunidade portuguesa de apostas desportivas.
              </p>
            </div>
            <div className="bg-black p-8 md:p-10">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Porque nos escolher</p>
              <ul className="space-y-4">
                {[
                  "Analises imparciais sem influencia comercial",
                  "Cobertura exclusiva do mercado portugues",
                  "Atualizacoes semanais a todos os rankings",
                  "Equipa com experiencia real em apostas",
                  "Foco em seguranca e jogo responsavel",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/80 text-sm leading-relaxed">
                    <span className="mt-0.5 w-1.5 h-1.5 bg-primary flex-shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 border-b border-border">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-10">Os Nossos Valores</h2>
          <div className="grid md:grid-cols-3 gap-0 border border-border">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="p-8 bg-white hover:bg-black hover:text-white transition-colors group"
                style={{
                  borderRight: i < values.length - 1 ? "1px solid var(--border)" : undefined,
                }}
              >
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">0{i + 1}</p>
                <h3 className="text-base font-bold text-foreground group-hover:text-white mb-3 transition-colors">{value.title}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-white/70 leading-relaxed transition-colors">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="py-16 border-b border-border">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-10">O Nosso Processo de Avaliacao</h2>
          <div className="border border-border">
            {process.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-5 p-5 bg-white hover:bg-secondary transition-colors border-b border-border last:border-b-0"
              >
                <div className="flex-shrink-0 w-9 h-9 bg-black text-white flex items-center justify-center font-black text-sm">
                  {index + 1}
                </div>
                <p className="text-foreground text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact strip */}
        <section className="py-16">
          <div className="grid md:grid-cols-2 gap-0 border border-border">
            <div className="p-8 md:p-10 bg-black">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Contacto</p>
              <h3 className="text-xl font-black text-white mb-3">Fale Connosco</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                Para sugestoes, parcerias ou questoes editoriais, a nossa equipa esta disponivel.
              </p>
              <a
                href="mailto:info@vipptsitesdeapostas.com"
                className="inline-block text-sm font-bold text-white border-b border-primary pb-0.5 hover:text-primary transition-colors"
              >
                info@vipptsitesdeapostas.com
              </a>
            </div>
            <div className="p-8 md:p-10 bg-white border-l border-border">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Disclaimer</p>
              <h3 className="text-xl font-black text-foreground mb-3">Jogo Responsavel</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                O conteudo deste site destina-se exclusivamente a maiores de 18 anos. As apostas desportivas
                implicam risco financeiro. Jogue com responsabilidade e estabeleca limites.
              </p>
              <a
                href="https://jogoresponsavel.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-bold text-primary border-b border-primary pb-0.5 hover:opacity-70 transition-opacity"
              >
                jogoresponsavel.pt
              </a>
            </div>
          </div>
        </section>

        <div className="pt-4 border-t border-border">
          <Link
            href="/"
            className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            &larr; Voltar para o Inicio
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
