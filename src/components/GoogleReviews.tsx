import { Star, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const reviews = [
  {
    id: 1,
    author: "Thierry RODRIGUEZ",
    rating: 5,
    text: "Très très content de Nicolas Ma clim avait besoin d un entretien en profondeur .. le résultat est impeccable.. Rien a re dire ... Travail très propre... Résultat au rendez vous Je recommande sans hésitation...",
    date: "il y a 3 semaines",
    avatar: "https://ui-avatars.com/api/?name=Thierry+RODRIGUEZ&background=random"
  },
  {
    id: 2,
    author: "T-ierry D.",
    rating: 5,
    text: "Sympathique et professionnel. Ponctuel et bonne présentation. Très bon travail pour un tarif très honnête. Je recommande sans aucun souci. Un grand merci et à l'année prochaine pour l'entretien annuel de la climatisation.",
    date: "il y a 4 mois",
    avatar: "https://ui-avatars.com/api/?name=T-ierry+D&background=random"
  },
  {
    id: 3,
    author: "Marie-agnes Dupont",
    rating: 5,
    text: "On a fait appel à NG Clim pour l'entretien de nos climatisations. Rien à redire: Service au top, très disponible et sympathique. On recommande les yeux fermés !",
    date: "Il y a 4 mois",
    avatar: "https://ui-avatars.com/api/?name=Marie-agnes+Dupont&background=random"
  }
];

// Note moyenne et nombre total d'avis
const totalReviews = 11; 
const averageRating = 5;

export const GoogleReviews = () => {
 
  const googleBusinessUrl = "https://www.google.com/search?newwindow=1&sca_esv=0b1aadbb54d51ce1&sxsrf=AE3TifN62nA5pxzanYtHyvbJ1lupR6orxg:1766060570395&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E8ASj19jS3JlbljnrIVeDtm5p6SBDF7W7C-W_92UjvypsRWvYVrLA83CE1AVzqqLlZC5KfQWhc0FaR2Sl52-shkHkq_8&q=NG+Clim+Avis&sa=X&ved=2ahUKEwjP68ynkMeRAxXNITQIHb4kBUwQ0bkNegQIPRAD&biw=1680&bih=835&dpr=2";

  // Données structurées pour Google (Schema.org)
  // Cela permet à Google de comprendre que ton site a une note de 5/5
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "LocalBusiness",
    "name": "NG Clim",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "11"
    },
    "areaServed": "Côte d'Azur",
    "serviceType": "Entretien de climatisation"
  };

  return (
    <section className="py-20 bg-secondary/30">

      {/* Ajout du script JSON-LD invisible pour l'utilisateur mais lu par Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4">
        {/* En-tête avec statistiques */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Avis Clients NG Clim
          </h2>
          <p className="text-muted-foreground mb-6">Ils nous font confiance pour l'entretien de leur clim à Nice, Antibes, Cagnes-sur-mer et La Gaude.</p>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < Math.floor(averageRating)
                      ? "fill-accent text-accent"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">{averageRating}</span>
            <span className="text-muted-foreground">({totalReviews} avis)</span>
          </div>
          <a
            href={googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline"
          >
            Voir tous les avis sur Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Grille des avis */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <Card key={review.id} className="p-6 elegant-shadow hover:shadow-xl transition-smooth flex flex-col">
              {/* En-tête avec avatar et nom */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <p className="font-medium text-foreground">{review.author}</p>
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Texte de l'avis */}
              <p className="text-muted-foreground mb-4 italic flex-1">
                "{review.text}"
              </p>

              {/* Date */}
              <p className="text-sm text-muted-foreground">{review.date}</p>

              {/* Badge Google */}
              <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span>Posté sur Google</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Bouton pour laisser un avis */}
        <div className="text-center mt-12">
          <a
            href={googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg">
              Laisser un avis
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
