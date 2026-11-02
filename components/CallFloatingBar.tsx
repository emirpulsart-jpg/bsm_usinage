'use client';

import React from 'react';
import { Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function CallFloatingBar() {
  return (
    <>
      {/* Mobile Fixed Bottom Call Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-neutral-200 px-4 py-3 shadow-lg">
        <a
          href={`tel:${siteConfig.phone.raw}`}
          className="flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-lg bg-neutral-950 text-white font-medium text-xs tracking-wider uppercase shadow-md active:scale-[0.99] transition-all"
          aria-label={`Appeler BSM Usinage : ${siteConfig.phone.display}`}
        >
          <Phone className="w-4 h-4 fill-current stroke-none text-[#C5A059]" />
          <span>Appeler BSM Usinage • {siteConfig.phone.display}</span>
        </a>
      </div>

      {/* Desktop Floating Call Dock */}
      <div className="hidden md:flex fixed bottom-8 right-8 z-40 items-center">
        <a
          href={`tel:${siteConfig.phone.raw}`}
          className="group flex items-center gap-3.5 bg-neutral-950 text-white py-3 px-5 rounded-full shadow-2xl hover:bg-neutral-800 transition-all duration-300 border border-neutral-800"
          aria-label={`Appeler BSM Usinage au ${siteConfig.phone.display}`}
        >
          <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Phone className="w-3.5 h-3.5 fill-current stroke-none text-[#C5A059]" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">
              Une question ? Un projet ?
            </span>
            <span className="text-xs font-semibold tracking-wide text-white">
              Appeler l&apos;atelier : <span className="text-[#C5A059]">{siteConfig.phone.display}</span>
            </span>
          </div>
        </a>
      </div>
    </>
  );
}
