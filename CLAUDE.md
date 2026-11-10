# CLAUDE.md — web-development-system

Instruções permanentes para o Claude Code neste repositório. Mantenha este arquivo curto:
detalhes ficam em `SECURITY.md`, `PROGRESS.md` e nas Skills em `.claude/skills/`.

## Objetivo

Central de desenvolvimento web: padrões, Skills e templates para criar e manter sites e
aplicações de clientes com qualidade, segurança e baixo custo de contexto.

## Stack

- **Astro**: sites institucionais e comerciais (conteúdo, landing pages, catálogos).
- **Next.js**: aplicações avançadas (autenticação, painéis, dados dinâmicos, APIs).
- **pnpm** é o único gerenciador de pacotes, com versões fixadas e lockfile versionado.
  Nenhuma dependência ou ferramenta é instalada sem aprovação.

## Padrões de qualidade (obrigatórios em toda entrega)

- **Responsividade**: mobile first; testar em celular, tablet e desktop.
- **SEO**: títulos e descrições únicos, HTML semântico, sitemap, robots e dados estruturados.
- **Acessibilidade**: WCAG 2.2 AA, navegação por teclado, contraste e textos alternativos.
- **Performance**: boas Core Web Vitals, imagens otimizadas, pouco JavaScript no cliente.
- **Segurança**: seguir `SECURITY.md`; nenhum segredo no repositório nem nas sessões.
- **Cloud First**: hospedagem, CI/CD e serviços gerenciados em nuvem; nada depende da
  máquina local.

## Organização por cliente

- Cada cliente tem sua própria pasta (ex.: `clientes/<cliente>/`), sem compartilhar
  configurações, dados ou credenciais entre clientes.
- Código reutilizável vai para templates e Skills, nunca copiado entre clientes.

## Git

- **`main` é protegida**: só recebe alterações via Pull Request revisado (`CODEOWNERS`).
- **Branches**: `tipo/descricao-curta` (ex.: `feat/template-astro`); sessões do Claude
  usam a branch indicada na sessão.
- **Commits**: Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`...), pequenos e
  com um propósito; só após revisão e aprovação.
- **Pull Requests**: descrição do que mudou, por quê e como foi testado; abrir só quando
  solicitado.

## Rotina de trabalho

1. Executar **uma etapa por vez**.
2. Ao concluir, **atualizar `PROGRESS.md`**.
3. **Revisar** as alterações (`git diff`) e rodar os testes disponíveis.
4. **Commit somente após aprovação**.
5. Usar **`/compact`** antes de iniciar uma nova frente de trabalho.

## Economia de contexto

Use a Skill **context-optimization** (`.claude/skills/context-optimization/`) como
referência; não crie outra Skill de otimização e não altere a existente sem revisão.
Regras do dia a dia:

- Ler **somente os arquivos necessários** e, em arquivos grandes, só o trecho relevante.
- **Não reproduzir documentos inteiros** em respostas; citar caminho e linha.
- **Resumir resultados extensos** (logs, builds, testes) e filtrar saídas na origem.
- **Separar tarefas independentes** em etapas ou sessões distintas.
- Usar **`/context`** para verificar o consumo e **`/compact`** quando necessário.
- Consultar `PROGRESS.md` no início da sessão em vez de redescobrir o estado do projeto.
