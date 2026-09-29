import { motion } from 'framer-motion'
import { combinados } from '../../data/content'
import { Icon } from '../ui/Icons'
import { Reveal } from '../ui/Reveal'
import { HandUnderline } from '../ui/HandUnderline'

export function Safety() {
  return (
    <section id="seguranca" aria-labelledby="t-seguranca" className="grao relative overflow-hidden bg-oliva-700 py-24 text-osso sm:py-32">
      <div className="grade-mapa-clara absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-site gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.3fr] lg:items-start">
        <Reveal className="lg:sticky lg:top-28">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 12 }}
            className="flex h-24 w-24 items-center justify-center rounded-3xl border border-osso/30 bg-osso/10"
          >
            <Icon.escudo className="h-14 w-14 text-osso" />
          </motion.div>
          <p className="eyebrow mt-8 flex items-center gap-3 text-oliva-300">
            <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-current px-2 font-serif text-[0.8rem] tracking-normal">09</span>
            Segurança e respeito
          </p>
          <h2 id="t-seguranca" className="titulo mt-5 text-4xl text-balance sm:text-5xl lg:text-6xl">
            Aqui, ninguém precisa contar a própria história.
          </h2>
          <HandUnderline className="mt-4 h-4 w-40 text-ocre-300" />
          <p className="mt-6 text-lg leading-relaxed text-areia-100">
            O tema é sensível — e a mesa é um espaço seguro. Os mestres são preparados para conduzir a experiência com cuidado, e a escola oferece orientação sobre onde buscar acolhimento caso o tema desperte desconforto.
          </p>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2">
          {combinados.map((c, i) => (
            <motion.li
              key={c.t}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="flex gap-4 rounded-xl border border-osso/15 bg-oliva-700/60 p-6 backdrop-blur-sm"
            >
              <svg viewBox="0 0 24 24" className="mt-0.5 h-6 w-6 shrink-0 text-ocre-300" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="m7.5 12.5 3 3 6-6.5" />
              </svg>
              <div>
                <h3 className="font-serif text-xl font-semibold">{c.t}</h3>
                <p className="mt-1 leading-relaxed text-areia-100">{c.d}</p>
              </div>
            </motion.li>
          ))}
          <li className="rounded-xl border-2 border-dashed border-ocre-300/60 p-6 sm:col-span-2">
            <p className="flex items-center gap-4">
              <span className="flex h-14 w-10 shrink-0 -rotate-6 items-center justify-center rounded-md bg-ocre-300 font-serif text-2xl font-bold text-terra shadow-lg" aria-hidden="true">✋</span>
              <span className="leading-relaxed text-areia-100">
                <strong className="text-osso">O cartão de pausa</strong> fica sobre a mesa. Tocar nele é suficiente — sem explicações, sem julgamentos.
              </span>
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
