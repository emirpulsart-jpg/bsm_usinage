import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Phone, ArrowRight, Gauge, Compass, Layers, Sparkles, Wrench, Shield, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder';
import { ContactCtaSection } from '@/components/ContactCtaSection';

export const metadata: Metadata = {
  title: 'BSM Usinage | Usinage de Précision Haute-Savoie, Rumilly & Annecy',
  description:
    "BSM Usinage : atelier d'usinage de précision CNC, tournage, fraisage, jantes aluminium sur mesure et sports mécaniques à Rumilly en Haute-Savoie, près d'Annecy.",
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col bg-white">
      
      {/* ========================================================
          HERO SECTION AVEC VIDÉO EN LOOP (PC & Mobile plein écran latéral)
          ======================================================== */}
      <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] lg:min-h-[94vh] flex items-center overflow-hidden bg-neutral-950">
        
        {/* Vidéo Mobile (< md) */}
        <video
          className="md:hidden absolute inset-0 w-full h-full object-cover"
          src="/assets/aistudio/mobile_359866b3.mp4"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          preload="auto"
        />

        {/* Vidéo PC / Desktop (>= md) */}
        <video
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
          src="/assets/aistudio/pc_880fed10.mp4"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          preload="auto"
        />

        {/* Mini calque pour faire ressortir la headline écrite sur la vidéo */}
        <div className="absolute inset-0 bg-neutral-950/45 backdrop-brightness-[0.92]" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/25 to-neutral-950/45" />

        {/* Contenu textuel sur la vidéo - Calé sur la gauche sur PC comme la référence */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 sm:pt-40 lg:pt-48 pb-20 sm:pb-28 text-left text-white font-montserrat">
          <div className="max-w-3xl lg:max-w-4xl space-y-6">
            
            {/* Titre en MAJUSCULES avec la police exacte de l'entreprise */}
            <h1 className="font-montserrat text-3xl sm:text-5xl lg:text-6xl xl:text-[4.15rem] font-extrabold uppercase tracking-tight text-white leading-[1.08] drop-shadow-md">
              USINAGE DE PRÉCISION, ASSEMBLAGE ET SOUDURE EN HAUTE-SAVOIE
            </h1>

            {/* Sous-titre avec la police exacte */}
            <p className="font-montserrat text-sm sm:text-base lg:text-lg text-white/95 max-w-2xl font-normal leading-relaxed drop-shadow-sm">
              BSM Usinage conçoit et fabrique des pièces mécaniques d&apos;exception à Rumilly, près d&apos;Annecy.
            </p>

            {/* Les deux CTA conservés, disposés sur la gauche */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`tel:${siteConfig.phone.raw}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-neutral-950 font-montserrat font-bold text-xs uppercase tracking-wider hover:bg-neutral-100 transition-colors shadow-lg active:scale-[0.99] rounded-sm"
                aria-label={`Appeler BSM Usinage au ${siteConfig.phone.display}`}
              >
                <Phone className="w-4 h-4 fill-current stroke-none text-[#C5A059]" />
                <span>Appeler l&apos;atelier : {siteConfig.phone.display}</span>
              </a>

              <Link
                href="/expertises/usinage-de-precision-sur-mesure"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neutral-950/60 backdrop-blur-md border border-white/40 text-white font-montserrat font-semibold text-xs uppercase tracking-wider hover:bg-neutral-900/80 hover:border-white transition-colors rounded-sm"
              >
                <span>Découvrir nos expertises</span>
                <ArrowRight className="w-4 h-4 text-neutral-300" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Bandeau de réassurance sous la vidéo */}
      <section className="bg-white border-b border-neutral-100 py-10 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          <div className="p-2">
            <span className="text-xs font-semibold text-neutral-900 block">Tolérances fines</span>
            <p className="text-xs text-neutral-500 mt-1">Usinage rigoureux au centième de millimètre.</p>
          </div>
          <div className="p-2">
            <span className="text-xs font-semibold text-neutral-900 block">Sports mécaniques</span>
            <p className="text-xs text-neutral-500 mt-1">Pièces pour compétition auto, moto et piste.</p>
          </div>
          <div className="p-2">
            <span className="text-xs font-semibold text-neutral-900 block">Jantes sur mesure</span>
            <p className="text-xs text-neutral-500 mt-1">Usinées dans des blocs d&apos;aluminium massif.</p>
          </div>
          <div className="p-2">
            <span className="text-xs font-semibold text-neutral-900 block">Atelier à Rumilly</span>
            <p className="text-xs text-neutral-500 mt-1">Implantation locale proche du bassin d&apos;Annecy.</p>
          </div>
        </div>
      </section>

      {/* ========================================================
          PHOTO PLACEHOLDERS (Airy, elegant grid of real workshop photos)
          ======================================================== */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-4 border-b border-neutral-100 gap-4">
          <div>
            <h2 className="text-2xl font-light text-neutral-950 tracking-tight">
              Aperçu des réalisations &amp; de l&apos;atelier BSM Usinage
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              Photographies documentant le travail d&apos;usinage, les machines et les pièces finies
            </p>
          </div>
          <span className="text-xs text-neutral-400">
            Emplacements réservés pour les clichés réels
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <PhotoPlaceholder
            title="machine CNC en cours d'usinage haute précision"
            category="atelier"
            pageName="Accueil"
            photoRef="PHOTO-01"
            aspectRatio="4/3"
            description="Centre d'usinage numérique BSM Usinage en cours de passe de finition."
          />
          <PhotoPlaceholder
            title="jante aluminium développée et taillée dans la masse"
            category="jantes"
            pageName="Accueil"
            photoRef="PHOTO-02"
            aspectRatio="4/3"
            description="Jante monobloc allégée développée sur mesure pour la compétition."
          />
          <PhotoPlaceholder
            title="pièce de compétition pour sport mécanique"
            category="sports-mecaniques"
            pageName="Accueil"
            photoRef="PHOTO-03"
            aspectRatio="4/3"
            description="Moyeu ou liaison au sol allégée usinée selon des tolérances strictes."
          />
          <PhotoPlaceholder
            title="soudure technique TIG en atelier"
            category="soudure"
            pageName="Accueil"
            photoRef="PHOTO-04"
            aspectRatio="4/3"
            description="Cordon de soudure précis sur alliage d'aluminium dans notre atelier."
          />
        </div>
      </section>

      {/* ========================================================
          LES 6 EXPERTISES (Clean editorial presentation on white)
          ======================================================== */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-neutral-50 border-t border-b border-neutral-200/60">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium block mb-2">
              Savoir-Faire Industriel
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-neutral-950 tracking-tight">
              Nos expertises en usinage CNC
            </h2>
            <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
              De l&apos;étude de faisabilité jusqu&apos;à la pièce terminée et contrôlée, BSM Usinage met en œuvre des moyens modernes et un savoir-faire rigoureux à Rumilly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1 */}
            <Link
              href="/expertises/usinage-de-precision-sur-mesure"
              className="p-8 rounded-lg bg-white border border-neutral-200/70 hover:border-neutral-950 transition-all flex flex-col justify-between group"
            >
              <div>
                <Gauge className="w-6 h-6 text-neutral-800 mb-6" />
                <h3 className="text-lg font-medium text-neutral-950 group-hover:text-neutral-700 transition-colors">
                  Usinage de précision sur mesure
                </h3>
                <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
                  Pièces complexes unitaires, prototypes et petites séries. Tolérances géométriques fines pour applications industrielles et projets exigeants.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-medium text-neutral-950">
                <span>Consulter l&apos;expertise</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* 2 */}
            <Link
              href="/expertises/tournage-cnc"
              className="p-8 rounded-lg bg-white border border-neutral-200/70 hover:border-neutral-950 transition-all flex flex-col justify-between group"
            >
              <div>
                <Compass className="w-6 h-6 text-neutral-800 mb-6" />
                <h3 className="text-lg font-medium text-neutral-950 group-hover:text-neutral-700 transition-colors">
                  Tournage CNC
                </h3>
                <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
                  Usinage par révolution de haute précision. Arbres, bagues, axes cannelés et portées de roulement avec des finitions de surface soignées.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-medium text-neutral-950">
                <span>Consulter l&apos;expertise</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* 3 */}
            <Link
              href="/expertises/fraisage-cnc"
              className="p-8 rounded-lg bg-white border border-neutral-200/70 hover:border-neutral-950 transition-all flex flex-col justify-between group"
            >
              <div>
                <Layers className="w-6 h-6 text-neutral-800 mb-6" />
                <h3 className="text-lg font-medium text-neutral-950 group-hover:text-neutral-700 transition-colors">
                  Fraisage CNC
                </h3>
                <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
                  Centres d&apos;usinage multi-axes. Traitement des géométries 3D complexes, évidements fins, surfaçages précis et allègement mécanique.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-medium text-neutral-950">
                <span>Consulter l&apos;expertise</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* 4 */}
            <Link
              href="/expertises/sports-mecaniques"
              className="p-8 rounded-lg bg-white border border-neutral-200/70 hover:border-neutral-950 transition-all flex flex-col justify-between group"
            >
              <div>
                <Sparkles className="w-6 h-6 text-neutral-800 mb-6" />
                <h3 className="text-lg font-medium text-neutral-950 group-hover:text-neutral-700 transition-colors">
                  Sports mécaniques
                </h3>
                <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
                  Composants haute performance pour rallye, circuit et côte. Optimisation du ratio poids/résistance et résistance aux contraintes vibratoires.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-medium text-neutral-950">
                <span>Consulter l&apos;expertise</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* 5 */}
            <Link
              href="/expertises/etudes-techniques-et-conception"
              className="p-8 rounded-lg bg-white border border-neutral-200/70 hover:border-neutral-950 transition-all flex flex-col justify-between group"
            >
              <div>
                <Wrench className="w-6 h-6 text-neutral-800 mb-6" />
                <h3 className="text-lg font-medium text-neutral-950 group-hover:text-neutral-700 transition-colors">
                  Études techniques et conception
                </h3>
                <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
                  Modélisation 3D CAO/FAO, reconception de pièces d&apos;époque, optimisation pour l&apos;usinabilité et élaboration de plans de fabrication.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-medium text-neutral-950">
                <span>Consulter l&apos;expertise</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* 6 */}
            <Link
              href="/expertises/soudure"
              className="p-8 rounded-lg bg-white border border-neutral-200/70 hover:border-neutral-950 transition-all flex flex-col justify-between group"
            >
              <div>
                <Shield className="w-6 h-6 text-neutral-800 mb-6" />
                <h3 className="text-lg font-medium text-neutral-950 group-hover:text-neutral-700 transition-colors">
                  Soudure
                </h3>
                <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
                  Soudure technique de précision TIG et MIG sur aluminium, inox et aciers spécifiques. Ensembles mécano-soudés fiables et soignés.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-medium text-neutral-950">
                <span>Consulter l&apos;expertise</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ========================================================
          CONTRAST SECTION (Deep Black Kilian Paris Inspired Contrast Section)
          ======================================================== */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium block">
                Spécialité d&apos;Atelier
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight leading-tight">
                Jantes aluminium sur mesure &amp; pièces taillées dans la masse
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed">
                BSM Usinage assure la conception et l&apos;usinage de jantes en aluminium taillées dans la masse pour véhicules de course et projets automobiles spécifiques.
              </p>
              <ul className="space-y-3 text-xs text-neutral-300 pt-2">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0" />
                  <span>Réduction des masses non suspendues pour un gain dynamique immédiat.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0" />
                  <span>Déports (ET), largeurs et entraxes adaptés à votre train roulant.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0" />
                  <span>Contrôle rigoureux de circularité et équilibrage unitaire.</span>
                </li>
              </ul>

              <div className="pt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/realisations/jantes-aluminium"
                  className="px-6 py-3.5 rounded-full bg-white text-neutral-950 font-medium text-xs tracking-wider uppercase hover:bg-neutral-100 transition-colors"
                >
                  Voir les réalisations de jantes
                </Link>
                <a
                  href={`tel:${siteConfig.phone.raw}`}
                  className="px-6 py-3.5 rounded-full border border-neutral-700 text-white hover:bg-neutral-900 transition-colors text-xs font-medium tracking-wider uppercase flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Discuter de votre projet</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <PhotoPlaceholder
                title="jante aluminium taillée dans la masse en atelier"
                category="jantes"
                pageName="Accueil"
                photoRef="PHOTO-05"
                aspectRatio="16/9"
                description="Cliché haute définition d'une jante compétition usinée chez BSM Usinage."
                className="bg-neutral-900 border-neutral-800 text-neutral-100"
              />
              <PhotoPlaceholder
                title="pièce de liaison au sol de compétition sur véhicule"
                category="sports-mecaniques"
                pageName="Accueil"
                photoRef="PHOTO-06"
                aspectRatio="16/9"
                description="Composant monté et validé lors d'essais sur piste."
                className="bg-neutral-900 border-neutral-800 text-neutral-100"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          LOCAL SEO SECTION (Luminous white, airy, natural French)
          ======================================================== */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto w-full">
        <div className="p-8 sm:p-12 rounded-2xl bg-neutral-50 border border-neutral-200/80">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5A059] font-medium mb-3">
            <MapPin className="w-4 h-4" />
            <span>Implantation locale en Haute-Savoie</span>
          </div>
          <h2 className="text-2xl font-light text-neutral-950 tracking-tight">
            BSM Usinage : votre atelier d&apos;usinage à Rumilly
          </h2>
          <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
            Installée à <strong className="text-neutral-900">Rumilly (74150)</strong>, l&apos;entreprise BSM Usinage est idéalement située à proximité immédiate du bassin annécien et des grands axes reliant Annecy, Aix-les-Bains et Chambéry. Cette localisation nous permet d&apos;offrir une grande réactivité pour vos pièces unitaires, prototypes et pièces de compétition en Haute-Savoie.
          </p>
          <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
            Nous favorisons l&apos;échange technique direct : vous pouvez nous joindre par téléphone ou venir à l&apos;atelier pour valider ensemble vos plans et vos exigences d&apos;usinage.
          </p>

          <div className="mt-8 flex flex-wrap gap-2 text-xs text-neutral-600">
            <span className="px-3 py-1.5 rounded-full bg-white border border-neutral-200">Rumilly (74150)</span>
            <span className="px-3 py-1.5 rounded-full bg-white border border-neutral-200">Bassin annécien</span>
            <span className="px-3 py-1.5 rounded-full bg-white border border-neutral-200">Annecy</span>
            <span className="px-3 py-1.5 rounded-full bg-white border border-neutral-200">Haute-Savoie (74)</span>
            <span className="px-3 py-1.5 rounded-full bg-white border border-neutral-200">Sillon alpin</span>
          </div>
        </div>
      </section>

      {/* Strategic Contact Call Section */}
      <ContactCtaSection
        title="Un besoin d'usinage de précision ou de pièces de compétition ?"
        subtitle="Contactez l'atelier BSM Usinage à Rumilly. Nous examinons vos demandes en direct et vous conseillons sur les matériaux et les tolérances."
        highlightText={`Appelez le ${siteConfig.phone.display} pour un premier échange direct.`}
      />

    </div>
  );
}
