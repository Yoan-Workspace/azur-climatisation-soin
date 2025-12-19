import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container-narrow section-padding">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Mentions Légales
          </h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Éditeur du site
              </h2>
              <p className="text-muted-foreground mb-4">
                Le présent site est édité par :<br />
                <strong>NG Climatisation</strong><br />
                 152 Chem. d'Altaïr,<br />
                 06610 La Gaude<br />
                Téléphone : 07 61 28 71 31<br />
                Email : ngclim06@gmail.com
              </p>
              <p className="text-muted-foreground">
                SIRET : 91825411100027<br />
                Responsable de la publication : Nicolas GARABEDIAN
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Hébergement
              </h2>
              <p className="text-muted-foreground">
                Ce site est hébergé par :<br />
                Vercel<br />
                <strong>Adresse: </strong>440 N Barranca Ave #4133,<br />
                Covina, CA 91723, USA<br />
                <strong>Contact: </strong> https://vercel.com/contact
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Propriété intellectuelle
              </h2>
              <p className="text-muted-foreground">
                L'ensemble des éléments constituant ce site (textes, graphismes, logiciels, 
                photographies, images, sons, vidéos, plans, noms, logos, marques, créations 
                et œuvres protégeables diverses, bases de données, etc.) ainsi que le site 
                lui-même, relèvent des législations françaises et internationales sur le 
                droit d'auteur et la propriété intellectuelle.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Données personnelles
              </h2>
              <p className="text-muted-foreground">
                Les informations recueillies via le formulaire de contact sont destinées 
                exclusivement à ClimAzur pour le traitement de votre demande. Conformément 
                au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression 
                de vos données.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Cookies
              </h2>
              <p className="text-muted-foreground">
                Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. 
                Ces cookies ne collectent pas de données personnelles à des fins commerciales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Contact
              </h2>
              <p className="text-muted-foreground">
                Pour toute question concernant ces mentions légales, vous pouvez nous 
                contacter à l'adresse : ngclim06@gmail.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
