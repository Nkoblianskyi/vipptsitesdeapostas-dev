const criteria = [
  { label: "Licenca e Conformidade com o SRIJ", value: 100 },
  { label: "Amplitude de Mercados Desportivos", value: 95 },
  { label: "Competitividade das Cotacoes", value: 90 },
  { label: "Qualidade e Condicoes dos Bonus", value: 85 },
  { label: "Desempenho Mobile e Tecnico", value: 92 },
]

const highlights = [
  {
    title: "Melhores Cotacoes",
    description:
      "Comparamos as odds de todos os operadores para identificar onde encontra o maior valor em cada jogo.",
    dark: false,
  },
  {
    title: "Cobertura Total",
    description:
      "Futebol, tenis, basquetebol, F1, rugby e dezenas de outras modalidades analisadas em detalhe.",
    dark: true,
  },
  {
    title: "Foco em Portugal",
    description:
      "Conhecimento profundo da regulamentacao nacional e das preferencias dos apostadores portugueses.",
    dark: true,
  },
  {
    title: "Resultados Reais",
    description:
      "Rankings baseados em testes praticos, nao em parcerias comerciais ou dados de terceiros.",
    dark: false,
  },
]

export function BettingInfoSection() {
  return (
    <section className="py-0 border-b border-border">
      {/* Top band — black */}
      <div className="bg-black px-4 py-3 flex items-center justify-center">
        <span className="text-xs font-bold text-white/50 uppercase tracking-widest">Metodologia VIP</span>
      </div>

      <div className="bg-white">
        <div className="container mx-auto px-4 py-14 md:py-20">
          <div className="grid lg:grid-cols-2 gap-0 border border-border">

            {/* Left — criteria + bars */}
            <div className="p-8 md:p-12 border-r border-border">
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3 leading-tight">
                Como Avaliamos Cada{" "}
                <span className="text-gradient-gold">Operador</span>
              </h2>
              <p className="text-muted-foreground mb-10 text-sm leading-relaxed max-w-md">
                Testamos pessoalmente cada plataforma do registo ao levantamento. Cinco criterios objetivos determinam a posicao final no ranking.
              </p>

              <div className="space-y-6">
                {criteria.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm font-semibold text-foreground leading-snug pr-4">
                        {item.label}
                      </span>
                      <span className="text-sm font-black text-primary shrink-0">{item.value}%</span>
                    </div>
                    {/* Track */}
                    <div className="h-1.5 bg-border overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — 2×2 highlight cards */}
            <div className="grid grid-cols-2 divide-x divide-y divide-border border-l-0">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className={`p-6 md:p-8 flex flex-col gap-3 ${
                    h.dark ? "bg-black" : "bg-white"
                  }`}
                >
                  <h3
                    className={`text-sm font-black uppercase tracking-wide ${
                      h.dark ? "text-white" : "text-foreground"
                    }`}
                  >
                    {h.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      h.dark ? "text-white/55" : "text-muted-foreground"
                    }`}
                  >
                    {h.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
