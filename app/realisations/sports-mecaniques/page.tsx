import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder';
import { ContactCtaSection } from '@/components/ContactCtaSection';

export const metadata: Metadata = {
  title: 'Pièces Compétition | Réalisations BSM Usinage Haute-Savoie',
  description:
    "Galerie de pièces usinées pour la compétition par BSM Usinage : trains roulants, étriers, supports et liaisons au sol en Haute-Savoie.",
  alternates: {
    canonical: `${siteConfig.url}/realisations/sports-mecaniques`,
  },
};

export default function RealisationsSportsMecaniquesPage() {
  return (
    <div className="flex flex-col bg-white">
      <Breadcrumb
        items={[
          { label: 'Réalisations', href: '/realisations/jantes-aluminium' },
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
            Réalisations pour les sports mécaniques
          </h1>
          <p className="mt-6 text-base sm:text-lg text-neutral-600 font-light max-w-3xl leading-relaxed">
            Aperçu des composants mécaniques conçus et usinés par BSM Usinage à Rumilly pour le sport automobile, la moto et les véhicules de course soumis aux exigences les plus sévères.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${siteConfig.phone.raw}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-neutral-950 text-white font-medium text-xs tracking-wider uppercase hover:bg-neutral-800 transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 fill-current stroke-none text-[#C5A059]" />
              <span>Appeler l&apos;atelier : {siteConfig.phone.display}</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-neutral-300 text-neutral-900 hover:border-neutral-900 transition-colors text-xs tracking-wider uppercase font-medium"
            >
              <span>Demande technique & devis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Placeholders Gallery */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="mb-12 pb-4 border-b border-neutral-100">
          <h2 className="text-2xl font-light text-neutral-950 tracking-tight">
            Emplacements pour pièces de sports mécaniques
          </h2>
          <p className="text-xs text-neutral-500 mt-1">
            Photographies de composants de compétition développés par BSM Usinage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PhotoPlaceholder
            title="réalisation pour sport mécanique"
            category="sports-mecaniques"
            pageName="Sports mécaniques"
            photoRef="PHOTO-SM-01"
            aspectRatio="4/3"
            description="Pièce usinée en aluminium 7075 taillé dans la masse chez BSM Usinage."
          />
          <PhotoPlaceholder
            title="train avant complet usiné avec triangles sur mesure"
            category="sports-mecaniques"
            pageName="Sports mécaniques"
            photoRef="PHOTO-SM-02"
            aspectRatio="4/3"
            description="Triangles tubulaires mécano-soudés avec inserts usinés et rotules Uniball."
          />
          <PhotoPlaceholder
            title="support moteur rigide allégé pour sport auto"
            category="sports-mecaniques"
            pageName="Sports mécaniques"
            photoRef="PHOTO-SM-03"
            aspectRatio="4/3"
            description="Platine anti-cabrage usinée avec nervures de rigidification."
          />
          <PhotoPlaceholder
            title="bol de frein usiné en aluminium taillé masse"
            category="sports-mecaniques"
            pageName="Sports mécaniques"
            photoRef="PHOTO-SM-04"
            aspectRatio="4/3"
            description="Bol sur mesure flottant pour piste de frein en fonte avec visserie spécifique."
          />
          <PhotoPlaceholder
            title="ensemble mécanique de compétition monté sur circuit"
            category="sports-mecaniques"
            pageName="Sports mécaniques"
            photoRef="PHOTO-SM-05"
            aspectRatio="4/3"
            description="Composants en situation d'essai dans le paddock d'un circuit automobile."
          />
          <PhotoPlaceholder
            title="usinage d'une pièce de direction sport auto"
            category="sports-mecaniques"
            pageName="Sports mécaniques"
            photoRef="PHOTO-SM-06"
            aspectRatio="4/3"
            description="Biellettes et chapes usinées pour élargissement de voie de compétition."
          />
        </div>
      </section>

      {/* Main Content Details */}
      <section className="py-12 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto w-full border-t border-neutral-100">
        <div className="space-y-16 text-neutral-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-light text-neutral-950 tracking-tight mb-4">
              Des réponses techniques sur mesure pour la course
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Dans la préparation automobile, les pièces standard atteignent rapidement leurs limites techniques. BSM Usinage conçoit des composants adaptés aux passages de roues serrés, aux angles de carrossage agressifs et aux impératifs de tenue vibratoire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-neutral-50 border border-neutral-200/80">
              <h3 className="text-base font-semibold text-neutral-950 mb-4">
                Exemples de composants réalisés
              </h3>
              <ul className="space-y-2.5 text-xs text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Coupelles d&apos;amortisseurs sur rotules Uniball réglables</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Pattes de fixation pour étriers de freins multi-pistons</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Poulies vernier d&apos;arbres à cames à calage réglable</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Bagues de guidage et axes renforcés pour boîtes de vitesses</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-xl bg-neutral-50 border border-neutral-200/80">
              <h3 className="text-base font-semibold text-neutral-950 mb-4">
                Méthode de travail avec les écuries
              </h3>
              <ul className="space-y-2.5 text-xs text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Prise en compte des contraintes réglementaires de catégorie</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Sélection d&apos;alliages aéronautiques certifiés</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Réactivité pour respecter les calendriers d&apos;essais</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Conservation des programmes pour refabrication rapide</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-light text-neutral-950 tracking-tight mb-4">
              Atelier proche des circuits et rallyes alpins
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Implanté à Rumilly (Haute-Savoie), BSM Usinage est idéalement positionné pour intervenir rapidement auprès des écuries participant aux épreuves régionales et nationales.
            </p>
          </div>
        </div>
      </section>

      <ContactCtaSection
        title="Un besoin urgent de pièces pour votre saison de course ?"
        subtitle="Contactez l'atelier BSM Usinage à Rumilly pour vérifier la faisabilité et les délais d'usinage."
        highlightText={`Appelez le ${siteConfig.phone.display} pour un échange direct.`}
      />
    </div>
  );
}
