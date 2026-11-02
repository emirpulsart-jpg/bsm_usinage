import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder';
import { ContactCtaSection } from '@/components/ContactCtaSection';

export const metadata: Metadata = {
  title: 'Fraisage CNC | BSM Usinage Haute-Savoie, Rumilly & Annecy',
  description:
    "Fraisage numérique CNC haute précision pour prototypes et pièces techniques. Atelier BSM Usinage situé à Rumilly desservant le bassin annécien.",
  alternates: {
    canonical: `${siteConfig.url}/expertises/fraisage-cnc`,
  },
};

export default function FraisageCncPage() {
  return (
    <div className="flex flex-col bg-white">
      <Breadcrumb
        items={[
          { label: 'Expertises', href: '/expertises/usinage-de-precision-sur-mesure' },
          { label: 'Fraisage CNC' },
        ]}
      />

      {/* Header */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-b border-neutral-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#C5A059] font-medium mb-3">
            Atelier BSM Usinage • Rumilly
          </p>
          <h1 className="text-3xl sm:text-5xl font-light text-neutral-950 tracking-tight leading-tight">
            Fraisage CNC multi-axes
          </h1>
          <p className="mt-6 text-base sm:text-lg text-neutral-600 font-light max-w-3xl leading-relaxed">
            Centres d&apos;usinage numérique adaptés aux formes géométriques complexes, évidements fins, poches profondes et surfaçages haute précision au cœur de la Haute-Savoie.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${siteConfig.phone.raw}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-neutral-950 text-white font-medium text-xs tracking-wider uppercase hover:bg-neutral-800 transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 fill-current stroke-none text-[#C5A059]" />
              <span>Appeler BSM Usinage : {siteConfig.phone.display}</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-neutral-300 text-neutral-900 hover:border-neutral-900 transition-colors text-xs tracking-wider uppercase font-medium"
            >
              <span>Soumettre un fichier 3D</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Placeholders Grid */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PhotoPlaceholder
            title="centre d'usinage fraisage CNC en cours de fraisage dynamique"
            category="atelier"
            pageName="Fraisage CNC"
            photoRef="PHOTO-FRAIS-01"
            aspectRatio="4/3"
            description="Fraisage grande vitesse d'un bloc d'aluminium aéronautique 7075 chez BSM Usinage."
          />
          <PhotoPlaceholder
            title="pièce fraisée 3D complexe taillée dans la masse"
            category="usinage"
            pageName="Fraisage CNC"
            photoRef="PHOTO-FRAIS-02"
            aspectRatio="4/3"
            description="Support mécanique sculpté dans la masse avec évidements d'allègement poussés."
          />
          <PhotoPlaceholder
            title="détail d'évidement et finition d'état de surface"
            category="usinage"
            pageName="Fraisage CNC"
            photoRef="PHOTO-FRAIS-03"
            aspectRatio="4/3"
            description="Vue détaillée des trajectoires d'outils et de l'homogénéité des états de surface."
          />
        </div>
      </section>

      {/* Main Content Details */}
      <section className="py-12 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto w-full border-t border-neutral-100">
        <div className="space-y-16 text-neutral-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-light text-neutral-950 tracking-tight mb-4">
              Performances du fraisage numérique
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Le parc d&apos;usinage de BSM Usinage à Rumilly permet de traiter des pièces prismatiques aux géométries complexes sans rupture de précision. De l&apos;ébauche dynamique permettant d&apos;évacuer rapidement le volume de copeaux jusqu&apos;aux passes de finition soignées, nous apportons une attention constante à la précision géométrique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-neutral-50 border border-neutral-200/80">
              <h3 className="text-base font-semibold text-neutral-950 mb-4">
                Capacités en fraisage CNC
              </h3>
              <ul className="space-y-2.5 text-xs text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Usinage de formes 3D complexes et profils galbés</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Évidements profonds et poches avec rayons d&apos;outils réduits</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Nervures fines d&apos;allègement pour sports mécaniques</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Répétabilité dimensionnelle et surfaçages de plans de joints</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-xl bg-neutral-50 border border-neutral-200/80">
              <h3 className="text-base font-semibold text-neutral-950 mb-4">
                Exemples de pièces fraisées
              </h3>
              <ul className="space-y-2.5 text-xs text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Platines de fixation moteur et boîtes de vitesses</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Étriers de freins sur mesure et cales d&apos;adaptation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Boîtiers étanches en aluminium taillé dans la masse</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Gabarits de positionnement et outillages spécifiques</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-light text-neutral-950 tracking-tight mb-4">
              Programmation FAO et simulation d&apos;usinage
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Avant chaque usinage, les trajectoires d&apos;outils sont validées virtuellement pour éliminer tout risque d&apos;erreur et garantir la qualité d&apos;exécution sur vos blocs de matière première.
            </p>
          </div>
        </div>
      </section>

      <ContactCtaSection
        title="Une pièce complexe à fraiser en commande numérique ?"
        subtitle="Faites étudier votre fichier CAO par notre équipe BSM Usinage à Rumilly (Haute-Savoie)."
        highlightText={`Joignez directement notre atelier au ${siteConfig.phone.display}.`}
      />
    </div>
  );
}
