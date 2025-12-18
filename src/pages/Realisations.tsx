import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Camera } from "lucide-react";

const realisations = [
  {
    id: 1,
    title: "Nettoyage split mural",
    location: "Nice",
    type: "Particulier",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Entretien climatisation gainable",
    location: "Cannes",
    type: "Professionnel",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Désinfection unité intérieure",
    location: "Antibes",
    type: "Particulier",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Maintenance système multi-split",
    location: "Grasse",
    type: "Professionnel",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Nettoyage complet cassette",
    location: "Mougins",
    type: "Professionnel",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    title: "Entretien annuel",
    location: "Valbonne",
    type: "Particulier",
    image: "/placeholder.svg",
  },
];

const Realisations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container-narrow section-padding">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Camera className="w-4 h-4" />
              <span className="text-sm font-medium">Nos interventions</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Galerie de <span className="text-gradient">Réalisations</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez quelques exemples de nos interventions d'entretien et de nettoyage 
              de climatisations chez nos clients particuliers et professionnels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {realisations.map((realisation, index) => (
              <div
                key={realisation.id}
                className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary/50">
                  <img
                    src={realisation.image}
                    alt={realisation.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {realisation.type}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {realisation.location}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {realisation.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Vous souhaitez voir d'autres exemples ?
              </h2>
              <p className="text-muted-foreground">
                Contactez-moi pour discuter de votre projet et obtenir des références adaptées à votre situation.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Realisations;
