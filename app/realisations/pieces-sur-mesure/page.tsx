import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder';
import { ContactCtaSection } from '@/components/ContactCtaSection';

export const metadata: Metadata = {
  title: 'Pièces Usinées sur Mesure | Réalisations BSM Usinage',
  description:
    "Sélection de prototypes et pièces uniques usinées par BSM Usinage à Rumilly pour l'industrie et la mécanique de pointe.",
  alternates: {
    canonical: `${siteConfig.url}/realisations/pieces-sur-mesure`,
  },
};

export default function RealisationsPiecesSurMesurePage() {
  return (
    <div className="flex flex-col bg-white">
      <Breadcrumb
        items={[
          { label: 'Réalisations', href: '/realisations/jantes-aluminium' },
          { label: 'Pièces sur mesure' },
        ]}
      />

      {/* Header */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-b border-neutral-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#C5A059] font-medium mb-3">
            Atelier BSM Usinage • Rumilly
          </p>
          <h1 className="text-3xl sm:text-5xl font-light text-neutral-950 tracking-tight leading-tight">
            Réalisations de pièces sur mesure
          </h1>
          <p className="mt-6 text-base sm:text-lg text-neutral-600 font-light max-w-3xl leading-relaxed">
            Sélection de pièces mécaniques complexes, composants d&apos;outillage et prototypes façonnés dans l&apos;atelier de BSM Usinage à Rumilly en Haute-Savoie.
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
              <span>Envoyer votre plan de pièce</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Placeholders Gallery */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="mb-12 pb-4 border-b border-neutral-100">
          <h2 className="text-2xl font-light text-neutral-950 tracking-tight">
            Emplacements pour pièces usinées sur mesure
          </h2>
          <p className="text-xs text-neutral-500 mt-1">
            Photographies de composants unitaires et prototypes réalisés chez BSM Usinage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PhotoPlaceholder
            title="pièce usinée sur mesure"
            category="usinage"
            pageName="Pièces sur mesure"
            photoRef="PHOTO-PSM-01"
            aspectRatio="4/3"
            description="Composant mécanique de précision usiné en alliage technique avec surfaçage soigné."
          />
          <PhotoPlaceholder
            title="prototype mécanique de précision usiné dans un bloc massif"
            category="usinage"
            pageName="Pièces sur mesure"
            photoRef="PHOTO-PSM-02"
            aspectRatio="4/3"
            description="Prototype fonctionnel usiné chez BSM Usinage avant phase de validation."
          />
          <PhotoPlaceholder
            title="outillage industriel spécifique sur mesure"
            category="usinage"
            pageName="Pièces sur mesure"
            photoRef="PHOTO-PSM-03"
            aspectRatio="4/3"
            description="Mors doux ou gabarit de positionnement conçu pour atelier de production."
          />
          <PhotoPlaceholder
            title="pièce mécanique complexe avec alésages multiples"
            category="usinage"
            pageName="Pièces sur mesure"
            photoRef="PHOTO-PSM-04"
            aspectRatio="4/3"
            description="Bloc d'alésages croisés avec tolérances géométriques strictes."
          />
          <PhotoPlaceholder
            title="pièce de rénovation d'un mécanisme historique introuvable"
            category="usinage"
            pageName="Pièces sur mesure"
            photoRef="PHOTO-PSM-05"
            aspectRatio="4/3"
            description="Refabrication à l'identique d'un pignon ou arbre de machine ancienne."
          />
          <PhotoPlaceholder
            title="petite série de pièces contrôlées prêtes à l'expédition"
            category="usinage"
            pageName="Pièces sur mesure"
            photoRef="PHOTO-PSM-06"
            aspectRatio="4/3"
            description="Conditionnement soigné après contrôle dimensionnel final en atelier."
          />
        </div>
      </section>

      {/* Main Content Details */}
      <section className="py-12 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto w-full border-t border-neutral-100">
        <div className="space-y-16 text-neutral-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-light text-neutral-950 tracking-tight mb-4">
              De l&apos;unité d&apos;exception aux séries répétables
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Qu&apos;il s&apos;agisse de concevoir une pièce unique pour lever un verrou technique ou d&apos;usiner une petite série avec une géométrie répétable, BSM Usinage adapte sa programmation avec rigueur. Nous appliquons la même exigence de finition que sur nos pièces de compétition automobile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-neutral-50 border border-neutral-200/80">
              <h3 className="text-base font-semibold text-neutral-950 mb-4">
                Types de pièces réalisées
              </h3>
              <ul className="space-y-2.5 text-xs text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Bâtis et corps d&apos;instruments de mesure</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Poulies crantées spécifiques et barillets de distribution</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Bagues de guidage en bronze et axes rectifiés</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Brides de raccordement pour fluides et haute pression</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-xl bg-neutral-50 border border-neutral-200/80">
              <h3 className="text-base font-semibold text-neutral-950 mb-4">
                Exigence de qualité BSM Usinage
              </h3>
              <ul className="space-y-2.5 text-xs text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Traçabilité et sélection de matières premières conformes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Ébavurage manuel minutieux sous loupe d&apos;atelier</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Finitions d&apos;aspect soignées (microbillage, polissage)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Contrôle métrologique avant expédition</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-light text-neutral-950 tracking-tight mb-4">
              Au service des industriels et passionnés de Haute-Savoie
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Notre réactivité fait la différence pour les donneurs d&apos;ordres du bassin annécien et de Haute-Savoie. Vous échangez directement avec les professionnels qui fabriquent vos pièces dans l&apos;atelier de Rumilly.
            </p>
          </div>
        </div>
      </section>

      <ContactCtaSection
        title="Vous avez un plan de pièce sur mesure à chiffrer ?"
        subtitle="Contactez l'atelier BSM Usinage à Rumilly. Nous répondons rapidement à vos demandes."
        highlightText={`Appelez le ${siteConfig.phone.display} pour un échange direct sur vos tolérances.`}
      />
    </div>
  );
}
