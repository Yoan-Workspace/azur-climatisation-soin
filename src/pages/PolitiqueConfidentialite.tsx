import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container-narrow section-padding">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Politique de Confidentialité
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Collecte des données personnelles
              </h2>
              <p className="text-muted-foreground mb-4">
                Nous collectons les données personnelles que vous nous fournissez 
                volontairement via notre formulaire de contact :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone (facultatif)</li>
                <li>Type de client (particulier/professionnel)</li>
                <li>Contenu de votre message</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Utilisation des données
              </h2>
              <p className="text-muted-foreground">
                Vos données personnelles sont utilisées exclusivement pour :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Répondre à vos demandes de devis et de renseignements</li>
                <li>Vous contacter concernant nos services</li>
                <li>Améliorer la qualité de nos services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Conservation des données
              </h2>
              <p className="text-muted-foreground">
                Vos données personnelles sont conservées pour une durée maximale de 3 ans 
                à compter de notre dernier contact, conformément aux recommandations de la CNIL.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Partage des données
              </h2>
              <p className="text-muted-foreground">
                Nous ne vendons, n'échangeons ni ne louons vos données personnelles à des tiers. 
                Vos informations restent strictement confidentielles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Vos droits
              </h2>
              <p className="text-muted-foreground mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD), 
                vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Droit d'accès</strong> : obtenir une copie de vos données</li>
                <li><strong>Droit de rectification</strong> : corriger vos données inexactes</li>
                <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
                <li><strong>Droit à la limitation</strong> : limiter le traitement de vos données</li>
                <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
                <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Sécurité des données
              </h2>
              <p className="text-muted-foreground">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées 
                pour protéger vos données personnelles contre tout accès, modification, 
                divulgation ou destruction non autorisés.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Cookies
              </h2>
              <p className="text-muted-foreground">
                Notre site utilise uniquement des cookies techniques essentiels au bon 
                fonctionnement du site. Ces cookies ne collectent pas de données personnelles 
                à des fins de traçage ou de publicité.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Contact
              </h2>
              <p className="text-muted-foreground">
                Pour exercer vos droits ou pour toute question relative à cette politique 
                de confidentialité, vous pouvez nous contacter :<br /><br />
                <strong>Email</strong> : contact@climazur.fr<br />
                <strong>Téléphone</strong> : 06 00 00 00 00<br /><br />
                Vous pouvez également introduire une réclamation auprès de la CNIL 
                (Commission Nationale de l'Informatique et des Libertés) si vous estimez 
                que vos droits ne sont pas respectés.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
