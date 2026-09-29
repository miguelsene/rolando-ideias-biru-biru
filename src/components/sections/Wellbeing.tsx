import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { niveisBemEstar, situacoes } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

const corNivel = (v: number) => (v >= 4 ? 'bg-oliva' : v >= 2 ? 'bg-ocre' : 'bg-terracota')
const corTexto = (v: number) => (v >= 4 ? 'text-oliva-700' : v >= 2 ? 'text-ocre-700' : 'text-terracota-600')

export function Wellbeing() {
  const [valor, setValor] = useState(5)
  const [ultima, setUltima] = useState<{ txt: string; delta: number } | null>(null)
  const nivel = niveisBemEstar[valor]

  function aplicar(txt: string, delta: number) {
    setValor((v) => Math.min(5, Math.max(0, v + delta)))
    setUltima({ txt, delta })
  }

  return (
    <section id="bem-estar" aria-labelledby="t-bemestar" className="relative overflow-hidden bg-areia-100 py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-10 top-10 select-none font-serif text-[22rem] font-bold leading-none text-terra/[0.04] sm:text-[30rem]" aria-hidden="true">
        {valor}
      </div>
      <div className="relative mx-auto max-w-site px-5 sm:px-8">
        <SectionHeading numero="05" eyebrow="O marcador de bem-estar" id="t-bemestar" titulo={<>Bem-estar <em className="font-light">durante a jornada.</em></>}>
          <p>
            O personagem possui um marcador de bem-estar de 0 a 5. Algumas situações podem reduzir esse marcador, enquanto atitudes de <strong className="text-terra">acolhimento, cooperação, escuta e acesso a direitos</strong> podem recuperá-lo.
          </p>
          <p className="text-base">Quanto menor o bem-estar, mais difícil fica agir — mostrando que o sofrimento emocional afeta decisões e oportunidades.</p>
        </SectionHeading>

        <Reveal className="mt-14 grid gap-8 lg:grid-cols-[1.25fr_1fr]">
          {/* Painel interativo */}
          <div className="papel rounded-2xl border border-terra/10 p-6 shadow-papel sm:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <p className="eyebrow text-terra-700">Experimente o marcador</p>
              <p className="text-sm text-terra-600">Toque em um nível ou use as situações ao lado</p>
            </div>

            <div className="mt-8 flex items-end gap-2 sm:gap-3" role="group" aria-label="Selecionar nível de bem-estar">
              {niveisBemEstar.map((n) => {
                const ativo = n.valor <= valor
                return (
                  <button
                    key={n.valor}
                    type="button"
                    onClick={() => { setValor(n.valor); setUltima(null) }}
                    aria-pressed={valor === n.valor}
                    aria-label={`${n.valor} — ${n.rotulo}`}
                    className="group flex flex-1 flex-col items-center gap-3"
                  >
                    <span className="relative flex w-full items-end" style={{ height: `${60 + n.valor * 26}px` }}>
                      <span className="absolute inset-0 rounded-md border-2 border-dashed border-terra/20" />
                      <motion.span
                        className={`relative w-full rounded-md ${corNivel(valor)}`}
                        initial={false}
                        animate={{ height: ativo ? '100%' : '0%', opacity: ativo ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: ativo ? n.valor * 0.04 : 0 }}
                      />
                    </span>
                    <span className={`flex h-10 w-10 items-center justify-center rounded-full border-2 font-serif text-lg font-semibold transition ${valor === n.valor ? 'border-terra bg-terra text-osso' : 'border-terra/25 text-terra-700 group-hover:border-terra'}`}>
                      {n.valor}
                    </span>
                  </button>
                )
              })}
            </div>

            <div className="mt-8 min-h-[9rem] border-t border-terra/15 pt-6" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div key={valor} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                  <p className={`font-serif text-3xl font-semibold ${corTexto(valor)}`}>
                    {valor} — {nivel.rotulo}
                  </p>
                  <p className="mt-2 max-w-xl leading-relaxed text-terra-700">{nivel.texto}</p>
                  {ultima && (
                    <p className="mt-3 text-sm font-medium text-terra-600">
                      {ultima.delta < 0 ? '▼ Situação:' : '▲ Atitude:'} {ultima.txt}
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Situações */}
          <div className="grid gap-6">
            <div className="rounded-2xl border border-terracota/25 bg-osso p-6 sm:p-8">
              <p className="eyebrow flex items-center gap-2 text-terracota-600"><span aria-hidden="true">▼</span> Podem reduzir</p>
              <ul className="mt-4 space-y-2">
                {situacoes.reduzem.map((s) => (
                  <li key={s}>
                    <button type="button" onClick={() => aplicar(s, -1)} disabled={valor === 0} className="flex min-h-[48px] w-full items-center justify-between gap-4 rounded-lg border border-terra/10 px-4 py-2 text-left text-sm transition hover:border-terracota hover:bg-terracota/5 disabled:cursor-not-allowed disabled:opacity-40">
                      <span>{s}</span><span className="shrink-0 font-serif font-semibold text-terracota-600">−1</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-oliva/30 bg-osso p-6 sm:p-8">
              <p className="eyebrow flex items-center gap-2 text-oliva-700"><span aria-hidden="true">▲</span> Podem recuperar</p>
              <ul className="mt-4 space-y-2">
                {situacoes.recuperam.map((s) => (
                  <li key={s}>
                    <button type="button" onClick={() => aplicar(s, +1)} disabled={valor === 5} className="flex min-h-[48px] w-full items-center justify-between gap-4 rounded-lg border border-terra/10 px-4 py-2 text-left text-sm transition hover:border-oliva hover:bg-oliva/5 disabled:cursor-not-allowed disabled:opacity-40">
                      <span>{s}</span><span className="shrink-0 font-serif font-semibold text-oliva-700">+1</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-terra-600">
          Ao final da sessão, o grupo compara os marcadores e conversa sobre por que a solidariedade funcionou como fator de proteção. Os efeitos são sempre descritos de forma respeitosa, sem cenas gráficas.
        </p>
      </div>
    </section>
  )
}
