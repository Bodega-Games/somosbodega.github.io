// @ts-check
import { defineConfig } from 'astro/config';

// Publicado como página de projeto na organização Bodega-Games:
// repositório  somosbodega.github.io  →  servido em
// https://bodega-games.github.io/somosbodega.github.io/
// (os links internos usam import.meta.env.BASE_URL, então, se um dia
//  apontar um domínio próprio na raiz, basta trocar site e remover base.)
export default defineConfig({
  site: 'https://bodega-games.github.io',
  base: '/somosbodega.github.io/',
});
