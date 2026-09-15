import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  // Cloudflare Pages serve o site na raiz do dominio.
  base: '/',
  build: {
    // Os bundles gerados pelo Vite saem em /static/ para nao dividirem a pasta
    // com as fotos de `public/assets`. Assim o _headers pode dar cache imutavel
    // so para os arquivos com hash no nome.
    assetsDir: 'static',
  },
  plugins: [react(), tailwindcss(), cloudflare()],
})