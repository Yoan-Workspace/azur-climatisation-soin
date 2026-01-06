import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
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
          // OPTIMISATION 1 : Alt tag plus précis avec Marque + Ville principale
          alt="Split air climatisation installation à La Gaude par NG Clim"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="max-w-full mx-auto px-6 md:px-8 lg:px-12 section-padding relative z-10">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Award className="w-4 h-4" />
            {/* C'est très bien, ça rassure (Trust signal) */}
            <span className="text-sm font-medium">Plus de 10 ans d'expérience</span>
          </div>

          {/* OPTIMISATION 2 : Le H1 inclut maintenant la zone géographique */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Entretien & Nettoyage de{" "}
            <span className="text-gradient">Climatisation</span>
            {/* Ajout stratégique pour le SEO Local (tu peux mettre <br /> sur mobile si besoin) */}
            <span className="block text-3xl md:text-5xl lg:text-6xl mt-2 text-foreground">
             sur la Côte d'Azur
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {/* Le paragraphe soutient le H1 avec des mots secondaires (particuliers, pro, air sain) */}
            Spécialiste de l'entretien, de la désinfection et du dépannage de climatisations pour particuliers 
            et professionnels dans le 06 (Nice, Cagnes-sur-mer, Antibes, La Gaude, Saint-Laurent-du-var, Vence ...). Retrouvez un air sain et une performance optimale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" onClick={scrollToContact}>
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl" onClick={scrollToContact}>
              Nous contacter
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Certifié</p>
                <p className="text-sm text-muted-foreground">Professionnel agréé</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Réactif</p>
                <p className="text-sm text-muted-foreground">Intervention rapide</p>
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