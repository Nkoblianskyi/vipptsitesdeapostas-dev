import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"

const sections = [
  {
    number: "01",
    title: "Quem Somos",
    content:
      "O VIPPTSitesDeApostas (vipptsitesdeapostas.com) e uma plataforma independente de comparacao e avaliacao de operadores de apostas desportivas. Nao somos um operador de apostas nem realizamos qualquer atividade de jogo. Atuamos exclusivamente como intermediario informativo, ajudando os utilizadores a tomar decisoes fundamentadas sobre as plataformas disponiveis no mercado.",
  },
  {
    number: "02",
    title: "Dados que Recolhemos",
    content:
      "Recolhemos informacao de forma automatica durante a sua navegacao, incluindo endereco IP, tipo de dispositivo e navegador, paginas visitadas, tempo de permanencia e origem da visita. Caso entre em contacto connosco por email, podemos armazenar o seu endereco de correio eletronico e o conteudo da mensagem para resposta e acompanhamento.",
  },
  {
    number: "03",
    title: "Como Utilizamos os Dados",
    content:
      "Os dados recolhidos destinam-se a melhorar continuamente a plataforma, personalizar o conteudo apresentado, analisar o comportamento de navegacao de forma agregada, gerir os links de afiliacao com operadores parceiros e assegurar a seguranca e integridade da plataforma. Nao utilizamos os seus dados para fins comerciais diretos nem os cedemos a terceiros para fins de marketing.",
  },
  {
    number: "04",
    title: "Partilha de Informacao",
    content:
      "Nao vendemos nem cedemos os seus dados pessoais a terceiros. A partilha de informacao pode ocorrer com fornecedores de servicos tecnicos que nos auxiliam na operacao da plataforma, sempre sob acordo de confidencialidade. Em caso de obrigacao legal ou ordem judicial, podemos ser compelidos a divulgar determinados dados as autoridades competentes.",
  },
  {
    number: "05",
    title: "Os Seus Direitos",
    content:
      "Tem o direito de aceder aos seus dados pessoais em nosso poder, solicitar a sua correcao ou eliminacao, opor-se ao tratamento para determinadas finalidades e solicitar a limitacao do tratamento. Para exercer qualquer um destes direitos, contacte-nos atraves do email indicado no final desta politica. Daremos resposta ao seu pedido no prazo legalmente previsto.",
  },
  {
    number: "06",
    title: "Retencao e Seguranca",
    content:
      "Os dados sao conservados apenas pelo periodo necessario para as finalidades descritas ou pelo prazo legalmente exigido. Implementamos medidas tecnicas e organizativas adequadas para proteger as informacoes contra acessos nao autorizados, perda, alteracao ou destruicao. O acesso interno aos dados e restrito e controlado.",
  },
  {
    number: "07",
    title: "Contacto e Atualizacoes",
    content:
      "Para qualquer questao relativa a privacidade ou tratamento de dados, contacte-nos atraves do email: privacidade@vipptsitesdeapostas.com. Esta politica pode ser atualizada sem aviso previo para refletir alteracoes nos nossos servicos ou na legislacao aplicavel. A data de revisao mais recente e indicada no final da pagina.",
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-black sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-white font-black text-sm tracking-tight">
            VIPPT<span className="text-primary">SITES</span>DEAPOSTAS
          </Link>
          <Link
            href="/"
            className="text-white/70 hover:text-white transition-colors text-xs font-semibold uppercase tracking-wider"
          >
            Voltar ao inicio
          </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <div className="bg-black text-white py-14 md:py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Informacao Legal</p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-balance">
              Politica de Privacidade
            </h1>
            <p className="mt-4 text-white/60 text-sm max-w-xl leading-relaxed">
              Transparencia total sobre como tratamos os seus dados e de que forma protegemos a sua privacidade.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="container mx-auto px-4 md:px-6 max-w-4xl py-12 md:py-16">
          <div className="border border-border">
            {sections.map((section) => (
              <div
                key={section.number}
                className="flex gap-0 border-b border-border last:border-b-0 hover:bg-secondary transition-colors"
              >
                <div className="w-16 md:w-24 shrink-0 bg-black text-white flex items-start justify-center pt-6 md:pt-8">
                  <span className="text-xs font-black tracking-widest">{section.number}</span>
                </div>
                <div className="flex-1 p-6 md:p-8">
                  <h2 className="text-sm font-black uppercase tracking-wider text-foreground mb-3">
                    {section.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom strip */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 border border-border">
            <div className="p-6 bg-black text-white">
              <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Ultima Atualizacao</p>
              <p className="text-sm text-white/70">
                Esta politica foi revista e atualizada em 2025. Consulte esta pagina regularmente para se manter
                informado sobre eventuais alteracoes.
              </p>
            </div>
            <div className="p-6 bg-white border-t md:border-t-0 md:border-l border-border">
              <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-2">Contacto DPO</p>
              <p className="text-sm text-muted-foreground">
                Para exercer os seus direitos ou colocar questoes sobre privacidade:
                <br />
                <span className="font-semibold text-foreground">privacidade@vipptsitesdeapostas.com</span>
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/"
              className="text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              Voltar para o inicio
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
