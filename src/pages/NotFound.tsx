import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, Phone } from "lucide-react";
import { Seo } from "@/components/Seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 : tentative d'accès à une route inexistante :", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Page introuvable (404) | NG Clim"
        description="La page demandée n'existe pas. Retrouvez le nettoyage et la désinfection de climatisation NG Clim dans les Alpes-Maritimes."
        noindex
      />
      <Header />
      <main className="flex min-h-[70vh] items-center justify-center px-6 pt-24 pb-16">
        <div className="text-center max-w-lg">
          <p className="text-7xl md:text-8xl font-bold text-gradient mb-4">404</p>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Cette page n'existe pas
          </h1>
          <p className="text-muted-foreground mb-8">
            Le lien est peut-être erroné ou la page a été déplacée. Revenez à l'accueil
            ou contactez NG Clim pour le nettoyage de votre climatisation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="hero" size="lg">
                <Home className="w-5 h-5" />
                Retour à l'accueil
              </Button>
            </Link>
            <a href="tel:+33660620574">
              <Button variant="hero-outline" size="lg">
                <Phone className="w-5 h-5" />
                06 60 62 05 74
              </Button>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
