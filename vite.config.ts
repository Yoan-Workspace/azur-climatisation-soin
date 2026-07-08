import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import sitemap from 'vite-plugin-sitemap'

const SANITY_PROJECT_ID = '9wgdwmzk'
const SANITY_DATASET = 'production'

// Récupère les slugs des services actifs pour compléter le sitemap.
async function fetchServiceRoutes(): Promise<string[]> {
  try {
    const query = encodeURIComponent(
      '*[_type == "service" && active == true && defined(slug.current)].slug.current'
    )
    const url = `https://${SANITY_PROJECT_ID}.apicdn.sanity.io/v2024-01-01/data/query/${SANITY_DATASET}?query=${query}`
    const res = await fetch(url)
    if (!res.ok) return []
    const json = (await res.json()) as { result?: string[] }
    return (json.result ?? []).map((slug) => `/services/${slug}`)
  } catch (err) {
    console.warn('[sitemap] Impossible de récupérer les services Sanity:', err)
    return []
  }
}

export default defineConfig(async () => {
  const serviceRoutes = await fetchServiceRoutes()

  return {
    plugins: [
      react(),
      sitemap({
        hostname: 'https://www.ng-climatisation.fr',
        dynamicRoutes: [
          '/realisations',
          '/tarifs',
          '/mentions-legales',
          '/politique-confidentialite',
          ...serviceRoutes,
        ],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    ssgOptions: {
      dirStyle: 'nested',
    },
  }
})
