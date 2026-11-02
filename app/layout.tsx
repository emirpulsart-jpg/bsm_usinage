import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CallFloatingBar } from '@/components/CallFloatingBar';
import { siteConfig } from '@/config/site';

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'BSM Usinage | Usinage de Précision Haute-Savoie, Rumilly & Annecy',
    template: '%s | BSM Usinage',
  },
  description:
    "BSM Usinage : atelier d'usinage de précision CNC, tournage, fraisage, jantes aluminium sur mesure et sports mécaniques à Rumilly en Haute-Savoie, près d'Annecy.",
  keywords: [
    'BSM Usinage',
    'Usinage de précision',
    "Entreprise d'usinage",
    'Usinage CNC',
    'Fraisage CNC',
    'Tournage CNC',
    'Usinage sur mesure',
    'Usinage de précision en Haute-Savoie',
    "Usinage près d'Annecy",
    'Usinage à Rumilly',
    'Jantes aluminium usinées',
    'Pièces sports mécaniques',
    'Soudure TIG MIG Haute-Savoie',
  ],
  authors: [{ name: 'BSM Usinage' }],
  creator: 'BSM Usinage',
  publisher: 'BSM Usinage',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: 'BSM Usinage | Usinage de Précision & Sports Mécaniques en Haute-Savoie',
    description:
      "Atelier d'usinage de précision CNC, pièces de compétition et jantes alu sur mesure à Rumilly (Haute-Savoie, proximité Annecy).",
    url: siteConfig.url,
    siteName: 'BSM Usinage',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BSM Usinage | Usinage de Précision & Sports Mécaniques',
    description:
      "Atelier d'usinage CNC, pièces compétition et jantes alu sur mesure à Rumilly (Haute-Savoie, proximité Annecy).",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: 'A_REMPLACER_PAR_CODE_SEARCH_CONSOLE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AutomotiveBusiness', 'ProfessionalService'],
    '@id': `${siteConfig.url}/#bsm-usinage`,
    name: 'BSM Usinage',
    alternateName: 'BSM Usinage Rumilly',
    url: siteConfig.url,
    telephone: siteConfig.phone.display,
    email: siteConfig.email.raw,
    description:
      "BSM Usinage est un atelier spécialisé en usinage de précision CNC, tournage, fraisage, fabrication de jantes aluminium sur mesure et pièces de compétition pour sports mécaniques à Rumilly en Haute-Savoie.",
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressRegion: siteConfig.address.region,
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Rumilly et Pays de Rumilly',
      },
      {
        '@type': 'AdministrativeArea',
        name: "Annecy et bassin d'Annecy",
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Haute-Savoie (74)',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Savoie (73)',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Auvergne-Rhône-Alpes',
      },
    ],
    priceRange: '€€',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
  };

  return (
    <html lang="fr" className="bg-white">
      <head>
        <link rel="canonical" href={siteConfig.url} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="bg-white text-neutral-900 antialiased min-h-screen flex flex-col pb-16 md:pb-0">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CallFloatingBar />
      </body>
    </html>
  );
}
