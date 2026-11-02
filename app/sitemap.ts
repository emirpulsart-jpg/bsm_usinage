import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date();

  // 13 Main pages with explicit priority & change frequency
  const mainPages = [
    { url: `${baseUrl}`, changeFrequency: 'weekly' as const, priority: 1.0 },
    // Expertises
    { url: `${baseUrl}/expertises/usinage-de-precision-sur-mesure`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/expertises/tournage-cnc`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/expertises/fraisage-cnc`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/expertises/sports-mecaniques`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/expertises/etudes-techniques-et-conception`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/expertises/soudure`, changeFrequency: 'monthly' as const, priority: 0.8 },
    // Réalisations
    { url: `${baseUrl}/realisations/jantes-aluminium`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/realisations/sports-mecaniques`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/realisations/pieces-sur-mesure`, changeFrequency: 'monthly' as const, priority: 0.8 },
    // Boutique, À propos, Contact
    { url: `${baseUrl}/boutique`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/a-propos`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly' as const, priority: 0.9 },
    // Pages légales
    { url: `${baseUrl}/mentions-legales`, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/politique-de-confidentialite`, changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  return mainPages.map((page) => ({
    url: page.url,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
