import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { MapSketch } from '../ui/MapSketch'
import { WellbeingPips } from '../ui/WellbeingPips'

export function Story() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const yFicha = useTransform(scrollYProgress, [0, 1], [60, -60])
  const rot = useTransform(scrollYProgress, [0, 1], [2, -6])

  return (
    <section id="experiencia" aria-labelledby="t-historia" className="papel relative overflow-hidden py-24 sm:py-32">
      <div className="grade-mapa absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-site items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <SectionHeading numero="01" eyebrow="Prólogo" id="t-historia" titulo={<>Você está entrando <em className="font-light">em uma história.</em></>}>
            <p className="first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-6xl first-letter:font-semibold first-letter:leading-[0.85] first-letter:text-terracota">
              Imagine deixar para trás o lugar onde você nasceu. Uma nova cidade. Novas pessoas. Novas oportunidades. Mas também novos olhares, julgamentos e barreiras.
            </p>
            <p>
              Em <strong className="font-semibold text-terra">Rolando Ideias</strong>, você não apenas observa uma história. <strong className="font-semibold text-terra">Você participa dela.</strong>
            </p>
          </SectionHeading>
        </div>

        <div ref={ref} className="relative mx-auto mb-24 w-full max-w-lg sm:mb-10">
          <Reveal className="papel relative rotate-[-2deg] rounded-sm border border-terra/15 p-4 shadow-papel sm:p-6">
            <MapSketch className="h-auto w-full" />
          </Reveal>
          <motion.figure
            style={{ y: yFicha, rotate: rot }}
            className="absolute -bottom-28 right-0 w-56 sm:-bottom-10 rounded-sm border border-terra/20 bg-osso p-5 shadow-carta sm:-right-10 sm:w-64"
          >
            <figcaption className="sr-only">Exemplo de ficha de personagem sobreposta ao mapa da jornada.</figcaption>
            <div className="borda-cordel -mx-5 -mt-5 mb-4 opacity-70" aria-hidden="true" />
            <p className="eyebrow text-[10px] text-terracota-600">Ficha · nº 07</p>
            <p className="mt-2 font-serif text-2xl font-semibold leading-tight">Seu nome aqui?</p>
            <dl className="mt-3 space-y-1.5 text-sm text-terra-700">
              <div className="flex justify-between border-b border-dashed border-terra/20 pb-1"><dt>Origem</dt><dd className="font-medium text-terra">Sertão</dd></div>
              <div className="flex justify-between border-b border-dashed border-terra/20 pb-1"><dt>Destino</dt><dd className="font-medium text-terra">Cidade grande</dd></div>
              <div className="flex justify-between border-b border-dashed border-terra/20 pb-1"><dt>Bagagem</dt><dd className="font-medium text-terra">Sonhos</dd></div>
            </dl>
            <p className="mt-3 text-[10px] font-semibold uppercase tracking-widest text-terra-600">Bem-estar</p>
            <div className="mt-1"><WellbeingPips valor={5} tamanho="sm" /></div>
          </motion.figure>
        </div>
      </div>

      <Reveal className="relative mx-auto mt-28 max-w-4xl px-5 text-center sm:px-8">
        <span className="font-serif text-7xl leading-none text-terracota/40" aria-hidden="true">“</span>
        <blockquote className="-mt-6 font-serif text-2xl italic leading-snug text-terra sm:text-3xl md:text-4xl text-balance">
          E se, por alguns minutos, você pudesse enxergar o mundo através da experiência de outra pessoa?
        </blockquote>
      </Reveal>
    </section>
  )
}
