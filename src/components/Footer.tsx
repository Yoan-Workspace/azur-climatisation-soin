import { Link } from "react-router-dom";
import imageLogo from "/src/assets/LogoNGClim.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
