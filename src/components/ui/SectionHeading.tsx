import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import { HandUnderline } from './HandUnderline'

type Props = {
  numero?: string
  eyebrow: string
  titulo: ReactNode
  id?: string
  tom?: 'claro' | 'escuro'
  alinhamento?: 'esquerda' | 'centro'
  children?: ReactNode
}

/** Cabeçalho de seção padrão: marcador de capítulo + título serifado + traço à mão. */
export function SectionHeading({ numero, eyebrow, titulo, id, tom = 'claro', alinhamento = 'esquerda', children }: Props) {
  const centro = alinhamento === 'centro'
  const corEyebrow = tom === 'claro' ? 'text-terracota-600' : 'text-ocre-300'
  const corTitulo = tom === 'claro' ? 'text-terra' : 'text-osso'
  const corTexto = tom === 'claro' ? 'text-terra-700' : 'text-areia-200'
  return (
    <Reveal className={centro ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className={`eyebrow flex items-center gap-3 ${corEyebrow} ${centro ? 'justify-center' : ''}`}>
        {numero && (
          <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-current px-2 font-serif text-[0.8rem] tracking-normal">
            {numero}
          </span>
        )}
        <span>{eyebrow}</span>
      </p>
      <h2 id={id} className={`titulo mt-5 text-balance text-4xl sm:text-5xl lg:text-6xl ${corTitulo}`}>
        {titulo}
      </h2>
      <HandUnderline className={`mt-4 h-4 w-40 ${tom === 'claro' ? 'text-terracota' : 'text-ocre'} ${centro ? 'mx-auto' : ''}`} />
      {children && <div className={`mt-6 space-y-4 text-lg leading-relaxed ${corTexto}`}>{children}</div>}
    </Reveal>
  )
}
