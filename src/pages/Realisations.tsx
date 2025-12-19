import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Camera, Loader2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { client, urlFor } from "@/lib/sanity";

interface Realisation {
  _id: string;
  title: string;
  location: string;
  type: string;
  image: any;
  order?: number;
}

const Realisations = () => {
  const [realisations, setRealisations] = useState<Realisation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    const fetchRealisations = async () => {
      try {
        const query = `*[_type == "realisation"] | order(order asc, _createdAt desc) {
          _id,
          title,
          location,
          type,
          image,
          order
        }`;
        
        const data = await client.fetch(query);
        setRealisations(data);
      } catch (err) {
        console.error('Erreur lors de la récupération des réalisations:', err);
        setError('Impossible de charger les réalisations');
      } finally {
        setLoading(false);
      }
    };

    fetchRealisations();
  }, []);

  // Gestion des touches clavier pour la lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  // Bloquer le scroll quand la lightbox est ouverte
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedImage]);

  const goToPrevious = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === 0 ? realisations.length - 1 : selectedImage - 1);
  };

  const goToNext = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === realisations.length - 1 ? 0 : selectedImage + 1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 section-padding">
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

          {loading && (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-500">{error}</p>
            </div>
          )}

          {!loading && !error && realisations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Aucune réalisation disponible pour le moment.</p>
            </div>
          )}

          {!loading && !error && realisations.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {realisations.map((realisation, index) => (
                <div
                  key={realisation._id}
                  className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-secondary/50">
                    <img
                      src={urlFor(realisation.image).width(600).height(450).url()}
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
          )}

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

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          {/* Bouton fermer */}
          <button
            className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Bouton précédent */}
          <button
            className="absolute left-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Bouton suivant */}
          <button
            className="absolute right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Image suivante"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image agrandie */}
          <div
            className="flex flex-col items-center justify-center w-full h-full p-4 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={urlFor(realisations[selectedImage].image).width(1920).url()}
              alt={realisations[selectedImage].title}
              className="w-full h-full object-contain"
            />
            <div className="text-center mt-4 text-white">
              <h3 className="text-xl font-semibold mb-2">
                {realisations[selectedImage].title}
              </h3>
              <div className="flex items-center justify-center gap-3">
                <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
                  {realisations[selectedImage].type}
                </span>
                <span className="text-sm text-white/80">
                  {realisations[selectedImage].location}
                </span>
              </div>
              <p className="text-sm text-white/60 mt-2">
                {selectedImage + 1} / {realisations.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Realisations;