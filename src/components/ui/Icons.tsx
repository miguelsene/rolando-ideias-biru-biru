import type { SVGProps } from 'react'

type P = SVGProps<SVGSVGElement>
const base = (p: P): P => ({
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  ...p,
})

/* Ícones com traço levemente irregular, lembrando desenho à mão / xilogravura. */
export const Icon = {
  empatia: (p: P) => (
    <svg {...base(p)}><path d="M24 40c-9-6-16-11.5-16-19a8 8 0 0 1 16-2 8 8 0 0 1 16 2c0 7.5-7 13-16 19Z" /><path d="M17 22c2 2.5 4.5 3.5 7 3.5s5-1 7-3.5" /></svg>
  ),
  reflexao: (p: P) => (
    <svg {...base(p)}><circle cx="21" cy="21" r="12" /><path d="m30 30 10 10" /><path d="M16 19c1-3 3-4.5 6-4.5" /></svg>
  ),
  pertencimento: (p: P) => (
    <svg {...base(p)}><circle cx="16" cy="16" r="5" /><circle cx="32" cy="16" r="5" /><circle cx="24" cy="30" r="5" /><path d="M8 40c1-5 4-7 8-7M40 40c-1-5-4-7-8-7M17 40c1.5-3 4-4 7-4s5.5 1 7 4" /></svg>
  ),
  escudo: (p: P) => (
    <svg {...base(p)}><path d="M24 5 9 11v11c0 10 6.5 17 15 21 8.5-4 15-11 15-21V11L24 5Z" /><path d="m17 24 5 5 9-10" /></svg>
  ),
  jogar: (p: P) => (
    <svg {...base(p)}><rect x="9" y="9" width="30" height="30" rx="7" transform="rotate(-8 24 24)" /><circle cx="18" cy="18" r="1.8" fill="currentColor" /><circle cx="24" cy="24" r="1.8" fill="currentColor" /><circle cx="30" cy="30" r="1.8" fill="currentColor" /></svg>
  ),
  escolher: (p: P) => (
    <svg {...base(p)}><path d="M24 42V26M24 26 12 12M24 26l12-14" /><path d="M8 14l4-2 1 4.5M40 14l-4-2-1 4.5" /></svg>
  ),
  refletir: (p: P) => (
    <svg {...base(p)}><path d="M8 24c4-7 9.5-11 16-11s12 4 16 11c-4 7-9.5 11-16 11S12 31 8 24Z" /><circle cx="24" cy="24" r="5" /></svg>
  ),
  cultura: (p: P) => (
    <svg {...base(p)}><path d="M8 10c6-1 11 0 16 3 5-3 10-4 16-3v26c-6-1-11 0-16 3-5-3-10-4-16-3V10Z" /><path d="M24 13v26M12 17h7M12 22h7M29 17h7M29 22h7" /></svg>
  ),
  trabalho: (p: P) => (
    <svg {...base(p)}><path d="M10 38h28M14 38V22l10-7 10 7v16" /><path d="M20 38v-9h8v9" /><path d="M36 8l4 4-6 6-4-4z" /></svg>
  ),
  familia: (p: P) => (
    <svg {...base(p)}><path d="M6 22 24 8l18 14" /><path d="M11 19v19h26V19" /><circle cx="20" cy="26" r="3" /><circle cx="29" cy="27" r="2.3" /><path d="M15 38c.5-4 2.5-6 5-6s4.5 2 5 6M26 38c.4-3 1.5-4.5 3-4.5s2.6 1.5 3 4.5" /></svg>
  ),
  sonhos: (p: P) => (
    <svg {...base(p)}><path d="m24 6 4.5 10 10.5 1-8 7 2.5 10.5L24 29l-9.5 5.5L17 24l-8-7 10.5-1L24 6Z" /><path d="M10 42c5-2 9-2 14 0s9 2 14 0" /></svg>
  ),
  identidade: (p: P) => (
    <svg {...base(p)}><path d="M14 38c-3-4-4-8.5-4-14a14 14 0 0 1 28 0" /><path d="M19 40c-2.5-4-3.5-9-3.5-16a8.5 8.5 0 0 1 17 0c0 4-.5 8-2 11" /><path d="M24 24c0 6 .5 11 2.5 16M36 30c-.5 3-1.5 6-3 9" /></svg>
  ),
  migracao: (p: P) => (
    <svg {...base(p)}><path d="M6 40c8-3 10-9 16-12s14-4 16-12" strokeDasharray="3 4" /><circle cx="6" cy="40" r="2.5" fill="currentColor" /><path d="M38 6c-3.3 0-6 2.6-6 5.8C32 16 38 22 38 22s6-6 6-10.2C44 8.6 41.3 6 38 6Z" /><circle cx="38" cy="12" r="2" /></svg>
  ),
  diversidade: (p: P) => (
    <svg {...base(p)}><circle cx="18" cy="19" r="10" /><circle cx="30" cy="19" r="10" /><circle cx="24" cy="30" r="10" /></svg>
  ),
  agulha: (p: P) => (
    <svg {...base(p)}><path d="M38 8 12 34" /><ellipse cx="36" cy="10" rx="1.5" ry="3" transform="rotate(45 36 10)" /><path d="M12 34c-4 2-6 6-2 7s6-6 10-5 3 6 8 4" /></svg>
  ),
  livro: (p: P) => (
    <svg {...base(p)}><path d="M10 8h22a4 4 0 0 1 4 4v28H14a4 4 0 0 1-4-4V8Z" /><path d="M10 36a4 4 0 0 1 4-4h22M17 15h12M17 21h8" /></svg>
  ),
  cruz: (p: P) => (
    <svg {...base(p)}><path d="M19 8h10v11h11v10H29v11H19V29H8V19h11V8Z" /></svg>
  ),
  viola: (p: P) => (
    <svg {...base(p)}><path d="M30 6l6 6-9 9" /><path d="M27 21a6 6 0 0 0-8-1 5 5 0 0 1-5 3 8 8 0 1 0 11 11 5 5 0 0 1 3-5 6 6 0 0 0-1-8Z" /><circle cx="19" cy="29" r="2.5" /></svg>
  ),
  bussola: (p: P) => (
    <svg {...base(p)} viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" strokeWidth="1.5" /><circle cx="50" cy="50" r="33" strokeWidth="1" strokeDasharray="2 4" /><path d="M50 8 56 50 50 92 44 50Z" strokeWidth="1.5" /><path d="M8 50 50 44 92 50 50 56Z" strokeWidth="1.2" /><path d="M50 8 56 50H44Z" fill="currentColor" /><text x="50" y="6" fontSize="9" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="serif">N</text></svg>
  ),
}
