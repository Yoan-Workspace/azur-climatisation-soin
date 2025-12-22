import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Plus de 15 ans d'expérience sur la Côte d'Azur",
  "Intervention chez les particuliers et professionnels",
  "Technicien certifié et équipement professionnel",
  "Devis gratuit et transparent",
  "Garantie de satisfaction client",
  "Respect des normes environnementales",
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pourquoi nous faire confiance ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Depuis plus de 10 ans, je mets mon expertise au service des habitants 
              et entreprises de la Côte d'Azur. Mon engagement : un travail soigné, 
              une transparence totale et votre satisfaction garantie.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-3 sm:gap-6">
                <div className="bg-card rounded-xl p-4 sm:p-6 shadow-card text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-gradient mb-1 sm:mb-2">10+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Années d'expérience</p>
                </div>
                <div className="bg-card rounded-xl p-4 sm:p-6 shadow-card text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-gradient mb-1 sm:mb-2">100+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Clients satisfaits</p>
                </div>
                <div className="bg-card rounded-xl p-4 sm:p-6 shadow-card text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-gradient mb-1 sm:mb-2">100%</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Satisfaction</p>
                </div>
                <div className="bg-card rounded-xl p-4 sm:p-6 shadow-card text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-gradient mb-1 sm:mb-2">24h</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Réponse rapide</p>
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
