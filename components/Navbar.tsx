'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expertisesOpen, setExpertisesOpen] = useState(false);
  const [realisationsOpen, setRealisationsOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-100 transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 sm:h-24">
          
          {/* Logo BSM Usinage */}
          <Link href="/" className="flex items-baseline gap-2.5 group">
            <span className="font-semibold tracking-tight text-xl sm:text-2xl text-neutral-950">
              BSM <span className="font-light text-neutral-500">Usinage</span>
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-[13px] font-medium tracking-wide">
            <Link
              href="/"
              className={`transition-colors py-2 ${
                pathname === '/'
                  ? 'text-neutral-950 font-semibold border-b-2 border-neutral-950'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              Accueil
            </Link>

            {/* Dropdown: Expertises */}
            <div
              className="relative"
              onMouseEnter={() => setExpertisesOpen(true)}
              onMouseLeave={() => setExpertisesOpen(false)}
            >
              <Link
                href="/expertises/usinage-de-precision-sur-mesure"
                className={`flex items-center gap-1.5 py-2 transition-colors ${
                  isActive('/expertises')
                    ? 'text-neutral-950 font-semibold border-b-2 border-neutral-950'
                    : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                <span>Expertises</span>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-950 transition-transform" />
              </Link>

              <div
                className={`absolute top-full left-0 w-80 bg-white border border-neutral-150 shadow-xl rounded-lg p-3 transition-all duration-200 ${
                  expertisesOpen
                    ? 'opacity-100 visible translate-y-1'
                    : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                }`}
              >
                <div className="space-y-1">
                  {[
                    {
                      label: "Usinage de précision sur mesure",
                      href: "/expertises/usinage-de-precision-sur-mesure",
                      desc: "Pièces unitaires complexes & petites séries",
                    },
                    {
                      label: "Tournage CNC",
                      href: "/expertises/tournage-cnc",
                      desc: "Pièces de révolution & tolérances fines",
                    },
                    {
                      label: "Fraisage CNC",
                      href: "/expertises/fraisage-cnc",
                      desc: "Centres multi-axes & usinage prismatique",
                    },
                    {
                      label: "Sports mécaniques",
                      href: "/expertises/sports-mecaniques",
                      desc: "Composants compétition auto & moto",
                    },
                    {
                      label: "Études techniques et conception",
                      href: "/expertises/etudes-techniques-et-conception",
                      desc: "Modélisation 3D CAO & optimisation",
                    },
                    {
                      label: "Soudure",
                      href: "/expertises/soudure",
                      desc: "Soudure technique TIG / MIG alu & inox",
                    },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block p-2.5 rounded-md hover:bg-neutral-50 transition-colors group"
                    >
                      <div className="text-sm text-neutral-900 group-hover:text-neutral-950 font-medium">
                        {item.label}
                      </div>
                      <div className="text-xs text-neutral-500 mt-0.5">
                        {item.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Dropdown: Réalisations */}
            <div
              className="relative"
              onMouseEnter={() => setRealisationsOpen(true)}
              onMouseLeave={() => setRealisationsOpen(false)}
            >
              <Link
                href="/realisations/jantes-aluminium"
                className={`flex items-center gap-1.5 py-2 transition-colors ${
                  isActive('/realisations')
                    ? 'text-neutral-950 font-semibold border-b-2 border-neutral-950'
                    : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                <span>Réalisations</span>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-950 transition-transform" />
              </Link>

              <div
                className={`absolute top-full left-0 w-72 bg-white border border-neutral-150 shadow-xl rounded-lg p-3 transition-all duration-200 ${
                  realisationsOpen
                    ? 'opacity-100 visible translate-y-1'
                    : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                }`}
              >
                <div className="space-y-1">
                  {[
                    {
                      label: "Jantes aluminium",
                      href: "/realisations/jantes-aluminium",
                      desc: "Développement & usinage dans la masse",
                    },
                    {
                      label: "Sports mécaniques",
                      href: "/realisations/sports-mecaniques",
                      desc: "Pièces performance circuit & rallye",
                    },
                    {
                      label: "Pièces sur mesure",
                      href: "/realisations/pieces-sur-mesure",
                      desc: "Prototypes & pièces unitaires d'atelier",
                    },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block p-2.5 rounded-md hover:bg-neutral-50 transition-colors group"
                    >
                      <div className="text-sm text-neutral-900 group-hover:text-neutral-950 font-medium">
                        {item.label}
                      </div>
                      <div className="text-xs text-neutral-500 mt-0.5">
                        {item.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/boutique"
              className={`transition-colors py-2 ${
                pathname === '/boutique'
                  ? 'text-neutral-950 font-semibold border-b-2 border-neutral-950'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              Boutique
            </Link>

            <Link
              href="/a-propos"
              className={`transition-colors py-2 ${
                pathname === '/a-propos'
                  ? 'text-neutral-950 font-semibold border-b-2 border-neutral-950'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              À propos
            </Link>

            <Link
              href="/contact"
              className={`transition-colors py-2 ${
                pathname === '/contact'
                  ? 'text-neutral-950 font-semibold border-b-2 border-neutral-950'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA: Clean minimal phone button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone.raw}`}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-neutral-950 text-white text-xs font-medium tracking-wide hover:bg-neutral-800 transition-colors shadow-sm"
              aria-label={`Appeler BSM Usinage : ${siteConfig.phone.display}`}
            >
              <Phone className="w-3.5 h-3.5 fill-current stroke-none text-[#C5A059]" />
              <span>{siteConfig.phone.display}</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={`tel:${siteConfig.phone.raw}`}
              className="p-2.5 rounded-full bg-neutral-100 text-neutral-950"
              aria-label="Appeler BSM Usinage"
            >
              <Phone className="w-4 h-4 fill-current stroke-none text-[#C5A059]" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 hover:text-neutral-950"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-6 pt-4 pb-8 max-h-[85vh] overflow-y-auto">
          <div className="mb-6 p-4 rounded-lg bg-neutral-50 border border-neutral-200">
            <p className="text-xs text-neutral-500 mb-2">
              Atelier BSM Usinage • Rumilly (Haute-Savoie)
            </p>
            <a
              href={`tel:${siteConfig.phone.raw}`}
              className="flex items-center justify-center gap-2 w-full py-3 bg-neutral-950 text-white font-medium text-xs rounded-md"
            >
              <Phone className="w-4 h-4 text-[#C5A059] fill-current stroke-none" />
              <span>Appeler le {siteConfig.phone.display}</span>
            </a>
          </div>

          <nav className="space-y-4 text-sm">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 font-medium text-neutral-900"
            >
              Accueil
            </Link>

            <div className="pt-2 border-t border-neutral-100">
              <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-2">
                Expertises
              </span>
              <div className="space-y-2 pl-3 border-l border-neutral-200">
                {[
                  { label: "Usinage de précision sur mesure", href: "/expertises/usinage-de-precision-sur-mesure" },
                  { label: "Tournage CNC", href: "/expertises/tournage-cnc" },
                  { label: "Fraisage CNC", href: "/expertises/fraisage-cnc" },
                  { label: "Sports mécaniques", href: "/expertises/sports-mecaniques" },
                  { label: "Études techniques et conception", href: "/expertises/etudes-techniques-et-conception" },
                  { label: "Soudure", href: "/expertises/soudure" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-xs text-neutral-600 hover:text-neutral-950"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-neutral-100">
              <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-2">
                Réalisations
              </span>
              <div className="space-y-2 pl-3 border-l border-neutral-200">
                {[
                  { label: "Jantes aluminium", href: "/realisations/jantes-aluminium" },
                  { label: "Sports mécaniques", href: "/realisations/sports-mecaniques" },
                  { label: "Pièces sur mesure", href: "/realisations/pieces-sur-mesure" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-xs text-neutral-600 hover:text-neutral-950"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-neutral-100 space-y-2">
              <Link
                href="/boutique"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 font-medium text-neutral-900"
              >
                Boutique (Catalogue vitrine)
              </Link>
              <Link
                href="/a-propos"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 font-medium text-neutral-900"
              >
                À propos
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 font-medium text-neutral-900"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
