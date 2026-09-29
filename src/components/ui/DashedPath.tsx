import { motion, type MotionValue } from 'framer-motion'
import { useId } from 'react'

type Props = {
  d: string
  stroke: string
  strokeWidth?: number
  dash?: string
  /** progresso controlado por scroll (0–1). Se omitido, desenha ao entrar na tela. */
  progress?: MotionValue<number>
  delay?: number
  duration?: number
  /** anima ao montar (hero) em vez de ao entrar na tela */
  onMount?: boolean
  nonScaling?: boolean
  maskWidth?: number
}

/**
 * Linha tracejada "desenhada" progressivamente.
 * O pathLength do Framer usa stroke-dasharray, então o tracejado é revelado por uma máscara sólida animada.
 */
export function DashedPath({ d, stroke, strokeWidth = 3, dash = '4 10', progress, delay = 0, duration = 2, onMount, nonScaling, maskWidth }: Props) {
  const id = useId().replace(/:/g, '')
  const ve = nonScaling ? 'non-scaling-stroke' : undefined
  const anim = progress
    ? { style: { pathLength: progress } }
    : onMount
      ? { initial: { pathLength: 0 }, animate: { pathLength: 1 }, transition: { duration, delay, ease: 'easeInOut' as const } }
      : { initial: { pathLength: 0 }, whileInView: { pathLength: 1 }, viewport: { once: true, margin: '-80px' }, transition: { duration, delay, ease: 'easeInOut' as const } }
  return (
    <>
      <mask id={`m${id}`} maskUnits="userSpaceOnUse" x="-5000" y="-5000" width="10000" height="10000">
        <motion.path d={d} fill="none" stroke="#fff" strokeWidth={maskWidth ?? strokeWidth * 4} strokeLinecap="round" vectorEffect={ve} {...anim} />
      </mask>
      <path d={d} fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeDasharray={dash} strokeLinecap="round" vectorEffect={ve} mask={`url(#m${id})`} />
    </>
  )
}
