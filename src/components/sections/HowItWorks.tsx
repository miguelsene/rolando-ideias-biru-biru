import { motion } from 'framer-motion'
import { etapas, numeros } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

const cores = ['bg-ocre', 'bg-terracota', 'bg-oliva', 'bg-profundo-300']

export function HowItWorks() {
  return (
    <section id="como-funciona" aria-labelledby="t-como" className="madeira relative overflow-hidden py-24 text-osso sm:py-32">
      <div className="relative mx-auto max-w-site px-5 sm:px-8">
        <SectionHeading numero="08" eyebrow="Como funciona a experiência?" id="t-como" tom="escuro" titulo={<>35 minutos. Uma história. <em className="font-light text-ocre-300">Muitas perspectivas.</em></>}>
          <p>Nunca jogou RPG? Não tem problema. As regras são aprendidas em poucos minutos, e os mestres conduzem cada passo da aventura.</p>
        </SectionHeading>

        {/* Painel de missão */}
        <Reveal className="relative mt-14 overflow-hidden rounded-2xl border border-ocre/30 bg-terra-900/70 shadow-carta">
          <div className="flex items-center justify-between border-b border-osso/10 px-6 py-4 sm:px-8">
            <p className="eyebrow text-[10px] text-ocre-300">Painel da missão · sessão</p>
            <p className="font-serif text-sm text-areia-200">Total: <strong className="text-osso">35 min</strong></p>
          </div>

          {/* barra proporcional de tempo */}
          <div className="px-6 pt-6 sm:px-8" aria-hidden="true">
            <div className="flex h-3 overflow-hidden rounded-full bg-osso/10">
              {etapas.map((e, i) => (
                <motion.span
                  key={e.t}
                  className={`${cores[i]} h-full border-r-2 border-terra-900 last:border-r-0`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(Number(e.min) / 35) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.3 + i * 0.25, ease: 'easeOut' }}
                />
              ))}
            </div>
          </div>

          <ol className="grid gap-0 p-6 sm:p-8 lg:grid-cols-4 lg:gap-6">
            {etapas.map((e, i) => (
              <li key={e.t} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15 }}
                  className="flex gap-5 lg:block"
                >
                  <div className="flex flex-col items-center lg:items-start">
                    <p className="font-serif text-5xl font-semibold leading-none tabular-nums text-osso">
                      {e.min}
                      <span className="ml-1 font-sans text-sm font-bold tracking-[0.2em] text-ocre-300">MIN</span>
                    </p>
                    {i < etapas.length - 1 && (
                      <span className="my-3 text-2xl text-ocre-300 lg:hidden" aria-hidden="true">↓</span>
                    )}
                  </div>
                  <div className="pb-6 lg:mt-4 lg:pb-0">
                    <span className={`mb-3 hidden h-1 w-10 rounded-full lg:block ${cores[i]}`} aria-hidden="true" />
                    <h3 className="font-serif text-xl font-semibold">{e.t}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-areia-300">{e.d}</p>
                  </div>
                </motion.div>
                {i < etapas.length - 1 && (
                  <span className="absolute right-3 top-3 hidden text-2xl text-ocre-300 lg:block" aria-hidden="true">→</span>
                )}
              </li>
            ))}
          </ol>
        </Reveal>

        <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {numeros.map((n, i) => (
            <motion.li
              key={n.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-osso/15 bg-osso/5 p-5 sm:p-6"
            >
              <p className="h-4 text-xs font-bold uppercase tracking-[0.2em] text-ocre-300">{n.pre ?? '\u00A0'}</p>
              <p className="font-serif text-5xl font-semibold text-osso sm:text-6xl">{n.v}</p>
              <p className="mt-1 text-sm text-areia-200">{n.t}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
