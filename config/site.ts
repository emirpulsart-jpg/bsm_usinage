export interface SiteConfig {
  name: string;
  tagline: string;
  shortDescription: string;
  url: string;
  phone: {
    display: string;
    raw: string;
    international: string;
  };
  email: {
    display: string;
    raw: string;
  };
  address: {
    street: string;
    city: string;
    postalCode: string;
    region: string;
    department: string;
    country: string;
    note: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  serviceAreas: {
    primary: string;
    hub: string;
    department: string;
    region: string;
    servedZones: string[];
    importantNotice: string;
  };
  mainNavigation: {
    label: string;
    href: string;
    children?: { label: string; href: string; description: string }[];
  }[];
  allPages: {
    title: string;
    href: string;
    category: string;
    h1: string;
    seoTitle: string;
    metaDescription: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "BSM Usinage",
  tagline: "Usinage de précision & mécanique de compétition",
  shortDescription: "BSM Usinage : atelier d'usinage de précision CNC, tournage, fraisage, jantes aluminium sur mesure et mécanique de compétition situé à Rumilly (Haute-Savoie), au service du bassin annécien.",
  url: process.env.APP_URL || "https://bsm-usinage.fr",
  
  phone: {
    display: "04 XX XX XX XX",
    raw: "+33400000000",
    international: "+33 (0)4 XX XX XX XX",
  },
  email: {
    display: "contact@bsm-usinage.fr (provisoire)",
    raw: "contact@bsm-usinage.fr",
  },
  address: {
    street: "Zone Artisanale / Industrielle (Adresse à préciser)",
    city: "Rumilly",
    postalCode: "74150",
    department: "Haute-Savoie (74)",
    region: "Auvergne-Rhône-Alpes",
    country: "France",
    note: "Atelier BSM Usinage basé à Rumilly (74150), à proximité directe du bassin annécien.",
  },
  geo: {
    latitude: 45.8675,
    longitude: 5.9442,
  },
  serviceAreas: {
    hub: "Rumilly (74150)",
    primary: "Bassin annécien & Haute-Savoie",
    department: "Haute-Savoie",
    region: "Auvergne-Rhône-Alpes",
    servedZones: [
      "Rumilly et le Pays de Rumilly",
      "Annecy et le bassin annécien",
      "Seynod, Cran-Gevrier, Meythet, Epagny-Metz-Tessy",
      "Haute-Savoie (74) et sillon alpin",
      "Savoie (73 - Aix-les-Bains, Chambéry) et départements voisins",
    ],
    importantNotice: "BSM Usinage est implantée à Rumilly (Haute-Savoie), commune autonome du Pays de Rumilly, et intervient pour les professionnels et particuliers d'Annecy, de Haute-Savoie et du sillon alpin.",
  },

  mainNavigation: [
    {
      label: "Accueil",
      href: "/",
    },
    {
      label: "Expertises",
      href: "/expertises/usinage-de-precision-sur-mesure",
      children: [
        {
          label: "Usinage de précision sur mesure",
          href: "/expertises/usinage-de-precision-sur-mesure",
          description: "Pièces complexes unitaires et petites séries aux tolérances micrométriques.",
        },
        {
          label: "Tournage CNC",
          href: "/expertises/tournage-cnc",
          description: "Usinage de pièces de révolution complexes avec états de surface de haute qualité.",
        },
        {
          label: "Fraisage CNC",
          href: "/expertises/fraisage-cnc",
          description: "Centres d'usinage multi-axes pour formes géométriques exigeantes.",
        },
        {
          label: "Sports mécaniques",
          href: "/expertises/sports-mecaniques",
          description: "Composants compétition auto/moto, optimisation de masse et résistance.",
        },
        {
          label: "Études techniques et conception",
          href: "/expertises/etudes-techniques-et-conception",
          description: "Modélisation 3D CAO/FAO et optimisation pour l'usinage numérique.",
        },
        {
          label: "Soudure",
          href: "/expertises/soudure",
          description: "Soudure de précision TIG et MIG sur aluminium, inox et aciers spécifiques.",
        },
      ],
    },
    {
      label: "Réalisations",
      href: "/realisations/jantes-aluminium",
      children: [
        {
          label: "Jantes aluminium",
          href: "/realisations/jantes-aluminium",
          description: "Conception et usinage dans la masse de jantes aluminium sur mesure.",
        },
        {
          label: "Sports mécaniques",
          href: "/realisations/sports-mecaniques",
          description: "Pièces de compétition pour circuit, rallye et véhicules d'exception.",
        },
        {
          label: "Pièces sur mesure",
          href: "/realisations/pieces-sur-mesure",
          description: "Prototypes, outillages spéciaux et éléments mécaniques sur cahier des charges.",
        },
      ],
    },
    {
      label: "Boutique",
      href: "/boutique",
    },
    {
      label: "À propos",
      href: "/a-propos",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],

  allPages: [
    {
      title: "Accueil",
      href: "/",
      category: "Accueil",
      h1: "Usinage de précision & sports mécaniques en Haute-Savoie",
      seoTitle: "BSM Usinage | Usinage de Précision Haute-Savoie, Rumilly & Annecy",
      metaDescription: "BSM Usinage : atelier de mécanique de précision CNC, tournage, fraisage, jantes aluminium et sports mécaniques à Rumilly, près d'Annecy en Haute-Savoie.",
    },
    {
      title: "Usinage de précision sur mesure",
      href: "/expertises/usinage-de-precision-sur-mesure",
      category: "Expertises",
      h1: "Usinage de précision sur mesure",
      seoTitle: "Usinage sur Mesure | BSM Usinage Haute-Savoie, Rumilly, Annecy",
      metaDescription: "Fabrication de pièces mécaniques complexes sur mesure, prototypes et petites séries. Haute précision d'usinage chez BSM Usinage à Rumilly.",
    },
    {
      title: "Tournage CNC",
      href: "/expertises/tournage-cnc",
      category: "Expertises",
      h1: "Tournage CNC de haute précision",
      seoTitle: "Tournage CNC | BSM Usinage Haute-Savoie, Rumilly & Annecy",
      metaDescription: "Usinage de précision par tournage CNC pour pièces de révolution exigeantes en Haute-Savoie. Échangez avec l'atelier BSM Usinage.",
    },
    {
      title: "Fraisage CNC",
      href: "/expertises/fraisage-cnc",
      category: "Expertises",
      h1: "Fraisage CNC multi-axes",
      seoTitle: "Fraisage CNC | BSM Usinage Haute-Savoie, Rumilly & Annecy",
      metaDescription: "Fraisage numérique CNC haute précision pour prototypes et pièces techniques. Atelier BSM Usinage situé à Rumilly desservant le bassin annécien.",
    },
    {
      title: "Sports mécaniques",
      href: "/expertises/sports-mecaniques",
      category: "Expertises",
      h1: "Usinage pour les sports mécaniques",
      seoTitle: "Sports Mécaniques & Compétition | BSM Usinage Haute-Savoie",
      metaDescription: "Pièces allégées et composants de compétition auto et moto usinés par BSM Usinage à Rumilly, près d'Annecy en Haute-Savoie.",
    },
    {
      title: "Études techniques et conception",
      href: "/expertises/etudes-techniques-et-conception",
      category: "Expertises",
      h1: "Études techniques et conception mécanique",
      seoTitle: "Études Techniques & CAO | BSM Usinage Haute-Savoie",
      metaDescription: "Bureau d'études techniques, modélisation 3D et optimisation d'usinage par BSM Usinage à Rumilly, proche d'Annecy.",
    },
    {
      title: "Soudure",
      href: "/expertises/soudure",
      category: "Expertises",
      h1: "Soudure technique de précision",
      seoTitle: "Soudure TIG MIG Aluminium & Inox | BSM Usinage Rumilly",
      metaDescription: "Travaux de soudure de précision TIG et MIG sur aluminium, inox et aciers alliés chez BSM Usinage à Rumilly en Haute-Savoie.",
    },
    {
      title: "Jantes aluminium",
      href: "/realisations/jantes-aluminium",
      category: "Réalisations",
      h1: "Jantes aluminium sur mesure",
      seoTitle: "Jantes Aluminium sur Mesure | Réalisations BSM Usinage",
      metaDescription: "Conception et usinage dans la masse de jantes aluminium sur mesure pour véhicules de course et d'exception par BSM Usinage.",
    },
    {
      title: "Sports mécaniques",
      href: "/realisations/sports-mecaniques",
      category: "Réalisations",
      h1: "Réalisations pour les sports mécaniques",
      seoTitle: "Pièces Compétition | Réalisations BSM Usinage Haute-Savoie",
      metaDescription: "Galerie de pièces usinées pour la compétition par BSM Usinage : trains roulants, étriers, supports et liaisons au sol en Haute-Savoie.",
    },
    {
      title: "Pièces sur mesure",
      href: "/realisations/pieces-sur-mesure",
      category: "Réalisations",
      h1: "Réalisations de pièces sur mesure",
      seoTitle: "Pièces Usinées sur Mesure | Réalisations BSM Usinage",
      metaDescription: "Sélection de prototypes et pièces uniques usinées par BSM Usinage à Rumilly pour l'industrie et la mécanique de pointe.",
    },
    {
      title: "Boutique",
      href: "/boutique",
      category: "Boutique",
      h1: "Catalogue de présentation",
      seoTitle: "Catalogue de Présentation Pièces & Jantes | BSM Usinage",
      metaDescription: "Catalogue vitrine de pièces d'atelier, composants de compétition et jantes aluminium développées par BSM Usinage à Rumilly.",
    },
    {
      title: "À propos",
      href: "/a-propos",
      category: "À propos",
      h1: "À propos de BSM Usinage",
      seoTitle: "À Propos de BSM Usinage | Atelier de Précision Rumilly",
      metaDescription: "Découvrez BSM Usinage : notre exigence technique, notre passion des sports mécaniques et notre savoir-faire d'usinage à Rumilly en Haute-Savoie.",
    },
    {
      title: "Contact",
      href: "/contact",
      category: "Contact",
      h1: "Contacter BSM Usinage",
      seoTitle: "Contact BSM Usinage | Devis & Appel Atelier Rumilly Annecy",
      metaDescription: "Contactez l'atelier BSM Usinage à Rumilly (Haute-Savoie) pour étudier votre projet, transmettre un plan ou nous appeler directement.",
    },
  ],
};
