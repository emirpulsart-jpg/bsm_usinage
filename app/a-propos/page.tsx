import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, ArrowRight, Gauge, HeartHandshake, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder';
import { ContactCtaSection } from '@/components/ContactCtaSection';

export const metadata: Metadata = {
  title: 'À Propos de BSM Usinage | Atelier de Précision Rumilly',
  description:
    "Découvrez BSM Usinage : notre exigence technique, notre passion des sports mécaniques et notre savoir-faire d'usinage à Rumilly en Haute-Savoie.",
  alternates: {
    canonical: `${siteConfig.url}/a-propos`,
  },
};

export default function AProposPage() {
  return (
    <div className="flex flex-col bg-white">
      <Breadcrumb items={[{ label: 'À propos' }]} />

      {/* Header */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-b border-neutral-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#C5A059] font-medium mb-3">
            Atelier BSM Usinage • Rumilly
          </p>
          <h1 className="text-3xl sm:text-5xl font-light text-neutral-950 tracking-tight leading-tight">
            À propos de BSM Usinage
          </h1>
          <p className="mt-6 text-base sm:text-lg text-neutral-600 font-light max-w-3xl leading-relaxed">
            Fondée sur une passion constante de la mécanique de précision et des sports mécaniques, l&apos;entreprise BSM Usinage cultive la rigueur métrologique, le soin des finitions et la satisfaction du travail bien fait à Rumilly, en Haute-Savoie.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${siteConfig.phone.raw}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-neutral-950 text-white font-medium text-xs tracking-wider uppercase hover:bg-neutral-800 transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 fill-current stroke-none text-[#C5A059]" />
              <span>Joindre BSM Usinage : {siteConfig.phone.display}</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-neutral-300 text-neutral-900 hover:border-neutral-900 transition-colors text-xs tracking-wider uppercase font-medium"
            >
              <span>Prendre contact</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Placeholders Grid */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <PhotoPlaceholder
            title="machine CNC et environnement d'atelier propre"
            category="atelier"
            pageName="À propos"
            photoRef="PHOTO-APROP-01"
            aspectRatio="4/3"
            description="Vue d'ensemble de l'atelier BSM Usinage à Rumilly."
          />
          <PhotoPlaceholder
            title="outillage de métrologie et instruments de contrôle de précision"
            category="atelier"
            pageName="À propos"
            photoRef="PHOTO-APROP-02"
            aspectRatio="4/3"
            description="Marbre d'ajustage, micromètres et colonnes de mesure en atelier."
          />
          <PhotoPlaceholder
            title="préparation d'un bloc d'aluminium massif avant usinage"
            category="usinage"
            pageName="À propos"
            photoRef="PHOTO-APROP-03"
            aspectRatio="4/3"
            description="Brut d'alliage aéronautique contrôlé avant bridage chez BSM Usinage."
          />
          <PhotoPlaceholder
            title="réalisation en cours d'ajustage manuel et finition"
            category="atelier"
            pageName="À propos"
            photoRef="PHOTO-APROP-04"
            aspectRatio="4/3"
            description="Opération manuelle d'ébavurage soigné."
          />
        </div>
      </section>

      {/* Pillars & Values */}
      <section className="py-12 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto w-full border-t border-neutral-100">
        <div className="space-y-16 text-neutral-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-light text-neutral-950 tracking-tight mb-4">
              Technologie numérique et exigence de fabrication
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Chez BSM Usinage, chaque pièce est programmée, usinée et contrôlée avec une implication constante. Nous allions la précision des centres d&apos;usinage à commande numérique à l&apos;attention au détail indispensable aux pièces mécaniques sollicitées sous forte charge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-neutral-50 border border-neutral-200/80">
              <Gauge className="w-6 h-6 text-neutral-900 mb-4" />
              <h3 className="text-base font-semibold text-neutral-950 mb-2">Exigence technique</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Le respect scrupuleux des cotes, des ajustements géométriques et des états de surface est notre règle absolue.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-neutral-50 border border-neutral-200/80">
              <HeartHandshake className="w-6 h-6 text-neutral-900 mb-4" />
              <h3 className="text-base font-semibold text-neutral-950 mb-2">Dialogue direct</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Vous échangez directement avec les spécialistes qui règlent les machines et réalisent vos pièces à l&apos;atelier.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-neutral-50 border border-neutral-200/80">
              <MapPin className="w-6 h-6 text-neutral-900 mb-4" />
              <h3 className="text-base font-semibold text-neutral-950 mb-2">Ancrage en Haute-Savoie</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Implanté à Rumilly (74150), l&apos;atelier valorise le savoir-faire mécanique savoyard au service d&apos;Annecy et du sillon alpin.
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-xl bg-neutral-50 border border-neutral-200/80">
            <h3 className="text-lg font-medium text-neutral-950 mb-3">
              Rumilly : un atelier accessible au cœur du sillon alpin
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              La Haute-Savoie possède une culture reconnue dans l&apos;usinage de haute précision. BSM Usinage s&apos;inscrit dans cette exigence en l&apos;appliquant aux sports mécaniques, au prototypage et aux pièces industrielles sur mesure.
            </p>
            <p className="text-xs sm:text-sm text-neutral-600 mt-3 leading-relaxed">
              À proximité immédiate de l&apos;axe autoroutier A41 et des liaisons entre Annecy et Chambéry, nous accueillons nos clients sur rendez-vous pour étudier leurs projets autour de leurs plans.
            </p>
          </div>
        </div>
      </section>

      <ContactCtaSection
        title="Vous souhaitez échanger sur un projet avec BSM Usinage ?"
        subtitle="Contactez-nous pour organiser votre venue à l'atelier de Rumilly (Haute-Savoie)."
        highlightText={`Appelez le ${siteConfig.phone.display} pour convenir d'un rendez-vous d'atelier.`}
      />
    </div>
  );
}
