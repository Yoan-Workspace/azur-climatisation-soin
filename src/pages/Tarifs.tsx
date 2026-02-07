import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge, Euro, Clock, Check, Loader2, Star } from "lucide-react";
import { client, urlFor } from "@/lib/sanity";
import { Button } from "@/components/ui/button";
import * as LucideIcons from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

interface Service {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  fullDescription?: any[];
  price: number;
  priceLabel?: string;
  priceUnit?: string;
  duration?: string;
  icon?: string;
  image?: any;
  features?: string[];
  category: string;
  popular: boolean;
  order?: number;
}

const categoryLabels: Record<string, string> = {
  entretien: "Entretien",
  nettoyage: "Nettoyage",
  maintenance: "Maintenance",
  diagnostic: "Diagnostic",
  installation: "Installation",
};

const Tarifs = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const query = `*[_type == "service" && active == true] | order(order asc, price asc) {
          _id,
          title,
          slug,
          description,
          fullDescription,
          price,
          priceLabel,
          priceUnit,
          duration,
          icon,
          image,
          features,
          category,
          popular,
          order
        }`;
        
        const data = await client.fetch(query);
        setServices(data);
      } catch (err) {
        console.error('Erreur lors de la récupération des services:', err);
        setError('Impossible de charger les services');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Récupérer les catégories uniques
  const categories = ["all", ...Array.from(new Set(services.map(s => s.category)))];

  // Filtrer les services par catégorie
  const filteredServices = selectedCategory === "all" 
    ? services 
    : services.filter(s => s.category === selectedCategory);

  // Fonction pour obtenir l'icône dynamiquement
  const getIcon = (iconName?: string) => {
    if (!iconName) return <Badge className="w-6 h-6" />;
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent className="w-6 h-6" /> : <Badge className="w-6 h-6" />;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 section-padding">
          {/* En-tête */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Euro className="w-4 h-4" />
              <span className="text-sm font-medium">Nos tarifs</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Services & <span className="text-gradient">Tarification</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dès 79€ sur La Gaude, des prestations de qualité à des tarifs transparents. 
              Sur les Alpes-Maritimes, La Gaude, Antibes, Cagnes-sur-Mer, Saint-Laurent-du-Var, Vence et leurs alentours.
            </p>
          </div>

          {/* Filtres par catégorie */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat === "all" ? "Tous" : categoryLabels[cat] || cat}
              </button>
            ))}
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

          {!loading && !error && filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Aucun service disponible dans cette catégorie.</p>
            </div>
          )}

          {/* Grille des services */}
          {!loading && !error && filteredServices.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <div
                  key={service._id}
                  className={`relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in ${
                    service.popular ? "ring-2 ring-primary" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Badge populaire */}
                  {service.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        Populaire
                      </div>
                    </div>
                  )}

                  {/* Image ou icône */}
                  {service.image ? (
                    <div className="aspect-video overflow-hidden bg-secondary/50">
                      <img
                        src={urlFor(service.image).width(600).height(400).url()}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        {getIcon(service.icon)}
                      </div>
                    </div>
                  )}

                  {/* Contenu */}
                  <div className="p-6">
                    {/* Catégorie */}
                    <div className="mb-3">
                      <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                        {categoryLabels[service.category] || service.category}
                      </span>
                    </div>

                    {/* Titre */}
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4">
                      {service.description}
                    </p>

                    {/* Durée */}
                    {service.duration && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Clock className="w-4 h-4" />
                        <span>{service.duration}</span>
                      </div>
                    )}

                    {/* Inclus */}
                    {service.features && service.features.length > 0 && (
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-foreground mb-2">Inclus :</p>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Prix */}
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-baseline justify-between mb-3">
                        <div>
                          {service.priceLabel && (
                            <span className="text-sm text-muted-foreground mr-1">
                              {service.priceLabel}
                            </span>
                          )}
                          <span className="text-3xl font-bold text-foreground">
                            {service.price}€
                          </span>
                          {service.priceUnit && (
                            <span className="text-sm text-muted-foreground ml-1">
                              {service.priceUnit}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <Button 
                          variant="hero" 
                          className="w-full"
                          onClick={(e) => handleContactClick(e, "contact")}
                        >
                          Demander un devis
                        </Button>
                        <Link to={`/services/${service.slug.current}`} className="w-full">
                          <Button 
                            variant="outline" 
                            className="w-full"
                          >
                            En savoir plus
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Informations supplémentaires */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2">Devis gratuit</h3>
              <p className="text-sm text-muted-foreground">
                Obtenez une estimation personnalisée sans engagement
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2">Paiement flexible</h3>
              <p className="text-sm text-muted-foreground">
                Plusieurs modes de paiement acceptés
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tarifs;