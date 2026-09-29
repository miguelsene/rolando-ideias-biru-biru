import { motion, useAnimationControls } from 'framer-motion'
import { useState } from 'react'

const PIPS: Record<number, [number, number][]> = {
  1: [[50, 50]],
  2: [[28, 28], [72, 72]],
  3: [[28, 28], [50, 50], [72, 72]],
  4: [[28, 28], [72, 28], [28, 72], [72, 72]],
  5: [[28, 28], [72, 28], [50, 50], [28, 72], [72, 72]],
  6: [[28, 26], [72, 26], [28, 50], [72, 50], [28, 74], [72, 74]],
}

export function DieFace({ valor, className = '', cor = '#F7F1E6', pip = '#2B1D14' }: { valor: number; className?: string; cor?: string; pip?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <rect x="4" y="4" width="92" height="92" rx="20" fill={cor} stroke="rgba(43,29,20,.35)" strokeWidth="2" />
      <rect x="10" y="10" width="80" height="80" rx="16" fill="none" stroke="rgba(43,29,20,.08)" strokeWidth="2" />
      {PIPS[valor].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="8.5" fill={pip} />
      ))}
    </svg>
  )
}

/** Dado de seis faces (1d6) que pode ser rolado com clique ou teclado. */
export function Die({ className = '', inicial = 5, rotulo = true, labelClass = 'text-osso/80' }: { className?: string; inicial?: number; rotulo?: boolean; labelClass?: string }) {
  const [valor, setValor] = useState(inicial)
  const [rolando, setRolando] = useState(false)
  const controls = useAnimationControls()

  async function rolar() {
    if (rolando) return
    setRolando(true)
    const troca = setInterval(() => setValor(Math.ceil(Math.random() * 6)), 80)
    await controls.start({ rotate: [0, 200, 380, 350, 360], scale: [1, 1.12, 0.95, 1.04, 1], transition: { duration: 0.9, ease: 'easeOut' } })
    clearInterval(troca)
    setValor(Math.ceil(Math.random() * 6))
    controls.set({ rotate: 0 })
    setRolando(false)
  }

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <motion.button
        type="button"
        onClick={rolar}
        animate={controls}
        whileHover={{ rotate: -8, y: -3 }}
        className="block h-full w-full cursor-pointer rounded-[22%] drop-shadow-[0_14px_18px_rgba(0,0,0,.4)]"
        aria-label={`Rolar o dado. Resultado atual: ${valor}`}
      >
        <DieFace valor={valor} className="h-full w-full" />
      </motion.button>
      <span className="sr-only" aria-live="polite">{rolando ? '' : `O dado mostrou ${valor}`}</span>
      {rotulo && <span className={`text-[10px] font-semibold uppercase tracking-[0.25em] ${labelClass}`}>role o 1d6</span>}
    </div>
  )
}
