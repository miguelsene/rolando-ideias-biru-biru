export type Atributo = { nome: 'Físico' | 'Velocidade' | 'Intelecto' | 'Coragem'; valor: number }

export type Personagem = {
  id: string
  nome: string
  antecedentes: { nome: string; valor: number }[]
  movimentos: number
  acoesCombate: number
  defesa: number
  habilidade: string
  atributos: Atributo[]
  bemEstar: number
  cor: 'terracota' | 'oliva' | 'profundo' | 'ocre'
  simbolo: 'agulha' | 'livro' | 'cruz' | 'viola'
}

export const personagens: Personagem[] = [
  {
    id: 'maria-anunciada',
    nome: 'Maria Anunciada',
    antecedentes: [{ nome: 'Atenção', valor: 0 }, { nome: 'Roubo', valor: 0 }, { nome: 'Medicina', valor: 0 }, { nome: 'Suor', valor: 0 }, { nome: 'Montaria', valor: 0 }, { nome: 'Tradição', valor: 0 }, { nome: 'Negócios', valor: 1 }, { nome: 'Violência', valor: 1 }],
    movimentos: 1, acoesCombate: 2, defesa: 5,
    habilidade: 'Armas da natureza: prefere lutar com métodos “ultrapassados”. Ao usar armas rústicas, como facas de pedra, lanças de madeira ou machadinhas, o dano aumenta em 1 por ponto de Físico.\n\nFúria dos aflitos: em combate, reduz sua Defesa em 1 ponto e aumenta em 3 o dano dos ataques corpo a corpo.',
    atributos: [
      { nome: 'Físico', valor: 3 }, { nome: 'Velocidade', valor: 0 },
      { nome: 'Intelecto', valor: 0 }, { nome: 'Coragem', valor: 1 },
    ],
    bemEstar: 5,
    cor: 'terracota',
    simbolo: 'agulha',
  },
  {
    id: 'manoel-pereira',
    nome: 'Manoel Pereira',
    antecedentes: [{ nome: 'Atenção', valor: 0 }, { nome: 'Roubo', valor: 1 }, { nome: 'Medicina', valor: 0 }, { nome: 'Suor', valor: 2 }, { nome: 'Montaria', valor: 0 }, { nome: 'Tradição', valor: 0 }, { nome: 'Negócios', valor: 1 }, { nome: 'Violência', valor: 0 }],
    movimentos: 3, acoesCombate: 3, defesa: 5,
    habilidade: 'Livramento: uma vez por sessão, quando cair a 0 círculos de vida, recupera 2 e permanece de pé.\n\nPavio curto: improvisa armas com objetos à mão. Objetos pequenos e médios causam 3 de dano; objetos grandes causam 4, com -1 nos testes de Violência.',
    atributos: [
      { nome: 'Físico', valor: 0 }, { nome: 'Velocidade', valor: 2 },
      { nome: 'Intelecto', valor: 1 }, { nome: 'Coragem', valor: 2 },
    ],
    bemEstar: 5,
    cor: 'profundo',
    simbolo: 'livro',
  },
  {
    id: 'tereza',
    nome: 'Tereza',
    antecedentes: [{ nome: 'Atenção', valor: 0 }, { nome: 'Roubo', valor: 0 }, { nome: 'Medicina', valor: 0 }, { nome: 'Suor', valor: 0 }, { nome: 'Montaria', valor: 0 }, { nome: 'Tradição', valor: 0 }, { nome: 'Negócios', valor: 0 }, { nome: 'Violência', valor: 0 }],
    movimentos: 1, acoesCombate: 2, defesa: 0,
    habilidade: '',
    atributos: [
      { nome: 'Físico', valor: 2 }, { nome: 'Velocidade', valor: 0 },
      { nome: 'Intelecto', valor: 1 }, { nome: 'Coragem', valor: 1 },
    ],
    bemEstar: 5,
    cor: 'oliva',
    simbolo: 'cruz',
  },
]

