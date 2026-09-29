/** Marcador de bem-estar compacto: blocos preenchidos + valor numérico (não depende só de cor). */
export function WellbeingPips({ valor, max = 5, tom = 'claro', tamanho = 'md' }: { valor: number; max?: number; tom?: 'claro' | 'escuro'; tamanho?: 'sm' | 'md' }) {
  const cheio = tom === 'claro' ? 'bg-oliva border-oliva-700' : 'bg-ocre-300 border-ocre-300'
  const vazio = tom === 'claro' ? 'bg-transparent border-terra/30 border-dashed' : 'bg-transparent border-osso/40 border-dashed'
  const h = tamanho === 'sm' ? 'h-3 w-5' : 'h-4 w-7'
  return (
    <div className="flex items-center gap-3" role="img" aria-label={`Bem-estar ${valor} de ${max}`}>
      <div className="flex gap-1">
        {Array.from({ length: max }).map((_, i) => (
          <span key={i} className={`${h} rounded-[3px] border ${i < valor ? cheio : vazio}`} />
        ))}
      </div>
      <span className="font-serif text-sm font-semibold tabular-nums">{valor}/{max}</span>
    </div>
  )
}
