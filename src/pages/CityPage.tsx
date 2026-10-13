import { Link, useLoaderData } from "react-router-dom";
import type { LoaderFunctionArgs } from "react-router-dom";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import {
  cityPages,
  cityPaths,
  contactHref,
  getCityBySlug,
  offers,
  type CityPageData,
} from "@/data/cities";

const SITE_URL = "https://www.ng-climatisation.fr";

export async function cityLoader({ params }: LoaderFunctionArgs) {
  return { city: getCityBySlug(params.slug) ?? null };
}

export function getCityStaticPaths() {
  return cityPaths;
}

const steps = [
  {
    title: "Vous décrivez l'installation",
    text: "Nombre d'unités, type d'appareil et commune. Un message ou un appel suffisent.",
  },
  {
    title: "Le devis est confirmé",
    text: "Le tarif est le même sur tout le secteur. Vous le recevez avant le rendez-vous.",
  },
  {
    title: "J'interviens sur place",
    text: "Nettoyage, dégraissage et désinfection des unités accessibles, à domicile ou dans vos locaux.",
  },
];

const CityPage = () => {
  const { city } = useLoaderData() as { city: CityPageData | null };

  if (!city) {
    return (
      <div className="min-h-screen bg-background">
        <Seo
          title="Commune introuvable | NG Clim"
          description="Cette page de nettoyage de climatisation n'existe pas."
          noindex
        />
        <Header />
        <main className="pt-32 pb-16 px-6 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Cette commune n'a pas de page</h1>
          <Link to="/#zone" className="text-primary font-medium">
            Voir la zone d'intervention
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const nearby = city.nearby
    .map((slug) => cityPages.find((item) => item.slug === slug))
    .filter((item): item is CityPageData => Boolean(item));

  const pageUrl = `${SITE_URL}/nettoyage-climatisation/${city.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Zone d'intervention",
            item: `${SITE_URL}/#zone`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: city.name,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        name: `Nettoyage de climatisation à ${city.name}`,
        serviceType: "Nettoyage et désinfection de climatisation",
        url: pageUrl,
        areaServed: {
          "@type": "City",
          name: city.name,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: "Bouches-du-Rhône",
          },
        },
        provider: {
          "@id": `${SITE_URL}/#business`,
        },
        offers: offers.map((offer) => ({
          "@type": "Offer",
          name: offer.name,
          price: offer.price,
          priceCurrency: "EUR",
          url: `${SITE_URL}/tarifs`,
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={city.title}
        description={city.description}
        canonicalPath={`/nettoyage-climatisation/${city.slug}`}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <section className="pt-28 pb-12 md:pt-32 md:pb-16">
          <div className="container-narrow px-4 sm:px-6 lg:px-8">
            <nav aria-label="Fil d'Ariane" className="text-sm text-muted-foreground mb-8">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link to="/" className="hover:text-foreground">Accueil</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link to="/#zone" className="hover:text-foreground">Zone d'intervention</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-foreground">{city.name}</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">{city.name} ({city.postalCode})</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 max-w-3xl text-balance">
              Nettoyage de climatisation à {city.name}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              {city.lead}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to={contactHref(city.name)}>
                  Demander un devis
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="tel:+33660620574">
                  <Phone className="w-5 h-5" />
                  06 60 62 05 74
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary/30">
          <div className="container-narrow grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3 space-y-5">
              {city.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-muted-foreground leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
            <aside className="lg:col-span-2 bg-card rounded-2xl border border-border p-6">
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Même tarif à {city.name}
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Le prix ne change pas d'une commune à l'autre. Le détail des prestations est sur la page tarifs.
              </p>
              <ul className="space-y-4 mb-6">
                {offers.map((offer) => (
                  <li key={offer.name} className="border-b border-border pb-4 last:border-0 last:pb-0">
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="font-medium text-foreground">{offer.name}</p>
                      <p className="text-2xl font-bold text-foreground">{offer.price}€</p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{offer.detail}</p>
                  </li>
                ))}
              </ul>
              <Link to="/tarifs" className="text-sm font-medium text-primary hover:underline">
                Voir le détail des tarifs
              </Link>
            </aside>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-narrow">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Où j'interviens à {city.name}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">{city.audience}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {city.places.map((place) => (
                <article key={place.name} className="bg-card rounded-xl border border-border p-5">
                  <h3 className="font-semibold text-foreground mb-2">{place.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{place.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary/30">
          <div className="container-narrow">
            <h2 className="text-3xl font-bold text-foreground mb-10">
              Comment se passe l'intervention
            </h2>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step, index) => (
                <li key={step.title} className="bg-card rounded-xl border border-border p-6">
                  <p className="text-sm font-semibold text-primary mb-3">0{index + 1}</p>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Faq
          title={`Questions fréquentes à ${city.name}`}
          items={city.faqs}
        />

        <section className="section-padding bg-secondary/30">
          <div className="container-narrow">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Communes voisines
            </h2>
            <div className="flex flex-wrap gap-3">
              {nearby.map((item) => (
                <Link
                  key={item.slug}
                  to={`/nettoyage-climatisation/${item.slug}`}
                  className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  Nettoyage climatisation à {item.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CityPage;
