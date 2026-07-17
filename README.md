# Bodega Games — site + Caderneta

Site oficial da Bodega em [Astro](https://astro.build), com blog (a
**Caderneta**) alimentado por arquivos Markdown.

## Rodar local

```bash
npm install
npm run dev      # abre em http://localhost:4321
```

## Escrever um post

1. Copie `src/content/blog/_modelo-de-post.md`, renomeie (minúsculas,
   sem acento, com hífens — o nome vira a URL) e escreva por cima.
   Arquivos começando com `_` nunca são publicados: o modelo fica no
   repositório como gabarito, e `_rascunho-x.md` vira um rascunho privado.
2. Comece com o frontmatter:

```md
---
titulo: "Título do post"
descricao: "Uma linha que aparece na listagem."
data: 2026-07-20
tags: ["bastidores"]
---

Texto do post em Markdown...
```

3. `git push` — o GitHub Actions publica sozinho.

## Publicar (uma vez só)

1. Crie o repositório **somosbodega.github.io** na organização
   **Bodega-Games** e suba este projeto.
2. Em *Settings → Pages*, selecione **Source: GitHub Actions**.
3. Pronto: cada push na `main` builda e publica em
   `https://bodega-games.github.io/somosbodega.github.io/`.

## Estrutura

```
src/
  assets/marca_monograma.svg   # a marca oficial (não editar à mão)
  components/Marca.astro       # monograma com luz/sufixo/aria
  components/Rodape.astro      # rodapé compartilhado
  layouts/Base.astro           # <head>, fontes, fundo blindado
  pages/index.astro            # a página principal
  pages/blog/                  # a Caderneta (listagem + post)
  content/blog/*.md            # OS POSTS — é aqui que você escreve
  content.config.ts            # schema do frontmatter
  styles/global.css            # tokens e estilos da marca
public/favicon.svg
```

Feito no agreste — Pernambuco.
