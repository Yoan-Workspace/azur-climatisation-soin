import { Link } from "react-router-dom";
import { Wind, Sparkles, Building2, Home, ThermometerSun, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Sparkles,
    title: "Nettoyage & Dégraissage",
    description: "Nettoyage haute pression des filtres, turbines et bacs à condensats. Élimination des mauvaises odeurs.",
  },
  {
    icon: Wind,
    title: "Désinfection Bactéricide / Fongicide",
    description: "Traitement anti-légionellose, antibactérien et fongicide pour un air sain, sans allergènes.",
  },
  {
    icon: Home,
    title: "Clim Maison & Appartement",
    description: "Nettoyage chez les particuliers sur splits muraux, consoles et systèmes gainables accessibles.",
  },
  {
    icon: Building2,
    title: "Clim Bureaux & Commerces",
    description: "Nettoyage périodique pour professionnels, bureaux, commerces et parcs multi-splits.",
  },
  {
    icon: ThermometerSun, 
    title: "Performance Énergétique",
    description: "Des unités propres respirent mieux et conservent un fonctionnement plus régulier au quotidien.",
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-12">
          {/* OPTIMISATION SEO : Le H2 décrit exactement l'activité */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nettoyage et désinfection de climatisation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La même prestation à Gardanne, Aix-en-Provence, Bouc-Bel-Air, Meyreuil, Fuveau et dans le Pays d'Aix.
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

        <div className="text-center mt-10">
          <Button variant="hero" size="lg" asChild>
            <Link to="/tarifs">
              Voir les tarifs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
