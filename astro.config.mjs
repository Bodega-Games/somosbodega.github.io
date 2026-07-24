// @ts-check
import { defineConfig } from 'astro/config';

// Domínio próprio na raiz: bodegagames.com.br (registrado no registro.br).
// O CNAME em public/CNAME é copiado para o build e mantém o domínio no Pages.
// Os links internos usam import.meta.env.BASE_URL, que agora resolve para '/'.
export default defineConfig({
  site: 'https://bodegagames.com.br',
});
