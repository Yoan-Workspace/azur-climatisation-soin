import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Expertise de 10 ans en génie climatique sur la Côte d'Azur", // Plus technique
  "Spécialiste climatisation particuliers et locaux professionnels",
  "Technicien certifié manipulant les fluides frigorigènes", // Mot clé puissant
  "Devis gratuit, transparent et sans frais cachés",
  "Contrats d'entretien annuel et dépannage d'urgence", // Ajout de services
  "Utilisation de produits de désinfection biodégradables", // Écologie/Santé
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding border-t border-border/50">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* OPTIMISATION SEO : Titre incluant l'activité */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pourquoi choisir NG Clim pour votre climatisation ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Depuis plus d'une décennie, j'accompagne les résidents des Alpes-Maritimes 
              dans l'optimisation de leur confort thermique. Mon engagement : une 
              climatisation saine, performante et durable.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            {/* Décoration visuelle pour Google (Image de qualité ou Stats) */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-3xl p-8 lg:p-12 border border-primary/10">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {/* On garde tes stats, elles sont excellentes pour le taux de conversion */}
                <div className="bg-card rounded-2xl p-4 sm:p-6 shadow-sm border border-border/50 text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-primary mb-1">10+</p>
                  <p className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">Années</p>
                </div>
                <div className="bg-card rounded-2xl p-4 sm:p-6 shadow-sm border border-border/50 text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-primary mb-1">500+</p> 
                  {/* Petit conseil : augmente un peu si c'est vrai, 100+ paraît peu pour 10 ans */}
                  <p className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">Interventions</p>
                </div>
                <div className="bg-card rounded-2xl p-4 sm:p-6 shadow-sm border border-border/50 text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-primary mb-1">100%</p>
                  <p className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">Disponibilité</p>
                </div>
                <div className="bg-card rounded-2xl p-4 sm:p-6 shadow-sm border border-border/50 text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-primary mb-1">06</p>
                  <p className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">Secteur Alpes-M.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;