"use client"

import { useState, useEffect } from "react"
import { X, AlertTriangle, Shield, CheckCircle } from "lucide-react"

interface AgeRestrictionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AgeRestrictionModal({ isOpen, onClose }: AgeRestrictionModalProps) {
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
                <AlertTriangle className="h-5 w-5 text-black" />
              </div>
              <div>
                <h2 className="text-base font-black text-white uppercase tracking-wide">Restricao de Idade</h2>
                <p className="text-xs text-white/60">Conteudo para maiores de 18 anos</p>
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

          {/* Big +18 badge */}
          <div className="flex justify-center pt-6 pb-2">
            <div className="w-20 h-20 bg-black flex items-center justify-center">
              <span className="text-white font-black text-2xl">+18</span>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 pb-6 pt-4 space-y-4">
            <p className="text-sm font-semibold text-gray-900 text-center">
              Este website destina-se exclusivamente a utilizadores com 18 ou mais anos de idade.
            </p>

            <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
              <div className="flex items-start gap-3 p-3 bg-gray-50 border border-gray-200">
                <Shield className="w-4 h-4 text-gray-900 flex-shrink-0 mt-0.5" />
                <p>
                  Ao continuar, confirma que tem 18 ou mais anos e que esta ciente dos riscos associados
                  às apostas desportivas.
                </p>
              </div>
              <p>
                Apostas sao uma forma de entretenimento. Nunca aposte valores que nao pode perder.
                Defina limites e respeite-os.
              </p>
              <p>
                Se sentir que o jogo esta a tornar-se um problema, contacte a{" "}
                <a
                  href="https://jogoresponsavel.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-gray-900 underline underline-offset-2"
                >
                  Linha de Apoio ao Jogo Responsavel
                </a>
                .
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-full flex items-center justify-center gap-2 bg-black text-white font-bold py-3 px-6 hover:bg-gray-900 transition-colors text-sm uppercase tracking-wide"
            >
              <CheckCircle className="h-4 w-4" />
              Tenho 18 ou Mais Anos
            </button>

            <p className="text-center text-[11px] text-gray-400">
              Jogo responsavel — jogoresponsavel.pt
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
