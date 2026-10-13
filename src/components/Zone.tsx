import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { zoneTowns } from "@/data/cities";

const Zone = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Nettoyage et désinfection de climatisation",
    provider: {
      "@type": "LocalBusiness",
      name: "NG Clim",
    },
    areaServed: zoneTowns.map((city) => ({
      "@type": "City",
      name: city.name,
    })),
    description:
      "Nettoyage, dégraissage et désinfection de climatisations à Gardanne, Aix-en-Provence et dans les Bouches-du-Rhône.",
  };

  return (
    <section id="zone" className="section-padding bg-secondary/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Zone de nettoyage de climatisation à Gardanne et dans le Pays d'Aix
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            J'interviens à Gardanne et dans les communes voisines, jusqu'à Aix-en-Provence,
            Bouc-Bel-Air, Meyreuil et Fuveau.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-4 sm:p-8 border border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">Déplacements dans le 13</h3>
              <p className="text-muted-foreground">Gardanne et Bouches-du-Rhône</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {zoneTowns.map((city) => (
              <Link
                key={city.name}
                to={`/nettoyage-climatisation/${city.slug}`}
                title={`Nettoyage climatisation à ${city.name}`}
                className="px-4 py-2 bg-secondary rounded-full text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {city.name}
              </Link>
            ))}
          </div>

          <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>NG Clim</strong> se déplace à votre domicile ou dans vos bureaux pour nettoyer et désinfecter
              vos unités de climatisation split, multi-split ou gainable accessible. L'activité est centrée sur
              l'hygiène de l'air, la désinfection et la propreté des appareils.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Zone;
