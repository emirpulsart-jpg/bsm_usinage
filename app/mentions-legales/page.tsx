import React from 'react';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Mentions Légales | BSM Usinage Haute-Savoie',
  description: "Mentions légales et informations administratives de l'atelier BSM Usinage à Rumilly (Haute-Savoie).",
  robots: {
    index: false,
    follow: true,
  },
};

export default function MentionsLegalesPage() {
  return (
    <div className="flex flex-col bg-white">
      <Breadcrumb items={[{ label: 'Mentions Légales' }]} />

      <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl font-light text-neutral-950 tracking-tight mb-8">
          Mentions Légales
        </h1>

        <div className="space-y-8 text-neutral-700 text-xs sm:text-sm leading-relaxed">
          <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200 text-neutral-800">
            <strong>Note d&apos;information :</strong> Les coordonnées juridiques et administratives ci-dessous sont présentées sous forme de champs réservés et seront complétées lors de l&apos;immatriculation finale de BSM Usinage.
          </div>

          <div>
            <h2 className="text-base font-semibold text-neutral-950 mb-3">
              1. Éditeur du site
            </h2>
            <ul className="space-y-1.5 text-neutral-600">
              <li><strong>Dénomination :</strong> BSM Usinage</li>
              <li><strong>Forme juridique :</strong> [SARL / SAS / Entreprise Individuelle à préciser]</li>
              <li><strong>Capital social :</strong> [Montant en euros à préciser]</li>
              <li><strong>Siège de l&apos;atelier :</strong> [Adresse complète à préciser], 74150 Rumilly, Haute-Savoie, France</li>
              <li><strong>Numéro SIREN / SIRET :</strong> [Numéro à préciser]</li>
              <li><strong>RCS :</strong> [RCS Annecy - À préciser]</li>
              <li><strong>Numéro TVA intracommunautaire :</strong> [FR XX XXXXXXXXX]</li>
              <li><strong>Directeur de la publication :</strong> [Responsable BSM Usinage]</li>
              <li><strong>Téléphone :</strong> {siteConfig.phone.display}</li>
              <li><strong>Courriel :</strong> {siteConfig.email.display}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-neutral-950 mb-3">
              2. Hébergement du site
            </h2>
            <p className="text-neutral-600">
              Le site est hébergé sur une infrastructure de type cloud computing conforme aux standards de sécurité européens :<br />
              Google Cloud Platform / Cloud Run<br />
              Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlande.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-neutral-950 mb-3">
              3. Propriété intellectuelle
            </h2>
            <p className="text-neutral-600">
              L&apos;ensemble des contenus présents sur ce site (textes, structure générale, éléments graphiques et visuels) sont la propriété exclusive de BSM Usinage ou font l&apos;objet d&apos;une autorisation d&apos;exploitation. Toute reproduction totale ou partielle sans accord préalable écrit est interdite.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-neutral-950 mb-3">
              4. Devis &amp; engagement technique
            </h2>
            <p className="text-neutral-600">
              Les éléments et visuels présentés sur le site ont une valeur informative. Seuls les devis, plans côtés et cahiers des charges formellement validés par écrit entre BSM Usinage et le donneur d&apos;ordres engagent la responsabilité des parties.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
