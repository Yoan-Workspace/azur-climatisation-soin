import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Check, Loader2, Star, Euro } from "lucide-react";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import * as LucideIcons from "lucide-react";

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
}

const categoryLabels: Record<string, string> = {
  entretien: "Entretien",
  nettoyage: "Nettoyage",
  maintenance: "Maintenance",
  diagnostic: "Diagnostic",
  installation: "Installation",
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchService = async () => {
      if (!slug) return;

      try {
        const query = `*[_type == "service" && slug.current == $slug && active == true][0] {
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
          popular
        }`;

        const data = await client.fetch(query, { slug });
        
        if (!data) {
          setError("Service introuvable");
        } else {
          setService(data);
        }
      } catch (err) {
        console.error("Erreur lors de la récupération du service:", err);
        setError("Impossible de charger le service");
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [slug]);

  const handleContactClick = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const getIcon = (iconName?: string) => {
    if (!iconName) return null;
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent className="w-8 h-8" /> : null;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex justify-center items-center min-h-[60vh] pt-24">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-4xl mx-auto px-6 md:px-8 pt-32 pb-16 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            {error || "Service introuvable"}
          </h1>
          <Link to="/tarifs">
            <Button variant="hero">
              <ArrowLeft className="w-4 h-4" />
              Retour aux tarifs
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative">
          {service.image ? (
            <div className="w-full h-[400px] overflow-hidden bg-secondary/50">
              <img
                src={urlFor(service.image).width(1920).height(800).url()}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            </div>
          ) : (
            <div className="w-full h-[300px] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                {getIcon(service.icon)}
              </div>
            </div>
          )}
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 -mt-16 relative z-10">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link
              to="/tarifs"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux tarifs
            </Link>
          </div>

          {/* Contenu principal */}
          <div className="bg-card rounded-2xl shadow-card p-6 md:p-8 mb-8">
            {/* En-tête */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                  {categoryLabels[service.category] || service.category}
                </span>
                {service.popular && (
                  <div className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    <Star className="w-4 h-4 fill-current" />
                    Populaire
                  </div>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {service.title}
              </h1>

              <p className="text-lg text-muted-foreground mb-6">
                {service.description}
              </p>

              {/* Prix et durée */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-baseline gap-2">
                  <Euro className="w-5 h-5 text-primary" />
                  {service.priceLabel && (
                    <span className="text-sm text-muted-foreground">
                      {service.priceLabel}
                    </span>
                  )}
                  <span className="text-4xl font-bold text-foreground">
                    {service.price}€
                  </span>
                  {service.priceUnit && (
                    <span className="text-sm text-muted-foreground">
                      {service.priceUnit}
                    </span>
                  )}
                </div>

                {service.duration && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-5 h-5" />
                    <span>{service.duration}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Description complète */}
            {service.fullDescription && service.fullDescription.length > 0 && (
              <div className="prose prose-lg max-w-none mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Description détaillée
                </h2>
                <div className="text-muted-foreground">
                  <PortableText value={service.fullDescription} />
                </div>
              </div>
            )}

            {/* Prestations incluses */}
            {service.features && service.features.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Prestations incluses
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA */}
            <div className="pt-6 border-t border-border">
              <Button
                variant="hero"
                size="lg"
                className="w-full md:w-auto"
                onClick={handleContactClick}
              >
                Demander un devis gratuit
              </Button>
            </div>
          </div>

          {/* Informations supplémentaires */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2">
                Devis gratuit
              </h3>
              <p className="text-sm text-muted-foreground">
                Sans engagement
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2">
                Intervention rapide
              </h3>
              <p className="text-sm text-muted-foreground">
                Sous 48h
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;