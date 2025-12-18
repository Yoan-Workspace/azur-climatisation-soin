import { Wind, Wrench, Sparkles, Building2, Home, ThermometerSun } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Nettoyage complet",
    description: "Nettoyage en profondeur des filtres, évaporateurs et condenseurs pour un air purifié.",
  },
  {
    icon: Wrench,
    title: "Entretien préventif",
    description: "Maintenance régulière pour optimiser les performances et prolonger la durée de vie.",
  },
  {
    icon: Wind,
    title: "Désinfection",
    description: "Traitement antibactérien et antifongique pour une qualité d'air optimale.",
  },
  {
    icon: Home,
    title: "Particuliers",
    description: "Interventions à domicile pour les climatisations split et réversibles.",
  },
  {
    icon: Building2,
    title: "Professionnels",
    description: "Contrats de maintenance pour commerces, bureaux et entreprises.",
  },
  {
    icon: ThermometerSun,
    title: "Vérification fluide",
    description: "Contrôle et recharge du fluide frigorigène si nécessaire.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un service complet d'entretien et de nettoyage pour garantir le bon 
            fonctionnement de votre climatisation et la qualité de votre air intérieur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
