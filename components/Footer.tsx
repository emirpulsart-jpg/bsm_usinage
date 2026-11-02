import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 text-xs border-t border-neutral-900">
      
      {/* Top Footer Call Bar */}
      <div className="border-b border-neutral-900 py-10 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#C5A059] block mb-1">
              Contact atelier direct
            </span>
            <h3 className="text-xl font-light text-white tracking-tight">
              Un projet mécanique ou une pièce de compétition à fabriquer ?
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Appelez directement notre atelier pour étudier vos tolérances et vos délais.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <a
              href={`tel:${siteConfig.phone.raw}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-neutral-950 font-medium text-xs tracking-wider uppercase hover:bg-neutral-100 transition-colors shadow-sm"
              aria-label={`Appeler BSM Usinage : ${siteConfig.phone.display}`}
            >
              <Phone className="w-3.5 h-3.5 fill-current stroke-none text-[#C5A059]" />
              <span>Nous appeler : {siteConfig.phone.display}</span>
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto flex items-center justify-center px-6 py-3.5 rounded-full border border-neutral-700 text-white hover:bg-neutral-900 transition-colors text-xs font-medium tracking-wider uppercase"
            >
              <span>Demander un devis</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Col 1: BSM Usinage Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="font-semibold text-lg text-white tracking-tight">
                BSM <span className="font-light text-neutral-400">Usinage</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Atelier d&apos;usinage de précision CNC, tournage, fraisage, jantes aluminium sur mesure et soudure technique. Une exigence industrielle et artisanale basée à Rumilly en Haute-Savoie.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-start gap-2.5 text-neutral-300">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.city} ({siteConfig.address.postalCode}), {siteConfig.address.department}
                  <br />
                  <span className="text-neutral-500 text-[11px]">{siteConfig.address.note}</span>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a
                  href={`tel:${siteConfig.phone.raw}`}
                  className="text-white hover:text-[#C5A059] transition-colors font-medium"
                >
                  {siteConfig.phone.display}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-neutral-500 shrink-0" />
                <span className="text-neutral-400">
                  {siteConfig.email.display}
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Expertises */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Expertises
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <Link href="/expertises/usinage-de-precision-sur-mesure" className="hover:text-white transition-colors">
                  Usinage sur mesure
                </Link>
              </li>
              <li>
                <Link href="/expertises/tournage-cnc" className="hover:text-white transition-colors">
                  Tournage CNC
                </Link>
              </li>
              <li>
                <Link href="/expertises/fraisage-cnc" className="hover:text-white transition-colors">
                  Fraisage CNC
                </Link>
              </li>
              <li>
                <Link href="/expertises/sports-mecaniques" className="hover:text-white transition-colors">
                  Sports mécaniques
                </Link>
              </li>
              <li>
                <Link href="/expertises/etudes-techniques-et-conception" className="hover:text-white transition-colors">
                  Études techniques & CAO
                </Link>
              </li>
              <li>
                <Link href="/expertises/soudure" className="hover:text-white transition-colors">
                  Soudure technique
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Réalisations & Pages */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Réalisations & Boutique
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <Link href="/realisations/jantes-aluminium" className="hover:text-white transition-colors">
                  Jantes aluminium
                </Link>
              </li>
              <li>
                <Link href="/realisations/sports-mecaniques" className="hover:text-white transition-colors">
                  Sports mécaniques
                </Link>
              </li>
              <li>
                <Link href="/realisations/pieces-sur-mesure" className="hover:text-white transition-colors">
                  Pièces sur mesure
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/boutique" className="text-neutral-200 hover:text-white transition-colors">
                  Boutique (Catalogue vitrine)
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-white transition-colors">
                  À propos de BSM Usinage
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Devis
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Zone locale */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Zone d&apos;intervention
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Atelier situé à <strong className="text-neutral-200">Rumilly (74150)</strong>. BSM Usinage répond aux exigences des donneurs d&apos;ordres locaux :
            </p>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li>• Rumilly et Pays de Rumilly</li>
              <li>• Annecy et bassin annécien</li>
              <li>• Haute-Savoie (74)</li>
              <li>• Savoie et sillon alpin (73, 38)</li>
            </ul>
            <p className="text-[11px] text-neutral-500 italic pt-1">
              Note : BSM Usinage est implantée à Rumilly (Haute-Savoie), à proximité du bassin d&apos;Annecy.
            </p>
          </div>

        </div>

        {/* Legal bottom */}
        <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} BSM Usinage • Rumilly, Haute-Savoie. Tous droits réservés.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="hover:text-neutral-300 transition-colors">
              Mentions légales
            </Link>
            <span>•</span>
            <Link href="/politique-de-confidentialite" className="hover:text-neutral-300 transition-colors">
              Protection des données personnelles
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
