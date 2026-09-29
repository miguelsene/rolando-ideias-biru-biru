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
          <SectionHeading numero="04" eyebrow="Escolha seu personagem" id="t-personagens" tom="escuro" titulo="Toda história começa com alguém.">
            <p>Antes da aventura começar, cada participante escolhe um personagem. Cada um possui sua própria história, seus sonhos, dificuldades, habilidades e vínculos.</p>
          </SectionHeading>
          <div className="flex items-center gap-5 rounded-xl border border-osso/10 bg-black/20 p-5 text-areia-200 lg:max-w-xs">
            <Die className="h-16 w-16 shrink-0" rotulo={false} inicial={4} />
            <p className="text-sm leading-relaxed">
              <strong className="text-osso">Regra simples:</strong> 1d6 + atributo. Outro jogador pode ajudar e somar um bônus — a cooperação é parte do jogo.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 xl:grid-cols-4">
          {personagens.map((p, i) => (
            <CharacterCard key={p.id} p={p} indice={i} />
          ))}
        </div>
        <p className="mt-16 text-center text-sm text-areia-300">
          Todos os personagens são fictícios. Dona Zefa é o exemplo apresentado na ficha modelo do projeto; os demais ilustram a variedade de histórias possíveis.
        </p>
      </div>
    </section>
  )
}
