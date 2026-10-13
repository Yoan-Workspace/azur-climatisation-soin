import { useParams, useNavigate, Link, useLoaderData } from "react-router-dom";
import type { LoaderFunctionArgs } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Check, Star, Euro } from "lucide-react";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import * as LucideIcons from "lucide-react";
import { Seo } from "@/components/Seo";

interface Service {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  fullDescription?: any[];
  price: number;
  priceLabel?: string;
  priceUnit?: string;
  duration?: string;
  icon?: string;
  image?: any;
  features?: string[];
  category: string;
  popular: boolean;
}

const SERVICE_QUERY = `*[_type == "service" && slug.current == $slug && active == true][0] {
  _id,
  title,
  slug,
  description,
  fullDescription,
  price,
  priceLabel,
  priceUnit,
  duration,
  icon,
  image,
  features,
  category,
  popular
}`;

// Récupère les données du service au build (SSG) et lors de la navigation client.
export async function serviceLoader({ params }: LoaderFunctionArgs) {
  const slug = params.slug;
  if (!slug) return { service: null };
  try {
    const service = await client.fetch<Service | null>(SERVICE_QUERY, { slug });
    return { service: service ?? null };
  } catch (err) {
    console.error("Erreur lors de la récupération du service:", err);
    return { service: null };
  }
}

// Détermine les pages /services/:slug à pré-générer en HTML statique.
export async function getServiceStaticPaths(): Promise<string[]> {
  try {
    const slugs = await client.fetch<{ current: string }[]>(
      `*[_type == "service" && active == true && defined(slug.current)].slug.current`
    );
    return slugs.map((current: any) => `/services/${current}`);
  } catch (err) {
    console.error("Impossible de lister les services pour le pré-rendu:", err);
    return [];
  }
}

const categoryLabels: Record<string, string> = {
  entretien: "Entretien",
  nettoyage: "Nettoyage",
  diagnostic: "Nettoyage ciblé",
};

const getCategoryLabel = (category: string) => categoryLabels[category] || "Nettoyage climatisation";

const ServiceDetail = () => {
  const { service } = useLoaderData() as { service: Service | null };
  const params = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const getIcon = (iconName?: string) => {
    if (!iconName) return null;
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent className="w-8 h-8" /> : null;
  };

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Seo
          title="Service introuvable | NG Clim"
          description="Ce service de nettoyage de climatisation est introuvable. Découvrez toutes nos prestations."
          canonicalPath={`/services/${params.slug ?? ""}`}
          noindex
        />
        <Header />
        <div className="max-w-4xl mx-auto px-6 md:px-8 pt-32 pb-16 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Service introuvable</h1>
          <Link to="/tarifs">
            <Button variant="hero">
              <ArrowLeft className="w-4 h-4" />
              Retour aux tarifs
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const imageUrl = service.image
    ? urlFor(service.image).width(1200).height(630).url()
    : undefined;

  // Données structurées : permet à Google d'afficher le service et son prix.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "serviceType": "Nettoyage de climatisation",
    "category": getCategoryLabel(service.category),
    "description": service.description,
    "url": `https://www.ng-climatisation.fr/services/${service.slug.current}`,
    ...(imageUrl ? { image: imageUrl } : {}),
    "provider": {
      "@type": "LocalBusiness",
      "name": "NG Clim",
      "telephone": "+33660620574",
      "areaServed": "Gardanne, Aix-en-Provence et Bouches-du-Rhône",
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Bouches-du-Rhône",
    },
    "offers": {
      "@type": "Offer",
      "price": service.price,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "url": `https://www.ng-climatisation.fr/services/${service.slug.current}`,
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`${service.title} à ${service.price}€ | NG Clim`}
        description={`${service.description} Prestation NG Clim dédiée au nettoyage et à la désinfection de climatisation.`}
        canonicalPath={`/services/${service.slug.current}`}
        image={imageUrl}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative">
          {service.image ? (
            <div className="w-full h-[400px] overflow-hidden bg-secondary/50">
              <img
                src={urlFor(service.image).width(1920).height(800).url()}
                alt={`${service.title} - nettoyage climatisation NG Clim`}
                width={1920}
                height={800}
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            </div>
          ) : (
            <div className="w-full h-[300px] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                {getIcon(service.icon)}
              </div>
            </div>
          )}
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 -mt-16 relative z-10">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link
              to="/tarifs"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux tarifs
            </Link>
          </div>

          {/* Contenu principal */}
          <div className="bg-card rounded-2xl shadow-card p-6 md:p-8 mb-8">
            {/* En-tête */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                  {getCategoryLabel(service.category)}
                </span>
                {service.popular && (
                  <div className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    <Star className="w-4 h-4 fill-current" />
                    Populaire
                  </div>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {service.title}
              </h1>

              <p className="text-lg text-muted-foreground mb-6">
                {service.description}
              </p>

              {/* Prix et durée */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-baseline gap-2">
                  <Euro className="w-5 h-5 text-primary" />
                  {service.priceLabel && (
                    <span className="text-sm text-muted-foreground">
                      {service.priceLabel}
                    </span>
                  )}
                  <span className="text-4xl font-bold text-foreground">
                    {service.price}€
                  </span>
                  {service.priceUnit && (
                    <span className="text-sm text-muted-foreground">
                      {service.priceUnit}
                    </span>
                  )}
                </div>

                {service.duration && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-5 h-5" />
                    <span>{service.duration}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Description complète */}
            {service.fullDescription && service.fullDescription.length > 0 && (
              <div className="prose prose-lg max-w-none mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Description détaillée
                </h2>
                <div className="text-muted-foreground">
                  <PortableText value={service.fullDescription} />
                </div>
              </div>
            )}

            {/* Prestations incluses */}
            {service.features && service.features.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Prestations incluses
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA */}
            <div className="pt-6 border-t border-border">
              <Button
                variant="hero"
                size="lg"
                className="w-full md:w-auto"
                onClick={handleContactClick}
              >
                Demander un devis gratuit
              </Button>
            </div>
          </div>

          {/* Informations supplémentaires */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2">
                Devis gratuit
              </h3>
              <p className="text-sm text-muted-foreground">
                Sans engagement
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2">
                Prestation spécialisée
              </h3>
              <p className="text-sm text-muted-foreground">
                Nettoyage et désinfection
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
