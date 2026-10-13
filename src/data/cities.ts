export const offers = [
  {
    name: "Entretien de climatisation",
    price: 99,
    detail: "Nettoyage régulier d'une unité, pour garder un air sain au quotidien.",
  },
  {
    name: "Nettoyage complet",
    price: 149,
    detail: "Nettoyage en profondeur, dégraissage et désinfection de l'appareil.",
  },
] as const;

export type CityFaq = {
  question: string;
  answer: string;
};

export type CityPlace = {
  name: string;
  text: string;
};

export type CityPageData = {
  slug: string;
  name: string;
  postalCode: string;
  title: string;
  description: string;
  lead: string;
  paragraphs: string[];
  places: CityPlace[];
  audience: string;
  faqs: CityFaq[];
  nearby: string[];
};

export const zoneTowns: { name: string; slug: string }[] = [
  { name: "Gardanne", slug: "gardanne" },
  { name: "Aix-en-Provence", slug: "aix-en-provence" },
  { name: "Bouc-Bel-Air", slug: "bouc-bel-air" },
  { name: "Simiane-Collongue", slug: "simiane-collongue" },
  { name: "Mimet", slug: "mimet" },
  { name: "Fuveau", slug: "fuveau" },
  { name: "Meyreuil", slug: "meyreuil" },
  { name: "Gréasque", slug: "greasque" },
  { name: "Saint-Savournin", slug: "saint-savournin" },
  { name: "Cabriès", slug: "cabries" },
  { name: "Rousset", slug: "rousset" },
  { name: "Peynier", slug: "peynier" },
  { name: "Châteauneuf-le-Rouge", slug: "chateauneuf-le-rouge" },
  { name: "Le Tholonet", slug: "le-tholonet" },
  { name: "Luynes", slug: "luynes" },
  { name: "Les Milles", slug: "les-milles" },
  { name: "Ventabren", slug: "ventabren" },
  { name: "Les Pennes-Mirabeau", slug: "les-pennes-mirabeau" },
  { name: "Septèmes-les-Vallons", slug: "septemes-les-vallons" },
  { name: "La Bouilladisse", slug: "la-bouilladisse" },
  { name: "Peypin", slug: "peypin" },
  { name: "Trets", slug: "trets" },
  { name: "Éguilles", slug: "eguilles" },
];

