import { motion } from 'framer-motion'
import { estereotipos, impactos } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

// valores determinísticos para a "quebra" das letras
const desvio = (i: number, j: number) => ({
  y: ((i * 7 + j * 13) % 40) - 10,
  x: ((i * 11 + j * 5) % 24) - 12,
  r: ((i * 17 + j * 23) % 70) - 35,
})

function PalavraQuebrando({ texto, i }: { texto: string; i: number }) {
  return (
    <motion.span
      className="relative inline-block whitespace-nowrap px-1 font-serif text-2xl italic text-areia-200 sm:text-3xl md:text-4xl"
      initial="inteira"
      whileInView="quebrada"
      viewport={{ once: true, margin: '-120px' }}
    >
      {texto.split('').map((c, j) => {
        const d = desvio(i, j)
        return (
          <motion.span
            key={j}
            className="inline-block"
            variants={{
              inteira: { opacity: 1, x: 0, y: 0, rotate: 0 },
              quebrada: { opacity: 0.12, x: d.x, y: d.y, rotate: d.r, transition: { delay: 1.1 + i * 0.25 + j * 0.02, duration: 1.2, ease: 'easeOut' } },
            }}
          >
            {c === ' ' ? '\u00A0' : c}
          </motion.span>
        )
      })}
      <motion.span
        className="absolute left-0 top-1/2 h-[3px] w-full origin-left bg-terracota"
        variants={{ inteira: { scaleX: 0 }, quebrada: { scaleX: 1, transition: { delay: 0.4 + i * 0.25, duration: 0.6 } } }}
      />
    </motion.span>
  )
}

export function WhyTalk() {
  return (
    <section id="por-que" aria-labelledby="t-porque" className="grao relative overflow-hidden bg-terra-900 py-24 text-osso sm:py-32">
      <div className="relative mx-auto max-w-site px-5 sm:px-8">
        <SectionHeading numero="06" eyebrow="Por que falar sobre isso?" id="t-porque" tom="escuro" titulo={<>Quando o preconceito deixa de ser <em className="font-light text-ocre-300">“apenas uma piada”.</em></>}>
          <p>
            A xenofobia regional se manifesta em piadas, imitações de sotaque, generalizações e barreiras de acesso a trabalho, moradia e convivência. Muitas vezes normalizados, esses comportamentos podem gerar sofrimento real.
          </p>
        </SectionHeading>

        {/* Estereótipos sendo desconstruídos */}
        <div className="relative mt-16 rounded-2xl border border-osso/10 bg-black/20 px-6 py-12 sm:px-12">
          <p className="eyebrow mb-8 text-center text-[10px] text-areia-300">Estereótipos em desconstrução</p>
          <p className="sr-only">Frases estereotipadas comuns — como “é tudo igual”, “fala errado” e “é só uma piada” — são riscadas e se desfazem na tela.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6" aria-hidden="true">
            {estereotipos.map((e, i) => (
              <PalavraQuebrando key={e} texto={e} i={i} />
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ delay: 3.4, duration: 1 }}
            className="mt-10 text-center font-serif text-xl text-osso sm:text-2xl"
          >
            O que fica: <span className="italic text-ocre-300">pessoas, histórias, saberes e direitos.</span>
          </motion.p>
        </div>

        {/* Impactos */}
        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-osso/10 bg-osso/10 sm:grid-cols-2 lg:grid-cols-4">
          {impactos.map((im, i) => (
            <motion.li
              key={im.t}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className="bg-terra-900 p-6 transition-colors hover:bg-terra-800"
            >
              <span className="font-serif text-sm text-ocre-300">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 font-serif text-xl font-semibold">{im.t === 'Pertencimento' ? 'Dificuldade de pertencimento' : im.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-areia-300">{im.d}</p>
            </motion.li>
          ))}
        </ul>

        {/* Destaque */}
        <Reveal className="mt-20 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <p className="border-l-4 border-terracota pl-6 font-serif text-2xl leading-snug sm:text-3xl md:text-4xl text-balance">
            Preconceito não é apenas uma opinião. Ele pode afetar a maneira como uma pessoa vive, se relaciona e enxerga a si mesma.
          </p>
          <figure className="rounded-xl border border-osso/10 p-6 text-sm leading-relaxed text-areia-200">
            <blockquote className="italic">
              “Constituem objetivos fundamentais da República Federativa do Brasil: […] promover o bem de todos, sem preconceitos de origem, raça, sexo, cor, idade e quaisquer outras formas de discriminação.”
            </blockquote>
            <figcaption className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-ocre-300">Constituição Federal, 1988 — art. 3º, IV</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
