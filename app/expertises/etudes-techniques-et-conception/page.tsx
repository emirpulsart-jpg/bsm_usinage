import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder';
import { ContactCtaSection } from '@/components/ContactCtaSection';

export const metadata: Metadata = {
  title: 'Études Techniques & CAO | BSM Usinage Haute-Savoie',
  description:
    "Bureau d'études techniques, modélisation 3D et optimisation d'usinage par BSM Usinage à Rumilly, proche d'Annecy.",
  alternates: {
    canonical: `${siteConfig.url}/expertises/etudes-techniques-et-conception`,
  },
};

export default function EtudesTechniquesPage() {
  return (
    <div className="flex flex-col bg-white">
      <Breadcrumb
        items={[
          { label: 'Expertises', href: '/expertises/usinage-de-precision-sur-mesure' },
          { label: 'Études techniques et conception' },
        ]}
      />

      {/* Header */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-b border-neutral-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#C5A059] font-medium mb-3">
            Atelier BSM Usinage • Rumilly
          </p>
          <h1 className="text-3xl sm:text-5xl font-light text-neutral-950 tracking-tight leading-tight">
            Études techniques et conception mécanique
          </h1>
          <p className="mt-6 text-base sm:text-lg text-neutral-600 font-light max-w-3xl leading-relaxed">
            De l&apos;esquisse à la pièce finie. BSM Usinage modélise vos composants, optimise vos fichiers 3D pour l&apos;usinage numérique et conçoit des outillages sur mesure à Rumilly en Haute-Savoie.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${siteConfig.phone.raw}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-neutral-950 text-white font-medium text-xs tracking-wider uppercase hover:bg-neutral-800 transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 fill-current stroke-none text-[#C5A059]" />
              <span>Échanger sur votre étude : {siteConfig.phone.display}</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-neutral-300 text-neutral-900 hover:border-neutral-900 transition-colors text-xs tracking-wider uppercase font-medium"
            >
              <span>Envoyer un croquis ou fichier</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Placeholders Grid */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PhotoPlaceholder
            title="modélisation 3D CAO d'une pièce mécanique complexe"
            category="conception"
            pageName="Études techniques et conception"
            photoRef="PHOTO-CONC-01"
            aspectRatio="4/3"
            description="Vue volumique d'un ensemble mécanique modélisé sous logiciel CAO chez BSM Usinage."
          />
          <PhotoPlaceholder
            title="mise en plan technique cotée avec tolérances géométriques"
            category="conception"
            pageName="Études techniques et conception"
            photoRef="PHOTO-CONC-02"
            aspectRatio="4/3"
            description="Dessin technique normalisé avec cotation fonctionnelle et états de surface."
          />
          <PhotoPlaceholder
            title="validation et simulation des trajectoires d'usinage FAO"
            category="conception"
            pageName="Études techniques et conception"
            photoRef="PHOTO-CONC-03"
            aspectRatio="4/3"
            description="Contrôle virtuel des passes d'outils avant usinage réel."
          />
        </div>
      </section>

      {/* Main Content Details */}
      <section className="py-12 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto w-full border-t border-neutral-100">
        <div className="space-y-16 text-neutral-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-light text-neutral-950 tracking-tight mb-4">
              L&apos;alliance de la conception 3D et de la pratique d&apos;atelier
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Un dessin doit être conçu pour être usinable de manière rationnelle sans compromettre sa résistance. Chez BSM Usinage, notre savoir-faire d&apos;atelier oriente dès le départ la modélisation vers les stratégies de coupe les plus directes et les plus fiables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-neutral-50 border border-neutral-200/80">
              <h3 className="text-base font-semibold text-neutral-950 mb-4">
                Prestations d&apos;études &amp; CAO
              </h3>
              <ul className="space-y-2.5 text-xs text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Modélisation 3D à partir de croquis, pièces physiques ou cahier des charges</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Rétro-conception de pièces cassées ou de pièces d&apos;époque épuisées</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Optimisation pour la fabrication (Design for Manufacturing)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Élaboration de plans d&apos;exécution côtés pour usinage</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-xl bg-neutral-50 border border-neutral-200/80">
              <h3 className="text-base font-semibold text-neutral-950 mb-4">
                Formats numériques acceptés
              </h3>
              <p className="text-xs text-neutral-500 mb-4">
                BSM Usinage intègre vos fichiers de modélisation standards :
              </p>
              <ul className="space-y-2.5 text-xs text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span><strong>Fichiers 3D :</strong> STEP (.stp), IGES (.igs), Parasolid (.x_t)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span><strong>Plans 2D :</strong> DXF, DWG, PDF vectoriel</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span><strong>Croquis cotés :</strong> relevés manuels exploitables</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-light text-neutral-950 tracking-tight mb-4">
              Conseils techniques sur les matières et finitions
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Chaque nuance d&apos;alliage possède des caractéristiques propres sous contrainte. BSM Usinage vous conseille sur le choix le plus pertinent selon que votre composant nécessite légèreté, résistance à la fatigue, glissement ou tenue à la corrosion.
            </p>
          </div>
        </div>
      </section>

      <ContactCtaSection
        title="Un concept ou une pièce à modéliser et fabriquer ?"
        subtitle="Partagez vos idées ou vos plans avec l'atelier BSM Usinage à Rumilly (Haute-Savoie)."
        highlightText={`Appelez le ${siteConfig.phone.display} pour en discuter directement.`}
      />
    </div>
  );
}
