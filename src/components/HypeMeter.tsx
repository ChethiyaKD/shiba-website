'use client';

import React from 'react';

const HypeMeter = () => {
  return (
    <div className="bg-[#1a1f2e] rounded-2xl p-6 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">Hype Meter</h2>
        <span className="text-white text-sm">High</span>
      </div>
      <div className="h-2 bg-[#151922] rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-orange-500 to-orange-400" 
          style={{ width: '85%' }}
        />
      </div>
    </div>
  );
};

export default HypeMeter; 