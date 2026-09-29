export type Atributo = { nome: 'Coragem' | 'Diálogo' | 'Ofício'; valor: number }

export type Personagem = {
  id: string
  nome: string
  idade: number
  origem: string
  ocupacao: string
  sonho: string
  dificuldade: string
  laco: string
  atributos: Atributo[]
  bemEstar: number
  cor: 'terracota' | 'oliva' | 'profundo' | 'ocre'
  simbolo: 'agulha' | 'livro' | 'cruz' | 'viola'
}

export const personagens: Personagem[] = [
  {
    id: 'zefa',
    nome: 'Dona Zefa',
    idade: 52,
    origem: 'Comunidade rural do sertão',
    ocupacao: 'Costureira e cozinheira',
    sonho: 'Abrir seu próprio ateliê e manter sua família por perto.',
    dificuldade: 'Sente vergonha do próprio sotaque e evita falar em público.',
    laco: 'Cuidou do jovem estudante da mesa quando ele era criança.',
    atributos: [
      { nome: 'Coragem', valor: 1 },
      { nome: 'Diálogo', valor: 2 },
      { nome: 'Ofício', valor: 3 },
    ],
    bemEstar: 5,
    cor: 'terracota',
    simbolo: 'agulha',
  },
  {
    id: 'caio',
    nome: 'Caio',
    idade: 17,
    origem: 'Pequena cidade do sertão',
    ocupacao: 'Estudante do ensino técnico',
    sonho: 'Ser o primeiro da família a entrar em uma universidade.',
    dificuldade: 'Ouve comentários sobre seu jeito de falar e tem evitado apresentar trabalhos.',
    laco: 'Foi cuidado por Dona Zefa na infância e a considera da família.',
    atributos: [
      { nome: 'Coragem', valor: 2 },
      { nome: 'Diálogo', valor: 1 },
      { nome: 'Ofício', valor: 2 },
    ],
    bemEstar: 5,
    cor: 'profundo',
    simbolo: 'livro',
  },
  {
    id: 'lucia',
    nome: 'Lúcia',
    idade: 34,
    origem: 'Capital do litoral nordestino',
    ocupacao: 'Técnica de enfermagem',
    sonho: 'Concluir a graduação em enfermagem e ter sua experiência reconhecida.',
    dificuldade: 'Sua competência é questionada no trabalho por ela ser “de fora”.',
    laco: 'Vizinha de Seu Antônio, divide com ele as caronas até o centro.',
    atributos: [
      { nome: 'Coragem', valor: 3 },
      { nome: 'Diálogo', valor: 2 },
      { nome: 'Ofício', valor: 2 },
    ],
    bemEstar: 5,
    cor: 'oliva',
    simbolo: 'cruz',
  },
  {
    id: 'antonio',
    nome: 'Seu Antônio',
    idade: 61,
    origem: 'Vale do rio, no sertão',
    ocupacao: 'Mestre de obras e violeiro',
    sonho: 'Ver os netos crescerem com orgulho de onde a família veio.',
    dificuldade: 'A saudade de casa e a solidão desde que chegou à cidade.',
    laco: 'Ensina Lúcia a tocar viola nas noites de domingo.',
    atributos: [
      { nome: 'Coragem', valor: 2 },
      { nome: 'Diálogo', valor: 3 },
      { nome: 'Ofício', valor: 3 },
    ],
    bemEstar: 5,
    cor: 'ocre',
    simbolo: 'viola',
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
  'Alyne Merces Reis',
  'Gabriel da Hora Santos',
  'Gabrielly Freire Borges',
  'Giovana Guimarães Souza',
  'Isabelle de Paula Santos',
  'Isabelli Carvalho Parron',
  'João Vithor Veiga Silva',
  'Lian Ruby Flores Espinoza',
  'Manuela Freitas da Silva Ferrari',
  'Maria Eduarda Rodrigues Barbosa',
  'Miguel Rodrigues',
  'Nicolle Holanda Cavalcante',
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
