import { MapPin } from "lucide-react";

const cities = [
  "Nice", "Cannes", "Antibes", "Grasse", "Cagnes-sur-Mer", "Mandelieu",
  "Mougins", "Valbonne", "Sophia Antipolis", "Saint-Laurent-du-Var", "Le Cannet", "La Gaude",
  "Villeneuve-Loubet", "Biot", "Vence", "Saint-Paul-de-Vence", "Menton",
   "Beaulieu-sur-Mer", "Villefranche-sur-Mer"
];

const Zone = () => {
  // SEO : Données structurées pour la zone de service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Nettoyage et désinfection de climatisation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "NG Clim"
    },
    "areaServed": cities.map(city => ({
      "@type": "City",
      "name": city
    })),
    "description": "Nettoyage, dégraissage et désinfection de climatisations dans les Alpes-Maritimes."
  };

  return (
    <section id="zone" className="section-padding bg-secondary/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="container-narrow">
        <div className="text-center mb-12">
          {/* OPTIMISATION : Titre descriptif */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Zone de nettoyage de climatisation dans les Alpes-Maritimes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Basé à La Gaude, je me déplace pour le nettoyage et la désinfection
            de climatisation à Nice, Antibes, Cagnes-sur-Mer, Saint-Laurent-du-Var et alentours.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-4 sm:p-8 shadow-card border border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">Déplacements dans le 06</h3>
              <p className="text-muted-foreground">Alpes-Maritimes</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {cities.map((city, index) => (
              <span
                key={city}
                // SEO : On ajoute un titre pour le contexte sémantique
                title={`Nettoyage climatisation à ${city}`}
                className="px-4 py-2 bg-secondary rounded-full text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all cursor-default animate-scale-in"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                {city}
              </span>
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
