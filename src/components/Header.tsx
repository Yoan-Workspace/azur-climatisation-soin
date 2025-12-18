import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-narrow section-padding py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">AC</span>
            </div>
            <span className="font-semibold text-lg text-foreground">ClimAzur</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Expérience
            </button>
            <button
              onClick={() => scrollToSection("zone")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Zone d'intervention
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+33600000000" className="flex items-center gap-2 text-primary font-medium">
              <Phone className="w-4 h-4" />
              06 00 00 00 00
            </a>
            <Button variant="hero" onClick={() => scrollToSection("contact")}>
              Devis gratuit
            </Button>
          </div>

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
              onClick={() => scrollToSection("services")}
              className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Expérience
            </button>
            <button
              onClick={() => scrollToSection("zone")}
              className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Zone d'intervention
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Contact
            </button>
            <a href="tel:+33600000000" className="flex items-center gap-2 text-primary font-medium py-2">
              <Phone className="w-4 h-4" />
              06 00 00 00 00
            </a>
            <Button variant="hero" onClick={() => scrollToSection("contact")} className="mt-2">
              Devis gratuit
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
