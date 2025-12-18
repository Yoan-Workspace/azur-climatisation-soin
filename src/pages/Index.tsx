import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Zone from "@/components/Zone";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { GoogleReviews } from "@/components/GoogleReviews";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        {/* Google Reviews */}
      <GoogleReviews />
        <Experience />
        <Zone />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
