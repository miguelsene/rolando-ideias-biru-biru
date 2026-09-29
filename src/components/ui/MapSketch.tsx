import { motion } from 'framer-motion'
import { DashedPath } from './DashedPath'

type Props = { className?: string; tom?: 'claro' | 'escuro' }

/** Mapa desenhado à mão: curvas de nível, rio, rota tracejada e pontos marcados. */
export function MapSketch({ className = '', tom = 'claro' }: Props) {
  const tinta = tom === 'claro' ? '#4A3526' : '#E9DCC3'
  const destaque = tom === 'claro' ? '#B5532F' : '#E6B866'
  const draw = (delay = 0, duration = 1.6) => ({
    initial: { pathLength: 0, opacity: 0 },
    whileInView: { pathLength: 1, opacity: 1 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration, delay, ease: 'easeInOut' as const },
  })
  return (
    <svg viewBox="0 0 520 400" className={className} fill="none" aria-hidden="true">
      {/* curvas de nível */}
      <g stroke={tinta} strokeOpacity=".28" strokeWidth="1.2">
        <motion.path {...draw(0)} d="M60 90c40-30 110-40 150-10s30 80-20 90-140-10-140-40 0-30 10-40Z" />
        <motion.path {...draw(0.1)} d="M85 95c30-18 85-24 110-4s18 52-15 58-100-6-100-28 0-18 5-26Z" />
        <motion.path {...draw(0.2)} d="M112 102c18-9 52-12 66 0s8 28-10 32-60-4-58-16 0-10 2-16Z" />
        <motion.path {...draw(0.1)} d="M330 250c50-25 120-20 140 20s-20 80-80 80-100-30-90-60 20-30 30-40Z" />
        <motion.path {...draw(0.2)} d="M355 262c34-16 82-12 96 14s-14 54-54 54-68-20-60-40 10-20 18-28Z" />
      </g>
      {/* rio */}
      <motion.path {...draw(0.3, 2)} d="M0 300c60-10 80-60 140-50s70 60 130 40 60-90 120-110 100 10 130 0" stroke={tom === 'claro' ? '#1F3550' : '#7F9BBF'} strokeOpacity=".55" strokeWidth="3" strokeLinecap="round" />
      {/* rota */}
      <DashedPath d="M130 120c40 40 20 90 70 120s110-40 150-10 30 70 70 70" stroke={destaque} strokeWidth={3} dash="6 9" delay={0.6} duration={2.4} />
      {/* pontos */}
      <motion.g initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }} style={{ transformOrigin: '130px 120px' }}>
        <circle cx="130" cy="120" r="7" fill={destaque} />
        <circle cx="130" cy="120" r="13" stroke={destaque} strokeWidth="1.5" />
      </motion.g>
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.8 }}>
        <circle cx="350" cy="232" r="5" fill={tinta} />
      </motion.g>
      <motion.g initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 2.8 }} style={{ transformOrigin: '420px 300px' }}>
        <path d="M411 291l18 18M429 291l-18 18" stroke={destaque} strokeWidth="3.5" strokeLinecap="round" />
      </motion.g>
      <g fill={tinta} fontFamily="Fraunces Variable, serif" fontStyle="italic" fontSize="15">
        <text x="86" y="152">o sertão</text>
        <text x="362" y="226">a estrada</text>
        <text x="438" y="330">a cidade</text>
      </g>
      {/* escala */}
      <g stroke={tinta} strokeOpacity=".6" strokeWidth="1.5">
        <path d="M30 370h90M30 364v12M75 366v8M120 364v12" />
      </g>
      <text x="30" y="392" fill={tinta} fillOpacity=".7" fontSize="10" fontFamily="Inter Tight Variable, sans-serif" letterSpacing="2">MARES DO SERTÃO</text>
    </svg>
  )
}
