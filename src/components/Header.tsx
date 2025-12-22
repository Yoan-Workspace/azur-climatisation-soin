import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import imageLogo from "/src/assets/LogoNGClim.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleContactClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();

    // Si on est déjà sur la page d'accueil
    if (location.pathname === '/') {
      // Scroll direct vers le formulaire
      scrollToSection(id);
    } else {
      // Sinon, navigue vers l'accueil puis scroll
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
            <img
              src={imageLogo}
              alt="NG Clim Logo"
              className="h-24 w-auto object-contain rounded-lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            <button
              onClick={(e) => handleContactClick(e, "services")}
              className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              Services
            </button>
            <button
              onClick={(e) => handleContactClick(e, "experience")}
              className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              Expérience
            </button>
            <button
              onClick={(e) => handleContactClick(e, "zone")}
              className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              Zone d'intervention
            </button>
            <Link
              to="/realisations"
              onClick={() => window.scrollTo(0, 0)}
              className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              Réalisations
            </Link>
            <Link
              to="/tarifs"
              onClick={() => window.scrollTo(0, 0)}
              className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              Tarifs
            </Link>
            <button
              onClick={(e) => handleContactClick(e, "contact")}
              className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              Contact
            </button>
            <Button variant="hero" onClick={(e) => handleContactClick(e, "contact")}>
              Devis gratuit
            </Button>
          </nav>

          {/* Mobile Menu Button - Aligné à droite */}
          <button
            className="md:hidden p-2 ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Menu déroulant sous le header */}
        {isMenuOpen && (
          <nav className="md:hidden absolute left-0 right-0 top-full bg-background/95 backdrop-blur-md border-b border-border shadow-lg animate-fade-in">
            <div className="px-6 py-4 flex flex-col gap-3 max-h-[calc(100vh-5rem)] overflow-y-auto">
              <button
                onClick={(e) => handleContactClick(e, "services")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Services
              </button>
              <button
                onClick={(e) => handleContactClick(e, "experience")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Expérience
              </button>
              <button
                onClick={(e) => handleContactClick(e, "zone")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Zone d'intervention
              </button>
              <Link
                to="/realisations"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Réalisations
              </Link>
              <Link
                to="/tarifs"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Tarifs
              </Link>
              <button
                onClick={(e) => handleContactClick(e, "contact")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Contact
              </button>
              <a 
                href="tel:+33761287131" 
                className="flex items-center gap-2 text-primary font-medium py-2"
              >
                <Phone className="w-4 h-4" />
                07 61 28 71 31
              </a>
              <Button 
                variant="hero" 
                onClick={(e) => handleContactClick(e, "contact")} 
                className="mt-2 w-full"
              >
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