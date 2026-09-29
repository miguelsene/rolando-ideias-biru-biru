import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import heroImg from '../../assets/hero-sertao.webp'
import heroImgSm from '../../assets/hero-sertao-sm.webp'
import { Button, Seta } from '../ui/Button'
import { Die } from '../ui/Die'
import { Icon } from '../ui/Icons'
import { DashedPath } from '../ui/DashedPath'
import { WellbeingPips } from '../ui/WellbeingPips'

const particulas = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  top: `${40 + ((i * 23) % 55)}%`,
  dur: `${9 + (i % 5) * 2}s`,
  delay: `${(i * 1.3) % 8}s`,
  size: i % 3 === 0 ? 3 : 2,
}))

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yImg = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const yTexto = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opTexto = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const yFrente = useTransform(scrollYProgress, [0, 1], ['0%', '-25%'])

  return (
    <section ref={ref} id="topo" aria-labelledby="titulo-hero" className="relative isolate min-h-[100svh] overflow-hidden bg-profundo-900">
      {/* Paisagem + camada de mapa (mesma proporção, recortes alinhados) */}
      <motion.div style={{ y: yImg }} className="absolute inset-0 -z-10 scale-110">
        <img
          src={heroImg}
          srcSet={`${heroImgSm} 900w, ${heroImg} 1672w`}
          sizes="100vw"
          alt="Ilustração do sertão ao entardecer: uma estrada de terra atravessa a caatinga, entre mandacarus e morros, em direção a uma cidade grande no horizonte."
          className="h-full w-full object-cover object-center"
          {...{ fetchpriority: "high" }}
        />
        <svg viewBox="0 0 1672 941" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <DashedPath d="M682 941 C 800 860, 960 820, 950 760 C 940 715, 830 720, 853 680 C 870 650, 930 630, 900 600 C 880 585, 830 580, 806 572" stroke="#F7F1E6" strokeWidth={3} dash="2 12" onMount delay={0.8} duration={2.6} />
          <motion.g initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 3.2, duration: 0.6 }} style={{ transformOrigin: '800px 566px' }}>
            <circle cx="800" cy="566" r="14" fill="none" stroke="#E6B866" strokeWidth="2.5" />
            <path d="M792 558l16 16M808 558l-16 16" stroke="#E6B866" strokeWidth="3" strokeLinecap="round" />
            <text className="max-sm:hidden" x="822" y="552" fill="#F7F1E6" fontSize="18" fontFamily="Fraunces Variable, serif" fontStyle="italic">destino</text>
          </motion.g>
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>
            <circle cx="950" cy="760" r="7" fill="#E6B866" />
            <text className="max-sm:hidden" x="968" y="766" fill="#F7F1E6" fontSize="16" fontFamily="Fraunces Variable, serif" fontStyle="italic">travessia</text>
          </motion.g>
          <g opacity=".5" stroke="#F7F1E6" fill="none" strokeWidth="1">
            <path d="M0 620 H1672" strokeDasharray="1 10" />
            <path d="M300 0 V941 M1372 0 V941" strokeDasharray="1 10" />
          </g>
        </svg>
      </motion.div>

      {/* Véus para contraste */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-profundo-900/85 via-profundo-900/35 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-profundo-900/70 via-profundo-900/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-areia-50 via-areia-50/40 to-transparent" />

      {/* Partículas de poeira */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        {particulas.map((p, i) => (
          <span
            key={i}
            className="particula absolute rounded-full bg-ocre-300"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size, animationDuration: p.dur, animationDelay: p.delay }}
          />
        ))}
      </div>

      {/* Rosa dos ventos */}
      <motion.div
        initial={{ opacity: 0, rotate: -40 }}
        animate={{ opacity: 0.7, rotate: 0 }}
        transition={{ duration: 1.6, delay: 0.4 }}
        className="absolute right-6 top-24 hidden text-osso md:block lg:right-12"
      >
        <Icon.bussola className="h-24 w-24 lg:h-28 lg:w-28" />
      </motion.div>

      {/* Conteúdo */}
      <motion.div style={{ y: yTexto, opacity: opTexto }} className="mx-auto flex min-h-[100svh] max-w-site flex-col justify-start px-5 pb-40 pt-28 sm:px-8 sm:pt-32 lg:pt-36">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="eyebrow flex flex-wrap items-center gap-3 text-ocre-300"
        >
          <span className="h-px w-10 bg-ocre-300" aria-hidden="true" />
          SLA 2026 · ITB Brasílio Flores de Azevedo
        </motion.p>

        <h1 id="titulo-hero" className="titulo mt-6 text-osso [text-shadow:0_4px_30px_rgba(15,28,46,.55)]">
          <motion.span
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="block text-[3.4rem] font-bold leading-[0.9] sm:text-7xl md:text-8xl lg:text-[8.5rem]"
          >
            Rolando
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="block text-[3.4rem] font-light italic leading-[0.95] text-areia-200 sm:text-7xl md:text-8xl lg:text-[8.5rem]"
          >
            Ideias
          </motion.span>
        </h1>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.7 }} className="mt-7 max-w-2xl">
          <p className="font-serif text-xl leading-snug text-osso sm:text-2xl md:text-[1.7rem]">
            Vivendo a xenofobia e seus impactos na saúde mental através do RPG
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-areia-100 sm:text-lg">
            Uma experiência narrativa para compreender o preconceito, valorizar a diversidade e descobrir como nossas escolhas podem construir pertencimento.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="#experiencia" variante="primario">
              Viver a experiência <Seta />
            </Button>
            <Button href="#projeto" variante="secundario">
              Conhecer o projeto
            </Button>
          </div>
        </motion.div>
      </motion.div>

      {/* Elementos de mesa em primeiro plano */}
      <motion.div style={{ y: yFrente }} className="pointer-events-none absolute inset-x-0 bottom-10 z-10 mx-auto hidden max-w-site px-8 lg:block">
        <div className="relative h-0">
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: -14 }}
            animate={{ opacity: 1, y: 0, rotate: -7 }}
            transition={{ delay: 1.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="papel pointer-events-auto absolute bottom-0 right-44 w-60 rounded-md p-4 text-terra shadow-carta"
            aria-hidden="true"
          >
            <p className="eyebrow text-[9px] text-terracota-600">Ficha de personagem</p>
            <p className="mt-1 font-serif text-xl font-semibold">Dona Zefa</p>
            <p className="text-xs text-terra-600">52 anos · Costureira</p>
            <div className="my-3 h-px bg-terra/20" />
            <p className="text-[10px] font-semibold uppercase tracking-widest text-terra-600">Bem-estar</p>
            <div className="mt-1"><WellbeingPips valor={5} tamanho="sm" /></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: 20 }}
            animate={{ opacity: 1, y: 0, rotate: 9 }}
            transition={{ delay: 1.35, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-6 right-[26rem] h-28 w-20 rounded-md border-4 border-osso bg-profundo shadow-carta"
            aria-hidden="true"
          >
            <div className="grade-mapa-clara flex h-full items-center justify-center rounded-sm">
              <Icon.migracao className="h-10 w-10 text-ocre-300" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.6, type: 'spring', stiffness: 160, damping: 12 }} className="pointer-events-auto absolute bottom-4 right-6 h-20 w-20">
            <Die labelClass="text-terra-700" />
          </motion.div>
        </div>
      </motion.div>

      {/* Indicador de rolagem */}
      <a href="#experiencia" className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-terra-700" aria-label="Rolar para a próxima seção">
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Role</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} className="block h-8 w-px bg-terra-700" />
      </a>
    </section>
  )
}
