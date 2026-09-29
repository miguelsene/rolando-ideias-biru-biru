import { motion } from 'framer-motion'

/** Traço irregular, desenhado como se fosse feito à mão ao entrar na tela. */
export function HandUnderline({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 16" fill="none" className={className} aria-hidden="true" preserveAspectRatio="none">
      <motion.path
        d="M3 10 C 30 4, 58 13, 88 8 S 150 3, 197 9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: 'easeInOut', delay: 0.2 }}
      />
    </svg>
  )
}
