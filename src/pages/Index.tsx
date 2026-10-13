import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Zone from "@/components/Zone";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import { GoogleReviews } from "@/components/GoogleReviews";
import { Seo } from "@/components/Seo";
import { homeFaqs } from "@/data/cities";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="Nettoyage climatisation à Gardanne | NG Clim"
        description="NG Clim nettoie et désinfecte les climatisations à Gardanne, Aix-en-Provence, Bouc-Bel-Air, Meyreuil, Fuveau et dans les Bouches-du-Rhône. Devis gratuit."
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <GoogleReviews />
        <Experience />
        <Zone />
        <Faq
          title="Questions fréquentes"
          intro="Le tarif et la prestation sont les mêmes dans tout le secteur."
          items={homeFaqs}
        />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
