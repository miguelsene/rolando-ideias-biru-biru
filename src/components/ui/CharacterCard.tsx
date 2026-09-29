import { motion } from 'framer-motion'
import { useState } from 'react'
import type { Personagem } from '../../data/content'
import { Icon } from './Icons'
import { WellbeingPips } from './WellbeingPips'

const faixa: Record<Personagem['cor'], string> = {
  terracota: 'bg-terracota',
  oliva: 'bg-oliva',
  profundo: 'bg-profundo',
  ocre: 'bg-ocre-800',
}

function Atributos({ p }: { p: Personagem }) {
  return (
    <ul className="space-y-2">
      {p.atributos.map((a) => (
        <li key={a.nome} className="flex items-center justify-between gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-terra-700">{a.nome}</span>
          <span className="flex items-center gap-2" aria-label={`${a.nome}: ${a.valor} de 3`}>
            <span className="flex gap-1" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <span key={i} className={`h-3 w-3 rotate-45 border ${i < a.valor ? 'border-terra bg-terra' : 'border-terra/40'}`} />
              ))}
            </span>
            <span className="w-4 text-right font-serif text-sm font-semibold tabular-nums" aria-hidden="true">{a.valor}</span>
          </span>
        </li>
      ))}
    </ul>
  )
}

/** Ficha de personagem com efeito de virar (frente: dados; verso: sonho, dificuldade e laço). */
export function CharacterCard({ p, indice }: { p: Personagem; indice: number }) {
  const [virada, setVirada] = useState(false)
  const Simbolo = Icon[p.simbolo]

  return (
    <motion.article
      initial={{ opacity: 0, y: 50, rotate: indice % 2 ? 3 : -3 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, delay: indice * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="perspective relative h-[33rem]"
      aria-label={`Personagem ${p.nome}`}
    >
      <motion.div
        className="preserve-3d relative h-full w-full cursor-pointer"
        animate={{ rotateY: virada ? 180 : 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        onClick={() => setVirada((v) => !v)}
        whileHover={{ y: -6 }}
      >
        {/* FRENTE */}
        <div className="papel backface-hidden absolute inset-0 flex flex-col overflow-hidden rounded-xl border border-terra/20 shadow-carta" aria-hidden={virada}>
          <div className={`relative ${faixa[p.cor]} grade-mapa-clara px-6 pb-6 pt-5 text-osso`}>
            <div className="flex items-start justify-between">
              <p className="eyebrow text-[10px] text-osso/85">Ficha de personagem</p>
              <Simbolo className="h-9 w-9 text-osso/90" />
            </div>
            <h3 className="mt-5 font-serif text-3xl font-semibold uppercase leading-none tracking-wide">{p.nome}</h3>
            <p className="mt-2 text-sm text-osso/90">{p.idade} anos</p>
          </div>
          <div className="borda-cordel opacity-60" aria-hidden="true" />
          <div className="flex flex-1 flex-col px-6 pb-9 pt-4">
            <dl className="space-y-2 text-sm">
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-terracota-600">Origem</dt>
                <dd className="font-medium">{p.origem}</dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-terracota-600">Ocupação</dt>
                <dd className="font-medium">{p.ocupacao}</dd>
              </div>
            </dl>
            <div className="my-4 h-px bg-terra/15" />
            <Atributos p={p} />
            <div className="mt-auto pt-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-terra-700">Bem-estar</p>
              <div className="mt-1.5"><WellbeingPips valor={p.bemEstar} /></div>
            </div>
          </div>
        </div>

        {/* VERSO */}
        <div className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col overflow-hidden rounded-xl border border-osso/10 bg-terra-800 p-6 pb-10 text-osso shadow-carta" aria-hidden={!virada}>
          <div className="grade-mapa-clara absolute inset-0 opacity-70" aria-hidden="true" />
          <div className="relative flex h-full flex-col">
            <p className="eyebrow text-[10px] text-ocre-300">{p.nome} · verso</p>
            <div className="mt-5 space-y-5">
              <div>
                <p className="font-serif text-sm font-semibold uppercase tracking-[0.2em] text-ocre-300">Sonho</p>
                <p className="mt-1.5 font-serif text-lg leading-snug">{p.sonho}</p>
              </div>
              <div>
                <p className="font-serif text-sm font-semibold uppercase tracking-[0.2em] text-terracota-300">Dificuldade</p>
                <p className="mt-1.5 leading-relaxed text-areia-100">{p.dificuldade}</p>
              </div>
              <div>
                <p className="font-serif text-sm font-semibold uppercase tracking-[0.2em] text-oliva-300">Laço</p>
                <p className="mt-1.5 leading-relaxed text-areia-100">{p.laco}</p>
              </div>
            </div>
            <p className="mt-auto text-xs italic text-areia-300">Personagem fictício de exemplo.</p>
          </div>
        </div>
      </motion.div>

      <button
        type="button"
        onClick={() => setVirada((v) => !v)}
        aria-pressed={virada}
        className="absolute -bottom-6 left-1/2 z-10 inline-flex min-h-[44px] -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-osso/30 bg-terra px-5 text-xs font-bold uppercase tracking-[0.18em] text-osso shadow-lg transition hover:bg-terracota"
      >
        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M4 8a6 6 0 0 1 11-2M16 12a6 6 0 0 1-11 2M15 2v4h-4M5 18v-4h4" /></svg>
        {virada ? 'Ver frente' : 'Sonho e dificuldade'}
      </button>
      <p className="sr-only" aria-live="polite">{virada ? `Mostrando o verso da ficha de ${p.nome}` : ''}</p>
    </motion.article>
  )
}
