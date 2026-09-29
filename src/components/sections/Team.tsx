import { motion } from 'framer-motion'
import { equipe } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'

const iniciais = (n: string) => {
  const p = n.split(' ').filter((x) => x.length > 2)
  return (p[0][0] + p[p.length - 1][0]).toUpperCase()
}
const fundos = ['bg-terracota', 'bg-oliva', 'bg-profundo', 'bg-ocre-800', 'bg-terra-700']

export function Team() {
  return (
    <section id="equipe" aria-labelledby="t-equipe" className="bg-areia-50 py-24 sm:py-32">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <SectionHeading numero="12" eyebrow="Nossa equipe" id="t-equipe" titulo={<>Quem está por trás <em className="font-light">da experiência?</em></>}>
          <p>Estudantes de diferentes séries e cursos, reunidos em torno de uma mesma mesa.</p>
        </SectionHeading>

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {equipe.map((nomeCompleto, i) => {
            const [nome, ...detalhes] = nomeCompleto.split(' — ')
            return (
            <motion.li
              key={nomeCompleto}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: (i % 4) * 0.07, duration: 0.5 }}
              className="group flex items-center gap-4 rounded-xl border border-terra/10 bg-osso p-4 transition hover:-translate-y-1 hover:border-terracota/40 hover:shadow-papel"
            >
              <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg font-serif text-base font-semibold text-osso transition-transform duration-500 group-hover:-rotate-6 ${fundos[i % fundos.length]}`} aria-hidden="true">
                {iniciais(nome)}
              </span>
              <span className="min-w-0"><span className="block font-medium leading-snug">{nome}</span><span className="mt-1 block text-xs text-terra-600">{detalhes.join(' · ')}</span></span>
            </motion.li>
          )})}
        </ul>
      </div>
    </section>
  )
}
