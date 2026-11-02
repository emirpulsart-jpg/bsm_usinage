import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder';
import { ContactCtaSection } from '@/components/ContactCtaSection';

export const metadata: Metadata = {
  title: 'Tournage CNC | BSM Usinage Haute-Savoie, Rumilly & Annecy',
  description:
    "Usinage de précision par tournage CNC pour pièces de révolution exigeantes en Haute-Savoie. Échangez avec l'atelier BSM Usinage.",
  alternates: {
    canonical: `${siteConfig.url}/expertises/tournage-cnc`,
  },
};

export default function TournageCncPage() {
  return (
    <div className="flex flex-col bg-white">
      <Breadcrumb
        items={[
          { label: 'Expertises', href: '/expertises/usinage-de-precision-sur-mesure' },
          { label: 'Tournage CNC' },
        ]}
      />

      {/* Header */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-b border-neutral-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#C5A059] font-medium mb-3">
            Atelier BSM Usinage • Rumilly
          </p>
          <h1 className="text-3xl sm:text-5xl font-light text-neutral-950 tracking-tight leading-tight">
            Tournage CNC de haute précision
          </h1>
          <p className="mt-6 text-base sm:text-lg text-neutral-600 font-light max-w-3xl leading-relaxed">
            Fabrication de pièces de révolution complexes avec des états de surface soignés, des tolérances fines et une concentricité rigoureuse. Atelier situé à Rumilly, près d&apos;Annecy en Haute-Savoie.
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
              <span>Demander une faisabilité</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Placeholders Grid */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PhotoPlaceholder
            title="tour CNC en cours d'usinage d'axe de précision"
            category="atelier"
            pageName="Tournage CNC"
            photoRef="PHOTO-TOURN-01"
            aspectRatio="4/3"
            description="Opération de chariotage et dressage avec arrosage haute pression chez BSM Usinage."
          />
          <PhotoPlaceholder
            title="pièces de révolution usinées au tournage CNC"
            category="usinage"
            pageName="Tournage CNC"
            photoRef="PHOTO-TOURN-02"
            aspectRatio="4/3"
            description="Ensemble de bagues, entretoises et arbres cannelés aux cotes rigoureuses."
          />
          <PhotoPlaceholder
            title="détail de filetage et portée de roulement rectifiée"
            category="usinage"
            pageName="Tournage CNC"
            photoRef="PHOTO-TOURN-03"
            aspectRatio="4/3"
            description="Gros plan sur un état de surface net et filetages coniques spécifiques."
          />
        </div>
      </section>

      {/* Main Content Details */}
      <section className="py-12 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto w-full border-t border-neutral-100">
        <div className="space-y-16 text-neutral-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-light text-neutral-950 tracking-tight mb-4">
              La maîtrise du tournage à commande numérique
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Le tournage CNC constitue l&apos;un des piliers de l&apos;atelier BSM Usinage à Rumilly. Grâce à des cycles d&apos;usinage maîtrisés et des outillages coupants rigides, nous réalisons des pièces de révolution répondant aux exigences mécaniques les plus strictes : arbres de transmission, manchons, fusées de roues, entretoises de compétition et raccords filetés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-neutral-50 border border-neutral-200/80">
              <h3 className="text-base font-semibold text-neutral-950 mb-4">
                Opérations de tournage maîtrisées
              </h3>
              <ul className="space-y-2.5 text-xs text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Chariotage, dressage et tronçonnage de précision</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Alésages intérieurs et gorges de circlips précises</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Filetages intérieurs et extérieurs métriques et spécifiques</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Portées de roulements aux tolérances H7, h6, js6</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-xl bg-neutral-50 border border-neutral-200/80">
              <h3 className="text-base font-semibold text-neutral-950 mb-4">
                Applications courantes
              </h3>
              <ul className="space-y-2.5 text-xs text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Sports mécaniques (axes de pivots, goujons, coupelles)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Machines spéciales et outillage de production</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Prototypage pour bureaux d&apos;études et concepteurs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Rénovation de pièces mécaniques spécifiques</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-light text-neutral-950 tracking-tight mb-4">
              Contrôle dimensionnel rigoureux
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Chaque pièce unitaire ou série fait l&apos;objet de vérifications métrologiques à l&apos;atelier (micromètres, comparateurs, cales étalons). BSM Usinage assure ainsi la répétabilité et la conformité stricte avec votre plan.
            </p>
          </div>
        </div>
      </section>

      <ContactCtaSection
        title="Besoin d'un tournage CNC pour vos pièces de révolution ?"
        subtitle="Consultez l'atelier BSM Usinage à Rumilly pour vérifier la faisabilité et les délais d'exécution."
        highlightText={`Contactez-nous directement par téléphone au ${siteConfig.phone.display}.`}
      />
    </div>
  );
}
