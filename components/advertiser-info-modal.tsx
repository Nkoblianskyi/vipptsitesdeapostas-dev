"use client"

import { useState, useEffect } from "react"
import { X, Info, CheckCircle, Shield, FileText, ExternalLink } from "lucide-react"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-md animate-in fade-in zoom-in duration-200">
        <div className="bg-white border border-gray-200 shadow-2xl overflow-hidden">

          {/* Header strip */}
          <div className="bg-black px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white flex items-center justify-center flex-shrink-0">
                <Info className="h-5 w-5 text-black" />
              </div>
              <div>
                <h2 className="text-base font-black text-white uppercase tracking-wide">Informacao Publicitaria</h2>
                <p className="text-xs text-white/60">Transparencia editorial</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-white/60 hover:text-white transition-colors"
              aria-label="Fechar"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-5 space-y-4">

            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-gray-900">VIPPTSitesDeApostas</strong> (vipptsitesdeapostas.com) e um
              servico de comparacao independente e gratuito, desenvolvido para ajudar os utilizadores portugueses
              a encontrar os melhores sites de apostas desportivas licenciados.
            </p>

            <div className="border border-gray-200 bg-gray-50 p-4 space-y-1">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-gray-900" />
                <span className="font-bold text-gray-900 text-sm">Modelo de Receitas</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Podemos receber compensacao dos operadores listados, o que pode influenciar a sua visibilidade
                na plataforma. Contudo, todas as avaliacoes sao baseadas em criterios objetivos e independentes:
                licenciamento, odds, bonus, usabilidade e suporte ao cliente.
              </p>
            </div>

            <div className="flex items-start gap-3 p-4 border border-gray-200 bg-gray-50">
              <Shield className="w-4 h-4 text-gray-900 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600 leading-relaxed">
                Todos os operadores apresentados sao regulamentados pelo{" "}
                <strong className="text-gray-900">SRIJ</strong> — Servico de Regulacao e Inspecao de Jogos.
                Recomendamos sempre verificar os termos e condicoes diretamente no site do operador.
              </p>
            </div>

            <div className="bg-gray-100 border-l-4 border-gray-900 p-3">
              <p className="text-xs text-gray-500 leading-relaxed">
                <strong className="text-gray-700">Aviso:</strong> Ofertas e bonus estao sujeitos a alteracao
                sem aviso previo. Confirme sempre os termos no website oficial antes de se registar.
              </p>
            </div>

            <div className="flex gap-3 pt-1">
              <button
                onClick={onClose}
                className="flex-1 flex items-center justify-center gap-2 bg-black text-white font-bold py-3 px-6 hover:bg-gray-900 transition-colors text-sm uppercase tracking-wide"
              >
                <CheckCircle className="h-4 w-4" />
                Entendido
              </button>
              <a
                href="/privacy-policy"
                onClick={onClose}
                className="flex items-center justify-center gap-1.5 px-4 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors text-xs font-semibold"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Privacidade
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
