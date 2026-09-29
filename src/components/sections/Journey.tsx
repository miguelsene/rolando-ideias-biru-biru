import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { atos } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'
import { Icon } from '../ui/Icons'
import { DashedPath } from '../ui/DashedPath'

const alturas = [30, 120, 40, 110] // posição vertical de cada parada na rota (viewBox 0–160)
const icones = [Icon.migracao, Icon.trabalho, Icon.reflexao, Icon.pertencimento]

export function Journey() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.6'] })
  const progresso = useSpring(scrollYProgress, { stiffness: 80, damping: 20 })
  const escalaY = useTransform(progresso, [0, 1], [0, 1])

  return (
    <section id="jornada" aria-labelledby="t-jornada" className="papel relative overflow-hidden py-24 sm:py-32">
      <div className="grade-mapa absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-site px-5 sm:px-8">
        <SectionHeading numero="03" eyebrow="A jornada" id="t-jornada" titulo={<>Uma jornada <em className="font-light">em quatro atos</em></>}>
          <p>Da despedida do sertão à construção de uma rede de apoio: a aventura acompanha o caminho de quem migra — e as escolhas feitas ao longo da estrada.</p>
        </SectionHeading>

        <div ref={ref} className="relative mt-16">
          {/* ROTA HORIZONTAL (desktop) */}
          <div className="relative hidden h-40 lg:block" aria-hidden="true">
            <svg viewBox="0 0 1000 160" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
              <path d="M0 80 C 60 80, 80 30, 125 30 S 300 120, 375 120 S 560 40, 625 40 S 810 110, 875 110 S 960 90, 1000 80" fill="none" stroke="#4A3526" strokeOpacity=".18" strokeWidth="3" vectorEffect="non-scaling-stroke" />
              <DashedPath d="M0 80 C 60 80, 80 30, 125 30 S 300 120, 375 120 S 560 40, 625 40 S 810 110, 875 110 S 960 90, 1000 80" stroke="#B5532F" strokeWidth={3} dash="4 10" progress={progresso} nonScaling maskWidth={40} />
            </svg>
            {atos.map((a, i) => (
              <motion.div
                key={a.n}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${12.5 + i * 25}%`, top: `${(alturas[i] / 160) * 100}%` }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.25, type: 'spring', stiffness: 200, damping: 14 }}
              >
                <span className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-terracota bg-osso font-serif text-xl font-semibold text-terracota shadow-papel">
                  {a.n}
                  <span className="absolute -inset-2 rounded-full border border-dashed border-terracota/40" />
                </span>
              </motion.div>
            ))}
          </div>

          {/* Linha vertical (mobile/tablet) */}
          <div className="absolute bottom-6 left-7 top-6 w-px bg-terra/15 lg:hidden" aria-hidden="true">
            <motion.div style={{ scaleY: escalaY }} className="h-full w-[3px] origin-top -translate-x-px bg-terracota" />
          </div>

          <ol className="relative grid gap-8 lg:mt-8 lg:grid-cols-4 lg:gap-6">
            {atos.map((a, i) => {
              const Ic = icones[i]
              return (
                <motion.li
                  key={a.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.7, delay: i * 0.12 }}
                  className="relative pl-20 lg:pl-0"
                >
                  <span className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-full border-2 border-terracota bg-osso font-serif text-lg font-semibold text-terracota shadow-papel lg:hidden" aria-hidden="true">
                    {a.n}
                  </span>
                  <article className="h-full rounded-lg border border-terra/10 bg-osso/80 p-6 shadow-papel backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <p className="eyebrow text-[10px] text-terracota-600">Ato {a.n} · {a.local}</p>
                      <Ic className="h-7 w-7 text-terra-600" />
                    </div>
                    <h3 className="mt-3 font-serif text-2xl font-semibold uppercase tracking-wide">{a.titulo}</h3>
                    <p className="mt-3 leading-relaxed text-terra-700">{a.texto}</p>
                    <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-areia-200 px-3 py-1 text-xs font-semibold text-terra-700">
                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="8" cy="8" r="6.5" /><path d="M8 4.5V8l2.5 1.5" /></svg>
                      {a.tempo}
                    </p>
                  </article>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
