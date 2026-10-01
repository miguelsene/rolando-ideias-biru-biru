import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'

const imagens = Object.entries(import.meta.glob('../../../Fichas/*.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
}))
  .sort(([a], [b]) => {
    const numero = (path: string) => Number(path.match(/\((\d+)\)/)?.[1] ?? 0)
    return numero(a) - numero(b)
  })
  .map(([, url]) => url as string)

// Os arquivos foram organizados por tipo e nome, então os pares são explícitos
// para manter cada ficha junto da história do mesmo personagem.
const cartas = [
  { nome: 'Tereza', frente: imagens[2], verso: imagens[1] },
  { nome: 'Rosália dos Anjos', frente: imagens[3], verso: imagens[0] },
  { nome: 'Francisca Benedita', frente: imagens[4], verso: imagens[10] },
  { nome: 'Socorro', frente: imagens[5], verso: imagens[6] },
  { nome: 'Maria Curuá', frente: imagens[15], verso: imagens[7] },
  { nome: 'Aroldo Bezerra', frente: imagens[8], verso: imagens[18] },
  { nome: 'Maria Anunciada', frente: imagens[12], verso: imagens[9] },
  { nome: 'Pedro Grilo', frente: imagens[13], verso: imagens[16] },
  { nome: 'Lázaro', frente: imagens[17], verso: imagens[11] },
  { nome: 'Manoel Pereira', frente: imagens[23], verso: imagens[14] },
  { nome: 'Raimundo Batista', frente: imagens[19], verso: imagens[22] },
  { nome: 'Cristiano', frente: imagens[20], verso: imagens[21] },
]

export function Characters() {
  const [viradas, setViradas] = useState<boolean[]>(Array(12).fill(false))
  const [zoom, setZoom] = useState<{ imagem: string; indice: number; verso: boolean } | null>(null)

  useEffect(() => {
    if (!zoom) return
    const aoPressionar = (event: KeyboardEvent) => event.key === 'Escape' && setZoom(null)
    window.addEventListener('keydown', aoPressionar)
    return () => window.removeEventListener('keydown', aoPressionar)
  }, [zoom])

  return (
    <section id="personagens" aria-labelledby="t-personagens" className="madeira relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/30 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto max-w-site px-5 sm:px-8">
        <SectionHeading numero="05" eyebrow="Personagens do jogo" id="t-personagens" tom="escuro" titulo="Conheça quem vai à aventura.">
          <p>As cartas mostram a ficha de cada personagem na frente e sua história no verso. Clique para virar; dê dois cliques para ampliar.</p>
        </SectionHeading>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {cartas.map((carta, i) => {
            const imagem = viradas[i] ? carta.verso : carta.frente
            return (
              <motion.div
                key={carta.frente}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
                className="group flex min-w-0 flex-col"
              >
                <button
                  type="button"
                  aria-label={`Carta de ${carta.nome}, ${viradas[i] ? 'história' : 'ficha'}. Clique para virar; dois cliques para ampliar.`}
                  onClick={() => setViradas((estado) => estado.map((valor, indice) => indice === i ? !valor : valor))}
                  onDoubleClick={() => setZoom({ imagem, indice: i, verso: viradas[i] })}
                  className="relative flex aspect-[3/4] flex-col overflow-hidden rounded-2xl border border-ocre-300/50 bg-gradient-to-br from-[#f8f0dc] via-[#ead9b8] to-[#d9bd8e] p-2 shadow-[0_18px_50px_rgba(0,0,0,.32)] outline-offset-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,.42)] focus-visible:outline-ocre-300 sm:p-3"
                >
                <span className="mb-2 flex items-center justify-between gap-1 px-1 text-left">
                  <span className="truncate font-serif text-xs font-bold text-terra sm:text-sm">{carta.nome}</span>
                  <span className="shrink-0 rounded-full bg-terra px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-osso sm:text-[9px]">
                    {viradas[i] ? 'História' : 'Ficha'}
                  </span>
                </span>
                <motion.img
                  key={imagem}
                  src={imagem}
                  alt={`${carta.nome} — ${viradas[i] ? 'história do personagem' : 'ficha do personagem'}`}
                  className="min-h-0 flex-1 rounded-xl border border-terra/15 bg-[#f8f0dc] object-contain transition-transform duration-300 group-hover:scale-[1.015]"
                  initial={{ rotateY: 90, opacity: 0.5 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  transition={{ duration: 0.35 }}
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-3 pb-3 pt-10 text-left text-xs font-semibold text-white sm:text-sm">
                  {viradas[i] ? 'Clique para voltar à ficha' : 'Clique para ler a história'}
                </span>
                </button>
                <button
                  type="button"
                  onClick={() => setZoom({ imagem: carta.verso, indice: i, verso: true })}
                  className="mt-2 inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-ocre-300/60 bg-osso px-3 py-2 text-xs font-bold text-terra shadow transition hover:bg-ocre-300 hover:text-terra-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocre-300 sm:text-sm"
                  aria-label={`Ler a história de ${carta.nome} ampliada`}
                >
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M3 4.5h14v11H3zM6 8h8M6 11h6" /><path d="m14 14 3 3" /></svg>
                  Ler história
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>

      <AnimatePresence>
        {zoom && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={`Carta ${zoom.indice + 1} ampliada`}
            onClick={() => setZoom(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button type="button" onClick={() => setZoom(null)} className="absolute right-4 top-4 rounded-full bg-osso px-4 py-2 font-semibold text-terra shadow-lg" aria-label="Fechar ampliação">Fechar ×</button>
            <motion.img
              src={zoom.imagem}
              alt={`${cartas[zoom.indice].nome} — ${zoom.verso ? 'história do personagem' : 'ficha do personagem'}`}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[92vh] max-w-[94vw] rounded-lg object-contain shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
