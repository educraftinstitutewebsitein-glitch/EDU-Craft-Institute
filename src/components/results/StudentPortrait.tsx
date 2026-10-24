"use client";

import { useState } from "react";
import Image from "next/image";
import { User } from "lucide-react";

interface StudentPortraitProps {
  photoPath?: string;
  name: string;
  initials: string;
}

export default function StudentPortrait({
  photoPath,
  name,
  initials,
}: StudentPortraitProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full aspect-[4/5] bg-gradient-to-b from-[#f2efe9] to-[#e4decb] overflow-hidden group">
      {photoPath && !hasError ? (
        <Image
          src={photoPath}
          alt={`Photograph of ${name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          onError={() => setHasError(true)}
        />
      ) : (
        /* Tasteful Branded Placeholder with Person Icon and 'Photo Coming Soon' */
        <div className="absolute inset-0 flex flex-col items-center justify-between p-6 bg-gradient-to-b from-[#243A5B] to-[#17253a] text-white">
          <div className="w-full flex items-center justify-between text-[10px] tracking-widest text-[#C5A059] font-bold uppercase">
            <span>EDU-CRAFT</span>
            <span>ACHIEVER</span>
          </div>

          <div className="flex flex-col items-center text-center my-auto">
            {/* Monogram circle with icon badge */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/10 border border-[#C5A059]/40 backdrop-blur-md flex items-center justify-center mb-3 shadow-lg group-hover:scale-105 transition-transform duration-500">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-wider text-white">
                {initials}
              </span>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#C5A059] text-[#243A5B] flex items-center justify-center shadow-md">
                <User className="w-4 h-4" />
              </div>
            </div>
            <div className="text-xs font-semibold tracking-wider text-[#B2C1D9] max-w-[180px] leading-snug">
              {name}
            </div>
          </div>

          {/* Standardized Requirement Text */}
          <div className="w-full text-center py-2 px-3 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest text-[#C5A059] uppercase">
            Photo Coming Soon
          </div>
        </div>
      )}

      {/* Subtle overlay vignette on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}
