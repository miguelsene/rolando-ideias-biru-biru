import { motion } from 'framer-motion'
import { culturas } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'
import { Icon } from '../ui/Icons'

const tons = ['bg-terracota text-osso', 'bg-osso text-terra', 'bg-oliva text-osso', 'bg-areia-200 text-terra', 'bg-profundo text-osso', 'bg-osso text-terra', 'bg-ocre-800 text-osso']

export function Culture() {
  return (
    <section id="cultura" aria-labelledby="t-cultura" className="papel relative overflow-hidden py-24 sm:py-32">
      <div className="relative mx-auto max-w-site px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <SectionHeading numero="06" eyebrow="Cultura e pertencimento" id="t-cultura" titulo={<>Uma história sobre pessoas, <em className="font-light">não estereótipos.</em></>} />
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="text-lg leading-relaxed text-terra-700">
            Cada personagem possui uma história própria, com sonhos, saberes, relações e projetos. O Nordeste não é apenas um cenário: é parte da identidade e da diversidade cultural brasileira.
          </motion.p>
        </div>

        {/* mosaico em estilo exposição */}
        <ul className="mt-16 grid  grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {culturas.map((c, i) => {
            const Ic = Icon[c.id]
            const grande = i === 0
            return (
              <motion.li
                key={c.id}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
                className={`group relative flex min-h-[13rem] flex-col justify-between overflow-hidden rounded-xl border border-terra/10 p-7 shadow-papel ${tons[i]} ${grande ? 'sm:col-span-2' : ''}`}
              >
                <div className="grade-mapa pointer-events-none absolute inset-0 opacity-30 mix-blend-multiply" aria-hidden="true" />
                <div className="relative flex items-start justify-between">
                  <span className="font-serif text-sm italic opacity-70">n.º {String(i + 1).padStart(2, '0')}</span>
                  <Ic className="h-12 w-12 opacity-90 transition-transform duration-700 group-hover:-rotate-6 group-hover:scale-110" />
                </div>
                <div className="relative mt-8">
                  <h3 className={`font-serif font-semibold ${grande ? 'text-4xl' : 'text-3xl'}`}>{c.t}</h3>
                  <p className="mt-2 max-w-sm leading-relaxed opacity-90">{c.d}</p>
                </div>
              </motion.li>
            )
          })}
          <li className="flex min-h-[8rem] items-center justify-center rounded-xl border-2 sm:col-span-2 lg:col-span-4 border-dashed border-terra/25 p-7 text-center">
            <p className="font-serif text-xl italic text-terra-700">…e muitas outras histórias ainda por contar.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
