import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks } from '../../data/content'
import { DieFace } from '../ui/Die'

export function Nav() {
  const [rolado, setRolado] = useState(false)
  const [aberto, setAberto] = useState(false)

  useEffect(() => {
    const onScroll = () => setRolado(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setAberto(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        rolado || aberto ? 'bg-terra/90 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav aria-label="Navegação principal" className="mx-auto flex h-16 max-w-site items-center justify-between px-5 sm:px-8">
        <a href="#topo" className="flex items-center gap-3 text-osso" aria-label="Rolando Ideias — voltar ao início">
          <DieFace valor={3} className="h-8 w-8 -rotate-12" cor="#B5532F" pip="#F7F1E6" />
          <span className="font-serif text-lg font-semibold tracking-tight">Rolando Ideias</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-3 py-2 text-sm font-medium text-areia-100 transition hover:bg-osso/10 hover:text-osso">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-full text-osso lg:hidden"
          aria-expanded={aberto}
          aria-controls="menu-movel"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setAberto((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {aberto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h10" />}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {aberto && (
          <motion.ul
            id="menu-movel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-osso/10 px-5 lg:hidden"
          >
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setAberto(false)}
                  className="flex min-h-[52px] items-center border-b border-osso/10 font-serif text-xl text-osso"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
