import { MapPin } from "lucide-react";

const cities = [
  "Nice", "Cannes", "Antibes", "Grasse", "Cagnes-sur-Mer", "Mandelieu",
  "Mougins", "Valbonne", "Sophia Antipolis", "Saint-Laurent-du-Var",
  "Villeneuve-Loubet", "Biot", "Vence", "Saint-Paul-de-Vence", "Menton",
  "Monaco", "Beaulieu-sur-Mer", "Villefranche-sur-Mer"
];

const Zone = () => {
  return (
    <section id="zone" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Zone d'Intervention
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            J'interviens sur l'ensemble de la Côte d'Azur, de Monaco à Cannes 
            et dans l'arrière-pays niçois.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">Alpes-Maritimes (06)</h3>
              <p className="text-muted-foreground">Et Monaco</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {cities.map((city, index) => (
              <span
                key={city}
                className="px-4 py-2 bg-secondary rounded-full text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default animate-scale-in"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                {city}
              </span>
            ))}
          </div>

          <p className="mt-6 text-muted-foreground text-sm">
            Vous ne trouvez pas votre ville ? Contactez-moi pour vérifier si j'interviens dans votre secteur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Zone;
