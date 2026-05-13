import { Star, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const reviews = [
  {
    id: 1,
    author: "Yoan Yoan",
    rating: 5,
    text: "Entretien de climatisation au top !",
    date: "il y a 3 mois",
    avatar: "https://ui-avatars.com/api/?name=Yoan+Yoan&background=random"
  },
  {
    id: 2,
    author: "Alexis Lattugoni",
    rating: 5,
    text: "J'ai fait appel à la société NG Clim pour l'entretien de ma climatisation, je suis vraiment satisfait du résultat. Le nettoyage est impeccable. Je recommande ce professionnel sans problème.",
    date: "il y a 3 mois",
    avatar: "https://ui-avatars.com/api/?name=Alexis+Lattugoni&background=random"
  },
  {
    id: 3,
    author: "Kevin BK",
    rating: 5,
    text: "Excellente expérience avec cette société d'entretien de climatisation. Le technicien a été très professionnel, rigoureux et particulièrement soigneux.",
    date: "il y a 3 mois",
    avatar: "https://ui-avatars.com/api/?name=Kevin+BK&background=random"
  },
  {
    id: 4,
    author: "Thierry RODRIGUEZ",
    rating: 5,
    text: "Très très content de Nicolas. Ma clim avait besoin d'un entretien en profondeur.. le résultat est impeccable. Rien à redire. Travail très propre. Je recommande sans hésitation.",
    date: "il y a 5 mois",
    avatar: "https://ui-avatars.com/api/?name=Thierry+RODRIGUEZ&background=random"
  },
  {
    id: 5,
    author: "Benoit Martinet",
    rating: 5,
    text: "J'ai fait appel à NG Clim pour l'entretien de ma climatisation, et je suis très satisfait du service. Très ponctuel, professionnel et très réactif.",
    date: "il y a 10 mois",
    avatar: "https://ui-avatars.com/api/?name=Benoit+Martinet&background=random"
  },
  {
    id: 6,
    author: "Lili",
    rating: 5,
    text: "Intervention efficace. Nicolas est arrangeant et a trouvé une place dans son emploi du temps rapidement. N'hésitez pas à faire appel à lui.",
    date: "il y a 4 mois",
    avatar: "https://ui-avatars.com/api/?name=Lili&background=random"
  },
  {
    id: 7,
    author: "T-ierry D.",
    rating: 5,
    text: "Sympathique et professionnel. Ponctuel et bonne présentation. Très bon travail pour un tarif très honnête. Je recommande sans aucun souci.",
    date: "il y a 8 mois",
    avatar: "https://ui-avatars.com/api/?name=T-ierry+D&background=random"
  },
  {
    id: 8,
    author: "Alice Bftx",
    rating: 5,
    text: "Excellent entretien de notre clim réalisé par NG Clim, nettoyage très professionnel, je recommande fortement !",
    date: "il y a 3 mois",
    avatar: "https://ui-avatars.com/api/?name=Alice+Bftx&background=random"
  },
  {
    id: 9,
    author: "Hind Achniri",
    rating: 5,
    text: "J'ai fait appel à NG CLIM pour l'entretien de ma climatisation, et je suis vraiment satisfaite. Nicolas a été ponctuel, très professionnel et en plus très sympathique.",
    date: "il y a un an",
    avatar: "https://ui-avatars.com/api/?name=Hind+Achniri&background=random"
  },
  {
    id: 10,
    author: "Alexander AULONG",
    rating: 5,
    text: "Entretien effectué ce jour. Rien à redire. Professionnel, consciencieux et arrangeant. Je ne peux que recommander !",
    date: "il y a 2 mois",
    avatar: "https://ui-avatars.com/api/?name=Alexander+AULONG&background=random"
  },
  {
    id: 11,
    author: "Marie-agnes Dupont",
    rating: 5,
    text: "On a fait appel à NG Clim pour l'entretien de nos climatisations. Rien à redire : service au top, très disponible et sympathique. On recommande les yeux fermés !",
    date: "il y a 8 mois",
    avatar: "https://ui-avatars.com/api/?name=Marie-agnes+Dupont&background=random"
  },
  {
    id: 12,
    author: "Reda Bennaghmouch",
    rating: 5,
    text: "Il est intervenu pour l'entretien de mes climatiseurs, qui étaient vraiment très sales. Franchement, j'ai été super satisfait de son travail : il a tout laissé propre.",
    date: "il y a 11 mois",
    avatar: "https://ui-avatars.com/api/?name=Reda+Bennaghmouch&background=random"
  },
  {
    id: 13,
    author: "Greg Renauld",
    rating: 5,
    text: "Je sentais une odeur dans ma climatisation, je l'ai fait nettoyer par NG clim, impeccable, travail professionnel et soigné, je recommande.",
    date: "il y a 8 mois",
    avatar: "https://ui-avatars.com/api/?name=Greg+Renauld&background=random"
  },
  {
    id: 14,
    author: "Alain Deloin",
    rating: 5,
    text: "Prestation impeccable, intervention professionnelle et vraiment pas cher pour l'entretien de ma clim. Je n'hésiterai pas à refaire appel à NG clim.",
    date: "il y a un mois",
    avatar: "https://ui-avatars.com/api/?name=Alain+Deloin&background=random"
  },
  {
    id: 15,
    author: "Roger Benoit GORVIEN",
    rating: 5,
    text: "Connu NG Clim par le bouche à oreille et sincèrement je recommande les yeux fermés.",
    date: "il y a un jour",
    avatar: "https://ui-avatars.com/api/?name=Roger+Benoit+GORVIEN&background=random"
  },
];

const totalReviews = 24;
const averageRating = 5;

const googleBusinessUrl =
  "https://www.google.com/search?newwindow=1&sca_esv=0b1aadbb54d51ce1&sxsrf=AE3TifN62nA5pxzanYtHyvbJ1lupR6orxg:1766060570395&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E8ASj19jS3JlbljnrIVeDtm5p6SBDF7W7C-W_92UjvypsRWvYVrLA83CE1AVzqqLlZC5KfQWhc0FaR2Sl52-shkHkq_8&q=NG+Clim+Avis&sa=X&ved=2ahUKEwjP68ynkMeRAxXNITQIHb4kBUwQ0bkNegQIPRAD&biw=1680&bih=835&dpr=2";

const GoogleIcon = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
  <div className="review-card flex flex-col gap-3 bg-background border border-border rounded-2xl p-5 w-72 shrink-0 mx-3">
    {/* Header */}
    <div className="flex items-center gap-3">
      <img
        src={review.avatar}
        alt={review.author}
        className="w-10 h-10 rounded-full"
      />
      <div className="min-w-0">
        <p className="font-semibold text-sm text-foreground truncate">{review.author}</p>
        <div className="flex items-center gap-0.5 mt-0.5">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
    </div>

    {/* Text */}
    <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic line-clamp-4">
      "{review.text}"
    </p>

    {/* Footer */}
    <div className="flex items-center justify-between pt-2 border-t border-border">
      <span className="text-xs text-muted-foreground">{review.date}</span>
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <GoogleIcon />
        <span>Google</span>
      </div>
    </div>
  </div>
);

