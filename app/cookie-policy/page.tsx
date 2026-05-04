import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"

const sections = [
  {
    number: "01",
    title: "O Que Sao Cookies",
    content:
      "Cookies sao pequenos ficheiros de texto armazenados no seu dispositivo quando visita um website. Permitem que o site recorde as suas preferencias e ações ao longo do tempo, assegurando uma experiencia de navegacao mais fluida e personalizada.",
  },
  {
    number: "02",
    title: "Cookies Estritamente Necessarios",
    content:
      "Estes cookies sao indispensaveis para o funcionamento basico da plataforma. Garantem funcionalidades essenciais como a navegacao entre paginas, seguranca de sessao e carregamento correto do conteudo. Nao podem ser desativados sem comprometer o funcionamento do site.",
  },
  {
    number: "03",
    title: "Cookies Analiticos",
    content:
      "Utilizamos ferramentas de analise para compreender como os visitantes interagem com a plataforma. Estes dados sao tratados de forma agregada e anonimizada, sem identificacao individual, e servem exclusivamente para melhorar a qualidade do servico disponibilizado.",
  },
  {
    number: "04",
    title: "Cookies Funcionais",
    content:
      "Permitem ao site memorizar escolhas como preferencias de visualizacao e personalizacao da interface. Contribuem para uma experiencia de utilizacao mais adaptada sem necessidade de reconfigurar opcoes a cada visita.",
  },
  {
    number: "05",
    title: "Cookies de Afiliacao",
    content:
      "Enquanto plataforma de comparacao de operadores de apostas, recorremos a cookies para registar cliques em links de parceiros. Esta tecnologia permite-nos aferir a origem das visitas e, quando aplicavel, receber uma comissao por referenciacao. A utilizacao destes cookies nao afeta os termos ou precos praticados pelo operador ao utilizador final.",
  },
  {
    number: "06",
    title: "Gestao de Cookies",
    content:
      "Pode configurar ou desativar cookies atraves das definicoes do seu navegador. A maioria dos navegadores permite bloquear todos ou alguns tipos de cookies, bem como eliminar cookies ja armazenados. Tenha em consideracao que a desativacao de determinados cookies pode limitar o acesso a funcionalidades da plataforma. Para questoes relacionadas com cookies, contacte-nos atraves de: cookies@vipptsitesdeapostas.com",
  },
]

export default function CookiePolicyPage() {
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
              Politica de Cookies
            </h1>
            <p className="mt-4 text-white/60 text-sm max-w-xl leading-relaxed">
              Descricao clara e transparente sobre como e porque utilizamos cookies na plataforma VIPPTSitesDeApostas.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="container mx-auto px-4 md:px-6 max-w-4xl py-12 md:py-16">
          <div className="border border-border">
            {sections.map((section, i) => (
              <div
                key={section.number}
                className={`flex gap-0 border-b border-border last:border-b-0 group hover:bg-secondary transition-colors`}
              >
                <div className="w-16 md:w-24 shrink-0 bg-black text-white flex items-start justify-center pt-6 md:pt-8">
                  <span className="text-xs font-black tracking-widest rotate-0">{section.number}</span>
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

          {/* Bottom note */}
          <div className="mt-10 p-6 bg-black text-white">
            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Nota</p>
            <p className="text-sm text-white/70 leading-relaxed">
              Esta politica pode ser atualizada periodicamente para refletir alteracoes nos servicos ou na legislacao
              aplicavel. Recomendamos a consulta regular desta pagina para se manter informado.
            </p>
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
