import type { RouteRecord } from "vite-react-ssg";
import Layout from "./Layout";
import Index from "./pages/Index";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    entry: "src/Layout.tsx",
    children: [
      {
        index: true,
        element: <Index />,
        entry: "src/pages/Index.tsx",
      },
      {
        path: "tarifs",
        lazy: async () => {
          const m = await import("./pages/Tarifs");
          return { Component: m.default, loader: m.tarifsLoader };
        },
        entry: "src/pages/Tarifs.tsx",
      },
      {
        path: "realisations",
        lazy: async () => {
          const m = await import("./pages/Realisations");
          return { Component: m.default, loader: m.realisationsLoader };
        },
        entry: "src/pages/Realisations.tsx",
      },
      {
        path: "nettoyage-climatisation/:slug",
        lazy: async () => {
          const m = await import("./pages/CityPage");
          return { Component: m.default, loader: m.cityLoader };
        },
        entry: "src/pages/CityPage.tsx",
        getStaticPaths: async () =>
          (await import("./pages/CityPage")).getCityStaticPaths(),
      },
      {
        path: "services/:slug",
        lazy: async () => {
          const m = await import("./pages/ServiceDetail");
          return { Component: m.default, loader: m.serviceLoader };
        },
        entry: "src/pages/ServiceDetail.tsx",
        getStaticPaths: async () =>
          (await import("./pages/ServiceDetail")).getServiceStaticPaths(),
      },
      {
        path: "mentions-legales",
        lazy: async () => ({ Component: (await import("./pages/MentionsLegales")).default }),
        entry: "src/pages/MentionsLegales.tsx",
      },
      {
        path: "politique-confidentialite",
        lazy: async () => ({
          Component: (await import("./pages/PolitiqueConfidentialite")).default,
        }),
        entry: "src/pages/PolitiqueConfidentialite.tsx",
      },
      {
        path: "*",
        lazy: async () => ({ Component: (await import("./pages/NotFound")).default }),
        entry: "src/pages/NotFound.tsx",
      },
    ],
  },
];