export const GoogleReviews = () => {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "LocalBusiness",
    "name": "NG Clim",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "24"
    },
    "areaServed": "Côte d'Azur",
    "serviceType": "Entretien de climatisation"
  };

  // On duplique les avis pour le défilement infini
  const doubled = [...reviews, ...reviews];

  return (
    <section id="reviews" className="py-20 bg-secondary/30 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* En-tête */}
      <div className="container mx-auto px-4 text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Avis Clients NG Clim
        </h2>
        <p className="text-muted-foreground mb-6">
          Ils nous font confiance pour l'entretien de leur clim à Nice, Antibes, Cagnes-sur-Mer, Saint-Laurent-du-Var et La Gaude.
        </p>
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-6 h-6 ${
                  i < Math.floor(averageRating)
                    ? "fill-yellow-400 text-yellow-400"
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
          className="inline-flex items-center gap-2 text-accent hover:underline text-sm"
        >
          Voir tous les avis sur Google
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Carrousel — fade sur les bords */}
      <div className="relative">
        {/* Masques de fondu gauche/droite */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-secondary/30 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-secondary/30 to-transparent" />

        {/* Piste défilante */}
        <div className="flex marquee-track">
          {doubled.map((review, index) => (
            <ReviewCard key={`${review.id}-${index}`} review={review} />
          ))}
        </div>
      </div>

      {/* Bouton statique */}
      <div className="text-center mt-10">
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

      <style>{`
        .marquee-track {
          width: max-content;
          animation: marquee 100s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .review-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .marquee-track:hover .review-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }
      `}</style>
    </section>
  );
};