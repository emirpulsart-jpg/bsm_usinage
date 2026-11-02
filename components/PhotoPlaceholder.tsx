import React from 'react';

interface PhotoPlaceholderProps {
  title: string; // e.g. "soudure en atelier"
  category?: "soudure" | "jantes" | "usinage" | "sports-mecaniques" | "atelier" | "conception";
  pageName: string;
  photoRef?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "21/9" | "3/2";
  description?: string;
  className?: string;
}

export function PhotoPlaceholder({
  title,
  pageName,
  photoRef,
  aspectRatio = "16/9",
  description,
  className = "",
}: PhotoPlaceholderProps) {
  const aspectClass = {
    "16/9": "aspect-[16/9]",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "21/9": "aspect-[21/9]",
    "3/2": "aspect-[3/2]",
  }[aspectRatio] || "aspect-[16/9]";

  return (
    <div
      className={`relative group overflow-hidden bg-neutral-50 border border-neutral-200 hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between p-6 sm:p-8 rounded-lg ${aspectClass} ${className}`}
      aria-label={`Emplacement réservé : PHOTO À AJOUTER : ${title}`}
    >
      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between text-[11px] text-neutral-400">
        <span className="font-medium text-neutral-500">
          {photoRef || "Emplacement photo"}
        </span>
        <span className="text-neutral-400">
          {pageName}
        </span>
      </div>

      {/* Center Question Mark & Exact Title */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto py-2 text-center">
        <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-white border border-neutral-200 group-hover:border-neutral-300 transition-colors mb-4 shadow-sm">
          <span className="font-serif text-2xl sm:text-3xl text-neutral-700 font-light select-none">
            ?
          </span>
        </div>

        <div className="max-w-md">
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-neutral-900 uppercase">
            PHOTO À AJOUTER : <span className="font-normal text-neutral-600">{title}</span>
          </p>
          {description && (
            <p className="text-xs text-neutral-500 mt-1.5 line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Bottom Technical Note */}
      <div className="relative z-10 pt-3 border-t border-neutral-200/70 flex items-center justify-between text-[11px] text-neutral-400">
        <span>Cliché réel atelier BSM Usinage</span>
        <span>Format {aspectRatio}</span>
      </div>
    </div>
  );
}
