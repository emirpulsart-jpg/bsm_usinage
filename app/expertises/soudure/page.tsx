import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder';
import { ContactCtaSection } from '@/components/ContactCtaSection';

export const metadata: Metadata = {
  title: 'Soudure TIG MIG Aluminium & Inox | BSM Usinage Rumilly',
  description:
    "Travaux de soudure de précision TIG et MIG sur aluminium, inox et aciers alliés chez BSM Usinage à Rumilly en Haute-Savoie.",
  alternates: {
    canonical: `${siteConfig.url}/expertises/soudure`,
  },
};

export default function SoudureExpertisePage() {
  return (
    <div className="flex flex-col bg-white">
      <Breadcrumb
        items={[
          { label: 'Expertises', href: '/expertises/usinage-de-precision-sur-mesure' },
          { label: 'Soudure' },
        ]}
      />

      {/* Header */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-b border-neutral-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#C5A059] font-medium mb-3">
            Atelier BSM Usinage • Rumilly
          </p>
          <h1 className="text-3xl sm:text-5xl font-light text-neutral-950 tracking-tight leading-tight">
            Soudure technique de précision
          </h1>
          <p className="mt-6 text-base sm:text-lg text-neutral-600 font-light max-w-3xl leading-relaxed">
            Soudure soignée sur aluminium, inox et aciers spécifiques. BSM Usinage réalise des ensembles mécano-soudés fiables, esthétiques et rigoureux pour la compétition mécanique et l&apos;industrie en Haute-Savoie.
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
              <span>Demander un avis technique</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Placeholders Grid */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PhotoPlaceholder
            title="soudure en atelier"
            category="soudure"
            pageName="Soudure"
            photoRef="PHOTO-SOUD-01"
            aspectRatio="4/3"
            description="Opérateur en cours de soudage TIG sous flux d'argon dans l'atelier BSM Usinage."
          />
          <PhotoPlaceholder
            title="cordon de soudure TIG aluminium haute régularité"
            category="soudure"
            pageName="Soudure"
            photoRef="PHOTO-SOUD-02"
            aspectRatio="4/3"
            description="Cordon de soudure régulier sur alliage d'aluminium technique."
          />
          <PhotoPlaceholder
            title="ensemble mécano-soudé de précision pour châssis de compétition"
            category="soudure"
            pageName="Soudure"
            photoRef="PHOTO-SOUD-03"
            aspectRatio="4/3"
            description="Berceau ou structure tubulaire mécano-soudée assemblée sur marbre."
          />
        </div>
      </section>

      {/* Main Content Details */}
      <section className="py-12 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto w-full border-t border-neutral-100">
        <div className="space-y-16 text-neutral-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-light text-neutral-950 tracking-tight mb-4">
              L&apos;exigence de la soudure appliquée à la mécanique
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Dans un atelier d&apos;usinage de précision, la soudure requiert la maîtrise rigoureuse de l&apos;apport thermique pour éviter toute déformation géométrique ou altération des caractéristiques mécaniques des alliages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-neutral-50 border border-neutral-200/80">
              <h3 className="text-base font-semibold text-neutral-950 mb-4">
                Matériaux soudés en atelier
              </h3>
              <ul className="space-y-2.5 text-xs text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span><strong>Aluminium & alliages :</strong> soudage TIG de carters, réservoirs, tubulures</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span><strong>Aciers inoxydables (304, 316) :</strong> lignes d&apos;échappement et tuyauteries techniques</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span><strong>Aciers au chrome-molybdène (25CrMo4) :</strong> structures tubulaires et berceaux</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span><strong>Aciers de construction :</strong> assemblages mécano-soudés robustes</span>
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
                  <span>Réparation et recharge de carters fissurés ou filetages arrachés</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Fabrication de réservoirs tampon et échangeurs sur mesure</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Assemblage de gabarits d&apos;usinage et outillages d&apos;atelier</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Assemblage mécano-soudé suivi d&apos;une reprise sur centre CNC</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-light text-neutral-950 tracking-tight mb-4">
              Complémentarité usinage et soudure chez BSM Usinage
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Notre atelier assure la chaîne complète : soudure technique puis reprise sur nos centres d&apos;usinage CNC pour rectifier les faces d&apos;appui, alésages et portées aux cotes exactes après libération des contraintes thermiques.
            </p>
          </div>
        </div>
      </section>

      <ContactCtaSection
        title="Un travail de soudure technique ou de réparation à réaliser ?"
        subtitle="Apportez votre pièce ou décrivez votre besoin à l'atelier BSM Usinage à Rumilly."
        highlightText={`Contactez directement notre équipe au ${siteConfig.phone.display}.`}
      />
    </div>
  );
}
