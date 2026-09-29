import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'
import { Icon } from '../ui/Icons'

const cards = [
  { t: 'Empatia', d: 'Vivenciar uma história através da perspectiva de outra pessoa.', i: Icon.empatia, cor: 'text-terracota', n: 'I' },
  { t: 'Reflexão', d: 'Perceber como preconceito, exclusão e estereótipos afetam vidas reais.', i: Icon.reflexao, cor: 'text-profundo', n: 'II' },
  { t: 'Pertencimento', d: 'Entender a importância do acolhimento, da solidariedade e das redes de apoio.', i: Icon.pertencimento, cor: 'text-oliva', n: 'III' },
]

export function About() {
  return (
    <section id="projeto" aria-labelledby="t-projeto" className="relative bg-areia-50 py-24 sm:py-32">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <SectionHeading numero="02" eyebrow="O que é o Rolando Ideias?" id="t-projeto" titulo="Muito mais que um RPG." />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg leading-relaxed text-terra-700"
          >
            O RPG permite que cada participante interprete um personagem, tome decisões e enfrente situações narrativas. Através dessa experiência, o projeto busca estimular <strong className="text-terra">empatia</strong>, <strong className="text-terra">reflexão crítica</strong> e compreensão dos <strong className="text-terra">impactos do preconceito regional</strong>.
          </motion.p>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {cards.map((c, idx) => (
            <motion.li
              key={c.t}
              initial={{ opacity: 0, y: 40, rotate: idx === 1 ? 0 : idx === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              whileHover={{ y: -8, rotate: 0 }}
              className="papel group relative overflow-hidden rounded-lg border border-terra/10 p-8 shadow-papel"
            >
              <span className="absolute right-6 top-5 font-serif text-5xl font-light italic text-terra/10" aria-hidden="true">{c.n}</span>
              <c.i className={`h-14 w-14 ${c.cor} transition-transform duration-500 group-hover:scale-110`} />
              <h3 className="mt-6 font-serif text-2xl font-semibold uppercase tracking-wide">{c.t}</h3>
              <p className="mt-3 leading-relaxed text-terra-700">{c.d}</p>
              <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-terracota transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
