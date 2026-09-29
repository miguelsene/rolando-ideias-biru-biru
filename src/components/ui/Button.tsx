import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variante?: 'primario' | 'secundario' | 'claro'
  children: ReactNode
}

const estilos = {
  primario:
    'bg-terracota text-osso hover:bg-terracota-600 shadow-[0_10px_30px_-10px_rgba(181,83,47,.8)] border border-terracota-300/30',
  secundario: 'border-2 border-osso/80 text-osso hover:bg-osso hover:text-terra backdrop-blur-sm bg-terra/20',
  claro: 'bg-osso text-terra hover:bg-ocre-300 border border-osso',
}

/** Link com aparência de botão (navegação por âncoras). Área de toque ≥ 48px. */
export function Button({ variante = 'primario', className = '', children, ...rest }: Props) {
  return (
    <a
      className={`group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full px-7 py-3 text-sm font-bold uppercase tracking-[0.16em] transition-all duration-300 hover:-translate-y-0.5 ${estilos[variante]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}

export function Seta({ direcao = 'baixo' }: { direcao?: 'baixo' | 'direita' }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-4 w-4 transition-transform duration-300 ${direcao === 'baixo' ? 'group-hover:translate-y-0.5' : 'group-hover:translate-x-1'}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {direcao === 'baixo' ? <path d="M10 3v13M4 10l6 6 6-6" /> : <path d="M3 10h13M10 4l6 6-6 6" />}
    </svg>
  )
}
