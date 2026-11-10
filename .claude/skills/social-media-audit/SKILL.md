---
name: social-media-audit
description: "Use esta skill para analisar a presença digital de um cliente no Instagram, Facebook e TikTok antes de criar o site: identidade visual, posicionamento, produtos e serviços, público-alvo, estilo de comunicação, conteúdos, diferenciais comerciais e oportunidades para o novo site. Usa somente conteúdo público ou fornecido/autorizado pelo cliente."
---

# Social Media Audit

Auditoria da presença digital do cliente nas redes sociais, feita **antes** do briefing
de design e da arquitetura do site. O resultado orienta conteúdo, identidade visual,
SEO e conversão do novo site.

## Quando ativar

- Início de um projeto de site para cliente que já tem perfis no Instagram, Facebook
  ou TikTok.
- Revisão de um site existente para alinhá-lo à comunicação atual do cliente.
- Pedido explícito de análise de redes sociais, concorrência digital ou posicionamento.

Não ativar para gestão de redes sociais, criação de posts, anúncios pagos ou
monitoramento contínuo.

## Regras obrigatórias

1. **Fontes permitidas**: somente conteúdo **público** (visível sem login) ou material
   **fornecido ou autorizado pelo cliente** (prints, exportações, relatórios de insights,
   arquivos de marca).
2. **Nunca solicitar senhas**, códigos de verificação, tokens ou acesso às contas do
   cliente. Se o cliente oferecer credenciais, recusar e pedir prints ou exportações.
3. **Sem scraping que contorne restrições**: não burlar login, bloqueios, limites de
   acesso, CAPTCHAs ou termos de uso das plataformas. Não usar ferramentas automatizadas
   de coleta em massa.
4. **Fatos x suposições**: toda conclusão deve ser marcada como **[Fato]** (observado
   diretamente, com fonte) ou **[Suposição]** (inferência, com o raciocínio).
5. **Limitações explícitas**: se uma rede não puder ser acessada (perfil privado,
   bloqueio de login, conteúdo indisponível, perfil inexistente), registrar a limitação
   e o que seria necessário para completá-la — nunca preencher com dados inventados.
6. **Sem novas dependências**: não instalar APIs, SDKs, bibliotecas ou ferramentas.
   Usar apenas os recursos já disponíveis na sessão e o material do cliente.
7. **Privacidade**: não coletar nem registrar dados pessoais de seguidores ou
   comentaristas; citar comentários apenas de forma agregada e anônima.
8. **Isolamento por cliente**: salvar o relatório em `clientes/<cliente>/` sem misturar
   informações de outros clientes (ver `CLAUDE.md` e `SECURITY.md`).

## Entradas

Pedir ao cliente (ou confirmar no briefing):

- Links públicos dos perfis: Instagram, Facebook, TikTok.
- Material opcional: prints, relatórios de insights exportados, manual de marca,
  catálogo, tabela de preços, depoimentos autorizados.
- Objetivo principal do novo site (vendas, captação de contatos, agendamento,
  autoridade, catálogo).
- Concorrentes ou referências que o cliente admira (opcional).

## Processo

Executar uma etapa por vez e resumir cada uma antes de seguir.

1. **Inventário de fontes**: listar cada rede, link, forma de acesso (público ou
   material do cliente), data da consulta e status (acessível, parcial, inacessível).
2. **Coleta por rede**: observar o perfil (nome, bio, link, destaques/fixados, categoria)
   e uma amostra recente de publicações (sugestão: as últimas 12 a 20 de cada rede).
   Anotar somente o necessário; não copiar conteúdo integral.
3. **Análise pelos sete eixos** (seção abaixo), cruzando as redes.
4. **Síntese de oportunidades** para o site.
5. **Validação com o cliente**: listar as suposições que precisam de confirmação.

## Eixos de análise

### 1. Identidade visual e posicionamento
- Logotipo, paleta de cores, tipografia, estilo de fotos e vídeos, filtros, consistência
  entre redes.
- Como a marca se apresenta: premium, popular, técnica, afetiva, local, etc.

### 2. Produtos e serviços
- O que é oferecido, carros-chefe, faixas de preço visíveis, formas de compra ou
  contratação, área de atendimento.

### 3. Público-alvo
- Perfil provável de cliente (sempre **[Suposição]** sem dados de insights do cliente),
  tipo de interação nos comentários, dúvidas recorrentes.

### 4. Estilo de comunicação
- Tom de voz, nível de formalidade, uso de emojis, hashtags, chamadas para ação,
  idioma e jargões.

### 5. Conteúdos e publicações
- Formatos (foto, carrossel, Reels, vídeo, Stories, lives), frequência aproximada,
  temas recorrentes, conteúdos com maior engajamento visível.

### 6. Diferenciais comerciais
- Argumentos de venda, provas sociais (avaliações, depoimentos, antes e depois),
  garantias, prêmios, tempo de mercado.

### 7. Oportunidades para o novo site
- Conteúdos que viram páginas ou seções (serviços, portfólio, FAQ a partir de dúvidas
  recorrentes, depoimentos).
- Palavras-chave e termos usados pelo público para SEO.
- Chamadas para ação e integrações (WhatsApp, agendamento, catálogo, links das redes).
- Lacunas: informações que as redes não comunicam bem e o site deve resolver.
- Ajustes de identidade visual necessários para consistência e acessibilidade
  (contraste, legibilidade).

## Formato do relatório

Salvar em `clientes/<cliente>/social-media-audit.md`:

```markdown
# Auditoria de redes sociais — <Cliente>

Data da análise: AAAA-MM-DD

## Fontes e limitações
| Rede | Link | Acesso | Amostra | Status / limitação |
|---|---|---|---|---|
| Instagram | ... | Público | 15 posts | Acessível |
| Facebook | ... | — | — | Inacessível: exige login |
| TikTok | ... | Prints do cliente | 10 vídeos | Parcial |

## Resumo executivo
3 a 5 pontos principais.

## Análise
### 1. Identidade visual e posicionamento
- [Fato] ... (fonte: Instagram, post de AAAA-MM-DD)
- [Suposição] ... (motivo: ...)
### 2. Produtos e serviços
### 3. Público-alvo
### 4. Estilo de comunicação
### 5. Conteúdos e publicações
### 6. Diferenciais comerciais

## Oportunidades para o novo site
Lista priorizada (alta, média, baixa) com a justificativa.

## Perguntas para validar com o cliente
Suposições que precisam de confirmação.
```

## Checklist de qualidade

- [ ] Todas as fontes são públicas ou fornecidas/autorizadas pelo cliente.
- [ ] Nenhuma senha ou credencial foi solicitada ou registrada.
- [ ] Nenhuma restrição de plataforma foi contornada.
- [ ] Cada conclusão está marcada como [Fato] ou [Suposição].
- [ ] Redes inacessíveis estão listadas com a limitação.
- [ ] Nenhum dado pessoal de terceiros foi registrado.
- [ ] As oportunidades estão ligadas aos padrões do projeto (SEO, acessibilidade,
      performance, responsividade).
- [ ] O relatório está na pasta do cliente.