export const atos = [
  { n: '01', titulo: 'A Partida', texto: 'A decisão de partir, deixar o lugar de origem e começar uma nova etapa.', tempo: '~5 min', local: 'Sertão' },
  { n: '02', titulo: 'A Chegada', texto: 'Uma nova cidade, novas oportunidades e as primeiras barreiras.', tempo: '~8 min', local: 'Rodoviária' },
  { n: '03', titulo: 'O Confronto', texto: 'Preconceito, estereótipos, exclusão e decisões que colocam o grupo diante de dilemas.', tempo: '~8 min', local: 'Cidade grande' },
  { n: '04', titulo: 'O Acolhimento', texto: 'Cooperação, solidariedade e a construção de uma rede de apoio.', tempo: '~4 min', local: 'Rede de apoio' },
]

export const niveisBemEstar = [
  { valor: 0, rotulo: 'Necessidade de apoio', texto: 'O personagem precisa do grupo. É o momento em que escuta, acolhimento e acesso a direitos fazem toda a diferença.' },
  { valor: 1, rotulo: 'Muito afetado', texto: 'Agir fica difícil. As escolhas ficam mais limitadas, e o isolamento pesa nas decisões.' },
  { valor: 2, rotulo: 'Vulnerável', texto: 'A insegurança aparece. O personagem hesita antes de falar ou de pedir ajuda.' },
  { valor: 3, rotulo: 'Abalado', texto: 'Algumas situações deixaram marcas. A confiança oscila, mas ainda há força para seguir.' },
  { valor: 4, rotulo: 'Estável', texto: 'O personagem enfrenta desafios, mas se sente relativamente seguro para agir.' },
  { valor: 5, rotulo: 'Bem-estar elevado', texto: 'O personagem se sente confiante, conectado e com energia para buscar seus sonhos.' },
]

export const situacoes = {
  reduzem: [
    'Uma “piada” sobre o sotaque em uma entrevista',
    'Ser tratado como “de fora” em um espaço público',
    'Portas fechadas na busca por moradia',
  ],
  recuperam: [
    'Alguém escuta sem julgar',
    'O grupo coopera para resolver um problema',
    'Conhecer e acessar um direito',
  ],
}

export const impactos = [
  { t: 'Estereótipos', d: 'Generalizações que reduzem milhões de pessoas a uma imagem única.' },
  { t: 'Discriminação', d: 'Tratamento desigual por causa da origem ou do sotaque.' },
  { t: 'Exclusão social', d: 'Barreiras de acesso a trabalho, moradia e convivência.' },
  { t: 'Insegurança', d: 'Medo de ser julgado a cada conversa.' },
  { t: 'Isolamento', d: 'Evitar lugares e pessoas para não ser alvo.' },
  { t: 'Ansiedade', d: 'Tensão constante diante de situações do cotidiano.' },
  { t: 'Baixa autoestima', d: 'Passar a enxergar a própria identidade como defeito.' },
  { t: 'Pertencimento', d: 'Dificuldade de se sentir parte do lugar onde vive.' },
]

export const estereotipos = ['“é tudo igual”', '“fala errado”', '“não é daqui”', '“só serve pra isso”', '“é só uma piada”', '“volta pra sua terra”']

export const culturas = [
  { id: 'cultura', t: 'Cultura', d: 'Literatura, música, festas e saberes que atravessam gerações.' },
  { id: 'trabalho', t: 'Trabalho', d: 'Mãos que ergueram cidades, hospitais, escolas e indústrias.' },
  { id: 'familia', t: 'Família', d: 'Vínculos que resistem à distância e se reinventam.' },
  { id: 'sonhos', t: 'Sonhos', d: 'Projetos de vida que vão muito além da sobrevivência.' },
  { id: 'identidade', t: 'Identidade', d: 'O sotaque é memória, não defeito.' },
  { id: 'migracao', t: 'Migração', d: 'Um direito e uma história que ajudou a formar o Brasil.' },
  { id: 'diversidade', t: 'Diversidade', d: 'Nove estados, muitos Nordestes — nunca um só.' },
] as const

