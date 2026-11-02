'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    projectType: 'usinage-sur-mesure',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col bg-white">
      <Breadcrumb items={[{ label: 'Contact' }]} />

      {/* Header */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-b border-neutral-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#C5A059] font-medium mb-3">
            Atelier BSM Usinage • Rumilly
          </p>
          <h1 className="text-3xl sm:text-5xl font-light text-neutral-950 tracking-tight leading-tight">
            Contacter BSM Usinage
          </h1>
          <p className="mt-6 text-base sm:text-lg text-neutral-600 font-light max-w-3xl leading-relaxed">
            Pour toute demande d&apos;étude de faisabilité, transmission de plans cotés ou question sur une pièce de compétition, nous vous invitons à privilégier l&apos;appel téléphonique ou à nous écrire ci-dessous.
          </p>

          {/* High Priority Call Banner */}
          <div className="mt-10 p-6 rounded-2xl bg-neutral-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 fill-current stroke-none text-[#C5A059]" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#C5A059] font-medium block">
                  Priorité à l&apos;échange téléphonique direct
                </span>
                <span className="text-xl sm:text-2xl font-semibold text-white">
                  {siteConfig.phone.display}
                </span>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Ligne directe de l&apos;atelier BSM Usinage à Rumilly.
                </p>
              </div>
            </div>
            <a
              href={`tel:${siteConfig.phone.raw}`}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-neutral-950 font-medium text-xs uppercase tracking-wider hover:bg-neutral-100 transition-colors text-center"
            >
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-xl font-light text-neutral-950 tracking-tight mb-3">
                Coordonnées de l&apos;Atelier
              </h2>
              <p className="text-xs text-neutral-600 leading-relaxed">
                L&apos;atelier BSM Usinage est situé à <strong className="text-neutral-900">Rumilly (74150)</strong> en Haute-Savoie, facilement accessible depuis Annecy et le sillon alpin.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-200/80 space-y-6 text-xs text-neutral-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-neutral-950">Adresse de l&apos;atelier</div>
                  <div className="text-neutral-600 mt-1">
                    BSM Usinage<br />
                    {siteConfig.address.street}<br />
                    {siteConfig.address.postalCode} {siteConfig.address.city}<br />
                    {siteConfig.address.department}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-1">
                    (Coordonnées complétées ultérieurement)
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-4 border-t border-neutral-200/60">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-neutral-950">Téléphone atelier</div>
                  <a
                    href={`tel:${siteConfig.phone.raw}`}
                    className="text-sm font-semibold text-neutral-950 hover:text-neutral-700 transition-colors block mt-0.5"
                  >
                    {siteConfig.phone.display}
                  </a>
                  <div className="text-[11px] text-neutral-400">
                    Ligne directe responsable d&apos;atelier
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-4 border-t border-neutral-200/60">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-neutral-950">Courrier électronique</div>
                  <a
                    href={`mailto:${siteConfig.email.raw}`}
                    className="text-neutral-700 hover:text-neutral-950 transition-colors block mt-0.5"
                  >
                    {siteConfig.email.display}
                  </a>
                  <div className="text-[11px] text-neutral-400">
                    Pour l&apos;envoi de fichiers 3D (STEP, IGES, PDF)
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-4 border-t border-neutral-200/60">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-neutral-950">Horaires d&apos;ouverture</div>
                  <div className="text-neutral-600 mt-0.5">
                    Du lundi au vendredi : 08h00 - 12h00 / 14h00 - 18h00
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    Visite d&apos;atelier sur rendez-vous
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <PhotoPlaceholder
                title="façade d'atelier ou bureau d'accueil client à Rumilly"
                category="atelier"
                pageName="Contact"
                photoRef="PHOTO-CONT-01"
                aspectRatio="16/9"
                description="Entrée de l'atelier BSM Usinage avec signalétique professionnelle."
              />
              <PhotoPlaceholder
                title="étude d'un plan mécanique à l'atelier"
                category="conception"
                pageName="Contact"
                photoRef="PHOTO-CONT-02"
                aspectRatio="16/9"
                description="Échange technique autour des plans et de pièces prototypes chez BSM Usinage."
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-neutral-50 border border-neutral-200/80">
              <div className="mb-8">
                <h2 className="text-2xl font-light text-neutral-950 tracking-tight">
                  Formulaire de contact &amp; devis
                </h2>
                <p className="text-xs text-neutral-500 mt-1">
                  Transmettez votre demande pour recevoir une confirmation de faisabilité et un chiffrage.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-white border border-neutral-200 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-neutral-900 mx-auto" />
                  <h3 className="text-lg font-medium text-neutral-950">
                    Demande transmise à BSM Usinage
                  </h3>
                  <p className="text-xs text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Merci pour votre message. L&apos;équipe BSM Usinage étudie vos éléments techniques et reprend contact avec vous rapidement.
                  </p>
                  <p className="text-xs font-semibold text-neutral-950 pt-2">
                    Pour toute urgence mécanique : {siteConfig.phone.display}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2.5 rounded-full border border-neutral-300 text-xs text-neutral-700 hover:text-neutral-950"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Alexandre Martin"
                        className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-200 text-neutral-900 text-xs focus:outline-none focus:border-neutral-950"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                        Entreprise / Écurie (Optionnel)
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Ex: Team Racing 74"
                        className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-200 text-neutral-900 text-xs focus:outline-none focus:border-neutral-950"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Ex: 06 00 00 00 00"
                        className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-200 text-neutral-900 text-xs focus:outline-none focus:border-neutral-950"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Ex: alexandre@exemple.fr"
                        className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-200 text-neutral-900 text-xs focus:outline-none focus:border-neutral-950"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                      Type de prestation
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-200 text-neutral-900 text-xs focus:outline-none focus:border-neutral-950"
                    >
                      <option value="usinage-sur-mesure">Usinage de précision sur mesure</option>
                      <option value="tournage-cnc">Tournage CNC (pièces de révolution)</option>
                      <option value="fraisage-cnc">Fraisage CNC multi-axes</option>
                      <option value="sports-mecaniques">Pièce pour sports mécaniques / compétition</option>
                      <option value="jantes-alu">Jantes aluminium sur mesure</option>
                      <option value="soudure">Soudure technique TIG / MIG</option>
                      <option value="conception-cao">Études techniques &amp; conception 3D</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                      Détails de la demande &amp; tolérances souhaitées *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Précisez le nombre de pièces, le matériau souhaité (aluminium, acier, inox...), les cotes critiques et vos impératifs de délais..."
                      className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-200 text-neutral-900 text-xs focus:outline-none focus:border-neutral-950 resize-y"
                    />
                  </div>

                  <div className="p-4 rounded-lg bg-white border border-neutral-200 text-xs text-neutral-600 flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-neutral-800 shrink-0 mt-0.5" />
                    <span>
                      <strong>Envoi de fichiers volumineux (STEP, IGES, PDF) :</strong> Mentionnez-le dans votre message ou adressez vos fichiers directement par e-mail à <span className="font-medium text-neutral-950">{siteConfig.email.display}</span> après soumission.
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-neutral-950 text-white font-medium text-xs tracking-wider uppercase hover:bg-neutral-800 transition-colors shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmettre votre demande à BSM Usinage</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
