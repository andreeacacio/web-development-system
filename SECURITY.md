# Política de Segurança

Este repositório é a central de desenvolvimento web da equipe: instruções, Skills,
agentes, templates e padrões usados em projetos de clientes. Uma falha aqui pode se
propagar para todos os projetos derivados, por isso a segurança é prioridade.

## Como reportar uma vulnerabilidade

- **Não** abra uma issue pública nem um PR descrevendo a falha.
- Envie o relato diretamente ao responsável, @andreeacacio, pelo canal de contato
  privado indicado pelo responsável.
- Inclua: descrição, arquivos afetados, passos para reproduzir e impacto esperado.
- Meta de resposta inicial: até 5 dias úteis. Vulnerabilidades críticas têm prioridade
  e são tratadas antes das demais.

## Regras obrigatórias

1. **Nenhum segredo no repositório.** Chaves de API, tokens, senhas, certificados e
   chaves privadas nunca são commitados — nem em código, nem em exemplos, nem no histórico.
2. **`.env.example` é o único arquivo de ambiente versionado.** Ele contém apenas nomes
   de variáveis e valores fictícios (ex.: `API_KEY=sua-chave-aqui`).
3. **Credenciais de produção** ficam somente nos ambientes seguros dos provedores
   (hospedagem, CI/CD, serviços de terceiros) — nunca em arquivos do projeto.
4. **Nenhum segredo real é disponibilizado nas sessões comuns de desenvolvimento**,
   incluindo as sessões do Claude Code na nuvem. Nelas usamos apenas valores fictícios.
5. **Claude Code** é configurado em `.claude/settings.json` para bloquear a leitura e a
   edição de arquivos de segredos pelas ferramentas do próprio Claude e por comandos
   de leitura conhecidos (ex.: `cat`). Essas regras **não são uma proteção absoluta**:
   scripts e processos executados pelo terminal (ex.: Node.js, Python) podem acessar
   esses arquivos. Por isso a regra 4 é a principal defesa. As regras não devem ser
   removidas sem revisão.
6. **Dependências** são instaladas com pnpm, com versão fixada e lockfile versionado.
   Novas dependências exigem justificativa no PR.
7. **Alterações na `main`** acontecem somente via Pull Request revisado pelos
   responsáveis definidos em `.github/CODEOWNERS`.
8. **Skills, agentes e MCPs** só entram no repositório após revisão do conteúdo:
   instruções de terceiros são tratadas como código não confiável.

## Se um segredo vazar

1. **Revogue/rotacione a credencial imediatamente** no serviço de origem.
2. Avise o responsável (@andreeacacio).
3. Remova o segredo do código e, se necessário, do histórico do Git.
4. Registre o incidente e a causa para evitar recorrência.

> Remover o arquivo não basta: um segredo que chegou ao GitHub deve ser considerado
> comprometido.

## Versões suportadas

Apenas a branch `main` recebe correções de segurança.
