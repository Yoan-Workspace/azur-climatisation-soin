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
    setIsMenuOpen(false)
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-narrow section-padding py-0 flex items-center justify-between h-20">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={imageLogo}
              alt="NG Clim Logo"
              className="h-24 w-auto object-contain rounded-lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-16">
            <button
              onClick={(e) => handleContactClick(e, "services")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button
              onClick={(e) => handleContactClick(e, "experience")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Expérience
            </button>
            <button
              onClick={(e) => handleContactClick(e, "zone")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Zone d'intervention
            </button>
            <button
              onClick={(e) => handleContactClick(e, "contact")}  // ✅ Passe directement la fonction
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
            <Link
              to="/realisations"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Réalisations
            </Link>
            <Link
              to="/tarifs"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Tarifs
            </Link>
            <div className="hidden md:flex items-center gap-4">
              <Button variant="hero" onClick={(e) => handleContactClick(e, "contact")}>
                Devis gratuit
              </Button>
            </div>

          </nav>



          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
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
            <Link
              to="/realisations"
              onClick={() => setIsMenuOpen(false)}
              className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Réalisations
            </Link>
            <button
              onClick={(e) => handleContactClick(e, "zone")}
              className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Zone d'intervention
            </button>
            <button
              onClick={(e) => handleContactClick(e, "contact")}
              className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Contact
            </button>
            <a href="tel:+33761287131" className="flex items-center gap-2 text-primary font-medium py-2">
              <Phone className="w-4 h-4" />
              07 61 28 71 31
            </a>
            <Button variant="hero" onClick={(e) => handleContactClick(e, "contact")} className="mt-2">
              Devis gratuit
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
