import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import imageLogo from "/src/assets/LogoNGClim.png";

const PHONE_HREF = "tel:+33660620574";
const PHONE_LABEL = "06 60 62 05 74";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  const goToSection = (id: string) => {
    closeMenu();
    if (location.pathname === "/" && !location.search) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    navigate(`/#${id}`);
  };

  const linkClass = "text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap text-sm";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          <Link to="/" className="flex items-center shrink-0" onClick={() => window.scrollTo(0, 0)}>
            <img
              src={imageLogo}
              alt="Logo NG Clim, nettoyage de climatisation à Gardanne"
              width={144}
              height={96}
              decoding="async"
              className="h-16 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-5 lg:gap-7" aria-label="Navigation principale">
            <button type="button" onClick={() => goToSection("services")} className={linkClass}>
              Services
            </button>
            <button type="button" onClick={() => goToSection("zone")} className={linkClass}>
              Secteur
            </button>
            <Link to="/realisations" onClick={() => window.scrollTo(0, 0)} className={linkClass}>
              Réalisations
            </Link>
            <Link to="/tarifs" onClick={() => window.scrollTo(0, 0)} className={linkClass}>
              Tarifs
            </Link>
            <button type="button" onClick={() => goToSection("contact")} className={linkClass}>
              Contact
            </button>
            <a href={PHONE_HREF} className="hidden lg:inline-flex items-center gap-2 text-sm font-medium text-foreground">
              <Phone className="w-4 h-4 text-primary" />
              {PHONE_LABEL}
            </a>
            <Button variant="hero" onClick={() => goToSection("contact")}>
              Devis gratuit
            </Button>
          </nav>

          <div className="md:hidden flex items-center">
            <a href={PHONE_HREF} className="p-2 text-primary" aria-label={`Appeler le ${PHONE_LABEL}`}>
              <Phone className="w-5 h-5" />
            </a>
            <button
              type="button"
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden absolute left-0 right-0 top-full bg-background/95 backdrop-blur-md border-b border-border animate-fade-in" aria-label="Navigation mobile">
            <div className="px-6 py-4 flex flex-col gap-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
              <a href={PHONE_HREF} className="flex items-center gap-2 text-primary font-medium py-3">
                <Phone className="w-4 h-4" />
                {PHONE_LABEL}
              </a>
              <button type="button" onClick={() => goToSection("services")} className="text-left text-muted-foreground py-3">
                Services
              </button>
              <button type="button" onClick={() => goToSection("zone")} className="text-left text-muted-foreground py-3">
                Secteur
              </button>
              <Link to="/realisations" onClick={closeMenu} className="text-muted-foreground py-3">
                Réalisations
              </Link>
              <Link to="/tarifs" onClick={closeMenu} className="text-muted-foreground py-3">
                Tarifs
              </Link>
              <button type="button" onClick={() => goToSection("contact")} className="text-left text-muted-foreground py-3">
                Contact
              </button>
              <Button variant="hero" onClick={() => goToSection("contact")} className="mt-2 w-full">
                Devis gratuit
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
