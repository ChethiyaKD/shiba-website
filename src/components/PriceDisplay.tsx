'use client';

import React from 'react';
import Image from 'next/image';

const PriceDisplay = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="relative w-12 h-12">
          <Image 
            src="/shiba-logo.svg" 
            alt="Shiba" 
            fill
            className="object-contain"
          />
        </div>
        <h1 className="text-3xl font-bold text-white tracking-wide">SHIBA TRACKER</h1>
      </div>
      <div className="text-5xl font-bold text-white tracking-tight">
        $0.00002471
      </div>
    </div>
  );
};

export default PriceDisplay; 