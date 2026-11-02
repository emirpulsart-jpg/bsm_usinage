import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder';
import { ContactCtaSection } from '@/components/ContactCtaSection';

export const metadata: Metadata = {
  title: 'Jantes Aluminium sur Mesure | Réalisations BSM Usinage',
  description:
    "Conception et usinage dans la masse de jantes aluminium sur mesure pour véhicules de course et d'exception par BSM Usinage.",
  alternates: {
    canonical: `${siteConfig.url}/realisations/jantes-aluminium`,
  },
};

export default function JantesAluminiumPage() {
  return (
    <div className="flex flex-col bg-white">
      <Breadcrumb
        items={[
          { label: 'Réalisations', href: '/realisations/jantes-aluminium' },
          { label: 'Jantes aluminium' },
        ]}
      />

      {/* Header */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-b border-neutral-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#C5A059] font-medium mb-3">
            Atelier BSM Usinage • Rumilly
          </p>
          <h1 className="text-3xl sm:text-5xl font-light text-neutral-950 tracking-tight leading-tight">
            Jantes aluminium sur mesure
          </h1>
          <p className="mt-6 text-base sm:text-lg text-neutral-600 font-light max-w-3xl leading-relaxed">
            Conception sur mesure, usinage dans la masse d&apos;aluminium aéronautique, allègement minutieux et finitions de haut niveau pour autos de course, répliques historiques et véhicules d&apos;exception.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${siteConfig.phone.raw}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-neutral-950 text-white font-medium text-xs tracking-wider uppercase hover:bg-neutral-800 transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 fill-current stroke-none text-[#C5A059]" />
              <span>Discuter de vos jantes : {siteConfig.phone.display}</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-neutral-300 text-neutral-900 hover:border-neutral-900 transition-colors text-xs tracking-wider uppercase font-medium"
            >
              <span>Demander un devis sur mesure</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Placeholders Gallery */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="mb-12 pb-4 border-b border-neutral-100">
          <h2 className="text-2xl font-light text-neutral-950 tracking-tight">
            Emplacements pour photographies de jantes développées
          </h2>
          <p className="text-xs text-neutral-500 mt-1">
            Photographies de jantes usinées dans la masse chez BSM Usinage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PhotoPlaceholder
            title="jante aluminium taillée dans la masse - vue face et profil"
            category="jantes"
            pageName="Jantes aluminium"
            photoRef="PHOTO-JANT-01"
            aspectRatio="4/3"
            description="Vue d'ensemble d'une jante forgée usinée avec dessin de branches allégées."
          />
          <PhotoPlaceholder
            title="détail d'usinage du voile intérieur et des poches d'allègement"
            category="jantes"
            pageName="Jantes aluminium"
            photoRef="PHOTO-JANT-02"
            aspectRatio="4/3"
            description="Zoom sur les évidements au dos des branches pour gagner en masse non suspendue."
          />
          <PhotoPlaceholder
            title="jante alu personnalisée sur moyeu de sport automobile"
            category="jantes"
            pageName="Jantes aluminium"
            photoRef="PHOTO-JANT-03"
            aspectRatio="4/3"
            description="Montage sur véhicule avec dégagement d'étrier de frein surdimensionné."
          />
          <PhotoPlaceholder
            title="jante aluminium compétition en cours d'usinage 5 axes"
            category="atelier"
            pageName="Jantes aluminium"
            photoRef="PHOTO-JANT-04"
            aspectRatio="4/3"
            description="Opération d'usinage des bâtons en atelier chez BSM Usinage."
          />
          <PhotoPlaceholder
            title="finition de surface brossée et vernie sur jante prototype"
            category="jantes"
            pageName="Jantes aluminium"
            photoRef="PHOTO-JANT-05"
            aspectRatio="4/3"
            description="État de surface soigné avant traitement de protection thermique."
          />
          <PhotoPlaceholder
            title="série de jantes aluminium sur mesure prêtes pour contrôle métrologique"
            category="jantes"
            pageName="Jantes aluminium"
            photoRef="PHOTO-JANT-06"
            aspectRatio="4/3"
            description="Jeu de jantes contrôlées en circularité et voile au comparateur."
          />
        </div>
      </section>

      {/* Main Content Details */}
      <section className="py-12 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto w-full border-t border-neutral-100">
        <div className="space-y-16 text-neutral-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-light text-neutral-950 tracking-tight mb-4">
              Pourquoi développer des jantes sur mesure ?
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Dans de nombreux projets de préparation automobile ou de restauration de véhicules historiques, les jantes standard ne conviennent pas : déports inadaptés qui frottent sur les combinés filetés, manque d&apos;espace pour les étriers de freins volumineux, entraxes introuvables ou recherche d&apos;un dessin spécifique associant rigidité torsionnelle et légèreté.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-neutral-50 border border-neutral-200/80">
              <h3 className="text-base font-semibold text-neutral-950 mb-4">
                Paramètres sur mesure adaptables
              </h3>
              <ul className="space-y-2.5 text-xs text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span><strong>Diamètre & largeur :</strong> du 13&quot; au 19&quot; sur mesure selon les profils</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span><strong>Déport technique (ET) :</strong> ajusté au millimètre pour un affleurement parfait</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span><strong>Entraxe & alésage central :</strong> perçages 4, 5 trous ou écrou central monotrou</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span><strong>Dégagement intérieur :</strong> étudié pour bols et étriers de compétition</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-xl bg-neutral-50 border border-neutral-200/80">
              <h3 className="text-base font-semibold text-neutral-950 mb-4">
                Processus d&apos;usinage chez BSM Usinage
              </h3>
              <ul className="space-y-2.5 text-xs text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Prise de cotes rigoureuse sur le train roulant</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Modélisation 3D et validation visuelle du dessin</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Usinage par tournage et fraisage CNC dans un bloc massif</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Contrôle de concentricité, d&apos;équilibrage et finitions soignées</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-light text-neutral-950 tracking-tight mb-4">
              Fabrication en atelier à Rumilly
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Chaque jeu de jantes est usiné dans notre atelier de Rumilly (74150). BSM Usinage privilégie un dialogue direct avec chaque client afin de garantir un résultat irréprochable sur piste comme sur route.
            </p>
          </div>
        </div>
      </section>

      <ContactCtaSection
        title="Un projet de jantes aluminium sur mesure ?"
        subtitle="Présentez-nous vos cotes de train ou vos souhaits stylistiques à l'atelier BSM Usinage à Rumilly."
        highlightText={`Appelez le ${siteConfig.phone.display} pour étudier la faisabilité technique.`}
      />
    </div>
  );
}