export const cityPages: CityPageData[] = [
  {
    slug: "gardanne",
    name: "Gardanne",
    postalCode: "13120",
    title: "Nettoyage climatisation Gardanne | NG Clim",
    description:
      "Nettoyage et désinfection de climatisation à Gardanne : centre-ville, Biver et Valabre. Même tarif que dans le Pays d'Aix, devis gratuit, intervention sur rendez-vous.",
    lead:
      "J'interviens à Gardanne pour nettoyer et désinfecter les climatisations des maisons, des appartements et des locaux professionnels. Le prix dépend de la prestation, pas de la commune.",
    paragraphs: [
      "Gardanne est située entre Aix-en-Provence et Marseille. Les étés y durent longtemps, et les splits tournent souvent plusieurs mois sans interruption. Poussière, humidité et dépôts s'accumulent alors dans les filtres, la turbine et le bac à condensats. L'air devient moins agréable, et une odeur peut apparaître dès la mise en route.",
      "Un nettoyage remet l'appareil en état d'usage sans le remplacer. J'interviens sur les splits muraux, les consoles et les systèmes gainables lorsqu'ils sont accessibles. La prestation reste centrée sur l'hygiène : dégraissage, nettoyage et désinfection.",
      "Les rendez-vous se prennent du lundi au samedi, entre 8 h et 19 h. Après votre message, je réponds sous 24 h avec un devis clair avant le passage.",
    ],
    places: [
      {
        name: "Centre-ville",
        text: "Appartements et commerces de proximité, souvent équipés d'un ou deux splits.",
      },
      {
        name: "Biver",
        text: "Maisons et petits collectifs, avec parfois un multi-split pour plusieurs pièces.",
      },
      {
        name: "Valabre",
        text: "Quartiers résidentiels autour de Valabre, où les unités tournent tout l'été.",
      },
    ],
    audience:
      "À Gardanne, la plupart des demandes viennent de particuliers. J'interviens aussi dans les bureaux et les commerces qui souhaitent un nettoyage planifié, sans attendre qu'une odeur s'installe.",
    faqs: [
      {
        question: "Intervenez-vous dans tout Gardanne, y compris à Biver ?",
        answer:
          "Oui. J'interviens sur l'ensemble de la commune : centre-ville, Biver, Valabre et les quartiers résidentiels. Le déplacement se fait sur rendez-vous.",
      },
      {
        question: "Le tarif est-il plus élevé à Gardanne qu'à Aix-en-Provence ?",
        answer:
          "Non. L'entretien est à 99€ et le nettoyage complet à 149€, à Gardanne comme dans le reste du secteur. Le devis confirme le montant avant l'intervention.",
      },
      {
        question: "Quels appareils pouvez-vous nettoyer ?",
        answer:
          "Les splits muraux, les consoles et les gainables accessibles. Indiquez le nombre d'unités dans votre message pour que le devis corresponde à l'installation.",
      },
    ],
    nearby: ["aix-en-provence", "bouc-bel-air", "simiane-collongue", "meyreuil", "fuveau", "greasque"],
  },
  {
    slug: "aix-en-provence",
    name: "Aix-en-Provence",
    postalCode: "13100",
    title: "Nettoyage climatisation Aix-en-Provence | NG Clim",
    description:
      "Nettoyage et désinfection de climatisation à Aix-en-Provence : centre, Jas-de-Bouffan, Les Milles et La Duranne. Tarif identique au reste du Pays d'Aix, devis gratuit.",
    lead:
      "NG Clim nettoie et désinfecte les climatisations à Aix-en-Provence, des appartements du centre aux maisons de la périphérie. La prestation et le tarif sont les mêmes qu'à Gardanne.",
    paragraphs: [
      "À Aix, la climatisation fonctionne du printemps jusqu'à l'automne, dans les logements comme dans les bureaux. Un split peu entretenu accumule poussières et humidité. Le souffle devient moins franc, et certaines pièces prennent une odeur de renfermé à l'allumage.",
      "Le centre historique n'a pas les mêmes installations que Les Milles ou La Duranne. En ville, il s'agit souvent d'un split d'appartement. En périphérie, les maisons et les locaux d'activité comptent parfois plusieurs unités. Le devis part du nombre d'appareils et de leur accessibilité, pas du quartier.",
      "Je me déplace sur rendez-vous, du lundi au samedi. Vous recevez le montant avant le passage, au même barème que sur le reste du Pays d'Aix.",
    ],
    places: [
      {
        name: "Centre",
        text: "Appartements et petits locaux, avec un accès parfois plus contraint.",
      },
      {
        name: "Jas-de-Bouffan et Encagnane",
        text: "Logements familiaux et résidences, souvent en multi-split.",
      },
      {
        name: "Les Milles et Pont-de-l'Arc",
        text: "Maisons et activités, où plusieurs unités desservent le même bâtiment.",
      },
      {
        name: "La Duranne",
        text: "Bureaux et locaux professionnels qui ont besoin d'un passage planifié.",
      },
    ],
    audience:
      "Les demandes aixoises viennent autant des particuliers que des professionnels : un appartement à rafraîchir avant l'été, ou un parc de splits à nettoyer dans des bureaux.",
    faqs: [
      {
        question: "Vous déplacez-vous aux Milles et à Luynes ?",
        answer:
          "Oui. Les Milles et Luynes font partie des secteurs couverts à Aix-en-Provence, au même titre que le centre, Jas-de-Bouffan, Encagnane, Pont-de-l'Arc et La Duranne.",
      },
      {
        question: "Un appartement en centre-ville est-il facturé plus cher ?",
        answer:
          "Non. Le tarif ne change pas selon le quartier. L'entretien est à 99€ et le nettoyage complet à 149€. Seul le nombre d'unités fait varier le devis.",
      },
      {
        question: "Pouvez-vous intervenir dans des bureaux à La Duranne ?",
        answer:
          "Oui, sur rendez-vous, pour un nettoyage et une désinfection des unités accessibles. Précisez le nombre de splits afin d'organiser le passage.",
      },
    ],
    nearby: ["gardanne", "meyreuil", "le-tholonet", "les-milles", "eguilles", "cabries"],
  },
  {
    slug: "bouc-bel-air",
    name: "Bouc-Bel-Air",
    postalCode: "13320",
    title: "Nettoyage climatisation Bouc-Bel-Air | NG Clim",
    description:
      "Nettoyage et désinfection de climatisation à Bouc-Bel-Air, pour les maisons et les locaux professionnels. Même tarif qu'à Gardanne et à Aix-en-Provence.",
    lead:
      "J'interviens à Bouc-Bel-Air pour le nettoyage et la désinfection des climatisations. La commune est toute proche de Gardanne : le déplacement et le tarif restent ceux du reste du secteur.",
    paragraphs: [
      "Bouc-Bel-Air est une commune surtout résidentielle, entre Gardanne et Aix-en-Provence. Les climatisations y équipent en majorité des maisons, parfois avec un split par niveau. Quand l'appareil a tourné tout l'été, les filtres se chargent et le bac à condensats finit par garder l'humidité.",
      "Le nettoyage se fait sur place, sans déposer l'installation. Je traite les unités accessibles : splits muraux, consoles et gainables. L'objectif est simple : un air plus sain et un appareil propre, avec un montant connu à l'avance.",
      "Comme le trajet depuis Gardanne est court, les rendez-vous s'organisent facilement dans la semaine, du lundi au samedi.",
    ],
    places: [
      {
        name: "Le village",
        text: "Maisons de village et logements à proximité du centre.",
      },
      {
        name: "Quartiers résidentiels",
        text: "Pavillons équipés d'un ou plusieurs splits pour le séjour et les chambres.",
      },
      {
        name: "Locaux d'activité",
        text: "Petites entreprises installées entre Gardanne et Aix, sur rendez-vous.",
      },
    ],
    audience:
      "La demande locale concerne surtout les particuliers. Un passage peut aussi être prévu pour un commerce ou un bureau lorsque plusieurs unités doivent être nettoyées le même jour.",
    faqs: [
      {
        question: "Le déplacement jusqu'à Bouc-Bel-Air est-il un supplément ?",
        answer:
          "Le barème est le même qu'à Gardanne : 99€ pour l'entretien et 149€ pour le nettoyage complet. Le devis envoyé avant le rendez-vous confirme le montant de la prestation.",
      },
      {
        question: "Intervenez-vous aussi vers Simiane-Collongue ?",
        answer:
          "Oui, Simiane-Collongue est dans la zone de déplacement. La page de Bouc-Bel-Air couvre la commune elle-même ; les communes voisines sont indiquées dans la zone d'intervention.",
      },
      {
        question: "Combien d'unités peut-on traiter dans une maison ?",
        answer:
          "Autant que l'installation en compte, dès lors que les unités sont accessibles. Indiquez le nombre de splits dans votre demande pour caler la durée du passage.",
      },
    ],
    nearby: ["gardanne", "simiane-collongue", "cabries", "aix-en-provence"],
  },
  {
    slug: "meyreuil",
    name: "Meyreuil",
    postalCode: "13590",
    title: "Nettoyage climatisation Meyreuil | NG Clim",
    description:
      "Nettoyage et désinfection de climatisation à Meyreuil, au village et au Canet. Prestation et tarif identiques à ceux de Gardanne et d'Aix-en-Provence.",
    lead:
      "NG Clim se déplace à Meyreuil pour nettoyer et désinfecter les climatisations des maisons et des locaux professionnels. Le prix est le même que dans les communes voisines.",
    paragraphs: [
      "Meyreuil s'étend entre Gardanne, Aix-en-Provence et Châteauneuf-le-Rouge. Le village et le hameau du Canet comptent beaucoup de maisons où la climatisation reste en service une grande partie de l'année. Un entretien trop espacé se voit assez vite : souffle plus faible, traces d'humidité, odeur à l'ouverture du volet.",
      "J'interviens directement sur l'unité, pour un nettoyage des filtres, de la turbine et du bac, suivi d'une désinfection. Rien n'est facturé différemment parce que le logement est à Meyreuil plutôt qu'à Gardanne.",
      "Le passage se cale sur rendez-vous. Une réponse est apportée sous 24 h, avec le détail du tarif avant toute intervention.",
    ],
    places: [
      {
        name: "Le village",
        text: "Maisons du centre et logements juste autour.",
      },
      {
        name: "Le Canet",
        text: "Hameau résidentiel, avec des installations souvent individuelles.",
      },
      {
        name: "Vers Châteauneuf-le-Rouge",
        text: "Pavillons de la plaine, faciles à grouper sur une même vacation.",
      },
    ],
    audience:
      "Les interventions à Meyreuil concernent principalement des particuliers. Les professionnels du secteur peuvent aussi regrouper plusieurs unités sur un seul rendez-vous.",
    faqs: [
      {
        question: "Vous venez jusqu'au Canet ?",
        answer:
          "Oui. Le village de Meyreuil et le hameau du Canet sont couverts, ainsi que les maisons situées vers Châteauneuf-le-Rouge.",
      },
      {
        question: "Faut-il prévoir un tarif différent pour Meyreuil ?",
        answer:
          "Non. L'entretien reste à 99€ et le nettoyage complet à 149€, comme à Gardanne, Aix-en-Provence, Bouc-Bel-Air et Fuveau.",
      },
      {
        question: "À quel moment faire nettoyer la climatisation ?",
        answer:
          "Le plus utile est un passage avant la saison chaude, ou dès qu'une odeur apparaît. Un rythme d'une fois par an convient à la plupart des logements.",
      },
    ],
    nearby: ["gardanne", "aix-en-provence", "chateauneuf-le-rouge", "le-tholonet", "fuveau"],
  },
  {
    slug: "fuveau",
    name: "Fuveau",
    postalCode: "13710",
    title: "Nettoyage climatisation Fuveau | NG Clim",
    description:
      "Nettoyage et désinfection de climatisation à Fuveau : centre, La Barque et Les Thérons. Même prestation et même tarif que dans le reste du Pays d'Aix.",
    lead:
      "J'interviens à Fuveau pour le nettoyage et la désinfection des climatisations, principalement dans les maisons. La prestation est la même qu'à Gardanne, pour le même tarif.",
    paragraphs: [
      "Fuveau est une commune résidentielle, au contact de la Sainte-Victoire. Les étés y sont chauds et les climatisations des pavillons fonctionnent longtemps. Dans une maison, un split oublié une saison de plus finit par brasser un air chargé, surtout si les filtres n'ont pas été ouverts depuis l'installation.",
      "Le travail se fait au domicile : nettoyage des éléments accessibles, dégraissage et désinfection. Je ne facture pas la commune à part. Vous connaissez le montant grâce au devis, avant le rendez-vous.",
      "Les créneaux vont du lundi au samedi, de 8 h à 19 h. Un message suffit pour indiquer le nombre d'unités et le quartier.",
    ],
    places: [
      {
        name: "Centre",
        text: "Maisons du village et logements à proximité des commerces.",
      },
      {
        name: "La Barque",
        text: "Secteur de la gare et des habitations alentour.",
      },
      {
        name: "Les Thérons",
        text: "Quartier résidentiel, avec des installations individuelles.",
      },
    ],
    audience:
      "À Fuveau, il s'agit presque toujours de particuliers en maison. Si plusieurs splits équipent le logement, ils peuvent être traités au cours du même passage.",
    faqs: [
      {
        question: "Intervenez-vous à La Barque et aux Thérons ?",
        answer:
          "Oui. Le centre de Fuveau, La Barque et Les Thérons sont bien dans la tournée, au même titre que le reste de la commune.",
      },
      {
        question: "Le prix change-t-il parce que Fuveau est un peu plus loin ?",
        answer:
          "Non. L'entretien est à 99€ et le nettoyage complet à 149€, comme à Gardanne et dans les autres communes du secteur.",
      },
      {
        question: "Que faut-il préparer avant le passage ?",
        answer:
          "Rien de particulier, si l'unité est accessible. Le nombre de splits et la commune suffisent pour établir le devis.",
      },
    ],
    nearby: ["gardanne", "greasque", "peynier", "rousset", "meyreuil"],
  },
  {
    slug: "simiane-collongue",
    name: "Simiane-Collongue",
    postalCode: "13109",
    title: "Nettoyage climatisation Simiane-Collongue | NG Clim",
    description:
      "Nettoyage et désinfection de climatisation à Simiane-Collongue. Même tarif qu'à Gardanne et à Bouc-Bel-Air, devis gratuit, intervention sur rendez-vous.",
    lead:
      "J'interviens à Simiane-Collongue pour nettoyer et désinfecter les climatisations des maisons. La commune est entre Gardanne et Bouc-Bel-Air, et le tarif ne change pas.",
    paragraphs: [
      "Simiane-Collongue est un village installé sur la colline. Les logements sont surtout des maisons, souvent exposées au soleil une grande partie de l'après-midi. Les splits y tournent longtemps l'été, et les filtres se chargent plus vite lorsque les fenêtres restent ouvertes le soir.",
      "Le passage se fait sur rendez-vous, du lundi au samedi. Le devis reprend le nombre d'unités, pas le fait d'être sur les hauteurs du village.",
    ],
    places: [
      { name: "Le village", text: "Maisons du centre et logements juste autour de l'église." },
      { name: "Les versants", text: "Pavillons en contrebas, avec souvent un split par niveau." },
    ],
    audience:
      "À Simiane-Collongue, les demandes viennent de particuliers. Un commerce du village peut aussi être traité dans le même créneau.",
    faqs: [
      {
        question: "Vous montez jusqu'au village de Simiane-Collongue ?",
        answer: "Oui. Le village et les quartiers résidentiels en contrebas sont couverts, au même titre que Gardanne et Bouc-Bel-Air.",
      },
      {
        question: "Le tarif est-il le même qu'à Gardanne ?",
        answer: "Oui. L'entretien est à 99€ et le nettoyage complet à 149€. Le devis confirme le montant avant le rendez-vous.",
      },
      {
        question: "Faut-il un accès particulier pour une maison en pente ?",
        answer: "Il suffit que l'unité soit accessible. Précisez le nombre de splits dans votre message.",
      },
    ],
    nearby: ["gardanne", "bouc-bel-air", "mimet", "cabries"],
  },
  {
    slug: "mimet",
    name: "Mimet",
    postalCode: "13105",
    title: "Nettoyage climatisation Mimet | NG Clim",
    description:
      "Nettoyage et désinfection de climatisation à Mimet, au nord de Gardanne. Prestation et tarif identiques au reste du secteur.",
    lead:
      "NG Clim se déplace à Mimet pour le nettoyage et la désinfection des climatisations. C'est un petit village au nord de Gardanne, et le prix reste celui du secteur.",
    paragraphs: [
      "Mimet compte surtout des maisons, posées entre Gardanne, Simiane-Collongue et Gréasque. L'été, la climatisation compense des journées chaudes et des nuits qui descendent peu. Un appareil non ouvert depuis une saison brasse alors un air plus lourd, avec parfois une odeur au démarrage.",
      "J'interviens sur les splits muraux, les consoles et les gainables accessibles. La réponse au message arrive sous 24 h, avec le montant avant le passage.",
    ],
    places: [
      { name: "Le village", text: "Maisons du centre et rues autour de la mairie." },
      { name: "Les écarts", text: "Pavillons un peu à l'écart, vers Gardanne ou Gréasque." },
    ],
    audience:
      "Les interventions à Mimet concernent des particuliers en maison. Plusieurs unités d'un même logement sont traitées au cours du même rendez-vous.",
    faqs: [
      {
        question: "Mimet est-il bien dans votre secteur ?",
        answer: "Oui. Mimet est au nord de Gardanne, entre Simiane-Collongue et Gréasque, et fait partie des déplacements habituels.",
      },
      {
        question: "Y a-t-il un supplément pour Mimet ?",
        answer: "Non. L'entretien reste à 99€ et le nettoyage complet à 149€, comme dans les communes voisines.",
      },
      {
        question: "Puis-je grouper deux splits le même jour ?",
        answer: "Oui. Indiquez le nombre d'unités pour que le devis et la durée du passage correspondent.",
      },
    ],
    nearby: ["gardanne", "simiane-collongue", "greasque", "saint-savournin"],
  },
  {
    slug: "greasque",
    name: "Gréasque",
    postalCode: "13850",
    title: "Nettoyage climatisation Gréasque | NG Clim",
    description:
      "Nettoyage et désinfection de climatisation à Gréasque. Même tarif qu'à Gardanne et à Fuveau, intervention sur rendez-vous.",
    lead:
      "J'interviens à Gréasque pour nettoyer et désinfecter les climatisations des maisons et des petits locaux. Le tarif est le même qu'à Gardanne.",
    paragraphs: [
      "Gréasque est un village de l'ancien bassin minier, à l'est de Gardanne. Les maisons et les petits collectifs y sont nombreux, et la climatisation fonctionne souvent de mai à septembre. Les filtres retiennent la poussière des journées sèches, et le bac à condensats garde l'humidité.",
      "Le nettoyage se fait sur place. Je ne facture pas la commune à part : le devis dépend du nombre d'appareils et de la prestation choisie.",
    ],
    places: [
      { name: "Le centre", text: "Logements du village et commerces de proximité." },
      { name: "Les quartiers résidentiels", text: "Maisons vers Fuveau, Gardanne et La Bouilladisse." },
    ],
    audience:
      "À Gréasque, il s'agit surtout de particuliers. Un local professionnel du village peut être ajouté au planning de la semaine.",
    faqs: [
      {
        question: "Vous venez à Gréasque depuis Gardanne ?",
        answer: "Oui. Gréasque est dans la zone, avec Fuveau, Mimet et La Bouilladisse. Le rendez-vous se prend du lundi au samedi.",
      },
      {
        question: "Le prix change-t-il à Gréasque ?",
        answer: "Non. Comptez 99€ pour l'entretien et 149€ pour le nettoyage complet. Le devis est envoyé avant l'intervention.",
      },
      {
        question: "Que faut-il indiquer dans le message ?",
        answer: "La commune, le nombre d'unités et, si vous le savez, le type d'appareil : split, console ou gainable.",
      },
    ],
    nearby: ["gardanne", "fuveau", "mimet", "la-bouilladisse", "saint-savournin"],
  },
  {
    slug: "saint-savournin",
    name: "Saint-Savournin",
    postalCode: "13119",
    title: "Nettoyage climatisation Saint-Savournin | NG Clim",
    description:
      "Nettoyage et désinfection de climatisation à Saint-Savournin. Tarif identique à celui de Gardanne, Mimet et Gréasque.",
    lead:
      "NG Clim intervient à Saint-Savournin pour le nettoyage et la désinfection des climatisations. La commune est petite, entre Mimet et La Bouilladisse, et le tarif reste le même.",
    paragraphs: [
      "Saint-Savournin est un village résidentiel. Les climatisations équipent des maisons, parfois un seul split pour le séjour, parfois un second pour les chambres. Quand l'appareil a peu été entretenu, l'odeur apparaît dès les premières chaleurs.",
      "Je passe sur rendez-vous. Le créneau est simple à caler avec les communes voisines, ce qui permet souvent une intervention dans la semaine.",
    ],
    places: [
      { name: "Le village", text: "Maisons du centre et abords immédiats." },
      { name: "Vers Mimet et La Bouilladisse", text: "Pavillons situés sur les routes qui relient les villages." },
    ],
    audience:
      "Les demandes à Saint-Savournin viennent de particuliers. Le passage couvre toutes les unités accessibles du logement.",
    faqs: [
      {
        question: "Saint-Savournin est-il couvert ?",
        answer: "Oui, avec Mimet, Gréasque, La Bouilladisse et Peypin. L'intervention se fait à domicile.",
      },
      {
        question: "Le barème est-il différent dans un petit village ?",
        answer: "Non. L'entretien est à 99€ et le nettoyage complet à 149€, partout dans le secteur.",
      },
      {
        question: "Sous quel délai répondez-vous ?",
        answer: "Sous 24 h, du lundi au samedi, entre 8 h et 19 h.",
      },
    ],
    nearby: ["mimet", "greasque", "la-bouilladisse", "peypin", "gardanne"],
  },
  {
    slug: "cabries",
    name: "Cabriès",
    postalCode: "13480",
    title: "Nettoyage climatisation Cabriès | NG Clim",
    description:
      "Nettoyage et désinfection de climatisation à Cabriès et à Calas. Même prestation et même tarif que dans le reste du Pays d'Aix.",
    lead:
      "J'interviens à Cabriès, au village comme à Calas, pour nettoyer et désinfecter les climatisations. Le prix est le même qu'à Bouc-Bel-Air et à Aix-en-Provence.",
    paragraphs: [
      "Cabriès se partage entre le village et le hameau de Calas, plus proche d'Aix et de la zone de Plan de Campagne. On y trouve des maisons, des résidences et des locaux d'activité. Les splits des logements tournent tout l'été ; ceux des bureaux fonctionnent souvent plus longtemps encore.",
      "Le devis ne distingue pas le village de Calas. Il part du nombre d'unités et de la prestation : entretien ou nettoyage complet.",
    ],
    places: [
      { name: "Le village", text: "Maisons et logements autour du centre de Cabriès." },
      { name: "Calas", text: "Hameau résidentiel, avec des pavillons et quelques résidences." },
      { name: "Côté activités", text: "Locaux proches de Plan de Campagne, sur rendez-vous." },
    ],
    audience:
      "À Cabriès, les particuliers sont les plus nombreux. Les professionnels de Calas et du secteur d'activités peuvent regrouper plusieurs unités sur un seul passage.",
    faqs: [
      {
        question: "Vous déplacez-vous à Calas ?",
        answer: "Oui. Le village de Cabriès et le hameau de Calas sont tous les deux couverts.",
      },
      {
        question: "Un local près de Plan de Campagne est-il facturé plus cher ?",
        answer: "Non. Le tarif reste 99€ pour l'entretien et 149€ pour le nettoyage complet. Seul le nombre d'unités fait varier le devis.",
      },
      {
        question: "Intervenez-vous aussi à Bouc-Bel-Air et aux Pennes-Mirabeau ?",
        answer: "Oui. Ces communes ont leur propre page, et le barème est identique.",
      },
    ],
    nearby: ["bouc-bel-air", "aix-en-provence", "les-pennes-mirabeau", "ventabren"],
  },
  {
    slug: "rousset",
    name: "Rousset",
    postalCode: "13790",
    title: "Nettoyage climatisation Rousset | NG Clim",
    description:
      "Nettoyage et désinfection de climatisation à Rousset, au village et dans la zone d'activités. Tarif identique au reste du Pays d'Aix.",
    lead:
      "NG Clim nettoie et désinfecte les climatisations à Rousset, dans les maisons du village comme dans les locaux de la zone d'activités. Le tarif ne change pas.",
    paragraphs: [
      "Rousset associe un village au pied de la Sainte-Victoire et un parc d'activités important. Les demandes ne se ressemblent donc pas : un split de maison d'un côté, plusieurs unités de bureaux de l'autre. Dans les deux cas, un appareil encrassé donne un air moins sain et une odeur au redémarrage.",
      "J'organise le passage selon le nombre d'unités. Pour un site professionnel, mieux vaut indiquer l'accès et les horaires souhaités dans le message.",
    ],
    places: [
      { name: "Le village", text: "Maisons et logements du centre de Rousset." },
      { name: "La zone d'activités", text: "Bureaux et locaux techniques équipés de plusieurs splits." },
      { name: "Vers Peynier et Trets", text: "Pavillons situés entre les trois communes." },
    ],
    audience:
      "Rousset mêle particuliers et professionnels. Les deux sont pris sur rendez-vous, avec le même barème.",
    faqs: [
      {
        question: "Vous intervenez dans la zone d'activités de Rousset ?",
        answer: "Oui, pour le nettoyage et la désinfection des unités accessibles. Précisez le nombre de splits et les contraintes d'accès.",
      },
      {
        question: "Le tarif des bureaux est-il différent de celui des maisons ?",
        answer: "Le prix de la prestation est le même : 99€ pour l'entretien, 149€ pour le nettoyage complet. Le devis suit le nombre d'appareils.",
      },
      {
        question: "Rousset est-il loin de votre tournée ?",
        answer: "Non. Rousset est dans le secteur, avec Fuveau, Peynier, Châteauneuf-le-Rouge et Trets.",
      },
    ],
    nearby: ["fuveau", "peynier", "chateauneuf-le-rouge", "trets", "meyreuil"],
  },
  {
    slug: "peynier",
    name: "Peynier",
    postalCode: "13790",
    title: "Nettoyage climatisation Peynier | NG Clim",
    description:
      "Nettoyage et désinfection de climatisation à Peynier, entre Fuveau et Trets. Même tarif que dans le reste du secteur.",
    lead:
      "J'interviens à Peynier pour le nettoyage et la désinfection des climatisations. Le village est entre Fuveau et Trets, et la prestation est la même qu'ailleurs.",
    paragraphs: [
      "Peynier est une commune résidentielle. Les maisons y sont majoritaires, avec des installations souvent simples : un ou deux splits pour le séjour et les chambres. L'été, elles tournent en continu, et les filtres finissent par retenir poussière et pollen.",
      "Le passage se cale avec les communes voisines. Vous recevez le montant sous 24 h, avant toute intervention.",
    ],
    places: [
      { name: "Le village", text: "Maisons du centre et rues adjacentes." },
      { name: "Vers Fuveau et Trets", text: "Pavillons le long des routes qui relient les deux villes." },
    ],
    audience:
      "À Peynier, les demandes viennent de particuliers en maison. Plusieurs unités du même logement sont traitées ensemble.",
    faqs: [
      {
        question: "Peynier fait-il partie des déplacements ?",
        answer: "Oui, avec Fuveau, Rousset, Trets et La Bouilladisse.",
      },
      {
        question: "Dois-je prévoir un tarif plus élevé ?",
        answer: "Non. L'entretien est à 99€ et le nettoyage complet à 149€.",
      },
      {
        question: "Un seul split peut-il être nettoyé ?",
        answer: "Oui. Indiquez simplement qu'il n'y a qu'une unité, le devis restera sur ce périmètre.",
      },
    ],
    nearby: ["fuveau", "rousset", "trets", "la-bouilladisse"],
  },
  {
    slug: "chateauneuf-le-rouge",
    name: "Châteauneuf-le-Rouge",
    postalCode: "13790",
    title: "Nettoyage climatisation Châteauneuf-le-Rouge | NG Clim",
    description:
      "Nettoyage et désinfection de climatisation à Châteauneuf-le-Rouge, au pied de la Sainte-Victoire. Tarif identique à Meyreuil et Rousset.",
    lead:
      "NG Clim se déplace à Châteauneuf-le-Rouge pour nettoyer et désinfecter les climatisations des maisons. Le tarif est le même qu'à Meyreuil et à Rousset.",
    paragraphs: [
      "Châteauneuf-le-Rouge est un petit village au pied de la Sainte-Victoire, entre Meyreuil et Rousset. Les maisons y profitent d'un ensoleillement fort. La climatisation compense des pièces qui montent vite en température, et les unités extérieures brassent beaucoup de poussière fine.",
      "J'interviens à domicile, sur les appareils accessibles. Le village est dans la tournée habituelle, sans ligne de prix à part.",
    ],
    places: [
      { name: "Le village", text: "Maisons du centre, souvent anciennes et équipées d'un split récent." },
      { name: "Les abords", text: "Pavillons entre Meyreuil, Le Tholonet et Rousset." },
    ],
    audience:
      "Les interventions concernent des particuliers. Le nombre d'unités reste en général limité, ce qui permet un passage court.",
    faqs: [
      {
        question: "Vous venez à Châteauneuf-le-Rouge ?",
        answer: "Oui. Le village est couvert, entre Meyreuil, Le Tholonet et Rousset.",
      },
      {
        question: "Le prix est-il celui du Pays d'Aix ?",
        answer: "Oui. 99€ pour l'entretien et 149€ pour le nettoyage complet.",
      },
      {
        question: "La poussière de la campagne change-t-elle la prestation ?",
        answer: "Non. Le nettoyage des filtres, de la turbine et du bac reste le même, suivi de la désinfection.",
      },
    ],
    nearby: ["meyreuil", "le-tholonet", "rousset", "aix-en-provence"],
  },
  {
    slug: "le-tholonet",
    name: "Le Tholonet",
    postalCode: "13100",
    title: "Nettoyage climatisation Le Tholonet | NG Clim",
    description:
      "Nettoyage et désinfection de climatisation au Tholonet et à Palette. Même tarif qu'à Aix-en-Provence et à Meyreuil.",
    lead:
      "J'interviens au Tholonet, y compris du côté de Palette, pour le nettoyage et la désinfection des climatisations. La prestation et le tarif sont ceux du reste du secteur.",
    paragraphs: [
      "Le Tholonet s'étend entre Aix-en-Provence et la Sainte-Victoire. Les maisons y sont nombreuses, souvent entourées d'un jardin, et la climatisation équipe le séjour comme les chambres. Palette, le hameau plus proche d'Aix, a le même type d'installations.",
      "Un split peu nettoyé se remarque vite dans ces pièces : souffle moins agréable, légère odeur, filtres gris. Le passage remet l'unité en état sans remplacer l'appareil.",
    ],
    places: [
      { name: "Le Tholonet", text: "Maisons du village et propriétés le long de la route Cézanne." },
      { name: "Palette", text: "Hameau résidentiel, plus proche d'Aix-en-Provence." },
    ],
    audience:
      "Au Tholonet, il s'agit de particuliers. Les unités d'une même maison sont nettoyées pendant le même rendez-vous.",
    faqs: [
      {
        question: "Palette est-elle incluse ?",
        answer: "Oui. Le village du Tholonet et le hameau de Palette sont couverts.",
      },
      {
        question: "Le tarif diffère-t-il de celui d'Aix-en-Provence ?",
        answer: "Non. L'entretien est à 99€ et le nettoyage complet à 149€.",
      },
      {
        question: "Peut-on prendre rendez-vous avant l'été ?",
        answer: "Oui, c'est même le meilleur moment. Je réponds sous 24 h pour fixer le créneau.",
      },
    ],
    nearby: ["aix-en-provence", "meyreuil", "chateauneuf-le-rouge"],
  },
  {
    slug: "luynes",
    name: "Luynes",
    postalCode: "13080",
    title: "Nettoyage climatisation Luynes | NG Clim",
    description:
      "Nettoyage et désinfection de climatisation à Luynes, quartier d'Aix-en-Provence. Même tarif que dans le reste du Pays d'Aix.",
    lead:
      "J'interviens à Luynes, quartier ouest d'Aix-en-Provence, pour nettoyer et désinfecter les climatisations. Le tarif est le même que dans le centre d'Aix.",
    paragraphs: [
      "Luynes n'est pas une commune à part : c'est un quartier d'Aix, côté ouest, entre la ville, Éguilles et Ventabren. On y trouve des maisons, des résidences et quelques locaux. Les splits y fonctionnent longtemps, dans des logements qui prennent le soleil l'après-midi.",
      "Le devis ne change pas parce que l'adresse est à Luynes plutôt qu'au centre. Il suit le nombre d'unités et la prestation demandée.",
    ],
    places: [
      { name: "Luynes village", text: "Maisons et logements autour de l'ancien noyau." },
      { name: "Les résidences", text: "Immeubles et maisons récentes, souvent en multi-split." },
    ],
    audience:
      "Les demandes mêlent particuliers et petits professionnels. Toutes les unités accessibles d'un même site peuvent être traitées ensemble.",
    faqs: [
      {
        question: "Luynes est-il bien desservi ?",
        answer: "Oui. Luynes est un quartier d'Aix-en-Provence, couvert au même titre que le centre, Les Milles et Le Tholonet.",
      },
      {
        question: "Le code postal 13080 change-t-il le prix ?",
        answer: "Non. L'entretien est à 99€ et le nettoyage complet à 149€.",
      },
      {
        question: "Vous venez aussi à Éguilles et Ventabren ?",
        answer: "Oui. Ces deux communes ont leur page, avec le même barème.",
      },
    ],
    nearby: ["aix-en-provence", "eguilles", "ventabren", "les-milles"],
  },
  {
    slug: "les-milles",
    name: "Les Milles",
    postalCode: "13290",
    title: "Nettoyage climatisation Les Milles | NG Clim",
    description:
      "Nettoyage et désinfection de climatisation aux Milles, quartier sud d'Aix-en-Provence. Tarif identique au reste du secteur.",
    lead:
      "NG Clim intervient aux Milles pour le nettoyage et la désinfection des climatisations, dans les maisons, les résidences et les locaux d'activité. Le tarif est celui d'Aix-en-Provence.",
    paragraphs: [
      "Les Milles forment un quartier au sud d'Aix, autour de la gare et des zones d'activité. L'habitat y est varié : pavillons, résidences, et des bureaux qui font tourner la climatisation une grande partie de l'année. Un parc de plusieurs splits s'encrasse de façon inégale : une unité sent, une autre souffle moins.",
      "Je peux traiter l'ensemble au cours du même passage, dès lors que les appareils sont accessibles. Le message doit simplement préciser le nombre d'unités.",
    ],
    places: [
      { name: "Autour de la gare", text: "Logements et petites résidences du quartier." },
      { name: "Zones d'activité", text: "Bureaux et ateliers équipés de plusieurs splits." },
      { name: "Les pavillons", text: "Maisons au sud d'Aix, vers Luynes ou Pont-de-l'Arc." },
    ],
    audience:
      "Les Milles concentrent autant de particuliers que de professionnels. Les deux sont pris avec le même barème.",
    faqs: [
      {
        question: "Les Milles sont-ils couverts comme Aix centre ?",
        answer: "Oui. Les Milles sont un quartier d'Aix-en-Provence, inclus dans les déplacements.",
      },
      {
        question: "Peut-on nettoyer plusieurs splits de bureaux ?",
        answer: "Oui. Indiquez le nombre d'unités et les horaires d'accès. Le prix unitaire reste 99€ ou 149€ selon la prestation.",
      },
      {
        question: "Faut-il être présent pendant l'intervention ?",
        answer: "Quelqu'un doit pouvoir ouvrir et montrer les unités. Le reste se fait sur place.",
      },
    ],
    nearby: ["aix-en-provence", "luynes", "meyreuil", "le-tholonet"],
  },
  {
    slug: "ventabren",
    name: "Ventabren",
    postalCode: "13122",
    title: "Nettoyage climatisation Ventabren | NG Clim",
    description:
      "Nettoyage et désinfection de climatisation à Ventabren. Même prestation et même tarif qu'à Aix-en-Provence et à Éguilles.",
    lead:
      "J'interviens à Ventabren pour nettoyer et désinfecter les climatisations des maisons. Le village est à l'ouest d'Aix, et le tarif reste celui du secteur.",
    paragraphs: [
      "Ventabren est un village perché, très résidentiel. Les maisons sont exposées, et la climatisation sert autant à tenir les après-midi chauds qu'à rafraîchir les pièces sous les toits. Les unités extérieures, souvent en façade ou en toiture-terrasse, prennent la poussière.",
      "L'accès parfois un peu contraint dans le vieux village ne change pas le prix. Si l'appareil est accessible, il est nettoyé sur place.",
    ],
    places: [
      { name: "Le village", text: "Maisons du centre et ruelles du village perché." },
      { name: "Les quartiers résidentiels", text: "Pavillons en contrebas, vers Éguilles et Cabriès." },
    ],
    audience:
      "À Ventabren, les demandes viennent de particuliers en maison. Un ou plusieurs splits sont traités pendant le même rendez-vous.",
    faqs: [
      {
        question: "Vous intervenez dans le vieux village ?",
        answer: "Oui, dès que l'unité est accessible. Le reste de la commune, plus pavillonnaire, est couvert également.",
      },
      {
        question: "Ventabren est-il au même tarif qu'Aix ?",
        answer: "Oui. 99€ pour l'entretien et 149€ pour le nettoyage complet.",
      },
      {
        question: "Les communes voisines sont-elles desservies ?",
        answer: "Oui : Éguilles, Cabriès et Aix-en-Provence, dont Luynes.",
      },
    ],
    nearby: ["eguilles", "aix-en-provence", "cabries", "luynes"],
  },
  {
    slug: "les-pennes-mirabeau",
    name: "Les Pennes-Mirabeau",
    postalCode: "13170",
    title: "Nettoyage climatisation Les Pennes-Mirabeau | NG Clim",
    description:
      "Nettoyage et désinfection de climatisation aux Pennes-Mirabeau. Tarif identique à Cabriès, Bouc-Bel-Air et Septèmes-les-Vallons.",
    lead:
      "NG Clim se déplace aux Pennes-Mirabeau pour le nettoyage et la désinfection des climatisations. La commune est étendue, entre Aix et Marseille, et le tarif ne varie pas selon le quartier.",
    paragraphs: [
      "Les Pennes-Mirabeau mêlent pavillons, petits collectifs et des locaux proches de Plan de Campagne. La climatisation y est très présente, dans des logements qui chauffent vite et dans des bureaux qui la laissent tourner une grande partie de l'année.",
      "Je regroupe les unités d'un même site. Pour une maison, un message avec le nombre de splits suffit. Pour un local professionnel, ajoutez l'adresse du site et les horaires d'ouverture.",
    ],
    places: [
      { name: "Le centre", text: "Logements et commerces du cœur de commune." },
      { name: "Quartiers pavillonnaires", text: "Maisons réparties sur une commune assez large." },
      { name: "Vers Plan de Campagne", text: "Locaux d'activité et habitations à proximité de la zone." },
    ],
    audience:
      "Particuliers et professionnels sont concernés. Le barème reste unique : il dépend de la prestation et du nombre d'appareils.",
    faqs: [
      {
        question: "Toute la commune des Pennes-Mirabeau est-elle couverte ?",
        answer: "Oui. Le centre, les quartiers de maisons et le secteur proche de Plan de Campagne sont inclus.",
      },
      {
        question: "Le prix augmente-t-il parce que la commune est grande ?",
        answer: "Non. L'entretien est à 99€ et le nettoyage complet à 149€, comme à Cabriès et à Bouc-Bel-Air.",
      },
      {
        question: "Vous allez aussi à Septèmes-les-Vallons ?",
        answer: "Oui. Septèmes-les-Vallons a sa page, avec la même prestation.",
      },
    ],
    nearby: ["cabries", "septemes-les-vallons", "bouc-bel-air", "aix-en-provence"],
  },
  {
    slug: "septemes-les-vallons",
    name: "Septèmes-les-Vallons",
    postalCode: "13240",
    title: "Nettoyage climatisation Septèmes-les-Vallons | NG Clim",
    description:
      "Nettoyage et désinfection de climatisation à Septèmes-les-Vallons. Même tarif qu'aux Pennes-Mirabeau et dans le Pays d'Aix.",
    lead:
      "J'interviens à Septèmes-les-Vallons pour nettoyer et désinfecter les climatisations des maisons et des petits collectifs. Le tarif est le même que dans le reste du secteur.",
    paragraphs: [
      "Septèmes-les-Vallons est au nord de Marseille, dans un relief de vallons. Les logements sont des maisons et des petits immeubles, souvent bien exposés. La climatisation y compense des étés chauds, et les filtres se chargent lorsque l'appareil tourne fenêtres fermées pendant des semaines.",
      "Le déplacement depuis le Pays d'Aix ne crée pas de supplément. Le devis envoyé avant le rendez-vous fixe le montant.",
    ],
    places: [
      { name: "Le centre", text: "Logements et commerces autour du village." },
      { name: "Les vallons", text: "Maisons réparties sur les hauteurs et les fonds de vallon." },
    ],
    audience:
      "Les demandes viennent principalement de particuliers. Un petit local du centre peut être ajouté au même planning.",
    faqs: [
      {
        question: "Septèmes-les-Vallons est-il dans la zone ?",
        answer: "Oui, avec Les Pennes-Mirabeau et Cabriès. L'intervention se fait sur rendez-vous.",
      },
      {
        question: "Y a-t-il un frais de déplacement ?",
        answer: "Le barème affiché est celui de la prestation : 99€ pour l'entretien, 149€ pour le nettoyage complet. Le devis confirme le total avant le passage.",
      },
      {
        question: "Quels appareils traitez-vous ?",
        answer: "Les splits muraux, les consoles et les gainables accessibles.",
      },
    ],
    nearby: ["les-pennes-mirabeau", "cabries", "bouc-bel-air"],
  },
  {
    slug: "la-bouilladisse",
    name: "La Bouilladisse",
    postalCode: "13720",
    title: "Nettoyage climatisation La Bouilladisse | NG Clim",
    description:
      "Nettoyage et désinfection de climatisation à La Bouilladisse. Tarif identique à Gréasque, Peypin et Fuveau.",
    lead:
      "NG Clim intervient à La Bouilladisse pour le nettoyage et la désinfection des climatisations. La commune est entre Gréasque et Peypin, et le prix est le même.",
    paragraphs: [
      "La Bouilladisse est un village de l'ancien bassin minier, avec un centre et des lotissements de maisons. Les climatisations y sont devenues courantes dans les pavillons. Après une saison sans ouverture des filtres, le souffle faiblit et une odeur peut sortir du volet.",
      "Je passe à domicile, du lundi au samedi. Le créneau se groupe facilement avec Gréasque, Peypin ou Fuveau.",
    ],
    places: [
      { name: "Le village", text: "Maisons et logements du centre." },
      { name: "Les lotissements", text: "Pavillons récents, souvent équipés d'un ou deux splits." },
    ],
    audience:
      "À La Bouilladisse, il s'agit de particuliers. Toutes les unités accessibles de la maison sont prévues dans le devis.",
    faqs: [
      {
        question: "Vous venez à La Bouilladisse ?",
        answer: "Oui, avec Gréasque, Peypin, Saint-Savournin et Fuveau.",
      },
      {
        question: "Le tarif est-il celui de Gardanne ?",
        answer: "Oui. 99€ pour l'entretien et 149€ pour le nettoyage complet.",
      },
      {
        question: "Combien d'unités peut-on indiquer ?",
        answer: "Autant que la maison en compte. Le message sert à préparer le bon devis.",
      },
    ],
    nearby: ["greasque", "peypin", "fuveau", "saint-savournin"],
  },
  {
    slug: "peypin",
    name: "Peypin",
    postalCode: "13124",
    title: "Nettoyage climatisation Peypin | NG Clim",
    description:
      "Nettoyage et désinfection de climatisation à Peypin. Même prestation et même tarif qu'à La Bouilladisse et à Gréasque.",
    lead:
      "J'interviens à Peypin pour nettoyer et désinfecter les climatisations des maisons. La commune est juste après La Bouilladisse, et le tarif ne change pas.",
    paragraphs: [
      "Peypin est un village résidentiel, sur la route qui mène vers Auriol. Les installations sont celles de maisons individuelles : un split principal, parfois un second pour l'étage. L'été, elles tournent des journées entières.",
      "Le nettoyage se fait sur place, sans dépose de l'appareil. Vous connaissez le montant avant le rendez-vous, au barème du reste du secteur.",
    ],
    places: [
      { name: "Le village", text: "Maisons du centre de Peypin." },
      { name: "Vers La Bouilladisse", text: "Pavillons situés entre les deux communes." },
    ],
    audience:
      "Les interventions à Peypin concernent des particuliers. Le passage est en général court, le temps de traiter les unités de la maison.",
    faqs: [
      {
        question: "Peypin est-il couvert ?",
        answer: "Oui. Peypin est dans la zone, avec La Bouilladisse, Saint-Savournin et Gréasque.",
      },
      {
        question: "Faut-il un supplément à cette distance ?",
        answer: "Non. L'entretien est à 99€ et le nettoyage complet à 149€.",
      },
      {
        question: "Que préparez-vous comme matériel ?",
        answer: "Rien n'est à prévoir de votre côté, si l'unité est accessible. Le nettoyage et la désinfection se font avec le matériel emporté.",
      },
    ],
    nearby: ["la-bouilladisse", "saint-savournin", "greasque", "fuveau"],
  },
  {
    slug: "trets",
    name: "Trets",
    postalCode: "13530",
    title: "Nettoyage climatisation Trets | NG Clim",
    description:
      "Nettoyage et désinfection de climatisation à Trets, au pied de la Sainte-Victoire. Même tarif que dans le Pays d'Aix.",
    lead:
      "NG Clim se déplace à Trets pour le nettoyage et la désinfection des climatisations, chez les particuliers et dans les locaux professionnels. Le tarif est le même que dans le reste du secteur.",
    paragraphs: [
      "Trets est une vraie petite ville, au pied de la Sainte-Victoire, plus étendue que Peynier ou Rousset. Le centre mêle appartements et maisons de ville. Autour, les quartiers résidentiels comptent des pavillons équipés de plusieurs splits. Les commerces du centre ont souvent leur propre unité.",
      "La chaleur dure longtemps sur ce versant. Un nettoyage avant l'été évite de lancer la saison avec des filtres déjà chargés. Le devis est le même qu'à Gardanne : il dépend de la prestation et du nombre d'appareils.",
    ],
    places: [
      { name: "Le centre", text: "Appartements, maisons de ville et commerces." },
      { name: "Quartiers résidentiels", text: "Pavillons en périphérie, souvent en multi-split." },
      { name: "Vers Peynier et Rousset", text: "Maisons situées à la limite des communes voisines." },
    ],
    audience:
      "Trets concerne les particuliers comme les commerces. Un rendez-vous peut regrouper les unités d'un même local.",
    faqs: [
      {
        question: "Vous intervenez dans tout Trets ?",
        answer: "Oui, dans le centre et dans les quartiers résidentiels, ainsi qu'à la limite de Peynier et de Rousset.",
      },
      {
        question: "Un commerce du centre est-il accepté ?",
        answer: "Oui, sur rendez-vous, pour les unités accessibles. Le tarif de la prestation ne change pas.",
      },
      {
        question: "Quel est le prix à Trets ?",
        answer: "99€ pour l'entretien et 149€ pour le nettoyage complet, comme partout dans le secteur.",
      },
    ],
    nearby: ["peynier", "rousset", "fuveau", "chateauneuf-le-rouge"],
  },
  {
    slug: "eguilles",
    name: "Éguilles",
    postalCode: "13510",
    title: "Nettoyage climatisation Éguilles | NG Clim",
    description:
      "Nettoyage et désinfection de climatisation à Éguilles, à l'ouest d'Aix-en-Provence. Même tarif qu'à Ventabren et à Luynes.",
    lead:
      "J'interviens à Éguilles pour nettoyer et désinfecter les climatisations des maisons. Le village est à l'ouest d'Aix-en-Provence, et le tarif est identique.",
    paragraphs: [
      "Éguilles est un village résidentiel, entre Aix, Ventabren et le côté de Luynes. Les maisons y dominent, souvent avec un jardin et une ou deux unités pour le rez-de-chaussée et l'étage. L'exposition est forte, et la climatisation travaille plusieurs mois d'affilée.",
      "Je passe sur rendez-vous. Rien n'est facturé différemment parce que le logement est à Éguilles plutôt qu'à Aix. Le nombre de splits suffit à établir le devis.",
    ],
    places: [
      { name: "Le village", text: "Maisons du centre et abords du vieux village." },
      { name: "Les quartiers de pavillons", text: "Lotissements entre Aix, Ventabren et Luynes." },
    ],
    audience:
      "À Éguilles, les demandes viennent de particuliers en maison. Les unités du même logement sont nettoyées ensemble.",
    faqs: [
      {
        question: "Éguilles est-il dans le secteur ?",
        answer: "Oui, avec Aix-en-Provence, Luynes et Ventabren.",
      },
      {
        question: "Le prix est-il le même qu'en ville ?",
        answer: "Oui. L'entretien est à 99€ et le nettoyage complet à 149€.",
      },
      {
        question: "Deux niveaux peuvent-ils être faits le même jour ?",
        answer: "Oui. Signalez chaque split, y compris celui de l'étage, pour caler la durée.",
      },
    ],
    nearby: ["aix-en-provence", "ventabren", "luynes", "cabries"],
  },
];

