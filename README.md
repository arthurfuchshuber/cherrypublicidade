# Cherry Publicidade · Landing page (versão mobile)

Implementação, linha por linha, do mockup mobile (390 px) da landing page da Cherry Publicidade.
Stack igual à do Lovable: **React 18 + Vite + TypeScript + Tailwind**. Nenhum crédito do Lovable foi usado.

## Rodar no computador

```bash
npm install
npm run dev        # http://localhost:8080
npm run build      # gera a pasta dist/ (site estático)
```

## O que tem

| Seção | Arquivo |
| --- | --- |
| Hero com radar, cereja, headline animada e cards de lead | `src/components/Hero.tsx` |
| A rota (mapa com 5 paradas, balão, pino "VOCÊ", troca anfitrião/prestador) | `src/components/Rota.tsx` |
| Painel semanal (KPIs, gráfico, exemplos de leads) | `src/components/Painel.tsx` |
| Ciclo semanal (círculo animado) | `src/components/Ciclo.tsx` |
| Diagnóstico em 3 passos (formulário) | `src/components/Caminho.tsx` |
| Rodapé com páginas legais | `src/components/Footer.tsx` |
| Textos, números e leads de exemplo | `src/lib/data.ts` |
| Sobrenome com desfoque gradativo | `src/components/BlurName.tsx` |

- Os nomes dos leads são **fictícios**; só o primeiro nome aparece nítido.
- Os números do painel vêm dos relatórios da Inevitable Stays (24 a 30/10/2026).
- Os links do rodapé (`#privacidade`, `#termos`, `#cookies`) ainda não têm página.
- O formulário do diagnóstico ainda não envia dados para lugar nenhum.

## Publicar sem gastar créditos do Lovable

1. **GitHub:** crie um repositório vazio e envie esta pasta (`git init`, `git add .`, `git commit`, `git push`).
2. **Hospedagem gratuita:** conecte o repositório à Vercel ou à Netlify (build: `npm run build`, pasta: `dist`).

## Usar dentro do Lovable

O Lovable não importa código externo: só exporta projetos criados nele. O caminho é criar um projeto
Lovable, conectar o GitHub (o Lovable cria um repositório novo) e então enviar este código para o ramo
`main` desse repositório. Commits feitos no GitHub voltam para o Lovable sem gastar créditos.
