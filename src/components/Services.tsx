import { Wind, Wrench, Sparkles, Building2, Home, ThermometerSun } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Nettoyage & Dégraissage", // Plus précis que "Nettoyage complet"
    description: "Nettoyage haute pression des filtres, turbines et bacs à condensats. Élimination des mauvaises odeurs.",
  },
  {
    icon: Wind,
    title: "Désinfection Bactéricide / Fongicide", // Mot clé puissant (santé)
    description: "Traitement anti-légionellose, antibactérien et fongicide pour un air sain, sans allergènes.",
  },
  {
    icon: Wrench,
    title: "Maintenance Préventive",
    description: "Vérification du circuit, serrage des connexions et contrôle du fonctionnement.",
  },
  {
    icon: Home,
    title: "Clim Maison & Appartement", // "Particuliers" est trop vague pour le SEO
    description: "Intervention rapide chez les particuliers sur tous types de splits, consoles et gainables.",
  },
  {
    icon: Building2,
    title: "Clim Bureaux & Commerces", // Cible le B2B
    description: "Contrats d'entretien annuels pour professionnels. Gestion de parcs multi-splits.",
  },
  {
    icon: ThermometerSun, 
    title: "Performance Énergétique",
    description: "Optimisation du rendement de votre appareil pour réduire votre consommation d'électricité.",
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-12">
          {/* OPTIMISATION SEO : Le H2 décrit exactement l'activité */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos prestations d'entretien de climatisation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une expertise complète pour prolonger la durée de vie de vos appareils 
            et garantir un air pur sur la Côte d'Azur.
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
              {/* Le H3 est important pour la structure sémantique */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
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