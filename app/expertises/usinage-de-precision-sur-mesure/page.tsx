import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder';
import { ContactCtaSection } from '@/components/ContactCtaSection';

export const metadata: Metadata = {
  title: 'Usinage sur Mesure | BSM Usinage Haute-Savoie, Rumilly, Annecy',
  description:
    "Fabrication de pièces mécaniques complexes sur mesure, prototypes et petites séries. Haute précision d'usinage chez BSM Usinage à Rumilly.",
  alternates: {
    canonical: `${siteConfig.url}/expertises/usinage-de-precision-sur-mesure`,
  },
};

export default function UsinageSurMesurePage() {
  return (
    <div className="flex flex-col bg-white">
      <Breadcrumb
        items={[
          { label: 'Expertises', href: '/expertises/usinage-de-precision-sur-mesure' },
          { label: 'Usinage de précision sur mesure' },
        ]}
      />

      {/* Header */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-b border-neutral-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#C5A059] font-medium mb-3">
            Atelier BSM Usinage • Rumilly
          </p>
          <h1 className="text-3xl sm:text-5xl font-light text-neutral-950 tracking-tight leading-tight">
            Usinage de précision sur mesure
          </h1>
          <p className="mt-6 text-base sm:text-lg text-neutral-600 font-light max-w-3xl leading-relaxed">
            De la pièce unitaire complexe au prototype fonctionnel, BSM Usinage met en œuvre des tolérances fines et un contrôle rigoureux pour concrétiser vos plans et cahiers des charges les plus exigeants en Haute-Savoie.
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
              <span>Demande d&apos;étude & devis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Placeholders Grid */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PhotoPlaceholder
            title="pièce usinée sur mesure aux tolérances serrées"
            category="usinage"
            pageName="Usinage de précision sur mesure"
            photoRef="PHOTO-USIN-01"
            aspectRatio="4/3"
            description="Exemple d'une pièce mécanique complexe en alliage haute résistance usinée sur plan."
          />
          <PhotoPlaceholder
            title="détail des finitions d'usinage et surfaçage"
            category="usinage"
            pageName="Usinage de précision sur mesure"
            photoRef="PHOTO-USIN-02"
            aspectRatio="4/3"
            description="Contrôle de l'état de surface et chanfreins de précision."
          />
          <PhotoPlaceholder
            title="machine CNC en cours de passe de finition"
            category="atelier"
            pageName="Usinage de précision sur mesure"
            photoRef="PHOTO-USIN-03"
            aspectRatio="4/3"
            description="Usinage grande vitesse dans l'atelier BSM Usinage à Rumilly."
          />
        </div>
      </section>

      {/* Content Details */}
      <section className="py-12 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto w-full border-t border-neutral-100">
        <div className="space-y-16 text-neutral-700 leading-relaxed">
          
          <div>
            <h2 className="text-2xl font-light text-neutral-950 tracking-tight mb-4">
              Fabrication mécanique sur plan, modèle ou fichier 3D
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Chaque projet d&apos;usinage sur mesure chez BSM Usinage débute par une analyse détaillée de vos contraintes fonctionnelles. Que vous nous transmettiez un fichier 3D (STEP, IGES, DXF) ou une pièce modèle à reproduire, nous étudions l&apos;usinabilité et sélectionnons les stratégies d&apos;outils adaptées pour respecter vos tolérances dimensionnelles et géométriques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-neutral-50 border border-neutral-200/80">
              <h3 className="text-base font-semibold text-neutral-950 mb-4">
                Matériaux travaillés
              </h3>
              <p className="text-xs text-neutral-500 mb-4">
                BSM Usinage usine des métaux et alliages adaptés aux fortes contraintes mécaniques :
              </p>
              <ul className="space-y-2.5 text-xs text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Alliages d&apos;aluminium (2017, 6082, 7075 Fortal...)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Aciers de construction, aciers prétraités et alliés</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Aciers inoxydables (304L, 316L, 17-4PH)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Laiton, bronze et plastiques techniques (POM, PEEK)</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-xl bg-neutral-50 border border-neutral-200/80">
              <h3 className="text-base font-semibold text-neutral-950 mb-4">
                Types de besoins traités
              </h3>
              <p className="text-xs text-neutral-500 mb-4">
                Une flexibilité adaptée aux urgences de compétition comme aux projets industriels :
              </p>
              <ul className="space-y-2.5 text-xs text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Pièces unitaires et prototypes de validation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Petites et moyennes séries répétables</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Remplacement de pièces mécaniques introuvables</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Outillages spécifiques et gabarits de montage</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-light text-neutral-950 tracking-tight mb-4">
              Atelier de proximité à Rumilly
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Installée à Rumilly en Haute-Savoie, l&apos;équipe de BSM Usinage est un interlocuteur de proximité pour les professionnels d&apos;Annecy, du sillon alpin et de la région. Vous bénéficiez d&apos;un contact direct pour échanger autour de vos pièces et de vos exigences.
            </p>
          </div>

        </div>
      </section>

      <ContactCtaSection
        title="Un projet de pièce unitaire ou petite série à usiner ?"
        subtitle="Présentez-nous vos plans cotés ou venez directement à l'atelier BSM Usinage à Rumilly."
        highlightText={`Appelez le ${siteConfig.phone.display} pour un échange technique direct.`}
      />
    </div>
  );
}
