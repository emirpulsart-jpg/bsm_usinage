import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, ArrowRight, Info, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder';
import { ContactCtaSection } from '@/components/ContactCtaSection';

export const metadata: Metadata = {
  title: 'Catalogue de Présentation Pièces & Jantes | BSM Usinage',
  description:
    "Catalogue vitrine de pièces d'atelier, composants de compétition et jantes aluminium développées par BSM Usinage à Rumilly.",
  alternates: {
    canonical: `${siteConfig.url}/boutique`,
  },
};

interface CatalogItem {
  id: string;
  name: string;
  category: string;
  photoRef: string;
  photoTitle: string;
  description: string;
  specs: string[];
  availability: string;
}

const catalogItems: CatalogItem[] = [
  {
    id: "JANTE-ALU-MONOBLOC",
    name: "Jantes aluminium taillées dans la masse",
    category: "Jantes & Roues",
    photoRef: "PHOTO-BOUT-01",
    photoTitle: "jante aluminium monobloc usinée sur mesure",
    description: "Jante d'exception usinée à partir d'un bloc d'aluminium de haute résistance. Dessin de branches allégé et déport ajusté sur mesure.",
    specs: ["Diamètres : 15\" à 19\" sur étude", "Entraxes : 4 et 5 trous ou écrou central", "Finition : usiné brut, anodisé ou brossé", "Réduction des masses non suspendues"],
    availability: "Fabrication sur mesure et commande spécifique",
  },
  {
    id: "COUPELLE-UNIBALL",
    name: "Coupelles d'amortisseurs réglables sur rotules",
    category: "Liaison au Sol",
    photoRef: "PHOTO-BOUT-02",
    photoTitle: "coupelle d'amortisseur rotulée réglable",
    description: "Coupelles supérieures pour combinés filetés permettant le réglage précis du carrossage et de la chasse en compétition.",
    specs: ["Aluminium 7075 usiné dans la masse", "Rotules Uniball haute charge sans jeu", "Graduation pour réglages d'alignement", "Visserie haute résistance"],
    availability: "Adaptation selon véhicule / petite série",
  },
  {
    id: "CALES-ELARGISSEMENT",
    name: "Élargisseurs de voies avec double centrage",
    category: "Liaison au Sol",
    photoRef: "PHOTO-BOUT-03",
    photoTitle: "cale d'élargissement de voie usinée avec centrage",
    description: "Élargisseurs usinés au centième avec double centrage pour éliminer tout risque de vibration à haute vitesse.",
    specs: ["Épaisseur : de 10 mm à 45 mm au choix", "Double centrage précis", "Aluminium aéronautique ou acier allié", "Goujons ou inserts taraudés rapportés"],
    availability: "Usinage sur mesure selon vos cotes",
  },
  {
    id: "SUPPORT-ETRIER-GROS-FREINS",
    name: "Pattes d'adaptation pour étriers multi-pistons",
    category: "Freinage Compétition",
    photoRef: "PHOTO-BOUT-04",
    photoTitle: "platine support étrier de frein usinée CNC",
    description: "Platines rigides pour installer des étriers 4 ou 6 pistons sur pivots d'origine ou modifiés. Alignement rigoureux avec le disque.",
    specs: ["Usinage 3D multi-axes", "Matériau : aluminium haute dureté ou acier traité", "Filetages renforcés", "Tolérance d'alignement vérifiée"],
    availability: "Sur étude de votre pivot et de votre étrier",
  },
  {
    id: "BOLS-FREIN-ALU",
    name: "Bols de disques de frein flottants en aluminium",
    category: "Freinage Compétition",
    photoRef: "PHOTO-BOUT-05",
    photoTitle: "bol de frein flottant usiné en alu aéronautique",
    description: "Bols légers remplaçant les disques monoblocs lourds. Permet la dilatation radiale de la piste en fonte sans déformation.",
    specs: ["Gain de masse d'environ 30 à 40%", "Système d'entraînement par pions ou visserie flottante", "Anodisation protectrice", "Adaptable pour pistes compétition"],
    availability: "Fabrication sur mesure",
  },
  {
    id: "BRIDES-ADMISSION-ALU",
    name: "Brides d'admission usinées dans la masse",
    category: "Moteur & Admission",
    photoRef: "PHOTO-BOUT-06",
    photoTitle: "plénum d'admission et trompettes usinées",
    description: "Pièces d'écoulement de fluide haute performance pour boîtiers papillons, carburateurs ou suralimentation.",
    specs: ["Conduits lissés pour flux d'air optimisé", "Plan de joint surfacé garanti étanche", "Filetages pour capteurs intégrés", "Aluminium résistant à la chaleur"],
    availability: "Réalisation à la demande",
  },
];

