import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Zone from "@/components/Zone";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { GoogleReviews } from "@/components/GoogleReviews";
import { ChevronDown } from "lucide-react";

const Index = () => {
  const [showScrollButton, setShowScrollButton] = useState(true);

  const scrollToNextSection = () => {
    // Liste des sections dans l'ordre
    const sections = ["services", "reviews", "experience", "zone", "contact"];
    
    // Trouver la section actuelle visible
    let nextSectionIndex = 0;
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    for (let i = 0; i < sections.length; i++) {
      const element = document.getElementById(sections[i]);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        
        // Si on n'a pas encore dépassé cette section
        if (scrollPosition < elementTop + rect.height / 2) {
          nextSectionIndex = i;
          break;
        }
      }
    }
    
    const nextSection = document.getElementById(sections[nextSectionIndex]);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Détecter le scroll pour masquer le bouton en bas de page
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Masquer le bouton si on est proche du bas (200px avant la fin)
      if (scrollTop + windowHeight >= documentHeight - 200) {
        setShowScrollButton(false);
      } else {
        setShowScrollButton(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Vérifier l'état initial
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <GoogleReviews />
        <Experience />
        <Zone />
        <ContactForm />
      </main>
      <Footer />

      {/* Bouton de scroll fixe */}
      {showScrollButton && (
        <button
          onClick={scrollToNextSection}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 text-foreground hover:text-primary transition-all group bg-background/80 backdrop-blur-sm px-4 py-3 rounded-full shadow-lg hover:shadow-xl"
          aria-label="Défiler vers la section suivante"
        >
         
          <ChevronDown className="w-5 h-5 animate-bounce-slow" />
        </button>
      )}

      <style>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;