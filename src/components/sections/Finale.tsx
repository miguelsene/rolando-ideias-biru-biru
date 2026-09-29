import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { MapSketch } from '../ui/MapSketch'
import { DieFace } from '../ui/Die'

export function Finale() {
  return (
    <section id="final" aria-labelledby="t-final" className="grao relative overflow-hidden bg-profundo-900 py-28 text-osso sm:py-40">
      <div className="grade-mapa-clara absolute inset-0" aria-hidden="true" />
      <MapSketch tom="escuro" className="pointer-events-none absolute -right-20 top-1/2 w-[46rem] max-w-none -translate-y-1/2 opacity-[0.18]" />
      <div className="absolute inset-0 bg-gradient-to-r from-profundo-900 via-profundo-900/85 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-site px-5 sm:px-8">
        <motion.div initial={{ rotate: -30, opacity: 0 }} whileInView={{ rotate: -12, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mb-10 h-14 w-14">
          <DieFace valor={6} cor="#E6B866" />
        </motion.div>
        <h2 id="t-final" className="titulo text-5xl sm:text-7xl lg:text-[6.5rem]">
          <motion.span initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="block">
            A história termina.
          </motion.span>
          <motion.span initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.3 }} className="block font-light italic text-ocre-300">
            A reflexão continua.
          </motion.span>
        </h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 1 }} className="mt-10 max-w-2xl font-serif text-xl leading-relaxed text-areia-100 sm:text-2xl">
          Talvez a maior escolha da aventura não esteja nos dados, mas na maneira como escolhemos tratar as pessoas ao nosso redor.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1.1 }} className="mt-12">
          <Button href="#projeto" variante="claro">Conhecer o projeto</Button>
        </motion.div>
        <p className="eyebrow mt-20 text-[11px] text-areia-300">Rolando Ideias — SLA 2026</p>
      </div>
    </section>
  )
}
