import { Shield, Award, Clock, Users, CheckCircle, Zap } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Licencas SRIJ Verificadas",
    description:
      "Cada operador listado passou pela nossa verificacao de licenca SRIJ. Nunca recomendamos plataformas sem regulacao valida em Portugal.",
  },
  {
    icon: Award,
    title: "Testes Independentes",
    description:
      "A nossa equipa regista contas reais, deposita fundos proprios e testa cada funcionalidade antes de publicar qualquer classificacao.",
  },
  {
    icon: Clock,
    title: "Atualizacao Semanal",
    description:
      "Os rankings sao revistos todas as semanas. Alteracoes de bonus, cotacoes e condicoes sao refletidas em tempo util.",
  },
  {
    icon: Users,
    title: "Comunidade Ativa",
    description:
      "Mais de 40 000 apostadores portugueses consultam o VIPPTSitesDeApostas mensalmente para tomar decisoes informadas.",
  },
  {
    icon: CheckCircle,
    title: "Bonus sem Letra Pequena",
    description:
      "Explicamos os requisitos de rollover, prazos e restricoes de cada bonus de forma clara, sem linguagem enganosa.",
  },
  {
    icon: Zap,
    title: "Suporte Especializado",
    description:
      "Peritos portugueses em apostas desportivas disponiveis para esclarecer duvidas sobre operadores, mercados e regulamentacao.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-0 border-y border-border">
      {/* Black header band */}
      <div className="bg-black py-10 md:py-14">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/20 mb-5">
            <span className="text-xs font-bold text-white/70 uppercase tracking-widest">Porque Escolher-nos</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight text-balance">
            A Plataforma em que{" "}
            <span className="text-gradient-gold">Portugal Confia</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Rigor editorial, testes reais e independencia total. Seis razoes concretas para confiar nas nossas analises.
          </p>
        </div>
      </div>

      {/* Feature grid — white bg */}
      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border-x border-b border-border">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="relative p-8 md:p-10 group hover:bg-black transition-colors duration-200"
                style={{
                  borderBottom:
                    index < features.length - (features.length % 3 || 3)
                      ? "1px solid var(--border)"
                      : undefined,
                }}
              >
                {/* Number */}
                <span className="absolute top-6 right-6 text-5xl font-black text-foreground/5 group-hover:text-white/8 select-none leading-none transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 mb-5 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>

                <h3 className="text-base font-black text-foreground group-hover:text-white mb-2 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-white/60 text-sm leading-relaxed transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
