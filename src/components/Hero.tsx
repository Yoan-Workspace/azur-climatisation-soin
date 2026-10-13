import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award, Phone } from "lucide-react";
import heroImage from "@/assets/hero-climatisationA.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Nettoyage et désinfection de climatisation à Gardanne et Aix-en-Provence par NG Clim"
          width={1360}
          height={907}
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="max-w-full mx-auto px-6 md:px-8 lg:px-12 section-padding relative z-10">
        <div className="max-w-5xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">
              Spécialiste du nettoyage de climatisation à Gardanne et dans le Pays d'Aix
            </span>
          </div>

          {/* H1 — mot-clé principal + zone + prix */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Nettoyage de{" "}
            <span className="text-gradient">Climatisation</span>
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-3 text-foreground">
              à Gardanne
            </span>
          </h1>

          {/* Paragraphe unique, dense, sémantiquement cohérent */}
          <p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Mauvaises odeurs, souffle moins agréable, filtres encrassés ?{" "}
            <strong className="text-foreground font-semibold">NG Clim</strong> nettoie et désinfecte
            votre climatisation à Gardanne, Aix-en-Provence, Bouc-Bel-Air, Meyreuil, Fuveau et dans le Pays d'Aix.
          </p>

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl" onClick={scrollToContact}>
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="tel:+33660620574">
                <Phone className="w-5 h-5" />
                06 60 62 05 74
              </a>
            </Button>
          </div>

          {/* Trust signals */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Spécialisé</p>
                <p className="text-sm text-muted-foreground">Hygiène de clim</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Réactif</p>
                <p className="text-sm text-muted-foreground">Devis gratuit</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">10+ ans</p>
                <p className="text-sm text-muted-foreground">D'expérience</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
