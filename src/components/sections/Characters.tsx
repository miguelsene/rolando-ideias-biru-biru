import { personagens } from '../../data/content'
import { CharacterCard } from '../ui/CharacterCard'
import { SectionHeading } from '../ui/SectionHeading'
import { Die } from '../ui/Die'

export function Characters() {
  return (
    <section id="personagens" aria-labelledby="t-personagens" className="madeira relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/30 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto max-w-site px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeading numero="04" eyebrow="Fichas de personagem" id="t-personagens" tom="escuro" titulo="Escolha quem vai à aventura.">
            <p>Conheça as fichas usadas na mesa: atributos, antecedentes, movimentos e habilidades ajudam cada personagem a enfrentar os desafios da história.</p>
          </SectionHeading>
          <div className="flex items-center gap-5 rounded-xl border border-osso/10 bg-black/20 p-5 text-areia-200 lg:max-w-xs">
            <Die className="h-16 w-16 shrink-0" rotulo={false} inicial={4} />
            <p className="text-sm leading-relaxed">
              <strong className="text-osso">Regra simples:</strong> 1d6 + atributo. Outro jogador pode ajudar e somar um bônus — a cooperação é parte do jogo.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 xl:grid-cols-3">
          {personagens.map((p, i) => (
            <CharacterCard key={p.id} p={p} indice={i} />
          ))}
        </div>
        <p className="mt-16 text-center text-sm text-areia-300">
          As fichas reproduzem os personagens e os valores apresentados nos modelos enviados.
        </p>
      </div>
    </section>
  )
}
