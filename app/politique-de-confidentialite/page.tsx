import React from 'react';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | BSM Usinage Haute-Savoie',
  description: "Politique de protection des données personnelles (RGPD) de l'atelier BSM Usinage à Rumilly (Haute-Savoie).",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="flex flex-col bg-white">
      <Breadcrumb items={[{ label: 'Politique de protection des données' }]} />

      <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl font-light text-neutral-950 tracking-tight mb-8">
          Politique de Protection des Données Personnelles
        </h1>

        <div className="space-y-8 text-neutral-700 text-xs sm:text-sm leading-relaxed">
          <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200 text-neutral-800">
            <strong>Engagement de confidentialité :</strong> L&apos;atelier BSM Usinage s&apos;engage à protéger la vie privée des utilisateurs et clients conformément au Règlement Général sur la Protection des Données (RGPD n° 2016/679) et à la loi Informatique et Libertés.
          </div>

          <div>
            <h2 className="text-base font-semibold text-neutral-950 mb-3">
              1. Responsable du traitement
            </h2>
            <p className="text-neutral-600">
              Le responsable du traitement des données est l&apos;entreprise BSM Usinage, domiciliée à Rumilly (74150), joignable par téléphone au {siteConfig.phone.display} ou par e-mail à l&apos;adresse {siteConfig.email.display}.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-neutral-950 mb-3">
              2. Données collectées &amp; finalités
            </h2>
            <p className="text-neutral-600 mb-2">
              Les données à caractère personnel collectées sont celles que vous transmettez directement lors d&apos;un appel téléphonique ou via notre formulaire de contact :
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-600">
              <li>Nom, prénom et dénomination de votre entreprise / écurie ;</li>
              <li>Numéro de téléphone et adresse électronique ;</li>
              <li>Éléments techniques relatifs à votre projet (plans côtés, tolérances, spécifications).</li>
            </ul>
            <p className="text-neutral-600 mt-2">
              Ces données sont utilisées uniquement pour répondre à vos demandes, établir vos devis d&apos;usinage et assurer le suivi des fabrications. Elles ne sont ni cédées, ni vendues.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-neutral-950 mb-3">
              3. Absence de traceurs intrusifs
            </h2>
            <p className="text-neutral-600">
              Le site de BSM Usinage respecte votre confidentialité : aucun cookie publicitaire ou outil de pistage intrusif n&apos;est activé par défaut.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-neutral-950 mb-3">
              4. Durée de conservation
            </h2>
            <p className="text-neutral-600">
              Les données commerciales sont conservées le temps nécessaire à la relation commerciale (3 ans à compter du dernier contact pour les prospects, durée légale pour les devis et factures).
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-neutral-950 mb-3">
              5. Vos droits
            </h2>
            <p className="text-neutral-600">
              Vous disposez d&apos;un droit d&apos;accès, de rectification et d&apos;effacement de vos données personnelles. Vous pouvez exercer ce droit à tout moment en contactant BSM Usinage par courriel ou par courrier postal.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
