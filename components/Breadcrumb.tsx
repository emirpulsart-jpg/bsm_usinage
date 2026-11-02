import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: '/',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: item.href || undefined,
      })),
    ],
  };

  return (
    <nav
      aria-label="Fil d'Ariane"
      className="py-4 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-neutral-100 text-xs text-neutral-500 w-full"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex items-center space-x-2 flex-wrap">
        <li>
          <Link
            href="/"
            className="hover:text-neutral-900 transition-colors"
          >
            Accueil
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-neutral-300 shrink-0" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-neutral-900 transition-colors truncate max-w-[180px] sm:max-w-none"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-neutral-950 font-medium truncate max-w-[220px] sm:max-w-none">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
