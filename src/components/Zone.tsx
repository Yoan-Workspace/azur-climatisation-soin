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
    "serviceType": "Entretien et Nettoyage de Climatisation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "NG Clim"
    },
    "areaServed": cities.map(city => ({
      "@type": "City",
      "name": city
    })),
    "description": "Intervention rapide pour le nettoyage et la désinfection de climatisations dans toutes les Alpes-Maritimes."
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
            Où intervient NG Clim pour votre climatisation ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Basé sur la Côte d'Azur, je me déplace rapidement pour l'entretien 
            et le nettoyage de vos installations de Nice.
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
                title={`Entretien climatisation à ${city}`}
                className="px-4 py-2 bg-secondary rounded-full text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all cursor-default animate-scale-in"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                {city}
              </span>
            ))}
          </div>

          <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>NG Clim</strong> se déplace à votre domicile ou dans vos bureaux pour toute maintenance de système 
              split, multi-split ou gainable. Mon périmètre couvre les zones urbaines (Nice, La Gaude, Sophia Antipolis) 
              ainsi que l'arrière-pays.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Zone;