export const contactCommunes = [
  ...cityPages.map((city) => city.name),
  "Autre commune du Pays d'Aix",
] as const;

export const cityPaths = cityPages.map(
  (city) => `/nettoyage-climatisation/${city.slug}`,
);

export const getCityBySlug = (slug?: string) =>
  cityPages.find((city) => city.slug === slug);

export const contactHref = (commune: string) =>
  `/?commune=${encodeURIComponent(commune)}#contact`;

export const homeFaqs: CityFaq[] = [
  {
    question: "Quel est le prix d'un nettoyage de climatisation à Gardanne ?",
    answer:
      "L'entretien est à 99€ et le nettoyage complet à 149€. Ce barème est le même à Gardanne, Aix-en-Provence, Bouc-Bel-Air, Meyreuil et Fuveau. Le devis confirme le montant selon le nombre d'unités.",
  },
  {
    question: "Intervenez-vous dans tout le Pays d'Aix ?",
    answer:
      "J'interviens à Gardanne et dans les communes voisines : Aix-en-Provence, Bouc-Bel-Air, Meyreuil, Fuveau, Simiane-Collongue, Cabriès, Rousset et les alentours. La liste complète est dans la zone d'intervention.",
  },
  {
    question: "Combien de temps faut-il pour obtenir un devis ?",
    answer:
      "Je réponds sous 24 h. Les rendez-vous se prennent du lundi au samedi, entre 8 h et 19 h. La durée du passage dépend du nombre d'unités et de leur accessibilité.",
  },
  {
    question: "Que comprend la prestation ?",
    answer:
      "Le nettoyage des filtres, de la turbine et du bac à condensats, le dégraissage et la désinfection des unités accessibles : splits muraux, consoles et gainables. L'activité est centrée sur l'hygiène de l'air.",
  },
  {
    question: "À quelle fréquence faire nettoyer une climatisation ?",
    answer:
      "Une fois par an convient à la plupart des logements, de préférence avant l'été. Si une odeur apparaît ou si l'appareil n'a pas été ouvert depuis longtemps, il est préférable de ne pas attendre.",
  },
];
