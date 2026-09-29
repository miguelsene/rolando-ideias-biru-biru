import { motion } from 'framer-motion'
import type { Personagem } from '../../data/content'

const faixas: Record<Personagem['cor'], string> = {
  terracota: 'bg-terracota', oliva: 'bg-oliva', profundo: 'bg-profundo', ocre: 'bg-ocre-800',
}

function Marcadores({ valor, total = 6 }: { valor: number; total?: number }) {
  return <span className="flex flex-wrap gap-1" aria-label={`${valor} de ${total}`}>
    {Array.from({ length: total }, (_, i) => <span key={i} className={`h-3 w-3 rounded-full border ${i < valor ? 'border-terracota bg-terracota' : 'border-terra/30'}`} aria-hidden="true" />)}
  </span>
}

export function CharacterCard({ p, indice }: { p: Personagem; indice: number }) {
  return <motion.article
    initial={{ opacity: 0, y: 36, rotate: indice % 2 ? 1 : -1 }}
    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
    viewport={{ once: true, margin: '-30px' }}
    transition={{ duration: 0.65, delay: indice * 0.12 }}
    className="relative flex min-h-[42rem] flex-col overflow-hidden rounded-sm border-2 border-osso/70 bg-[#f8f0dc] text-terra shadow-[0_18px_50px_rgba(0,0,0,.32)]"
    aria-label={`Ficha de ${p.nome}`}
  >
    <header className={`relative px-5 pb-4 pt-5 text-osso ${faixas[p.cor]}`}>
      <p className="eyebrow text-[9px] text-osso/80">Ficha de personagem</p>
      <h3 className="mt-2 font-serif text-2xl font-bold uppercase leading-tight tracking-wide">{p.nome}</h3>
    </header>
    <div className="flex flex-1 flex-col gap-4 p-5">
      <div className="grid grid-cols-[1fr_auto] gap-4">
        <div className="rounded-sm bg-terra px-3 py-3 text-osso">
          <h4 className="text-[10px] font-black uppercase tracking-widest">Atributos</h4>
          <p className="mb-2 mt-1 text-[9px] leading-snug text-osso/75">Condições iniciais: 6 círculos de vida, 6 de dor, 1 ação de combate, 1 movimento, 4 pontos de antecedente, 4 pontos de atributo e defesa 5.</p>
          <ul className="space-y-1.5">
            {p.atributos.map((a) => <li key={a.nome} className="flex items-center justify-between gap-2 border-b border-osso/15 pb-1">
              <span className="text-[10px] font-bold uppercase">{a.nome}</span><strong className="min-w-7 rounded-sm bg-osso px-2 py-0.5 text-center font-serif text-lg leading-none text-terracota">{a.valor}</strong>
            </li>)}
          </ul>
        </div>
        <div className="w-[6.4rem] space-y-2 pt-1">
          {p.antecedentes.map((a) => <div key={a.nome} className="border-b border-terra/10 pb-1">
            <p className="text-[8px] font-black uppercase leading-none">{a.nome}</p>
            <div className="mt-1 flex items-center gap-1 text-[8px]"><span>1d6</span><Marcadores valor={a.valor} total={4} /></div>
          </div>)}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-center">
        <div className="border border-terra/30 px-2 py-2"><p className="text-[9px] font-black uppercase">Movimentos</p><strong className="font-serif text-2xl text-terracota">{p.movimentos}</strong></div>
        <div className="border border-terra/30 px-2 py-2"><p className="text-[9px] font-black uppercase leading-tight">Ações de combate</p><strong className="font-serif text-2xl text-terracota">{p.acoesCombate}</strong></div>
        <div className="border border-terra/30 px-2 py-2"><p className="text-[9px] font-black uppercase">Iniciativa</p><strong className="font-serif text-2xl text-terra/30">—</strong></div>
        <div className="border border-terra/30 px-2 py-2"><p className="text-[9px] font-black uppercase">Defesa</p><strong className="font-serif text-2xl text-terracota">{p.defesa || '—'}</strong></div>
      </div>

      <div>
        <h4 className="mb-1 text-[10px] font-black uppercase tracking-widest">Círculos de dor</h4>
        <Marcadores valor={0} />
      </div>
      <div>
        <h4 className="mb-1 text-[10px] font-black uppercase tracking-widest">Círculos de vida</h4>
        <Marcadores valor={0} />
      </div>
      <div className="mt-auto min-h-24 border border-terra/40 p-3">
        <h4 className="mb-1 text-[10px] font-black uppercase tracking-widest">Habilidades</h4>
        {p.habilidade && <p className="whitespace-pre-line text-[10px] leading-relaxed">{p.habilidade}</p>}
      </div>
    </div>
  </motion.article>
}
