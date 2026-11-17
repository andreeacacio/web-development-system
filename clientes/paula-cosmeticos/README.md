# Honre Cosméticos — protótipo demonstrativo

Site de uma página em Astro para apresentação comercial. **Não é o site definitivo.**

## Rodar

```bash
pnpm install
pnpm dev      # desenvolvimento
pnpm build    # gera dist/
pnpm preview  # serve o build
```

## Onde editar

- `src/data/site.ts` — contato, WhatsApp, endereço, horários, categorias e vitrine.
- `public/images/` — ilustrações substituíveis (trocar por fotos oficiais mantendo nomes
  e proporções: hero 16:10, categorias 4:5, produtos e Instagram 1:1, loja 9:11).
- `src/components/Logo.astro` — logotipo provisório em tipografia.

## Pendências (confirmar com a loja)

- WhatsApp de atendimento: +55 48 9982-8524 (link oficial fornecido). Grupo "VIPs Honre
  Cosméticos" em `whatsappGroup`.
- Endereço encontrado em diretórios: provisório.
- Horários, categorias reais, produtos e fotografias.
- Logotipo: o atual é uma aproximação tipográfica do logo real (círculo coral, serifa e
  losango); substituir pelo arquivo oficial em vetor.
- Domínio definitivo (`astro.config.mjs`) e liberar indexação (`robots.txt` e meta `robots`)
  apenas na versão final; incluir sitemap nessa etapa.
