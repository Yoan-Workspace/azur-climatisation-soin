import { Phone, Mail, Instagram, Facebook, Camera, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import imageLogo from "/src/assets/LogoNGClim.png";
import confetti from 'canvas-confetti';
import { useState } from "react";

const Footer = () => {
  const [showCopied, setShowCopied] = useState(false);

  const currentYear = new Date().getFullYear();
  const handleHeartClick = (e: React.MouseEvent) => {
    // Crée un effet confetti de cœurs
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    const heart = confetti.shapeFromText('❤️');
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x, y },
      colors: ['#ff0000', '#ff69b4', '#ff1493', '#ff6b9d'],
      shapes: [heart],
      scalar: 1.2,
      gravity: 0.8,
      ticks: 200
    });

    // Ajoute aussi quelques cœurs qui montent
    confetti({
      particleCount: 30,
      angle: 90,
      spread: 45,
      origin: { x, y },
      colors: ['#ff0000', '#ff69b4', '#ff1493'],
      shapes: [heart],
      scalar: 0.8,
      gravity: 0.7,
      ticks: 150
    });
  };

  const handleEmailClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    const email = 'yoansoussand@gmail.com';
    
    // Copie l'email dans le presse-papier
    try {
      await navigator.clipboard.writeText(email);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      // Si la copie échoue, ouvre le client email
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-narrow section-padding py-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
              src={imageLogo}
              alt="NG Clim Logo"
              className="h-24 w-auto object-contain rounded-lg"
            />
            </div>
            <p className="text-background/70">
              Expert en entretien et nettoyage de climatisations sur la Côte d'Azur depuis plus de 10 ans.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-background/70">
              <li>Nettoyage complet</li>
              <li>Entretien préventif</li>
              <li>Désinfection</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Informations légales</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/mentions-legales" className="text-background/70 hover:text-background transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/politique-confidentialite" className="text-background/70 hover:text-background transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
          <p>© {currentYear} NG Climatisation - Tous droits réservés</p>
          <div>
            <ul className="space-y-3">
              {/* Développeur */}
              <li className="pt-4 mt-4 border-t border-primary-foreground/20">
                <div className="flex items-center justify-center gap-2 text-primary-foreground/60 text-xs">
                 <button
                  onClick={handleHeartClick}
                  className="flex flex-col items-center text-red-500 hover:scale-125 transition-transform cursor-pointer focus:outline-none"
                  aria-label="Cliquez pour des confettis !"
                  >
                  <span>Développé avec</span>
                    <Heart className="w-4 h-4 fill-current mt-1" />
                  </button>
                  <span>par</span>
                  <div className="relative inline-block">
                    <button
                      onClick={handleEmailClick}
                      className="text-accent hover:underline cursor-pointer font-medium"
                    >
                     Yoan Soussand - yoansoussand@gmail.com
                    </button>
                    {showCopied && (
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-2 py-1 rounded text-xs whitespace-nowrap animate-fade-in">
                        ✓ Email copié !
                      </span>
                    )}
                  </div>
                </div>
              </li>
            </ul>
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
