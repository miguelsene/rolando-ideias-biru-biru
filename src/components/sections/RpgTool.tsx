import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'
import { Icon } from '../ui/Icons'
import { DashedPath } from '../ui/DashedPath'

const passos = [
  { t: 'Jogar', d: 'Experienciar.', ext: 'Viver a história por dentro, na pele de um personagem.', i: Icon.jogar },
  { t: 'Escolher', d: 'Tomar decisões.', ext: 'Conversar, cooperar e assumir as consequências narrativas.', i: Icon.escolher },
  { t: 'Refletir', d: 'Relacionar a experiência com a realidade.', ext: 'Ligar as cenas do jogo ao cotidiano da sociedade brasileira.', i: Icon.refletir },
]

export function RpgTool() {
  return (
    <section id="rpg" aria-labelledby="t-rpg" className="relative overflow-hidden bg-areia-50 py-24 sm:py-32">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <SectionHeading numero="09" eyebrow="O RPG como ferramenta" id="t-rpg" alinhamento="centro" titulo={<>E se aprender pudesse ser <em className="font-light">uma experiência?</em></>}>
          <p>
            O RPG transforma conceitos abstratos em decisões concretas. Ao interpretar um personagem, o participante precisa conversar, cooperar, escolher e lidar com as consequências narrativas de suas decisões.
          </p>
        </SectionHeading>

        <ol className="relative mt-16 grid gap-6 md:grid-cols-3">
          <svg className="pointer-events-none absolute left-[16%] right-[16%] top-14 hidden h-6 md:block" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
            <DashedPath d="M0 5 Q 25 0 50 5 T 100 5" stroke="#B5532F" strokeWidth={2} dash="3 6" nonScaling maskWidth={30} delay={0.3} duration={1.6} />
          </svg>
          {passos.map((p, i) => (
            <motion.li
              key={p.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.18, duration: 0.7 }}
              className="relative flex flex-col items-center text-center"
            >
              <span className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border-2 border-terra/15 bg-osso shadow-papel">
                <p.i className="h-12 w-12 text-terracota" />
                <span className="absolute -right-1 -top-1 flex h-9 w-9 items-center justify-center rounded-full bg-terra font-serif text-sm font-semibold text-osso">{i + 1}</span>
              </span>
              <h3 className="mt-6 font-serif text-3xl font-semibold uppercase tracking-wide">{p.t}</h3>
              <p className="mt-1 font-serif text-lg italic text-terracota-600">{p.d}</p>
              <p className="mt-3 max-w-xs leading-relaxed text-terra-700">{p.ext}</p>
            </motion.li>
          ))}
        </ol>

        <motion.figure initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mx-auto mt-20 max-w-2xl text-center">
          <blockquote className="font-serif text-xl italic leading-snug text-terra-700">
            A educação como prática dialógica, que valoriza a experiência e a autonomia de quem aprende.
          </blockquote>
          <figcaption className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-terra-600">Inspirado em Paulo Freire, <cite className="not-italic">Pedagogia da autonomia</cite> (1996)</figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
