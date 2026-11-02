import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder';
import { ContactCtaSection } from '@/components/ContactCtaSection';

export const metadata: Metadata = {
  title: 'Sports Mécaniques & Compétition | BSM Usinage Haute-Savoie',
  description:
    "Pièces allégées et composants de compétition auto et moto usinés par BSM Usinage à Rumilly, près d'Annecy en Haute-Savoie.",
  alternates: {
    canonical: `${siteConfig.url}/expertises/sports-mecaniques`,
  },
};

export default function SportsMecaniquesExpertisePage() {
  return (
    <div className="flex flex-col bg-white">
      <Breadcrumb
        items={[
          { label: 'Expertises', href: '/expertises/usinage-de-precision-sur-mesure' },
          { label: 'Sports mécaniques' },
        ]}
      />

      {/* Header */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-b border-neutral-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#C5A059] font-medium mb-3">
            Atelier BSM Usinage • Rumilly
          </p>
          <h1 className="text-3xl sm:text-5xl font-light text-neutral-950 tracking-tight leading-tight">
            Usinage pour les sports mécaniques
          </h1>
          <p className="mt-6 text-base sm:text-lg text-neutral-600 font-light max-w-3xl leading-relaxed">
            Dans la compétition automobile et moto, la légèreté et la fiabilité sous contrainte sont déterminantes. BSM Usinage conçoit et usine des pièces critiques optimisées pour encaisser les sollicitations dynamiques les plus extrêmes.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${siteConfig.phone.raw}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-neutral-950 text-white font-medium text-xs tracking-wider uppercase hover:bg-neutral-800 transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 fill-current stroke-none text-[#C5A059]" />
              <span>Contacter BSM Usinage : {siteConfig.phone.display}</span>
            </a>
            <Link
              href="/realisations/sports-mecaniques"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-neutral-300 text-neutral-900 hover:border-neutral-900 transition-colors text-xs tracking-wider uppercase font-medium"
            >
              <span>Voir les pièces de compétition</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Placeholders Grid */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PhotoPlaceholder
            title="composant mécanique de compétition usiné en aluminium taillé masse"
            category="sports-mecaniques"
            pageName="Sports mécaniques"
            photoRef="PHOTO-SPORT-01"
            aspectRatio="4/3"
            description="Support d'étrier ou porte-moyeu usiné dans la masse chez BSM Usinage pour véhicule de rallye."
          />
          <PhotoPlaceholder
            title="pièce de liaison au sol allégée pour voiture de piste ou course de côte"
            category="sports-mecaniques"
            pageName="Sports mécaniques"
            photoRef="PHOTO-SPORT-02"
            aspectRatio="4/3"
            description="Triangle ou biellette rotulée avec finition soignée."
          />
          <PhotoPlaceholder
            title="montage de précision d'une pièce d'atelier sur véhicule de course"
            category="sports-mecaniques"
            pageName="Sports mécaniques"
            photoRef="PHOTO-SPORT-03"
            aspectRatio="4/3"
            description="Ajustement à blanc sur châssis de compétition."
          />
        </div>
      </section>

      {/* Main Content Details */}
      <section className="py-12 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto w-full border-t border-neutral-100">
        <div className="space-y-16 text-neutral-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-light text-neutral-950 tracking-tight mb-4">
              L&apos;exigence de la compétition au cœur de notre atelier
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Imprégnée par la passion de la mécanique sportive, l&apos;entreprise BSM Usinage accompagne les pilotes, préparateurs et écuries de Haute-Savoie et de toute la région alpine. Nous intervenons en rallye, circuit, course de côte, drift et préparations mécaniques spécifiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-neutral-50 border border-neutral-200/80">
              <h3 className="text-base font-semibold text-neutral-950 mb-4">
                Domaines d&apos;intervention sur le véhicule
              </h3>
              <ul className="space-y-2.5 text-xs text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span><strong>Liaisons au sol :</strong> coupelles réglables, cales de carrossage, moyeux</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span><strong>Freinage :</strong> platines pour gros freins, bols de disques démontables en alu</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span><strong>Moteur & transmission :</strong> poulies réglables, brides, supports rigides</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span><strong>Châssis :</strong> renforts tubulaires mécano-soudés et rotules de précision</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-xl bg-neutral-50 border border-neutral-200/80">
              <h3 className="text-base font-semibold text-neutral-950 mb-4">
                Exigences de la compétition
              </h3>
              <ul className="space-y-2.5 text-xs text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Optimisation minutieuse des masses pour gagner en réactivité</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Rayons de raccordement soignés pour éliminer les amorces de rupture</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Réactivité d&apos;usinage entre deux épreuves ou lors d&apos;une casse</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Contrôle dimensionnel systématique avant mise en piste</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-light text-neutral-950 tracking-tight mb-4">
              Atelier à l&apos;écoute des préparateurs près d&apos;Annecy
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Situé à Rumilly (74150), BSM Usinage favorise un échange direct et pragmatique avec les teams de course de la région. Vous dialoguez directement avec les spécialistes qui usinent vos pièces critiques.
            </p>
          </div>
        </div>
      </section>

      <ContactCtaSection
        title="Vous préparez une auto ou une moto de course ?"
        subtitle="Confiez vos pièces critiques à l'atelier BSM Usinage à Rumilly (Haute-Savoie)."
        highlightText={`Appelez le ${siteConfig.phone.display} pour discuter de votre montage.`}
      />
    </div>
  );
}
