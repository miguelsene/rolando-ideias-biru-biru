# Rolando Ideias — Landing page (SLA 2026)

React + TypeScript + Tailwind CSS + Framer Motion (Vite).

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # produção (gera /dist)
```

## Estrutura
```
src/
  data/content.ts            # todo o conteúdo (personagens, atos, equipe, combinados…)
  components/ui/             # peças reutilizáveis
    Reveal, SectionHeading, HandUnderline, Button, Die (1d6 rolável),
    WellbeingPips, CharacterCard (ficha que vira), MapSketch, DashedPath, Icons
  components/sections/       # uma seção por arquivo (Hero → Finale)
  assets/                    # ilustração do sertão (webp, 2 tamanhos)
```

Para editar textos, personagens ou nomes da equipe, altere apenas `src/data/content.ts`.

Acessibilidade: link "pular para o conteúdo", foco visível, navegação por teclado,
`prefers-reduced-motion` respeitado, informações nunca dependem só de cor (números + rótulos).
