# NG Climatisation

Site vitrine de NG Clim, spécialiste du nettoyage, du dégraissage et de la désinfection de climatisations dans les Alpes-Maritimes.

## Développement

```sh
npm install
npm run dev
```

## Production

Le build utilise un pré-rendu statique (SSG) via `vite-react-ssg` : chaque page publique est générée en HTML statique complet (contenu + balises SEO), puis hydratée côté client. Cela améliore le référencement et l'affichage lors des partages sur les réseaux sociaux.

```sh
npm run build      # build SSG (production)
npm run preview    # prévisualiser le build
```

Les données du CMS Sanity (services, tarifs, réalisations) sont récupérées au build via des `loader` React Router : les pages `/tarifs`, `/realisations` et chaque page `/services/:slug` sont pré-générées en HTML statique avec leur contenu et leurs données structurées (prix inclus). La liste des pages `/services/:slug` à générer est déterminée automatiquement via `getStaticPaths` (voir `src/pages/ServiceDetail.tsx`).
