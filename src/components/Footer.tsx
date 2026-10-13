import { Link } from "react-router-dom";
import imageLogo from "/src/assets/LogoNGClim.png";
import { cityPages } from "@/data/cities";

const DEVELOPER_URL = "https://yoanfreelancedev.netlify.app/";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-narrow section-padding py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
              src={imageLogo}
              alt="Logo NG Clim, spécialiste du nettoyage de climatisation"
              width={144}
              height={96}
              loading="lazy"
              decoding="async"
              className="h-20 w-auto object-contain"
            />
            </div>
            <p className="text-background/70">
              Spécialiste du nettoyage et de la désinfection de climatisations à Gardanne et dans le Pays d'Aix depuis plus de 10 ans.
            </p>
            <p className="text-background/70 mt-3">
              Place Jean Moulin<br />
              13320 Bouc-Bel-Air
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-background/70">
              <li>Nettoyage complet</li>
              <li>Dégraissage et désinfection</li>
              <li>Intervention à Gardanne, Aix-en-Provence, Bouc-Bel-Air, Meyreuil et Fuveau</li>
              <li>Prestation exclusivement dédiée au nettoyage</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Secteur</h4>
            <ul className="space-y-2 text-background/70">
              {cityPages.map((city) => (
                <li key={city.slug}>
                  <Link
                    to={`/nettoyage-climatisation/${city.slug}`}
                    className="hover:text-background transition-colors"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
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
            <p className="pt-4 text-xs">
              Site réalisé par{" "}
              <a
                href={DEVELOPER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium"
              >
                Yoan Freelance Dev
              </a>
            </p>
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
