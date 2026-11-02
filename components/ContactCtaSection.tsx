import React from 'react';
import Link from 'next/link';
import { Phone, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface ContactCtaSectionProps {
  title?: string;
  subtitle?: string;
  highlightText?: string;
}

export function ContactCtaSection({
  title = "Parlons de votre projet d'usinage",
  subtitle = "Notre atelier à Rumilly étudie vos plans 2D/3D, vos tolérances et vos exigences techniques pour la compétition ou l'industrie.",
  highlightText = "Appelez-nous pour échanger directement avec l'atelier.",
}: ContactCtaSectionProps) {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-neutral-950 text-white relative">
      <div className="max-w-4xl mx-auto text-center">
        
        <p className="text-xs uppercase tracking-widest text-[#C5A059] font-medium mb-4">
          Atelier BSM Usinage • Rumilly & Bassin Annécien
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white max-w-3xl mx-auto leading-tight">
          {title}
        </h2>

        <p className="mt-6 text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <p className="mt-3 text-sm text-[#C5A059] font-medium">
          {highlightText}
        </p>

        {/* Primary Call Action & Secondary Button */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${siteConfig.phone.raw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-neutral-950 font-medium text-xs uppercase tracking-wider hover:bg-neutral-100 transition-colors shadow-lg"
            aria-label={`Appeler BSM Usinage : ${siteConfig.phone.display}`}
          >
            <Phone className="w-4 h-4 fill-current stroke-none text-[#C5A059]" />
            <span>Appeler l&apos;atelier : {siteConfig.phone.display}</span>
          </a>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-neutral-700 text-white hover:bg-neutral-900 transition-colors text-xs uppercase tracking-wider font-medium"
          >
            <span>Demander un devis</span>
            <ArrowRight className="w-4 h-4 text-neutral-400" />
          </Link>
        </div>

        {/* Three Pillars */}
        <div className="mt-20 pt-12 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-[#C5A059]" />
              <h3 className="text-sm font-medium text-white">Réactivité d&apos;échange</h3>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Étude rapide de vos fichiers STEP, IGES ou plans cotés.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <h3 className="text-sm font-medium text-white">Tolérances rigoureuses</h3>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Contrôle dimensionnel unitaire pour mécanique d&apos;excellence.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-[#C5A059]" />
              <h3 className="text-sm font-medium text-white">Atelier à Rumilly (74)</h3>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Proximité directe Annecy, Chambéry et sillon alpin.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
