import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** Remplace %VITE_SITE_URL% dans index.html (avec une valeur par défaut si .env est absent). */
function siteUrlPlugin(siteUrl: string): Plugin {
  return {
    name: 'meyra-site-url',
    transformIndexHtml: (html) => html.replaceAll('%VITE_SITE_URL%', siteUrl.replace(/\/$/, '')),
  }
}

/** Génère robots.txt et sitemap.xml avec l'adresse réelle du site au moment du build. */
function seoFilesPlugin(siteUrl: string): Plugin {
  const base = siteUrl.replace(/\/$/, '')
  return {
    name: 'meyra-seo-files',
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${base}/</loc><changefreq>monthly</changefreq><priority>1.0</priority></url>\n</urlset>\n`,
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = env.VITE_SITE_URL || 'https://meyra.example'
  return {
    plugins: [react(), tailwindcss(), siteUrlPlugin(siteUrl), seoFilesPlugin(siteUrl)],
    build: { target: 'es2020', sourcemap: false },
  }
})