export const etapas = [
  { min: '05', t: 'Introdução e escolha dos personagens', d: 'Uma breve explicação sobre o tema, as regras e os combinados de mesa.' },
  { min: '25', t: 'Experiência de RPG', d: 'Quatro atos, decisões em grupo e um dado de seis faces.' },
  { min: '03', t: 'Reflexão guiada', d: 'Os mestres ligam as cenas do jogo à realidade brasileira.' },
  { min: '02', t: 'Encerramento e discussão', d: 'O grupo compara os marcadores e conversa sobre o que viveu.' },
]

export const numeros = [
  { v: '14', t: 'participantes por sessão', pre: 'Até' },
  { v: '2', t: 'mesas simultâneas' },
  { v: '2', t: 'mestres' },
  { v: '7', t: 'jogadores por mesa', pre: 'Até' },
]

export const combinados = [
  { t: 'Participação voluntária', d: 'Você entra e continua apenas se quiser.' },
  { t: 'Nada de relatos obrigatórios', d: 'Ninguém é obrigado a compartilhar experiências pessoais.' },
  { t: 'Pular uma cena', d: 'Qualquer jogador pode pedir para pular uma cena.' },
  { t: 'Deixar a mesa', d: 'Você pode sair a qualquer momento, sem explicações.' },
  { t: 'Cartão de pausa', d: 'Um sinal simples pausa ou muda o rumo da cena na hora.' },
  { t: 'Respeito obrigatório', d: 'O preconceito existe só no mundo do jogo — nunca entre jogadores.' },
]

export const equipe = [
  'Lavinia Candida Sibuya Americo — RM 102732 — INF1BT',
  'Isaac Robert Borges de Sousa — RM 94262 — INI3BM',
  'João Vithor Veiga Silva — RM 93918 — INF3BM',
  'Miguel Rodrigues de Sá Antunes Ferreira de Sene — RM 95370 — INF3FM',
  'Maria Eduarda Rodrigues Santos — RM 95265 — INF3DM',
  'Gabriel da Hora Santos — RM 95298 — INF3FM',
  'Nathalia Watanabe Vasconcelos — RM 94333 — INF3CM',
  'Gabrielly Freire Borges — RM 96727 — EEL3CM',
  'Isabelle de Paula Santos — RM 95085 — INF3DM',
  'Nicolle Holanda Cavalcante — RM 95076 — INF3DM',
  'Caroline da Silva Santos — RM 94362 — INF3CM',
  'Evellyn Ferreira da Silva — RM 90296 — INF3CM',
  'Manuela Freitas da Silva Ferrari — RM 99219 — EDF2BT',
  'Lian Ruby Flores Espinoza — RM 95465 — INF3FM',
  'Manuella Caetano Bonifácio — RM 103833 — INF1FT',
  'Rafael Souza Silva — RM 103706 — INF1CT',
  'Alyne Merces Reis — RM 96867 — IRD3CM',
  'Miguel de Matos Drumond Lage — RM 96465 — EEL3CM',
  'Lucas Gomes da Silva — RM 96930 — INF3DM',
  'Sara Gomes da Silva — RM 96737 — INF3DM',
  'Felipe Enzo Souza Lopes — RM 96688 — EDF3BM',
  'Maria Eduarda Rodrigues Barbosa — RM 104009 — EDF1BT',
  'Eduardo Xavier Romualdo — RM 102781 — IRD1AT',
  'Carlos Eduardo de Paiva Rodrigues — Professor orientador',
  'Giovana Guimarães Souza',
  'Isabelli Carvalho Parron',
  'Victor Lucchi',
]

export const navLinks = [
  { href: '#experiencia', label: 'A história' },
  { href: '#projeto', label: 'O projeto' },
  { href: '#jornada', label: 'Jornada' },
  { href: '#personagens', label: 'Personagens' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#equipe', label: 'Equipe' },
]