export default function BoutiquePage() {
  return (
    <div className="flex flex-col bg-white">
      <Breadcrumb items={[{ label: 'Boutique (Catalogue vitrine)' }]} />

      {/* Header */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-b border-neutral-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#C5A059] font-medium mb-3">
            Atelier BSM Usinage • Rumilly
          </p>
          <h1 className="text-3xl sm:text-5xl font-light text-neutral-950 tracking-tight leading-tight">
            Catalogue de présentation
          </h1>
          <p className="mt-6 text-base sm:text-lg text-neutral-600 font-light max-w-3xl leading-relaxed">
            Consultez nos réalisations et pièces d&apos;atelier pour les sports mécaniques et la mécanique de précision. Toutes nos pièces sont fabriquées à l&apos;atelier BSM Usinage à Rumilly (Haute-Savoie) sur devis technique préalable.
          </p>

          <div className="mt-8 p-4 rounded-lg bg-neutral-50 border border-neutral-200 flex items-start gap-3 max-w-2xl">
            <Info className="w-5 h-5 text-neutral-800 shrink-0 mt-0.5" />
            <p className="text-xs text-neutral-600 leading-relaxed">
              <strong className="text-neutral-950">Catalogue vitrine d&apos;atelier (sans paiement en ligne) :</strong> Chaque projet nécessitant des dimensions précises et des matériaux adaptés à vos contraintes, nous établissons un chiffrage personnalisé après échange direct.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${siteConfig.phone.raw}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-neutral-950 text-white font-medium text-xs tracking-wider uppercase hover:bg-neutral-800 transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 fill-current stroke-none text-[#C5A059]" />
              <span>Commander ou se renseigner : {siteConfig.phone.display}</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-neutral-300 text-neutral-900 hover:border-neutral-900 transition-colors text-xs tracking-wider uppercase font-medium"
            >
              <span>Demander un chiffrage en ligne</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {catalogItems.map((item) => (
            <div
              key={item.id}
              className="rounded-xl bg-white border border-neutral-200/80 hover:border-neutral-400 transition-all flex flex-col justify-between overflow-hidden group shadow-xs"
            >
              <div>
                <PhotoPlaceholder
                  title={item.photoTitle}
                  category={item.category.includes('Jante') ? 'jantes' : 'sports-mecaniques'}
                  pageName="Boutique"
                  photoRef={item.photoRef}
                  aspectRatio="16/9"
                  description={item.name}
                  className="rounded-t-xl rounded-b-none border-0 border-b border-neutral-100"
                />

                <div className="p-6">
                  <span className="text-[11px] uppercase tracking-wider text-[#C5A059] font-medium block mb-2">
                    {item.category}
                  </span>

                  <h3 className="text-base font-semibold text-neutral-950">
                    {item.name}
                  </h3>

                  <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-neutral-100 space-y-2">
                    <span className="text-[11px] font-medium text-neutral-500 block mb-1">
                      Spécifications d&apos;atelier :
                    </span>
                    {item.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-neutral-100 mt-4 flex flex-col gap-3">
                <span className="text-[11px] text-neutral-500">
                  {item.availability}
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${siteConfig.phone.raw}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-md bg-neutral-950 text-white font-medium text-xs tracking-wider uppercase hover:bg-neutral-800 transition-colors"
                  >
                    <Phone className="w-3 h-3 fill-current stroke-none text-[#C5A059]" />
                    <span>Appeler l&apos;atelier</span>
                  </a>
                  <Link
                    href={`/contact?ref=${item.id}`}
                    className="inline-flex items-center justify-center py-2.5 px-4 rounded-md border border-neutral-200 text-neutral-700 hover:text-neutral-950 hover:border-neutral-950 transition-colors text-xs font-medium"
                  >
                    Devis
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ordering Steps */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto w-full border-t border-neutral-100">
        <div className="max-w-xl mb-12">
          <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium block mb-2">
            Modalités
          </span>
          <h2 className="text-2xl font-light text-neutral-950 tracking-tight">
            Comment commander vos pièces d&apos;atelier ?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
          <div className="p-6 rounded-lg bg-neutral-50 border border-neutral-200/80">
            <span className="text-xl font-light text-neutral-400">01.</span>
            <h3 className="text-sm font-semibold text-neutral-950 mt-2">Appel ou envoi de vos cotes</h3>
            <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
              Vous nous contactez par téléphone ou formulaire avec les dimensions et le modèle de votre véhicule.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-neutral-50 border border-neutral-200/80">
            <span className="text-xl font-light text-neutral-400">02.</span>
            <h3 className="text-sm font-semibold text-neutral-950 mt-2">Validation technique &amp; devis</h3>
            <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
              BSM Usinage vérifie la résistance, l&apos;usinabilité et vous remet un chiffrage avec un délai clair.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-neutral-50 border border-neutral-200/80">
            <span className="text-xl font-light text-neutral-400">03.</span>
            <h3 className="text-sm font-semibold text-neutral-950 mt-2">Fabrication &amp; mise à disposition</h3>
            <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
              Usinage dans l&apos;atelier de Rumilly, contrôle métrologique et retrait à l&apos;atelier ou expédition sécurisée.
            </p>
          </div>
        </div>
      </section>

      <ContactCtaSection
        title="Une pièce vous intéresse ou vous souhaitez un développement spécifique ?"
        subtitle="Appelez directement l'atelier BSM Usinage pour vérifier les cotes et le calendrier de fabrication."
        highlightText={`Téléphone BSM Usinage : ${siteConfig.phone.display}`}
      />
    </div>
  );
}
