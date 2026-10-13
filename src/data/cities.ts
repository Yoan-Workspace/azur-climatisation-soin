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

export const contactCommunes = [
  "Gardanne",
  "Aix-en-Provence",
  "Bouc-Bel-Air",
  "Meyreuil",
  "Fuveau",
  "Autre commune du Pays d'Aix",
] as const;

export const zoneTowns: { name: string; slug?: string }[] = [
  { name: "Gardanne", slug: "gardanne" },
  { name: "Aix-en-Provence", slug: "aix-en-provence" },
  { name: "Bouc-Bel-Air", slug: "bouc-bel-air" },
  { name: "Simiane-Collongue" },
  { name: "Mimet" },
  { name: "Fuveau", slug: "fuveau" },
  { name: "Meyreuil", slug: "meyreuil" },
  { name: "Gréasque" },
  { name: "Saint-Savournin" },
  { name: "Cabriès" },
  { name: "Rousset" },
  { name: "Peynier" },
  { name: "Châteauneuf-le-Rouge" },
  { name: "Le Tholonet" },
  { name: "Luynes" },
  { name: "Les Milles" },
  { name: "Ventabren" },
  { name: "Les Pennes-Mirabeau" },
  { name: "Septèmes-les-Vallons" },
  { name: "La Bouilladisse" },
  { name: "Peypin" },
  { name: "Trets" },
  { name: "Éguilles" },
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
    nearby: ["aix-en-provence", "bouc-bel-air", "meyreuil", "fuveau"],
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
    nearby: ["gardanne", "meyreuil", "bouc-bel-air", "fuveau"],
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
    nearby: ["gardanne", "aix-en-provence", "meyreuil"],
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
    nearby: ["gardanne", "aix-en-provence", "fuveau", "bouc-bel-air"],
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
    nearby: ["gardanne", "meyreuil", "aix-en-provence"],
  },
];

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
