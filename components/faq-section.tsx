"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Os sites de apostas em Portugal sao regulamentados?",
    answer:
      "Sim. O SRIJ — Servico de Regulacao e Inspecao de Jogos — e o orgao regulador competente para licenciar operadores de apostas desportivas em Portugal. Qualquer plataforma autorizada fica sujeita a auditorias periodicas, limites de publicidade e mecanismos de jogo responsavel. Todos os operadores presentes no nosso ranking deteem licenca SRIJ valida.",
  },
  {
    question: "O que distingue um site de apostas VIP dos restantes?",
    answer:
      "Um operador VIP oferece odds mais competitivas, mercados especializados, atendimento prioritario, metodos de pagamento variados e bonus com requisitos de rollover reduzidos. No VIPPTSitesDeApostas avaliamos todos esses criterios antes de incluir qualquer plataforma no ranking.",
  },
  {
    question: "Quais sao os metodos de pagamento mais usados em Portugal?",
    answer:
      "Os apostadores portugueses utilizam principalmente MB Way, referencia Multibanco, cartoes Visa e Mastercard, transferencia bancaria e carteiras digitais como Skrill e Neteller. A maioria dos depositos e processada de forma instantanea enquanto os levantamentos levam entre 24 a 72 horas.",
  },
  {
    question: "Como funcionam os bonus de boas-vindas?",
    answer:
      "Os bonus de primeiro deposito atribuem um valor adicional para apostar, geralmente entre 50% a 100% do deposito inicial. Este montante esta sujeito a um requisito de aposta (rollover) que deve ser cumprido em odds minimas especificadas. Recomendamos sempre a leitura integral dos Termos e Condicoes antes de ativar qualquer oferta.",
  },
  {
    question: "Posso apostar a partir do telemovel?",
    answer:
      "Sim. Todos os operadores que avaliamos oferecem aplicacoes nativas para iOS e Android ou versoes web totalmente responsivas. A experiencia mobile inclui apostas ao vivo, streaming de eventos e gestao de conta com a mesma seguranca da versao desktop.",
  },
  {
    question: "Qual e a idade minima para apostar em Portugal?",
    answer:
      "A legislacao portuguesa estipula 18 anos como idade minima legal para participar em apostas desportivas. Todos os operadores licenciados aplicam verificacao de identidade obrigatoria atraves de documentos oficiais durante o processo de registo.",
  },
  {
    question: "Como e feita a avaliacao dos operadores no ranking?",
    answer:
      "A nossa metodologia baseia-se em testes reais: abertura de conta, depositos e levantamentos, contacto com suporte, analise de odds e mercados. Cada operador e pontuado em sete dimensoes — licenciamento, seguranca, odds, bonus, pagamentos, suporte e mobile — e revisto a cada trimestre.",
  },
  {
    question: "O que devo fazer se quiser pausar as apostas?",
    answer:
      "Todos os operadores licenciados pelo SRIJ sao obrigados a disponibilizar ferramentas de autoexclusao, limites de deposito e pausa voluntaria. Pode ainda aceder ao programa nacional de prevencao atraves de jogoresponsavel.pt ou ligar para a linha de apoio 800 210 312.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 md:py-24 bg-white border-b border-border">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black mb-5">
            <span className="text-xs font-bold text-white uppercase tracking-widest">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight mb-4">
            Perguntas<br />
            <span className="text-gradient-gold">Frequentes</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Tudo o que precisa de saber sobre apostas desportivas legais em Portugal — explicado de forma clara e direta.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const isLeft = index % 2 === 0
            return (
              <div
                key={index}
                className={cn(
                  "border-border transition-colors duration-200",
                  // right-column items get a left border on desktop
                  !isLeft && "lg:border-l",
                  // bottom border for all except last two on desktop
                  index < faqs.length - 2 ? "border-b" : index === faqs.length - 2 ? "border-b lg:border-b-0" : "",
                  isOpen ? "bg-black" : "bg-white hover:bg-gray-50",
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-start gap-4 text-left"
                >
                  <span
                    className={cn(
                      "flex-shrink-0 w-7 h-7 flex items-center justify-center border font-black text-sm mt-0.5",
                      isOpen
                        ? "border-white text-white"
                        : "border-border text-foreground",
                    )}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </span>
                  <span
                    className={cn(
                      "font-bold text-sm md:text-base leading-snug flex-1",
                      isOpen ? "text-white" : "text-foreground",
                    )}
                  >
                    {faq.question}
                  </span>
                </button>

                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    isOpen ? "max-h-64" : "max-h-0",
                  )}
                >
                  <div className="px-6 pb-6 pl-[4.25rem]">
                    <p className="text-sm text-white/75 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Responsible gambling strip */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 bg-black">
          <p className="text-sm text-white/80 text-center sm:text-left">
            <span className="font-bold text-white">Jogo Responsavel.</span>{" "}
            Se sentir necessidade de apoio contacte{" "}
            <a
              href="https://jogoresponsavel.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-2 hover:text-primary/80"
            >
              jogoresponsavel.pt
            </a>{" "}
            ou ligue 800 210 312 (gratuito, 24h).
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <div className="px-3 py-1 border border-white/20 text-xs font-black text-white">+18</div>
            <div className="px-3 py-1 border border-white/20 text-xs font-semibold text-white/70">SRIJ</div>
          </div>
        </div>

      </div>
    </section>
  )
}
