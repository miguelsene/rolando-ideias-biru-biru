import { Reveal } from '../ui/Reveal'
import { HandUnderline } from '../ui/HandUnderline'

const dados = [
  { r: 'Instituição', v: 'ITB Brasílio Flores de Azevedo' },
  { r: 'Cidade', v: 'Barueri — SP' },
  { r: 'Edição', v: '2026' },
]

export function SLA() {
  return (
    <section id="sla" aria-labelledby="t-sla" className="papel relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl border border-terra/15 bg-osso/70 p-8 shadow-papel sm:p-14">
          <div className="borda-cordel absolute inset-x-0 top-0 opacity-60" aria-hidden="true" />
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow flex items-center gap-3 text-terracota-600">
                <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-current px-2 font-serif text-[0.8rem] tracking-normal">10</span>
                Sobre a SLA 2026
              </p>
              <h2 id="t-sla" className="titulo mt-5 text-4xl text-balance sm:text-5xl">
                Semana da Liberdade e Alteridade <span className="font-light italic text-terracota">— SLA 2026</span>
              </h2>
              <HandUnderline className="mt-4 h-4 w-40 text-terracota" />
              <p className="mt-6 text-lg leading-relaxed text-terra-700">
                O Rolando Ideias integra a Semana da Liberdade e Alteridade 2026 do ITB Brasílio Flores de Azevedo, no eixo <strong className="text-terra">Cidadania e Direitos Humanos — Migração e Refugiados — Contra a Xenofobia</strong>.
              </p>
              <p className="mt-4 leading-relaxed text-terra-700">
                O projeto reúne estudantes do 1º, 2º e 3º anos de diferentes cursos, com apresentações nos períodos da manhã, da tarde e da noite, para atender toda a comunidade escolar.
              </p>
            </div>
            <dl className="grid gap-px overflow-hidden rounded-2xl border border-terra/15 bg-terra/15">
              {dados.map((d) => (
                <div key={d.r} className="bg-areia-50 p-6">
                  <dt className="text-xs font-bold uppercase tracking-[0.2em] text-terracota-600">{d.r}</dt>
                  <dd className="mt-1 font-serif text-2xl font-semibold">{d.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
